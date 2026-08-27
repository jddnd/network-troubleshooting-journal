---
title: "Melbourne Office Wi-Fi Call Drops"
case_id: "001"
status: "monitoring"
primary_domain: "wireless"
domains:
  - wireless
  - identity
  - pki
topics:
  - roaming
  - rf
  - cell-overlap
  - 802.11r
  - 802.11k
  - 802.11v
  - rrm
  - tpc
  - wpa3-enterprise
  - 802.1x
  - eap-tls
vendors:
  - Cisco
products:
  - Catalyst 9800
  - CW9176I
  - Cisco ISE
first_observed: "2026-08-19"
last_updated: "2026-08-27"
public_ready: false
---

# Case 001 — Melbourne Office Wi-Fi Call Drops

## Problem statement

Office users reported intermittent Wi-Fi interruptions during Microsoft Teams calls. The goal was to determine whether the fault was caused by RF, roaming, the wireless controller/AP path, authentication infrastructure, or the endpoint itself.

## Environment

- Cisco Catalyst 9800-CL wireless controller
- 3 × Cisco CW9176I access points
- FlexConnect with local switching and central authentication
- WPA3-Enterprise
- EAP-TLS / 802.1X
- 5 GHz and 6 GHz
- Cisco ISE
- Windows 11 clients with Intel AX211-class radios

## Impact

Users experienced brief interruptions that could present as Teams audio/video breakup or a perceived Wi-Fi disconnect.

## Fault domains considered

- Endpoint radio / driver / WLAN profile
- RF coverage and cell overlap
- 802.11 roaming behavior
- 802.11r Fast Transition
- AP / CAPWAP control path
- WLC policy and mobility behavior
- RADIUS / ISE
- PKI / EAP-TLS

## Investigation summary

The investigation progressively ruled out several plausible causes and exposed two distinct wireless behaviors:

1. Some clients negotiated 802.11r FT and completed fast roams in tens of milliseconds.
2. At least one otherwise similar client negotiated non-FT 802.1X-SHA256 and performed a full EAP-TLS exchange on each roam, causing much longer interruptions.

At the same time, both FT and non-FT clients showed frequent AP/BSSID movement, shifting the investigation toward excessive roaming and RF cell overlap.

## Key evidence

### RADIUS / ISE health

Long-running controller AAA counters showed:

```text
Authentication requests: >140,000
RADIUS timeouts: 0
Failovers: 0
Retransmissions: 0
Dot1x transactions: ~17,800
Dot1x failures: 2
```

**What it proves:** RADIUS/ISE availability and transport are extremely healthy over a long observation window.

**What it does not prove:** A client-side or RF failure can occur before a RADIUS request is ever generated, so healthy AAA counters do not clear the entire wireless path.

### FT-capable client

A Melbourne client was observed roaming with:

```text
Roaming = True
11r = True
Fast roam = True
AKM = FT-DOT1X
```

The datapath returned to a running state in roughly 20–40 ms during observed roams.

**Meaning:** FT infrastructure works in Melbourne. This ruled out a site-wide 802.11r advertisement or controller/AP implementation failure.

### Non-FT client

Another Melbourne client was observed roaming with:

```text
Roaming = True
11r = False
Fast roam = False
AKM = 802.1X-SHA256
```

It performed full 802.1X/EAP-TLS during roaming, with observed interruptions around 0.8–1.7 seconds.

**Meaning:** Some clients can associate to the same WLAN without using FT, making each roam significantly more expensive.

### Controlled endpoint comparison

A Copenhagen test endpoint from the same Lenovo Gen4 family, using an Intel AX211-class radio and the same Windows wireless driver version as the non-FT Melbourne endpoint, negotiated FT correctly.

**Meaning:** The laptop generation, AX211 hardware, and that driver version are not sufficient by themselves to explain the non-FT behavior.

### Excessive roaming

One non-FT client moved across three APs in roughly six seconds. An FT-capable client also showed repeated AP and BSSID transitions.

**Meaning:** The deeper common symptom was not merely expensive roaming; clients appeared to be roaming too frequently.

## RF findings

All three 5 GHz radios initially operated at:

```text
17 dBm
20 MHz channels
```

Auto-RF neighbor measurements showed very strong AP-to-AP reception, approximately:

```text
-41 dBm
-42 dBm
-49 dBm
-51 dBm
```

The 5 GHz RF profile had:

```text
Transmit Power Threshold: -70 dBm
Minimum Tx Power: 5 dBm
Maximum Tx Power: 17 dBm
```

All three APs were sitting at the configured 17 dBm maximum.

**Working interpretation:** the three-AP deployment had very large overlapping 5 GHz cells, creating many strong roam candidates and plausibly contributing to unnecessary roaming.

## Hypotheses

| Hypothesis | Evidence / test | State |
|---|---|---|
| ISE/RADIUS instability | Zero timeouts, failovers and retransmissions over long-running counters | Ruled out as primary cause |
| Two-hour session timer drives the issue | Live sessions showed 86400-second values; no current 7200-second authorization result identified | Ruled out / unsupported |
| FT is broken across Melbourne | Another Melbourne client performed genuine 11r fast roams | Ruled out |
| Intel AX211 / driver version cannot use FT | Same Gen4/AX211/driver combination used FT correctly in Copenhagen | Ruled out as sole cause |
| One client is not negotiating FT | WLC trace showed 11r=False / Fast roam=False and full DOT1X | Confirmed |
| Clients are roaming excessively | Multiple rapid AP/BSSID transitions captured | Supported |
| 5 GHz cells are oversized / strongly overlapping | AP-to-AP RSSI roughly -41 to -51 dBm while all radios sat at 17 dBm | Supported |
| Historical CAPWAP instability explains current drops | Historical AP disconnect reasons exist but no direct correlation to current client events | Unconfirmed |

## Controlled experiment — reduce 5 GHz cell size

**Hypothesis being tested:** Excessive 5 GHz overlap contributes to unnecessary roaming.

**Single variable changed:** 5 GHz maximum transmit power in the RF profile.

**Before:**

```text
5 GHz max Tx power: 17 dBm
AP01/AP02/AP03 actual: 17 dBm
```

**After:**

```text
5 GHz max Tx power: 14 dBm
AP01/AP02/AP03 actual after TPC convergence: 14 dBm
```

**Unchanged:**

- 6 GHz power/settings
- channel assignments
- channel width
- FT configuration
- WLAN security
- ISE policy
- client steering configuration

**Rollback:** restore the 5 GHz RF-profile maximum to 17 dBm.

**Expected signal:** lower roam frequency while preserving acceptable client RSSI/SNR and user experience.

## Current root-cause status

**Probable, not yet confirmed.**

The strongest current explanation is **excessive client roaming associated with very strong 5 GHz RF overlap, with user impact amplified on clients that negotiate non-FT roaming and therefore perform full EAP-TLS during transitions**.

The power reduction is an active controlled experiment. A confirmed root cause requires after-change evidence from real office usage.

## Verification plan

During active office hours compare against the pre-change baseline:

- roam count and frequency
- rapid AP/BSSID transitions
- FT vs non-FT roam behavior
- client RSSI and SNR, especially edge clients
- Teams call quality / user reports
- any new CAPWAP/AP control events correlated to complaints

## Engineering lessons

1. A successful RADIUS authentication does not prove roaming is healthy.
2. Repeated ISE authentication entries should not automatically be interpreted as hard disconnects.
3. 802.11r reduces the cost of a roam but does not solve excessive roaming itself.
4. A/B testing a matched client can eliminate driver or hardware assumptions quickly.
5. AP-to-AP RSSI is useful evidence for understanding RF cell overlap.
6. Keep observations separate from inference: a supplicant reporting that its authenticator disappeared does not by itself prove that the AP failed.
7. Change one wireless variable at a time and verify that RRM actually converged to the intended state.

## Follow-up

- Observe a normal Melbourne office period with the 14 dBm 5 GHz ceiling.
- Re-check the original affected endpoint when present in the office.
- Determine why the non-FT client selected the non-FT AKM while comparable clients negotiate FT.
- If roaming remains excessive, compare Melbourne-only steering features against a stable reference site before changing them.
- Keep historical CAPWAP instability as a separate fault-domain hypothesis unless timestamps correlate with new incidents.

## Publication note

This working case is intentionally marked `public_ready: false`. Before publication, verify that all infrastructure identifiers and organizational details are sufficiently generalized.
