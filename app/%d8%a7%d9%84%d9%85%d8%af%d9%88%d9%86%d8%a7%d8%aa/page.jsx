import fs from "fs";
import path from "path";
import BlogsClient from "./BlogsClient";

const pageUrl =
  "https://mawsouq.com/%d8%a7%d9%84%d9%85%d8%af%d9%88%d9%86%d8%a7%d8%aa/";

export const metadata = {
  title: "المدونات | موسوق",
  description:
    "تصفح مقالات موسوق حول التصميم المعماري والإنشائي والبناء والديكور وخدمات المنازل في السعودية.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "المدونات | موسوق",
    description:
      "تصفح مقالات موسوق حول التصميم المعماري والإنشائي والبناء والديكور وخدمات المنازل في السعودية.",
    url: pageUrl,
    siteName: "موسوق",
    locale: "ar_SA",
    type: "website",
  },
};

const BLOG_ROUTE_FOLDER = "%d8%a7%d9%84%d9%85%d8%af%d9%88%d9%86%d8%a7%d8%aa";

const blogDataBySlug = {
  "التصميم-الإنشائي": {
    title: "التصميم الإنشائي",
    excerpt: "دليل شامل حول التصميم الإنشائي وأهميته في سلامة المشروع.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90",
  },
  "تكلفة-بناء-دور-واحد": {
    title: "تكلفة بناء دور واحد",
    excerpt:
      "تعرف على أهم عناصر تكلفة بناء دور واحد وكيفية تقدير الميزانية بشكل أفضل.",
    category: "تكاليف البناء",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90",
  },
  "التصميم-المعماري": {
    title: "تكلفة التصميم المعماري في السعودية",
    excerpt: "دليل شامل حول تكلفة التصميم المعماري والعوامل المؤثرة على السعر.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=90",
  },
  "هدم-مبانى": {
    title: "هدم مبانى",
    excerpt:
      "أهم ما تحتاج معرفته عن هدم المباني وخطوات العمل والاحتياطات المطلوبة.",
    category: "هدم مبانى",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90",
  },
  "طرق-تمنع-نمو-العفن": {
    title: "طرق تمنع نمو العفن",
    excerpt:
      "طرق عملية تساعدك على منع نمو العفن داخل المنزل والحفاظ على بيئة صحية.",
    category: "الصرف الصحى",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=90",
  },
  "اسعار-نقل-العفش-بالسعوديّة": {
    title: "اسعار نقل العفش بالسعوديّة",
    excerpt: "دليل أسعار نقل العفش في السعودية والعوامل التي تؤثر على التكلفة.",
    category: "خدمات المنازل",
    image:
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&w=1200&q=90",
  },
  "مظلات-السيارات-السعودية": {
    title: "مظلات السيارات السعودية",
    excerpt:
      "كل ما تحتاج معرفته عن مظلات السيارات في السعودية والأنواع والتكاليف.",
    category: "خدمات المنازل",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=90",
  },
  "كشف-عزل-الخزانات": {
    title: "كشف عزل الخزانات",
    excerpt:
      "أهمية كشف عزل الخزانات وكيفية التأكد من جودة العزل وحماية المياه.",
    category: "الصرف الصحى",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=90",
  },
  "بناء-فلة": {
    title: "بناء فلة",
    excerpt: "دليل شامل حول بناء فلة من التخطيط والتصميم وحتى التنفيذ.",
    category: "تكاليف البناء",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  },
  "جبس-عادي-بورد": {
    title: "جبس عادي بورد",
    excerpt: "مقارنة وأفكار حول استخدام الجبس العادي والجبس بورد في التشطيبات.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
  },
  باركيه: {
    title: "باركيه",
    excerpt: "دليل اختيار أرضيات الباركيه وأنواعها ومميزاتها داخل المنزل.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=90",
  },
  "ديكور-التلفاز": {
    title: "ديكور التلفاز",
    excerpt:
      "أفكار ديكور التلفاز داخل غرف المعيشة والمجالس بتصاميم عملية وأنيقة.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=90",
  },
  "مياه-صالحة-للشرب": {
    title: "مياه صالحة للشرب",
    excerpt: "كيف تتأكد من جودة المياه وصلاحيتها للشرب داخل المنزل.",
    category: "الصرف الصحى",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=90",
  },
  "صيانة-المكيفات": {
    title: "صيانة المكيفات",
    excerpt: "أهم خطوات صيانة المكيفات للحفاظ على الأداء وتقليل الأعطال.",
    category: "التكيف و التدفئة",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=90",
  },
  "الدهان-البوية": {
    title: "الدهان البوية",
    excerpt:
      "دليل اختيار الدهانات والبوية المناسبة للمنازل والمساحات المختلفة.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=90",
  },
  "حفر-الأرض": {
    title: "حفر الأرض",
    excerpt: "معلومات مهمة عن حفر الأرض وتجهيز الموقع قبل أعمال البناء.",
    category: "حفر الاساسات",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90",
  },
  "فلل-مودرن": {
    title: "فلل مودرن",
    excerpt: "أفكار وتصاميم فلل مودرن تناسب المنازل الحديثة في السعودية.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90",
  },
  "ديكور-غرفة-المعيشة": {
    title: "ديكور غرفة المعيشة",
    excerpt: "أفكار عملية لتصميم ديكور غرفة المعيشة بطريقة مريحة وأنيقة.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
  },
  "تصميم-حدائق": {
    title: "تصميم حدائق",
    excerpt: "أفكار ونصائح لتصميم الحدائق المنزلية والمساحات الخارجية.",
    category: "تنسيق الحدائق",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=90",
  },
  "انواع-الديكور-الداخلي": {
    title: "انواع الديكور الداخلي",
    excerpt:
      "تعرف على أشهر أنواع الديكور الداخلي واختيار النمط المناسب لمنزلك.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
  },
  "تصميم-انشائي": {
    title: "تصميم مخطط انشائي",
    excerpt: "شرح مبسط حول التصميم الإنشائي وأهمية المخطط الإنشائي للمشروع.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90",
  },
  "تصاميم-بيوت-من-الداخل": {
    title: "تصاميم بيوت من الداخل",
    excerpt: "مجموعة أفكار لتصاميم بيوت من الداخل مع نصائح مهمة.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=90",
  },
  "مصمم-معماري": {
    title: "مصمم معماري - كيف تجد الأفضل",
    excerpt: "كيف تختار مصمم معماري مناسب وما هي المعايير المهمة قبل التعاقد.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1200&q=90",
  },
  "ايجاد-مهندس-انشائي": {
    title: "مهندس انشائي - كيف تجد الأفضل",
    excerpt: "دليل اختيار مهندس إنشائي مناسب ومعرفة أهم عوامل السعر والجودة.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=90",
  },
  "واجهات-منازل-حديثة": {
    title: "واجهات منازل حديثة",
    excerpt: "أفكار واجهات منازل حديثة ومميزة تناسب التصميم العصري.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=90",
  },
  "تصميم-معماري-عن-بعد": {
    title: "تصميم معماري عن بعد",
    excerpt: "كيف تحصل على تصميم معماري عن بعد وما هي المميزات والتحديات.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90",
  },
  "تصاميم-استراحات": {
    title: "تصاميم استراحات",
    excerpt: "أفكار تصاميم استراحات عملية ومناسبة للمساحات المختلفة.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=90",
  },
  "طريقة-توزيع-الغرف-في-البيت": {
    title: "طريقة توزيع الغرف في البيت",
    excerpt: "نصائح لتوزيع الغرف داخل البيت بطريقة عملية ومريحة.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",
  },
  "مقاول-بناء": {
    title: "كيف اختار مقاول بناء؟",
    excerpt: "نصائح مهمة تساعدك على اختيار مقاول بناء مناسب لمشروعك.",
    category: "تكاليف البناء",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=90",
  },
  "تصميم-داخلي-كلاسيك": {
    title: "تصميم داخلي كلاسيك",
    excerpt: "20 مثال لتصميم داخلي كلاسيك مع نصائح من مهندس مختص.",
    category: "التصميم الداخلى",
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=90",
  },
  "كيف-تجد-مهندس-معماري-دليلك-الشامل": {
    title: "كيف تجد مهندس معماري",
    excerpt: "دليلك الشامل لإيجاد مهندس معماري مناسب لمشروعك.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=90",
  },
  "كيف-تختار-المصمم-المعماري-المناسب": {
    title: "كيف تختار المصمم المعماري المناسب؟",
    excerpt: "أهم النقاط لاختيار مصمم معماري يناسب ذوقك وميزانيتك.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=90",
  },
  "افضل-مكتب-هندسي-مدينة-الرياض": {
    title: "ما هو أفضل مكتب هندسي في الرياض؟",
    excerpt: "قائمة مكاتب هندسية في الرياض مع أرقام التواصل والعناوين.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
  },
  "افضل-مكتب-هندسي-بالدمام": {
    title: "ما هو افضل مكتب هندسي بالدمام؟",
    excerpt: "قائمة أفضل المكاتب الهندسية في الدمام حسب تقييم العملاء.",
    category: "التصميم المعماري",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90",
  },
};

function decodeSlug(folderName) {
  try {
    return decodeURIComponent(folderName);
  } catch {
    return folderName;
  }
}

function titleFromSlug(slug) {
  return slug.replaceAll("-", " ");
}

function getBlogsFromAppFolders() {
  const appDir = path.join(process.cwd(), "app");

  const folders = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((folderName) => folderName !== BLOG_ROUTE_FOLDER)
    .filter((folderName) => !folderName.startsWith("_"))
    .filter((folderName) =>
      fs.existsSync(path.join(appDir, folderName, "page.jsx")),
    );

  return folders
    .map((folderName) => {
      const slug = decodeSlug(folderName);
      const data = blogDataBySlug[slug];

      return {
        title: data?.title || titleFromSlug(slug),
        excerpt:
          data?.excerpt ||
          "مقال من مدونة موسوق حول التصميم والبناء والخدمات المنزلية.",
        category: data?.category || "التصميم المعماري",
        image:
          data?.image ||
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
        href: `/${folderName}/`,
        slug,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title, "ar"));
}

export default function BlogsPage() {
  const blogs = getBlogsFromAppFolders();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "المدونات | موسوق",
    description:
      "تصفح مقالات موسوق حول التصميم المعماري والإنشائي والبناء والديكور وخدمات المنازل في السعودية.",
    url: pageUrl,
    inLanguage: "ar-SA",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://mawsouq.com${blog.href}`,
        name: blog.title,
      })),
    },
  };

  console.log(
    "BLOGS FOUND:",
    blogs.length,
    blogs.map((blog) => blog.href),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogsClient blogs={blogs} />
    </>
  );
}
