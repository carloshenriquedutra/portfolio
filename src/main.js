import en from "./content/en.js";
import ptBR from "./content/pt-BR.js";
import { selectLocale } from "./application/select-locale.js";
import { readLocaleFromUrl, writeLocaleToUrl } from "./adapters/browser/locale-url.js";
import { renderPage } from "./presentation/render-page.js";

const contentByLocale = { en, "pt-BR": ptBR };
let activeLocale = selectLocale(readLocaleFromUrl(window.location.search), contentByLocale);

function showLocale(locale) {
  activeLocale = selectLocale(locale, contentByLocale);
  renderPage(contentByLocale[activeLocale], activeLocale);
}

document.querySelectorAll("[data-locale]").forEach((button) => {
  button.addEventListener("click", () => {
    const requestedLocale = button.dataset.locale;
    showLocale(requestedLocale);
    writeLocaleToUrl(activeLocale);
  });
});

showLocale(activeLocale);
