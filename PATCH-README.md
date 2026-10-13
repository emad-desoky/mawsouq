# Mawsooq SEO Recovery + Real Project Proof Patch — 2026-10-13

Apply this patch over the current Mawsooq project root. It contains edited files only.

## Included
- Global contact number migration to +20 12 23328270 / WhatsApp 201223328270 across Arabic/English pages, CTAs, tracking, schema, project pages, chatbot and SEO components.
- Navbar logo switched to the higher-resolution `/logo-png.webp` asset already used by the footer.
- Real-project/E-E-A-T upgrade to the priority organic pages:
  - `/تكلفة-بناء-دور-واحد/`
  - `/تصاميم-استراحات/`
  - `/بناء-فلة/`
  - `/التصميم-المعماري/`
- Page-specific real Mawsooq project cards, real project images, YouTube project videos and real testimonial videos.
- No fabricated project cost/area/result claims: project proof is explicitly separated from general estimates.
- Author attribution strengthened to `فريق موسوق التحريري` for the upgraded SEO system and resthouse cluster.
- Updated modification dates only on materially edited priority pages.
- Internal links from proof sections to the live `/مشاريعنا/` case studies.

## Validation performed
- Old Saudi contact number no longer appears in `app/`, `components/`, or `lib/` source.
- Plain JavaScript SEO/data files pass `node --check`.
- Arabic route generation script completed successfully against the edited source.
- Full Next build could not be completed in this environment because dependency installation did not finish; no generated route wrappers or node_modules are included in the patch.
