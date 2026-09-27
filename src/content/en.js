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
  caseLabels: { context: "Context", problem: "Problem", role: "My contribution", approach: "Approach", outcome: "Outcome", tradeoff: "Trade-off" },
  decisionHeading: "How I like to make decisions",
  decisionLabels: { context: "Situation", options: "Options considered", choice: "Choice", tradeoff: "Trade-off", revisit: "Revisit when" },
  cases: [
    { title: "A calmer path from operational data to decisions", category: "Data platform", context: "A growing operation had useful information spread across systems, while recurring reports depended on fragile manual steps.", problem: "Create a repeatable foundation that lets teams use consistent measures without turning every new question into a one-off extract.", role: "I helped shape the data model and engineering approach, connected the work to how business teams consumed it, and focused effort on the shared definitions with the highest reuse.", approach: "Separate ingestion, transformation, and consumption responsibilities; model around business processes; make refresh behavior and data quality visible; prefer reusable rules over copies of logic in individual reports.", outcome: "Teams gained a more dependable route from operational records to analysis, with less reliance on ad hoc handling. Specific internal scale and performance figures are intentionally omitted.", tradeoff: "A good shared model takes conversation. Agreeing on what a measure means can be harder than writing the SQL—and it saves the next five reports from disagreeing.", technologies: ["Data engineering", "Dimensional modeling", "Orchestration", "SQL"] },
    { title: "Putting the market into the sales map", category: "Commercial intelligence", context: "Commercial planning needed a clearer view of where market potential and existing activity aligned.", problem: "Combine public and business information into a view that could inform territory conversations without pretending an estimate was a certainty.", role: "I worked on data preparation and market modeling, translating source limitations into assumptions people could discuss.", approach: "Align geographic and business entities, compare observed activity with external context, and make the difference between measured facts and projections explicit.", outcome: "The analysis gave commercial stakeholders a more structured basis for discussing coverage and opportunity. Historical projections are not presented as realized results.", tradeoff: "A map can look precise even when its inputs are estimates. Clear assumptions mattered more than decorative precision.", technologies: ["Market modeling", "Geospatial analysis", "Business intelligence"] },
    { title: "Search trends as a question, not a forecast", category: "Public project", context: "Search interest can offer a useful signal about how attention changes over time.", problem: "Explore what trend data can and cannot say when comparing topics and periods.", role: "I built a public Python analysis around the available search-interest data.", approach: "Collect, inspect, and compare normalized trends while treating sampling and relative scale as limitations rather than absolute demand.", outcome: "The project is reproducible and provides a practical example of exploratory analysis with a public data source.", tradeoff: "Search interest is not sales, intent, or a population-wide survey. It is one signal, useful when described honestly.", technologies: ["Python", "Pytrends", "Exploratory analysis"], url: "https://github.com/carloshenriquedutra/pytrends", linkLabel: "View the public repository" }
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
