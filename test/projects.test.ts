import { describe, expect, it } from "vitest";
import { getProjects } from "@/src/lib/projects";

describe("project data loader", () => {
  it("validates schema and returns required projects", () => {
    const projects = getProjects();

    expect(projects).toHaveLength(7);
    expect(projects.some((project) => project.slug === "portfolio")).toBe(true);
    expect(projects.some((project) => project.slug === "static-site-demo")).toBe(true);
    expect(projects.some((project) => project.slug === "react-dashboard-demo")).toBe(true);
    expect(projects.some((project) => project.slug === "wp-theme-demo")).toBe(true);
    expect(projects.some((project) => project.slug === "nova-notes")).toBe(true);
    expect(projects.some((project) => project.slug === "nova-orchestrator")).toBe(true);
    expect(projects.some((project) => project.slug === "mini-content-pipeline")).toBe(true);

    const portfolio = projects.find((project) => project.slug === "portfolio");
    expect(portfolio?.repo_url).toBe("https://github.com/jorricklazeroms/portfolio");
    expect(portfolio?.quality_gates).toEqual(["npm run lint", "npm test", "npm run build"]);
  });
});
