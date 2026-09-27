# Implementation Plan: Carlos Dutra's Professional Portfolio

**Branch**: `main` (personal repository; no feature branch) | **Date**: 2026-09-27 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-professional-portfolio/spec.md`

## Summary

Replace the existing Portuguese-only analyst landing page with an English-first, bilingual professional portfolio that presents Carlos as a Senior Data Engineer through concise career context, carefully bounded technical case studies, engineering decisions, and clear contact actions. Keep the existing static GitHub Pages deployment and Bootstrap 5.3.x CDN foundation. Use small browser-native JavaScript modules and a minimal, explicit Clean Architecture boundary so content and language policy do not depend on Bootstrap or the DOM.

## Technical Context

**Language/Version**: HTML5, CSS3, browser JavaScript ES modules (ES2020-compatible syntax)

**Primary Dependencies**: Bootstrap 5.3.3 CSS and bundle via existing CDN links; no package manager or build step

**Storage**: Static files only; no database, API, or saved language preference

**Testing**: No automated test suite requested; validate with source review and the manual acceptance walkthrough in `quickstart.md`

**Target Platform**: Modern desktop and mobile browsers; static GitHub Pages

**Project Type**: Static single-page web application

**Performance Goals**: Render meaningful English content immediately from HTML; keep the page lightweight, avoid blocking third-party dependencies beyond Bootstrap, and preserve usable content if optional images or scripting fail

**Constraints**: Keep hosting unchanged; no backend, analytics, application framework, build tooling, or GCP hosting work; Bootstrap remains 5.3.x; use the supplied portrait locally; avoid unapproved private/employer information; strict Clean Architecture and Clean Code boundaries

**Scale/Scope**: One responsive portfolio page, English and pt-BR copy, four or fewer curated case studies, career/education/skills/contact sections

## Constitution Check

| Gate | Status | Evidence / application |
|---|---|---|
| Spec is the source of truth | PASS | This plan and tasks derive from `spec.md`; deviations must update it first. |
| Traceability and validation | PASS | Tasks map to four prioritized user stories and the acceptance walkthrough maps to their criteria. No automated test tasks were requested. |
| Explicit scope and ownership | PASS | One personal repository, `main`; no Jira, separate branch, PR, or other-repository work under the user-provided personal-repository rules. |
| Quality and recovery | PASS | Static HTML retains primary English content if scripting fails; no runtime service or external state is introduced. |
| Security and privacy | PASS | No secrets, tracking, API, private-source links, real private data, or unapproved employer details are added. |
| Simplicity and incremental delivery | PASS | One static page and a small set of browser modules; no framework, build system, or speculative abstractions. |
| Clean Architecture / Clean Code (user requirement) | PASS | Domain/application code remains framework- and DOM-independent; adapters own browser URL behavior; presentation owns rendering and Bootstrap integration; single-purpose modules and explicit locale content. |

The checked-in constitution describes a corporate People Analytics workflow. Its Jira, branch, PR, and runtime deployment gates do not apply to this personal portfolio: the repository instructions specify direct work on `main`, and the user explicitly prohibited Jira work. The constitutional requirements for spec-first work, traceability, privacy, and simplicity remain applicable.

## Project Structure

### Documentation (this feature)

```text
specs/001-professional-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/requirements.md
└── tasks.md
```

No `contracts/` directory is needed: the page exposes no programmatic API or integration contract.

### Source Code (repository root)

```text
index.html                         # English-first semantic shell and progressive enhancement
assets/
├── css/theme.css                  # Bootstrap token overrides and portfolio-specific presentation
└── images/profile.jpg             # User-supplied official portrait, copied unchanged
src/
├── domain/locale.js               # Locale identifiers and pure locale policy
├── application/select-locale.js   # Locale selection use case
├── adapters/browser/locale-url.js # Query-string browser adapter
├── content/en.js                  # English content and portfolio data
├── content/pt-BR.js               # Brazilian Portuguese content with equivalent schema
├── presentation/render-page.js    # DOM rendering and view-state updates
└── main.js                        # Composition root / progressive enhancement entry point
```

**Structure Decision**: Keep a single deployable page, but separate stable locale policy and use-case behavior from browser URL/DOM/Bootstrap details. English copy is present in semantic HTML as the no-JavaScript baseline; the application module enhances the page and switches equivalent locale data. Bootstrap remains an outer presentation dependency. Avoid creating generic repositories, service layers, or abstractions without a concrete reason.

## Phase 0: Research

See [research.md](research.md). The existing Bootstrap 5.3.3 CDN integration is retained. Bootstrap responsive layout and components are used for structure and navigation, with custom theme variables limited to the black-and-blue visual identity. Bilingual content stays in matched locale modules, with the URL query identifying the active language.

## Phase 1: Design

See [data-model.md](data-model.md) for the content entities and validation rules and [quickstart.md](quickstart.md) for the manual acceptance walkthrough. No external contracts or persistence layer are introduced.

## Post-design Constitution Check

PASS. The design preserves the spec-first workflow, maps delivery to user stories, uses no unnecessary backend or framework, keeps private material out of public content, and gives the domain/application rules no dependency on Bootstrap or browser APIs. The personal-repository exception means no Jira transition, PR, or deployment gate is invoked.

## Complexity Tracking

No constitution violations. The limited file separation directly implements the user's strict architecture requirement while keeping the site static and small.
