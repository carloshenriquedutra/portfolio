const en = {
  locale: "en",
  pageTitle: "Carlos Dutra · Senior Data Engineer",
  description: "Senior Data Engineer building dependable data foundations for better decisions.",
  nav: { about: "About", work: "Selected work", experience: "Experience", contact: "Contact", language: "Language" },
  interface: { skipLink: "Skip to content", mainNavigation: "Main navigation", toggleNavigation: "Toggle navigation", aboutKicker: "01 / THE THREAD", workKicker: "02 / SELECTED WORK", decisionsKicker: "ENGINEERING NOTES", skillsKicker: "03 / TOOLBOX", experienceKicker: "04 / CAREER", educationKicker: "05 / LEARNING", contactKicker: "06 / SAY HELLO", portraitCaption: "Data, decisions, and the occasional spreadsheet plot twist." },
  hero: {
    eyebrow: "Senior Data Engineer · Analytics & Platforms",
    title: "I build the data foundation behind better decisions.",
    intro: "I like the part before the dashboard: figuring out what the numbers mean, where they came from, and what someone can safely do with them.",
    note: "Curious by default. Particular about definitions. I enjoy making complex systems easier to reason about.",
    workAction: "Explore selected work", contactAction: "Get in touch", portraitAlt: "Carlos Dutra smiling in his official profile portrait"
  },
  about: {
    title: "From business question to dependable data",
    body: "My path runs through commercial intelligence, Customer Success, RevOps, and data engineering. That mix taught me to ask what a number will help someone decide before choosing how to build the pipeline that produces it.",
    detail: "I work as a senior technical individual contributor: shaping architecture, building useful data products, and staying close to the operational problem. A dashboard is only as trustworthy as the definitions and systems underneath it."
  },
  work: { title: "Selected work", intro: "A few examples of the questions I enjoy untangling. Sensitive implementation details stay where they belong: private." },
  caseLabels: { summary: "The work", contribution: "My contribution" },
  decisionHeading: "Models, boundaries & reliability",
  decisionLabels: { businessProblem: "Business problem", context: "Technical constraint", options: "Design alternatives", choice: "Decision", tradeoff: "Engineering trade-off", revisit: "Revisit when" },
  cases: [
    { company: "MadeiraMadeira", project: "Lumi · People AI assistant", title: "An employee assistant grounded in People knowledge", summary: "Lumi helps employees find answers about People policies and processes through a conversational assistant.", contribution: "I designed and built the Python service, retrieving relevant knowledge passages and supplying them as context for Gemini responses.", technologies: ["Python", "RAG", "Google Chat", "Gemini"] },
    { company: "MadeiraMadeira", project: "People Analytics · raw to Gold", title: "Building a People Analytics platform from source to Gold", summary: "I established the data foundation for a new People Analytics domain, evolving uncurated source data toward a Gold layer for analytical use.", contribution: "I designed the GCP foundations and delivery flow across BigQuery, Cloud Run, Cloud Composer, Dataform, and Terraform, separating source ingestion, conformance, and analytical modeling.", technologies: ["BigQuery", "Dataform", "Cloud Composer", "Cloud Run", "Terraform"] },
    { company: "Gobrax", project: "HubSpot CRM modeling in BigQuery", title: "Turning CRM entities into analysis-ready models", summary: "HubSpot exposes flexible properties and linked objects; analytical use needs stable types, keys, relationships, and event grain.", contribution: "I built dbt models in BigQuery for companies, contacts, deals, and engagements: normalizing source properties, deduplicating mutable records, resolving CRM associations, and publishing curated deal and activity views.", technologies: ["BigQuery", "dbt", "SQL", "CRM data modeling"] },
    { company: "COPAPA", project: "Market sizing · sales territory planning", title: "Estimating market potential to redesign sales territories", summary: "Commercial planning lacked a consistent view of category demand and market share across Brazilian municipalities.", contribution: "I combined IBGE demographics, ERP sales records, and industry data to model municipal demand and share estimates for a proposed territory redesign, keeping estimates distinct from realized sales.", technologies: ["Market modeling", "IBGE", "TOTVS Protheus", "Geospatial analysis"] }
  ],
  decisions: [
    { company: "MadeiraMadeira", project: "Lumi · People AI assistant", businessProblem: "Employees needed timely, consistent answers to People policies without relying on a separate manual search for every question.", title: "Make retrieval an explicit input to generation", situation: "A language model's parametric knowledge does not identify which approved source supports an answer to a policy question.", options: "Provide policy text in a fixed prompt, or retrieve relevant passages from a maintained knowledge base for each question.", choice: "Retrieve ranked knowledge chunks from a vector index and pass them as context to the language model, keeping knowledge updates independent of model deployment.", tradeoff: "Retrieval adds components, and response quality remains bounded by corpus freshness, coverage, and ranking quality.", revisit: "Evaluation shows poor recall, stale sources, or recurring knowledge gaps." },
    { company: "MadeiraMadeira", project: "People Analytics data platform", businessProblem: "People Analytics consumers needed responsive queries over growing facts while keeping operational cost and data freshness manageable.", title: "Materialize for access patterns; partition on event time", situation: "Repeated full scans of high-volume facts incur avoidable work, while dimensions have a different refresh and read pattern.", options: "Use views for every model, materialize every model arbitrarily, or choose storage by model role and query shape.", choice: "Materialize dimensions as tables and high-volume facts as tables partitioned by event date; cluster only on recurring filter or join keys.", tradeoff: "Materialization costs storage and rebuild work but lets recurring queries prune irrelevant partitions.", revisit: "Scan cost, freshness requirements, or consumer filter patterns change." },
    { company: "MadeiraMadeira", project: "People Analytics data platform", businessProblem: "People Analytics needed dependable, reusable data products built from fragmented source systems, from raw records through business-ready Gold models.", title: "Separate source conformance from business semantics", situation: "Source schemas differ in types, naming, and history; mixing cleanup with business rules makes each consumer reimplement them.", options: "Expose source-shaped tables directly to BI, or separate source normalization from analytical modeling.", choice: "Use Bronze to retain source shape, Silver to cast, deduplicate, and normalize, and Gold to publish facts and dimensions in business terms.", tradeoff: "An extra transformation boundary increases model count but gives each model a narrower, testable responsibility.", revisit: "Source contracts change or a workload needs source-level detail." },
    { company: "Gobrax", project: "HubSpot CRM modeling in BigQuery", businessProblem: "Commercial teams needed a consistent way to analyze HubSpot deals and engagements across linked, mutable CRM entities.", title: "Declare grain before joining entities", situation: "A CRM deal can link to multiple contacts, products, and activities; unrestricted joins can fan out rows and inflate measures.", options: "Aggregate source rows directly, or define each fact's grain and key and model many-to-many associations before aggregation.", choice: "I declare grain and business key per model, represent many-to-many relations through bridge models, and apply deterministic deduplication to mutable snapshots.", tradeoff: "More models and assertions upstream; less silent fan-out and clearer temporal semantics downstream.", revisit: "Source cardinality, business identity, or event lifecycle changes." }
  ],
  skills: { title: "Tools are useful. Judgment is the job.", groups: [
    { name: "Data platforms", items: ["Google Cloud", "BigQuery", "Databricks", "AWS"] },
    { name: "Engineering", items: ["Python", "SQL", "Airflow", "Dataform", "dbt", "Airbyte"] },
    { name: "Modeling & reliability", items: ["Data warehouse", "Dimensional modeling", "ELT", "Data quality", "Governance"] },
    { name: "Applied AI", items: ["RAG", "Embeddings", "Vertex AI", "Gemini", "Vector search"] },
    { name: "Business context", items: ["People Analytics", "RevOps", "Logistics", "Customer Success", "Commercial intelligence"] }
  ] },
  experience: { title: "A career close to the problem", items: [
    { org: "MadeiraMadeira", dates: "2026–present", role: "Data engineering", summary: "Building data products and platform capabilities in a large digital business." },
    { org: "Gobrax", dates: "2023–2026", role: "Data engineering", summary: "Worked across operational data, analytics engineering, and platform foundations in a logistics technology context." },
    { org: "Leads2b", dates: "2020–2022", role: "Customer Success analytics", summary: "Connected customer and commercial questions with analysis and operational insight." },
    { org: "COPAPA", dates: "2013–2018", role: "Commercial intelligence", summary: "Built an early foundation in automation, sales information, and practical business analysis." }
  ] },
  education: { title: "Education", items: [
    { name: "Computer Science", school: "Descomplica Faculdade Digital", dates: "2025–2028 · In progress" },
    { name: "Data Analytics · Lato Sensu postgraduate degree", school: "Descomplica Faculdade Digital", dates: "2021–2022 · Completed" },
    { name: "Business Administration", school: "UNOPAR", dates: "2015–2018 · Completed" }
  ] },
  contact: { title: "Have a good data problem?", intro: "I’m always interested in thoughtful engineering, useful data products, and conversations that start with a real question.", email: "Email", linkedin: "LinkedIn", github: "GitHub", whatsapp: "WhatsApp", footer: "Built with curiosity, a little healthy skepticism, and fewer spreadsheets than strictly necessary." }
};

export default en;
