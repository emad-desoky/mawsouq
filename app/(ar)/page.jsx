import WhyMawsouqSection from "@/components/sections/WhyMawsouqSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SaudiCitiesSection from "@/components/sections/SaudiCitiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CostCalculatorSection from "@/components/sections/CostCalculatorSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsShowcaseSection from "@/components/sections/ProjectsShowcaseSection";

export const metadata = {
  alternates: {
    canonical: "https://mawsouq.com/",
  },
};

export default function SaudiArabicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://mawsouq.com/",
        url: "https://mawsouq.com/",
        name: "خدمات التصميم والبناء في السعودية | موسوق",
        description:
          "موسوق تساعدك في التصميم المعماري والإنشائي وحساب تكلفة البناء واختيار مزودي الخدمات في السعودية",
        inLanguage: "ar-SA",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mawsouq.com/#website",
          url: "https://mawsouq.com",
          name: "موسوق",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://mawsouq.com/#organization",
        name: "موسوق",
        url: "https://mawsouq.com",
        logo: "https://mawsouq.com/mawsouq-logo.png",
        email: "info@mawsouq.com",
        telephone: "+201223328270",
        address: [
          {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressLocality: "الرياض",
            addressRegion: "حي النسيم",
            streetAddress: "تقاطع شارع الحمراء مع شارع الثلاثين",
          },
          {
            "@type": "PostalAddress",
            addressCountry: "EG",
            addressLocality: "القاهرة",
            addressRegion: "مدينة نصر",
            streetAddress: "501 - أبراج دلتا ستار - طريق النصر",
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
        },
      },
      {
        "@type": "Service",
        "@id": "https://mawsouq.com/#service",
        name: "خدمات التصميم والبناء",
        provider: {
          "@id": "https://mawsouq.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "Saudi Arabia",
        },
        serviceType: [
          "التصميم المعماري",
          "التصميم الإنشائي",
          "التصميم الداخلي",
          "حاسبة تكلفة البناء",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mawsouq.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://mawsouq.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "خدمات السعودية",
            item: "https://mawsouq.com/",
          },
        ],
      },

    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <WhyMawsouqSection />
      <ServicesSection />
      <ProjectsShowcaseSection />
      <SaudiCitiesSection />
      <ProcessSection />
      <CostCalculatorSection />
      <ComparisonSection />
      <ArticlesSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
