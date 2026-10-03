# Feature Specification: Páginas de experiência e formação

**Feature Branch**: `main`
**Created**: 2026-10-03
**Status**: Aprovada para implementação
**Input**: Criar uma página dedicada à experiência profissional e outra à formação acadêmica.

## User Scenarios & Testing

### User Story 1 - Consultar experiência profissional (Priority: P1)

Como recrutador, quero consultar a trajetória profissional em uma página própria para avaliar o escopo e a progressão da atuação em engenharia de dados.

**Why this priority**: A experiência é central para avaliar uma candidatura sênior.
**Independent Test**: Abrir a página de experiência nos dois idiomas e localizar as experiências publicáveis em ordem cronológica reversa.

**Acceptance Scenarios**:
1. **Given** qualquer página do site, **When** seleciono Experiência, **Then** chego a uma URL dedicada no mesmo idioma.
2. **Given** a página de experiência, **When** leio cada item, **Then** encontro organização, período, função e resumo claro das contribuições.

### User Story 2 - Consultar formação acadêmica (Priority: P2)

Como recrutador, quero encontrar a formação acadêmica separada da experiência para distinguir cursos concluídos dos que ainda estão em andamento.

**Why this priority**: A apresentação explícita de status e períodos evita ambiguidades.
**Independent Test**: Abrir a página de formação e identificar os três cursos e seus status nos dois idiomas.

**Acceptance Scenarios**:
1. **Given** qualquer página do site, **When** seleciono Formação, **Then** chego à página acadêmica no idioma atual.
2. **Given** a lista acadêmica, **When** consulto cada curso, **Then** consigo distinguir conclusão, período e instituição.

### User Story 3 - Navegar entre resumos e páginas completas (Priority: P2)

Como visitante, quero ver resumos na página Sobre e na home e poder abrir as páginas completas sem perder o idioma.

**Independent Test**: Seguir chamadas de ação na Home e em Sobre para as páginas dedicadas e retornar por meio do menu.

**Acceptance Scenarios**:
1. **Given** Home ou Sobre, **When** seleciono a chamada de experiência ou formação, **Then** abro a respectiva página dedicada.
2. **Given** qualquer página, **When** troco o idioma, **Then** conteúdo, título, descrição e links refletem o idioma escolhido.

### Edge Cases
- Não publicar experiências que o histórico marca como omitidas do perfil público.
- Não apresentar todos os anos de carreira como anos de engenharia de dados.
- Manter Ciência da Computação como em andamento e os demais cursos com seus status corretos.
- Preservar links antigos com âncoras de experiência e formação na home.
- Disponibilizar conteúdo inicial em inglês mesmo antes de JavaScript executar.

## Requirements

### Functional Requirements
- **FR-001**: O site MUST oferecer uma página dedicada à trajetória profissional, com organização, período, função e contribuições.
- **FR-002**: O site MUST oferecer uma página dedicada à formação acadêmica, distinguindo cursos concluídos e em andamento.
- **FR-003**: Ambas as páginas MUST estar disponíveis em português e inglês, incluindo título e descrição próprios.
- **FR-004**: A navegação global MUST apontar para as páginas dedicadas e indicar a página atual.
- **FR-005**: Home e Sobre MUST resumir experiência e formação e oferecer links para suas páginas completas.
- **FR-006**: Conteúdo público MUST permanecer fiel à fonte profissional autorizada e excluir itens marcados como privados.
- **FR-007**: Páginas MUST conservar a identidade visual, acessibilidade básica, layout responsivo e links de contato.

### Key Entities
- **Experiência profissional**: organização, período, função e resumo público das contribuições.
- **Formação acadêmica**: curso, instituição, período, status e descrição breve.

## Success Criteria
- **SC-001**: As páginas exibem as experiências publicáveis e os três cursos nos dois idiomas.
- **SC-002**: Todos os links globais para experiência e formação levam às páginas dedicadas e preservam idioma.
- **SC-003**: Home e Sobre oferecem chamadas para as páginas completas sem duplicar o conteúdo integral.
- **SC-004**: Cada página tem título, descrição, hierarquia de títulos, navegação ativa e versão estática inicial completa.

## Assumptions
- O histórico profissional já autorizado nesta tarefa continua sendo fonte de conteúdo.
- As páginas usam os componentes e estilos já existentes no portfólio.
- As âncoras de seção na home permanecem para compatibilidade.

## Riscos e validação
Revisar datas, status acadêmicos, omissões de privacidade, links nos dois idiomas, metadados e navegação em todas as páginas públicas.
