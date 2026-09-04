"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ExternalLink,
  MessageCircle,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";

import { trackLeadAction, trackTrustVideo } from "@/lib/leadTracking";

const CHANNEL_URL = "https://www.youtube.com/channel/UCsLilv9AZyX-a3NWBRWiD4Q";

const projectVideos = [
  { id: "3CmBsvvEetI", label: "Mawsooq architectural design project" },
  { id: "d0uXqjHkf_A", label: "Mawsooq design project showcase" },
  { id: "m7_D-luA-DE", label: "Architectural project walkthrough" },
  { id: "WEF3yjCjr2Y", label: "Another project published by Mawsooq" },
];

const testimonialVideos = [
  { id: "XcKDALgCuIA", label: "Client review of the Mawsooq experience" },
  { id: "J493Jm1f0Xc", label: "Client experience with Mawsooq" },
  { id: "T9715tHfyiY", label: "Client feedback after working with Mawsooq" },
  { id: "QuT6C1L4ya4", label: "Client testimonial published by Mawsooq" },
  { id: "-oS2pzOKqY8", label: "Client review of Mawsooq services" },
];

function YouTubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.37.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.13 2.14c1.87.51 9.37.51 9.37.51s7.5 0 9.37-.51a3.02 3.02 0 0 0 2.13-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.6 15.65v-7.3L15.88 12 9.6 15.65Z" />
    </svg>
  );
}

function VideoCard({ video, type, onPlay }) {
  const vertical = type === "testimonial";

  return (
    <button
      type="button"
      onClick={() => onPlay(video, type)}
      className={`group relative overflow-hidden rounded-[24px] border border-[color:var(--hairline)] bg-[#071321] text-left shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[#2f86f6] ${
        vertical ? "aspect-[9/16] min-w-[180px] sm:min-w-0" : "aspect-video"
      }`}
      aria-label={`Play ${video.label}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/5 to-black/5" />
      <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
        <span className="text-sm font-black leading-6 drop-shadow">{video.label}</span>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-105">
          <Play size={19} fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

export default function MawsooqProofSectionEn({
  context = "your project",
  whatsappUrl,
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (video, type) => {
    setActiveVideo({ ...video, type });
    trackTrustVideo(type, video.id, "english_seo_trust_section");
  };

  return (
    <section
      aria-labelledby="mawsooq-proof-heading-en"
      className="my-12 overflow-hidden rounded-[34px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]"
    >
      <div className="grid gap-7 bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white md:p-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black text-cyan-100">
            <ShieldCheck size={16} /> Real proof before you enquire
          </span>
          <h2 id="mawsooq-proof-heading-en" className="mt-5 text-3xl font-black leading-tight md:text-4xl">
            Watch client reviews and Mawsooq project showcases before starting {context}
          </h2>
          <p className="mt-4 max-w-[850px] text-base font-bold leading-8 text-white/75 md:text-lg">
            These videos are published on Mawsooq&apos;s YouTube channel. Use them to understand how projects are presented and hear client feedback, then send your own project brief for a more relevant conversation.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-black text-white/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><BadgeCheck size={15} /> Video client testimonials</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2"><YouTubeIcon className="h-[15px] w-[15px]" /> Published project showcases</span>
          </div>
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
        >
          <YouTubeIcon className="h-[19px] w-[19px]" /> Mawsooq on YouTube <ExternalLink size={15} />
        </a>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black text-[#2f86f6]">Client reviews</span>
            <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">Hear the experience directly from clients</h3>
          </div>
          <span className="hidden text-xs font-bold text-[color:var(--ink-faint)] sm:block">Select a video to play</span>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 lg:grid-cols-5">
          {testimonialVideos.map((video) => (
            <VideoCard key={video.id} video={video} type="testimonial" onPlay={openVideo} />
          ))}
        </div>

        <div className="mt-9">
          <span className="text-xs font-black text-[#2f86f6]">Project examples</span>
          <h3 className="mt-1 text-2xl font-black text-[color:var(--ink)]">See architectural work published by Mawsooq</h3>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {projectVideos.map((video) => (
            <VideoCard key={video.id} video={video} type="project" onPlay={openVideo} />
          ))}
        </div>

        <div className="mt-8 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div>
            <strong className="block text-xl font-black text-[color:var(--ink)]">Have a real project? Send the useful details, not a generic message.</strong>
            <p className="mt-2 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
              Include the city, plot size, approximate built-up area, project type, current stage and whether you already have drawings or reference images.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-lead-tracked="true"
              data-lead-placement="english_seo_trust_section"
              onClick={() => trackLeadAction("whatsapp", "english_seo_trust_section")}
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-black !text-white shadow-[0_14px_34px_rgba(37,211,102,.22)] transition hover:-translate-y-0.5 sm:w-auto"
              style={{ color: "#fff" }}
            >
              <MessageCircle size={18} /> Send the project brief on WhatsApp
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
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-black/70 text-white backdrop-blur"
              aria-label="Close video"
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
