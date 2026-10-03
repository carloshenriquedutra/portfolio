# Implementation Plan: Sobre para recrutadores

**Branch**: `main` | **Date**: 2026-10-03 | **Spec**: [spec.md](spec.md)

## Summary

Criar `about/index.html` com conteúdo bilíngue próprio e versão inglesa estática. Integrar rota About e renderizar trajetória e formação com as funções de apresentação existentes.

## Technical Context

**Language/Version**: HTML, CSS existente e módulos JavaScript nativos.

**Primary Dependencies**: DOM, Bootstrap 5.3.3 local e fotografia existente; nenhuma dependência nova.

**Storage**: Conteúdo em `src/content/en.js` e `src/content/pt-BR.js`.

**Testing**: Conferência editorial contra fontes, browser real, troca de idioma, links em todas as páginas e fallback estático.

**Target Platform**: GitHub Pages, navegadores desktop e celular.

**Project Type**: Portfolio pessoal estático.

**Performance Goals**: Nenhum serviço, build ou dependência adicional.

**Constraints**: Manter privacidade das fontes, layout e caminhos existentes. A home conserva resumo e âncoras.

**Scale/Scope**: Uma página nova, dois idiomas, integração de menu em seis páginas existentes.

## Constitution Check

Aprovado antes e depois do desenho: spec antes da implementação, tarefas rastreáveis, somente o portfolio editado, validação proporcional ao risco de navegação e privacidade, sem dados privados publicados. `.specify/` já instalada.

## Project Structure

- `about/index.html`: estrutura semântica, menu ativo, fotografia, três frentes, trajetória, formação, ações e contato.
- `src/content/{en,pt-BR}.js`: `pages.about`, `aboutPage` e chamada da home.
- `src/presentation/render-page.js`: reutilização das funções de trajetória e formação para a página About.
- `src/adapters/browser/site-links.js`: rota About para `about/`, sem âncora.
- `index.html`: chamada no resumo Sobre e link estático atualizado.
- `projects/index.html` e `projects/*/index.html`: links estáticos Sobre atualizados.

**Structure Decision**: Texto simples com `data-copy`, listas de trajetória/formação pelo renderer existente. Nenhuma duplicação de função de renderização ou nova abstração de roteamento.
