# Carlos Dutra — Professional Portfolio

An English-first, bilingual (English / Brazilian Portuguese) professional portfolio for Carlos Dutra, Senior Data Engineer. The concise home page gives recruiters a quick introduction. A Projects index and four dedicated case pages carry the business context and engineering decisions.

Visit the live portfolio: <https://carloshenriquedutra.github.io/portfolio/>.

## Run locally

From the repository root, start a static server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. English is the default. The language switch updates the query string; `?lang=pt-BR` opens the Brazilian Portuguese version and is preserved on internal links. The project pages can be opened directly under `/projects/`.

The site uses a local copy of Bootstrap 5.3.3 and native browser JavaScript modules. No package installation, build step, or CDN connection is required to preview it.

## Structure

- `index.html` — concise recruiter-facing home with direct paths to Projects and Contact.
- `projects/index.html` — index of the four selected projects.
- `projects/<slug>/index.html` — English baseline and technical detail for each project.
- `assets/css/theme.css` — Bootstrap theme overrides and the black-and-dark-navy visual identity.
- `assets/vendor/bootstrap/` — pinned Bootstrap 5.3.3 CSS, JavaScript bundle, and MIT license.
- `assets/images/profile.jpg` — official profile photograph supplied for the portfolio.
- `src/domain/` and `src/application/` — locale and project selection rules, independent of the browser UI.
- `src/adapters/browser/` — browser URL and internal-link integration.
- `src/content/` — English and pt-BR copy with matching data structures.
- `src/presentation/` — DOM rendering and Bootstrap-facing presentation.
- `specs/001-professional-portfolio/` — requirements, plan, design records, and implementation tasks.
- `specs/002-recruiter-project-journey/` — multi-page journey specification, plan, data model, and tasks.
- `specs/003-remove-challenge-compass/` — decision to retire the rejected home component while preserving the project pages.

The current static GitHub Pages hosting arrangement remains unchanged. Public descriptions of employer work are intentionally generalized; add detailed evidence, metrics, or internal implementation information only after accuracy and publication permission are confirmed.
