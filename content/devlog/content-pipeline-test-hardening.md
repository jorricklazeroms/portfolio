---
title: "Mini Content Pipeline v0.1: test hardening"
date: "2026-02-08"
project: "Content Pipeline"
summary: "Testset uitgebreid met transformatie- en schemafoutscenario's voor stabielere builds."
tags: ["pipeline", "tests", "content", "python"]
---
## Problem
De pipeline werkte voor happy-path input, maar regressies rond schemafouten en transformatie-edge-cases waren te kwetsbaar.

## Constraints
- Tool moest lichtgewicht blijven.
- Invoercontracten moesten eenvoudig blijven voor redactiewerk.
- Testdekking moest omhoog zonder de buildtijd sterk te verhogen.

## Solution
We hebben gerichte regressietests toegevoegd voor foutpaden, schema-inconsistenties en output-validatie. Daarmee detecteren we defects eerder in de ontwikkelcyclus.

## Architecture
- CLI-entrypoint in `mini_content_pipeline/cli.py`.
- Pipeline-logica in `mini_content_pipeline/pipeline.py`.
- Testmix: `tests/test_pipeline.py` en `tests/test_smoke.py`.

## Collaboration Model
- Technical Owner: Jorrick
- Supporting Engineer: Wesley
- Reviewer: Jorrick
- QA Owner: Wesley

## Testing and Quality Gates
- Python gates: `pytest`, `ruff check`.
- Contractchecks op input/output schema's.
- CI-doel: regressietests verplicht groen bij elke wijziging.

## Next Steps
- Testdata uitbreiden met grotere contentsets.
- Rapportage verbeteren met helderdere foutcontext.
- Performance-baseline opnemen voor grotere batches.

## Links
- Repo: [mini-content-pipeline](../mini-content-pipeline)
