import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";

const SITE_URL = "https://mawsouq.com";
const pageUrl = `${SITE_URL}/افضل-مكتب-هندسي-بالدمام/`;
const whatsappMessage =
  "مرحبًا موسوق، لدي مشروع في الدمام وأريد استشارة هندسية. نوع المشروع: ___، مساحة الأرض أو المبنى: ___، والخدمة المطلوبة: ___";
const whatsapp = `https://wa.me/201223328270?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "مكتب هندسي الدمام | تصميم معماري وإنشائي للمشاريع",
  description:
    "تبحث عن مكتب هندسي في الدمام؟ تعرف على معايير الاختيار والخدمات التي تحتاجها قبل التعاقد، وابدأ استشارة تصميم معماري أو إنشائي مع موسوق.",
  keywords: [
    "مكتب هندسي الدمام",
    "أفضل مكتب هندسي بالدمام",
    "مكتب هندسي بالدمام",
    "مكتب هندسي معتمد الدمام",
    "مكتب استشارات هندسية الدمام",
    "تصميم معماري الدمام",
    "تصميم إنشائي الدمام",
  ],
  alternates: { canonical: pageUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "مكتب هندسي في الدمام: دليل الاختيار وبدء مشروعك",
    description:
      "معايير اختيار المكتب الهندسي في الدمام، وما الذي يجب أن يشمله عرض التصميم المعماري والإنشائي قبل التعاقد.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://i.ytimg.com/vi/3CmBsvvEetI/hqdefault.jpg",
        width: 480,
        height: 360,
        alt: "مشروع تصميم معماري منشور على قناة موسوق",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتب هندسي الدمام | دليل الاختيار والخدمات",
    description:
      "ما الذي تبحث عنه في مكتب هندسي بالدمام؟ دليل عملي قبل طلب عرض السعر أو بدء التصميم.",
    images: ["https://i.ytimg.com/vi/3CmBsvvEetI/hqdefault.jpg"],
  },
};

const faqs = [
  {
    question: "كيف أختار أفضل مكتب هندسي بالدمام؟",
    answer:
      "ابدأ بتحديد الخدمة المطلوبة، ثم تحقق من أهلية المكتب لأي إجراء رسمي يخص مشروعك، واطلب نطاق عمل مكتوبًا يوضح المخططات والتعديلات والمدة وطريقة التسليم. قارن العروض على نفس النطاق، وليس على السعر وحده.",
  },
  {
    question: "هل يجب أن يكون المكتب الهندسي معتمدًا في الدمام؟",
    answer:
      "إذا كانت الخدمة مرتبطة بإجراءات رخصة أو اعتماد أو رفع مخططات لجهة رسمية، فيجب التأكد من المتطلبات الحالية للجهة المختصة ومن أهلية المكتب الذي سيتولى الإجراء. راجع منصة بلدي ومتطلبات كود البناء السعودي قبل التعاقد.",
  },
  {
    question: "ما الخدمات التي أطلبها من مكتب هندسي لمشروع في الدمام؟",
    answer:
      "بحسب المشروع قد تحتاج تصميمًا معماريًا، تصميمًا إنشائيًا، مخططات كهرباء وسباكة وتكييف، تطوير واجهات، تنسيق مخططات تنفيذية أو إشرافًا. اطلب قائمة تسليمات واضحة حتى تعرف ما هو مشمول وما يحتاج إلى طرف آخر.",
  },
  {
    question: "هل يمكن بدء تصميم مشروع في الدمام عن بعد؟",
    answer:
      "يمكن بدء مرحلة جمع المتطلبات والتصميم والتنسيق عن بعد إذا توفرت أبعاد الأرض والموقع والاحتياجات والاشتراطات. أي خطوة تتطلب معاينة ميدانية أو إجراء رسمي محلي يجب تنسيقها حسب متطلبات المشروع والجهة المختصة.",
  },
  {
    question: "ماذا أرسل لموسوق قبل طلب استشارة لمشروع في الدمام؟",
    answer:
      "أرسل المدينة والحي إن كان مهمًا، أبعاد الأرض أو مساحة المبنى، نوع المشروع، عدد الأدوار، الخدمة المطلوبة، وأي مخططات أو صور مرجعية لديك. هذه البيانات تجعل أول محادثة أكثر دقة وتقلل الأسئلة العامة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "مكتب هندسي في الدمام: دليل الاختيار وبدء مشروعك",
      description: metadata.description,
      inLanguage: "ar-SA",
      dateModified: "2026-08-26T10:00:00+03:00",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمات التصميم الهندسي للمشاريع في الدمام",
      serviceType: "تصميم معماري وإنشائي وتنسيق خدمات هندسية",
      areaServed: {
        "@type": "City",
        name: "الدمام",
      },
      provider: {
        "@type": "Organization",
        name: "موسوق",
        url: SITE_URL,
        telephone: "+201223328270",
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
        { "@type": "ListItem", position: 3, name: "مكتب هندسي الدمام", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const services = [
  {
    icon: Building2,
    title: "التصميم المعماري",
    text: "توزيع المساحات والواجهات وربط متطلبات الأسرة أو الاستخدام بالمخطط قبل الانتقال للتنفيذ.",
    href: "/التصميم-المعماري/",
  },
  {
    icon: Ruler,
    title: "التصميم الإنشائي",
    text: "تحويل المخطط المعماري إلى نظام إنشائي ومخططات تنفيذية وفق بيانات المشروع والمتطلبات الفنية.",
    href: "/تصميم-انشائي/",
  },
  {
    icon: FileText,
    title: "تنسيق المخططات",
    text: "مراجعة التعارضات بين المعماري والإنشائي والخدمات قبل أن تتحول إلى تعديلات مكلفة أثناء التنفيذ.",
    href: "/تصميم-معماري-عن-بعد/",
  },
  {
    icon: ClipboardCheck,
    title: "تجهيز قرار التعاقد",
    text: "تحديد نطاق التسليم والأسئلة التي يجب توجيهها للمكتب أو المقاول قبل مقارنة العروض.",
    href: "/تكلفة-بناء-دور-واحد/",
  },
];

export default function BestEngineeringOfficeDammamPage() {
  return (
    <main dir="rtl" lang="ar-SA" className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_82%_12%,rgba(47,134,246,.18),transparent_36%),linear-gradient(180deg,var(--surface-2),transparent)]" />

      <div className="mx-auto w-[calc(100%_-_28px)] max-w-[1220px]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="text-[color:var(--brand)]">الرئيسية</Link>
          <span>←</span>
          <Link href="/المدونات/" className="text-[color:var(--brand)]">المدونات</Link>
          <span>←</span>
          <span>مكتب هندسي الدمام</span>
        </nav>

        <section className="overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
          <div className="p-7 md:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                <MapPin size={15} /> الدمام والمنطقة الشرقية
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--ink-muted)]">
                آخر تحديث: 26 أغسطس 2026
              </span>
            </div>

            <h1 className="mt-6 max-w-[980px] text-4xl font-black leading-[1.18] tracking-[-.045em] md:text-6xl">
              مكتب هندسي في الدمام: كيف تختار وتبدأ مشروعك بخطوات واضحة؟
            </h1>

            <p className="mt-5 max-w-[930px] text-lg font-bold leading-9 text-[color:var(--ink-muted)] md:text-xl">
              إذا كنت تبحث عن <strong className="text-[color:var(--ink)]">مكتب هندسي الدمام</strong> أو عن أفضل مكتب هندسي بالدمام، فالسؤال الأهم ليس اسم المكتب فقط؛ بل هل نطاق الخدمة مناسب لمشروعك، وهل التسليمات واضحة، وهل الجهة التي ستتولى أي إجراء رسمي مؤهلة لذلك. هذه الصفحة تساعدك على اتخاذ القرار ثم بدء استشارة تصميم مع موسوق إذا كان ذلك مناسبًا لك.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16] shadow-[0_16px_38px_rgba(37,211,102,.23)]"
              >
                <MessageCircle size={19} /> أرسل تفاصيل مشروعك في الدمام
              </a>
              <a
                href="tel:+201223328270"
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black !text-white shadow-[0_16px_38px_rgba(11,91,184,.2)]"
                style={{ color: "#fff" }}
              >
                اتصل بفريق موسوق
              </a>
            </div>
          </div>

          <div className="grid gap-px border-t border-[color:var(--hairline)] bg-[color:var(--hairline)] sm:grid-cols-3">
            {[
              ["لا تبدأ بالسعر", "قارن نفس نطاق العمل والتسليمات أولًا."],
              ["تحقق من المتطلبات", "الرخص والإجراءات الرسمية لها شروط أهلية يجب التأكد منها."],
              ["أرسل brief واضح", "المساحة والموقع ونوع المشروع والمخططات تختصر أول محادثة."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[color:var(--surface-2)] p-5">
                <strong className="block text-base font-black text-[color:var(--ink)]">{title}</strong>
                <span className="mt-2 block text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <article className="mt-7 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 lg:p-11">
          <section>
            <span className="text-xs font-black text-[color:var(--brand)]">الإجابة السريعة</span>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">ما الذي يجعل المكتب الهندسي مناسبًا لمشروعك في الدمام؟</h2>
            <div className="mt-5 rounded-[24px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface-2)] p-5">
              <p className="m-0 text-base font-bold leading-8 text-[color:var(--ink-muted)] md:text-lg">
                المكتب المناسب هو الذي يفهم نوع المشروع، يحدد ما سيسلمه بالضبط، يوضح عدد جولات التعديل والمدة ومسؤولية التنسيق، ولا يَعِد بإجراء رسمي لا يملك أهلية تنفيذه. قبل التعاقد، اطلب نطاقًا مكتوبًا وأمثلة أعمال واسأل كيف سيتم التعامل مع اشتراطات الموقع والجهة المختصة.
              </p>
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">الخدمات</span>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">ما الذي قد تحتاجه من مكتب استشارات هندسية في الدمام؟</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.title} href={service.href} className="group rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--brand-bright)]">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><Icon size={20} /></span>
                    <h3 className="mt-4 text-xl font-black text-[color:var(--ink)]">{service.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{service.text}</p>
                    <span className="mt-4 inline-block text-sm font-black text-[color:var(--brand)]">اقرأ التفاصيل ←</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">قبل التعاقد</span>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">7 أسئلة اسألها قبل اختيار مكتب هندسي بالدمام</h2>
            <ol className="mt-6 grid gap-3 p-0 md:grid-cols-2">
              {[
                "ما المخططات والتسليمات الموجودة داخل السعر؟",
                "هل السعر يشمل التعديلات؟ وكم جولة تعديل؟",
                "من المسؤول عن التنسيق بين المعماري والإنشائي والخدمات؟",
                "ما البيانات المطلوبة من الأرض أو المبنى قبل بدء التصميم؟",
                "هل توجد إجراءات رسمية ضمن النطاق؟ ومن الجهة المؤهلة لتنفيذها؟",
                "ما المدة المتوقعة لكل مرحلة وما الذي قد يغيرها؟",
                "كيف يتم تسليم الملفات النهائية وما الذي يحتاجه المقاول للتنفيذ؟",
              ].map((item, index) => (
                <li key={item} className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[color:var(--brand)] text-xs font-black text-white">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <div className="flex items-center gap-3"><ShieldCheck className="text-[color:var(--brand)]" /><h2 className="text-2xl font-black">الاعتماد والإجراءات الرسمية</h2></div>
              <p className="mt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                لا تفترض أن أي مصمم أو مكتب يمكنه تنفيذ كل إجراء رسمي. عندما يرتبط مشروعك برخصة بناء أو رفع مخططات أو اعتماد لدى جهة حكومية، تحقق من متطلبات الخدمة الحالية وأهلية الطرف الذي سيتولى الإجراء.
              </p>
              <div className="mt-5 grid gap-2">
                <a href="https://balady.gov.sa/ar/services/%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-%D8%B1%D8%AE%D8%B5%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[color:var(--surface)] px-4 py-3 text-sm font-black text-[color:var(--brand)]">منصة بلدي — إصدار رخصة بناء</a>
                <a href="https://sbc.gov.sa/" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[color:var(--surface)] px-4 py-3 text-sm font-black text-[color:var(--brand)]">المركز السعودي لكود البناء</a>
              </div>
            </div>

            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white">
              <div className="flex items-center gap-3"><BadgeCheck /><h2 className="text-2xl font-black">كيف تبدأ مع موسوق؟</h2></div>
              <p className="mt-4 text-sm font-bold leading-8 text-white/75">
                ابدأ بإرسال بيانات المشروع بدل طلب سعر عام: المدينة، المساحة، نوع المبنى، عدد الأدوار، الخدمة المطلوبة، وأي مخططات أو صور لديك. سيصبح من الأسهل تحديد الخطوة التالية وما إذا كان نطاق موسوق مناسبًا لاحتياجك.
              </p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black text-[#052d16]">
                <MessageCircle size={18} /> أرسل brief المشروع
              </a>
            </div>
          </section>

          <MawsooqProofSection context="مشروعك في الدمام" whatsappMessage={whatsappMessage} />

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">أسئلة شائعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة عن المكتب الهندسي في الدمام</h2>
            <div className="mt-6 grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
                  <summary className="cursor-pointer list-none text-base font-black leading-7 text-[color:var(--ink)]">{faq.question}</summary>
                  <p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 shrink-0 text-[color:var(--brand)]" />
              <div>
                <h2 className="text-2xl font-black md:text-3xl">الخلاصة: لا تجعل قائمة أسماء المكاتب هي قرارك الوحيد</h2>
                <p className="mt-3 text-base font-bold leading-8 text-[color:var(--ink-muted)]">
                  البحث عن أفضل مكتب هندسي بالدمام يبدأ بتحديد احتياج مشروعك ثم مقارنة نطاق الخدمة والكفاءة والتسليمات بوضوح. إذا كنت تريد بدء تصميم معماري أو إنشائي لمشروع في الدمام، أرسل تفاصيل المشروع لموسوق وشاهد آراء العملاء والمشاريع قبل أن تقرر.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
