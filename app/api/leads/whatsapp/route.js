import { NextResponse } from "next/server";

const MAX_FIELD = 1600;
const REFERENCE_RE = /^MSQ-\d{6}-[A-Z0-9]{6}$/;

function text(value, max = MAX_FIELD) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim().slice(0, max);
}

function safeBoolean(value) {
  return value === true || value === "true";
}

function isAllowedPageUrl(raw) {
  if (!raw) return false;
  try {
    const url = new URL(raw);
    return url.hostname === "mawsouq.com" || url.hostname === "www.mawsouq.com" || url.hostname === "localhost";
  } catch {
    return false;
  }
}

function isWhatsAppUrl(raw) {
  try {
    const url = new URL(raw);
    return ["wa.me", "api.whatsapp.com", "www.whatsapp.com"].includes(url.hostname);
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

  const reference = text(body.reference, 32).toUpperCase();
  if (!REFERENCE_RE.test(reference)) {
    return NextResponse.json({ ok: false, error: "Invalid lead reference" }, { status: 400 });
  }

  if (!isAllowedPageUrl(body.page_url) || !isWhatsAppUrl(body.whatsapp_url)) {
    return NextResponse.json({ ok: false, error: "Invalid lead destination" }, { status: 400 });
  }

  const payload = {
    secret: process.env.LEAD_WEBHOOK_SECRET || "",
    timestamp: new Date().toISOString(),
    reference,
    page_url: text(body.page_url),
    page_path: text(body.page_path, 500),
    page_title: text(body.page_title, 500),
    placement: text(body.placement, 120),
    language: text(body.language, 20),
    device: text(body.device, 30),
    screen: text(body.screen, 40),
    referrer: text(body.referrer),
    first_page: text(body.first_page),
    utm_source: text(body.utm_source, 200),
    utm_medium: text(body.utm_medium, 200),
    utm_campaign: text(body.utm_campaign, 300),
    utm_term: text(body.utm_term, 300),
    utm_content: text(body.utm_content, 300),
    chat_summary: text(body.chat_summary, 1600),
    ai_ready: safeBoolean(body.ai_ready),
    whatsapp_url: text(body.whatsapp_url),
  };

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook || !process.env.LEAD_WEBHOOK_SECRET) {
    console.warn("WhatsApp lead captured but Google Sheets webhook is not configured", reference);
    return NextResponse.json({ ok: true, reference, logged: false }, { status: 202 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Lead webhook returned ${response.status}`);
    }

    const webhookResult = await response.json().catch(() => null);
    if (!webhookResult?.ok) {
      throw new Error(`Lead webhook rejected ${reference}`);
    }

    return NextResponse.json({ ok: true, reference, logged: true }, { status: 202 });
  } catch (error) {
    console.error("Google Sheets lead logging failed", reference, error);
    // Never block the visitor's WhatsApp handoff because analytics failed.
    return NextResponse.json({ ok: true, reference, logged: false }, { status: 202 });
  }
}
