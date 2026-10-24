export const metadata = {
  title: "عن الشركة | مَوْسوق",
  description:
    "مَوْسوق هي منصة عربية للعمل الحر الهندسي تربط أصحاب المشاريع بأفضل المهندسين المحترفين لتنفيذ المشاريع باحترافية وضمان حقوق الطرفين.",
  alternates: {
    canonical: `https://mawsouq.com/${encodeURIComponent("عن-الشركة")}/`,
  },
};

const steps = [
  {
    number: "01",
    title: "أحمد يحتاج خدمة هندسية",
    text: "يحتاج أحمد إلى خدمة التصميم الهندسي المتكامل لمشروعه ويريد جهة موثوقة تساعده على التنفيذ.",
  },
  {
    number: "02",
    title: "إضافة تفاصيل الطلب",
    text: "يدخل أحمد إلى منصة مَوْسوق ويضيف تفاصيل المشروع والخدمة المطلوبة بسهولة.",
  },
  {
    number: "03",
    title: "التواصل مع أفضل المهندسين",
    text: "يتم التواصل مع أحمد من قبل أفضل المهندسين بالموقع بناءً على الخبرة وآراء العملاء.",
  },
  {
    number: "04",
    title: "ضمان حق الطرفين",
    text: "يطمئن أحمد لأن مَوْسوق تعمل كوسيط بينه وبين المهندس حتى يتم تسليم العمل كاملًا.",
  },
];

const values = [
  {
    title: "رضاكم مطلبنا",
    text: "نحرص جدًا في مَوْسوق على رضا العميل، ونرى أنه عنصر أساسي لنجاحنا. ندرك أن هذا الرضا هو ردة الفعل الطبيعية التي يعبّر بها العميل عنا أثناء وبعد تنفيذ المشروع، لذلك نهتم بقياس رضا العملاء ومصارحة أنفسنا بأي نقاط قد تؤثر على تجربتهم.",
  },
  {
    title: "نفوق توقعاتكم",
    text: "نقرأ توقعات العميل بعناية، ونسجل ما يأمل أن يحصل عليه خلال المشروع، ثم نضع هذه التوقعات أمام فريق التنفيذ. نحرص دائمًا على تجاوز هذه التوقعات لأننا نعتبر ذلك المكسب الحقيقي قبل أي مكاسب مادية.",
  },
  {
    title: "إحترافية وتخصص",
    text: "في مَوْسوق نستقطب الموهوبين، ونعتمد على المحترفين، ونحترم التخصص. لكل مشروع فريقه المناسب وفق المهارات والخبرات المطلوبة، وليس بشكل عشوائي أو اعتباطي.",
  },
];

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="overflow-hidden bg-[var(--page)] text-[var(--ink)]"
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[var(--hairline)] bg-[var(--hero-bg)] pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(47,134,246,0.20),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(11,91,184,0.14),transparent_34%)]" />

        <div className="mx-auto grid min-h-[72vh] w-[min(100%-32px,1240px)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--hairline-strong)] bg-[var(--surface)] px-5 py-2.5 text-sm font-black text-[var(--brand)] shadow-[var(--card-shadow)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-bright)] shadow-[0_0_0_6px_rgba(47,134,246,0.14)]" />
              منصة هندسية موثوقة للعمل الحر
            </div>

            <h1 className="max-w-4xl text-[clamp(42px,6vw,86px)] font-black leading-[1.05] tracking-[-0.05em]">
              عن شركة
              <span className="mt-2 block bg-gradient-to-l from-[var(--brand)] via-[var(--brand-bright)] to-[#58b3ff] bg-clip-text text-transparent">
                مَوْسوق
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-medium leading-9 text-[var(--ink-muted)] md:text-xl">
              مَوْسوق هي أفضل منصة للعمل الحر في الوطن العربي، تعمل على وصل
              الشركات وأصحاب المشاريع بأفضل المهندسين المحترفين لمساعدتهم على
              تنفيذ أفكارهم ومشاريعهم باحترافية ووضوح.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[var(--brand)] px-7 text-sm font-black text-white shadow-[0_18px_42px_rgba(11,91,184,0.28)] transition hover:-translate-y-1 hover:bg-[var(--brand-bright)]"
              >
                أضف مشروعك الآن
              </a>

              <a
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[var(--hairline-strong)] bg-[var(--surface)] px-7 text-sm font-black text-[var(--ink)] shadow-[var(--card-shadow)] transition hover:-translate-y-1"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] border border-[var(--hairline)] bg-[var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <div className="rounded-[28px] bg-[var(--surface-2)] p-7">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-[var(--brand)]">
                      كيف نعمل؟
                    </p>
                    <h2 className="mt-2 text-2xl font-black">
                      وسيط موثوق بين العميل والمهندس
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)] text-2xl font-black text-white">
                    ✓
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "إضافة المشروع مجانًا",
                    "استلام العرض الفني والمالي",
                    "اختيار المهندس الأنسب",
                    "متابعة التسليم وضمان الحقوق",
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

            <div className="absolute -bottom-6 -right-4 hidden rounded-3xl border border-[var(--hairline)] bg-[var(--surface)] px-6 py-5 shadow-[var(--card-shadow)] md:block">
              <strong className="block text-3xl font-black text-[var(--brand)]">
                100%
              </strong>
              <span className="text-sm font-bold text-[var(--ink-muted)]">
                تركيز على ضمان حق الطرفين
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[var(--page)] py-20 md:py-28">
        <div className="mx-auto grid w-[min(100%-32px,1180px)] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
              من نحن
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              منصة تجمع بين الثقة، الخبرة، وسهولة التنفيذ
            </h2>
          </div>

          <div className="space-y-6 text-lg font-medium leading-9 text-[var(--ink-muted)]">
            <p>
              يعمل مَوْسوق على وصل الشركات وأصحاب المشاريع بأفضل المهندسين
              المحترفين لمساعدتهم على تنفيذ أفكارهم ومشاريعهم، وفي الوقت نفسه
              يتيح للمهندسين مكانًا لإيجاد مشاريع يعملون عليها وزيادة مصادر
              دخلهم.
            </p>

            <p>
              تستطيع من خلال مَوْسوق إضافة مشروعك الذي ترغب بتنفيذه مجانًا لتحصل
              على العرض الفني والمالي من أفضل المهندسين وأنسب مزوّدي الخدمات
              طبقًا لاحتياجاتك.
            </p>

            <p>
              تضمن لك منصة مَوْسوق حقوقك كصاحب مشروع أو مهندس حر، حيث يعمل
              مَوْسوق كوسيط بين الطرفين إلى أن يتم تسليم العمل كاملًا.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="mx-auto w-[min(100%-32px,1180px)]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
              طريقة العمل
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              كيف تعمل منصّة مَوْسوق؟
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[var(--ink-muted)]">
              رحلة بسيطة وواضحة من لحظة إضافة الطلب حتى استلام المشروع.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group rounded-[28px] border border-[var(--hairline)] bg-[var(--surface)] p-7 shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="text-5xl font-black tracking-[-0.08em] text-[var(--brand)] opacity-25 transition group-hover:opacity-100">
                    {step.number}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[var(--brand-bright)]" />
                </div>

                <h3 className="mb-3 text-2xl font-black">{step.title}</h3>
                <p className="text-base font-medium leading-8 text-[var(--ink-muted)]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[var(--page)] py-20 md:py-28">
        <div className="mx-auto w-[min(100%-32px,1180px)]">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
              آراء العملاء
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              رضاؤكم هو معيار نجاحنا
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[var(--ink-muted)]">
              نؤمن أن الاحتراف الحقيقي يظهر في وضوح التواصل، جودة التنفيذ،
              واحترام توقعات العميل من بداية المشروع حتى نهايته.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[30px] border border-[var(--hairline)] bg-[var(--surface)] p-7 shadow-[var(--card-shadow)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-3)] text-2xl font-black text-[var(--brand)]">
                  ✦
                </div>

                <h3 className="mb-4 text-2xl font-black">{value.title}</h3>
                <p className="text-base font-medium leading-8 text-[var(--ink-muted)]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--surface-2)] px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-[36px] border border-[var(--hairline)] bg-[var(--surface)] p-8 text-center shadow-[var(--card-shadow)] md:p-12">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[var(--brand)]">
            ابدأ الآن
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            لديك مشروع هندسي وتبحث عن مهندس موثوق؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-[var(--ink-muted)]">
            أضف طلبك الآن واحصل على عروض مناسبة من مهندسين محترفين مع ضمان حقوق
            الطرفين حتى تسليم العمل.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex h-13 items-center justify-center rounded-full bg-[var(--brand)] px-8 text-sm font-black text-white shadow-[0_18px_42px_rgba(11,91,184,0.28)] transition hover:-translate-y-1 hover:bg-[var(--brand-bright)]"
            >
              أضف مشروعك مجانًا
            </a>

            <a
              href="/contact"
              className="inline-flex h-13 items-center justify-center rounded-full border border-[var(--hairline-strong)] bg-[var(--surface-2)] px-8 text-sm font-black text-[var(--ink)] transition hover:-translate-y-1"
            >
              تواصل مع مَوْسوق
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
