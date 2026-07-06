export const metadata = {
  title: "استشارة تصميم وبناء في السعودية | موسوق",
  description:
    "اطلب استشارة مجانية من موسوق لخدمات التصميم المعماري، التصميم الإنشائي، التصميم الداخلي، حساب تكلفة البناء، وتنفيذ مشاريع الفلل والاستراحات في السعودية.",
  alternates: {
    canonical:
      "https://mawsouq.com/%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D8%A8%D9%86%D8%A7%D8%A1/",
  },
};

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%85%D9%88%D8%B3%D9%88%D9%82%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A3%D9%88%20%D8%A8%D9%86%D8%A7%D8%A1";

const services = [
  "التصميم المعماري",
  "التصميم الإنشائي",
  "التصميم الداخلي",
  "حساب تكلفة البناء",
  "تصميم الفلل والاستراحات",
  "خدمات التنفيذ والمقاولات",
];

export default function LeadGenerationPage() {
  return (
    <main
      dir="rtl"
      className="overflow-hidden bg-[var(--page)] text-[var(--ink)]"
    >
      <section className="relative isolate overflow-hidden border-b border-[var(--hairline)] bg-[var(--hero-bg)] pt-[calc(var(--nav-height)+60px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(47,134,246,0.20),transparent_32%),radial-gradient(circle_at_86%_72%,rgba(11,91,184,0.16),transparent_34%)]" />

        <div className="mx-auto grid min-h-[78vh] w-[min(100%-32px,1240px)] items-center gap-12 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--hairline-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-black text-[var(--brand)] shadow-[var(--card-shadow)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-bright)] shadow-[0_0_0_6px_rgba(47,134,246,0.14)]" />
              استشارة مجانية لمشروعك
            </div>

            <h1 className="max-w-5xl text-[clamp(40px,6vw,84px)] font-black leading-[1.05] tracking-[-0.055em]">
              هل تبحث عن خدمة
              <span className="mt-2 block bg-gradient-to-l from-[var(--brand)] via-[var(--brand-bright)] to-[#58b3ff] bg-clip-text text-transparent">
                تصميم أو بناء؟
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-bold leading-9 text-[var(--ink-muted)] md:text-xl">
              مَوْسوق يساعدك في فهم احتياج مشروعك، اختيار الخدمة المناسبة،
              وتقدير الخطوة التالية سواء كنت تبحث عن تصميم معماري، تصميم إنشائي،
              تصميم داخلي، أو حساب تكلفة البناء.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--brand)] px-8 text-sm font-black text-white shadow-[0_18px_42px_rgba(11,91,184,0.28)] transition hover:-translate-y-1 hover:bg-[var(--brand-bright)]"
              >
                تواصل عبر واتساب
              </a>

              <a
                href="/"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--hairline-strong)] bg-[var(--surface)] px-8 text-sm font-black text-[var(--ink)] shadow-[var(--card-shadow)] transition hover:-translate-y-1"
              >
                العودة للرئيسية
              </a>
            </div>
          </div>

          <div className="rounded-[38px] border border-[var(--hairline)] bg-[var(--surface)] p-5 shadow-[var(--card-shadow)]">
            <div className="rounded-[30px] bg-[var(--surface-2)] p-7">
              <p className="text-sm font-black text-[var(--brand)]">
                ماذا يحدث بعد التواصل؟
              </p>

              <h2 className="mt-2 text-2xl font-black">
                نحدد الخدمة الأنسب لمشروعك
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "تشرح لنا نوع المشروع والمساحة",
                  "نحدد هل تحتاج تصميم أو تنفيذ أو تكلفة",
                  "نقترح عليك الخطوة التالية بوضوح",
                  "نساعدك في الوصول للحل المناسب",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-3)] text-sm font-black text-[var(--brand)]">
                      ✓
                    </span>
                    <p className="font-extrabold text-[var(--ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page)] py-20 md:py-28">
        <div className="mx-auto w-[min(100%-32px,1240px)]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
              خدمات موسوق
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              خدمات يمكننا مساعدتك بها
            </h2>

            <p className="mt-5 text-lg font-bold leading-8 text-[var(--ink-muted)]">
              هذه الصفحة تستقبل الزوار القادمين من روابط قديمة غير منقولة بدل
              ظهور صفحة 404.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service}
                className="rounded-[30px] border border-[var(--hairline)] bg-[var(--surface)] p-7 shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)]/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-3)] text-lg font-black text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-black">{service}</h3>

                <p className="mt-3 text-base font-bold leading-8 text-[var(--ink-muted)]">
                  تواصل معنا وسنساعدك في تحديد أفضل خطوة مناسبة حسب مشروعك
                  وميزانيتك ومرحلة التنفيذ.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[var(--hairline)] bg-[var(--surface)] p-8 text-center shadow-[var(--card-shadow)] md:p-12">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
            ابدأ الآن
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            أرسل تفاصيل مشروعك واحصل على توجيه مناسب
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-[var(--ink-muted)]">
            سواء كنت تبحث عن تصميم، تكلفة بناء، ديكور، تنفيذ، أو خدمة هندسية
            مرتبطة بمشروعك، تواصل معنا وسنساعدك في تحديد الخطوة التالية.
          </p>

          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--brand)] px-9 text-sm font-black text-white shadow-[0_18px_42px_rgba(11,91,184,0.28)] transition hover:-translate-y-1 hover:bg-[var(--brand-bright)]"
            >
              تواصل عبر واتساب الآن
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
