"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";

const categories = [
  "الكل",
  "أحدث المقالات",
  "التصميم المعماري",
  "التصميم الداخلى",
  "تكاليف البناء",
  "الصرف الصحى",
  "التكيف و التدفئة",
  "تنسيق الحدائق",
  "حفر الاساسات",
  "هدم مبانى",
  "خدمات المنازل",
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarouselArrow({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid h-13 w-13 place-items-center rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] text-[color:var(--brand)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:bg-[color:var(--brand)] hover:text-white"
      aria-label={direction === "next" ? "التالي" : "السابق"}
    >
      <ArrowIcon className={direction === "next" ? "rotate-180" : ""} />
    </button>
  );
}

export default function BlogsClient({ blogs }) {
  const groups = useMemo(() => {
    return {
      latest: blogs
        .filter((blog) => ["افضل-شركة-تشطيبات-في-السعودية"].includes(blog.slug))
        .slice(0, 6),

      featured: [
        blogs.find((blog) =>
          blog.href.includes("%d8%a8%d9%86%d8%a7%d8%a1-%d9%81%d9%84%d8%a9"),
        ),
        blogs.find((blog) =>
          blog.href.includes("%d9%88%d8%a7%d8%ac%d9%87%d8%a7%d8%aa"),
        ),
        blogs.find((blog) =>
          blog.href.includes("%d8%b7%d8%b1%d9%8a%d9%82%d8%a9"),
        ),
        blogs.find((blog) => blog.href.includes("%d8%a7%d9%81%d8%b6%d9%84")),
        blogs.find((blog) =>
          blog.href.includes(
            "%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%b9%d9%86",
          ),
        ),
      ].filter(Boolean),
      architecture: blogs.filter(
        (blog) => blog.category === "التصميم المعماري",
      ),
      interior: blogs.filter((blog) => blog.category === "التصميم الداخلى"),
      building: blogs.filter((blog) => blog.category === "تكاليف البناء"),
      services: blogs.filter((blog) =>
        [
          "الصرف الصحى",
          "التكيف و التدفئة",
          "خدمات المنازل",
          "حفر الاساسات",
          "هدم مبانى",
          "تنسيق الحدائق",
        ].includes(blog.category),
      ),
    };
  }, [blogs]);

  return (
    <main
      dir="rtl"
      className="relative isolate min-h-screen overflow-hidden bg-[color:var(--page)] pt-[calc(var(--nav-height)+38px)] pb-20 text-[color:var(--ink)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(47,134,246,0.16),transparent_34%),radial-gradient(circle_at_8%_42%,rgba(11,91,184,0.09),transparent_30%),linear-gradient(180deg,var(--surface-2),var(--page))]" />

      <section className="mx-auto w-[min(100%-32px,1400px)] overflow-hidden rounded-[42px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
        <div className="relative overflow-hidden rounded-[42px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(47,134,246,0.34),transparent_34%),linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_48%,transparent_100%)]" />

          <div className="relative z-10 grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-16 xl:p-20">
            <div className="max-w-[760px] text-right">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white/85 shadow-sm backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-[#5aa6ff] shadow-[0_0_0_5px_rgba(90,166,255,0.18)]" />
                مكتبة موسوق
              </div>

              <h1 className="m-0 text-balance text-5xl font-black leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                مدونات موسوق
                <span className="block text-white">للتصميم والبناء</span>
              </h1>

              <p className="mt-6 max-w-[720px] text-pretty text-lg font-bold leading-9 text-white/75 sm:text-xl">
                مكتبة منظمة لكل مقالات التصميم، البناء، الديكور، التكاليف،
                والخدمات المنزلية بروابطها القديمة كما هي للحفاظ على SEO.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#all-blogs"
                  className="inline-flex min-h-13 items-center justify-center rounded-full  px-7 text-sm font-black text-black shadow-[0_18px_45px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-1 "
                >
                  تصفح كل المقالات
                </a>

                <a
                  href="#architecture"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  التصميم المعماري
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <strong className="block text-4xl font-black leading-none text-white">
                    {blogs.length}+
                  </strong>
                  <span className="mt-2 block text-xs font-black text-white/65">
                    مقال منقول
                  </span>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <strong className="block text-4xl font-black leading-none text-white">
                    {categories.length - 1}
                  </strong>
                  <span className="mt-2 block text-xs font-black text-white/65">
                    تصنيفات
                  </span>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <strong className="block text-4xl font-black leading-none text-white">
                    SEO
                  </strong>
                  <span className="mt-2 block text-xs font-black text-white/65">
                    روابط محفوظة
                  </span>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[500px] lg:block">
              <div className="absolute inset-[56px_30px_28px_90px] overflow-hidden rounded-[36px] border border-white/20 bg-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90"
                  alt=""
                  fill
                  sizes="520px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/70 to-transparent" />
                <div className="absolute bottom-6 right-6">
                  <span className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-black text-white backdrop-blur-xl">
                    الأكثر قراءة
                  </span>
                  <strong className="block text-3xl font-black text-white">
                    بناء فلة
                  </strong>
                </div>
              </div>

              <div className="absolute right-0 top-3 h-[170px] w-[230px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=90"
                  alt=""
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-3 h-[170px] w-[230px] overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=90"
                  alt=""
                  fill
                  sizes="230px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[calc(var(--nav-height)+10px)] z-20 mx-auto mt-7 flex w-[min(100%-32px,1400px)] gap-2 overflow-x-auto rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)]/90 p-2 shadow-[var(--card-shadow)] backdrop-blur-2xl [scrollbar-width:none]"
        aria-label="تصنيفات المقالات"
      >
        {categories.map((category) => (
          <a
            href={
              category === "الكل"
                ? "#all-blogs"
                : category === "أحدث المقالات"
                  ? "#latest-blogs"
                  : `#${slugify(category)}`
            }
            className="shrink-0 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-5 py-3 text-sm font-black text-[color:var(--ink-muted)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:bg-[color:var(--brand)] hover:text-white"
            key={category}
          >
            {category}
          </a>
        ))}
      </nav>
      <CarouselSection
        id="latest-blogs"
        eyebrow="Latest"
        title="أحدث المقالات"
        description="آخر المقالات المنشورة على موسوق."
        posts={groups.latest}
      />
      <CarouselSection
        id="featured"
        eyebrow="Featured"
        title="مقالات مختارة"
        description="أهم المقالات التي يبحث عنها الزوار قبل بدء المشروع."
        posts={groups.featured}
      />

      <CarouselSection
        id="architecture"
        eyebrow="Architecture"
        title="مقالات التصميم المعماري"
        description="المصممين، المكاتب الهندسية، توزيع المساحات، الواجهات، والتصميم عن بعد."
        posts={groups.architecture}
      />

      <CarouselSection
        id={slugify("التصميم الداخلى")}
        eyebrow="Interior"
        title="مقالات التصميم الداخلي والديكور"
        description="أفكار الديكور، الجبس، الباركيه، غرف المعيشة، والتصاميم الكلاسيكية."
        posts={groups.interior}
      />

      <CarouselSection
        id={slugify("تكاليف البناء")}
        eyebrow="Building"
        title="مقالات البناء والتكاليف"
        description="تكلفة البناء، الفلل، المقاولين، وتجهيز الميزانية قبل التنفيذ."
        posts={groups.building}
      />

      <CarouselSection
        id="services"
        eyebrow="Home Services"
        title="خدمات المنازل والتجهيزات"
        description="الصرف الصحي، العزل، التكييف، الحفر، الحدائق، وخدمات المنزل."
        posts={groups.services}
      />

      <CarouselSection
        id="all-blogs"
        eyebrow="All Articles"
        title="كل المدونات"
        description="كل المقالات المنقولة بروابطها القديمة كما هي."
        posts={blogs}
      />
    </main>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8 text-right">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-4 py-2 text-sm font-black text-[color:var(--brand)] shadow-[var(--card-shadow)]">
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-bright)] shadow-[0_0_0_5px_rgba(47,134,246,0.12)]" />
        {eyebrow}
      </div>

      <h2 className="m-0 text-balance text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-5 max-w-3xl text-pretty text-base font-bold leading-8 text-[color:var(--ink-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function CarouselSection({ id, eyebrow, title, description, posts }) {
  const trackRef = useRef(null);

  if (!posts.length) return null;

  const scroll = (direction) => {
    if (!trackRef.current) return;

    const amount = trackRef.current.clientWidth;

    trackRef.current.scrollBy({
      left: direction === "next" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id={id} className="mx-auto mt-18 w-[min(100%-32px,1400px)]">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div
        ref={trackRef}
        className="grid auto-cols-[88%] grid-flow-col gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] sm:auto-cols-[calc((100%-22px)/2)] lg:auto-cols-[calc((100%-66px)/4)]"
      >
        {posts.map((blog) => (
          <BlogCard blog={blog} key={blog.href} />
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <CarouselArrow direction="prev" onClick={() => scroll("prev")} />
        <CarouselArrow direction="next" onClick={() => scroll("next")} />
      </div>
    </section>
  );
}

function BlogCard({ blog }) {
  return (
    <a
      href={blog.href}
      className="group flex min-h-full overflow-hidden rounded-[30px] border border-[color:var(--hairline)] bg-[color:var(--surface)] text-[color:var(--ink)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)]/40 hover:shadow-[0_26px_78px_rgba(16,32,51,0.14)] dark:hover:shadow-[0_26px_78px_rgba(0,0,0,0.42)]"
    >
      <article className="flex w-full flex-col">
        <div className="relative aspect-[16/11] overflow-hidden bg-[color:var(--surface-2)]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 760px) 88vw, (max-width: 1180px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/50 via-transparent to-transparent opacity-80" />

          <span className="absolute right-4 top-4 rounded-full bg-[#071321]/78 px-3 py-2 text-xs font-black text-white backdrop-blur-xl">
            {blog.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="line-clamp-2 text-xl font-black leading-8 tracking-[-0.025em] text-[color:var(--ink)] transition duration-300 group-hover:text-[color:var(--brand)]">
            {blog.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
            {blog.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-[color:var(--hairline)] pt-5 text-sm font-black text-[color:var(--brand)]">
            <span>اقرأ المقال</span>
            <span className="transition duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}

function slugify(value) {
  return value
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FFa-zA-Z0-9-]/g, "")
    .toLowerCase();
}
