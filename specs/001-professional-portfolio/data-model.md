# Content Data Model

The site stores content in version-controlled static files. The entities below are editorial structures, not database tables or public API schemas.

## PortfolioProfile

| Field | Rule |
|---|---|
| `name` | Required public name; use “Carlos Dutra”. |
| `title` | Required localized target title; Senior Data Engineer in English. |
| `summary` | Required short value proposition in each locale; evidence-led and first person where appropriate. |
| `portrait` | Local path to the supplied official image; preserve original appearance. |
| `links` | One or more verified public destinations with descriptive accessible labels. |

## LocaleContent

| Field | Rule |
|---|---|
| `locale` | Exactly `en` or `pt-BR`. |
| `pageTitle`, `description` | Required localized document metadata. |
| `navigation` | Required labels for all visible section links and the language selector. |
| `portraitTitle` | Required localized professional title shown directly beneath the portrait; no tagline or descriptive sentence. |
| `profile`, `sections` | Same structural keys and essential facts for both supported languages. |

The English module defines the baseline content. The pt-BR module must not silently omit a required section or alter factual claims.

## CaseStudy

| Field | Rule |
|---|---|
| `id` | Stable unique slug, shared across locales. |
| `company`, `project` | Required attribution in each locale. MadeiraMadeira, Gobrax, and COPAPA and the four project labels selected in Section 6.3 are approved for high-level attribution; do not add client names or internal project codenames. |
| `title`, `summary`, `contribution` | Required localized concise content. Keep cards scannable and distinguish Carlos's contribution from team outcomes. |
| `technologies` | Only technologies actually used in the described case. |
| `evidenceUrl` | Optional verified public URL; never use a private source link. |
| `publicationStatus` | Content is rendered only when editorially approved; unapproved candidate narratives are excluded. |

## Experience

Organization, public title, start/end date, optional location/work arrangement, and up to three localized contribution summaries. Dates and titles must agree with the latest approved public profile. The intentionally omitted short CIPEL entry is excluded.

## Education

Institution, official program/credential, dates, completion status, and optional localized explanation. Do not imply foreign credential equivalency.

## SkillGroup

Category label plus a short list of supported skills. Each displayed skill must be evidenced by an included experience or project; proficiency labels are excluded unless an explicit criterion exists.

## ContactMethod

Channel, destination, localized accessible label, and whether the destination opens externally. Validate destinations before publication. External links opening a new tab must include safe `rel` values.

## Relationships and consistency

- Each locale contains one `LocaleContent` record and equivalent core section keys.
- A `CaseStudy` may reference skill names and public evidence, but must not reveal restricted source data.
- `Experience` and `Education` are ordered chronologically for display.
- Contact actions may be shared between locales while their accessible labels are localized.
- The Selected Work section contains exactly four cases in the approved order; the private CRM source repository is not named, linked, or referenced in public content.
- Metrics, screenshots, client names, employee data, or detailed architecture that lack explicit approval must not enter rendered content. High-level attribution for the four selected initiatives is approved.

## EngineeringNote

| Field | Rule |
|---|---|
| `company`, `project` | Name the organization and specific initiative associated with the decision; render these before the business problem and technical analysis. |
| `businessProblem` | State the business need or decision context that motivated the technical work. Render immediately after company/project attribution and before technical constraints. |
| `title` | State one technical decision or invariant in concrete terms. |
| `situation` | Identify the system constraint, failure mode, or data-shape problem. |
| `options` | Describe viable alternatives at the architectural or modeling level. |
| `choice` | State the selected design precisely, including grain, key, lifecycle, storage, or retrieval behavior when relevant. |
| `tradeoff` | Describe the cost paid and the failure mode avoided; never promise zero errors or perfect accuracy. |
| `revisit` | Identify observable evidence that would justify changing the decision. |
