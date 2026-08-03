---
title: "Student Transport & Safety Module"
card_tag: "Safety • Offline-First Mobile"
status: "Architecture"
card_description: "A Gibbon-linked transport and safety module designed around offline-first field workflows, alerting, and auditable incident handling."
card_screenshot: /images/screenshot-5.png
placeholder_icon: "TR"
tech:
  - PHP
  - React Native
  - Infobip API
  - GPS
  - Redis
role: "Solely designed and developed the offline-first transport workflows, alerting architecture, SIS integration model, and audit-oriented escalation design."
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
    label: "Field Workflow"
  - value: "SMS"
    label: "Parent Alerts"
  - value: "Audit"
    label: "Escalation Trail"
sections:
  - title: "Overview"
    text: "A student transport and safety module designed to extend Gibbon SIS with field-ready workflows for driver operations, incident capture, parent notifications, and administrative oversight. The design assumes intermittent connectivity and prioritizes reliable offline capture with later synchronization."
  - title: "Core Features"
    items:
      - "**Offline-First Driver App:** Mobile workflow designed to capture trips, GPS context, and incident details before connectivity is available."
      - "**Photo Evidence Capture:** Geotagged incident photos with timestamps."
      - "**Automated SMS Alerts:** Infobip integration for real-time parent notifications."
      - "**Escalation Workflows:** Structured alerting and follow-up handling for safety-sensitive events."
      - "**Compliance Auditing:** Audit-oriented records for transport operations, evidence capture, and resolution history."
  - title: "Impact"
    highlight: "Demonstrates operational workflow design for safety-critical environments where offline capture, communications, evidence, and auditability matter as much as the interface itself."
---
