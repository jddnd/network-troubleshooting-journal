# Network Troubleshooting Journal

Traditional network troubleshooting documentation organized by **Discipline**, **Aspect**, and **Platform**.

The repository records technical investigations in a format similar to normal network engineering documentation: document control, scope, environment, relevant configuration, symptoms, evidence, findings, hypothesis status, changes, verification, assessment, outstanding actions, and CLI appendices.

## Classification model

Every troubleshooting document is indexed using three independent dimensions.

### 1. Discipline

The engineering domain:

- **Routing**
- **Switching**
- **Firewall**
- **Wireless**
- **Identity**
- **PKI**

### 2. Aspect

The specific technical function or behavior being investigated.

Examples:

- BGP Path Selection
- SD-WAN Path Selection
- STP Convergence
- NAT / Session Handling
- Client Roaming
- RF Cell Sizing
- RRM / TPC
- 802.1X Authentication
- Certificate Chain Validation

### 3. Platform

The implementation on which the aspect is configured or observed.

Examples:

- Cisco IOS-XE
- Cisco SD-WAN
- Cisco Catalyst 9800
- FortiGate
- Cisco ISE
- Windows 11
- Microsoft AD CS

## Classification principle

> **Classify by the engineering problem, not by the vendor appliance running the feature.**

For example:

- SD-WAN path selection on a FortiGate → **Routing / SD-WAN Path Selection / FortiGate**
- NAT issue on a FortiGate → **Firewall / NAT / FortiGate**
- 802.1X authorization issue on Cisco ISE → **Identity / 802.1X Authorization / Cisco ISE**
- Certificate-chain issue on Cisco ISE → **PKI / Certificate Chain Validation / Cisco ISE**

Vendor products therefore belong under **Platform**, not under Discipline or Aspect.

See [`docs/CLASSIFICATION.md`](docs/CLASSIFICATION.md) for the detailed taxonomy.

## Troubleshooting document format

The public troubleshooting record is HTML so it can use tables, collapsible CLI evidence, diagrams, and other technical presentation features while still behaving like traditional documentation.

A standard record contains:

1. Document Control
2. Scope
3. Environment
4. Relevant Configuration
5. Reported Symptoms
6. Evidence Summary
7. Technical Findings
8. Hypothesis Status
9. Change Record
10. Verification
11. Current Technical Assessment
12. Outstanding Actions
13. Appendices / Raw Evidence

HTML is used for the document itself. JSON is used for indexing and metadata. Markdown is used for repository guidance and standards.

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
    ├── CLASSIFICATION.md
    └── WEBSITE_PLAN.md
```

## NTJ-001

**Melbourne Office Wi-Fi Call Drops**

```text
Discipline: Wireless
Primary Aspect: Client Roaming
Primary Platform: Cisco Catalyst 9800 / CW9176I
Status: Monitoring
```

Secondary aspects include RF Cell Sizing, RRM/TPC, and Fast Transition. Identity and PKI are supporting disciplines because Cisco ISE and EAP-TLS were investigated as possible fault domains.

## Publication rule

Troubleshooting records intended for the public site must be sanitized. Remove or generalize company names, usernames, internal hostnames, internal IP addresses, endpoint MAC addresses, certificate details, secrets, and other identifying infrastructure data unless intentionally published.
