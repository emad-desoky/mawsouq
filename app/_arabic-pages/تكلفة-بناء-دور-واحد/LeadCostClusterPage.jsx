import Image from "next/image";
import {
  ArrowLeft,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getLeadSiblings } from "./lead-clusters";

const SITE_URL = "https://mawsouq.com";
const PILLAR_URL = `${SITE_URL}/${encodeURIComponent("تكلفة-بناء-دور-واحد")}/`;

function whatsappLink(message) {
  return `https://wa.me/201223328270?text=${encodeURIComponent(message)}`;
}

function internalHref(slug) {
  return `/${encodeURIComponent(slug)}/`;
}

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function WhatsAppButton({ message, children = "أرسل تفاصيل مشروعك الآن", className = "" }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-lead-placement="cost_cluster_cta"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-black text-white shadow-[0_18px_45px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:bg-emerald-400 ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <span className="mb-2 block text-xs font-black tracking-wide text-[color:var(--brand)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="m-0 text-3xl font-black leading-tight tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function RichSection({ section, article }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-b border-[color:var(--hairline)] py-9 last:border-b-0">
      <SectionHeading>{section.title}</SectionHeading>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-lg font-medium leading-9 text-[color:var(--ink-muted)]">
          {paragraph}
        </p>
      ))}

      {section.callout ? (
        <div className="mt-6 rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[color:var(--brand)] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="m-0 text-lg font-black text-[color:var(--ink)]">{section.callout.title}</h3>
              <p className="mb-0 mt-2 leading-8 text-[color:var(--ink-muted)]">{section.callout.text}</p>
            </div>
          </div>
        </div>
      ) : null}

      {section.table ? (
        <div className="mt-7 overflow-x-auto rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-sm">
          <table className="w-full min-w-[760px] border-collapse text-right">
            <thead className="bg-[color:var(--surface-2)]">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} className="border-b border-[color:var(--hairline)] px-5 py-4 text-sm font-black text-[color:var(--ink)]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("-")} className="border-b border-[color:var(--hairline)] last:border-b-0">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4 align-top text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {section.checklist ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.checklist.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <span className="font-bold leading-7 text-[color:var(--ink-muted)]">{item}</span>
            </div>
          ))}
        </div>
      ) : null}

      {section.steps ? (
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {section.steps.map(([number, title, text]) => (
            <article key={`${number}-${title}`} className="rounded-[26px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] p-5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--brand)] text-sm font-black text-white">{number}</span>
              <h3 className="mb-0 mt-4 text-lg font-black text-[color:var(--ink)]">{title}</h3>
              <p className="mb-0 mt-2 leading-7 text-[color:var(--ink-muted)]">{text}</p>
            </article>
          ))}
        </div>
      ) : null}

      {section.bars ? (
        <div className="mt-7 rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] p-6">
          <div className="space-y-5">
            {section.bars.map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm font-black text-[color:var(--ink)]">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[color:var(--surface-3)]">
                  <div className="h-full rounded-full bg-[linear-gradient(90deg,#0b5bb8,#47a0ff)]" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mb-0 mt-5 text-xs font-bold leading-6 text-[color:var(--ink-faint)]">
            توزيع بصري توضيحي لفهم بنية الميزانية، وليس حصر كميات أو عرض سعر لمشروع بعينه.
          </p>
        </div>
      ) : null}

      {section.id === "example" || section.id === "200sqm" || section.id === "scenarios" ? (
        <div className="mt-7 rounded-[30px] border border-emerald-400/30 bg-emerald-500/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-black text-emerald-600">خطوتك التالية</span>
              <h3 className="mb-0 mt-1 text-xl font-black text-[color:var(--ink)]">حوّل المثال إلى تقدير لمشروعك</h3>
            </div>
            <WhatsAppButton message={article.whatsappMessage} children="أرسل بيانات المشروع" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function LeadCostClusterPage({ article }) {
  if (!article) return null;

  const siblings = getLeadSiblings(article.slug, 4);
  const url = `${SITE_URL}/${encodeURIComponent(article.slug)}/`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}${article.image}`],
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "ar-SA",
    author: { "@type": "Organization", name: "موسوق" },
    publisher: { "@type": "Organization", name: "موسوق", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "تكلفة بناء دور واحد", item: PILLAR_URL },
      { "@type": "ListItem", position: 3, name: article.shortTitle, item: url },
    ],
  };

  return (
    <main dir="rtl" className="relative isolate min-h-screen bg-[color:var(--page)] pt-[calc(var(--nav-height)+24px)] pb-28 text-[color:var(--ink)]">
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,0.16),transparent_34%),radial-gradient(circle_at_12%_42%,rgba(11,91,184,0.08),transparent_30%)]" />

      <section className="mx-auto w-[min(100%-28px,1450px)] overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
        <div className="grid items-stretch lg:grid-cols-[1.04fr_0.96fr]">
          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-14">
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]" aria-label="مسار التنقل">
              <a href="/" className="transition hover:text-[color:var(--brand)]">الرئيسية</a>
              <ChevronLeft className="h-3.5 w-3.5" />
              <a href={internalHref("تكلفة-بناء-دور-واحد")} className="transition hover:text-[color:var(--brand)]">تكلفة بناء دور واحد</a>
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>{article.shortTitle}</span>
            </nav>

            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
              <Sparkles className="h-4 w-4" />
              {article.heroKicker}
            </span>

            <h1 className="m-0 max-w-[900px] text-4xl font-black leading-[1.18] tracking-[-0.045em] text-[color:var(--ink)] sm:text-5xl xl:text-6xl">
              {article.title}
            </h1>

            <p className="mt-5 max-w-[840px] text-lg font-bold leading-9 text-[color:var(--ink-muted)] sm:text-xl">
              {article.heroLead}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={article.whatsappMessage} />
              <a href={internalHref("تكلفة-بناء-دور-واحد")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-6 text-sm font-black text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--brand)]">
                <Calculator className="h-4 w-4" />
                ارجع إلى دليل تكلفة الدور الواحد
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {article.stats.map(([value, label]) => (
                <div key={`${value}-${label}`} className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
                  <strong className="block text-lg font-black text-[color:var(--ink)]">{value}</strong>
                  <span className="mt-1 block text-xs font-bold leading-6 text-[color:var(--ink-faint)]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 min-h-[360px] overflow-hidden bg-[#071321] lg:order-2 lg:min-h-[640px]">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,33,0.02),rgba(7,19,33,0.62))]" />
            <div className="absolute bottom-5 right-5 left-5 rounded-[24px] border border-white/15 bg-[#071321]/80 p-5 text-white backdrop-blur-xl">
              <span className="text-xs font-black text-[#7bb9ff]">محتوى محدث • {article.readTime}</span>
              <strong className="mt-2 block text-lg font-black">قرار أوضح قبل دفع أي مبلغ للمقاول</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 grid w-[min(100%-28px,1450px)] gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
        <article className="min-w-0 rounded-[34px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] sm:p-9 lg:p-11">
          <div className="mb-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
              <span className="text-xs font-black text-[color:var(--brand)]">الكلمة المستهدفة</span>
              <strong className="mt-2 block text-lg font-black text-[color:var(--ink)]">{article.primaryKeyword}</strong>
            </div>
            <div className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
              <span className="text-xs font-black text-[color:var(--brand)]">هدف الصفحة</span>
              <strong className="mt-2 block text-base font-black leading-7 text-[color:var(--ink)]">{article.intent}</strong>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {article.gallery.map(([src, alt]) => (
              <figure key={src} className="group overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <figcaption className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{alt}</figcaption>
              </figure>
            ))}
          </div>

          {article.sections.map((section) => (
            <RichSection key={section.id} section={section} article={article} />
          ))}

          <section id="faqs" className="scroll-mt-32 py-9">
            <SectionHeading>أسئلة شائعة قبل اتخاذ القرار</SectionHeading>
            <div className="space-y-3">
              {article.faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
                  <summary className="cursor-pointer list-none text-base font-black text-[color:var(--ink)]">{question}</summary>
                  <p className="mb-0 mt-3 leading-8 text-[color:var(--ink-muted)]">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white sm:p-9">
            <span className="text-xs font-black text-[#8ec5ff]">استشارة سريعة على واتساب</span>
            <h2 className="mb-0 mt-2 text-3xl font-black leading-tight">أرسل المدينة والمساحة ونوع التنفيذ بدل سؤال عام عن السعر</h2>
            <p className="mt-4 max-w-[780px] font-bold leading-8 text-white/75">
              كلما كانت الرسالة أوضح، كان رد الفريق أقرب لحالة مشروعك. يمكنك إرسال المخطط أو صورة الكروكي أيضًا إن كان متوفرًا.
            </p>
            <WhatsAppButton message={article.whatsappMessage} className="mt-5" />
          </section>

          <section className="mt-9 border-t border-[color:var(--hairline)] pt-7">
            <h2 className="text-xl font-black text-[color:var(--ink)]">مصادر رسمية ومراجع مفيدة</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {article.externalLinks.map((href) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2.5 text-xs font-black text-[color:var(--brand)] transition hover:border-[color:var(--brand)]">
                  <FileText className="h-4 w-4" />
                  مصدر خارجي رسمي
                </a>
              ))}
            </div>
          </section>
        </article>

        <aside className="hidden self-start lg:sticky lg:top-[calc(var(--nav-height)+20px)] lg:block lg:max-h-[calc(100vh-var(--nav-height)-32px)] lg:overflow-y-auto lg:overscroll-contain lg:pr-1">
          <div className="space-y-5 pb-2">
            <div className="rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <span className="text-xs font-black text-[color:var(--brand)]">محتويات الصفحة</span>
              <nav className="mt-4 grid gap-2">
                {article.toc.map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-black text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]">
                    <span>{label}</span>
                    <ChevronLeft className="h-4 w-4" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-[28px] border border-emerald-400/25 bg-emerald-500/5 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500 text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="mb-0 mt-4 text-lg font-black text-[color:var(--ink)]">عندك مشروع حقيقي؟</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">أرسل المدينة والمساحة والنطاق واحصل على بداية أوضح بدل التخمين.</p>
              <WhatsAppButton message={article.whatsappMessage} children="تواصل عبر واتساب" className="mt-4 w-full px-4" />
            </div>

            <div className="rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <span className="text-xs font-black text-[color:var(--brand)]">المقال الرئيسي</span>
              <a href={internalHref("تكلفة-بناء-دور-واحد")} className="mt-3 block rounded-2xl bg-[color:var(--surface-2)] p-4 transition hover:-translate-y-0.5">
                <strong className="block text-base font-black text-[color:var(--ink)]">تكلفة بناء دور واحد في السعودية</strong>
                <span className="mt-2 flex items-center gap-1 text-xs font-black text-[color:var(--brand)]">اقرأ الدليل الرئيسي <ArrowLeft className="h-3.5 w-3.5" /></span>
              </a>
            </div>

            <div className="rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <span className="text-xs font-black text-[color:var(--brand)]">مقالات مرتبطة</span>
              <div className="mt-3 grid gap-2">
                {siblings.map((item) => (
                  <a key={item.slug} href={internalHref(item.slug)} className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-3.5 transition hover:border-[color:var(--brand)]">
                    <strong className="block text-sm font-black leading-6 text-[color:var(--ink)]">{item.shortTitle}</strong>
                  </a>
                ))}
                <a href={internalHref("سعر-متر-العظم-بالمواد-في-السعودية")} className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-3.5 transition hover:border-[color:var(--brand)]">
                  <strong className="block text-sm font-black leading-6 text-[color:var(--ink)]">سعر متر العظم بالمواد</strong>
                </a>
                <a href={internalHref("تكلفة-بناء-دور-واحد-تسليم-مفتاح")} className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-3.5 transition hover:border-[color:var(--brand)]">
                  <strong className="block text-sm font-black leading-6 text-[color:var(--ink)]">تكلفة التسليم على المفتاح</strong>
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
        <WhatsAppButton message={article.whatsappMessage} children="أرسل تفاصيل مشروعك على واتساب" className="w-full shadow-[0_18px_55px_rgba(16,185,129,0.32)]" />
      </div>
    </main>
  );
}
