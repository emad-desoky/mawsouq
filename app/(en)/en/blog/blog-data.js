/**
 * English SEO topic cluster for Saudi residential construction.
 * Add new articles here and the pillar, sibling navigation, blog hub,
 * and sitemap helper will pick them up automatically.
 */

export const SITE_URL = "https://mawsouq.com";
export const BLOG_BASE = "/en/blog";
export const DATA_AS_OF = "2026-07-30";

export const business = {
  name: "Mawsooq",
  whatsappNumber: "201223328270",
  displayPhone: "+20 122 332 8270",
  email: "info@mawsouq.com",
  logo: `${SITE_URL}/mawsouq-logo.png`,
};

export const routes = {
  home: "/en/",
  blogHub: "/en/blog/",
  about: "/en/#about",
  contact: "/en/#contact",
  calculator: "/en/#cost-calculator",
};

export function whatsappLink(message) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const officialSources = {
  gastat: {
    label: "GASTAT Construction Cost Index — June 2026",
    url: "https://www.stats.gov.sa/documents/20117/2435267/CCI%2BJune%2B%2B2026-EN.pdf/d1d6912f-171b-24ca-acd2-876762f5a944",
  },
  baladyPermit: {
    label: "Balady — Issuing a Building Permit",
    url: "https://balady.gov.sa/en/services/issuing-building-permit",
  },
  baladyFaq: {
    label: "Balady — Building permit application steps",
    url: "https://balady.gov.sa/en/faq/can-i-obtain-building-permit-online",
  },
  sbc: {
    label: "Saudi Building Code",
    url: "https://www.sbc.gov.sa/En/Pages/default.aspx",
  },
  residentialCode: {
    label: "Saudi Residential Building Code SBC 1101–1102",
    url: "https://sbc.gov.sa/En/BC/Pages/BuildingCode/BCDetails.aspx?codeId=1101&year=2024",
  },
  zatca: {
    label: "ZATCA — Contracting sector VAT guideline",
    url: "https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-For-the-Contracting-Sector-under-VAT-Provision.pdf",
  },
};

const sharedImages = {
  plans: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=86",
    alt: "Architectural drawings and planning documents for a Saudi house project",
  },
  site: {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=86",
    alt: "Residential construction site with concrete structure and site team",
  },
  materials: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=86",
    alt: "Construction materials and engineering work for a residential project",
  },
  contractor: {
    src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=86",
    alt: "Construction professionals reviewing a residential building project",
  },
  villa: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=86",
    alt: "Modern completed villa suitable for Saudi residential construction planning",
  },
  interior: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=86",
    alt: "Modern home interior showing a standard residential finishing level",
  },
};

export const pillar = {
  slug: "build-a-house-saudi-arabia",
  role: "pillar",
  category: "Saudi Construction Guide",
  primaryKeyword: "build a house in Saudi Arabia",
  metaTitle: "Build a House in Saudi Arabia: 2026 Guide",
  title: "How to Build a House in Saudi Arabia: Cost, Permits and Process",
  description:
    "Planning to build a house in Saudi Arabia? Compare cost bands, permits, timelines, contractor checks and the full process before you start.",
  excerpt:
    "A practical 2026 roadmap for planning, designing, permitting and constructing a private house or villa in Saudi Arabia.",
  image: "/images/blog/build-house-saudi-arabia-2026.webp",
  imageAlt: "How to build a house in Saudi Arabia in 2026",
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  readTime: "18 min read",
  author: "Mawsooq Editorial Team",
  whatsappMessage:
    "Hello Mawsooq, I read your guide about building a house in Saudi Arabia. I would like help planning my budget, design and next steps.",
  highlights: [
    { value: "6 phases", label: "from brief to handover" },
    { value: "10–15%", label: "planning contingency commonly considered" },
    { value: "+2.6%", label: "annual residential cost-index change in June 2026" },
  ],
  takeaways: [
    "Start with a written brief, realistic built-up area and a budget ceiling before requesting designs.",
    "Treat cost-per-square-metre figures as planning ranges, not fixed contractor quotations.",
    "A building permit is issued through the Balady process and requires coordinated professional documentation.",
    "The Saudi Building Code affects architectural, structural, energy, plumbing, electrical and safety decisions.",
    "Compare contractor scope, exclusions, payment stages and supervision—not only the total price.",
    "Keep design decisions and material selections ahead of construction to reduce delay and variation orders.",
  ],
  toc: [
    ["quick-answer", "Quick answer"],
    ["budget", "How much should you budget?"],
    ["process", "The full building process"],
    ["permits", "Permits and code compliance"],
    ["team", "Who you need on the project"],
    ["site-design", "Plot and design decisions"],
    ["cost-control", "Cost-control checkpoints"],
    ["scenario", "Illustrative planning scenario"],
    ["contract", "How to compare contractor offers"],
    ["timeline", "Timeline and delay risks"],
    ["mistakes", "Common mistakes"],
    ["related-guides", "Related guides"],
    ["faqs", "FAQs"],
  ],
  sections: [
    {
      id: "quick-answer",
      title: "Quick answer: what does it take to build a house in Saudi Arabia?",
      paragraphs: [
        "To build a house in Saudi Arabia successfully, you need five things aligned before site work begins: a clear owner brief, coordinated architectural and engineering drawings, a compliant permit package, a realistic cost plan, and a contractor agreement that defines scope and payment stages. The project becomes risky when one of these is missing and construction starts anyway.",
        "The broad journey is simple to describe but demanding to manage: define the house, design it, obtain approvals, appoint the execution team, build and inspect each stage, then close defects before handover. This pillar page owns that complete journey. The supporting guides below go deeper into cost per square metre, villa budgets, permits, contractor selection and timeline planning without duplicating the same search intent.",
      ],
      callout: {
        title: "Current market context",
        text: "GASTAT reported that Saudi residential construction costs were 2.6% higher year on year in June 2026. That is an index movement—not a house quotation—but it reinforces the need to refresh supplier and contractor prices before signing.",
      },
    },
    {
      id: "budget",
      title: "How much should you budget before requesting quotations?",
      paragraphs: [
        "A useful early budget begins with total built-up area, not plot area. Multiply the area of every constructed floor, then add the items that simple metre rates often omit: design and engineering, permits, soil investigation where required, external walls, utility connections, landscaping, kitchens, air-conditioning strategy, supervision, taxes and contingency.",
        "Published Saudi market guides commonly place standard residential construction in a wide range because city, structural system and finish specification change the result. For early feasibility only, Mawsooq uses three planning bands shown below. They are not official rates and must be replaced by project-specific quantities and live quotations.",
      ],
      table: {
        caption: "Illustrative 2026 residential planning bands in Saudi riyals per built square metre",
        headers: ["Planning level", "Indicative band", "What it usually assumes", "Use it for"],
        rows: [
          ["Controlled / economy", "SAR 900–1,250/m²", "Simple geometry and disciplined selections", "Initial feasibility"],
          ["Standard family home", "SAR 1,300–1,850/m²", "Mid-range systems and finishes", "Most early budgets"],
          ["High specification", "SAR 2,000–3,500+/m²", "Custom details, premium systems and finishes", "Upper-budget planning"],
        ],
      },
      bars: [
        { label: "Structure and envelope", value: 38 },
        { label: "MEP systems", value: 22 },
        { label: "Internal finishes", value: 25 },
        { label: "External works and allowances", value: 15 },
      ],
      note:
        "The percentages are a planning visual, not a bill of quantities. A structural system, basement, difficult soil, large glazing areas or premium MEP package can change the split materially.",
      image: sharedImages.plans,
    },
    {
      id: "process",
      title: "The house-building process, step by step",
      paragraphs: [
        "A well-managed project moves through gates. Do not release the next stage simply because the previous contractor says it is finished; release it after the required drawings, inspections and decisions are complete.",
      ],
      steps: [
        { title: "1. Define the brief", text: "Confirm plot constraints, family needs, room schedule, privacy requirements, parking, future expansion, preferred style and maximum investment." },
        { title: "2. Develop coordinated design", text: "Architectural, structural and MEP decisions must work together. Late coordination creates slab openings, ceiling conflicts and expensive rework." },
        { title: "3. Prepare the approval package", text: "Use licensed professionals and the correct Balady workflow. Keep ownership, survey and technical documents ready before submission." },
        { title: "4. Tender a controlled scope", text: "Give competing contractors the same drawings, specifications and schedule of quantities so the offers are genuinely comparable." },
        { title: "5. Construct with inspection points", text: "Inspect excavation, reinforcement, concrete, waterproofing, concealed services and finishing samples before the work is covered." },
        { title: "6. Snag, document and hand over", text: "Close defects, collect warranties and as-built information, verify systems and retain final payment until contractual handover requirements are met." },
      ],
      image: sharedImages.site,
    },
    {
      id: "permits",
      title: "Building permits and Saudi Building Code compliance",
      paragraphs: [
        "Balady states that a building-permit application is handled through its construction-permit services and routed to a classified engineering office. The exact attachments and review path depend on the property and municipality, so your engineering office should verify the current requirements for the plot rather than relying on a generic checklist.",
        "The Saudi Building Code is not one drawing standard. It is a system of requirements covering areas such as structural design, soils and foundations, concrete, electrical work, mechanical systems, plumbing, energy conservation and residential buildings. Your design team should identify which code provisions apply and record them in the design basis.",
      ],
      checklist: [
        "Confirm the ownership and survey information for the exact plot.",
        "Appoint an appropriately licensed engineering office.",
        "Coordinate architectural, structural and MEP submissions before upload.",
        "Resolve setbacks, height, parking and planning constraints early.",
        "Do not start excavation before the required permit is issued.",
      ],
    },
    {
      id: "team",
      title: "Who should be involved in a Saudi house project?",
      paragraphs: [
        "One company may provide several roles, but the responsibilities still need to be explicit. The owner needs a decision-maker, the designer needs a complete brief, the engineer needs verified site and loading information, and the contractor needs issued construction documents.",
      ],
      table: {
        caption: "Core project roles and the decision each role protects",
        headers: ["Role", "Primary responsibility", "Owner should verify"],
        rows: [
          ["Architect", "Space, circulation, elevations and planning coordination", "Deliverables, revisions and authority scope"],
          ["Structural engineer", "Foundations and structural safety", "Design basis, soil inputs and stamped documents"],
          ["MEP engineers", "Electrical, plumbing, HVAC and service coordination", "Loads, equipment assumptions and ceiling coordination"],
          ["Cost planner / estimator", "Quantities, budget and change control", "Included scope and rate date"],
          ["Contractor", "Resources, procurement, execution and quality control", "Licence, team, programme, exclusions and references"],
          ["Supervision consultant", "Independent checks against drawings and specifications", "Inspection frequency and reporting authority"],
        ],
      },
      image: sharedImages.contractor,
    },
    {
      id: "contract",
      title: "How to compare contractor offers without choosing the cheapest mistake",
      paragraphs: [
        "A low total can be genuine, but it can also be the result of missing items, low provisional allowances or a different interpretation of the drawings. The safest comparison normalises every offer to the same scope and marks each exclusion visibly.",
        "Ask each bidder to confirm whether the amount includes VAT, temporary works, testing, waterproofing systems, utility coordination, waste removal, external works, air-conditioning equipment, kitchen and wardrobes. ZATCA's contracting-sector guidance explains that construction services can be subject to VAT; the commercial offer should state the tax treatment clearly.",
      ],
      checklist: [
        "Same issued drawings and specifications for every bidder",
        "Itemised price rather than one unexplained lump sum",
        "Written inclusions, exclusions and provisional sums",
        "Programme tied to measurable milestones",
        "Payment schedule linked to verified work—not calendar dates alone",
        "Variation process requiring written approval before execution",
        "Defects period, warranties, retention and handover documents",
      ],
    },
    {
      id: "timeline",
      title: "How long does the complete journey take?",
      paragraphs: [
        "Design, approvals, procurement and construction overlap only when decisions are coordinated. A private villa can take well over a year from first design meeting to handover, and larger or highly customised projects take longer. Published contractor guidance in Saudi Arabia often places total design-to-handover planning in the 15–30 month range, while the construction phase alone may take roughly 12–24 months for a mid-size villa. Treat these as programme benchmarks, not promises.",
        "The owner can protect the programme by freezing the room brief, approving samples on time, ordering long-lead equipment early and preventing informal site changes. The detailed timeline cluster explains each phase and where delay commonly appears.",
      ],
      timeline: [
        ["Brief and concept", "Clarify decisions before detailed engineering"],
        ["Design coordination", "Lock structural and MEP interfaces"],
        ["Permit workflow", "Respond quickly to authority or engineering-office comments"],
        ["Tender and procurement", "Compare complete scope and order long-lead items"],
        ["Construction", "Inspect work before concealment"],
        ["Testing and handover", "Close defects and collect documents"],
      ],
      image: sharedImages.villa,
    },

    {
      id: "site-design",
      title: "Plot and design decisions that shape the budget before construction",
      paragraphs: [
        "A house can be expensive because of what is drawn, not only because of what materials cost. The number of floors, structural spans, façade projections, glazing ratio, ceiling heights, wet-area locations and circulation all influence quantities and labour. A compact plan with aligned walls and service zones is normally easier to build than a fragmented plan with many corners, cantilevers and changing levels.",
        "Plot conditions also matter. Access for concrete pumps and delivery vehicles, neighbouring buildings, excavation depth, retaining requirements, groundwater, existing services and storage space can affect methodology and productivity. The design team should record these constraints before the owner compares concept options, because two houses with the same area can carry very different construction risk.",
        "Value engineering works best during design. It means preserving the function and performance the owner needs while changing an expensive geometry, system or specification. It does not mean deleting waterproofing, reducing structural safety or choosing the lowest-quality concealed product after work has started.",
      ],
      checklist: [
        "Confirm permitted footprint, setbacks and height before fixing the room schedule",
        "Keep kitchens, bathrooms and vertical service routes coordinated where practical",
        "Review large spans, double-height spaces and cantilevers with the structural engineer",
        "Decide the HVAC concept before ceiling and façade details are frozen",
        "Price optional features such as lifts, pools and premium cladding separately",
        "Approve a realistic material and finish benchmark before tender",
      ],
      image: sharedImages.plans,
    },
    {
      id: "cost-control",
      title: "Cost-control checkpoints from concept to handover",
      paragraphs: [
        "Cost control is not one estimate prepared at the beginning. It is a sequence of checks that becomes more accurate as the design develops. At concept stage, the owner controls area, form and specification. At coordinated-design stage, the team measures systems and quantities. At tender stage, the estimator reconciles bidder differences. During construction, every change is priced and approved before it becomes installed work.",
        "A practical cost report should show the approved budget, committed contracts, approved variations, pending decisions, forecast final cost and contingency remaining. This prevents the owner from believing the project is on budget simply because invoices paid to date are lower than the original allowance.",
      ],
      steps: [
        { title: "Concept checkpoint", text: "Test area, geometry, number of floors and major optional features against the budget ceiling." },
        { title: "Design-development checkpoint", text: "Update quantities when structure, MEP strategy, façade and finish standards are defined." },
        { title: "Tender checkpoint", text: "Normalise bids and explain every major difference from the pre-tender estimate." },
        { title: "Procurement checkpoint", text: "Track allowances, selected brands and long-lead purchases before orders are placed." },
        { title: "Construction checkpoint", text: "Record approved changes and forecast the final cost, not only payments already made." },
        { title: "Handover checkpoint", text: "Close final accounts, retention, warranties and outstanding defects before financial completion." },
      ],
    },
    {
      id: "scenario",
      title: "Illustrative planning scenario: a family house before tender",
      paragraphs: [
        "Consider an owner planning a two-floor family house with approximately 400 m² of total built-up area. The owner first tests a standard construction band to understand feasibility, but does not sign a contract from that multiplication. The architect then reduces unused corridor space, aligns wet areas and identifies the pool and premium stone façade as optional packages rather than hiding them inside the base budget.",
        "After architectural, structural and MEP coordination, the team prepares an itemised tender. One contractor appears cheaper, but its price excludes HVAC equipment, external paving, testing and VAT. A second contractor includes those items and provides a longer but resourced programme. Once the offers are normalised, the apparent price advantage largely disappears. This is why scope clarity creates a better commercial decision than a headline rate alone.",
        "The scenario is not a claim about a specific Mawsooq client or project. It demonstrates the decision process an owner can apply: define, coordinate, measure, compare, approve and track.",
      ],
      callout: {
        title: "Decision rule",
        text: "Do not ask which quotation is cheapest until every quotation is adjusted to the same area, scope, specification, tax basis and exclusions.",
      },
    },
    {
      id: "mistakes",
      title: "Common mistakes that increase cost or reduce quality",
      bullets: [
        "Designing a house larger than the family budget can finish to the required standard.",
        "Starting structural or MEP decisions after architectural approval instead of coordinating them together.",
        "Comparing contractor totals without comparing scope, quantities and exclusions.",
        "Paying large advances without defined procurement evidence or security.",
        "Changing room layouts after concrete and service routes are fixed.",
        "Selecting finishes one room at a time without a full procurement schedule.",
        "Treating supervision as optional when the owner cannot monitor the site daily.",
      ],
    },
  ],
  faqs: [
    ["How much does it cost to build a house in Saudi Arabia?", "The cost depends on total built-up area, city, structural system, specifications, finish level and excluded items. Early market planning bands can range from roughly SAR 900 per square metre for controlled economy work to SAR 3,500+ for high specifications, but only coordinated drawings and a current bill of quantities can produce a reliable project budget."],
    ["Can I start building before the permit is issued?", "Do not begin construction before the required building permit is issued. Balady provides the official permit workflow, and the project team should confirm the current municipal and technical requirements for the plot before excavation or structural work starts."],
    ["What is the difference between plot area and built-up area?", "Plot area is the land size. Built-up area is the total constructed floor area across all levels. Cost planning normally uses built-up area, so a 300 m² floor built across two levels can represent about 600 m² of constructed area before balconies, service spaces and external works are considered."],
    ["Should I use a lump-sum contract or measured quantities?", "The right format depends on design completeness and risk allocation. A lump sum is easier to administer when drawings and specifications are complete. Measured or remeasured contracts can suit uncertain quantities, but they require stronger cost control. In either case, define variations, exclusions, payment milestones and taxes clearly."],
    ["How much contingency should I keep?", "Many owners consider a planning contingency of around 10–15%, but the right amount depends on how complete the design is, how stable material selections are and how much site uncertainty remains. Contingency is not a replacement for missing scope; it is protection against genuine uncertainty."],
    ["Do I need separate architectural and structural engineers?", "The services may be provided by one multidisciplinary office, but architectural and structural responsibilities remain distinct. The architectural design defines space and planning, while the structural engineer designs the load-bearing system and foundations. MEP coordination should also occur before construction documents are issued."],
    ["How can Mawsooq help with my project?", "Mawsooq can help you clarify the project brief, understand the likely service scope, plan an early budget and identify the next professional steps. Send the plot location, approximate built area, number of floors and preferred finish level through WhatsApp for a more relevant conversation."],
  ],
  sources: [officialSources.gastat, officialSources.baladyPermit, officialSources.baladyFaq, officialSources.sbc, officialSources.residentialCode, officialSources.zatca],
};

export const clusters = [
  {
    slug: "construction-cost-per-square-meter-saudi-arabia",
    role: "cluster",
    category: "Construction Costs",
    primaryKeyword: "construction cost per square meter in Saudi Arabia",
    metaTitle: "Construction Cost per m² in Saudi Arabia (2026)",
    title: "Construction Cost per Square Meter in Saudi Arabia: 2026 Planning Guide",
    description: "Compare 2026 construction cost per square meter in Saudi Arabia by finish level, scope and city, with exclusions and a practical budgeting method.",
    excerpt: "Planning bands, scope checks and a better way to use price-per-metre figures without underbudgeting.",
    image: sharedImages.materials.src,
    imageAlt: "Construction cost per square meter in Saudi Arabia planning guide",
    datePublished: "2026-07-29",
    dateModified: "2026-07-30",
    readTime: "11 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage: "Hello Mawsooq, I read your Saudi construction cost per square meter guide. Please help me estimate my project based on area, city and finish level.",
    highlights: [
      { value: "SAR/m²", label: "use built-up area, not plot area" },
      { value: "3 bands", label: "economy, standard and high-spec planning" },
      { value: "+2.6%", label: "June 2026 residential cost-index change" },
    ],
    takeaways: [
      "A price per square metre is useful for feasibility, not contract award.",
      "Confirm what the rate includes before comparing two figures.",
      "Separate shell, MEP, finishes and external works for control.",
      "Refresh rates for the city and quotation date.",
    ],
    toc: [["quick-answer","Quick answer"],["bands","Planning bands"],["scope","What the rate includes"],["shell-turnkey","Shell versus turnkey"],["city","City and project factors"],["method","How to calculate"],["worked-example","Worked example"],["questions","Questions before relying on a rate"],["mistakes","Mistakes"],["faqs","FAQs"]],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "For early 2026 planning, residential house construction in Saudi Arabia is often discussed in broad bands of about SAR 900–1,250/m² for controlled economy work, SAR 1,300–1,850/m² for a standard family specification, and SAR 2,000–3,500+/m² for high specification work. These are indicative market bands, not official prices or contractor commitments.",
          "The number becomes meaningful only after you define built-up area, city, number of floors, structural system, finish standard and exclusions. A quote that excludes air-conditioning equipment, external works, VAT or kitchens cannot be compared directly with one that includes them.",
        ],
        callout: { title: "Official context", text: "GASTAT's June 2026 index recorded a 2.6% annual increase in residential construction costs. The index measures change in inputs; it does not publish a universal house-building rate." },
      },
      {
        id: "bands",
        title: "Indicative construction cost bands by finish level",
        table: {
          caption: "Early feasibility bands for Saudi residential construction",
          headers: ["Level", "Indicative band", "Typical characteristics", "Main risk"],
          rows: [
            ["Economy / controlled", "SAR 900–1,250/m²", "Simple form, standard systems, disciplined selections", "Missing items presented as savings"],
            ["Standard", "SAR 1,300–1,850/m²", "Balanced structure, MEP and mid-range finishes", "Specification drift during procurement"],
            ["High specification", "SAR 2,000–3,500+/m²", "Custom details, premium equipment and finishes", "Complex interfaces and long-lead items"],
          ],
        },
        paragraphs: [
          "Do not select the lowest band because the house looks simple in a rendering. Structural spans, glazing, ceiling systems, HVAC approach, waterproofing, stone cladding and joinery can move a visually simple house into a higher cost category.",
        ],
        bars: [
          { label: "Economy planning midpoint", value: 32 },
          { label: "Standard planning midpoint", value: 51 },
          { label: "High-spec planning midpoint", value: 82 },
        ],
        image: sharedImages.materials,
      },
      {
        id: "scope",
        title: "What should a square-metre rate include?",
        paragraphs: [
          "Ask for the rate basis in writing. At minimum, determine whether it includes foundations, structural frame, blockwork, waterproofing, plaster, MEP first and second fix, flooring, ceilings, paint, doors, windows, sanitary fixtures, electrical fixtures, HVAC equipment, external walls and site works.",
          "Design fees, permit fees, soil reports, utility connections, loose furniture and landscaping are frequently outside the simple construction rate. Taxes must also be stated clearly. ZATCA's contracting guidance should be considered when the supplier is pricing taxable construction services.",
        ],
        checklist: ["Built-up area definition", "Number of floors", "Foundation and slab type", "MEP systems", "Finish schedule", "External works", "VAT treatment", "Provisional allowances"],
      },
      {
        id: "shell-turnkey",
        title: "Shell, finishing and turnkey rates are not interchangeable",
        paragraphs: [
          "A shell rate normally focuses on foundations, concrete frame, slabs, blockwork and selected envelope items. Some shell quotations include excavation and waterproofing; others do not. A finishing rate may cover internal materials and labour but exclude equipment, joinery or external works. Turnkey is a commercial label rather than a universal technical definition, so the contract must list exactly what is ready at handover.",
          "When someone quotes one attractive rate, ask for the boundary of that rate. Does the shell end after blockwork or after plaster and waterproofing? Does the turnkey amount include air-conditioning equipment, kitchen, wardrobes, sanitary fixtures, lighting fixtures, gates and landscaping? The answer changes the final budget more than the label.",
        ],
        table: {
          caption: "Typical scope questions by pricing label",
          headers: ["Pricing label", "Usually discussed", "Items that still need confirmation"],
          rows: [
            ["Shell", "Foundations, frame, slabs and walls", "Excavation, waterproofing, plaster, windows and external works"],
            ["Shell plus MEP rough-in", "Structure and concealed service routes", "Equipment, fixtures, finishes and testing"],
            ["Finished", "Internal finishes and second-fix services", "Kitchen, wardrobes, HVAC units, landscape and loose furniture"],
            ["Turnkey", "A completed building ready for stated use", "Every inclusion, authority connection, tax and owner-supplied item"],
          ],
        },
      },
      {
        id: "city",
        title: "Why city, access and design complexity change the result",
        bullets: [
          "Material transport and supplier competition differ by location.",
          "Restricted access, neighbouring buildings and storage limits reduce productivity.",
          "Basements, retaining walls and difficult soil add structural and waterproofing scope.",
          "Large spans, cantilevers and extensive glazing increase design and execution complexity.",
          "Premium HVAC, smart-home and façade systems add equipment and coordination cost.",
        ],
        image: sharedImages.site,
      },
      {
        id: "method",
        title: "A safer calculation method",
        steps: [
          { title: "1. Calculate total built-up area", text: "Add all constructed floors and confirm how covered terraces, service rooms and roof structures are treated." },
          { title: "2. Choose a realistic planning band", text: "Base it on specification and scope, not the budget you hope to achieve." },
          { title: "3. Add separate project costs", text: "Design, permits, supervision, utilities, external works, furnishing and taxes should be visible." },
          { title: "4. Add contingency", text: "Use contingency for uncertainty, then reduce it as the design and quantities become more complete." },
          { title: "5. Replace the rate with a BOQ", text: "Before contract award, move from a general rate to itemised quantities and supplier-supported prices." },
        ],
      },
      {
        id: "worked-example",
        title: "Worked feasibility example without pretending it is a quotation",
        paragraphs: [
          "Assume a house has 220 m² on the ground floor and 180 m² on the first floor. The total built-up area used for the first calculation is 400 m². Applying a standard feasibility band of SAR 1,300–1,850/m² produces a construction allowance of SAR 520,000–740,000. That range does not automatically include design, permit-related costs, supervision, utility connections, boundary works, landscaping, furnishing or VAT.",
          "The next step is not to select the midpoint and call it the project price. The next step is to define the structural and finish scope, identify separate allowances and compare the resulting total with the owner's funding limit. Once drawings and quantities are available, the general band should be replaced by an itemised estimate.",
        ],
        callout: { title: "Why the range is wide", text: "At 400 m², every SAR 100/m² change moves the construction allowance by SAR 40,000. Small differences in scope and specification therefore become significant total amounts." },
      },
      {
        id: "questions",
        title: "Questions to ask before relying on any advertised rate",
        checklist: [
          "What date and city does the rate represent?",
          "Is the measurement based on gross built-up area or another method?",
          "Does it include all floors, roof rooms and covered external spaces?",
          "Is the rate shell-only, finished or genuinely turnkey?",
          "Which material and equipment standard is assumed?",
          "Are design, supervision, testing, permits and utilities included?",
          "Are external walls, gates, paving and landscape included?",
          "Is VAT included or added to the stated amount?",
          "What site and soil assumptions were used?",
          "When will the estimate be replaced by measured quantities?",
        ],
      },
      {
        id: "mistakes",
        title: "Common price-per-metre mistakes",
        bullets: ["Using plot area instead of total built area", "Comparing shell-only pricing with turnkey pricing", "Ignoring VAT and external works", "Applying one city's figure to another city without checking logistics", "Treating a social-media estimate as a signed quotation", "Failing to update rates after design changes"],
      },
    ],
    faqs: [
      ["What is the construction cost per square meter in Saudi Arabia in 2026?", "A practical early planning range may start around SAR 900–1,250/m² for controlled economy work, move to SAR 1,300–1,850/m² for standard family specifications and exceed SAR 2,000/m² for high specifications. Confirm scope and obtain current quotations because these are indicative bands, not official fixed prices."],
      ["Does the rate include land?", "No. Construction cost per square metre normally refers to the building work, not land purchase. Design, permits, supervision, utility connections, external works, furnishing and taxes may also be separate unless the quotation says otherwise."],
      ["Should I calculate using plot area?", "Use total built-up area, not plot area. Add the constructed area of every floor and confirm how covered terraces, roof rooms and service areas are measured. A large plot with a compact house can cost less to build than a smaller plot with a larger multi-storey house."],
      ["Why do contractor rates differ so much?", "Rates differ because contractors may price different scopes, brands, quantities, risk allowances and payment terms. One may exclude HVAC equipment and external works while another includes them. Compare itemised inclusions and exclusions before comparing the final rate."],
    ],
    sources: [officialSources.gastat, officialSources.zatca],
  },
  {
    slug: "villa-construction-cost-saudi-arabia",
    role: "cluster",
    category: "Villa Construction",
    primaryKeyword: "villa construction cost in Saudi Arabia",
    metaTitle: "Villa Construction Cost in Saudi Arabia (2026)",
    title: "Villa Construction Cost in Saudi Arabia: Budgeting from Design to Handover",
    description: "Estimate villa construction cost in Saudi Arabia by built area, specification and scope. See budget examples, exclusions and quote checks.",
    excerpt: "A villa-specific budget framework covering structure, MEP, finishes, external works and overlooked costs.",
    image: sharedImages.villa.src,
    imageAlt: "Villa construction cost in Saudi Arabia",
    datePublished: "2026-07-28",
    dateModified: "2026-07-30",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage: "Hello Mawsooq, I read your villa construction cost guide. I would like a planning estimate for my plot, villa area and preferred finish level.",
    highlights: [{value:"Built area",label:"the main quantity driver"},{value:"Scope",label:"defines whether two offers are comparable"},{value:"10–15%",label:"contingency considered at early stage"}],
    takeaways: ["Budget the total villa project, not only the contractor's building rate.","Separate structural, MEP, finishing and external packages.","Use a design freeze before final tender.","Keep optional features visible so they can be value-engineered."],
    toc: [["quick-answer","Quick answer"],["example","Budget examples"],["breakdown","Cost breakdown"],["extras","Often-missed items"],["save","How to control cost"],["faqs","FAQs"]],
    sections: [
      { id:"quick-answer", title:"Quick answer: how do you estimate a Saudi villa budget?", paragraphs:["Multiply total built-up area by a realistic specification band, then add design, permits, supervision, external works, utilities, taxes and contingency as separate lines. For example, a 400 m² total built area at a standard planning band of SAR 1,300–1,850/m² produces a broad construction allowance of about SAR 520,000–740,000 before separate project costs. This is an illustration, not a quotation.","The range can move materially if the villa includes a basement, lift, pool, large stone façade, wide glazing, complex structure, high-capacity HVAC, imported joinery or extensive landscaping."], image:sharedImages.villa },
      { id:"owner-brief", title:"Start the villa budget with the owner brief, not the façade image", paragraphs:["Before estimating, list the people who will live in the villa, required bedrooms, guest and family zones, parking, staff accommodation, storage, future accessibility, outdoor uses and any planned expansion. Translate that list into a room schedule with target areas. This exposes spaces that are desirable but not essential before they become repeated construction cost across several floors.","Area control is not about making every room small. It is about using circulation, service zones and structural grids efficiently. A design can preserve privacy and generous living spaces while reducing duplicated corridors, oversized lobbies and leftover corners. Ask the architect to issue an area statement at every design stage and compare it with the approved target."], checklist:["Approved room schedule and target area","Maximum number of constructed floors","Guest, family and service circulation strategy","Future expansion identified without overbuilding today","Optional spaces separated from the base scope","Area statement updated with every concept revision"] },
      { id:"example", title:"Illustrative villa budget examples", table:{caption:"Illustrative construction-only scenarios before land and separate professional costs",headers:["Total built area","Controlled economy","Standard","High specification"],rows:[["300 m²","SAR 270k–375k","SAR 390k–555k","SAR 600k–1.05m+"],["400 m²","SAR 360k–500k","SAR 520k–740k","SAR 800k–1.4m+"],["600 m²","SAR 540k–750k","SAR 780k–1.11m","SAR 1.2m–2.1m+"]]}, note:"Figures are mathematical illustrations using the planning bands in this cluster. They exclude land and must not be used as contractor commitments." },
      { id:"breakdown", title:"Where the villa budget usually goes", paragraphs:["A villa budget is easier to control when it is divided into packages. The exact percentages vary, but a package view makes omissions obvious and allows value engineering without cutting hidden safety items."], bars:[{label:"Substructure and frame",value:32},{label:"Envelope and waterproofing",value:15},{label:"MEP systems",value:22},{label:"Internal finishes and joinery",value:23},{label:"External works and allowances",value:8}], image:sharedImages.interior },
      { id:"specification", title:"Specification choices that move a villa into a higher cost band", paragraphs:["Finish level is not only the price of tiles and paint. It includes window systems, façade materials, waterproofing build-ups, sanitary fixtures, electrical accessories, lighting strategy, HVAC equipment, ceiling details, internal doors, kitchen systems and custom joinery. Premium choices also create higher design, coordination and installation requirements.","A useful specification does not need to name the most expensive brand. It should describe performance, approved alternatives, sample requirements and the commercial allowance. This lets multiple contractors price comparable quality while preserving flexibility during procurement."], table:{caption:"Examples of specification decisions and their cost effect",headers:["Decision area","Controlled approach","Higher-cost approach"],rows:[["Façade","Paint, render and limited feature cladding","Large natural-stone areas, complex screens and extensive glazing"],["Windows","Standardised openings and tested system","Oversized panels, special profiles and high-performance glass"],["HVAC","Coordinated system matched to room loads","Premium controls, concealed systems and complex zoning"],["Joinery","Limited standard modules","Full-height custom kitchens, wardrobes and wall panels"],["Ceilings","Simple coordinated drops","Layered details, linear lighting and service-heavy features"]]}, image:sharedImages.interior },
      { id:"extras", title:"Items frequently missing from early villa estimates", checklist:["Architectural, structural and MEP design","Soil investigation where required","Permit and authority-related fees","Supervision and testing","Boundary walls, gates and paving","Utility connections","HVAC equipment and controls","Kitchen, wardrobes and specialist joinery","Pool and landscaping","VAT and contingency"] },
      { id:"quote-check", title:"Villa quotation review before contract award", paragraphs:["Create a comparison sheet that lists the base building, optional packages, owner-supplied items and provisional allowances. A contractor should confirm quantities or pricing assumptions for major packages, not simply repeat the architectural area and a single rate.","Check whether the offer includes mobilization, temporary services, testing, protection of finished work, waste removal, as-built information and warranties. These are not glamorous items, but they influence site performance and handover quality."], checklist:["Total built-up area and measurement basis","Structural system and foundation assumptions","MEP equipment, fixtures and testing","Windows, doors, façade and waterproofing","Kitchen, wardrobes and specialist joinery","External walls, gates, paving, pool and landscape","Design, permit, supervision and utility responsibilities","VAT, payment stages, provisional sums and exclusions"] },
      { id:"save", title:"How to control villa cost without damaging quality", steps:[{title:"Fix the area early",text:"Every unnecessary square metre repeats structural, MEP and finishing cost."},{title:"Coordinate before tender",text:"Clashes resolved on drawings cost less than clashes resolved on site."},{title:"Approve a finish schedule",text:"Name performance requirements and realistic brands or allowances."},{title:"Tender identical information",text:"Make every contractor price the same scope."},{title:"Track variations",text:"Do not allow verbal additions to accumulate without price and time approval."}], image:sharedImages.plans },
      { id:"mistakes", title:"Villa budgeting mistakes", bullets:["Pricing only the ground-floor footprint while forgetting upper floors","Choosing the finish level after the contract is signed","Treating a pool or lift as a small add-on","Ignoring façade and external-work quantities","Paying for premium materials where installation quality is not controlled"] },
    ],
    faqs:[["How much does it cost to build a villa in Saudi Arabia?","The answer depends on total built area, city, structure, finish level and inclusions. A broad early planning range can run from roughly SAR 900/m² for controlled economy construction to SAR 3,500+/m² for high specifications. A project-specific estimate needs coordinated drawings and current quantities."],["Is a 400 m² villa based on plot area or construction area?","Budget examples should use total built-up area. A 400 m² plot does not mean 400 m² of construction, and a 200 m² floor over two levels can equal about 400 m² of built area. Confirm the measurement basis before comparing any figure."],["What is usually excluded from a villa quotation?","Common exclusions include land, design, permits, soil studies, utility fees, external works, loose furniture, some kitchen or wardrobe items, landscaping and VAT. The only safe answer is the written inclusions and exclusions schedule attached to the offer."],["How can I reduce villa construction cost?","Reduce unnecessary area and structural complexity, coordinate drawings before tender, select a controlled finish schedule, compare itemised bids and approve changes before execution. Cutting waterproofing, structural requirements or concealed MEP quality usually creates more expensive problems later."]],
    sources:[officialSources.gastat,officialSources.sbc,officialSources.zatca],
  },
  {
    slug: "building-permit-saudi-arabia",
    role: "cluster",
    category: "Permits and Compliance",
    primaryKeyword: "building permit Saudi Arabia",
    metaTitle: "Building Permit in Saudi Arabia: 2026 Guide",
    title: "Building Permit in Saudi Arabia: Requirements, Process and Project Checks",
    description: "Understand the Saudi building permit process, Balady workflow, engineering-office role and documents to prepare before construction.",
    excerpt: "A practical permit-readiness guide based on Balady and Saudi Building Code sources.",
    image: sharedImages.plans.src,
    imageAlt: "Building permit Saudi Arabia application documents",
    datePublished: "2026-07-27",
    dateModified: "2026-07-30",
    readTime: "10 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage: "Hello Mawsooq, I read your Saudi building permit guide. I would like help understanding the design and permit preparation needed for my plot.",
    highlights:[{value:"Balady",label:"official municipal permit channel"},{value:"Licensed office",label:"coordinates the technical submission"},{value:"SBC",label:"code requirements shape the design"}],
    takeaways:["Use the official Balady workflow.","Confirm requirements for the exact municipality and plot.","Coordinate all technical drawings before submission.","Do not start work before the required permit is issued."],
    toc:[["quick-answer","Quick answer"],["roles","Owner and engineering-office roles"],["before-submit","Before submission"],["process","Application process"],["documents","Document readiness"],["code","Saudi Building Code"],["after-issue","After permit issuance"],["changes","Changes during construction"],["delays","Avoiding delays"],["faqs","FAQs"]],
    sections:[
      {id:"quick-answer",title:"Quick answer",paragraphs:["A Saudi building permit is obtained through the municipal services available on the Balady platform. Balady's published steps include logging in through Unified National Access, choosing the building-permit service, identifying the owner and applicant, selecting the relevant survey decision, completing the information and sending the request to a classified engineering office. After the required review and payment, the permit can be issued.","The exact documentation can vary by property, municipality and project conditions. Use this page as a readiness framework, then ask the appointed engineering office to verify the current requirements for your plot."],callout:{title:"Important",text:"A permit guide cannot replace plot-specific professional review. Setbacks, land-use controls, heights, access, soil conditions and authority comments can change the required package."}},
      {id:"roles",title:"What the owner and engineering office each need to do",paragraphs:["The owner supplies accurate property information, approves the project brief and responds to design decisions. The engineering office prepares and coordinates the professional submission, applies the relevant requirements and manages technical responses within its appointed scope. Problems occur when the owner assumes the office can invent missing decisions, or when the office submits before the owner has approved a stable design.","Agree the appointment in writing. It should identify design disciplines, number of revisions, authority-submission scope, response to comments, site-supervision services if any, and which third-party reports or fees are excluded. Permit issuance and construction supervision are related but not automatically the same service."],table:{caption:"Responsibility split to confirm before permit work",headers:["Topic","Owner responsibility","Professional responsibility"],rows:[["Plot information","Provide verified ownership and available records","Review information needed for the submission"],["Design brief","Approve rooms, use and priorities","Translate the brief into compliant coordinated design"],["Authority comments","Make timely commercial or planning decisions","Prepare technical responses and revisions"],["Post-permit changes","Request changes formally","Assess technical and approval impact"]]}},
      {id:"before-submit",title:"What to resolve before the permit application starts",paragraphs:["The fastest permit response begins with a coordinated design, not a faster upload. Confirm the owner's room brief, plot boundaries, access, required setbacks, number of floors, parking, service locations and any special site constraints before the technical team completes detailed drawings.","If architectural, structural and MEP teams are working from different revisions, the submission may contain conflicting openings, shaft sizes, equipment locations or floor levels. Establish one issue register and one approved drawing revision for the application package."],checklist:["Verified plot and ownership information","Approved architectural concept","Agreed structural design basis","MEP loads and service strategy","Consistent drawing titles and revision numbers","Named person responsible for authority comments","Owner availability for time-sensitive decisions"]},
      {id:"process",title:"The permit process in practical project order",steps:[{title:"1. Verify plot information",text:"Confirm ownership, cadastral or survey information and the municipality responsible for the property."},{title:"2. Appoint the engineering office",text:"Use an appropriately classified and licensed office for the required technical role."},{title:"3. Coordinate the design package",text:"Architectural, structural and MEP information should agree before submission."},{title:"4. Submit through Balady",text:"The authorised party completes the electronic workflow and responds to comments."},{title:"5. Pay required fees and obtain the permit",text:"Keep the issued permit and approved documents available for site execution and inspections."}],image:sharedImages.plans},
      {id:"documents",title:"Permit-readiness checklist",checklist:["Plot ownership and identity information","Survey or cadastral decision relevant to the application","Architectural drawings with planning compliance","Structural design and calculations","MEP information required for the project","Soil or geotechnical information where applicable","Engineering-office details and professional approvals","Clear response process for authority comments"]},
      {id:"code",title:"How the Saudi Building Code affects the permit package",paragraphs:["The Saudi Building Code defines requirements intended to protect safety and public health. Residential work can involve the general building, structural loads, soils and foundations, concrete, electrical, mechanical, energy, plumbing, fire and residential provisions depending on the project.","The design team should not treat compliance as a final stamp applied after design. Code inputs affect room planning, structure, services, insulation, equipment and details from the beginning."],image:sharedImages.site},
      {id:"after-issue",title:"What the owner should check after the permit is issued",paragraphs:["The issued permit and approved drawings should become controlled project documents. The contractor must build from the approved construction information, while the consultant maintains a record of later approved changes, inspections and required certificates.","Before mobilisation, hold a permit-to-construction review. Confirm plot setting-out information, approved levels, responsibilities for temporary services, site access, excavation sequence and the inspection points required before work is covered."],checklist:["Permit details match the intended plot and scope","Approved drawings are available to the site team","Construction drawings use the latest coordinated information","Inspection and testing responsibilities are defined","Permit conditions are included in the site start checklist","Expiry, renewal or completion requirements are monitored"]},
      {id:"changes",title:"Design changes after approval",paragraphs:["An owner may need to change a component after permit issuance, but the change should not be treated as an informal site instruction. Balady provides services relating to adding or modifying building components, and the appointed engineering office should confirm whether a proposed change requires an updated approval or other action.","Structural openings, façade changes, added rooms, altered use, service loads and changes to setbacks can affect compliance. Record the proposed change, assess technical and authority impact, obtain required approvals and issue revised drawings before construction continues in the affected area."]},
      {id:"delays",title:"Common reasons permit preparation slows down",bullets:["Incomplete or inconsistent drawings","Late structural and MEP coordination","Design that conflicts with plot controls","Missing ownership or survey information","Slow response to comments","Changing the brief during review","Assuming another municipality's checklist applies unchanged"]},
    ],
    faqs:[["How do I apply for a building permit in Saudi Arabia?","Use the official Balady construction-permit service. The published workflow includes Unified National Access login, selecting the permit service, owner and applicant details, the relevant survey decision, completing the application and sending it to a classified engineering office. Verify the exact current steps for your property."],["Can a building permit be obtained online?","Balady states that the building-permit process can be completed through its electronic services, including submission through the engineering-office workflow and permit issuance after review and payment. Some project documents still require professional preparation and approval before they are uploaded."],["What drawings are needed for a Saudi building permit?","The required package depends on the project, but coordinated architectural, structural and relevant MEP documents are fundamental. Plot information, survey data and other technical reports may also be required. Ask the appointed engineering office for the current plot-specific list."],["Does the Saudi Building Code apply to private houses?","Yes. The Saudi code system includes a residential building code and related structural, electrical, mechanical, plumbing and energy provisions. The specific sections that apply depend on the building and its design."]],
    sources:[officialSources.baladyPermit,officialSources.baladyFaq,officialSources.sbc,officialSources.residentialCode],
  },
  {
    slug: "choose-construction-contractor-saudi-arabia",
    role: "cluster",
    category: "Contractor Selection",
    primaryKeyword: "choose a construction contractor in Saudi Arabia",
    metaTitle: "Choose a Construction Contractor in Saudi Arabia",
    title: "How to Choose a Construction Contractor in Saudi Arabia Without Buying Hidden Risk",
    description: "Use this contractor selection checklist to compare scope, licence, team, programme, payment terms and quality controls in Saudi Arabia.",
    excerpt: "A buyer-intent checklist for shortlisting contractors, comparing offers and protecting the project contract.",
    image: sharedImages.contractor.src,
    imageAlt: "How to choose a construction contractor in Saudi Arabia",
    datePublished: "2026-07-26",
    dateModified: "2026-07-30",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage: "Hello Mawsooq, I read your contractor selection guide. I would like help clarifying the scope and questions for my Saudi construction project.",
    highlights:[{value:"Same scope",label:"for every bidder"},{value:"Written checks",label:"instead of verbal promises"},{value:"Milestones",label:"link payment to verified progress"}],
    takeaways:["Prequalify before requesting a final price.","Give bidders identical tender documents.","Check the proposed project team, not only company marketing.","Make variations, payment and handover rules explicit."],
    toc:[["quick-answer","Quick answer"],["shortlist","Shortlisting"],["tender-pack","Tender information"],["interview","Interview questions"],["references","Reference checks"],["compare","Comparing offers"],["governance","Project governance"],["contract","Contract protections"],["red-flags","Red flags"],["faqs","FAQs"]],
    sections:[
      {id:"quick-answer",title:"Quick answer",paragraphs:["Choose a contractor by testing five areas: legal and commercial standing, relevant residential experience, the actual team proposed for your project, the completeness of the price, and the contractor's ability to plan and document the work. The cheapest tender is not the lowest-cost outcome when exclusions and variations appear after award.","Start with a short prequalification, then issue the same drawings, specifications and pricing schedule to every bidder. Clarify questions in writing and compare the offers line by line."],image:sharedImages.contractor},
      {id:"shortlist",title:"Contractor prequalification checklist",checklist:["Valid business and contracting information relevant to the work","Residential projects of similar size and specification","Named project manager, site engineer and supervision structure","Current workload and resource availability","Supplier and subcontractor approach","Quality, safety and reporting procedures","Client references that can discuss completion and defect response","Ability to provide itemised pricing and a realistic programme"]},
      {id:"tender-pack",title:"Give every bidder a tender pack that can be compared",paragraphs:["A contractor cannot price accurately from a mood board and a floor plan alone. The tender information should include coordinated drawings, specifications, schedules, a pricing breakdown and commercial instructions. Where design is incomplete, label allowances and provisional quantities clearly rather than pretending the uncertainty does not exist.","Issue clarifications to all bidders, not privately to one. Set one closing date, require the same return format and ask each contractor to list qualifications. This creates an audit trail and reduces the chance that one offer looks cheaper because it silently assumes a lower scope."],checklist:["Architectural, structural and MEP tender drawings","Specifications and finish schedules","Pricing schedule or bill of quantities","Programme requirements and key milestones","Site access and working constraints","Required insurances, tests and warranties","Form of contract and payment rules","Bidder qualifications and exclusions form"]},
      {id:"interview",title:"Questions to ask the proposed contractor team",paragraphs:["Interview the people who will actually manage the work, not only the salesperson. Ask the project manager to explain how the first eight weeks will be planned, how drawings and material submittals are controlled, how subcontractors are coordinated and how delays or defective work are reported.","A capable team should be able to explain the project in practical language and identify risks without pretending that every issue is easy. Vague promises such as 'everything is included' or 'we can finish very quickly' should be replaced by written scope and programme evidence."],checklist:["Who is the full-time site manager and what else are they managing?","Which trades are self-performed and which are subcontracted?","How are drawings, RFIs and material approvals tracked?","What is the concrete, waterproofing and concealed-service inspection process?","Which long-lead items are identified in the programme?","How are weekly progress and cost changes reported?","Who has authority to approve commitments on behalf of the contractor?"]},
      {id:"references",title:"How to verify references instead of collecting names",paragraphs:["Ask for one completed project, one project currently under construction and—where possible—one client whose project faced a problem. A reference is more useful when it explains how the contractor responded to delay, defects or commercial disagreement than when it only confirms that a building looks good.","When visiting a project, observe organisation, material storage, protection, cleanliness, supervision presence and consistency between drawings and installed work. Do not enter active sites without permission and appropriate safety arrangements."],table:{caption:"Reference questions that reveal delivery behaviour",headers:["Question","What it tests"],rows:[["Was the final cost close to the agreed scope?","Change control and pricing transparency"],["Was the named team present throughout?","Resource commitment"],["How were defects handled?","Quality culture and aftercare"],["Were delays explained and recovered?","Programme management"],["Would you appoint the contractor again?","Overall confidence after completion"]]}},
      {id:"compare",title:"How to compare contractor offers",table:{caption:"Commercial comparison questions",headers:["Question","Why it matters","Evidence to request"],rows:[["Is the scope identical?","Different scope makes totals meaningless","Inclusion and exclusion schedule"],["Are allowances realistic?","Low provisional sums create later increases","Brands, quantities and allowance basis"],["Is VAT stated?","The payable amount must be clear","Tax line and commercial terms"],["Is the programme resourced?","A short programme without labour or procurement logic is weak","Programme and mobilisation plan"],["Are payments measurable?","Calendar-based payments can get ahead of progress","Milestones and valuation method"],["How are variations approved?","Uncontrolled changes destroy the budget","Written variation procedure"]]},image:sharedImages.plans},
      {id:"governance",title:"Set project governance before mobilisation",paragraphs:["Even a good contractor can struggle when instructions come from several family members, consultants and suppliers without one approval route. Define who may issue instructions, who certifies payment, who approves materials and how urgent decisions are recorded.","Use a regular meeting structure with an action register covering safety, design information, procurement, programme, inspections, variations and payments. The meeting record should identify one owner and one due date for every action. This simple discipline reduces disputes about who said what on site."],steps:[{title:"Daily site control",text:"Site team records labour, activities, deliveries, inspections and constraints."},{title:"Weekly coordination",text:"Review look-ahead programme, drawings, submittals, procurement and required owner decisions."},{title:"Monthly commercial review",text:"Assess completed work, variations, forecast final cost and remaining contingency."},{title:"Stage-gate inspections",text:"Do not cover structural, waterproofing or concealed MEP work before the agreed check."}]},
      {id:"contract",title:"Contract clauses that protect the owner and contractor",bullets:["Complete contract documents and precedence order","Scope, exclusions and provisional sums","Start date, programme and extension-of-time process","Payment certification and retention","Material submittals and sample approvals","Inspection, testing and rejected work","Variation pricing before execution","Insurance, safety and site responsibilities","Defects period, warranties and handover documents","Termination and dispute process"]},
      {id:"red-flags",title:"Red flags before you sign",bullets:["A total price with no breakdown","Pressure to pay a large advance immediately","Promises that drawings or specifications are unnecessary","No named site team","A programme far shorter than the work described","Cash-only requests without proper documentation","Refusal to define exclusions","References that cannot be contacted or projects that cannot be verified"]},
      {id:"decision",title:"A simple weighted decision score",bars:[{label:"Scope completeness",value:30},{label:"Relevant team and experience",value:25},{label:"Programme and resources",value:20},{label:"Commercial terms",value:15},{label:"Price competitiveness",value:10}],note:"The visual is a suggested evaluation weighting, not an official procurement standard. Adjust it to your risk priorities."},
    ],
    faqs:[["How do I choose a reliable construction contractor in Saudi Arabia?","Shortlist contractors with relevant work, verify the proposed team and issue identical tender documents. Compare scope, exclusions, programme, payment terms, quality controls and references before price. Record all clarifications in writing and attach them to the final contract."],["Should I select the lowest construction quote?","Not automatically. The lowest figure may exclude important systems, use unrealistic allowances or assume a different specification. Normalise every offer to the same scope and compare the final adjusted amount, commercial risk and team capability."],["How much advance payment is reasonable?","There is no universal percentage suitable for every contract. Any advance should match genuine mobilisation or procurement needs, be documented and protected through the contract. Avoid paying amounts that place the contractor materially ahead of verified work without appropriate security."],["What should be included in a construction contract?","The contract should identify drawings, specifications, scope, exclusions, price, tax, programme, payment method, variations, inspections, warranties, defects, handover and dispute procedures. Obtain professional legal and technical review for the actual agreement."]],
    sources:[officialSources.zatca,officialSources.sbc],
  },
  {
    slug: "house-construction-timeline-saudi-arabia",
    role: "cluster",
    category: "Project Timeline",
    primaryKeyword: "house construction timeline Saudi Arabia",
    metaTitle: "House Construction Timeline in Saudi Arabia",
    title: "House Construction Timeline in Saudi Arabia: From Design to Handover",
    description: "See a realistic Saudi house construction timeline, phase dependencies, delay risks and the decisions that keep a villa project moving.",
    excerpt: "A phase-by-phase programme covering design, permits, structure, MEP, finishes, testing and handover.",
    image: sharedImages.site.src,
    imageAlt: "House construction timeline in Saudi Arabia",
    datePublished: "2026-07-25",
    dateModified: "2026-07-30",
    readTime: "11 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage: "Hello Mawsooq, I read your Saudi house construction timeline guide. I would like help planning the design, permit and build stages for my project.",
    highlights:[{value:"15–30 mo",label:"published design-to-handover benchmark"},{value:"12–24 mo",label:"construction-only benchmark for a mid-size villa"},{value:"Decisions",label:"owner response time affects the programme"}],
    takeaways:["A four-month total build promise is not realistic for a compliant house from a bare plot.","Design and permit time must be added before site execution.","Long-lead procurement should start from approved schedules.","Handover includes testing and defect closure, not only visual completion."],
    toc:[["quick-answer","Quick answer"],["timeline","Phase timeline"],["phase-notes","What happens in each phase"],["procurement","Procurement timeline"],["dependencies","Critical dependencies"],["owner-decisions","Owner decision calendar"],["tracking","How to track progress"],["delays","Delay risks"],["accelerate","How to accelerate safely"],["faqs","FAQs"]],
    sections:[
      {id:"quick-answer",title:"Quick answer",paragraphs:["A mid-size Saudi villa may require roughly 12–24 months for construction after approvals, while the complete design-to-handover journey can fall around 15–30 months according to published Saudi contractor guidance. The actual duration depends on size, permits, design complexity, procurement, site access, contractor resources and owner decision speed.","Use the benchmark to test a proposed programme, not to replace one. Your contractor should provide activities, dependencies, procurement dates and resources—not only a finish date."],callout:{title:"Programme warning",text:"A short duration can be achieved only by changing scope, increasing resources, overlapping controlled activities or using alternative systems. It cannot be achieved safely by ignoring curing, inspections, approvals or coordination."}},
      {id:"timeline",title:"Typical phases and planning windows",table:{caption:"Illustrative timeline for a mid-size private house",headers:["Phase","Planning window","Main output"],rows:[["Brief and design","2–4 months","Coordinated architectural, structural and MEP package"],["Permit workflow","1–4 months","Required building approval"],["Site and foundations","1–2 months","Substructure ready for frame"],["Structural frame","3–6 months","Columns, beams, slabs and roof"],["Envelope and first-fix MEP","2–4 months","Weather-tight shell and concealed services"],["Finishes and second fix","3–6 months","Completed internal systems and finishes"],["External works, testing and handover","1–3 months","Access, testing, defects and documents"]]},image:sharedImages.site},
      {id:"phase-notes",title:"What should be complete at the end of each major phase",paragraphs:["A programme milestone should describe an output, not only a date. 'Structure complete' should mean the defined frame, stairs and roof elements are constructed, inspected and supported by the required records. 'MEP rough-in complete' should mean routes are installed, coordinated and tested as required before finishes conceal them.","Milestones also need acceptance criteria. If the owner releases a major payment when a stage merely appears complete, unfinished testing, documentation and remedial work can move into the next phase and disrupt following trades."],table:{caption:"Milestone completion questions",headers:["Milestone","Completion evidence"],rows:[["Design issued","Coordinated drawings, specifications and open decisions register"],["Permit obtained","Issued permit and approved authority documents"],["Substructure complete","Inspections, test records and approved levels"],["Frame complete","Structural inspections and outstanding-defect list"],["MEP first fix complete","Testing records and coordinated closure approval"],["Finishes complete","Room-by-room quality checks and protected surfaces"],["Handover","Closed defects, manuals, warranties and agreed final account process"]]}},
      {id:"procurement",title:"The procurement timeline runs alongside construction",paragraphs:["Some materials can be purchased locally at short notice, while custom windows, HVAC equipment, electrical panels, lifts, stone, sanitary products and joinery may require design approval, shop drawings, manufacturing and delivery time. The programme should show when technical information is needed, when a decision must be approved and when the item must arrive—not only the installation date.","Early ordering is not automatically better. Ordering before dimensions and specifications are approved can create unusable materials or storage damage. Use a procurement schedule tied to coordinated drawings, approved samples and site readiness."],table:{caption:"Procurement control points",headers:["Control point","Question to answer"],rows:[["Technical submittal","Does the product meet design and code requirements?"],["Commercial approval","Is the price within the allowance and is tax clear?"],["Manufacturing release","Are dimensions, finishes and interfaces frozen?"],["Delivery planning","Is secure storage and access available?"],["Installation readiness","Are preceding works inspected and complete?"]]}},
      {id:"dependencies",title:"The dependencies that control the finish date",timeline:[["Design freeze","Prevents repeated structural and MEP redesign"],["Permit issuance","Controls legal site start"],["Long-lead approvals","Protects HVAC, windows, doors and specialist items"],["Structural inspections","Allow work to be covered without rework"],["Finish samples","Enable bulk procurement with fewer changes"],["Testing and snagging","Protects quality before final payment"]]},
      {id:"owner-decisions",title:"The owner decision calendar",paragraphs:["The owner should receive a schedule showing when layouts, equipment, façade materials, windows, tiles, sanitary fixtures, lighting, paint, doors, kitchen and landscape decisions are required. The date should reflect design coordination and procurement lead time, not the day the installer arrives on site.","When a decision is late, the team should record the effect: resequencing, idle labour, temporary work, delayed order or extended completion. This makes programme responsibility visible and encourages decisions while alternatives are still available."],checklist:["Final room schedule before detailed design","Window and façade system before structural openings are fixed","HVAC and electrical equipment before service routes are closed","Waterproofing and wet-area details before finishes","Tile and sanitary selections before bulk procurement","Kitchen and joinery information before final MEP points","External works and landscape before site access is restricted"]},
      {id:"tracking",title:"How to tell whether the project is genuinely on schedule",paragraphs:["A percentage-complete claim is not enough. Compare planned and actual milestone dates, review the next four to six weeks of work, check whether required drawings and materials are available and identify activities with no remaining float.","Photographs are useful evidence, but they should be linked to locations, dates and inspection status. A visually busy site can still be delayed if the critical materials, approvals or specialist subcontractors are missing."],bars:[{label:"Completed and accepted work",value:55},{label:"Work in progress",value:18},{label:"Approved materials ready",value:12},{label:"Unresolved constraints",value:15}],note:"This is an example dashboard layout, not a real project report. A live report should use verified programme and site data."},
      {id:"delays",title:"Common causes of delay",bullets:["Late owner decisions","Permit comments on incomplete submissions","Uncoordinated drawings","Changing room layouts after structural work","Material substitutions waiting for approval","Insufficient site management or labour","Late payment or procurement","Rework after concealed-work inspections are skipped","Unrealistic overlap of wet trades and finishes"]},
      {id:"accelerate",title:"How to accelerate without cutting corners",steps:[{title:"Complete design coordination",text:"Resolve structure, services, ceilings and openings before site execution."},{title:"Create a submittal schedule",text:"List every material and equipment approval date."},{title:"Order long-lead items early",text:"Windows, HVAC and custom joinery can control completion."},{title:"Use weekly look-ahead planning",text:"Convert the master programme into near-term actions and decisions."},{title:"Assign clear approval authority",text:"Avoid decisions waiting across multiple family or company stakeholders."},{title:"Track defects by zone",text:"Do not postpone all snagging until the final week."}],image:sharedImages.interior},
    ],
    faqs:[["How long does it take to build a house in Saudi Arabia?","A mid-size private house may take roughly 12–24 months for construction after approvals, while the full journey including design and permits can extend to about 15–30 months. Size, complexity, location, contractor resources, procurement and owner decisions can move the programme substantially."],["Can a villa be built in four months?","Four months may be possible for a limited finishing package on a structure that is already complete and fully coordinated. It is not a credible total duration for design, permit, foundations, structure, MEP, finishes, testing and handover from a bare plot."],["What stage causes the most delay?","There is no single stage for every project. Common critical areas include incomplete design coordination, permit responses, structural cycle planning, long-lead windows or HVAC equipment, and late finish selections. A logic-linked programme should show which activity controls the finish date."],["How can the owner keep the project on schedule?","Freeze the brief, approve drawings and samples on time, avoid verbal changes, maintain funding against the agreed payment schedule and use regular progress meetings with an action log. Owner decisions should have dates and named responsibility just like contractor activities."]],
    sources:[officialSources.baladyPermit,officialSources.sbc],
  },

];

export const allArticles = [pillar, ...clusters];
export const pillarUrl = `${SITE_URL}${BLOG_BASE}/${pillar.slug}/`;

export function getArticleBySlug(slug) {
  return allArticles.find((article) => article.slug === slug) || null;
}

export function getClusterBySlug(slug) {
  return clusters.find((article) => article.slug === slug) || null;
}

export function getSiblings(currentSlug, limit = 3) {
  return clusters.filter((article) => article.slug !== currentSlug).slice(0, limit);
}

export function getLatestArticles() {
  return [...allArticles].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export function getAllEnglishBlogEntries() {
  return [
    {
      url: `${SITE_URL}${BLOG_BASE}/`,
      lastModified: DATA_AS_OF,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...allArticles.map((article) => ({
      url: `${SITE_URL}${BLOG_BASE}/${article.slug}/`,
      lastModified: article.dateModified,
      changeFrequency: article.role === "pillar" ? "weekly" : "monthly",
      priority: article.role === "pillar" ? 0.9 : 0.78,
    })),
  ];
}
