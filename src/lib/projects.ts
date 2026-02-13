import projectsJson from "@/content/projects.json";
import { z } from "zod";

const projectTypeSchema = z.enum(["static", "react", "wordpress", "python"]);

const projectSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  repo_url: z.string().url(),
  type: projectTypeSchema,
  short_summary: z.string().min(1),
  tags: z.array(z.string().min(1)).min(1),
  roles: z.object({
    jorrick: z.string().min(1),
    wesley: z.string().min(1)
  }),
  screenshot_path: z.string().min(1).optional(),
  quality_gates: z.array(z.string().min(1)).min(1),
  devlog_slug: z.string().min(1).optional()
});

const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;

export function getProjects(): Project[] {
  return projectsSchema.parse(projectsJson);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getProjects().map((project) => project.slug);
}
