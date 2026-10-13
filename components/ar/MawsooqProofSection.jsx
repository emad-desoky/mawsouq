"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ExternalLink,
  MapPin,
  MessageCircle,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";
import { trackLeadAction, trackTrustVideo } from "@/lib/leadTracking";
import {
  MAWSOUQ_PROJECTS,
  MAWSOUQ_YOUTUBE_CHANNEL,
  PROJECT_VIDEO_SAMPLES,
  TESTIMONIAL_VIDEOS,
} from "@/lib/mawsouqProjects";

const CHANNEL_URL = MAWSOUQ_YOUTUBE_CHANNEL;
const WHATSAPP_NUMBER = "201223328270";

function YouTubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.37.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.87.51 9.37.51 9.37.51s7.5 0 9.37-.51a3.02 3.02 0 0 0 2.13-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.6 15.65v-7.3L15.88 12 9.6 15.65Z" />
    </svg>
  );
}

function pickByIds(items, ids, fallbackCount) {
  if (!ids?.length) return items.slice(0, fallbackCount);
  const selected = ids.map((id) => items.find((item) => item.id === id)).filter(Boolean);
  return selected.length ? selected : items.slice(0, fallbackCount);
}

function VideoCard({ video, type, onPlay }) {
  const vertical = type === "testimonial";

  return (
    <button
      type="button"
      onClick={() => onPlay(video, type)}
      className={`group relative overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[#071321] text-right shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-bright)] ${
        vertical ? "aspect-[9/16] min-w-[180px] sm:min-w-0" : "aspect-video"
      }`}
      aria-label={`تشغيل ${video.label}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/5" />
      <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
        <span className="text-sm font-black leading-6 drop-shadow">{video.label}</span>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-105">
          <Play size={19} fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

function RealProjectCard({ project }) {
  return (
    <Link
      href={project.href}
      className="group overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-bright)] hover:shadow-[var(--card-shadow)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#071321]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-[#071321]/82 via-transparent to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-black text-[#0b5bb8]">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <span className="flex items-center gap-1.5 text-xs font-black text-[color:var(--brand)]">
          <MapPin size={14} /> {project.location}
        </span>
        <h3 className="mt-2 text-lg font-black leading-7 text-[color:var(--ink)]">{project.shortTitle}</h3>
        <p className="mt-2 line-clamp-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">{project.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[color:var(--brand)]">
          شاهد المشروع الحقيقي <ArrowLeft size={15} />
        </span>
      </div>
    </Link>
  );
}

export default function MawsooqProofSection({
  context = "مشروعك",
  whatsappMessage = "مرحبًا موسوق، أريد استشارة عن مشروعي. المدينة: ___، نوع المشروع: ___، المساحة: ___",
  compact = false,
  projectSlugs = [],
  projectVideoIds = [],
  testimonialIds = [],
  intro,
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = useMemo(() => {
    if (!projectSlugs?.length) return MAWSOUQ_PROJECTS.slice(0, 3);
    const selected = projectSlugs
      .map((slug) => MAWSOUQ_PROJECTS.find((project) => project.slug === slug))
      .filter(Boolean);
    return selected.length ? selected : MAWSOUQ_PROJECTS.slice(0, 3);
  }, [projectSlugs]);

  const projectVideos = useMemo(
    () => pickByIds(PROJECT_VIDEO_SAMPLES, projectVideoIds, compact ? 1 : 2),
    [projectVideoIds, compact],
  );
  const testimonialVideos = useMemo(
    () => pickByIds(TESTIMONIAL_VIDEOS, testimonialIds, compact ? 2 : 3),
    [testimonialIds, compact],
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const openVideo = (video, type) => {
    setActiveVideo({ ...video, type });
    trackTrustVideo(type, video.id);
  };

  return (
    <section
      aria-labelledby="mawsouq-proof-heading"
      className="my-14 overflow-hidden rounded-[34px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]"
    >
      <div className="grid gap-7 bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-cyan-100">
            <ShieldCheck size={16} />
            دليل أعمال حقيقي من موسوق
          </span>
          <h2 id="mawsouq-proof-heading" className="mt-5 text-3xl font-black leading-tight md:text-4xl">
            اربط {context} بمشاريع منشورة وآراء عملاء حقيقية
          </h2>
          <p className="mt-4 max-w-[900px] text-base font-bold leading-8 text-white/75 md:text-lg">
            {intro ||
              "نعرض هنا مشاريع موجودة فعليًا في معرض أعمال موسوق وفيديوهات منشورة على القناة الرسمية. لا نستخدم هذه المشاريع لاختلاق مساحة أو تكلفة أو نتيجة غير منشورة؛ نستخدمها كدليل بصري وخبرة عملية تساعدك على فهم القرارات قبل بدء مشروعك."}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-black text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><BadgeCheck size={15} /> مشاريع فعلية منشورة</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><YouTubeIcon className="h-[15px] w-[15px]" /> فيديوهات من قناة موسوق</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><BadgeCheck size={15} /> شهادات عملاء بالفيديو</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
          <Link
            href="/مشاريعنا/"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black !text-[#0b5bb8] transition hover:-translate-y-0.5"
          >
            كل مشاريع موسوق <ArrowLeft size={16} />
          </Link>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
          >
            <YouTubeIcon className="h-[19px] w-[19px]" />
            قناة موسوق <ExternalLink size={15} />
          </a>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div>
          <span className="text-xs font-black text-[color:var(--brand)]">مشاريع مرتبطة بالموضوع</span>
          <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">أمثلة حقيقية من معرض أعمال موسوق</h3>
          <p className="mt-2 max-w-[900px] text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
            افتح أي مشروع لترى الصور وسياقه المنشور بدل الاعتماد على صور مخزنية أو أمثلة عامة لا تخص موسوق.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => <RealProjectCard key={project.slug} project={project} />)}
        </div>

        <div className="mt-9 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[color:var(--brand)]">آراء العملاء</span>
            <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">شاهد التجربة بصوت أصحابها</h3>
          </div>
          <span className="hidden text-xs font-bold text-[color:var(--ink-faint)] sm:block">اضغط على الفيديو للتشغيل</span>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {testimonialVideos.map((video) => (
            <VideoCard key={video.id} video={video} type="testimonial" onPlay={openVideo} />
          ))}
        </div>

        {!compact && projectVideos.length ? (
          <>
            <div className="mt-9">
              <span className="text-xs font-black text-[color:var(--brand)]">فيديوهات مشاريع</span>
              <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">شاهد طريقة عرض مشاريع موسوق على القناة</h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {projectVideos.map((video) => (
                <VideoCard key={video.id} video={video} type="project" onPlay={openVideo} />
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-8 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div>
            <strong className="block text-xl font-black text-[color:var(--ink)]">عندك مشروع فعلي؟ أرسل البيانات الأساسية بدل رسالة عامة</strong>
            <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
              اكتب المدينة، نوع المشروع، المساحة التقريبية، وما إذا كانت لديك مخططات أو صور مرجعية. هذا يجعل أول محادثة أسرع وأكثر فائدة.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-tracked="true"
              data-lead-placement="seo_trust_section"
              onClick={() => trackLeadAction("whatsapp", "seo_trust_section")}
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_14px_34px_rgba(37,211,102,.22)] transition hover:-translate-y-0.5 sm:w-auto"
              style={{ color: "#fff" }}
            >
              <MessageCircle size={18} />
              أرسل تفاصيل المشروع على واتساب
            </a>
          </div>
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[120] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.label}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className={`relative w-full overflow-hidden rounded-[26px] bg-black shadow-2xl ${
              activeVideo.type === "testimonial" ? "max-w-[420px]" : "max-w-[1000px]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute left-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-black/70 text-white backdrop-blur"
              aria-label="إغلاق الفيديو"
            >
              <X size={20} />
            </button>
            <div className={activeVideo.type === "testimonial" ? "aspect-[9/16]" : "aspect-video"}>
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.label}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
