import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";

const SITE_URL = "https://mawsouq.com";
const pageUrl = `${SITE_URL}/تصميم-انشائي/`;
const featuredImage = `${SITE_URL}/wp-content/uploads/2026/05/2مخطط-انشائى-سطح-فيلا-scaled.webp`;
const whatsappMessage =
  "مرحبًا موسوق، أريد تصميمًا إنشائيًا لمشروعي. المدينة: ___، نوع المبنى: ___، المساحة: ___، عدد الأدوار: ___، وهل توجد مخططات معمارية: ___";
const whatsapp = `https://wa.me/201223328270?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "تصميم إنشائي في السعودية | مخططات إنشائية للمشاريع",
  description:
    "تحتاج تصميمًا إنشائيًا لمشروعك؟ تعرف على المدخلات والمخططات والتنسيق المطلوب قبل التنفيذ، ثم أرسل بيانات المشروع لموسوق لبدء الاستشارة.",
  keywords: [
    "تصميم إنشائي",
    "تصميم انشائي",
    "مهندس تصميم انشائي",
    "مخطط إنشائي",
    "مخططات إنشائية",
    "تصميم إنشائي في السعودية",
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
    title: "تصميم إنشائي في السعودية: من المعماري إلى مخططات التنفيذ",
    description:
      "ما الذي يحتاجه المهندس الإنشائي؟ وما الذي يجب أن تستلمه؟ دليل عملي قبل طلب التصميم أو بدء التنفيذ.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "website",
    images: [{ url: featuredImage, width: 1200, height: 820, alt: "تصميم إنشائي لمشروع سكني" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تصميم إنشائي في السعودية | مخططات إنشائية للمشاريع",
    description: "ابدأ من مخطط معماري واضح وبيانات المشروع، ثم نسق التصميم الإنشائي قبل التنفيذ.",
    images: [featuredImage],
  },
};

const deliverables = [
  {
    icon: Building2,
    title: "النظام الإنشائي",
    text: "اختيار وتطوير النظام الحامل بما يناسب شكل المبنى والبحور والاستخدام وبيانات الموقع المتاحة.",
  },
  {
    icon: Ruler,
    title: "مخططات العناصر",
    text: "مخططات الأساسات والأعمدة والكمرات والأسقف والدرج والتفاصيل المرتبطة بها بحسب نطاق المشروع.",
  },
  {
    icon: FileCheck2,
    title: "التفاصيل التنفيذية",
    text: "تفاصيل يحتاجها فريق التنفيذ لفهم الأبعاد والتسليح والعلاقات بين العناصر بدل الاعتماد على اجتهاد الموقع.",
  },
  {
    icon: Workflow,
    title: "التنسيق مع المعماري والخدمات",
    text: "مراجعة الفتحات والمناور والدرج والواجهات ومسارات الخدمات لتقليل التعارضات قبل التنفيذ.",
  },
];

const faqs = [
  {
    question: "ما هو التصميم الإنشائي؟",
    answer:
      "التصميم الإنشائي هو تحويل متطلبات المبنى والمخطط المعماري وبيانات المشروع إلى نظام إنشائي وعناصر ومخططات يمكن تنفيذها ومراجعتها. يشمل نطاقه عادة الأساسات والعناصر الرأسية والأفقية والتفاصيل المرتبطة بها حسب نوع المشروع ومتطلبات الكود والجهة المختصة.",
  },
  {
    question: "ماذا يحتاج مهندس التصميم الإنشائي قبل أن يبدأ؟",
    answer:
      "يحتاج إلى مخطط معماري واضح وبيانات الموقع ونوع الاستخدام وعدد الأدوار والبحور والمتطلبات الخاصة، وقد يحتاج إلى تقرير تربة أو بيانات إضافية بحسب المشروع. بدء التصميم بمدخلات ناقصة يؤدي غالبًا إلى إعادة العمل أو تغييرات لاحقة.",
  },
  {
    question: "كم سعر التصميم الإنشائي في السعودية؟",
    answer:
      "لا يوجد سعر موحد لكل المشاريع؛ السعر يتأثر بنوع المبنى ومساحته وعدد الأدوار وتعقيد النظام الإنشائي ونطاق المخططات والتفاصيل وعدد المراجعات. للحصول على تقدير قابل للمقارنة، أرسل نفس بيانات المشروع ونفس قائمة التسليمات لكل جهة تسعير.",
  },
  {
    question: "هل يمكن عمل التصميم الإنشائي عن بعد؟",
    answer:
      "يمكن إنجاز أعمال التصميم والمراجعة والتنسيق رقميًا عندما تتوفر المدخلات اللازمة، لكن أي معاينة ميدانية أو فحص أو إجراء رسمي يجب ترتيبه حسب حاجة المشروع ومتطلبات الجهة المختصة. المهم هو وضوح المسؤوليات والبيانات وليس مكان الاجتماع فقط.",
  },
  {
    question: "كيف أطلب تصميمًا إنشائيًا من موسوق؟",
    answer:
      "أرسل المدينة ونوع المبنى والمساحة وعدد الأدوار، ويفضل إرفاق المخطط المعماري وأي تقرير تربة أو متطلبات خاصة متاحة. بهذه المعلومات يمكن بدء محادثة حول نطاق التصميم والبيانات الناقصة والخطوة التالية.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمة التصميم الإنشائي للمشاريع",
      serviceType: "تصميم إنشائي ومخططات إنشائية",
      description: metadata.description,
      provider: {
        "@type": "Organization",
        name: "موسوق",
        url: SITE_URL,
        telephone: "+201223328270",
      },
      areaServed: { "@type": "Country", name: "Saudi Arabia" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "تصميم إنشائي في السعودية | مخططات إنشائية للمشاريع",
      description: metadata.description,
      inLanguage: "ar-SA",
      dateModified: "2026-08-26T10:00:00+03:00",
      primaryImageOfPage: { "@type": "ImageObject", url: featuredImage },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
        { "@type": "ListItem", position: 3, name: "تصميم إنشائي", item: pageUrl },
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

export default function StructuralDesignPage() {
  return (
    <main dir="rtl" lang="ar-SA" className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="mx-auto w-[calc(100%_-_28px)] max-w-[1260px]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="text-[color:var(--brand)]">الرئيسية</Link><span>←</span>
          <Link href="/المدونات/" className="text-[color:var(--brand)]">المدونات</Link><span>←</span>
          <span>تصميم إنشائي</span>
        </nav>

        <section className="grid overflow-hidden rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">خدمة التصميم الإنشائي</span>
              <span className="rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--ink-faint)]">محدث: 26 أغسطس 2026</span>
            </div>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-[-.05em] md:text-6xl">تصميم إنشائي في السعودية: مخططات واضحة قبل التنفيذ</h1>
            <p className="mt-5 text-lg font-bold leading-9 text-[color:var(--ink-muted)]">
              إذا كنت تبحث عن <strong className="text-[color:var(--ink)]">تصميم إنشائي</strong> أو مهندس تصميم إنشائي لمشروع فعلي، فابدأ من المدخلات الصحيحة: مخطط معماري واضح، بيانات الموقع، عدد الأدوار ونطاق التسليم. الهدف ليس مجرد رسم مخطط، بل تنسيق النظام الإنشائي والتفاصيل قبل وصولها إلى الموقع.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16] shadow-[0_16px_38px_rgba(37,211,102,.23)]"><MessageCircle size={19} /> أرسل بيانات المشروع</a>
              <Link href="/ايجاد-مهندس-انشائي/" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black !text-white" style={{ color: "#fff" }}><BadgeCheck size={19} /> كيف تختار مهندسًا إنشائيًا؟</Link>
            </div>
          </div>
          <figure className="relative min-h-[340px] bg-[#071321] lg:min-h-[620px]">
            <img src={featuredImage} alt="تصميم إنشائي ومخطط إنشائي لمشروع في السعودية" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-4 text-sm font-bold leading-7 text-white backdrop-blur">التصميم الإنشائي الجيد يبدأ من معماري مثبت ومدخلات مشروع واضحة.</figcaption>
          </figure>
        </section>

        <article className="mt-7 rounded-[34px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 lg:p-11">
          <section>
            <span className="text-xs font-black text-[color:var(--brand)]">ما الذي تحصل عليه؟</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">مخرجات التصميم الإنشائي التي يجب أن تكون واضحة في العرض</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return <div key={item.title} className="rounded-[23px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><Icon size={20} /></span><h3 className="mt-4 text-xl font-black">{item.title}</h3><p className="mt-2 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{item.text}</p></div>;
              })}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">قبل بدء التصميم</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أرسل هذه البيانات لمهندس التصميم الإنشائي</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "المخطط المعماري بأحدث نسخة معتمدة داخل المشروع.",
                "المدينة والموقع ونوع الاستخدام وعدد الأدوار.",
                "المساحات والبحور أو الفراغات الخاصة إن وجدت.",
                "تقرير التربة عندما يكون مطلوبًا أو متوفرًا للمشروع.",
                "أي متطلبات خاصة للأسقف أو الخزانات أو المسابح أو الملاحق.",
                "نطاق التسليم المطلوب وصيغة الملفات واحتياج التنسيق مع التخصصات.",
              ].map((item) => <div key={item} className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"><CheckCircle2 size={19} className="mt-1 shrink-0 text-[color:var(--brand)]" />{item}</div>)}
            </div>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h2 className="text-2xl font-black">ما الفرق بين المعماري والإنشائي؟</h2>
              <p className="mt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">التصميم المعماري ينظم الفراغات والشكل والحركة والفتحات. التصميم الإنشائي يترجم هذا التكوين إلى نظام حامِل وعناصر وتفاصيل تنفيذية. تعديل المعماري بعد بدء الإنشائي قد يسبب إعادة عمل، لذلك الأفضل تثبيت القرارات الأساسية والتنسيق بين التخصصين.</p>
              <Link href="/التصميم-المعماري/" className="mt-5 inline-flex rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-black !text-white" style={{ color: "#fff" }}>دليل التصميم المعماري</Link>
            </div>
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-6 text-white">
              <h2 className="text-2xl font-black">كيف تُحسب تكلفة التصميم الإنشائي؟</h2>
              <p className="mt-4 text-sm font-bold leading-8 text-white/75">بدل نشر سعر ثابت قد لا ينطبق على مشروعك، قارن على أساس نوع المبنى والمساحة وعدد الأدوار وتعقيد النظام الإنشائي ونطاق التفاصيل وعدد المراجعات. اطلب عرضًا يذكر التسليمات بوضوح؛ فهذا أهم من رقم منفرد لا تعرف ما يشمله.</p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-black text-[#052d16]">اطلب تقديرًا حسب المشروع</a>
            </div>
          </section>

          <section className="mt-14 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-8">
            <div className="flex gap-3"><ShieldCheck className="mt-1 shrink-0 text-[color:var(--brand)]" /><div><h2 className="text-2xl font-black md:text-3xl">التصميم عن بعد لا يلغي متطلبات الموقع أو الاعتماد</h2><p className="mt-3 text-base font-bold leading-8 text-[color:var(--ink-muted)]">يمكن تنفيذ أعمال التصميم والمراجعة الرقمية عن بعد، لكن لا تستخدم ذلك كاختصار لمتطلبات التربة أو المعاينة أو الإجراءات الرسمية عندما تكون لازمة. تأكد دائمًا من المسؤوليات ومن الجهة المؤهلة لأي اعتماد أو رفع رسمي حسب مشروعك.</p></div></div>
          </section>

          <MawsooqProofSection context="التصميم الإنشائي" whatsappMessage={whatsappMessage} />

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">الأسئلة الشائعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة عن التصميم الإنشائي</h2>
            <div className="mt-6 grid gap-3">{faqs.map((faq) => <details key={faq.question} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><summary className="cursor-pointer list-none text-base font-black leading-7">{faq.question}</summary><p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p></details>)}</div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black text-cyan-100">ابدأ ببيانات واضحة</span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">أرسل المخطط المعماري وبيانات المشروع</h2>
            <p className="mt-4 max-w-[840px] text-base font-bold leading-8 text-white/75">اذكر المدينة ونوع المبنى والمساحة وعدد الأدوار وأرفق أحدث مخطط معماري متاح. إذا كان هناك تقرير تربة أو متطلبات خاصة، أضفها من البداية.</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16]"><MessageCircle size={19} /> أرسل بيانات التصميم الإنشائي</a>
          </section>
        </article>
      </div>
    </main>
  );
}
