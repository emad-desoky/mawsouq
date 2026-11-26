# New blogs patch — 26 Nov 2026

## New pages (request indexing for these 3 after deploy)
1. https://mawsouq.com/تكلفة-بناء-فيلا-375-متر/  (Arabic, cluster of بناء-فلة)
2. https://mawsouq.com/تكلفة-بناء-فيلا-في-الرياض/  (Arabic, cluster of بناء-فلة)
3. https://mawsouq.com/en/blog/rest-house-design-saudi-arabia/  (English, architecture topic)

All three are added to sitemap.xml and the blog listings automatically.

## Files
- lib/arabicSeo2026.js: new `villa375Cost` and `riyadhVillaCost` pages; the villa 300 m² page's
  related links now include the 375 m² page (one link, no other change).
- app/_arabic-pages/<slug>/page.jsx and app/(ar)/(generated-arabic-routes)/<slug>/page.jsx for both
  Arabic pages (the build script regenerates the second one anyway).
- app/(en)/en/blog/blog-data.js: new English article at the start of the architecture topic.

## Prices
The Arabic tables use the same per-m² planning ranges as the site's calculator
(OneFloorCostCalculator.jsx), so the site stays consistent. If you change the calculator ranges,
update these two pages too.

## Cannibalization
- No existing page targets "فيلا 375 متر" or "تكلفة بناء فيلا في الرياض" (Arabic). The Riyadh
  design page (تصميم-فلل-في-الرياض) is about design, not build cost.
- The English rest-house article has no English competitor; it links to the Arabic rest-house pages.
- Still worth one check: in Search Console, filter queries containing "375" → Pages tab. If بناء-فلة
  gets most of those impressions, watch both pages for 3–4 weeks after indexing.
