const ptBR = {
  locale: "pt-BR",
  pageTitle: "Carlos Dutra · Engenheiro de Dados Sênior",
  description: "Engenheiro de Dados Sênior criando bases de dados confiáveis para decisões melhores.",
  nav: { about: "Sobre", work: "Trabalhos", experience: "Experiência", contact: "Contato", language: "Idioma" },
  interface: { skipLink: "Pular para o conteúdo", mainNavigation: "Navegação principal", toggleNavigation: "Alternar navegação", aboutKicker: "01 / A TRAJETÓRIA", workKicker: "02 / TRABALHOS SELECIONADOS", decisionsKicker: "NOTAS DE ENGENHARIA", skillsKicker: "03 / FERRAMENTAS", experienceKicker: "04 / CARREIRA", educationKicker: "05 / FORMAÇÃO", contactKicker: "06 / VAMOS CONVERSAR", portraitTitle: "Engenheiro de Dados Sênior" },
  hero: {
    eyebrow: "Engenheiro de Dados Sênior · Analytics e Plataformas",
    title: "Construo a base de dados por trás de decisões melhores.",
    intro: "Gosto da parte que vem antes do dashboard: entender o que os números significam, de onde vieram e o que alguém pode fazer com segurança a partir deles.",
    note: "Curioso por padrão. Cuidadoso com definições. Gosto de tornar sistemas complexos mais fáceis de compreender.",
    workAction: "Conheça alguns trabalhos", contactAction: "Entre em contato", portraitAlt: "Carlos Dutra sorrindo em seu retrato oficial de perfil"
  },
  about: {
    title: "Da pergunta de negócio a dados confiáveis",
    body: "Minha trajetória passa por inteligência comercial, Customer Success, RevOps e engenharia de dados. Essa mistura me ensinou a perguntar que decisão um número vai apoiar antes de escolher como construir o pipeline que o produz.",
    detail: "Atuo como profissional técnico sênior: desenho arquitetura, construo produtos de dados úteis e mantenho proximidade com o problema operacional. Um dashboard só é confiável quanto as definições e os sistemas por trás dele."
  },
  work: { title: "Trabalhos selecionados", intro: "Alguns exemplos de perguntas que gosto de investigar. Detalhes sensíveis de implementação ficam onde devem ficar: em privado." },
  caseLabels: { summary: "O trabalho", contribution: "Minha contribuição" },
  decisionHeading: "Modelos, fronteiras e confiabilidade",
  decisionLabels: { businessProblem: "Problema de negócio", context: "Restrição técnica", options: "Alternativas de desenho", choice: "Decisão", tradeoff: "Trade-off de engenharia", revisit: "Reavaliar quando" },
  cases: [
    { company: "MadeiraMadeira", project: "Lumi · assistente de IA de People", title: "Um assistente para colaboradores ancorado no conhecimento de People", summary: "O Lumi ajuda colaboradores a encontrar respostas sobre políticas e processos de People em uma interface conversacional.", contribution: "Projetei e desenvolvi o serviço em Python, recuperando trechos relevantes da base de conhecimento e fornecendo-os como contexto para as respostas do Gemini.", technologies: ["Python", "RAG", "Google Chat", "Gemini"] },
    { company: "MadeiraMadeira", project: "People Analytics · do zero à Gold", title: "Arquitetura de People Analytics do zero à camada Gold", summary: "Estruturei a base de dados de um novo domínio de People Analytics, evoluindo dados de origem ainda não curados em direção a uma camada Gold para análise.", contribution: "Desenhei as fundações em GCP e o fluxo de entrega com BigQuery, Cloud Run, Cloud Composer, Dataform e Terraform, separando ingestão, conformidade das fontes e modelagem analítica.", technologies: ["BigQuery", "Dataform", "Cloud Composer", "Cloud Run", "Terraform"] },
    { company: "Gobrax", project: "Modelagem de CRM HubSpot em BigQuery", title: "Transformando entidades de CRM em modelos prontos para análise", summary: "O HubSpot expõe propriedades flexíveis e objetos relacionados; a análise precisa de tipos, chaves, relações e grão de evento estáveis.", contribution: "Criei modelos dbt no BigQuery para empresas, contatos, negócios e interações: normalizei propriedades, dedupliquei registros mutáveis, resolvi associações do CRM e publiquei visões curadas de negócios e atividades.", technologies: ["BigQuery", "dbt", "SQL", "Modelagem de dados de CRM"] },
    { company: "COPAPA", project: "Dimensionamento de mercado · planejamento territorial", title: "Estimativa de potencial de mercado para redesenhar territórios de venda", summary: "O planejamento comercial não tinha uma visão consistente da demanda da categoria e da participação de mercado nos municípios brasileiros.", contribution: "Combinei dados demográficos do IBGE, vendas do ERP e informações setoriais para modelar demanda e participação estimadas por município para uma proposta de redesenho territorial, distinguindo estimativas de vendas realizadas.", technologies: ["Modelagem de mercado", "IBGE", "TOTVS Protheus", "Análise geográfica"] }
  ],
  decisions: [
    { company: "MadeiraMadeira", project: "Lumi · assistente de IA de People", businessProblem: "Colaboradores precisavam de respostas consistentes e atualizadas sobre políticas de People, sem ter de pesquisar manualmente em cada consulta.", title: "Tratar recuperação como entrada explícita da geração", situation: "O conhecimento paramétrico do modelo, por si só, não identifica qual fonte aprovada sustenta uma resposta sobre uma política.", options: "Fornecer o texto da política em um prompt fixo ou recuperar trechos relevantes de uma base de conhecimento mantida para cada pergunta.", choice: "Recuperar trechos ranqueados de um índice vetorial e passá-los como contexto ao modelo, mantendo atualizações do conhecimento independentes do deploy do modelo.", tradeoff: "A recuperação acrescenta componentes, e a qualidade das respostas continua limitada pela atualização, cobertura e qualidade do ranking do corpus.", revisit: "Avaliações indicam baixa revocação, fontes desatualizadas ou lacunas recorrentes." },
    { company: "MadeiraMadeira", project: "Plataforma de dados de People Analytics", businessProblem: "As áreas consumidoras de People Analytics precisavam consultar fatos crescentes com rapidez, mantendo custos operacionais e atualização dos dados sob controle.", title: "Materializar conforme o acesso e particionar pelo tempo do evento", situation: "Scans repetidos de fatos volumosos geram trabalho evitável, enquanto dimensões têm padrões diferentes de atualização e leitura.", options: "Usar views para todos os modelos, materializar tudo sem critério ou escolher armazenamento conforme papel e formato de consulta.", choice: "Materializar dimensões como tabelas e fatos volumosos como tabelas particionadas pela data do evento; clusterizar apenas por filtros ou chaves de junção recorrentes.", tradeoff: "Materialização consome armazenamento e exige rebuild, mas permite que consultas recorrentes descartem partições irrelevantes.", revisit: "Mudanças no custo de scan, nos requisitos de atualização ou nos padrões de filtro dos consumidores." },
    { company: "MadeiraMadeira", project: "Plataforma de dados de People Analytics", businessProblem: "People Analytics precisava de produtos de dados confiáveis e reutilizáveis, construídos a partir de sistemas de origem fragmentados até modelos Gold prontos para o negócio.", title: "Separar conformidade da fonte de semântica de negócio", situation: "Schemas de origem diferem em tipos, nomenclatura e histórico; misturar limpeza com regras de negócio faz cada consumidor reimplementá-las.", options: "Expor tabelas no formato da fonte diretamente para BI ou separar normalização de origem e modelagem analítica.", choice: "Usar Bronze para preservar a forma da origem, Silver para tipar, deduplicar e normalizar, e Gold para publicar fatos e dimensões em termos de negócio.", tradeoff: "Uma fronteira extra aumenta a quantidade de modelos, mas dá a cada um uma responsabilidade menor e testável.", revisit: "Mudanças nos contratos de origem ou uma análise que exija o detalhe original." },
    { company: "Gobrax", project: "Modelagem de CRM HubSpot em BigQuery", businessProblem: "A área comercial precisava analisar negócios e interações do HubSpot de forma consistente, apesar das entidades relacionadas e mutáveis do CRM.", title: "Definir o grão antes de relacionar entidades", situation: "Um negócio de CRM pode se relacionar com vários contatos, produtos e atividades; joins sem restrição podem multiplicar linhas e inflar métricas.", options: "Agregar diretamente as linhas de origem ou declarar o grão e a chave de cada fato e modelar relações muitos-para-muitos antes da agregação.", choice: "Declaro grão e chave de negócio por modelo, represento relações muitos-para-muitos em modelos de associação e deduplico snapshots mutáveis com regra determinística.", tradeoff: "Mais modelos e assertions na origem; menos multiplicação silenciosa de linhas e semântica temporal mais clara no consumo.", revisit: "Mudanças na cardinalidade da fonte, na identidade de negócio ou no ciclo de vida dos eventos." }
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
