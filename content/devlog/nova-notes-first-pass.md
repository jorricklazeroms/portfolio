---
title: "Nova Notes v0.1: first pass"
date: "2026-02-10"
project: "Nova Notes"
summary: "CLI-basis staat, inclusief kerncommando's en eerste regressietests."
tags: ["python", "cli", "testing", "notes"]
---
## Problem
Het team had een snelle, lokale notitie-tool nodig met voorspelbare CLI-commando's en een basis voor uitbreidbare workflows.

## Constraints
- Scope moest klein blijven voor v0.1.
- CLI-contracten moesten stabiel genoeg zijn voor latere plugins.
- Kwaliteit moest aantoonbaar zijn met tests, niet alleen handmatige checks.

## Solution
We hebben de kernflow opgeleverd: notities maken, ophalen en filteren met consistente command-output. Daarbij hebben we de command-contracts aangescherpt zodat uitbreidingen minder regressierisico introduceren.

## Architecture
- Domeinlogica in `src/lib/notes.ts`.
- Markdown-helpers in `src/lib/markdown.ts`.
- Tests op command- en dataflow-niveau in `test/notes.test.ts` en `tests/test_smoke.py`.

## Collaboration Model
- Technical Owner: Jorrick
- Supporting Engineer: Wesley
- Reviewer: Jorrick
- QA Owner: Wesley

## Testing and Quality Gates
- TypeScript/Frontend gates: `npm run lint`, `npm test`, `npm run build`.
- Python gates: `pytest`, `ruff check`.
- CI-doel: gates verplicht groen voor merge.

## Next Steps
- Import/export-formats uitbreiden.
- Configurabele templates voor notities toevoegen.
- E2E-flow opnemen voor veelgebruikte commando-combinaties.

## Links
- Repo: [nova-notes](../nova-notes)
