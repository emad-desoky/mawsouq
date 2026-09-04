/**
 * English SEO topic cluster for Saudi residential construction.
 * Add new articles here and the pillar, sibling navigation, blog hub,
 * and sitemap helper will pick them up automatically.
 */

export const SITE_URL = "https://mawsouq.com";
export const BLOG_BASE = "/en/blog";
export const DATA_AS_OF = "2026-09-04";

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
  architectureService: "/en/#architectural-design",
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
  topicId: "construction",
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


  {
    slug: "construction-cost-calculator-saudi-arabia",
    role: "cluster",
    category: "Cost Planning Calculator",
    primaryKeyword: "construction cost calculator Saudi Arabia",
    metaTitle: "Construction Cost Calculator Saudi Arabia (2026)",
    title: "Construction Cost Calculator Saudi Arabia: Estimate Your House Budget in 2026",
    description:
      "Use a practical construction cost calculator framework for Saudi Arabia. Estimate your house or villa budget by area, scope, finish level and city.",
    excerpt:
      "A high-intent budgeting guide that explains how to estimate construction cost in Saudi Arabia before you request contractor quotations.",
    image: "/images/blog/construction-cost-calculator-saudi-arabia.png",
    imageAlt: "Construction cost calculator Saudi Arabia",
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    readTime: "11 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I want help estimating my Saudi house construction budget using the calculator approach.",
    highlights: [
      { value: "4 inputs", label: "drive most early estimates" },
      { value: "3 scopes", label: "shell, finished and turnkey" },
      { value: "WhatsApp", label: "quick path to a real estimate discussion" },
    ],
    takeaways: [
      "A useful calculator starts with built-up area, city, scope and finish level.",
      "Planning rates should become a measured estimate before signing a construction contract.",
      "Design fees, permits, utilities, external works and VAT should remain visible as separate lines.",
      "The calculator page should convert visitors into qualified quote requests, not just display a number.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["calculator-inputs", "The inputs that matter"],
      ["calculation-model", "How to calculate"],
      ["example", "Worked example"],
      ["city-adjustments", "City adjustments"],
      ["quote-ready", "When the estimate is ready for quotation"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: what should a Saudi construction cost calculator include?",
        paragraphs: [
          "A practical construction cost calculator for Saudi Arabia should combine total built-up area, city, scope level and finish quality, then add separate allowances for professional fees, permits, utility connections, external works, VAT and contingency. If a calculator gives a single number without showing assumptions, it is not decision-grade.",
          "This guide supports buyers who search for a fast estimate but still want a trustworthy framework. Use it to create an early planning budget, then compare the result against live contractor quotations and the more detailed Mawsooq guides on square-metre cost, villa cost and Riyadh budgeting.",
        ],
        callout: {
          title: "Intent behind this page",
          text: "Visitors searching for a construction cost calculator are often close to a live project. Make the page useful enough to build trust, then offer a direct WhatsApp CTA for a scoped estimate.",
        },
        image: {
          src: "/images/blog/construction-cost-calculator-saudi-arabia.png",
          alt: "Saudi construction cost calculator concept",
        },
      },
      {
        id: "calculator-inputs",
        title: "The four inputs that matter most",
        paragraphs: [
          "Most inaccurate estimates fail before the math starts. Owners may use plot area instead of built-up area, mix shell pricing with turnkey expectations or ignore city and logistics differences. Fix the inputs first and the output becomes far more useful.",
        ],
        checklist: [
          "Total built-up area for all constructed floors",
          "City or project location",
          "Execution scope: shell, finished or turnkey",
          "Target finish quality: controlled, standard or premium",
          "Separate line for design, supervision and authority costs",
          "Contingency and VAT treatment clearly shown",
        ],
      },
      {
        id: "calculation-model",
        title: "A clean calculation model you can actually use",
        paragraphs: [
          "The simplest useful structure is to calculate the construction package first, then add the related project costs that many online tools hide. This keeps the total visible and prevents false comparisons between incomplete offers.",
        ],
        table: {
          caption: "Recommended calculator structure for early planning",
          headers: ["Line item", "How to think about it", "Why it matters"],
          rows: [
            ["Construction base", "Built-up area × selected rate", "Forms the main cost allowance"],
            ["Professional fees", "Design, engineering and supervision", "Needed before and during construction"],
            ["Authority and utility items", "Permits, testing and service coordination", "Often omitted from ads"],
            ["External works", "Boundary walls, paving, gates and landscape", "Frequently missing from contractor headlines"],
            ["Contingency", "Allowance for uncertainty", "Protects the owner during early planning"],
            ["VAT", "Confirm if included or added", "Changes the payable total"],
          ],
        },
        bars: [
          { label: "Construction base", value: 70 },
          { label: "Professional and authority items", value: 8 },
          { label: "External works", value: 10 },
          { label: "Contingency and VAT visibility", value: 12 },
        ],
      },
      {
        id: "example",
        title: "Worked example: standard family house budget",
        paragraphs: [
          "Assume a family plans a 320 m² total built-up area home in a major Saudi city and uses a standard finish assumption. At an illustrative planning band of SAR 1,300–1,850 per built square metre, the construction base lands at roughly SAR 416,000–592,000. The owner then adds design, supervision, authority-related costs, external works and contingency as visible lines rather than hiding them inside a vague total.",
        ],
        steps: [
          { title: "1. Confirm total built area", text: "Add every constructed floor and note how service and roof areas are treated." },
          { title: "2. Select a realistic scope", text: "Decide whether the estimate is shell-only, finished or turnkey." },
          { title: "3. Apply the planning rate", text: "Use a realistic range for the chosen quality level and location." },
          { title: "4. Add separate allowances", text: "Keep design, permits, utilities and external works outside the base construction line." },
          { title: "5. Add contingency and tax clarity", text: "Protect the budget and confirm whether VAT is included or added later." },
          { title: "6. Convert it into a quote brief", text: "Use the result to start a structured WhatsApp discussion or tender process." },
        ],
      },
      {
        id: "city-adjustments",
        title: "Why city adjustments should be visible",
        paragraphs: [
          "Two houses with the same area and finish level can still land at different cost levels because labour availability, logistics, site context and supplier competition vary by city. Riyadh, Jeddah, Dammam and secondary cities should not be treated as identical markets.",
        ],
        table: {
          caption: "Practical city considerations for calculator users",
          headers: ["Factor", "What changes", "Action for the owner"],
          rows: [
            ["Supplier access", "Product choice and delivery timing", "Check whether preferred brands are locally available"],
            ["Labour and subcontractor depth", "Programme risk and trade pricing", "Compare contractor resource plans"],
            ["Site access", "Temporary works and logistics", "Share plot location and constraints early"],
            ["Competitive environment", "Quotation spread", "Collect comparable offers from the same scope"],
          ],
        },
      },
      {
        id: "quote-ready",
        title: "When the estimate is ready to become a real quotation",
        paragraphs: [
          "A calculator is for feasibility. A quote is for commitment. The gap between them closes when the owner has a clear brief, design information, scope definition and a list of inclusions and exclusions that every bidder follows.",
        ],
        checklist: [
          "Room schedule and area statement ready",
          "Scope split into shell, finish and optional items",
          "Known exclusions identified clearly",
          "Target quality level defined in writing",
          "Contractor offers requested on the same drawings and assumptions",
          "WhatsApp brief prepared with city, area, floors and finish level",
        ],
      },
      {
        id: "mistakes",
        title: "Common calculator mistakes that mislead owners",
        bullets: [
          "Using plot area instead of built-up area",
          "Comparing shell cost with turnkey expectations",
          "Ignoring external works and utility coordination",
          "Treating a planning tool like a signed contractor offer",
          "Assuming the same rate applies to every Saudi city",
          "Forgetting to confirm whether VAT is included",
        ],
      },
    ],
    faqs: [
      ["What is the best way to estimate construction cost in Saudi Arabia?", "Start with total built-up area, select a realistic cost band for the city and quality level, then add professional fees, authority items, external works, VAT and contingency as separate lines. This is more useful than relying on one vague headline number."],
      ["Can a construction cost calculator replace contractor quotations?", "No. A calculator is a planning tool. It helps with feasibility and budgeting, but a real contractor quotation should be based on drawings, defined scope, inclusions, exclusions and commercial terms."],
      ["What information should I send Mawsooq on WhatsApp for a better estimate?", "Send your city, plot size, total expected built-up area, number of floors, desired finish level and whether you are planning shell, finished or turnkey execution. This allows a much more relevant discussion."],
      ["Does the calculator include design and permit costs?", "It should show them separately. Good budgeting pages keep design, engineering, supervision, authority-related costs and utilities visible so owners can see the full project cost."],
    ],
    sources: [officialSources.gastat, officialSources.zatca, officialSources.baladyPermit],
  },
  {
    slug: "turnkey-house-construction-cost-saudi-arabia",
    role: "cluster",
    category: "Turnkey Construction",
    primaryKeyword: "turnkey house construction cost Saudi Arabia",
    metaTitle: "Turnkey House Construction Cost Saudi Arabia (2026)",
    title: "Turnkey House Construction Cost in Saudi Arabia: What Is Included in 2026?",
    description:
      "Planning a turnkey build in Saudi Arabia? Compare what turnkey usually includes, what contractors may exclude and how to budget the total project cost.",
    excerpt:
      "A commercial-intent guide for owners comparing turnkey construction offers, inclusions, exclusions and contract structure.",
    image: "/images/blog/turnkey-house-construction-cost-saudi-arabia.png",
    imageAlt: "Turnkey house construction cost in Saudi Arabia",
    datePublished: "2026-08-05",
    dateModified: "2026-08-06",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I want help reviewing a turnkey house construction offer in Saudi Arabia.",
    highlights: [
      { value: "Turnkey", label: "buyer intent with high conversion value" },
      { value: "Scope", label: "matters more than the headline price" },
      { value: "Contract", label: "must define inclusions and exclusions" },
    ],
    takeaways: [
      "Turnkey pricing is only comparable when the included scope is defined clearly.",
      "Owners should confirm whether kitchens, HVAC, external works and approvals are included or separate.",
      "A higher turnkey offer may be better value if it carries fewer hidden exclusions.",
      "WhatsApp lead capture works best when the owner sends the offer summary and expected handover level.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["included", "What turnkey usually includes"],
      ["excluded", "What is often excluded"],
      ["ranges", "Illustrative cost ranges"],
      ["contracts", "How to review the contract"],
      ["compare-offers", "How to compare offers"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: what does turnkey really mean?",
        paragraphs: [
          "In Saudi residential construction, turnkey normally means the owner receives a completed and usable home rather than a shell or semi-finished structure. However, the exact level of completion varies by contractor. Some turnkey offers include most finishes and essential systems but exclude kitchens, specialist joinery, landscaping or major utility service items.",
          "That is why this query has strong buyer intent. The visitor is not looking for inspiration; they want clarity about what they will receive for the price. The right SEO page answers that directly and gives the owner a clean checklist for reviewing offers.",
        ],
        image: {
          src: "/images/blog/turnkey-house-construction-cost-saudi-arabia.png",
          alt: "Turnkey villa handover concept in Saudi Arabia",
        },
      },
      {
        id: "included",
        title: "What turnkey construction usually includes",
        paragraphs: [
          "A typical turnkey proposal covers the structure, envelope, internal finishes, electrical and plumbing systems, waterproofing, sanitary fixtures, painting and standard completion items needed for handover. But the only trustworthy version is the written one attached to the offer or contract.",
        ],
        table: {
          caption: "Typical turnkey inclusions to verify in writing",
          headers: ["Package", "Usually included", "Owner should verify"],
          rows: [
            ["Structure", "Foundations, frame and roof", "Structural scope and any optional features"],
            ["Building envelope", "External walls, windows and waterproofing", "Window specification and façade materials"],
            ["MEP", "Electrical, plumbing and basic service systems", "Equipment brands and capacities"],
            ["Internal finishes", "Tiles, paint, ceilings, doors and sanitary items", "Exact brands, allowances and rooms covered"],
            ["Testing and handover", "Basic commissioning and close-out", "Required documents, warranties and snagging process"],
          ],
        },
      },
      {
        id: "excluded",
        title: "What many turnkey offers still exclude",
        paragraphs: [
          "The largest pricing surprises often sit outside the advertised turnkey number. Exclusions are not necessarily bad, but they must be visible so the owner can compare full project cost rather than incomplete contractor headlines.",
        ],
        checklist: [
          "Kitchen and fitted joinery packages",
          "Full HVAC equipment or premium system upgrades",
          "Boundary walls, gates, paving and landscaping",
          "Utility company fees and some connection items",
          "Loose furniture, curtains and appliances",
          "Pool, lift, smart-home and solar upgrades",
          "VAT treatment if the offer does not state it clearly",
        ],
      },
      {
        id: "ranges",
        title: "Illustrative turnkey planning ranges",
        paragraphs: [
          "Turnkey cost usually sits above finished construction because it pulls more packages into one contractor responsibility. Exact levels depend on specification, city, site conditions and how much is genuinely included.",
        ],
        table: {
          caption: "Illustrative turnkey planning ranges in Saudi Arabia",
          headers: ["Level", "Indicative range", "Typical expectation"],
          rows: [
            ["Controlled turnkey", "SAR 1,450–1,900/m²", "Disciplined selections and limited complexity"],
            ["Standard family turnkey", "SAR 1,900–2,500/m²", "Balanced finishes and common systems"],
            ["Premium turnkey", "SAR 2,600–3,800+/m²", "Higher-end materials and more custom items"],
          ],
        },
        bars: [
          { label: "Core construction", value: 58 },
          { label: "Systems and equipment", value: 18 },
          { label: "Finishes and joinery", value: 16 },
          { label: "External works and completion items", value: 8 },
        ],
      },
      {
        id: "contracts",
        title: "How to review the turnkey contract before signing",
        paragraphs: [
          "A turnkey contract should define deliverables, included brands or quality level, completion milestones, variation rules, defect liability and handover conditions. This is especially important because turnkey deals feel simple on the surface but can hide scope gaps inside undefined wording.",
        ],
        steps: [
          { title: "1. Match the drawings to the contract", text: "Make sure the written offer reflects the same design package and issue date." },
          { title: "2. Highlight exclusions", text: "Do not allow important exclusions to remain hidden in small print." },
          { title: "3. Confirm material standards", text: "Use named standards, allowances or specifications instead of vague promises." },
          { title: "4. Link payments to progress", text: "Tie payment stages to inspected outputs, not dates alone." },
          { title: "5. Protect handover", text: "Define snagging, documents, warranties and retention clearly." },
        ],
      },
      {
        id: "compare-offers",
        title: "How to compare two turnkey offers fairly",
        paragraphs: [
          "If one offer is lower, ask why. It may be more efficient, but it may also exclude items that the more expensive offer includes. Owners should normalise both offers to the same scope before judging price alone.",
        ],
        checklist: [
          "Same drawings and built-up area basis",
          "Same inclusions for MEP and HVAC",
          "Same approach to kitchens and joinery",
          "Same external works assumptions",
          "Same VAT treatment and commercial conditions",
          "Same handover quality and defect liability period",
        ],
      },
      {
        id: "mistakes",
        title: "Turnkey mistakes owners should avoid",
        bullets: [
          "Assuming turnkey always includes everything",
          "Choosing the lowest offer before checking exclusions",
          "Ignoring the difference between standard and premium material assumptions",
          "Not asking how changes will be priced during the project",
          "Failing to document handover requirements and snagging",
        ],
      },
    ],
    faqs: [
      ["Is turnkey construction more expensive than standard contracting?", "It can be, because more responsibility and completion scope sit with one contractor. However, a well-defined turnkey package may save coordination effort and reduce hidden extras if the scope is genuinely clear."],
      ["Does turnkey include kitchens and air conditioning?", "Sometimes, but not always. Owners should verify both items in writing because they are common sources of cost differences between offers."],
      ["How should I compare turnkey quotes in Saudi Arabia?", "Request comparable scope, confirm inclusions and exclusions, check VAT treatment, review the material standard and make sure the same drawings are priced by each bidder."],
      ["What should I send Mawsooq if I want help reviewing a turnkey offer?", "Share the city, built-up area, the contractor summary, stated inclusions, exclusions and your expected handover level. That makes the review conversation much more precise."],
    ],
    sources: [officialSources.gastat, officialSources.zatca, officialSources.residentialCode],
  },
  {
    slug: "cost-to-build-200-sqm-house-saudi-arabia",
    role: "cluster",
    category: "200 sqm House Cost",
    primaryKeyword: "cost to build a 200 sqm house in Saudi Arabia",
    metaTitle: "Cost to Build a 200 sqm House in Saudi Arabia (2026)",
    title: "Cost to Build a 200 sqm House in Saudi Arabia: A 2026 Example Budget",
    description:
      "See a practical 200 sqm house cost example for Saudi Arabia. Compare shell, finished and turnkey scenarios with clear assumptions and common exclusions.",
    excerpt:
      "A focused lead-generation article for one of the most commercial long-tail construction budget queries in English.",
    image: "/images/blog/cost-to-build-200-sqm-house-saudi-arabia.png",
    imageAlt: "Cost to build a 200 sqm house in Saudi Arabia",
    datePublished: "2026-08-04",
    dateModified: "2026-08-06",
    readTime: "10 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I am planning a 200 sqm house in Saudi Arabia and want a budget estimate.",
    highlights: [
      { value: "200 sqm", label: "specific long-tail query with buyer intent" },
      { value: "3 scenarios", label: "shell, finished and turnkey" },
      { value: "Example", label: "easy for clients to compare with their case" },
    ],
    takeaways: [
      "A 200 sqm page should use one clear worked example, not a vague generic range.",
      "The biggest shifts come from scope, finish level, city and design complexity.",
      "Small area changes can still move the budget materially when rates change by only a little per square metre.",
      "This page performs best when it pushes visitors toward a WhatsApp discussion with their area and city.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["area-definition", "How 200 sqm is measured"],
      ["cost-scenarios", "Budget scenarios"],
      ["breakdown", "Budget breakdown"],
      ["city-variation", "City variation"],
      ["control-cost", "How to control cost"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: how much can a 200 sqm house cost?",
        paragraphs: [
          "A 200 sqm house in Saudi Arabia can sit in very different cost bands depending on whether the owner wants a shell build, a finished house or a more complete turnkey package. For early planning only, many owners start by comparing multiple scenarios rather than treating one rate as a fixed answer.",
          "This page works because it is specific. A buyer searching for 200 sqm cost usually has a real project in mind, not general curiosity. The page should therefore deliver a worked example, visible assumptions and a clear CTA for a tailored estimate.",
        ],
        image: {
          src: "/images/blog/cost-to-build-200-sqm-house-saudi-arabia.png",
          alt: "200 sqm house cost planning visual",
        },
      },
      {
        id: "area-definition",
        title: "First define what 200 sqm means",
        paragraphs: [
          "Some owners mean a single 200 sqm floor. Others mean a total built-up area of 200 sqm spread across two levels. The difference matters because cost planning should be based on the total constructed area and the project form, not only the headline number.",
        ],
        checklist: [
          "Confirm whether 200 sqm means one floor or total built area",
          "Check if covered parking, roof rooms or service areas are included",
          "Separate optional external structures from the house budget",
          "Confirm the scope: shell, finished or turnkey",
        ],
      },
      {
        id: "cost-scenarios",
        title: "Illustrative 200 sqm budget scenarios",
        paragraphs: [
          "The example below uses early planning logic and should not be treated as a contractor commitment. Its role is to help owners visualise the budget spread across multiple levels of completion.",
        ],
        table: {
          caption: "Illustrative planning scenarios for a 200 sqm house",
          headers: ["Scope", "Indicative range", "What it typically means"],
          rows: [
            ["Shell", "SAR 180k–250k", "Structure and basic building envelope"],
            ["Finished", "SAR 260k–370k", "Typical residential completion without every optional package"],
            ["Turnkey", "SAR 290k–500k+", "More complete delivery with broader responsibility"],
          ],
        },
      },
      {
        id: "breakdown",
        title: "How the 200 sqm budget usually breaks down",
        paragraphs: [
          "A compact house still needs structure, systems, finishes and external completion items. Breaking the example into packages helps the owner see where value engineering can happen without hiding major omissions.",
        ],
        bars: [
          { label: "Structure and envelope", value: 40 },
          { label: "MEP systems", value: 21 },
          { label: "Finishes", value: 26 },
          { label: "External works and allowances", value: 13 },
        ],
      },
      {
        id: "city-variation",
        title: "Why the same 200 sqm house can cost more in one city than another",
        paragraphs: [
          "Location affects supplier access, contractor competition, site logistics and sometimes the expected specification. Riyadh, Jeddah, Dammam and smaller markets should be budgeted with local context in mind rather than one universal rate.",
        ],
        table: {
          caption: "City questions to ask before relying on a 200 sqm estimate",
          headers: ["Question", "Why it matters"],
          rows: [
            ["Where is the plot?", "It affects logistics and available contractor depth."],
            ["Is the design simple or custom?", "More glazing, spans or special features change the rate."],
            ["What level of finish is expected?", "Premium finishes push cost faster on small homes."],
            ["Are external works included?", "Boundary walls and paving can be significant relative to the house size."],
          ],
        },
      },
      {
        id: "control-cost",
        title: "How to keep a 200 sqm project on budget",
        paragraphs: [
          "Smaller homes do not automatically stay cheap. Over-design, repeated changes and premium upgrades can push the effective rate sharply higher. Budget discipline should start at concept stage.",
        ],
        steps: [
          { title: "1. Freeze the room schedule", text: "Keep the brief stable before engineering and tendering." },
          { title: "2. Track area carefully", text: "Small additions can move the total more than expected." },
          { title: "3. Separate wants from needs", text: "Keep optional upgrades visible rather than letting them blend into the base budget." },
          { title: "4. Compare like-for-like quotes", text: "Use the same scope and assumptions for every bidder." },
          { title: "5. Use WhatsApp for a scoped review", text: "Send the city, plan concept and finish target for a more useful discussion." },
        ],
      },
      {
        id: "mistakes",
        title: "Common 200 sqm budgeting mistakes",
        bullets: [
          "Assuming 200 sqm always means the same layout",
          "Ignoring external works because the house itself is compact",
          "Using a premium finish aspiration with an economy budget",
          "Failing to confirm whether the estimate is shell, finished or turnkey",
        ],
      },
    ],
    faqs: [
      ["How much does a 200 sqm house cost in Saudi Arabia?", "It depends on scope and finish level. For early planning, a shell scenario may sit around SAR 180k–250k, a finished house around SAR 260k–370k and turnkey scenarios can move higher depending on inclusions and quality level."],
      ["Is 200 sqm considered a small house budget?", "It is a moderate size, but the budget still varies significantly based on design complexity, city, systems and finish quality. Compact homes can still become expensive if the specification is high."],
      ["What is the best way to get a more accurate 200 sqm estimate?", "Share the city, total built-up area definition, number of floors, target finish level and any known special features. This lets Mawsooq frame the budget more precisely."],
      ["Should I compare this page with the square-metre guide?", "Yes. The square-metre guide explains the rate logic, while this page translates that logic into one focused 200 sqm example."],
    ],
    sources: [officialSources.gastat, officialSources.zatca],
  },
  {
    slug: "house-construction-cost-riyadh",
    role: "cluster",
    category: "Riyadh Construction Cost",
    primaryKeyword: "house construction cost Riyadh",
    metaTitle: "House Construction Cost Riyadh (2026)",
    title: "House Construction Cost in Riyadh: 2026 Budget Guide for Real Projects",
    description:
      "Estimate house construction cost in Riyadh with a practical guide covering budget ranges, scope, local factors and quote comparison for real clients.",
    excerpt:
      "A city-specific cost guide built to capture Riyadh-based construction enquiries with clear commercial intent.",
    image: "/images/blog/house-construction-cost-riyadh.png",
    imageAlt: "House construction cost in Riyadh",
    datePublished: "2026-08-03",
    dateModified: "2026-08-06",
    readTime: "11 min read",
    author: "Mawsooq Editorial Team",
    whatsappMessage:
      "Hello Mawsooq, I have a project in Riyadh and want help estimating my house construction budget.",
    highlights: [
      { value: "Riyadh", label: "high local-intent query" },
      { value: "Budget", label: "built around real client decisions" },
      { value: "Local factors", label: "make city pages more useful and searchable" },
    ],
    takeaways: [
      "A Riyadh-specific page can attract local enquiries better than a generic national article alone.",
      "The right page explains why local supplier access, logistics and market context matter.",
      "City pages should still link back to the broader cost, permit and contractor guides.",
      "The best CTA asks for location, built-up area and intended handover level.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["why-riyadh", "Why Riyadh is different"],
      ["budget-ranges", "Budget ranges"],
      ["local-factors", "Local factors"],
      ["breakdown", "Where the money goes"],
      ["quote-check", "How to compare offers"],
      ["mistakes", "Common mistakes"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: how should you budget a house in Riyadh?",
        paragraphs: [
          "Budget a Riyadh house project by total built-up area, scope level and finish quality, then adjust for local delivery conditions, contractor market conditions and project-specific requirements. City-specific pages are useful because they let the owner think about their real market rather than a generic national average.",
          "This page complements the broader Saudi square-metre guide and the villa cost guide. It narrows the conversation to Riyadh and works especially well for local lead generation because the search intent is strong and location specific.",
        ],
        image: {
          src: "/images/blog/house-construction-cost-riyadh.png",
          alt: "Riyadh construction cost planning visual",
        },
      },
      {
        id: "why-riyadh",
        title: "Why Riyadh deserves its own budgeting page",
        paragraphs: [
          "Riyadh is one of the Kingdom's biggest and most competitive construction markets, with active residential demand, broad supplier access and a large contractor ecosystem. That does not guarantee low cost, but it does mean the owner has options and should compare offers carefully.",
        ],
        checklist: [
          "Share the district or broad project location",
          "Confirm whether access, logistics or compound rules affect the site",
          "Clarify if the design is a villa, duplex or family house",
          "State whether the goal is shell, finished or turnkey delivery",
          "Ask every bidder to price the same issued documents",
        ],
      },
      {
        id: "budget-ranges",
        title: "Illustrative planning ranges for Riyadh",
        paragraphs: [
          "The table below is for early planning and should be replaced by project-specific quotations. Its main role is to help owners think in structured bands rather than one misleading headline number.",
        ],
        table: {
          caption: "Illustrative Riyadh house-planning bands",
          headers: ["Planning level", "Indicative range", "Typical use"],
          rows: [
            ["Controlled / economy", "SAR 950–1,300/m²", "Early feasibility for disciplined designs"],
            ["Standard family home", "SAR 1,350–1,950/m²", "Most practical planning conversations"],
            ["Premium custom home", "SAR 2,050–3,600+/m²", "Higher-end architecture and systems"],
          ],
        },
      },
      {
        id: "local-factors",
        title: "Local factors that affect cost in Riyadh",
        paragraphs: [
          "City pages become valuable when they explain the real cost drivers. In Riyadh, the owner should think about design ambition, façade materials, HVAC strategy, site access, external works and the quality level expected in the target neighbourhood.",
        ],
        table: {
          caption: "Riyadh-specific cost considerations",
          headers: ["Factor", "Why it matters in Riyadh", "What to do"],
          rows: [
            ["Neighbourhood expectation", "Drives façade, finish and specification level", "Set the target market and lifestyle outcome early"],
            ["Supplier depth", "Affects brand choice and competitive pricing", "Request equivalent products clearly in the scope"],
            ["Contractor spread", "Creates large quotation differences", "Normalise all offers to the same scope"],
            ["Heat and services strategy", "Influences HVAC and building envelope decisions", "Align mechanical and architectural decisions early"],
          ],
        },
      },
      {
        id: "breakdown",
        title: "Where the money usually goes in a Riyadh house project",
        paragraphs: [
          "The package breakdown below is illustrative, but it helps owners understand where value engineering decisions can have the biggest effect.",
        ],
        bars: [
          { label: "Structure and envelope", value: 36 },
          { label: "Mechanical, electrical and plumbing", value: 24 },
          { label: "Internal finishes", value: 24 },
          { label: "External works and allowances", value: 16 },
        ],
      },
      {
        id: "quote-check",
        title: "How to compare Riyadh contractor offers without confusion",
        paragraphs: [
          "Riyadh gives owners choice, but more choice only helps if the offers are comparable. Ask each bidder to confirm the same scope, the same inclusions and the same tax treatment.",
        ],
        steps: [
          { title: "1. Issue one controlled scope", text: "Every contractor should receive the same drawings and assumptions." },
          { title: "2. Highlight exclusions", text: "External works, HVAC, kitchens and specialist items should be visible." },
          { title: "3. Check programme logic", text: "A low price with an unrealistic programme can create later risk." },
          { title: "4. Confirm quality level", text: "Do not compare two offers with different material standards as if they were equal." },
          { title: "5. Use Mawsooq as a filter", text: "Bring the best candidates into a more focused discussion on WhatsApp." },
        ],
      },
      {
        id: "mistakes",
        title: "Common Riyadh budgeting mistakes",
        bullets: [
          "Using a national average without city context",
          "Ignoring neighbourhood-specific finish expectations",
          "Assuming every Riyadh contractor is pricing the same scope",
          "Forgetting external works and service-related items",
          "Focusing only on price instead of scope and handover quality",
        ],
      },
    ],
    faqs: [
      ["How much does it cost to build a house in Riyadh?", "It depends on built-up area, scope and finish level. For early planning, many projects fall into broad bands that range from controlled designs to premium custom homes, but the result should always be verified with current quotations."],
      ["Why create a Riyadh-specific page instead of relying on the national guide?", "Because local-intent users search by city. A Riyadh page lets Mawsooq talk directly about the local market and attract higher-conversion enquiries."],
      ["What should I send Mawsooq for a Riyadh estimate?", "Send the project location in Riyadh, expected built-up area, number of floors, preferred scope and target finish level. If you have drawings or a brief, mention that too."],
      ["Can Riyadh quotes differ a lot for the same house?", "Yes. Differences in scope, exclusions, quality level, contractor resources and pricing assumptions can create a wide spread. Normalising the offers is essential."],
    ],
    sources: [officialSources.gastat, officialSources.baladyPermit, officialSources.zatca],
  },
  {
    slug: "architectural-design-cost-saudi-arabia",
    role: "cluster",
    topicId: "architecture",
    category: "Architectural Design",
    primaryKeyword: "architectural design cost Saudi Arabia",
    metaTitle: "Architectural Design Cost Saudi Arabia (2026)",
    title: "Architectural Design Cost in Saudi Arabia: Fees, Scope and What You Get",
    description:
      "Understand architectural design cost in Saudi Arabia, what design fees can include and how better design decisions protect your construction budget.",
    excerpt:
      "A strong commercial-support guide for owners who need architectural design before permits, tendering and construction execution.",
    image: "/images/blog/architectural-design-cost-saudi-arabia.png",
    imageAlt: "Architectural design cost in Saudi Arabia",
    datePublished: "2026-08-02",
    dateModified: "2026-09-04",
    readTime: "12 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "an architectural design appointment in Saudi Arabia",
    ctaLabel: "Send your design scope on WhatsApp",
    whatsappMessage:
      "Hello Mawsooq, I want help understanding design fees and architectural scope for my Saudi house project. City: __. Project type: __. Plot size: __ m². Approximate built-up area: __ m². Current stage: __.",
    relatedSlugs: [
      "architectural-design-process-saudi-arabia",
      "house-architectural-plans-saudi-arabia",
      "villa-design-saudi-arabia",
      "choose-architecture-firm-saudi-arabia",
      "architectural-design-services-dammam-khobar",
    ],
    highlights: [
      { value: "Design", label: "shapes the budget before construction starts" },
      { value: "Fees", label: "should be tied to deliverables and revisions" },
      { value: "Scope", label: "matters more than one low headline price" },
    ],
    takeaways: [
      "Architectural design cost should be reviewed together with deliverables, coordination and revision scope.",
      "A cheaper design service may cost more later if it creates rework, permit delays or poor coordination.",
      "This article supports design-service enquiries and links naturally into permit, cost and contractor topics.",
      "The strongest CTA asks for project type, plot, city and whether the owner already has a brief or concept.",
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["what-included", "What design fees can include"],
      ["pricing-models", "Pricing models"],
      ["fee-bands", "Illustrative fee bands"],
      ["deliverables", "Expected deliverables"],
      ["choose-designer", "How to choose the right designer"],
      ["budget-impact", "How design affects construction cost"],
      ["faqs", "FAQs"],
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: what should you expect from architectural design fees?",
        paragraphs: [
          "Architectural design cost in Saudi Arabia should be judged by deliverables, coordination depth, revision process and permit readiness—not by a low number alone. Owners need architecture because it protects the whole project: space planning, compliance, better budgeting and cleaner tendering all depend on it.",
          "This is a valuable commercial page because design enquiries often lead to wider project work. The article should therefore explain the business value of good design while also helping the reader compare fee proposals responsibly.",
        ],
        image: {
          src: "/images/blog/architectural-design-cost-saudi-arabia.png",
          alt: "Architectural design workspace for Saudi Arabia",
        },
      },
      {
        id: "what-included",
        title: "What architectural design fees can include",
        paragraphs: [
          "The scope can vary from a simple concept study to a coordinated package that supports permits and construction pricing. Owners should ask which stages are included and which consultant roles still need to be added separately.",
        ],
        table: {
          caption: "Design-scope items owners should verify",
          headers: ["Stage or item", "What it may include", "Why it matters"],
          rows: [
            ["Concept design", "Space planning, massing and initial layout options", "Sets the direction and controls area growth"],
            ["Developed design", "Refined plans, elevations and key decisions", "Improves cost planning and approvals"],
            ["Permit support", "Submission-ready information for the engineering workflow", "Helps move the project legally forward"],
            ["Tender package", "Issued drawings and specifications for pricing", "Makes contractor offers more comparable"],
            ["Site support or author review", "Clarifications during execution", "Reduces misinterpretation and rework"],
          ],
        },
      },
      {
        id: "pricing-models",
        title: "Common pricing models for design services",
        paragraphs: [
          "Design fees may be structured per square metre, as a lump sum, as stage-based payments or as a more customised proposal depending on project size and scope. There is no one universal model, so owners should compare deliverables and revision terms alongside price.",
        ],
        bullets: [
          "Per-square-metre design pricing for simpler early comparisons",
          "Lump-sum design proposals for a defined scope",
          "Stage-based payments aligned with concept, developed and permit phases",
          "Separate pricing for extra revisions or major scope changes",
        ],
      },
      {
        id: "fee-bands",
        title: "Illustrative design fee bands for planning conversations",
        paragraphs: [
          "These are not official market rules. They are planning illustrations to help owners think about fee logic and scope discussion.",
        ],
        table: {
          caption: "Illustrative design fee planning examples",
          headers: ["Scope level", "Indicative approach", "Typical use"],
          rows: [
            ["Concept-focused", "Lower-fee early package", "Initial planning and space testing"],
            ["Permit and coordination package", "Mid-range professional fee", "Owners preparing for approvals and cost planning"],
            ["Extended design and tender support", "Higher-fee broader service", "Projects needing deeper detail and pricing readiness"],
          ],
        },
      },
      {
        id: "deliverables",
        title: "Expected deliverables before you say yes",
        paragraphs: [
          "A design proposal is only clear when it names the outputs. Ask what drawings, schedules, visuals, meetings and revision rounds are included. If the proposal is too vague, later disagreements become likely.",
        ],
        checklist: [
          "Room schedule and area statement",
          "Floor plans, elevations and key sections",
          "Clear list of revision rounds",
          "Coordination expectations with structural and MEP disciplines",
          "Permit-related support defined in writing",
          "Tender or construction-stage scope if included",
        ],
      },
      {
        id: "choose-designer",
        title: "How to choose the right architectural designer",
        paragraphs: [
          "The best designer is not only the cheapest or the most visually impressive. The right fit understands the family brief, area discipline, local compliance and the owner's budget reality.",
        ],
        steps: [
          { title: "1. Check project fit", text: "Review whether the designer handles the type and scale of project you want." },
          { title: "2. Review process clarity", text: "Good designers explain deliverables, stages and decisions clearly." },
          { title: "3. Ask about coordination", text: "Architecture should work with structural and MEP thinking, not in isolation." },
          { title: "4. Compare revision policy", text: "Understand how major changes are handled after concept approval." },
          { title: "5. Align the fee with value", text: "Judge price together with scope, not by price alone." },
        ],
      },
      {
        id: "budget-impact",
        title: "How design decisions shape the final construction budget",
        paragraphs: [
          "Good design saves money by controlling area growth, reducing waste, improving circulation, clarifying structural logic and helping contractors price more accurately. Poor design can inflate budget through complexity, rework or preventable changes later in the process.",
        ],
        bars: [
          { label: "Area efficiency", value: 28 },
          { label: "Coordination quality", value: 24 },
          { label: "Specification clarity", value: 22 },
          { label: "Tender accuracy", value: 14 },
          { label: "Reduced rework", value: 12 },
        ],
        note: "This visual shows where design quality creates budget value. It is an explanatory framework, not a project-specific calculation.",
      },
    ],
    faqs: [
      ["How much does architectural design cost in Saudi Arabia?", "The fee varies with scope, project size, complexity and the level of coordination or permit support required. Owners should compare deliverables and revision scope, not just the headline number."],
      ["Should I choose the lowest design fee?", "Not automatically. A very low fee may exclude coordination, revisions or permit-ready deliverables, which can create extra cost later in the project."],
      ["What should be included in a design proposal?", "A good proposal should identify the stages, deliverables, revision rounds, coordination expectations and whether permit or tender support is included."],
      ["What project details should I send before asking for a design fee?", "Send the city, project type, plot size, approximate built-up area, number of floors, current design stage and the deliverables you expect. A clearer scope makes fee proposals more comparable and reduces missing-service surprises."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },


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

];

export const architecturePillar = {
  slug: "architectural-design-saudi-arabia",
  role: "pillar",
  topicId: "architecture",
  category: "Architectural Design Guide",
  primaryKeyword: "architectural design in Saudi Arabia",
  secondaryKeywords: [
    "Saudi Arabia architectural design",
    "architectural services Saudi Arabia",
    "house design Saudi Arabia",
    "villa architecture Saudi Arabia",
    "architectural planning Saudi Arabia",
  ],
  metaTitle: "Architectural Design in Saudi Arabia: 2026 Guide",
  title: "Architectural Design in Saudi Arabia: Process, Plans, Costs and How to Choose",
  description:
    "Plan architectural design in Saudi Arabia with a clear brief, design stages, drawings, cost decisions, local requirements and firm-selection checks.",
  excerpt:
    "A complete 2026 guide to planning, briefing, reviewing and commissioning architectural design for houses and villas in Saudi Arabia.",
  image: "/images/blog/architecture/architectural-design-saudi-arabia.webp",
  imageAlt: "Architectural design in Saudi Arabia with a modern villa, drawings and scale model",
  imageWidth: 1672,
  imageHeight: 941,
  datePublished: "2026-09-04",
  dateModified: "2026-09-04",
  readTime: "20 min read",
  author: "Mawsooq Editorial Team",
  showProof: true,
  proofContext: "an architectural design project in Saudi Arabia",
  ctaLabel: "Send your design brief on WhatsApp",
  whatsappMessage:
    "Hello Mawsooq, I am planning an architectural design project in Saudi Arabia. City: __. Plot size: __ m². Project type: __. Approximate built-up area: __ m². Floors: __. I have / do not have existing drawings. Please help me with the right design scope and next steps.",
  relatedSlugs: [
    "villa-design-saudi-arabia",
    "architectural-design-process-saudi-arabia",
    "house-architectural-plans-saudi-arabia",
    "choose-architecture-firm-saudi-arabia",
    "architectural-design-services-dammam-khobar",
    "architectural-design-cost-saudi-arabia",
  ],
  highlights: [
    { value: "6 stages", label: "from brief to construction-ready information" },
    { value: "1 owner brief", label: "keeps space, budget and priorities aligned" },
    { value: "Saudi-wide", label: "with local requirements checked for the actual plot" },
  ],
  takeaways: [
    "Architectural design should begin with a written owner brief, plot information and a realistic budget boundary rather than a collection of reference images alone.",
    "The broad design process and the drawing deliverables are different search intents: this pillar summarizes both and links to dedicated guides for each.",
    "Design cost has its own page so this guide does not compete with the existing architectural-design-cost article.",
    "Villa-specific layout, privacy and facade decisions belong to the villa-design cluster rather than being repeated in full here.",
    "Dammam and Khobar local service intent has a separate cluster, while this page remains national in scope.",
    "Permit and technical requirements should be verified for the actual project through the relevant professional and official Saudi channels.",
    "A good design package makes later cost planning, permits, tender comparison and construction coordination easier because fewer critical decisions remain undefined.",
  ],
  toc: [
    ["quick-answer", "Quick answer"],
    ["what-it-includes", "What architectural design includes"],
    ["owner-brief", "Build the owner brief"],
    ["design-process", "The design process"],
    ["saudi-context", "Saudi design context"],
    ["deliverables", "Plans and deliverables"],
    ["villa-design", "Villa design decisions"],
    ["cost-scope", "Design cost and scope"],
    ["choose-firm", "How to choose a firm"],
    ["local-services", "Dammam and Khobar"],
    ["handoff", "Permits, pricing and construction handoff"],
    ["mistakes", "Common mistakes"],
    ["checklist", "Pre-design checklist"],
    ["related-guides", "Related guides"],
    ["faqs", "FAQs"],
  ],
  sections: [
    {
      id: "quick-answer",
      title: "Quick answer: what does good architectural design in Saudi Arabia require?",
      paragraphs: [
        "Good architectural design in Saudi Arabia starts by turning the owner’s needs, plot conditions, local requirements and budget boundary into a coordinated design that can be reviewed, approved, priced and eventually built. The most useful early decision is not the facade style; it is agreeing what the project must achieve, how much area is actually needed and which decisions must be resolved before the next stage begins.",
        "For a house or villa, the design work normally progresses from brief and concept into developed layouts, coordinated technical information and an approval or tender-ready package. The exact scope depends on the project and consultant appointment. This page owns the broad architectural-design intent, while the supporting guides below own specific questions such as villa design, drawings, process, provider selection, local Eastern Province services and design fees.",
      ],
      callout: {
        title: "Cannibalization guard",
        text: "This pillar stays broad. Detailed fee questions link to the existing architectural-design-cost page; detailed drawing questions link to the house-plans cluster; process questions link to the design-process cluster; and local Dammam/Khobar searches have their own page.",
      },
      links: [
        { href: "/en/#architectural-design", label: "Architectural Design service", description: "See Mawsooq's architectural-design service context on the English homepage." },
        { href: "/en/blog/architectural-design-cost-saudi-arabia/", label: "Architectural design cost in Saudi Arabia", description: "Use the dedicated fee-and-scope guide for pricing intent." },
      ],
    },
    {
      id: "what-it-includes",
      title: "What architectural design includes—and what it should not be confused with",
      paragraphs: [
        "Architectural design organizes the relationship between people, rooms, circulation, light, privacy, access, facade composition and the physical constraints of the plot. It also creates the information other disciplines need to coordinate their work. That does not mean the architect automatically provides every structural, MEP, interior, landscape, quantity-surveying or site-supervision service; the appointment should state which disciplines and stages are included.",
        "A useful design scope separates concept decisions from technical coordination. Concept work answers questions such as room relationships, massing, entrances, privacy zones and exterior character. Later stages develop dimensions, levels, openings, vertical circulation and interfaces that allow the structural and building-services teams to coordinate. When these boundaries are written clearly, the owner can compare proposals without assuming that every designer is offering the same package.",
      ],
      table: {
        caption: "Architectural design responsibilities owners should clarify",
        headers: ["Decision area", "Architectural focus", "Clarify separately"],
        rows: [
          ["Space planning", "Rooms, circulation, zoning and relationships", "Interior fit-out depth and furniture procurement"],
          ["Building form", "Massing, openings, facade logic and external character", "Specialist facade engineering where required"],
          ["Technical coordination", "Interfaces with structure and services", "Who produces structural and MEP calculations/drawings"],
          ["Approvals", "Information needed for the appointed approval workflow", "Submission responsibility, local attendance and authority fees"],
          ["Tender / construction", "Issued design information and clarifications if included", "Site supervision, contractor management and quantity surveying"],
        ],
      },
    },
    {
      id: "owner-brief",
      title: "Build an owner brief before asking for design options",
      paragraphs: [
        "A strong brief prevents the design from becoming an endless sequence of disconnected revisions. Start with who will use the building, the rooms and capacities required, privacy expectations, parking, guest patterns, service spaces, outdoor use, future expansion and any non-negotiable accessibility or lifestyle requirements. Separate needs from preferences so the team knows which decisions can move when area or budget becomes tight.",
        "The brief should also state the approximate budget boundary and current project stage. A designer cannot protect the budget if the owner asks for area, facade complexity and special features without revealing the financial limit. Conversely, a budget number alone is not a design brief. The useful combination is a target area, required spaces, priorities, plot information, quality expectations and a process for approving major decisions.",
      ],
      checklist: [
        "Plot location, dimensions and available survey information",
        "Target users and room schedule",
        "Approximate built-up area and floor count",
        "Privacy and guest/family zoning requirements",
        "Parking, service access and outdoor-space priorities",
        "Reference images with notes explaining what you actually like",
        "Budget boundary and preferred project timing",
        "Current drawings, reports or authority information if already available",
      ],
    },
    {
      id: "design-process",
      title: "The architectural design process: move through decisions in the right order",
      paragraphs: [
        "The design process works best as a sequence of decision gates rather than one continuous drawing exercise. Early stages test the brief and major spatial ideas. Developed design fixes the choices that affect area, circulation, openings and interfaces. Coordination then aligns architecture with structure and building services. Approval and tender information should be based on the version the owner has actually signed off, not on an earlier concept still changing in parallel.",
        "The exact names of stages vary between practices, so the important question is what is approved at each stage and what deliverable follows. If a major layout change is introduced after structural or MEP coordination, the team should record the impact rather than quietly updating one drawing while leaving related disciplines behind. The dedicated process guide goes deeper into these stage gates without duplicating the drawing-content guide.",
      ],
      steps: [
        { title: "1. Brief and site understanding", text: "Confirm owner needs, plot information, priorities, constraints and the project decision process." },
        { title: "2. Concept design", text: "Test zoning, area, massing, entrances, vertical circulation and the main architectural direction." },
        { title: "3. Developed design", text: "Refine dimensions, openings, elevations, levels, key materials and room relationships." },
        { title: "4. Multidisciplinary coordination", text: "Resolve structural and MEP interfaces before they become site conflicts." },
        { title: "5. Approval / permit information", text: "Prepare the required design information for the actual professional and authority workflow." },
        { title: "6. Tender and construction handoff", text: "Issue a controlled package for pricing and execution, then manage clarifications according to the appointment." },
      ],
      links: [
        { href: "/en/blog/architectural-design-process-saudi-arabia/", label: "Architectural design process in Saudi Arabia", description: "Detailed stage-by-stage guide focused on sequence and decision gates." },
      ],
    },
    {
      id: "saudi-context",
      title: "Design for the Saudi context instead of importing a generic floor plan",
      paragraphs: [
        "A successful Saudi home should respond to the actual plot, orientation, privacy expectations, family routines, access, parking and climate rather than copying a plan from a different site. Sun exposure, shaded outdoor use, glazing, entrance hierarchy and the relationship between guest and family spaces can materially change how comfortable the design feels. These choices should be resolved as architecture, not added as decoration after the plan is fixed.",
        "Technical requirements also matter. The Saudi Building Code and local approval processes affect the information needed for a compliant project, and the relevant requirements should be checked for the project type and location. This guide does not replace a licensed professional’s project-specific review. Its role is to help the owner ask better questions before design decisions become expensive to change.",
      ],
      links: [
        { href: officialSources.sbc.url, label: officialSources.sbc.label, description: "Official reference for Saudi Building Code information." },
        { href: officialSources.baladyPermit.url, label: officialSources.baladyPermit.label, description: "Official Balady service information for building-permit workflow." },
      ],
    },
    {
      id: "deliverables",
      title: "Plans and deliverables: know what you are actually receiving",
      paragraphs: [
        "A proposal that simply says ‘architectural drawings’ is not specific enough for a serious project. The owner should know whether the package includes floor plans, elevations, sections, roof information, schedules, area statements, 3D views, coordination drawings, permit support, tender information and revision rounds. Different stages can legitimately contain different levels of detail, but the deliverables should match the purpose of that stage.",
        "The house-plans cluster owns the detailed question of what each drawing is for and how to review it. Here the main principle is simpler: the design package must be usable by the next person in the chain. A concept package should support a concept decision; an approval package should support the approval workflow; a tender package should be clear enough for comparable pricing; and construction information should control execution rather than leave major assumptions open.",
      ],
      links: [
        { href: "/en/blog/house-architectural-plans-saudi-arabia/", label: "House architectural plans in Saudi Arabia", description: "See the dedicated guide to drawings, deliverables and review checks." },
      ],
    },
    {
      id: "villa-design",
      title: "Villa design needs its own decision framework",
      paragraphs: [
        "Villa design is a narrower search intent than architectural design as a whole. It usually places more emphasis on family zoning, guest reception, privacy, indoor-outdoor living, parking, stairs and lifts, facade character, landscape interfaces and the relationship between multiple floors. The villa page therefore owns those design decisions so this pillar does not repeat them in full.",
        "One of the most common mistakes is treating the facade and the plan as separate projects. A large opening, double-height space, balcony or screen changes the internal layout, structure, sun exposure and cost. Good villa design develops the plan and external form together while keeping future engineering coordination in view. That is more useful than selecting a facade style first and forcing the rooms to fit behind it.",
      ],
      links: [
        { href: "/en/blog/villa-design-saudi-arabia/", label: "Villa design in Saudi Arabia", description: "Layouts, privacy, facade decisions and a project-ready villa brief." },
        { href: "/en/blog/villa-construction-cost-saudi-arabia/", label: "Villa construction cost in Saudi Arabia", description: "Keep design intent separate from the existing villa construction-budget query." },
      ],
    },
    {
      id: "cost-scope",
      title: "Design cost should be compared by scope, not by one headline fee",
      paragraphs: [
        "This pillar intentionally does not reproduce design-fee ranges because Mawsooq already has a page that owns architectural-design-cost intent. The useful decision here is understanding why two fee proposals can differ: one may stop at concept design while another includes developed drawings, coordination, approval support, tender information, 3D work or additional revision rounds. A lower number is not cheaper if important project stages are missing and later purchased separately.",
        "Before accepting a proposal, compare the exact deliverables, number of options or revisions, meeting cadence, coordination responsibility, excluded disciplines and what happens after owner approval. If the budget is constrained, reduce optional scope deliberately rather than leaving it ambiguous. The dedicated cost guide explains pricing logic and what to ask for without forcing this broad page to compete for the same query.",
      ],
      links: [
        { href: "/en/blog/architectural-design-cost-saudi-arabia/", label: "Architectural design cost in Saudi Arabia", description: "The existing page owns fees, pricing models and design-scope comparisons." },
      ],
    },
    {
      id: "choose-firm",
      title: "How to choose an architecture firm without being distracted by renderings alone",
      paragraphs: [
        "A portfolio is useful because it shows design language and presentation quality, but it does not by itself prove that a team can manage your brief, coordinate technical information or control revisions. Ask the firm to explain its process, project roles, typical deliverables, coordination method, approval responsibilities and how owner decisions are documented. The clearer those answers are, the easier it becomes to compare providers on something more meaningful than imagery.",
        "Also review how the proposal defines exclusions. If structural design, MEP, interior design, permit submissions, quantity surveying, site supervision or specialist consultants are outside the fee, that is not automatically a problem; it simply needs to be visible before appointment. The firm-selection cluster turns these questions into a shortlist and interview framework.",
      ],
      links: [
        { href: "/en/blog/choose-architecture-firm-saudi-arabia/", label: "How to choose an architecture firm in Saudi Arabia", description: "A commercial-investigation guide for comparing providers, scope and proof." },
      ],
    },
    {
      id: "local-services",
      title: "Dammam and Khobar: keep local service intent separate from the national guide",
      paragraphs: [
        "Owners in Dammam, Khobar and the Eastern Province often search for architectural design with a local modifier because they want confidence that the team understands the project context and can support the required workflow. That intent deserves its own page. The local cluster focuses on briefing, climate and exposure questions, privacy, digital coordination and what to confirm if a project requires local attendance, approval responsibility or specialist site input.",
        "Mawsooq provides design and coordination services to clients in Saudi Arabia, including Eastern Province projects, but the local page should not be read as a claim that Mawsooq maintains a physical branch at a specific Dammam address. Where a task requires a locally licensed role, site visit or authority-facing attendance, that requirement should be confirmed before scope and fee are agreed.",
      ],
      links: [
        { href: "/en/blog/architectural-design-services-dammam-khobar/", label: "Architectural design services in Dammam & Khobar", description: "Local Eastern Province design intent with clear scope and location disclaimers." },
        { href: "/en/blog/house-construction-cost-dammam-khobar/", label: "House construction cost in Dammam & Khobar", description: "Separate page for local construction-budget intent." },
      ],
    },
    {
      id: "handoff",
      title: "Connect design to permits, pricing and construction instead of treating it as a standalone image exercise",
      paragraphs: [
        "The value of architectural design becomes clearer at the handoff points. Permit preparation depends on coordinated information and the applicable approval route. Cost planning becomes more accurate as area, systems and specifications are resolved. Contractor tendering becomes more comparable when bidders receive the same issued package. Construction becomes easier to control when drawings, revisions and clarifications follow a documented process.",
        "This is also where the architecture topic connects to Mawsooq’s existing construction authority without cannibalizing it. The architecture pillar owns the design journey. The house-building pillar owns the complete build journey. The permit page owns permit intent. The construction-cost page owns cost-per-square-metre intent. Readers should move between those pages through descriptive internal links instead of finding four pages trying to answer the same question.",
      ],
      links: [
        { href: "/en/blog/building-permit-saudi-arabia/", label: "Building permit in Saudi Arabia", description: "Dedicated permit workflow and document-readiness guide." },
        { href: "/en/blog/construction-cost-per-square-meter-saudi-arabia/", label: "Construction cost per square meter in Saudi Arabia", description: "Dedicated national residential construction-cost intent." },
        { href: "/en/blog/build-a-house-saudi-arabia/", label: "How to build a house in Saudi Arabia", description: "The existing pillar owns the full construction journey after design." },
      ],
    },
    {
      id: "mistakes",
      title: "Common architectural-design mistakes to avoid before they become construction problems",
      bullets: [
        "Starting from a facade image before agreeing the room schedule, area and circulation logic.",
        "Allowing the built-up area to grow through revisions without checking the budget impact.",
        "Approving architecture before major structural and MEP interfaces are coordinated.",
        "Assuming every design proposal includes the same drawings, revisions and approval support.",
        "Copying a plan from another plot without checking orientation, access, privacy and local requirements.",
        "Changing key rooms after downstream disciplines have already developed their work without a controlled revision process.",
        "Selecting an architect only by render quality while ignoring scope clarity, coordination and communication.",
      ],
    },
    {
      id: "checklist",
      title: "Pre-design checklist: what to prepare before your first serious design meeting",
      paragraphs: [
        "The first meeting becomes much more productive when the owner arrives with decisions and evidence rather than only inspiration. You do not need a finished brief, but you should be able to explain who will use the property, what the plot information is, which spaces are essential, which features are optional and what budget or area limits cannot be ignored.",
      ],
      checklist: [
        "Plot document or survey information currently available",
        "City and neighbourhood / site location",
        "Family and guest-use requirements",
        "Target room schedule and parking needs",
        "Approximate number of floors and built-up area",
        "Budget boundary and finish expectations",
        "Reference projects with written likes and dislikes",
        "Any existing permit, soil, utility or site information",
        "Preferred communication and approval process",
        "A clear statement of what you want the designer to deliver next",
      ],
      callout: {
        title: "Ready to turn this into a project brief?",
        text: "Send the city, plot size, approximate built-up area, floors, current project stage and any existing drawings on WhatsApp. The more specific the first message, the more useful the first response can be.",
      },
    },
  ],
  faqs: [
    ["What is included in architectural design in Saudi Arabia?", "The exact scope depends on the appointment. It can include briefing, concept layouts, developed plans, elevations, sections, facade development, coordination, approval support, tender information and later clarifications. Ask for a written deliverable list instead of assuming every design proposal includes the same stages."],
    ["How long does architectural design take in Saudi Arabia?", "There is no reliable single duration for every project. Plot information, project size, number of options, owner decision speed, coordination depth and approval requirements all affect the programme. Ask the designer for stage dates and decision deadlines tied to your actual scope."],
    ["How much does architectural design cost in Saudi Arabia?", "Design fees depend on scope, project size, complexity, revisions, coordination and approval support. Mawsooq has a separate architectural-design-cost guide that owns this query so pricing detail is not duplicated across multiple pages."],
    ["Do I need architectural design before a building permit?", "A permit application requires the appropriate project information and professional workflow. The exact documents and responsibilities depend on the project and authority process, so verify the current requirements through the appointed professionals and official Balady guidance."],
    ["What is the difference between architectural plans and the architectural design process?", "The process is the sequence of decisions and stages used to develop the project. Architectural plans are deliverables produced at those stages. Mawsooq separates these intents into different supporting pages to make each guide more focused."],
    ["Can Mawsooq help with villa design in Saudi Arabia?", "Mawsooq presents architectural-design services and project support for Saudi projects. For a useful first conversation, send the city, plot size, approximate built-up area, room needs, floor count and any reference images or existing drawings."],
    ["Does Mawsooq have a physical architecture office in Dammam?", "The English local guide is written for clients with projects in Dammam, Khobar and the Eastern Province and should not be treated as a claim of a physical Mawsooq branch at a Dammam address. Confirm any requirement for local attendance or licensed authority-facing work before appointment."],
    ["Should I choose an architecture firm based on portfolio style?", "Portfolio fit matters, but it should be reviewed together with scope clarity, process, coordination, revision rules, communication and the team’s ability to explain how your project moves from concept into usable technical information."],
  ],
  sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
};

export const architectureClusters = [
  {
    slug: "villa-design-saudi-arabia",
    role: "cluster",
    topicId: "architecture",
    category: "Villa Design",
    primaryKeyword: "villa design in Saudi Arabia",
    secondaryKeywords: ["Saudi villa design", "modern villa design Saudi Arabia", "villa architecture Saudi Arabia", "villa floor plan Saudi Arabia"],
    metaTitle: "Villa Design in Saudi Arabia: Layout & Planning Guide",
    title: "Villa Design in Saudi Arabia: Layouts, Privacy, Facades and a Better Design Brief",
    description:
      "Plan a villa design in Saudi Arabia around family zoning, privacy, circulation, facade decisions, climate response, coordination and a clear project brief.",
    excerpt:
      "A focused villa-design guide for owners who want better layouts and facade decisions before engineering, permits and construction pricing.",
    image: "/images/blog/architecture/villa-design-saudi-arabia.webp",
    imageAlt: "Modern villa design in Saudi Arabia with landscaped courtyard and swimming pool",
    imageWidth: 1672,
    imageHeight: 941,
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    readTime: "14 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "a villa design in Saudi Arabia",
    ctaLabel: "Send your villa brief on WhatsApp",
    whatsappMessage:
      "Hello Mawsooq, I want help with a villa design in Saudi Arabia. City: __. Plot size: __ m². Floors: __. Approximate built-up area: __ m². Family / guest requirements: __. Style references: __. Please help me define the design scope and next steps.",
    relatedSlugs: ["architectural-design-process-saudi-arabia", "house-architectural-plans-saudi-arabia", "choose-architecture-firm-saudi-arabia", "architectural-design-cost-saudi-arabia", "architectural-design-services-dammam-khobar"],
    highlights: [
      { value: "Privacy", label: "planned through zoning, entries and openings" },
      { value: "Flow", label: "family, guests, service and outdoor movement" },
      { value: "Facade + plan", label: "developed together instead of separately" },
    ],
    takeaways: [
      "Villa design should start with family and guest-use patterns, not a facade reference image.",
      "Plan privacy through zoning, entrances, views and circulation rather than relying on one late visual fix.",
      "Treat the facade and floor plan as one coordinated design problem because openings, structure and internal spaces affect each other.",
      "Keep area growth visible throughout design because additional rooms, double-height spaces and circulation can change the construction budget.",
      "Use the dedicated construction-cost guide for build-price questions and the design-cost page for professional fee questions.",
      "The strongest first WhatsApp brief includes city, plot, floors, approximate area, household requirements and current drawings.",
    ],
    toc: [["quick-answer","Quick answer"],["brief","Villa brief"],["zoning","Privacy and zoning"],["layout","Layout planning"],["facade","Facade and openings"],["climate","Climate and outdoor spaces"],["coordination","Engineering coordination"],["deliverables","Design deliverables"],["mistakes","Common mistakes"],["checklist","Villa review checklist"],["related-guides","Related guides"],["faqs","FAQs"]],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer: what makes a strong villa design in Saudi Arabia?",
        paragraphs: [
          "A strong villa design in Saudi Arabia balances privacy, family life, guest reception, service circulation, parking, outdoor use, facade character and the technical realities of structure and building services. The plan should be easy to live in before it is impressive to look at. That means testing everyday movement, furniture, door positions, stairs, kitchens, service areas and views before locking the facade.",
          "This page owns villa-design intent. It does not try to rank for villa construction cost, architectural design fees or the broad process of building a house. Those queries already have dedicated pages. Here the goal is to help an owner prepare a better villa brief, evaluate layouts and understand which decisions should be approved before the design moves into detailed coordination.",
        ],
        links: [
          { href: "/en/blog/architectural-design-saudi-arabia/", label: "Architectural design in Saudi Arabia", description: "Return to the broad architecture pillar for the complete design context." },
          { href: "/en/blog/villa-construction-cost-saudi-arabia/", label: "Villa construction cost in Saudi Arabia", description: "Use the separate page when the primary question is build budget." },
        ],
      },
      {
        id: "brief",
        title: "Write the villa brief around people and routines before rooms and styles",
        paragraphs: [
          "Start by listing household members, regular guests, service requirements, parking, storage, hobbies, outdoor use and any future changes the family expects. Then convert those needs into spaces and relationships. A majlis or guest reception area is not only a room name; it has implications for entrance hierarchy, washrooms, circulation, privacy and how visitors reach the space without crossing family areas unnecessarily.",
          "Reference images are useful when they are annotated. Instead of sending ten villas and saying ‘I like this style,’ identify what matters: deep shaded openings, a calm material palette, a central courtyard, vertical screens, a double-height entry or a particular relationship to the garden. The architect can then translate the preference into a site-specific design rather than copying an elevation that does not fit the plot or plan.",
        ],
        checklist: ["Household and guest profiles","Required rooms and approximate capacities","Parking and driver/service access","Family vs guest privacy priorities","Outdoor areas and pool/garden wishes","Future expansion or accessibility needs","Style references with written notes","Budget and area boundaries"],
      },
      {
        id: "zoning",
        title: "Use zoning to design privacy instead of trying to add it later",
        paragraphs: [
          "Privacy is created by a sequence of decisions: where people enter, what they can see from the entrance, how guest and family routes intersect, where stairs and lifts are placed, which windows face neighbours and how outdoor areas connect to family spaces. A screen can help, but it cannot repair a layout that forces every visitor through the private core of the house.",
          "A useful review exercise is to trace four journeys on the plan: family arrival, guest arrival, service movement and movement to outdoor spaces. If those paths clash repeatedly, the plan may need restructuring. The goal is not to create long corridors; it is to place spaces in logical zones and use short, controlled transitions between them.",
        ],
        table: { caption: "Villa zoning questions to review", headers: ["Zone","Typical concerns","Design question"], rows: [["Guest","Entrance, reception, washroom, views","Can guests arrive and leave without crossing private family areas?"],["Family","Living, dining, bedrooms, daily stairs","Are everyday routes short and comfortable?"],["Service","Kitchen support, laundry, staff, deliveries","Can service movement work without dominating family circulation?"],["Outdoor","Garden, terrace, pool, shaded seating","Do the main indoor spaces connect to usable outdoor areas?"],["Parking","Cars, pedestrian entry, gate sequence","Is arrival safe and clear without wasting frontage?"]] },
      },
      {
        id: "layout",
        title: "Review the layout with furniture, dimensions and real circulation—not empty rooms",
        paragraphs: [
          "A plan can look spacious until furniture is added. Review living rooms with actual seating groups, dining spaces with chair clearance, bedrooms with wardrobes and door swings, kitchens with work zones, and bathrooms with usable fixture space. Corridors and stairs should be checked as part of the same exercise. A large total area does not guarantee a comfortable home if too much of it is trapped in circulation or awkward leftover spaces.",
          "Also check vertical relationships. Stacked wet areas can simplify coordination. Double-height spaces affect upper-floor area and acoustic privacy. A stair position influences the entire plan, not just one room. When these decisions are tested during concept design, later structural and MEP coordination becomes more predictable.",
        ],
        links: [{ href: "/en/blog/house-architectural-plans-saudi-arabia/", label: "House architectural plans in Saudi Arabia", description: "Use the plans guide to review drawings and deliverables in more detail." }],
      },
      {
        id: "facade",
        title: "Develop the facade with the plan, structure and openings",
        paragraphs: [
          "Modern villa facades in Saudi Arabia often use a mix of solid volumes, recessed glazing, screens, stone-like materials and shaded terraces, but the design should be driven by the building rather than a catalogue of effects. Every large opening changes light, privacy, furniture and cooling strategy. Every cantilever, deep frame or double-height feature has structural and cost implications that should be discussed before it becomes a fixed visual promise.",
          "Ask for elevations and 3D views that correspond to the current floor plan version. If the rendering shows windows, balconies or entrance volumes that do not match the drawings, the project is not coordinated enough to move forward. Design revisions should update the related documents together, not only the image shown to the owner.",
        ],
      },
      {
        id: "climate",
        title: "Treat sun, shade and outdoor use as architectural decisions",
        paragraphs: [
          "The amount and orientation of glazing, depth of shading, position of courtyards and relationship between indoor and outdoor spaces can affect comfort and how often those areas are actually used. The right response depends on the plot, orientation and room use, so there is no universal facade formula. A useful design review asks where direct sun reaches key rooms and whether terraces and garden connections are protected enough to be practical.",
          "Landscape and architecture should also meet deliberately. Outdoor seating, pool edges, service yards, planting zones and boundary walls affect privacy, views and circulation. Even if the landscape design is a separate appointment, the architectural concept should reserve the right spaces and levels for it rather than treating external works as whatever remains after the building footprint is fixed.",
        ],
      },
      {
        id: "coordination",
        title: "Coordinate structure and MEP before design decisions become site changes",
        paragraphs: [
          "A villa contains many interfaces that are invisible in a concept rendering: column positions, transfer conditions, stair structure, shafts, ceiling zones, ducts, drainage routes, equipment spaces and roof services. If architecture develops without those interfaces, the project may later lose ceiling height, window positions, storage or facade clarity to accommodate systems that were not planned early enough.",
          "The owner does not need to solve these technical details, but should ask who is responsible for coordination and when it happens. A design team should be able to explain how architectural revisions are communicated to structural and MEP disciplines and how conflicts are resolved before the drawings are issued for permit, tender or construction.",
        ],
        links: [{ href: "/en/blog/architectural-design-process-saudi-arabia/", label: "Architectural design process in Saudi Arabia", description: "See where coordination belongs in the stage-by-stage workflow." }],
      },
      {
        id: "deliverables",
        title: "Agree what the villa-design package will deliver",
        paragraphs: [
          "A villa design appointment should define the number of concept options, plans, elevations, sections, facade views, 3D images, revision rounds and coordination stages included. It should also state whether permit support, tender information, structural/MEP coordination, interior design or site-stage clarification are part of the same commission or separate services.",
          "Clear deliverables protect both owner and designer. They create objective milestones, make fee proposals comparable and reduce disagreement about what ‘complete design’ means. If you need a detailed breakdown of plan types and how to review them, use the house-plans cluster rather than expanding this villa page into a second drawings guide.",
        ],
        links: [
          { href: "/en/blog/architectural-design-cost-saudi-arabia/", label: "Architectural design cost in Saudi Arabia", description: "Compare fees by deliverables and scope." },
          { href: "/en/blog/house-architectural-plans-saudi-arabia/", label: "House architectural plans", description: "Detailed explanation of drawing deliverables." },
        ],
      },
      {
        id: "mistakes",
        title: "Common villa-design mistakes",
        bullets: ["Choosing facade style before the plan is stable","Growing area after every revision without budget checks","Oversizing circulation and leftover spaces","Ignoring furniture and storage during plan review","Separating guest privacy from entrance planning","Leaving stairs, shafts and services for later coordination","Approving renderings that do not match current plans","Assuming the cheapest design fee includes every required discipline"],
      },
      {
        id: "checklist",
        title: "Villa design review checklist before concept approval",
        checklist: ["Every required room is present and correctly sized","Guest and family circulation is understandable","Parking and pedestrian arrival are resolved","Furniture fits without blocking doors or routes","Stairs/lift locations work on every floor","Openings support privacy and room use","Outdoor spaces connect to the right rooms","Facade views match the current plan","Major structural/MEP interfaces have been discussed","Built-up area still matches the agreed budget strategy"],
      },
    ],
    faqs: [
      ["What should I prepare before starting a villa design in Saudi Arabia?", "Prepare the plot information you have, city, household and guest needs, room list, approximate floor count, target built-up area, privacy priorities, style references and a realistic budget boundary. Mention any existing drawings, survey information or permit progress."],
      ["How is villa design different from general architectural design?", "Villa design is a focused residential intent. It places more emphasis on family and guest zoning, privacy, parking, stairs, outdoor living, facade composition and multi-floor relationships. The broader architecture pillar covers the complete design context across project types."],
      ["Should the facade be designed before the floor plan?", "Usually the plan and facade should develop together. Fixing a facade first can force awkward room layouts, openings or structure. The exterior form should respond to internal spaces, orientation, privacy and technical coordination."],
      ["How much does villa design cost in Saudi Arabia?", "Fee questions depend on scope and deliverables. Use Mawsooq's separate architectural-design-cost guide so pricing intent is handled in one dedicated page instead of duplicated here."],
      ["Can Mawsooq review an existing villa concept?", "For a useful first conversation, send the city, plot size, available plans or images, the issues you want reviewed and the stage of the project. The team can then clarify what review or design scope is appropriate."],
    ],
    sources: [officialSources.sbc, officialSources.residentialCode, officialSources.baladyPermit],
  },
  {
    slug: "choose-architecture-firm-saudi-arabia",
    role: "cluster",
    topicId: "architecture",
    category: "Architecture Firm Selection",
    primaryKeyword: "how to choose an architecture firm in Saudi Arabia",
    secondaryKeywords: ["architecture firm Saudi Arabia", "architectural company Saudi Arabia", "choose architect Saudi Arabia", "best architecture firm Saudi Arabia"],
    metaTitle: "How to Choose an Architecture Firm in Saudi Arabia",
    title: "How to Choose an Architecture Firm in Saudi Arabia: Scope, Proof and Questions to Ask",
    description:
      "Compare architecture firms in Saudi Arabia by project fit, scope, coordination, proposal clarity, reviews and real project examples—not renderings alone.",
    excerpt:
      "A commercial-investigation guide for owners shortlisting architecture firms and comparing proposals before appointment.",
    image: "/images/blog/architecture/choose-architecture-firm-saudi-arabia.webp",
    imageAlt: "Saudi clients reviewing architectural drawings with a design consultant",
    imageWidth: 1672,
    imageHeight: 941,
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    readTime: "13 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "an architecture-firm shortlist in Saudi Arabia",
    ctaLabel: "Discuss your design scope on WhatsApp",
    whatsappMessage:
      "Hello Mawsooq, I am comparing architecture/design options for a Saudi project. City: __. Project type: __. Plot size: __ m². Approximate built-up area: __ m². Current stage: __. Please help me define the right scope and questions before appointment.",
    relatedSlugs: ["architectural-design-saudi-arabia", "architectural-design-cost-saudi-arabia", "architectural-design-process-saudi-arabia", "house-architectural-plans-saudi-arabia", "villa-design-saudi-arabia"],
    highlights: [{ value: "Fit", label: "relevant project type and process" },{ value: "Scope", label: "written deliverables and exclusions" },{ value: "Proof", label: "reviews plus real project examples" }],
    takeaways: [
      "Choose a firm by project fit, process, scope and coordination—not by the most dramatic rendering.",
      "Ask every shortlisted provider to price a comparable brief so fee differences can be understood.",
      "Review deliverables, revisions, approval responsibility and excluded disciplines in writing.",
      "Use client testimonials and project videos as trust signals, then still test how the team will handle your actual project.",
      "The architectural-design-cost page owns fee intent; this page owns provider-selection intent.",
      "A clear first WhatsApp brief makes it easier to identify whether you need concept design, full architecture, coordination or a review service.",
    ],
    toc: [["quick-answer","Quick answer"],["shortlist","Build a shortlist"],["portfolio","Portfolio and proof"],["scope","Compare scope"],["proposal","Proposal comparison"],["coordination","Coordination and approvals"],["interview","Questions to ask"],["red-flags","Red flags"],["decision","Decision framework"],["related-guides","Related guides"],["faqs","FAQs"]],
    sections: [
      { id:"quick-answer", title:"Quick answer: how should you choose an architecture firm in Saudi Arabia?", paragraphs:["Choose an architecture firm by checking whether its process, team and deliverables fit your project—not simply whether you like its portfolio. Start with a written brief, send the same information to each shortlisted provider and compare what each proposal actually includes. The strongest option is the one that can explain how your brief moves through concept, coordination, approvals and usable project information with clear responsibilities.","This page owns architecture-firm selection intent. It intentionally does not reproduce design-fee guidance or the broad architectural-design process in full. Those topics have their own pages. The goal here is to help an owner move from a long list of providers to a defensible shortlist using project fit, proof, scope clarity, communication and risk control."], links:[{href:"/en/blog/architectural-design-saudi-arabia/",label:"Architectural design in Saudi Arabia",description:"Use the pillar if you first need to understand the complete design journey."},{href:"/en/blog/architectural-design-cost-saudi-arabia/",label:"Architectural design cost",description:"Use the dedicated cost page for fee and pricing-model intent."}] },
      { id:"shortlist", title:"Build a shortlist around the project you actually have", paragraphs:["A firm that is strong at one building type or service may not be the best fit for every commission. Start by defining the project type, plot, approximate area, stage and required scope. Then look for evidence that the provider can handle work of similar complexity and can explain the decisions that matter for your case. A relevant process is more valuable than a portfolio full of unrelated projects.","Also decide what kind of relationship you need. Some owners need concept design only; others need a coordinated architecture package, approval support, tender information, interior design or continuing technical clarification. If you do not define that expectation, two proposals can look comparable while one contains several stages the other excludes."], checklist:["Project type and approximate scale match","The firm can explain its design stages","Named deliverables are clear","Revision process is written","Structural/MEP coordination responsibility is defined","Approval support is described accurately","Communication and decision channels are clear","Exclusions are visible rather than hidden"] },
      { id:"portfolio", title:"Use portfolios, testimonials and project videos as evidence—not as the entire decision", paragraphs:["A portfolio can show design quality, range and presentation. Client testimonials can show how people describe the experience. Project videos can help you see how work is communicated. Those are useful trust signals, which is why the Mawsooq proof section on this page includes published client reviews and project showcases from the existing YouTube channel.","But proof should lead to better questions rather than replace them. Ask what the firm's actual role was in a project, what deliverables were produced and how revisions or technical coordination were handled. A beautiful image does not tell you whether the drawing package was complete, whether the owner brief was controlled or whether the team communicated clearly during difficult decisions."], callout:{title:"What to look for in the videos below",text:"Look beyond visual style. Notice the variety of projects, clarity of presentation and whether the work resembles the type of service you need. Then ask how that process would apply to your own brief."} },
      { id:"scope", title:"Compare scope line by line before comparing fees", paragraphs:["The most common procurement mistake is comparing total design fees before normalising scope. One proposal may include concept and 3D only; another may include developed architecture, coordination, approval support and tender information. The cheaper headline can become more expensive if the missing stages are later added as variations or appointed separately under time pressure.","Create a one-page comparison sheet listing concept options, plans/elevations/sections, 3D views, revision rounds, coordination, permit support, tender drawings, site-stage clarification, meeting count and excluded disciplines. Mark each item as included, optional or excluded. This converts a vague creative-service comparison into a decision the owner can explain."], table:{caption:"Architecture proposal comparison sheet",headers:["Item","Firm A","Firm B","Question to resolve"],rows:[["Concept options","Included / excluded","Included / excluded","How many and to what depth?"],["Developed drawings","Included / excluded","Included / excluded","What drawings and stage?"],["3D / visualization","Included / excluded","Included / excluded","How many views and revisions?"],["Structural + MEP coordination","Included / excluded","Included / excluded","Who owns coordination?"],["Permit support","Included / excluded","Included / excluded","Submission role and authority interaction?"],["Tender / construction information","Included / excluded","Included / excluded","What is issued for contractor pricing?"]] } },
      { id:"proposal", title:"Read the proposal for boundaries, not only promises", paragraphs:["A professional proposal should make it easy to see the project description, scope, deliverables, programme assumptions, owner inputs, fees, payment stages, revision policy and exclusions. Ambiguity is a commercial risk because the parties may remember the sales conversation differently once work begins. If a required service is only mentioned verbally, ask for it to be added to the written scope.","Pay particular attention to owner-caused changes after approval. Design naturally evolves during concept stages, but repeated major changes after an agreed stage can affect programme and coordination. A reasonable proposal should explain what counts as a normal revision and what becomes additional scope. That protects the owner from surprises and gives the design team a controlled decision process."], links:[{href:"/en/blog/architectural-design-process-saudi-arabia/",label:"Architectural design process",description:"See the stage gates a proposal should map to."}] },
      { id:"coordination", title:"Ask who coordinates architecture with structure, MEP and approvals", paragraphs:["Architecture does not exist in isolation. The firm should explain whether it provides multidisciplinary coordination internally, appoints other disciplines, coordinates with owner-appointed consultants or stops before those stages. None of those models is automatically wrong; the risk is not knowing which model applies until drawings conflict.","Approval work also needs clarity. Ask which information the architecture team prepares, which professional role is responsible for submissions and what local or authority-facing activities are outside the appointment. Use official Balady and Saudi Building Code information to verify the current project requirements instead of relying on a generic sales statement."], links:[{href:officialSources.baladyPermit.url,label:officialSources.baladyPermit.label,description:"Official permit-service information."},{href:officialSources.sbc.url,label:officialSources.sbc.label,description:"Official code reference."}] },
      { id:"interview", title:"Questions to ask before appointing an architecture firm", checklist:["Who will be the day-to-day design lead on my project?","Which stages are included and what is approved at each one?","What exact drawings and models are delivered?","How many concept options and revision rounds are included?","How do you coordinate structural and MEP requirements?","What is your role in permit or authority processes?","Which services are explicitly excluded?","How are major owner changes priced after stage approval?","How do you issue and control revised drawings?","Can you show relevant project examples and explain your role in them?"] },
      { id:"red-flags", title:"Red flags that deserve clarification before appointment", bullets:["A fee quote with no deliverable list","A promise of approvals without explaining the actual professional/authority workflow","Portfolio images with no explanation of the firm's role","No named process for revisions or change control","Architecture, structure and MEP treated as unrelated packages","Pressure to approve a large fee before the brief is defined","A local-office claim that cannot be supported with a real address or required professional role","A proposal that hides exclusions in general wording"] },
      { id:"decision", title:"Use a weighted decision instead of choosing the lowest fee", paragraphs:["For most owners, the final decision combines several factors: relevance of experience, strength of the brief response, process clarity, scope completeness, coordination method, communication confidence, proof and fee. You can weight those factors based on the project. A complex custom villa may justify more emphasis on coordination and design development; a small concept study may justify a simpler appointment.","If two firms are close, ask each to respond to the same short scenario from your brief. The quality of their questions is often revealing. A team that immediately jumps to style without asking about users, area, budget, plot information or project stage may be solving the wrong problem."], table:{caption:"Example selection framework — adjust the weights for your project",headers:["Factor","What to evaluate","Why it matters"],rows:[["Project fit","Relevant type and complexity","Reduces learning risk"],["Scope clarity","Deliverables, revisions, exclusions","Makes proposals comparable"],["Coordination","Architecture + engineering interfaces","Reduces downstream conflict"],["Proof","Projects and client feedback","Supports trust"],["Communication","Quality of questions and responses","Critical for design decisions"],["Fee","Price for the defined scope","Should be compared only after scope is normalised"]] } },
    ],
    faqs: [
      ["What should I look for when choosing an architecture firm in Saudi Arabia?", "Look for relevant project fit, a clear design process, written deliverables, coordination responsibilities, transparent exclusions, project examples, client feedback and communication that shows the team understands your brief. Compare fees only after the scope is normalised."],
      ["Should I choose the architecture firm with the best renderings?", "Renderings show visual capability but not the full service. Ask how the firm develops the brief, coordinates technical disciplines, controls revisions and produces information for approvals, tendering or construction."],
      ["Should every firm quote the same fee?", "No. Fees can differ because scope, team, deliverables and revision assumptions differ. The useful comparison is price for the same defined scope, not total numbers taken from proposals that include different services."],
      ["How can I verify an architecture firm's claims?", "Review published project examples, client testimonials, written scope and the team's explanation of its role. For regulatory or approval claims, verify requirements through the relevant official Saudi channels and the professionals appointed to your project."],
      ["Can Mawsooq help me define a design brief before I appoint a firm?", "Send the city, plot size, project type, approximate area, current stage and available drawings. A clearer brief makes provider comparison more useful and reduces the chance of buying the wrong scope."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },
  {
    slug: "architectural-design-services-dammam-khobar",
    role: "cluster",
    topicId: "architecture",
    category: "Eastern Province Architecture",
    primaryKeyword: "architectural design services in Dammam and Khobar",
    secondaryKeywords: ["architectural design Dammam", "architectural design Khobar", "villa design Dammam", "architecture services Eastern Province"],
    metaTitle: "Architectural Design Services Dammam & Khobar",
    title: "Architectural Design Services in Dammam & Khobar: What to Plan Before You Start",
    description:
      "Plan architectural design in Dammam, Khobar and the Eastern Province with a clear brief, site-context checks, coordination, deliverables and WhatsApp intake.",
    excerpt:
      "A local Eastern Province design guide for owners who need architecture support without confusing design-service intent with construction-cost intent.",
    image: "/images/blog/architecture/architectural-design-services-dammam-khobar.webp",
    imageAlt: "Architectural design for a modern villa in Dammam and Khobar in Saudi Arabia",
    imageWidth: 1672,
    imageHeight: 941,
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    readTime: "13 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "an architectural project in Dammam or Khobar",
    ctaLabel: "Send your Eastern Province project on WhatsApp",
    whatsappMessage:
      "Hello Mawsooq, I have an architectural design project in Dammam / Khobar / Eastern Province. City/district: __. Plot size: __ m². Project type: __. Approximate built-up area: __ m². Current stage: __. Please help me define the design scope and next steps.",
    relatedSlugs: ["villa-design-saudi-arabia", "choose-architecture-firm-saudi-arabia", "house-architectural-plans-saudi-arabia", "architectural-design-process-saudi-arabia", "architectural-design-cost-saudi-arabia"],
    highlights: [{ value:"Dammam",label:"local design-service search intent"},{value:"Khobar",label:"villa and residential design context"},{value:"Clear scope",label:"remote, local and approval needs confirmed first"}],
    takeaways: [
      "This page owns local Dammam/Khobar architectural-design-service intent, not local construction-cost intent.",
      "Mawsooq can serve clients with Saudi projects digitally, but this page does not claim a physical Mawsooq branch at a Dammam address.",
      "If the project requires a locally licensed authority-facing role, site visit or physical attendance, confirm that requirement before appointment.",
      "For Eastern Province sites, discuss sun, outdoor use, material exposure and maintenance with the actual site conditions in mind rather than applying a generic coastal rule.",
      "A local design brief should include the exact city/district, plot, project type, approximate area, floors and current stage.",
      "Use the separate Dammam/Khobar construction-cost page when the main query is build budget rather than design service.",
    ],
    toc: [["quick-answer","Quick answer"],["local-intent","What local intent means"],["brief","Project brief"],["site-context","Site and climate context"],["workflow","Design workflow"],["approval","Approval and local roles"],["deliverables","Deliverables"],["compare","Compare providers"],["cost-boundary","Design vs construction cost"],["related-guides","Related guides"],["faqs","FAQs"]],
    sections: [
      { id:"quick-answer", title:"Quick answer: what should you look for in architectural design services for Dammam or Khobar?", paragraphs:["Look for a design process that begins with the actual Eastern Province plot and owner brief, then defines the architecture scope, coordination, deliverables and any local or authority-facing requirements before fees are agreed. The location matters because access, orientation, privacy, outdoor use and environmental exposure should be reviewed for the real site rather than assumed from a generic Saudi template.","This page is intentionally local but careful about claims. Mawsooq serves clients with projects in Saudi Arabia and can provide digital design and coordination support. The page should not be read as a claim that Mawsooq operates a physical branch at a specific Dammam address. If a task requires licensed local submission, a site visit or in-person attendance, confirm that requirement as part of the scope."], links:[{href:"/en/blog/architectural-design-saudi-arabia/",label:"Architectural design in Saudi Arabia",description:"National pillar for the broad design journey."},{href:"/en/blog/house-construction-cost-dammam-khobar/",label:"House construction cost Dammam & Khobar",description:"Separate local page for construction-budget intent."}] },
      { id:"local-intent", title:"Why a Dammam/Khobar design page should answer different questions from a national guide", paragraphs:["A person searching for architectural design services in Dammam or Khobar is usually closer to a real project than someone reading a broad architecture guide. They may already have a plot, district, villa type or design problem. The page therefore needs to make the next step practical: send the actual location, plot dimensions, floor count, approximate area, existing drawings and the decision you need help with.","Local intent does not justify inventing a branch, address, local award or approval capability. Trust comes from a clear process, verifiable project proof and accurate scope. If the project needs an activity that must be carried out by a particular licensed role or physically at the site, that should be identified before appointment instead of implied by local SEO wording."], callout:{title:"Useful first message",text:"Dammam / Khobar / nearby city + district, plot size, approximate built-up area, floors, project stage, required service and any existing drawings."} },
      { id:"brief", title:"Build the Eastern Province project brief around the site and household", paragraphs:["For a villa, the brief should cover family and guest zoning, parking, service access, outdoor areas, facade preferences, privacy priorities and future expansion. For a commercial or mixed project, include user flows, operating needs, frontage, servicing and any known technical constraints. The exact location helps the design team discuss orientation, neighbouring context and access rather than designing from plot dimensions alone.","If you already have a concept, explain what you want to keep and what is not working. A review brief such as ‘improve privacy and reduce wasted corridor area without changing the number of bedrooms’ is much more actionable than asking for a completely new design with no decision criteria."], checklist:["Exact city and district","Plot plan or dimensions","Project type and users","Approximate built-up area/floors","Guest-family-service zoning needs","Parking and outdoor priorities","Existing design stage","Any known authority/site information"] },
      { id:"site-context", title:"Discuss sun, outdoor use and environmental exposure using the actual site", paragraphs:["Dammam, Khobar and nearby Eastern Province locations can have strong sun and, depending on the exact location, varying levels of coastal or saline exposure. The correct design and material response is project-specific. Rather than applying a blanket specification, ask the design team how orientation, shading, glazing, external materials, waterproofing details and equipment locations will be reviewed for the site and expected maintenance strategy.","Outdoor spaces also need realistic planning. A terrace or garden that looks attractive in a rendering may be uncomfortable or poorly connected if shade, privacy and movement were not designed. Coordinate the outdoor concept with room locations, boundary conditions and the way the family expects to use the property."], note:"This section is design guidance, not a site-specific environmental specification. Confirm exposure categories, materials and engineering requirements for the actual project." },
      { id:"workflow", title:"Use a controlled local design workflow", paragraphs:["The design stages themselves do not need to be reinvented for every city: brief, concept, developed design, technical coordination, approval information and tender/construction handoff remain a useful framework. What changes is the project input and who must be involved. The local page should therefore connect the national design process to the actual site rather than duplicate the entire process article.","Remote coordination can work well for many design stages when project information is reliable and decisions are documented. Site-dependent tasks may require local measurements, inspection or attendance. Define that boundary at the start so the owner knows which activities are digital and which require another local resource."], links:[{href:"/en/blog/architectural-design-process-saudi-arabia/",label:"Architectural design process in Saudi Arabia",description:"Detailed stages and decision gates."}] },
      { id:"approval", title:"Confirm approval responsibility and any locally required professional role", paragraphs:["Do not assume that every architecture service includes submission, licensed sign-off or authority interaction. Ask which documents the design team prepares, who is responsible for the permit workflow and whether the project needs a particular local professional, engineering office or site attendance. The answer can vary with project type and scope.","Balady publishes the official building-permit service information, and the Saudi Building Code provides the national technical reference framework. Use those official sources plus the appointed professionals for current project requirements. A local SEO page should make verification easier, not replace it with an unqualified claim."], links:[{href:officialSources.baladyPermit.url,label:officialSources.baladyPermit.label,description:"Official permit service information."},{href:officialSources.sbc.url,label:officialSources.sbc.label,description:"Saudi Building Code reference."}] },
      { id:"deliverables", title:"Ask for deliverables that match the next local project decision", paragraphs:["If the immediate goal is concept approval, the package should support a concept decision. If the goal is permit preparation, the scope should state the information and professional responsibilities needed for that workflow. If the goal is contractor pricing, the issued package should be detailed enough to reduce assumptions and make local quotations comparable.","Do not pay for a large package simply because it sounds comprehensive. Match deliverables to the project stage and make later stages optional only when their boundaries are clear. The house-plans guide explains individual drawing types in more detail."], links:[{href:"/en/blog/house-architectural-plans-saudi-arabia/",label:"House architectural plans in Saudi Arabia",description:"Detailed deliverables and drawing-review guide."}] },
      { id:"compare", title:"Compare Dammam/Khobar design providers on scope and proof", paragraphs:["Local search results can include firms, platforms and individual professionals with very different service models. Compare relevant project experience, who actually leads the work, deliverables, revision policy, coordination, approval responsibility and communication. If a provider claims a physical location or local accreditation that matters to your decision, verify it independently.","Use published projects and client feedback as evidence of work and experience, but ask what role the provider had in each project. The proof section on this page uses actual Mawsooq YouTube videos already published by the brand so the trust signal is based on a real source rather than invented testimonials."], links:[{href:"/en/blog/choose-architecture-firm-saudi-arabia/",label:"How to choose an architecture firm in Saudi Arabia",description:"Full provider-comparison framework."}] },
      { id:"cost-boundary", title:"Keep local design fees separate from local construction-cost intent", paragraphs:["A local design-service page can mention that scope affects professional fees, but it should not become another cost article. Design-fee intent belongs to the architectural-design-cost page. Construction-budget intent for Dammam and Khobar belongs to the existing local construction-cost page. Keeping those questions separate helps readers and reduces keyword cannibalization.","If your project is at the design stage, first define the design scope and outputs. If your primary concern is whether the complete villa is financially feasible, move to the local construction-budget guide and then return to the design page with a realistic area and specification strategy."], links:[{href:"/en/blog/architectural-design-cost-saudi-arabia/",label:"Architectural design cost in Saudi Arabia",description:"Professional fee and scope intent."},{href:"/en/blog/house-construction-cost-dammam-khobar/",label:"House construction cost Dammam & Khobar",description:"Local build-budget intent."}] },
    ],
    faqs: [
      ["Does Mawsooq provide architectural design for projects in Dammam and Khobar?", "Mawsooq presents architectural-design and coordination services for clients with projects in Saudi Arabia, including Eastern Province projects. Send the exact location and project details so the required digital, local, approval or site-dependent scope can be clarified."],
      ["Does Mawsooq have a physical office in Dammam?", "This page should not be treated as a claim that Mawsooq has a physical branch at a specific Dammam address. If your project requires local attendance, licensed authority-facing work or a site visit, confirm how that requirement will be handled before appointment."],
      ["What should I send for a villa design in Khobar?", "Send the district/location, plot size, approximate built-up area, floors, family and guest requirements, parking, privacy priorities, style references, current project stage and any existing drawings."],
      ["Is architectural design cost different in Dammam and Khobar?", "Do not assume a fixed city percentage. Professional fees depend primarily on scope, complexity, deliverables, revisions and service model. Use the dedicated design-cost guide and obtain a project-specific proposal."],
      ["Can design be done remotely for an Eastern Province project?", "Many briefing, concept, design-development and coordination tasks can be handled digitally when reliable project information is available. Site-dependent or authority-facing tasks may require local input, inspection or attendance, which should be defined for the actual scope."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },
  {
    slug: "house-architectural-plans-saudi-arabia",
    role: "cluster",
    topicId: "architecture",
    category: "Architectural Plans",
    primaryKeyword: "house architectural plans in Saudi Arabia",
    secondaryKeywords: ["house plans Saudi Arabia", "architectural drawings Saudi Arabia", "villa plans Saudi Arabia", "house design drawings Saudi Arabia"],
    metaTitle: "House Architectural Plans Saudi Arabia: What You Need",
    title: "House Architectural Plans in Saudi Arabia: Drawings, Deliverables and How to Review Them",
    description:
      "Understand house architectural plans in Saudi Arabia: floor plans, elevations, sections, coordination, permit/tender packages and owner review checks.",
    excerpt:
      "A drawing-focused guide that explains what architectural plans are for and how owners can review a house or villa package before the next stage.",
    image: "/images/blog/architecture/house-architectural-plans-saudi-arabia.webp",
    imageAlt: "House architectural plans in Saudi Arabia beside a modern villa scale model",
    imageWidth: 1672,
    imageHeight: 941,
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    readTime: "14 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "a house architectural drawing package in Saudi Arabia",
    ctaLabel: "Send your plans for a scope discussion",
    whatsappMessage:
      "Hello Mawsooq, I need help with house / villa architectural plans in Saudi Arabia. City: __. Plot size: __ m². Current design stage: __. I already have: __. I need: concept / permit / tender / review. Please help me define the right drawing package.",
    relatedSlugs: ["architectural-design-process-saudi-arabia", "villa-design-saudi-arabia", "architectural-design-cost-saudi-arabia", "choose-architecture-firm-saudi-arabia", "architectural-design-services-dammam-khobar"],
    highlights: [{value:"Plans",label:"show spaces, dimensions and relationships"},{value:"Elevations + sections",label:"explain height, openings and vertical form"},{value:"Controlled issue",label:"keeps revisions consistent across the team"}],
    takeaways: [
      "Architectural plans are deliverables, while the architectural design process is the sequence used to create and approve them.",
      "A floor plan alone is not a complete architecture package for permit, tender or construction purposes.",
      "Owners should review drawings with furniture, dimensions, circulation, levels, openings and room functions in mind.",
      "The drawing set should identify its issue, stage and revision so contractors and consultants do not work from mixed versions.",
      "Structural and MEP coordination should be visible in the process before architecture is issued for downstream use.",
      "Detailed fee questions belong to the architecture-cost page, not this drawings page.",
    ],
    toc: [["quick-answer","Quick answer"],["plan-types","Main drawing types"],["stages","Concept vs permit vs tender"],["floor-plans","Review floor plans"],["elevations","Elevations and sections"],["coordination","Coordination"],["revision-control","Revision control"],["owner-review","Owner review checklist"],["handoff","Permit and tender handoff"],["related-guides","Related guides"],["faqs","FAQs"]],
    sections: [
      { id:"quick-answer", title:"Quick answer: what house architectural plans should you expect?", paragraphs:["The architectural drawing package should match the project stage. A concept set may contain plans and selected elevations sufficient to approve the design direction. A later package can add dimensions, sections, schedules, details, coordination information and documents needed for approvals or contractor pricing. The important point is not the number of sheets; it is whether the package is complete enough for the decision it is supposed to support.","This page owns drawings-and-deliverables intent. It does not duplicate the design-process article, which explains stages and decision gates, or the architectural-design-cost page, which explains fee logic. If you are reviewing a villa layout rather than a drawing package, the villa-design page is the more focused guide."], links:[{href:"/en/blog/architectural-design-saudi-arabia/",label:"Architectural design in Saudi Arabia",description:"Broad pillar for the complete architecture journey."},{href:"/en/blog/architectural-design-process-saudi-arabia/",label:"Architectural design process",description:"Use this when the question is sequence and stage gates."}] },
      { id:"plan-types", title:"The main architectural drawing types and what each one helps you understand", paragraphs:["Floor plans show horizontal relationships: room locations, walls, doors, windows, stairs, circulation and dimensions. Elevations show the external faces of the building and help coordinate openings, material zones and overall composition. Sections cut through the building vertically so the team can understand heights, floor relationships, stairs, double-height spaces, roofs and levels that may be difficult to read from plans alone.","Other deliverables may include roof plans, reflected ceiling information, door/window schedules, room schedules, finish references, enlarged plans, details, area statements and 3D views. Not every project needs every drawing at every stage. The proposal should state what is included and the sheet set should clearly identify the issue purpose."], table:{caption:"Common architecture deliverables",headers:["Deliverable","Main purpose","Owner review focus"],rows:[["Floor plans","Spaces, circulation, dimensions","Room use, furniture, privacy and flow"],["Elevations","External form and openings","Facade consistency, window positions, materials"],["Sections","Vertical relationships and levels","Heights, stairs, voids, roofs"],["Schedules","Repeatable components/room information","Consistency and completeness"],["3D views","Spatial and visual communication","Check they match current drawings"],["Details","Specific interfaces and construction intent","Confirm critical areas are not left vague"]] } },
      { id:"stages", title:"Concept, approval and tender drawings are not interchangeable", paragraphs:["A concept set is created to make design decisions. It may intentionally omit technical detail that would be premature before the owner approves the layout and form. An approval package is prepared for the requirements of the relevant workflow. A tender or construction-oriented package needs enough definition to reduce contractor assumptions and support coordination. Calling all three ‘plans’ without the stage creates confusion.","Before using drawings for pricing or construction, check the title block or issue status and confirm with the design team what the package is approved for. A contractor should not price a final fixed scope from a sketch set while the owner believes the numbers are based on completed design information."], links:[{href:"/en/blog/building-permit-saudi-arabia/",label:"Building permit in Saudi Arabia",description:"Dedicated permit-workflow intent."}] },
      { id:"floor-plans", title:"How an owner should review floor plans", paragraphs:["Review the plan as a user, not only as a drawing. Trace arrival from the street and parking. Walk a guest to reception and a family member to daily living. Check kitchen deliveries, laundry, storage and staff routes where relevant. Add furniture to test whether the room dimensions actually support the intended use. Look at door swings, corridor widths and the way stairs connect floors.","Then review privacy and views. What can be seen from the entrance? Which windows face neighbours or public areas? Do bedrooms open directly onto noisy circulation? Is the outdoor space connected to the rooms that will use it? These questions often reveal design issues earlier than aesthetic comments."], checklist:["Furniture fits the room purpose","Doors open without conflicts","Circulation is direct","Guest/family/service routes are intentional","Stairs align across floors","Wet areas and shafts are coordinated","Windows support privacy and furniture","Built-up area matches the approved target"] },
      { id:"elevations", title:"Use elevations and sections to catch what plans hide", paragraphs:["Elevations should correspond exactly to the current plan openings. If a rendering shows a window or balcony that is absent from the plan, ask which document controls. Sections are especially important for double-height areas, stairs, roof levels, terraces, sunken spaces and any location where vertical dimensions matter. They also help the owner understand how a facade feature changes internal ceiling heights or upper-floor area.","For a villa, review external screens, shading, parapets, plant/equipment zones and the relationship between the ground level and exterior spaces. A visually clean facade can hide unresolved technical areas if the design has not yet coordinated services, drainage or access."], },
      { id:"coordination", title:"Architectural drawings should be coordinated with structure and building services", paragraphs:["Architecture establishes the spaces and interfaces other disciplines work around. Structural columns, beams and slabs must support the design without unexpectedly blocking rooms or openings. MEP systems need shafts, ceiling zones, equipment spaces and routes. Coordination is not achieved by simply overlaying drawings at the end; major interfaces should be reviewed while the design is still adjustable.","Ask how clashes and revisions are tracked. If architecture changes a stair, shaft or wet area, the affected disciplines should receive the same controlled update. The owner should not have to manually distribute screenshots and hope every consultant is working from the latest information."], links:[{href:"/en/blog/architectural-design-process-saudi-arabia/",label:"Architectural design process",description:"See where multidisciplinary coordination belongs in the workflow."}] },
      { id:"revision-control", title:"Use revision control so everyone works from the same drawing issue", paragraphs:["Every issued package should make it possible to identify the project, drawing, revision and issue date. When a major change is approved, superseded information should not remain in active circulation without clear status. This becomes especially important once drawings are shared with permit teams, cost planners, contractors or suppliers.","Owners can help by approving design decisions through one documented channel and avoiding parallel changes in separate message threads. A simple decision log stating what was approved, when and what drawings it affects can prevent the team from re-opening settled issues or missing a late instruction."], checklist:["Drawing number and title are clear","Revision and issue date are visible","Issue purpose is stated","Superseded drawings are controlled","Major owner decisions are recorded","Consultants receive coordinated revisions"] },
      { id:"owner-review", title:"Owner review checklist before accepting an architectural package", checklist:["Room schedule matches the brief","Dimensions and furniture are realistic","Plans, elevations and 3D views agree","Stairs, levels and sections are understandable","Openings support privacy and facade intent","Structural/MEP interfaces have been reviewed at the appropriate stage","The current built-up area is documented","Deliverables match the appointment","Revision number and issue purpose are clear","Outstanding decisions are listed rather than hidden"] },
      { id:"handoff", title:"Make the handoff useful for permits, pricing and construction", paragraphs:["The next recipient should know what the drawing set is for. Permit teams need the information required by the approval workflow. Cost planners and contractors need a defined issue so their numbers can be compared. Construction teams need controlled information and a method for resolving questions. If the package still contains major unresolved options, it may not be ready for the next stage even if the drawings look polished.","When in doubt, ask the designer to list the outstanding decisions and identify which later deliverables are still required. That is more transparent than calling an incomplete package ‘final’ and discovering missing information after pricing or site work begins."], links:[{href:"/en/blog/architectural-design-cost-saudi-arabia/",label:"Architectural design cost",description:"Compare fees by the drawing and coordination scope actually included."},{href:"/en/blog/build-a-house-saudi-arabia/",label:"How to build a house in Saudi Arabia",description:"Continue into the broader permit, tender and construction journey."}] },
    ],
    faqs: [
      ["What drawings are included in house architectural plans in Saudi Arabia?", "The package can include floor plans, elevations, sections, roof plans, schedules, details, area statements and 3D views, but the exact deliverables depend on the project stage and appointment. Ask for a written deliverable list."],
      ["Is a floor plan enough to get a contractor price?", "A simple floor plan can support a very rough conversation, but comparable contractor pricing normally needs a more defined scope, coordinated drawings and specifications. Otherwise each contractor may make different assumptions."],
      ["What is the difference between concept drawings and permit drawings?", "Concept drawings support owner design decisions. Permit drawings are prepared for the requirements of the applicable approval workflow. The exact content and professional responsibility should be verified for the actual project."],
      ["How do I know if my architectural plans are coordinated?", "Check whether plan/elevation openings agree, stairs and levels are resolved, structural and MEP interfaces have been reviewed, and revisions are issued consistently. Ask the team to explain its coordination process rather than relying on visual appearance."],
      ["Can Mawsooq review existing house plans?", "Send the drawings you have, city, plot information, current stage and the specific decisions or problems you want reviewed. Mawsooq can then clarify an appropriate review or redesign scope."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },
  {
    slug: "architectural-design-process-saudi-arabia",
    role: "cluster",
    topicId: "architecture",
    category: "Design Process",
    primaryKeyword: "architectural design process in Saudi Arabia",
    secondaryKeywords: ["architecture design stages Saudi Arabia", "house design process Saudi Arabia", "villa design process Saudi Arabia", "architectural design steps Saudi Arabia"],
    metaTitle: "Architectural Design Process Saudi Arabia: 6 Stages",
    title: "Architectural Design Process in Saudi Arabia: 6 Stages from Brief to Construction Handoff",
    description:
      "Follow a practical architectural design process in Saudi Arabia from owner brief and concept through coordination, approvals, tender information and handoff.",
    excerpt:
      "A process-focused guide to stage gates, owner decisions, coordination and change control for Saudi house and villa projects.",
    image: "/images/blog/architecture/architectural-design-process-saudi-arabia.webp",
    imageAlt: "Architectural design process in a Saudi villa design studio with drawings and scale model",
    imageWidth: 1672,
    imageHeight: 941,
    datePublished: "2026-09-04",
    dateModified: "2026-09-04",
    readTime: "15 min read",
    author: "Mawsooq Editorial Team",
    showProof: true,
    proofContext: "an architectural design process in Saudi Arabia",
    ctaLabel: "Start your design process on WhatsApp",
    whatsappMessage:
      "Hello Mawsooq, I want to start / restart an architectural design process in Saudi Arabia. City: __. Project type: __. Plot size: __ m². Current stage: __. Existing drawings: __. Please help me define the next design stage and required information.",
    relatedSlugs: ["architectural-design-saudi-arabia", "house-architectural-plans-saudi-arabia", "villa-design-saudi-arabia", "choose-architecture-firm-saudi-arabia", "architectural-design-cost-saudi-arabia"],
    highlights: [{value:"6 stages",label:"a practical decision-gate framework"},{value:"1 source",label:"controlled design issue at each stage"},{value:"Fewer late changes",label:"when decisions are approved before coordination"}],
    takeaways: [
      "The design process is a sequence of decisions; drawings are outputs produced during that sequence.",
      "Do not start detailed coordination while the owner is still changing the fundamental room programme.",
      "Each stage should have a clear deliverable, owner decision and list of open items.",
      "Architecture, structure and MEP should be coordinated before downstream permit, tender or construction use.",
      "Late major changes should be assessed for programme and coordination impact rather than treated as invisible edits.",
      "Fees belong to the architectural-design-cost page; this page owns process and stage intent.",
    ],
    toc: [["quick-answer","Quick answer"],["stage-1","1. Brief and site"],["stage-2","2. Concept design"],["stage-3","3. Developed design"],["stage-4","4. Coordination"],["stage-5","5. Approval package"],["stage-6","6. Tender and handoff"],["decision-gates","Decision gates"],["change-control","Change control"],["who-involved","Who is involved"],["related-guides","Related guides"],["faqs","FAQs"]],
    sections: [
      { id:"quick-answer", title:"Quick answer: what is a practical architectural design process in Saudi Arabia?", paragraphs:["A practical process moves through six decision stages: define the brief and site information, test concept options, develop the approved design, coordinate architecture with structure and MEP, prepare the information required for the applicable approval workflow, then issue the appropriate tender/construction package and manage clarifications. The names can vary between firms; the important point is that each stage has a purpose and approval gate.","This page owns process intent, not drawings or pricing. The house-plans page explains the deliverables in detail, while the architectural-design-cost page explains fee models. Keeping those queries separate means this guide can focus on sequence, ownership of decisions and how to reduce late rework."], links:[{href:"/en/blog/architectural-design-saudi-arabia/",label:"Architectural design in Saudi Arabia",description:"Broad pillar and topic map."},{href:"/en/blog/house-architectural-plans-saudi-arabia/",label:"House architectural plans",description:"Detailed outputs created during the process."}] },
      { id:"stage-1", title:"Stage 1 — Owner brief and site understanding", paragraphs:["Before drawing options, collect the project facts: plot location and dimensions, current survey information, household or user needs, room schedule, approximate area, parking, privacy, outdoor use, accessibility, references and budget boundary. Record which information is confirmed and which is still assumed. A concept built on the wrong plot data or an incomplete room programme creates false progress.","The owner should also define who approves decisions. For family projects, several stakeholders may comment, but one agreed approval route prevents the design team from receiving contradictory instructions. If a key family requirement changes, update the brief formally rather than treating it as an isolated drawing note."], checklist:["Plot/site information collected","Owner/user brief written","Required vs optional spaces separated","Target area recorded","Budget boundary discussed","Decision-maker identified","Reference images annotated","Known technical/authority inputs listed"] },
      { id:"stage-2", title:"Stage 2 — Concept design: test the big decisions while change is still cheap", paragraphs:["Concept design tests zoning, massing, main circulation, floor count, entrances, orientation, privacy and the relationship between indoor and outdoor spaces. The objective is not to decorate the building; it is to find a spatial strategy that satisfies the brief with a realistic area and clear logic. Multiple options are useful when they test genuinely different approaches rather than small cosmetic variations.","At the end of concept design, document what is approved: room programme, approximate areas, key plans, main massing/facade direction and any decisions deliberately postponed. If the owner is still uncertain about a major requirement, keep it open rather than pretending the stage is complete."], links:[{href:"/en/blog/villa-design-saudi-arabia/",label:"Villa design in Saudi Arabia",description:"Villa-specific concept decisions: zoning, privacy, facade and outdoor use."}] },
      { id:"stage-3", title:"Stage 3 — Developed design: make the approved idea measurable and coordinated", paragraphs:["Developed design refines room dimensions, openings, stairs, levels, facade composition, material intent and the architectural information needed for deeper engineering coordination. This is where the project should stop behaving like a sketch. Major dimensions and interfaces need enough definition for structural and MEP teams to respond accurately.","The owner should review developed design with furniture, circulation and real use in mind. A visually pleasing concept can still hide a poor storage strategy, tight bathroom, awkward stair landing or impractical service route. Resolve those issues before technical documentation makes the cost of change higher."], },
      { id:"stage-4", title:"Stage 4 — Coordinate architecture, structure and MEP", paragraphs:["Coordination checks whether the architectural intent can coexist with the structural system and building services. Typical interfaces include columns, beams, slab openings, shafts, ceiling zones, equipment locations, drainage routes, electrical/service rooms and facade penetrations. The goal is not to eliminate every site question, but to resolve predictable conflicts before they become rework.","Use one controlled architectural issue as the coordination base. When architecture changes, identify which other disciplines are affected. A coordinated team should be able to explain the current model/drawing status and outstanding clashes instead of allowing each consultant to continue from a different revision."], callout:{title:"Owner question to ask",text:"Which architectural revision are the structural and MEP teams currently coordinating against, and what major interfaces are still open?"} },
      { id:"stage-5", title:"Stage 5 — Prepare the approval / permit information for the actual workflow", paragraphs:["The project should then be prepared for the applicable Saudi approval process using the appropriate professional roles and required information. The exact submission content and responsibilities depend on the project and authority workflow, so do not treat an online checklist as a substitute for project-specific verification.","Balady publishes building-permit service information and the Saudi Building Code provides the technical code framework. Your design team should identify which parts of the architectural package must be adapted or supplemented for the submission and who is responsible for the authority-facing process."], links:[{href:"/en/blog/building-permit-saudi-arabia/",label:"Building permit in Saudi Arabia",description:"Dedicated permit-process guide."},{href:officialSources.baladyPermit.url,label:officialSources.baladyPermit.label,description:"Official Balady service page."}] },
      { id:"stage-6", title:"Stage 6 — Tender and construction handoff", paragraphs:["A contractor should receive a controlled package with a clear issue purpose. If bidders price different drawings or unresolved alternatives, the owner cannot compare offers fairly. The tender package should make scope assumptions visible and identify items that remain allowances or separate appointments.","Once construction begins, define how design questions and revisions will be issued. Site teams should not build from informal screenshots or verbal changes. Even on a small villa, a simple RFI/clarification and revision process reduces the chance that one trade acts on a change while another continues with superseded information."], links:[{href:"/en/blog/choose-construction-contractor-saudi-arabia/",label:"How to choose a construction contractor",description:"Move from design into contractor evaluation without mixing the two search intents."},{href:"/en/blog/build-a-house-saudi-arabia/",label:"How to build a house in Saudi Arabia",description:"Continue into the full construction journey."}] },
      { id:"decision-gates", title:"Use decision gates so a stage is actually complete", paragraphs:["A stage gate is a short list of decisions that must be approved before downstream work relies on them. For concept design, that may include room schedule, floor count, layout direction and massing. For developed design, it may include openings, levels and key material direction. For coordination, it may include agreed structural/service interfaces and a controlled drawing issue.","The gate does not need bureaucracy. A one-page approval summary can be enough. The value is that later changes become visible decisions with known impact rather than silent drift. This is especially important when several family members or consultants are contributing comments."], table:{caption:"Example design decision gates",headers:["Gate","Owner approves","Team confirms"],rows:[["Brief","Needs, priorities, area/budget boundary","Site inputs and assumptions recorded"],["Concept","Preferred layout/massing direction","Major open items listed"],["Developed design","Key dimensions, openings, facade direction","Information ready for coordination"],["Coordination","Resolved architectural interfaces","Structure/MEP aligned to current issue"],["Approval package","Submission-ready design intent","Roles and required documents confirmed"],["Tender/handoff","Issued design and scope assumptions","Revision/clarification process established"]] } },
      { id:"change-control", title:"Control late changes instead of pretending they are free", paragraphs:["Changes are normal during design. The problem is not change; it is unrecorded change after other work depends on an earlier decision. Moving a stair, adding a bathroom or enlarging a window can affect structure, services, elevations, area and cost. When a major change is requested, identify the affected disciplines, drawings and programme before accepting it.","A simple change log should record the request, reason, decision, approval date and affected deliverables. If the change is outside the agreed revision scope, the designer should explain the fee/programme impact before proceeding. This makes the commercial relationship clearer and protects the owner from hidden downstream rework."], links:[{href:"/en/blog/architectural-design-cost-saudi-arabia/",label:"Architectural design cost and scope",description:"See how revisions and deliverables affect professional fees."}] },
      { id:"who-involved", title:"Who is involved at each stage?", paragraphs:["The owner remains central throughout because only the owner can confirm needs, priorities and budget. The architect leads the spatial and architectural decisions. Structural and MEP disciplines become increasingly important as design develops. Other specialists may be needed depending on the project: interior design, landscape, quantity surveying, geotechnical, facade, fire/life safety or other technical roles.","The project does not need every specialist in every meeting, but responsibilities should be visible. Ask who owns coordination, who issues the controlled design package and who communicates approval or site questions. Undefined responsibility is one of the easiest ways for a technically solvable issue to become a delay."], },
    ],
    faqs: [
      ["What are the stages of architectural design in Saudi Arabia?", "A useful practical framework is brief/site understanding, concept design, developed design, multidisciplinary coordination, approval/permit information, and tender/construction handoff. Firms may use different stage names, so compare the actual deliverables and decisions at each stage."],
      ["When should structural and MEP engineers become involved?", "They should become involved early enough to influence major interfaces before architecture is fixed for downstream use. The exact timing depends on project complexity, but coordination should not be postponed until construction drawings are already complete."],
      ["How many design revisions should be included?", "There is no universal number. The appointment should state the revision approach for each stage and distinguish normal development from major owner changes after approval. Compare proposals on this basis rather than assuming unlimited revisions."],
      ["How long does the architectural design process take?", "Duration depends on project size, owner decision speed, number of options, coordination depth, consultant inputs and approval requirements. Ask for a project-specific stage programme with owner decision dates rather than relying on a generic number."],
      ["Can Mawsooq help if my design process is already stuck?", "Send the current drawings, city, project stage and the decisions or coordination issues blocking progress. A review can then focus on the next useful step instead of restarting the whole project automatically."],
    ],
    sources: [officialSources.baladyPermit, officialSources.sbc, officialSources.residentialCode],
  },
];


const allClusters = [...clusters, ...architectureClusters];

export const allArticles = [pillar, architecturePillar, ...allClusters];
export const pillarUrl = `${SITE_URL}${BLOG_BASE}/${pillar.slug}/`;
export const architecturePillarUrl = `${SITE_URL}${BLOG_BASE}/${architecturePillar.slug}/`;

export function getArticleBySlug(slug) {
  return allArticles.find((article) => article.slug === slug) || null;
}

export function getClusterBySlug(slug) {
  return allClusters.find((article) => article.slug === slug) || null;
}

export function getPillarForArticle(articleOrSlug) {
  const article = typeof articleOrSlug === "string"
    ? getArticleBySlug(articleOrSlug)
    : articleOrSlug;

  if (!article) return pillar;
  return article.topicId === "architecture" ? architecturePillar : pillar;
}

export function getTopicClusters(articleOrSlug) {
  const article = typeof articleOrSlug === "string"
    ? getArticleBySlug(articleOrSlug)
    : articleOrSlug;
  const topicId = article?.topicId || "construction";

  return allClusters.filter((item) => (item.topicId || "construction") === topicId);
}

export function getSiblings(currentSlug, limit = 3) {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  const published = getTopicClusters(current).filter((article) => article.slug !== currentSlug);
  const curated = (current.relatedSlugs || [])
    .map((slug) => published.find((article) => article.slug === slug))
    .filter(Boolean);
  const fallback = published.filter(
    (article) => !curated.some((item) => item.slug === article.slug),
  );
  return [...curated, ...fallback].slice(0, limit);
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
      lastModified: "2026-09-04",
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
