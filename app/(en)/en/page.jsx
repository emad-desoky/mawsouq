import HeroSection from "@/components/en/sections/HeroSection";
import WhyMawsouqSection from "@/components/en/sections/WhyMawsouqSection";
import ServicesSection from "@/components/en/sections/ServicesSection";
import SaudiCitiesSection from "@/components/en/sections/SaudiCitiesSection";
import ProcessSection from "@/components/en/sections/ProcessSection";
import CostCalculatorSection from "@/components/en/sections/CostCalculatorSection";
import ComparisonSection from "@/components/en/sections/ComparisonSection";
import ArticlesSection from "@/components/en/sections/ArticlesSection";
import AboutSection from "@/components/en/sections/AboutSection";
import CTASection from "@/components/en/sections/CTASection";
import FAQSection from "@/components/en/sections/FAQSection";

const pageUrl = "https://mawsouq.com/en/";

export const metadata = {
  title: {
    absolute: "Design and Construction Services in Saudi Arabia | Mawsooq",
  },
  description:
    "Plan your Saudi construction project with architectural and structural design, an interactive cost calculator, feasibility support, and access to suitable service providers.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "ar-SA": "https://mawsouq.com/",
      en: pageUrl,
      "x-default": "https://mawsouq.com/",
    },
  },
  openGraph: {
    title: "Design and Construction Services in Saudi Arabia | Mawsooq",
    description:
      "Architectural design, structural engineering, construction cost planning, and project support for Saudi Arabia and the wider Arab region.",
    url: pageUrl,
    siteName: "Mawsooq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mawsouq.com/images/hero-architecture.png",
        width: 1536,
        height: 1024,
        alt: "Modern architectural design and construction planning in Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design and Construction Services in Saudi Arabia | Mawsooq",
    description:
      "Plan, estimate, and organize your construction project with Mawsooq.",
    images: ["https://mawsouq.com/images/hero-architecture.png"],
  },
};

export default function EnglishHomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Design and Construction Services in Saudi Arabia | Mawsooq",
        description:
          "Architectural design, structural engineering, construction cost estimation, feasibility support, and service-provider matching for projects in Saudi Arabia.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mawsouq.com/#website",
          url: "https://mawsouq.com/",
          name: "Mawsooq",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://mawsouq.com/#organization",
        name: "Mawsooq",
        url: "https://mawsouq.com/",
        logo: "https://mawsouq.com/mawsouq-logo.png",
        email: "info@mawsouq.com",
        telephone: "+201223328270",
        areaServed: [
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "AdministrativeArea", name: "Gulf Cooperation Council" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Design and Construction Services",
        provider: { "@id": "https://mawsouq.com/#organization" },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
        serviceType: [
          "Architectural Design",
          "Structural Design",
          "Interior Design",
          "Construction Cost Estimation",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq-schema`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What services does Mawsooq provide in Saudi Arabia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mawsooq provides architectural, structural, and interior design, construction cost estimation, feasibility support, and access to suitable service providers for projects in Saudi Arabia.",
            },
          },
          {
            "@type": "Question",
            name: "Can Mawsooq estimate my construction budget?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Mawsooq construction cost calculator estimates costs using project area, building type, finish level, and editable Saudi market price assumptions.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a consultation through WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can send your project details through WhatsApp and the team will help identify the relevant services, approximate budget, and next steps.",
            },
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
