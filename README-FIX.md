# Mawsooq AI + WhatsApp fix patch — 2026-09-20

## What this patch changes

- Adds more suggested-question buttons in English and Arabic.
- Adds a WhatsApp CTA directly inside every assistant message.
- Adds dynamic 3-4 next-question suggestions returned by Gemini after every answer.
- Adds `/api/integration-status` to verify that the live deployment can actually see the Vercel environment variables and reach the Apps Script webhook.

## Critical deployment step

The environment variables were added in Vercel after the currently-running production deployment was created. Vercel server functions receive environment variables at deployment/build time. Redeploy Production after saving the variables.

After redeploying, open:

https://mawsouq.com/api/integration-status

Expected shape:

```json
{
  "ok": true,
  "geminiKeyConfigured": true,
  "geminiModel": "gemini-3.8-flash",
  "sheetsWebhookConfigured": true,
  "leadWebhookSecretConfigured": true,
  "sheetsWebhookReachable": true,
  "sheetsWebhookService": "Mawsooq WhatsApp Lead Logger"
}
```

If any configured field is false, the live deployment does not have that Vercel environment variable.
If `sheetsWebhookReachable` is false while `sheetsWebhookConfigured` is true, check the Apps Script deployment/access or webhook URL.

## Files to replace/add

- `components/ai/MawsooqChatbot.jsx`
- `app/api/mawsooq-ai/route.js`
- `app/api/integration-status/route.js` (new)

No npm installation is required.
