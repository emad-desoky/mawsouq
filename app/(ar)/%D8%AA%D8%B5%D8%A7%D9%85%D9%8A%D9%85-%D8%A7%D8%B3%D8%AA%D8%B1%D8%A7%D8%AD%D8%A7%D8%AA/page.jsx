import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  ImageIcon,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ResthouseWhatsAppBrief from "@/components/ar/resthouse/ResthouseWhatsAppBrief";
import {
  SITE_URL,
  clusters,
  officialSources,
  pillar,
  resortIdeas,
  routes,
  whatsappLink,
} from "@/app/_arabic-pages/_resthouse-cluster/resthouse-data";

const pageUrl = `${SITE_URL}/${pillar.slug}/`;
const whatsapp = whatsappLink(pillar.whatsappMessage);

export const metadata = {
  title: pillar.metaTitle,
  description: pillar.description,
  keywords: [
    "تصاميم استراحات",
    "تصاميم استراحات راقية",
    "تصميم استراحة",
    "مخطط استراحة",
    "تصميم استراحة مودرن",
    "تصميم استراحة صغيرة",
    "استراحة عائلية",
    "تصميم استراحات في السعودية",
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
    title: pillar.metaTitle,
    description: pillar.description,
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    publishedTime: pillar.datePublished,
    modifiedTime: pillar.dateModified,
    images: [
      {
        url: pillar.image,
        width: 1200,
        height: 630,
        alt: pillar.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pillar.metaTitle,
    description: pillar.description,
    images: [pillar.image],
  },
};

const faqs = [
  [
    "ما أفضل تصاميم استراحات راقية للعائلات؟",
    "أفضل تصميم استراحة عائلية هو الذي يفصل الخصوصية عن استقبال الضيوف، ويربط الصالة أو المجلس بحديقة أو جلسة خارجية، ويوفر مطبخًا وخدمات في مواقع عملية. لا يوجد شكل واحد مناسب للجميع؛ الاختيار يعتمد على مساحة الأرض وعدد المستخدمين وطبيعة المناسبات.",
  ],
  [
    "كيف أختار مخطط استراحة مناسبًا لأرضي؟",
    "ابدأ بأبعاد الأرض والواجهات والمداخل والاشتراطات، ثم حدد الاستخدام وعدد المستخدمين والمسبح والجلسات المطلوبة. بعد ذلك يمكن مقارنة المخططات المرجعية وتعديل الأنسب منها ضمن تصميم مخصص ومتوافق مع المشروع.",
  ],
  [
    "هل يمكن تصميم استراحة صغيرة بشكل راقٍ؟",
    "نعم. الاستراحة الصغيرة يمكن أن تبدو أوسع وأكثر راحة عند تقليل الممرات، واستخدام فراغ رئيسي متعدد الاستخدام، وربط الداخل بالخارج، واختيار أثاث وخامات مناسبة للمقاس. جودة التوزيع أهم من كثرة الغرف.",
  ],
  [
    "ما العناصر التي ترفع تكلفة تصميم وتنفيذ الاستراحة؟",
    "تزداد التكلفة عادةً مع زيادة مساحة البناء، وتعقيد الكتلة والواجهة، وكثرة دورات المياه، والمسبح، واللاندسكيب، والأنظمة الخاصة، والتغييرات أثناء التنفيذ. التخطيط المبكر يساعد على فصل الأساسيات عن الإضافات.",
  ],
  [
    "هل أحتاج مكتبًا هندسيًا قبل بناء الاستراحة؟",
    "تتطلب إجراءات رخصة البناء والتصاميم التنفيذية التعامل مع مكتب هندسي مؤهل حسب متطلبات المشروع والجهات المختصة. منصة بلدي توضح أن المكتب المصمم يُفوض لإعداد التصاميم المعمارية والإنشائية واستكمال الطلب والملفات المطلوبة.",
  ],
  [
    "كيف أتواصل مع موسوق لتصميم استراحة؟",
    "أرسل عبر واتساب المدينة، أبعاد الأرض، طبيعة الاستخدام، عدد المستخدمين، النمط المفضل، وهل تحتاج مسبحًا أو مجلسًا منفصلًا. هذه المعلومات تساعد على بدء محادثة واضحة حول نطاق التصميم والخطوة التالية.",
  ],
];

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
      headline: pillar.title,
      description: pillar.description,
      image: {
        "@type": "ImageObject",
        url: pillar.image,
        width: 1200,
        height: 630,
      },
      author: {
        "@type": "Organization",
        name: pillar.author,
        url: `${SITE_URL}/عن-الشركة/`,
      },
      publisher: {
        "@type": "Organization",
        name: "موسوق",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/mawsouq-logo.png`,
        },
      },
      datePublished: pillar.datePublished,
      dateModified: pillar.dateModified,
      inLanguage: "ar-SA",
      articleSection: pillar.category,
      keywords: "تصاميم استراحات، تصميم استراحة، مخطط استراحة، استراحات راقية، تصميم استراحة مودرن",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "المدونات",
          item: `${SITE_URL}/المدونات/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pillar.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

const toc = [
  ["quick-answer", "ملخص سريع قبل اختيار التصميم"],
  ["design-types", "أنواع تصاميم الاستراحات"],
  ["choose-design", "كيف تختار التصميم المناسب؟"],
  ["before-plan", "قرارات يجب حسمها قبل المخطط"],
  ["gallery", "30 فكرة وصورة للاستراحات"],
  ["cluster-guides", "أدلة تفصيلية مرتبطة"],
  ["engineering", "الرخصة والتنسيق الهندسي"],
  ["faqs", "الأسئلة الشائعة"],
];

export default function ResortDesignsPillarPage() {
  return (
    <main className="rest-pillar-page" dir="rtl" lang="ar-SA">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="rest-pillar-glow" />
      <div className="rest-pillar-container">
        <nav aria-label="مسار التنقل" className="rest-breadcrumbs">
          <Link href={routes.home}>الرئيسية</Link>
          <span>›</span>
          <Link href={routes.blogHub}>المدونات</Link>
          <span>›</span>
          <strong aria-current="page">تصاميم استراحات</strong>
        </nav>

        <header className="rest-hero">
          <div className="rest-hero-copy">
            <span className="rest-eyebrow">دليل تصميم الاستراحات في السعودية 2026</span>
            <h1>{pillar.title}</h1>
            <p className="rest-hero-lead">
              نقدم لك مجموعة واسعة من <strong>تصاميم استراحات راقية</strong> بالصور،
              مع طريقة عملية لاختيار المخطط والمساحة والنمط المناسب قبل أن تطلب
              التصميم أو تبدأ التنفيذ.
            </p>
            <p className="rest-hero-support">
              احتفظنا بالأفكار والصور التي حققت ظهورًا جيدًا في Google، ثم أضفنا
              هيكلًا أوضح يساعدك على تحويل الإلهام إلى قرار: استراحة عائلية أم
              مناسبات؟ مودرن أم ريفية؟ بمسبح أم بدون؟ وما المعلومات التي يحتاجها
              المصمم قبل البدء؟
            </p>
            <div className="rest-hero-actions">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rest-main-cta">
                <MessageCircle size={20} /> أرسل أرضك واطلب توجيهًا للتصميم
              </a>
              <a href="#gallery" className="rest-alt-cta">
                <ImageIcon size={19} /> شاهد 30 فكرة بالصور
              </a>
            </div>
            <div className="rest-hero-meta">
              <span><Clock3 size={16} />{pillar.readTime}</span>
              <span>آخر تحديث حقيقي: 6 أغسطس 2026</span>
            </div>
          </div>

          <figure className="rest-hero-media">
            <img
              src={pillar.image}
              alt={pillar.imageAlt}
              width="1200"
              height="800"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>فكرة استراحة راقية تربط الفراغ الداخلي بالطبيعة والجلسات الخارجية.</figcaption>
          </figure>
        </header>

        <section className="rest-conversion-strip" aria-label="دعوة للتواصل">
          <div>
            <strong>لديك أرض أو مخطط مبدئي؟</strong>
            <span>أرسل المدينة والمساحة والاستخدام المطلوب لنبدأ من معلومات واضحة.</span>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            تحدث مع فريق موسوق <ArrowLeft size={18} />
          </a>
        </section>

        <section className="rest-snapshot" aria-label="ملخص الدليل">
          <article><strong>30</strong><span>فكرة وصورة محفوظة من المحتوى الأصلي</span></article>
          <article><strong>5</strong><span>أدلة فرعية تغطي أهم نوايا البحث</span></article>
          <article><strong>قرار أول</strong><span>حدد الاستخدام قبل شكل الواجهة</span></article>
          <article><strong>واتساب</strong><span>CTA مرتبط مباشرة بتفاصيل مشروعك</span></article>
        </section>

        <details className="rest-mobile-toc">
          <summary>محتويات الدليل</summary>
          <ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </details>

        <div className="rest-main-grid">
          <article className="rest-article">
            <section id="quick-answer" className="rest-section rest-quick-answer">
              <div className="rest-section-heading">
                <span className="rest-eyebrow">ملخص سريع</span>
                <h2>قبل مشاهدة الصور: ما الذي يجعل تصميم الاستراحة ناجحًا؟</h2>
              </div>

              <div className="rest-answer-box">
                <Sparkles size={26} />
                <p>
                  تصميم الاستراحة الناجح لا يبدأ من الواجهة؛ يبدأ من الاستخدام.
                  حدد عدد المستخدمين، نوع التجمعات، الخصوصية، المسبح، الجلسات
                  الخارجية ومواقف السيارات، ثم اختر النمط الذي يخدم هذه القرارات.
                </p>
              </div>

              <ul className="rest-key-list">
                <li><CheckCircle2 size={21} />الاستراحة العائلية تحتاج خصوصية وربطًا جيدًا بين الداخل والحديقة.</li>
                <li><CheckCircle2 size={21} />استراحة المناسبات تحتاج مواقف وخدمات ودورات مياه ومسارات تشغيل واضحة.</li>
                <li><CheckCircle2 size={21} />الاستراحة الصغيرة تستفيد من الفراغات المرنة وتقليل الممرات.</li>
                <li><CheckCircle2 size={21} />المسبح يجب أن يظهر في المخطط منذ البداية مع الخدمات والسلامة والخصوصية.</li>
                <li><CheckCircle2 size={21} />المخطط المرجعي من الإنترنت لا يُنفذ قبل مطابقته مع الأرض والاشتراطات.</li>
              </ul>

              <div className="rest-inline-form">
                <ResthouseWhatsAppBrief articleTitle={pillar.title} />
              </div>
            </section>

            <section id="design-types" className="rest-section">
              <span className="rest-eyebrow">اختيار النمط</span>
              <h2>أنواع تصاميم الاستراحات حسب الاستخدام</h2>
              <p>
                الصور تساعدك على تحديد الذوق، لكن نوع الاستراحة يحدد البرنامج
                المعماري. اختر الفئة الأقرب إلى استخدامك، ثم عدّلها حسب الأسرة
                والأرض والميزانية.
              </p>

              <div className="rest-type-grid">
                <article>
                  <span>01</span><h3>استراحة عائلية خاصة</h3>
                  <p>صالة أو مجلس عائلي، حديقة خاصة، مطبخ عملي، غرفة مرنة وخصوصية عالية.</p>
                </article>
                <article>
                  <span>02</span><h3>استراحة للضيوف</h3>
                  <p>مجلس واضح ومدخل مستقل وخدمات قريبة دون كشف مناطق العائلة.</p>
                </article>
                <article>
                  <span>03</span><h3>استراحة مناسبات</h3>
                  <p>سعة أكبر، مواقف، دورات مياه، تحضير وخدمة ومسارات تشغيل منظمة.</p>
                </article>
                <article>
                  <span>04</span><h3>استراحة صغيرة</h3>
                  <p>فراغ متعدد الاستخدام وامتداد خارجي بدل كثرة الغرف والممرات.</p>
                </article>
                <article>
                  <span>05</span><h3>استراحة بمسبح</h3>
                  <p>مسبح آمن وخاص مع جلسة مظللة ودش ودورة مياه وخدمات مدروسة.</p>
                </article>
                <article>
                  <span>06</span><h3>استراحة تجارية</h3>
                  <p>التشغيل والصيانة والسعة والاشتراطات وتجربة الزائر تصبح عوامل أساسية.</p>
                </article>
              </div>
            </section>

            <section id="choose-design" className="rest-section">
              <span className="rest-eyebrow">إطار قرار عملي</span>
              <h2>كيف تختار تصميم استراحة مناسبًا بدل اختيار صورة جميلة فقط؟</h2>
              <p>
                قارن الأفكار باستخدام معايير ثابتة. هذا يقلل التردد ويجعل المحادثة
                مع المصمم أسرع وأكثر دقة.
              </p>

              <div className="rest-table-wrap">
                <table>
                  <caption>معايير اختيار تصميم الاستراحة</caption>
                  <thead><tr><th scope="col">المعيار</th><th scope="col">ماذا تفحص؟</th><th scope="col">لماذا مهم؟</th></tr></thead>
                  <tbody>
                    <tr><td>الاستخدام</td><td>عائلة، ضيوف، مناسبات أو نشاط تجاري</td><td>يحدد توزيع الفراغات والخدمات</td></tr>
                    <tr><td>مساحة الأرض</td><td>الأبعاد والواجهة والارتدادات</td><td>تحدد الجزء القابل للبناء والفناء</td></tr>
                    <tr><td>الخصوصية</td><td>المداخل والرؤية من الشارع والجيران</td><td>تؤثر في راحة الاستخدام</td></tr>
                    <tr><td>المسبح</td><td>الموقع، الشمس، المعدات والحركة</td><td>يصعب إضافته جيدًا بعد اكتمال التصميم</td></tr>
                    <tr><td>التشغيل</td><td>المطبخ والخدمة والتنظيف والصيانة</td><td>يحدد سهولة استخدام الاستراحة يوميًا</td></tr>
                    <tr><td>الميزانية</td><td>المساحة والأولويات والإضافات</td><td>تمنع تصميم مشروع أكبر من القدرة المالية</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="rest-design-links">
                <Link href={routes.architecture}>التصميم المعماري للمشروع</Link>
                <Link href={routes.gardens}>تصميم الحديقة والجلسات الخارجية</Link>
                <Link href={routes.modernVillas}>أفكار فلل مودرن للواجهات والكتل</Link>
                <Link href={routes.remoteDesign}>طلب تصميم معماري عن بعد</Link>
              </div>
            </section>

            <section id="before-plan" className="rest-section">
              <span className="rest-eyebrow">قبل رسم المخطط</span>
              <h2>6 قرارات اختصرها قبل التواصل مع المصمم</h2>
              <div className="rest-process-grid">
                {[
                  ["الاستخدام الأساسي", "اكتب الجملة التي تشرح لماذا تبني الاستراحة ومن سيستخدمها."],
                  ["عدد المستخدمين", "حدد الاستخدام اليومي وأقصى عدد متوقع في المناسبات."],
                  ["الفراغات الضرورية", "افصل بين الاحتياجات الأساسية والرغبات القابلة للتأجيل."],
                  ["النمط المفضل", "اجمع 3 إلى 5 صور توضح ما يعجبك بدل عشرات الصور المتعارضة."],
                  ["المسبح والخارج", "حدد وجود المسبح والجلسات والمواقف والحديقة منذ البداية."],
                  ["الميزانية والأولوية", "حدد سقفًا تقريبيًا وأين تريد إنفاق الجزء الأكبر من الميزانية."],
                ].map(([title, text], index) => (
                  <article key={title}>
                    <span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>

              <aside className="rest-whatsapp-callout">
                <div>
                  <MessageCircle size={28} />
                  <div><h3>لا تعرف من أين تبدأ؟</h3><p>استخدم نموذج brief أعلاه أو أرسل صورة الأرض وأفكارك مباشرة.</p></div>
                </div>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">ابدأ المحادثة عبر واتساب</a>
              </aside>
            </section>

            <section id="gallery" className="rest-section rest-gallery-section">
              <span className="rest-eyebrow">المحتوى الأصلي محفوظ ومُنظم</span>
              <h2>30 فكرة من تصاميم استراحات راقية بالصور</h2>
              <p>
                استخدم الصور التالية كمراجع بصرية للأسلوب والكتلة وربط الداخل
                بالخارج. لا تنفذ أي صورة كما هي؛ استخرج منها العنصر الذي يعجبك
                ثم عدله حسب أرضك واحتياجاتك.
              </p>

              <div className="rest-gallery-grid">
                {resortIdeas.map((idea, index) => (
                  <article className="rest-idea-card" key={idea.src}>
                    <div className="rest-idea-number">فكرة {index + 1}</div>
                    <figure>
                      <img
                        src={idea.src}
                        alt={`تصميم استراحة راقية رقم ${index + 1}`}
                        title="تصاميم استراحات راقية"
                        width={idea.width || 1200}
                        height={idea.height || 800}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                    <p>{idea.text}</p>
                    <a href={idea.sourceHref} target="_blank" rel="noopener noreferrer">
                      مصدر الصورة: {idea.sourceLabel}<ExternalLink size={15} />
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section id="cluster-guides" className="rest-section">
              <span className="rest-eyebrow">شبكة Topic Cluster</span>
              <h2>أدلة تفصيلية مرتبطة بتصميم الاستراحات</h2>
              <p>
                هذا الدليل يملك الاستعلام العام <strong>تصاميم استراحات</strong>.
                المقالات التالية تتعمق في نوايا محددة حتى لا تتنافس الصفحات مع
                بعضها، بل تدعم الصفحة الركائزية وتجيب عن قرارات مختلفة.
              </p>

              <div className="rest-cluster-grid">
                {clusters.map((cluster) => (
                  <Link href={`/${cluster.slug}/`} key={cluster.slug}>
                    <figure><img src={cluster.image} alt={cluster.imageAlt} width="800" height="520" loading="lazy" /></figure>
                    <div>
                      <span>{cluster.category}</span>
                      <h3>{cluster.title}</h3>
                      <p>{cluster.excerpt}</p>
                      <strong>افتح الدليل <ArrowLeft size={17} /></strong>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="engineering" className="rest-section">
              <span className="rest-eyebrow">من الفكرة إلى مشروع قابل للتنفيذ</span>
              <h2>الرخصة والتنسيق الهندسي قبل بناء الاستراحة</h2>
              <p>
                توضح منصة بلدي أن إصدار رخصة البناء يتضمن تفويض مكتب هندسي مصمم
                لإعداد التصاميم المعمارية والإنشائية واستكمال بيانات وملفات الطلب.
                كما يعرّف المركز السعودي لكود البناء الكود بأنه مجموعة اشتراطات
                ومتطلبات مرتبطة بالبناء والتشييد بهدف السلامة والصحة العامة.
              </p>
              <p>
                لذلك لا يكفي اختيار صورة أو مخطط عام. المشروع يحتاج إلى مراجعة
                استخدام الأرض، المتطلبات البلدية، التصميم المعماري، التصميم
                الإنشائي، وخدمات الكهرباء والسباكة والتكييف، مع متطلبات إضافية
                للمسابح أو الأنشطة التجارية بحسب الحالة.
              </p>

              <div className="rest-official-links">
                {[officialSources.baladyPermit, officialSources.saudiCode, officialSources.buildingCodes2024].map((source) => (
                  <a href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>
                    <ShieldCheck size={19} />{source.label}<ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </section>

            <section id="faqs" className="rest-section rest-faq-section">
              <span className="rest-eyebrow">أسئلة يبحث عنها أصحاب الأراضي</span>
              <h2>الأسئلة الشائعة حول تصاميم الاستراحات</h2>
              <div>
                {faqs.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rest-final-cta">
              <span className="rest-eyebrow">جاهز لتنظيم فكرتك؟</span>
              <h2>أرسل تفاصيل الأرض واحصل على محادثة تصميم أكثر دقة</h2>
              <p>
                اذكر المدينة، مساحة الأرض، الاستخدام، عدد المستخدمين، النمط
                المفضل، وهل تحتاج مسبحًا. هذه المعلومات تختصر الطريق من صور
                الاستراحات إلى brief واضح للمشروع.
              </p>
              <div>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> تواصل مع موسوق عبر واتساب</a>
                <Link href={routes.about}>تعرف على موسوق</Link>
              </div>
            </section>
          </article>

          <aside className="rest-sidebar">
            <div className="rest-sidebar-inner">
              <nav aria-label="فهرس الدليل" className="rest-side-card rest-toc">
                <span className="rest-eyebrow">في هذا الدليل</span>
                <ol>{toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
              </nav>

              <ResthouseWhatsAppBrief articleTitle={pillar.title} compact />

              <div className="rest-side-card">
                <span className="rest-eyebrow">أدلة التصميم</span>
                <div className="rest-side-links">
                  {clusters.map((cluster) => <Link href={`/${cluster.slug}/`} key={cluster.slug}>{cluster.title}</Link>)}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rest-mobile-cta">
        <MessageCircle size={20} /> أرسل تفاصيل استراحتك عبر واتساب
      </a>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
  .rest-pillar-page{position:relative;min-height:100vh;padding:calc(var(--nav-height) + 28px) 0 100px;background:var(--page);color:var(--ink);font-family:var(--font-tajawal),sans-serif;overflow-x:clip;overflow-y:visible}
  .rest-pillar-glow{position:absolute;inset:0 0 auto;height:850px;background:radial-gradient(circle at 83% 8%,rgba(47,134,246,.19),transparent 35%),linear-gradient(180deg,var(--surface-2),transparent);pointer-events:none}
  .rest-pillar-container{position:relative;z-index:1;width:min(calc(100% - 28px),1460px);margin-inline:auto}
  .rest-breadcrumbs{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:18px;color:var(--ink-faint);font-size:13px;font-weight:850}.rest-breadcrumbs a{color:var(--brand);text-decoration:none}.rest-breadcrumbs strong{color:var(--ink)}
  .rest-hero{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);overflow:hidden;border:1px solid var(--hairline-strong);border-radius:38px;background:var(--surface);box-shadow:var(--card-shadow)}
  .rest-hero-copy{display:flex;flex-direction:column;justify-content:center;padding:clamp(30px,5vw,72px)}.rest-eyebrow{display:inline-flex;width:max-content;max-width:100%;color:var(--brand);font-size:12px;font-weight:950;letter-spacing:.03em}
  .rest-hero h1{margin:18px 0 0;color:var(--ink);font-size:clamp(38px,5.3vw,68px);line-height:1.18;letter-spacing:-.055em;font-weight:950}.rest-hero-lead{margin:24px 0 0;color:var(--ink);font-size:clamp(18px,2vw,22px);line-height:1.95;font-weight:800}.rest-hero-support{margin:13px 0 0;color:var(--ink-muted);font-size:16px;line-height:1.95;font-weight:650}
  .rest-hero-actions{display:flex;flex-wrap:wrap;gap:11px;margin-top:28px}.rest-main-cta,.rest-alt-cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:12px 22px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:950;transition:.2s ease}.rest-main-cta{background:#20c96b;color:#062818;box-shadow:0 16px 45px rgba(32,201,107,.23)}.rest-alt-cta{border:1px solid var(--hairline-strong);background:var(--surface-2);color:var(--ink)}.rest-main-cta:hover,.rest-conversion-strip a:hover,.rest-final-cta a:hover{transform:translateY(-2px)}
  .rest-hero-meta{display:flex;flex-wrap:wrap;gap:17px;margin-top:22px;color:var(--ink-faint);font-size:13px;font-weight:800}.rest-hero-meta span{display:inline-flex;align-items:center;gap:6px}
  .rest-hero-media{position:relative;min-height:600px;margin:0;background:#071321}.rest-hero-media img{display:block;width:100%;height:100%;object-fit:cover}.rest-hero-media figcaption{position:absolute;right:16px;left:16px;bottom:16px;padding:12px 15px;border:1px solid rgba(255,255,255,.14);border-radius:15px;background:rgba(7,19,33,.72);backdrop-filter:blur(12px);color:#fff;font-size:12px;line-height:1.7;font-weight:750}
  .rest-conversion-strip{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:16px;padding:20px 24px;border-radius:23px;background:#071321;color:#fff;box-shadow:0 18px 55px rgba(7,19,33,.2)}.rest-conversion-strip strong,.rest-conversion-strip span{display:block}.rest-conversion-strip strong{font-size:20px;font-weight:950}.rest-conversion-strip span{margin-top:4px;color:rgba(255,255,255,.7);font-size:13px;font-weight:700}.rest-conversion-strip a{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:10px 20px;border-radius:999px;background:#20c96b;color:#062818;text-decoration:none;font-size:14px;font-weight:950;transition:.2s ease}
  .rest-snapshot{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px}.rest-snapshot article{padding:20px;border:1px solid var(--hairline);border-radius:22px;background:var(--surface);box-shadow:var(--card-shadow)}.rest-snapshot strong{display:block;color:var(--brand);font-size:25px;font-weight:950}.rest-snapshot span{display:block;margin-top:7px;color:var(--ink-muted);font-size:13px;line-height:1.7;font-weight:750}
  .rest-main-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start;margin-top:24px}.rest-article{min-width:0;padding:clamp(22px,4vw,46px);border:1px solid var(--hairline);border-radius:32px;background:var(--surface);box-shadow:var(--card-shadow)}
  .rest-section{padding:44px 0;border-bottom:1px solid var(--hairline);scroll-margin-top:130px}.rest-section h2{margin:8px 0 0;color:var(--ink);font-size:clamp(30px,4vw,45px);line-height:1.38;letter-spacing:-.038em;font-weight:950}.rest-section>p{margin:18px 0 0;color:var(--ink-muted);font-size:17px;line-height:2;font-weight:650}
  .rest-answer-box{display:flex;gap:13px;margin-top:24px;padding:23px;border:1px solid rgba(47,134,246,.28);border-radius:23px;background:rgba(47,134,246,.08)}.rest-answer-box svg{flex:0 0 auto;color:var(--brand)}.rest-answer-box p{margin:0;color:var(--ink);font-size:17px;line-height:1.95;font-weight:800}.rest-key-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:22px 0 0;padding:0;list-style:none}.rest-key-list li{display:flex;gap:9px;align-items:flex-start;padding:15px;border-radius:17px;background:var(--surface-2);color:var(--ink-muted);font-size:14px;line-height:1.8;font-weight:750}.rest-key-list svg{flex:0 0 auto;margin-top:4px;color:var(--brand)}.rest-inline-form{margin-top:24px}
  .rest-type-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px;margin-top:26px}.rest-type-grid article{padding:20px;border:1px solid var(--hairline);border-radius:21px;background:var(--surface-2)}.rest-type-grid article>span{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;font-size:12px;font-weight:950}.rest-type-grid h3{margin:14px 0 0;color:var(--ink);font-size:19px;font-weight:950}.rest-type-grid p{margin:8px 0 0;color:var(--ink-muted);font-size:14px;line-height:1.8;font-weight:700}
  .rest-table-wrap{margin-top:26px;overflow-x:auto;border:1px solid var(--hairline);border-radius:23px;box-shadow:var(--card-shadow)}.rest-table-wrap table{width:100%;min-width:760px;border-collapse:collapse;text-align:right}.rest-table-wrap caption{padding:16px 18px;background:var(--surface-2);color:var(--ink);text-align:right;font-weight:950}.rest-table-wrap th{padding:15px 18px;background:#071321;color:#fff}.rest-table-wrap td{padding:15px 18px;border-top:1px solid var(--hairline);color:var(--ink-muted);font-size:14px;line-height:1.8;font-weight:700}.rest-table-wrap tr:nth-child(even) td{background:var(--surface-2)}.rest-table-wrap td:first-child{color:var(--ink);font-weight:950}
  .rest-design-links{display:flex;flex-wrap:wrap;gap:9px;margin-top:22px}.rest-design-links a{padding:11px 15px;border:1px solid var(--hairline);border-radius:999px;background:var(--surface-2);color:var(--brand);font-size:13px;font-weight:900;text-decoration:none}
  .rest-process-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:25px}.rest-process-grid article{display:flex;gap:13px;padding:19px;border:1px solid var(--hairline);border-radius:20px;background:var(--surface-2)}.rest-process-grid article>span{display:grid;place-items:center;flex:0 0 auto;width:36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;font-weight:950}.rest-process-grid h3{margin:0;color:var(--ink);font-size:17px;font-weight:950}.rest-process-grid p{margin:7px 0 0;color:var(--ink-muted);font-size:14px;line-height:1.75;font-weight:700}
  .rest-whatsapp-callout{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:24px;padding:24px;border-radius:24px;background:linear-gradient(135deg,#071321,#0b5bb8);color:#fff}.rest-whatsapp-callout>div{display:flex;gap:13px;align-items:flex-start}.rest-whatsapp-callout h3{margin:0;font-size:20px;font-weight:950}.rest-whatsapp-callout p{margin:6px 0 0;color:rgba(255,255,255,.7);font-size:13px;line-height:1.7;font-weight:700}.rest-whatsapp-callout a{flex:0 0 auto;padding:12px 18px;border-radius:999px;background:#20c96b;color:#062818;font-size:13px;font-weight:950;text-decoration:none}
  .rest-gallery-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px;margin-top:28px}.rest-idea-card{overflow:hidden;border:1px solid var(--hairline);border-radius:25px;background:var(--surface-2);box-shadow:var(--card-shadow)}.rest-idea-number{padding:13px 16px;color:var(--brand);font-size:13px;font-weight:950}.rest-idea-card figure{margin:0;overflow:hidden;aspect-ratio:16/10;background:#071321}.rest-idea-card img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .55s ease}.rest-idea-card:hover img{transform:scale(1.035)}.rest-idea-card>p{margin:0;padding:17px;color:var(--ink-muted);font-size:14px;line-height:1.9;font-weight:700}.rest-idea-card>a{display:flex;align-items:center;justify-content:space-between;gap:9px;margin:0 17px 17px;padding-top:12px;border-top:1px solid var(--hairline);color:var(--brand);font-size:12px;font-weight:900;text-decoration:none}
  .rest-cluster-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin-top:27px}.rest-cluster-grid>a{overflow:hidden;border:1px solid var(--hairline);border-radius:24px;background:var(--surface-2);text-decoration:none;transition:.2s ease}.rest-cluster-grid>a:hover{transform:translateY(-3px);border-color:rgba(47,134,246,.48)}.rest-cluster-grid figure{margin:0;aspect-ratio:16/9;overflow:hidden}.rest-cluster-grid img{width:100%;height:100%;object-fit:cover}.rest-cluster-grid>a>div{padding:19px}.rest-cluster-grid span{color:var(--brand);font-size:12px;font-weight:950}.rest-cluster-grid h3{margin:9px 0 0;color:var(--ink);font-size:21px;line-height:1.55;font-weight:950}.rest-cluster-grid p{margin:9px 0;color:var(--ink-muted);font-size:14px;line-height:1.8;font-weight:700}.rest-cluster-grid strong{display:inline-flex;align-items:center;gap:7px;color:var(--brand);font-size:13px}
  .rest-official-links{display:grid;gap:9px;margin-top:22px}.rest-official-links a{display:flex;align-items:center;gap:9px;padding:14px 16px;border:1px solid var(--hairline);border-radius:16px;background:var(--surface-2);color:var(--ink);font-size:14px;font-weight:900;text-decoration:none}.rest-official-links a svg:first-child{color:var(--brand)}.rest-official-links a svg:last-child{margin-right:auto;color:var(--ink-faint)}
  .rest-faq-section>div{display:grid;gap:10px;margin-top:24px}.rest-faq-section details{padding:18px 20px;border:1px solid var(--hairline);border-radius:19px;background:var(--surface-2)}.rest-faq-section details[open]{border-color:rgba(47,134,246,.5)}.rest-faq-section summary{cursor:pointer;color:var(--ink);font-size:16px;line-height:1.7;font-weight:950}.rest-faq-section details p{margin:14px 0 0;padding-top:14px;border-top:1px solid var(--hairline);color:var(--ink-muted);font-size:14px;line-height:1.9;font-weight:700}
  .rest-final-cta{margin-top:38px;padding:clamp(28px,5vw,45px);border-radius:28px;background:#071321;color:#fff}.rest-final-cta h2{margin:10px 0 0;font-size:clamp(31px,4vw,46px);line-height:1.35;font-weight:950}.rest-final-cta p{max-width:780px;margin:15px 0 0;color:rgba(255,255,255,.73);font-size:16px;line-height:1.9;font-weight:700}.rest-final-cta>div{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}.rest-final-cta a{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:12px 21px;border-radius:999px;background:#20c96b;color:#062818;font-size:14px;font-weight:950;text-decoration:none;transition:.2s ease}.rest-final-cta a+ a{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:#fff}
  .rest-sidebar{position:sticky;top:calc(var(--nav-height) + 20px);align-self:start;min-width:0;max-height:calc(100vh - var(--nav-height) - 28px);overflow-y:auto;padding-left:3px;overscroll-behavior:contain}.rest-sidebar-inner{display:grid;gap:14px}.rest-sidebar::-webkit-scrollbar{width:5px}.rest-sidebar::-webkit-scrollbar-thumb{background:rgba(47,134,246,.34);border-radius:999px}.rest-side-card,.resthouse-lead-card{padding:20px;border:1px solid var(--hairline);border-radius:24px;background:var(--surface);box-shadow:var(--card-shadow)}.rest-toc ol{display:grid;gap:3px;margin:13px 0 0;padding:0;list-style:none}.rest-toc a{display:block;padding:8px 10px;border-radius:10px;color:var(--ink-muted);font-size:13px;line-height:1.65;font-weight:850;text-decoration:none}.rest-toc a:hover{background:rgba(47,134,246,.09);color:var(--brand)}.rest-side-links{display:grid;gap:8px;margin-top:13px}.rest-side-links a{padding:10px 11px;border-radius:12px;background:var(--surface-2);color:var(--ink);font-size:13px;line-height:1.65;font-weight:900;text-decoration:none}.rest-side-links a:hover{color:var(--brand)}
  .resthouse-lead-heading{display:flex;gap:10px;align-items:flex-start}.resthouse-lead-icon{display:grid;place-items:center;flex:0 0 auto;width:41px;height:41px;border-radius:14px;background:rgba(32,201,107,.14);color:#12a958}.resthouse-lead-heading strong{display:block;color:var(--ink);font-size:17px;font-weight:950}.resthouse-lead-heading p{margin:5px 0 0;color:var(--ink-muted);font-size:12px;line-height:1.65;font-weight:700}.resthouse-lead-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:16px}.resthouse-lead-fields label{display:grid;gap:5px}.resthouse-lead-fields label>span{font-size:11px;color:var(--ink-faint);font-weight:900}.resthouse-lead-fields input,.resthouse-lead-fields select{width:100%;min-width:0;height:42px;padding:0 10px;border:1px solid var(--hairline);border-radius:11px;background:var(--surface-2);color:var(--ink);font-family:inherit;font-size:12px;font-weight:750;outline:none}.resthouse-lead-fields input:focus,.resthouse-lead-fields select:focus{border-color:var(--brand)}.lead-field-full{grid-column:1/-1}.resthouse-whatsapp-submit{display:flex;align-items:center;justify-content:center;gap:8px;min-height:47px;margin-top:12px;padding:10px 14px;border-radius:999px;background:#20c96b;color:#062818;font-size:13px;font-weight:950;text-decoration:none}.resthouse-lead-note{margin:8px 0 0;color:var(--ink-faint);font-size:10px;line-height:1.6;font-weight:700}.is-compact .resthouse-lead-fields{grid-template-columns:1fr}.is-compact .lead-field-full{grid-column:auto}
  .rest-mobile-toc{display:none;margin-top:16px;padding:18px;border:1px solid var(--hairline);border-radius:20px;background:var(--surface)}.rest-mobile-toc summary{cursor:pointer;color:var(--ink);font-weight:950}.rest-mobile-toc ol{display:grid;gap:8px;margin:14px 0 0}.rest-mobile-toc a{color:var(--brand);font-weight:850;text-decoration:none}.rest-mobile-cta{display:none}
  @media(max-width:1100px){.rest-pillar-page{overflow:visible}.rest-sidebar{position:static;max-height:none;overflow:visible;padding:0}.rest-hero{grid-template-columns:1fr}.rest-hero-copy{order:2}.rest-hero-media{order:1;min-height:400px}.rest-main-grid{grid-template-columns:1fr}.rest-sidebar{display:none}.rest-mobile-toc{display:block}.rest-snapshot{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:760px){.rest-pillar-page{padding:calc(var(--nav-height) + 18px) 0 112px}.rest-pillar-container{width:min(calc(100% - 18px),1460px)}.rest-hero{border-radius:25px}.rest-hero-copy{padding:26px 20px}.rest-hero h1{font-size:37px}.rest-hero-media{min-height:280px}.rest-hero-actions{flex-direction:column}.rest-main-cta,.rest-alt-cta{width:100%}.rest-conversion-strip{align-items:stretch;flex-direction:column;padding:19px}.rest-conversion-strip a{width:100%}.rest-snapshot{grid-template-columns:1fr;gap:9px}.rest-snapshot article{padding:16px;border-radius:18px}.rest-article{padding:18px;border-radius:24px}.rest-key-list,.rest-type-grid,.rest-process-grid,.rest-gallery-grid,.rest-cluster-grid{grid-template-columns:1fr}.rest-section{padding:36px 0}.rest-section h2{font-size:30px}.rest-whatsapp-callout{align-items:stretch;flex-direction:column}.rest-whatsapp-callout a{width:100%;text-align:center}.rest-mobile-cta{position:fixed;z-index:90;right:12px;left:12px;bottom:max(78px,calc(env(safe-area-inset-bottom) + 78px));display:flex;align-items:center;justify-content:center;gap:8px;min-height:55px;border-radius:999px;background:#20c96b;color:#062818;font-size:14px;font-weight:950;text-decoration:none;box-shadow:0 18px 50px rgba(0,0,0,.25)}.rest-table-wrap table{min-width:640px}.resthouse-lead-fields{grid-template-columns:1fr}.lead-field-full{grid-column:auto}}
`;
