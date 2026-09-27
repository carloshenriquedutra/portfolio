function element(tagName, className, text) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function paragraph(label, value) {
  const node = element("p", "case-detail mb-3");
  const labelNode = element("strong", "", `${label}: `);
  node.append(labelNode, document.createTextNode(value));
  return node;
}

function renderCases(container, cases, labels) {
  container.replaceChildren(...cases.map((study) => {
    const column = element("div", "col");
    const card = element("article", "card case-card h-100");
    const body = element("div", "card-body p-4 p-lg-4");
    const badge = element("span", "badge rounded-pill text-bg-primary mb-3", `${study.company} · ${study.project}`);
    const title = element("h3", "h4 card-title", study.title);
    body.append(badge, title, paragraph(labels.summary, study.summary), paragraph(labels.contribution, study.contribution));
    if (study.technologies.length) {
      const techList = element("ul", "list-inline mb-0");
      for (const technology of study.technologies) {
        const item = element("li", "list-inline-item badge rounded-pill text-bg-dark border mb-2", technology);
        techList.append(item);
      }
      body.append(techList);
    }
    if (study.url) {
      const link = element("a", "btn btn-outline-light mt-3", study.linkLabel);
      link.href = study.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      body.append(link);
    }
    card.append(body);
    column.append(card);
    return column;
  }));
}

function renderDecisions(container, decisions, labels) {
  container.replaceChildren(...decisions.map((decision) => {
    const column = element("div", "col");
    const story = element("article", "decision-story h-100");
    story.append(
      element("h4", "", decision.title),
      paragraph(labels.context, decision.situation),
      paragraph(labels.options, decision.options),
      paragraph(labels.choice, decision.choice),
      paragraph(labels.tradeoff, decision.tradeoff),
      paragraph(labels.revisit, decision.revisit)
    );
    column.append(story);
    return column;
  }));
}

function renderSkills(container, groups) {
  container.replaceChildren(...groups.map((group) => {
    const column = element("div", "col");
    const panel = element("article", "skill-group h-100");
    panel.append(element("h3", "h5", group.name), element("p", "mb-0", group.items.join(" · ")));
    column.append(panel);
    return column;
  }));
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
    article.append(element("h3", "h5", item.name), element("p", "", `${item.school} · ${item.dates}`));
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

export function renderPage(content, locale) {
  document.documentElement.lang = locale;
  document.title = content.pageTitle;
  document.querySelector('meta[name="description"]').content = content.description;
  setCopy(content);
  document.querySelector(".profile-portrait").alt = content.hero.portraitAlt;
  document.querySelector("#language-label").textContent = content.nav.language;
  renderCases(document.querySelector("#case-studies"), content.cases, content.caseLabels);
  renderDecisions(document.querySelector("#decision-stories"), content.decisions, content.decisionLabels);
  document.querySelector(".decision-panel h3").textContent = content.decisionHeading;
  renderSkills(document.querySelector("#skill-groups"), content.skills.groups);
  renderExperience(document.querySelector("#experience-list"), content.experience.items);
  renderEducation(document.querySelector("#education-list"), content.education.items);

  for (const button of document.querySelectorAll("[data-locale]")) {
    const isActive = button.dataset.locale === locale;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}
