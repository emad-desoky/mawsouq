import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function cleanError(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 300);
}

function modelCandidates() {
  const configured = String(process.env.GEMINI_MODEL || "").trim();
  return [
    ...new Set(
      [
        configured,
        "gemini-3.1-flash-lite",
        "gemini-2.5-flash-lite",
        "gemini-2.5-flash",
        "gemini-3.8-flash",
        "gemini-3-flash-preview",
      ].filter(Boolean),
    ),
  ];
}

async function checkSheetsWebhook(webhook) {
  if (!webhook) return { reachable: false, status: null, service: "", error: "Webhook URL is missing." };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch(webhook, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const contentType = response.headers.get("content-type") || "";
    const raw = await response.text();
    let data = null;
    try {
      data = JSON.parse(raw);
    } catch {}

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

async function probeGeminiModel(model) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: "Reply with OK only." }] }],
          generationConfig: { temperature: 0, maxOutputTokens: 12 },
        }),
        cache: "no-store",
        signal: controller.signal,
      },
    );

    clearTimeout(timeout);
    const raw = await response.text();
    let data = null;
    try {
      data = JSON.parse(raw);
    } catch {}

    const text = (data?.candidates?.[0]?.content?.parts || [])
      .filter((part) => !part?.thought)
      .map((part) => part?.text || "")
      .join("")
      .trim();

    return {
      model,
      reachable: response.ok && Boolean(text),
      status: response.status,
      response: response.ok ? text.slice(0, 60) : "",
      error: response.ok ? (text ? "" : "Model returned no text.") : cleanError(data?.error?.message || raw),
    };
  } catch (error) {
    clearTimeout(timeout);
    return {
      model,
      reachable: false,
      status: null,
      response: "",
      error: error?.name === "AbortError" ? "Generation probe timed out." : cleanError(error?.message || error),
    };
  }
}

async function checkGeminiGeneration() {
  if (!process.env.GEMINI_API_KEY) {
    return {
      reachable: false,
      workingModel: "",
      attempts: [],
      error: "Gemini key is missing.",
    };
  }

  const attempts = [];
  for (const model of modelCandidates()) {
    const attempt = await probeGeminiModel(model);
    attempts.push(attempt);
    if (attempt.reachable) {
      return {
        reachable: true,
        workingModel: model,
        attempts,
        error: "",
      };
    }
  }

  return {
    reachable: false,
    workingModel: "",
    attempts,
    error: attempts[0]?.error || "No Gemini Flash model accepted the generation request.",
  };
}

export async function GET() {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  const configuredModel = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";
  const [sheets, gemini] = await Promise.all([checkSheetsWebhook(webhook), checkGeminiGeneration()]);

  return NextResponse.json(
    {
      ok: true,
      geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
      geminiConfiguredModel: configuredModel,
      geminiGenerationReachable: gemini.reachable,
      geminiWorkingModel: gemini.workingModel,
      geminiAttempts: gemini.attempts,
      geminiError: gemini.error,
      sheetsWebhookConfigured: Boolean(webhook),
      leadWebhookSecretConfigured: Boolean(process.env.LEAD_WEBHOOK_SECRET),
      sheetsWebhookReachable: sheets.reachable,
      sheetsWebhookHttpStatus: sheets.status,
      sheetsWebhookService: sheets.service,
      sheetsWebhookContentType: sheets.contentType || "",
      sheetsWebhookError: sheets.error || "",
      note: "This diagnostic endpoint never returns secret values. The Gemini check performs a tiny live generation request so it tests real chat access, not only model metadata.",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
