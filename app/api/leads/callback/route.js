import { NextResponse } from "next/server";

// Call-back request form → same Google Sheet as WhatsApp clicks.
// Works with the already-deployed Apps Script (no redeploy needed): the visitor's
// details go in "Chat Summary" and "WhatsApp URL" holds a wa.me link to the
// visitor so the team can message them in one click.

const REFERENCE_RE = /^MSQ-\d{6}-[A-Z0-9]{6}$/;

function text(value, max = 600) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, max);
}

function normalizePhone(raw) {
  // Convert Arabic-Indic / Persian digits, keep digits and a leading +.
  const western = String(raw || "")
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
  let digits = western.replace(/[^\d]/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  // Local Saudi mobile 05XXXXXXXX → 9665XXXXXXXX
  if (/^05\d{8}$/.test(digits)) digits = `966${digits.slice(1)}`;
  // Local Egyptian mobile 01XXXXXXXXX → 201XXXXXXXXX
  if (/^01\d{9}$/.test(digits)) digits = `20${digits.slice(1)}`;
  return digits;
}

function isAllowedPageUrl(raw) {
  try {
    const url = new URL(raw);
    return ["mawsouq.com", "www.mawsouq.com", "localhost"].includes(url.hostname);
  } catch {
    return false;
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (text(body.website)) {
    return NextResponse.json({ ok: true }, { status: 202 });
  }

  const reference = text(body.reference, 32).toUpperCase();
  const name = text(body.name, 80);
  const phone = normalizePhone(body.phone);
  const city = text(body.city, 60);
  const project = text(body.project, 400);

  if (!REFERENCE_RE.test(reference) || !isAllowedPageUrl(body.page_url)) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  if (!name || phone.length < 9 || phone.length > 15) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const summary = [
    "📞 طلب اتصال (نموذج الموقع)",
    `الاسم: ${name}`,
    `الجوال: +${phone}`,
    city ? `المدينة: ${city}` : "",
    project ? `المشروع: ${project}` : "",
  ]
    .filter(Boolean)
    .join(" | ");

  const payload = {
    secret: process.env.LEAD_WEBHOOK_SECRET || "",
    timestamp: new Date().toISOString(),
    reference,
    page_url: text(body.page_url, 1600),
    page_path: text(body.page_path, 500),
    page_title: text(body.page_title, 500),
    placement: "callback_form",
    language: text(body.language, 20),
    device: text(body.device, 30),
    screen: text(body.screen, 40),
    referrer: text(body.referrer, 1600),
    first_page: text(body.first_page, 1600),
    utm_source: text(body.utm_source, 200),
    utm_medium: text(body.utm_medium, 200),
    utm_campaign: text(body.utm_campaign, 300),
    utm_term: text(body.utm_term, 300),
    utm_content: text(body.utm_content, 300),
    chat_summary: summary.slice(0, 1600),
    ai_ready: true,
    whatsapp_url: `https://wa.me/${phone}`,
    status: "Callback Requested",
  };

  const webhook = String(process.env.GOOGLE_SHEETS_WEBHOOK_URL || "").trim();
  if (!webhook || !process.env.LEAD_WEBHOOK_SECRET) {
    console.error("CALLBACK LEAD NOT SAVED (Sheets webhook missing):", summary, reference);
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const raw = await response.text();
    let result = null;
    try {
      result = JSON.parse(raw);
    } catch {}
    if (!response.ok || !result?.ok) {
      throw new Error(`Webhook ${response.status}: ${String(raw).slice(0, 180)}`);
    }
    return NextResponse.json({ ok: true, reference }, { status: 200 });
  } catch (error) {
    // Keep the lead in the server logs so it is never silently lost.
    console.error("CALLBACK LEAD NOT SAVED:", summary, reference, error);
    return NextResponse.json({ ok: false, error: "save_failed" }, { status: 502 });
  }
}
