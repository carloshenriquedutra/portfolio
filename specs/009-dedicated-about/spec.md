# Feature Specification: Sobre para recrutadores

**Feature Branch**: `main`

**Created**: 2026-10-03

**Status**: Aprovada para implementação

**Input**: Criar página dedicada ao About, usando o histórico profissional autorizado e escrevendo para recrutadores que procuram um engenheiro de dados sênior.

## User Scenarios & Testing

### User Story 1 - Avaliar experiência e senioridade (Priority: P1)

Como recrutador, quero entender rapidamente o posicionamento técnico de Carlos, suas experiências relevantes e como sua trajetória se conecta à engenharia de dados.

**Why this priority**: A página precisa ajudar a avaliar adequação a uma vaga sênior.

**Independent Test**: Ler a página e identificar cargo, especialidades, experiência recente, formação e próximos caminhos para projetos ou contato.

**Acceptance Scenarios**:

1. **Given** a página Sobre, **When** leio a abertura, **Then** identifico atuação como engenheiro de dados sênior com experiência em plataformas em nuvem e entendimento do negócio.
2. **Given** a trajetória, **When** leio as experiências recentes, **Then** encontro entregas concretas na MadeiraMadeira e Gobrax, seguidas da base profissional em Leads2b e COPAPA.
3. **Given** formação e foco profissional, **When** leio a página, **Then** distingo cursos concluídos e em andamento e identifico a preferência pela contribuição técnica.

### User Story 2 - Encontrar e compartilhar a página (Priority: P2)

Como visitante, quero acessar Sobre pelo menu ou por URL própria, ler em português ou inglês e seguir para projetos e contato.

**Why this priority**: A página precisa participar da navegação existente.

**Independent Test**: Acessar a URL diretamente e pelos menus das páginas existentes, trocar idioma e seguir seus links.

**Acceptance Scenarios**:

1. **Given** qualquer página, **When** clico em Sobre, **Then** abro a página dedicada no idioma atual.
2. **Given** a página dedicada, **When** troco idioma, **Then** conteúdo, metadados e links permanecem coerentes.
3. **Given** JavaScript indisponível, **When** abro a página, **Then** encontro a versão inglesa completa e links funcionais.

### Edge Cases

- O histórico inclui experiências deliberadamente omitidas do perfil público e relatos pessoais; publicar somente fatos profissionais pertinentes à posição sênior.
- Não apresentar toda a trajetória desde 2013 como anos de engenharia de dados em nuvem.
- Não inventar métricas, certificações, nível de inglês ou resultados; evitar dados financeiros internos e detalhes de bastidores.
- A graduação em Ciência da Computação permanece em andamento, com previsão de conclusão em 2028.
- Preservar antigas âncoras da home e páginas de projetos.

## Requirements

### Functional Requirements

- **FR-001**: Disponibilizar Sobre em URL dedicada, com apresentação, competências contextualizadas, trajetória e formação.
- **FR-002**: Redigir em primeira pessoa, com linguagem direta para recrutadores e foco em engenharia de dados sênior.
- **FR-003**: Fundamentar alegações no histórico autorizado, priorizando experiências recentes e contribuição técnica.
- **FR-004**: Apresentar inglês e português, com versão inicial inglesa utilizável sem JavaScript.
- **FR-005**: Direcionar Sobre dos menus e uma chamada na home para a nova página, preservando o idioma e os demais caminhos.
- **FR-006**: Exibir navegação ativa, título e descrição próprios, conteúdo acessível e layout responsivo.
- **FR-007**: Oferecer caminhos para projetos e contato sem reproduzir os estudos de caso completos.

## Success Criteria

- **SC-001**: A nova página apresenta cargo, três frentes de contribuição, quatro experiências e três formações nos dois idiomas.
- **SC-002**: Todos os links Sobre das páginas públicas abrem a URL dedicada; português mantém seu idioma.
- **SC-003**: A troca de idioma atualiza conteúdo e metadados sem erros, e a página inicial inglesa é completa.
- **SC-004**: A página funciona em celular e desktop, com hierarquia de títulos, navegação e links de projetos/contato utilizáveis.

## Assumptions

- Reutilizar a identidade visual e a fotografia já publicadas.
- O perfil público registrado no histórico é a referência principal; detalhes técnicos dos dossiês corroboram a narrativa.
- Não divulgar objetivos salariais, situações internas das empresas ou passagens omitidas do perfil público.

## Riscos e validação

Revisar factualidade, privacidade, leitura e a diferença entre experiência profissional geral e experiência em engenharia. Validar rota, idioma, metadados, versão estática, navegação em todas as páginas e aparência em duas larguras de tela.
