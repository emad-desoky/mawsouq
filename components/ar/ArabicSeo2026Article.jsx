import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ExternalLink,
  ListChecks,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";
import { ARABIC_SEO_2026_PAGES } from "@/lib/arabicSeo2026";

const SITE_URL = "https://mawsouq.com";
const WHATSAPP_NUMBER = "201223328270";

function getPageBySlug(slug) {
  return Object.values(ARABIC_SEO_2026_PAGES).find((page) => page.slug === slug) || null;
}

function getPageByHref(href = "") {
  const slug = href.split("#")[0].replace(/^\/+|\/+$/g, "");
  return slug ? getPageBySlug(slug) : null;
}

function absoluteUrl(href = "") {
  if (!href) return SITE_URL;
  if (/^https?:\/\//i.test(href)) return href;
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

function formatArabicDate(value) {
  if (!value) return "";

  try {
    return new Intl.DateTimeFormat("ar-SA-u-nu-latn", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function AuthorByline({ page, full = false }) {
  const author = page.author || {
    name: "فريق موسوق",
    role: "فريق موسوق للتصميم والبناء",
    avatar: "/mawsouq-logo.png",
    url: "/عن-الشركة/",
    bio: "فريق موسوق يعد أدلة عملية لأصحاب مشاريع التصميم والبناء في السعودية.",
  };

  const content = (
    <>
      <span className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-[color:var(--hairline-strong)] bg-white ${full ? "size-16" : "size-11"}`}>
        <Image
          src={author.avatar || "/mawsouq-logo.png"}
          alt="شعار موسوق - فريق موسوق"
          fill
          sizes={full ? "64px" : "44px"}
          className="object-contain p-1"
        />
      </span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2 text-sm font-black text-[color:var(--ink)]">
          <span>{author.name || "فريق موسوق"}</span>
          <BadgeCheck size={16} className="text-[color:var(--brand)]" aria-hidden="true" />
        </span>
        <span className="mt-1 block text-xs font-bold leading-6 text-[color:var(--ink-faint)]">
          {author.role || "فريق موسوق للتصميم والبناء"}
        </span>
        {full && author.bio ? (
          <span className="mt-2 block max-w-[780px] text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
            {author.bio}
          </span>
        ) : null}
      </span>
    </>
  );

  if (full) {
    return (
      <section aria-label="كاتب المقال" className="my-9 flex items-start gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:p-6">
        {content}
      </section>
    );
  }

  return (
    <Link href={author.url || "/عن-الشركة/"} className="inline-flex items-center gap-3 rounded-2xl transition hover:opacity-90">
      {content}
    </Link>
  );
}

function ClusterLinksSection({ page }) {
  if (!page.clusterLinks?.length) return null;
  const isCluster = page.pageType === "cluster";

  return (
    <section id="related-guides" className="scroll-mt-32 my-10 rounded-[30px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] p-5 md:p-7">
      <div className="max-w-[900px]">
        <span className="text-xs font-black text-[color:var(--brand)]">{isCluster ? "استكمل القراءة" : "أدلة مرتبطة"}</span>
        <h2 className="mt-2 text-3xl font-black leading-tight tracking-[-.035em] text-[color:var(--ink)] md:text-4xl">
          {isCluster ? "أدلة مرتبطة تساعدك على اتخاذ القرار" : "أدلة مرتبطة داخل هذا المحور"}
        </h2>
        <p className="mt-4 text-[15px] font-bold leading-8 text-[color:var(--ink-muted)]">
          {isCluster
            ? "استخدم الروابط التالية للعودة إلى الدليل الرئيسي أو الانتقال إلى أدلة قريبة تساعدك على استكمال القرار بدون تكرار المعلومات نفسها."
            : "اختر الدليل الأقرب لمرحلة مشروعك لتنتقل من الصورة العامة إلى التفاصيل العملية التي تحتاجها قبل التصميم أو التسعير أو التنفيذ."}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {page.clusterLinks.map((item) => {
          const linkedPage = getPageByHref(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[var(--card-shadow)]"
            >
              {linkedPage?.heroImage ? (
                <span className="relative block aspect-[16/8] overflow-hidden bg-[color:var(--surface-2)]">
                  <Image
                    src={linkedPage.heroImage}
                    alt={linkedPage.imageAlt || item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </span>
              ) : null}
              <span className="block p-5">
                {item.intent ? (
                  <span className="text-xs font-black text-[color:var(--brand)]">{item.intent}</span>
                ) : null}
                <span className="mt-1 flex items-start justify-between gap-3 text-lg font-black leading-7 text-[color:var(--ink)]">
                  <span>{item.title}</span>
                  <ArrowLeft size={18} className="mt-1 shrink-0 text-[color:var(--brand)] transition group-hover:-translate-x-1" />
                </span>
                {item.description ? (
                  <span className="mt-2 block text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{item.description}</span>
                ) : null}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function SourceReferences({ page }) {
  if (!page.sourceLinks?.length) return null;

  return (
    <section id="sources" className="scroll-mt-32 mt-12 border-t border-[color:var(--hairline)] pt-12">
      <span className="text-xs font-black text-[color:var(--brand)]">مصادر ومراجع رسمية</span>
      <h2 className="mt-2 text-3xl font-black md:text-4xl">راجع المتطلبات الحالية من المصدر الرسمي</h2>
      <p className="mt-4 max-w-[900px] text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
        تختلف بعض الاشتراطات والإجراءات حسب المدينة ونوع المشروع وحالته. استخدم المراجع الرسمية التالية للتحقق من المتطلبات الحالية قبل اتخاذ قرار ترخيص أو تنفيذ.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {page.sourceLinks.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 transition hover:border-[color:var(--brand)]"
          >
            <span className="flex items-center justify-between gap-3 text-base font-black text-[color:var(--ink)]">
              <span>{source.label}</span>
              <ExternalLink size={17} className="shrink-0 text-[color:var(--brand)]" />
            </span>
            <span className="mt-2 block text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{source.note}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhatsAppButton({ page, placement = "article", children, dark = false, className = "" }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(page.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-lead-placement={placement}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_16px_38px_rgba(37,211,102,.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] ${className}`}
      style={{ color: "#fff" }}
    >
      <MessageCircle size={19} />
      {children}
    </a>
  );
}

function SectionTable({ table }) {
  if (!table) return null;

  return (
    <div className="mt-6 overflow-x-auto rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)]">
      <table className="w-full min-w-[760px] border-collapse text-right">
        <caption className="bg-[color:var(--surface-2)] p-4 text-right text-sm font-black text-[color:var(--ink)]">
          {table.caption}
        </caption>
        <thead className="bg-[#071321] text-white">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="p-4 text-sm font-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className={`border-t border-[color:var(--hairline)] ${rowIndex % 2 ? "bg-[color:var(--surface-2)]" : ""}`}
            >
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row" className="p-4 text-sm font-black leading-7 text-[color:var(--ink)]">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex} className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MediaGallery({ media }) {
  if (!media?.length) return null;

  return (
    <section aria-label="صور مرتبطة بالموضوع" className="my-12">
      <div className="grid gap-4 lg:grid-cols-12">
        {media.map((item, index) => (
          <figure
            key={item.src}
            className={`group overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] shadow-[var(--card-shadow)] ${
              index === 0 ? "lg:col-span-6" : "lg:col-span-3"
            }`}
          >
            <div className={`relative ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3] lg:aspect-auto lg:h-[310px]"}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <figcaption className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function SectionBlock({ section, index }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-t border-[color:var(--hairline)] py-12 first:border-0 first:pt-0 md:py-14">
      <div className="max-w-[900px]">
        {section.eyebrow ? (
          <span className="text-xs font-black text-[color:var(--brand)]">{section.eyebrow}</span>
        ) : null}
        <h2 className="mt-2 text-3xl font-black leading-tight tracking-[-.035em] text-[color:var(--ink)] md:text-4xl">
          {section.title}
        </h2>

        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph} className="mt-5 text-[17px] font-bold leading-9 text-[color:var(--ink-muted)]">
            {paragraph}
          </p>
        ))}

        {section.bullets?.length ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {section.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"
              >
                <CheckCircle2 size={19} className="mt-1 shrink-0 text-[color:var(--brand)]" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        ) : null}

        {section.steps?.length ? (
          <ol className="mt-7 space-y-3">
            {section.steps.map((step, stepIndex) => (
              <li
                key={step}
                className="grid grid-cols-[44px_1fr] items-start gap-3 rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-sm font-black text-white">
                  {String(stepIndex + 1).padStart(2, "0")}
                </span>
                <span className="pt-2 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{step}</span>
              </li>
            ))}
          </ol>
        ) : null}

        <SectionTable table={section.table} />
      </div>

      {index === 2 ? (
        <div className="mt-8 rounded-[24px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-5 text-white md:flex md:items-center md:justify-between md:gap-5 md:p-6">
          <div>
            <strong className="block text-xl font-black">هل لديك مشروع فعلي وليس سؤالًا عامًا؟</strong>
            <p className="mt-2 text-sm font-bold leading-7 text-white/75">أرسل المدينة والمساحة ومرحلة المشروع على واتساب لنبدأ من بيانات واضحة.</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function buildJsonLd(page) {
  const canonical = `${SITE_URL}/${page.slug}/`;
  const image = `${SITE_URL}${page.heroImage}`;
  const parent = page.parentSlug ? getPageBySlug(page.parentSlug) : null;
  const breadcrumbs = [
    { name: "الرئيسية", item: `${SITE_URL}/` },
    { name: "المدونات", item: `${SITE_URL}/المدونات/` },
  ];

  if (parent) {
    breadcrumbs.push({ name: parent.title, item: `${SITE_URL}/${parent.slug}/` });
  }
  breadcrumbs.push({ name: page.title, item: canonical });

  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${canonical}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      headline: page.title,
      description: page.metaDescription,
      image: { "@type": "ImageObject", url: image, width: 1600, height: 900 },
      author: {
        "@type": page.author?.type || "Organization",
        name: page.author?.name || "فريق موسوق",
        alternateName: page.author?.alternateName || "Mawsooq Team",
        url: absoluteUrl(page.author?.url || "/عن-الشركة/"),
        image: absoluteUrl(page.author?.avatar || "/mawsouq-logo.png"),
      },
      publisher: {
        "@type": "Organization",
        name: "Mawsooq",
        alternateName: "موسوق",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/mawsouq-logo.png` },
      },
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      inLanguage: "ar-SA",
      articleSection: page.category,
      keywords: [page.primaryKeyword, ...(page.secondaryKeywords || []), page.category, "موسوق", "السعودية"],
      ...(parent ? { isPartOf: { "@type": "WebPage", "@id": `${SITE_URL}/${parent.slug}/` } } : {}),
      ...(() => {
        const childPages = (page.clusterLinks || [])
          .map((item) => ({ item, linkedPage: getPageByHref(item.href) }))
          .filter(({ linkedPage }) => linkedPage?.parentSlug === page.slug);

        return childPages.length
          ? {
              hasPart: childPages.map(({ item }) => ({
                "@type": "WebPage",
                "@id": absoluteUrl(item.href),
                name: item.title,
              })),
            }
          : {};
      })(),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  if (["pillar", "local-commercial"].includes(page.pageType)) {
    graph.push({
      "@type": "Service",
      name: page.title,
      description: page.metaDescription,
      provider: { "@type": "Organization", name: "موسوق", url: SITE_URL },
      areaServed: page.slug.includes("الدمام") ? "الدمام والمنطقة الشرقية" : "المملكة العربية السعودية",
      url: canonical,
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export default function ArabicSeo2026Article({ page }) {
  const cluster = page.clusterSlug ? getPageBySlug(page.clusterSlug) : null;
  const parent = page.parentSlug ? getPageBySlug(page.parentSlug) : null;
  const jsonLd = buildJsonLd(page);

  return (
    <main
      dir="rtl"
      className="relative isolate min-h-screen overflow-x-clip bg-[color:var(--page)] pb-28 sm:pb-24 pt-[calc(var(--nav-height)_+_34px)] text-[color:var(--ink)]"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,.13),transparent_30%),radial-gradient(circle_at_10%_36%,rgba(11,91,184,.08),transparent_26%)]" />

      <div className="mx-auto w-[min(100%-28px,1480px)] sm:w-[min(100%-36px,1480px)]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="transition hover:text-[color:var(--brand)]">الرئيسية</Link>
          <ChevronLeft size={14} />
          <Link href="/المدونات/" className="transition hover:text-[color:var(--brand)]">المدونات</Link>
          {parent ? (
            <>
              <ChevronLeft size={14} />
              <Link href={`/${parent.slug}/`} className="transition hover:text-[color:var(--brand)]">{parent.primaryKeyword}</Link>
            </>
          ) : null}
          <ChevronLeft size={14} />
          <span className="text-[color:var(--ink-muted)]">{page.primaryKeyword}</span>
        </nav>

        <header className="overflow-hidden rounded-[36px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="order-2 flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10 xl:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                  <Sparkles size={15} /> {page.category}
                </span>
                <span className="rounded-full border border-[color:var(--hairline)] px-4 py-2 text-xs font-black text-[color:var(--ink-faint)]">
                  تحديث فعلي: {formatArabicDate(page.dateModified)}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-.05em] text-[color:var(--ink)] sm:text-5xl xl:text-[58px]">
                {page.title}
              </h1>
              <p className="mt-5 text-[17px] font-bold leading-9 text-[color:var(--ink-muted)] sm:text-lg">
                {page.subtitle}
              </p>

              <div className="mt-6">
                <AuthorByline page={page} />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton page={page} placement="hero">أرسل تفاصيل مشروعك</WhatsAppButton>
                <a
                  href="#summary"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-6 text-sm font-black text-[color:var(--ink)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                >
                  ابدأ بالملخص <ArrowLeft size={17} />
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-xs font-black text-[color:var(--ink-faint)]">
                <span className="rounded-full bg-[color:var(--surface-2)] px-3 py-2">محتوى عربي أصيل</span>
                <span className="rounded-full bg-[color:var(--surface-2)] px-3 py-2">مشاريع وآراء عملاء بالفيديو</span>
                <span className="rounded-full bg-[color:var(--surface-2)] px-3 py-2">تواصل مباشر عبر واتساب</span>
              </div>
            </div>

            <div className="order-1 flex items-center justify-center bg-[color:var(--surface-2)] p-3 sm:p-5 lg:order-2 lg:p-7">
              <figure className="relative aspect-video w-full overflow-hidden rounded-[26px] border border-[color:var(--hairline)] bg-white shadow-[0_18px_55px_rgba(7,19,33,.10)]">
                <Image
                  src={page.heroImage}
                  alt={page.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-contain object-center"
                />
              </figure>
            </div>
          </div>
        </header>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_350px]">
          <article className="min-w-0 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] sm:p-7 md:p-9 xl:p-11">
            <section id="summary" className="scroll-mt-32 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><ListChecks size={21} /></span>
                <div>
                  <span className="text-xs font-black text-[color:var(--brand)]">ملخص سريع</span>
                  <h2 className="mt-1 text-2xl font-black md:text-3xl">أهم ما تحتاج معرفته قبل القرار</h2>
                </div>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {page.quickTakeaways.map((item) => (
                  <div key={item} className="flex gap-3 rounded-[18px] bg-[color:var(--surface)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[color:var(--brand)]" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <AuthorByline page={page} full />
            <ClusterLinksSection page={page} />

            <details className="mt-5 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 lg:hidden">
              <summary className="cursor-pointer list-none text-base font-black">محتويات الصفحة</summary>
              <nav aria-label="محتويات الصفحة" className="mt-4 grid gap-2">
                {page.sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center justify-between rounded-xl bg-[color:var(--surface)] px-3 py-3 text-sm font-bold text-[color:var(--ink-muted)]">
                    <span>{section.title}</span><span className="text-xs text-[color:var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                  </a>
                ))}
                {page.clusterLinks?.length ? <a href="#related-guides" className="rounded-xl bg-[color:var(--surface)] px-3 py-3 text-sm font-bold text-[color:var(--ink-muted)]">أدلة مرتبطة</a> : null}
                {page.sourceLinks?.length ? <a href="#sources" className="rounded-xl bg-[color:var(--surface)] px-3 py-3 text-sm font-bold text-[color:var(--ink-muted)]">المصادر الرسمية</a> : null}
                <a href="#faq" className="rounded-xl bg-[color:var(--surface)] px-3 py-3 text-sm font-bold text-[color:var(--ink-muted)]">الأسئلة الشائعة</a>
              </nav>
            </details>

            <div className="mt-10">
              {page.sections.map((section, index) => (
                <div key={section.id}>
                  <SectionBlock section={section} index={index} />
                  {index === 1 ? <MediaGallery media={page.media} /> : null}
                  {index === 2 ? (
                    <div className="mb-12">
                      <WhatsAppButton page={page} placement="mid_article">أرسل بيانات المشروع على واتساب</WhatsAppButton>
                    </div>
                  ) : null}
                  {index === 3 ? (
                    <MawsooqProofSection context={page.primaryKeyword} whatsappMessage={page.whatsappMessage} />
                  ) : null}
                </div>
              ))}
            </div>

            {(cluster || parent) ? (
              <section className="my-12 overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white md:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black text-cyan-100"><ShieldCheck size={15} /> ضمن نفس الموضوع</span>
                {cluster ? (
                  <>
                    <h2 className="mt-5 text-3xl font-black">تابع إلى الدليل المتخصص: {cluster.primaryKeyword}</h2>
                    <p className="mt-3 max-w-[850px] text-sm font-bold leading-8 text-white/75">هذا الدليل يقدم الصورة الأوسع، بينما الدليل التالي يتعمق في جانب محدد من القرار حتى تحصل على التفاصيل التي تحتاجها دون تكرار المحتوى نفسه.</p>
                    <Link href={`/${cluster.slug}/`} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15">{page.clusterAnchor}<ArrowLeft size={16} /></Link>
                  </>
                ) : null}
                {parent ? (
                  <>
                    <h2 className="mt-5 text-3xl font-black">هذا المقال يدعم الدليل الرئيسي</h2>
                    <p className="mt-3 max-w-[850px] text-sm font-bold leading-8 text-white/75">للحصول على الصورة الكاملة، ارجع إلى الدليل الأساسي ثم استخدم هذه الصفحة للتفاصيل المتخصصة المرتبطة بقرارك.</p>
                    <Link href={`/${parent.slug}/`} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15">{parent.primaryKeyword}<ArrowLeft size={16} /></Link>
                  </>
                ) : null}
              </section>
            ) : null}

            <SourceReferences page={page} />

            <section id="faq" className="scroll-mt-32 border-t border-[color:var(--hairline)] pt-12">
              <span className="text-xs font-black text-[color:var(--brand)]">الأسئلة الشائعة</span>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة يبحث عنها أصحاب المشاريع</h2>
              <div className="mt-6 grid gap-3">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
                    <summary className="cursor-pointer list-none text-base font-black leading-7 text-[color:var(--ink)]">{faq.question}</summary>
                    <p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
              <span className="text-xs font-black text-cyan-100">الخطوة التالية</span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">أرسل تفاصيل مشروعك بدل الاكتفاء بقراءة متوسطات عامة</h2>
              <p className="mt-4 max-w-[850px] text-base font-bold leading-8 text-white/75">اكتب المدينة والمساحة ونوع المشروع والمرحلة الحالية وما إذا كانت لديك مخططات. سنبدأ من البيانات التي لديك ونحدد السؤال أو الخدمة التي تحتاجها.</p>
              <WhatsAppButton page={page} placement="final_cta" dark className="mt-6">تواصل مع موسوق عبر واتساب</WhatsAppButton>
            </section>
          </article>

          <aside className="hidden lg:block lg:self-start">
            <div className="sticky top-[calc(var(--nav-height)_+_18px)]">
              <div className="max-h-[calc(100vh_-_var(--nav-height)_-_36px)] overflow-y-auto overscroll-contain rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] [scrollbar-width:thin]">
              <div className="bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-5 text-white">
                <span className="text-xs font-black text-cyan-100">مشروعك جاهز للنقاش؟</span>
                <h2 className="mt-2 text-2xl font-black leading-tight">أرسل التفاصيل الآن على واتساب</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-white/70">المدينة + المساحة + نوع المشروع + المرحلة الحالية.</p>
                <WhatsAppButton page={page} placement="sticky_sidebar" dark className="mt-5 w-full">ابدأ المحادثة</WhatsAppButton>
              </div>

              <nav aria-label="محتويات المقال" className="p-4">
                <span className="px-2 text-xs font-black text-[color:var(--ink-faint)]">محتويات الصفحة</span>
                <div className="mt-3 grid gap-1">
                  {page.sections.map((section, index) => (
                    <a key={section.id} href={`#${section.id}`} className="grid grid-cols-[28px_1fr] items-start gap-2 rounded-xl px-2 py-2.5 text-sm font-bold leading-6 text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]">
                      <span className="text-xs font-black text-[color:var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                  {page.clusterLinks?.length ? <a href="#related-guides" className="grid grid-cols-[28px_1fr] gap-2 rounded-xl px-2 py-2.5 text-sm font-bold text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"><span className="text-xs font-black text-[color:var(--brand)]">CL</span><span>أدلة مرتبطة</span></a> : null}
                  {page.sourceLinks?.length ? <a href="#sources" className="grid grid-cols-[28px_1fr] gap-2 rounded-xl px-2 py-2.5 text-sm font-bold text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"><span className="text-xs font-black text-[color:var(--brand)]">SRC</span><span>المصادر الرسمية</span></a> : null}
                  <a href="#faq" className="grid grid-cols-[28px_1fr] gap-2 rounded-xl px-2 py-2.5 text-sm font-bold text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"><span className="text-xs font-black text-[color:var(--brand)]">FAQ</span><span>الأسئلة الشائعة</span></a>
                </div>
              </nav>

              {page.clusterLinks?.length ? (
                <div className="border-t border-[color:var(--hairline)] p-4">
                  <span className="px-2 text-xs font-black text-[color:var(--ink-faint)]">أدلة هذا المحور</span>
                  <div className="mt-3 grid gap-2">
                    {page.clusterLinks.slice(0, 4).map((item) => (
                      <Link key={item.href} href={item.href} className="flex items-center justify-between gap-3 rounded-xl bg-[color:var(--surface-2)] px-3 py-3 text-sm font-black leading-6 text-[color:var(--ink-muted)] transition hover:text-[color:var(--brand)]">
                        <span>{item.title}</span><ArrowLeft size={15} className="shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {page.related?.length ? (
                <div className="border-t border-[color:var(--hairline)] p-4">
                  <span className="px-2 text-xs font-black text-[color:var(--ink-faint)]">روابط داخلية مرتبطة</span>
                  <div className="mt-3 grid gap-2">
                    {page.related.map((item) => (
                      <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-xl bg-[color:var(--surface-2)] px-3 py-3 text-sm font-black text-[color:var(--ink-muted)] transition hover:text-[color:var(--brand)]">
                        <span>{item.label}</span><ArrowLeft size={15} />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
