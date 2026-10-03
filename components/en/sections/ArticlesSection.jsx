"use client";

import { useRef } from "react";
import Link from "next/link";

const articles = [
  {
    title: "Architectural Design in Saudi Arabia",
    description:
      "The complete 2026 architecture pillar covering the owner brief, design stages, plans, local context, fees, provider selection and project handoff.",
    href: "/en/blog/architectural-design-saudi-arabia/",
    category: "Architecture Guide",
    image: "/images/blog/architecture/architectural-design-saudi-arabia.webp",
    icon: "design",
  },
  {
    title: "How to Build a House in Saudi Arabia",
    description:
      "The complete 2026 guide to costs, permits, contractors, timelines, and project decisions.",
    href: "/en/blog/build-a-house-saudi-arabia/",
    category: "Main Guide",
    image: "/images/blog/build-house-saudi-arabia-2026.webp",
    icon: "villa",
  },
  {
    title: "Construction Cost per Square Meter in Saudi Arabia",
    description:
      "Compare indicative cost bands, scope differences, exclusions, and a safer budgeting method.",
    href: "/en/blog/construction-cost-per-square-meter-saudi-arabia/",
    category: "Construction Costs",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=90",
    icon: "building",
  },
  {
    title: "Villa Construction Cost in Saudi Arabia",
    description:
      "Plan the villa budget from structural work and MEP through finishes and external works.",
    href: "/en/blog/villa-construction-cost-saudi-arabia/",
    category: "Villa Construction",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",
    icon: "villa",
  },
  {
    title: "Building Permit in Saudi Arabia",
    description:
      "Understand the Balady workflow, engineering-office role, document readiness, and code checks.",
    href: "/en/blog/building-permit-saudi-arabia/",
    category: "Permits",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90",
    icon: "design",
  },
  {
    title: "How to Choose a Construction Contractor",
    description:
      "Use a practical checklist to compare scope, team, programme, payment terms, and risk.",
    href: "/en/blog/choose-construction-contractor-saudi-arabia/",
    category: "Contractor Selection",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=90",
    icon: "layout",
  },
];

function ArticleIcon({ type }) {
  const base =
    "stroke-current stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]";

  const icons = {
    villa: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.25 20.25V9.75L12 5l5.75 4.75v10.5" />
        <path className={base} d="M9 20.25v-6h6v6" />
        <path className={base} d="M8.25 10.75h7.5" />
      </>
    ),
    design: (
      <>
        <path
          className={base}
          d="M4.75 19.25 15.8 8.2a2.2 2.2 0 0 1 3.1 3.1L7.85 22.35H4.75v-3.1Z"
        />
        <path className={base} d="m14.5 9.5 3 3" />
        <path className={base} d="M5 5.5h7M5 9h4.5" />
      </>
    ),
    layout: (
      <>
        <rect className={base} x="4" y="4" width="16" height="16" rx="2.5" />
        <path className={base} d="M4 10h16M10 10v10M14.5 4v6" />
      </>
    ),
    facade: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.5 20.25V7.75h11v12.5" />
        <path
          className={base}
          d="M8.75 10.25h2.25M13 10.25h2.25M8.75 13.75h2.25M13 13.75h2.25"
        />
        <path className={base} d="M10 20.25V16.5h4v3.75" />
      </>
    ),
    building: (
      <>
        <path className={base} d="M4.5 20.25h15" />
        <path className={base} d="M6.5 20.25v-9.5h11v9.5" />
        <path className={base} d="M8.25 10.75 12 5.25l3.75 5.5" />
        <path className={base} d="M9 14.25h6M9 17.25h6" />
      </>
    ),
  };

  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-4.5 w-4.5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }) {
  return (
    <svg
      className={`h-5 w-5 ${direction === "right" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ArticlesSection() {
  const trackRef = useRef(null);

  const scrollTrack = (dir) => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth;
    trackRef.current.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="articles"
      dir="ltr"
      className="relative isolate overflow-hidden bg-[#f6fbff] py-20 transition-colors duration-300 dark:bg-[#061322] sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(47,134,246,0.16),transparent_32%),radial-gradient(circle_at_10%_88%,rgba(11,91,184,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_82%_12%,rgba(47,134,246,0.18),transparent_32%),radial-gradient(circle_at_10%_88%,rgba(124,196,255,0.08),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2f86f6]/35 to-transparent" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center lg:mb-12 lg:flex-row lg:text-left">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
              <span className="text-sm font-black text-[#0b5bb8] dark:text-[#7cc4ff]">
                Useful Guides
              </span>
            </div>

            <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-[#102033] dark:text-white sm:text-4xl lg:text-5xl">
              Architecture & Construction Guides for Better Project Decisions
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-[#102033]/65 dark:text-white/65 sm:text-lg">
              Explore practical guides to architectural design, villa planning, drawings, construction costs and building stages in Saudi Arabia, with clear routes from research to a project-ready brief.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTrack("prev")}
              className="grid h-12 w-12 place-items-center rounded-full border border-[#102033]/10 bg-white text-[#0b5bb8] shadow-[0_14px_34px_rgba(16,32,51,0.08)] transition hover:-translate-y-1 hover:bg-[#0b5bb8] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-[#7cc4ff] dark:hover:bg-[#2f86f6] dark:hover:text-white"
              aria-label="Previous"
            >
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              onClick={() => scrollTrack("next")}
              className="grid h-12 w-12 place-items-center rounded-full border border-[#102033]/10 bg-white text-[#0b5bb8] shadow-[0_14px_34px_rgba(16,32,51,0.08)] transition hover:-translate-y-1 hover:bg-[#0b5bb8] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-[#7cc4ff] dark:hover:bg-[#2f86f6] dark:hover:text-white"
              aria-label="Next"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={trackRef} className="article-track">
            {articles.map((article, index) => (
              <Link
                key={article.href}
                href={article.href}
                className="article-slide group"
              >
                <article className="flex h-full min-h-[580px] flex-col overflow-hidden rounded-[34px] border border-[#102033]/8 bg-white shadow-[0_18px_55px_rgba(16,32,51,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(16,32,51,0.16)] dark:border-white/10 dark:bg-white/[0.05] dark:shadow-[0_22px_70px_rgba(0,0,0,0.28)] dark:hover:bg-white/[0.07]">
                  <div className="relative h-[300px] shrink-0 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/82 via-[#071321]/18 to-transparent" />

                    <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-black text-[#0b5bb8] shadow-sm backdrop-blur-xl dark:bg-[#071321]/85 dark:text-[#7cc4ff]">
                      {article.category}
                    </span>

                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#071321]/60 text-sm font-black text-white backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="absolute bottom-5 right-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0b5bb8] to-[#2f86f6] text-white shadow-[0_16px_34px_rgba(11,91,184,0.34)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                      <ArticleIcon type={article.icon} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="line-clamp-2 min-h-[72px] text-2xl font-black leading-9 text-[#102033] transition-colors duration-300 group-hover:text-[#0b5bb8] dark:text-white dark:group-hover:text-[#7cc4ff]">
                      {article.title}
                    </h3>

                    <p className="mt-4 line-clamp-4 min-h-[128px] text-base leading-8 text-[#102033]/62 dark:text-white/60">
                      {article.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#102033]/8 pt-5 dark:border-white/10">
                      <span className="inline-flex items-center gap-2 text-sm font-black text-[#0b5bb8] dark:text-[#7cc4ff]">
                        Read More
                        <ArrowIcon />
                      </span>

                      <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_7px_rgba(47,134,246,0.12)]" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[34px] border border-[#102033]/5 bg-[#102033] p-6 text-white shadow-[0_24px_80px_rgba(16,32,51,0.18)] dark:border-white/10 dark:bg-[#071321] sm:p-8 lg:mt-12">
          <div className="relative">
            <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#2f86f6]/25 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
              <div>
                <h3 className="text-2xl font-black text-white">
                  Want an Estimate Instead of More Reading?
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65 sm:text-base">
                  Use the cost calculator or contact us to identify the right
                  next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/en/#cost-calculator"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#2f86f6] px-6 text-sm font-black text-white shadow-[0_14px_35px_rgba(47,134,246,0.32)] transition hover:-translate-y-1 hover:bg-[#0b5bb8] sm:h-14 sm:px-8 sm:text-base"
                >
                  Estimate Your Project Cost
                  <ArrowIcon />
                </Link>

                <Link
                  href="/en/blog/"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/18 sm:h-14 sm:px-8 sm:text-base"
                >
                  Latest Blogs
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 100%;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding-bottom: 8px;
        }

        .article-track::-webkit-scrollbar {
          display: none;
        }

        .article-slide {
          scroll-snap-align: start;
          min-width: 0;
        }

        @media (min-width: 640px) {
          .article-track {
            grid-auto-columns: calc((100% - 24px) / 2);
          }
        }

        @media (min-width: 1024px) {
          .article-track {
            grid-auto-columns: calc((100% - 48px) / 3);
          }
        }

        @media (max-width: 639px) {
          .article-slide article {
            min-height: 540px;
          }

          .article-slide article > div:first-child {
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
