import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resumes } from "./resume-copy.mjs";

const companies = ["MadeiraMadeira", "Gobrax", "Leads2b", "COPAPA"];
const schools = ["Descomplica Faculdade Digital", "Descomplica Faculdade Digital", "UNOPAR"];
const skills = "RAG · Vertex AI · Databricks · Terraform · dbt · BigQuery · Dataform · Cloud Run · Google Cloud · Apache Airflow · SQL";
const output = fileURLToPath(new URL("../assets/resumes/", import.meta.url));

function escapeHtml(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function renderResume(locale, resume) {
  const [experience, technicalSkills, education] = resume.headings.map(escapeHtml);
  const jobs = resume.jobs.map(([title, dates, location, highlights], index) => `
    <section class="job">
      <h3>${escapeHtml(companies[index])} · ${escapeHtml(title)}</h3>
      <p class="dates">${escapeHtml(dates)} · ${escapeHtml(location)}</p>
      <ul>${highlights.map(text => `<li>${escapeHtml(text)}</li>`).join("")}</ul>
    </section>`);
  const degrees = resume.education.map((degree, index) =>
    `<li><strong>${escapeHtml(schools[index])}</strong> · ${escapeHtml(degree)} · ${escapeHtml(resume.educationLocations[index])}</li>`);

  return `<!doctype html>
<html lang="${locale}">
<meta charset="utf-8">
<title>Carlos Dutra · ${escapeHtml(resume.title)}</title>
<style>
  @page { size: A4; margin: 13mm 15mm; }
  body { margin: 0; color: #172033; font: 10pt/1.30 Arial, sans-serif; }
  h1 { margin: 0; font-size: 25pt; }
  h2 { margin: 10pt 0 4pt; border-bottom: 1px solid #aeb9c8; font-size: 12pt; }
  h3, p, ul { margin: 0; }
  h3 { font-size: 10.5pt; }
  ul { padding-left: 15pt; }
  li + li { margin-top: 2pt; }
  a { color: #174a78; }
  .role { font-size: 13pt; margin-bottom: 3pt; }
  .summary { margin-top: 8pt; }
  .job { margin-top: 6pt; break-inside: avoid; }
  .dates { color: #374151; font-size: 9pt; }
</style>
<body>
  <h1>Carlos Dutra</h1>
  <p class="role">${escapeHtml(resume.title)}</p>
  <p><a href="mailto:henrique.r.dutra@gmail.com">henrique.r.dutra@gmail.com</a> ·
    <a href="https://www.linkedin.com/in/carlos-henrique-dutra/">LinkedIn</a> ·
    <a href="https://carloshenriquedutra.github.io/portfolio/">Portfolio</a>
  </p>
  <p class="summary">${escapeHtml(resume.summary)}</p>
  <h2>${experience}</h2>
  ${jobs.join("")}
  <h2>${technicalSkills}</h2>
  <p>${escapeHtml(skills)}</p>
  <h2>${education}</h2>
  <ul>${degrees.join("")}</ul>
</body>
</html>`;
}

mkdirSync(output, { recursive: true });
const scratch = mkdtempSync(join(tmpdir(), "portfolio-resumes-"));
try {
  for (const [locale, resume] of Object.entries(resumes)) {
    const htmlPath = join(scratch, `${locale}.html`);
    writeFileSync(htmlPath, renderResume(locale, resume));
    execFileSync(process.env.CHROME_BIN || "google-chrome", [
      "--headless", "--no-first-run", "--disable-extensions", "--no-pdf-header-footer",
      `--user-data-dir=${join(scratch, "chrome")}`,
      `--print-to-pdf=${join(output, `carlos-dutra-${locale}.pdf`)}`,
      pathToFileURL(htmlPath).href
    ], { stdio: "pipe", timeout: 30000 });
  }
} finally {
  rmSync(scratch, { force: true, recursive: true });
}
