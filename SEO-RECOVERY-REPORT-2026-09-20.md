# Mawsooq SEO Recovery + Lead Generation Report — 20 Sep 2026

## 1. What the GSC export says

Source: the user-supplied Google Search Console export ending 18 Sep 2026.

| Metric | Previous 28 days (25 Jul–21 Aug) | Latest 28 days (22 Aug–18 Sep) | Change |
|---|---:|---:|---:|
| Clicks | 440 | 354 | -19.5% |
| Impressions | 55,917 | 42,004 | -24.9% |
| CTR | 0.79% | 0.84% | improved |
| Weighted avg. position | 6.92 | 7.45 | ~0.54 positions worse |

### Diagnosis

The sitewide decline is primarily a **visibility/impression decline plus a modest ranking decline**, not a sitewide CTR collapse. CTR actually improved slightly. The recovery strategy therefore should not be “rewrite every title” or “publish as much as possible”. It should focus on:

1. protecting pages that already rank;
2. increasing query coverage with non-overlapping clusters;
3. improving weak snippets only where GSC shows opportunity;
4. strengthening internal topic flow around the English construction pillar;
5. measuring which page/CTA actually produces a WhatsApp conversation.

Google also rolled out an **August 2026 spam update from 18 Aug to 21 Aug 2026**, globally and across languages. The latest 28-day comparison begins immediately after that rollout. That timing is worth monitoring, but the GSC export alone does **not** prove the update caused Mawsooq's decline. Official status source: https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE

## 2. High-opportunity existing English pages

The strongest English opportunity in the supplied page export is:

- `/en/blog/construction-cost-per-square-meter-saudi-arabia/` — 8,001 impressions, 60 clicks, 0.75% CTR, average position 6.03.
- `/en/blog/building-permit-saudi-arabia/` — 1,381 impressions, 8 clicks, 0.58% CTR, average position 8.94.
- `/en/blog/villa-construction-cost-saudi-arabia/` — 828 impressions, 8 clicks, 0.97% CTR, average position 5.76.
- `/en/blog/cost-to-build-two-story-house-saudi-arabia/` — 282 impressions, 0 clicks, average position 3.86.

This patch refreshes the metadata on those pages without replacing their core content or changing their URLs.

It also adds a permanent redirect for the stray indexed URL `/en/blog/build-saudi-arabia` to the canonical pillar `/en/blog/build-a-house-saudi-arabia/`.

## 3. New English cluster ownership — no intentional cannibalization

Parent pillar: `/en/blog/build-a-house-saudi-arabia/`

| New URL | Query ownership | Intent boundary |
|---|---|---|
| `/en/blog/house-finishing-cost-saudi-arabia/` | house finishing cost Saudi Arabia | finishing packages after shell; does not own whole-house construction cost |
| `/en/blog/shell-construction-cost-saudi-arabia/` | shell / grey-structure construction cost | structural shell scope; does not own finishing or turnkey intent |
| `/en/blog/construction-supervision-cost-saudi-arabia/` | construction supervision cost | consultant/supervision fee and scope intent |
| `/en/blog/bill-of-quantities-saudi-arabia/` | bill of quantities Saudi Arabia | BOQ preparation, measurement and tender comparison intent |
| `/en/blog/construction-material-prices-saudi-arabia/` | construction material prices Saudi Arabia | material-rate sourcing/procurement intent, not installed total construction cost |

Each new article is approximately 1,342–1,659 words and links up to the parent pillar and into relevant sibling/commercial content.

## 4. What changed to improve CTR without destabilizing winners

The patch changes metadata only on the main English pages where GSC showed a clear opportunity:

- construction cost per m²: makes the title more query-like and explicitly 2026-price oriented;
- villa construction cost: makes the title shorter and more query-aligned;
- building permit: moves the exact permit intent to the front and emphasizes steps/requirements;
- two-story cost: matches the actual “cost to build” formulation and clarifies 2026 intent.

No URL changes were made to those ranking pages.

## 5. Why the 22 WhatsApp leads were irregular

The supplied lead timeline shows bursts rather than a steady daily flow. That cannot be diagnosed accurately from message counts alone because until now the site did not record the complete chain:

`landing page -> CTA placement -> WhatsApp click -> actual WhatsApp message`

The patch fixes the measurable part of that chain.

Every WhatsApp click now receives a unique reference such as:

`MSQ-260920-A1B2C3`

The exact same reference is:

1. added to the prefilled WhatsApp message, and
2. recorded in the Google Sheet with page, CTA, device, referrer, first-touch page and UTMs.

This means future lead analysis can answer questions such as:

- Which blog generated the click?
- Which CTA generated it?
- Was the user mobile or desktop?
- Did the session come from a UTM campaign?
- Did the visitor qualify themselves through the AI chatbot first?
- Which Sheet row matches the real WhatsApp conversation?

Important: a click is not the same as a sent WhatsApp message. A row is intentionally created at click time. If the visitor actually sends the message, the Mawsooq reference in the conversation lets the team match it to the row and change the status to Contacted / Qualified / Proposal Sent / Won / Lost.

## 6. AI chatbot implementation

The patch adds a bilingual Arabic/English website assistant using the Gemini API server-side.

Default model: `gemini-3.8-flash`.

As of 20 Sep 2026 Google documents this as a stable production model and its pricing page shows free-tier input/output availability subject to free-tier limits. The API key stays in `GEMINI_API_KEY`; it is never shipped in client JavaScript.

The assistant is instructed to:

- answer in the visitor's language;
- explain Mawsooq services without inventing claims;
- qualify project type, city, area/floors, stage, required service, timing and budget only when useful;
- avoid asking for IDs, payment details, passwords or unnecessary personal data;
- never invent fixed prices or approvals;
- produce a concise WhatsApp handoff message once enough project context exists;
- send the AI lead summary into the same WhatsApp click record in the Sheet.

## 7. Google Sheet fields

The connected Drive now contains a native **Mawsooq WhatsApp Leads** Sheet with:

- Timestamp
- Reference
- Page URL / Path / Title
- CTA Placement
- Language
- Device / Screen
- Referrer / First Page
- UTM Source / Medium / Campaign / Term / Content
- Chat Summary
- AI Ready
- WhatsApp URL
- Status
- Notes

The status column includes a dropdown workflow: Clicked WhatsApp, Contacted, Qualified, Proposal Sent, Won, Lost.

## 8. One-time deployment steps required

### Vercel environment variables

Add:

- `GEMINI_API_KEY` — use a fresh server-side Gemini API key.
- `GEMINI_MODEL=gemini-3.8-flash`
- `GOOGLE_SHEETS_WEBHOOK_URL` — the Apps Script `/exec` URL.
- `LEAD_WEBHOOK_SECRET` — a long random secret shared only by Vercel and Apps Script.

Because an API key was pasted into chat, rotate it before production instead of hard-coding that exposed value into the repository.

### Apps Script bridge

The connected Google Drive/Sheets integration can create and edit the Sheet, but it cannot deploy an Apps Script web app. The patch therefore includes `integrations/google-sheets/Code.gs` and exact deployment steps in `integrations/google-sheets/README.md`.

Once that one-time Apps Script deployment is complete, the website POST route will append rows directly to the Sheet.

## 9. Post-deploy monitoring

For the next 28 days, review weekly:

1. GSC impressions/clicks/position for the four refreshed existing English pages.
2. Indexation and first queries for all five new cluster URLs.
3. Sheet rows by `Page Path` and `CTA Placement`.
4. `Clicked WhatsApp -> Contacted -> Qualified -> Won` conversion by landing page.
5. AI-chatbot WhatsApp handoffs versus normal CTA handoffs.

Do not add another batch of near-identical construction-cost articles until Search Console shows which of these new intents Google is rewarding.
