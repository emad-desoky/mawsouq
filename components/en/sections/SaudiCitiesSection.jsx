const WHATSAPP_URL =
  "https://wa.me/201223328270?text=Hello%20Mawsooq%2C%20I%20would%20like%20a%20consultation%20about%20construction%20services%20in%20the%20Arab%20region";

const gccCountries = [
  {
    name: "Saudi Arabia",
    code: "sa",
    type: "Primary Market",
    desc: "Design and construction aligned with Saudi market requirements.",
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    type: "Contemporary Design",
    desc: "Modern design solutions for residential and commercial projects.",
  },
  {
    name: "Kuwait",
    code: "kw",
    type: "Residential Projects",
    desc: "Practical plans suited to construction conditions in Kuwait.",
  },
  {
    name: "Qatar",
    code: "qa",
    type: "Engineering Solutions",
    desc: "Professional architectural and structural design.",
  },
  {
    name: "Bahrain",
    code: "bh",
    type: "Design & Construction",
    desc: "Integrated design services for homes and developments.",
  },
  {
    name: "Oman",
    code: "om",
    type: "Integrated Services",
    desc: "Flexible designs that account for site conditions and budget.",
  },
];

const factors = [
  "Building codes vary by country",
  "Costs vary by city and region",
  "Project size and type",
  "Required finish level",
  "Land and site conditions",
  "Local permit requirements",
];

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5"
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

function CheckIcon() {
  return (
    <svg
      className="h-4.5 w-4.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.25 4.25L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlagIcon({ code }) {
  return (
    <span
      className={`fi fi-${code} h-9 w-12 rounded-[10px] shadow-[0_8px_20px_rgba(16,32,51,0.16)]`}
      aria-hidden="true"
    />
  );
}

export default function SaudiCitiesSection() {
  return (
    <section
      dir="ltr"
      className="relative isolate overflow-hidden bg-white py-20 dark:bg-[#061322] sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(47,134,246,0.13),transparent_30%),radial-gradient(circle_at_8%_78%,rgba(11,91,184,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_82%_18%,rgba(47,134,246,0.20),transparent_30%),radial-gradient(circle_at_8%_78%,rgba(124,196,255,0.08),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2f86f6]/30 to-transparent" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="text-left">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-[#f5f9ff] px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/7">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
                <span className="text-sm font-black text-[#0b5bb8] dark:text-[#7cc4ff]">
                  Regional Coverage
                </span>
              </div>

              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[#102033] dark:text-white sm:text-4xl lg:text-5xl">
                Saudi-Focused Service
              </h2>

              <p className="mt-5 text-pretty text-base leading-8 text-[#102033]/65 dark:text-white/65 sm:text-lg">
                We serve clients across the Arab region while accounting for differences in
                costs, local requirements, city conditions, and project types, with a special
                focus on GCC markets.
              </p>
            </div>

            <div className="mt-8 rounded-[32px] border border-[#102033]/5 bg-[#f6fbff] p-5 text-left shadow-[0_16px_55px_rgba(16,32,51,0.055)] dark:border-white/10 dark:bg-white/[0.055] sm:p-6">
              <h3 className="text-lg font-black text-[#102033] dark:text-white">
                Factors We Consider in Every Project:
              </h3>

              <div className="mt-5 flex flex-wrap justify-start gap-3">
                {factors.map((factor) => (
                  <span
                    key={factor}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white px-4 py-2.5 text-sm font-bold text-[#102033] shadow-[0_8px_22px_rgba(16,32,51,0.045)] dark:border-white/10 dark:bg-[#102033] dark:text-white"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e9f3ff] text-[#0b5bb8] dark:bg-[#2f86f6]/20 dark:text-[#7cc4ff]">
                      <CheckIcon />
                    </span>
                    {factor}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b5bb8] to-[#2f86f6] px-7 text-sm font-black text-white shadow-[0_16px_42px_rgba(11,91,184,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(11,91,184,0.34)] sm:text-base"
            >
              Consult Our Experts
              <ArrowIcon />
            </a>
          </div>

          <div>
            <div className="rounded-[40px] border border-[#102033]/5 bg-[#f6fbff] p-5 shadow-[0_28px_90px_rgba(16,32,51,0.09)] dark:border-white/10 dark:bg-white/[0.045] sm:p-6 lg:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#0b5bb8]/10 bg-white px-4 py-2 text-sm font-black text-[#0b5bb8] shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-[#7cc4ff]">
                    GCC Countries
                  </span>

                  <p className="mt-3 text-sm font-bold leading-7 text-[#102033]/55 dark:text-white/55">
                    We provide design and construction services across the GCC while respecting
                    the local requirements of each country.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-[#0b5bb8] px-4 py-2 text-xs font-black text-white shadow-[0_12px_30px_rgba(11,91,184,0.25)]">
                  GCC
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {gccCountries.map((country, index) => (
                  <article
                    key={country.name}
                    className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-5 text-left shadow-[0_16px_45px_rgba(16,32,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,32,51,0.13)] dark:border-white/10 dark:bg-[#102033]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b5bb8] to-[#2f86f6]" />

                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="grid h-17 w-17 place-items-center rounded-3xl bg-[#f5f9ff] shadow-sm ring-1 ring-[#0b5bb8]/5 transition duration-300 group-hover:scale-105 dark:bg-white/10 dark:ring-white/10">
                          <FlagIcon code={country.code} />
                        </div>

                        <div>
                          <h3 className="text-xl font-black text-[#102033] dark:text-white">
                            {country.name}
                          </h3>

                          <p className="mt-1 text-xs font-black text-[#0b5bb8] dark:text-[#7cc4ff]">
                            {country.type}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-[#edf6ff] px-3 py-1.5 text-xs font-black text-[#2f86f6] dark:bg-white/10 dark:text-[#7cc4ff]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-sm font-bold leading-7 text-[#102033]/55 dark:text-white/55">
                      {country.desc}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 rounded-[28px] border border-[#0b5bb8]/10 bg-white p-5 text-left shadow-[0_14px_40px_rgba(16,32,51,0.055)] dark:border-white/10 dark:bg-[#102033]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#102033] dark:text-white">
                      Wider Coverage Across the Arab Region
                    </h3>
                    <p className="mt-2 text-sm font-bold leading-7 text-[#102033]/55 dark:text-white/55">
                      Beyond the GCC, we accept design and consultation requests
                      from Arab countries based on the project scope.
                    </p>
                  </div>

                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-[#0b5bb8] to-[#2f86f6] text-xl font-black text-white shadow-[0_16px_40px_rgba(11,91,184,0.26)]">
                    +22
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
