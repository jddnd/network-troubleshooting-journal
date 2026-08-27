# Website Plan

## Purpose

Publish traditional network troubleshooting documentation in a clean, searchable web format.

The website should resemble a technical network documentation portal rather than a blog, narrative case study, or storytelling interface.

The primary navigation model is:

- **Discipline**
- **Aspect**
- **Platform**

Troubleshooting documents are indexed records beneath those categories.

## Source format

The canonical troubleshooting record is **HTML**.

HTML is used because network documentation often benefits from:

- structured tables
- configuration summaries
- collapsible CLI output
- diagrams
- topology images
- before/after configuration comparisons
- status indicators
- print-friendly layout

Structured metadata is stored in **JSON** for indexing, filtering, and future search.

Markdown remains suitable for repository standards and contributor guidance.

## Classification architecture

### Discipline

Top-level engineering domains:

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

### Aspect

The specific technical behavior or function being investigated.

Examples by discipline:

#### Routing
- BGP
- OSPF
- Static Routing
- VRF
- Route Redistribution
- Route Leaking
- MPLS
- WAN
- SD-WAN
- Underlay / Overlay
- Path Selection
- SLA / Performance Routing
- Cloud Routing

#### Switching
- VLANs
- STP / RSTP / MST
- LACP
- Port Channels
- Campus Switching
- Trunks
- Multicast
- Layer 2 Troubleshooting

#### Firewall
- Security Policies
- NAT
- Stateful Inspection
- VPN / IPsec
- HA
- Segmentation
- Application Control
- Traffic Analysis
- Session Handling

#### Wireless
- RF
- RF Cell Sizing
- Roaming
- 802.11r / k / v
- RRM / TPC
- 5 GHz / 6 GHz
- WLAN Security
- Client Troubleshooting

#### Identity
- 802.1X
- RADIUS
- TACACS+
- NAC
- EAP
- Authorization
- Profiling

#### PKI
- Certificates
- Certificate Authorities
- EAP-TLS
- SCEP / EST
- CRL / OCSP
- Certificate Lifecycle
- Chain Validation
- Certificate Troubleshooting

### Platform

Vendor products and implementation contexts are kept separate from Discipline and Aspect.

Examples:

- Cisco IOS-XE
- Cisco Catalyst 9800
- Cisco CW9176I
- Cisco SD-WAN
- Cisco ISE
- FortiGate
- Cisco Secure Firewall / FTD
- Windows 11
- Intel AX211
- Microsoft AD CS

The governing rule is:

> **Classify by the engineering problem, not by the vendor appliance running the feature.**

Example:

```text
Discipline: Routing
Aspect: SD-WAN Path Selection
Platform: FortiGate
```

not:

```text
Discipline: Firewall
Aspect: FortiGate SD-WAN
```

## Troubleshooting document structure

Every published record should use a conventional technical structure:

1. **Document Control**
   - document ID
   - title
   - status
   - discipline
   - aspect
   - platform
   - last updated

2. **Scope**
   - problem being investigated
   - included fault domains
   - exclusions where relevant

3. **Environment**
   - devices
   - software versions
   - topology role
   - authentication / security context

4. **Relevant Configuration**
   - only configuration material to the issue
   - tables preferred over prose

5. **Reported Symptoms**
   - user-visible or monitoring-visible behavior

6. **Evidence Summary**
   - logs
   - counters
   - traces
   - packet captures
   - RF measurements
   - endpoint evidence

7. **Technical Findings**
   - numbered findings
   - fact vs interpretation clearly separated

8. **Hypothesis Status**
   - confirmed
   - supported
   - ruled out
   - open

9. **Change Record**
   - parameter
   - before
   - after
   - reason
   - rollback where relevant

10. **Verification**
    - expected result
    - observed result
    - status

11. **Current Technical Assessment**
    - root-cause status
    - confidence level
    - unresolved boundaries

12. **Outstanding Actions**

13. **Appendices**
    - sanitized CLI
    - diagrams
    - packet-flow material
    - raw supporting evidence

## Website presentation

The website should use traditional documentation conventions:

- restrained visual design
- navigation / table of contents
- document-control tables
- configuration tables
- evidence tables
- numbered sections
- status labels
- monospace CLI blocks
- technical diagrams only where useful
- printable layout

Avoid:

- storytelling language
- narrative timelines as the primary structure
- oversized marketing-style headings
- card-heavy dashboard presentation
- treating the incident story as the main navigation concept

## Homepage

The homepage is a documentation index, not a case showcase.

It should provide:

1. Discipline index
2. Aspect index
3. Platform index
4. Troubleshooting document register

The document register should show columns such as:

- Document ID
- Title
- Discipline
- Primary Aspect
- Primary Platform
- Status

## NTJ-001

The first record is:

```text
Document: NTJ-001
Title: Melbourne Office Wi-Fi Call Drops
Discipline: Wireless
Primary Aspect: Client Roaming
Primary Platform: Cisco Catalyst 9800 / CW9176I
Secondary Aspects: RF Cell Sizing, RRM/TPC, Fast Transition
Supporting Disciplines: Identity, PKI
Status: Monitoring
```

## Technical implementation

V1 remains static:

- semantic HTML
- shared CSS
- lightweight JavaScript only where useful
- local / inline SVG when a technical diagram adds value
- JSON metadata
- GitHub Pages deployment

A static-site framework is not required unless the number of documents makes automated index generation materially useful.

## Public/private boundary

Public records must be sanitized before publication.

Remove or generalize:

- company/customer names where necessary
- usernames
- internal hostnames
- internal IP addresses
- MAC addresses
- certificate details
- secrets
- identifying screenshots or raw logs

The public site is documentation, not a raw operational evidence store.

## Future capabilities

- dedicated Discipline pages
- dedicated Aspect pages
- dedicated Platform pages
- cross-filtering across the three dimensions
- full-text search
- protocol tags such as BGP, IPsec, 802.11r, EAP-TLS
- print / PDF views
- topology diagrams
- packet-flow diagrams
- automatic indexes generated from `data/cases.json`
