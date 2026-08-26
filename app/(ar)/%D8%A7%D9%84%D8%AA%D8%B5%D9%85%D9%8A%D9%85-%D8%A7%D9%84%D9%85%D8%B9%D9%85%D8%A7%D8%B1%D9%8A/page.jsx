import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";

const SITE_URL = "https://mawsouq.com";
const pageUrl = `${SITE_URL}/التصميم-المعماري/`;
const featuredImage = `${SITE_URL}/wp-content/uploads/2026/03/مصمم-معمارى.webp`;
const whatsappMessage =
  "مرحبًا موسوق، أريد معرفة تكلفة التصميم المعماري لمشروعي. المدينة: ___، مساحة الأرض: ___، عدد الأدوار: ___، والخدمات المطلوبة: ___";
const whatsapp = `https://wa.me/201223328270?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "تكلفة التصميم المعماري في السعودية 2026 | كيف تُحسب؟",
  description:
    "ما تكلفة التصميم المعماري في السعودية؟ تعرف على ما يرفع السعر، الفرق بين المعماري والإنشائي، وما يجب أن يشمله عرض السعر قبل التعاقد.",
  keywords: [
    "تكلفة التصميم المعماري في السعودية",
    "تكاليف التصميم المعماري للمنازل",
    "سعر التصميم المعماري",
    "تصميم معماري السعودية",
    "مخطط معماري",
    "التصميم المعماري عن بعد",
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
    title: "تكلفة التصميم المعماري في السعودية 2026: ما الذي يحدد السعر؟",
    description:
      "دليل عملي لفهم نطاق التصميم، طريقة مقارنة عروض الأسعار، وما الذي يجب أن تستلمه قبل بدء البناء.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "article",
    publishedTime: "2026-03-10T14:24:00+03:00",
    modifiedTime: "2026-08-26T10:45:00+03:00",
    images: [{ url: featuredImage, width: 898, height: 617, alt: "تكلفة التصميم المعماري في السعودية" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تكلفة التصميم المعماري في السعودية 2026 | كيف تُحسب؟",
    description:
      "ما الذي يدخل في سعر المخطط المعماري؟ وما الفرق بينه وبين التصميم الإنشائي؟",
    images: [featuredImage],
  },
};

const scopeRows = [
  ["مخطط معماري", "توزيع الغرف والحركة والفتحات والعلاقة بين الفراغات", "عدد الأدوار، المساحة، تعقيد المتطلبات، جولات التعديل"],
  ["واجهات خارجية", "تطوير الشكل والمواد والنسب والفتحات حسب النمط المطلوب", "عدد الواجهات، مستوى التفاصيل، عدد البدائل والتعديلات"],
  ["تصميم داخلي / 3D", "تصور الفراغات والخامات والإضاءة والأثاث أو المشاهد", "عدد الفراغات، مستوى الواقعية، عدد المشاهد، تفاصيل الخامات"],
  ["تصميم إنشائي", "نظام إنشائي وحسابات ومخططات تنفيذية للهيكل", "ليس جزءًا تلقائيًا من المعماري؛ يجب تحديده كبند مستقل"],
];

const faqs = [
  {
    question: "كم تكلفة التصميم المعماري في السعودية؟",
    answer:
      "لا يوجد سعر واحد يمكن تطبيقه على كل المشاريع؛ السعر يتغير بحسب مساحة المشروع وعدد الأدوار ونطاق التسليم وعدد جولات التعديل وهل المطلوب مخطط معماري فقط أم واجهات أو تصميم داخلي أو تنسيق خدمات. للحصول على عرض قابل للمقارنة، أرسل نفس الـbrief لكل جهة واطلب تسليمات مكتوبة.",
  },
  {
    question: "ما الذي يجب أن يشمله سعر التصميم المعماري؟",
    answer:
      "يجب أن يوضح العرض على الأقل نطاق المخططات، عدد البدائل أو المراحل، عدد جولات التعديل، صيغة الملفات النهائية، وما إذا كانت الواجهات أو المناظير أو التنسيق مع التخصصات الأخرى مشمولة. لا تفترض أن كلمة تصميم معماري تعني جميع المخططات المطلوبة للتنفيذ.",
  },
  {
    question: "هل التصميم الإنشائي داخل سعر التصميم المعماري؟",
    answer:
      "ليس بالضرورة. التصميم المعماري يركز على التوزيع والفراغات والشكل، بينما التصميم الإنشائي يتعامل مع النظام الحامل والعناصر الإنشائية والحسابات والمخططات التنفيذية. يجب أن يكون كل نطاق واضحًا في العرض أو العقد حتى لا يظهر نقص في مرحلة لاحقة.",
  },
  {
    question: "هل يمكن عمل التصميم المعماري عن بعد؟",
    answer:
      "يمكن بدء واستكمال جزء كبير من عملية التصميم عن بعد عندما تتوفر بيانات الموقع وأبعاد الأرض والاشتراطات واحتياجات المستخدمين، مع اجتماعات ومراجعات رقمية. أي معاينة ميدانية أو إجراء رسمي يحتاج إلى ترتيبه حسب متطلبات المشروع والجهة المختصة.",
  },
  {
    question: "كيف أطلب سعر تصميم معماري من موسوق؟",
    answer:
      "أرسل المدينة، أبعاد الأرض، عدد الأدوار المتوقع، نوع المشروع، المساحات المطلوبة، وأي صور مرجعية أو مخطط أولي. اذكر كذلك هل تحتاج معماريًا فقط أم إنشائيًا وواجهات و3D، حتى تكون المحادثة مرتبطة بنطاق فعلي بدل سؤال عام عن سعر التصميم.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "تكلفة التصميم المعماري في السعودية 2026: كيف تُحسب؟",
      description: metadata.description,
      image: { "@type": "ImageObject", url: featuredImage, width: 898, height: 617 },
      author: { "@type": "Organization", name: "موسوق", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "موسوق",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/mawsouq-logo.png` },
      },
      datePublished: "2026-03-10T14:24:00+03:00",
      dateModified: "2026-08-26T10:00:00+03:00",
      inLanguage: "ar-SA",
      articleSection: "التصميم المعماري",
      keywords: "تكلفة التصميم المعماري في السعودية, سعر التصميم المعماري, مخطط معماري, تصميم معماري عن بعد",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
        { "@type": "ListItem", position: 3, name: "تكلفة التصميم المعماري", item: pageUrl },
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

const decisionCards = [
  { icon: Ruler, title: "المساحة وعدد الأدوار", text: "كلما زاد نطاق المشروع زادت كمية العمل والمراجعة، لكن لا تعتمد على المساحة وحدها لفهم السعر." },
  { icon: Layers3, title: "نطاق التسليم", text: "مخطط معماري فقط يختلف عن باقة تشمل واجهات و3D وتنسيقًا مع الإنشائي والخدمات." },
  { icon: PenTool, title: "عدد البدائل والتعديلات", text: "اسأل بوضوح عن عدد جولات التعديل ومتى يتحول التعديل إلى عمل إضافي." },
  { icon: Building2, title: "تعقيد المشروع", text: "الواجهات غير التقليدية، الفراغات الكبيرة، تعدد الاستخدامات والاشتراطات الخاصة ترفع وقت التصميم والتنسيق." },
];

export default function ArchitecturalDesignCostPage() {
  return (
    <main dir="rtl" lang="ar-SA" className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="mx-auto w-[calc(100%_-_28px)] max-w-[1260px]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="text-[color:var(--brand)]">الرئيسية</Link><span>←</span>
          <Link href="/المدونات/" className="text-[color:var(--brand)]">المدونات</Link><span>←</span>
          <span>تكلفة التصميم المعماري</span>
        </nav>

        <section className="grid overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">التصميم المعماري في السعودية</span>
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--ink-faint)]">محدث: 26 أغسطس 2026</span>
            </div>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-.05em] md:text-6xl">تكلفة التصميم المعماري في السعودية 2026: ما الذي يحدد السعر فعلًا؟</h1>
            <p className="mt-5 text-lg font-bold leading-9 text-[color:var(--ink-muted)]">
              لا يوجد سعر واحد موثوق للتصميم المعماري يمكن تطبيقه على كل منزل أو فيلا. المقارنة الصحيحة تبدأ من <strong className="text-[color:var(--ink)]">نطاق التسليم</strong>: هل تريد مخططًا معماريًا فقط؟ واجهات؟ 3D؟ تصميمًا إنشائيًا أيضًا؟ وما عدد البدائل والتعديلات؟ هنا نوضح كيف تطلب عرض سعر قابلًا للمقارنة بدل الاعتماد على أرقام قديمة أو غير مرتبطة بمشروعك.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16] shadow-[0_16px_38px_rgba(37,211,102,.23)]"><MessageCircle size={19} /> اطلب تقديرًا حسب مشروعك</a>
              <Link href="/تصميم-معماري-عن-بعد/" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black !text-white" style={{ color: "#fff" }}><MonitorSmartphone size={19} /> التصميم المعماري عن بعد</Link>
            </div>
          </div>
          <figure className="relative min-h-[340px] bg-[#071321] lg:min-h-[620px]">
            <img src={featuredImage} alt="تكلفة التصميم المعماري في السعودية" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-4 text-sm font-bold leading-7 text-white backdrop-blur">العرض الجيد يوضح ما ستستلمه، وليس السعر فقط.</figcaption>
          </figure>
        </section>

        <article className="mt-7 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 lg:p-11">
          <section>
            <span className="text-xs font-black text-[color:var(--brand)]">الإجابة السريعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">لماذا تختلف تكلفة التصميم المعماري من مشروع لآخر؟</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {decisionCards.map((card) => {
                const Icon = card.icon;
                return <div key={card.title} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><span className="grid size-10 place-items-center rounded-xl bg-[color:var(--brand)] text-white"><Icon size={19} /></span><h3 className="mt-4 text-xl font-black">{card.title}</h3><p className="mt-2 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{card.text}</p></div>;
              })}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">نطاق الخدمة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">ما الذي يجب أن تفصله في عرض سعر التصميم؟</h2>
            <div className="mt-6 overflow-x-auto rounded-[24px] border border-[color:var(--hairline)]">
              <table className="w-full min-w-[780px] border-collapse text-right">
                <caption className="bg-[color:var(--surface-2)] p-4 text-right text-sm font-black">مقارنة بين الخدمات التي كثيرًا ما تُجمع تحت كلمة «تصميم»</caption>
                <thead className="bg-[#071321] text-white"><tr><th className="p-4">الخدمة</th><th className="p-4">ما الذي تحصل عليه؟</th><th className="p-4">ما الذي يغير السعر؟</th></tr></thead>
                <tbody className="text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{scopeRows.map((row, index) => <tr key={row[0]} className={`border-t border-[color:var(--hairline)] ${index % 2 ? "bg-[color:var(--surface-2)]" : ""}`}><th scope="row" className="p-4 text-[color:var(--ink)]">{row[0]}</th><td className="p-4">{row[1]}</td><td className="p-4">{row[2]}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <div className="flex items-center gap-3"><FileText className="text-[color:var(--brand)]" /><h2 className="text-2xl font-black">المعماري ليس الإنشائي</h2></div>
              <p className="mt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">المخطط المعماري ينظم الفراغات والحركة والفتحات والشكل، بينما التصميم الإنشائي يحدد النظام الحامل والعناصر الإنشائية والحسابات والمخططات التنفيذية. لا تجعل صفحتين مختلفتين تنافسان نفس النية؛ إذا كنت تبحث عن الخدمة الإنشائية مباشرة فانتقل إلى صفحة التصميم الإنشائي.</p>
              <Link href="/تصميم-انشائي/" className="mt-5 inline-flex rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-black !text-white" style={{ color: "#fff" }}>خدمة التصميم الإنشائي</Link>
            </div>
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white">
              <div className="flex items-center gap-3"><MonitorSmartphone /><h2 className="text-2xl font-black">التصميم عن بعد في 2026</h2></div>
              <p className="mt-4 text-sm font-bold leading-8 text-white/75">قيمة التصميم عن بعد اليوم ليست مرتبطة بظروف مؤقتة مثل الحجر أو صعوبة زيارة المكاتب. فائدته العملية هي جمع البيانات رقميًا، عقد اجتماعات ومراجعات أسرع، مشاركة النسخ والتعليقات بوضوح، والتعامل مع التعديلات بطريقة موثقة. أي معاينة أو إجراء رسمي محلي يتم تنسيقه حسب حاجة المشروع.</p>
              <Link href="/تصميم-معماري-عن-بعد/" className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white">دليل التصميم المعماري عن بعد</Link>
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">مقارنة عروض الأسعار</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">اطلب هذه البنود قبل أن تقارن السعر</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "عدد الأدوار والمساحات التي يغطيها العرض.",
                "المخططات والتفاصيل النهائية التي ستُسلّم لك.",
                "عدد المقترحات الأولية وجولات التعديل.",
                "هل الواجهات أو 3D أو التصميم الداخلي ضمن العرض؟",
                "هل التصميم الإنشائي أو تنسيق الخدمات مشمول؟",
                "صيغة الملفات وموعد التسليم لكل مرحلة.",
                "ما الذي يُعتبر تعديلًا إضافيًا بعد اعتماد المرحلة؟",
                "هل توجد أعمال ميدانية أو إجراءات رسمية خارج السعر؟",
              ].map((item) => <div key={item} className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"><CheckCircle2 size={19} className="mt-1 shrink-0 text-[color:var(--brand)]" />{item}</div>)}
            </div>
          </section>

          <MawsooqProofSection context="التصميم المعماري" whatsappMessage={whatsappMessage} />

          <section className="mt-14 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-8">
            <div className="flex gap-3"><ShieldCheck className="mt-1 shrink-0 text-[color:var(--brand)]" /><div><h2 className="text-2xl font-black md:text-3xl">كيف تحصل على تقدير فعلي بدل رقم عام؟</h2><p className="mt-3 text-base font-bold leading-8 text-[color:var(--ink-muted)]">أرسل المدينة وأبعاد الأرض وعدد الأدوار ونوع المشروع والمساحات المطلوبة، وحدد هل تريد معماريًا فقط أم إنشائيًا وواجهات و3D أيضًا. بهذه الطريقة يصبح عرض السعر مرتبطًا بنطاق حقيقي ويمكنك مقارنته بعروض أخرى على نفس الأساس.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black text-[#052d16]"><MessageCircle size={18} /> أرسل بيانات المشروع</a></div></div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">الأسئلة الشائعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة عن تكلفة التصميم المعماري في السعودية</h2>
            <div className="mt-6 grid gap-3">{faqs.map((faq) => <details key={faq.question} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><summary className="cursor-pointer list-none text-base font-black leading-7">{faq.question}</summary><p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p></details>)}</div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black text-cyan-100"><BadgeCheck size={15} className="ml-1" /> خطوة عملية</span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">حوّل سؤال «كم السعر؟» إلى brief يمكن تسعيره</h2>
            <p className="mt-4 max-w-[840px] text-base font-bold leading-8 text-white/75">إذا كان لديك أرض أو مشروع فعلي، أرسل بياناته ومخرجات التصميم المطلوبة. هذا أفضل من مقارنة رقم منفرد من دون معرفة ماذا يشمل.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16]"><MessageCircle size={19} /> اطلب تقدير التصميم</a>
          </section>
        </article>
      </div>
    </main>
  );
}
