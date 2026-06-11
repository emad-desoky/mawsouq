"use client";

import { useRef, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20الاستفسار%20عن%20خدمة%20";

const services = [
  {
    title: "التصميم المعماري",
    description:
      "تنفيذ جميع التصميمات والمخططات الهندسية المعمارية للمشروع بأحدث الأساليب العالمية",
    image: "/services/arch-des.webp",
  },
  {
    title: "التصميم الإنشائي",
    description:
      "تنفيذ جميع التصميمات والمخططات الهندسية الإنشائية للمشروع طبقاً للكود السعودي",
    image: "/services/Building.webp",
  },
  {
    title: "التصميم الداخلي",
    description:
      "تنفيذ جميع التصميمات الداخلية للمبنى بأحدث الأفكار العالمية في هذا المجال",
    image: "/services/int-design.webp",
  },
  {
    title: "حاسبة تكلفة البناء",
    description:
      "حساب تكلفة البناء بدقة طبقاً لأسعار السوق السعودي المحدثة باستمرار",
    image: "/services/IMG-20201028-WA0006-copy.webp",
  },
  {
    title: "دراسة الجدوى والتكاليف",
    description:
      "تنفيذ أعمال دراسات الجدوى وحساب التكاليف للمشروع طبقاً لأسعار السوق",
    image: "",
  },
  {
    title: "شبكات الكهرباء والإضاءة",
    description:
      "تنفيذ أعمال تصميم شبكات الكهرباء والإضاءة للمبنى طبقاً للكود السعودي",
    image: "/services/electrical.webp",
  },
  {
    title: "شبكات الصرف الصحي",
    description:
      "تنفيذ أعمال تصميم شبكات الصرف الصحي للمبنى طبقاً للكود السعودي",
    image: "/services/PLUMBING.webp",
  },
  {
    title: "أنظمة التكييف والتدفئة",
    description: "تنفيذ أعمال التكييف والتبريد والتدفئة طبقاً للكود السعودي",
    image: "/services/Ac-Repair.webp",
  },
  {
    title: "الإطفاء والحماية المدنية",
    description:
      "تنفيذ أعمال تصميم شبكات الإطفاء ومكافحة الحريق طبقاً للكود السعودي",
    image: "/services/fire.webp",
  },
  {
    title: "حفر الأساسات وتجهيز الموقع",
    description:
      "تنفيذ جميع أعمال الحفر والرفع المساحي في الموقع طبقاً لعمل التأسيس المطلوب",
    image: "/services/hadern.webp",
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
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [isDragging, setIsDragging] = useState(false);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const amount = Math.min(slider.clientWidth * 0.9, 560);

    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    if (!sliderRef.current) return;

    dragState.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: sliderRef.current.scrollLeft,
      moved: false,
    };

    setIsDragging(true);
    sliderRef.current.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDown || !sliderRef.current) return;

    const x = event.clientX;
    const walk = x - dragState.current.startX;

    if (Math.abs(walk) > 4) {
      dragState.current.moved = true;
    }

    sliderRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const stopDragging = () => {
    dragState.current.isDown = false;

    setTimeout(() => {
      setIsDragging(false);
      dragState.current.moved = false;
    }, 80);
  };

  const preventClickWhenDragging = (event) => {
    if (dragState.current.moved || isDragging) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <section
      id="architectural-design"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[color:var(--surface-2)] py-16 text-[color:var(--ink)] sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.16),transparent_32%),radial-gradient(circle_at_14%_88%,rgba(11,91,184,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.20),transparent_32%),radial-gradient(circle_at_14%_88%,rgba(90,166,255,0.08),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.24] dark:opacity-[0.12] [background-image:linear-gradient(rgba(16,32,51,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,51,0.07)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-right">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)]/80 px-4 py-2 shadow-[var(--card-shadow)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-bright)] shadow-[0_0_0_6px_rgba(47,134,246,0.14)]" />
              <span className="text-sm font-black text-[color:var(--brand)]">
                خدماتنا المتكاملة
              </span>
            </div>

            <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl lg:text-5xl">
              خدمات موسوق في التصميم والبناء
            </h2>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-[color:var(--ink-muted)] sm:text-lg">
              استكشف خدمات التصميم والبناء من خلال بطاقات تفاعلية بالصور، واضحة
              وسريعة ومناسبة لكل الأجهزة.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:pb-2">
            <div className="rounded-3xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-5 py-3 shadow-[var(--card-shadow)]">
              <p className="text-xs font-black text-[color:var(--ink-faint)]">
                عدد الخدمات
              </p>
              <p className="text-2xl font-black leading-none text-[color:var(--ink)]">
                {services.length}
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollSlider("prev")}
              aria-label="الخدمة السابقة"
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] text-[color:var(--brand)] shadow-[var(--card-shadow)] transition hover:-translate-y-1 hover:bg-[color:var(--brand)] hover:text-white"
            >
              <ArrowIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("next")}
              aria-label="الخدمة التالية"
              className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--brand)] text-white shadow-[0_16px_38px_rgba(11,91,184,0.26)] transition hover:-translate-y-1 hover:bg-[color:var(--brand-bright)]"
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-6 right-0 top-0 z-10 hidden w-12 bg-gradient-to-l from-[color:var(--surface-2)] to-transparent sm:block" />
          <div className="pointer-events-none absolute bottom-6 left-0 top-0 z-10 hidden w-12 bg-gradient-to-r from-[color:var(--surface-2)] to-transparent sm:block" />

          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onPointerLeave={stopDragging}
            className={`services-slider flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 sm:gap-5 lg:gap-6 ${
              isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
            }`}
          >
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group relative flex min-h-[440px] shrink-0 snap-center overflow-hidden rounded-[30px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition duration-500 hover:-translate-y-2 dark:shadow-[0_18px_55px_rgba(0,0,0,0.35)] ${
                  index === 0
                    ? "w-[86vw] sm:w-[560px] lg:w-[620px]"
                    : "w-[82vw] sm:w-[390px] lg:w-[420px]"
                }`}
              >
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    draggable="false"
                    loading={index < 2 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full select-none object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,var(--surface),var(--surface-3),var(--surface-2))]">
                    <div className="mx-5 rounded-[28px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)]/90 p-6 text-center shadow-[var(--card-shadow)] backdrop-blur-xl">
                      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-[color:var(--surface-3)] text-3xl font-black text-[color:var(--brand)]">
                        +
                      </div>
                      <p className="text-sm font-black text-[color:var(--ink-muted)]">
                        سيتم إضافة الصورة قريباً
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/95 via-[#071321]/58 to-[#071321]/10" />
                <div className="absolute inset-0 bg-gradient-to-l from-[color:var(--brand)]/32 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex min-h-[440px] w-full select-none flex-col justify-between p-5 sm:p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-black text-white shadow-[0_12px_32px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="rounded-full border border-white/20 bg-[color:var(--brand)]/90 px-4 py-2 text-xs font-black text-white shadow-[0_14px_35px_rgba(11,91,184,0.26)] backdrop-blur-xl">
                      متاح الآن
                    </span>
                  </div>

                  <div>
                    <div className="mb-4 h-1.5 w-20 rounded-full bg-gradient-to-l from-[color:var(--brand)] via-[color:var(--brand-bright)] to-white transition-all duration-500 group-hover:w-32" />

                    <h3 className="max-w-[520px] text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-sm leading-7 text-white/74 sm:text-[15px]">
                      {service.description}
                    </p>

                    <a
                      href={`${WHATSAPP_URL}${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={preventClickWhenDragging}
                      className="mt-6 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-[color:var(--brand)] px-5 py-3 text-center text-sm font-black leading-5 text-white shadow-[0_18px_42px_rgba(11,91,184,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--brand-bright)] sm:px-6"
                    >
                      <span>اطلب الخدمة</span>
                      <ArrowIcon className="h-4 w-4 rotate-180 transition duration-300 group-hover:-translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-1 flex items-center justify-center gap-3 text-center text-[color:var(--ink-faint)]">
            <span className="hidden h-px w-10 bg-[color:var(--hairline-strong)] sm:block" />
            <span className="text-xs font-black">
              اضغط واسحب يمين أو يسار لاستكشاف الخدمات
            </span>
            <span className="hidden h-px w-10 bg-[color:var(--hairline-strong)] sm:block" />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] sm:p-7 lg:mt-12 lg:p-8">
          <div className="flex flex-col items-stretch justify-between gap-5 text-center lg:flex-row lg:items-center lg:text-right">
            <div className="min-w-0">
              <h3 className="text-balance text-2xl font-black leading-tight text-[color:var(--ink)] sm:text-3xl">
                تحتاج خدمة محددة لمشروعك؟
              </h3>
              <p className="mt-2 text-sm leading-7 text-[color:var(--ink-muted)] sm:text-base">
                تواصل معنا وسنساعدك في اختيار الخدمة المناسبة حسب مرحلة مشروعك.
              </p>
            </div>

            <a
              href="https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20التصميم%20والبناء"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 py-4 text-center text-sm font-black leading-5 text-white shadow-[0_18px_45px_rgba(11,91,184,0.28)] transition hover:-translate-y-1 hover:bg-[color:var(--brand-bright)] sm:text-base lg:w-auto lg:px-8"
            >
              ابدأ استشارة الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
