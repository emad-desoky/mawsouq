import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/201223328270?text=مرحبا%20موسوق،%20أريد%20استشارة%20عن%20خدمات%20التصميم%20والبناء";

const features = [
  "تصميم معماري",
  "حاسبة تكلفة",
  "خدمات داخل السعودية والوطن العربى",
  "استشارة مباشرة",
];

const stats = [
  { value: "+500", label: "مشروع منجز" },
  { value: "24/7", label: "تواصل سريع" },
  { value: "GCC", label: "داخل السعودية والوطن العربى" },
];

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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

export default function HeroSection() {
  return (
    <section dir="rtl" className="hero-section lg:pt-22 pt-30">
      <div className="hero-bg" />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            ابدأ مشروعك بثقة
            <strong>من التصميم إلى التنفيذ</strong>
          </h1>

          <p className="hero-description">
            حلول تصميم وبناء داخل الوطن العربى تجمع بين التخطيط المعماري، حساب
            التكلفة، واختيار مزودي الخدمات المناسبين لمشروعك السكني أو التجاري.
          </p>

          <div className="hero-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-whatsapp"
            >
              <WhatsAppIcon />
              ابدأ استشارة واتساب
            </a>

            <Link href="#cost-calculator" className="hero-btn hero-btn-primary">
              احسب تكلفة مشروعك
              <ArrowIcon />
            </Link>
          </div>

          <div className="hero-features">
            {features.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>

          <div className="hero-stats">
            {stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <Image
              src="/images/hero-architecture.png"
              alt="تصميم معماري حديث داخل السعودية"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
