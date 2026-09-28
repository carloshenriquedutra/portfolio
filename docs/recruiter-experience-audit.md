# Recruiter experience audit of Carlos Dutra's portfolio

_Reviewed: 2026-09-27 · Scope: content, information architecture, and recruiter journeys · Status: recommendations for a future Spec Kit iteration_

## 1. Executive assessment

**“Selected Work” is a suitable heading for this portfolio.** It is short, professional, and accurate for four employer projects that include an assistant, a data platform, CRM modeling, and market sizing. “Projects” would also be understandable, but changing the label alone would have little effect. The larger opportunity is to make each project immediately recognizable by company, project name, business problem, Carlos's contribution, and evidence of value. Keep the four approved projects and their current order.

The page already has a credible foundation: it identifies Carlos as a Senior Data Engineer, explains his business-to-engineering path, names employers and projects, separates his contribution from the project description, groups tools by purpose, offers English and Brazilian Portuguese, and makes contact possible from the hero. Its personality comes through in the voice and restrained humor.

The main recruiter problem is **information priority**. Four detailed Engineering Notes follow four project cards before the visitor reaches the skills and career timeline. In the English page reviewed, the Selected Work content is approximately 280 words and the Engineering Notes approximately 490 words. Those notes are useful for a technical reader, but their position and density make the page ask for technical attention before it has answered several quick screening questions: exact roles, relevant tools, project outcomes, and where to find a résumé. The word counts are approximate, based on the rendered page's extracted text, including headings and labels; they are a comparison of reading weight, not a usability measurement.

**Recommended direction:** keep the page as a concise professional entry point, let the four projects carry the proof, move detailed technical reasoning into a clearly secondary layer, make experience and skills faster to locate, and add a one-click résumé when an approved file exists. Preserve the user-approved About copy and portrait caption.

## 2. What was reviewed and what was not measured

This assessment uses the [published portfolio](https://carloshenriquedutra.github.io/portfolio/) freshly fetched on 2026-09-27, the current `index.html`, English and pt-BR content modules, CSS, `about-me.md`, and `todo.md` in this repository at commit `99cd22c`. A fresh fetch was necessary because an initial cached extraction showed an older version of the site. Recommendations below refer to the current version with the four approved Selected Work cards and the updated About text.

The assessment also draws on [Nielsen Norman Group's research on descriptive headings and scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/), [Intuit's guidance on engineering portfolios](https://www.intuit.com/blog/global-stories/software-engineer-portfolio/), [Arc's distinction between recruiter and technical hiring-manager needs](https://arc.dev/talent-blog/software-engineer-portfolio/), and [W3C guidance on headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) and [link purpose](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html). These sources inform the recommendations; they do not prove how a particular recruiter will respond to this page.

No recruiter interviews, analytics, conversion data, timed reading study, full visual review across viewport sizes, or accessibility test were performed. Items marked **verify visually** are reasoned from the markup and CSS and should be checked in a browser before implementation.

## 3. The two audiences and their first questions

The site serves at least two readers. Arc's portfolio guidance explicitly distinguishes a recruiter scanning for relevant experience from a technical hiring manager evaluating how and why engineering decisions were made. The site needs a short path for both readers, with deeper detail available after the first pass. [Source: Arc](https://arc.dev/talent-blog/software-engineer-portfolio/).

| Reader | Questions they need answered early | Current path | Friction |
|---|---|---|---|
| Recruiter | Who is Carlos? What role does he do? Which employers, dates, and tools match the opening? Is there a résumé and a reliable way to contact him? | Hero → About → four projects → four long notes → skills → career → education → contact | Employer history and skills are below the longest technical block. No résumé link exists. |
| Technical hiring manager | What did Carlos personally build? What problem did it address? What trade-offs did he make? What is the evidence or current status? | Hero → projects → notes | The reasoning is substantial, but no project card links to a case study, artifact, or its related note; concrete outcomes and status are uneven. |
| Recruiter on a phone | Can I identify the candidate and take the next action immediately? | Navigation → portrait and caption → main message → actions | On narrow screens the portrait is ordered before the headline; its large frame may push the headline and actions below the first viewport. **Verify visually.** |

The goal is not to make every section short. It is to make the first reading pass answer the recruiter's questions and let an interested technical reader opt into more detail. Nielsen Norman Group's scanning research supports descriptive headings and distinct content chunks because readers can use them to find the part relevant to their task. [Source: NN/g](https://www.nngroup.com/articles/layer-cake-pattern-scanning/).

## 4. Current information architecture

The published page currently follows this order:

1. Sticky navigation: About, Selected Work, Experience, Contact, language switch.
2. Hero: value statement, two supporting paragraphs, project and contact actions, portrait and role caption.
3. About: two paragraphs on the RevOps → Data Analytics → Data Engineering path.
4. Selected Work: four cards in the order Lumi, People Analytics platform, HubSpot CRM modeling, COPAPA market sizing.
5. Engineering Notes: four detailed decisions within the Selected Work section.
6. Toolbox: five groups of technologies and business areas.
7. Career: four employer entries with broad role labels and one-sentence summaries.
8. Education: three qualifications.
9. Contact: email, LinkedIn, GitHub, WhatsApp, followed by a short personal footer.

This sequence already covers most essential content. Its weakest transition is between item 4 and item 7: the visitor must pass a second dense treatment of overlapping projects to reach skills and career. The navigation partly offsets this because Experience has a direct anchor, but Skills has no navigation entry, and the Engineering Notes are not identified as an optional depth level.

## 5. What already works and should stay

| Element | Why it works | Preserve while refining |
|---|---|---|
| Four Selected Work projects | They show a useful range: applied AI, platform architecture, analytics engineering, and commercially grounded analysis. Four sits within Intuit's suggested range of three to five standout projects. [Source: Intuit](https://www.intuit.com/blog/global-stories/software-engineer-portfolio/). | Keep the four projects, their company names, and their approved order. |
| “Selected Work” label | It covers both products and initiatives created in professional roles without suggesting that every artifact is an open-source side project. | A rename is optional; improve project titles and cards first. |
| Name and title under the portrait | “Carlos Dutra, Senior Data Engineer” is direct and matches the user's approved wording. | Keep the single-line comma format; do not reintroduce the removed role eyebrow above the H1. |
| User-approved About text | It explains why RevOps and Analytics matter to current engineering work and gives the profile a coherent point of view. | Keep the substance and wording of the approved English text; retain a faithful pt-BR version. |
| Contribution labels | “The work” and “My contribution” separate the project's purpose from Carlos's own work, reducing ambiguous team-level claims. | Make the business problem and value easier to scan; keep individual contribution explicit. |
| Engineering decisions | They show technical judgment, constraints, alternatives, and trade-offs rather than a tool-name list. | Retain the content as deeper reading, connected to the relevant project. |
| Grouped toolbox | Grouping helps readers find relevant technologies more quickly than an undifferentiated logo wall. | Keep groups, but make important capabilities easy to spot near the top of the page. |
| Direct contact and language choice | The hero links to contact, and the header exposes English/pt-BR. The static English page also has a coherent HTML baseline. | Keep both language versions complete and the contact path obvious. |
| Voice and footer | The tone is human without turning the page into a personal diary. | Preserve the restrained personality; do not replace concrete evidence with slogans. |

## 6. Findings by section

### 6.1 Hero and first viewport

**Current state:** The H1 says what Carlos builds, the photo caption gives his name and role, and two actions lead to work and contact. This is a sound start. The `index.html` H1, caption, and buttons are clear enough to support a first pass. The page has one H1 and section H2s, which is a sensible structural hierarchy.

**Issue:** The hero gives the value proposition but no direct résumé route. The role is visible beside the photo on desktop; on mobile the portrait is explicitly ordered before the H1, and the portrait frame can approach the width of the container. This may delay the key message and first action for a phone visitor. This is a layout risk, not an observed viewport failure.

**Recommendation:** Preserve the H1, portrait, and approved caption. Once a résumé exists, add a visible “Download résumé (PDF)” action in the hero or immediately adjacent to it. Review the mobile first viewport at common widths: name, role, H1, and at least one useful action should be reached with minimal scrolling. If the photo pushes these down, reduce its mobile size or reconsider the small-screen order without diminishing the photo's prominence on desktop. Avoid adding another line that repeats “Senior Data Engineer” above the H1.

**Editorial check:** The H1 and the first supporting paragraph both describe the area before a dashboard; the approved About text develops the same theme. That repetition is acceptable while concise, but any further introductory copy should add evidence rather than repeat the concept.

### 6.2 About / “The Thread”

**Current state:** The revised two-paragraph text gives a coherent career story. It identifies the path through RevOps, Data Analytics, and Data Engineering and states a clear technical individual-contributor position.

**Issue:** The heading “From business question to dependable data” is expressive but broad. “The Thread” functions as a visual label, while “About” is only in navigation. A recruiter scanning headings may not immediately realize that this is the fast profile summary.

**Recommendation:** Keep the approved paragraphs. Consider a more explicit heading such as “About — business context to data engineering” or “About Carlos” only if the next content review shows the current heading is hard to find. Any heading change should be checked in both languages and should preserve the user's voice. Do not expand this section into a long biography; the project and career sections provide the detail.

### 6.3 Selected Work: the name and the four cards

**Verdict on the name:** Keep “Selected Work” for now. It is conventional enough for a technical portfolio and accurately signals curation. “Selected Projects” is a valid alternative if later reader feedback shows that visitors look specifically for a Projects link. The two labels should not be mixed across the navigation, heading, and hero button without a reason.

**Current strength:** Every card names the company and initiative, gives a short summary, states Carlos's contribution, and lists technologies. The set is stronger than a generic GitHub gallery because it connects the work to actual business settings.

**Primary issue:** Company and project appear in small badge text, while the large card headings are more generic. The headings that attract the eye first say “An employee assistant grounded in People knowledge,” “Building a People Analytics platform from source to Gold,” “Turning CRM entities into analysis-ready models,” and “Estimating market potential to redesign sales territories.” A reader may need to return to the badges to map these to Lumi, MadeiraMadeira, Gobrax, and COPAPA. This is an inference from the visual hierarchy of the markup; verify it visually. NN/g recommends headings that carry the essential information early and accurately describe their chunk. [Source: NN/g](https://www.nngroup.com/articles/layer-cake-pattern-scanning/).

**Second issue:** The four cards mainly describe what was built. They do not consistently say what changed for a user or decision-maker, what stage the work is in, or what public evidence the reader can inspect. None of the current four cards has a project-specific link. This matters most to a technical reader who wants to go from a claim to a deeper explanation. The goal is honest evidence, including qualitative evidence when numbers or employer artifacts are unavailable; invented metrics would damage credibility.

**Third issue:** The section introduction says that sensitive implementation details remain private. The privacy boundary is appropriate, but foregrounding it before the projects spends prominent copy on a limitation. The page can demonstrate that boundary by publishing safe summaries and omitting restricted details. A proposed replacement is: “Four projects where business questions shaped the data products and engineering decisions.” Treat that line as editorial draft, not approved copy.

**Recommended card reading order:** company and project name → business problem in plain English → Carlos's specific contribution → honest outcome or current status → three to five relevant technologies → link to permitted public evidence or a deeper case study. Keep each card scannable; reserve alternatives, constraints, and detailed architecture for a deeper layer. Use the same information order in English and pt-BR.

| Card | Strongest immediate label to test | Specific editorial check |
|---|---|---|
| MadeiraMadeira / Lumi | “Lumi — AI assistant for employees” | State what employees can do with it and what Carlos built; do not imply guaranteed answer accuracy. |
| MadeiraMadeira / People Analytics | “People Analytics data platform — source to Gold” | Distinguish established foundations from Gold work still in progress; do not imply the whole target platform is finished. |
| Gobrax / HubSpot | “HubSpot CRM models in BigQuery” | Explain the user-facing analytical capability before listing grain, keys, deduplication, and associations. |
| COPAPA / market sizing | “Market sizing for sales territory planning” | Present estimates as planning inputs and a proposed redesign, not realized sales or implemented territory changes. |

The example labels above are editorial proposals. Confirm any project status, outcome, or public artifact against approved source material before publication.

### 6.4 Engineering Notes

**Current state:** Four notes explain decisions across Lumi, People Analytics, and CRM modeling. They identify the employer and project, business problem, technical constraint, alternatives, decision, trade-off, and a trigger for revisiting the decision. This is real technical substance.

**Issue:** The notes sit inside Selected Work and together require more reading than the project cards. The heading “Models, boundaries & reliability” does not immediately tell a recruiter that the panel contains engineering decisions. The notes repeat project context already introduced above, while Career and Toolbox remain below them. A recruiter can skip the panel, but the amount and placement still define the page's rhythm.

**Recommendation:** Treat notes as a second depth level. On the home page, show a short “Engineering decisions” section after Experience or Skills with one or two concise previews, each linked to the relevant full note or case study. Keep all four full narratives available in a dedicated page or in clearly labeled disclosures. If Bootstrap Accordion is used for optional details, give each collapsed item a descriptive title; the essential project value should remain visible before interaction. A technical hiring manager should be able to reach the full trade-off in one click from the related project card.

**Do not remove the reasoning itself.** It differentiates Carlos from a stack-only profile. Reduce duplication on the landing page and improve the connection between a project and its decision.

### 6.5 Toolbox / skills

**Current state:** Five groups cover data platforms, engineering, modeling and reliability, applied AI, and business context. The heading “Tools are useful. Judgment is the job.” conveys personality and makes a sensible point.

**Issue:** The skill groups appear after the long notes, and the main navigation has no Skills anchor. A recruiter checking a role's requirements may need to scroll or use browser find. The lists also give equal visual weight to a core daily tool and a peripheral technology; the page does not explain depth or recency.

**Recommendation:** Move Skills before the detailed notes, and consider a “Skills” or “Tools” navigation link. Keep the groups, but order the most representative technologies first. If depth matters, express it through specific projects or concise experience notes, not invented percentages or skill bars; Arc's guidance notes that percentage bars lack clear meaning. [Source: Arc](https://arc.dev/talent-blog/software-engineer-portfolio/). Avoid adding every tool Carlos has touched; `about-me.md` can hold the fuller tool-by-tool context for readers who want it.

### 6.6 Career timeline

**Current state:** The timeline gives four organizations and date ranges with one short summary each. Its narrative agrees with the About section and does not overclaim specific historical titles.

**Issue:** Two entries use the broad label “Data engineering,” and the earlier entries also use domain labels rather than verified official job titles. This is safe editorially, but a recruiter comparing the page with a résumé may still need exact positions and clearer scope. The timeline's position after the engineering notes delays a quick employer-and-date scan.

**Recommendation:** Move Career above full Engineering Notes. When the résumé is ready, align employer names, dates, role titles, and current/previous status across the page, résumé, LinkedIn, and public `about-me.md`. Use official titles only after verification; where an official title fails to convey the engineering scope, present it separately from a one-sentence description of actual work. Do not fill unexplained gaps with invented roles or force personal explanations onto the page.

### 6.7 Education

**Current state:** Three concise entries show Computer Science in progress, a completed Data Analytics postgraduate qualification, and Business Administration. This supports the career story.

**Recommendation:** Keep Education compact and low on the page. Make completion status and dates consistent with the résumé. It does not need a primary navigation link unless later feedback shows it is a frequent destination.

### 6.8 Contact and footer

**Current state:** Email, LinkedIn, GitHub, and WhatsApp are available at the bottom; the hero has a “Get in touch” anchor. Contact is not actually hard to reach, even though the section is at the end.

**Issue:** The buttons all receive similar visual weight. For a recruiter, email and LinkedIn are the clearest professional routes; the GitHub profile is useful evidence; WhatsApp is a more personal channel, and its link exposes a phone number publicly. This is a choice for Carlos, not a claim that the current link is wrong.

**Recommendation:** Make email the primary action, LinkedIn the secondary contact route, GitHub a professional proof link, and WhatsApp optional or lower emphasis. If a résumé PDF is introduced, link it here as well as near the hero. Keep the current human footer; it adds personality without interrupting the core journey.

### 6.9 Navigation, language, and page metadata

**Current state:** The nav is short, the page has semantic landmarks and a skip link, the language toggle updates visible content and `html lang`, and the English baseline is meaningful without the content script. These are good foundations.

**Recommendation:** If Career and Skills become quick screening destinations, expose both in navigation while keeping the menu compact on mobile. Use the same section labels in nav and headings. For any new case-study links, write the destination into the link label, such as “Read the Lumi case study,” rather than relying on repeated “Learn more” links. W3C guidance explains why a link's purpose should be clear from its text or programmatic context. [Source: W3C](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html).

The HTML currently has a page title and description but no visible Open Graph or other social-preview metadata in its `<head>`. Because a recruiter may share the portfolio link with a hiring manager, add a deliberate preview title, description, image, and canonical URL in a later metadata pass. This is a secondary improvement; it should not delay the résumé or project-content work.

### 6.10 Visual hierarchy and reading comfort

**Current state:** The navy-on-black theme supports a focused technical identity. Large section headings, high-contrast body text, cards, and generous spacing distinguish the major areas. The portrait is a strong personal signal. The CSS gives body copy a `1.65` line height, which favors longer paragraphs.

**Risk to inspect:** The small uppercase section labels use `.78rem`, and timeline dates use `.9rem`; company/project names on work cards are rendered as badges above larger but less specific headings. The latter is a content hierarchy problem as well as a styling problem. At 100% zoom and on smaller screens, check whether the employer/project label, card text, and muted supporting copy are comfortably legible. A source-code review cannot establish actual readability, contrast, or perceived scale across displays.

**Recommendation:** Let the project name and employer win the first visual scan. Keep technical tags visually subordinate to the problem and contribution. Review the page at desktop width, a typical phone width, 100% and 200% browser zoom, and with keyboard focus visible. Adjust typography only after seeing the rendered result; do not infer an accessibility failure from font size alone. Avoid adding chart or mind-map decoration that competes with the evidence.

## 7. Missing pieces, ordered by recruiter value

| Priority | Missing piece | Why it matters | Publication boundary |
|---|---|---|---|
| High | Downloadable résumé | Intuit explicitly includes a résumé link among easy contact paths. It lets a recruiter carry a concise, standardized record into a hiring workflow. [Source: Intuit](https://www.intuit.com/blog/global-stories/software-engineer-portfolio/). | The repository's `todo.md` specifies Markdown as the maintained source and PDF as the downloadable format. The experience should be one click from a current, approved version. |
| High | Project outcomes or status | The current cards show activities and technology better than the resulting capability, adoption, decision, or present stage. | Use verified qualitative outcomes when metrics are unavailable; keep proposed/ongoing work visibly distinct from completed results. |
| High | Deeper evidence from cards | The cards offer no direct path to a case study, public artifact, or relevant Engineering Note. | A sanitized case study is valid evidence even when employer code and metrics cannot be published. Never link private repositories or internal material. |
| Medium | Exact, verified role information | Recruiters may compare the portfolio with résumé and LinkedIn. | Confirm official titles and dates before changing the timeline. |
| Medium | Top-level access to core skills | The tool groups are currently below a long technical panel and absent from nav. | Add a Skills anchor or a compact skill snapshot without repeating a large logo wall. |
| Medium | Public `about-me.md` entry point | The repository already has an extensive Markdown profile and FAQ, but the web page has no link to it. | Offer it as an optional “Ask your AI assistant about my work” resource after the core recruiter actions; explain that it is a downloadable text file. |
| Medium | Clear social preview | Shared links may have a weaker preview without deliberate metadata. | Use an approved image and copy; do not expose sensitive project details. |
| Later | Presentation video | `todo.md` asks for a YouTube modal immediately before Contact. | Add only after the video exists and has captions, a clear purpose, and a way to close the modal. |
| Later | Recent X and LinkedIn publications | They can demonstrate current thinking, but live feeds can be noisy and stale. | Prefer a small curated “Writing and talks” area with dates and links; decide feed maintenance only after the core portfolio is strong. |

The résumé and AI profile are different resources. The résumé should be the standard, quick hiring artifact. `about-me.md` can support deeper questions but should not become a prerequisite for understanding the page.

## 8. What to remove, shorten, or defer

1. **Remove duplicated project explanation from the landing-page reading path.** Keep full Engineering Notes available elsewhere or behind an explicit “Read the technical decision” action. Shorten their home-page presentation.
2. **Shorten the Selected Work introduction.** Lead with the range of problems and value. Privacy constraints can be enforced editorially without occupying the first line of the section.
3. **Avoid repeated generic card headings.** Put recognizable project names into the headings; keep company labels prominent.
4. **Avoid technology proficiency percentages, progress bars, and decorative charts.** They offer little credible evidence of professional depth. Use project contributions and technical decisions to demonstrate skill. [Source: Arc](https://arc.dev/talent-blog/software-engineer-portfolio/).
5. **Do not add a mind map merely to fill visual space.** A simple diagram may help if it explains a specific data flow, trade-off, or project boundary using public information. The diagram must make a recruiter understand something faster than text alone.
6. **Keep raw social feeds and the introduction video out of the primary recruiter path.** They remain valid future ideas in `todo.md`; introduce them as optional content after the main evidence and career details are clear.
7. **Do not manufacture numerical impact.** A modest verified statement is stronger than a precise but unsupported metric. Keep confidentiality and individual-vs-team attribution intact.

These are recommendations about the page's information density, not a proposal to delete valuable professional history from the repository or the public Markdown profile.

## 9. Recommended page sequence

The following order keeps the four projects prominent while answering a recruiter's screening questions sooner:

1. **Hero:** name and role with the official portrait, value proposition, one project CTA, one contact CTA, and a résumé CTA once the PDF is available.
2. **About:** the two approved paragraphs, with no extra biography before the projects.
3. **Career snapshot:** employer, verified role or scope, dates, and a single meaningful contribution per position. A compact timeline can serve both recruiter and hiring manager.
4. **Selected Work:** the four approved projects, each readable as a short case preview and each linked to permitted deeper evidence when available.
5. **Skills / Toolbox:** grouped capabilities, ordered by relevance and connected back to projects.
6. **Engineering decisions:** one or two short home-page previews with paths to full notes; the four full notes can live on a separate page or behind deliberate disclosure controls.
7. **Education:** compact qualifications and status.
8. **Optional resources:** public Markdown profile, later curated publications and introduction video. The video placement from `todo.md` remains immediately before Contact.
9. **Contact:** clear email and LinkedIn routes, GitHub as evidence, optional WhatsApp, and a résumé link.

Moving Career ahead of Selected Work is a recommendation to test, not a requirement. If the design keeps Selected Work immediately after About, the necessary adjustment is to move the long Engineering Notes below Career and Skills. That smaller change may deliver most of the benefit with less disruption. A recruiter can also reach Career directly from the current nav; preserve that path.

## 10. Content contracts for a future implementation

### 10.1 Selected Work card

Each card should answer, in this order:

1. **Who and what:** company and project name in a heading or equally prominent label.
2. **Business problem:** one plain-English sentence about the user or decision served.
3. **My contribution:** one or two sentences naming what Carlos personally designed, built, modeled, or analyzed.
4. **Result or current status:** a verified qualitative or quantitative outcome, or an honest “in progress”/“proposed” description where applicable.
5. **Core technologies:** a short list relevant to this specific case.
6. **Evidence:** a permitted case study, technical note, public demo, article, or repository link. Omit the link if there is no legitimate public destination; do not create a dead-end button.

The card should be understandable without opening a disclosure or reading the Engineering Notes. Keep language parallel across English and pt-BR; translate meaning rather than mechanically translating each phrase.

### 10.2 Engineering decision

A full note should retain the existing technical structure: company and project → business problem → technical constraint → alternatives → decision and Carlos's role in it → trade-off → revisit trigger. This structure is especially useful for a technical interview. Link it from the related project so the reader can understand why that decision appears. The page should distinguish an actual project decision from a general engineering principle whenever the source material does not support a claim of personal ownership.

### 10.3 Career entry

Each entry should have organization, verified dates, official role when approved, relevant technical scope, and one distinctive contribution. The timeline should not imply completed work where the project is ongoing. Its wording should agree with the résumé, LinkedIn, the Selected Work cards, and `about-me.md`.

## 11. Suggested implementation priorities and acceptance criteria

### 11.1 Priority 1 — make screening easy

1. Move the full Engineering Notes out of the path between Selected Work and Career/Skills, while preserving access to all four decisions.
2. Promote recognizable company and project names in every Selected Work card.
3. Add a verified status or outcome line where the source material permits it.
4. Put a one-click résumé link in the hero or near it after the approved PDF exists.
5. Check the first mobile viewport and adjust portrait sizing/order if the H1 and primary action are obscured.

**Acceptance:** A reader scanning headings and card titles can identify Carlos, his role, four projects and companies, core skills, employer history, and contact route without reading a full Engineering Note. Each project can be matched to its deeper evidence when that evidence exists. No claim exceeds the approved public source material.

### 11.2 Priority 2 — improve depth and consistency

1. Provide a clear route from project cards to sanitized case studies or related technical decisions.
2. Align verified dates and titles across the site, résumé, LinkedIn, and public Markdown profile.
3. Add a secondary download/link for `about-me.md` with a concise explanation of its use with an AI assistant.
4. Review navigation labels, add Skills if needed, and make the social-sharing preview deliberate.

**Acceptance:** A technical reader can follow a project to its decision rationale in one deliberate action; a recruiter can reach skills, career, résumé, and contact directly. Link labels describe their destinations. Both locales present the same essential facts.

### 11.3 Priority 3 — optional expression

1. Introduce the presentation video at the planned position once content and captions are ready.
2. Add a curated publications area or a maintained feed when the editorial and technical ownership is clear.
3. Consider a project-specific diagram only where it clarifies an approved technical concept.

**Acceptance:** Optional media does not delay, displace, or obscure the recruiter journey; it remains accessible and current.

## 12. Decisions to confirm before changing public copy

1. Which official role titles and exact dates are approved for the timeline and résumé?
2. Which project outcomes or status descriptions can be stated publicly, even qualitatively?
3. Which of the four projects can have a public case-study page, demo, sanitized diagram, or technical article?
4. Should WhatsApp remain a prominent professional contact route?
5. What is the approved résumé source and publication process for the PDF?
6. Should `about-me.md` be offered as a direct download, a readable page, or both?

These questions affect publication accuracy and personal preference. They should be resolved during a future implementation pass, not answered by guessing or by copying private employer material.

## 13. Source and repository references

**Observed portfolio and files**

- [Published portfolio](https://carloshenriquedutra.github.io/portfolio/) — current page content, navigation, and section order; freshly fetched on 2026-09-27.
- [`index.html`](../index.html) — English HTML baseline and page structure.
- [`src/content/en.js`](../src/content/en.js) and [`src/content/pt-BR.js`](../src/content/pt-BR.js) — localized content and project records.
- [`assets/css/theme.css`](../assets/css/theme.css) — responsive portrait, typography, and section presentation relevant to visual risks.
- [`about-me.md`](../about-me.md) — already available public profile for deeper context.
- [`todo.md`](../todo.md) — recorded résumé, video, and publication-feed ideas.

**External guidance**

- [Nielsen Norman Group: The Layer-Cake Pattern of Scanning Content on the Web](https://www.nngroup.com/articles/layer-cake-pattern-scanning/) — evidence for descriptive headings, content chunks, and page scanning.
- [Intuit: How to Build a Software Engineering Portfolio](https://www.intuit.com/blog/global-stories/software-engineer-portfolio/) — employer guidance on introduction, curated projects, grouped skills, contact, and résumé.
- [Arc: How to Build a Software Engineer Portfolio](https://arc.dev/talent-blog/software-engineer-portfolio/) — guidance on recruiter and technical audiences, project context, concision, and avoiding skill percentages.
- [W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/) — heading structure as a navigation aid.
- [W3C WCAG 2.2 Understanding 2.4.4: Link Purpose in Context](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html) — descriptive link purpose.
