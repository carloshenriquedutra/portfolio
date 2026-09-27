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
| `profile`, `sections` | Same structural keys and essential facts for both supported languages. |

The English module defines the baseline content. The pt-BR module must not silently omit a required section or alter factual claims.

## CaseStudy

| Field | Rule |
|---|---|
| `id` | Stable unique slug, shared across locales. |
| `company`, `project` | Required attribution in each locale. Employer names Gobrax and COPAPA are approved for these cards; never substitute a client name or internal project codename. |
| `title`, `summary`, `contribution` | Required localized concise content. Keep cards scannable and distinguish Carlos's contribution from team outcomes. |
| `technologies` | Only technologies actually used in the described case. |
| `evidenceUrl` | Optional verified public URL; no private source links. |
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
- Metrics, screenshots, client names, or detailed architecture that lack explicit approval must not enter rendered content. Employer names Gobrax and COPAPA are explicitly approved for selected-work attribution.
