# Implementation Plan: Recruiter-First Multi-Page Portfolio

**Branch**: `main` · **Date**: 2026-09-27 · **Spec**: [spec.md](spec.md)

## 1. Summary

Replace the single long home page with a concise recruiter route, a dedicated Projects index, and four directly loadable project detail pages. Introduce a Challenge Compass in the hero as a functional visual signature: four business challenges link to the four real cases. Move all complete technical decisions off the home page. Retain GitHub Pages, English-first static HTML, pt-BR browser localization, official portrait, black/navy palette, and Bootstrap 5.3.

## 2. Technical context and decisions

| Concern | Decision |
|---|---|
| Hosting | Existing static GitHub Pages deployment under `/portfolio/`. No new service or deployment workflow. |
| Page routes | `index.html`, `projects/index.html`, and four nested `projects/<slug>/index.html` files; relative links provide valid English fallback on direct load. |
| English baseline | Every page contains meaningful English HTML and navigation before JavaScript runs. The small amount of shared shell markup is repeated across static files to preserve the no-build local workflow and no-script navigation. |
| Localization | Existing `en.js` and `pt-BR.js` gain equivalent project IDs, summaries, detail sections, and compass labels. The `?lang=pt-BR` query parameter remains the language contract. |
| Routing policy | A pure domain module maps approved project IDs to slugs. A browser adapter updates internal links for the selected locale using each page's relative root prefix. |
| Presentation | Refactor current presentation into small functions for shared copy, home previews, Projects index, and detail content. The composition root selects the current page from static body data. |
| Visual treatment | A local, pinned Bootstrap 5.3.3 copy provides grid, cards, buttons, and responsive navbar without CDN dependence. Custom CSS renders a connected navy route for the Challenge Compass, with focus and reduced-motion support. |
| Content safety | Reuse current public site and `about-me.md` descriptions. Do not read or publish employer-private sources for new claims. |
| Verification | Check all six direct URLs, locale persistence, keyboard links, no-script English baseline, mobile layout, and absence of full notes on home. Use targeted checks for this material navigation change. |

The static English fallback requires a small amount of duplicated page shell HTML. A build system or runtime-only rendering would add operational dependencies or weaken direct-page content. The content data and browser rendering remain centralized; structural shell duplication is limited to six small HTML files.

## 3. Clean Architecture boundaries

- `src/domain/` owns locale values and approved project IDs/slugs. It has no DOM, Bootstrap, or browser URL dependency.
- `src/application/` owns pure selection of a project/content record and locale policy.
- `src/adapters/browser/` owns query-string and root-relative link behavior.
- `src/content/` owns equivalent localized copy and case facts.
- `src/presentation/` owns DOM construction, accessible markup, and Bootstrap-facing classes.
- `src/main.js` composes data, URL state, route identity, and page renderers.

Each function should have one clear purpose; presentation code should render from content records instead of embedding project-specific facts. The approved project order is one explicit constant. No framework, backend, remote feed, or arbitrary data layer is introduced.

## 4. Project structure

```text
index.html
projects/
├── index.html
├── lumi/index.html
├── people-analytics/index.html
├── hubspot-crm/index.html
└── copapa-market-sizing/index.html
assets/css/theme.css
assets/vendor/bootstrap/
src/
├── domain/projects.js
├── application/select-project.js
├── adapters/browser/site-links.js
├── content/en.js
├── content/pt-BR.js
├── presentation/render-page.js
├── presentation/render-projects.js
└── main.js
specs/002-recruiter-project-journey/
├── spec.md
├── plan.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

## 5. Constitution and delivery checks

| Check | Application |
|---|---|
| Spec first | This plan follows `spec.md`; implementation tasks trace to its requirements and success criteria. |
| Personal repository | Work directly on `main`; no Jira card or PR for this personal GitHub repository. |
| Privacy | Existing public descriptions are the only source for expanded case pages; no private URLs, sensitive data, or unsupported claims. |
| Clean Architecture | Pure domain/application modules remain independent of DOM and Bootstrap; adapters and presentation own browser concerns. |
| Progressive enhancement | English content and page links are present in static HTML, while JavaScript adds localization. |
| Review | Directly review the resulting diff and manually verify the recruiter and technical-manager journeys before committing and pushing. |

The shared `.specify` constitution contains corporate Jira/PR workflow clauses. The repository-level personal-repository rule and Carlos's explicit no-Jira instruction govern this portfolio; the spec-first, traceability, quality, privacy, and simplicity principles still apply.
