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
  caseLabels: { summary: "O trabalho", contribution: "Minha contribuição" },
  decisionHeading: "Como gosto de tomar decisões",
  decisionLabels: { context: "Contexto", options: "Alternativas consideradas", choice: "Escolha", tradeoff: "Trade-off", revisit: "Revisitar quando" },
  cases: [
    { company: "Gobrax", project: "Plataforma de dados em nuvem", title: "Modernização de dados e automação de relatórios de frota", summary: "Uma operação SaaS de logística dependia de fontes fragmentadas e relatórios manuais para transformar dados de desempenho de frotas em análises para clientes.", contribution: "Ajudei a conduzir a migração para BigQuery, combinando ingestão com Airbyte, orquestração com Airflow e modelagem com dbt; depois liderei a automação das atualizações recorrentes no Power BI.", technologies: ["BigQuery", "Airbyte", "Airflow", "dbt", "Power BI"] },
    { company: "COPAPA", project: "Dimensionamento de mercado e redesenho territorial", title: "Conectando potencial de mercado à cobertura comercial", summary: "A empresa precisava entender melhor a demanda da categoria e sua presença comercial nos municípios brasileiros.", contribution: "Criei um modelo de potencial e participação de mercado combinando dados demográficos, do ERP e do setor para embasar o planejamento de territórios de venda. Projeções foram tratadas como insumos de planejamento, não como resultados realizados.", technologies: ["Modelagem de mercado", "Análise geográfica", "Business intelligence"] },
    { company: "Projeto independente", project: "Pytrends", title: "Interesse em buscas, com as ressalvas certas", summary: "Projeto público em Python que explora como as tendências de busca variam entre temas e períodos.", contribution: "Criei uma análise reproduzível e tratei o interesse normalizado em buscas como um sinal relativo — não como previsão de vendas ou demanda.", technologies: ["Python", "Pytrends", "Análise exploratória"], url: "https://github.com/carloshenriquedutra/pytrends", linkLabel: "Ver repositório público" }
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
