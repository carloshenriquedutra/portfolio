# Feature Specification: Recruiter-First Multi-Page Portfolio

> Historical feature record: Carlos later rejected the Challenge Compass. [Feature 003](../003-remove-challenge-compass/spec.md) supersedes only its Compass requirements; the multi-page project journey remains approved.

**Branch**: `main` (personal repository) · **Created**: 2026-09-27 · **Status**: Approved direction from Carlos · **Input**: recruiter experience audits and the request for a memorable first impression, separate project pages, implementation, commit, and push

## 1. Problem and objective

The current portfolio puts four project descriptions and four full engineering decisions on one long home page. A recruiter needs a fast picture of Carlos's role, relevant work, experience, skills, and contact path. A technical manager needs a direct way to choose a project and read its technical context. The current single-page structure makes both readers pass through content intended for the other.

Build a concise home page, a dedicated Projects index, and one detail page for each of the four approved cases. Give the home page a distinctive, useful first impression: a visual Challenge Compass that maps four real business challenges to those project pages. Keep English primary and offer equivalent pt-BR throughout. Preserve the approved portrait, name/title caption, black and dark-navy palette, Bootstrap-first HTML, and public-information boundaries.

## 2. User stories

### 2.1 Recruiter sees the fit quickly (P1)

A recruiter opening the home page can identify Carlos, his Senior Data Engineer role, the types of problems he works on, four recognizable projects, a concise career summary, core skills, and a contact path without reading a full case study or engineering note.

**Independent acceptance**: Open the home page in English and scan headings, short previews, and actions. No full engineering decision or dense project case appears on the home page.

### 2.2 Visitor chooses a challenge from the first impression (P1)

The first screen presents a Challenge Compass with four accessible, clearly named links: Employees need answers → Lumi; Data needs a foundation → People Analytics; CRM needs a clear model → HubSpot; Markets need a map → COPAPA. The component feels distinctive through a connected visual route, typography, navy accents, and restrained motion, while remaining understandable without motion or JavaScript.

**Independent acceptance**: Each compass path opens the matching detail page directly. The portrait and main message remain readable; focus and reduced-motion states work.

### 2.3 Technical manager explores a project (P1)

A technical manager can open the Projects index from navigation, select any of the four approved cases, and read its business problem, Carlos's individual contribution, approach, verified outcome or honest status, technologies, constraints, trade-offs, and related engineering decisions on a dedicated page.

**Independent acceptance**: All four project URLs work when opened directly or reloaded. Project pages include an obvious route back to Projects and to Contact. Existing public descriptions are reused without private links or invented metrics.

### 2.4 Brazilian visitor uses the full site (P1)

A visitor can switch between English and pt-BR on home, Projects index, and every project detail. The selected language remains active when navigating to another page; metadata, links, and essential content remain coherent.

**Independent acceptance**: Open a detail URL with `?lang=pt-BR`, follow internal links, switch to English, and reload. No mixed-language project content appears.

## 3. Functional requirements

- **FR-001**: The home page MUST remain an English-first, recruiter-oriented summary with the official portrait and the exact English caption “Carlos Dutra, Senior Data Engineer”; the pt-BR caption MUST be “Carlos Dutra, Engenheiro de Dados Sênior”.
- **FR-002**: The home page MUST NOT contain a full project case, full engineering decision, or an accordion hiding either full text.
- **FR-003**: The Challenge Compass MUST show four challenge-to-project links matching Section 2.2 and MUST lead directly to four distinct project URLs.
- **FR-004**: The Projects navigation item MUST open a dedicated Projects index, which MUST list exactly the four approved projects in order: Lumi, People Analytics platform, HubSpot CRM modeling, and COPAPA market sizing.
- **FR-005**: Each project MUST have a dedicated page with company, project, business problem, Carlos's specific contribution, approach, technologies, truthful result or status, related technical reasoning, and links back to Projects and Contact.
- **FR-006**: Detailed engineering decisions MUST appear only on the relevant project page or a linked technical-note page, never as full text on the home page.
- **FR-007**: Home project previews MUST be concise: a recognizable heading, no more than two short body sentences, and a descriptive link to the detail page.
- **FR-008**: English MUST be the default across all routes; pt-BR MUST cover home, index, detail, navigation, metadata, link labels, and the Challenge Compass without changing factual claims.
- **FR-009**: Internal navigation MUST preserve the selected language and work under the GitHub Pages `/portfolio/` base path on direct load and reload.
- **FR-010**: Essential English page content and navigation MUST remain usable without JavaScript. Optional effects MUST respect `prefers-reduced-motion`.
- **FR-011**: The visual implementation MUST prioritize Bootstrap 5.3 grid, cards, navigation, buttons, spacing utilities, and accessible breadcrumbs; custom CSS is reserved for the portfolio's visual identity and Challenge Compass.
- **FR-012**: Published cases MUST use only already approved public-safe descriptions; they MUST NOT expose private repository URLs, employee data, internal details, unsupported metrics, or outcomes that were only proposed.
- **FR-013**: Domain and application logic MUST remain independent of the DOM and Bootstrap; browser URL behavior belongs in an adapter and rendering in presentation modules. Code and content MUST remain explicit, small, and readable.

## 4. Non-goals and boundaries

- This feature does not create the résumé PDF, video, social feeds, analytics tracking, a chatbot, or hosting outside GitHub Pages.
- This feature does not use Jira or create a Pull Request. The personal repository is updated directly on `main`.
- No employer-private source material is copied to the site. The four project pages expand only on descriptions already approved for the public portfolio and `about-me.md`.
- The Challenge Compass is navigation and a visual expression of Carlos's problem-first approach; it does not present fabricated data, measured impact, or skill percentages.

## 5. Edge cases

- A project URL opened directly must load its English baseline and support switching to pt-BR.
- Internal links from `?lang=pt-BR` must remain in pt-BR, including paths back to the home page and Projects index.
- If JavaScript or CSS animation fails, visitors can still reach every project and contact link.
- Longer pt-BR labels must wrap or reflow without overlap in the compass, cards, navigation, and breadcrumbs.
- A project without a public external artifact must still have a useful detail page; no dead-end evidence button is shown.
- Small screens must show the main message and a useful action before a large decorative element dominates the view.

## 6. Success criteria

- **SC-001**: The home page contains four short project previews and zero full engineering notes or project cases.
- **SC-002**: All four compass links and all four index entries open the matching distinct project detail pages.
- **SC-003**: Every project detail URL loads on direct navigation and reload under the GitHub Pages base path.
- **SC-004**: English and pt-BR present the same essential facts on all six pages, and internal navigation preserves the selected language.
- **SC-005**: On desktop, the first viewport shows name/role, H1, primary actions, and the start of the Challenge Compass; on mobile, the H1 and a useful action appear before an oversized decorative element.
- **SC-006**: Every project page makes business problem, individual contribution, and related engineering reasoning discoverable through headings, with no unsupported private or impact claims.
- **SC-007**: Bootstrap components and utilities carry the responsive structure; focus, keyboard access, and reduced-motion behavior remain usable.

## 7. Source of truth and editorial decisions

The [English audit](../../docs/recruiter-experience-audit.md) and [pt-BR audit](../../docs/auditoria-experiencia-recrutador.md) record the rationale. The approved four-project order and current public descriptions in `src/content/en.js`, `src/content/pt-BR.js`, and `about-me.md` bound the content. Project routes and component composition are implementation choices; the multi-page structure, concise home, and Challenge Compass are user-confirmed requirements.
