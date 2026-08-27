# Website Plan

## Purpose

Turn the Markdown journal into a clean technical fieldbook that makes troubleshooting reasoning easy to browse and study.

The website should feel like an engineering notebook, not a personal blog.

## Source of truth

GitHub Markdown remains authoritative. The website renders repository content rather than becoming a separate CMS.

## Information architecture

Primary navigation:

- Routing
- Switching
- Firewall
- Wireless
- Identity
- PKI

Secondary discovery:

- Topics / tags
- Vendors / products
- Case status
- Recently updated

## Case page structure

Each case page should surface:

1. Problem statement
2. Environment and impact
3. Fault domains
4. Troubleshooting timeline
5. Evidence
6. Hypotheses and their state
7. Controlled experiments
8. Root cause confidence
9. Resolution and verification
10. Engineering lessons

A visual reasoning timeline should make the investigation path obvious:

```text
Observation
   ↓
Hypothesis
   ↓
Evidence
   ↓
Supported / Ruled out
   ↓
Controlled change
   ↓
Verification
```

## Suggested stack

Initial recommendation:

- Astro
- Starlight for documentation/navigation primitives
- Markdown/MDX content
- GitHub as source of truth
- Netlify or GitHub Pages for deployment

The website layer should remain replaceable. Case content and metadata must not depend on a specific frontend framework.

## Public/private boundary

The repository may contain working notes that are not ready for publication. The frontend must only publish cases where frontmatter contains:

```yaml
public_ready: true
```

This creates an explicit sanitization gate before internal troubleshooting evidence becomes public.

## Future capabilities

- Full-text search
- Cross-domain case discovery
- Topic pages such as `802.11r`, `BGP`, `IPsec`, `EAP-TLS`
- Hypothesis status visualization
- Before/after comparison blocks
- Sanitized diagrams
- RSS feed / recent investigations
- Case-series grouping for recurring problems
