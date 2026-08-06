import ResthouseClusterLayout from "@/components/ar/resthouse/ResthouseClusterLayout";
import {
  SITE_URL,
  getResthouseCluster,
  pillar,
} from "@/app/_arabic-pages/_resthouse-cluster/resthouse-data";

const SLUG = 'تصميم-استراحة-مودرن';
const article = getResthouseCluster(SLUG);
const canonical = `${SITE_URL}/${article.slug}/`;

export const metadata = {
  title: article.metaTitle,
  description: article.description,
  keywords: [
    article.primaryKeyword,
    "تصاميم استراحات",
    "تصميم استراحة في السعودية",
    article.category,
  ],
  alternates: {
    canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    title: article.metaTitle,
    description: article.description,
    url: canonical,
    siteName: "موسوق",
    locale: "ar_SA",
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
    images: [
      {
        url: article.image,
        width: 1200,
        height: 630,
        alt: article.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: article.metaTitle,
    description: article.description,
    images: [article.image],
  },
};

export default function ResthouseClusterPage() {
  const breadcrumb = [
    {
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "المدونات",
      item: `${SITE_URL}/المدونات/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: pillar.title,
      item: `${SITE_URL}/${pillar.slug}/`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: article.title,
      item: canonical,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
        headline: article.title,
        description: article.description,
        image: {
          "@type": "ImageObject",
          url: article.image,
          width: 1200,
          height: 630,
        },
        author: {
          "@type": "Organization",
          name: article.author,
          url: `${SITE_URL}/عن-الشركة/`,
        },
        publisher: {
          "@type": "Organization",
          name: "موسوق",
          url: `${SITE_URL}/`,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/mawsouq-logo.png`,
          },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "ar-SA",
        articleSection: article.category,
        keywords: [article.primaryKeyword, "تصاميم استراحات", article.category],
        isPartOf: {
          "@type": "CreativeWorkSeries",
          name: pillar.title,
          url: `${SITE_URL}/${pillar.slug}/`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: breadcrumb,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: article.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResthouseClusterLayout article={article} />
    </>
  );
}
