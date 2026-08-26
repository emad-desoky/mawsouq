import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HardHat,
  Landmark,
  MapPin,
  Ruler,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import OneFloorCostCalculator from "./OneFloorCostCalculator";
import MawsooqProofSection from "@/components/ar/MawsooqProofSection";
import {
  business,
  existingStrongBlogs,
  getPublishedClusters,
  pillar,
  pillarUrl,
  routes,
  whatsappLink,
} from "./clusters";

export const revalidate = 86400;

const pageTitle = pillar.metaTitle;
const pageDescription = pillar.description;
const publishedTime = pillar.datePublished;
const modifiedTime = pillar.dateModified;
const whatsappUrl = whatsappLink(
  "مرحبًا موسوق، أريد تقدير تكلفة بناء دور واحد. هذه مساحة البناء والمدينة ونوع التنفيذ:",
);

const publishedClusters = getPublishedClusters();
const publishedStrongBlogs = existingStrongBlogs.filter(
  (post) => post.isLive === true,
);

const heroImage = pillar.image;
const contentImages = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=90",
    alt: "تنفيذ الهيكل الخرساني ضمن تكلفة بناء دور واحد",
    caption:
      "سعر العظم لا يُقارن بطريقة صحيحة إلا بعد توحيد نطاق الأعمال والمواد والمواصفات.",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=90",
    alt: "مخططات معمارية وإنشائية لحساب تكلفة بناء منزل دور واحد",
    caption:
      "المخطط المعماري والإنشائي وجدول الكميات يحولان سعر المتر العام إلى ميزانية قابلة للمراجعة.",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90",
    alt: "منزل دور واحد مكتمل التشطيب في السعودية",
    caption:
      "التسليم على المفتاح يشمل مراحل أكثر من العظم، لذلك يجب تحديد جودة كل بند قبل مقارنة الأسعار.",
  },
];

const priceBands = [
  {
    label: "عظم — مصنعية فقط",
    value: "140–250 ر.س/م²",
    note: "أجرة تنفيذ تقريبية، والمالك يشتري المواد.",
    tone: "from-sky-500/18 to-blue-500/5",
  },
  {
    label: "عظم — بالمواد",
    value: "650–950 ر.س/م²",
    note: "نطاق تخطيطي يتأثر بالتربة والمخططات والمدينة.",
    tone: "from-cyan-500/18 to-sky-500/5",
  },
  {
    label: "تسليم مفتاح اقتصادي",
    value: "1,350–1,850 ر.س/م²",
    note: "مواصفات عملية واضحة بدون إضافات فاخرة.",
    tone: "from-emerald-500/18 to-teal-500/5",
  },
  {
    label: "تسليم مفتاح متوسط",
    value: "1,850–2,600 ر.س/م²",
    note: "تشطيبات ومواد متوسطة مع خيارات أوسع.",
    tone: "from-amber-500/18 to-orange-500/5",
  },
  {
    label: "تشطيب فاخر",
    value: "2,700–4,000+ ر.س/م²",
    note: "قد يزيد مع الرخام والتكييف المركزي والمنزل الذكي.",
    tone: "from-fuchsia-500/16 to-purple-500/5",
  },
];

const examples = [
  {
    area: "100 م²",
    href: "/تكلفة-بناء-دور-واحد-100-متر/",
    skeleton: "65,000–95,000 ر.س",
    medium: "185,000–260,000 ر.س",
    reserve: "18,500–39,000 ر.س",
  },
  {
    area: "150 م²",
    skeleton: "97,500–142,500 ر.س",
    medium: "277,500–390,000 ر.س",
    reserve: "27,750–58,500 ر.س",
  },
  {
    area: "200 م²",
    href: "/تكلفة-بناء-دور-واحد-200-متر/",
    skeleton: "130,000–190,000 ر.س",
    medium: "370,000–520,000 ر.س",
    reserve: "37,000–78,000 ر.س",
  },
  {
    area: "300 م²",
    href: "/تكلفة-بناء-دور-واحد-300-متر/",
    skeleton: "195,000–285,000 ر.س",
    medium: "555,000–780,000 ر.س",
    reserve: "55,500–117,000 ر.س",
  },
];

const budgetDistribution = [
  {
    label: "الهيكل والأساسات والمباني",
    percentage: 35,
    note: "حفر، قواعد، خرسانة، حديد، بلك وأعمال مرتبطة بالعظم.",
  },
  {
    label: "الكهرباء والسباكة والتكييف",
    percentage: 20,
    note: "تأسيسات وأنظمة وخطوط ونقاط وأجهزة بحسب العقد.",
  },
  {
    label: "التشطيبات الداخلية",
    percentage: 28,
    note: "أرضيات ودهانات وأسقف وأبواب وأدوات صحية وتشطيبات نهائية.",
  },
  {
    label: "الواجهات والشبابيك والعزل",
    percentage: 10,
    note: "تتغير النسبة بقوة مع الزجاج والكسوات وتفاصيل الواجهة.",
  },
  {
    label: "تصميم ورخص وإشراف واحتياطي",
    percentage: 7,
    note: "نسبة إرشادية وليست بديلًا عن تسعير البنود الفعلية.",
  },
];

const stages = [
  {
    title: "تحديد مسطح البناء الحقيقي",
    text: "ابدأ بمسطح الدور المبني، وليس مساحة الصك أو الأرض. افصل الارتدادات والأفنية والمواقف والفراغات غير المبنية.",
    icon: Ruler,
  },
  {
    title: "التصميم وفحص التربة",
    text: "المخطط المعماري يحدد المساحات، والتصميم الإنشائي وفحص التربة يحددان الأساسات والكميات وطريقة التنفيذ.",
    icon: FileText,
  },
  {
    title: "الرخصة وتجهيز الموقع",
    text: "تفويض المكتب الهندسي وإصدار الرخصة وتجهيز الموقع والحفر والردم ونقل المخلفات بنود يجب إدخالها في الميزانية.",
    icon: Landmark,
  },
  {
    title: "العظم والهيكل",
    text: "يشمل القواعد والأعمدة والأسقف والدرج والبلك والعزل حسب نطاق العقد، مع اختبارات واستلامات هندسية لكل مرحلة.",
    icon: HardHat,
  },
  {
    title: "التأسيسات والتشطيب",
    text: "تُنفذ الكهرباء والسباكة والتكييف والعزل قبل الإغلاقات، ثم الأرضيات والدهانات والأبواب والواجهات والأعمال النهائية.",
    icon: Building2,
  },
  {
    title: "الفحص والاستلام",
    text: "لا تجعل الدفعة الأخيرة قبل فحص الملاحظات والتشغيل والتأكد من المخططات النهائية والضمانات وتسليم الموقع.",
    icon: ClipboardCheck,
  },
];

const hiddenCosts = [
  "فحص التربة والرفع المساحي والتصميم المعماري والإنشائي والإشراف.",
  "رسوم الرخصة والتأمينات أو المتطلبات المرتبطة بالجهات المختصة بحسب المشروع.",
  "الحفر والردم ونقل المخلفات وخفض المياه أو معالجة التربة عند الحاجة.",
  "سور الموقع والمستودع المؤقت والكهرباء والمياه أثناء التنفيذ وحراسة المواد.",
  "العزل الحراري والمائي واختباراته ومعالجة أي تسرب قبل الإغلاق.",
  "التكييف والمطبخ والخزائن والأجهزة والمصعد والحديقة والمظلات إن لم تدخل في عرض المتر.",
  "اختلاف ضريبة القيمة المضافة: هل العرض شامل الضريبة أم غير شامل؟",
  "التغييرات بعد بدء التنفيذ، وهي من أكثر أسباب تجاوز ميزانية بناء دور واحد.",
];

const contractChecklist = [
  "المساحة المحتسبة وطريقة القياس واضحة داخل العرض.",
  "نطاق العظم أو التشطيب مكتوب بندًا بندًا وليس عبارة عامة.",
  "الماركات والمواصفات والكميات أو بدائلها معتمدة قبل التنفيذ.",
  "جدول الدفعات مرتبط بإنجاز واستلام مراحل محددة.",
  "مدة التنفيذ وتبعات التأخير وآلية التمديد موضحة.",
  "أي تغيير يحتاج أمر تغيير مكتوب يوضح السعر والمدة.",
  "الاختبارات والإشراف والاستلام والضمانات محددة.",
  "السعر يوضح هل يشمل الضريبة والنقل والعمالة والمعدات والمخلفات.",
];

const tocItems = [
  { id: "quick-answer", label: "الإجابة السريعة والأسعار" },
  { id: "calculator", label: "حاسبة تكلفة بناء دور واحد" },
  { id: "meaning", label: "ماذا يعني بناء دور واحد؟" },
  { id: "formula", label: "طريقة الحساب الصحيحة" },
  { id: "price-table", label: "سعر المتر في السعودية 2026" },
  { id: "examples", label: "أمثلة 100 و200 و300 متر" },
  { id: "breakdown", label: "توزيع ميزانية البناء" },
  { id: "factors", label: "العوامل التي تغير التكلفة" },
  { id: "stages", label: "مراحل البناء" },
  { id: "hidden-costs", label: "التكاليف الخفية" },
  { id: "contract", label: "قائمة فحص العقد" },
  { id: "mistakes", label: "أخطاء ترفع الميزانية" },
  { id: "official-sources", label: "المصادر الرسمية" },
  { id: "related-guides", label: "الأدلة المرتبطة" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

const faqs = [
  {
    question: "كم تكلفة بناء دور واحد في السعودية 2026؟",
    answer:
      "تختلف تكلفة بناء دور واحد حسب مسطح البناء ونوع التنفيذ والمدينة والتربة والمواصفات. كنطاق تخطيطي، قد يبدأ العظم بالمواد من نحو 650 إلى 950 ريالًا للمتر، بينما يبدأ التسليم المفتاح الاقتصادي تقريبًا من 1,350 ريالًا وقد يتجاوز 4,000 ريال للمتر في المشاريع الفاخرة. يجب طلب جدول كميات وعرض مفصل قبل الاعتماد المالي.",
  },
  {
    question: "كم تكلفة بناء دور واحد 200 متر؟",
    answer:
      "بناء دور واحد 200 متر عظم بالمواد قد يقع مبدئيًا بين 130 ألفًا و190 ألف ريال، بينما التسليم المفتاح المتوسط قد يقع بين 370 ألفًا و520 ألف ريال قبل إضافة احتياطي 10% إلى 15% وأي بنود غير مشمولة مثل التصميم والرخصة والتكييف والمطبخ والضريبة. هذه أرقام تخطيطية وليست عرض سعر.",
  },
  {
    question: "هل أحسب التكلفة على مساحة الأرض أم مساحة البناء؟",
    answer:
      "يُحسب سعر المتر عادة على إجمالي المسطح المبني الفعلي، لا على مساحة الأرض كاملة. إذا كانت الأرض 300 متر ونسبة البناء تسمح بمسطح 190 متر مثلًا، فالحساب الأساسي يكون على 190 متر. اسأل المقاول أيضًا عن طريقة احتساب الدرج والأسوار والخزانات والملاحق حتى لا تختلف المساحة بين عرض وآخر.",
  },
  {
    question: "ما الفرق بين بناء دور أرضي وإضافة دور فوق منزل قائم؟",
    answer:
      "الدور الأرضي الجديد يحتاج تجهيز موقع وحفر وأساسات، بينما إضافة دور فوق منزل قائم تبدأ بتقرير إنشائي يثبت قدرة الأساسات والأعمدة على تحمل الأحمال الجديدة، ثم مراجعة الرخصة والاشتراطات. قد تقل بعض بنود الحفر، لكن قد تظهر تكاليف تدعيم وربط وحماية وتشغيل المبنى القائم.",
  },
  {
    question: "هل سعر متر العظم بالمواد يشمل العزل والبلك؟",
    answer:
      "لا يوجد تعريف موحد في جميع عروض المقاولين. بعض العروض تشمل الخرسانة والحديد والبلك والعزل الأساسي، وأخرى تستبعد الحفر أو الردم أو الخزان أو السور أو الاختبارات. لذلك لا تعتمد على عبارة العظم بالمواد وحدها؛ اطلب قائمة نطاق واضحة ومواصفات وكميات وطريقة قياس.",
  },
  {
    question: "كم احتياطي أضيف على ميزانية بناء دور واحد؟",
    answer:
      "يُنصح عادة باحتياطي تخطيطي من 10% إلى 15% عندما تكون المخططات والمواصفات واضحة. قد تحتاج نسبة أكبر إذا لم يكتمل التصميم أو كانت التربة غير معروفة أو تتوقع تغييرات في التشطيب. الاحتياطي ليس بندًا للصرف العشوائي، بل حماية من تغيّر الكميات والأسعار والظروف الميدانية.",
  },
  {
    question: "كيف أقارن بين عرضي سعر لبناء دور واحد؟",
    answer:
      "وحّد المساحة ونطاق العمل والمواصفات أولًا، ثم قارن سعر كل بند والكمية والماركة والمدة وجدول الدفعات والضمان والضريبة. العرض الأقل إجمالًا قد يكون ناقصًا في العزل أو التأسيسات أو الواجهات أو نقل المخلفات. المقارنة الصحيحة تكون على نفس النطاق، لا على سعر المتر منفردًا.",
  },
  {
    question: "ما أول خطوة قبل طلب سعر بناء دور واحد؟",
    answer:
      "ابدأ بمخطط معماري أولي يحدد مسطح البناء والاحتياجات، ثم افحص التربة وأعد التصميم الإنشائي وجدول كميات مبدئي. بعد ذلك اطلب عروضًا من مقاولين على نفس الوثائق. بهذه الطريقة تحصل على أرقام قابلة للمقارنة بدل تقديرات عامة قد تتغير بعد بدء العمل.",
  },
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pillar.keywords,
  alternates: {
    canonical: pillarUrl,
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
    url: pillarUrl,
    siteName: business.name,
    locale: "ar_SA",
    publishedTime,
    modifiedTime,
    images: [
      {
        url: heroImage,
        width: 1024,
        height: 768,
        alt: pillar.imageAlt,
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
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(37,211,102,0.25)] transition duration-300 hover:-translate-y-1 ${className}`}
      aria-label="تواصل مع موسوق لحساب تكلفة بناء دور واحد"
    >
      {children}
      <ArrowLeft size={17} aria-hidden="true" />
    </a>
  );
}

function MiniCta({ title, text, button = "اطلب تقديرًا مبدئيًا" }) {
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

function RelatedCard({ post }) {
  if (!post?.isLive) return null;

  return (
    <Link
      href={post.href}
      className="group overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)] hover:shadow-[var(--card-shadow)]"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[color:var(--brand)]">
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
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
          {post.anchor || `اقرأ ${post.title}`}
          <ArrowLeft size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function OneFloorCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pillarUrl}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pillarUrl,
        },
        headline: pillar.title,
        description: pageDescription,
        image: {
          "@type": "ImageObject",
          url: heroImage,
          width: 1024,
          height: 768,
        },
        author: {
          "@type": "Organization",
          name: pillar.author.name,
          url: `https://mawsouq.com${routes.about}`,
        },
        publisher: {
          "@type": "Organization",
          name: business.name,
          url: "https://mawsouq.com",
          logo: {
            "@type": "ImageObject",
            url: business.logo,
          },
        },
        datePublished: publishedTime,
        dateModified: modifiedTime,
        inLanguage: "ar-SA",
        articleSection: pillar.category,
        keywords: pillar.keywords.join(", "),
        wordCount: 2400,
        about: [
          { "@type": "Thing", name: "تكلفة البناء في السعودية" },
          { "@type": "Thing", name: "بناء دور واحد" },
          { "@type": "Thing", name: "سعر متر البناء" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pillarUrl}#howto`,
        name: "طريقة حساب تكلفة بناء دور واحد",
        description:
          "خطوات عملية لتقدير تكلفة بناء دور واحد في السعودية قبل طلب عروض المقاولين.",
        totalTime: "PT15M",
        step: stages.map((stage, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: stage.title,
          text: stage.text,
          url: `${pillarUrl}#stages`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pillarUrl}#breadcrumb`,
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
            name: "تكلفة بناء دور واحد",
            item: pillarUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pillarUrl}#faq`,
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
        <div className="mx-auto grid w-[min(100%-32px,1720px)] gap-8 overflow-hidden rounded-[40px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] lg:grid-cols-[1.06fr_0.94fr] lg:p-8 xl:p-10">
          <div className="flex flex-col justify-center py-3 lg:py-8">
            <nav
              aria-label="مسار التنقل"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-faint)]"
            >
              <Link href="/" className="hover:text-[color:var(--brand)]">
                الرئيسية
              </Link>
              <span>←</span>
              <Link
                href={routes.blogHub}
                className="hover:text-[color:var(--brand)]"
              >
                المدونات
              </Link>
              <span>←</span>
              <span>تكلفة بناء دور واحد</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                دليل أسعار البناء في السعودية 2026
              </span>
              <span className="text-xs font-black text-[color:var(--ink-faint)]">
                آخر تحديث: 17 يوليو 2026
              </span>
            </div>

            <h1 className="mt-6 max-w-[950px] text-4xl font-black leading-[1.2] tracking-[-0.055em] text-[color:var(--ink)] sm:text-5xl xl:text-7xl">
              تكلفة بناء دور واحد في السعودية 2026: سعر المتر وحاسبة تقديرية
            </h1>

            <p className="mt-6 max-w-[900px] text-lg font-bold leading-9 text-[color:var(--ink-muted)] md:text-xl md:leading-10">
              تعرف على <strong>تكلفة بناء دور واحد</strong> للعظم أو التسليم على
              المفتاح، واحسب ميزانية 100 أو 200 أو 300 متر، وافهم البنود التي لا
              تظهر في سعر المتر قبل أن تطلب عرضًا من المقاول.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(47,134,246,0.24)] transition duration-300 hover:-translate-y-1"
              >
                <Calculator size={18} />
                احسب التكلفة الآن
              </a>
              <WhatsAppButton>أرسل تفاصيل مشروعك</WhatsAppButton>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
                <strong className="block text-2xl font-black text-[color:var(--ink)]">
                  650–950
                </strong>
                <span className="mt-1 block text-xs font-bold leading-6 text-[color:var(--ink-muted)]">
                  ريال/م² عظم بالمواد — تقديري
                </span>
              </div>
              <div className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4">
                <strong className="block text-2xl font-black text-[color:var(--ink)]">
                  10–15%
                </strong>
                <span className="mt-1 block text-xs font-bold leading-6 text-[color:var(--ink-muted)]">
                  احتياطي مالي مقترح للتخطيط
                </span>
              </div>
              <a
                href="https://www.stats.gov.sa/documents/20117/2435267/CCI%2BMay%2B2026-AR.pdf/44915a92-2b45-b084-79b6-df68d18a43ec"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-4 transition hover:border-[color:var(--brand)]"
              >
                <strong className="block text-2xl font-black text-[color:var(--ink)]">
                  +2.5%
                </strong>
                <span className="mt-1 block text-xs font-bold leading-6 text-[color:var(--ink-muted)]">
                  ارتفاع سنوي لتكاليف القطاع السكني في مايو 2026
                </span>
              </a>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[32px] lg:min-h-[650px]">
            <Image
              src={heroImage}
              alt={pillar.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(3,16,30,0.88))]" />
            <div className="absolute inset-x-5 bottom-5 rounded-[26px] border border-white/15 bg-[#071321]/82 p-5 text-white backdrop-blur-xl md:inset-x-7 md:bottom-7 md:p-6">
              <p className="text-xs font-black text-cyan-200">
                أهم قاعدة قبل الحساب
              </p>
              <p className="mt-2 text-lg font-black leading-8 md:text-xl">
                لا تضرب مساحة الأرض في سعر المتر. استخدم مسطح البناء الحقيقي،
                ثم أضف البنود غير المشمولة والاحتياطي المالي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-answer" className="mt-10 scroll-mt-32">
        <div className="mx-auto w-[min(100%-32px,1720px)] rounded-[36px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-black text-[color:var(--brand)]">
                الإجابة المباشرة
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] md:text-4xl">
                كم سعر بناء دور واحد في السعودية؟
              </h2>
              <p className="mt-3 max-w-4xl text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                هذه نطاقات تخطيطية واسعة للسوق السعودي في 2026. لا تعتبر تسعيرة
                رسمية أو عرضًا ملزمًا؛ لأن المخطط والتربة والمدينة والمواصفات
                ونطاق العقد قد تنقل المشروع من فئة إلى أخرى.
              </p>
            </div>
            <a
              href="#price-table"
              className="inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]"
            >
              شاهد ما يشمله كل سعر
              <ArrowLeft size={17} />
            </a>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {priceBands.map((band) => (
              <article
                key={band.label}
                className={`rounded-[26px] border border-[color:var(--hairline)] bg-gradient-to-br ${band.tone} p-5`}
              >
                <span className="text-xs font-black text-[color:var(--ink-faint)]">
                  {band.label}
                </span>
                <strong className="mt-3 block text-2xl font-black text-[color:var(--ink)]">
                  {band.value}
                </strong>
                <p className="mt-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                  {band.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              {
                icon: BadgeCheck,
                title: "الأفضل للتخطيط",
                text: "استخدم نطاقًا لا رقمًا واحدًا، ثم اختبر الميزانية على الحد الأعلى.",
              },
              {
                icon: ShieldCheck,
                title: "الأفضل للمقارنة",
                text: "اطلب نفس المخططات والمواصفات من جميع المقاولين قبل مقارنة السعر.",
              },
              {
                icon: WalletCards,
                title: "الأفضل لتجنب التعثر",
                text: "افصل ميزانية العظم عن التشطيب، وأبقِ احتياطيًا لا يُصرف إلا بموافقة مكتوبة.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--brand)] text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 grid w-[min(100%-32px,1720px)] gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0 rounded-[38px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] md:p-9 xl:p-12">
          <section id="calculator" className="scroll-mt-32">
            <OneFloorCostCalculator />
          </section>

          <section id="meaning" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Search Intent"
              title="ماذا يقصد الباحث بعبارة تكلفة بناء دور واحد؟"
            >
              الاستعلام يبدو بسيطًا، لكنه قد يشير إلى مشروعين مختلفين تمامًا.
              تحديد النوع من البداية يمنع تطبيق سعر غير مناسب على مشروعك.
            </SectionTitle>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-[color:var(--brand)] text-white">
                  <Landmark size={22} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-[color:var(--ink)]">
                  بناء دور أرضي جديد على أرض فارغة
                </h3>
                <p className="mt-3 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                  هنا تدخل أعمال تجهيز الموقع والحفر والأساسات والقواعد والخزان
                  والسور والردم والهيكل. تكلفة المتر تتأثر بتقرير التربة، ونسبة
                  البناء، وشكل المخطط، وطول البحور، والواجهة، وموقع الأرض.
                </p>
              </div>

              <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-amber-500 text-white">
                  <Building2 size={22} />
                </div>
                <h3 className="mt-5 text-2xl font-black text-[color:var(--ink)]">
                  إضافة دور علوي فوق منزل قائم
                </h3>
                <p className="mt-3 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                  لا تبدأ بالسعر. البداية الصحيحة هي فحص إنشائي للأساسات والأعمدة
                  والبلاطات ثم مراجعة الرخصة. قد لا تحتاج حفرًا جديدًا، لكن قد
                  تحتاج تدعيمًا وربطًا وحماية للمبنى القائم ونقل خدمات أثناء العمل.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[26px] border border-amber-500/30 bg-amber-500/10 p-5">
              <div className="flex gap-3">
                <AlertTriangle
                  className="mt-1 shrink-0 text-amber-600"
                  size={22}
                />
                <p className="text-base font-bold leading-8 text-[color:var(--ink)]">
                  لا تستخدم حاسبة الدور الأرضي لتسعير تعلية منزل قائم. اختلاف
                  الحالة الإنشائية والرخصة وطريقة الربط قد يجعل النتيجة مضللة.
                </p>
              </div>
            </div>
          </section>

          <section id="formula" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Calculation Formula"
              title="طريقة حساب تكلفة بناء دور واحد بشكل صحيح"
            >
              المعادلة المفيدة ليست “مساحة الأرض × سعر المتر”. الحساب القابل
              للدفاع عنه يبني الميزانية على خمسة مكونات واضحة.
            </SectionTitle>

            <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[#071321] p-6 text-white md:p-8">
              <p className="text-center text-sm font-black text-cyan-200">
                المعادلة التخطيطية
              </p>
              <p className="mt-4 text-center text-2xl font-black leading-[1.8] md:text-3xl">
                مسطح البناء × سعر فئة التنفيذ
                <br />+ التصميم والرخص والإشراف
                <br />+ البنود المستبعدة من عرض المتر
                <br />+ الضريبة إن لم تكن مشمولة
                <br />+ احتياطي 10% إلى 15%
              </p>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "ثبت المساحة",
                  text: "اطلب من المكتب الهندسي بيان مسطح البناء. افصل مسطح الدور عن السور والخزان والمظلات والملحقات.",
                },
                {
                  number: "02",
                  title: "حدد فئة التنفيذ",
                  text: "هل تريد مصنعية عظم، عظمًا بالمواد، نصف تشطيب، أم تسليم مفتاح؟ لا تخلط بين هذه الفئات.",
                },
                {
                  number: "03",
                  title: "اكتب الاستبعادات",
                  text: "اسأل صراحة عن الحفر والعزل والتكييف والواجهات والأبواب والمطبخ والخزائن والحدائق والنقل والضريبة.",
                },
                {
                  number: "04",
                  title: "اختبر السيناريو الأعلى",
                  text: "خطط على الحد الأعلى من النطاق. إذا نجح التمويل عنده، فأنت أقل عرضة لإيقاف المشروع في منتصفه.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6"
                >
                  <span className="text-3xl font-black text-[color:var(--brand)]">
                    {item.number}
                  </span>
                  <h3 className="mt-3 text-xl font-black text-[color:var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-8 overflow-hidden rounded-[30px] border border-[color:var(--hairline)]">
              <Image
                src={contentImages[1].src}
                alt={contentImages[1].alt}
                width={1500}
                height={900}
                sizes="(max-width: 1024px) 100vw, 920px"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="bg-[color:var(--surface-2)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                {contentImages[1].caption}
              </p>
            </div>
          </section>

          <section id="price-table" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="2026 Price Ranges"
              title="سعر متر بناء دور واحد في السعودية 2026"
            >
              الجدول التالي يوضح نطاقات تخطيطية، وما يجب أن تسأل عنه قبل اعتبار
              السعر قابلًا للمقارنة. التقدير النهائي يحتاج مخططات ومواصفات وموقعًا
              محددًا.
            </SectionTitle>

            <div className="overflow-x-auto rounded-[28px] border border-[color:var(--hairline)]">
              <table className="w-full min-w-[850px] border-collapse text-right">
                <thead className="bg-[#071321] text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black">فئة التنفيذ</th>
                    <th className="px-5 py-4 text-sm font-black">نطاق المتر</th>
                    <th className="px-5 py-4 text-sm font-black">
                      ما الذي يشمله عادة؟
                    </th>
                    <th className="px-5 py-4 text-sm font-black">
                      أهم سؤال قبل التعاقد
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "عظم مصنعية فقط",
                      "140–250 ر.س",
                      "عمالة تنفيذ الهيكل حسب نطاق العقد",
                      "من يشتري المواد؟ ومن يتحمل الهدر والنقل والمعدات؟",
                    ],
                    [
                      "عظم بالمواد",
                      "650–950 ر.س",
                      "خرسانة وحديد وبلك وأعمال عظم محددة",
                      "هل يشمل الحفر والردم والعزل والخزان والسور والاختبارات؟",
                    ],
                    [
                      "تسليم مفتاح اقتصادي",
                      "1,350–1,850 ر.س",
                      "عظم وتأسيسات وتشطيب عملي وفق مواصفات اقتصادية",
                      "ما الماركات وحدود الاختيار وسعر البنود البديلة؟",
                    ],
                    [
                      "تسليم مفتاح متوسط",
                      "1,850–2,600 ر.س",
                      "تشطيب أوسع وجودة أفضل للأرضيات والأبواب والأنظمة",
                      "هل التكييف والواجهات والمطبخ والخزائن ضمن السعر؟",
                    ],
                    [
                      "تسليم مفتاح فاخر",
                      "2,700–4,000+ ر.س",
                      "مواد فاخرة وتفاصيل خاصة وأنظمة إضافية حسب التصميم",
                      "هل السعر سقف نهائي أم ميزانية أولية قابلة للزيادة؟",
                    ],
                  ].map((row, rowIndex) => (
                    <tr
                      key={row[0]}
                      className={
                        rowIndex % 2 === 0
                          ? "bg-[color:var(--surface)]"
                          : "bg-[color:var(--surface-2)]"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cell}
                          className={`border-t border-[color:var(--hairline)] px-5 py-4 text-sm leading-7 ${
                            cellIndex < 2
                              ? "font-black text-[color:var(--ink)]"
                              : "font-semibold text-[color:var(--ink-muted)]"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
              <strong className="text-[color:var(--ink)]">مهم:</strong> الهيئة
              العامة للإحصاء تقيس اتجاه تكاليف مدخلات البناء، لكنها لا تنشر سعر
              مقاول موحد للمتر. لذلك نستخدم المؤشر لفهم اتجاه السوق، ونستخدم
              المخططات وجدول الكميات وعروض المقاولين لتحديد تكلفة المشروع نفسه.
            </p>

            <MiniCta
              title="هل لديك عرض سعر بالمتر فقط؟"
              text="أرسله مع مساحة المشروع والمدينة. سنوضح لك الأسئلة التي يجب طرحها لمعرفة البنود المشمولة والمستبعدة."
              button="راجع نطاق العرض"
            />
          </section>

          <section id="examples" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Worked Examples"
              title="أمثلة تكلفة بناء دور واحد 100 و150 و200 و300 متر"
            >
              الأمثلة مبنية على العظم بالمواد 650–950 ريال/م²، والتسليم المفتاح
              المتوسط 1,850–2,600 ريال/م². عمود الاحتياطي يعرض 10% إلى 15% من
              ميزانية التسليم المتوسط.
            </SectionTitle>

            <div className="overflow-x-auto rounded-[28px] border border-[color:var(--hairline)]">
              <table className="w-full min-w-[760px] border-collapse text-right">
                <thead className="bg-[color:var(--surface-2)]">
                  <tr>
                    <th className="px-5 py-4 text-sm font-black text-[color:var(--ink)]">
                      مسطح الدور
                    </th>
                    <th className="px-5 py-4 text-sm font-black text-[color:var(--ink)]">
                      عظم بالمواد
                    </th>
                    <th className="px-5 py-4 text-sm font-black text-[color:var(--ink)]">
                      تسليم مفتاح متوسط
                    </th>
                    <th className="px-5 py-4 text-sm font-black text-[color:var(--ink)]">
                      احتياطي 10–15%
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((example) => (
                    <tr key={example.area}>
                      <td className="border-t border-[color:var(--hairline)] px-5 py-4 text-base font-black text-[color:var(--brand)]">
                        {example.href ? (
                          <Link
                            href={example.href}
                            className="underline decoration-[color:var(--brand)]/35 underline-offset-4 hover:decoration-[color:var(--brand)]"
                          >
                            {example.area} — افتح الدليل التفصيلي
                          </Link>
                        ) : (
                          example.area
                        )}
                      </td>
                      <td className="border-t border-[color:var(--hairline)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                        {example.skeleton}
                      </td>
                      <td className="border-t border-[color:var(--hairline)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                        {example.medium}
                      </td>
                      <td className="border-t border-[color:var(--hairline)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                        {example.reserve}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-7 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <h3 className="text-2xl font-black text-[color:var(--ink)]">
                مثال عملي: تكلفة بناء دور واحد 200 متر
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-[color:var(--surface)] p-5">
                  <span className="text-xs font-black text-[color:var(--ink-faint)]">
                    العظم بالمواد
                  </span>
                  <strong className="mt-2 block text-xl font-black text-[color:var(--ink)]">
                    130,000–190,000 ر.س
                  </strong>
                </div>
                <div className="rounded-2xl bg-[color:var(--surface)] p-5">
                  <span className="text-xs font-black text-[color:var(--ink-faint)]">
                    تسليم مفتاح متوسط
                  </span>
                  <strong className="mt-2 block text-xl font-black text-[color:var(--ink)]">
                    370,000–520,000 ر.س
                  </strong>
                </div>
                <div className="rounded-2xl bg-[color:var(--surface)] p-5">
                  <span className="text-xs font-black text-[color:var(--ink-faint)]">
                    مع احتياطي 10–15%
                  </span>
                  <strong className="mt-2 block text-xl font-black text-[color:var(--ink)]">
                    407,000–598,000 ر.س
                  </strong>
                </div>
              </div>
              <p className="mt-5 text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                هذا المثال لا يعني أن 598 ألف ريال سعر نهائي. الهدف هو اختبار
                قدرتك المالية عند سيناريو محافظ. بعد اكتمال المخططات، استبدل هذه
                النطاقات بجدول كميات وعروض مفصلة. راجع أيضًا{" "}
                <Link
                  href="/تكلفة-بناء-دور-واحد-200-متر/"
                  className="font-black text-[color:var(--brand)] underline underline-offset-4"
                >
                  حسبة بناء دور واحد 200 متر بالتفصيل
                </Link>
                .
              </p>
            </div>
          </section>

          <section id="breakdown" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Budget Visualization"
              title="كيف تتوزع ميزانية بناء دور واحد؟"
            >
              هذا توزيع بصري إرشادي لمشروع تسليم مفتاح متوسط. النسب تتغير من
              مشروع لآخر، لكنها تساعدك على اكتشاف العرض الذي يضع رقمًا كبيرًا تحت
              بند واحد ويخفي بقية البنود.
            </SectionTitle>

            <div className="space-y-5 rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-8">
              {budgetDistribution.map((item) => (
                <div key={item.label}>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-black text-[color:var(--ink)]">
                        {item.label}
                      </h3>
                      <p className="mt-1 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                        {item.note}
                      </p>
                    </div>
                    <strong className="text-xl font-black text-[color:var(--brand)]">
                      {item.percentage}%
                    </strong>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-[color:var(--surface)]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#2f86f6,#06c7f2)]"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="my-8 overflow-hidden rounded-[30px] border border-[color:var(--hairline)]">
              <Image
                src={contentImages[0].src}
                alt={contentImages[0].alt}
                width={1500}
                height={900}
                sizes="(max-width: 1024px) 100vw, 920px"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <p className="bg-[color:var(--surface-2)] px-5 py-4 text-sm font-bold text-[color:var(--ink-muted)]">
                {contentImages[0].caption}
              </p>
            </div>
          </section>

          <section id="factors" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Cost Drivers"
              title="العوامل التي ترفع أو تخفض تكلفة بناء دور واحد"
            >
              الفرق بين مشروعين لهما المساحة نفسها قد يكون كبيرًا. السبب أن سعر
              المتر نتيجة لمجموعة قرارات هندسية وتجارية، وليس رقمًا مستقلًا.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "طبيعة التربة والأساسات",
                  text: "التربة الضعيفة أو المياه الجوفية أو الحاجة لمعالجة خاصة قد ترفع الحفر والردم ونوع الأساسات والخرسانة والعزل.",
                  icon: Landmark,
                },
                {
                  title: "شكل المخطط والبحور",
                  text: "المساحات المفتوحة والبحور الطويلة والبروزات والارتفاعات غير المعتادة تزيد التعقيد والكميات مقارنة بمخطط منتظم.",
                  icon: Ruler,
                },
                {
                  title: "المدينة وسهولة الموقع",
                  text: "العمالة والنقل وتوفر المواد ودخول المعدات والازدحام ومساحة التخزين عوامل تختلف بين الرياض وجدة والشرقية والمدن الأخرى.",
                  icon: MapPin,
                },
                {
                  title: "مستوى العزل والطاقة",
                  text: "العزل الحراري والمائي والزجاج ونوع الشبابيك ومتطلبات كفاءة الطاقة استثمار مهم، لكنه يغير الميزانية الأولية.",
                  icon: ShieldCheck,
                },
                {
                  title: "جودة التشطيب",
                  text: "فروق الأرضيات والأدوات الصحية والأبواب والدهانات والواجهات والإضاءة قد تضاعف ميزانية التشطيب حتى مع ثبات العظم.",
                  icon: Building2,
                },
                {
                  title: "التغييرات أثناء التنفيذ",
                  text: "نقل جدار أو نقطة صرف بعد التنفيذ لا يساوي تكلفة القرار نفسه قبل البداية؛ لأنك تدفع هدمًا وإعادة عمل ووقتًا إضافيًا.",
                  icon: AlertTriangle,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6"
                  >
                    <div className="grid size-11 place-items-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--brand)] shadow-sm">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-4 text-xl font-black text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 md:p-8">
              <h3 className="text-2xl font-black text-[color:var(--ink)]">
                هل البناء في الرياض أغلى من مدينة أخرى؟
              </h3>
              <p className="mt-4 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                لا توجد نسبة ثابتة تصلح لكل مشروع. المدن الكبيرة قد ترتفع فيها
                تكلفة بعض العمالة أو إدارة الموقع، لكنها توفر موردين ومقاولين أكثر.
                المدن الأبعد قد تقل فيها أجور معينة، بينما يرتفع النقل أو تقل خيارات
                المواد. لذلك استخدم معامل المدينة في الحاسبة كتعديل أولي فقط، ثم
                اطلب عروضًا محلية على نفس المخططات.
              </p>
            </div>
          </section>

          <section id="stages" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Construction Timeline"
              title="مراحل بناء دور واحد من الفكرة حتى الاستلام"
            >
              ترتيب المراحل مهم للميزانية والجودة. القفز إلى التنفيذ قبل اكتمال
              المعلومات يجعل التغييرات أغلى ويضعف القدرة على مقارنة المقاولين.
            </SectionTitle>

            <div className="relative space-y-5 before:absolute before:bottom-8 before:right-[25px] before:top-8 before:w-px before:bg-[color:var(--hairline-strong)]">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div
                    key={stage.title}
                    className="relative flex gap-5 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:p-6"
                  >
                    <div className="relative z-10 grid size-[52px] shrink-0 place-items-center rounded-2xl bg-[color:var(--brand)] text-white shadow-[0_12px_24px_rgba(47,134,246,0.22)]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-xs font-black text-[color:var(--brand)]">
                        المرحلة {index + 1}
                      </span>
                      <h3 className="mt-1 text-xl font-black text-[color:var(--ink)]">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                        {stage.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="hidden-costs" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Hidden Costs"
              title="تكاليف لا تظهر غالبًا في سعر متر البناء"
            >
              انخفاض سعر المتر لا يعني انخفاض التكلفة النهائية. كثير من العروض
              تبدو جذابة لأنها تستبعد بنودًا ستدفعها لاحقًا من ميزانية منفصلة.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {hiddenCosts.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-sm font-black text-amber-600">
                    {index + 1}
                  </span>
                  <p className="text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[28px] border border-red-500/25 bg-red-500/8 p-6">
              <h3 className="flex items-center gap-3 text-xl font-black text-[color:var(--ink)]">
                <AlertTriangle className="text-red-500" size={23} />
                أخطر عبارة في عرض السعر: “حسب المتاح”
              </h3>
              <p className="mt-3 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                يجب استبدال العبارات المفتوحة بمواصفة أو حد سعري أو عينة معتمدة.
                مثال: بدل “سيراميك حسب المتاح”، يكتب نوع أو بلد منشأ أو سعر شراء
                معتمد للمتر وآلية احتساب الفرق إذا اختار المالك منتجًا أعلى.
              </p>
            </div>
          </section>

          <section id="contract" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Contract Checklist"
              title="قائمة فحص قبل توقيع عقد بناء دور واحد"
            >
              استخدم هذه القائمة مع كل عرض. كل خانة غير واضحة اليوم قد تتحول إلى
              اختلاف أو دفعة إضافية أثناء التنفيذ.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {contractChecklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-500"
                    size={21}
                  />
                  <p className="text-sm font-bold leading-8 text-[color:var(--ink-muted)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <MiniCta
              title="قارن العروض على نفس النطاق"
              text="أرسل عرضين أو ثلاثة مع المخططات المتاحة. نساعدك في إعداد أسئلة المقارنة قبل اختيار المقاول."
              button="ابدأ مقارنة العروض"
            />
          </section>

          <section id="mistakes" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Avoid These Mistakes"
              title="أخطاء ترفع تكلفة بناء دور واحد"
            >
              التوفير الحقيقي لا يأتي من حذف العزل أو خفض جودة الهيكل، بل من منع
              الهدر والتغييرات والعقود غير الواضحة.
            </SectionTitle>

            <div className="space-y-4">
              {[
                {
                  title: "البدء قبل اكتمال المخططات",
                  text: "يؤدي إلى قرارات ميدانية وتعديلات وهدم وإعادة تنفيذ. أكمل المخططات الرئيسية وحدود المواصفات قبل تسليم الموقع.",
                },
                {
                  title: "اختيار أقل سعر بدون توحيد البنود",
                  text: "قد يكون العرض الأرخص ناقصًا. اطلب جدول مقارنة يوضح المشمول والمستبعد والكمية والماركة والضريبة.",
                },
                {
                  title: "دفع مقدم كبير غير مرتبط بإنجاز",
                  text: "اربط الدفعات بمراحل قابلة للفحص والاستلام، واحتفظ بنسبة حتى معالجة الملاحظات النهائية.",
                },
                {
                  title: "تغيير التشطيب بعد شراء المواد",
                  text: "اعتمد العينات وحدود الأسعار قبل الشراء. تغيير البلاط أو الأبواب بعد التوريد يضيف إرجاعًا وهدرًا وتأخيرًا.",
                },
                {
                  title: "إهمال الإشراف والاختبارات",
                  text: "فحص الحديد قبل الصب واختبارات العزل والسباكة والكهرباء أقل كلفة بكثير من إصلاح العيوب بعد الإغلاق.",
                },
                {
                  title: "استهلاك الاحتياطي في ترقيات غير ضرورية",
                  text: "افصل احتياطي المخاطر عن ميزانية التحسينات. لا تستخدمه لشراء خيار فاخر ثم تترك المشروع بدون حماية مالية.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:grid-cols-[54px_1fr] md:p-6"
                >
                  <span className="grid size-[54px] place-items-center rounded-2xl bg-red-500/12 text-xl font-black text-red-500">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[color:var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="official-sources" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Official References"
              title="مصادر رسمية يجب مراجعتها قبل البناء في السعودية"
            >
              الأسعار التجارية تُطلب من السوق، لكن الرخص والاشتراطات والكود
              والضريبة يجب الرجوع فيها إلى الجهات الرسمية.
            </SectionTitle>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "الرقم القياسي لتكاليف البناء — الهيئة العامة للإحصاء",
                  text: "مرجع رسمي لمتابعة تغير تكاليف المواد والعمالة والمعدات والطاقة في القطاع السكني وغير السكني.",
                  href: "https://www.stats.gov.sa/en/w/cci",
                  icon: BarChart3,
                },
                {
                  title: "إصدار رخصة بناء — منصة بلدي",
                  text: "الخدمة الرسمية توضّح مسار تفويض المكتب الهندسي وإصدار الرخصة والمتطلبات المرتبطة بها.",
                  href: "https://balady.gov.sa/ar/services/%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-%D8%B1%D8%AE%D8%B5%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1",
                  icon: Landmark,
                },
                {
                  title: "كود المباني السكنية السعودي",
                  text: "يجمع الحد الأدنى لمتطلبات المساكن المخصصة لعائلة أو عائلتين والتي لا تتجاوز ثلاثة طوابق.",
                  href: "https://sbc.gov.sa/En/BC/Pages/BuildingCode/BCDetails.aspx?codeId=1101&year=2024",
                  icon: ShieldCheck,
                },
                {
                  title: "دليل قطاع المقاولات تحت ضريبة القيمة المضافة",
                  text: "مرجع من هيئة الزكاة والضريبة والجمارك لفهم معاملة خدمات التشييد والفواتير والضريبة.",
                  href: "https://zatca.gov.sa/ar/HelpCenter/guidelines/Documents/Guideline-For-the-Contracting-Sector-under-VAT-Provision.pdf",
                  icon: FileText,
                },
              ].map((source) => {
                const Icon = source.icon;
                return (
                  <a
                    key={source.title}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand)]"
                  >
                    <div className="grid size-11 place-items-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--brand)] shadow-sm">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-4 text-xl font-black leading-8 text-[color:var(--ink)]">
                      {source.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
                      {source.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
                      افتح المصدر الرسمي
                      <ArrowLeft size={16} />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          <section id="related-guides" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="Internal Linking Hub"
              title="أدلة مرتبطة تساعدك قبل بناء دور واحد"
            >
              هذه الروابط تُجلب تلقائيًا من ملف clusters.js. استخدمها لفهم
              التصميم والهيكل والمقاول والتشطيب كمنظومة واحدة بدل النظر إلى سعر
              المتر فقط.
            </SectionTitle>

            <div className="grid gap-5 md:grid-cols-2">
              {publishedStrongBlogs.map((post) => (
                <RelatedCard post={post} key={post.href} />
              ))}
            </div>

            {publishedClusters.length > 0 ? (
              <div className="mt-10">
                <h3 className="text-2xl font-black text-[color:var(--ink)]">
                  أدلة منشورة ضمن نفس Topic Cluster
                </h3>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {publishedClusters.map((post) => (
                    <RelatedCard post={post} key={post.href} />
                  ))}
                </div>
              </div>
            ) : null}
          </section>


          <MawsooqProofSection
            context="حساب ميزانية البناء"
            whatsappMessage="مرحبًا موسوق، أريد تقدير تكلفة بناء دور واحد. المدينة: ___، مساحة البناء: ___، ونوع التنفيذ: ___"
          />

          <section id="faq" className="mt-16 scroll-mt-32">
            <SectionTitle
              eyebrow="FAQ"
              title="أسئلة شائعة عن تكلفة بناء دور واحد"
            >
              إجابات مباشرة للاستعلامات الأقرب للكلمة الرئيسية وقرار طلب عرض
              السعر.
            </SectionTitle>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6"
                >
                  <summary className="cursor-pointer list-none text-lg font-black leading-8 text-[color:var(--ink)] marker:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="text-[color:var(--brand)] transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-base font-semibold leading-9 text-[color:var(--ink-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[34px] border border-[color:var(--hairline)] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-8 text-white md:p-10">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-cyan-100">
              الخطوة التالية
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">
              حوّل تقدير تكلفة بناء دور واحد إلى عرض قابل للمقارنة
            </h2>
            <p className="mt-4 max-w-[820px] text-lg font-bold leading-9 text-white/78">
              أرسل المدينة، مسطح الدور، هل المشروع أرضي أم إضافة دور، ونوع
              التنفيذ المطلوب. كلما كانت المخططات والمواصفات أوضح، أصبحت المقارنة
              بين عروض المقاولين أدق.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppButton>ابدأ عبر واتساب</WhatsAppButton>
              <a
                href="#calculator"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-black text-white transition hover:bg-white/15"
              >
                <Calculator size={18} />
                أعد الحساب
              </a>
            </div>
          </section>
        </article>

        <aside className="sticky top-[calc(var(--nav-height)+28px)] hidden self-start lg:block">
          <div className="space-y-4">
            <div className="rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <div className="grid size-11 place-items-center rounded-2xl bg-[#25D366] text-white">
                <Calculator size={21} />
              </div>
              <h2 className="mt-4 text-xl font-black text-[color:var(--ink)]">
                احسب قبل أن تتعاقد
              </h2>
              <p className="mt-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                أرسل المساحة والمدينة ونوع التنفيذ للحصول على قائمة الأسئلة التي
                تحتاجها قبل مقارنة المقاولين.
              </p>
              <WhatsAppButton className="mt-4 w-full">
                واتساب مباشر
              </WhatsAppButton>
            </div>

            <nav
              aria-label="محتويات المقال"
              className="max-h-[52vh] overflow-y-auto rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]"
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
                مقالات قوية مرتبطة
              </h2>

              <div className="mt-4 space-y-1.5">
                {publishedStrongBlogs.slice(0, 5).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-black leading-6 text-[color:var(--ink-muted)] transition duration-300 hover:bg-[color:var(--surface-2)] hover:text-[color:var(--brand)]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

    </main>
  );
}
