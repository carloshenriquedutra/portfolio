# Tasks: Recruiter-First Multi-Page Portfolio

**Input**: [spec.md](spec.md), [plan.md](plan.md), [data-model.md](data-model.md), and [quickstart.md](quickstart.md)

## Phase 1: Content and route foundation

- [x] T001 Define the four approved project IDs and paths in `src/domain/projects.js` and a pure project selector in `src/application/select-project.js`.
- [x] T002 Extend `src/content/en.js` and `src/content/pt-BR.js` with equivalent Challenge Compass, concise preview, and public-safe detail content for all four projects.
- [x] T003 Add locale-preserving, base-path-safe internal link behavior in `src/adapters/browser/site-links.js`.

## Phase 2: Recruiter-first home

- [x] T004 Replace full home cases and Engineering Notes in `index.html` with short previews, a career/skills summary, and working Projects navigation.
- [x] T005 Implement the accessible four-path Challenge Compass in `index.html`, localized content, and `assets/css/theme.css` using Bootstrap layout utilities and restrained visual motion.
- [x] T006 Refactor `src/presentation/render-page.js` and `src/main.js` so the home renders from content without assuming detail-page elements exist.

## Phase 3: Technical-manager project journey

- [x] T007 Add a dedicated `projects/index.html` with four scannable project previews and direct detail links.
- [x] T008 Add static English baseline pages for Lumi, People Analytics, HubSpot CRM, and COPAPA under `projects/<slug>/index.html`.
- [x] T009 Add reusable project-index and project-detail rendering in `src/presentation/render-projects.js`, including related engineering decisions only on the relevant detail pages.
- [x] T010 Add consistent navigation, breadcrumbs/back paths, contact links, and responsive detail-page styling across all pages.

## Phase 4: Localization and convergence

- [x] T011 Preserve English/pt-BR selection across home, index, detail, and direct URLs; localize metadata, compass, headings, labels, and project content.
- [x] T012 Review public claims and the full diff; inspect static link paths, English fallback pages, desktop/mobile layouts, pt-BR rendering, and reduced-motion styling.
- [x] T013 Reconcile `spec.md`, `plan.md`, `data-model.md`, `quickstart.md`, and tasks with the delivered behavior, and prepare the release for a direct commit to `main`.
