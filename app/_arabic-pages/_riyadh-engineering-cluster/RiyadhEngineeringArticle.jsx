import Image from "next/image";
import Link from "next/link";
import {
  BLOG_HUB,
  pillar,
  clusters,
  articleUrl,
  pillarUrl,
  getRiyadhSiblings,
  whatsappLink,
} from "./riyadh-engineering-data";

function WhatsAppButton({ article, children, className = "" }) {
  return (
    <a
      href={whatsappLink(article.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#25D366] px-7 text-center text-sm font-black text-white shadow-[0_18px_44px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(37,211,102,0.3)] ${className}`}
      aria-label={`تواصل مع موسوق عبر واتساب بخصوص ${article.primaryKeyword}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({ section }) {
  return (
    <div className="mb-6">
      {section.eyebrow ? (
        <span className="mb-3 inline-flex rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-3)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
          {section.eyebrow}
        </span>
      ) : null}
      <h2 className="m-0 text-3xl font-black leading-[1.25] tracking-[-0.035em] text-[color:var(--ink)] md:text-4xl">
        {section.title}
      </h2>
    </div>
  );
}

function ArticleImage({ media }) {
  if (!media) return null;

  return (
    <figure className="my-9 overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] shadow-sm">
      <div className={`relative flex w-full items-center justify-center ${media.contain ? "p-3 md:p-5" : ""}`}>
        <Image
          src={media.src}
          alt={media.alt}
          width={1200}
          height={720}
          sizes="(max-width: 1024px) 100vw, 900px"
          loading="lazy"
          className={
            media.contain
              ? "h-auto max-h-[660px] w-full rounded-2xl object-contain"
              : "h-auto max-h-[660px] w-full object-cover"
          }
        />
      </div>
      <figcaption className="border-t border-[color:var(--hairline)] px-5 py-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
        {media.caption}
      </figcaption>
    </figure>
  );
}

function ComparisonTable({ table }) {
  if (!table) return null;

  return (
    <div className="my-7 overflow-x-auto rounded-[28px] border border-[color:var(--hairline)]">
      <table className="min-w-[760px] w-full border-collapse text-right">
        <caption className="border-b border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-5 py-4 text-right text-sm font-black text-[color:var(--ink)]">
          {table.caption}
        </caption>
        <thead className="bg-[color:var(--brand)] text-white">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="p-4 text-sm font-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[color:var(--hairline)]">
          {table.rows.map((row) => (
            <tr key={row.join("|")} className="bg-[color:var(--surface)] align-top">
              {row.map((cell, index) => (
                <td
                  key={`${cell}-${index}`}
                  className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"
                >
                  {index === 0 ? (
                    <strong className="text-[color:var(--ink)]">{cell}</strong>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LinkList({ links = [] }) {
  if (!links.length) return null;

  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      {links.map((link) => {
        const classes =
          "group flex min-h-[60px] items-center justify-between gap-4 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-5 py-4 text-sm font-black leading-7 text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]";
        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          );
        }
        return (
          <Link key={link.href} href={link.href} className={classes}>
            <span>{link.label}</span>
            <span aria-hidden="true">←</span>
          </Link>
        );
      })}
    </div>
  );
}

function SectionBody({ section }) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-5 text-lg font-semibold leading-10 text-[color:var(--ink-muted)]"
        >
          {paragraph}
        </p>
      ))}

      {section.bullets?.length ? (
        <ul className="mt-6 grid gap-3">
          {section.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-base font-bold leading-8 text-[color:var(--ink)]"
            >
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--brand-bright)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.checklist?.length ? (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {section.checklist.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)] text-sm font-black text-white">
                ✓
              </span>
              <p className="m-0 text-base font-bold leading-8 text-[color:var(--ink)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {section.steps?.length ? (
        <ol className="mt-6 grid gap-4">
          {section.steps.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[44px_1fr] items-start gap-4 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand)] text-base font-black text-white">
                {index + 1}
              </span>
              <span className="pt-1 text-base font-bold leading-8 text-[color:var(--ink)]">
                {item}
              </span>
            </li>
          ))}
        </ol>
      ) : null}

      <ComparisonTable table={section.table} />
      <LinkList links={section.links} />
    </>
  );
}

function RelatedCard({ article, label = "اقرأ الدليل" }) {
  return (
    <Link
      href={`/${article.slug}/`}
      className="group overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[var(--card-shadow)]"
    >
      <div className="flex aspect-[1200/630] items-center justify-center bg-[color:var(--surface-2)] p-2">
        <Image
          src={article.hero}
          alt={article.heroAlt}
          width={1200}
          height={630}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 440px"
          className="h-full w-full rounded-2xl object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black leading-8 text-[color:var(--ink)]">
          {article.title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
          {article.excerpt}
        </p>
        <span className="mt-4 inline-flex text-sm font-black text-[color:var(--brand)]">
          {label} ←
        </span>
      </div>
    </Link>
  );
}

export default function RiyadhEngineeringArticle({ article }) {
  const isPillar = article.type === "pillar";
  const siblings = isPillar ? clusters : getRiyadhSiblings(article.slug);
  const currentUrl = articleUrl(article);
  const whatsappUrl = whatsappLink(article.whatsappMessage);
  const breadcrumbItems = isPillar
    ? [
        ["الرئيسية", "https://mawsouq.com/"],
        ["المدونات", "https://mawsouq.com/المدونات/"],
        [article.title, currentUrl],
      ]
    : [
        ["الرئيسية", "https://mawsouq.com/"],
        ["المدونات", "https://mawsouq.com/المدونات/"],
        [pillar.title, pillarUrl],
        [article.title, currentUrl],
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${currentUrl}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": currentUrl },
        headline: article.title,
        description: article.description,
        image: {
          "@type": "ImageObject",
          url: `https://mawsouq.com${article.hero}`,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Organization",
          name: "فريق موسوق",
          url: "https://mawsouq.com/عن-الشركة/",
        },
        publisher: {
          "@type": "Organization",
          name: "موسوق",
          url: "https://mawsouq.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://mawsouq.com/mawsouq-logo.png",
          },
        },
        datePublished: `${article.datePublished}T12:00:00+03:00`,
        dateModified: `${article.dateModified}T12:00:00+03:00`,
        inLanguage: "ar-SA",
        articleSection: article.category,
        keywords: article.keywords.join(", "),
        ...(isPillar
          ? {}
          : {
              isPartOf: {
                "@type": "CreativeWorkSeries",
                name: pillar.title,
                url: pillarUrl,
              },
            }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        itemListElement: breadcrumbItems.map(([name, item], index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
          item,
        })),
      },

      {
        "@type": "Service",
        "@id": `${currentUrl}#service`,
        name: article.primaryKeyword,
        serviceType: "تصميم ومراجعة واستشارات هندسية",
        provider: {
          "@type": "Organization",
          name: "موسوق",
          url: "https://mawsouq.com/",
          telephone: "+201223328270",
        },
        areaServed: { "@type": "City", name: "Riyadh" },
        description:
          "خدمات تصميم ومراجعة هندسية رقمية حسب نطاق المشروع. أي اعتماد أو معاملة رسمية تخضع لمتطلبات الجهة المختصة ويجب التحقق من الجهة المؤهلة لتنفيذها.",
      },
    ],
  };

  return (
    <main
      dir="rtl"
      className="relative isolate min-h-screen bg-[color:var(--page)] pb-24 text-[color:var(--ink)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,0.16),transparent_34%),radial-gradient(circle_at_8%_38%,rgba(11,91,184,0.08),transparent_30%),linear-gradient(180deg,var(--surface-2),var(--page)_42%)]" />

      <section className="pt-[calc(var(--nav-height)+28px)]">
        <div className="mx-auto grid w-[min(100%-32px,1720px)] gap-8 overflow-hidden rounded-[40px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] lg:grid-cols-[0.88fr_1.12fr] lg:p-8 xl:p-10">
          <div className="flex flex-col justify-center p-2 text-right md:p-5">
            <nav
              aria-label="مسار التنقل"
              className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-[color:var(--ink-muted)]"
            >
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href={BLOG_HUB}>المدونات</Link>
              {!isPillar ? (
                <>
                  <span>/</span>
                  <Link href={`/${pillar.slug}/`}>دليل مكاتب الرياض</Link>
                </>
              ) : null}
            </nav>

            <div className="mb-5 inline-flex w-max max-w-full items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-bright)]" />
              {isPillar ? "دليل شامل لمشروعك في الرياض" : "دليل متخصص ضمن شبكة مكاتب الرياض"}
            </div>

            <h1 className="max-w-[850px] text-4xl font-black leading-[1.16] tracking-[-0.05em] text-[color:var(--ink)] sm:text-5xl lg:text-[3.65rem]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-[800px] text-lg font-semibold leading-9 text-[color:var(--ink-muted)]">
              {article.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton article={article}>
                أرسل تفاصيل مشروعك على واتساب
              </WhatsAppButton>
              <a
                href="#quick-answer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-7 text-sm font-black text-[color:var(--ink)] transition hover:-translate-y-1 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
              >
                ابدأ بالملخص العملي
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold text-[color:var(--ink-muted)]">
              <div className="flex items-center gap-3 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2">
                <Image
                  src="/mawsouq-logo.png"
                  alt="فريق موسوق"
                  width={34}
                  height={34}
                  className="h-8 w-8 rounded-full object-contain"
                />
                <span>فريق موسوق</span>
              </div>
              <span>{article.readTime}</span>
              <span>آخر تحديث: 10 سبتمبر 2026</span>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-[34px] bg-[color:var(--surface-2)] p-3 md:p-5 lg:p-6">
            <Image
              src={article.hero}
              alt={article.heroAlt}
              width={1200}
              height={630}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 840px"
              className="h-auto w-full rounded-[26px] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 grid w-[min(100%-32px,1460px)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] md:p-8 lg:p-10">
          <section id="quick-answer" className="scroll-mt-32">
            <div className="rounded-[30px] border border-[color:var(--hairline-strong)] bg-[linear-gradient(135deg,var(--surface-2),var(--surface))] p-6 md:p-8">
              <span className="text-xs font-black text-[color:var(--brand)]">
                الإجابة السريعة
              </span>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[color:var(--ink)]">
                أهم ما تحتاج معرفته قبل اتخاذ القرار
              </h2>
              <p className="mt-4 text-lg font-bold leading-10 text-[color:var(--ink-muted)]">
                {article.quickAnswer}
              </p>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {article.takeaways.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)] text-sm font-black text-white">
                    ✓
                  </span>
                  <p className="m-0 text-base font-bold leading-8">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 lg:hidden">
            <h2 className="text-2xl font-black">محتويات الدليل</h2>
            <div className="mt-4 grid gap-2">
              {article.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-black leading-7 text-[color:var(--ink)]"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#faq"
                className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-black"
              >
                الأسئلة الشائعة
              </a>
            </div>
          </section>

          {article.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="mt-14 scroll-mt-32"
            >
              <SectionHeading section={section} />
              <SectionBody section={section} />
              {article.media[index] ? (
                <ArticleImage media={article.media[index]} />
              ) : null}
              {(index === 1 || index === 4) ? (
                <div className="my-9 rounded-[30px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,rgba(47,134,246,0.12),var(--surface))] p-6 md:p-7">
                  <h3 className="text-2xl font-black leading-tight">
                    تريد تحويل هذه النقاط إلى brief واضح لمشروعك؟
                  </h3>
                  <p className="mt-3 text-base font-bold leading-8 text-[color:var(--ink-muted)]">
                    أرسل نوع المشروع والمساحة والمرحلة الحالية. سنبدأ من المطلوب الفعلي بدل سؤال عام عن السعر.
                  </p>
                  <div className="mt-5">
                    <WhatsAppButton article={article}>
                      ابدأ محادثة المشروع
                    </WhatsAppButton>
                  </div>
                </div>
              ) : null}
            </section>
          ))}

          {article.media.slice(article.sections.length).map((media) => (
            <ArticleImage key={media.src} media={media} />
          ))}

          <section id="cluster-guides" className="mt-16 scroll-mt-32">
            <div className="mb-7">
              <span className="mb-3 inline-flex rounded-full bg-[color:var(--surface-3)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                أدلة مرتبطة
              </span>
              <h2 className="text-3xl font-black leading-tight md:text-4xl">
                {isPillar
                  ? "تعمق في كل قرار عبر الأدلة المتخصصة"
                  : "اكمل الصورة من داخل نفس الدليل"}
              </h2>
              {!isPillar ? (
                <p className="mt-4 text-lg font-semibold leading-9 text-[color:var(--ink-muted)]">
                  للعرض الكامل، ابدأ من{" "}
                  <Link
                    href={`/${pillar.slug}/`}
                    className="font-black text-[color:var(--brand)] underline decoration-[color:var(--brand-bright)]/40 underline-offset-4"
                  >
                    أفضل مكتب هندسي في الرياض: دليل الاختيار
                  </Link>
                  .
                </p>
              ) : null}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {(isPillar ? clusters : siblings.slice(0, 3)).map((item) => (
                <RelatedCard key={item.slug} article={item} />
              ))}
            </div>
          </section>

          <section id="existing-guides" className="mt-16 scroll-mt-32">
            <h2 className="text-3xl font-black leading-tight">
              أدلة موسوق المرتبطة بمشروعك
            </h2>
            <LinkList links={article.relatedExisting} />
          </section>

          <section id="faq" className="mt-16 scroll-mt-32">
            <span className="mb-3 inline-flex rounded-full bg-[color:var(--surface-3)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
              أسئلة شائعة
            </span>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              إجابات مباشرة قبل أن تبدأ
            </h2>
            <div className="mt-7 grid gap-4">
              {article.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 open:border-[color:var(--brand)]"
                >
                  <summary className="cursor-pointer list-none text-lg font-black leading-8 text-[color:var(--ink)]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-10">
            <p className="text-sm font-black text-white/70">الخطوة التالية</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
              أرسل تفاصيل مشروعك بدل البدء بتخمينات عامة
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-9 text-white/80">
              اكتب نوع المشروع والمساحة والمرحلة الحالية وما تحتاجه الآن. الرسالة مجهزة مسبقًا لتختصر عليك البداية.
            </p>
            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#25D366] px-8 text-sm font-black text-white transition hover:-translate-y-1"
              >
                تواصل مع موسوق عبر واتساب
              </a>
            </div>
          </section>

          <section className="mt-10 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
            <div className="flex items-start gap-4">
              <Image
                src="/mawsouq-logo.png"
                alt="شعار موسوق"
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-2xl object-contain"
              />
              <div>
                <h2 className="text-xl font-black">عن فريق موسوق</h2>
                <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                  أعد هذا الدليل فريق موسوق لمساعدة أصحاب المشاريع على فهم نطاق التصميم والمراجعة والخدمات الهندسية قبل التعاقد. الأسعار والمتطلبات والاعتمادات قد تختلف حسب نوع المشروع والإجراء، لذلك يجب التحقق من المعلومات المتغيرة والبيانات الميدانية عند الحاجة.
                </p>
                <Link
                  href="/عن-الشركة/"
                  className="mt-3 inline-flex text-sm font-black text-[color:var(--brand)]"
                >
                  تعرف على موسوق ←
                </Link>
              </div>
            </div>
          </section>
        </article>

        <aside className="self-start lg:sticky lg:top-[calc(var(--nav-height)+24px)]">
          <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
            <p className="text-xs font-black text-[color:var(--brand)]">
              محتويات الدليل
            </p>
            <nav className="mt-4 grid max-h-[42vh] gap-1 overflow-y-auto pr-1">
              {article.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-xl px-3 py-2 text-sm font-bold leading-6 text-[color:var(--ink-muted)] transition hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#faq"
                className="rounded-xl px-3 py-2 text-sm font-bold text-[color:var(--ink-muted)] hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
              >
                الأسئلة الشائعة
              </a>
            </nav>

            <div className="my-5 h-px bg-[color:var(--hairline)]" />

            <p className="text-xs font-black text-[color:var(--brand)]">
              شبكة الرياض
            </p>
            <div className="mt-3 grid gap-2">
              {!isPillar ? (
                <Link
                  href={`/${pillar.slug}/`}
                  className="rounded-xl bg-[color:var(--surface-2)] px-3 py-2 text-sm font-black leading-6 text-[color:var(--ink)] hover:text-[color:var(--brand)]"
                >
                  أفضل مكتب هندسي في الرياض
                </Link>
              ) : null}
              {clusters
                .filter((item) => item.slug !== article.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}/`}
                    className="rounded-xl px-3 py-2 text-sm font-bold leading-6 text-[color:var(--ink-muted)] hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    {item.primaryKeyword}
                  </Link>
                ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-5 text-white">
              <p className="text-lg font-black">عندك مشروع في الرياض؟</p>
              <p className="mt-2 text-sm font-semibold leading-7 text-white/75">
                أرسل المساحة والمرحلة والخدمة المطلوبة للحصول على بداية أوضح.
              </p>
              <WhatsAppButton article={article} className="mt-4 w-full px-4">
                واتساب +20 12 23328270
              </WhatsAppButton>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
