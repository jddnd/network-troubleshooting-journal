# Website Plan

## Purpose

Turn the journal into a visual technical fieldbook that makes network troubleshooting knowledge easy to browse, understand and study.

The website should feel like an engineering knowledge map and investigation console, not a personal blog and not a conventional case-list documentation portal.

## Source of truth

The canonical investigation format is **HTML**.

Structured metadata is stored in **JSON** so investigations remain searchable and machine-readable independently of presentation.

Shared CSS and lightweight JavaScript provide a consistent visual system and optional interactions. SVG is preferred for topology, reasoning-flow and before/after diagrams that belong to the investigation itself.

Repository-level notes can remain Markdown.

## Primary information architecture

The center of the documentation is not the case library. It is three independent knowledge dimensions:

1. **Discipline** — what engineering domain is being exercised?
2. **Aspect** — what specific behavior, subsystem or technical function is being investigated?
3. **Platform** — where is that behavior implemented and observed?

Every investigation exists at an intersection:

**Discipline × Aspect × Platform**

### Discipline

Current top-level disciplines:

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

A discipline is determined by the engineering behavior being investigated, not by the vendor or appliance implementing it.

### Aspect

Aspects describe the precise technical subject being troubleshot. Examples:

- Client Roaming
- RF Cell Sizing
- RRM / TPC
- Fast Transition
- BGP Path Selection
- Route Redistribution
- STP Convergence
- NAT / Session Handling
- 802.1X Authentication
- Certificate Validation

Aspects can recur across multiple platforms.

### Platform

Platforms describe implementation context. Examples:

- Cisco Catalyst 9800
- Cisco IOS-XE
- Cisco ISE
- FortiGate
- Windows 11
- Microsoft AD CS

Platforms can appear across several disciplines and aspects.

## Role of investigations

Cases / investigations are worked examples beneath the three-dimensional knowledge model. They should not dominate the site's information architecture.

An investigation should show how a real problem was approached at one specific intersection, then preserve:

- problem and impact
- fault domains
- visual reasoning path
- evidence with expandable raw snippets
- hypothesis register with state
- topology / RF / packet / flow visualizations where useful
- controlled experiments with before/after state
- current root-cause confidence
- verification plan
- engineering lessons

A reader should be able to enter the journal from any of the three dimensions and discover relevant investigations.

## First implementation

NTJ-001 is classified as:

- Discipline: Wireless
- Primary aspect: Client Roaming
- Secondary aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Platform: Cisco Catalyst 9800 / CW9176I
- Supporting platforms: Cisco ISE, Windows 11 / Intel AX211
- Supporting disciplines: Identity, PKI

The homepage should therefore present NTJ-001 as one example of:

**Wireless × Client Roaming × Cisco Catalyst 9800**

rather than making "Melbourne Wi-Fi Call Drops" the primary organizing concept.

## Technical direction

V1 intentionally uses plain static web primitives:

- semantic HTML
- shared CSS
- lightweight JavaScript
- inline or local SVG
- JSON metadata
- GitHub as source of truth

No static-site framework is required for the first version. A framework can be introduced later if it materially improves search, indexing or generation without making the investigation format dependent on it.

## Public/private boundary

Working investigations may contain sensitive operational context and must not be assumed publishable simply because an HTML page exists.

`data/cases.json` carries a `publicReady` flag. Public deployment should publish only sanitized investigations intended for external viewing.

Before public release remove or generalize company/customer names, usernames, internal hostnames, internal IP addresses, endpoint MAC addresses, certificate details, secrets and identifying screenshots/logs unless intentionally disclosed.

## Future capabilities

- dedicated Discipline pages
- dedicated Aspect pages
- dedicated Platform pages
- cross-filtering across all three dimensions
- full-text search
- mechanism / protocol tags such as `802.11r`, `BGP`, `IPsec`, `EAP-TLS`
- richer topology diagrams
- packet-flow visualizations
- evidence provenance
- case-series grouping for recurring problems
- export / print views
- dark mode
- automatic indexes generated from `data/cases.json`
