import Link from "next/link";

export default function SectionRelocated({
  title,
  sectionId
}: {
  title: string;
  sectionId: string;
}) {
  return (
    <section className="section section-legacy">
      <h1>{title} moved</h1>
      <p className="muted">This content is now part of the single-page portfolio layout.</p>
      <p>
        <Link href={`/#${sectionId}`} className="button">
          Go to {title} section
        </Link>
      </p>
    </section>
  );
}
