import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section section-legacy">
      <h1>Page not found</h1>
      <p className="muted">The page you requested does not exist.</p>
      <div className="link-row">
        <Link href="/">Home</Link>
        <Link href="/#projects">Projects</Link>
      </div>
    </section>
  );
}
