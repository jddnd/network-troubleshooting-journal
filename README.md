# Network Troubleshooting Journal

A structured fieldbook for documenting real network troubleshooting investigations: symptoms, fault domains, hypotheses, evidence, experiments, changes, outcomes, and engineering lessons.

The goal is not to publish command dumps or post-hoc fixes. Each case should show **how the root cause was approached and how conclusions changed as evidence improved**.

## Domains

The journal is organized by engineering discipline:

- **Routing**
- **Switching**
- **Firewall**
- **Wireless**
- **Identity**
- **PKI**

A case has one primary domain but may span several secondary domains. Classification follows the engineering problem rather than the vendor or appliance implementing it.

Example: SD-WAN is primarily a **Routing** discipline even when implemented on a firewall platform. A FortiGate SD-WAN case can therefore be `routing` first and `firewall` second.

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

See [`cases/CASE_TEMPLATE.md`](cases/CASE_TEMPLATE.md).

## Repository structure

```text
network-troubleshooting-journal/
├── README.md
├── docs/
│   ├── CLASSIFICATION.md
│   └── WEBSITE_PLAN.md
└── cases/
    ├── CASE_TEMPLATE.md
    ├── routing/
    ├── switching/
    ├── firewall/
    ├── wireless/
    ├── identity/
    └── pki/
```

## Publication rule

Raw internal evidence stays private. Anything intended for a public website must be sanitized first. Remove or generalize company names, usernames, internal hostnames, IP addresses, MAC addresses, certificate details, secrets, and other identifying infrastructure data unless there is a deliberate reason to publish them.

## Website direction

The repository will act as the source of truth. A documentation-style website can render the Markdown cases with domain navigation, topic tags, status, and a visual troubleshooting timeline. The initial direction is documented in [`docs/WEBSITE_PLAN.md`](docs/WEBSITE_PLAN.md).
