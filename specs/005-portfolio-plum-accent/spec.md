# Feature Specification: Portfolio Plum Accent

**Feature Branch**: `005-portfolio-plum-accent`
**Created**: 2026-09-28
**Status**: Draft
**Input**: User description: "quero usar essa tonalidade no meu portfolio, no lugar do azul escuro que fizemos: 281f49"

## User Scenarios & Testing

### User Story 1 - Update portfolio accent (Priority: P1)

As a portfolio visitor, I see the existing dark-blue accent replaced by the requested `#281f49` tone.

**Why this priority**: This is the complete requested visual change.

**Independent Test**: Inspect the rendered portfolio components that use the primary accent and confirm the new plum tone is used consistently.

**Acceptance Scenarios**:
1. **Given** the portfolio's dark theme, **When** primary accents are rendered, **Then** they use `#281f49` in place of the prior dark blue.
2. **Given** interactive primary components, **When** they are hovered or active, **Then** their states remain visually related to the requested tone and readable against the dark background.

## Requirements

### Functional Requirements
- **FR-001**: The portfolio MUST use `#281f49` as its primary dark accent in place of the existing dark-blue accent.
- **FR-002**: Components and decorative elements using the primary accent MUST remain coordinated with that palette.

## Success Criteria

### Measurable Outcomes
- **SC-001**: Every portfolio accent token and component state intended to represent the primary dark-blue accent is updated to the new tone or a coordinated shade.
- **SC-002**: Text and controls remain legible against the existing dark background.

## Assumptions
- The requested hexadecimal value is `#281f49`.
- The change applies to the existing blue accent system; the black background and neutral foreground colors remain as they are.
