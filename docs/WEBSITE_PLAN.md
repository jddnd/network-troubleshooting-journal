# Website Plan

## Purpose

Turn the journal into a visual technical fieldbook that makes troubleshooting reasoning easy to browse, understand and study.

The website should feel like an engineering investigation console / fieldbook, not a personal blog and not a conventional documentation portal.

## Source of truth

The canonical case format is **HTML**.

Structured metadata is stored in **JSON** so cases remain searchable and machine-readable independently of presentation.

Shared CSS and lightweight JavaScript provide a consistent visual system and optional interactions. SVG is preferred for topology, reasoning-flow and before/after diagrams that belong to the case itself.

Repository-level notes can remain Markdown.

## Information architecture

Primary navigation:

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

Each case is classified across separate dimensions:

- discipline
- secondary disciplines
- platform
- primary aspect
- secondary aspects
- mechanisms / protocols
- symptoms
- case status
- root-cause confidence

The primary discipline is determined by the engineering behavior being investigated, not by every supporting technology encountered.

## Case page structure

Each case page should surface:

1. Classification: discipline → platform → aspect
2. Problem and impact
3. Fault domains
4. Visual reasoning path
5. Evidence with expandable raw snippets
6. Hypothesis register with state
7. RF / topology / packet / flow visualization where useful
8. Controlled experiment with before/after state
9. Current root-cause confidence
10. Verification plan
11. Engineering lessons

The page should expose the investigation at multiple depths:

- a reader should understand the case in about 30 seconds from the visual summary,
- a technical reader should be able to drill into supporting evidence,
- an agent should be able to parse structured metadata and semantic HTML.

## Technical direction

V1 intentionally uses plain static web primitives:

- semantic HTML
- shared CSS
- lightweight JavaScript
- inline or local SVG
- JSON metadata
- GitHub as source of truth

No static-site framework is required for the first version. A framework can be introduced later if it materially improves search, indexing or case generation without making the case format dependent on it.

## Public/private boundary

Working cases may contain sensitive operational context and must not be assumed publishable simply because an HTML page exists.

`data/cases.json` carries a `publicReady` flag. Public deployment must eventually filter on this metadata and publish only sanitized cases where:

```json
"publicReady": true
```

Before public release remove or generalize company/customer names, usernames, internal hostnames, internal IP addresses, endpoint MAC addresses, certificate details, secrets and identifying screenshots/logs unless intentionally disclosed.

## First implementation

NTJ-001 is the design reference:

- Discipline: Wireless
- Platform: Cisco Catalyst 9800 / CW9176I
- Primary aspect: Client Roaming
- Secondary aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Supporting disciplines: Identity, PKI

The case uses a reasoning flow, hypothesis-state visualization, expandable evidence, an SVG RF-overlap diagram, and a controlled before/after power experiment.

## Future capabilities

- full-text search
- filtering by discipline / platform / aspect / mechanism
- topic pages such as `802.11r`, `BGP`, `IPsec`, `EAP-TLS`
- richer topology diagrams
- packet-flow visualizations
- evidence provenance
- case-series grouping for recurring problems
- export / print views
- dark mode
- automatic case index generation from `data/cases.json`
- static deployment through Netlify, Vercel or GitHub Pages after the publication gate is enforced
