import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, MapPin, PlayCircle } from "lucide-react";

import { MAWSOUQ_PROJECTS } from "@/lib/mawsouqProjects";

export default function ProjectsShowcaseSection() {
  return (
    <section id="projects" dir="rtl" className="relative overflow-hidden border-y border-[color:var(--hairline)] bg-[color:var(--surface-2)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_14%,rgba(47,134,246,.12),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[820px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] px-4 py-2 text-xs font-black text-[color:var(--brand)]">
              <BadgeCheck size={16} /> مشاريع حقيقية منشورة
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">شاهد أعمال موسوق الفعلية قبل أن تبدأ مشروعك</h2>
            <p className="mt-4 max-w-[760px] text-base font-bold leading-8 text-[color:var(--ink-muted)]">
              نماذج تصميم معماري وداخلي واستراحات منشورة على قناة موسوق الرسمية. استخدم المشاريع كمرجع بصري، ثم أرسل احتياجات مشروعك للحصول على نقاش مخصص لحالتك.
            </p>
          </div>
          <Link href="/مشاريعنا/" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[color:var(--brand)] px-6 text-sm font-black !text-white shadow-[0_14px_34px_rgba(11,91,184,.23)] transition hover:-translate-y-0.5">
            كل المشاريع <ArrowLeft size={17} />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {MAWSOUQ_PROJECTS.map((project, index) => (
            <Link key={project.slug} href={project.href} className={`group overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--card-shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-bright)] ${index < 2 ? "xl:col-span-1" : ""}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#071321]">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071321]/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 grid size-10 place-items-center rounded-full bg-red-600 text-white shadow-lg"><PlayCircle size={20} /></span>
                <span className="absolute bottom-4 right-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-black text-[#0b5bb8]">{project.category}</span>
              </div>
              <div className="p-5">
                <span className="flex items-center gap-1.5 text-xs font-black text-[color:var(--brand)]"><MapPin size={14} /> {project.location}</span>
                <h3 className="mt-2 text-base font-black leading-7 text-[color:var(--ink)]">{project.shortTitle}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[color:var(--brand)]">دراسة المشروع <ArrowLeft size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
