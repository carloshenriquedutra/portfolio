const en = {
  locale: "en",
  description: "Senior Data Engineer building dependable data foundations for better decisions.",
  nav: { about: "About", work: "Projects", experience: "Experience", contact: "Contact", language: "Language" },
  interface: { skipLink: "Skip to content", mainNavigation: "Main navigation", toggleNavigation: "Toggle navigation", aboutKicker: "01 / THE THREAD", workKicker: "02 / SELECTED WORK", skillsKicker: "03 / TOOLBOX", experienceKicker: "04 / CAREER", educationKicker: "05 / LEARNING", contactKicker: "06 / SAY HELLO", portraitTitle: "Carlos Dutra, Senior Data Engineer" },
  hero: {
    roleLine: "CARLOS DUTRA / SENIOR DATA ENGINEER",
    title: "I build the data foundation behind better decisions.",
    intro: "I trace numbers back to their definitions and systems, then build data people can use to decide.",
    note: "Curious by default. Particular about definitions.",
    workAction: "Explore selected work", contactAction: "Get in touch", portraitAlt: "Carlos Dutra smiling in his official profile portrait"
  },
  about: {
    title: "From business question to dependable data",
    body: "My path runs through RevOps, Data Analytics and Data Engineering. That mix taught me to ask what a number will help someone decide before choosing how to build the pipeline that produces it.",
    detail: "I work as a senior technical individual contributor: shaping architecture, building useful data products, and staying close to the business problem. A dashboard is only as trustworthy as the definitions and systems underneath it."
  },
  work: { title: "Selected work", intro: "Four projects where business questions shaped data products and engineering decisions.", openProject: "Explore project" },
  decisionLabels: { context: "The challenge", options: "Options considered", choice: "My choice", tradeoff: "Benefits and limits", revisit: "When to reconsider" },
  cases: [
    { id: "lumi", company: "MadeiraMadeira", project: "Lumi · People AI assistant", summary: "Lumi helps employees find answers about People policies and processes through a conversational assistant.", contribution: "I designed and built the Python service, retrieving relevant knowledge passages and supplying them as context for Gemini responses.", technologies: ["Python", "RAG", "Google Chat", "Gemini"] },
    { id: "people-analytics", company: "MadeiraMadeira", project: "People Analytics · raw to Gold", summary: "I established the data foundation for a new People Analytics domain, evolving uncurated source data toward a Gold layer for analytical use.", contribution: "I designed the GCP foundations and delivery flow across BigQuery, Cloud Run, Cloud Composer, Dataform, and Terraform, separating source ingestion, conformance, and analytical modeling.", technologies: ["BigQuery", "Dataform", "Cloud Composer", "Cloud Run", "Terraform"] },
    { id: "hubspot-crm", company: "Gobrax", project: "HubSpot CRM modeling in BigQuery", summary: "HubSpot exposes flexible properties and linked objects; analytical use needs stable types, keys, relationships, and event grain.", contribution: "I built dbt models in BigQuery for companies, contacts, deals, and engagements: normalizing source properties, deduplicating mutable records, resolving CRM associations, and publishing curated deal and activity views.", technologies: ["BigQuery", "dbt", "SQL", "CRM data modeling"] },
    { id: "copapa-market-sizing", company: "COPAPA", project: "Market sizing · sales territory planning", summary: "Commercial planning lacked a consistent view of category demand and market share across Brazilian municipalities.", contribution: "I combined IBGE demographics, ERP sales records, and industry data to model municipal demand and share estimates for a proposed territory redesign, keeping estimates distinct from realized sales.", technologies: ["Market modeling", "IBGE", "TOTVS Protheus", "Geospatial analysis"] }
  ],
  decisions: [
    { projectId: "lumi", title: "Look up company documents before answering", situation: "The AI does not know the company’s current policies on its own. That content changes and needs to be maintained by the People team.", options: "Train the AI on the documents, include all the content in a fixed instruction, or find the passages needed for each question.", choice: "Find passages related to the question and give them to the AI to compose its answer. The knowledge base can be updated without changing the assistant’s code or training the AI again.", tradeoff: "Answers are grounded in documents that can be checked. This requires keeping the content current and the search working; missing information or passages that cannot be found limit the answer.", revisit: "Search misses useful documents, sources become outdated, or recurring questions lack supporting information." },
    { projectId: "people-analytics", title: "Store prepared results and organize data by date", situation: "Reading the entire history for every query can make analysis slower and more expensive. Reference records and event records also have different update needs.", options: "Calculate results for each query, store everything the same way, or organize each dataset according to how it is used.", choice: "Store reference records in tables and separate large volumes of events by the date they happened. Group records by fields frequently used to filter or connect data.", tradeoff: "Queries can read only the dates they need. Stored results take up space and must be updated.", revisit: "Query costs increase, data needs more frequent updates, or teams change how they query it." },
    { projectId: "people-analytics", title: "Organize data before applying business rules", situation: "Source systems use different formats and names. Mixing data cleanup with business calculations makes each analysis repeat the same work.", options: "Provide data as it arrives from source systems, or separate its preparation from the calculations used in analysis.", choice: "Preserve incoming data, correct formats and remove duplicates in a separate step, then build tables around business questions.", tradeoff: "There are more steps to maintain, but each has a clear purpose and can be checked separately. Prepared data can be reused across analyses.", revisit: "Source systems start sending data in a different form, or an analysis needs the original record." },
    { projectId: "hubspot-crm", title: "Define what each row represents before combining data", situation: "A deal can be linked to several contacts, products, and activities. Combining these records can make the same deal appear more than once and inflate totals.", options: "Sum source records directly, or define how to identify each record and represent its links before calculating totals.", choice: "Define what each row represents and how to identify it, store links between records in separate tables, and use a fixed rule to choose which version to keep when duplicates occur.", tradeoff: "More tables and checks are needed. This reduces the risk of counting the same record more than once and helps distinguish its versions over time.", revisit: "Relationships between records, how records are identified, or the stages a deal or activity goes through change." }
  ],
  skills: { title: "Tools are useful. Judgment is the job.", summary: "Python · SQL · BigQuery · Google Cloud · Terraform · dbt · Dataform · RAG" },
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

en.pages = {
  home: { title: "Carlos Dutra · Senior Data Engineer", description: en.description },
  projects: { title: "Projects · Carlos Dutra", description: "Four selected data engineering and analytical projects by Carlos Dutra.", kicker: "SELECTED PROJECTS", heading: "Choose a problem. See how I approached it.", intro: "A short route to the work behind the headline. Each project has its own business context and technical decisions.", listLabel: "Selected projects" },
  project: { breadcrumbHome: "Home", breadcrumbProjects: "Projects", problem: "Business problem", contribution: "My contribution", technology: "Tools and methods", decisions: "Engineering decisions", back: "All projects", contact: "Start a conversation" }
};
en.projectDetails = {
  lumi: { problem: "Employees need consistent, current answers about People policies and processes in Google Chat.", contribution: "I designed and built the assistant service, connecting employee questions to maintained People knowledge." },
  "people-analytics": { problem: "A new People Analytics domain needed a dependable path from fragmented source records to reusable analytical models.", contribution: "I designed the cloud foundations and delivery flow, separating ingestion, source conformance, and analytical modeling. The path to Gold models continues to evolve." },
  "hubspot-crm": { problem: "Commercial analysis needed consistent entities and measures despite flexible CRM properties, mutable records, and many-to-many associations.", contribution: "I built models for companies, contacts, deals, and engagements: normalizing properties, deduplicating records, and resolving CRM associations. I published curated deal and activity views for analytical use." },
  "copapa-market-sizing": { problem: "Commercial planning lacked a consistent view of category demand and market share across Brazilian municipalities.", contribution: "I combined demographic, industry, and ERP sales data to estimate demand and market share by municipality. These estimates informed a proposed sales territory redesign.", analysis: { title: "Compare municipalities to plan sales territories", body: "I compared municipalities using demand estimates and recorded sales. This helped discuss where there was room to expand commercial activity, while keeping clear that a market estimate is not a completed sale." } }
};

export default en;
