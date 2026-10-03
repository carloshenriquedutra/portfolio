# Implementation Plan: Páginas de projetos sem redundâncias

**Branch**: `main` | **Date**: 2026-10-03 | **Spec**: [spec.md](spec.md)

## Summary

Consolidar contexto e contribuição no renderer compartilhado; revisar o conteúdo de detalhes nos dois idiomas e sincronizar as quatro páginas HTML estáticas.

## Technical Context

**Language/Version**: HTML e módulos JavaScript nativos.

**Primary Dependencies**: DOM e Bootstrap local existente; nenhuma dependência nova.

**Storage**: Objetos de conteúdo em `src/content/`.

**Testing**: Renderização das oito combinações com DOM de validação, comparação do HTML estático e revisão editorial; conferir navegador se disponível.

**Target Platform**: Navegadores modernos em desktop e celular.

**Project Type**: Site estático.

**Performance Goals**: Reduzir texto e elementos repetidos sem adicionar recursos de execução.

**Constraints**: Home e índice mantêm seus textos; fatos existentes são a fonte editorial. Sem novas métricas ou alegações.

**Scale/Scope**: Quatro páginas, dois idiomas, um renderer.

## Constitution Check

Aprovado antes e depois do desenho: spec antecede código, tarefas possuem rastreabilidade, mudança limitada ao portfolio pessoal, validação proporcional ao risco. Nenhum segredo ou novo dado pessoal. Não há alteração de serviços, infraestrutura ou CI/CD.

## Project Structure

- `src/content/en.js` e `src/content/pt-BR.js`: contribuição específica do detalhe, problemas concisos, restrições e análise sem repetição.
- `src/presentation/render-projects.js`: cabeçalho com empresa e título; dois cards; decisões sem overline ou problema duplicado.
- `projects/{lumi,people-analytics,hubspot-crm,copapa-market-sizing}/index.html`: conteúdo estático equivalente ao renderer inglês.
- `specs/007-concise-project-pages/`: artefatos e evidências.

**Structure Decision**: Manter os dados dos cards existentes; usar contribuição nos detalhes para consolidar a abordagem e resultados. Remover campos de detalhe que deixarem de ser usados. Incorporar o contexto específico de performance na restrição da decisão de materialização.
