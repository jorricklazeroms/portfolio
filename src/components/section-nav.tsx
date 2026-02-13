"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "team-model", label: "Team Model" },
  { id: "people", label: "People" },
  { id: "devlogs", label: "Devlogs" },
  { id: "contact", label: "Contact" }
];

export default function SectionNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>("projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.35, 0.6]
      }
    );

    for (const target of targets) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [isHome]);

  return (
    <div className="nav-wrap">
      <button
        type="button"
        className="hamburger"
        aria-expanded={isMenuOpen}
        aria-controls="section-nav-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul
        id="section-nav-menu"
        className={isMenuOpen ? "nav nav-open" : "nav"}
        aria-label="Section navigation"
      >
        {sections.map((section) => {
          const href = isHome ? `#${section.id}` : `/#${section.id}`;
          const isActive = isHome && active === section.id;

          return (
            <li key={section.id}>
              <Link
                href={href}
                className={isActive ? "nav-link is-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
