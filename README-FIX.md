# Mawsooq final chatbot + integration fix

Replace the files in this ZIP at the same paths, then redeploy Vercel Production.

## UI fixes
- Chat scrolling is isolated from Lenis/smooth-page scrolling using `data-lenis-prevent` + nested wheel/touch handling.
- Chat vertical scrollbar uses Mawsooq blue instead of the browser gray.
- Suggestions are one horizontal row directly under each assistant WhatsApp CTA and scroll left/right with a blue scrollbar.
- Initial assistant message has 10 quick suggestions; later AI responses can return up to 6 contextual suggestions.
- Phone, WhatsApp, and AI are now one right-side floating stack in this exact order: Phone -> WhatsApp -> AI. This removes the old separate floating-contact components to prevent duplicates.

## AI reliability fix
- Keeps the configured GEMINI_MODEL as the first choice.
- Automatically falls back to `gemini-3.1-flash-lite` and then `gemini-3.8-flash` if a model call fails.
- Simplifies the Gemini request and removes the optional thinking config to reduce request incompatibilities.
- Returns safe per-model attempt diagnostics on total failure; never exposes the API key.

## Google Sheets status
Your screenshot already proves the Vercel env variables are loaded. `sheetsWebhookReachable:false` means the Apps Script web app itself is not publicly reachable from Vercel (or the /exec URL is not the exact deployed URL).

Apps Script deployment MUST be:
- Execute as: Me
- Who has access: Anyone

Then copy the exact deployed URL ending `/exec` into `GOOGLE_SHEETS_WEBHOOK_URL` and redeploy Vercel.

After redeploy open:
https://mawsouq.com/api/integration-status/

The target is:
- geminiApiReachable: true
- sheetsWebhookReachable: true
- sheetsWebhookService: "Mawsooq WhatsApp Lead Logger"

No npm install is required.

## Recommended Vercel model value
Set:
`GEMINI_MODEL=gemini-3.1-flash-lite`

The route still falls back automatically, but using Flash-Lite first avoids wasting time on a failing 3.8 request and is a better fit for this short website assistant.
