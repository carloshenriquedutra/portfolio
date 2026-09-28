# Content and Route Model

## 1. Project identity

Each approved case has one stable ID and slug: `lumi`, `people-analytics`, `hubspot-crm`, and `copapa-market-sizing`. The order is fixed by the specification. IDs are shared across locales and map to nested static pages. A missing or unknown ID must not render another project's facts.

## 2. Localized project record

Each locale contains a `projectDetails` record for every ID. Cases carry the stable `id`; engineering decisions carry `projectId`. The pure selector joins those records by ID and adds these public-safe detail fields:

| Field | Purpose |
|---|---|
| `case` | Existing public case selected by ID, with `company`, `project`, `title`, `summary`, `contribution`, and `technologies`. |
| `problem` | Business problem that explains why the work mattered. |
| `approach` | Carlos's method and technical boundaries. |
| `status` | Truthful result or current stage, including proposed and ongoing work. |
| `decisions` | Existing public technical decisions selected by `projectId`. |
| `analysis` | COPAPA's analytical reasoning, where no prior formal Engineering Note exists. |

The separate `compass.paths` record supplies one business challenge and project label per ID. Home and Projects cards draw their short preview from each case's `summary`; their project names are the visible headings.

The English and pt-BR records must carry equivalent facts. The page title and description are localized per route. No field implies private employer artifacts or unsupported numerical impact.

## 3. Browser state

`page` is encoded in each static HTML body as `home`, `projects`, or `project`; detail pages also carry a project ID. The selected locale is read from `?lang=pt-BR` and defaults to English. Internal hrefs retain the locale when switching pages. The static English links are valid when scripts do not run.
