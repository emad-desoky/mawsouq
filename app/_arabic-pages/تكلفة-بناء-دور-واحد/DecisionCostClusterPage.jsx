import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  HardHat,
  Landmark,
  ListChecks,
  ReceiptText,
  Ruler,
  ShieldCheck,
  WalletCards,
  Wrench,
} from "lucide-react";

const officialSources = [
  {
    label: "مؤشر تكلفة التشييد — الهيئة العامة للإحصاء",
    href: "https://www.stats.gov.sa/en/w/construction-cost-index-for-may-2026",
  },
  {
    label: "إصدار رخصة بناء — منصة بلدي",
    href: "https://balady.gov.sa/ar/services/%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-%D8%B1%D8%AE%D8%B5%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1",
  },
  {
    label: "الكود السعودي للمباني السكنية SBC 1101-1102",
    href: "https://sbc.gov.sa/En/BC/Pages/BuildingCode/BCDetails.aspx?codeId=1101&year=2024",
  },
  {
    label: "دليل قطاع المقاولات وضريبة القيمة المضافة — هيئة الزكاة والضريبة والجمارك",
    href: "https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-For-the-Contracting-Sector-under-VAT-Provision.pdf",
  },
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-7">
      <span className="mb-3 inline-flex rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-3)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
        {eyebrow}
      </span>
      <h2 className="m-0 text-3xl font-black leading-tight tracking-[-0.035em] text-[color:var(--ink)] md:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg font-semibold leading-9 text-[color:var(--ink-muted)]">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function WhatsAppButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(37,211,102,0.25)] transition duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
      <ArrowLeft size={17} />
    </a>
  );
}

function StatCard({ icon: Icon, label, value, note }) {
  return (
    <div className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
      <div className="grid size-11 place-items-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--brand)] shadow-sm">
        <Icon size={21} />
      </div>
      <strong className="mt-4 block text-2xl font-black text-[color:var(--ink)]">
        {value}
      </strong>
      <span className="mt-1 block text-sm font-black text-[color:var(--brand)]">
        {label}
      </span>
      <p className="mt-2 text-xs font-bold leading-6 text-[color:var(--ink-muted)]">
        {note}
      </p>
    </div>
  );
}

function SiblingCard({ sibling }) {
  return (
    <Link
      href={sibling.href}
      className="group overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[var(--card-shadow)]"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={sibling.image}
          alt={sibling.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[color:var(--brand)]">
          {sibling.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black leading-tight text-[color:var(--ink)]">
          {sibling.title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
          {sibling.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
          افتح الدليل <ArrowLeft size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function DecisionCostClusterPage({
  data,
  cluster,
  siblings,
  pillar,
  pillarUrl,
  whatsappUrl,
  pageUrl,
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        headline: cluster.title,
        description: cluster.description,
        image: {
          "@type": "ImageObject",
          url: `https://mawsouq.com${cluster.image}`,
          width: 1600,
          height: 840,
        },
        author: { "@type": "Organization", name: "فريق موسوق" },
        publisher: {
          "@type": "Organization",
          name: "موسوق",
          logo: {
            "@type": "ImageObject",
            url: "https://mawsouq.com/mawsouq-logo.png",
          },
        },
        datePublished: cluster.datePublished,
        dateModified: cluster.dateModified,
        inLanguage: "ar-SA",
        articleSection: cluster.category,
        keywords: cluster.keywords.join(", "),
        isPartOf: {
          "@type": "CreativeWorkSeries",
          name: pillar.title,
          url: pillarUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://mawsouq.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونات",
            item: "https://mawsouq.com/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A7%D8%AA/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "تكلفة بناء دور واحد",
            item: pillarUrl,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: cluster.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  const statIcons = [HardHat, Building2, WalletCards];

  return (
    <main
      dir="rtl"
      className="relative isolate min-h-screen overflow-hidden bg-[color:var(--page)] pt-[calc(var(--nav-height)+32px)] pb-24 text-[color:var(--ink)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_7%,rgba(47,134,246,0.16),transparent_32%),radial-gradient(circle_at_8%_38%,rgba(6,199,242,0.08),transparent_30%),linear-gradient(180deg,var(--surface-2),var(--page))]" />

      <article className="mx-auto w-[min(100%-28px,1400px)]">
        <header className="overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
          <div className="grid items-stretch lg:grid-cols-[1.08fr_0.92fr]">
            <div className="order-2 p-7 sm:p-10 lg:order-1 lg:p-14">
              <nav
                aria-label="مسار التنقل"
                className="flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]"
              >
                <Link href="/" className="hover:text-[color:var(--brand)]">
                  الرئيسية
                </Link>
                <span>←</span>
                <Link
                  href="/المدونات/"
                  className="hover:text-[color:var(--brand)]"
                >
                  المدونات
                </Link>
                <span>←</span>
                <Link
                  href="/تكلفة-بناء-دور-واحد/"
                  className="hover:text-[color:var(--brand)]"
                >
                  تكلفة بناء دور واحد
                </Link>
              </nav>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                  {cluster.category}
                </span>
                <span className="text-xs font-bold text-[color:var(--ink-faint)]">
                  آخر تحديث: 21 يوليو 2026
                </span>
                <span className="text-xs font-bold text-[color:var(--ink-faint)]">
                  {cluster.readTime}
                </span>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-black leading-[1.13] tracking-[-0.05em] text-[color:var(--ink)] sm:text-5xl xl:text-6xl">
                {cluster.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-[color:var(--ink-muted)]">
                {data.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#comparison"
                  className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black text-white shadow-[0_18px_42px_rgba(47,134,246,0.28)] transition hover:-translate-y-1"
                >
                  <ReceiptText size={18} /> افتح جدول المقارنة
                </a>
                <WhatsAppButton href={whatsappUrl}>
                  اطلب مراجعة مشروعك
                </WhatsAppButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {data.heroStats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    icon={statIcons[index]}
                    label={stat.label}
                    value={stat.value}
                    note={stat.note}
                  />
                ))}
              </div>
            </div>

            <div className="relative order-1 min-h-[360px] overflow-hidden bg-[#071321] lg:order-2 lg:min-h-full">
              <Image
                src={cluster.image}
                alt={cluster.imageAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,33,0.08),rgba(7,19,33,0.72))]" />
              <div className="absolute bottom-6 right-6 left-6 rounded-[24px] border border-white/15 bg-[#071321]/75 p-5 text-white backdrop-blur-xl">
                <span className="text-xs font-black text-cyan-300">
                  قرار مالي قبل التوقيع
                </span>
                <p className="mt-2 text-sm font-bold leading-7 text-white/85">
                  {data.heroImageNote}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] sm:p-8 lg:p-10">
            <section id="quick-answer" className="scroll-mt-32">
              <SectionTitle eyebrow="Quick Answer" title={data.quickTitle}>
                {data.quickIntro}
              </SectionTitle>

              <div className="grid gap-4 md:grid-cols-2">
                {data.quickPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-amber-500/25 bg-amber-500/10 p-5">
                <div className="flex gap-3">
                  <AlertTriangle
                    className="mt-1 shrink-0 text-amber-600"
                    size={22}
                  />
                  <p className="text-sm font-bold leading-8 text-[color:var(--ink)]">
                    الأسعار والنطاقات الواردة للتخطيط والمقارنة فقط. عرض السعر
                    النهائي يجب أن يعتمد على مخططات معتمدة، مواصفات مكتوبة، موقع
                    المشروع، وجدول كميات أو نطاق أعمال واضح.
                  </p>
                </div>
              </div>
            </section>

            <section id="definition" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Scope" title={data.definitionTitle}>
                {data.definitionIntro}
              </SectionTitle>
              <div className="space-y-5 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                {data.definitionParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section id="comparison" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Comparison" title={data.comparisonTitle}>
                {data.comparisonIntro}
              </SectionTitle>
              <div className="overflow-x-auto rounded-[28px] border border-[color:var(--hairline)]">
                <table className="w-full min-w-[920px] border-collapse text-right">
                  <thead className="bg-[color:var(--surface-2)]">
                    <tr>
                      {data.comparisonHeaders.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-5 py-4 text-sm font-black text-[color:var(--ink)]"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`border-t border-[color:var(--hairline)] px-5 py-4 text-sm leading-7 ${
                              index === 0
                                ? "font-black text-[color:var(--ink)]"
                                : "font-bold text-[color:var(--ink-muted)]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="included" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Contract Scope" title={data.includedTitle}>
                {data.includedIntro}
              </SectionTitle>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/8 p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={25} />
                    <h3 className="text-xl font-black text-[color:var(--ink)]">
                      بنود يجب تحديدها بوضوح
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {data.includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"
                      >
                        <BadgeCheck
                          className="mt-1 shrink-0 text-emerald-600"
                          size={18}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[28px] border border-rose-500/20 bg-rose-500/8 p-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="text-rose-600" size={25} />
                    <h3 className="text-xl font-black text-[color:var(--ink)]">
                      بنود تُستبعد كثيرًا
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {data.excludedItems.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"
                      >
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-rose-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="drivers" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Cost Drivers" title={data.driversTitle}>
                {data.driversIntro}
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-2">
                {data.drivers.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                  >
                    <span className="text-3xl font-black text-[color:var(--brand)]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-xl font-black text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="example" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Realistic Scenario" title={data.exampleTitle}>
                {data.exampleIntro}
              </SectionTitle>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.exampleItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                  >
                    <span className="text-xs font-black text-[color:var(--brand)]">
                      {item.label}
                    </span>
                    <strong className="mt-2 block text-2xl font-black text-[color:var(--ink)]">
                      {item.value}
                    </strong>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-[28px] border border-[color:var(--hairline-strong)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
                <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
                  <div>
                    <span className="text-xs font-black text-cyan-300">
                      ميزانية قابلة للمراجعة
                    </span>
                    <h3 className="mt-2 text-3xl font-black leading-tight">
                      {data.exampleCtaTitle}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm font-bold leading-8 text-white/75">
                      {data.exampleCtaText}
                    </p>
                  </div>
                  <WhatsAppButton href={whatsappUrl} className="shrink-0">
                    أرسل تفاصيل المشروع
                  </WhatsAppButton>
                </div>
              </div>
            </section>

            <section id="steps" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Action Plan" title={data.stepsTitle}>
                {data.stepsIntro}
              </SectionTitle>
              <div className="space-y-4">
                {data.steps.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 sm:grid-cols-[54px_1fr]"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-[color:var(--brand)] text-lg font-black text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-[color:var(--ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="mistakes" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Risk Control" title={data.mistakesTitle}>
                {data.mistakesIntro}
              </SectionTitle>
              <div className="grid gap-4 md:grid-cols-2">
                {data.mistakes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-rose-500/20 bg-rose-500/8 p-5"
                  >
                    <AlertTriangle className="text-rose-600" size={22} />
                    <h3 className="mt-4 text-xl font-black text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="quote" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="Lead Checklist" title={data.quoteTitle}>
                {data.quoteIntro}
              </SectionTitle>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.quoteChecklist.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <SectionTitle eyebrow="Official References" title="مصادر رسمية يجب الرجوع إليها">
                مؤشرات السوق لا تعطي سعر مقاول موحدًا، لكنها تساعد على فهم اتجاه
                التكلفة والمتطلبات النظامية والضريبية قبل التنفيذ.
              </SectionTitle>
              <div className="grid gap-3">
                {officialSources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 text-sm font-black text-[color:var(--ink)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                  >
                    {source.label}
                    <ArrowLeft className="shrink-0" size={18} />
                  </a>
                ))}
              </div>
            </section>

            <section id="faq" className="mt-16 scroll-mt-32">
              <SectionTitle eyebrow="FAQ" title={data.faqTitle}>
                إجابات مباشرة على الأسئلة الأقرب إلى قرار التسعير والتعاقد.
              </SectionTitle>
              <div className="space-y-3">
                {data.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 open:border-[color:var(--brand)]"
                  >
                    <summary className="cursor-pointer list-none text-base font-black text-[color:var(--ink)]">
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-sm font-semibold leading-8 text-[color:var(--ink-muted)]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <SectionTitle eyebrow="أدلة مرتبطة" title="أدلة مرتبطة تساعدك على اتخاذ القرار">
                هذه الصفحة تركز على قرار محدد، بينما الدليل الرئيسي يجمع الصورة
                الكاملة لتكلفة بناء دور واحد في السعودية.
              </SectionTitle>
              <p className="mb-6 rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                ارجع إلى{" "}
                <Link
                  href="/تكلفة-بناء-دور-واحد/"
                  className="font-black text-[color:var(--brand)] underline underline-offset-4"
                >
                  دليل تكلفة بناء دور واحد في السعودية
                </Link>{" "}
                للمقارنة بين العظم والتشطيب والمساحات المختلفة.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                {siblings.map((sibling) => (
                  <SiblingCard key={sibling.slug} sibling={sibling} />
                ))}
              </div>
            </section>

            <section className="mt-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-10">
              <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
                <div>
                  <span className="text-xs font-black text-cyan-300">
                    خطوة عملية قبل التعاقد
                  </span>
                  <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                    {data.finalCtaTitle}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base font-bold leading-8 text-white/75">
                    {data.finalCtaText}
                  </p>
                </div>
                <WhatsAppButton href={whatsappUrl} className="shrink-0">
                  تحدث مع فريق موسوق
                </WhatsAppButton>
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-[calc(var(--nav-height)+24px)]">
            <nav
              className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]"
              aria-label="فهرس المقال"
            >
              <h2 className="text-lg font-black text-[color:var(--ink)]">
                محتويات الدليل
              </h2>
              <div className="mt-4 grid gap-1">
                {data.toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-xl px-3 py-2 text-sm font-bold text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white shadow-[var(--card-shadow)]">
              <ClipboardCheck className="text-cyan-300" size={27} />
              <h2 className="mt-4 text-2xl font-black leading-tight">
                هل عرض السعر واضح فعلًا؟
              </h2>
              <p className="mt-3 text-sm font-bold leading-7 text-white/75">
                أرسل المساحة والمدينة ونوع التنفيذ وصورة العرض. نراجع معك البنود
                التي قد تسبب زيادة بعد التوقيع.
              </p>
              <WhatsAppButton href={whatsappUrl} className="mt-5 w-full">
                ابدأ على واتساب
              </WhatsAppButton>
            </div>

            <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)]">
              <FileCheck2 className="text-[color:var(--brand)]" size={25} />
              <h2 className="mt-4 text-xl font-black text-[color:var(--ink)]">
                روابط مهمة قبل البناء
              </h2>
              <div className="mt-4 grid gap-2 text-sm font-black">
                <Link
                  href="/التصميم-المعماري/"
                  className="rounded-xl bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--ink-muted)] hover:text-[color:var(--brand)]"
                >
                  التصميم المعماري قبل التسعير
                </Link>
                <Link
                  href="/تصميم-انشائي/"
                  className="rounded-xl bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--ink-muted)] hover:text-[color:var(--brand)]"
                >
                  التصميم الإنشائي والأساسات
                </Link>
                <Link
                  href="/مقاول-بناء/"
                  className="rounded-xl bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--ink-muted)] hover:text-[color:var(--brand)]"
                >
                  اختيار مقاول بناء
                </Link>
                <Link
                  href="/بناء-فلة/"
                  className="rounded-xl bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--ink-muted)] hover:text-[color:var(--brand)]"
                >
                  مراحل بناء فلة في السعودية
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)]">
              <ShieldCheck className="text-[color:var(--brand)]" size={25} />
              <h2 className="mt-4 text-xl font-black text-[color:var(--ink)]">
                قاعدة موسوق
              </h2>
              <p className="mt-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                لا تقارن رقم المتر وحده. قارن نطاق العمل، المواصفات، الضريبة،
                الاستثناءات، وآلية التغييرات والدفعات.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
