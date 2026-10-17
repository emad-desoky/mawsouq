import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, BookOpen, CheckCircle2, FileCheck2, MessageCircle, ShieldCheck } from "lucide-react";
import { SITE_URL, business } from "./clusters";
import { getPracticalCostGuide } from "./practical-guides";

const PUBLISHED = "2026-10-17T14:30:00+03:00";
const SOURCE_LINKS = [
  { href: "https://my.gov.sa/en/services/19127", label: "الخدمات الحكومية السعودية – رخص البناء", description: "الإجراء ومتطلبات إعداد المخططات والتفويض وفق الجهات المختصة" },
  { href: "https://sbc.gov.sa/ar/BC/Pages/BuildingCode/BC.aspx?year=2024", label: "منصة كود البناء السعودي", description: "مرجع المعايير والمتطلبات الفنية بحسب نوع المشروع" },
];

export function getPracticalCostMetadata(slug) {
  const guide = getPracticalCostGuide(slug);
  if (!guide) throw new Error(`Unknown practical cost guide: ${slug}`);
  const canonical = `${SITE_URL}/${slug}/`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    authors: [{ name: "فريق موسوق التحريري", url: `${SITE_URL}/عن-الشركة/` }],
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "article", locale: "ar_SA", siteName: "موسوق", url: canonical,
      title: guide.metaTitle, description: guide.description,
      publishedTime: PUBLISHED, modifiedTime: PUBLISHED,
      images: [{ url: `${SITE_URL}${guide.hero}`, alt: guide.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: guide.metaTitle, description: guide.description, images: [`${SITE_URL}${guide.hero}`] },
  };
}

function buildJsonLd(guide) {
  const url = `${SITE_URL}/${guide.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": `${url}#article`,
        headline: guide.title, description: guide.description, mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: PUBLISHED, dateModified: PUBLISHED, inLanguage: "ar-SA", articleSection: guide.category,
        image: { "@type": "ImageObject", url: `${SITE_URL}${guide.hero}` },
        author: { "@type": "Organization", name: "فريق موسوق التحريري", url: `${SITE_URL}/عن-الشركة/` },
        publisher: { "@type": "Organization", name: "موسوق", url: SITE_URL, logo: { "@type": "ImageObject", url: business.logo } },
        isPartOf: { "@type": "WebPage", "@id": `${SITE_URL}/تكلفة-بناء-دور-واحد/` },
      },
      {
        "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "تكلفة بناء دور واحد", item: `${SITE_URL}/تكلفة-بناء-دور-واحد/` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
}

function WideTable({ table }) {
  return (
    <div className="mt-7 overflow-x-auto rounded-[25px] border border-[color:var(--hairline)] bg-[color:var(--surface)]">
      <table className="w-full min-w-[600px] border-collapse text-right">
        <caption className="bg-[color:var(--surface-2)] p-4 text-right text-sm font-black text-[color:var(--ink)]">{table.caption}</caption>
        <thead className="bg-[#071321] text-white"><tr>{table.headers.map((h) => <th key={h} scope="col" className="p-4 text-sm font-black">{h}</th>)}</tr></thead>
        <tbody>{table.rows.map((r, idx) => (
          <tr key={`${idx}-${r[0]}`} className="border-t border-[color:var(--hairline)]">
            {r.map((cell, i) => i === 0
              ? <th key={i} scope="row" className="p-4 text-sm font-black leading-7 text-[color:var(--ink)]">{cell}</th>
              : <td key={i} className="p-4 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{cell}</td>)}
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}

export default function PracticalCostGuide({ slug }) {
  const guide = getPracticalCostGuide(slug);
  if (!guide) return null;
  const whatsapp = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(guide.whatsappMessage)}`;
  const sibling = slug === "جدول-كميات-بناء-دور-واحد"
    ? { href: "/حساب-مسطح-البناء-للدور-الواحد/", label: "طريقة حساب مسطح البناء" }
    : { href: "/جدول-كميات-بناء-دور-واحد/", label: "تجهيز جدول الكميات" };
  return (
    <main dir="rtl" lang="ar-SA" className="min-h-screen bg-[color:var(--page)] pb-24 text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(guide)).replace(/</g, "\\u003c") }} />
      <div className="mx-auto w-[min(100%-32px,1440px)] pt-[calc(var(--nav-height)+30px)]">
        <nav aria-label="مسار التنقل" className="flex flex-wrap gap-2 text-sm font-bold text-[color:var(--ink-muted)]">
          <Link href="/">الرئيسية</Link><span>‹</span><Link className="text-[color:var(--brand)]" href="/تكلفة-بناء-دور-واحد/">تكلفة بناء دور واحد</Link><span>‹</span><span aria-current="page">{guide.category}</span>
        </nav>
        <header className="mt-6 grid items-center gap-8 overflow-hidden rounded-[32px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] md:p-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]"><BookOpen size={16} />{guide.category} • دليل عملي 2026</span>
            <h1 className="mt-5 text-[clamp(2.1rem,4.2vw,3.75rem)] font-black leading-[1.28] tracking-[-.04em]">{guide.title}</h1>
            <p className="mt-5 text-lg font-semibold leading-9 text-[color:var(--ink-muted)]">{guide.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-[color:var(--ink-muted)]">
              <span className="inline-flex items-center gap-2"><BadgeCheck size={18} className="text-[color:var(--brand)]"/> فريق موسوق التحريري</span><span>مراجعة: 17 أكتوبر 2026</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" data-lead-placement="practical-cost-hero" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black text-white"><MessageCircle size={19}/>اسأل عن مشروعك</a>
              <Link href="/تكلفة-بناء-دور-واحد/#calculator" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] px-6 text-sm font-black text-[color:var(--ink)]">حاسبة تكلفة الدور <ArrowLeft size={17}/></Link>
            </div>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)]">
            <div className="relative aspect-[4/3] w-full"><Image src={guide.hero} alt={guide.heroAlt} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-contain" /></div>
            <figcaption className="border-t border-[color:var(--hairline)] p-4 text-xs font-semibold leading-6 text-[color:var(--ink-muted)]">{guide.imageCaption}</figcaption>
          </figure>
        </header>
        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_305px] lg:items-start">
          <article className="min-w-0 rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 md:p-9">
            <section id="summary" className="scroll-mt-28 rounded-[25px] bg-[color:var(--surface-2)] p-5 md:p-7">
              <h2 className="text-2xl font-black">الجواب المختصر قبل اتخاذ القرار</h2>
              <ul className="mt-5 space-y-4">{guide.quick.map((q) => <li key={q} className="flex items-start gap-3 text-base font-bold leading-9 text-[color:var(--ink-muted)]"><CheckCircle2 size={21} className="mt-2 shrink-0 text-emerald-600"/>{q}</li>)}</ul>
            </section>
            {guide.sections.map((section, index) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-32 border-t border-[color:var(--hairline)] pt-10">
                <span className="text-xs font-black text-[color:var(--brand)]">{section.eyebrow}</span>
                <h2 className="mt-3 text-[clamp(1.65rem,2.5vw,2.3rem)] font-black leading-tight">{section.title}</h2>
                {(section.paragraphs || []).map((p) => <p key={p} className="mt-5 text-[16px] font-semibold leading-[2.1] text-[color:var(--ink-muted)]">{p}</p>)}
                {section.table ? <WideTable table={section.table} /> : null}
                {section.steps?.length ? (
                  <ol className="mt-7 space-y-3">{section.steps.map(([heading, detail], i) => (
                    <li key={heading} className="flex gap-4 rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[color:var(--brand)] text-white font-black">{i+1}</span>
                      <div><h3 className="text-lg font-black">{heading}</h3><p className="mt-1 text-sm font-semibold leading-8 text-[color:var(--ink-muted)]">{detail}</p></div>
                    </li>
                  ))}</ol>
                ) : null}
                {section.bullets?.length ? <ul className="mt-6 space-y-3">{section.bullets.map((b) => <li key={b} className="flex items-start gap-3 text-sm font-bold leading-8 text-[color:var(--ink-muted)]"><CheckCircle2 size={18} className="mt-2 shrink-0 text-[color:var(--brand)]"/>{b}</li>)}</ul> : null}
                {index === 1 ? <aside className="mt-8 rounded-[24px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white"><strong className="text-xl font-black">هل لديك مخطط أو عرض مقاول بالفعل؟</strong><p className="mt-2 text-sm font-semibold leading-8 text-white/85">أرسل مساحة المشروع والمدينة والمرحلة الحالية. نبدأ بتحديد البيانات الناقصة بدل إعطائك رقمًا عامًا لا يخص أرضك.</p><a href={whatsapp} data-lead-placement="practical-cost-inline" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white"><MessageCircle size={17}/>أرسل تفاصيل المشروع</a></aside> : null}
              </section>
            ))}
            <section id="next-step" className="mt-12 scroll-mt-28 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h2 className="text-2xl font-black">أكمل خطوات مشروعك بالترتيب</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <Link href="/تكلفة-بناء-دور-واحد/" className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface)] p-4 font-black text-[color:var(--brand)]"><ArrowLeft size={17} />العودة إلى دليل تكلفة بناء دور واحد</Link>
                <Link href={sibling.href} className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface)] p-4 font-black text-[color:var(--brand)]"><ArrowLeft size={17} />{sibling.label}</Link>
                <Link href="/التصميم-المعماري/" className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface)] p-4 font-black text-[color:var(--brand)]"><ArrowLeft size={17} />المخطط المعماري قبل الحساب</Link>
                <Link href="/مقاول-بناء/" className="flex items-center gap-2 rounded-2xl bg-[color:var(--surface)] p-4 font-black text-[color:var(--brand)]"><ArrowLeft size={17} />كيفية اختيار مقاول بناء</Link>
              </div>
            </section>
            <section id="official-references" className="mt-12 scroll-mt-28 border-t border-[color:var(--hairline)] pt-9">
              <h2 className="text-2xl font-black">مصادر رسمية للتحقق من متطلبات مشروعك</h2>
              <p className="mt-3 text-sm font-semibold leading-8 text-[color:var(--ink-muted)]">المراجع الرسمية التالية تخص الاشتراطات والإجراءات، ولا تقدم سعر متر موحدًا للمقاولين. تحقق من متطلبات أرضك عبر الجهة المختصة قبل الاعتماد النهائي.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">{SOURCE_LINKS.map((s) => <a key={s.href} href={s.href} rel="noopener noreferrer" target="_blank" className="rounded-2xl border border-[color:var(--hairline)] p-4"><strong className="text-sm font-black text-[color:var(--brand)]">{s.label} ↗</strong><p className="mt-2 text-xs font-semibold leading-6 text-[color:var(--ink-muted)]">{s.description}</p></a>)}</div>
            </section>
            <section id="faq" className="mt-12 scroll-mt-28 border-t border-[color:var(--hairline)] pt-9"><h2 className="text-2xl font-black">أسئلة شائعة</h2><div className="mt-5 space-y-3">{guide.faqs.map((f) => <details key={f.q} className="rounded-2xl border border-[color:var(--hairline)] p-5"><summary className="cursor-pointer text-lg font-black">{f.q}</summary><p className="mt-4 text-sm font-semibold leading-8 text-[color:var(--ink-muted)]">{f.a}</p></details>)}</div></section>
            <div className="mt-12 flex items-start gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-white"><Image src="/mawsouq-logo.png" alt="شعار موسوق" fill sizes="56px" className="object-contain p-1"/></div><div><strong className="flex items-center gap-2 text-base font-black">فريق موسوق التحريري <BadgeCheck size={17} className="text-[color:var(--brand)]"/></strong><p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">إرشادات عملية عن التصميم والبناء في السعودية. التقديرات لا تحل محل حصر كميات أو تصميم معتمد لمشروعك.</p></div></div>
          </article>
          <aside className="hidden lg:sticky lg:top-[calc(var(--nav-height)+24px)] lg:block lg:self-start">
            <div className="rounded-[25px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]"><div className="flex items-center gap-2"><FileCheck2 size={20} className="text-[color:var(--brand)]"/><strong className="font-black">محتويات الدليل</strong></div><nav aria-label="أقسام الدليل" className="mt-4 max-h-[48vh] space-y-1 overflow-y-auto">{guide.sections.map((s) => <a href={`#${s.id}`} key={s.id} className="block rounded-xl px-3 py-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)] hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]">{s.title}</a>)}</nav></div>
            <div className="mt-4 rounded-[25px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5"><ShieldCheck size={24} className="text-[color:var(--brand)]"/><h2 className="mt-3 text-lg font-black">اطلب مراجعة نطاق مشروعك</h2><p className="mt-2 text-sm font-semibold leading-8 text-[color:var(--ink-muted)]">المدينة، المساحة، المخططات، والخدمة المطلوبة تكفي لبدء محادثة واضحة.</p><a href={whatsapp} data-lead-placement="practical-cost-sidebar" target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-4 text-sm font-black text-white"><MessageCircle size={18} className="ml-2"/>تواصل عبر واتساب</a></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
