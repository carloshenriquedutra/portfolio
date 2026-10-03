# Tasks: Páginas de projetos sem redundâncias

## Phase 1: Preparação

- [x] T001 Confirmar escopo, fatos existentes e checklist em `specs/007-concise-project-pages/spec.md`.

## Phase 2: Base

- [x] T002 Verificar arquivos ignorados e preparar validação temporária do DOM para `src/presentation/render-projects.js`.

## Phase 3: US1 — Leitura objetiva

**Validação independente**: Dois cards e decisões com conteúdo distinto para cada projeto.

- [x] T003 [US1] Consolidar conteúdo de detalhes em `src/content/en.js` e `src/content/pt-BR.js` (FR-001 a FR-004).
- [x] T004 [US1] Eliminar blocos e identificadores repetidos em `src/presentation/render-projects.js` (FR-001 a FR-003).

## Phase 4: US2 — Consistência

**Validação independente**: Oito renderizações completas e quatro páginas estáticas equivalentes.

- [x] T005 [US2] Sincronizar os detalhes ingleses em `projects/lumi/index.html`, `projects/people-analytics/index.html`, `projects/hubspot-crm/index.html` e `projects/copapa-market-sizing/index.html` (FR-005).
- [x] T006 [US2] Validar idiomas, versões estáticas e navegação; registrar evidências em `specs/007-concise-project-pages/validation.md` (FR-004 a FR-006).

## Phase 5: Revisão

- [x] T007 Executar convergência e review direto do diff; registrar resultado em `specs/007-concise-project-pages/validation.md`.

## Dependências e execução

T001 → T002 → T003 → T004 → T005 → T006 → T007. Os idiomas de T003 podem ser revisados independentemente; as páginas de T005 também. A execução será sequencial, sem agentes adicionais. O MVP é US1; US2 completa a entrega. Não adicionar uma suíte permanente para uma mudança editorial reversível.
