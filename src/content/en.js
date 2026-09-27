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
    note: "Curious by default. Particular about definitions. Friendly to the person who has to maintain it next.",
    workAction: "Explore selected work", contactAction: "Get in touch", portraitAlt: "Carlos Dutra smiling in his official profile portrait"
  },
  about: {
    title: "From business question to dependable data",
    body: "My path runs through commercial intelligence, Customer Success, RevOps, and data engineering. That mix taught me to ask what a number will help someone decide before choosing how to build the pipeline that produces it.",
    detail: "I work as a senior technical individual contributor: shaping architecture, building useful data products, and staying close to the operational problem. A dashboard is only as trustworthy as the definitions and systems underneath it."
  },
  work: { title: "Selected work", intro: "A few examples of the questions I enjoy untangling. Sensitive implementation details stay where they belong: private." },
  caseLabels: { summary: "The work", contribution: "My contribution" },
  decisionHeading: "How I like to make decisions",
  decisionLabels: { context: "Situation", options: "Options considered", choice: "Choice", tradeoff: "Trade-off", revisit: "Revisit when" },
  cases: [
    { company: "Gobrax", project: "Cloud data platform", title: "Modernizing data and automating fleet reporting", summary: "A logistics SaaS operation relied on fragmented sources and manual reporting to turn fleet-performance data into customer-facing insight.", contribution: "I shaped the move to BigQuery, combining Airbyte ingestion, Airflow orchestration, and dbt modeling, then led automation of recurring Power BI refreshes.", technologies: ["BigQuery", "Airbyte", "Airflow", "dbt", "Power BI"] },
    { company: "COPAPA", project: "Market sizing & sales territory redesign", title: "Mapping market potential to commercial coverage", summary: "The company needed a clearer view of category demand and its sales footprint across Brazilian municipalities.", contribution: "I built a market-sizing and share model by combining demographic, ERP, and industry data to inform sales-territory planning. Estimates were treated as planning inputs, not realized results.", technologies: ["Market modeling", "Geospatial analysis", "Business intelligence"] },
    { company: "Independent project", project: "Pytrends", title: "Search interest, with the right caveats", summary: "A public Python project exploring how search-interest trends vary across topics and time periods.", contribution: "I built a reproducible analysis and treated normalized search interest as a relative signal—not a forecast of sales or demand.", technologies: ["Python", "Pytrends", "Exploratory analysis"], url: "https://github.com/carloshenriquedutra/pytrends", linkLabel: "View the public repository" }
  ],
  decisions: [
    { title: "Put a business rule where it can be governed", situation: "A measure reused across dashboards can drift as each copy is adjusted for a local need.", options: "Duplicate the calculation in each report, or maintain one reviewed definition in a shared analytical layer.", choice: "Keep reusable business rules in the shared layer and let each consumer focus on its own question.", tradeoff: "Central ownership asks teams to agree on a definition early, but avoids a dozen almost-identical versions later.", revisit: "Revisit the boundary when a measure has genuinely different meanings by context or shared ownership slows a valid change." },
    { title: "Model the thing people mean—not just the row we received", situation: "A source row may represent a person, an employment relationship, or a point-in-time operational event.", options: "Count convenient source rows directly, or define the business entity and grain before creating measures.", choice: "Name the grain and identity explicitly, then build measures against that meaning.", tradeoff: "The model asks more questions up front, while preventing totals that look precise but answer the wrong question.", revisit: "Revisit the model when lifecycle rules, source identity, or the decision being supported changes." },
    { title: "Make repetition safe", situation: "Scheduled work can fail partway through and run again; retries are part of normal operations.", options: "Treat reruns as exceptional manual repairs, or design explicit contracts and repeatable processing behavior.", choice: "Prefer idempotent processing and observable outcomes so retries are predictable.", tradeoff: "Clear run state and idempotency need design effort, but reduce the chance of silent duplicate or missing data.", revisit: "Revisit when observed failure patterns show the current recovery strategy is too costly or hides useful evidence." }
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
