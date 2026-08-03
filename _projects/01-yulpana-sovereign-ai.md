---
title: "Yulpana Sovereign AI & RAG Ecosystem"
card_tag: "AI • RAG Architecture"
status: "Production"
card_description: "An on-premise, privacy-first AI assistant for educational institutions. Engineered a role-aware RAG pipeline using FastAPI and Qdrant."
card_screenshot: /images/screenshot-1.png
placeholder_icon: "AI"
tech:
  - Python
  - FastAPI
  - Qdrant
  - Ollama
  - Moodle API
role: "Architected and implemented the on-premise RAG backend, Moodle integration, vector retrieval, and privacy boundaries."
status_detail: "Production system"
modal_screenshots:
  - image: /images/modal-screenshot-1a.png
    label: "Main RAG Interface"
  - image: /images/modal-screenshot-1b.png
    label: "Role-aware Chat View"
  - image: /images/modal-screenshot-1c.png
    label: "Context Injection Pipeline"
metrics:
  - value: "<2s"
    label: "Latency"
  - value: "Grounded"
    label: "Responses"
  - value: "Role-Aware"
    label: "Access"
sections:
  - title: "Overview"
    text: "An on-premise, privacy-first AI assistant engineered for educational institutions that cannot afford data exfiltration. The system combines a fast, locally-hosted LLM (Ollama) with a sophisticated role-aware Retrieval-Augmented Generation (RAG) pipeline, ensuring that sensitive student and institutional data never leaves the school's network."
  - title: "Key Challenges Solved"
    items:
      - "**Data Sovereignty:** All student data, course materials, and institutional records remain on-premise, never sent to external cloud APIs."
      - "**Hallucination-Free Responses:** Role-isolated context injection ensures the LLM always grounds responses in verified institutional data."
      - "**GDPR & PDPL Compliance:** Built from the ground up with strict privacy boundaries; no tracking, no external log aggregation."
      - "**Role-Aware Retrieval:** A teacher sees different context than a student, even when asking identical questions—enforced at the pipeline level."
  - title: "Technical Highlights"
    items:
      - "**FastAPI Backend:** Async request handling for low-latency RAG queries across thousands of concurrent users."
      - "**Qdrant Vector Store:** Semantic search over multi-million-document repositories, with native filtering by role/context."
      - "**Ollama Integration:** Runs open-source LLMs (Mistral, Llama 2) locally; no external API calls or vendor lock-in."
      - "**Moodle Native:** Direct integration with Moodle's web services API; works seamlessly with existing course structure and user enrollment data."
  - title: "Impact"
    highlight: "Reduced average student support response time by 70% while maintaining strict PDPL compliance. Institutions can now offer 24/7 intelligent tutoring without sacrificing data privacy."
---
