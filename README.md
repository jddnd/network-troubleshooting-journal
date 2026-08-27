# Network Troubleshooting Journal

A visual fieldbook for documenting real network troubleshooting investigations: symptoms, fault domains, hypotheses, evidence, experiments, changes, outcomes, and engineering lessons.

The goal is not to publish command dumps or post-hoc fixes. Each case should show **how the root cause was approached and how conclusions changed as evidence improved**.

## Disciplines

The journal is organized by engineering discipline:

- **Routing**
- **Switching**
- **Firewall**
- **Wireless**
- **Identity**
- **PKI**

A case has one primary discipline but may span several secondary disciplines. Classification follows the engineering behavior being investigated rather than the vendor or appliance implementing it.

Example: SD-WAN is primarily a **Routing** discipline even when implemented on a firewall platform.

## Documentation model

The journal is HTML-first:

- **HTML tells the investigation** — visual hierarchy, diagrams, timelines, evidence, before/after states and interactions.
- **JSON describes the investigation** — discipline, platform, aspect, mechanisms, status and searchable metadata.
- **CSS / SVG make the reasoning visible** — shared visual language and case-specific diagrams.
- **Markdown remains for repository-level notes and contributor guidance**, not as the canonical public case format.

Each case should explicitly answer:

1. What **discipline** was exercised?
2. What **platform** was being investigated?
3. What **aspect** of that platform or technology was being troubleshot?
4. Which **mechanisms / protocols** were involved?
5. What **symptom** triggered the investigation?
6. What evidence changed the hypothesis?
7. What was ruled out, supported, confirmed or left open?
8. What controlled change was made and how will it be verified?

## Case method

Every investigation should preserve the troubleshooting sequence:

**Observation → fault-domain isolation → hypotheses → evidence → falsification → controlled experiment → verification → outcome → lessons**

Cases should distinguish clearly between:

- what was observed,
- what was inferred,
- what was ruled out,
- what remained unproven,
- what changed,
- and what evidence justified the change.

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

## First case

**NTJ-001 — Melbourne Office Wi-Fi Call Drops**

- Discipline: Wireless
- Platform: Cisco Catalyst 9800 / CW9176I
- Primary aspect: Client Roaming
- Secondary aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Secondary disciplines: Identity, PKI
- Status: Monitoring after a controlled 5 GHz RF power change

Open `cases/wireless/001-melbourne/index.html` to view the visual case.

## Publication rule

Raw internal evidence stays private. Anything intended for a public website must be sanitized first. Remove or generalize company names, usernames, internal hostnames, IP addresses, MAC addresses, certificate details, secrets, and other identifying infrastructure data unless there is a deliberate reason to publish them.
