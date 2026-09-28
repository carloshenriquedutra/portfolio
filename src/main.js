import en from "./content/en.js";
import ptBR from "./content/pt-BR.js";
import { selectLocale } from "./application/select-locale.js";
import { selectProject } from "./application/select-project.js";
import { readLocaleFromUrl, writeLocaleToUrl } from "./adapters/browser/locale-url.js";
import { updateSiteLinks } from "./adapters/browser/site-links.js";
import { renderPage } from "./presentation/render-page.js";

const contentByLocale = { en, "pt-BR": ptBR };
const page = document.body.dataset.page || "home";
const projectId = document.body.dataset.projectId;
let activeLocale = selectLocale(readLocaleFromUrl(window.location.search), contentByLocale);

function showLocale(locale) {
  activeLocale = selectLocale(locale, contentByLocale);
  const content = contentByLocale[activeLocale];
  renderPage(content, activeLocale, page, selectProject(projectId, content));
  updateSiteLinks(activeLocale);
}

document.querySelectorAll("[data-locale]").forEach((button) => {
  button.addEventListener("click", () => {
    const requestedLocale = button.dataset.locale;
    showLocale(requestedLocale);
    writeLocaleToUrl(activeLocale);
  });
});

showLocale(activeLocale);
