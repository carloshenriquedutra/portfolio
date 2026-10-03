const en = {
  locale: "en",
  description: "Senior Data Engineer building dependable data foundations for better decisions.",
  nav: { about: "About", work: "Projects", experience: "Experience", education: "Education", contact: "Contact", language: "Language" },
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

en.pages.about = {"title": "About · Carlos Dutra · Senior Data Engineer", "description": "Explore Carlos Dutra’s data engineering background: cloud platforms, data modeling, automation, and business understanding."};
en.pages.experience = { title: "Experience · Carlos Dutra · Senior Data Engineer", description: "Carlos Dutra’s professional experience in data engineering, analytics, and commercial intelligence." };
en.pages.education = { title: "Education · Carlos Dutra · Senior Data Engineer", description: "Academic background in Computer Science, Data Analytics, and Business Administration." };
en.about.moreAction = "Explore my background";
en.experiencePage = { kicker: "PROFESSIONAL EXPERIENCE", heading: "Building data products close to the business", intro: "My work spans data engineering, analytics, customer operations, and commercial intelligence. In recent roles, I have focused on cloud data platforms and technical contribution." };
en.academicPage = {
  kicker: "ACADEMIC BACKGROUND",
  heading: "Education",
  intro: "My academic background combines current Computer Science studies with completed training in data analytics and business administration.",
  degrees: [
    { name: "Bachelor’s degree in Computer Science", school: "Descomplica Faculdade Digital", dates: "2025–2028 · In progress", summary: "Undergraduate degree in progress." },
    { name: "Postgraduate degree in Data Analytics · Lato Sensu", school: "Descomplica Faculdade Digital", dates: "2021–2022 · Completed", summary: "Completed a 390-hour Lato Sensu postgraduate program." },
    { name: "Bachelor’s degree in Business Administration", school: "UNOPAR", dates: "2015–2018 · Completed", summary: "Undergraduate degree completed." }
  ]
};
en.aboutPage = {
  "role": "SENIOR DATA ENGINEER / CURITIBA, BRAZIL",
  "heading": "Data engineering with a business perspective.",
  "intro": "I’m Carlos Dutra. I design and build cloud data platforms, from integrating source systems to the tables that support analysis and decisions.",
  "perspective": "My career began in commercial intelligence and included Customer Success and revenue operations. That experience helps me understand what teams need to measure, translate their needs into data models, and explain technical choices clearly.",
  "focusTitle": "Where I contribute",
  "focus": [
    {
      "title": "Cloud data platforms",
      "body": "I build the foundation for collecting, organizing, and making data available. I work with Google Cloud, BigQuery, and Terraform, with experience in Databricks and migrating processing jobs to Cloud Run."
    },
    {
      "title": "Data modeling and automation",
      "body": "I integrate databases, ERPs, and APIs, organize transformations with dbt and Dataform, and coordinate execution with Airflow. I focus on reusable tables, clear definitions, and checks that help identify issues before data reaches its consumers."
    },
    {
      "title": "AI connected to data and documents",
      "body": "I built Lumi in Python using Gemini, knowledge search in Firestore, and Google Chat integration. This combines software engineering with the care needed to ground answers in company content."
    }
  ],
  "careerTitle": "A career close to the business",
  "careerIntro": "I began working with commercial information in 2013. In my more recent roles, I deepened my work in data engineering, cloud architecture, and technical leadership.",
  "career": [
    {
      "org": "MadeiraMadeira",
      "dates": "April 2026–present",
      "role": "Senior data engineering · People Analytics and AI",
      "summary": "I designed the foundations and data flow for People Analytics using BigQuery, Dataform, Cloud Composer, and Terraform infrastructure. I also designed and built Lumi, an AI assistant for employees, and help guide the team’s technical work."
    },
    {
      "org": "Gobrax",
      "dates": "February 2023–March 2026",
      "role": "Data engineering and technical leadership",
      "summary": "I built the BigQuery Data Warehouse and migrated data from PostgreSQL to Google Cloud. I developed ERP and CRM integrations with Airbyte, Airflow, and dbt, and automated updates to reports used by Customer Success."
    },
    {
      "org": "Leads2b",
      "dates": "November 2020–December 2022",
      "role": "Customer Success and data analysis",
      "summary": "I analyzed lead datasets, conversion metrics, and engagement indicators to support customers of a B2B SaaS platform. This strengthened my ability to connect data, operations, and customer needs."
    },
    {
      "org": "COPAPA",
      "dates": "December 2013–August 2018",
      "role": "Data analysis and commercial intelligence",
      "summary": "I developed market analyses, reporting automation, and commercial controls. I combined demographic data and ERP sales to estimate demand by municipality and support a proposed sales territory redesign."
    }
  ],
  "workingTitle": "How I work",
  "workingBody": "I work as a technical individual contributor: I help design the solution, write code, and follow through on delivery. My technical leadership experience helps me guide colleagues, review decisions, and align engineering with business priorities.",
  "educationTitle": "Education",
  "projectsAction": "Explore my projects",
  "contactTitle": "Let’s talk about your data team.",
  "contactIntro": "If you’re looking for a senior data engineer with experience in cloud platforms, modeling, and automation, we can discuss your team’s context and challenges."
};
en.aboutPage.experienceSummaryTitle = "Recent experience";
en.aboutPage.experienceSummary = "Senior data engineering at MadeiraMadeira and data platform engineering at Gobrax, with an earlier foundation in customer analytics and commercial intelligence.";
en.aboutPage.experienceAction = "Full professional experience";
en.aboutPage.educationSummary = "Computer Science studies in progress, with completed postgraduate studies in Data Analytics and a degree in Business Administration.";
en.aboutPage.educationAction = "Full academic background";

export default en;
