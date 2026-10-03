import { renderProjectCards, renderProjectDetail } from "./render-projects.js";

function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderExperience(container, items) {
  container.replaceChildren(...items.map((item) => {
    const article = element("article", "timeline-item");
    article.append(
      element("p", "timeline-dates", item.dates),
      element("h3", "h5", item.org),
      element("p", "mb-1 fw-semibold", item.role),
      element("p", "mb-0", item.summary)
    );
    return article;
  }));
}

function renderEducation(container, items) {
  container.replaceChildren(...items.map((item) => {
    const article = element("article", "");
    article.append(
      element("h3", "h5", item.name),
      element("p", "", `${item.school} · ${item.dates}`)
    );
    return article;
  }));
}

function renderAcademicDegrees(container, degrees) {
  container.replaceChildren(...degrees.map((degree) => {
    const article = element("article", "education-entry mb-4");
    article.append(
      element("h3", "h4", degree.name),
      element("p", "mb-1 fw-semibold", `${degree.school} · ${degree.dates}`),
      element("p", "mb-0", degree.summary)
    );
    return article;
  }));
}

function setCopy(content) {
  for (const node of document.querySelectorAll("[data-copy]")) {
    const value = node.dataset.copy.split(".").reduce((current, key) => current?.[key], content);
    if (typeof value === "string") node.textContent = value;
  }
  for (const node of document.querySelectorAll("[data-copy-attribute]")) {
    const [path, attribute] = node.dataset.copyAttribute.split(":");
    const value = path.split(".").reduce((current, key) => current?.[key], content);
    if (typeof value === "string") node.setAttribute(attribute, value);
  }
}

export function renderPage(content, locale, page, project) {
  document.documentElement.lang = locale;
  const metadata = page === "project"
    ? { title: `${project.case.project} · Carlos Dutra`, description: project.case.summary }
    : content.pages[page];
  document.title = metadata.title;
  document.querySelector('meta[name="description"]').content = metadata.description;
  setCopy(content);
  const projectName = document.querySelector("[data-project-name]");
  if (projectName && project) projectName.textContent = project.case.project;
  document.querySelector("#language-label").textContent = content.nav.language;

  if (page === "home") {
    document.querySelector(".profile-portrait").alt = content.hero.portraitAlt;
    renderProjectCards(document.querySelector("#case-studies"), content, true);
    renderExperience(document.querySelector("#experience-list"), content.experience.items.slice(0, 2));
    renderEducation(document.querySelector("#education-list"), content.education.items.slice(0, 1));
  } else if (page === "projects") {
    renderProjectCards(document.querySelector("#project-list"), content, false);
  } else if (page === "about") {
    document.querySelector(".profile-portrait").alt = content.hero.portraitAlt;
  } else if (page === "experience") {
    renderExperience(document.querySelector("#experience-page-list"), content.aboutPage.career);
  } else if (page === "education") {
    renderAcademicDegrees(document.querySelector("#academic-degree-list"), content.academicPage.degrees);
  } else if (page === "project" && project) {
    renderProjectDetail(document.querySelector("#project-detail"), project, content);
  }

  for (const button of document.querySelectorAll("[data-locale]")) {
    const isActive = button.dataset.locale === locale;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}
