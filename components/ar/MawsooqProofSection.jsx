"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ExternalLink,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Youtube,
  X,
} from "lucide-react";
import { trackLeadAction, trackTrustVideo } from "@/lib/leadTracking";

const CHANNEL_URL = "https://www.youtube.com/channel/UCsLilv9AZyX-a3NWBRWiD4Q";
const PHONE = "+201223328270";
const WHATSAPP_NUMBER = "201223328270";

const projectVideos = [
  { id: "3CmBsvvEetI", label: "مشروع تصميم معماري من موسوق" },
  { id: "d0uXqjHkf_A", label: "نموذج مشروع تصميم من موسوق" },
  { id: "m7_D-luA-DE", label: "جولة في مشروع تصميم معماري" },
  { id: "WEF3yjCjr2Y", label: "مشروع آخر منشور على قناة موسوق" },
];

const testimonialVideos = [
  { id: "XcKDALgCuIA", label: "رأي عميل في تجربة موسوق" },
  { id: "J493Jm1f0Xc", label: "تجربة عميل مع موسوق" },
  { id: "T9715tHfyiY", label: "رأي عميل بعد التعامل مع موسوق" },
  { id: "QuT6C1L4ya4", label: "شهادة عميل منشورة على قناة موسوق" },
  { id: "-oS2pzOKqY8", label: "رأي عميل في خدمات موسوق" },
];

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

export default function MawsooqProofSection({
  context = "مشروعك",
  whatsappMessage = "مرحبًا موسوق، أريد استشارة عن مشروعي. المدينة: ___، نوع المشروع: ___، المساحة: ___",
  compact = false,
}) {
  const [activeVideo, setActiveVideo] = useState(null);

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
            ثقة قبل التواصل
          </span>
          <h2 id="mawsouq-proof-heading" className="mt-5 text-3xl font-black leading-tight md:text-4xl">
            شاهد آراء عملاء ومشاريع موسوق قبل أن تبدأ {context}
          </h2>
          <p className="mt-4 max-w-[850px] text-base font-bold leading-8 text-white/75 md:text-lg">
            بدل الاعتماد على كلام تسويقي فقط، يمكنك مشاهدة آراء عملاء بالفيديو ونماذج مشاريع منشورة على قناة موسوق، ثم إرسال بيانات مشروعك لبدء محادثة واضحة حول الخطوة التالية.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-black text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><BadgeCheck size={15} /> آراء عملاء بالفيديو</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><Youtube size={15} /> مشاريع منشورة على القناة</span>
          </div>
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
        >
          <Youtube size={19} />
          قناة موسوق
          <ExternalLink size={15} />
        </a>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[color:var(--brand)]">آراء العملاء</span>
            <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">شاهد التجربة بصوت أصحابها</h3>
          </div>
          <span className="hidden text-xs font-bold text-[color:var(--ink-faint)] sm:block">اضغط على أي فيديو للتشغيل</span>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 lg:grid-cols-5">
          {testimonialVideos.map((video) => (
            <VideoCard key={video.id} video={video} type="testimonial" onPlay={openVideo} />
          ))}
        </div>

        {!compact && (
          <>
            <div className="mt-9">
              <span className="text-xs font-black text-[color:var(--brand)]">نماذج مشاريع</span>
              <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">شاهد طريقة عرض مشاريع التصميم على قناة موسوق</h3>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {projectVideos.map((video) => (
                <VideoCard key={video.id} video={video} type="project" onPlay={openVideo} />
              ))}
            </div>
          </>
        )}

        <div className="mt-8 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div>
            <strong className="block text-xl font-black text-[color:var(--ink)]">عندك مشروع فعلي؟ أرسل البيانات الأساسية بدل رسالة عامة</strong>
            <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
              اكتب المدينة، نوع المشروع، المساحة التقريبية، وما إذا كانت لديك مخططات أو صور مرجعية. هذا يجعل أول محادثة أسرع وأكثر فائدة.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row md:mt-0 md:shrink-0">
            <a
              href={`tel:${PHONE}`}
              data-lead-tracked="true"
              data-lead-placement="seo_trust_section"
              onClick={() => trackLeadAction("phone", "seo_trust_section")}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 text-sm font-black text-white shadow-[0_14px_34px_rgba(11,91,184,.22)] transition hover:-translate-y-0.5"
              style={{ color: "#fff" }}
            >
              <Phone size={18} />
              اتصل الآن
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-tracked="true"
              data-lead-placement="seo_trust_section"
              onClick={() => trackLeadAction("whatsapp", "seo_trust_section")}
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black text-[#052d16] shadow-[0_14px_34px_rgba(37,211,102,.22)] transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              أرسل تفاصيل المشروع
            </a>
          </div>
        </div>
      </div>

      {activeVideo && (
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
      )}
    </section>
  );
}
