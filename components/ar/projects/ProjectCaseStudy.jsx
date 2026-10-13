import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

import MawsooqProofSection from "@/components/ar/MawsooqProofSection";
import {
  getRelatedMawsooqProjects,
  MAWSOUQ_YOUTUBE_CHANNEL,
} from "@/lib/mawsouqProjects";

const CONTACT_PHONE_DISPLAY = "+20 12 23328270";
const CONTACT_PHONE_E164 = "+201223328270";
const CONTACT_WHATSAPP_NUMBER = "201223328270";
const SITE_URL = "https://mawsouq.com";

function ProjectCard({ item }) {
  return (
    <Link
      href={item.href}
      className="group overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-bright)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#071321]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-[#071321]/75 via-transparent to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-[#0b5bb8] shadow-lg">
          {item.category}
        </span>
      </div>
      <div className="p-5">
        <span className="flex items-center gap-1.5 text-xs font-black text-[color:var(--brand)]">
          <MapPin size={14} /> {item.location}
        </span>
        <h3 className="mt-2 text-lg font-black leading-8 text-[color:var(--ink)]">
          {item.shortTitle}
        </h3>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
          شاهد المشروع <ArrowLeft size={16} />
        </span>
      </div>
    </Link>
  );
}

export default function ProjectCaseStudy({ project }) {
  const relatedProjects = getRelatedMawsooqProjects(project.slug, 3);
  const whatsappUrl = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    project.whatsappMessage,
  )}`;
  const canonical = `${SITE_URL}${project.href}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: project.title,
        description: project.summary,
        inLanguage: "ar-SA",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${project.image}`,
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "موسوق",
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#project`,
        name: project.title,
        description: project.summary,
        image: `${SITE_URL}${project.image}`,
        inLanguage: "ar-SA",
        creator: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "موسوق",
          url: SITE_URL,
          telephone: CONTACT_PHONE_E164,
          sameAs: [MAWSOUQ_YOUTUBE_CHANNEL],
        },
        spatialCoverage: {
          "@type": "Place",
          name: project.location,
        },
      },
      {
        "@type": "BreadcrumbList",
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
            name: "مشاريعنا",
            item: `${SITE_URL}/مشاريعنا/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.shortTitle,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <main dir="rtl" className="bg-[color:var(--page)] pt-[132px] text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-[color:var(--hairline)] bg-[color:var(--surface-2)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(47,134,246,.16),transparent_31%),radial-gradient(circle_at_12%_80%,rgba(11,91,184,.10),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 pb-16 pt-8 sm:px-8 md:pb-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-12 xl:px-16">
          <div>
            <nav className="flex flex-wrap items-center gap-2 text-xs font-bold text-[color:var(--ink-faint)]" aria-label="مسار الصفحة">
              <Link href="/" className="transition hover:text-[color:var(--brand)]">الرئيسية</Link>
              <span>/</span>
              <Link href="/مشاريعنا/" className="transition hover:text-[color:var(--brand)]">مشاريعنا</Link>
              <span>/</span>
              <span>{project.shortTitle}</span>
            </nav>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
                <BadgeCheck size={16} /> مشروع حقيقي منشور
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-4 py-2 text-xs font-black text-[color:var(--ink-muted)]">
                <MapPin size={16} /> {project.location}
              </span>
            </div>

            <h1 className="mt-6 max-w-[780px] text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[760px] text-base font-bold leading-9 text-[color:var(--ink-muted)] sm:text-lg">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-lead-tracked="true"
                data-lead-placement="project_case_hero"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_15px_36px_rgba(37,211,102,.25)] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={19} /> ناقش مشروعك على واتساب
              </a>
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                data-lead-tracked="true"
                data-lead-placement="project_case_hero_phone"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-6 text-sm font-black text-[color:var(--ink)] transition hover:border-[color:var(--brand-bright)] hover:text-[color:var(--brand)]"
              >
                <Phone size={18} /> {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[34px] border border-[color:var(--hairline-strong)] bg-[#071321] shadow-[0_28px_80px_rgba(7,19,33,.2)]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
                <div>
                  <span className="text-xs font-black text-white/65">معاينة من قناة موسوق</span>
                  <strong className="mt-1 block max-w-[440px] text-lg font-black leading-7 sm:text-xl">
                    المادة البصرية مأخوذة من المشروع المنشور على قناتنا
                  </strong>
                </div>
                <a
                  href={MAWSOUQ_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-13 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-xl transition hover:scale-105"
                  aria-label="فتح قناة موسوق على يوتيوب"
                >
                  <PlayCircle size={25} />
                </a>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-4 py-3 text-xs font-black text-[color:var(--ink-muted)] shadow-[var(--card-shadow)] sm:flex sm:items-center sm:gap-2">
              <ShieldCheck size={17} className="text-[color:var(--brand)]" /> صور من محتوى موسوق الحقيقي
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [Building2, "نوع المشروع", project.category],
            [MapPin, "الموقع", project.location],
            [BadgeCheck, "المصدر", "قناة موسوق الرسمية"],
          ].map(([Icon, label, value]) => (
            <div key={label} className="rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <Icon size={22} className="text-[color:var(--brand)]" />
              <span className="mt-4 block text-xs font-black text-[color:var(--ink-faint)]">{label}</span>
              <strong className="mt-1 block text-lg font-black text-[color:var(--ink)]">{value}</strong>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <article className="rounded-[32px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6 shadow-[var(--card-shadow)] sm:p-8">
            <span className="text-xs font-black text-[color:var(--brand)]">عن المشروع</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">مشروع حقيقي بدل صور مخزنية</h2>
            <p className="mt-5 text-base font-bold leading-9 text-[color:var(--ink-muted)]">{project.intro}</p>

            <h3 className="mt-8 text-xl font-black">ما الذي يعرضه هذا النموذج؟</h3>
            <ul className="mt-4 grid gap-3">
              {project.focus.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-[color:var(--surface-2)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[color:var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-[32px] bg-[linear-gradient(145deg,#071321,#0b5bb8)] p-6 text-white shadow-[0_26px_70px_rgba(7,19,33,.22)] sm:p-8">
            <span className="text-xs font-black text-cyan-200">قبل بدء مشروع مشابه</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">قرارات تستحق الحسم مبكرًا</h2>
            <div className="mt-6 space-y-4">
              {project.takeaways.map((item, index) => (
                <div key={item} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-black text-cyan-100">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-bold leading-7 text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={project.relatedServiceHref}
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black !text-[#0b5bb8] transition hover:-translate-y-0.5"
            >
              {project.relatedServiceLabel} <ArrowLeft size={17} />
            </Link>
          </aside>
        </div>

        <MawsooqProofSection
          context={project.shortTitle}
          whatsappMessage={project.whatsappMessage}
        />

        <section className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-black text-[color:var(--brand)]">مشاريع أخرى</span>
              <h2 className="mt-2 text-3xl font-black">شاهد نماذج حقيقية أخرى من موسوق</h2>
            </div>
            <Link href="/مشاريعنا/" className="inline-flex items-center gap-2 text-sm font-black text-[color:var(--brand)]">
              كل المشاريع <ArrowLeft size={17} />
            </Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => <ProjectCard key={item.slug} item={item} />)}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0b5bb8,#2f86f6)] p-7 text-white shadow-[0_24px_64px_rgba(11,91,184,.22)] sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <span className="text-xs font-black text-cyan-100">مشروعك هو الخطوة التالية</span>
            <h2 className="mt-2 text-3xl font-black leading-tight">أرسل بيانات مشروعك ونبدأ من المطلوب الفعلي</h2>
            <p className="mt-3 max-w-[760px] text-sm font-bold leading-7 text-white/80">
              أرسل المدينة، مساحة الأرض أو العقار، نوع المشروع والمرحلة الحالية. سنستخدم هذه المعلومات لبدء محادثة أكثر دقة بدل عرض عام لا يرتبط بحالتك.
            </p>
          </div>
          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-tracked="true"
              data-lead-placement="project_case_bottom"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-lg transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> واتساب المشروع
            </a>
            <a
              href={MAWSOUQ_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
            >
              قناة YouTube <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
