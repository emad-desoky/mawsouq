# Mawsouq — Riyadh Engineering Pillar + Cluster Patch

## Install

Extract this ZIP over the project root, then run:

```bash
node scripts/apply-riyadh-engineering-cluster.mjs
npm run build
```

The installer:
- removes the legacy percent-encoded Riyadh route if it still exists;
- adds the five new Riyadh articles to the existing Arabic blog hub with their branded card images;
- runs the project's existing `scripts/generate-arabic-routes.mjs` generator.

The normal Vercel `npm run build` also runs the Arabic route generator again.

## Query ownership / cannibalization guard

- `/افضل-مكتب-هندسي-مدينة-الرياض/`
  - Owns: **أفضل مكتب هندسي في الرياض**, broad local commercial comparison/selection intent.
  - Summarizes accreditation, villa design, plan pricing and consultancy, then links to the focused cluster that owns each sub-intent.

- `/مكتب-هندسي-معتمد-في-الرياض/`
  - Owns: **مكتب هندسي معتمد في الرياض**, accreditation / permit-responsibility / verification intent.
  - Does not claim that Mawsouq has a physical Riyadh office or a local accreditation that was not verified.

- `/تصميم-فلل-في-الرياض/`
  - Owns: **تصميم فلل في الرياض**, local villa-design service/process intent.
  - It links to the existing generic `/فلل-مودرن/` and `/واجهات-منازل-حديثة/` pages instead of duplicating their inspiration intent.
  - It does not target the existing Dammam villa-design page.

- `/اسعار-المخططات-الهندسية-في-الرياض/`
  - Owns: **أسعار المخططات الهندسية في الرياض**, local quote-comparison and cost-driver intent.
  - It does not invent numeric price ranges.
  - It links to the existing national architectural and structural pricing pages instead of duplicating their national pricing intent.

- `/استشارات-هندسية-في-الرياض/`
  - Owns: **استشارات هندسية في الرياض**, local technical-review/advisory intent.
  - It links to the existing structural-engineer pages for structural-engineer-specific intent.

## Conversion

All new page-specific WhatsApp CTAs use only:

`+966 59 806 1334`

Destination:

`https://wa.me/966598061334`

Each article uses a different prefilled message so the incoming lead identifies the page and intent.

## Visual implementation

- 5 generated Mawsouq-branded WebP hero images, 1200 × 630.
- Hero images use `object-contain`, not `cover`.
- Pillar: hero + 8 inline visual breaks.
- Clusters: hero + 5–6 inline visual breaks each.
- Existing verified Mawsouq architecture images are reused as supporting visuals.
- Desktop table-of-contents / cluster sidebar is sticky while scrolling.
- Mobile has its own in-content table of contents.
- Mawsouq Team author block uses `/mawsouq-logo.png` as avatar.

## Sitemap

`app/sitemap.js` includes all five URLs explicitly. This is important because the long Arabic pricing slug is generated through the project's dynamic long-route registry rather than as a physical directory.
