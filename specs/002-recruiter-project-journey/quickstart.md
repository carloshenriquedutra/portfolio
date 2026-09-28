# Acceptance Walkthrough: Recruiter Project Journey

## 1. Local preview

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/`. For GitHub Pages, the equivalent root is `https://carloshenriquedutra.github.io/portfolio/`.

## 2. Recruiter path

1. Open the English home page. Confirm the official photo, “Carlos Dutra, Senior Data Engineer” caption, main value statement, contact action, and four Challenge Compass choices are understandable without reading technical prose.
2. Scan the home. Confirm four short project previews, a concise career and skills summary, and no full project case or Engineering Note.
3. Use a compass link and a home project preview; each should open the matching detail page.

## 3. Technical-manager path

1. Open Projects from the main navigation. Confirm exactly four projects in the approved order and a clear choice for each.
2. Open each detail URL directly and reload. Confirm company, project, business problem, individual contribution, approach, supported outcome or honest status, technologies, and related technical reasoning.
3. Use the “All projects” and Contact paths. Confirm they resolve correctly from nested pages.

## 4. Localization and resilience

1. Switch the home to pt-BR and navigate through the Projects index to a detail page. Confirm the language remains pt-BR in text, metadata, navigation, and links.
2. Open a nested detail URL with `?lang=pt-BR` directly, switch to English, and reload. Confirm language behavior and no mixed content.
3. Disable JavaScript for a direct project page load. Confirm English content, navigation, and links remain meaningful.
4. Inspect desktop, mobile, keyboard focus, and reduced-motion behavior. The portrait must not block the main message or first useful action on small screens.

## 5. Release review

Check public descriptions against the existing approved site and `about-me.md`. Ensure there are no private repository links, employee data, invented metrics, or claims of completed work that is actually ongoing or proposed. Review the diff and the GitHub Pages deployment result after push.
