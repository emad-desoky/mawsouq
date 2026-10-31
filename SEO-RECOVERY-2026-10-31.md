# SEO recovery + leads — 31 Oct 2026

## Why traffic dropped (from Search Console + git history)

Google impressions fell from ~2,250/day (mid-Aug) to ~850/day (Oct). The pages that lost
traffic are the ones that were **rewritten or surrounded by new generated pages**; the
legacy pages nobody touched held steady.

| Page | What happened in git | Search Console |
|---|---|---|
| /التصميم-المعماري/ | 26 Aug: original article replaced by a templated "2026" article | 22 clicks → 0, position ~14 |
| /بناء-فلة/ | 26 Aug: replaced | 2,119 → 490 impressions, position ~14 |
| /تصميم-انشائي/ | 26 Aug: replaced | sliding |
| /ايجاد-مهندس-انشائي/ | 26 Aug: replaced | position ~11 |
| /افضل-مكتب-هندسي-بالدمام/ | 26 Aug: replaced | 12 clicks → 0 |
| /افضل-مكتب-هندسي-مدينة-الرياض/ | 10 Sep: 1,214-word article cut to a template | position 10.9 → 55–60 |
| /تكلفة-بناء-دور-واحد/ | 21 Aug: 5 sibling "lead cluster" pages added; titles changed 17 & 25 Oct | 15.2k → 5.5k impressions / 28 days |
| /حفر-الأرض/, /باركيه/, /تصاميم-استراحات/ | not rewritten | stable |

On top of that, ~170 old WordPress URLs (e.g. `/تصاميم-منازل-من-الخارج/`, 4,000+
impressions) have returned 404 since the Next.js migration, so their links and history
were thrown away.

## What this change does

1. **Restores the six rewritten pages** to the exact versions that ranked before
   26 Aug / 10 Sep (same URLs, same canonicals).
2. **301-redirects 105 old WordPress URLs** to the closest live page
   (`lib/legacyRedirects.mjs`, wired into `next.config.mjs`), plus `/engineers/*` → About.
3. **Cost pillar**: puts back its August title/description and removes links from the
   pillar to pages that now redirect back to the pillar.
4. **English pages**: reverts the 20 Sep title/description rewrites on four English
   articles (cost per m², villa cost, building permit, two-story cost).
5. **Off-topic legacy pages** (AC maintenance, drinking water, furniture moving) set to
   `noindex, follow` and removed from the sitemap. They stay online.
6. **Fixes internal links** that pointed at redirecting URLs.
7. **Leads**:
   - Every WhatsApp/phone reference now uses the main number **+20 12 23328270**
     (removed the leftover Saudi number on the cost and rest-house pages).
   - New **"request a call" form** above the footer on every Arabic and English page.
     It posts to `/api/leads/callback` and writes to the same Google Sheet
     ("WhatsApp Leads") with placement `callback_form`. The Chat Summary column holds
     the name, phone, city and project, and the WhatsApp URL column links straight to
     the visitor's WhatsApp.
   - Optional: redeploy `integrations/google-sheets/Code.gs` so these rows show status
     "Callback Requested" instead of "Clicked WhatsApp". It works without the redeploy.

## After deploying

1. Open a few restored pages and old URLs (e.g. `/تصاميم-منازل-من-الخارج/` should
   redirect to `/واجهات-منازل-حديثة/`). Submit the form once and check the Sheet.
2. In Search Console: resubmit `sitemap.xml`, then use URL Inspection → "Request
   indexing" on the six restored pages and `/تكلفة-بناء-دور-واحد/`.
3. **Freeze changes to pages that rank** for 4–6 weeks. No new cluster pages, no title
   rewrites. Recovery is measured in weeks, and every rewrite resets Google's evaluation.
4. Compare Search Console "last 28 days vs previous" in 2 and 4 weeks.

## Not verified here

A full `next build` could not run in this environment (the npm registry was blocked).
Every changed file was parsed and its imports were resolved with esbuild, and
`next.config.mjs` was loaded to confirm 799 redirects with no chains or loops.
Check the Vercel preview before merging.
