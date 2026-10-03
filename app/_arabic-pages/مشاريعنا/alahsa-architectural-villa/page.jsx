import ProjectCaseStudy from "@/components/ar/projects/ProjectCaseStudy";
import { getMawsooqProject } from "@/lib/mawsouqProjects";

const project = getMawsooqProject("alahsa-architectural-villa");

export const metadata = {
  title: 'مشروع التصميم المعماري لفيلا في الأحساء | موسوق',
  description: project.summary,
  alternates: { canonical: project.href },
  openGraph: {
    title: project.title,
    description: project.summary,
    url: project.href,
    type: "article",
    locale: "ar_SA",
    images: [{ url: project.image, width: 1200, height: 656, alt: project.imageAlt }],
  },
};

export default function Page() {
  return <ProjectCaseStudy project={project} />;
}
