import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { z } from "zod";

const devlogDir = path.join(process.cwd(), "content", "devlog");

const frontmatterSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1),
  project: z.string().min(1),
  summary: z.string().min(1),
  tags: z.array(z.string()).min(1)
});

export type Devlog = z.infer<typeof frontmatterSchema> & {
  slug: string;
  contentHtml: string;
};

export type DevlogMeta = Omit<Devlog, "contentHtml">;

export function getDevlogSlugs(): string[] {
  return fs
    .readdirSync(devlogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getDevlogBySlug(slug: string): Promise<Devlog | undefined> {
  const fullPath = path.join(devlogDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  const fm = frontmatterSchema.parse(parsed.data);

  const html = String(
    await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(parsed.content)
  );

  return {
    slug,
    ...fm,
    contentHtml: html
  };
}

export async function getAllDevlogs(): Promise<Devlog[]> {
  const slugs = getDevlogSlugs();
  const devlogs = await Promise.all(slugs.map((slug) => getDevlogBySlug(slug)));

  return devlogs
    .filter((devlog): devlog is Devlog => Boolean(devlog))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getLatestDevlogs(limit = 5): Promise<DevlogMeta[]> {
  const devlogs = await getAllDevlogs();
  return devlogs.slice(0, limit).map((devlog) => ({
    slug: devlog.slug,
    title: devlog.title,
    date: devlog.date,
    project: devlog.project,
    summary: devlog.summary,
    tags: devlog.tags
  }));
}
