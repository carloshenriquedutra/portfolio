# Implementation Plan: Retire the Challenge Compass

1. Remove the Compass's static HTML block from `index.html` and its custom CSS from `assets/css/theme.css`.
2. Remove `renderCompass` and home composition call; move the shared project-card link label from `content.compass.link` to `content.work.openProject` in both locales.
3. Reconcile README, the two recruiter-experience audits, and feature 002's historical status with Carlos's new decision.
4. Review the focused diff for retained routes, bilingual copy, privacy, and Clean Architecture, then commit and push directly to `main`. GitHub Pages remains a static site with Bootstrap; no build system or Jira work is introduced.
