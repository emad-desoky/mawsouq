# Video proof + leads patch — 19 Nov 2026

Goal: put real Saudi client testimonials and real Mawsooq projects next to the
contact buttons on every page that brings Google traffic, and let Google index
the videos.

## What changed

1. **Proof section added to 31 pages that had none**, matched to the topic
   (villa/architecture, structural/construction, interior/finishing, engineering
   offices). Each one shows 3 related projects, client testimonial videos and a
   WhatsApp button with a topic-specific pre-filled message.
   - 25 legacy pages in `app/(ar)/…` (التصميم-المعماري، بناء-فلة، فلل-مودرن،
     حفر-الأرض، باركيه، جبس-عادي-بورد، الدهان-البوية، تصميم-انشائي … )
   - `افضل-مكتب-هندسي-بالدمام` and `افضل-مكتب-هندسي-مدينة-الرياض`
   - The 4 Riyadh engineering pages (via `RiyadhEngineeringArticle.jsx`)
2. **Google video markup (`VideoObject`)** is output wherever a video is shown,
   using the real YouTube title and publish date. 7 of the 10 videos have dates;
   the other 3 (`QuT6C1L4ya4`, `3CmBsvvEetI`, `d0uXqjHkf_A`) are still shown but get
   no markup until `uploadDate` is filled in `lib/mawsouqProjects.js`.
3. **Testimonial cards show who is speaking** (name — city, service, a one-line
   quote) as soon as those fields are filled. Until then they show the old label.
4. **Project pages** (`/مشاريعنا/...`) now:
   - embed the project's own YouTube video (Makkah and Al-Ahsa are set;
     Riyadh, Dammam and the rest-house project need a `videoId`),
   - show real facts (land area, built area, floors, design duration, fee range,
     year) and a client quote when filled. Empty fields stay hidden.
5. The proof section's intro no longer says "we don't invent area or cost"; it now
   speaks plainly about Saudi clients and real projects.

## What the team must fill in (`lib/mawsouqProjects.js`)

| Where | Field | Example |
|---|---|---|
| Each testimonial | `clientName`, `city`, `service`, `quote` | "أبو فهد", "الرياض", "تصميم فيلا", "استلمت المخططات خلال شهر…" |
| 3 videos without date | `uploadDate` (and `title`) | "2022-04-09" — copy from YouTube |
| Each project | `videoId` | YouTube ID of that project's video |
| Each project | `facts.landArea / builtArea / floors / duration / feeRange / year` | "600 م²", "دوران + ملحق", "6 أسابيع" |
| Each project | `clientQuote`, `clientName` | optional, strongest proof |

Only write what is true. A filled field appears on the site and in Google's data.

## After deploying

1. Open the Vercel preview: check `/حفر-الأرض/`, `/باركيه/`, `/افضل-مكتب-هندسي-بالدمام/`
   and `/مشاريعنا/makkah-architectural-villa/` on mobile.
2. Test one page in Google's Rich Results Test: it should list "Videos".
3. Search Console → URL Inspection → Request indexing for the project pages.
4. New WhatsApp clicks from these sections appear in the lead sheet with placement
   `seo_trust_section`, so you can see whether they bring conversations.

## Not verified here

A full `next build` could not run (no npm access in this environment). Every changed
file was parsed with esbuild and the changed components were bundled with their
imports resolved. Check the Vercel preview before merging.
