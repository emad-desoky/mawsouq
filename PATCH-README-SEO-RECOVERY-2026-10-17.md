# Mawsooq SEO Recovery Patch - 17 October 2026

This is an **edited and added files only** patch for the existing Next.js Mawsouq project. It is NOT a complete replacement project, a site deployment, or a guarantee of rankings or calls.

## Scope delivered

- Preserved the existing primary pillar URL (`/` + Arabic slug for `OneFloorCostCalculator` directory + `/`); improved editorial introduction, page structure, cost-planning explanations, internal links, real project imagery context and conversion copy.
- Corrected the distorted/cropped hero: moved image into a stable 4:3 aspect-ratio wrapper using `object-contain` (not `object-cover`). Caption is now below the image, not overlapping it. Responsive on phone and desktop in the authored layout.
- Refined the interactive estimate tool to use actual built-up floor area, explicitly label ranges as illustrative, remove fabricated city-based multipliers and offer a prefilled WhatsApp consultation message. The target number is the Saudi contact already published in Mawsouq source (+966 59 806 1334).
- Created two substantive, independently useful guides with different primary intents: measuring built-up area vs land area; preparing a construction bill of quantities and comparing bids. Both contain practical examples, useful tables, FAQs, project imagery, reciprocal internal links and a commercial handoff to the pillar.
- Refreshed the resthouse design pillar with a service-brief section and buyer-oriented links, and aligned its WhatsApp link with the project's published Saudi contact.
- Added genuinely useful scope/decision-making sections to existing architectural design, structural design and Dammam engineering-office SEO pages without replacing their slugs, index settings or ranking copy.
- Added new guides to the existing blog article registry and auto-generated sitemap flow. `npm run build` re-generates the public route wrappers automatically.
- Updated schema of the main cost article: retained relevant BlogPosting/Breadcrumb markup; removed obsolete FAQ/HowTo rich-result bait and an unsupported hard-coded word count; changed image URL to absolute.

## Explicit content ownership / cannibalization guard

- Existing pillar: overall one-floor building cost, 2026 budgeting scenarios, rough calculator and commercial cost qualification.
- Supporting guide A: how to calculate real built-up area and avoid confusing land size with priced floor area (no competing cost-per-meter primary target).
- Supporting guide B: how to prepare a bill of quantities and fairly compare contractor bids (no competing cost-per-meter primary target).
- Existing 100/200/250/300/500 sqm, turnkey, adding a floor, contract checklist and villa finishing pages have NOT been duplicated.

## New public URLs (after deployment)

1. https://mawsouq.com/%D8%AC%D8%AF%D9%88%D9%84-%D9%83%D9%85%D9%8A%D8%A7%D8%AA-%D8%A8%D9%86%D8%A7%D8%A1-%D8%AF%D9%88%D8%B1-%D9%88%D8%A7%D8%AD%D8%AF/

2. https://mawsouq.com/%D8%AD%D8%B3%D8%A7%D8%A8-%D9%85%D8%B3%D8%B7%D8%AD-%D8%A7%D9%84%D8%A8%D9%86%D8%A7%D8%A1-%D9%84%D9%84%D8%AF%D9%88%D8%B1-%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%AF/

## Installation

1. Keep your current project intact; extract this ZIP at the Next.js project root and allow overwrite for the files included here. Do NOT delete existing public assets, original routes, images, .env values or database setup.
2. With working dependencies and environment configuration, run `npm ci` and `npm run build`. Build automatically invokes `scripts/generate-arabic-routes.mjs` and creates URL wrappers for the new pages.
3. Validate the old pillar URL, the two new routes, hero fit on 360px/390px/mobile/desktop, interactive calculator and the Saudi WhatsApp button.
4. Confirm existing images are served on the live deployment. The uploaded source archive did not contain the full `/public` asset folder; this patch reuses asset paths already referenced in the site and does not bundle or replace their binaries.
5. Check the generated sitemap contains the pillar and two new guides, and request URL inspection/indexing in Google Search Console only AFTER the pages are publicly reachable. Keep the existing cost-pillar canonical and URL unchanged.

## Validation completed in the working environment

- Parsed every edited and new JS/JSX source file using the TypeScript JSX parser with zero parse errors.
- Executed Arabic route generator; wrapper pages were generated for both new guides, with no new source-level route collisions observed.
- Executed article registry logic: both guides are published once, each has exactly one sitemap entry, both are linked from the pillar; no duplicate URLs in the cost-pillar article feed.
- Verified official Saudi permit and building-code reference destinations on 17 October 2026.
- Attempted dependency installation for a full Next.js production build; it stalled before dependencies were fully installed. As a result, **the production build, image rendering and live deployment are not claimed as tested here**. Complete the build and a mobile preview in your normal hosting pipeline before publishing.

## Business-side checks before publishing

- The price ranges in the original site have not been verified against current supplier/contractor quotes. The rewritten copy flags them as *illustrative scenarios*, not 2026 verified Saudi market averages; have a qualified local reviewer validate or replace them before using them as commercial advice.
- Confirm +966 59 806 1334 is still the correct WhatsApp intake for the business. The source contained other contact numbers in some areas; do not assume all old links elsewhere were replaced.
- Monitor Google Search Console query/page deltas 7/28 days after deployment, as well as WhatsApp clicks, confirmed conversations, quote requests and real won business. Clicking WhatsApp is NOT itself a verified lead.

## Patch files

- `app/(ar)/%D8%AA%D8%B5%D8%A7%D9%85%D9%8A%D9%85-%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AD%D8%A7%D8%AA/page.jsx`
- `app/_arabic-pages/_resthouse-cluster/resthouse-data.js`
- `app/_arabic-pages/تكلفة-بناء-دور-واحد/OneFloorCostCalculator.jsx`
- `app/_arabic-pages/تكلفة-بناء-دور-واحد/clusters.js`
- `app/_arabic-pages/تكلفة-بناء-دور-واحد/page.jsx`
- `lib/arabicSeo2026.js`
- `app/_arabic-pages/تكلفة-بناء-دور-واحد/PracticalCostGuide.jsx`
- `app/_arabic-pages/تكلفة-بناء-دور-واحد/practical-guides.js`
- `app/_arabic-pages/جدول-كميات-بناء-دور-واحد/page.jsx`
- `app/_arabic-pages/حساب-مسطح-البناء-للدور-الواحد/page.jsx`
