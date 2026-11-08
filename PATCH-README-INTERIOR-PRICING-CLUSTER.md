# Mawsooq interior design pricing cluster patch

Prepared: 2026-11-08

## What this adds

A pillar plus five cluster articles for people who are ready to pay for interior design:

1. `/سعر-التصميم-الداخلي/`: pillar (live)
2. `/سعر-متر-التصميم-الداخلي/`: cluster (live)
3. `/سعر-التصميم-الداخلي-3d/`: cluster (live)
4. `/تكلفة-التصميم-الداخلي-للفلل/`: cluster (live)
5. `/تكلفة-التصميم-الداخلي-للشقق/`: cluster (live)
6. `/تصميم-داخلي-مع-اشراف-تنفيذ/`: cluster (live)

All six pages are published (`live: true`) by default.
excluded from the sitemap and are not linked from anywhere until you turn them on. This follows
`SEO-RECOVERY-2026-10-31.md`: the August drop coincided with five cluster pages being added at once.

## Files

New:
- `app/_arabic-pages/_interior-pricing-cluster/interior-pricing-data.js` (content + `live` flags)
- `app/_arabic-pages/_interior-pricing-cluster/InteriorPricingBlogPage.jsx` (page template)
- six `app/_arabic-pages/<slug>/page.jsx` wrappers
- `SEO-QUERY-OWNERSHIP-INTERIOR-PRICING.md`

Edited (line endings preserved):
- `app/sitemap.js`: adds the cluster entries and excludes non-live URLs.
- `components/sections/ArticlesSection.jsx`: one card for the pillar on the homepage article carousel.
- `lib/legacyRedirects.mjs`: three old price-intent URLs now redirect to the pillar instead of to
  `/تصاميم-بيوت-من-الداخل/`: `interior-design-cost-guide`, `أسعار-التصميم-الداخلي-للمتر`,
  `تكلفه-التصميم-الداخلي`. **Optional.** To skip it, delete this file from the patch.

## How to apply

1. Copy the contents of this ZIP over the project root, replacing the three edited files.
2. `npm run build` (the build already runs `scripts/generate-arabic-routes.mjs`, which creates the public routes).
3. Open the Vercel preview and check the three live URLs, then `/sitemap.xml`.
4. Submit the sitemap in Search Console and request indexing for the three live URLs.

## Publishing wave 2

In `interior-pricing-data.js`, change `live: false` to `live: true` for the page you want to publish
(inside `interiorClusterLinks`). Nothing else is needed: its route, the sitemap entry and the links from
the pillar and sibling pages switch on together. Suggested timing: one page at a time, at least two weeks
after wave 1, only if no ranking page moved down in Search Console.

## Please do before publishing

- **Add your real prices.** The pages deliberately contain no SAR price list (published figures disagree
  and cannot be verified). Pages that carry a real, current Mawsooq price range convert far better. Add it
  as a short section if you are comfortable publishing it.
- **Check the hero images.** No new images were generated. The pages reuse `/projects/interior-villa-riyadh.jpg`
  and two existing images from the villa-finishing set (`06-interior-finishing-living.webp`,
  `19-villa-finishing-cost-planning.webp`). Confirm they look right on the pages, and swap if not.
- The WhatsApp button uses the number currently used across the site (`201223328270`).
- Two worked examples in the text use made-up numbers and are labelled as illustrative.

## Not verified

`next build` was not run (no node_modules / registry here). Each file was syntax-checked with esbuild, and
the page component was rendered server-side in a stubbed environment: three live pages render 1,268 to 1,911
words with tables, FAQ schema and valid internal links, and the three hidden pages return not-found.
Check the Vercel preview before merging.
