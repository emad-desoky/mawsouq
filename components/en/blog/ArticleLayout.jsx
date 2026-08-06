import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  BLOG_BASE,
  business,
  clusters,
  getSiblings,
  pillar,
  routes,
  whatsappLink,
} from "@/app/(en)/en/blog/blog-data";

function PrimaryButton({ href, children, external = false }) {
  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...props}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f86f6] px-6 py-3 text-sm font-black text-white shadow-[0_16px_40px_rgba(47,134,246,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1671e6]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-6 py-3 text-sm font-black text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:border-[#2f86f6] hover:text-[#2f86f6]"
    >
      {children}
    </Link>
  );
}

function ArticleImage({ image, priority = false }) {
  if (!image?.src) return null;

  return (
    <figure className="my-8 overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] shadow-[var(--card-shadow)]">
      <div className="relative aspect-[16/9]">
        <Image
          src={image.src}
          alt={image.alt || "Saudi residential construction planning"}
          fill
          sizes="(max-width: 1024px) 100vw, 820px"
          className="object-cover"
          priority={priority}
        />
      </div>
    </figure>
  );
}

function DataTable({ table }) {
  if (!table) return null;

  return (
    <div className="my-8 overflow-x-auto rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
      <table className="min-w-[760px] w-full border-collapse text-left">
        <caption className="border-b border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-5 py-4 text-left text-sm font-black text-[color:var(--ink)]">
          {table.caption}
        </caption>
        <thead>
          <tr className="bg-[#071321] text-white">
            {table.headers.map((header) => (
              <th key={header} scope="col" className="px-5 py-4 text-sm font-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className="border-t border-[color:var(--hairline)] align-top odd:bg-[color:var(--surface)] even:bg-[color:var(--surface-2)]"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`px-5 py-4 text-sm font-semibold leading-7 text-[color:var(--ink-muted)] ${
                    cellIndex === 0 ? "font-black text-[color:var(--ink)]" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BarChart({ bars }) {
  if (!bars?.length) return null;

  return (
    <div className="my-8 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 sm:p-7">
      <div className="mb-5 flex items-center gap-3">
        <Calculator className="h-5 w-5 text-[#2f86f6]" />
        <h3 className="m-0 text-xl font-black text-[color:var(--ink)]">Planning visual</h3>
      </div>
      <div className="space-y-5">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-2 flex items-center justify-between gap-4 text-sm font-black">
              <span className="text-[color:var(--ink)]">{bar.label}</span>
              <span className="text-[#2f86f6]">{bar.value}%</span>
            </div>
            <div
              className="h-3 overflow-hidden rounded-full bg-[color:var(--surface)]"
              role="img"
              aria-label={`${bar.label}: ${bar.value} percent on this planning scale`}
            >
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#0b5bb8,#2f86f6,#72b8ff)]"
                style={{ width: `${Math.min(100, Math.max(0, bar.value))}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StepGrid({ steps }) {
  if (!steps?.length) return null;

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5"
        >
          <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#2f86f6] text-sm font-black text-white">
            {index + 1}
          </div>
          <h3 className="text-lg font-black leading-7 text-[color:var(--ink)]">{step.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
            {step.text}
          </p>
        </article>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  if (!items?.length) return null;

  return (
    <ol className="my-8 space-y-4 border-l-2 border-[#2f86f6]/30 pl-6">
      {items.map(([title, text], index) => (
        <li key={title} className="relative rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5">
          <span className="absolute -left-[35px] top-5 grid h-6 w-6 place-items-center rounded-full bg-[#2f86f6] text-[10px] font-black text-white ring-4 ring-[color:var(--page)]">
            {index + 1}
          </span>
          <strong className="block text-base font-black text-[color:var(--ink)]">{title}</strong>
          <span className="mt-2 block text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{text}</span>
        </li>
      ))}
    </ol>
  );
}

function ContentSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-b border-[color:var(--hairline)] py-10 last:border-b-0">
      <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 70)} className="mt-5 text-[17px] font-medium leading-8 text-[color:var(--ink-muted)]">
          {paragraph}
        </p>
      ))}

      {section.callout ? (
        <aside className="my-7 rounded-[24px] border border-[#2f86f6]/30 bg-[#2f86f6]/8 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[#2f86f6]" />
            <div>
              <h3 className="font-black text-[color:var(--ink)]">{section.callout.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{section.callout.text}</p>
            </div>
          </div>
        </aside>
      ) : null}

      {section.bullets?.length ? (
        <ul className="my-7 grid gap-3">
          {section.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-[color:var(--surface-2)] p-4 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2f86f6]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.checklist?.length ? (
        <div className="my-8 rounded-[26px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 sm:p-7">
          <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-[color:var(--ink)]">
            <ShieldCheck className="h-5 w-5 text-[#2f86f6]" /> Practical checklist
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-[color:var(--surface)] p-4 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2f86f6] text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <DataTable table={section.table} />
      <BarChart bars={section.bars} />
      <StepGrid steps={section.steps} />
      <Timeline items={section.timeline} />

      {section.note ? (
        <p className="my-5 rounded-2xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-sm font-bold leading-7 text-[color:var(--ink-muted)]">
          {section.note}
        </p>
      ) : null}

      <ArticleImage image={section.image} />
    </section>
  );
}

function RelatedGuides({ article }) {
  const related = article.role === "pillar" ? clusters : [pillar, ...getSiblings(article.slug, 5)];

  return (
    <section id="related-guides" className="scroll-mt-32 py-10">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">Topic cluster</p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[color:var(--ink)]">Related guides</h2>
        </div>
        <Link href={BLOG_BASE} className="hidden text-sm font-black text-[#2f86f6] sm:inline-flex">View latest blogs</Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {related.map((item) => (
          <Link
            href={`${BLOG_BASE}/${item.slug}/`}
            key={item.slug}
            className="group rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 transition hover:-translate-y-1 hover:border-[#2f86f6]/50"
          >
            <span className="text-xs font-black uppercase tracking-[0.12em] text-[#2f86f6]">{item.category}</span>
            <h3 className="mt-3 text-xl font-black leading-7 text-[color:var(--ink)] group-hover:text-[#2f86f6]">{item.title}</h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{item.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#2f86f6]">
              Open guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ faqs }) {
  return (
    <section id="faqs" className="scroll-mt-32 border-t border-[color:var(--hairline)] py-10">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">Direct answers</p>
      <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] text-[color:var(--ink)] sm:text-4xl">Frequently asked questions</h2>
      <div className="mt-7 space-y-3">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[22px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-5 open:border-[#2f86f6]/45">
            <summary className="cursor-pointer list-none pr-6 text-base font-black leading-7 text-[color:var(--ink)] marker:hidden">
              {question}
            </summary>
            <p className="mt-4 border-t border-[color:var(--hairline)] pt-4 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function SourceSection({ sources }) {
  if (!sources?.length) return null;

  return (
    <section className="border-t border-[color:var(--hairline)] py-10">
      <h2 className="text-2xl font-black text-[color:var(--ink)]">Authoritative sources used</h2>
      <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">
        Official sources support regulatory and index statements. Market cost bands remain indicative and should be replaced by project-specific quotations.
      </p>
      <ul className="mt-5 grid gap-3">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-4 py-3 text-sm font-black text-[color:var(--ink)] transition hover:border-[#2f86f6]/50 hover:text-[#2f86f6]"
            >
              <span>{source.label}</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DesktopSidebar({ article }) {
  const links = article.toc || [];
  const related = article.role === "pillar" ? clusters : [pillar, ...getSiblings(article.slug, 4)];
  const whatsapp = whatsappLink(article.whatsappMessage);

  return (
    <aside className="hidden self-start lg:sticky lg:top-[calc(var(--nav-height)+24px)] lg:block lg:max-h-[calc(100vh-var(--nav-height)-32px)] lg:overflow-y-auto lg:pr-1">
      <div className="space-y-5">
        <nav aria-label="Article table of contents" className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">On this page</p>
          <ol className="mt-4 space-y-1">
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="block rounded-xl px-3 py-2 text-sm font-bold leading-6 text-[color:var(--ink-muted)] transition hover:bg-[#2f86f6]/10 hover:text-[#2f86f6]">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="rounded-[28px] bg-[#071321] p-5 text-white shadow-[0_24px_70px_rgba(7,19,33,0.28)]">
          <MessageCircle className="h-7 w-7 text-[#62e68a]" />
          <h2 className="mt-4 text-xl font-black">Discuss your project</h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-white/70">Send the plot location, approximate built area, floors and finish level for a more relevant conversation.</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#20c96b] px-5 text-sm font-black text-[#062818] transition hover:-translate-y-0.5 hover:bg-[#39da82]">
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">Related reading</p>
          <div className="mt-4 space-y-3">
            {related.map((item) => (
              <Link key={item.slug} href={`${BLOG_BASE}/${item.slug}/`} className="block rounded-xl bg-[color:var(--surface-2)] p-3 text-sm font-black leading-6 text-[color:var(--ink)] transition hover:text-[#2f86f6]">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function ArticleLayout({ article }) {
  const whatsapp = whatsappLink(article.whatsappMessage);

  return (
    <main className="relative min-h-screen bg-[color:var(--page)] pb-24 pt-[calc(var(--nav-height)+26px)] text-[color:var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_78%_12%,rgba(47,134,246,0.18),transparent_34%),linear-gradient(180deg,var(--surface-2),transparent)]" />

      <div className="mx-auto w-[min(100%-28px,1420px)]">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-black text-[color:var(--ink-muted)]">
          <Link href={routes.home} className="hover:text-[#2f86f6]">Home</Link>
          <span>/</span>
          <Link href={routes.blogHub} className="hover:text-[#2f86f6]">Blog</Link>
          {article.role === "cluster" ? (
            <>
              <span>/</span>
              <Link href={`${BLOG_BASE}/${pillar.slug}/`} className="hover:text-[#2f86f6]">Build a House in Saudi Arabia</Link>
            </>
          ) : null}
          <span>/</span>
          <span aria-current="page" className="text-[color:var(--ink)]">{article.title}</span>
        </nav>

        <header className="overflow-hidden rounded-[34px] border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] shadow-[var(--card-shadow)]">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
            <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1 lg:p-14">
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-[#2f86f6]">
                <span>{article.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#2f86f6]" />
                <span className="flex items-center gap-1.5 normal-case tracking-normal text-[color:var(--ink-muted)]"><Clock3 className="h-4 w-4" /> {article.readTime}</span>
              </div>

              <h1 className="mt-5 text-balance text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[color:var(--ink)] sm:text-5xl xl:text-6xl">
                {article.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-[color:var(--ink-muted)]">{article.description}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={whatsapp} external>
                  <MessageCircle className="h-4 w-4" /> Get project guidance
                </PrimaryButton>
                <SecondaryButton href={routes.calculator}>
                  <Calculator className="h-4 w-4" /> Open cost calculator
                </SecondaryButton>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-[color:var(--ink-muted)]">
                <span>Published {article.datePublished}</span>
                <span>Updated {article.dateModified}</span>
                <span>By {article.author}</span>
              </div>
            </div>

            <div className="order-1 relative min-h-[300px] bg-[#071321] lg:order-2 lg:min-h-[560px]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/55 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {article.highlights.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)]">
              <strong className="block text-3xl font-black tracking-[-0.04em] text-[#2f86f6]">{item.value}</strong>
              <span className="mt-2 block text-sm font-bold leading-6 text-[color:var(--ink-muted)]">{item.label}</span>
            </div>
          ))}
        </section>

        <details className="mt-6 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-5 shadow-[var(--card-shadow)] lg:hidden">
          <summary className="cursor-pointer list-none font-black text-[color:var(--ink)]">Article contents</summary>
          <ol className="mt-4 space-y-2">
            {article.toc.map(([id, label]) => (
              <li key={id}><a className="text-sm font-bold text-[#2f86f6]" href={`#${id}`}>{label}</a></li>
            ))}
          </ol>
        </details>

        <div className="mt-7 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="min-w-0 rounded-[32px] border border-[color:var(--hairline)] bg-[color:var(--surface)] px-5 py-6 shadow-[var(--card-shadow)] sm:px-8 lg:px-10">
            <section className="rounded-[26px] bg-[#071321] p-6 text-white sm:p-8">
              <div className="flex items-center gap-3 text-[#72b8ff]"><FileText className="h-5 w-5" /><span className="text-xs font-black uppercase tracking-[0.18em]">Key takeaways</span></div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {article.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-7 text-white/78">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#62e68a]" />{item}
                  </li>
                ))}
              </ul>
            </section>

            {article.sections.map((section) => (
              <ContentSection section={section} key={section.id} />
            ))}

            <RelatedGuides article={article} />
            <FAQSection faqs={article.faqs} />
            <SourceSection sources={article.sources} />

            <section className="rounded-[28px] bg-[linear-gradient(135deg,#071321,#0b5bb8)] p-7 text-white sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#72b8ff]">Next step</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">Turn the guide into a project-specific plan</h2>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-white/72">Send your city, plot size, approximate built-up area, number of floors and preferred finish level. Mawsooq can help you identify the right design, cost-planning and execution steps.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#20c96b] px-6 text-sm font-black text-[#062818] transition hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <Link href={routes.contact} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/16">
                  Explore Mawsooq services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface-2)] p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f86f6]">About the author</p>
              <h2 className="mt-2 text-xl font-black text-[color:var(--ink)]">Mawsooq Editorial Team</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--ink-muted)]">Mawsooq publishes practical design, engineering and construction-planning content for clients in Saudi Arabia and the wider Arab region. Numeric examples are clearly labelled as planning illustrations and should be verified for the actual project.</p>
            </section>
          </article>

          <DesktopSidebar article={article} />
        </div>
      </div>
    </main>
  );
}
