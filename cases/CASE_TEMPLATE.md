---
title: "Case title"
case_id: "000"
status: "investigating"
primary_domain: "wireless"
domains:
  - wireless
topics:
  - example-topic
vendors: []
products: []
first_observed: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
public_ready: false
---

# Case 000 — Case title

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
