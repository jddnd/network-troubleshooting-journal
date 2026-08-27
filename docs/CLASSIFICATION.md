# Classification

The journal is organized around **engineering disciplines**, not vendor product families.

## Primary domains

### Routing
Use for Layer 3 path selection and WAN/overlay behavior.

Typical topics:
- BGP
- OSPF
- Static routing
- VRF
- Route redistribution
- Route leaking
- MPLS
- WAN
- SD-WAN
- Underlay / overlay
- SLA / performance routing
- Cloud routing

### Switching
Use for Layer 2 forwarding and campus/data-center switching behavior.

Typical topics:
- VLANs
- Trunks
- STP / RSTP / MST
- LACP
- Port channels
- Campus switching
- Multicast
- Layer 2 loops

### Firewall
Use for stateful security enforcement and traffic-policy behavior.

Typical topics:
- Security policies
- NAT
- Stateful inspection
- IPsec / VPN
- HA
- Segmentation
- Application control
- Session tables
- Traffic analysis

### Wireless
Use for 802.11, RF, association, roaming, and WLAN behavior.

Typical topics:
- RF
- Cell sizing
- Roaming
- 802.11r / k / v
- RRM / TPC
- 5 GHz / 6 GHz
- WLAN security
- Client troubleshooting
- Interference
- Channel planning

### Identity
Use for network access identity, policy, and AAA.

Typical topics:
- Cisco ISE
- 802.1X
- RADIUS
- TACACS+
- NAC
- EAP
- Authorization
- Profiling

### PKI
Use for trust, certificates, and certificate lifecycle.

Typical topics:
- Certificates
- Certificate authorities
- EAP-TLS
- SCEP / EST
- CRL / OCSP
- Certificate lifecycle
- Chain validation
- Certificate troubleshooting

## Classification rule

Choose the primary domain by asking:

> **What engineering behavior are we actually troubleshooting?**

Do not classify by the box that happens to implement the feature.

Examples:

- Cisco SD-WAN edge routing problem → **Routing**
- FortiGate SD-WAN path-selection problem → **Routing** primary, **Firewall** secondary
- FortiGate NAT/session problem → **Firewall**
- Wi-Fi EAP-TLS authentication failure → **Wireless** primary if the failure is association/roaming related; **Identity** or **PKI** primary if the evidence points to AAA or certificate validation

## Multi-domain cases

Each case should have exactly one `primary_domain`, but may include multiple `domains` and `topics`.

Example:

```yaml
primary_domain: wireless
domains:
  - wireless
  - identity
  - pki
topics:
  - roaming
  - 802.11r
  - rrm
  - tpc
  - eap-tls
```

This keeps navigation simple while preserving the fact that real incidents often cross fault domains.
