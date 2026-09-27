const ptBR = {
  locale: "pt-BR",
  pageTitle: "Carlos Dutra · Engenheiro de Dados Sênior",
  description: "Engenheiro de Dados Sênior criando bases de dados confiáveis para decisões melhores.",
  nav: { about: "Sobre", work: "Trabalhos", experience: "Experiência", contact: "Contato", language: "Idioma" },
  interface: { skipLink: "Pular para o conteúdo", mainNavigation: "Navegação principal", toggleNavigation: "Alternar navegação", aboutKicker: "01 / A TRAJETÓRIA", workKicker: "02 / TRABALHOS SELECIONADOS", decisionsKicker: "NOTAS DE ENGENHARIA", skillsKicker: "03 / FERRAMENTAS", experienceKicker: "04 / CARREIRA", educationKicker: "05 / FORMAÇÃO", contactKicker: "06 / VAMOS CONVERSAR", portraitCaption: "Dados, decisões e uma ou outra reviravolta na planilha." },
  hero: {
    eyebrow: "Engenheiro de Dados Sênior · Analytics e Plataformas",
    title: "Construo a base de dados por trás de decisões melhores.",
    intro: "Gosto da parte que vem antes do dashboard: entender o que os números significam, de onde vieram e o que alguém pode fazer com segurança a partir deles.",
    note: "Curioso por padrão. Cuidadoso com definições. Parceiro de quem vai manter a solução depois.",
    workAction: "Conheça alguns trabalhos", contactAction: "Entre em contato", portraitAlt: "Carlos Dutra sorrindo em seu retrato oficial de perfil"
  },
  about: {
    title: "Da pergunta de negócio a dados confiáveis",
    body: "Minha trajetória passa por inteligência comercial, Customer Success, RevOps e engenharia de dados. Essa mistura me ensinou a perguntar que decisão um número vai apoiar antes de escolher como construir o pipeline que o produz.",
    detail: "Atuo como profissional técnico sênior: desenho arquitetura, construo produtos de dados úteis e mantenho proximidade com o problema operacional. Um dashboard só é confiável quanto as definições e os sistemas por trás dele."
  },
  work: { title: "Trabalhos selecionados", intro: "Alguns exemplos de perguntas que gosto de investigar. Detalhes sensíveis de implementação ficam onde devem ficar: em privado." },
  caseLabels: { context: "Contexto", problem: "Problema", role: "Minha contribuição", approach: "Abordagem", outcome: "Resultado", tradeoff: "Trade-off" },
  decisionHeading: "Como gosto de tomar decisões",
  decisionLabels: { context: "Contexto", options: "Alternativas consideradas", choice: "Escolha", tradeoff: "Trade-off", revisit: "Revisitar quando" },
  cases: [
    { title: "Um caminho mais tranquilo dos dados operacionais às decisões", category: "Plataforma de dados", context: "Uma operação em crescimento tinha informações úteis espalhadas por sistemas, enquanto relatórios recorrentes dependiam de etapas manuais frágeis.", problem: "Criar uma base repetível para que as equipes usem medidas consistentes sem transformar cada pergunta nova em uma extração improvisada.", role: "Contribuí para definir o modelo de dados e a abordagem de engenharia, conectando o trabalho ao consumo pelas áreas de negócio e priorizando definições compartilhadas de maior reuso.", approach: "Separar ingestão, transformação e consumo; modelar os processos de negócio; dar visibilidade à atualização e à qualidade; preferir regras reutilizáveis a cópias em relatórios individuais.", outcome: "As equipes passaram a ter um caminho mais confiável dos registros operacionais até a análise, com menos dependência de manipulação pontual. Números internos de escala e desempenho foram intencionalmente omitidos.", tradeoff: "Um bom modelo compartilhado exige conversa. Alinhar o significado de uma métrica pode ser mais difícil que escrever SQL — e evita que os próximos cinco relatórios discordem.", technologies: ["Engenharia de dados", "Modelagem dimensional", "Orquestração", "SQL"] },
    { title: "Colocando o mercado no mapa comercial", category: "Inteligência comercial", context: "O planejamento comercial precisava entender melhor onde o potencial de mercado e a atividade existente se encontravam.", problem: "Combinar informações públicas e de negócio para apoiar conversas sobre territórios sem tratar uma estimativa como certeza.", role: "Trabalhei na preparação dos dados e na modelagem de mercado, traduzindo limitações das fontes em premissas que pudessem ser discutidas.", approach: "Alinhar entidades geográficas e de negócio, comparar atividade observada com contexto externo e explicitar a diferença entre fatos medidos e projeções.", outcome: "A análise ofereceu aos stakeholders comerciais uma base mais estruturada para discutir cobertura e oportunidades. Projeções históricas não são apresentadas como resultados realizados.", tradeoff: "Um mapa pode parecer preciso mesmo quando as entradas são estimativas. Premissas claras importaram mais que uma precisão decorativa.", technologies: ["Modelagem de mercado", "Análise geográfica", "Business intelligence"] },
    { title: "Tendências de busca como pergunta, não previsão", category: "Projeto público", context: "O interesse em buscas pode oferecer um sinal útil sobre como a atenção muda ao longo do tempo.", problem: "Explorar o que os dados de tendência permitem dizer — e o que não permitem — ao comparar temas e períodos.", role: "Criei uma análise pública em Python usando dados disponíveis de interesse em buscas.", approach: "Coletar, inspecionar e comparar tendências normalizadas, tratando amostragem e escala relativa como limitações, não como demanda absoluta.", outcome: "O projeto é reproduzível e exemplifica análise exploratória prática com uma fonte pública.", tradeoff: "Interesse em buscas não é venda, intenção ou pesquisa populacional. É um sinal, útil quando descrito com honestidade.", technologies: ["Python", "Pytrends", "Análise exploratória"], url: "https://github.com/carloshenriquedutra/pytrends", linkLabel: "Ver repositório público" }
  ],
  decisions: [
    { title: "Colocar a regra de negócio onde possa ser governada", situation: "Uma métrica reutilizada em vários dashboards pode mudar à medida que cada cópia atende a uma necessidade local.", options: "Duplicar o cálculo em cada relatório ou manter uma definição revisada em uma camada analítica compartilhada.", choice: "Manter regras de negócio reutilizáveis na camada compartilhada e deixar cada consumidor focado em sua pergunta.", tradeoff: "A responsabilidade centralizada exige que as equipes alinhem a definição mais cedo, mas evita várias versões quase iguais depois.", revisit: "Revisitar a fronteira se a métrica realmente tiver significados diferentes conforme o contexto ou se a governança compartilhada atrasar uma mudança válida." },
    { title: "Modelar aquilo que as pessoas querem dizer — não só a linha que recebemos", situation: "Uma linha da fonte pode representar uma pessoa, um vínculo de trabalho ou um evento operacional em um momento específico.", options: "Contar diretamente as linhas convenientes da fonte ou definir a entidade e o grão de negócio antes de criar medidas.", choice: "Nomear explicitamente o grão e a identidade e então construir medidas a partir desse significado.", tradeoff: "O modelo exige mais perguntas no início e evita totais que parecem precisos, mas respondem à pergunta errada.", revisit: "Revisitar o modelo se mudarem as regras de ciclo de vida, a identidade na fonte ou a decisão apoiada." },
    { title: "Tornar a repetição segura", situation: "Um processo agendado pode falhar pela metade e rodar novamente; retentativas fazem parte da operação normal.", options: "Tratar reexecuções como reparos manuais excepcionais ou desenhar contratos explícitos e processamento repetível.", choice: "Preferir processamento idempotente e resultados observáveis para tornar as retentativas previsíveis.", tradeoff: "Estados de execução claros e idempotência exigem desenho, mas reduzem o risco de dados duplicados ou ausentes sem explicação.", revisit: "Revisitar quando padrões observados de falha mostrarem que a recuperação atual custa demais ou oculta evidências úteis." }
  ],
  skills: { title: "Ferramentas ajudam. O trabalho é ter critério.", groups: [
    { name: "Plataformas de dados", items: ["Google Cloud", "BigQuery", "Databricks", "AWS"] },
    { name: "Engenharia", items: ["Python", "SQL", "Airflow", "Dataform", "dbt", "Airbyte"] },
    { name: "Modelagem e confiabilidade", items: ["Data warehouse", "Modelagem dimensional", "ELT", "Qualidade de dados", "Governança"] },
    { name: "IA aplicada", items: ["RAG", "Embeddings", "Vertex AI", "Gemini", "Busca vetorial"] },
    { name: "Contexto de negócio", items: ["People Analytics", "RevOps", "Logística", "Customer Success", "Inteligência comercial"] }
  ] },
  experience: { title: "Uma carreira próxima do problema", items: [
    { org: "MadeiraMadeira", dates: "2026–atual", role: "Engenharia de dados", summary: "Construção de produtos de dados e capacidades de plataforma em um grande negócio digital." },
    { org: "Gobrax", dates: "2023–2026", role: "Engenharia de dados", summary: "Atuação com dados operacionais, engenharia analítica e fundamentos de plataforma em tecnologia para logística." },
    { org: "Leads2b", dates: "2020–2022", role: "Análise de Customer Success", summary: "Conexão entre perguntas de clientes e área comercial, análise e visão operacional." },
    { org: "COPAPA", dates: "2013–2018", role: "Inteligência comercial", summary: "Construção de uma base em automação, informação de vendas e análise prática de negócio." }
  ] },
  education: { title: "Formação", items: [
    { name: "Ciência da Computação", school: "Descomplica Faculdade Digital", dates: "2025–2028 · Em andamento" },
    { name: "Pós-graduação Lato Sensu em Data Analytics", school: "Descomplica Faculdade Digital", dates: "2021–2022 · Concluída" },
    { name: "Administração", school: "UNOPAR", dates: "2015–2018 · Concluída" }
  ] },
  contact: { title: "Tem um bom problema de dados?", intro: "Gosto de engenharia bem pensada, produtos de dados úteis e conversas que começam com uma pergunta real.", email: "E-mail", linkedin: "LinkedIn", github: "GitHub", whatsapp: "WhatsApp", footer: "Feito com curiosidade, uma dose saudável de ceticismo e menos planilhas do que seria estritamente necessário." }
};

export default ptBR;
