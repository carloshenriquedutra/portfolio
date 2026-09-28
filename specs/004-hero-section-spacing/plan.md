# Implementation Plan: Hero Section Spacing

**Branch**: `004-hero-section-spacing` | **Date**: 2026-09-27 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/004-hero-section-spacing/spec.md`

## Summary

Increase the homepage hero's bottom spacing so the negative top gutter on the following Bootstrap row no longer places its divider against the hero action buttons. Keep the change scoped to the hero-to-About boundary.

## Technical Context

**Language/Version**: HTML5 and CSS3
**Primary Dependencies**: Bootstrap 5 local CSS
**Storage**: N/A
**Testing**: Manual visual review at desktop and narrow viewport widths; no automated test is needed for this spacing-only change.
**Target Platform**: Static portfolio website
**Project Type**: Web frontend
**Performance Goals**: No runtime or loading impact
**Constraints**: Preserve existing responsive layout and hero content.
**Scale/Scope**: One homepage section boundary.

## Constitution Check

- Specification precedes implementation: PASS.
- Smallest effective scope: PASS; adjust the existing hero bottom padding only.
- Validation matches the visual risk: PASS; inspect the spacing at wide and narrow viewport sizes.

## Project Structure

```text
index.html
specs/004-hero-section-spacing/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

**Structure Decision**: The homepage already uses Bootstrap utility classes in `index.html`; change the hero's bottom-padding utility in place. No new CSS selector or data structure is needed.

## Design

The About section is a Bootstrap `.row` with a top border. Bootstrap's row gutter applies a negative top margin, which consumes the hero's current bottom padding and puts the border immediately under the buttons. Raise the hero's bottom padding by one spacing step, yielding a visible gap after that negative margin. Leave other content sections unchanged.

## Validation

Review the homepage at desktop and narrow viewport widths. Confirm the divider is separated from the buttons and stacked hero content, and confirm both action links remain visible.
