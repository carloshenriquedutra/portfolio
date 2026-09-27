# Carlos Dutra — Professional Portfolio

An English-first, bilingual (English / Brazilian Portuguese) professional portfolio for Carlos Dutra, Senior Data Engineer. It focuses on how business questions become dependable data products, with selected work, career context, and engineering decisions.

## Run locally

From the repository root, start a static server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. English is the default. The language switch updates the query string; `?lang=pt-BR` opens the Brazilian Portuguese version.

The page uses Bootstrap 5.3 from its CDN and native browser JavaScript modules. No package installation or build step is required.

## Structure

- `index.html` — semantic English baseline and page landmarks.
- `assets/css/theme.css` — Bootstrap theme overrides and the black-and-dark-green visual identity.
- `assets/images/profile.jpg` — official profile photograph supplied for the portfolio.
- `src/domain/` and `src/application/` — locale rules and use-case behavior, independent of the browser UI.
- `src/adapters/browser/` — browser URL integration.
- `src/content/` — English and pt-BR copy with matching data structures.
- `src/presentation/` — DOM rendering and Bootstrap-facing presentation.
- `specs/001-professional-portfolio/` — requirements, plan, design records, and implementation tasks.

The current static GitHub Pages hosting arrangement remains unchanged. Public descriptions of employer work are intentionally generalized; add detailed evidence, metrics, or internal implementation information only after accuracy and publication permission are confirmed.
