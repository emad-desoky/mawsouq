import Image from "next/image";
import Link from "next/link";
import {
  existingStrongBlogs,
  futureClusterBlogs,
  serviceCards,
} from "./clusters";

export const revalidate = 86400;

const slug = "افضل-شركة-تشطيبات-في-السعودية";
const pageUrl = `https://mawsouq.com/${encodeURIComponent(slug)}/`;

const pageTitle = "أفضل شركة تشطيبات في السعودية 2026 | دليل الاختيار";
const pageDescription =
  "كيف تختار أفضل شركة تشطيبات في السعودية؟ دليل عملي لمقارنة الشركات، البنود، الأسعار، العقود، وضمان جودة التشطيب قبل التعاقد.";

const publishedTime = "2026-07-08T12:00:00+03:00";
const modifiedTime = "2026-07-08T12:00:00+03:00";

const whatsappUrl =
  "https://wa.me/201223328270?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D9%81%D9%8A%20%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%AA%D8%B4%D8%B7%D9%8A%D8%A8%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9";

const heroImage = "/best-company1.png";

const contentImages = [
  {
    src: "/best-company3.png",
    alt: "شركة تشطيبات داخلية في السعودية تنفذ غرفة معيشة حديثة",
    caption: "التشطيب الجيد يبدأ من وضوح التصميم والمواصفات قبل اختيار المواد.",
  },
  {
    src: "/best-company2.png",
    alt: "تشطيب حمام وسيراميك ضمن أعمال شركة تشطيبات في السعودية",
    caption:
      "الحمامات والمطابخ من أكثر المناطق التي تحتاج تدقيقًا في العزل والسباكة.",
  },
  {
    src: "/best-company1.png",
    alt: "تشطيب فيلا حديثة في السعودية",
    caption:
      "في تشطيب الفلل، التنسيق بين الواجهات والداخل والأنظمة مهم قبل التنفيذ.",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
    alt: "مراجعة عقد وعرض سعر شركة تشطيبات",
    caption:
      "لا تقارن الشركات بالسعر فقط؛ قارن البنود والمواصفات وجدول التسليم.",
  },
];

const publishedExistingBlogs = existingStrongBlogs.filter(
  (post) => post.isLive === true,
);

const publishedFutureClusterBlogs = futureClusterBlogs.filter(
  (post) => post.isLive === true,
);

const tocItems = [
  { id: "summary", label: "ملخص سريع" },
  { id: "why", label: "لماذا اختيار الشركة مهم؟" },
  { id: "criteria", label: "معايير اختيار الشركة" },
  { id: "services", label: "الخدمات" },
  { id: "compare", label: "جدول مقارنة الشركات" },
  { id: "quote", label: "بنود عرض السعر" },
  { id: "process", label: "خطوات التعاقد" },
  { id: "mistakes", label: "أخطاء شائعة" },
  { id: "existing-links", label: "مقالات مرتبطة" },
  ...(publishedFutureClusterBlogs.length > 0
    ? [{ id: "new-clusters", label: "مقالات التشطيب" }]
    : []),
  { id: "faq", label: "الأسئلة الشائعة" },
];

const faqs = [
  {
    question: "كيف أختار أفضل شركة تشطيبات في السعودية؟",
    answer:
      "اختر الشركة بناءً على وضوح عرض السعر، وجود عقد مكتوب، خبرة الفريق، جودة المواد، ترتيب مراحل التنفيذ، وطريقة التسليم. لا تعتمد على السعر فقط، لأن العرض الأرخص قد يستبعد بنودًا مهمة مثل العزل، التأسيسات، أو التشطيبات النهائية.",
  },
  {
    question: "هل الأفضل شركة تشطيبات أم مقاول منفرد؟",
    answer:
      "الشركة تكون أفضل غالبًا عندما تحتاج إدارة متكاملة للمشروع وتنسيق بين الكهرباء والسباكة والجبس والدهانات والأرضيات. المقاول المنفرد قد يكون مناسبًا لأعمال صغيرة، لكن المشاريع الكبيرة تحتاج متابعة وبنود واضحة ومسؤولية واحدة.",
  },
  {
    question: "ما أهم بند في عقد التشطيبات؟",
    answer:
      "أهم البنود هي نطاق العمل، مواصفات المواد، جدول الدفعات، مدة التنفيذ، آلية التعديل، شروط الاستلام، وضمان إصلاح العيوب. يجب أن يكون كل بند مكتوبًا بوضوح حتى لا تتحول الاختلافات إلى تكلفة إضافية لاحقًا.",
  },
  {
    question: "هل يجب وجود تصميم داخلي قبل اختيار شركة التشطيبات؟",
    answer:
      "وجود تصميم داخلي أو تصور واضح يساعد الشركة على تسعير المشروع بدقة، خصوصًا في الإضاءة، الجبس، الأرضيات، الألوان، الأثاث، وتوزيع الكهرباء. بدون تصميم واضح، تكون العروض عامة وقابلة للتغيير أثناء التنفيذ.",
  },
  {
    question: "ما الفرق بين تشطيب اقتصادي وتشطيب فاخر؟",
    answer:
      "الفرق يكون في جودة المواد، تفاصيل التنفيذ، مستوى الأرضيات، الإضاءة، الأبواب، الشبابيك، الجبس، الدهانات، والأنظمة الإضافية. التشطيب الفاخر لا يعني فقط مواد أغلى، بل يحتاج تنسيق تصميم وتنفيذ أدق.",
  },
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "افضل شركة تشطيبات في السعودية",
    "شركة تشطيبات في السعودية",
    "شركات تشطيب منازل",
    "شركة تشطيب فلل",
    "تشطيب شقق السعودية",
    "تشطيب فلل السعودية",
    "مقاول تشطيبات",
    "شركة ديكور وتشطيبات",
    "تشطيب تسليم مفتاح",
  ],
  alternates: {
    canonical: pageUrl,
  },
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
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    publishedTime,
    modifiedTime,
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "أفضل شركة تشطيبات في السعودية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mb-7">
      {eyebrow ? (
        <span className="mb-3 inline-flex rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-3)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
          {eyebrow}
        </span>
      ) : null}

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

function WhatsAppButton({ children, className = "" }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#25D366] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(37,211,102,0.25)] transition duration-300 hover:-translate-y-1 ${className}`}
      aria-label="تواصل عبر واتساب لاختيار شركة تشطيبات"
    >
      {children}
    </a>
  );
}

function MiniCta({ title, text, button = "اسألنا على واتساب" }) {
  return (
    <div className="my-9 rounded-[30px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,var(--surface-2),var(--surface))] p-6 md:p-7">
      <h3 className="m-0 text-2xl font-black leading-tight text-[color:var(--ink)]">
        {title}
      </h3>
      <p className="mt-3 text-base font-bold leading-8 text-[color:var(--ink-muted)]">
        {text}
      </p>
      <div className="mt-5">
        <WhatsAppButton>{button}</WhatsAppButton>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  if (!post?.isLive) return null;

  return (
    <Link
      href={post.href}
      className="group overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[var(--card-shadow)]"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/70 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[color:var(--brand)]">
          {post.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black leading-tight text-[color:var(--ink)]">
          {post.title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex text-sm font-black text-[color:var(--brand)]">
          {post.anchor || "اقرأ المقال"} ←
        </span>
      </div>
    </Link>
  );
}

export default function BestFinishingCompanySaudiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        headline: "أفضل شركة تشطيبات في السعودية: كيف تختار قبل التعاقد؟",
        description: pageDescription,
        image: {
          "@type": "ImageObject",
          url: heroImage,
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
          url: "https://mawsouq.com",
          logo: {
            "@type": "ImageObject",
            url: "https://mawsouq.com/mawsouq-logo.png",
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime,
        inLanguage: "ar-SA",
        articleSection: "التشطيبات والديكور",
        keywords:
          "افضل شركة تشطيبات في السعودية, شركة تشطيبات في السعودية, تشطيب فلل, تشطيب شقق, مقاول تشطيبات, تشطيب تسليم مفتاح",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "مساعدة اختيار شركة تشطيبات في السعودية",
        description:
          "محتوى إرشادي يساعد أصحاب المنازل والفلل على تقييم شركات التشطيبات ومقارنة العروض قبل التعاقد.",
        provider: {
          "@type": "Organization",
          name: "موسوق",
          url: "https://mawsouq.com",
          telephone: "+201223328270",
        },
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
        },
        serviceType: "تشطيبات داخلية وتشطيب فلل ومنازل",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            item: "https://mawsouq.com/المدونات/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "أفضل شركة تشطيبات في السعودية",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,0.16),transparent_34%),radial-gradient(circle_at_8%_36%,rgba(11,91,184,0.08),transparent_30%),linear-gradient(180deg,var(--surface-2),var(--page)_42%)]" />

      <section className="pt-[calc(var(--nav-height)+28px)]">
        <div className="mx-auto grid w-[min(100%-32px,1720px)] gap-8 overflow-hidden rounded-[40px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8 xl:p-10">
          <div className="flex flex-col justify-center p-3 text-right md:p-6">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold text-[color:var(--ink-muted)]"
            >
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <Link href="/المدونات/">المدونات</Link>
              <span>/</span>
              <span className="text-[color:var(--brand)]">
                أفضل شركة تشطيبات
              </span>
            </nav>

            <div className="mb-5 inline-flex w-max max-w-full items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-bright)]" />
              دليل تجاري لاختيار شركة التشطيب قبل التعاقد
            </div>

            <h1 className="max-w-[820px] text-4xl font-black leading-[1.12] tracking-[-0.055em] text-[color:var(--ink)] sm:text-3xl lg:text-4xl">
              أفضل شركة تشطيبات في السعودية: كيف تختار شركة موثوقة قبل التعاقد؟
            </h1>

            <p className="mt-6 max-w-[780px] text-lg font-semibold leading-9 text-[color:var(--ink-muted)]">
              اختيار <strong>أفضل شركة تشطيبات في السعودية</strong> لا يعني
              البحث عن أرخص سعر فقط. الأهم أن تعرف كيف تقارن عرض السعر، مواد
              التشطيب، مدة التنفيذ، بنود العقد، وطريقة الاستلام حتى لا تدفع
              مرتين على نفس العمل.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton>اسأل عن أفضل حل لتشطيب مشروعك</WhatsAppButton>
              <a
                href="#criteria"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] px-7 text-sm font-black text-[color:var(--ink)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
              >
                شاهد معايير الاختيار
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["عقد واضح", "قبل الدفع"],
                ["بنود مفصلة", "قبل المقارنة"],
                ["تسليم منظم", "قبل الاستلام"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <strong className="block text-2xl font-black text-[color:var(--ink)]">
                    {value}
                  </strong>
                  <span className="mt-1 block text-sm font-bold text-[color:var(--ink-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm font-bold text-[color:var(--ink-faint)]">
              تاريخ النشر: 8 يوليو 2026 — آخر تحديث: 8 يوليو 2026
            </p>
          </div>

          <div className="relative  overflow-hidden rounded-[34px] rounded-2xl flex items-center justify-center  p-5 md:p-6 lg:p-8">
            <Image
              src={heroImage}
              alt="أفضل شركة تشطيبات في السعودية"
              height={950}
              width={950}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 680px"
              className="object-contain  rounded-2xl"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 grid w-[min(100%-32px,1420px)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] md:p-8 lg:p-10">
          <section id="summary" className="scroll-mt-32">
            <SectionTitle
              eyebrow="TL;DR"
              title="ملخص سريع: ما معنى أفضل شركة تشطيبات؟"
            >
              أفضل شركة ليست الأرخص دائمًا. الأفضل هي التي تقدم نطاق عمل واضح،
              مواد محددة، عقدًا مكتوبًا، جدول تنفيذ، ومسؤولية واضحة عند التسليم.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "لا تقارن عرضين إلا إذا كانا لنفس البنود والمواصفات.",
                "العقد يجب أن يوضح المواد، المصنعية، مدة التنفيذ، وجدول الدفعات.",
                "الشركة الجيدة تراجع المخططات قبل التسعير ولا تعطي رقمًا عامًا فقط.",
                "تأكد من بنود الكهرباء والسباكة والعزل قبل الدهانات والأرضيات.",
                "التصميم الداخلي المبكر يقلل التعديلات أثناء التنفيذ.",
                "واتساب أو مكالمة قصيرة قد تكشف هل الشركة منظمة أم مجرد منفذ عشوائي.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 text-base font-bold leading-8 text-[color:var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="why" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Search Intent"
              title="لماذا اختيار شركة التشطيبات قرار حساس؟"
            >
              مرحلة التشطيب هي المرحلة التي يظهر فيها شكل البيت النهائي، لكنها
              أيضًا المرحلة التي تظهر فيها أغلب الخلافات إذا لم يكن الاتفاق
              واضحًا.
            </SectionTitle>

            <p className="text-lg font-semibold leading-10 text-[color:var(--ink-muted)]">
              عند البحث عن <strong>أفضل شركة تشطيبات في السعودية</strong> فأنت
              غالبًا لا تريد معلومات عامة فقط. أنت في مرحلة مقارنة واختيار: لديك
              شقة، فيلا، مكتب، أو مشروع تجاري، وتريد جهة تنفذ بشكل منظم بدون
              مفاجآت في السعر أو الجودة.
            </p>

            <p className="mt-5 text-lg font-semibold leading-10 text-[color:var(--ink-muted)]">
              المشكلة أن كثيرًا من العروض تبدو متشابهة من الخارج، لكنها تختلف في
              الداخل. عرض يشمل مواد تأسيس الكهرباء والسباكة ليس مثل عرض مصنعية
              فقط. عرض يحدد نوع الدهان، سماكة الجبس، نوع الأرضيات، وطريقة العزل
              ليس مثل عرض مكتوب في سطر واحد.
            </p>

            <div className="my-8 overflow-hidden rounded-[30px] border border-[color:var(--hairline)]">
              <Image
                src={contentImages[0].src}
                alt={contentImages[0].alt}
                width={1200}
                height={720}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="bg-[color:var(--surface-2)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                {contentImages[0].caption}
              </p>
            </div>

            <MiniCta
              title="عندك عرض سعر ومش متأكد منه؟"
              text="أرسل لنا البنود على واتساب وسنساعدك تعرف الأسئلة المهمة قبل الموافقة."
              button="راجع عرض التشطيبات"
            />
          </section>

          <section id="criteria" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Decision Framework"
              title="معايير اختيار أفضل شركة تشطيبات في السعودية"
            >
              استخدم هذه المعايير قبل توقيع العقد، وليس بعد ظهور المشكلة.
            </SectionTitle>

            <div className="grid gap-5">
              {[
                {
                  title: "1. وضوح نطاق العمل",
                  text: "يجب أن يوضح العرض ما يشمله التشطيب: كهرباء، سباكة، عزل، جبس، دهانات، أرضيات، أبواب، شبابيك، إضاءة، تنظيف، وتسليم. أي بند غير مكتوب قد يتحول إلى تكلفة إضافية.",
                },
                {
                  title: "2. تفاصيل المواد والمواصفات",
                  text: "لا يكفي أن يقول العرض: دهان ممتاز أو جبس جيد. يجب أن تكون المواصفات واضحة قدر الإمكان، خصوصًا في الدهانات، الجبس بورد، الأرضيات، السيراميك، العزل، والإكسسوارات.",
                },
                {
                  title: "3. جدول زمني واقعي",
                  text: "الشركة المنظمة تشرح ترتيب المراحل، من التكسير والتأسيس إلى الجبس والدهان والأرضيات والتسليم. الجدول غير الواقعي قد يعني استعجال أو ضعف تنسيق.",
                },
                {
                  title: "4. جدول دفعات مرتبط بالمراحل",
                  text: "لا تدفع معظم قيمة المشروع في البداية. الأفضل أن ترتبط الدفعات بمراحل واضحة مثل التأسيس، إغلاق الجبس، أول وجه دهان، الأرضيات، والتسليم.",
                },
                {
                  title: "5. مسؤولية واحدة للتنسيق",
                  text: "في التشطيبات، الخلاف يحدث كثيرًا بين الكهربائي والسباك وفني الجبس والدهان. الشركة الجيدة تدير التنسيق ولا تترك العميل يطارد كل فني وحده.",
                },
                {
                  title: "6. طريقة استلام وفحص",
                  text: "قبل التسليم يجب فحص الكهرباء، السباكة، الميل، العزل، الدهانات، الأبواب، التشطيبات النهائية، والتنظيف. وجود قائمة فحص مكتوبة يقلل المشاكل.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6"
                >
                  <h3 className="text-2xl font-black text-[color:var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg font-semibold leading-10 text-[color:var(--ink-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Services"
              title="ما الخدمات التي يجب أن تقدمها شركة التشطيبات؟"
            >
              الشركات تختلف حسب نوع المشروع. المهم أن يكون نطاق العمل محددًا قبل
              بدء التنفيذ.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {serviceCards.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6"
                >
                  <h3 className="text-xl font-black text-[color:var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-lg font-semibold leading-10 text-[color:var(--ink-muted)]">
              إذا كان مشروعك فيلا أو منزل كامل، فالأفضل أن تتعامل مع جهة تفهم
              العلاقة بين التصميم، الكهرباء، السباكة، التكييف، الواجهات،
              والديكور. أما إذا كان العمل غرفة أو جزءًا بسيطًا، فقد يكفي فني
              متخصص أو مقاول صغير بشرط وجود اتفاق واضح.
            </p>

            <div className="my-8 overflow-hidden rounded-[30px] border border-[color:var(--hairline)]">
              <Image
                src={contentImages[1].src}
                alt={contentImages[1].alt}
                width={1200}
                height={720}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="bg-[color:var(--surface-2)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                {contentImages[1].caption}
              </p>
            </div>
          </section>

          <section id="compare" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Comparison"
              title="جدول مقارنة بين شركات التشطيبات"
            >
              هذا الجدول يساعدك على مقارنة الشركات بطريقة عملية بدل المقارنة
              بالسعر فقط.
            </SectionTitle>

            <div className="overflow-hidden rounded-[28px] border border-[color:var(--hairline)]">
              <table className="w-full border-collapse text-right">
                <thead className="bg-[color:var(--brand)] text-white">
                  <tr>
                    <th className="p-4 text-sm font-black">المعيار</th>
                    <th className="p-4 text-sm font-black">شركة منظمة</th>
                    <th className="p-4 text-sm font-black">عرض خطر</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--hairline)]">
                  {[
                    [
                      "عرض السعر",
                      "مفصل حسب البنود والمواد والمصنعية",
                      "رقم إجمالي بدون تفاصيل",
                    ],
                    [
                      "العقد",
                      "واضح في الدفعات والمدة والاستلام",
                      "اتفاق شفهي أو بنود عامة",
                    ],
                    [
                      "المواد",
                      "محددة بالاسم أو المواصفة أو البديل المقبول",
                      "كلمات عامة مثل ممتاز أو درجة أولى",
                    ],
                    [
                      "التنفيذ",
                      "مراحل مرتبة ومتابعة واضحة",
                      "بدء عشوائي بدون جدول",
                    ],
                    [
                      "التعديلات",
                      "آلية مكتوبة لتسعير أي تعديل",
                      "كل تعديل يتحول لخلاف",
                    ],
                    [
                      "التسليم",
                      "قائمة فحص وملاحظات قبل الإغلاق",
                      "تسليم سريع بدون مراجعة",
                    ],
                  ].map(([criteria, good, risky]) => (
                    <tr key={criteria} className="bg-[color:var(--surface)]">
                      <td className="p-4 text-sm font-black text-[color:var(--ink)]">
                        {criteria}
                      </td>
                      <td className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                        {good}
                      </td>
                      <td className="p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                        {risky}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="quote" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Quote Checklist"
              title="ما البنود التي يجب أن تظهر في عرض سعر التشطيبات؟"
            >
              عرض السعر الجيد ليس صفحة جميلة فقط. هو وثيقة تقلل الخلافات.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "وصف دقيق لكل مساحة سيتم تشطيبها.",
                "بنود الكهرباء والسباكة والعزل قبل الإغلاق.",
                "نوع الجبس أو الأسقف أو القواطع إن وجدت.",
                "نوع الدهانات وعدد الأوجه وطريقة تجهيز السطح.",
                "الأرضيات: سيراميك، رخام، باركيه، أو بدائل أخرى.",
                "الأبواب، الشبابيك، الإكسسوارات، وحدود التوريد.",
                "هل العرض يشمل المواد أم المصنعية فقط؟",
                "جدول الدفعات والمدة وطريقة الاستلام.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 text-base font-bold leading-8 text-[color:var(--ink-muted)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <MiniCta
              title="لا توقع على عرض مختصر جدًا"
              text="العرض المختصر قد يبدو أرخص، لكنه يفتح الباب لبنود إضافية أثناء التنفيذ."
              button="أرسل العرض للمراجعة"
            />
          </section>

          <section id="process" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Process"
              title="خطوات التعاقد مع شركة تشطيبات بشكل صحيح"
            >
              هذه الخطوات مناسبة للشقق، الفلل، المكاتب، والمحلات.
            </SectionTitle>

            <ol className="grid gap-4">
              {[
                "حدد المساحات المطلوب تشطيبها ونوع المشروع: شقة، فيلا، مكتب، أو محل.",
                "جهز المخططات أو صور الموقع أو التصميم الداخلي إن وجد.",
                "اطلب عرضًا مفصلًا وليس رقمًا عامًا.",
                "قارن البنود المتشابهة فقط بين الشركات.",
                "راجع جدول الدفعات والمدة والغرامات والتعديلات.",
                "ابدأ التنفيذ بعد توثيق المواد والمواصفات الأساسية.",
                "استلم كل مرحلة بفحص واضح قبل الانتقال للمرحلة التالية.",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--brand)] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="m-0 text-base font-bold leading-8 text-[color:var(--ink-muted)]">
                    {item}
                  </p>
                </li>
              ))}
            </ol>

            <div className="my-8 overflow-hidden rounded-[30px] border border-[color:var(--hairline)]">
              <Image
                src={contentImages[2].src}
                alt={contentImages[2].alt}
                width={1200}
                height={720}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="bg-[color:var(--surface-2)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                {contentImages[2].caption}
              </p>
            </div>
          </section>

          <section id="mistakes" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Common Mistakes"
              title="أخطاء شائعة عند اختيار شركة تشطيبات"
            >
              تجنب هذه الأخطاء قبل دفع العربون أو بدء التنفيذ.
            </SectionTitle>

            <div className="space-y-4">
              {[
                {
                  title: "اختيار الأرخص بدون مقارنة البنود",
                  text: "قد يكون العرض الأرخص ناقصًا في المواد أو العزل أو التشطيب النهائي. قارن ما يشمله السعر لا الرقم فقط.",
                },
                {
                  title: "بدء العمل بدون تصميم أو تصور واضح",
                  text: "غياب التصور يؤدي إلى تغييرات كثيرة أثناء التنفيذ، وهذا يزيد التكلفة ويؤخر التسليم.",
                },
                {
                  title: "دفع مبلغ كبير في البداية",
                  text: "الدفعات يجب أن ترتبط بمراحل واضحة، وليس بوعد عام أن العمل سينتهي بسرعة.",
                },
                {
                  title: "عدم فحص الكهرباء والسباكة قبل الإغلاق",
                  text: "إغلاق الجدران والأسقف قبل الفحص قد يسبب تكسيرًا لاحقًا عند ظهور عيب.",
                },
                {
                  title: "عدم كتابة آلية التعديلات",
                  text: "أي تعديل يجب أن يكون له سعر وطريقة موافقة واضحة قبل تنفيذه.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6"
                >
                  <h3 className="text-xl font-black text-[color:var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Official References"
              title="مصادر رسمية مفيدة قبل التشطيب والتعاقد"
            >
              روابط رسمية تساعدك على فهم البيئة التنظيمية للبناء والمقاولات في
              السعودية.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="https://sca.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]"
              >
                <h3 className="text-xl font-black text-[color:var(--ink)]">
                  الهيئة السعودية للمقاولين
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                  مرجع رسمي لقطاع المقاولات وتنظيمه في المملكة.
                </p>
              </a>

              <a
                href="https://sbc.gov.sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]"
              >
                <h3 className="text-xl font-black text-[color:var(--ink)]">
                  كود البناء السعودي
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                  مرجع للاشتراطات والمتطلبات المتعلقة بالبناء والتشييد.
                </p>
              </a>

              <a
                href="https://balady.gov.sa/ar/services/%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-%D8%B1%D8%AE%D8%B5%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]"
              >
                <h3 className="text-xl font-black text-[color:var(--ink)]">
                  منصة بلدي
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                  خدمة رسمية مرتبطة بإصدار رخص البناء ومتابعة الطلبات.
                </p>
              </a>
            </div>
          </section>

          <section id="existing-links" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="Internal Linking Hub"
              title="روابط داخلية قوية تساعدك قبل اختيار شركة التشطيبات"
            >
              هذا القسم يتم تغذيته من ملف clusters.js ويعرض فقط المقالات
              المنشورة التي تحمل isLive: true.
            </SectionTitle>

            <div className="grid gap-5 md:grid-cols-2">
              {publishedExistingBlogs.map((post) => (
                <BlogCard post={post} key={post.href} />
              ))}
            </div>
          </section>

          {publishedFutureClusterBlogs.length > 0 ? (
            <section id="new-clusters" className="mt-14 scroll-mt-32">
              <SectionTitle
                eyebrow="Related Cluster Pages"
                title="مقالات متعلقة بالتشطيب"
              >
                هذا القسم يعرض فقط مقالات التشطيب المنشورة من ملف clusters.js
                عندما تكون isLive: true.
              </SectionTitle>

              <div className="grid gap-5 md:grid-cols-2">
                {publishedFutureClusterBlogs.map((post) => (
                  <BlogCard post={post} key={post.href} />
                ))}
              </div>
            </section>
          ) : null}

          <section id="faq" className="mt-14 scroll-mt-32">
            <SectionTitle
              eyebrow="FAQ"
              title="أسئلة شائعة عن أفضل شركة تشطيبات في السعودية"
            >
              إجابات مباشرة تساعدك قبل التواصل مع أي شركة أو مقاول تشطيبات.
            </SectionTitle>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6"
                >
                  <summary className="cursor-pointer text-lg font-black text-[color:var(--ink)]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[34px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-8 text-white md:p-10">
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              تريد اختيار شركة تشطيبات بدون مخاطرة؟
            </h2>
            <p className="mt-4 max-w-[760px] text-lg font-bold leading-9 text-white/78">
              أرسل نوع المشروع، المدينة، المساحة، وهل لديك مخططات أو صور.
              سنساعدك في معرفة البنود التي يجب أن تطلبها قبل التعاقد.
            </p>
            <div className="mt-7">
              <WhatsAppButton>ابدأ عبر واتساب الآن</WhatsAppButton>
            </div>
          </section>
        </article>

        <aside className="sticky top-[calc(var(--nav-height)+28px)] hidden self-start lg:block">
          <div className="space-y-4">
            <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <h2 className="text-xl font-black text-[color:var(--ink)]">
                تواصل قبل التعاقد
              </h2>
              <p className="mt-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                أرسل عرض السعر أو تفاصيل مشروعك، وسنساعدك تعرف البنود الناقصة
                والأسئلة المهمة.
              </p>
              <WhatsAppButton className="mt-4 w-full">
                واتساب مباشر
              </WhatsAppButton>
            </div>

            <nav
              aria-label="محتويات المقال"
              className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]"
            >
              <h2 className="text-xl font-black text-[color:var(--ink)]">
                محتويات الدليل
              </h2>

              <div className="mt-4 space-y-1.5">
                {tocItems.map((item) => (
                  <a
                    href={`#${item.id}`}
                    key={item.id}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-black text-[color:var(--ink-muted)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <h2 className="text-xl font-black text-[color:var(--ink)]">
                مقالات منشورة
              </h2>

              <div className="mt-4 space-y-1.5">
                {publishedExistingBlogs.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-black text-[color:var(--ink-muted)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-3 bottom-3 z-40 rounded-full border border-white/20 bg-[#25D366] p-2 shadow-[0_18px_55px_rgba(0,0,0,0.25)] lg:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] items-center justify-center rounded-full text-sm font-black text-white"
        >
          اسأل عن شركة تشطيبات مناسبة
        </a>
      </div>
    </main>
  );
}
