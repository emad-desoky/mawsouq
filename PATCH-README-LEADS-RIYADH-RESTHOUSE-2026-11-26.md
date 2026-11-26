# Leads + Riyadh rest-house patch — 26 Nov 2026

## 1. Rest-house plans catalog (phone capture)
- Every rest-house cluster page now has a full-width "احصل على كتالوج مخططات استراحات
  على جوالك" form (visible on mobile, where the sidebar is hidden).
- The rest-house pillar's WhatsApp brief card also offers the catalog by phone.
- Sheet placement: `resthouse_plans_catalog`. **Your team sends the catalog PDF on WhatsApp**
  to the number in the row (the "WhatsApp URL" column opens a chat with the visitor).

## 2. Phone capture on the other money pages
- One-floor calculator result: "أرسلوا لي التقدير مراجَعًا من مهندس" → `calculator_review`
  (the estimate inputs are saved with the lead).
- All pages with the proof section (31+ pages: villa, structural, finishing, engineering
  offices, Riyadh cluster, projects): "اترك رقمك ونرسل لك عرضًا لمشروعك" → `project_brief_form`.
- Villa-finishing and interior-pricing clusters: same form → `project_brief_form`.
- Existing WhatsApp buttons are unchanged.
- If the sheet can't save, the visitor gets a WhatsApp button with everything they typed.

## 3. New page: /تصميم-استراحات-في-الرياض/
- Rest-house cluster page (in the sitemap automatically, linked from the other rest-house pages).
- Animated hero + 3 animated sections (Remotion), testimonials and projects, catalog form.

## Remotion
- Added `remotion` and `@remotion/player` 4.0.529 to package.json. **Run `npm install`**
  locally before `npm run dev`; Vercel installs them on deploy.
- 3D (isometric) scenes: the plan draws itself, the rest house rises, shadows follow the sun,
  pool water moves, palms sway, and the scene turns to evening with lights on.
- Animations autoplay and loop. No controls, no toggle, no text inside the illustrations.
- To animate another rest-house page: add `heroMotion: "plan-hero"` to the article and
  `motion: "climate" | "by-size" | "process"` to sections in `resthouse-data.js`.

## Test before trusting the numbers
1. Submit each new form once with your own phone (catalog, calculator, project form).
2. Check that 3 rows appear in the "WhatsApp Leads" sheet with the right CTA Placement.
   The old callback form has never produced a row, so this check matters.

## Cannibalization check (done)
- No existing page or Search Console query owns "تصميم استراحات في الرياض".
- The Riyadh page title avoids "مخطط/مخططات" so it doesn't compete with مخطط-استراحة-جاهز.
- It links to the pillar with the anchor "تصاميم استراحات" (breadcrumb); the pillar was not edited.
- Old rest-house URLs (تصميم-استراحات-وشاليهات etc.) already redirect via lib/legacyRedirects.mjs.

## Indexing after deploy
- Search Console → URL Inspection → https://mawsouq.com/تصميم-استراحات-في-الرياض/ → Request indexing.
- Sitemaps → resubmit sitemap.xml. No need to request indexing for pages that only got a form.
