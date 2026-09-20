import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";
  let sheetsWebhookReachable = false;
  let sheetsWebhookService = "";

  if (webhook) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      const response = await fetch(webhook, {
        method: "GET",
        cache: "no-store",
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (response.ok) {
        const data = await response.json().catch(() => null);
        sheetsWebhookReachable = Boolean(data?.ok);
        sheetsWebhookService = String(data?.service || "").slice(0, 120);
      }
    } catch {
      sheetsWebhookReachable = false;
    }
  }

  return NextResponse.json(
    {
      ok: true,
      geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
      geminiModel: process.env.GEMINI_MODEL || "gemini-3.8-flash",
      sheetsWebhookConfigured: Boolean(webhook),
      leadWebhookSecretConfigured: Boolean(process.env.LEAD_WEBHOOK_SECRET),
      sheetsWebhookReachable,
      sheetsWebhookService,
      note: "This endpoint never returns secret values.",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
