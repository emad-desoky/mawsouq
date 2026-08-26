import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  HardHat,
  MessageCircle,
  Ruler,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";

const SITE_URL = "https://mawsouq.com";
const pageUrl = `${SITE_URL}/بناء-فلة/`;
const featuredImage =
  "https://mawsouq.com/wp-content/uploads/2026/05/تكلفة-بناء-فيلا-السعودية-copy.webp";
const whatsappMessage =
  "مرحبًا موسوق، أريد استشارة حول بناء فيلا. المدينة: ___، مساحة الأرض: ___، مساحة البناء التقريبية: ___، ومرحلة المشروع الحالية: ___";
const whatsapp = `https://wa.me/201223328270?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "بناء فيلا في السعودية 2026 | المراحل واختيار المقاول",
  description:
    "دليل عملي لبناء فيلا في السعودية: من التصميم والرخصة إلى مقارنة المقاولين والعقد والتنفيذ والتسليم، مع روابط لحاسبة التكلفة وخدمات التصميم.",
  keywords: [
    "بناء فيلا في السعودية",
    "بناء فلة في السعودية",
    "مراحل بناء فيلا",
    "بناء فيلا تسليم مفتاح",
    "مقاول بناء فيلا",
    "تكلفة بناء فيلا السعودية",
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
    title: "بناء فيلا في السعودية 2026: من التصميم إلى التسليم",
    description:
      "تعرف على مراحل بناء الفيلا، طريقة مقارنة عروض المقاولين، البنود التي يجب تثبيتها في العقد، وكيف تبدأ مشروعك بصورة منظمة.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "article",
    publishedTime: "2026-03-10T11:07:00+03:00",
    modifiedTime: "2026-08-26T10:30:00+03:00",
    images: [{ url: featuredImage, alt: "بناء فيلا في السعودية" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "بناء فيلا في السعودية 2026 | المراحل واختيار المقاول",
    description:
      "خطوات بناء الفيلا والعقد والمقاول والتصميم قبل التنفيذ، بدون الاعتماد على سعر متر عام فقط.",
    images: [featuredImage],
  },
};

const stages = [
  {
    icon: Ruler,
    title: "1. تثبيت احتياجات المشروع",
    text: "حدد مساحة الأرض، عدد الأدوار، عدد المستخدمين، المجالس، المواقف، الملحقات، مستوى التشطيب والميزانية التقريبية. أي غموض هنا يتحول لاحقًا إلى تعديلات وتكلفة إضافية.",
  },
  {
    icon: Building2,
    title: "2. التصميم المعماري",
    text: "ابدأ بالمخطط المعماري قبل طلب أسعار تنفيذ عشوائية. توزيع المساحات والواجهات والفتحات والخدمات يؤثر مباشرة على المساحة المبنية والهيكل والتكلفة.",
    href: "/التصميم-المعماري/",
  },
  {
    icon: FileCheck2,
    title: "3. التصميم الإنشائي والتنسيق",
    text: "بعد تثبيت المعماري، يأتي التصميم الإنشائي وتنسيق الكهرباء والسباكة والتكييف. الهدف هو تقليل التعارضات قبل أن تصل للموقع.",
    href: "/تصميم-انشائي/",
  },
  {
    icon: ShieldCheck,
    title: "4. الرخص والاشتراطات",
    text: "تأكد من المتطلبات الحالية للجهة المختصة وكود البناء السعودي، ومن أهلية المكتب الذي سيتولى أي إجراء رسمي. لا تبدأ التنفيذ قبل اكتمال المستندات المطلوبة للمشروع.",
  },
  {
    icon: ClipboardCheck,
    title: "5. جدول الكميات ونطاق العمل",
    text: "كلما كان نطاق التنفيذ والمواصفات والكميات أوضح، أصبحت مقارنة المقاولين أكثر عدلًا. اطلب من الجميع تسعير نفس البنود بدل مقارنة أرقام غير متكافئة.",
  },
  {
    icon: HardHat,
    title: "6. اختيار المقاول والعقد",
    text: "قارن خبرة المقاول، الفريق، الجدول الزمني، طريقة الدفع، المواد المستبعدة، الضمانات وآلية التغيير. أقل سعر ليس بالضرورة أقل تكلفة نهائية.",
    href: "/مقاول-بناء/",
  },
  {
    icon: Hammer,
    title: "7. التنفيذ والاستلام المرحلي",
    text: "اربط الدفعات بمراحل إنجاز واضحة، ووثق القرارات والتغييرات. الاستلام المرحلي يقلل صعوبة اكتشاف الأخطاء بعد إخفائها بأعمال لاحقة.",
  },
  {
    icon: BadgeCheck,
    title: "8. التسليم النهائي والملفات",
    text: "راجع الملاحظات النهائية، الاختبارات، الضمانات، المخططات المحدثة وأي مستندات تشغيل أو صيانة قبل إقفال المشروع وتسوية الدفعات الأخيرة.",
  },
];

const faqs = [
  {
    question: "ما أول خطوة في بناء فيلا في السعودية؟",
    answer:
      "ابدأ بتثبيت احتياجاتك ومساحة البناء المطلوبة ثم التصميم المعماري، وليس بالبحث عن أرخص سعر متر. المخطط الواضح يحدد المساحات والواجهات والخدمات، وبعده يمكن تطوير التصميم الإنشائي وتجهيز نطاق يمكن للمقاولين تسعيره بطريقة قابلة للمقارنة.",
  },
  {
    question: "كيف أعرف تكلفة بناء فيلا في السعودية؟",
    answer:
      "التكلفة تعتمد على المساحة المبنية والمدينة والتربة والنظام الإنشائي ومستوى التشطيب ونطاق العقد. بدل وضع رقم عام داخل هذه الصفحة، استخدم دليل تكلفة بناء دور واحد وحاسبته في موسوق للحصول على نطاق تخطيطي ثم اطلب عروضًا مبنية على مخططات ومواصفات مشروعك.",
  },
  {
    question: "هل الأفضل بناء عظم ثم التشطيب أم تسليم مفتاح؟",
    answer:
      "الاختيار يعتمد على وقتك وخبرتك وقدرتك على إدارة الموردين والمقاولين. فصل العظم والتشطيب قد يعطيك تحكمًا أكبر لكنه يحتاج إدارة وتنسيقًا أكثر، بينما تسليم المفتاح يقلل عدد الأطراف إذا كان نطاق العقد والمواصفات والاستثناءات واضحة.",
  },
  {
    question: "ما أهم شيء في عقد مقاول بناء فيلا؟",
    answer:
      "يجب أن يوضح العقد نطاق الأعمال والمواصفات والمواد المستبعدة والمدة والدفعات المرتبطة بالإنجاز وآلية التغيير والاستلام. لا تعتمد على وصف عام مثل عظم أو تسليم مفتاح دون جدول بنود يشرح ما هو داخل السعر وما هو خارج السعر.",
  },
  {
    question: "كيف أتواصل مع موسوق قبل بناء الفيلا؟",
    answer:
      "أرسل المدينة ومساحة الأرض ومساحة البناء التقريبية وعدد الأدوار ومرحلة المشروع الحالية، وأرفق أي مخططات أو صور مرجعية. يمكن بعدها تحديد ما إذا كنت تحتاج تصميمًا معماريًا أو إنشائيًا أو مساعدة في تنظيم نطاق المشروع قبل طلب عروض التنفيذ.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "بناء فيلا في السعودية 2026: المراحل واختيار المقاول قبل التنفيذ",
      description: metadata.description,
      image: { "@type": "ImageObject", url: featuredImage },
      author: { "@type": "Organization", name: "موسوق", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "موسوق",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/mawsouq-logo.png` },
      },
      datePublished: "2026-03-10T11:07:00+03:00",
      dateModified: "2026-08-26T10:00:00+03:00",
      inLanguage: "ar-SA",
      articleSection: "البناء والتخطيط",
      keywords: "بناء فيلا في السعودية, بناء فلة, مراحل بناء فيلا, مقاول بناء, تسليم مفتاح",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
        { "@type": "ListItem", position: 3, name: "بناء فيلا في السعودية", item: pageUrl },
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

export default function VillaConstructionPage() {
  return (
    <main dir="rtl" lang="ar-SA" className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="mx-auto w-[calc(100%_-_28px)] max-w-[1260px]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="text-[color:var(--brand)]">الرئيسية</Link>
          <span>←</span>
          <Link href="/المدونات/" className="text-[color:var(--brand)]">المدونات</Link>
          <span>←</span>
          <span>بناء فيلا في السعودية</span>
        </nav>

        <section className="grid overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] lg:grid-cols-[1.02fr_.98fr]">
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">دليل بناء الفلل 2026</span>
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--ink-faint)]">آخر تحديث: 26 أغسطس 2026</span>
            </div>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-.05em] md:text-6xl">بناء فيلا في السعودية 2026: المراحل واختيار المقاول قبل التنفيذ</h1>
            <p className="mt-5 text-lg font-bold leading-9 text-[color:var(--ink-muted)]">
              إذا كنت تخطط لبناء فيلا، فالقرار الجيد يبدأ قبل وصول المقاول للموقع. تحتاج مخططًا واضحًا، نطاق عمل قابلًا للتسعير، طريقة مقارنة عادلة، وعقدًا يحدد ما هو داخل السعر وما هو خارجه. هذا الدليل يرتب الخطوات ويترك <strong className="text-[color:var(--ink)]">تفاصيل التكلفة الدقيقة لصفحة التكلفة المخصصة</strong> حتى لا نكرر أرقامًا عامة غير مرتبطة بمشروعك.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16] shadow-[0_16px_38px_rgba(37,211,102,.23)]"><MessageCircle size={19} /> أرسل تفاصيل الفيلا</a>
              <Link href="/تكلفة-بناء-دور-واحد/" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black !text-white shadow-[0_16px_38px_rgba(11,91,184,.2)]" style={{ color: "#fff" }}><WalletCards size={19} /> احسب تكلفة البناء</Link>
            </div>
          </div>
          <figure className="relative min-h-[340px] bg-[#071321] lg:min-h-[620px]">
            <img src={featuredImage} alt="بناء فيلا في السعودية" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-4 text-sm font-bold leading-7 text-white backdrop-blur">المخططات والمواصفات ونطاق العقد هي الأساس قبل مقارنة أسعار بناء الفيلا.</figcaption>
          </figure>
        </section>

        <article className="mt-7 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 lg:p-11">
          <section>
            <span className="text-xs font-black text-[color:var(--brand)]">ملخص سريع</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">ما الذي تحتاجه قبل بناء الفيلا؟</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "احتياجات ومساحة بناء محددة بدل تغيير المخطط كل أسبوع.",
                "تصميم معماري وإنشائي منسق قبل تسعير التنفيذ.",
                "نطاق عمل ومواصفات موحدة لكل المقاولين الذين ستقارنهم.",
                "عقد يربط الدفعات بالإنجاز ويشرح التغييرات والاستثناءات.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"><CheckCircle2 className="mt-1 shrink-0 text-[color:var(--brand)]" size={19} />{item}</div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">خطوة بخطوة</span>
            <h2 className="mt-2 text-3xl font-black leading-tight md:text-4xl">مراحل بناء فيلا في السعودية من الفكرة إلى التسليم</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {stages.map((stage) => {
                const Icon = stage.icon;
                const content = (
                  <div className="h-full rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 transition hover:border-[color:var(--brand-bright)]">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><Icon size={20} /></span>
                    <h3 className="mt-4 text-xl font-black text-[color:var(--ink)]">{stage.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{stage.text}</p>
                    {stage.href && <span className="mt-4 inline-block text-sm font-black text-[color:var(--brand)]">افتح الدليل المرتبط ←</span>}
                  </div>
                );
                return stage.href ? <Link href={stage.href} key={stage.title}>{content}</Link> : <div key={stage.title}>{content}</div>;
              })}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">طريقة التعاقد</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">عظم، تشطيب أم تسليم مفتاح؟</h2>
            <div className="mt-6 overflow-x-auto rounded-[24px] border border-[color:var(--hairline)]">
              <table className="w-full min-w-[760px] border-collapse text-right">
                <caption className="bg-[color:var(--surface-2)] p-4 text-right text-sm font-black text-[color:var(--ink)]">مقارنة عملية بين أشهر أساليب التعاقد</caption>
                <thead className="bg-[#071321] text-white"><tr><th className="p-4">النمط</th><th className="p-4">مناسب عندما</th><th className="p-4">ما يحتاج انتباهًا</th></tr></thead>
                <tbody className="text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                  <tr className="border-t border-[color:var(--hairline)]"><th scope="row" className="p-4 text-[color:var(--ink)]">عظم فقط</th><td className="p-4">تريد فصل الهيكل عن التشطيب وإدارة المراحل بعقود مستقلة.</td><td className="p-4">حدود العظم والعزل والردم والمباني والاختبارات يجب أن تكون مكتوبة.</td></tr>
                  <tr className="border-t border-[color:var(--hairline)] bg-[color:var(--surface-2)]"><th scope="row" className="p-4 text-[color:var(--ink)]">تشطيب منفصل</th><td className="p-4">لديك هيكل قائم ومخططات تشطيب ومواصفات واضحة.</td><td className="p-4">اختيار المواد والتوريد والتغييرات أثناء التنفيذ قد يضغط الميزانية.</td></tr>
                  <tr className="border-t border-[color:var(--hairline)]"><th scope="row" className="p-4 text-[color:var(--ink)]">تسليم مفتاح</th><td className="p-4">تفضل مسؤولية تنفيذ مجمعة وتريد تقليل عدد الأطراف.</td><td className="p-4">لا تقبل كلمة تسليم مفتاح وحدها؛ اطلب قائمة مواصفات واستثناءات تفصيلية.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h2 className="text-2xl font-black">تكلفة بناء الفيلا: لا تجعل هذه الصفحة تنافس صفحة السعر</h2>
              <p className="mt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                تكلفة المشروع موضوع مستقل ويتغير حسب المساحة والمدينة والتربة ونوع العقد والتشطيب. لذلك نحتفظ بالأرقام والحاسبة والأمثلة في دليل واحد مخصص بدل تكرار أسعار قديمة في أكثر من صفحة.
              </p>
              <Link href="/تكلفة-بناء-دور-واحد/" className="mt-5 inline-flex rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-black !text-white" style={{ color: "#fff" }}>دليل تكلفة البناء والحاسبة</Link>
            </div>
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h2 className="text-2xl font-black">قبل توقيع عقد المقاول</h2>
              <ul className="mt-4 grid gap-2 p-0 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                {[
                  "ثبت المخططات والإصدارات التي سيبني عليها المقاول.",
                  "حدد المواد والماركات أو مستوى المواصفات البديل المقبول.",
                  "اكتب البنود المستبعدة بوضوح بدل اكتشافها بعد التوقيع.",
                  "اربط الدفعات بمراحل إنجاز قابلة للاستلام.",
                  "حدد آلية تسعير التغييرات قبل حدوثها.",
                ].map((item) => <li key={item} className="flex gap-2"><ClipboardCheck size={18} className="mt-1 shrink-0 text-[color:var(--brand)]" />{item}</li>)}
              </ul>
            </div>
          </section>

          <MawsooqProofSection context="بناء الفيلا" whatsappMessage={whatsappMessage} />

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">الأسئلة الشائعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة قبل بناء فيلا في السعودية</h2>
            <div className="mt-6 grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
                  <summary className="cursor-pointer list-none text-base font-black leading-7 text-[color:var(--ink)]">{faq.question}</summary>
                  <p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black text-cyan-100">الخطوة التالية</span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">ابدأ ببيانات المشروع، لا بطلب سعر متر عام</h2>
            <p className="mt-4 max-w-[850px] text-base font-bold leading-8 text-white/75">أرسل المدينة ومساحة الأرض ومساحة البناء التقريبية وعدد الأدوار ومرحلة المشروع الحالية. إذا كانت لديك مخططات أو صور مرجعية، أرفقها لتكون أول محادثة أكثر دقة.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16]"><MessageCircle size={19} /> أرسل بيانات الفيلا عبر واتساب</a>
          </section>
        </article>
      </div>
    </main>
  );
}
