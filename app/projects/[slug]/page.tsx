import SectionRelocated from "@/src/components/section-relocated";
import { getProjectSlugs } from "@/src/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage() {
  return <SectionRelocated title="Projects" sectionId="projects" />;
}
