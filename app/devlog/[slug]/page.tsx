import Link from "next/link";
import { notFound } from "next/navigation";
import { getDevlogBySlug, getDevlogSlugs } from "@/src/lib/devlog";

export function generateStaticParams() {
  return getDevlogSlugs().map((slug) => ({ slug }));
}

export default async function DevlogPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const devlog = await getDevlogBySlug(slug);

  if (!devlog) {
    notFound();
  }

  return (
    <article className="section section-devlog">
      <p className="eyebrow">Devlog Entry</p>
      <h1>{devlog.title}</h1>
      <p className="muted">
        {devlog.date} · {devlog.project}
      </p>
      <p>{devlog.summary}</p>
      <ul className="tags">
        {devlog.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
      <section className="prose" dangerouslySetInnerHTML={{ __html: devlog.contentHtml }} />
      <p>
        <Link href="/#devlogs" className="button">
          Back to Devlogs
        </Link>
      </p>
    </article>
  );
}
