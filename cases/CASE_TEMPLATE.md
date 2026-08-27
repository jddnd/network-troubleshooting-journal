---
title: "Case title"
case_id: "000"
status: "investigating"

# What engineering discipline owns the problem?
discipline: "wireless"
secondary_disciplines: []

# What platform is being investigated?
primary_platform:
  vendor: "Cisco"
  family: "Catalyst 9800"
  components: []
supporting_platforms: []

# What part of the platform/technology is under investigation?
aspect:
  primary: "client-roaming"
  secondary: []

# Protocols, features, mechanisms, or standards encountered in the case.
mechanisms: []

# User-visible or service-visible trigger for the investigation.
symptoms: []

first_observed: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
public_ready: false
---

# Case 000 — Case title

## Case classification

| Dimension | Classification |
|---|---|
| Discipline | Wireless |
| Primary platform | Cisco Catalyst 9800 |
| Primary aspect | Client roaming |
| Secondary aspects | — |
| Mechanisms | — |
| Secondary disciplines | — |

The classification answers three different questions:

1. **Discipline** — what engineering domain owns the problem?
2. **Platform** — what system or product is being investigated?
3. **Aspect** — what behavior, subsystem, or capability of that platform is under investigation?

Mechanisms such as BGP, 802.11r, EAP-TLS, IPsec, STP, or OCSP describe *how* the relevant aspect works. They are not substitutes for the aspect itself.

## Problem statement

Describe what the user or monitoring system actually reported. Keep symptoms separate from assumptions about cause.

## Environment

Document only the infrastructure relevant to the fault domain.

## Impact

What did the user or service experience? What was the business/operational effect?

## Fault domains

List the plausible layers before deep investigation.

- Client
- Access / edge
- Transport
- Control plane
- Authentication / identity
- Application

Adapt this list to the case.

## Timeline

| Time | Observation / action | Meaning at the time |
|---|---|---|
| | | |

## Evidence

### Evidence 1 — source

```text
Sanitized command output, event, packet detail, metric, or log excerpt.
```

**What it proves:**

**What it does not prove:**

## Hypotheses

| Hypothesis | Why it was plausible | Test / evidence | State |
|---|---|---|---|
| | | | Open / Supported / Ruled out |

Do not delete hypotheses after they are disproved. The reasoning path is part of the case.

## Controlled experiments

### Experiment 1

**Hypothesis being tested:**

**Single variable changed:**

**Before:**

**After:**

**Rollback:**

**Expected signal:**

**Observed signal:**

## Root cause

Use one of these states until evidence is sufficient:

- `Unconfirmed`
- `Probable`
- `Confirmed`

State the root cause in one or two sentences and cite the evidence chain that supports it.

## Resolution

Document the actual fix, not every attempted change.

## Verification

Describe how the resolution was proven: before/after counters, traces, user experience, packet flow, convergence behavior, etc.

## What was ruled out

Capture important false leads and why they were rejected.

## Engineering lessons

Focus on reusable lessons rather than product-specific commands.

## Follow-up

- Monitoring still required
- Long-term design improvement
- Documentation or automation opportunity

## Publication sanitization

Before setting `public_ready: true`, verify that the case does not expose:

- company/customer names unless intentionally public
- usernames or personal information
- internal hostnames
- internal addressing
- MAC addresses tied to real endpoints
- certificate subjects/serials
- secrets, tokens, keys, or credentials
- screenshots/logs containing identifying metadata
