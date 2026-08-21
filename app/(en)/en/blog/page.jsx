import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MessageCircle } from "lucide-react";

import {
  BLOG_BASE,
  SITE_URL,
  getLatestArticles,
  whatsappLink,
} from "@/app/(en)/en/blog/blog-data";

const pageUrl = `${SITE_URL}${BLOG_BASE}/`;

export const metadata = {
  title: "Latest Saudi Construction Guides",
  description:
    "Read Mawsooq's latest English guides about house construction costs, permits, contractors, timelines and project planning in Saudi Arabia.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Latest Saudi Construction Guides | Mawsooq",
    description:
      "Current English guides, calculators and cost-planning articles for residential construction projects in Saudi Arabia.",
    url: pageUrl,
    siteName: "Mawsooq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/blog/lead-clusters-en/cost-to-build-two-story-house-saudi-arabia.webp`,
        width: 1200,
        height: 630,
        alt: "Mawsooq Saudi construction guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Saudi Construction Guides | Mawsooq",
    description:
      "Costs, calculators, local city budgets, contracts, extensions, permits and contractor decisions for Saudi house projects.",
    images: [`${SITE_URL}/images/blog/lead-clusters-en/cost-to-build-two-story-house-saudi-arabia.webp`],
  },
};

function absoluteImage(src) {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

export default function EnglishBlogHubPage() {
  const blogs = getLatestArticles();
  const whatsapp = whatsappLink(
    "Hello Mawsooq, I am planning a construction project in Saudi Arabia and would like guidance on the right next steps.",
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        url: pageUrl,
        name: "Latest Saudi Construction Guides",
        description:
          "Mawsooq's latest English construction planning articles for Saudi Arabia.",
        inLanguage: "en",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: blogs.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}${BLOG_BASE}/${blog.slug}/`,
            name: blog.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
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
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+28px)] text-[color:var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_82%_8%,rgba(47,134,246,0.18),transparent_34%),linear-gradient(180deg,var(--surface-2),transparent)]" />

      <div className="mx-auto w-[min(100%-28px,1400px)]">
        <section className="overflow-hidden rounded-[38px] bg-[#071321] text-white shadow-[0_30px_100px_rgba(7,19,33,0.28)]">
          <div className="grid items-center lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#72b8ff]">
                Latest English articles
              </div>
              <h1 className="mt-6 text-balance text-5xl font-black leading-[1.05] tracking-[-0.06em] sm:text-6xl xl:text-7xl">
                Saudi construction guides built for real decisions
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/72">
                Current guidance on costs, city budgets, extensions, contracts, permits and contractor decisions in Saudi Arabia—built to help real homeowners move from search to a project-ready brief.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#latest-blogs"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f86f6] px-6 text-sm font-black text-white transition hover:-translate-y-0.5"
                >
                  Browse latest blogs <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/16"
                >
                  <MessageCircle className="h-4 w-4" /> Discuss your project
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-[540px]">
              <Image
                src="/images/blog/lead-clusters-en/cost-to-build-two-story-house-saudi-arabia.webp"
                alt="Mawsooq guide to building a house in Saudi Arabia"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </section>

        <section id="latest-blogs" className="scroll-mt-32 pt-16">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">Newest first</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[color:var(--ink)] sm:text-5xl">Latest blogs</h2>
            <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--ink-muted)]">
              This page intentionally shows only the newest English articles. Each cluster links back to the complete house-building pillar and across to related decision guides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog, index) => (
              <Link
                key={blog.slug}
                href={`${BLOG_BASE}/${blog.slug}/`}
                className="group flex min-h-full flex-col overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition hover:-translate-y-1.5 hover:border-[#2f86f6]/45 hover:shadow-[0_26px_78px_rgba(16,32,51,0.15)]"
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--surface-2)]">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/55 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#071321]/80 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-xl">
                      {blog.role === "pillar" ? "Pillar guide" : "Supporting guide"}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-black text-[color:var(--ink-muted)]">
                      <span className="text-[#2f86f6]">{blog.category}</span>
                      <span className="flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {blog.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-black leading-8 tracking-[-0.03em] text-[color:var(--ink)] transition group-hover:text-[#2f86f6]">
                      {blog.title}
                    </h2>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{blog.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-[color:var(--hairline)] pt-5 text-sm font-black text-[#2f86f6]">
                      <span>Open the guide</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
