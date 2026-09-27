# Requirements Specification: Carlos Dutra's Professional Portfolio

**Feature Branch**: `main` (personal repository; no feature branch)
**Created**: 2026-09-27
**Status**: Draft for the Spec Kit workflow
**Repository**: `/home/carlosdutra/dev/portfolio`
**Input**: User request to turn the authorized professional history into detailed portfolio requirements.

## 1. Vision and purpose

The portfolio must present Carlos Dutra as a Senior Data Engineer and technical individual contributor (IC) who connects data architecture and engineering to concrete business outcomes. It should help international recruiters, technical leaders, and potential collaborators quickly understand the problems he solves, how he thinks, and where to find evidence of his work.

The site must not feel like a list of technologies or a resume copied onto the web. Its central idea is to show the journey from business questions and imperfect data to more reliable systems, models, and decisions. Technology is a means to that transformation.

### 1.1 Value proposition

> I build the data foundation that helps companies stop debating which spreadsheet is right and start making better decisions.

This sentence is editorial direction, not a literal promise that every project achieved this result. The final wording may be shorter and more personal as long as it preserves pragmatism, clarity, solid engineering, and business impact.

### 1.2 Creative direction and personality

The portfolio may use the image of an “engineering workbench”: problems arrive as raw data, manual processes, or difficult questions; Carlos investigates, models, automates, and delivers a solution other people can use and maintain. Keep the metaphor subtle and mature, without mascots, inside jokes, or a school-lab aesthetic.

A possible English opening, subject to editorial refinement:

> I like the part before the dashboard: figuring out what the numbers mean, where they came from, and what someone can safely do with them.

Personality should come through in practical curiosity, candor, light humor about spreadsheets and fragile processes, and a preference for solutions that address the real problem. Humor must never belittle colleagues, former employers, or users.

## 2. Goals

1. Communicate the professional positioning and target opportunity within seconds.
2. Demonstrate technical depth through case studies, decisions, and verifiable outcomes.
3. Explain a career that spans data analysis, commercial intelligence, Customer Success, RevOps, and data engineering without making it feel unfocused.
4. Make the experience accessible to recruiters and hiring teams in Canada and other international markets, with English as the primary language and Brazilian Portuguese available.
5. Make it easy to contact Carlos and navigate to LinkedIn, GitHub, email, and selected technical work.
6. Distinguish a technical specialist who owns problems end to end from a profile focused on formal people management.

## 3. Non-goals

- Do not create an extensive personal biography, professional diary, or account of organizational conflicts.
- Do not position Carlos as a candidate for Engineering Manager or people manager roles.
- Do not promise availability, compensation, visa or immigration outcomes, international credential equivalence, or business results without appropriate evidence.
- Do not publish code, data, internal architecture, client names, corporate system details, or materials owned by employers. Employer names may be used in selected-work labels when the user has explicitly approved them; this approval covers Gobrax and COPAPA.
- Do not turn the site into a sales page for a consulting firm, agency, or SaaS product.
- Do not change the current hosting provider as part of this portfolio feature.
- Do not invent metrics, testimonials, certifications, titles, responsibilities, or outcomes.
- Do not include the short CIPEL experience in the standard public narrative; the career record says it was intentionally omitted from public materials.

## 4. User Scenarios & Testing

### 4.1 User Story 1 — International recruiter (Priority: P1)

The recruiter opens the site and identifies the target role, seniority, core stack, internationally legible experience, and contact options. They can switch to Portuguese, open a resume when available, and follow the LinkedIn link.

**Why this priority**: This is a primary hiring journey and the portfolio’s most direct opportunity to create professional contact.

**Independent test**: Without reading the entire career history, the visitor can tell that Carlos is a Senior Data Engineer/Analytics Engineer with experience in GCP, analytics platforms, modeling, and business impact, and can find a contact method.

**Acceptance scenarios**:

1. **Given** a visitor with no saved language preference opens the home page, **when** the page loads, **then** the primary title, value proposition, and navigation appear in English.
2. **Given** the English home page is open, **when** the visitor selects Brazilian Portuguese, **then** the visible page content changes to Portuguese and the active language is identified.
3. **Given** the visitor is on either language version, **when** they choose the contact action, **then** they reach a verified contact method.

### 4.2 User Story 2 — Technical leader or hiring manager (Priority: P1)

The leader scans four selected-work cards to identify each organization, initiative, technical scope, and Carlos’s contribution, then reads the engineering notes to understand modeling and architecture decisions.

**Why this priority**: Hiring teams need credible evidence of technical depth and individual contribution before starting an interview process.

**Independent test**: Each selected-work card names its organization and project and explains the technical contribution; the engineering notes contain specific decisions and trade-offs rather than generic advice.

**Acceptance scenarios**:

1. **Given** a hiring manager scans Selected Work, **when** they review a card, **then** they can identify the organization, initiative, high-level problem, and Carlos’s contribution.
2. **Given** a hiring manager reads an Engineering Note, **when** they review the decision, **then** they can identify the technical constraint, alternatives, decision, engineering trade-off, and evidence that could justify revisiting it.
3. **Given** a selected case has no approved public metric, **when** it describes outcomes, **then** it does not invent or imply a quantified result.

### 4.3 User Story 3 — Technical peer or potential collaborator (Priority: P2)

The visitor explores selected technical initiatives and topics of interest to understand Carlos’s practices, curiosity, and potential common ground.

**Why this priority**: Public projects and technical work can create useful peer connections and support independent evaluation.

**Independent test**: Selected Work and Engineering Notes provide enough context to understand each question, method, and evidence boundary.

**Acceptance scenarios**:

1. **Given** a visitor opens Selected Work, **when** they scan a project entry, **then** they can understand its question, method, and available evidence.
2. **Given** a visitor reads an Engineering Note, **when** they reach its conclusion, **then** they can identify the trade-off and condition for revisiting the decision.

### 4.4 User Story 4 — Brazilian visitor (Priority: P2)

The visitor selects Brazilian Portuguese, understands the same positioning, and navigates content without awkward literal translation or significant omissions.

**Why this priority**: A complete local-language experience keeps the portfolio usable for Brazilian recruiters and collaborators.

**Independent test**: The visitor selects Brazilian Portuguese, understands the same positioning, and navigates content without awkward literal translation or significant omissions.

**Acceptance scenarios**:

1. **Given** a visitor is on an English page, **when** they select Brazilian Portuguese, **then** the corresponding Portuguese page opens with the same essential content.
2. **Given** a visitor is on the Portuguese version, **when** they select English, **then** the corresponding English page opens and reports English as its programmatic language.
3. **Given** an English or Portuguese home page is displayed, **when** the visitor views the hero, **then** the official portrait is used with a responsive crop that does not distort the image.
4. **Given** the page uses the black-and-dark-navy palette, **when** the visitor reads text or uses a control, **then** content and interaction states remain legible and distinguishable.
5. **Given** the portrait is displayed in either language, **when** the visitor reads the text directly beneath it, **then** they see only the localized professional title.

## 5. Positioning and narrative

### 5.1 Professional title

The recommended primary title is **Senior Data Engineer** in English, with its accurate localized equivalent in Brazilian Portuguese. Complementary titles may mention Analytics Engineer, Data Platform, or technical Tech Lead when tied to a specific contribution. Do not inflate historical titles: when relevant, distinguish the official title, actual scope, and technical contribution.

### 5.2 Core message

Carlos combines three capabilities:

- **Engineering foundation**: building ingestion, transformation, orchestration, infrastructure as code, governance, and cloud operations.
- **Modeling and analytics products**: structuring data for real use, with understandable metrics, consumption layers, and quality appropriate to the decision.
- **Business context**: understanding revenue, retention, costs, commercial operations, and logistics so the platform addresses high-priority problems.

### 5.3 Career in one line

From automation and commercial intelligence in a consumer goods manufacturer, through Customer Success analysis and data engineering at a logistics SaaS company, to People Analytics platforms and applied AI.

This summary must not imply that job titles or responsibilities were identical across roles. Each entry must keep dates and titles consistent with the latest public profile.

### 5.4 Career choices that shape the narrative

The portfolio should present Carlos’s deliberate preference for a senior technical individual-contributor path: architecture, engineering, and high-impact problem solving are the focus, rather than formal people management. It should also show a consistent choice to establish reliable data foundations and solve high-value operational problems before adopting technology for novelty alone. Earlier business-facing work is part of this story because it shaped a practical understanding of revenue, operations, and how people use data.

### 5.5 Voice and tone

- Direct, curious, confident, and approachable.
- Technical without unnecessary jargon; explain acronyms at first use when a general audience may not know them.
- Confident without vague superlatives such as “visionary,” “guru,” “rockstar,” or “ninja.”
- Evidence-led, using first person to make individual contribution clear.
- Occasional light humor; no sarcasm about people, former teams, or companies.
- Prefer short sentences, active verbs, and concrete outcomes.

## 6. Content and information architecture

### 6.1 Home page

The home page should present, in a logical order:

1. Identity, value proposition, and optional city or country/time zone; the main headline begins the hero text, with no role eyebrow above it. The localized professional title appears below the portrait.
2. Primary actions: view case studies, download a resume when an approved file exists, contact, and open LinkedIn/GitHub.
3. A quick About summary with the business-and-engineering thread.
4. Featured case studies.
5. Skills grouped by domain, not an indiscriminate wall of logos.
6. A concise career timeline and education.
7. Contact details and a footer with an update date or freshness signal if it can be maintained.

The first viewport must communicate the target role and provide at least one useful action. Core content must remain understandable without animations or images.

### 6.2 Case studies

Each selected-work card should use a concise, consistent format:

- **Organization and initiative**: make the company and project recognizable at a glance.
- **The work**: summarize the problem and intended capability in one short paragraph.
- **Carlos’s contribution**: state the technical work he personally designed or implemented.
- **Technologies**: list only tools used in the described initiative.
- **Evidence and outcomes**: include only public-safe, approved information; leave metrics out when they have not been cleared.

If a number has not been cleared for publication, use approved qualitative wording or omit it; never replace it with an estimate presented as fact.

### 6.3 Selected case studies for the first release

The Selected Work section MUST contain exactly four blocks, in this order:

1. **MadeiraMadeira — Lumi employee assistant**: describe an AI assistant that helps employees navigate People policies and processes. Explain the author's role in designing and building it, and describe retrieval-augmented generation at a high level. Do not expose internal prompts, source documents, employee data, security controls, or deployment details.
2. **MadeiraMadeira — People Analytics platform, raw to Gold**: describe establishing the cloud data platform and analytical layers through Gold. At a high level, technologies may include BigQuery, Dataform, Cloud Composer/Apache Airflow, Cloud Run, and Terraform. Do not expose employee data, internal identifiers, detailed access policies, or security configurations. Do not imply that ongoing work is complete.
3. **Gobrax — HubSpot CRM modeling in BigQuery**: describe dbt models that normalize CRM properties, deduplicate mutable records, resolve company/deal/contact/activity relationships, and publish curated analytical views. The private source repository is reference material only; its name, URL, code, and links MUST NOT appear on the portfolio.
4. **COPAPA — Market sizing and sales territory planning**: describe combining demographic, ERP sales, and industry data to estimate municipal market potential and share for a proposed territory redesign. Clearly distinguish estimates and proposals from realized outcomes.

The user explicitly selected these four cases and approved their organization/project attribution. Each card MUST remain concise and include a clear company/project label, a short description of the work, the author's individual contribution, and only technologies supported by that project. No case may contain private source links, unapproved metrics, employee/customer records, or unsupported outcomes.

### 6.4 Professional experience

Include COPAPA (2013–2018), Leads2b (2020–2022), Gobrax (2023–2026), and MadeiraMadeira (from April 2026, according to the supplied history). Each entry should include an appropriate public title, organization, dates, location or work arrangement when relevant, and up to three concise contributions. Keep the short CIPEL experience out of the standard public timeline.

The summary should show career progression rather than reproduce every event from each employer. Avoid backstage details, conflicts, negative assessments, employment disputes, departure stories, or private reasons for leaving.

### 6.5 Education

Present each credential with institution, program, dates, and status:

- Bachelor’s degree in Computer Science, Descomplica Faculdade Digital, 2025–2028, in progress.
- Lato Sensu postgraduate degree in Data Analytics, Descomplica Faculdade Digital, 2021–2022, completed; the history records 390 hours.
- Bachelor’s degree in Business Administration, UNOPAR, 2015–2018, completed.

Use the official Brazilian credential names. English descriptions may be added for clarity, without claiming Canadian or US academic equivalency that has not been formally recognized.

### 6.6 Skills

Group skills by domain rather than presenting an oversized cloud:

- Cloud and platforms: GCP, BigQuery, Databricks, AWS.
- Engineering and orchestration: Python, SQL, Apache Airflow/Cloud Composer, Dataform, dbt, Airbyte, Cloud Run.
- Modeling and architecture: Data Warehouse, Lakehouse, Kimball dimensional modeling, ELT, quality, governance.
- Infrastructure and software engineering: Terraform, Docker, Git, CI/CD, APIs, Clean Architecture.
- Applied AI and search: Vertex AI, Gemini, embeddings, RAG, Firestore Vector Search, Google ADK.
- Business domains: People Analytics, RevOps, billing, logistics, telematics, Customer Success, and commercial intelligence.

Show only skills supported by an experience or project presented on the site. Do not assign levels such as “expert” or “advanced” without a visible criterion.

### 6.7 Contact and profiles

Keep the public links already present on the site: email, LinkedIn, GitHub, and WhatsApp. Verify the email address and destinations before publication. External links must open safely and have descriptive labels; contact must not depend on a single platform.

### 6.8 Engineering decisions as portfolio content

The repository documentation and architecture decision records (ADRs) contain useful evidence of technical judgment. The portfolio may turn selected decisions into short, public-safe “decision stories” that explain the situation, the options considered, the choice, its trade-offs, and what evidence could justify revisiting it. These stories should show how Carlos reasons, not reproduce internal documentation.

Each Engineering Note MUST begin with the company and project it concerns, followed by the motivating business problem. Only then should it present the technical constraint, alternatives, design decision, trade-off, and evidence that could justify revisiting the decision. The notes should read like concise technical decision records and use precise terms such as grain, key, cardinality, deduplication, materialization, partitioning, retrieval, and generation when they explain the reasoning.

Engineering Notes MUST NOT imply unverified employer-specific operating patterns or comparative change rates. For Lumi, explain retrieval in terms of traceable source grounding and the approved knowledge base, without speculating about policy-update cadence or internal operations.

The initial notes should appear in this order:

1. **Lumi — Keep retrieval separate from generation**: retrieve relevant, current knowledge before model generation; describe retrieval coverage and freshness as system dependencies rather than promising that RAG prevents hallucinations.
2. **People Analytics — Choose materialization and partitioning by workload**: materialize dimensions consistently and partition high-volume facts on event time, with clustering selected from actual filter patterns.
3. **People Analytics — Separate source conformance from analytical semantics**: assign source parsing/type normalization and deduplication to Silver, then business facts and dimensions to Gold.
4. **Gobrax HubSpot — Declare model grain before joining entities**: avoid fan-out and invalid measures by defining keys, grain, temporal meaning, and bridge relationships before aggregation.

Do not turn the notes into a glossary or internal ADR dump. Keep each story understandable to a senior engineering reader without private source links. Do not expose employee data, internal identifiers, security controls, or implementation details beyond the approved high-level project descriptions.

These are candidate narratives, not permission to disclose the underlying employer implementations. Keep product names, internal architecture, workforce data, identifiers, security details, and operational specifics out of public stories unless expressly cleared. A decision story should be understandable without private source links and should avoid implying that every choice was made by Carlos alone when it involved a team.

### 6.9 Professional portrait

Use the photo supplied by the user on 2026-09-26 as the official profile portrait, preferably in the hero or About section. Preserve the original image; do not generate a replacement or apply changes that alter the person’s appearance. During implementation, copy the file into a versioned portfolio asset directory instead of depending on its local source path.

Keep the face clearly visible on large and small screens; use responsive cropping without distorting the aspect ratio and allow the focal point to be repositioned when needed. Integrate the image with the black background without a dominant decorative frame. If informative, provide short alternative text such as the person’s name; if purely decorative beside an already announced name, use empty alternative text to avoid repetition in screen readers.

Place only Carlos's localized professional title directly beneath the portrait: “Senior Data Engineer” in English and “Engenheiro de Dados Sênior” in pt-BR. Do not place a tagline or other descriptive sentence in this position.

## 7. Languages and localization

- English is the portfolio’s default and primary language: visitors without a previously selected language must see the home page in English.
- Provide a visible and accessible language control to switch to Brazilian Portuguese and back to English. Switching must update the entire interface and page content without mixing languages.
- The pt-BR version must cover the same essential information as English, including case studies, experience, education, and contact.
- Each version must programmatically identify its language. If a translation for the current page is unavailable, switching languages must lead to the corresponding home page rather than leave the visitor on partially translated content.
- Do not mix languages within the same paragraph, except for proper names and commonly used technical terms.
- Dates, currency, spelling, and job title terminology must follow the selected language’s conventions.
- Do not mention target compensation, immigration plans, visas, relocation, or legal eligibility on the public site in this version.

## 8. Functional requirements

- **FR-001**: The site MUST prominently present the name, target title, and professional value proposition.
- **FR-002**: The site MUST provide direct navigation to About, Selected Work, Experience, Education, and Contact.
- **FR-003**: The site MUST open in English by default and provide a visible, accessible selector to switch between English and Brazilian Portuguese, clearly indicating the active language.
- **FR-004**: The site MUST present the four selected-work cards with enough context to identify the problem, Carlos's individual contribution, and the technical approach at a concise scan level. Any outcome claims MUST be supported and distinguish estimates from realized results.
- **FR-005**: The site MUST distinguish observed outcomes from estimates, goals, and projections.
- **FR-006**: The site MUST provide working email, LinkedIn, GitHub, and WhatsApp links after their destinations have been verified.
- **FR-007**: The site MUST allow direct access to a case study by URL or navigation if case studies are presented on separate pages.
- **FR-008**: The site MUST offer a downloadable resume only when the file is reviewed, current, and approved for publication.
- **FR-009**: Experience and education dates and statuses MUST be consistent across languages.
- **FR-010**: The site MUST identify external links and open them safely when opened in a new tab.
- **FR-011**: Content MUST be readable and navigable without relying on animation, hover, color, or imagery to communicate meaning.
- **FR-012**: The site MUST provide appropriate title, description, author, and language metadata for each language.
- **FR-013**: Content MUST include only professional facts and metrics whose accuracy and publication permission have been verified.
- **FR-014**: Visitors MUST be able to understand Carlos’s contribution within outcomes produced by a team.
- **FR-015**: The Computer Science degree MUST be presented as in progress until completion is confirmed.
- **FR-016**: The visual identity MUST use black as the primary background color and dark blue/navy as the secondary accent, with legible, contrasting text and interaction states. Lighter blue may be used sparingly for foreground text and focus indicators when needed for contrast.
- **FR-017**: The portfolio MUST use the user-supplied official profile photo as its primary professional portrait, preserving the image and displaying it with responsive, undistorted cropping.
- **FR-018**: The portfolio SHOULD present selected, sanitized engineering decision stories that explain context, alternatives, rationale, trade-offs, and evidence for revisiting a decision.
- **FR-019**: Each selected-work card MUST identify the employer or project owner and the specific initiative with a clear descriptive label. Cards MUST remain scannable, using a short project summary and a concise statement of Carlos's contribution before optional technologies or public evidence.
- **FR-020**: The Selected Work section MUST contain exactly four blocks, in the order and scope approved in Section 6.3: Lumi employee assistant, People Analytics platform through Gold, HubSpot CRM modeling in BigQuery, and COPAPA market sizing. It MUST NOT include the private source repository name, URL, or link.
- **FR-021**: Engineering Notes MUST use technically precise, evidence-based decision narratives that identify constraints, alternatives, the selected design, trade-offs, and evidence for revisiting a decision; they MUST avoid generic advice and unsupported guarantees.
- **FR-022**: Every Engineering Note MUST identify its company and project first, then state the motivating business problem before presenting technical analysis.
- **FR-023**: Engineering Notes MUST list the Lumi decision first and reverse the previous note order, keeping the same order in both locales and the static HTML baseline.
- **FR-024**: Engineering Notes MUST avoid unverified employer-specific operational claims; the Lumi retrieval rationale MUST describe source traceability without asserting policy or model change rates.
- **FR-025**: The text directly beneath the portrait MUST contain only Carlos's localized professional title: “Senior Data Engineer” in English or “Engenheiro de Dados Sênior” in pt-BR. It MUST NOT contain a tagline or descriptive sentence.
- **FR-026**: The hero MUST NOT display a role or specialty eyebrow above its main headline in either language. The main headline MUST be the first text in the hero copy column.

## 9. Content, privacy, and trust requirements

- Do not republish private source documents in full or expose the source repository.
- Do not include names of individuals, incidents, opinions about managers, conflicts, negotiations, or compensation details.
- Do not disclose client names, personal data, employee data, real data samples, internal screens, private URLs, IDs, detailed architecture, or security configurations.
- Treat revenue and scale figures (such as company revenue, customer counts, trucks, reports, and campaign amounts) as information requiring permission before publication.
- Prefer sanitized abstractions, synthetic data, conceptual diagrams, and personal repositories when they can demonstrate the same capability.
- Do not claim that a system is currently in production without confirming its status and permission to describe it.
- Use first person to explain individual contribution and collective wording for team outcomes.
- Add a brief note that the case studies describe the author’s professional contribution and omit protected details if this helps explain abstractions.
- Review any content that could reveal trade secrets or employer information before publication. The user selected the four initiatives and approved high-level attribution to MadeiraMadeira, Gobrax, and COPAPA. This does not approve client names, internal metrics, employee data, private source links, or sensitive implementation details.

## 10. Experience, accessibility, and presentation requirements

### 10.1 Code architecture and organization

- All application code MUST follow Clean Architecture and its dependency rule strictly: dependencies point inward toward stable domain and application rules, while presentation and framework details remain outside those rules.
- Keep responsibilities explicit and separate. Presentation markup and Bootstrap styling, user-facing behavior, portfolio content and localization, and external integrations or browser-specific details MUST NOT be entangled in a single module when they have distinct reasons to change.
- Core content and language-specific copy MUST be structured so the English and pt-BR experiences remain consistent without duplicating behavior or mixing translation strings into unrelated presentation logic.
- Bootstrap, the browser DOM, and any third-party service MUST be treated as outer-layer details; domain and application policies MUST NOT depend directly on them.
- Apply Clean Code rigorously: use intention-revealing names, small single-purpose functions and modules, explicit contracts, low duplication, simple control flow, and remove dead or speculative code.
- Code MUST be written in English, including identifiers, filenames, comments, and technical documentation, except for user-facing localized content and proper names.
- Prefer the simplest structure that preserves these boundaries. Clean Architecture MUST NOT be interpreted as a reason to add layers, abstractions, or dependencies without a concrete responsibility.
- The implementation plan MUST show how the static-site structure preserves the dependency rule and code boundaries without adding layers that have no concrete responsibility.
- **Architecture acceptance check**: no domain or application policy depends directly on Bootstrap, DOM rendering, or an external service; every module has a clear reason to change.
- **Clean Code acceptance check**: changed code has intention-revealing names, single-purpose units, explicit contracts, no avoidable duplication or dead code, and control flow that is straightforward to follow.

- The site must work on small, medium, and large screens without horizontal scrolling.
- Bootstrap 5.3 should be the preferred interface foundation: use its grid, components, and utilities before writing custom CSS for structures already covered by the framework.
- Use responsive containers, the grid (`container`, `row`, `col-*`, `row-cols-*`), and gutters to organize the hero, case studies, experience, education, and contact sections. Columns should stack on narrow screens and spread across wider breakpoints.
- Use a responsive `navbar` with `collapse` for mobile navigation, including an accessible label on the expand button, correct ARIA states, and keyboard navigation.
- Use `card` to summarize case studies and experience, `badge` for technologies or categories, and `btn` variants for primary and secondary actions. Essential case-study content must not depend on hover.
- Use Bootstrap spacing, display, flex, alignment, typography, border, and color utilities to create a responsive visual rhythm. Reserve custom CSS and theme variables for visual identity, editorial details, and needs the framework does not cover.
- Bootstrap accordion may be used for secondary content, such as education details, if it remains discoverable and accessible. Avoid carousels and interactive components without a clear reading benefit.
- Keep Bootstrap on the 5.3.x line for the first implementation to match the existing HTML. Load JavaScript only for behaviors in use; components using `collapse` require the corresponding JavaScript.
- Bootstrap alone does not guarantee accessibility or visual quality: semantics, contrast, focus, hierarchy, and content remain subject to this specification.
- The palette must use black as the dominant background color. Dark blue/navy must serve as the secondary accent for links, actions, selected states, and small visual details; it must not compete with content or replace black as the primary identity. Use lighter blue only for foreground text or focus indicators when dark navy alone would not provide sufficient contrast.
- Define Bootstrap theme color tokens centrally, including theme CSS variables and component classes as needed, so buttons, links, navbar, cards, and interaction states are consistent with the black background and dark-navy accent.
- Essential text and elements on the black background must use colors with sufficient contrast. Validate blue shades in each context, especially link text, keyboard focus, and buttons; use dark-navy surfaces with contrasting text and lighter-blue foreground accents where needed to retain readability.
- The visual design should suggest precision, curiosity, and warmth. Avoid a generic corporate dashboard aesthetic, excessive gradients, repetitive cards, heavy animation, and meaningless stock photography.
- The identity may subtly reference maps, flows, data layers, or engineering notes, but readability and contrast come first.
- Keep content available over common mobile connections and do not require visitors to run code or create an account.

## 11. Success criteria

- **SC-001**: In a 10-second review of the home page, at least 4 out of 5 representative visitors can identify the target role, primary specialty, and main call to action.
- **SC-002**: A visitor can reach a case study from the home page in no more than two navigation actions.
- **SC-003**: Every displayed contact and profile link reaches the correct destination during the release review.
- **SC-004**: Each selected-work card presents the problem, individual contribution, and technical approach; any outcome claims are supported, and estimates are distinguished from realized results.
- **SC-005**: No metric, screenshot, client name, or employer detail is published without accuracy and permission checks; Gobrax and COPAPA are approved for selected-work attribution.
- **SC-006**: Core content remains readable and navigable in a narrow mobile viewport and by keyboard.
- **SC-007**: English and Portuguese communicate the same essential facts about role, experience, education, projects, and contact.
- **SC-008**: Every claim about production, financial impact, scale, or performance has evidence or clearly qualified language identifiable during editorial review.
- **SC-009**: The combination of black background, dark-blue/navy accents, supporting foreground colors, and text remains distinguishable and readable for content and interactive controls throughout the page.
- **SC-010**: A reader can switch from English to pt-BR and back using the visible selector without encountering mixed or missing essential content.
- **SC-011**: On both language versions, the only text directly beneath the portrait is the localized title “Senior Data Engineer” or “Engenheiro de Dados Sênior”.
- **SC-012**: On both language versions, no role or specialty eyebrow appears above the hero's main headline.

## 12. Edge cases

- If publication permission for a corporate case is unavailable, show only an approved generic description or omit the case.
- If a case has no approved metrics, explain the qualitative outcome without inventing a substitute measure.
- If a PDF resume becomes inconsistent with the site, temporarily remove its download until both are synchronized.
- If one language version is incomplete, do not present the selector as if parity were ready; communicate availability or hide the unfinished route.
- On narrow screens, reflow navigation, cards, and diagrams into a column without cutting essential content.
- If an image or animation fails to load or is disabled by the visitor, the narrative and controls must remain usable.
- If dates or titles differ between historical documents, use the latest public profile as the presentation source and validate the discrepancy before publication.
- If a case depends on employee, telematics, customer, or internal operational data, do not use real data in the portfolio; replace it with an authorized synthetic representation.

## 13. Content entities

- **Professional profile**: public name, title, summary, optional location, languages, and professional links.
- **Selected work card**: company/project attribution, concise context, individual contribution, high-level technical approach, and technologies supported by the initiative.
- **Engineering note**: technical situation, alternatives, explicit design decision, trade-off, and evidence that could justify revisiting it.
- **Experience**: organization, public title, dates, optional work arrangement/location, and summarized contributions.
- **Education**: institution, program, degree, dates, status, and optional description.
- **Skill**: name, category, and optional relationship to supporting experiences/cases.
- **Contact method**: channel, destination, accessible label, and external-link indicator where relevant.

## 14. Assumptions and open decisions

- The existing repository contains `index.html` with Bootstrap 5.3.3 via CDN; this specification defines experience and content without requiring a technology migration.
- The existing HTML already loads Bootstrap 5.3.3 via CDN; the first version should remain on the 5.3.x line and reuse official responsive patterns.
- The current GitHub Pages hosting arrangement remains unchanged; migration to another hosting provider is outside this feature.
- The first release contains exactly the four selected initiatives listed in Section 6.3; it removes the previously featured Pytrends project from the Selected Work section.
- Resume availability, photography placement, exact location, and visual evidence still need clarification.
- Historical figures are leads for editorial research, not automatic permission to publish.
- Public copy will be derived from the private history, but confidential, personal, or deliberately omitted content remains out of the product.

## 15. Risks and mitigations

- **Confidentiality risk**: True stories contain corporate context that must not be revealed. Mitigate with case-by-case approval, abstraction, and material review.
- **Credibility risk**: Unsupported superlatives or metrics can reduce trust. Mitigate with clear individual contribution, traceable facts, and a distinction between outcomes and projections.
- **Diffuse positioning risk**: Career breadth may obscure the current specialty. Mitigate by leading with data engineering and using earlier roles as context for business perspective.
- **Overly corporate tone risk**: The page could become a generic resume. Mitigate with concrete reasoning, direct language, and the subtle engineering-workbench editorial metaphor.
- **Stale content risk**: The stack, role, and education status change. Mitigate with periodic review and a clear maintenance source or update date.

## 16. Factual basis and editorial traceability

This specification was prepared from the supplied professional profiles in English and Portuguese, career goals, three education records, experience dossiers for COPAPA, Leads2b, Gobrax, MadeiraMadeira, and CIPEL, and repository documentation including architecture overviews and ADRs for the data platforms and Lumi. Permission to consult these sources does not make all of their contents publishable.

The career and repository materials are private sources. Do not link to them from the site or reproduce their internal implementation details.

## 17. Ready for clarification when

1. The user selects which corporate cases have permission and public evidence.
2. The default language, resume availability, public name/title, and displayed location are confirmed.
3. Each selected number is marked as approved for publication, rewritten qualitatively, or excluded.
4. The visual direction and level of personalization are agreed.
5. The specification can be converted into a technical plan without assuming hosting, analytics, or a publishing process that has not been chosen.

## 18. Bootstrap technical references

The Bootstrap features listed in this specification follow the official Bootstrap 5.3 documentation:

- [Responsive containers](https://getbootstrap.com/docs/5.3/layout/containers/)
- [Responsive grid](https://getbootstrap.com/docs/5.3/layout/grid/) and [gutters](https://getbootstrap.com/docs/5.3/layout/gutters/)
- [Navbar and collapse](https://getbootstrap.com/docs/5.3/components/navbar/)
- [Cards](https://getbootstrap.com/docs/5.3/components/card/), [badges](https://getbootstrap.com/docs/5.3/components/badge/), [buttons](https://getbootstrap.com/docs/5.3/components/buttons/), and [accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Spacing utilities](https://getbootstrap.com/docs/5.3/utilities/spacing/), [display](https://getbootstrap.com/docs/5.3/utilities/display/), and [flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
