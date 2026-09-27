# Manual Acceptance Walkthrough

This guide describes manual acceptance checks for the static portfolio. No automated test suite or test runner is introduced by this feature.

## Prerequisites

- A modern browser with JavaScript enabled for locale switching.
- Optional local static server for checking module loading and URL behavior.

## Run locally

From the repository root, run `python3 -m http.server 8000`, then open `http://localhost:8000/` in a browser. The server is optional when checking the HTML-only English baseline.

## Acceptance walkthrough

1. Open the home page without a query parameter. Confirm that English is active, the main headline starts the hero copy without a role eyebrow above it, the Senior Data Engineer title appears below the portrait, and a primary portfolio/contact action is available.
2. Use the language selector to switch to pt-BR. Confirm that visible copy, page metadata, active selection, and the document's programmatic language update; essential sections and factual content remain present.
3. Switch back to English and reload. Confirm that English remains the default when no `lang` query parameter is present.
4. Follow the project, profile, and contact links. Confirm their labels describe the destination and external links use safe new-tab behavior where applicable.
5. Review case-study content. Confirm each published case identifies the problem, individual contribution, approach, and substantiated or carefully qualified outcome; confirm no private details or invented metrics appear.
6. Review the portrait at desktop and narrow mobile widths in English and pt-BR. Confirm the supplied image remains unaltered and undistorted, the face stays visible, and the only text directly below it is the localized professional title.
7. Inspect a narrow viewport and a wide viewport. Confirm Bootstrap layout stacks and expands appropriately without horizontal scrolling; navigation remains operable when collapsed.
8. Navigate with keyboard only. Confirm visible focus, logical heading order, accessible navigation/selector labels, and controls that do not rely on hover.
9. Check text, links, focus indicators, and buttons against the black background. Confirm dark-blue/navy accents remain distinguishable and readable; lighter blue may support foreground text and focus visibility.
10. Disable JavaScript and reload. Confirm the English baseline and core portfolio/contact content remain readable; the language switch may be unavailable in this mode.

## Release editorial checks

- Verify current titles, dates, education status, contact destinations, and public repository links against approved public sources.
- Publish corporate case studies, numbers, screenshots, and detailed architecture only after permission and accuracy review.
- Keep GitHub Pages hosting unchanged for this feature.
