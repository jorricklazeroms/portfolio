---
title: "WordPress Theme Demo v0.1: delivery focus"
date: "2026-02-07"
project: "Web Delivery Stack"
summary: "WordPress-theme demo expliciet gemaakt als volwaardige delivery-route naast static en React."
tags: ["wordpress", "php", "theme", "delivery", "quality-gates"]
---
## Problem
We moesten aantonen dat het team naast React ook een WordPress delivery-pad beheerst met reproduceerbare local run en kwaliteitsgates.

## Constraints
- Demo moest lokaal reproduceerbaar zijn met Docker Compose.
- Theme-opzet moest eenvoudig uitlegbaar blijven.
- Minimaal een quality gate voor PHP/CSS moest documenteerbaar en CI-klaar zijn.

## Solution
We hebben de WordPress Theme Demo gepositioneerd als expliciete subtrack in het portfolio, inclusief repository-link en context over het doel van de theme-architectuur.

## Architecture
- WordPress setup via `docker-compose.yml` in de demo-repo.
- Custom theme templates in `theme/*.php` en `theme/style.css`.
- Integratie in portfolio als subproject onder Web Delivery Stack.

## Collaboration Model
- Technical Owner: Wesley
- Supporting Engineer: Jorrick
- Reviewer: Wesley
- QA Owner: Jorrick

## Testing and Quality Gates
- WordPress gates: `php -l` en/of stylelint/PHPCS (in CI op te nemen).
- Projectbrede gates: `npm run lint`, `npm test`, `npm run build` voor portfolio-contentintegratie.
- CI-doel: kwaliteit en reproduceerbaarheid afdwingen voor theme-wijzigingen.

## Next Steps
- CI-workflow toevoegen voor theme linting en PHP-syntax-check.
- README in demo-repo uitbreiden met runbook + troubleshooting.
- Extra template-varianten tonen voor realistische klantcases.

## Links
- Portfolio project: [web-delivery-stack](../portfolio)
- Repo: [wp-theme-demo](../wp-theme-demo)
