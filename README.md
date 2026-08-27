# Network Engineering Field Notes

A public collection of practical notes from network troubleshooting, testing and validation.

The goal is not to write formal incident reports or narrative case studies. Entries should read like the technical blogs and lab notes network engineers commonly publish: **what I was trying to understand, the environment, what I checked, what I observed, what I tried, the result, and what I would test next**.

## Classification model

Every field note is indexed using three independent dimensions:

### Discipline
The networking domain the work belongs to:

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

Classification is based on the engineering problem, not the vendor appliance implementing it. For example, SD-WAN path selection belongs primarily under **Routing** whether it is implemented on Cisco SD-WAN or Fortinet Secure SD-WAN.

### Aspect
The specific technical behavior or function being examined.

Examples:

- BGP Path Selection
- SD-WAN Path Selection
- STP Convergence
- NAT / Session Handling
- Client Roaming
- RF Cell Sizing
- RRM / TPC
- 802.11r Fast Transition
- 802.1X Authentication
- EAP-TLS
- Certificate Validation

### Platform
The product or system on which the behavior is implemented or observed.

Examples:

- Cisco IOS-XE
- Cisco Catalyst 9800
- Cisco CW9176I
- Cisco ISE
- FortiGate
- Windows 11
- Intel AX211
- Microsoft AD CS

## Field note style

A typical entry should use this structure when relevant:

1. **Context** — what I was working on or what triggered the test
2. **Environment** — enough platform/configuration detail to understand the test
3. **What I wanted to understand** — the technical question
4. **What I checked** — commands, traces, counters, packet captures, logs or comparisons
5. **What I observed** — concrete technical results
6. **What I tried** — configuration change, lab test or controlled comparison
7. **Result so far** — what the evidence currently supports
8. **Notes / lessons** — reusable engineering observations
9. **Next checks** — what remains open
10. **Commands used** — useful CLI or tooling references

Not every note needs a final root cause. A useful entry may simply document how a feature behaves, a lab result, a migration gotcha, a comparison or an experiment.

## First field note

**Investigating Client Roaming and RF Overlap on Cisco Catalyst 9800**

- Discipline: Wireless
- Primary aspect: Client Roaming
- Other aspects: RF Cell Sizing, RRM/TPC, Fast Transition
- Platform: Cisco Catalyst 9800 / CW9176I
- Related systems: Cisco ISE, Windows 11, Intel AX211
- Status: Monitoring after a 5 GHz transmit-power test

## Publishing model

The public site is static HTML published through GitHub Pages. JSON keeps the classification metadata machine-readable, while HTML is used for the actual technical field notes so tables, CLI, diagrams and richer visualizations remain available.

Public entries must be sanitized before publication. Internal hostnames, IP addresses, usernames, MAC addresses, secrets, certificate details and identifying operational data should not be published unless deliberately intended.
