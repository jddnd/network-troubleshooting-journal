# Network Troubleshooting Journal

A visual fieldbook for documenting real network troubleshooting investigations: symptoms, fault domains, hypotheses, evidence, experiments, changes, outcomes, and engineering lessons.

The goal is not to publish command dumps or post-hoc fixes. The journal is organized around three primary dimensions, with cases acting as worked examples that connect them.

## The three primary dimensions

### 1. Discipline

What engineering domain is being exercised?

- **Routing**
- **Switching**
- **Firewall**
- **Wireless**
- **Identity**
- **PKI**

Classification follows the engineering behavior being investigated rather than the vendor or appliance implementing it.

Example: SD-WAN is primarily a **Routing** discipline even when implemented on a firewall platform.

### 2. Aspect

What specific behavior, subsystem or technical function is being investigated?

Examples include:

- Client Roaming
- RF Cell Sizing
- RRM / TPC
- Fast Transition
- BGP Path Selection
- NAT / Session Handling
- 802.1X Authentication
- Certificate Validation

The aspect is where the troubleshooting knowledge becomes precise.

### 3. Platform

Where is the behavior implemented and observed?

Examples include:

- Cisco Catalyst 9800
- Cisco IOS-XE
- Cisco ISE
- FortiGate
- Windows 11
- Microsoft AD CS

A platform does not define the discipline. It is the implementation context in which the aspect is being investigated.

## How cases fit

A case is a worked investigation at the intersection of the three primary dimensions:

**Discipline × Aspect × Platform**

Example:

**Wireless × Client Roaming × Cisco Catalyst 9800**

Cases then preserve the reasoning path:

**Observation → fault-domain isolation → hypotheses → evidence → falsification → controlled experiment → verification → outcome → lessons**

## Documentation model

The journal is HTML-first:

- **HTML tells the investigation** — visual hierarchy, diagrams, timelines, evidence, before/after states and interactions.
- **JSON describes the investigation** — discipline, aspect, platform, mechanisms, status and searchable metadata.
- **CSS / SVG make the reasoning visible** — shared visual language and case-specific diagrams.
- **Markdown remains for repository-level notes and contributor guidance**, not as the canonical public case format.

Each case should explicitly answer:

1. What **discipline** was exercised?
2. What **aspect** was being investigated?
3. What **platform** implemented that behavior?
4. Which **mechanisms / protocols** were involved?
5. What **symptom** triggered the investigation?
6. What evidence changed the hypothesis?
7. What was ruled out, supported, confirmed or left open?
8. What controlled change was made and how will it be verified?

## Repository structure

```text
network-troubleshooting-journal/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── journal.css
│   └── js/
│       └── case.js
├── data/
│   └── cases.json
├── cases/
│   ├── routing/
│   ├── switching/
│   ├── firewall/
│   ├── wireless/
│   │   └── 001-melbourne/
│   │       └── index.html
│   ├── identity/
│   └── pki/
└── docs/
```

## First worked investigation

**NTJ-001 — Melbourne Office Wi-Fi Call Drops**

- Discipline: Wireless
- Primary aspect: Client Roaming
- Secondary aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Platform: Cisco Catalyst 9800 / CW9176I
- Secondary disciplines: Identity, PKI
- Status: Monitoring after a controlled 5 GHz RF power change

The case is evidence inside the taxonomy, not the center of the taxonomy.

## Publication rule

Raw internal evidence stays private. Anything intended for a public website must be sanitized first. Remove or generalize company names, usernames, internal hostnames, IP addresses, MAC addresses, certificate details, secrets, and other identifying infrastructure data unless there is a deliberate reason to publish them.
