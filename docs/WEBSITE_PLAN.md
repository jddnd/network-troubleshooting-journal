# Website Plan

## Purpose

Publish a network engineering field-note site for troubleshooting, lab work, feature validation, migrations, comparisons and technical experiments.

The site should feel like an experienced network engineer's technical blog / notebook: practical, command-heavy, easy to scan, and useful to revisit later. It should not read like a corporate incident report or a narrative case-study product.

## Primary information architecture

The center of the site remains three independent dimensions:

1. **Discipline** — which networking domain?
2. **Aspect** — what behavior or function is being examined?
3. **Platform** — where is it implemented or observed?

Field notes sit underneath these dimensions and may be discovered from any of them.

### Disciplines

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

Classify by the engineering problem, not the vendor appliance implementing the feature.

### Aspects

Examples:

- BGP Path Selection
- Route Redistribution
- SD-WAN Path Selection
- STP Convergence
- NAT / Session Handling
- Client Roaming
- RF Cell Sizing
- RRM / TPC
- Fast Transition
- 802.1X Authentication
- Certificate Validation

### Platforms

Examples:

- Cisco IOS-XE
- Cisco Catalyst 9800
- Cisco ISE
- FortiGate
- Windows 11
- Microsoft AD CS

A platform can appear in several disciplines and aspects.

## Entry style

Entries should resemble normal network-engineering blogs and lab notes. Use the sections that fit the subject rather than forcing every note into an incident template.

Recommended structure:

- Context
- Environment
- What I wanted to understand
- What I checked
- What I observed
- What I tried
- Result so far
- Notes / lessons
- Next checks
- Commands used

Other valid entry types include:

- feature deep dives
- lab experiments
- troubleshooting notes
- migration notes
- validation posts
- platform comparisons
- protocol behavior notes

A field note does not need a final root cause. It may document an experiment, unexpected platform behavior, a useful command sequence, a design choice, or a test that ruled something out.

## First field note

**Investigating Client Roaming and RF Overlap on Cisco Catalyst 9800**

Classification:

- Discipline: Wireless
- Primary aspect: Client Roaming
- Other aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Platform: Cisco Catalyst 9800 / CW9176I
- Supporting systems: Cisco ISE, Windows 11, Intel AX211

The entry records practical checks around RADIUS health, FT vs non-FT roaming, a matched AX211/driver comparison, AP-to-AP RSSI, and a controlled 5 GHz power test.

## Technical direction

V1 stays intentionally simple:

- semantic HTML for entries
- shared CSS
- lightweight JavaScript only where useful
- SVG / diagrams where they improve understanding
- JSON classification metadata
- GitHub as source of truth
- GitHub Pages for public hosting

No static-site framework is required until search, indexing or generation complexity justifies one.

## Public/private boundary

Field notes intended for the public site must be sanitized. Remove or generalize internal hostnames, internal IP addresses, usernames, endpoint MAC addresses, certificate details, secrets and identifying operational information unless intentionally disclosed.

## Future capabilities

- dedicated Discipline pages
- dedicated Aspect pages
- dedicated Platform pages
- cross-filtering across all three dimensions
- full-text search
- tags for protocols/mechanisms such as `BGP`, `802.11r`, `IPsec`, `EAP-TLS`
- diagrams and packet-flow visualizations
- code / CLI copy buttons
- related-note suggestions
- RSS feed
- print/export views
- automatic indexes generated from `data/cases.json`
