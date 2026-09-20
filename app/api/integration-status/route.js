import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function cleanError(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 260);
}

async function checkSheetsWebhook(webhook) {
  if (!webhook) return { reachable: false, status: null, service: "", error: "Webhook URL is missing." };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(webhook, { method: "GET", cache: "no-store", redirect: "follow", signal: controller.signal });
    clearTimeout(timeout);
    const contentType = response.headers.get("content-type") || "";
    const raw = await response.text();
    let data = null;
    try { data = JSON.parse(raw); } catch {}

    return {
      reachable: response.ok && Boolean(data?.ok),
      status: response.status,
      service: String(data?.service || "").slice(0, 120),
      contentType: contentType.slice(0, 120),
      error: response.ok && data?.ok ? "" : cleanError(data?.error || raw || `HTTP ${response.status}`),
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      reachable: false,
      status: null,
      service: "",
      contentType: "",
      error: error?.name === "AbortError" ? "Webhook request timed out." : cleanError(error?.message || error),
    };
  }
}

async function checkGeminiModel(model) {
  if (!process.env.GEMINI_API_KEY) {
    return { reachable: false, status: null, model, error: "Gemini key is missing." };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}`,
      {
        headers: { "x-goog-api-key": process.env.GEMINI_API_KEY },
        cache: "no-store",
        signal: controller.signal,
      },
    );
    clearTimeout(timeout);
    const raw = await response.text();
    let data = null;
    try { data = JSON.parse(raw); } catch {}
    return {
      reachable: response.ok,
      status: response.status,
      model,
      resolvedModel: String(data?.name || "").replace(/^models\//, ""),
      error: response.ok ? "" : cleanError(data?.error?.message || raw),
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      reachable: false,
      status: null,
      model,
      resolvedModel: "",
      error: error?.name === "AbortError" ? "Gemini check timed out." : cleanError(error?.message || error),
    };
  }
}

export async function GET() {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  const configuredModel = process.env.GEMINI_MODEL || "gemini-3.8-flash";
  const [sheets, gemini] = await Promise.all([
    checkSheetsWebhook(webhook),
    checkGeminiModel(configuredModel),
  ]);

  return NextResponse.json(
    {
      ok: true,
      geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
      geminiModel: configuredModel,
      geminiApiReachable: gemini.reachable,
      geminiHttpStatus: gemini.status,
      geminiResolvedModel: gemini.resolvedModel || "",
      geminiError: gemini.error || "",
      sheetsWebhookConfigured: Boolean(webhook),
      leadWebhookSecretConfigured: Boolean(process.env.LEAD_WEBHOOK_SECRET),
      sheetsWebhookReachable: sheets.reachable,
      sheetsWebhookHttpStatus: sheets.status,
      sheetsWebhookService: sheets.service,
      sheetsWebhookContentType: sheets.contentType || "",
      sheetsWebhookError: sheets.error || "",
      fixes: {
        sheets: sheets.reachable
          ? "OK"
          : "Apps Script must be deployed as a Web app with Execute as: Me and Who has access: Anyone. Also verify the exact /exec URL in Vercel.",
        gemini: gemini.reachable
          ? "API key and configured model are reachable. The chat route also automatically falls back to gemini-3.1-flash-lite if generation on the configured model fails."
          : "Verify the Gemini API key belongs to an active Google AI Studio project and that the model is enabled for that project.",
      },
      note: "No secret values are returned by this endpoint.",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
