# Interior design pricing cluster: query ownership (2026-11-08)

Goal: capture buyers who are comparing prices for interior design, without competing with
existing inspiration pages or cost pages.

Evidence from Search Console (16 months to 2026-11-06): `سعر متر التصميم الداخلي في السعودية`,
`سعر التصميم الداخلي 3d في السعودية` and `أسعار التصميم الداخلي في السعودية` already produce
clicks at 2.6% to 5.3% CTR, but no page was built for them. The old price URLs were redirected
into an inspiration page.

| URL | Primary query | Owns | Must NOT own | Wave |
|---|---|---|---|---|
| `/سعر-التصميم-الداخلي/` | `سعر التصميم الداخلي في السعودية` | Pricing models, price factors, quote checklist, how to compare offers | Ideas/photos; execution (finishing) cost | live |
| `/سعر-متر-التصميم-الداخلي/` | `سعر متر التصميم الداخلي` | Per-m² model: which area counts, scope tiers, comparing two per-m² quotes | 3D packaging; villa/apartment specifics | live |
| `/سعر-التصميم-الداخلي-3d/` | `سعر التصميم الداخلي 3d` | 3D render packages, deliverables, 3D vs working drawings | Per-m² maths; inspiration | live |
| `/تكلفة-التصميم-الداخلي-للفلل/` | `تكلفة التصميم الداخلي للفلل` | Villa-specific drivers, three-budget split | Finishing cost (`/تكلفة-تشطيب-فيلا/`) | live |
| `/تكلفة-التصميم-الداخلي-للشقق/` | `تكلفة التصميم الداخلي للشقق` | Apartment fees, minimum fee, small-space effect | Villa content | live |
| `/تصميم-داخلي-مع-اشراف-تنفيذ/` | `تصميم داخلي مع إشراف على التنفيذ` | Design-only vs supervision vs design-and-build | Execution cost | live |

## Existing pages that keep their intent (not edited)

| URL | Intent it keeps |
|---|---|
| `/تصاميم-بيوت-من-الداخل/` | Inspiration / ideas for home interiors |
| `/انواع-الديكور-الداخلي/` | Decor styles |
| `/ديكور-غرفة-المعيشة/`, `/ديكور-التلفاز/` | Room-level ideas |
| `/تكلفة-تشطيب-فيلا/`, `/تشطيب-فلل-من-الداخل/` | Cost and execution of finishing |
| `/تكلفة-التصميم-المعماري-في-السعودية/` | Architectural design fees |

## Internal linking rules

- Every cluster links back to `/سعر-التصميم-الداخلي/` (breadcrumb, intro sentence, sidebar).
- The pillar links to every live cluster; hidden (not live) pages are never linked.
- Pages link out to the existing pages above with descriptive anchors; no existing page was edited to link in
  (the only existing-page edits are listed in the README).
