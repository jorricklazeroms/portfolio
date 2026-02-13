import Link from "next/link";
import { getLatestDevlogs } from "@/src/lib/devlog";
import { getProjects } from "@/src/lib/projects";

export default async function HomePage() {
  const projects = getProjects();
  const latestDevlogs = await getLatestDevlogs(5);

  return (
    <>
      <section id="hero" className="section section-hero">
        <p className="eyebrow">Duo Delivery Portfolio</p>
        <h1>Building fast, reliable products with clear ownership.</h1>
        <p className="lead">
          This portfolio is now section-based: projects, operating model, people, devlogs,
          and contact all live on one page for fast scanning.
        </p>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p className="muted">Expand any project for scope, roles, quality gates, and links.</p>
        </div>
        <div className="accordion-grid">
          {projects.map((project) => (
            <details key={project.slug} className="project-item">
              <summary>
                <span>{project.name}</span>
              </summary>
              <div className="project-content">
                <p>{project.short_summary}</p>

                <ul className="tags" aria-label={`${project.name} tags`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="role-grid">
                  <article className="role-card">
                    <h3>Jorrick</h3>
                    <p>{project.roles.jorrick}</p>
                  </article>
                  <article className="role-card">
                    <h3>Wesley</h3>
                    <p>{project.roles.wesley}</p>
                  </article>
                </div>

                <div className="quality-gates">
                  <h3>Quality Gates</h3>
                  <ul>
                    {project.quality_gates.map((gate) => (
                      <li key={gate}>
                        <code>{gate}</code>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="muted">Screenshots are available on the repository page.</p>

                <p>
                  <a href={project.repo_url} className="button" target="_blank" rel="noreferrer">
                    Open Repository
                  </a>
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="team-model" className="section">
        <div className="section-head">
          <h2>Team Model</h2>
        </div>
        <div className="split-grid">
          <article className="card">
            <h3>How We Split Work</h3>
            <p>
              Ownership is explicit per project so architecture, QA, and release decisions
              always have a responsible lead.
            </p>
          </article>
          <article className="card">
            <h3>Release Discipline</h3>
            <p>
              Every delivery track uses pre-release quality gates before publish and logged
              devlog notes for traceability.
            </p>
          </article>
        </div>
      </section>

      <section id="people" className="section">
        <div className="section-head">
          <h2>People</h2>
        </div>
        <div className="split-grid">
          <article className="card">
            <h3>Jorrick</h3>
            <p>Architecture, reliability, TypeScript integration, and deployment strategy.</p>
            <p>
              <a href="https://github.com/jorricklazeroms" target="_blank" rel="noreferrer">
                github.com/jorricklazeroms
              </a>
            </p>
          </article>
          <article className="card">
            <h3>Wesley</h3>
            <p>QA ownership, delivery process, and WordPress implementation track.</p>
            <p>
              <a href="https://github.com/Wesley199712" target="_blank" rel="noreferrer">
                github.com/Wesley199712
              </a>
            </p>
          </article>
        </div>
      </section>

      <section id="devlogs" className="section">
        <div className="section-head">
          <h2>Devlogs</h2>
          <p className="muted">Latest 5 updates from shipped work.</p>
        </div>
        <div className="card-grid">
          {latestDevlogs.map((devlog) => (
            <article key={devlog.slug} className="card">
              <h3>
                <Link href={`/devlog/${devlog.slug}`}>{devlog.title}</Link>
              </h3>
              <p className="muted">
                {devlog.date} · {devlog.project}
              </p>
              <p>{devlog.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <h2>Contact</h2>
        </div>
        <div className="split-grid">
          <article className="card">
            <h3>Email</h3>
            <p>
              <a href="mailto:jorrick.lazeroms@gmail.com">jorrick.lazeroms@gmail.com</a>
            </p>
            <p>
              <a href="mailto:wvandervoort66@gmail.com">wvandervoort66@gmail.com</a>
            </p>
          </article>
          <article className="card">
            <h3>Collaboration</h3>
            <p>
              Open to scoped delivery work across static sites, React builds, WordPress themes,
              and Python tooling.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
