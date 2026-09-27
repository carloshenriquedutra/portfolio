# Research: Professional Portfolio

## Decision 1: Preserve the static GitHub Pages delivery model

**Decision**: Keep the existing static HTML delivery and current GitHub Pages hosting. Do not introduce a backend, framework, build system, analytics, or hosting migration.

**Rationale**: The current page is a single static document, and the user explicitly excluded GCP hosting from this feature. Plain browser modules and static assets support the requested portfolio with low operational overhead.

**Alternatives considered**: A framework and a cloud-hosted application were unnecessary for a single page and conflict with the requested scope.

## Decision 2: Retain Bootstrap 5.3.x and use its existing CDN integration

**Decision**: Continue with the existing Bootstrap 5.3.3 CSS and bundle. Use responsive containers, grid and gutters, navbar collapse, cards, badges, buttons, and utilities. Keep custom CSS focused on theme variables and portfolio-specific details.

**Rationale**: This satisfies the explicit Bootstrap preference and the existing page already loads Bootstrap 5.3.3. The official 5.3 documentation covers these stable components and responsive layout primitives.

**Alternatives considered**: Replacing Bootstrap with another CSS system would add migration work without improving this feature. Writing all layout components from scratch would disregard the user's preference.

**References**: [Containers](https://getbootstrap.com/docs/5.3/layout/containers/), [Grid](https://getbootstrap.com/docs/5.3/layout/grid/), [Navbar](https://getbootstrap.com/docs/5.3/components/navbar/), [Cards](https://getbootstrap.com/docs/5.3/components/card/), [Badges](https://getbootstrap.com/docs/5.3/components/badge/), [Buttons](https://getbootstrap.com/docs/5.3/components/buttons/), [Utilities](https://getbootstrap.com/docs/5.3/utilities/).

## Decision 3: Keep language copy in parallel locale modules and identify the selection in the URL

**Decision**: Define English and pt-BR content using the same data shape in separate modules. English remains the semantic HTML baseline and default. A visible selector updates the query parameter (for example, `?lang=pt-BR`), programmatic language, document title/description, and rendered copy. Do not persist a preference in local storage.

**Rationale**: Parallel data makes language parity reviewable and keeps translated copy out of rendering logic. A query parameter makes the active language shareable and needs no server routing configuration. The English HTML baseline keeps the main story available without JavaScript.

**Alternatives considered**: Duplicating separate full HTML pages risks behavioral drift. Browser storage would add hidden state and complicate the explicit English default. Path-based routing is unnecessary for this static single-page repository.

## Decision 4: Apply Clean Architecture boundaries proportionately

**Decision**: Keep locale policy and selection behavior pure, isolate URL access in a browser adapter, and isolate DOM/Bootstrap rendering in the presentation layer. Compose these at a small entry point.

**Rationale**: The user requires strict Clean Architecture and Clean Code. These boundaries make the dependency direction explicit without inventing a server, generic repository, or unrelated abstraction.

**Alternatives considered**: A single large script would entangle policy, localization, URL behavior, and presentation; a full multi-package architecture would exceed the static site's responsibilities.

## Decision 5: Treat unapproved work history as editorially restricted

**Decision**: Use the four initiatives selected by the user: Lumi, the People Analytics platform through Gold, HubSpot CRM modeling in BigQuery, and COPAPA market sizing. Keep descriptions public-safe and concise. Do not publish confidential product architecture, employee/customer data, private source links, or unapproved figures. The earlier Pytrends example is not part of the selected-work section in this release.

**Rationale**: The private history was supplied as source material, not as blanket permission to publish every detail. This preserves credibility and privacy.

**Alternatives considered**: Including every career detail or historical metric would increase disclosure and accuracy risk without being necessary to explain the candidate's judgment.

## Decision 6: Make engineering notes technical decision records

**Decision**: Write Engineering Notes around specific constraints, alternatives, selected invariants, operational trade-offs, and observable reconsideration triggers. Cover grain/cardinality, medallion-layer boundaries, workload-aware materialization and partitioning, and retrieval as an input to generation.

**Rationale**: The user asked for a more technical voice. Decision records demonstrate computer-science reasoning through concrete system properties, rather than generic engineering advice or an internal ADR dump.
