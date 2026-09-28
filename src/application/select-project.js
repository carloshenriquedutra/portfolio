import { PROJECTS } from "../domain/projects.js";

export function selectProject(id, content) {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) return null;
  const detail = content.projectDetails[id];
  const caseStudy = content.cases.find((item) => item.id === id);
  if (!detail || !caseStudy) return null;
  const decisions = content.decisions.filter((item) => item.projectId === id);
  return { ...project, ...detail, case: caseStudy, decisions };
}
