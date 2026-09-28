import { PROJECTS } from "../domain/projects.js";
import { selectProject } from "../application/select-project.js";

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function labeledParagraph(label, value) {
  const paragraph = node("p", "case-detail mb-3");
  paragraph.append(node("strong", "", `${label}: `), document.createTextNode(value));
  return paragraph;
}

function projectLink(id, label, className) {
  const link = node("a", className, label);
  link.dataset.route = id;
  return link;
}

export function renderCompass(container, content) {
  const cards = PROJECTS.map(({ id }, index) => {
    const item = content.compass.paths[id];
    const column = node("div", "col");
    const link = projectLink(id, "", "compass-path card h-100 text-decoration-none");
    link.append(
      node("span", "compass-index", String(index + 1).padStart(2, "0")),
      node("span", "compass-question", item.challenge),
      node("span", "compass-destination", `${item.project} ↗`)
    );
    column.append(link);
    return column;
  });
  container.replaceChildren(...cards);
}

export function renderProjectCards(container, content, compact) {
  const cards = PROJECTS.map(({ id }, index) => {
    const study = selectProject(id, content).case;
    const column = node("div", "col");
    const article = node("article", "card case-card h-100");
    const body = node("div", "card-body p-4 d-flex flex-column");
    body.append(
      node("span", "project-overline mb-3", `${String(index + 1).padStart(2, "0")} / ${study.company} · ${study.project}`),
      node("h3", "h4 card-title", study.project),
      node("p", "card-text", study.summary)
    );
    if (!compact) {
      body.append(node("p", "card-text", study.contribution));
      body.append(node("p", "project-technologies mt-auto", study.technologies.join(" · ")));
    }
    body.append(projectLink(id, `${content.compass.link}: ${study.project} ↗`, "stretched-link project-card-link mt-auto"));
    article.append(body);
    column.append(article);
    return column;
  });
  container.replaceChildren(...cards);
}

export function renderProjectDetail(container, project, content) {
  const labels = content.pages.project;
  const study = project.case;
  const header = node("header", "project-detail-header mb-5");
  header.append(
    node("p", "section-kicker", `${study.company} / ${study.project}`),
    node("h1", "display-4 fw-bold", study.project),
    node("p", "lead project-lead fw-semibold", study.title),
    node("p", "project-lead", study.summary)
  );

  const facts = node("div", "row row-cols-1 row-cols-lg-2 g-4");
  for (const [label, value] of [
    [labels.problem, project.problem], [labels.contribution, study.contribution],
    [labels.approach, project.approach], [labels.status, project.status]
  ]) {
    const column = node("div", "col");
    const article = node("article", "project-fact h-100 p-4");
    article.append(node("h2", "h4", label), node("p", "mb-0", value));
    column.append(article);
    facts.append(column);
  }

  const tools = node("section", "content-section py-5");
  tools.append(node("h2", "h3", labels.technology), node("p", "project-technologies", study.technologies.join(" · ")));

  const decisions = node("section", "content-section py-5");
  decisions.append(node("h2", "h3 mb-4", labels.decisions));
  if (project.decisions.length) {
    for (const decision of project.decisions) {
      const article = node("article", "decision-story mb-5");
      article.append(
        node("p", "section-kicker", `${decision.company} / ${decision.project}`),
        node("h3", "h4", decision.title),
        labeledParagraph(content.decisionLabels.businessProblem, decision.businessProblem),
        labeledParagraph(content.decisionLabels.context, decision.situation),
        labeledParagraph(content.decisionLabels.options, decision.options),
        labeledParagraph(content.decisionLabels.choice, decision.choice),
        labeledParagraph(content.decisionLabels.tradeoff, decision.tradeoff),
        labeledParagraph(content.decisionLabels.revisit, decision.revisit)
      );
      decisions.append(article);
    }
  } else {
    decisions.append(
      node("h3", "h4", project.analysis.title),
      node("p", "case-detail", project.analysis.body)
    );
  }
  const actions = node("nav", "d-flex flex-wrap gap-3 py-4");
  const back = node("a", "btn btn-outline-light", `← ${labels.back}`);
  back.dataset.route = "projects";
  const contact = node("a", "btn btn-primary", labels.contact);
  contact.dataset.route = "contact";
  actions.append(back, contact);
  container.replaceChildren(header, facts, tools, decisions, actions);
}
