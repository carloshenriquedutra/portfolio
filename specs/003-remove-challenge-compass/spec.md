# Feature Specification: Retire the Challenge Compass

**Date**: 2026-09-27 · **Status**: Approved by Carlos's feedback · **Repository**: personal portfolio on `main`

## Context

Carlos rejected the Challenge Compass introduced in feature 002, while explicitly approving the dedicated Projects index and four project detail pages. The home should continue to give recruiters a fast introduction and a direct route to those pages through the existing Projects action, navigation, and four concise Selected Work previews.

## Requirements

- **FR-001**: Remove the Challenge Compass and its challenge-to-project presentation from the home in English and pt-BR.
- **FR-002**: Preserve the home hero, official portrait, concise About and Selected Work previews, and the direct Projects action.
- **FR-003**: Preserve the Projects index, all four detail URLs, their technical content, and language selection across navigation.
- **FR-004**: Remove unused Compass copy, rendering logic, and styling. Keep project-card link labels in the localized `work` content.
- **FR-005**: Update the README and recruiter-experience documents so they no longer recommend the rejected component as the current direction. Keep feature 002 as historical context and record this change as its superseding decision.
- **FR-006**: Keep Bootstrap as the front-end foundation, the static GitHub Pages deployment, Clean Architecture boundaries, and public-safe project claims.

## Acceptance

The home has no Compass section or challenge links. Its Projects action, navigation, and four Selected Work cards still reach the index and respective details. English and pt-BR remain complete. The project pages and their URLs are unaffected.

## Boundaries

This change does not select or install another framework. Framework options are evaluated separately for Carlos; a migration requires its own feature decision.
