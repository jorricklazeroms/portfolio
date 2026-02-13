# portfolio

[![CI](https://github.com/jorrick/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/jorrick/portfolio/actions/workflows/ci.yml)

DUO-portfolio in Next.js (App Router) voor Jorrick + Wesley, met expliciete rolverdeling per project, accountability matrix en gekoppelde devlogs.

## Pages
- `/`
- `/projects`
- `/projects/[slug]`
- `/devlog/[slug]`
- `/team-model`
- `/people/jorrick`
- `/people/wesley`
- `/about`
- `/contact`

## Setup
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run lint
npm test
npm run build
```

## Content model
- Projectdata: `content/projects.json`
- Devlogs: `content/devlog/*.md`

Verplichte projectcards in de grid:
- Nova Notes
- Nova Orchestrator
- Content Pipeline
- Web Delivery Stack
- Portfolio

## Deploy
Vercel (aanbevolen):
1. Koppel deze map als project.
2. Build command: `npm run build`
3. Output: standaard Next.js output
4. Zet environment vars alleen indien nodig (nu geen verplicht).
