"use client";

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=Hello%20Mawsooq%2C%20I%20would%20like%20to%20ask%20about%20the%20service%3A%20";

const services = [
  {
    title: "Architectural Design",
    description:
      "Complete architectural designs and drawings using modern international standards",
    image: "/services/arch-des.webp",
  },
  {
    title: "Structural Design",
    description:
      "Complete structural designs and engineering drawings in accordance with the Saudi Building Code",
    image: "/services/Building.webp",
  },
  {
    title: "Interior Design",
    description:
      "Complete interior design solutions using current international design approaches",
    image: "/services/int-design.webp",
  },
  {
    title: "Construction Cost Calculator",
    description:
      "Estimate construction costs using regularly updated Saudi market pricing",
    image: "/services/IMG-20201028-WA0006-copy.webp",
  },
  {
    title: "Feasibility & Cost Studies",
    description:
      "Feasibility studies and project cost planning based on current market pricing",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Electrical & Lighting Systems",
    description:
      "Electrical and lighting network design in accordance with the Saudi Building Code",
    image: "/services/electrical.webp",
  },
  {
    title: "Drainage & Plumbing Systems",
    description:
      "Drainage and plumbing network design in accordance with the Saudi Building Code",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "HVAC Systems",
    description: "Air conditioning, cooling, and heating systems designed to Saudi code requirements",
    image: "/services/Ac-Repair.webp",
  },
  {
    title: "Fire Protection & Life Safety",
    description:
      "Firefighting and fire-protection systems designed to Saudi code requirements",
    image: "/services/fire.webp",
  },
  {
    title: "Foundation Excavation & Site Preparation",
    description:
      "Excavation and site surveying works based on the required foundation scope",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=90",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
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

export default function ServicesSection() {
  return (
    <section
      id="architectural-design"
      dir="ltr"
      className="relative isolate overflow-hidden bg-[color:var(--surface-2)] py-12 text-[color:var(--ink)] sm:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.14),transparent_30%),radial-gradient(circle_at_14%_88%,rgba(11,91,184,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.18),transparent_30%),radial-gradient(circle_at_14%_88%,rgba(90,166,255,0.07),transparent_28%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] dark:opacity-[0.10] [background-image:linear-gradient(rgba(16,32,51,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,51,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mb-8 flex flex-col gap-4 text-left lg:mb-9 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)]/80 px-4 py-2 shadow-[var(--card-shadow)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-bright)] shadow-[0_0_0_6px_rgba(47,134,246,0.14)]" />
              <span className="text-sm font-black text-[color:var(--brand)]">
                Integrated Services
              </span>
            </div>

            <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl lg:text-5xl">
              Mawsooq Design and Construction Services
            </h2>

            <p className="mt-3 max-w-2xl text-pretty text-sm leading-7 text-[color:var(--ink-muted)] sm:text-base">
              Clear, organized design and construction services for every project stage.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-5 py-3 shadow-[var(--card-shadow)]">
            <p className="text-xs font-black text-[color:var(--ink-faint)]">
              Services
            </p>
            <p className="text-2xl font-black leading-none text-[color:var(--ink)]">
              {services.length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative h-[315px] overflow-hidden rounded-[24px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition duration-500 hover:-translate-y-1.5 dark:shadow-[0_18px_45px_rgba(0,0,0,0.32)] sm:h-[330px] lg:h-[335px]"
            >
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  loading={index < 5 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,var(--surface),var(--surface-3),var(--surface-2))]">
                  <div className="mx-4 rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface)]/90 p-5 text-center shadow-[var(--card-shadow)] backdrop-blur-xl">
                    <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--surface-3)] text-2xl font-black text-[color:var(--brand)]">
                      +
                    </div>
                    <p className="text-xs font-black text-[color:var(--ink-muted)]">
                      Image coming soon
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/96 via-[#071321]/58 to-[#071321]/8" />
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--brand)]/28 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col justify-between p-4.5 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/20 bg-[color:var(--brand)]/90 px-3 py-1.5 text-[11px] font-black text-white shadow-[0_10px_26px_rgba(11,91,184,0.22)] backdrop-blur-xl">
                    Available
                  </span>
                </div>

                <div className="flex min-h-[162px] flex-col justify-end">
                  <div className="mb-3 h-1 w-16 rounded-full bg-gradient-to-r from-white via-[color:var(--brand-bright)] to-[color:var(--brand)] transition-all duration-500 group-hover:w-24" />

                  <h3 className="line-clamp-2 min-h-[54px] text-xl font-black leading-[1.35] tracking-[-0.025em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 min-h-[48px] text-[13px] leading-6 text-white/76">
                    {service.description}
                  </p>

                  <a
                    href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-[color:var(--brand)] px-4 py-2.5 text-center text-xs font-black leading-5 text-white shadow-[0_14px_32px_rgba(11,91,184,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--brand-bright)]"
                  >
                    <span>Request Service</span>
                    <ArrowIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[24px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-4 shadow-[var(--card-shadow)] sm:p-5 lg:mt-9">
          <div className="flex flex-col items-stretch justify-between gap-4 text-center lg:flex-row lg:items-center lg:text-left">
            <div className="min-w-0">
              <h3 className="text-xl font-black leading-tight text-[color:var(--ink)] sm:text-2xl">
                Need a Specific Service for Your Project?
              </h3>
              <p className="mt-1 text-sm leading-7 text-[color:var(--ink-muted)]">
                Contact us and we will help you choose the right service for your project stage.
              </p>
            </div>

            <a
              href="https://wa.me/201223328270?text=Hello%20Mawsooq%2C%20I%20would%20like%20a%20consultation%20about%20design%20and%20construction%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 py-3 text-center text-sm font-black leading-5 text-white shadow-[0_16px_36px_rgba(11,91,184,0.26)] transition hover:-translate-y-1 hover:bg-[color:var(--brand-bright)] lg:w-auto lg:px-8"
            >
              Start a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
