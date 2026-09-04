import { notFound } from "next/navigation";

import ArticleLayout from "@/components/en/blog/ArticleLayout";
import {
  BLOG_BASE,
  SITE_URL,
  allArticles,
  business,
  getArticleBySlug,
  getPillarForArticle,
} from "@/app/(en)/en/blog/blog-data";

export const dynamicParams = false;

function absoluteImage(src) {
  if (!src) return `${SITE_URL}/images/blog/build-house-saudi-arabia-2026.webp`;
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

export function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `${SITE_URL}${BLOG_BASE}/${article.slug}/`;
  const image = absoluteImage(article.image);

  return {
    title: article.metaTitle,
    description: article.description,
    keywords: [
      article.primaryKeyword,
      ...(article.secondaryKeywords || []),
      "Saudi Arabia architecture and construction",
      "Mawsooq",
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
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.description,
      url: canonical,
      siteName: "Mawsooq",
      locale: "en_US",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      images: [
        {
          url: image,
          width: article.imageWidth || 1200,
          height: article.imageHeight || 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.description,
      images: [image],
    },
  };
}

export default async function EnglishBlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const parentPillar = getPillarForArticle(article);
  const canonical = `${SITE_URL}${BLOG_BASE}/${article.slug}/`;
  const image = absoluteImage(article.image);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/en/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_URL}${BLOG_BASE}/`,
    },
  ];

  if (article.role === "cluster") {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: parentPillar.title,
      item: `${SITE_URL}${BLOG_BASE}/${parentPillar.slug}/`,
    });
  }

  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name: article.title,
    item: canonical,
  });

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
          url: image,
          width: article.imageWidth || 1200,
          height: article.imageHeight || 630,
        },
        author: {
          "@type": "Organization",
          name: article.author,
          url: `${SITE_URL}/en/#about`,
        },
        publisher: {
          "@type": "Organization",
          name: business.name,
          url: `${SITE_URL}/en/`,
          logo: {
            "@type": "ImageObject",
            url: business.logo,
          },
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en",
        articleSection: article.category,
        keywords: [
          article.primaryKeyword,
          ...(article.secondaryKeywords || []),
          "Saudi Arabia architecture and construction",
        ],
        ...(article.role === "cluster"
          ? {
              isPartOf: {
                "@type": "CreativeWorkSeries",
                name: parentPillar.title,
                url: `${SITE_URL}${BLOG_BASE}/${parentPillar.slug}/`,
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: breadcrumbItems,
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
      <ArticleLayout article={article} />
    </>
  );
}
