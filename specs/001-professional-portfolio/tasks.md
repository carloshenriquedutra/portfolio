# Tasks: Carlos Dutra's Professional Portfolio

**Input**: Design documents from `specs/001-professional-portfolio/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `quickstart.md`

**Tests**: No automated test tasks; none were requested. Use the manual acceptance walkthrough in `quickstart.md` as an editorial/acceptance reference.

## Phase 1: Setup

**Purpose**: Establish the static assets and source layout described in the implementation plan.

- [x] T001 Create the planned `assets/css/`, `assets/images/`, and `src/{domain,application,adapters/browser,content,presentation}/` directories through their first files.
- [x] T002 Copy the official portrait unchanged from `/home/carlosdutra/dev/perfil-2026-09-26.jpg` to `assets/images/profile.jpg`.

## Phase 2: Foundational

**Purpose**: Establish design tokens and independent locale policy before story-specific presentation.

- [x] T003 [P] Define centralized Bootstrap-compatible black and dark-green theme variables, readable text, focus states, and portfolio-specific presentation rules in `assets/css/theme.css`.
- [x] T004 [P] Define supported locale identifiers and pure fallback/selection policy in `src/domain/locale.js`.
- [x] T005 Implement the locale-selection use case without DOM or Bootstrap dependencies in `src/application/select-locale.js`.
- [x] T006 Implement browser query-string read/write behavior in `src/adapters/browser/locale-url.js`.

## Phase 3: User Story 1 — International recruiter (Priority: P1)

**Goal**: Present a fast, English-first introduction with the role, value proposition, and contact/navigation actions.

**Independent acceptance**: The first viewport identifies Senior Data Engineer, summarizes the business-and-engineering value, and provides a meaningful next action in English.

- [x] T007 [US1] Create the semantic English-first page shell, accessible Bootstrap 5.3 navbar/collapse, responsive hero with portrait, and section anchors in `index.html`.
- [x] T008 [US1] Add verified contact/profile actions and Bootstrap responsive layout across contact and navigation regions in `index.html`.
- [x] T009 [US1] Add the page theme stylesheet and Bootstrap bundle integration to `index.html`, loading only required behavior.

## Phase 4: User Story 2 — Technical leader or hiring manager (Priority: P1)

**Goal**: Explain selected technical work and engineering decisions with clear individual ownership, trade-offs, outcomes, and disclosure boundaries.

**Independent acceptance**: A hiring manager can identify a case's problem, Carlos's contribution, approach, outcome, and any public evidence without encountering unsupported or private claims.

- [x] T010 [US2] Add curated, public-safe case-study content and engineering decision stories to `src/content/en.js`, excluding unapproved confidential detail and unsupported metrics.
- [x] T011 [US2] Render case-study and decision-story sections with Bootstrap cards, badges, and responsive grid in `src/presentation/render-page.js`.
- [x] T012 [US2] Add accessible case-study and engineering-decisions section landmarks and no-script English baseline in `index.html`.

## Phase 5: User Story 3 — Technical peer or potential collaborator (Priority: P2)

**Goal**: Make selected technical work and interests easy to explore, with clear contact paths.

**Independent acceptance**: A visitor can understand the selected technical initiatives and reach clearly labeled professional contact profiles.

- [x] T013 [US3] Add the initial public project and categorized skill summaries supported by the supplied history in `src/content/en.js`.
- [x] T014 [US3] Render projects, grouped skills, experience, education, and verified contact destinations using semantic Bootstrap components in `src/presentation/render-page.js`.

## Phase 6: User Story 4 — Brazilian visitor (Priority: P2)

**Goal**: Provide a complete, equivalent pt-BR experience, a visible language selector, and a responsive official portrait presentation.

**Independent acceptance**: The visitor switches in both directions, sees consistent facts and matching sections, and the document language/metadata updates with the selected locale.

- [x] T015 [US4] Define pt-BR copy matching the English locale schema and essential facts in `src/content/pt-BR.js`.
- [x] T016 [US4] Implement locale-aware rendering, selector state, document language/title/description updates, and English fallback in `src/presentation/render-page.js`.
- [x] T017 [US4] Add the dependency composition root and progressive enhancement startup in `src/main.js` and connect it from `index.html`.
- [x] T018 [US4] Ensure responsive portrait cropping, visible focus, black-dominant/green-accent contrast, and narrow-screen layout in `assets/css/theme.css` and `index.html`.

## Phase 7: Polish and cross-cutting concerns

**Purpose**: Keep the implementation and feature records aligned with the requirements.

- [x] T019 Review public claims against the supplied career history, keep employer stories generic, omit unapproved metrics, and document link/permission checks for release review in `src/content/en.js`, `src/content/pt-BR.js`, and `README.md`.
- [x] T020 Update the repository overview to describe the English-first bilingual portfolio and static local run instructions in `README.md`.
- [x] T021 Mark completed tasks and record any remaining editorial or permission-dependent content limitation in `specs/001-professional-portfolio/tasks.md`.

## Dependencies

- Setup precedes foundational work.
- T003 through T006 establish the shared presentation and locale boundaries before the stories.
- US1 and US2 are the P1 deliverable; US3 adds public project depth; US4 completes localized parity and final responsive polish.
- T017 depends on all locale, adapter, use-case, and presentation modules existing.

## Parallel Opportunities

- T003 and T004 can be implemented independently.
- After foundational tasks, English case content (T010) and public project content (T013) can be drafted independently, but view integration shares `render-page.js` and should be sequenced.
- No automated test tasks are included.

## Implementation Strategy

Deliver the P1 recruiter journey and safe, concise case studies first. Continue with project/contact context, then finish pt-BR parity and responsive/accessibility polish. Preserve the static English baseline throughout.

## Phase 8: Convergence

**Purpose**: Correct the official portrait's rendered aspect ratio, found during review of the published page.

- [x] T022 Set the responsive portrait image height to `auto` in `assets/css/theme.css` so the HTML's intrinsic 1920 × 1920 dimensions do not produce a tall, narrow crop (FR-017, US4/AC3; partial).
- [x] T023 Version the theme stylesheet URL in `index.html` and size `.portrait-frame` as a square in `assets/css/theme.css`, ensuring browsers fetch the corrected portrait rules and keep the image undistorted (FR-017, US4/AC3; partial).

## Phase 9: Selected-work editorial refinement

**Purpose**: Make the featured stories recognizable by company and initiative while reducing the text shown in each card.

- [x] T024 Add approved company/project attribution, concise summaries and contributions, localized parity, and matching English no-script content; update the spec and case-study model to capture the editorial requirement (FR-019).

## Phase 10: Dark-green visual direction

**Purpose**: Replace the previous blue accent system with dark green while retaining readable contrast and Bootstrap consistency.

- [x] T025 Update Bootstrap color tokens, component states, portrait frame, cards, timeline, decision panels, repository overview, and visual requirements to the black-and-dark-green palette (FR-016, SC-009).

## Phase 11: Selected work and engineering notes

**Purpose**: Replace the earlier featured-project lineup with the four user-selected initiatives and give Engineering Notes the requested technical depth in both locales and the no-script baseline.

- [x] T026 Update English and pt-BR Selected Work to exactly four concise, attributed cases; expand Engineering Notes into technically precise decision records; synchronize the static English baseline and feature documents; record future social-feed ideas in `todo.md` (FR-020, FR-021).

## Phase 12: Engineering-note attribution

**Purpose**: Give every engineering decision story explicit company, project, and business context before the technical reasoning.

- [x] T027 Add localized company/project attribution and business-problem statements to each Engineering Note; render the same reading order in the JavaScript view and static English baseline; update the content model and specification (FR-022).

## Phase 13: Engineering-note order

**Purpose**: Lead with the Lumi case and reverse the previous order of the engineering decisions.

- [x] T028 Reverse the four Engineering Notes in both locale datasets and the static fallback, placing Lumi first; document the approved order (FR-023).

## Phase 14: Lumi note accuracy

**Purpose**: Explain the retrieval decision without unsupported statements about internal policy or model-update cadence.

- [x] T029 Reframe the Lumi technical constraint around source traceability, remove claims about relative update rates, and align the English/pt-BR copy and static fallback (FR-024).

## Phase 15: Dark-navy visual direction

**Purpose**: Restore dark-blue/navy accents while keeping black as the dominant background and preserving readable contrast.

- [x] T030 Replace current green accents with dark-blue/navy Bootstrap tokens and component states; align the current palette in the specification, plan, README, and acceptance walkthrough (FR-016, SC-009).

## Phase 16: Portrait title copy

**Purpose**: Replace the humorous portrait caption with only the localized professional title.

- [x] T031 Replace the portrait caption with `Senior Data Engineer` in English and `Engenheiro de Dados Sênior` in pt-BR, update the no-script HTML baseline and portrait-title styling, and verify both locale strings match FR-025 and SC-011 in `index.html`, `src/content/en.js`, `src/content/pt-BR.js`, and `assets/css/theme.css`.
- [x] T032 Remove the role eyebrow above the hero headline from the English baseline and both locale records, remove its unused style, and verify that the main headline begins the hero copy in both languages per FR-026 and SC-012 in `index.html`, `src/content/en.js`, `src/content/pt-BR.js`, and `assets/css/theme.css`.
- [x] T033 Update the portrait caption to show Carlos's name and localized professional title separated by a comma in the English baseline and both locale records; update FR-025, SC-011, the data model, and quickstart acceptance guidance.
- [x] T034 Replace the About section copy with the approved RevOps, Data Analytics, and Data Engineering narrative in English and pt-BR, keep the static HTML fallback aligned, and reflect the messaging requirement in the specification.
