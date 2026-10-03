import {
  MessageQuestion,
  ClipboardTick,
  Calculator,
  Profile2User,
  TickCircle,
  Whatsapp,
} from "iconsax-react";

const WHATSAPP_URL =
  "https://wa.me/966598061334?text=مرحبا%20موسوق،%20أريد%20البدء%20في%20مشروعي";

const steps = [
  {
    number: "01",
    title: "أرسل بيانات المشروع",
    description:
      "تواصل معنا وأرسل تفاصيل مشروعك: المساحة، الموقع، نوع المبنى، ومتطلباتك الخاصة",
    icon: MessageQuestion,
  },
  {
    number: "02",
    title: "نراجع احتياجك ونحدد نوع الخدمة",
    description:
      "فريقنا يدرس طلبك ويحدد الخدمات المناسبة لمشروعك بناءً على احتياجاتك وميزانيتك",
    icon: ClipboardTick,
  },
  {
    number: "03",
    title: "تحصل على تصور أولي للتكلفة والخطوات",
    description: "نقدم لك تقدير أولي للتكلفة وخطة عمل واضحة لتنفيذ مشروعك",
    icon: Calculator,
  },
  {
    number: "04",
    title: "نربطك بالخدمة المناسبة",
    description: "نوصلك مباشرة بمزودي الخدمات المعتمدين والمناسبين لمشروعك",
    icon: Profile2User,
  },
  {
    number: "05",
    title: "تبدأ التنفيذ أو التصميم بثقة أكبر",
    description: "ابدأ مشروعك بخطوات واضحة ومعلومات كافية وفريق محترف يدعمك",
    icon: TickCircle,
  },
];

export default function ProcessSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#071a33] dark:bg-[color:var(--surface-2)] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(47,134,246,0.28),transparent_32%),radial-gradient(circle_at_14%_88%,rgba(11,91,184,0.34),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:34px_34px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2f86f6] shadow-[0_0_0_5px_rgba(47,134,246,0.20)]" />
            <span className="text-sm font-black text-white">خطوات واضحة</span>
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            كيف تبدأ مشروعك مع موسوق؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-white/68 sm:text-lg">
            خمس خطوات بسيطة تفصلك عن بدء مشروعك بثقة ووضوح
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-0 left-0 top-[52px] hidden h-px bg-gradient-to-l from-transparent via-white/20 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.08] p-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.13]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#2f86f6] via-[#7cc4ff] to-white opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative mx-auto mb-5 grid h-[72px] w-[72px] place-items-center rounded-3xl bg-gradient-to-br from-white to-[#dcecff] text-[#0b5bb8] shadow-[0_18px_45px_rgba(47,134,246,0.25)] transition duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <Icon size="34" color="currentColor" variant="Bulk" />

                    <span className="absolute -left-2 -top-2 grid h-9 w-9 place-items-center rounded-full bg-[#2f86f6] text-xs font-black text-white shadow-[0_10px_26px_rgba(47,134,246,0.38)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black leading-7 text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {step.description}
                  </p>

                  <div className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-[#2f86f6]/20 blur-2xl transition duration-300 group-hover:bg-[#2f86f6]/35" />
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25d366] px-8 text-base font-black text-white shadow-[0_18px_50px_rgba(37,211,102,0.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,211,102,0.42)]"
          >
            <Whatsapp size="22" color="currentColor" variant="Bold" />
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
