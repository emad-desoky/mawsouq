import Link from "next/link";
import {
  ArrowLeft,
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
  getResthouseSiblings,
  pillar,
  routes,
  whatsappLink,
} from "@/app/_arabic-pages/_resthouse-cluster/resthouse-data";
import ResthouseWhatsAppBrief from "./ResthouseWhatsAppBrief";

function DataTable({ table }) {
  if (!table) return null;

  return (
    <div className="rh-table-wrap">
      <table>
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th scope="col" key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Bars({ bars }) {
  if (!bars?.length) return null;

  return (
    <div className="rh-bars" aria-label="مؤشرات بصرية لعناصر التصميم">
      {bars.map(([label, value]) => (
        <div className="rh-bar-row" key={label}>
          <div className="rh-bar-label"><span>{label}</span><strong>{value}%</strong></div>
          <div className="rh-bar-track" role="img" aria-label={`${label}: ${value}% على مقياس توضيحي`}>
            <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Steps({ steps }) {
  if (!steps?.length) return null;

  return (
    <div className="rh-steps">
      {steps.map(([title, text], index) => (
        <article key={title}>
          <span className="rh-step-number">{index + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  if (!items?.length) return null;

  return (
    <ol className="rh-timeline">
      {items.map(([title, text], index) => (
        <li key={title}>
          <span>{index + 1}</span>
          <div><strong>{title}</strong><p>{text}</p></div>
        </li>
      ))}
    </ol>
  );
}

function ArticleImage({ image }) {
  if (!image?.src) return null;

  return (
    <figure className="rh-inline-image">
      <img
        src={image.src}
        alt={image.alt || "تصميم استراحة في السعودية"}
        width="1200"
        height="760"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

function ContentSection({ section, article }) {
  const contextualMessage = whatsappLink(
    `${article.whatsappMessage}\nأرغب في مناقشة القسم: ${section.title}`,
  );

  return (
    <section id={section.id} className="rh-content-section">
      <h2>{section.title}</h2>

      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 72)}>{paragraph}</p>
      ))}

      {section.callout ? (
        <aside className="rh-callout">
          <Sparkles size={23} aria-hidden="true" />
          <div>
            <h3>{section.callout.title}</h3>
            <p>{section.callout.text}</p>
            <a href={contextualMessage} target="_blank" rel="noopener noreferrer">
              ناقش هذه النقطة عبر واتساب <ArrowLeft size={17} />
            </a>
          </div>
        </aside>
      ) : null}

      {section.checklist?.length ? (
        <div className="rh-checklist">
          <h3><ShieldCheck size={23} /> قائمة عملية للمراجعة</h3>
          <ul>
            {section.checklist.map((item) => (
              <li key={item}><span><Check size={14} /></span>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="rh-bullets">
          {section.bullets.map((item) => (
            <li key={item}><CheckCircle2 size={20} />{item}</li>
          ))}
        </ul>
      ) : null}

      <DataTable table={section.table} />
      <Bars bars={section.bars} />
      <Steps steps={section.steps} />
      <Timeline items={section.timeline} />
      <ArticleImage image={section.image} />
    </section>
  );
}

function RelatedGuides({ article }) {
  const siblings = getResthouseSiblings(article.slug, 4);
  return (
    <section className="rh-related" id="related-reading">
      <span className="rh-eyebrow">ضمن دليل تصاميم الاستراحات</span>
      <h2>أدلة مرتبطة تساعدك على اتخاذ قرار أفضل</h2>
      <p>
        للحصول على الصورة الكاملة، ارجع إلى{" "}
        <Link href={`/${pillar.slug}/`}>دليل تصاميم الاستراحات الراقية</Link>،
        ثم اختر الدليل الأقرب لمساحة أرضك واستخدامك.
      </p>
      <div className="rh-related-grid">
        {siblings.map((item) => (
          <Link href={`/${item.slug}/`} key={item.slug}>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <strong>افتح الدليل <ArrowLeft size={16} /></strong>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FAQ({ faqs }) {
  return (
    <section id="faqs" className="rh-faq">
      <span className="rh-eyebrow">إجابات مباشرة</span>
      <h2>الأسئلة الشائعة</h2>
      <div>
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Sources({ sources }) {
  if (!sources?.length) return null;
  return (
    <section className="rh-sources">
      <h2>مصادر رسمية مفيدة قبل التصميم والتنفيذ</h2>
      <p>تختلف متطلبات المشروع حسب استخدام الأرض والمدينة ونوع النشاط؛ راجع الجهة المختصة والمكتب الهندسي للمشروع الفعلي.</p>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.label}<ExternalLink size={16} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Sidebar({ article }) {
  const siblings = getResthouseSiblings(article.slug, 3);
  return (
    <aside className="rh-sidebar">
      <div className="rh-sidebar-inner">
        <nav aria-label="فهرس المقال" className="rh-sidebar-card rh-toc-card">
          <span className="rh-eyebrow">في هذا المقال</span>
          <ol>
            {article.toc.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ol>
        </nav>

        <ResthouseWhatsAppBrief articleTitle={article.title} compact />

        <div className="rh-sidebar-card">
          <span className="rh-eyebrow">اقرأ بعد ذلك</span>
          <div className="rh-side-links">
            <Link href={`/${pillar.slug}/`}>{pillar.title}</Link>
            {siblings.map((item) => (
              <Link href={`/${item.slug}/`} key={item.slug}>{item.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function ResthouseClusterLayout({ article }) {
  const whatsapp = whatsappLink(article.whatsappMessage);

  return (
    <main className="rh-page" dir="rtl" lang="ar-SA">
      <div className="rh-page-glow" />
      <div className="rh-container">
        <nav aria-label="مسار التنقل" className="rh-breadcrumbs">
          <Link href={routes.home}>الرئيسية</Link><span>›</span>
          <Link href={routes.blogHub}>المدونات</Link><span>›</span>
          <Link href={`/${pillar.slug}/`}>تصاميم استراحات</Link><span>›</span>
          <strong aria-current="page">{article.title}</strong>
        </nav>

        <header className="rh-hero">
          <div className="rh-hero-copy">
            <span className="rh-eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="rh-hero-actions">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rh-primary-cta">
                <MessageCircle size={19} /> أرسل تفاصيل الاستراحة
              </a>
              <Link href={`/${pillar.slug}/`} className="rh-secondary-cta">
                شاهد 30 فكرة للاستراحات
              </Link>
            </div>
            <div className="rh-meta">
              <span><Clock3 size={16} />{article.readTime}</span>
              <span>آخر تحديث: 6 أغسطس 2026</span>
            </div>
          </div>
          <figure className="rh-hero-image">
            <img src={article.image} alt={article.imageAlt} width="1200" height="800" loading="eager" fetchPriority="high" />
          </figure>
        </header>

        <section className="rh-highlights" aria-label="ملخص المقال">
          {article.highlights.map(([value, label]) => (
            <article key={label}><strong>{value}</strong><span>{label}</span></article>
          ))}
        </section>

        <details className="rh-mobile-toc">
          <summary>محتويات المقال</summary>
          <ol>{article.toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </details>

        <div className="rh-layout">
          <article className="rh-article">
            <section className="rh-takeaways">
              <div><FileText size={22} /><span>أهم ما تحتاج معرفته</span></div>
              <ul>{article.takeaways.map((item) => <li key={item}><CheckCircle2 size={20} />{item}</li>)}</ul>
            </section>

            {article.sections.map((section) => (
              <ContentSection section={section} article={article} key={section.id} />
            ))}

            <section className="rh-mid-cta">
              <div>
                <span className="rh-eyebrow">قبل اعتماد المخطط</span>
                <h2>أرسل مساحة الأرض واستخدام الاستراحة</h2>
                <p>ابدأ بمحادثة واضحة بدل طلب سعر عام لا يعكس مشروعك. وضّح المدينة، المساحة، الاستخدام، وجود مسبح والنمط الذي يعجبك.</p>
              </div>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> تحدث مع فريق موسوق</a>
            </section>

            <section className="rh-service-links" aria-label="روابط خدمات مرتبطة">
              <span className="rh-eyebrow">روابط تساعدك على الانتقال من الفكرة إلى التنفيذ</span>
              <div>
                <Link href={routes.architecture}>خدمات التصميم المعماري</Link>
                <Link href={routes.remoteDesign}>تصميم معماري عن بعد</Link>
                <Link href={routes.gardens}>تصميم الحدائق والجلسات الخارجية</Link>
                <Link href={routes.about}>تعرف على شركة موسوق</Link>
              </div>
            </section>

            <RelatedGuides article={article} />
            <FAQ faqs={article.faqs} />
            <Sources sources={article.sources} />

            <section className="rh-final-cta">
              <span className="rh-eyebrow">الخطوة التالية</span>
              <h2>حوّل أفكار الاستراحة إلى مخطط مناسب لأرضك</h2>
              <p>شاركنا أبعاد الأرض والمدينة وطبيعة الاستخدام. سنساعدك على تنظيم المتطلبات قبل بدء التصميم أو مقارنة الخيارات.</p>
              <div>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> تواصل عبر واتساب</a>
                <Link href={routes.architecture}>خدمات التصميم المعماري</Link>
              </div>
            </section>
          </article>

          <Sidebar article={article} />
        </div>
      </div>

      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rh-mobile-whatsapp">
        <MessageCircle size={19} /> أرسل تفاصيل استراحتك
      </a>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
  .rh-page{position:relative;min-height:100vh;padding:calc(var(--nav-height) + 28px) 0 96px;background:var(--page);color:var(--ink);font-family:var(--font-tajawal),sans-serif;overflow:clip}
  .rh-page-glow{position:absolute;inset:0 0 auto;height:760px;pointer-events:none;background:radial-gradient(circle at 84% 10%,rgba(47,134,246,.18),transparent 35%),linear-gradient(180deg,var(--surface-2),transparent);z-index:0}
  .rh-container{position:relative;z-index:1;width:min(calc(100% - 28px),1420px);margin-inline:auto}
  .rh-breadcrumbs{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:18px;font-size:13px;font-weight:800;color:var(--ink-faint)}
  .rh-breadcrumbs a{color:var(--brand);text-decoration:none}.rh-breadcrumbs strong{color:var(--ink)}
  .rh-hero{display:grid;grid-template-columns:minmax(0,1.03fr) minmax(0,.97fr);overflow:hidden;border:1px solid var(--hairline-strong);border-radius:36px;background:var(--surface);box-shadow:var(--card-shadow)}
  .rh-hero-copy{display:flex;flex-direction:column;justify-content:center;padding:clamp(30px,5vw,70px)}
  .rh-eyebrow{display:inline-flex;width:max-content;max-width:100%;color:var(--brand);font-size:12px;font-weight:950;letter-spacing:.03em}
  .rh-hero h1{margin:18px 0 0;font-size:clamp(36px,5vw,64px);line-height:1.18;letter-spacing:-.05em;font-weight:950;color:var(--ink)}
  .rh-hero-copy>p{margin:22px 0 0;max-width:760px;font-size:clamp(17px,2vw,21px);line-height:1.95;font-weight:700;color:var(--ink-muted)}
  .rh-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.rh-primary-cta,.rh-secondary-cta{display:inline-flex;min-height:52px;align-items:center;justify-content:center;gap:9px;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:950;text-decoration:none;transition:.2s ease}
  .rh-primary-cta{background:#20c96b;color:#062818;box-shadow:0 16px 42px rgba(32,201,107,.24)}.rh-primary-cta:hover,.rh-mid-cta a:hover,.rh-final-cta a:hover{transform:translateY(-2px)}
  .rh-secondary-cta{border:1px solid var(--hairline-strong);background:var(--surface-2);color:var(--ink)}
  .rh-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:22px;color:var(--ink-faint);font-size:13px;font-weight:800}.rh-meta span{display:inline-flex;align-items:center;gap:6px}
  .rh-hero-image{position:relative;min-height:560px;margin:0;background:#071321}.rh-hero-image img{width:100%;height:100%;object-fit:cover;display:block}
  .rh-highlights{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:16px}.rh-highlights article{padding:22px;border:1px solid var(--hairline);border-radius:24px;background:var(--surface);box-shadow:var(--card-shadow)}.rh-highlights strong{display:block;color:var(--brand);font-size:25px;font-weight:950}.rh-highlights span{display:block;margin-top:7px;color:var(--ink-muted);font-size:14px;font-weight:800;line-height:1.7}
  .rh-layout{display:grid;grid-template-columns:minmax(0,1fr) 330px;gap:24px;align-items:start;margin-top:24px}
  .rh-article{min-width:0;padding:clamp(22px,4vw,44px);border:1px solid var(--hairline);border-radius:32px;background:var(--surface);box-shadow:var(--card-shadow)}
  .rh-takeaways{padding:26px;border-radius:26px;background:#071321;color:#fff}.rh-takeaways>div{display:flex;align-items:center;gap:10px;color:#72b8ff;font-weight:950}.rh-takeaways ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:20px 0 0;padding:0;list-style:none}.rh-takeaways li{display:flex;gap:9px;align-items:flex-start;color:rgba(255,255,255,.78);font-size:14px;line-height:1.8;font-weight:700}.rh-takeaways li svg{flex:0 0 auto;margin-top:4px;color:#62e68a}
  .rh-content-section{padding:42px 0;border-bottom:1px solid var(--hairline);scroll-margin-top:130px}.rh-content-section h2,.rh-related h2,.rh-faq h2,.rh-sources h2{margin:0;font-size:clamp(29px,3.8vw,43px);line-height:1.35;letter-spacing:-.035em;font-weight:950;color:var(--ink)}.rh-content-section>p,.rh-related>p,.rh-sources>p{margin:18px 0 0;font-size:17px;line-height:2;font-weight:600;color:var(--ink-muted)}
  .rh-callout{display:flex;gap:14px;margin:26px 0;padding:22px;border:1px solid rgba(47,134,246,.3);border-radius:22px;background:rgba(47,134,246,.08)}.rh-callout>svg{flex:0 0 auto;color:var(--brand)}.rh-callout h3{margin:0;color:var(--ink);font-size:19px;font-weight:950}.rh-callout p{margin:8px 0;color:var(--ink-muted);line-height:1.8;font-weight:700}.rh-callout a{display:inline-flex;align-items:center;gap:6px;color:var(--brand);font-weight:950;text-decoration:none}
  .rh-table-wrap{margin:28px 0;overflow-x:auto;border:1px solid var(--hairline);border-radius:23px;background:var(--surface);box-shadow:var(--card-shadow)}.rh-table-wrap table{width:100%;min-width:700px;border-collapse:collapse;text-align:right}.rh-table-wrap caption{padding:16px 18px;background:var(--surface-2);font-weight:950;color:var(--ink);text-align:right}.rh-table-wrap th{padding:15px 18px;background:#071321;color:#fff;font-size:14px}.rh-table-wrap td{padding:15px 18px;border-top:1px solid var(--hairline);color:var(--ink-muted);font-size:14px;line-height:1.8;font-weight:700}.rh-table-wrap tr:nth-child(even) td{background:var(--surface-2)}.rh-table-wrap td:first-child{color:var(--ink);font-weight:950}
  .rh-checklist{margin:28px 0;padding:24px;border:1px solid var(--hairline);border-radius:24px;background:var(--surface-2)}.rh-checklist h3{display:flex;align-items:center;gap:8px;margin:0;color:var(--ink);font-size:21px;font-weight:950}.rh-checklist h3 svg{color:var(--brand)}.rh-checklist ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0 0;padding:0;list-style:none}.rh-checklist li{display:flex;gap:9px;align-items:flex-start;padding:13px;border-radius:15px;background:var(--surface);color:var(--ink-muted);font-size:14px;line-height:1.75;font-weight:750}.rh-checklist li span{display:grid;place-items:center;flex:0 0 auto;width:20px;height:20px;margin-top:3px;border-radius:50%;background:var(--brand);color:#fff}
  .rh-bullets{display:grid;gap:10px;margin:26px 0;padding:0;list-style:none}.rh-bullets li{display:flex;gap:10px;align-items:flex-start;padding:15px 16px;border-radius:17px;background:var(--surface-2);color:var(--ink-muted);line-height:1.8;font-weight:750}.rh-bullets svg{flex:0 0 auto;margin-top:4px;color:var(--brand)}
  .rh-steps{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:13px;margin:28px 0}.rh-steps article{display:flex;gap:13px;padding:19px;border:1px solid var(--hairline);border-radius:21px;background:var(--surface-2)}.rh-step-number{display:grid;place-items:center;flex:0 0 auto;width:36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;font-weight:950}.rh-steps h3{margin:0;color:var(--ink);font-size:17px;font-weight:950}.rh-steps p{margin:7px 0 0;color:var(--ink-muted);font-size:14px;line-height:1.75;font-weight:700}
  .rh-bars{display:grid;gap:17px;margin:28px 0;padding:23px;border-radius:23px;background:var(--surface-2)}.rh-bar-label{display:flex;justify-content:space-between;gap:16px;margin-bottom:8px;color:var(--ink);font-size:14px;font-weight:950}.rh-bar-label strong{color:var(--brand)}.rh-bar-track{height:11px;overflow:hidden;border-radius:999px;background:var(--surface)}.rh-bar-track span{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#0b5bb8,#2f86f6,#72b8ff)}
  .rh-timeline{display:grid;gap:12px;margin:28px 0;padding:0;list-style:none}.rh-timeline li{display:flex;gap:14px;align-items:flex-start;padding:18px;border:1px solid var(--hairline);border-radius:20px;background:var(--surface-2)}.rh-timeline li>span{display:grid;place-items:center;width:32px;height:32px;flex:0 0 auto;border-radius:50%;background:var(--brand);color:#fff;font-weight:950}.rh-timeline strong{color:var(--ink);font-size:17px}.rh-timeline p{margin:6px 0 0;color:var(--ink-muted);line-height:1.75;font-weight:700}
  .rh-inline-image{margin:28px 0 0;overflow:hidden;border:1px solid var(--hairline);border-radius:25px;background:var(--surface-2);box-shadow:var(--card-shadow)}.rh-inline-image img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover}
  .rh-mid-cta{display:grid;grid-template-columns:1fr auto;gap:22px;align-items:center;margin:40px 0;padding:28px;border-radius:26px;background:linear-gradient(135deg,#071321,#0b5bb8);color:#fff}.rh-mid-cta h2{margin:8px 0 0;font-size:30px;line-height:1.35;font-weight:950}.rh-mid-cta p{margin:10px 0 0;max-width:720px;color:rgba(255,255,255,.72);line-height:1.8;font-weight:700}.rh-mid-cta a{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:12px 20px;border-radius:999px;background:#20c96b;color:#062818;font-weight:950;text-decoration:none;transition:.2s ease}
  .rh-service-links{padding:28px 0;border-top:1px solid var(--hairline)}.rh-service-links>div{display:flex;flex-wrap:wrap;gap:9px;margin-top:14px}.rh-service-links a{padding:11px 15px;border:1px solid var(--hairline);border-radius:999px;background:var(--surface-2);color:var(--brand);font-size:13px;font-weight:900;text-decoration:none}.rh-service-links a:hover{border-color:rgba(47,134,246,.5)}
  .rh-related,.rh-faq,.rh-sources{padding:42px 0;border-top:1px solid var(--hairline);scroll-margin-top:130px}.rh-related a{color:var(--brand);font-weight:950}.rh-related-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:24px}.rh-related-grid>a{display:flex;flex-direction:column;padding:20px;border:1px solid var(--hairline);border-radius:21px;background:var(--surface-2);text-decoration:none;transition:.2s ease}.rh-related-grid>a:hover{transform:translateY(-3px);border-color:rgba(47,134,246,.5)}.rh-related-grid span{font-size:12px;color:var(--brand);font-weight:950}.rh-related-grid h3{margin:10px 0 0;color:var(--ink);font-size:20px;line-height:1.55;font-weight:950}.rh-related-grid p{margin:9px 0;color:var(--ink-muted);font-size:14px;line-height:1.75;font-weight:700}.rh-related-grid strong{display:inline-flex;align-items:center;gap:7px;margin-top:auto;color:var(--brand);font-size:14px}
  .rh-faq>div{display:grid;gap:10px;margin-top:22px}.rh-faq details{padding:18px 20px;border:1px solid var(--hairline);border-radius:19px;background:var(--surface-2)}.rh-faq details[open]{border-color:rgba(47,134,246,.5)}.rh-faq summary{cursor:pointer;color:var(--ink);font-size:16px;font-weight:950}.rh-faq details p{margin:14px 0 0;padding-top:14px;border-top:1px solid var(--hairline);color:var(--ink-muted);font-size:14px;line-height:1.9;font-weight:700}
  .rh-sources ul{display:grid;gap:9px;margin:20px 0 0;padding:0;list-style:none}.rh-sources a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border:1px solid var(--hairline);border-radius:15px;background:var(--surface-2);color:var(--ink);font-weight:900;text-decoration:none}.rh-sources a:hover{color:var(--brand);border-color:rgba(47,134,246,.5)}
  .rh-final-cta{margin-top:36px;padding:clamp(26px,5vw,42px);border-radius:28px;background:#071321;color:#fff}.rh-final-cta h2{margin:10px 0 0;font-size:clamp(30px,4vw,44px);line-height:1.35;font-weight:950}.rh-final-cta p{max-width:760px;margin:14px 0 0;color:rgba(255,255,255,.72);font-size:16px;line-height:1.9;font-weight:700}.rh-final-cta>div{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.rh-final-cta a{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:12px 21px;border-radius:999px;background:#20c96b;color:#062818;font-weight:950;text-decoration:none;transition:.2s ease}.rh-final-cta a+ a{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)}
  .rh-sidebar{min-width:0}.rh-sidebar-inner{position:sticky;top:calc(var(--nav-height) + 20px);display:grid;gap:14px;max-height:calc(100vh - var(--nav-height) - 28px);overflow-y:auto;padding-left:3px;overscroll-behavior:contain}.rh-sidebar-inner::-webkit-scrollbar{width:5px}.rh-sidebar-inner::-webkit-scrollbar-thumb{background:rgba(47,134,246,.35);border-radius:999px}.rh-sidebar-card,.resthouse-lead-card{padding:20px;border:1px solid var(--hairline);border-radius:24px;background:var(--surface);box-shadow:var(--card-shadow)}.rh-toc-card ol{display:grid;gap:3px;margin:13px 0 0;padding:0;list-style:none}.rh-toc-card a{display:block;padding:8px 10px;border-radius:10px;color:var(--ink-muted);font-size:13px;font-weight:850;text-decoration:none}.rh-toc-card a:hover{background:rgba(47,134,246,.09);color:var(--brand)}.rh-side-links{display:grid;gap:8px;margin-top:13px}.rh-side-links a{padding:10px 11px;border-radius:12px;background:var(--surface-2);color:var(--ink);font-size:13px;line-height:1.65;font-weight:900;text-decoration:none}.rh-side-links a:hover{color:var(--brand)}
  .resthouse-lead-heading{display:flex;gap:10px;align-items:flex-start}.resthouse-lead-icon{display:grid;place-items:center;flex:0 0 auto;width:41px;height:41px;border-radius:14px;background:rgba(32,201,107,.14);color:#12a958}.resthouse-lead-heading strong{display:block;color:var(--ink);font-size:17px;font-weight:950}.resthouse-lead-heading p{margin:5px 0 0;color:var(--ink-muted);font-size:12px;line-height:1.65;font-weight:700}.resthouse-lead-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;margin-top:16px}.resthouse-lead-fields label{display:grid;gap:5px}.resthouse-lead-fields label>span{font-size:11px;color:var(--ink-faint);font-weight:900}.resthouse-lead-fields input,.resthouse-lead-fields select{width:100%;min-width:0;height:42px;padding:0 10px;border:1px solid var(--hairline);border-radius:11px;background:var(--surface-2);color:var(--ink);font-family:inherit;font-size:12px;font-weight:750;outline:none}.resthouse-lead-fields input:focus,.resthouse-lead-fields select:focus{border-color:var(--brand)}.lead-field-full{grid-column:1/-1}.resthouse-whatsapp-submit{display:flex;align-items:center;justify-content:center;gap:8px;min-height:47px;margin-top:12px;padding:10px 14px;border-radius:999px;background:#20c96b;color:#062818;font-size:13px;font-weight:950;text-decoration:none}.resthouse-lead-note{margin:8px 0 0;color:var(--ink-faint);font-size:10px;line-height:1.6;font-weight:700}.is-compact .resthouse-lead-fields{grid-template-columns:1fr}.is-compact .lead-field-full{grid-column:auto}
  .rh-mobile-toc{display:none;margin-top:16px;padding:18px;border:1px solid var(--hairline);border-radius:20px;background:var(--surface)}.rh-mobile-toc summary{cursor:pointer;font-weight:950}.rh-mobile-toc ol{display:grid;gap:8px;margin:14px 0 0}.rh-mobile-toc a{color:var(--brand);font-weight:850;text-decoration:none}.rh-mobile-whatsapp{display:none}
  @media(max-width:1050px){.rh-hero{grid-template-columns:1fr}.rh-hero-copy{order:2}.rh-hero-image{order:1;min-height:380px}.rh-layout{grid-template-columns:1fr}.rh-sidebar{display:none}.rh-mobile-toc{display:block}.rh-page{overflow:visible}.rh-highlights{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:720px){.rh-page{padding:calc(var(--nav-height) + 18px) 0 110px}.rh-container{width:min(calc(100% - 18px),1420px)}.rh-hero{border-radius:25px}.rh-hero-copy{padding:26px 20px}.rh-hero h1{font-size:36px}.rh-hero-image{min-height:280px}.rh-hero-actions{flex-direction:column}.rh-primary-cta,.rh-secondary-cta{width:100%}.rh-highlights{grid-template-columns:1fr;gap:9px}.rh-highlights article{padding:16px;border-radius:18px}.rh-article{padding:18px;border-radius:24px}.rh-takeaways{padding:20px}.rh-takeaways ul,.rh-checklist ul,.rh-steps,.rh-related-grid{grid-template-columns:1fr}.rh-content-section{padding:34px 0}.rh-content-section h2,.rh-related h2,.rh-faq h2,.rh-sources h2{font-size:29px}.rh-mid-cta{grid-template-columns:1fr;padding:22px}.rh-mid-cta a{width:100%}.rh-mobile-whatsapp{position:fixed;z-index:80;right:12px;left:12px;bottom:max(78px,calc(env(safe-area-inset-bottom) + 78px));display:flex;align-items:center;justify-content:center;gap:8px;min-height:54px;border-radius:999px;background:#20c96b;color:#062818;font-size:14px;font-weight:950;text-decoration:none;box-shadow:0 18px 50px rgba(0,0,0,.24)}.rh-table-wrap table{min-width:620px}}
`;
