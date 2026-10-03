# Feature Specification: Decisões em linguagem direta

**Feature Branch**: `main`

**Created**: 2026-10-03

**Status**: Aprovada para implementação

**Input**: Simplificar os termos complexos das decisões de engenharia do portfolio; usar os ADRs de `service-people-ia/docs/adr` como fonte do Lumi.

## User Scenarios & Testing

### User Story 1 - Entender escolhas sem conhecer o vocabulário técnico (Priority: P1)

Como visitante, quero entender o motivo de cada escolha, suas consequências e quando seria revista, mesmo sem conhecer termos de engenharia de dados ou IA.

**Why this priority**: O vocabulário atual dificulta a compreensão do trabalho profissional.

**Independent Test**: Ler títulos e parágrafos das decisões em ambos os idiomas e explicar a escolha sem recorrer a um glossário.

**Acceptance Scenarios**:

1. **Given** a decisão do Lumi, **When** leio o texto, **Then** entendo que documentos da empresa são consultados antes da resposta e que a atualização do conteúdo independe de alterar o assistente.
2. **Given** People Analytics ou HubSpot, **When** leio as decisões, **Then** entendo a finalidade, as alternativas e o custo da escolha em palavras familiares, com exemplos quando úteis.
3. **Given** os rótulos dos parágrafos, **When** leio a seção, **Then** encontro perguntas e descrições diretas, sem jargão editorial.

### User Story 2 - Preservar precisão e consistência (Priority: P2)

Como visitante, quero a mesma informação em português, inglês e na versão inicial da página.

**Why this priority**: Simplificar não deve distorcer a escolha nem remover seus limites.

**Independent Test**: Conferir as quatro páginas nos dois idiomas e comparar as versões estáticas em inglês.

**Acceptance Scenarios**:

1. **Given** as fontes existentes, **When** reviso o conteúdo, **Then** a decisão do Lumi corresponde ao ADR-0017 e as demais mantêm os fatos já publicados, sem novas métricas ou garantias.
2. **Given** qualquer projeto, **When** abro sua página em qualquer idioma ou sem JavaScript, **Then** encontro a revisão coerente com suas escolhas e limites.

### Edge Cases

- A busca do Lumi pode não encontrar informação suficiente; descrever esse limite sem prometer respostas sempre corretas.
- Cada registro de CRM pode ter várias relações; explicar contagem duplicada com um exemplo sem inventar dados profissionais.
- COPAPA tem uma análise metodológica; simplificar sua descrição e preservar a diferença entre estimativa e venda realizada.
- Os ADRs são documentos internos de referência; não publicar caminhos internos, links corporativos, IDs de cards, detalhes operacionais ou novas métricas.

## Requirements

### Functional Requirements

- **FR-001**: Reescrever títulos e textos das quatro decisões em linguagem direta, evitando termos especializados não explicados.
- **FR-002**: Simplificar os rótulos de contexto, alternativas, escolha, consequência e revisão.
- **FR-003**: Fundamentar a decisão do Lumi no ADR-0017 aceito; preservar limites e atualização independente do assistente.
- **FR-004**: Preservar separação das etapas dos dados, armazenamento por data, prevenção de contagens duplicadas e análise municipal.
- **FR-005**: Sincronizar ambos os idiomas e as quatro versões estáticas; preservar estrutura e navegação existentes.

## Success Criteria

- **SC-001**: As quatro decisões possuem títulos que explicam sua finalidade e cinco parágrafos com palavras familiares.
- **SC-002**: As decisões não usam os termos rejeitados: conhecimento paramétrico, revocação, corpus, scans, rebuild, conformidade, semântica, grão, cardinalidade, snapshots, assertions, fan-out ou bridge models.
- **SC-003**: As oito combinações de projeto e idioma preservam escolhas e consequências e não expõem informações internas das fontes.
- **SC-004**: As quatro páginas estáticas correspondem ao conteúdo inglês renderizado.

## Assumptions

- A correção de linguagem se aplica à seção de decisões das páginas já revisadas; a fonte indicada fundamenta somente o Lumi.
- A revisão não adiciona decisões novas nem altera os ADRs de origem.

## Riscos e validação

O risco é simplificar a ponto de mudar o significado ou prometer uma garantia inexistente. Comparar Lumi com ADR-0017, conferir os demais textos contra suas versões anteriores e validar renderização, versão estática e navegação. Não é necessária uma suíte permanente para esta mudança editorial.
