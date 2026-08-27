# Classification Standard

## Purpose

The journal uses three independent classification dimensions:

1. **Discipline** — the network engineering domain.
2. **Aspect** — the function, protocol, subsystem, or behavior being investigated.
3. **Platform** — the vendor product, operating system, or implementation on which the aspect is configured or observed.

The three dimensions must not be mixed.

> **Classify by the engineering problem, not by the vendor appliance running the feature.**

A platform may implement several disciplines. A discipline may be implemented by many platforms. An aspect may occur on many platforms.

---

## 1. Discipline taxonomy

### Routing

Layer 3 forwarding, path selection, WAN, and overlay behavior.

Typical aspects:

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
  - Segmentation
  - Control Plane / Data Plane
- Cloud Routing

Examples of platforms that may implement these aspects:

- Cisco IOS-XE routers
- Cisco Catalyst 8000 Edge Platforms
- Cisco SD-WAN
- FortiGate Secure SD-WAN
- Versa
- Azure networking
- AWS networking

**Important:** SD-WAN is primarily a Routing discipline even when implemented on a firewall appliance.

### Switching

Layer 2 forwarding, segmentation, loop prevention, and campus/data-center switching behavior.

Typical aspects:

- VLANs
- STP / RSTP / MST
- LACP
- Port Channels / EtherChannel
- Campus Switching
- Trunks
- Multicast
- Layer 2 Troubleshooting

Example platforms:

- Cisco Catalyst 9000
- Cisco Nexus
- Aruba CX

### Firewall

Stateful traffic inspection, policy enforcement, network security boundaries, and session handling.

Typical aspects:

- Security Policies
- NAT
- Stateful Inspection
- VPN / IPsec
- High Availability
- Segmentation
- Application Control
- Traffic Analysis
- Session Handling

Example platforms:

- FortiGate
- Cisco Secure Firewall / FTD
- Cisco ASA
- Palo Alto Networks firewalls

### Wireless

802.11 operation, RF, association, roaming, and WLAN behavior.

Typical aspects:

- RF
- RF Cell Sizing
- Roaming
- 802.11r / 802.11k / 802.11v
- RRM / TPC
- 5 GHz / 6 GHz
- WLAN Security
- Client Troubleshooting
- Interference
- Channel Planning

Example platforms:

- Cisco Catalyst 9800
- Cisco CW9176I / CW916x
- Aruba Mobility / Central
- Juniper Mist
- Windows wireless clients

### Identity

Network access identity, AAA, access policy, and endpoint authorization.

Typical aspects:

- 802.1X
- RADIUS
- TACACS+
- NAC
- EAP
- Authorization
- Profiling
- Authentication Policy
- Authorization Policy

Example platforms:

- Cisco ISE
- Aruba ClearPass
- Microsoft NPS

### PKI

Trust, certificates, certificate validation, and certificate lifecycle.

Typical aspects:

- Certificates
- Certificate Authorities
- EAP-TLS
- SCEP / EST
- CRL / OCSP
- Certificate Lifecycle
- Chain Validation
- Certificate Troubleshooting

Example platforms:

- Microsoft AD CS
- Microsoft Intune certificate services
- Cisco ISE certificate services
- Public / private certificate authorities

---

## 2. Aspect rules

An aspect describes **what technical behavior is being investigated**.

Examples:

- `SD-WAN Path Selection`
- `BGP Route Selection`
- `NAT Session Handling`
- `Client Roaming`
- `RRM / TPC`
- `802.1X Authentication`
- `Certificate Chain Validation`

Do not use a vendor product as an aspect.

Incorrect:

- `Cisco ISE` as an Identity aspect
- `FortiGate` as a Firewall aspect
- `Cisco SD-WAN` as a Routing aspect

Correct:

- Discipline: `Identity`; Aspect: `802.1X Authorization`; Platform: `Cisco ISE`
- Discipline: `Firewall`; Aspect: `NAT`; Platform: `FortiGate`
- Discipline: `Routing`; Aspect: `SD-WAN Path Selection`; Platform: `Cisco SD-WAN`

---

## 3. Platform rules

A platform describes **where the aspect is implemented, configured, measured, or observed**.

A platform can be:

- network operating system
- appliance / controller family
- cloud networking service
- endpoint operating system
- authentication / PKI product

Examples:

- Cisco Catalyst 9800
- Cisco IOS-XE
- Cisco SD-WAN
- FortiGate
- Cisco ISE
- Windows 11
- Intel AX211
- Microsoft AD CS

A platform does not determine the discipline.

---

## 4. Cross-discipline classification

Each troubleshooting document has one primary discipline, one primary aspect, and one primary platform. Supporting values may also be recorded.

Example — FortiGate SD-WAN path-selection issue:

```text
Discipline: Routing
Primary Aspect: SD-WAN Path Selection
Primary Platform: FortiGate
Secondary Discipline: Firewall
Supporting Aspects: SLA / Performance Routing, IPsec
```

Example — FortiGate NAT issue:

```text
Discipline: Firewall
Primary Aspect: NAT / Session Handling
Primary Platform: FortiGate
```

Example — Cisco ISE certificate validation issue:

```text
Discipline: PKI
Primary Aspect: Certificate Chain Validation
Primary Platform: Cisco ISE
Secondary Discipline: Identity
```

---

## 5. NTJ-001 classification

The Melbourne troubleshooting record is classified as:

```text
Discipline: Wireless
Primary Aspect: Client Roaming
Primary Platform: Cisco Catalyst 9800 / CW9176I

Secondary Aspects:
- RF Cell Sizing
- RRM / TPC
- Fast Transition (802.11r)

Secondary Disciplines:
- Identity
- PKI

Supporting Platforms:
- Cisco ISE
- Windows 11
- Intel AX211
```

This keeps the troubleshooting record aligned with traditional network documentation while still allowing cross-domain evidence to be recorded.
