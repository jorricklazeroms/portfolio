---
title: "Portfolio v0.1: app-router foundation"
date: "2026-02-11"
project: "Portfolio"
summary: "DUO-portfolio neergezet met expliciete ownership, accountability matrix en devlog-koppelingen."
tags: ["nextjs", "typescript", "app-router", "duo-collaboration"]
---
## Problem
We wilden een portfolio dat niet alleen projecten toont, maar ook teamverantwoordelijkheid en delivery-discipline zichtbaar maakt voor elke case.

## Constraints
- Vaste stack: Next.js App Router + TypeScript.
- Content moest in platte bestanden staan voor snelle iteratie.
- Rollen moesten consistent zijn over projectcards, detailpagina's en devlogs.

## Solution
We hebben een contentmodel opgezet met `content/projects.json` (roles + accountability) en `content/devlog/*.md` (context per release). Projectdetailpagina's linken direct naar de juiste devlog-entry.

## Architecture
- Routing: `app/projects/[slug]` en `app/devlog/[slug]`.
- Validatie: Zod-schema's in `src/lib/projects.ts` en `src/lib/devlog.ts`.
- Rendering: frontmatter + Markdown naar HTML via remark/rehype pipeline.

## Collaboration Model
- Technical Owner: Jorrick
- Supporting Engineer: Wesley
- Reviewer: Wesley
- QA Owner: Jorrick

## Testing and Quality Gates
- Frontend gates: `npm run lint`, `npm test`, `npm run build`.
- CI-doel: blokkeren op type/content-validatie en mislukte test/lint-stappen.
- Devlog-links worden gecontroleerd via statische routegeneratie op slug-niveau.

## Next Steps
- CI-badges tonen op home of about pagina.
- Accessibility audit toevoegen (focus states, headings, contrast).
- Snellere content review-flow toevoegen voor nieuwe devlogs.

## Links
- Repo: [portfolio](../portfolio)
