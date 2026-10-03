const ptBR = {
  locale: "pt-BR",
  description: "Engenheiro de Dados Sênior criando bases de dados confiáveis para decisões melhores.",
  nav: { about: "Sobre", work: "Projetos", experience: "Experiência", contact: "Contato", language: "Idioma" },
  interface: { skipLink: "Pular para o conteúdo", mainNavigation: "Navegação principal", toggleNavigation: "Alternar navegação", aboutKicker: "01 / A TRAJETÓRIA", workKicker: "02 / TRABALHOS SELECIONADOS", skillsKicker: "03 / FERRAMENTAS", experienceKicker: "04 / CARREIRA", educationKicker: "05 / FORMAÇÃO", contactKicker: "06 / VAMOS CONVERSAR", portraitTitle: "Carlos Dutra, Engenheiro de Dados Sênior" },
  hero: {
    roleLine: "CARLOS DUTRA / ENGENHEIRO DE DADOS SÊNIOR",
    title: "Construo a base de dados por trás de decisões melhores.",
    intro: "Investigo as definições e os sistemas por trás dos números, depois construo dados que as pessoas possam usar para decidir.",
    note: "Curioso por padrão. Cuidadoso com definições.",
    workAction: "Conheça alguns trabalhos", contactAction: "Entre em contato", portraitAlt: "Carlos Dutra sorrindo em seu retrato oficial de perfil"
  },
  about: {
    title: "Da pergunta de negócio a dados confiáveis",
    body: "Minha trajetória passa por RevOps, Análise de Dados e Engenharia de Dados. Essa combinação me ensinou a perguntar que decisão um número pode ajudar alguém a tomar antes de escolher como construir o pipeline que vai produzi-lo.",
    detail: "Atuo como especialista técnico sênior, com foco em contribuição técnica individual: desenho arquiteturas, construo produtos de dados úteis e mantenho proximidade com o problema de negócio. Um dashboard só é tão confiável quanto as definições e os sistemas que o sustentam."
  },
  work: { title: "Trabalhos selecionados", intro: "Quatro projetos em que perguntas de negócio orientaram produtos de dados e decisões de engenharia.", openProject: "Conheça o projeto" },
  decisionLabels: { context: "O desafio", options: "Opções consideradas", choice: "Minha escolha", tradeoff: "Benefícios e limites", revisit: "Quando rever" },
  cases: [
    { id: "lumi", company: "MadeiraMadeira", project: "Lumi · assistente de IA de People", summary: "O Lumi ajuda colaboradores a encontrar respostas sobre políticas e processos de People em uma interface conversacional.", contribution: "Projetei e desenvolvi o serviço em Python, recuperando trechos relevantes da base de conhecimento e fornecendo-os como contexto para as respostas do Gemini.", technologies: ["Python", "RAG", "Google Chat", "Gemini"] },
    { id: "people-analytics", company: "MadeiraMadeira", project: "People Analytics · do zero à Gold", summary: "Estruturei a base de dados de um novo domínio de People Analytics, evoluindo dados de origem ainda não curados em direção a uma camada Gold para análise.", contribution: "Desenhei as fundações em GCP e o fluxo de entrega com BigQuery, Cloud Run, Cloud Composer, Dataform e Terraform, separando ingestão, conformidade das fontes e modelagem analítica.", technologies: ["BigQuery", "Dataform", "Cloud Composer", "Cloud Run", "Terraform"] },
    { id: "hubspot-crm", company: "Gobrax", project: "Modelagem de CRM HubSpot em BigQuery", summary: "O HubSpot expõe propriedades flexíveis e objetos relacionados; a análise precisa de tipos, chaves, relações e grão de evento estáveis.", contribution: "Criei modelos dbt no BigQuery para empresas, contatos, negócios e interações: normalizei propriedades, dedupliquei registros mutáveis, resolvi associações do CRM e publiquei visões curadas de negócios e atividades.", technologies: ["BigQuery", "dbt", "SQL", "Modelagem de dados de CRM"] },
    { id: "copapa-market-sizing", company: "COPAPA", project: "Dimensionamento de mercado · planejamento territorial", summary: "O planejamento comercial não tinha uma visão consistente da demanda da categoria e da participação de mercado nos municípios brasileiros.", contribution: "Combinei dados demográficos do IBGE, vendas do ERP e informações setoriais para modelar demanda e participação estimadas por município para uma proposta de redesenho territorial, distinguindo estimativas de vendas realizadas.", technologies: ["Modelagem de mercado", "IBGE", "TOTVS Protheus", "Análise geográfica"] }
  ],
  decisions: [
    { projectId: "lumi", title: "Consultar os documentos da empresa antes de responder", situation: "A IA não conhece, por conta própria, as políticas atuais da empresa. Esse conteúdo muda e precisa ser mantido pela área de People.", options: "Treinar a IA com os documentos, incluir todo o conteúdo em uma instrução fixa ou buscar os trechos necessários para cada pergunta.", choice: "Buscar os trechos relacionados à pergunta e entregá-los à IA para compor a resposta. A base pode ser atualizada sem mudar o código do assistente ou treinar a IA novamente.", tradeoff: "A resposta fica apoiada em documentos que podem ser conferidos. Em troca, é preciso manter a base atualizada e a busca funcionando; informações ausentes ou não encontradas limitam a resposta.", revisit: "A busca deixa de encontrar documentos úteis, as fontes ficam desatualizadas ou faltam informações para perguntas recorrentes." },
    { projectId: "people-analytics", title: "Guardar resultados prontos e organizar os dados por data", situation: "Reler todo o histórico a cada consulta pode tornar as análises mais lentas e caras. Cadastros de referência e registros de eventos também têm necessidades diferentes de atualização.", options: "Calcular os resultados a cada consulta, guardar todos da mesma forma ou escolher a organização conforme o uso de cada conjunto de dados.", choice: "Guardar cadastros de referência em tabelas e separar grandes volumes de eventos pela data em que aconteceram. Agrupar registros pelos campos usados com frequência para filtrar ou relacionar dados.", tradeoff: "As consultas podem ler apenas as datas necessárias. Em troca, os resultados guardados ocupam espaço e precisam ser atualizados.", revisit: "O custo das consultas aumenta, os dados precisam ser atualizados com mais frequência ou muda a forma como as áreas os consultam." },
    { projectId: "people-analytics", title: "Organizar os dados antes de aplicar as regras de negócio", situation: "Os sistemas de origem usam formatos e nomes diferentes. Misturar a correção desses dados com os cálculos de negócio faz cada análise repetir o mesmo trabalho.", options: "Entregar os dados como chegam dos sistemas ou separar sua organização dos cálculos usados nas análises.", choice: "Preservar os dados recebidos, corrigir formatos e retirar duplicatas em uma etapa própria, e depois montar tabelas voltadas às perguntas do negócio.", tradeoff: "Há mais etapas para manter, mas cada uma tem um objetivo claro e pode ser verificada separadamente. A organização dos dados pode ser reutilizada em várias análises.", revisit: "Os sistemas passam a enviar dados de outra forma ou uma análise precisa consultar o registro original." },
    { projectId: "hubspot-crm", title: "Definir o que cada linha representa antes de combinar dados", situation: "Um negócio pode estar ligado a vários contatos, produtos e atividades. Ao combinar esses registros, o mesmo negócio pode aparecer várias vezes e inflar os totais.", options: "Somar os registros diretamente ou definir como identificar cada registro e representar suas ligações antes de calcular os totais.", choice: "Definir o que cada linha representa e como identificá-la, guardar as ligações entre registros em tabelas próprias e usar uma regra fixa para escolher a versão mantida quando há duplicatas.", tradeoff: "São necessárias mais tabelas e verificações. Em troca, isso reduz o risco de contar o mesmo registro várias vezes e ajuda a distinguir suas versões ao longo do tempo.", revisit: "Mudam as relações entre os registros, a forma de identificá-los ou as etapas pelas quais um negócio ou atividade passa." }
  ],
  skills: { title: "Ferramentas ajudam. O trabalho é ter critério.", summary: "Python · SQL · BigQuery · Google Cloud · Terraform · dbt · Dataform · RAG" },
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

ptBR.pages = {
  home: { title: "Carlos Dutra · Engenheiro de Dados Sênior", description: ptBR.description },
  projects: { title: "Projetos · Carlos Dutra", description: "Quatro projetos selecionados de engenharia e análise de dados de Carlos Dutra.", kicker: "PROJETOS SELECIONADOS", heading: "Escolha um problema. Veja como eu o abordei.", intro: "Um caminho curto até o trabalho por trás da apresentação. Cada projeto tem seu contexto de negócio e suas decisões técnicas.", listLabel: "Projetos selecionados" },
  project: { breadcrumbHome: "Início", breadcrumbProjects: "Projetos", problem: "Problema de negócio", contribution: "Minha contribuição", technology: "Ferramentas e métodos", decisions: "Decisões de engenharia", back: "Todos os projetos", contact: "Vamos conversar" }
};
ptBR.projectDetails = {
  lumi: { problem: "Colaboradores precisam de respostas consistentes e atualizadas sobre políticas e processos de People no Google Chat.", contribution: "Projetei e desenvolvi o serviço do assistente, conectando as perguntas dos colaboradores à base de conhecimento de People." },
  "people-analytics": { problem: "Um novo domínio de People Analytics precisava de um caminho confiável entre registros de fontes fragmentadas e modelos analíticos reutilizáveis.", contribution: "Desenhei as fundações na nuvem e o fluxo de entrega, separando ingestão, conformidade das fontes e modelagem analítica. O caminho até os modelos Gold continua evoluindo." },
  "hubspot-crm": { problem: "A análise comercial precisava de entidades e medidas consistentes apesar de propriedades flexíveis do CRM, registros mutáveis e associações muitos-para-muitos.", contribution: "Criei modelos de empresas, contatos, negócios e interações: normalizei propriedades, dedupliquei registros e resolvi associações do CRM. Publiquei visões curadas de negócios e atividades para análise." },
  "copapa-market-sizing": { problem: "O planejamento comercial não tinha uma visão consistente da demanda da categoria e da participação de mercado nos municípios brasileiros.", contribution: "Combinei dados demográficos, setoriais e vendas do ERP para estimar demanda e participação de mercado por município. Essas estimativas orientaram uma proposta de redesenho dos territórios de vendas.", analysis: { title: "Comparar municípios para orientar os territórios de venda", body: "Comparei os municípios usando estimativas de demanda e vendas registradas. Isso ajudou a discutir onde havia espaço para ampliar a atuação comercial, mantendo claro que uma estimativa de mercado não é uma venda realizada." } }
};

ptBR.pages.about = {"title": "Sobre · Carlos Dutra · Engenheiro de Dados Sênior", "description": "Conheça a trajetória de Carlos Dutra em engenharia de dados: plataformas em nuvem, modelagem, automação e entendimento do negócio."};
ptBR.about.moreAction = "Conheça minha trajetória";
ptBR.aboutPage = {
  "role": "ENGENHEIRO DE DADOS SÊNIOR / CURITIBA, BRASIL",
  "heading": "Engenharia de dados com visão de negócio.",
  "intro": "Sou Carlos Dutra. Projeto e desenvolvo plataformas de dados em nuvem, da integração dos sistemas de origem às tabelas que sustentam análises e decisões.",
  "perspective": "Minha trajetória começou na inteligência comercial e passou por Customer Success e operações de receita. Essa experiência me ajuda a entender o que as áreas precisam medir, traduzir essas necessidades em modelos de dados e explicar as escolhas técnicas com clareza.",
  "focusTitle": "Onde concentro minha contribuição",
  "focus": [
    {
      "title": "Plataformas em nuvem",
      "body": "Estruturo a base para coletar, organizar e disponibilizar dados. Trabalho com Google Cloud, BigQuery e Terraform, além de experiência com Databricks e migração de rotinas para Cloud Run."
    },
    {
      "title": "Modelagem e automação",
      "body": "Integro bancos, ERPs e APIs, organizo transformações com dbt e Dataform e coordeno execuções com Airflow. Meu foco é construir tabelas reutilizáveis, com definições claras e verificações que ajudem a identificar problemas antes do consumo."
    },
    {
      "title": "IA conectada a dados e documentos",
      "body": "Desenvolvi o Lumi em Python, com Gemini, busca de conhecimento no Firestore e integração ao Google Chat. Essa frente combina engenharia de software com o cuidado de fundamentar respostas no conteúdo da empresa."
    }
  ],
  "careerTitle": "Uma trajetória construída perto do negócio",
  "careerIntro": "Comecei a trabalhar com informação comercial em 2013. Nas experiências mais recentes, aprofundei minha atuação em engenharia de dados, arquitetura em nuvem e liderança técnica.",
  "career": [
    {
      "org": "MadeiraMadeira",
      "dates": "Abril de 2026–atual",
      "role": "Engenharia de dados sênior · People Analytics e IA",
      "summary": "Desenhei as fundações e o fluxo de dados de People Analytics, com BigQuery, Dataform, Cloud Composer e infraestrutura em Terraform. Também projetei e desenvolvi o Lumi, assistente de IA para colaboradores, e atuo no direcionamento técnico da equipe."
    },
    {
      "org": "Gobrax",
      "dates": "Fevereiro de 2023–março de 2026",
      "role": "Engenharia de dados e liderança técnica",
      "summary": "Estruturei o Data Warehouse no BigQuery e a migração de dados do PostgreSQL para o Google Cloud. Construí integrações de ERP e CRM com Airbyte, Airflow e dbt, e automatizei a atualização de relatórios usados pela área de Customer Success."
    },
    {
      "org": "Leads2b",
      "dates": "Novembro de 2020–dezembro de 2022",
      "role": "Customer Success e análise de dados",
      "summary": "Analisei bases de leads, métricas de conversão e indicadores de engajamento para apoiar clientes de uma plataforma SaaS B2B. Essa experiência fortaleceu minha capacidade de relacionar dados, operação e necessidades do cliente."
    },
    {
      "org": "COPAPA",
      "dates": "Dezembro de 2013–agosto de 2018",
      "role": "Análise de dados e inteligência comercial",
      "summary": "Desenvolvi análises de mercado, automações de relatórios e controles comerciais. Combinei dados demográficos e vendas do ERP para estimar demanda por município e apoiar uma proposta de redesenho dos territórios de venda."
    }
  ],
  "workingTitle": "Como trabalho",
  "workingBody": "Atuo como especialista técnico: participo do desenho da solução, escrevo código e acompanho a entrega. Minha experiência em liderança técnica me ajuda a orientar colegas, revisar decisões e alinhar a engenharia com as prioridades das áreas de negócio.",
  "educationTitle": "Formação",
  "projectsAction": "Conheça meus projetos",
  "contactTitle": "Vamos conversar sobre sua equipe de dados.",
  "contactIntro": "Se você procura um engenheiro de dados sênior com experiência em plataformas em nuvem, modelagem e automação, podemos conversar sobre o contexto e os desafios da sua equipe."
};

export default ptBR;
