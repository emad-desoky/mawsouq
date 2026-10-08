import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  PlayCircle,
} from "lucide-react";

import {
  MAWSOUQ_PROJECTS,
  MAWSOUQ_YOUTUBE_CHANNEL,
  TESTIMONIAL_VIDEOS,
} from "@/lib/mawsouqProjects";

import {
  clusters,
  editorialAuthor,
  getClusterBySlug,
  getExistingLink,
  getSiblings,
  pillar,
} from "./villa-finishing-data";

const SITE_URL = "https://mawsouq.com";
const UPDATED_DATE = "2026-10-07";
const UPDATED_DATE_AR = "7 أكتوبر 2026";
const WHATSAPP_PHONE = "966598061334";

function absoluteUrl(path) {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function pageUrl(slug) {
  return `${SITE_URL}/${encodeURIComponent(slug)}/`;
}

function whatsappUrl(article) {
  const text = [
    "مرحبًا موسوق،",
    `قرأت دليل: ${article.title}`,
    "وأريد مناقشة تشطيب مشروعي.",
    "المدينة: ___",
    "نوع العقار: ___",
    "المساحة التقريبية: ___",
    "مرحلة المشروع الحالية: ___",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function buildVillaFinishingMetadata(slug) {
  const article = slug === pillar.slug ? pillar : getClusterBySlug(slug);
  if (!article) return {};

  const canonical = pageUrl(article.slug);
  const ogImage = absoluteUrl(article.hero);

  return {
    title: article.metaTitle,
    description: article.description,
    keywords: [
      article.primaryKeyword,
      `${article.primaryKeyword} في السعودية`,
      "تشطيبات فلل",
      "تشطيبات السعودية",
      "تشطيب منازل",
      "تشطيب داخلي",
      "تشطيب واجهات",
    ],
    authors: [{ name: editorialAuthor.name, url: absoluteUrl(editorialAuthor.url) }],
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.description,
      url: canonical,
      siteName: "موسوق",
      locale: "ar_SA",
      publishedTime: `${UPDATED_DATE}T09:00:00+03:00`,
      modifiedTime: `${UPDATED_DATE}T09:00:00+03:00`,
      authors: [editorialAuthor.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: [ogImage],
    },
  };
}

function getRelatedExisting(article) {
  return (article.relatedExisting || [])
    .map((key) => getExistingLink(key))
    .filter(Boolean);
}

function getRelatedCluster(article) {
  if (article.slug === pillar.slug) return clusters;
  return getSiblings(article.slug, 3);
}

function getProjects(article) {
  const wanted = new Set(article.projects || []);
  return MAWSOUQ_PROJECTS.filter((project) => wanted.has(project.slug));
}

function getTestimonials(article) {
  const wanted = new Set(article.testimonials || []);
  return TESTIMONIAL_VIDEOS.filter((video) => wanted.has(video.id));
}

function ArticleImage({ image, priority = false }) {
  if (!image) return null;

  return (
    <figure className="my-9 overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] shadow-sm">
      <div className="relative aspect-[1200/630] overflow-hidden bg-[#071321]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="px-5 py-4 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function WhatsAppButton({ article, children = "اطلب مناقشة مشروعك", className = "" }) {
  return (
    <a
      href={whatsappUrl(article)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_16px_38px_rgba(37,211,102,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(37,211,102,.32)] ${className}`}
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

function InlineLink({ item }) {
  if (!item) return null;
  return (
    <Link
      href={item.href}
      className="font-black text-[color:var(--brand)] underline decoration-[color:var(--brand)]/25 underline-offset-4 transition hover:decoration-[color:var(--brand)]"
    >
      {item.anchor || item.title}
    </Link>
  );
}

function SectionLinks({ keys = [] }) {
  const links = keys
    .map((key) => {
      if (key === pillar.slug) return pillar;
      return getClusterBySlug(key) || getExistingLink(key);
    })
    .filter(Boolean);

  if (!links.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)] transition hover:-translate-y-0.5 hover:border-[color:var(--brand)]"
        >
          {link.anchor || link.title}
        </Link>
      ))}
    </div>
  );
}

function JsonLd({ article }) {
  const canonical = pageUrl(article.slug);
  const faqs = article.faqs || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        headline: article.title,
        description: article.description,
        image: {
          "@type": "ImageObject",
          url: absoluteUrl(article.hero),
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Organization",
          name: editorialAuthor.name,
          url: absoluteUrl(editorialAuthor.url),
        },
        publisher: {
          "@type": "Organization",
          name: "موسوق",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/mawsouq-logo.png`,
          },
        },
        datePublished: `${UPDATED_DATE}T09:00:00+03:00`,
        dateModified: `${UPDATED_DATE}T09:00:00+03:00`,
        inLanguage: "ar-SA",
        articleSection: "التشطيبات والفلل",
        keywords: article.primaryKeyword,
        ...(article.slug !== pillar.slug
          ? {
              isPartOf: {
                "@type": "BlogPosting",
                "@id": `${pageUrl(pillar.slug)}#article`,
                name: pillar.title,
                url: pageUrl(pillar.slug),
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement:
          article.slug === pillar.slug
            ? [
                { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
                { "@type": "ListItem", position: 3, name: article.primaryKeyword, item: canonical },
              ]
            : [
                { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
                { "@type": "ListItem", position: 3, name: pillar.primaryKeyword, item: pageUrl(pillar.slug) },
                { "@type": "ListItem", position: 4, name: article.primaryKeyword, item: canonical },
              ],
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${canonical}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export default function VillaFinishingBlogPage({ slug }) {
  const article = slug === pillar.slug ? pillar : getClusterBySlug(slug);
  if (!article) return null;

  const relatedExisting = getRelatedExisting(article);
  const relatedCluster = getRelatedCluster(article);
  const projects = getProjects(article);
  const testimonials = getTestimonials(article);
  const toc = [
    { id: "summary", label: "ملخص سريع" },
    ...article.sections.map((section) => ({ id: section.id, label: section.title })),
    { id: "projects", label: "أعمال موسوق" },
    { id: "testimonials", label: "آراء العملاء" },
    { id: "related", label: "مقالات مرتبطة" },
    { id: "faq", label: "الأسئلة الشائعة" },
  ];

  return (
    <main dir="rtl" className="relative isolate min-h-screen bg-[color:var(--page)] pb-24 text-[color:var(--ink)]">
      <JsonLd article={article} />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,.14),transparent_30%),linear-gradient(180deg,var(--surface-2),var(--page)_34%)]" />

      <section className="pt-[calc(var(--nav-height)+24px)]">
        <div className="mx-auto w-[min(100%-24px,1600px)] overflow-hidden rounded-[36px] border border-[color:var(--hairline-strong)] bg-[#071321] shadow-[var(--card-shadow)] sm:w-[min(100%-32px,1600px)]">
          <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px]">
            <Image
              src={article.hero}
              alt={article.heroAlt}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,33,.18),rgba(7,19,33,.66)_55%,rgba(7,19,33,.92))]" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071321] to-transparent" />

            <div className="relative z-10 flex min-h-[520px] items-end p-5 sm:min-h-[580px] sm:p-8 lg:min-h-[620px] lg:p-12">
              <div className="max-w-[920px] text-right text-white">
                <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-white/70">
                  <Link href="/" className="hover:text-white">الرئيسية</Link>
                  <span>/</span>
                  <Link href="/المدونات/" className="hover:text-white">المدونات</Link>
                  <span>/</span>
                  {article.slug !== pillar.slug ? (
                    <>
                      <Link href={pillar.href} className="hover:text-white">تشطيب فلل</Link>
                      <span>/</span>
                    </>
                  ) : null}
                  <span className="text-cyan-200">{article.primaryKeyword}</span>
                </nav>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-cyan-100 backdrop-blur-md">
                  <BadgeCheck size={16} /> {article.eyebrow}
                </span>

                <h1 className="mt-5 text-4xl font-black leading-[1.18] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                  {article.title}
                </h1>

                <p className="mt-5 max-w-[850px] text-base font-bold leading-8 text-white/82 sm:text-lg sm:leading-9">
                  {article.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold text-white/66">
                  <span>إعداد: {editorialAuthor.name}</span>
                  <span>آخر تحديث: {UPDATED_DATE_AR}</span>
                  <span>السوق المستهدف: السعودية</span>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton article={article}>أرسل تفاصيل مشروعك</WhatsAppButton>
                  <a href="#summary" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-black text-white backdrop-blur transition hover:bg-white/15">
                    ابدأ بالدليل
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 grid w-[min(100%-32px,1420px)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
        <article className="min-w-0 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] sm:p-7 lg:p-10">
          <section id="summary" className="scroll-mt-32">
            <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 sm:p-8">
              <span className="text-xs font-black text-[color:var(--brand)]">TL;DR</span>
              <h2 className="mt-2 text-3xl font-black leading-tight">ملخص سريع</h2>
              <div className="mt-6 grid gap-3">
                {article.summary.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[color:var(--surface)] p-4">
                    <CheckCircle2 size={20} className="mt-1 shrink-0 text-[color:var(--brand)]" />
                    <p className="m-0 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {article.slug !== pillar.slug ? (
              <p className="mt-7 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                هذا المقال جزء من كلاستر موسوق عن التشطيبات. للعودة إلى النظرة الشاملة راجع <InlineLink item={pillar} />، ثم استخدم هذه الصفحة للنية الأكثر تخصصًا حتى لا نكرر نفس المحتوى في أكثر من URL.
              </p>
            ) : null}
          </section>

          {article.sections.map((section) => {
            const image = Number.isInteger(section.imageIndex) ? article.images[section.imageIndex] : null;
            return (
              <section key={section.id} id={section.id} className="mt-14 scroll-mt-32">
                <h2 className="text-3xl font-black leading-tight tracking-[-.025em] sm:text-4xl">{section.title}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-base font-semibold leading-9 text-[color:var(--ink-muted)] sm:text-[17px]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
                        <CheckCircle2 size={19} className="mt-1 shrink-0 text-[color:var(--brand)]" />
                        <span className="text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{bullet}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <SectionLinks keys={section.links} />
                {image ? <ArticleImage image={image} /> : null}
              </section>
            );
          })}

          <section className="mt-14 overflow-hidden rounded-[32px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-black text-cyan-200">CTA تجاري بدون إفساد نية المقال</span>
                <h2 className="mt-3 text-3xl font-black leading-tight">حوّل المعلومات إلى Scope واضح لمشروعك</h2>
                <p className="mt-3 max-w-[780px] text-base font-semibold leading-8 text-white/75">
                  أرسل المدينة، نوع العقار، المساحة والمرحلة الحالية. سنبدأ من احتياج المشروع بدل إعطائك رقمًا عامًا أو اقتراحًا غير مرتبط بحالتك.
                </p>
              </div>
              <WhatsAppButton article={article} className="w-full lg:w-auto">ابدأ على واتساب</WhatsAppButton>
            </div>
          </section>

          <section id="projects" className="mt-16 scroll-mt-32">
            <span className="text-xs font-black text-[color:var(--brand)]">Proof of work</span>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">أعمال موسوق الحقيقية المرتبطة بالفلل</h2>
            <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
              نعرض هنا صفحات مشاريع منشورة داخل موسوق ومبنية على أعمال موثقة على القناة الرسمية، بدون اختراع مساحات أو تكاليف أو تفاصيل عميل غير منشورة.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <Link key={project.slug} href={project.href} className="group overflow-hidden rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] transition hover:-translate-y-1 hover:border-[color:var(--brand)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#071321]">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width:768px) 100vw, 420px" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#071321]/75 to-transparent" />
                    <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black text-[#0b5bb8]">{project.location}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black leading-7">{project.shortTitle}</h3>
                    <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{project.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">شاهد دراسة المشروع <ArrowLeft size={16} /></span>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/مشاريعنا/" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
              استعرض كل مشاريع موسوق <ArrowLeft size={16} />
            </Link>
          </section>

          <section id="testimonials" className="mt-16 scroll-mt-32">
            <span className="text-xs font-black text-[color:var(--brand)]">YouTube testimonials</span>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">آراء عملاء منشورة على قناة موسوق الرسمية</h2>
            <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
              بدل كتابة شهادات تسويقية غير موثقة، نعرض فيديوهات الآراء المنشورة فعليًا على قناة موسوق. يمكنك تشغيل الفيديو ومشاهدة التجربة من المصدر.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {testimonials.map((video) => (
                <article key={video.id} className="overflow-hidden rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)]">
                  <div className="aspect-video bg-[#071321]">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.label}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center gap-2 p-4 text-sm font-black text-[color:var(--ink)]">
                    <PlayCircle size={18} className="text-red-600" /> {video.label}
                  </div>
                </article>
              ))}
            </div>

            <a href={MAWSOUQ_YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
              قناة موسوق الرسمية على YouTube <ExternalLink size={15} />
            </a>
          </section>

          <section id="related" className="mt-16 scroll-mt-32">
            <span className="text-xs font-black text-[color:var(--brand)]">Internal linking hub</span>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">أكمل القراءة بدون تكرار نفس نية البحث</h2>

            {relatedCluster.length ? (
              <div className="mt-7">
                <h3 className="text-xl font-black">ضمن كلاستر تشطيب الفلل</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {relatedCluster.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--brand)]">
                      <strong className="block text-lg font-black leading-7">{item.title}</strong>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">{item.anchor} <ArrowLeft size={15} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {relatedExisting.length ? (
              <div className="mt-9">
                <h3 className="text-xl font-black">مقالات موسوق الحالية المرتبطة</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedExisting.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-sm transition hover:border-[color:var(--brand)]">
                      <strong className="block text-base font-black leading-7">{item.anchor || item.title}</strong>
                      <span className="mt-2 block text-sm font-semibold leading-6 text-[color:var(--ink-muted)]">{item.note}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <section id="faq" className="mt-16 scroll-mt-32">
            <span className="text-xs font-black text-[color:var(--brand)]">FAQ</span>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">أسئلة شائعة</h2>
            <div className="mt-6 space-y-3">
              {article.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
                  <summary className="cursor-pointer list-none text-lg font-black leading-8 marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="text-[color:var(--brand)] transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[32px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><Calculator size={21} /></div>
              <div>
                <h2 className="text-2xl font-black">ملاحظة تحريرية</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                  أعد هذا الدليل {editorialAuthor.name}. هدفه تنظيم قرار التشطيب وربط المستخدم بالمقالات المتخصصة والمشاريع الموثقة. أي سعر أو مدة تنفيذ فعلية يجب أن تعتمد على نطاق المشروع والمخططات والموقع والعروض الحالية، وليس على رقم عام داخل مقال.
                </p>
              </div>
            </div>
          </section>
        </article>

        <aside className="sticky top-[calc(var(--nav-height)+24px)] hidden self-start lg:block">
          <div className="space-y-4">
            <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <div className="grid size-11 place-items-center rounded-2xl bg-[#25D366] text-white"><MessageCircle size={20} /></div>
              <h2 className="mt-4 text-xl font-black">عندك مشروع فعلي؟</h2>
              <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">أرسل المدينة والمساحة والمرحلة الحالية بدل الاعتماد على تقدير عام.</p>
              <WhatsAppButton article={article} className="mt-4 w-full">واتساب مباشر</WhatsAppButton>
            </div>

            <nav aria-label="محتويات المقال" className="max-h-[56vh] overflow-y-auto rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <h2 className="text-lg font-black">محتويات المقال</h2>
              <div className="mt-3 space-y-1">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block rounded-xl px-3 py-2 text-sm font-bold leading-6 text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]">
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <nav aria-label="شبكة مقالات تشطيب الفلل" className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <span className="text-xs font-black text-[color:var(--brand)]">TOPIC CLUSTER</span>
              <h2 className="mt-2 text-lg font-black">أدلة تشطيب الفلل</h2>
              <div className="mt-3 space-y-1">
                <Link href={pillar.href} className="block rounded-xl px-3 py-2 text-sm font-black text-[color:var(--brand)] hover:bg-[color:var(--surface-2)]">
                  {pillar.anchor}
                </Link>
                {clusters.map((cluster) => (
                  <Link key={cluster.slug} href={cluster.href} className="block rounded-xl px-3 py-2 text-sm font-bold leading-6 text-[color:var(--ink-muted)] hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]">
                    {cluster.anchor}
                  </Link>
                ))}
              </div>
            </nav>

            {article.slug !== pillar.slug ? (
              <Link href={pillar.href} className="block rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] transition hover:border-[color:var(--brand)]">
                <span className="text-xs font-black text-[color:var(--brand)]">PILLAR</span>
                <strong className="mt-2 block text-lg font-black leading-7">دليل تشطيب الفلل الكامل</strong>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">العودة للمحور <ArrowLeft size={15} /></span>
              </Link>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}
