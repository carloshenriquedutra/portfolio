# Tasks: Sobre para recrutadores

## Phase 1: Preparação

- [x] T001 Conferir fontes autorizadas e requisitos em `specs/009-dedicated-about/spec.md`.

## Phase 2: US1 — Posicionamento e conteúdo

**Validação independente**: Cargo, frentes de atuação, trajetória e formação compreensíveis para recrutadores.

- [x] T002 [US1] Redigir conteúdo bilíngue em `src/content/en.js` e `src/content/pt-BR.js` (FR-001 a FR-004).
- [x] T003 [US1] Criar `about/index.html` com versão inglesa completa e integrar trajetória/formação em `src/presentation/render-page.js` (FR-001, FR-004, FR-006, FR-007).

## Phase 3: US2 — Navegação e idiomas

**Validação independente**: URL direta, menus e troca de idioma funcionais.

- [x] T004 [US2] Integrar rota em `src/adapters/browser/site-links.js`, atualizar links estáticos em `index.html`, `projects/index.html` e `projects/*/index.html`, e acrescentar chamada na home (FR-005).
- [x] T005 [US2] Validar navegador, links, metadados e layout; registrar evidências em `specs/009-dedicated-about/validation.md` (FR-004 a FR-007).

## Phase 4: Convergência e review

- [x] T006 Revisar factualidade/privacidade, convergência e diff; registrar resultado em `specs/009-dedicated-about/validation.md`.

## Dependências e estratégia

T001 → T002 → T003 → T004 → T005 → T006. Idiomas e links estáticos podem ser trabalhados independentemente; execução sequencial nesta sessão. US1 fornece a página; US2 integra a experiência completa. Validação temporária do comportamento de navegação, sem nova dependência permanente.
