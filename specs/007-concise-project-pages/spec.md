# Feature Specification: Páginas de projetos sem redundâncias

**Feature Branch**: `main` (repositório pessoal)

**Created**: 2026-10-03

**Status**: Aprovada para implementação

**Input**: Eliminar redundâncias das quatro páginas de projetos; consultar o histórico profissional autorizado somente se houver dúvida factual.

## User Scenarios & Testing

### User Story 1 - Entender cada projeto com uma leitura objetiva (Priority: P1)

Como visitante, quero entender o problema, a contribuição de Carlos e suas decisões sem reler a mesma informação em diferentes blocos.

**Why this priority**: As repetições dificultam avaliar o trabalho e alongam a leitura.

**Independent Test**: Ler as quatro páginas em português e inglês e verificar que cada bloco acrescenta informação.

**Acceptance Scenarios**:

1. **Given** qualquer projeto, **When** abro sua página, **Then** vejo um título, a empresa, o contexto e uma contribuição consolidada, sem subtítulo ou resumo que repita os blocos.
2. **Given** decisões técnicas, **When** leio os detalhes, **Then** encontro restrições, alternativas, decisão, custo e condição de revisão, sem repetir a empresa ou o problema geral.
3. **Given** resultados já descritos, **When** leio a contribuição, **Then** os resultados concretos são preservados e People Analytics continua identificado como em evolução.

### User Story 2 - Acessar conteúdo consistente (Priority: P2)

Como visitante, quero a mesma clareza nos dois idiomas e ao abrir diretamente uma página sem JavaScript.

**Why this priority**: A versão estática e a tradução precisam representar o mesmo projeto.

**Independent Test**: Comparar as quatro páginas estáticas em inglês com o conteúdo renderizado e conferir as oito combinações de projeto e idioma.

**Acceptance Scenarios**:

1. **Given** qualquer idioma, **When** abro um projeto, **Then** encontro o mesmo conjunto de informações e decisões.
2. **Given** JavaScript indisponível, **When** abro a página, **Then** leio o conteúdo revisado em inglês e encontro os links de navegação.

### Edge Cases

- COPAPA possui análise metodológica em vez de decisões estruturadas; preservar a unidade municipal e a distinção entre estimativas e vendas realizadas uma única vez.
- Falha de carregamento de JavaScript mantém a versão inglesa estática utilizável.
- Não inventar métricas, resultados ou detalhes profissionais; consultar apenas o histórico autorizado se necessário.

## Requirements

### Functional Requirements

- **FR-001**: Revisar as quatro páginas com abertura curta e contribuição consolidada.
- **FR-002**: Listar ferramentas em uma seção dedicada, evitando repetir a lista na contribuição.
- **FR-003**: Preservar as quatro decisões técnicas e a análise municipal da COPAPA; cada trecho deve acrescentar informação específica.
- **FR-004**: Preservar resultados existentes, limites das estimativas e o estado em evolução de People Analytics, sem novas alegações.
- **FR-005**: Aplicar a revisão nos dois idiomas e nas páginas estáticas.
- **FR-006**: Preservar navegação, contato, troca de idioma e apresentação em telas pequenas.

## Success Criteria

- **SC-001**: As quatro páginas possuem somente dois blocos iniciais: contexto e contribuição.
- **SC-002**: Cada página apresenta uma lista de ferramentas e nenhum identificador repetido antes das decisões.
- **SC-003**: As oito combinações de página e idioma preservam contribuições, decisões e limites factuais.
- **SC-004**: As quatro versões estáticas apresentam o mesmo conteúdo inglês dos detalhes interativos.

## Assumptions

- A solicitação inclui português e inglês, pois o site é bilíngue.
- Os fatos já publicados são suficientes para uma revisão editorial; nenhuma mudança de histórico é necessária.
- O índice de projetos e a home ficam fora do escopo editorial.

## Riscos e validação

O risco é cortar informação útil ao reduzir texto ou deixar a versão estática desatualizada. Validar as oito renderizações, comparar versões estáticas, conferir links e revisar o diff. Não adicionar dados pessoais ou segredos.
