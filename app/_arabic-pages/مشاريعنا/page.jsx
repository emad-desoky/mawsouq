import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, MapPin, MessageCircle, PlayCircle, ShieldCheck } from "lucide-react";

import MawsooqProofSection from "@/components/ar/MawsooqProofSection";
import { MAWSOUQ_PROJECTS, MAWSOUQ_YOUTUBE_CHANNEL } from "@/lib/mawsouqProjects";

const SITE_URL = "https://mawsouq.com";
const WHATSAPP_URL =
  "https://wa.me/966598061334?text=" +
  encodeURIComponent("مرحبًا موسوق، شاهدت معرض مشاريعكم وأريد مناقشة مشروعي في السعودية. المدينة: ___، نوع المشروع: ___، المساحة التقريبية: ___");

export const metadata = {
  title: "مشاريع موسوق | فلل وتصميم داخلي واستراحات في السعودية",
  description:
    "شاهد نماذج حقيقية من مشاريع موسوق المنشورة على YouTube: تصميم معماري لفلل في الرياض والدمام ومكة والأحساء وتصميم استراحات في السعودية، مع آراء عملاء حقيقية.",
  alternates: { canonical: "/مشاريعنا/" },
  openGraph: {
    title: "مشاريع موسوق الحقيقية في السعودية",
    description: "نماذج مشاريع تصميم معماري وداخلي واستراحات منشورة على قناة موسوق الرسمية.",
    url: "/مشاريعنا/",
    type: "website",
    locale: "ar_SA",
    images: [{ url: "/projects/architecture-villa-dammam.jpg", width: 1200, height: 656 }],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/مشاريعنا/#webpage`,
        url: `${SITE_URL}/مشاريعنا/`,
        name: "مشاريع موسوق الحقيقية",
        description: metadata.description,
        inLanguage: "ar-SA",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "ItemList",
        name: "مشاريع موسوق المنشورة",
        itemListElement: MAWSOUQ_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${SITE_URL}${project.href}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "مشاريعنا", item: `${SITE_URL}/مشاريعنا/` },
        ],
      },
    ],
  };

  return (
    <main dir="rtl" className="bg-[color:var(--page)] pt-[132px] text-[color:var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-[color:var(--hairline)] bg-[color:var(--surface-2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_15%,rgba(47,134,246,.17),transparent_32%),radial-gradient(circle_at_12%_86%,rgba(11,91,184,.1),transparent_30%)]" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-10 text-center sm:px-8 md:pb-20 lg:px-12 xl:px-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
            <BadgeCheck size={16} /> أعمال حقيقية • قناة موسوق الرسمية
          </span>
          <h1 className="mx-auto mt-6 max-w-[1000px] text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">مشاريع موسوق: شاهد العمل قبل أن تبدأ مشروعك</h1>
          <p className="mx-auto mt-6 max-w-[850px] text-base font-bold leading-9 text-[color:var(--ink-muted)] sm:text-lg">
            جمعنا هنا نماذج منشورة فعليًا من أعمال موسوق في التصميم المعماري والداخلي والاستراحات داخل السعودية. لا صور مخزنية ولا مواصفات مخترعة؛ كل بطاقة مرتبطة بمشروع ظهر على قناة موسوق.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-lead-tracked="true" data-lead-placement="projects_hub_hero" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_15px_36px_rgba(37,211,102,.25)] transition hover:-translate-y-0.5">
              <MessageCircle size={19} /> ابدأ مشروعك على واتساب
            </a>
            <a href={MAWSOUQ_YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-6 text-sm font-black text-[color:var(--ink)] transition hover:border-[color:var(--brand-bright)] hover:text-[color:var(--brand)]">
              <PlayCircle size={19} /> افتح قناة YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {MAWSOUQ_PROJECTS.map((project, index) => (
            <Link key={project.slug} href={project.href} className={`group overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand-bright)] ${index < 2 ? "xl:col-span-1" : ""}`}>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#071321]">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" priority={index < 3} />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071321]/85 via-transparent to-transparent" />
                <span className="absolute right-5 top-5 rounded-full bg-white/94 px-3 py-2 text-xs font-black text-[#0b5bb8] shadow-lg">{project.category}</span>
                <span className="absolute bottom-5 left-5 grid size-11 place-items-center rounded-full bg-red-600 text-white shadow-xl"><PlayCircle size={22} /></span>
              </div>
              <div className="p-6">
                <span className="flex items-center gap-1.5 text-xs font-black text-[color:var(--brand)]"><MapPin size={15} /> {project.location}</span>
                <h2 className="mt-3 text-xl font-black leading-8">{project.title}</h2>
                <p className="mt-3 line-clamp-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">افتح دراسة المشروع <ArrowLeft size={16} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [ShieldCheck, "دليل حقيقي", "صور ومعاينات من المشاريع التي ظهرت على قناة موسوق، بدل صور عامة لا تثبت العمل."],
            [PlayCircle, "فيديوهات مدمجة", "شاهد نماذج المشاريع وآراء العملاء داخل الموقع دون تحميل المشغل قبل الحاجة إليه."],
            [MessageCircle, "طريق واضح للتواصل", "من كل مشروع يمكنك إرسال brief مخصص عبر رقم موسوق السعودي مباشرة."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <Icon size={24} className="text-[color:var(--brand)]" />
              <h2 className="mt-4 text-xl font-black">{title}</h2>
              <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{text}</p>
            </div>
          ))}
        </div>

        <MawsooqProofSection context="مشروعك في السعودية" whatsappMessage="مرحبًا موسوق، شاهدت معرض المشاريع وآراء العملاء وأريد مناقشة مشروعي. المدينة: ___، نوع المشروع: ___، المساحة: ___" />
      </section>
    </main>
  );
}
