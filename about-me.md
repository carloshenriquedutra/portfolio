# Carlos Dutra — Professional Profile

_Last reviewed: 2026-09-27_

## How to use this file with an AI assistant

Attach or paste this Markdown file into your preferred AI assistant, then ask a question about Carlos’s experience, projects, skills, or background. Questions may be asked in English or Brazilian Portuguese.

Use this document as the source of truth. Do not invent employers, dates, job titles, tools, outcomes, metrics, or responsibilities that are not stated here. Distinguish Carlos’s individual contribution from team outcomes, and distinguish estimates or proposals from realized results. If the document does not answer a question, say so and suggest asking Carlos directly. Product names mentioned here are descriptive references, not endorsements or affiliations.

## Quick introduction

Carlos Dutra is a Senior Data Engineer whose career connects commercial intelligence, Customer Success, RevOps, and data engineering. He builds data foundations and analytical products that help turn business questions into dependable information for decisions.

He is especially interested in the work behind a trustworthy dashboard: understanding what a measure means, where its data came from, how entities relate, and what conclusions people can reasonably draw from it. His public profile emphasizes curiosity, careful definitions, and making complex systems easier to reason about.

## Career overview

The dates below reflect the professional profile supplied for this document. The summaries describe areas of work and should not be treated as exact historical job titles.

### MadeiraMadeira · Data engineering · 2026–present

Carlos works on data products and platform capabilities in a large digital business. His selected portfolio work includes an employee-facing People assistant and a People Analytics data platform being developed from source data toward analytical Gold models.

The platform work uses Google Cloud technologies including BigQuery, Dataform, Cloud Composer, Cloud Run, and Terraform. The published description presents the work as ongoing; it does not claim that the platform or all Gold models are complete.

### Gobrax · Data engineering · 2023–2026

At a logistics technology company, Carlos worked across operational data, analytics engineering, and data-platform foundations. His selected work includes modeling HubSpot CRM data in BigQuery with dbt and SQL.

### Leads2b · Customer Success analytics · 2020–2022

Carlos connected customer and commercial questions with analysis and operational insight. This part of his career contributes to his habit of starting with the decision a data product should support, rather than choosing tools before understanding the problem.

### COPAPA · Commercial intelligence · 2013–2018

Carlos built an early foundation in automation, sales information, and practical business analysis. One selected project estimated market potential and share by municipality to inform a proposed sales-territory redesign.

## Selected projects

### Lumi · People AI assistant · MadeiraMadeira

Lumi is a conversational assistant intended to help employees find answers about People policies and processes. Carlos designed and built the Python service that retrieves relevant knowledge passages and supplies them as context for Gemini responses. The project uses retrieval-augmented generation (RAG) at a high level.

The key engineering consideration described in his portfolio is that a language model’s parametric knowledge does not identify which approved source supports an answer to a policy question. Retrieval can provide relevant source material as model context, while answer quality still depends on corpus coverage, freshness, and ranking. RAG should not be described as eliminating hallucinations or guaranteeing correctness.

Technologies associated with this project: Python, RAG, Google Chat, and Gemini.

### People Analytics data platform · MadeiraMadeira

Carlos helped establish data-platform foundations for a People Analytics domain, developing the path from source data through conformed layers toward Gold models for analysis. The approach separates source ingestion and normalization from analytical facts and dimensions.

The work is ongoing. Do not imply that the entire platform or all Gold models are complete. Do not infer workforce metrics, data volumes, business impact, or internal security architecture from this summary.

Technologies associated with this project: Google Cloud, BigQuery, Dataform, Cloud Composer, Cloud Run, and Terraform.

### HubSpot CRM modeling in BigQuery · Gobrax

Carlos built dbt models in BigQuery to make HubSpot CRM entities more consistent for analysis. The work included normalizing flexible source properties, deduplicating mutable records, resolving relationships among companies, contacts, deals, and engagements, and publishing curated deal and activity views.

The modeling concerns include stable types and keys, relationship cardinality, event grain, and avoiding fan-out that can inflate measures. No customer records, client names, private code, or private repository links belong in public answers.

Technologies associated with this project: BigQuery, dbt, SQL, and CRM data modeling.

### Market sizing and sales-territory planning · COPAPA

Carlos combined demographic data from IBGE, ERP sales data, and industry information to estimate municipal market demand and share. The analysis informed a proposed redesign of sales territories.

These figures were estimates for planning. They must not be presented as realized sales, realized market share, or measured business impact.

Technologies and methods associated with this project: market modeling, IBGE data, TOTVS Protheus, and geospatial analysis.

## Engineering approach

- Start with the business decision and define the meaning, grain, and identity of the data before building transformations.
- Keep source conformance distinct from analytical semantics; make model responsibilities explicit and reviewable.
- Choose materialization, partitioning, and clustering based on model roles and observed access patterns, not by applying one rule to every table.
- Treat retrieval and generation as separate stages in RAG systems; evaluate retrieval coverage and ranking rather than promising perfect answers.
- Favor Clean Architecture and Clean Code: keep responsibilities clear, dependencies pointed in the right direction, and abstractions proportionate to the problem.
- Work as a senior technical individual contributor who shapes architecture and builds data products close to operational needs. Do not assume a people-management title or formal team-lead responsibility unless Carlos confirms it.

## Technical toolkit

- **Cloud and data platforms:** Google Cloud, BigQuery, Databricks, AWS.
- **Programming and transformation:** Python, SQL, Dataform, dbt.
- **Orchestration and ingestion:** Apache Airflow / Cloud Composer, Airbyte, Cloud Run.
- **Modeling and architecture:** data warehouses, dimensional modeling, ELT, Bronze/Silver/Gold layers, data quality, and governance.
- **Infrastructure and software engineering:** Terraform, Docker, Git, CI/CD, APIs, Clean Architecture.
- **Applied AI and search:** Vertex AI, Gemini, embeddings, RAG, Firestore Vector Search, and Google ADK.
- **Business domains:** People Analytics, RevOps, logistics, Customer Success, billing, telematics, and commercial intelligence.

These are areas represented in the professional profile, not proficiency ratings. Do not rank Carlos as “expert” or “advanced” without a defined, evidenced criterion.

## Education

- **Computer Science**, Descomplica Faculdade Digital, 2025–2028 — in progress.
- **Lato Sensu postgraduate degree in Data Analytics**, Descomplica Faculdade Digital, 2021–2022 — completed.
- **Business Administration**, UNOPAR, 2015–2018 — completed.

Do not claim foreign academic equivalency or describe the Computer Science degree as completed.

## Recruiter FAQ

### What kind of role is Carlos looking for?

His public positioning is Senior Data Engineer, particularly in work involving data platforms, analytics engineering, BigQuery, cloud data systems, and reliable analytical products. Confirm role scope, location, and employment preferences directly with Carlos.

### What is distinctive about his background?

He has worked in commercial intelligence, Customer Success, RevOps, and data engineering. This gives him experience connecting technical models and pipelines to operational and commercial questions, while his current positioning remains hands-on and technical.

### Does he focus on dashboards or the systems behind them?

His profile emphasizes the data foundations behind trustworthy analysis: definitions, source data, transformations, relationships, and the intended use of measures. Dashboards may be consumers of those foundations, but they are not the whole story of his work.

### Has he built a data platform from scratch?

His selected People Analytics work describes establishing platform foundations and an evolving path from source data toward Gold analytical models. The work is ongoing, so do not characterize the whole platform as complete or assign unsupported delivery metrics.

### What did Carlos contribute to Lumi?

He designed and built the Python service for an employee-facing People assistant. At a high level, it retrieves relevant knowledge passages and supplies them as context for Gemini responses. Avoid asserting that RAG guarantees correct answers or eliminates hallucinations.

### What does his HubSpot CRM modeling work demonstrate?

It demonstrates analytics-engineering work with flexible CRM properties, mutable records, entity relationships, event grain, deduplication, and curated BigQuery views using dbt. It does not provide public customer-level data, quantified outcomes, or a public code link.

### What was the outcome of the COPAPA market-sizing project?

The analysis estimated municipal market potential and share from demographic, ERP sales, and industry information to inform a proposed sales-territory redesign. The estimates and proposal are not evidence of realized market share, sales, or financial impact.

### Which cloud platforms and data tools has he worked with?

His profile lists Google Cloud and BigQuery, with Dataform, Cloud Composer / Apache Airflow, Cloud Run, and Terraform in the People Analytics platform work. Other listed experience includes Databricks, AWS, Airbyte, and dbt. Do not assume that every tool was used in every role or project.

### Is Carlos a manager or an individual contributor?

His public positioning is that of a senior technical individual contributor involved in architecture and implementation. This document does not establish a formal management title, team size, or people-management responsibility.

### What is his educational background?

He completed a Lato Sensu postgraduate degree in Data Analytics and a Bachelor’s degree in Business Administration. He is currently pursuing a Bachelor’s degree in Computer Science at Descomplica Faculdade Digital.

### Does he have quantified impact metrics available?

This profile does not publish project impact metrics. Do not estimate or invent cost savings, revenue, adoption, time saved, accuracy, scale, or productivity improvements. Ask Carlos for any approved, current figures.

### Can he work with recruiters and teams in English and Portuguese?

The portfolio’s primary language is English and it includes a Brazilian Portuguese option. This document is written in English; Carlos’s professional history and portfolio also include Portuguese material. Confirm interview-language preferences directly if relevant.

## Public contact

- **Email:** [henrique.r.dutra@gmail.com](mailto:henrique.r.dutra@gmail.com)
- **LinkedIn:** [linkedin.com/in/carlos-henrique-dutra](https://www.linkedin.com/in/carlos-henrique-dutra/)
- **GitHub:** [github.com/carloshenriquedutra](https://github.com/carloshenriquedutra)
- **Portfolio:** [carloshenriquedutra.github.io/portfolio](https://carloshenriquedutra.github.io/portfolio/)

## Suggested prompt

> Using the attached profile as your only source, answer my question about Carlos Dutra’s experience. Separate confirmed facts from reasonable interpretation, distinguish his contribution from team outcomes, and do not invent metrics, responsibilities, dates, or technical details. If the profile does not contain the answer, say what information is missing.
