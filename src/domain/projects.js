export const PROJECTS = Object.freeze([
  { id: "lumi", slug: "lumi" },
  { id: "people-analytics", slug: "people-analytics" },
  { id: "hubspot-crm", slug: "hubspot-crm" },
  { id: "copapa-market-sizing", slug: "copapa-market-sizing" }
]);

export function projectPath(id) {
  const project = PROJECTS.find((item) => item.id === id);
  return project ? `projects/${project.slug}/` : null;
}
