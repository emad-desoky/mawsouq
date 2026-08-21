# Mawsooq — 5 English Lead-Focused SEO Clusters

This patch adds five high-commercial-intent English cluster articles to the existing `/en/blog/[slug]/` dynamic route system.

## New URLs

- `/en/blog/cost-to-build-two-story-house-saudi-arabia/`
- `/en/blog/cost-to-add-second-floor-saudi-arabia/`
- `/en/blog/house-construction-contract-saudi-arabia/`
- `/en/blog/house-construction-cost-jeddah/`
- `/en/blog/house-construction-cost-dammam-khobar/`

## Why these five

They expand the topic already producing leads without creating another generic "build a house" or "construction cost Saudi Arabia" page.

- **Two-story house cost** owns NEW two-floor house cost intent.
- **Second-floor addition** owns vertical-extension intent for an EXISTING house.
- **Construction contract** owns contract/payment/variation intent after contractor shortlisting.
- **Jeddah cost** owns local Jeddah residential cost intent.
- **Dammam & Khobar cost** owns Eastern Province local residential cost intent.

Existing pages continue to own broad/national queries such as build-a-house, cost-per-square-metre, villa cost, contractor selection, permits, turnkey construction and the 200 m² example.

## Conversion improvements

Each article includes:
- page-specific WhatsApp message with lead-qualification fields;
- hero CTA + sticky desktop WhatsApp sidebar from the existing ArticleLayout;
- final WhatsApp CTA;
- multiple contextual internal links via curated `relatedSlugs`;
- FAQ, BlogPosting and breadcrumb schema through the existing dynamic route;
- tables, checklists, visual cost breakdowns and multiple in-content images;
- 1600×840 local WebP hero image.

## Sitemap

`app/sitemap.js` already calls `getAllEnglishBlogEntries()` from the central English blog data file. Once these articles are inserted into `clusters`, they are automatically added to `/sitemap.xml`.

## Install

Copy the patch contents into the project root, then run once:

```bash
node scripts/apply-english-lead-clusters.mjs
```

Then test:

```bash
npm run dev
```

Production validation:

```bash
npm run build
```

The apply script is idempotent and can be rerun without duplicating the five cluster objects.
