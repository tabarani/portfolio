---
title: "Identity Reconciliation & NamosaAPI"
card_tag: "Infrastructure • Identity"
status: "Production"
card_description: "A centralized REST API layer and OIDC Identity Provider for Gibbon SIS with federated identity reconciliation."
card_screenshot: /images/screenshot-6.png
placeholder_icon: "ID"
tech:
  - .NET
  - OpenID Connect
  - JWT
  - PHP
  - REST API
role: "Implemented the OIDC provider, claims enrichment, reconciliation workflow, deployment hardening, and audit-ready identity flow."
status_detail: "Production infrastructure"
modal_screenshots:
  - image: /images/modal-screenshot-6a.png
    label: "Identity Flow Architecture"
  - image: /images/modal-screenshot-6b.png
    label: "JWT Claim Enrichment"
  - image: /images/modal-screenshot-6c.png
    label: "Compliance Audit Logs"
metrics:
  - value: "5+"
    label: "Integrations"
  - value: "<100ms"
    label: "Token Latency"
  - value: "99.9%"
    label: "Uptime"
sections:
  - title: "Overview"
    text: "A centralized identity reconciliation and API gateway layer that anchors identity across Gibbon SIS, Moodle, custom applications, and external integrations. Implements OIDC for modern app onboarding with strict RBAC and audit logging."
  - title: "Core Capabilities"
    items:
      - "**OIDC Identity Provider:** Standard OpenID Connect flows for modern apps."
      - "**Federated Identity Reconciliation:** Merges identity across Active Directory, Gibbon SIS, and Moodle."
      - "**JWT Enrichment:** Custom claims signed with HS256/RS256."
      - "**Scoped RBAC:** Fine-grained permissions enforced at API gateway level."
      - "**Immutable Audit Trail:** Every token issuance and API call logged."
  - title: "Impact"
    highlight: "Reduced identity-related support tickets by 80%; new apps onboard in days instead of weeks. Schools achieved complete identity audit compliance for NCAAA accreditation."
---
