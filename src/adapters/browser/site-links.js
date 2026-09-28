import { projectPath } from "../../domain/projects.js";

export function updateSiteLinks(locale, root = document.body.dataset.root || "./") {
  for (const link of document.querySelectorAll("[data-route]")) {
    const route = link.dataset.route;
    const path = ["home", "contact", "about", "experience"].includes(route) ? "" : route === "projects" ? "projects/" : projectPath(route);
    if (path === null) continue;
    const url = new URL(`${root}${path}`, document.baseURI);
    if (locale !== "en") url.searchParams.set("lang", locale);
    link.href = ["contact", "about", "experience"].includes(route) ? `${url.href}#${route}` : url.href;
  }
}
