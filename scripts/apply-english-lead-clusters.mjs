import fs from "fs";
import path from "path";

const root = process.cwd();
const blogDataPath = path.join(root, "app", "(en)", "en", "blog", "blog-data.js");
const blogHubPath = path.join(root, "app", "(en)", "en", "blog", "page.jsx");
const sitemapPath = path.join(root, "app", "sitemap.js");

const newSlugs = [
  "cost-to-build-two-story-house-saudi-arabia",
  "cost-to-add-second-floor-saudi-arabia",
  "house-construction-contract-saudi-arabia",
  "house-construction-cost-jeddah",
  "house-construction-cost-dammam-khobar",
];

const articlesBlock = String.raw`
  {
    slug: "cost-to-build-two-story-house-saudi-arabia",
    role: "cluster",
    category: "Two-Story House Cost",
    primaryKeyword: "cost to build a two story house in Saudi Arabia",
    metaTitle: "Cost to Build a Two-Story House in Saudi Arabia (2026)",
    title: "Cost to Build a Two-Story House in Saudi Arabia: 2026 Budget Guide",
    description:
      "Estimate the cost to build a two-story house in Saudi Arabia with shell, finished and turnkey scenarios, cost drivers, tender checks and a project-ready WhatsApp brief.",
    excerpt:
      "A focused cost guide for owners planning a new two-story family house and comparing shell, finished and turnkey budgets.",
    image: "/images/blog/lead-clusters-en/cost-to-build-two-story-house-saudi-arabia.webp",
    imageAlt: "Cost to build a two-story house in Saudi Arabia",
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I am planning a NEW two-story house in Saudi Arabia. My city is: __. Plot size: __ m². Approximate built-up area: __ m². I want: shell / finished / turnkey. Please help me estimate the budget and next steps.",
    relatedSlugs: [
      "construction-cost-calculator-saudi-arabia",
      "construction-cost-per-square-meter-saudi-arabia",
      "turnkey-house-construction-cost-saudi-arabia",
      "building-permit-saudi-arabia",
      "choose-construction-contractor-saudi-arabia",
    ],
    highlights: [
      { value: "2 floors", label: "new-build intent, not an extension" },
      { value: "3 scopes", label: "shell, finished and turnkey" },
      { value: "WhatsApp", label: "prefilled project brief for faster qualification" },
    ],
    takeaways: [
      "This page owns new two-story house cost intent; second-floor additions are handled separately.",
      "Budget from total built-up area across both floors, not plot size or one-floor area.",
      "Stairs, structure, MEP distribution and façade complexity can change the effective cost per square metre.",
      "Use planning ranges for feasibility, then replace them with project-specific quantities and live quotations.",
      "A strong quotation brief should include city, plot size, built-up area, floor count and handover scope.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["area", "How to measure the area"],
      ["budget-scenarios", "Budget scenarios"],
      ["worked-example", "Worked example"],
      ["cost-drivers", "What moves the cost"],
      ["design-control", "Design decisions that protect budget"],
      ["tender", "How to request comparable quotations"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: how should you estimate a two-story house?",
        paragraphs: [
          "For a new two-story house in Saudi Arabia, start with the TOTAL built-up area of both floors, then select a scope level: shell, finished or turnkey. The correct planning question is not simply 'what is the price per square metre?' but 'what area, specification and scope does that rate actually cover?'",
          "This page intentionally owns the new-build two-story query. If you already have a house and want to build another floor above it, use the separate second-floor addition guide because structural assessment, demolition and strengthening can change the decision completely.",
        ],
        callout: {
          title: "Lead-ready information",
          text: "For a faster WhatsApp estimate, send the city, plot size, approximate ground-floor area, first-floor area, finish level and whether you already have architectural drawings.",
        },
        image: sharedImages.villa,
      },
      {
        id: "area",
        title: "Measure total built-up area before using any cost rate",
        paragraphs: [
          "A two-story house may have a 220 m² ground floor and a 160 m² first floor, giving 380 m² of primary built-up area before optional roof rooms, covered parking or detached service spaces are considered. Using only the plot area or only one floor creates a misleading estimate.",
        ],
        checklist: [
          "Ground-floor constructed area",
          "First-floor constructed area",
          "Stair and vertical circulation areas",
          "Roof rooms or service spaces if included",
          "Covered external structures priced separately where appropriate",
          "Boundary wall, landscape and external works kept visible as separate allowances",
        ],
        image: sharedImages.plans,
      },
      {
        id: "budget-scenarios",
        title: "Illustrative two-story planning scenarios",
        paragraphs: [
          "The ranges below are Mawsooq early-feasibility bands, not official Saudi rates or contractor offers. They are deliberately broad because structure, city, design complexity, systems and finish selections can move the result materially.",
        ],
        table: {
          caption: "Illustrative 2026 planning bands for a new two-story house",
          headers: ["Scope", "Indicative planning band", "What it is useful for"],
          rows: [
            ["Shell / structural build", "SAR 900–1,250/m²", "Early structure and envelope feasibility"],
            ["Standard finished home", "SAR 1,300–1,850/m²", "Typical family-home budgeting"],
            ["Turnkey / higher specification", "SAR 1,900–3,500+/m²", "More complete handover and premium selections"],
          ],
        },
        note: "Confirm whether VAT, professional fees, authority costs, utility connections, kitchens, air-conditioning equipment and external works are included before comparing any number.",
      },
      {
        id: "worked-example",
        title: "Worked example: 400 m² total across two floors",
        paragraphs: [
          "Assume a new house has 220 m² on the ground floor and 180 m² on the first floor, for 400 m² total built-up area. Using the standard planning band above, the construction base would be roughly SAR 520,000–740,000 before separately budgeted design, authority, external-work, contingency and tax items.",
          "The purpose of the example is not to promise a price. It shows how area and scope translate into a realistic feasibility range before the owner requests contractor quotations.",
        ],
        bars: [
          { label: "Structure and envelope", value: 38 },
          { label: "MEP systems", value: 22 },
          { label: "Internal finishes", value: 25 },
          { label: "External works and allowances", value: 15 },
        ],
        image: sharedImages.site,
      },
      {
        id: "cost-drivers",
        title: "Why two-story houses can cost differently from a simple one-floor build",
        bullets: [
          "Stair geometry and finishes add dedicated structural and finishing work.",
          "Vertical plumbing, drainage and electrical distribution require coordination between floors.",
          "Larger façade area and more openings can increase envelope and waterproofing scope.",
          "Structural spans, balconies and cantilevers can increase concrete and reinforcement demand.",
          "Premium upper-floor suites, family lounges or terraces can raise the finishing rate.",
          "Late layout changes can affect structure and MEP work on both levels, not only one room.",
        ],
      },
      {
        id: "design-control",
        title: "Design decisions that protect the construction budget",
        paragraphs: [
          "The cheapest square metre is often the unnecessary square metre that was never designed. A disciplined room schedule, compact circulation, aligned wet areas and sensible structural grids can protect both budget and programme before tendering starts.",
        ],
        steps: [
          { title: "Freeze the family brief", text: "Agree the bedrooms, guest areas, family spaces and future needs before detailed engineering." },
          { title: "Stack services intelligently", text: "Where practical, coordinate bathrooms and service zones vertically to simplify MEP routes." },
          { title: "Control double-height spaces", text: "Use them intentionally because they consume volume, façade and finishing budget without adding floor area." },
          { title: "Coordinate structure early", text: "Avoid architectural layouts that require unnecessary transfer beams or late column changes." },
          { title: "Set finish allowances", text: "Define realistic tile, sanitary, door and lighting allowances before contractor comparison." },
        ],
      },
      {
        id: "tender",
        title: "How to request quotations that can actually be compared",
        checklist: [
          "Issue the same architectural and engineering drawings to every bidder.",
          "Ask for shell, MEP, finishing and external works to be shown as separate packages.",
          "Confirm VAT treatment and whether the offer is inclusive or exclusive of tax.",
          "Request an exclusions list instead of assuming missing items are included.",
          "Tie payment stages to measurable progress and inspections.",
          "Send your best two offers to Mawsooq on WhatsApp if you want help identifying scope gaps.",
        ],
        image: sharedImages.contractor,
      },
      {
        id: "mistakes",
        title: "Common mistakes before building two floors",
        bullets: [
          "Multiplying plot area by a construction rate.",
          "Comparing a shell offer with a turnkey offer as if they were equivalent.",
          "Ignoring stair, roof, service and external-work scope.",
          "Changing room layouts after structural and MEP drawings are complete.",
          "Choosing the lowest total without checking missing items and payment terms.",
        ],
      },
    ],
    faqs: [
      ["How much does it cost to build a two-story house in Saudi Arabia?", "The answer depends on total built-up area, city, structure, finish level and whether the scope is shell, finished or turnkey. Use the planning bands in this guide for feasibility, then obtain project-specific quotations."],
      ["Is a two-story house more expensive per square metre than one floor?", "Not automatically. The effective rate can change because of stairs, structure, façade, service distribution and design complexity. A compact two-story design can also use the plot more efficiently."],
      ["Should I calculate using plot area or built-up area?", "Use total built-up area across every constructed floor. Keep external works and optional detached structures as separate budget lines."],
      ["What should I send on WhatsApp for a two-story estimate?", "Send the city, plot size, approximate area of each floor, desired finish level and whether you already have drawings or only an initial idea."],
    ],
    sources: [officialSources.gastat, officialSources.baladyPermit, officialSources.sbc, officialSources.zatca],
  },
  {
    slug: "cost-to-add-second-floor-saudi-arabia",
    role: "cluster",
    category: "Second-Floor Addition",
    primaryKeyword: "cost to add a second floor in Saudi Arabia",
    metaTitle: "Cost to Add a Second Floor in Saudi Arabia (2026)",
    title: "Cost to Add a Second Floor in Saudi Arabia: Structure, Permit and Budget",
    description:
      "Planning to add a second floor to an existing house in Saudi Arabia? Understand structural checks, permits, strengthening risks, cost layers and the information needed for a real estimate.",
    excerpt:
      "A high-intent extension guide for owners who already have a house and want to know whether another floor is technically and financially practical.",
    image: "/images/blog/lead-clusters-en/cost-to-add-second-floor-saudi-arabia.webp",
    imageAlt: "Cost to add a second floor to an existing house in Saudi Arabia",
    datePublished: "2026-08-20",
    dateModified: "2026-08-21",
    readTime: "13 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I want to ADD a second floor above an existing house in Saudi Arabia. City: __. Existing house age: __ years. Current built area: __ m². Proposed added area: __ m². I have / do not have the original structural drawings. Please advise on feasibility and budget steps.",
    relatedSlugs: [
      "building-permit-saudi-arabia",
      "architectural-design-cost-saudi-arabia",
      "choose-construction-contractor-saudi-arabia",
      "construction-cost-calculator-saudi-arabia",
      "cost-to-build-two-story-house-saudi-arabia",
    ],
    highlights: [
      { value: "Assess first", label: "existing structure controls feasibility" },
      { value: "Permit", label: "authority and engineering review matter" },
      { value: "Existing house", label: "separate intent from a new two-story build" },
    ],
    takeaways: [
      "Do not estimate a second-floor addition like a normal new-build floor before checking the existing structure.",
      "Original drawings, site inspection and structural assessment can materially improve the quality of the decision.",
      "Strengthening, demolition, waterproofing and service modifications can create costs that do not appear in a simple square-metre rate.",
      "The correct permit and engineering workflow should be confirmed for the specific property before work starts.",
      "This page is designed to convert serious extension enquiries into a structured WhatsApp brief.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["feasibility", "Structural feasibility comes first"],
      ["documents", "Documents to collect"],
      ["cost-layers", "What the budget includes"],
      ["permit", "Permit and engineering workflow"],
      ["process", "A safer project sequence"],
      ["quote", "How to request quotations"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: can you simply price an extra floor by square metre?",
        paragraphs: [
          "Not safely. Adding a second floor to an existing Saudi house is first a structural-feasibility question and only then a construction-cost question. The existing foundations, columns, beams, slabs, concrete condition, previous modifications and proposed new loads all influence what can be done.",
          "A simple rate multiplied by the proposed area can be useful only after the engineering team understands whether strengthening, demolition, temporary works or service changes are required.",
        ],
        callout: {
          title: "Best first WhatsApp message",
          text: "Send the city, house age, existing floor area, proposed added area and whether you have the original architectural and structural drawings. Photos help with the first conversation but do not replace an engineering assessment.",
        },
        image: sharedImages.site,
      },
      {
        id: "feasibility",
        title: "Structural feasibility comes before the budget",
        paragraphs: [
          "An engineer may need to review available drawings, inspect the existing structure and determine whether the original design allowed future vertical expansion. If the available information is incomplete, additional verification or testing may be required before a responsible recommendation can be made.",
        ],
        checklist: [
          "Original structural drawings if available",
          "Any previous renovation or extension records",
          "Visible condition of columns, beams and slabs",
          "Proposed new floor layout and expected use",
          "Location of new stair opening and service risers",
          "Any water tanks, heavy equipment or rooftop loads",
        ],
        image: sharedImages.materials,
      },
      {
        id: "documents",
        title: "Collect these documents before asking for a serious price",
        table: {
          caption: "Information that improves second-floor feasibility and pricing",
          headers: ["Item", "Why it matters", "If unavailable"],
          rows: [
            ["Architectural drawings", "Clarify existing layout and proposed changes", "Prepare a measured survey"],
            ["Structural drawings", "Show member sizes and original design intent", "Engineer may need additional verification"],
            ["Permit records", "Help confirm approved existing condition", "Engineering office should verify current status"],
            ["Site photos / inspection", "Reveal access and visible constraints", "Arrange a site visit before final quotation"],
            ["Proposed room brief", "Defines new loads, wet areas and services", "Prepare a simple room schedule first"],
          ],
        },
      },
      {
        id: "cost-layers",
        title: "What can make an extra floor cost more than expected?",
        paragraphs: [
          "The added-floor budget is not only the new walls, slab, MEP and finishes. Existing-house work can introduce demolition, strengthening, temporary protection, waterproofing repairs, stair modifications, service relocation and making-good works on the occupied floor below.",
        ],
        bars: [
          { label: "New structural and envelope work", value: 36 },
          { label: "MEP and service modifications", value: 22 },
          { label: "Finishes and making good", value: 24 },
          { label: "Strengthening / temporary / risk allowance", value: 18 },
        ],
        note: "This is an explanatory planning visual, not a bill of quantities. Strengthening needs can change the distribution significantly.",
      },
      {
        id: "permit",
        title: "Permit and engineering workflow in Saudi Arabia",
        paragraphs: [
          "The exact approval route depends on the property and the proposed modification. Balady provides construction-permit services, while the Saudi Building Code sets requirements relevant to structural and residential work. A licensed engineering office should verify the current requirements for the specific property before execution.",
        ],
        checklist: [
          "Confirm the approved existing building status.",
          "Prepare the proposed architectural modification.",
          "Complete structural review and required calculations.",
          "Coordinate MEP changes with the new floor plan.",
          "Confirm the authority submission and permit path before site work.",
        ],
        image: sharedImages.plans,
      },
      {
        id: "process",
        title: "A safer sequence for a second-floor project",
        steps: [
          { title: "1. Survey the existing house", text: "Record the actual built condition instead of relying only on memory or old plans." },
          { title: "2. Check structural capacity", text: "Determine whether the addition is feasible and what strengthening may be required." },
          { title: "3. Develop the new layout", text: "Coordinate stairs, wet areas, structure, privacy and service routes." },
          { title: "4. Complete approvals", text: "Use the appropriate engineering and authority workflow for the property." },
          { title: "5. Tender a defined scope", text: "Price strengthening, demolition and making-good items explicitly." },
          { title: "6. Execute with protection", text: "Plan temporary works, waterproofing and protection of the existing house carefully." },
        ],
      },
      {
        id: "quote",
        title: "How to compare second-floor quotations",
        checklist: [
          "Separate strengthening work from the new-floor construction package.",
          "Confirm demolition and debris removal are included.",
          "Identify who repairs existing finishes affected by the work.",
          "Confirm waterproofing interfaces and roof modifications.",
          "List MEP relocation and connection work explicitly.",
          "Require written variation approval before extra work proceeds.",
        ],
        image: sharedImages.contractor,
      },
      {
        id: "mistakes",
        title: "Common mistakes with vertical extensions",
        bullets: [
          "Starting design before checking whether the existing structure can carry the proposal.",
          "Treating old drawings as automatically accurate to the built condition.",
          "Using a generic construction calculator without a strengthening allowance.",
          "Ignoring how the new stair affects the existing floor.",
          "Starting demolition before confirming the required approvals and technical scope.",
        ],
      },
    ],
    faqs: [
      ["How much does it cost to add a second floor in Saudi Arabia?", "The cost varies widely because the existing structure may need little work or significant strengthening and modification. A responsible estimate starts with the existing house condition and proposed added area."],
      ["Do I need the original structural drawings?", "They are very useful but not always available. If they are missing, the engineer may need a measured survey, site inspection and additional verification before confirming feasibility."],
      ["Is this the same as building a new two-story house?", "No. A new two-story house starts with a new structural design. A second-floor addition must work with an existing building, which creates a different technical and commercial risk profile."],
      ["What should I send Mawsooq first?", "Send the city, approximate age of the building, existing and proposed areas, any available drawings and clear photos. Mawsooq can then help identify the correct next professional step."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },
  {
    slug: "house-construction-contract-saudi-arabia",
    role: "cluster",
    category: "Construction Contract",
    primaryKeyword: "house construction contract Saudi Arabia",
    metaTitle: "House Construction Contract Saudi Arabia: 2026 Checklist",
    title: "House Construction Contract in Saudi Arabia: Scope, Payments and Variation Checklist",
    description:
      "Before signing a house construction contract in Saudi Arabia, check scope, exclusions, payment milestones, variations, delays, materials, defects and handover documents.",
    excerpt:
      "A conversion-focused contract checklist for homeowners who already have quotations and are close to choosing a contractor.",
    image: "/images/blog/lead-clusters-en/house-construction-contract-saudi-arabia.webp",
    imageAlt: "House construction contract checklist in Saudi Arabia",
    datePublished: "2026-08-19",
    dateModified: "2026-08-21",
    readTime: "13 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I am reviewing a house construction CONTRACT in Saudi Arabia. City: __. Project area: __ m². Contract value / offer: __ SAR. I want help checking scope, exclusions, payment milestones and variations before I proceed.",
    relatedSlugs: [
      "choose-construction-contractor-saudi-arabia",
      "turnkey-house-construction-cost-saudi-arabia",
      "construction-cost-calculator-saudi-arabia",
      "house-construction-timeline-saudi-arabia",
      "building-permit-saudi-arabia",
    ],
    highlights: [
      { value: "Scope first", label: "price is meaningless without inclusions" },
      { value: "Milestones", label: "payments should follow verified progress" },
      { value: "Variations", label: "written approval protects both parties" },
    ],
    takeaways: [
      "This page owns contract terms and payment-control intent; contractor-selection intent remains on the existing contractor guide.",
      "The contract should identify drawings, specifications, inclusions, exclusions and commercial assumptions clearly.",
      "Payment stages should relate to measurable completed work and inspection, not calendar dates alone.",
      "Variation work should be priced and approved in writing before execution where possible.",
      "Owners close to signing are high-intent leads, so the WhatsApp CTA invites them to share the offer summary for review guidance.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["documents", "Documents that form the contract"],
      ["scope", "Scope and exclusions"],
      ["payments", "Payment milestones"],
      ["variations", "Variation control"],
      ["materials", "Materials and substitutions"],
      ["delay-handover", "Delay, defects and handover"],
      ["compare", "Contract comparison checklist"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: what should a house construction contract make impossible to misunderstand?",
        paragraphs: [
          "A strong construction contract should make the scope, price basis, payment stages, programme, variation process, quality requirements, responsibilities and handover obligations clear enough that both sides know what happens when the project changes.",
          "This guide does not replace legal advice. It is a practical project-control checklist for owners who are already comparing offers or preparing to sign. For contractor screening and reference checks, use Mawsooq's separate contractor-selection guide.",
        ],
        callout: {
          title: "High-intent CTA",
          text: "If you already have a contractor offer, send the city, built-up area, contract value and the main inclusions/exclusions on WhatsApp. Mawsooq can help you identify commercial questions to clarify before you proceed.",
        },
        image: sharedImages.contractor,
      },
      {
        id: "documents",
        title: "The contract is more than the signed cover page",
        paragraphs: [
          "The contract should identify the drawings, specifications, schedules, priced scope and any approved clarifications that form part of the agreement. If two documents conflict, the agreement should explain which one takes precedence.",
        ],
        checklist: [
          "Signed agreement and commercial conditions",
          "Issued architectural, structural and MEP drawings",
          "Specifications or defined material allowances",
          "Priced bill / scope schedule where available",
          "Programme and milestone schedule",
          "Written exclusions and provisional sums",
          "Approved tender clarifications and addenda",
        ],
        image: sharedImages.plans,
      },
      {
        id: "scope",
        title: "Scope and exclusions: the section that prevents most price confusion",
        table: {
          caption: "Common items to make explicit before signing",
          headers: ["Item", "Question to answer", "Risk if unclear"],
          rows: [
            ["VAT", "Included in the total or added separately?", "Unexpected payable amount"],
            ["HVAC", "Only provisions or complete equipment and installation?", "Large late-stage extra"],
            ["Kitchen / wardrobes", "Included, allowance-based or excluded?", "Finish-budget gap"],
            ["External works", "Boundary walls, paving, gates, landscape?", "Project not truly complete"],
            ["Testing / approvals", "Who coordinates and who pays?", "Handover delay"],
            ["Temporary works / waste", "Included in contractor responsibility?", "Operational extras"],
          ],
        },
      },
      {
        id: "payments",
        title: "Build payment milestones around verified progress",
        paragraphs: [
          "A payment schedule should create enough cash flow for the contractor without leaving the owner excessively exposed. Good milestones correspond to measurable work that can be checked before the next payment is released.",
        ],
        timeline: [
          ["Mobilisation", "Define what must be delivered before any advance is released."],
          ["Substructure", "Link payment to completed and inspected foundation work."],
          ["Superstructure", "Use defined structural milestones rather than vague percentages."],
          ["MEP rough-in", "Inspect concealed services before closing walls and ceilings."],
          ["Finishes", "Release against measurable areas or completed packages."],
          ["Handover", "Retain enough leverage for snagging, documents and defects close-out."],
        ],
      },
      {
        id: "variations",
        title: "Variation control: decide the price before the change is built",
        paragraphs: [
          "Owner changes are normal, but undocumented changes create disputes. A variation procedure should state who can instruct a change, how the contractor prices it, whether time is affected and when the owner must approve it.",
        ],
        checklist: [
          "Written description of the requested change",
          "Price impact shown before execution",
          "Programme impact stated where relevant",
          "Approval by the authorised owner representative",
          "Updated running variation log",
          "No reliance on informal verbal instructions for major changes",
        ],
      },
      {
        id: "materials",
        title: "Material brands, allowances and substitutions",
        paragraphs: [
          "Vague phrases such as 'first-class materials' are difficult to enforce. Use named specifications, measurable performance standards or clearly stated allowances. If substitutions are allowed, define how approval works and whether the contract price changes.",
        ],
        table: {
          caption: "Examples of clearer material language",
          headers: ["Weak wording", "Better contract approach"],
          rows: [
            ["High-quality tiles", "Defined allowance, size range and approval sample"],
            ["Good sanitary ware", "Brand / equivalent standard and item allowance"],
            ["Premium paint", "Named system, number of coats and surface preparation"],
            ["Quality waterproofing", "Specified system, installation method and test requirement"],
          ],
        },
        image: sharedImages.materials,
      },
      {
        id: "delay-handover",
        title: "Delay, defects, warranties and handover",
        paragraphs: [
          "The contract should explain the planned completion date, extension-of-time events, notice requirements, snagging process, defect period, warranties and documents required for final handover. These clauses matter most when the project is under pressure, so they should not be left vague.",
        ],
        checklist: [
          "Baseline programme and completion definition",
          "Process for approved time extensions",
          "Snagging and reinspection steps",
          "Defect-liability obligations",
          "Warranties and manufacturer documents",
          "As-built / close-out information where applicable",
          "Conditions for final payment and retention release",
        ],
      },
      {
        id: "compare",
        title: "Five-minute contract comparison before you decide",
        steps: [
          { title: "1. Compare scope", text: "Are both bidders pricing the same drawings, systems and finishing level?" },
          { title: "2. Compare exclusions", text: "Mark every excluded item and estimate its likely impact separately." },
          { title: "3. Compare cash flow", text: "Check how much money is paid before equivalent work is complete." },
          { title: "4. Compare change rules", text: "Look for a clear variation and time-extension process." },
          { title: "5. Compare handover protection", text: "Check snagging, warranties, defects and final-payment conditions." },
        ],
      },
    ],
    faqs: [
      ["What should be included in a house construction contract in Saudi Arabia?", "At minimum, identify the parties, project scope, drawings and specifications, price basis, VAT treatment, payment milestones, programme, variations, materials, responsibilities, defects and handover requirements."],
      ["Should I pay a large advance to a contractor?", "The appropriate commercial arrangement depends on the project and contractor, but owners should understand what the advance funds, what security or mobilisation output is expected and how later payments track verified progress."],
      ["Is this the same as choosing a contractor?", "No. Contractor selection focuses on capability, references, team, quotations and fit. This page focuses on the agreement after you are close to appointing someone."],
      ["Can Mawsooq review my contractor offer?", "Mawsooq can help you identify scope, pricing and project-control questions to clarify. For formal legal interpretation or legal drafting, use appropriately qualified legal counsel."],
    ],
    sources: [officialSources.zatca, officialSources.baladyPermit, officialSources.sbc],
  },
  {
    slug: "house-construction-cost-jeddah",
    role: "cluster",
    category: "Jeddah Construction Cost",
    primaryKeyword: "house construction cost Jeddah",
    metaTitle: "House Construction Cost Jeddah (2026)",
    title: "House Construction Cost in Jeddah: 2026 Budget Guide for Villas and Family Homes",
    description:
      "Planning a house in Jeddah? Estimate construction cost by built-up area and scope, understand local design and procurement factors, and send a project brief directly to Mawsooq on WhatsApp.",
    excerpt:
      "A city-specific lead page for Jeddah homeowners comparing construction budgets, design choices and contractor quotations.",
    image: "/images/blog/lead-clusters-en/house-construction-cost-jeddah.webp",
    imageAlt: "House construction cost in Jeddah Saudi Arabia",
    datePublished: "2026-08-18",
    dateModified: "2026-08-21",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I am planning a house / villa in JEDDAH. District / location: __. Plot size: __ m². Approximate built-up area: __ m². Floors: __. Scope: shell / finished / turnkey. Please help me estimate the budget and next steps.",
    relatedSlugs: [
      "construction-cost-per-square-meter-saudi-arabia",
      "construction-cost-calculator-saudi-arabia",
      "villa-construction-cost-saudi-arabia",
      "building-permit-saudi-arabia",
      "choose-construction-contractor-saudi-arabia",
    ],
    highlights: [
      { value: "Jeddah", label: "city-specific commercial search intent" },
      { value: "Built area", label: "better starting point than plot area" },
      { value: "Local quote", label: "replace generic rates before signing" },
    ],
    takeaways: [
      "This page owns Jeddah-specific house construction cost intent; the national page continues to own Saudi-wide cost-per-square-metre queries.",
      "Use the national planning bands for feasibility, then refresh pricing with Jeddah-specific project quotations.",
      "Coastal climate, envelope choices, waterproofing, HVAC design and finish selections should be coordinated for the actual site and design.",
      "The final budget depends on built-up area, design complexity, contractor scope and what is excluded from the quotation.",
      "The WhatsApp CTA collects district, area, floors and scope to turn search traffic into qualified local leads.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["planning-bands", "Planning bands"],
      ["example", "Jeddah worked example"],
      ["local-factors", "Jeddah project factors"],
      ["full-budget", "What to add beyond the metre rate"],
      ["quote-pack", "Prepare a quote-ready brief"],
      ["contractors", "Compare contractors"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: how should you estimate a house in Jeddah?",
        paragraphs: [
          "Start with total built-up area, select a realistic construction scope and finish level, then use a planning band only for feasibility. Before signing, replace that early estimate with Jeddah-specific contractor quotations based on coordinated drawings and the same scope.",
          "Jeddah searches have clear local commercial intent. This page therefore focuses on the questions a real owner should answer before requesting a quote rather than repeating the national Saudi construction-cost guide.",
        ],
        callout: {
          title: "Get a Jeddah-specific conversation",
          text: "Send your district or broad location, plot size, total built-up area, number of floors and preferred finish level through WhatsApp. If you already have drawings or a contractor offer, mention that too.",
        },
        image: sharedImages.villa,
      },
      {
        id: "planning-bands",
        title: "Use national planning bands carefully, then localise the quotation",
        paragraphs: [
          "Mawsooq's early-feasibility bands below are used across the Saudi construction cluster so the owner can compare scope consistently. They are not published Jeddah market rates and should not be treated as a contractor promise.",
        ],
        table: {
          caption: "Illustrative feasibility bands before Jeddah-specific quotations",
          headers: ["Planning level", "Indicative band", "Best use"],
          rows: [
            ["Controlled / economy", "SAR 900–1,250/m²", "Early feasibility"],
            ["Standard family home", "SAR 1,300–1,850/m²", "Working budget before tender"],
            ["High specification", "SAR 2,000–3,500+/m²", "Premium-system and finish planning"],
          ],
        },
        note: "Use current contractor and supplier quotations for the actual project before making a financial commitment.",
      },
      {
        id: "example",
        title: "Worked example: 350 m² family house in Jeddah",
        paragraphs: [
          "For a 350 m² total built-up area house, a standard early-feasibility band of SAR 1,300–1,850/m² produces a construction-base range of about SAR 455,000–647,500. That base does not automatically include design, authority costs, utilities, external works, kitchens, loose furniture, contingency or every tax-related item.",
          "The example gives the owner a ceiling and floor for early discussion. The next step is not to keep refining the same generic multiplication; it is to issue enough project information for comparable Jeddah quotations.",
        ],
        bars: [
          { label: "Structure and envelope", value: 38 },
          { label: "MEP systems", value: 22 },
          { label: "Finishes", value: 25 },
          { label: "External works / allowances", value: 15 },
        ],
        image: sharedImages.site,
      },
      {
        id: "local-factors",
        title: "Jeddah project factors that deserve early design attention",
        paragraphs: [
          "Jeddah's hot-humid coastal environment makes envelope, waterproofing, ventilation, air-conditioning and exterior material decisions important parts of design coordination. The exact technical solution depends on the project, exposure and applicable code requirements, so these decisions should be made by the design team rather than copied from a generic online detail.",
        ],
        checklist: [
          "Coordinate façade and glazing strategy with energy and comfort goals.",
          "Specify waterproofing systems and testing responsibilities clearly.",
          "Coordinate HVAC loads, equipment space and condensate drainage early.",
          "Select exterior materials suitable for the actual exposure and maintenance plan.",
          "Keep roof, terrace and wet-area drainage details visible in the tender scope.",
        ],
        image: sharedImages.materials,
      },
      {
        id: "full-budget",
        title: "What the Jeddah house budget needs beyond a square-metre base",
        table: {
          caption: "Budget lines owners commonly need to keep separate",
          headers: ["Budget line", "Examples"],
          rows: [
            ["Professional services", "Architecture, structural, MEP, supervision"],
            ["Approvals and testing", "Permit workflow and project-specific technical requirements"],
            ["External works", "Boundary walls, gates, paving, landscape"],
            ["Owner-supplied items", "Kitchen, wardrobes, appliances or specialist systems where excluded"],
            ["Utilities and connections", "Project-specific service coordination and charges"],
            ["Risk allowance", "Contingency for early uncertainty and approved changes"],
          ],
        },
      },
      {
        id: "quote-pack",
        title: "Prepare a quote-ready Jeddah brief",
        steps: [
          { title: "1. State the district", text: "Give the broad location so access and logistics can be discussed realistically." },
          { title: "2. Confirm total built area", text: "Separate plot area from constructed floor area." },
          { title: "3. Define the handover scope", text: "Shell, finished and turnkey are different commercial products." },
          { title: "4. Attach drawings if available", text: "Comparable pricing needs the same design information for every bidder." },
          { title: "5. State the target finish level", text: "Show whether you want controlled, standard or premium selections." },
          { title: "6. Send it on WhatsApp", text: "A structured brief reduces back-and-forth and improves lead qualification." },
        ],
      },
      {
        id: "contractors",
        title: "Compare Jeddah contractor offers on scope, not headline price",
        checklist: [
          "Same drawings and scope for every bidder",
          "Written inclusions and exclusions",
          "Clear VAT treatment",
          "Defined material allowances or specifications",
          "Payment milestones linked to progress",
          "Programme, variation procedure and handover requirements",
        ],
        image: sharedImages.contractor,
      },
    ],
    faqs: [
      ["How much does it cost to build a house in Jeddah?", "The answer depends on total built-up area, finish level, design complexity and scope. Use this page's illustrative Saudi planning bands for early feasibility, then replace them with current Jeddah-specific quotations."],
      ["Is Jeddah construction always more expensive than other Saudi cities?", "Do not assume a fixed percentage difference. Contractor competition, material selections, logistics, project design and scope can all change the result. Compare live project-specific offers."],
      ["What information produces a better Jeddah estimate?", "City district, plot size, total built-up area, floors, finish level, scope and available drawings are the most useful starting inputs."],
      ["Can Mawsooq help if I only have a plot and no design yet?", "Yes. Send the plot location, area, family brief and approximate budget. Mawsooq can help identify the design and cost-planning steps needed before contractor pricing."],
    ],
    sources: [officialSources.gastat, officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode, officialSources.zatca],
  },
  {
    slug: "house-construction-cost-dammam-khobar",
    role: "cluster",
    category: "Eastern Province Cost",
    primaryKeyword: "house construction cost Dammam",
    metaTitle: "House Construction Cost Dammam & Khobar (2026)",
    title: "House Construction Cost in Dammam & Khobar: 2026 Eastern Province Guide",
    description:
      "Estimate house and villa construction cost in Dammam and Khobar using built-up area, scope and finish level, then prepare a quote-ready brief for local contractors.",
    excerpt:
      "A local lead-generation guide for homeowners planning residential construction in Dammam, Khobar and the Eastern Province.",
    image: "/images/blog/lead-clusters-en/house-construction-cost-dammam-khobar.webp",
    imageAlt: "House construction cost in Dammam and Khobar Saudi Arabia",
    datePublished: "2026-08-17",
    dateModified: "2026-08-21",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I am planning a house / villa in DAMMAM or KHOBAR. Location: __. Plot size: __ m². Approximate built-up area: __ m². Floors: __. Scope: shell / finished / turnkey. Please help me estimate the budget and next steps.",
    relatedSlugs: [
      "construction-cost-per-square-meter-saudi-arabia",
      "construction-cost-calculator-saudi-arabia",
      "villa-construction-cost-saudi-arabia",
      "building-permit-saudi-arabia",
      "choose-construction-contractor-saudi-arabia",
    ],
    highlights: [
      { value: "Dammam", label: "local homeowner cost intent" },
      { value: "Khobar", label: "premium residential project potential" },
      { value: "Eastern Province", label: "location-qualified WhatsApp leads" },
    ],
    takeaways: [
      "This page owns Dammam / Khobar local cost intent and does not replace the national Saudi cost-per-square-metre guide.",
      "Use one consistent national feasibility framework, then obtain local project quotations for the actual design and site.",
      "Coastal exposure, waterproofing, exterior materials and HVAC decisions should be coordinated with the actual site conditions and applicable code requirements.",
      "Keep external works, owner-supplied packages, professional fees and tax treatment visible when comparing offers.",
      "The CTA asks for exact Eastern Province location and project data so WhatsApp enquiries arrive more qualified.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["budget", "Budget framework"],
      ["example", "Worked example"],
      ["local-factors", "Eastern Province project factors"],
      ["scope", "Scope checklist"],
      ["quote-ready", "Become quote-ready"],
      ["compare", "Compare contractor offers"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: how should you budget a house in Dammam or Khobar?",
        paragraphs: [
          "Use total built-up area, scope and finish level to establish an early feasibility range, then replace generic rates with project-specific Dammam or Khobar quotations. The search intent is local, but the pricing discipline remains the same: compare the same drawings, inclusions and exclusions.",
          "This article is intentionally location-specific. National cost-per-square-metre questions stay on the main Saudi guide, while this page is designed to attract owners whose project is already in the Eastern Province and who are more likely to need a real design, budget or contractor conversation.",
        ],
        callout: {
          title: "Eastern Province project brief",
          text: "Send Dammam / Khobar / nearby city, district, plot size, built-up area, floors, finish level and current project stage on WhatsApp for a more relevant conversation.",
        },
        image: sharedImages.villa,
      },
      {
        id: "budget",
        title: "Use a consistent feasibility framework before local pricing",
        table: {
          caption: "Illustrative Saudi residential feasibility bands",
          headers: ["Planning level", "Indicative band", "What to do next"],
          rows: [
            ["Controlled / economy", "SAR 900–1,250/m²", "Validate the concept and area"],
            ["Standard family home", "SAR 1,300–1,850/m²", "Prepare coordinated tender information"],
            ["High specification", "SAR 2,000–3,500+/m²", "Define premium systems and finishes early"],
          ],
        },
        note: "These are Mawsooq planning bands used for feasibility, not official Dammam or Khobar market tariffs.",
      },
      {
        id: "example",
        title: "Worked example: 420 m² villa in the Eastern Province",
        paragraphs: [
          "A 420 m² villa using the standard feasibility band of SAR 1,300–1,850/m² gives an early construction-base range of about SAR 546,000–777,000. The owner should then add project-specific design, approvals, utilities, external works, specialist packages, contingency and tax treatment as separate visible lines.",
          "Once the design is developed, the useful question becomes: which Dammam or Khobar contractor can deliver the same defined scope, quality and programme—not which online rate is lowest.",
        ],
        bars: [
          { label: "Structure and envelope", value: 38 },
          { label: "MEP systems", value: 22 },
          { label: "Internal finishes", value: 25 },
          { label: "External works / allowances", value: 15 },
        ],
        image: sharedImages.site,
      },
      {
        id: "local-factors",
        title: "Eastern Province design and site factors to discuss early",
        paragraphs: [
          "For coastal or near-coastal sites, the design team should consider the actual environmental exposure when specifying exterior materials, waterproofing, metalwork, HVAC and maintenance strategy. The required solution varies by location and design, so project-specific engineering should control the specification.",
        ],
        checklist: [
          "Confirm the exact plot location and access conditions.",
          "Coordinate exterior material durability with expected exposure.",
          "Detail roof, terrace and wet-area waterproofing clearly.",
          "Coordinate HVAC design, equipment areas and condensate drainage.",
          "Confirm utility and external-work scope before contractor comparison.",
        ],
        image: sharedImages.materials,
      },
      {
        id: "scope",
        title: "Scope items that can make two Eastern Province quotations look artificially different",
        table: {
          caption: "Normalise these items before comparing price",
          headers: ["Package", "Check whether included"],
          rows: [
            ["HVAC", "Equipment, controls, ducts / piping and commissioning"],
            ["Waterproofing", "System, preparation, testing and warranty"],
            ["External works", "Boundary wall, gate, paving and landscape"],
            ["Joinery", "Kitchen, wardrobes, doors and decorative work"],
            ["Electrical / smart systems", "Fixtures, devices, controls and specialist systems"],
            ["VAT", "Whether the quoted total is inclusive or exclusive"],
          ],
        },
      },
      {
        id: "quote-ready",
        title: "How to become quote-ready before contacting contractors",
        steps: [
          { title: "1. Confirm the family brief", text: "Fix the main spaces, floor count and target built-up area." },
          { title: "2. Develop coordinated drawings", text: "Architecture, structure and MEP should not be priced as disconnected concepts." },
          { title: "3. Define finish level", text: "Set allowances or specifications for the items that move the budget." },
          { title: "4. Define external works", text: "Do not leave walls, gates and paving as invisible future extras." },
          { title: "5. Request comparable offers", text: "Every bidder receives the same issue and scope." },
          { title: "6. Send the project brief to Mawsooq", text: "Use WhatsApp to clarify the next design, budgeting or contractor step." },
        ],
        image: sharedImages.plans,
      },
      {
        id: "compare",
        title: "Compare Dammam and Khobar contractor offers beyond the total",
        checklist: [
          "Scope and exclusions",
          "Material standards and allowances",
          "Project team and site supervision",
          "Programme and procurement assumptions",
          "Payment schedule",
          "Variation process",
          "Testing, snagging and handover documents",
        ],
        image: sharedImages.contractor,
      },
    ],
    faqs: [
      ["How much does it cost to build a house in Dammam?", "It depends on built-up area, scope, structure, finish level and the project-specific market quotation. Use the feasibility ranges here only as a planning starting point."],
      ["Is Khobar more expensive than Dammam for villa construction?", "Do not rely on a fixed city percentage. Specification, contractor scope, site conditions and design can outweigh a generic city comparison. Request comparable live quotations for the same project information."],
      ["What should I send for an Eastern Province estimate?", "Send the exact city or district, plot size, total built-up area, number of floors, finish level, project stage and any available drawings."],
      ["Can Mawsooq help with design as well as construction planning?", "Yes. The WhatsApp brief can start with design, cost planning, contractor comparison or a combination depending on your current project stage."],
    ],
    sources: [officialSources.gastat, officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode, officialSources.zatca],
  },
`;

function assertFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required file not found: ${path.relative(root, filePath)}`);
  }
}

function patchBlogData() {
  assertFile(blogDataPath);
  let text = fs.readFileSync(blogDataPath, "utf8");

  text = text.replace(/export const DATA_AS_OF = "[^"]+";/, 'export const DATA_AS_OF = "2026-08-21";');

  const missing = newSlugs.filter((slug) => !text.includes(`slug: "${slug}"`));
  if (missing.length > 0) {
    const marker = "\n];\n\nexport const allArticles";
    const index = text.indexOf(marker);
    if (index === -1) {
      throw new Error("Could not find the end of the English clusters array in blog-data.js");
    }
    text = text.slice(0, index) + "\n" + articlesBlock + text.slice(index);
  }

  const oldSibling = /export function getSiblings\(currentSlug, limit = 3\) \{\s*return clusters\.filter\(\(article\) => article\.slug !== currentSlug\)\.slice\(0, limit\);\s*\}/m;
  const curatedSibling = `export function getSiblings(currentSlug, limit = 3) {\n  const current = getArticleBySlug(currentSlug);\n  const published = clusters.filter((article) => article.slug !== currentSlug);\n  const curated = (current?.relatedSlugs || [])\n    .map((slug) => published.find((article) => article.slug === slug))\n    .filter(Boolean);\n  const fallback = published.filter(\n    (article) => !curated.some((item) => item.slug === article.slug),\n  );\n  return [...curated, ...fallback].slice(0, limit);\n}`;

  if (oldSibling.test(text)) {
    text = text.replace(oldSibling, curatedSibling);
  }

  for (const slug of newSlugs) {
    if (!text.includes(`slug: "${slug}"`)) {
      throw new Error(`Failed to add English cluster: ${slug}`);
    }
  }

  fs.writeFileSync(blogDataPath, text, "utf8");
  console.log("Updated English cluster data and curated internal linking.");
}

function patchBlogHub() {
  if (!fs.existsSync(blogHubPath)) return;
  let text = fs.readFileSync(blogHubPath, "utf8");

  text = text.replaceAll(
    "/images/blog/construction-cost-calculator-saudi-arabia.png",
    "/images/blog/lead-clusters-en/cost-to-build-two-story-house-saudi-arabia.webp",
  );
  text = text.replace(
    "Current guidance on costs, permits, contractor selection, timelines and house-building strategy in Saudi Arabia—written to help you plan the next move.",
    "Current guidance on costs, city budgets, extensions, contracts, permits and contractor decisions in Saudi Arabia—built to help real homeowners move from search to a project-ready brief.",
  );
  text = text.replace(
    "Costs, calculators, permits, contractor selection and timelines for Saudi house projects.",
    "Costs, calculators, local city budgets, contracts, extensions, permits and contractor decisions for Saudi house projects.",
  );

  fs.writeFileSync(blogHubPath, text, "utf8");
  console.log("Updated English blog hub hero and lead-focused copy.");
}

function ensureSitemapIntegration() {
  assertFile(sitemapPath);
  const text = fs.readFileSync(sitemapPath, "utf8");
  const hasImport = text.includes('getAllEnglishBlogEntries') && text.includes('./(en)/en/blog/blog-data');
  const hasLoop = text.includes('for (const entry of getAllEnglishBlogEntries())');

  if (!hasImport || !hasLoop) {
    throw new Error(
      "The current sitemap does not use getAllEnglishBlogEntries(). Please restore the English sitemap integration before applying this patch.",
    );
  }

  console.log("Verified sitemap: new English articles are included automatically through getAllEnglishBlogEntries().");
}

patchBlogData();
patchBlogHub();
ensureSitemapIntegration();

console.log("English lead-cluster patch applied successfully.");
console.log("New URLs:");
for (const slug of newSlugs) console.log(`- /en/blog/${slug}/`);
