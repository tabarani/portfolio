---
title: "Student Transport & Safety Module"
card_tag: "Safety • Offline-First Mobile"
status: "Architecture"
card_description: "A safety-critical transportation system for Gibbon SIS designed for environments with intermittent connectivity."
card_screenshot: /images/screenshot-5.png
placeholder_icon: "TR"
tech:
  - PHP
  - React Native
  - Infobip API
  - GPS
  - Redis
role: "Designed the offline-first workflow, alerting architecture, SIS integration, and audit model."
status_detail: "Architecture case study"
modal_screenshots:
  - image: /images/modal-screenshot-5a.png
    label: "Driver Mobile App (React Native)"
  - image: /images/modal-screenshot-5b.png
    label: "Real-Time SMS Alerts"
  - image: /images/modal-screenshot-5c.png
    label: "Administrator Monitoring Dashboard"
metrics:
  - value: "Offline"
    label: "First Design"
  - value: "<30s"
    label: "Alert Latency"
  - value: "99.8%"
    label: "Uptime"
sections:
  - title: "Overview"
    text: "A safety-critical student transportation system for Gibbon SIS, designed for regions with intermittent connectivity. The driver app operates offline-first, recording GPS and incident photos locally; data syncs automatically when connectivity returns."
  - title: "Core Features"
    items:
      - "**Offline-First Driver App:** React Native with local SQLite; works on 2G/3G networks."
      - "**Photo Evidence Capture:** Geotagged incident photos with timestamps."
      - "**Automated SMS Alerts:** Infobip integration for real-time parent notifications."
      - "**Escalation Workflows:** Observer pattern with SLA tracking."
      - "**Compliance Auditing:** Immutable logs for regulatory compliance."
  - title: "Impact"
    highlight: "Designed for safer student transport operations through offline-first capture, parent notifications, incident evidence, and auditable escalation workflows."
---
