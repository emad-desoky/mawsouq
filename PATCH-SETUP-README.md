# Mawsooq SEO + AI + WhatsApp Lead Tracking Patch

## Apply

Copy the contents of this ZIP over the matching paths in the existing Mawsooq project.

No new npm package was added. The implementation uses the project's existing Next.js/React/Lucide dependencies plus native `fetch`.

## Required environment variables

Copy the relevant values from `.env.example` into Vercel Project Settings -> Environment Variables:

```env
GEMINI_API_KEY=YOUR_FRESH_SERVER_SIDE_KEY
GEMINI_MODEL=gemini-3.8-flash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
LEAD_WEBHOOK_SECRET=YOUR_LONG_RANDOM_SECRET
```

Never use `NEXT_PUBLIC_` for these values.

## Google Sheet

A native Google Sheet named **Mawsooq WhatsApp Leads** has already been created in the connected Drive under the `ChatGPT` folder.

To make live website submissions reach that Sheet, deploy the included `integrations/google-sheets/Code.gs` once as described in `integrations/google-sheets/README.md`.

## WhatsApp reference flow

All website WhatsApp anchors are intercepted centrally. On click:

1. Browser generates `MSQ-YYMMDD-XXXXXX`.
2. The reference is appended to the existing prefilled WhatsApp message.
3. The website posts the same reference and attribution to `/api/leads/whatsapp`.
4. The server forwards the event to Apps Script using the shared secret.
5. Apps Script appends it to the Google Sheet.
6. If the visitor sends the WhatsApp message, the same reference appears in the conversation.

Example:

```text
Hello Mawsooq, I would like to discuss my villa project.

Mawsooq Reference: MSQ-260920-A1B2C3
```

## AI assistant

- English and Arabic layouts both load `MawsooqChatbot`.
- Gemini requests are made only from `/api/mawsooq-ai`.
- The API key is not exposed to the browser.
- The chatbot passes only the visitor-supplied project summary into the WhatsApp handoff.

## New English SEO URLs

- https://mawsouq.com/en/blog/house-finishing-cost-saudi-arabia/
- https://mawsouq.com/en/blog/shell-construction-cost-saudi-arabia/
- https://mawsouq.com/en/blog/construction-supervision-cost-saudi-arabia/
- https://mawsouq.com/en/blog/bill-of-quantities-saudi-arabia/
- https://mawsouq.com/en/blog/construction-material-prices-saudi-arabia/

The existing dynamic blog data/hub/sitemap architecture automatically includes these pages after `seoGrowthClusters` is added to `allClusters`.

## Existing English pages with metadata refresh

- https://mawsouq.com/en/blog/construction-cost-per-square-meter-saudi-arabia/
- https://mawsouq.com/en/blog/villa-construction-cost-saudi-arabia/
- https://mawsouq.com/en/blog/building-permit-saudi-arabia/
- https://mawsouq.com/en/blog/cost-to-build-two-story-house-saudi-arabia/

A permanent redirect was also added from `/en/blog/build-saudi-arabia` to the canonical pillar URL.

## QA notes

- JavaScript syntax checks passed for the API routes, blog data modules, tracking module and Next config.
- Five new article content lengths passed the cluster-depth check: 1,342–1,659 words each.
- The Google Sheet was created as a native Sheet, frozen/filterable header added, Cairo timezone applied, and lead-status validation added.
- A full `npm ci`/Next build could not complete inside the execution container because dependency installation exceeded the container timeout. No new npm dependency is required by this patch.
