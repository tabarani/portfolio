---
title: "Yulpana Sovereign AI Platform"
card_tag: "AI • RAG Architecture"
status: "Production"
card_description: "An on-premise RAG platform for educational institutions, built to power role-aware AI assistants without sending institutional data to external AI services."
card_screenshot: /images/screenshot-1.png
placeholder_icon: "AI"
tech:
  - Python
  - FastAPI
  - Qdrant
  - Ollama
  - Moodle API
role: "Solely architected and implemented the shared RAG backend, retrieval pipeline, privacy boundaries, role-aware access model, and platform integrations."
status_detail: "Production system"
modal_screenshots:
  - image: /images/modal-screenshot-1a.png
    label: "Main RAG Interface"
  - image: /images/modal-screenshot-1b.png
    label: "Role-aware Chat View"
  - image: /images/modal-screenshot-1c.png
    label: "Context Injection Pipeline"
metrics:
  - value: "On-Prem"
    label: "Deployment"
  - value: "Role-Aware"
    label: "Retrieval"
  - value: "Cited"
    label: "Responses"
sections:
  - title: "Overview"
    text: "A shared on-premise AI platform designed for educational institutions that need local control over data, permissions, and retrieval logic. The system combines locally hosted language models with a role-aware RAG pipeline so that AI assistants can answer from institutional sources while respecting audience boundaries."
  - title: "Key Challenges Solved"
    items:
      - "**Data Sovereignty:** Institutional content and user context remain inside local infrastructure rather than external AI APIs."
      - "**Governed Retrieval:** Responses are grounded in available source material with role-aware context selection and attribution."
      - "**Privacy-Conscious Design:** The platform was shaped around strict boundaries for institutional data handling and permission-aware access."
      - "**Role-Aware Delivery:** Leaders, teachers, parents, and students can be served from the same platform with different context rules and prompts."
  - title: "Technical Highlights"
    items:
      - "**FastAPI Backend:** Shared application layer for retrieval, orchestration, prompt assembly, and downstream integrations."
      - "**Qdrant Vector Store:** Semantic retrieval over institutional knowledge with filtering strategies that preserve role and context boundaries."
      - "**Local Model Hosting:** Ollama-based deployment supports open-source models without routing sensitive data through external providers."
      - "**Platform Reuse:** The same backend can serve Moodle experiences, leadership workflows, and audience-specific assistants from one governed core."
  - title: "Impact"
    highlight: "Shows end-to-end ownership of a governed AI platform: local deployment, retrieval design, source-aware responses, and permission-conscious integration for institutional use."
---
