const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20التصميم%20والبناء%20في%20السعودية";

function WhatsAppIcon() {
  return (
    <svg
      className="h-5.5 w-5.5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5.5 w-5.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 4.75h2.2a1.5 1.5 0 0 1 1.43 1.05l.9 2.85a1.5 1.5 0 0 1-.53 1.63l-1.35 1.02a10.4 10.4 0 0 0 4.45 4.45l1.02-1.35a1.5 1.5 0 0 1 1.63-.53l2.85.9a1.5 1.5 0 0 1 1.05 1.43v2.2a2.1 2.1 0 0 1-2.3 2.09C10.2 19.75 4.25 13.8 3.51 6.05A2.1 2.1 0 0 1 5.6 3.75h1Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5 rotate-180"
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

export default function CTASection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[var(--page)] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_86%_18%,rgba(47,134,246,0.10),transparent_30%),radial-gradient(circle_at_10%_84%,rgba(11,91,184,0.08),transparent_32%)]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071a33] via-[#0b5bb8] to-[#2f86f6] px-5 py-12 text-center shadow-[0_32px_110px_rgba(11,91,184,0.28)] sm:px-8 sm:py-16 lg:rounded-[44px] lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.26),transparent_32%),radial-gradient(circle_at_84%_86%,rgba(255,255,255,0.12),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.85)_1px,transparent_0)] [background-size:34px_34px]" />

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.16)]" />
              <span className="text-sm font-black text-white">ابدأ الآن</span>
            </div>

            <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-6xl">
              هل تخطط لمشروع بناء في الوطن العربى
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-white/76 sm:text-lg lg:text-xl">
              ابدأ بخطوة واضحة. أرسل لنا بيانات مشروعك وسنساعدك في فهم الخدمات
              المناسبة والتكلفة المتوقعة والخطوات التالية.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-black text-white shadow-[0_18px_52px_rgba(37,211,102,0.34)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(37,211,102,0.46)] sm:w-auto"
              >
                <WhatsAppIcon />
                تواصل واتساب الآن
                <ArrowIcon />
              </a>

              <a
                href="tel:+201223328270"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-8 text-base font-black text-[var(--brand)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-2)] sm:w-auto"
              >
                <PhoneIcon />
                اتصل بنا
              </a>
            </div>

            <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {["استشارة مباشرة", "تقدير أوضح للتكلفة", "خطوات منظمة"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-sm font-bold text-white/86 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
