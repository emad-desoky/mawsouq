import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";

const SITE_URL = "https://mawsouq.com";
const pageUrl = `${SITE_URL}/ايجاد-مهندس-انشائي/`;
const featuredImage = `${SITE_URL}/wp-content/uploads/2026/05/2مخطط-انشائى-سطح-فيلا-scaled.webp`;
const whatsappMessage =
  "مرحبًا موسوق، أريد مساعدة بخصوص مهندس إنشائي لمشروعي. المدينة: ___، نوع المشروع: ___، المساحة: ___، وما أحتاجه تحديدًا: ___";
const whatsapp = `https://wa.me/201223328270?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata = {
  title: "كيف تختار مهندس إنشائي؟ أسئلة مهمة قبل التعاقد",
  description:
    "دليل اختيار مهندس إنشائي: ما الذي تسأله، ماذا تطلب في العرض، كيف تراجع الأعمال السابقة، ومتى تحتاج خدمة تصميم إنشائي كاملة لمشروعك.",
  keywords: [
    "مهندس إنشائي",
    "مهندس انشائي",
    "اختيار مهندس إنشائي",
    "مهندس إنشائي في السعودية",
    "مهندس تصميم إنشائي",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "كيف تختار مهندس إنشائي لمشروعك؟",
    description:
      "أسئلة ومعايير عملية تساعدك على اختيار مهندس إنشائي وفهم نطاق العمل قبل التعاقد.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "article",
    publishedTime: "2026-03-10T10:55:00+03:00",
    modifiedTime: "2026-08-26T11:00:00+03:00",
    images: [{ url: featuredImage, alt: "اختيار مهندس إنشائي لمشروع سكني" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "كيف تختار مهندس إنشائي؟ أسئلة مهمة قبل التعاقد",
    description: "ما الذي تراجعه قبل اختيار المهندس الإنشائي؟",
    images: [featuredImage],
  },
};

const questions = [
  "ما نوع المشاريع المشابهة التي عملت عليها؟",
  "ما البيانات التي تحتاجها قبل بدء التصميم؟",
  "ما المخططات والتفاصيل التي سأستلمها؟",
  "كيف سيتم التنسيق مع المعماري والكهرباء والسباكة والتكييف؟",
  "كم جولة مراجعة أو تعديل يشملها العرض؟",
  "ما الحالات التي تحتاج تقرير تربة أو معلومات إضافية؟",
  "كيف يتم التعامل مع تغييرات المعماري بعد بدء التصميم الإنشائي؟",
  "هل أي اعتماد أو إجراء رسمي داخل نطاقك؟ وما المتطلبات الحالية؟",
];

const faqs = [
  {
    question: "كيف أختار مهندس إنشائي جيد؟",
    answer:
      "اختر على أساس خبرة مرتبطة بنوع مشروعك، وضوح نطاق التسليم، طريقة التنسيق، والأسئلة التي يطلبها المهندس قبل التسعير. المهندس الجيد لا يبدأ من رقم سريع فقط؛ بل يطلب المدخلات اللازمة ويشرح ما سيقدمه وما يحتاج إلى طرف آخر.",
  },
  {
    question: "هل أختار مهندس إنشائي مستقل أم مكتب هندسي؟",
    answer:
      "يعتمد ذلك على نطاق المشروع ومتطلبات الجهة المختصة. بعض الأعمال يمكن أن ينفذها متخصص مستقل ضمن نطاق واضح، بينما الإجراءات الرسمية أو المشاريع التي تحتاج تخصصات متعددة قد تتطلب جهة مؤهلة أو فريقًا متكاملًا. تحقق من المتطلبات قبل التعاقد.",
  },
  {
    question: "ما الفرق بين مهندس إنشائي وخدمة تصميم إنشائي؟",
    answer:
      "البحث عن مهندس إنشائي هو قرار اختيار الشخص أو الجهة المناسبة، بينما خدمة التصميم الإنشائي هي نطاق العمل نفسه: المدخلات والحسابات والمخططات والتفاصيل والتنسيق. إذا كنت جاهزًا لطلب الخدمة، انتقل إلى صفحة التصميم الإنشائي في موسوق.",
  },
  {
    question: "هل يمكن التعامل مع مهندس إنشائي عن بعد؟",
    answer:
      "يمكن تنفيذ التصميم والمراجعات والتنسيق رقميًا عند توفر المدخلات، لكن المعاينات والفحوص والإجراءات الرسمية لا تُلغى عندما يحتاجها المشروع. اتفق من البداية على ما يتم عن بعد وما يحتاج حضورًا أو جهة محلية مؤهلة.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      headline: "كيف تختار مهندس إنشائي؟ أسئلة مهمة قبل التعاقد",
      description: metadata.description,
      image: featuredImage,
      author: { "@type": "Organization", name: "موسوق", url: SITE_URL },
      publisher: { "@type": "Organization", name: "موسوق", logo: { "@type": "ImageObject", url: `${SITE_URL}/mawsouq-logo.png` } },
      datePublished: "2026-03-10T10:55:00+03:00",
      dateModified: "2026-08-26T10:00:00+03:00",
      inLanguage: "ar-SA",
      articleSection: "اختيار المهندسين",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "المدونات", item: `${SITE_URL}/المدونات/` },
        { "@type": "ListItem", position: 3, name: "اختيار مهندس إنشائي", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ],
};

export default function StructuralEngineerGuidePage() {
  return (
    <main dir="rtl" lang="ar-SA" className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="mx-auto w-[calc(100%_-_28px)] max-w-[1160px]">
        <nav aria-label="مسار التنقل" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]">
          <Link href="/" className="text-[color:var(--brand)]">الرئيسية</Link><span>←</span><Link href="/المدونات/" className="text-[color:var(--brand)]">المدونات</Link><span>←</span><span>كيف تختار مهندس إنشائي</span>
        </nav>

        <section className="overflow-hidden rounded-[36px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
          <div className="p-7 md:p-10 lg:p-14">
            <span className="inline-flex rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">دليل اختيار — وليس صفحة الخدمة</span>
            <h1 className="mt-6 max-w-[950px] text-4xl font-black leading-[1.15] tracking-[-.05em] md:text-6xl">كيف تختار مهندس إنشائي لمشروعك؟ 8 أسئلة قبل التعاقد</h1>
            <p className="mt-5 max-w-[920px] text-lg font-bold leading-9 text-[color:var(--ink-muted)]">
              نتائج البحث عن <strong className="text-[color:var(--ink)]">مهندس إنشائي</strong> قد تعطيك أسماء كثيرة، لكن الاختيار الحقيقي يعتمد على خبرة مناسبة لمشروعك، وضوح التسليمات، وطريقة التنسيق. إذا كنت لا تبحث عن دليل اختيار بل تريد طلب <strong className="text-[color:var(--ink)]">تصميم إنشائي</strong> مباشرة، فصفحة الخدمة منفصلة حتى لا نخلط نية البحث.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/تصميم-انشائي/" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black !text-white" style={{ color: "#fff" }}><FileSearch size={19} /> أريد خدمة تصميم إنشائي</Link>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-[#052d16]"><MessageCircle size={19} /> اسأل عن مشروعك</a>
            </div>
          </div>
        </section>

        <article className="mt-7 rounded-[32px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 lg:p-11">
          <section>
            <span className="text-xs font-black text-[color:var(--brand)]">قبل أي عرض سعر</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">علامات أن المهندس يفهم نطاق المشروع قبل أن يبدأ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                [UserCheck, "يسأل عن المدخلات", "يطلب المعماري وبيانات الموقع وعدد الأدوار والمتطلبات الخاصة قبل القفز إلى التسعير."],
                [ClipboardCheck, "يحدد التسليمات", "يشرح أي مخططات وتفاصيل ستستلمها وما هو خارج النطاق."],
                [ShieldCheck, "يفصل المسؤوليات", "لا يخلط التصميم والمراجعة والإشراف والإجراءات الرسمية في وعد عام غير محدد."],
              ].map(([Icon, title, text]) => <div key={title} className="rounded-[23px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><span className="grid size-11 place-items-center rounded-2xl bg-[color:var(--brand)] text-white"><Icon size={20} /></span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-2 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{text}</p></div>)}
            </div>
          </section>

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">قائمة أسئلة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">8 أسئلة اسألها لأي مهندس إنشائي قبل التعاقد</h2>
            <ol className="mt-6 grid gap-3 p-0 md:grid-cols-2">
              {questions.map((question, index) => <li key={question} className="flex gap-3 rounded-[20px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[color:var(--brand)] text-xs font-black text-white">{index + 1}</span>{question}</li>)}
            </ol>
          </section>

          <section className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h2 className="text-2xl font-black">كيف تقارن عروض المهندسين؟</h2>
              <p className="mt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">أرسل نفس المدخلات لكل مهندس، واطلب نفس قائمة التسليمات. لا تقارن رقمين إذا كان أحدهما يشمل تفاصيل وتنظيمًا وتعديلات أكثر من الآخر. قارن النطاق والمدة والمراجعات والمسؤوليات ثم السعر.</p>
              <Link href="/تصميم-انشائي/" className="mt-5 inline-flex rounded-full bg-[color:var(--brand)] px-6 py-3 text-sm font-black !text-white" style={{ color: "#fff" }}>ما الذي يشمله التصميم الإنشائي؟</Link>
            </div>
            <div className="rounded-[26px] border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-3"><ShieldAlert className="text-red-500" /><h2 className="text-2xl font-black">علامات تستحق التوقف</h2></div>
              <ul className="mt-4 grid gap-2 p-0 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                {["تسعير نهائي قبل معرفة نوع المشروع أو المدخلات.", "وعد بأن كل شيء مشمول من دون قائمة تسليمات.", "عدم توضيح من ينسق التعارضات مع المعماري والخدمات.", "طلب دفعات كبيرة غير مرتبطة بمراحل أو تسليمات واضحة."].map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-2 shrink-0 rounded-full bg-red-500" />{item}</li>)}
              </ul>
            </div>
          </section>

          <MawsooqProofSection context="اختيار الفريق الإنشائي" whatsappMessage={whatsappMessage} compact />

          <section className="mt-14">
            <span className="text-xs font-black text-[color:var(--brand)]">الأسئلة الشائعة</span>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">أسئلة عن اختيار مهندس إنشائي</h2>
            <div className="mt-6 grid gap-3">{faqs.map((faq) => <details key={faq.question} className="rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"><summary className="cursor-pointer list-none text-base font-black leading-7">{faq.question}</summary><p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">{faq.answer}</p></details>)}</div>
          </section>

          <section className="mt-14 rounded-[30px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black text-cyan-100"><BadgeCheck size={15} className="ml-1" /> جاهز للخدمة؟</span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">إذا انتهيت من مرحلة الاختيار، انتقل إلى نطاق التصميم نفسه</h2>
            <p className="mt-4 max-w-[820px] text-base font-bold leading-8 text-white/75">صفحة التصميم الإنشائي هي الصفحة التجارية التي تشرح المدخلات والتسليمات والخطوة التالية. هذه الصفحة تبقى دليل اختيار حتى لا تنافس نفس نية البحث.</p>
            <Link href="/تصميم-انشائي/" className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 text-sm font-black text-[#071321]">افتح خدمة التصميم الإنشائي</Link>
          </section>
        </article>
      </div>
    </main>
  );
}
