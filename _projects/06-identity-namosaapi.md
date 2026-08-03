---
title: "Identity Reconciliation & NamosaAPI"
card_tag: "Infrastructure • Identity"
status: "Production"
card_description: "A centralized API and identity layer for Gibbon SIS and connected applications, built around OIDC, reconciliation, RBAC, and audit-ready integration flows."
card_screenshot: /images/screenshot-6.png
placeholder_icon: "ID"
tech:
  - .NET
  - OpenID Connect
  - JWT
  - PHP
  - REST API
role: "Solely designed and implemented the OIDC provider, centralized API layer, claims enrichment, reconciliation workflows, deployment hardening, and audit-oriented identity flows."
status_detail: "Production infrastructure"
modal_screenshots:
  - image: /images/modal-screenshot-6a.png
    label: "Identity Flow Architecture"
  - image: /images/modal-screenshot-6b.png
    label: "JWT Claim Enrichment"
  - image: /images/modal-screenshot-6c.png
    label: "Compliance Audit Logs"
metrics:
  - value: "OIDC"
    label: "Identity Core"
  - value: "RBAC"
    label: "Access Model"
  - value: "Audit"
    label: "Traceability"
sections:
  - title: "Overview"
    text: "A centralized identity and integration layer that anchors user identity across Gibbon SIS, Moodle, custom applications, and external services. It provides modern OIDC-based onboarding together with reconciliation, claims enrichment, and permission-aware API access."
  - title: "Core Capabilities"
    items:
      - "**OIDC Identity Provider:** Standards-based authentication and authorization flows for modern internal applications."
      - "**Federated Identity Reconciliation:** Unifies identity records across directory services, Gibbon SIS, Moodle, and connected systems."
      - "**JWT Claims Enrichment:** Adds application-specific authorization and context claims at token issuance time."
      - "**Scoped RBAC:** Centralizes permission enforcement at the identity and API layer rather than scattering it across downstream apps."
      - "**Audit-Ready Flows:** Preserves traceability around token issuance, API usage, and identity-sensitive actions."
  - title: "Impact"
    highlight: "Serves as a senior-level platform example: identity normalization, modern auth standards, API-layer governance, and auditability across institutional systems."
---
