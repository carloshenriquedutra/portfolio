# Implementation Plan: Decisões em linguagem direta

**Branch**: `main` | **Date**: 2026-10-03 | **Spec**: [spec.md](spec.md)

## Summary

Revisar somente as decisões e a análise da COPAPA em `src/content/en.js` e `src/content/pt-BR.js`, com rótulos familiares, e sincronizar os quatro HTMLs de detalhes.

## Technical Context

**Language/Version**: HTML e módulos JavaScript nativos.

**Primary Dependencies**: Renderer e Bootstrap locais existentes; nenhuma dependência nova.

**Storage**: Objetos de conteúdo nos dois idiomas.

**Testing**: Conferência editorial contra as fontes, oito renderizações e comparação estática, Chrome para idioma e navegação.

**Target Platform**: Site estático em navegador desktop e celular.

**Project Type**: Portfolio pessoal.

**Performance Goals**: Nenhum recurso adicional em execução.

**Constraints**: Preservar significado, estrutura e links; não publicar informações internas dos ADRs.

**Scale/Scope**: Quatro decisões e uma análise metodológica, dois idiomas e quatro HTMLs.

## Constitution Check

Aprovado antes e depois do desenho: spec antes do código, tarefas rastreáveis, escopo limitado ao portfolio, revisão e validação proporcionais ao risco, sem novos dados pessoais ou detalhes corporativos públicos.

## Project Structure

- `src/content/{en,pt-BR}.js`: textos e rótulos das decisões, análise COPAPA.
- `projects/{lumi,people-analytics,hubspot-crm,copapa-market-sizing}/index.html`: conteúdo inicial equivalente em inglês.
- `specs/008-plain-language-decisions/`: especificação, plano, tarefas e evidências.

**Structure Decision**: Manter o renderer; trocar o conteúdo nos campos existentes. Usar exemplos conceituais curtos para relações de CRM e leitura por data.
