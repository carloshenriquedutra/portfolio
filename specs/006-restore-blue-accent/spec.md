# Feature Specification: Restore Blue Portfolio Accent

**Feature Branch**: `006-restore-blue-accent`
**Created**: 2026-09-28
**Status**: Draft
**Input**: User description: "não gostei, volta pro azul"

## User Scenarios & Testing

### User Story 1 - Restore the prior palette (Priority: P1)

As a portfolio visitor, I see the site's previous dark-blue accent palette restored consistently.

**Why this priority**: This directly fulfills the requested visual correction.

**Independent Test**: Inspect the theme and confirm the previous dark-blue colors are restored across primary components.

**Acceptance Scenarios**:
1. **Given** the portfolio's dark theme, **When** accent components render, **Then** they use the prior blue palette.

## Requirements

- **FR-001**: The portfolio MUST restore its previously used dark-blue accent palette.
- **FR-002**: The README MUST describe the restored dark-navy visual identity.

## Success Criteria

- **SC-001**: The central stylesheet uses the prior blue values for primary accents and related states.
- **SC-002**: The plum accent no longer appears in the portfolio theme.

## Assumptions

- "O azul" refers to the exact dark-blue palette used immediately before the plum update.
