# Arabic Villa Finishing Query Ownership — 2026-10-07

This patch deliberately separates search intent to reduce cannibalization.

| URL | Primary query | Owns | Must NOT own |
|---|---|---|---|
| `/تشطيب-فلل/` | `تشطيب فلل` | Pillar: stages, materials, execution, inside/outside coordination, QA | Best company / vendor selection; pure design inspiration; build cost |
| `/تشطيب-فلل-من-الداخل/` | `تشطيب فلل من الداخل` | Interior execution: majlis, living, bedrooms, wet areas, ceilings/floors/joinery | Interior design inspiration as a standalone intent; facade execution |
| `/تشطيب-فلل-مودرن/` | `تشطيب فلل مودرن` | Modern finishing materials and execution details | `فلل مودرن` design/inspiration intent |
| `/تشطيب-واجهات-فلل/` | `تشطيب واجهات فلل` | Facade materials, fixing, waterproofing, lighting, handover | General facade inspiration/design intent |
| `/تكلفة-تشطيب-فيلا/` | `تكلفة تشطيب فيلا` | Finishing budget structure, scope, comparison of quotes | Structural/building cost such as `تكلفة بناء دور واحد` |
| `/تشطيب-منازل/` | `تشطيب منازل` | General residential home finishing stages and handover | Villa-only long-tail terms; best company/vendor selection |
| `/افضل-شركة-تشطيبات-في-السعودية/` | `أفضل شركة تشطيبات في السعودية` | Commercial vendor/company-selection intent | General finishing guide intent |
| `/فلل-مودرن/` | `فلل مودرن` | Existing design/inspiration intent | Modern finishing execution |
| `/واجهات-منازل-حديثة/` | `واجهات منازل حديثة` | Existing facade design/inspiration intent | Facade finishing execution |
| `/تكلفة-بناء-دور-واحد/` | `تكلفة بناء دور واحد` | Existing construction/build cost intent | Finishing-only cost |

## Internal linking rules implemented

- Every cluster links back to `/تشطيب-فلل/`.
- The pillar links to all five clusters.
- Modern finishing links explicitly to `/فلل-مودرن/` as the design/inspiration page.
- Facade finishing links explicitly to `/واجهات-منازل-حديثة/` as the inspiration page.
- Finishing cost links explicitly to `/تكلفة-بناء-دور-واحد/` to separate building cost from finishing cost.
- The existing commercial page `/افضل-شركة-تشطيبات-في-السعودية/` receives links to all six new pages through its existing cluster registry.
- The Arabic homepage article carousel is updated to feature `/تشطيب-فلل/`, creating a strong site-level entry point.
