# Tasks: Decisões em linguagem direta

## Phase 1: Preparação

- [x] T001 Conferir fonte do Lumi e critérios em `specs/008-plain-language-decisions/spec.md`.

## Phase 2: US1 — Linguagem direta

**Validação independente**: Títulos e parágrafos compreensíveis sem glossário, com escolhas e consequências preservadas.

- [x] T002 [US1] Revisar decisões, rótulos e análise em `src/content/pt-BR.js` e `src/content/en.js` (FR-001 a FR-004).

## Phase 3: US2 — Consistência

**Validação independente**: Oito renderizações e quatro páginas estáticas correspondentes.

- [x] T003 [US2] Sincronizar as quatro páginas em `projects/*/index.html` (FR-005).
- [x] T004 [US2] Validar fontes, linguagem, idiomas e links; registrar evidências em `specs/008-plain-language-decisions/validation.md` (FR-001 a FR-005).

## Phase 4: Convergência e review

- [x] T005 Conferir convergência e executar review direto; registrar resultado em `specs/008-plain-language-decisions/validation.md`.

## Dependências e estratégia

T001 → T002 → T003 → T004 → T005. Os dois idiomas podem ser revisados independentemente, assim como os quatro HTMLs; executar sequencialmente nesta sessão. US1 é o MVP editorial; US2 completa a entrega pública. Sem novos testes permanentes, dependências ou alterações no renderer.
