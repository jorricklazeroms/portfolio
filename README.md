# portfolio

[![CI](https://github.com/jorrick/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/jorrick/portfolio/actions/workflows/ci.yml)

DUO-portfolio in Next.js (App Router) voor Jorrick + Wesley, met expliciete rolverdeling per project, accountability matrix en gekoppelde devlogs.

## Routes
- `/` (single-page sections: hero, projects, team model, people, devlogs, contact)
- `/devlog/[slug]` (standalone devlog detail pages)

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

## GitHub Pages Deploy
This project is configured for static export to GitHub Pages at:
`https://jorricklazeroms.github.io/portfolio/`

1. In GitHub, open `Settings` → `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main`.
4. Open the `Actions` tab and wait for workflow `Deploy to GitHub Pages` to finish.
5. Open the live site at `https://jorricklazeroms.github.io/portfolio/`.

### Local verification
```bash
npm ci
npm run lint
npm test
npm run build
test -f out/index.html && echo "out/index.html exists"
```
