export default {
  "locale": "es",
  "description": "Ingeniero de datos sénior. Construyo bases de datos fiables para tomar mejores decisiones.",
  "nav": {
    "about": "Sobre mí",
    "work": "Proyectos",
    "experience": "Experiencia",
    "education": "Formación",
    "contact": "Contacto",
    "language": "Idioma",
    "downloadResume": "Descargar currículum"
  },
  "interface": {
    "skipLink": "Ir al contenido",
    "mainNavigation": "Navegación principal",
    "toggleNavigation": "Abrir o cerrar la navegación",
    "aboutKicker": "01 / TRAYECTORIA",
    "workKicker": "02 / PROYECTOS",
    "skillsKicker": "03 / HERRAMIENTAS",
    "experienceKicker": "04 / EXPERIENCIA",
    "educationKicker": "05 / FORMACIÓN",
    "contactKicker": "06 / CONTACTO",
    "portraitTitle": "Carlos Dutra, ingeniero de datos sénior"
  },
  "hero": {
    "roleLine": "CARLOS DUTRA / INGENIERO DE DATOS SÉNIOR",
    "title": "Construyo las bases de datos que ayudan a tomar mejores decisiones.",
    "intro": "Rastreo las cifras hasta sus definiciones y sistemas de origen y preparo datos útiles para decidir.",
    "note": "Curioso por naturaleza. Riguroso con las definiciones.",
    "workAction": "Ver proyectos destacados",
    "contactAction": "Ponte en contacto",
    "portraitAlt": "Carlos Dutra sonríe en su retrato profesional"
  },
  "about": {
    "title": "De la pregunta de negocio a los datos fiables",
    "body": "He trabajado en operaciones de ingresos, análisis e ingeniería de datos. Esa experiencia me enseñó a preguntar qué decisión permitirá tomar una cifra antes de diseñar el flujo que la genera.",
    "detail": "Como especialista técnico sénior, diseño arquitecturas y construyo productos de datos útiles sin perder de vista el problema de negocio. La fiabilidad de un cuadro de mando depende de las definiciones y los sistemas que lo sustentan.",
    "moreAction": "Conoce mi trayectoria"
  },
  "work": {
    "title": "Proyectos destacados",
    "intro": "Cuatro proyectos en los que las preguntas de negocio guiaron el diseño de productos de datos y las decisiones técnicas.",
    "openProject": "Ver proyecto"
  },
  "decisionLabels": {
    "context": "El reto",
    "options": "Opciones consideradas",
    "choice": "Mi elección",
    "tradeoff": "Ventajas y límites",
    "revisit": "Cuándo reconsiderarlo"
  },
  "cases": [
    {
      "id": "lumi",
      "company": "MadeiraMadeira",
      "project": "Lumi · Asistente de IA para RR. HH.",
      "summary": "Lumi ayuda al personal a encontrar respuestas sobre las políticas y los procesos de RR. HH. mediante un asistente conversacional.",
      "contribution": "Diseñé y desarrollé el servicio en Python. Recupera los pasajes pertinentes de la base de conocimiento y los entrega a Gemini como contexto para responder.",
      "technologies": [
        "Python",
        "RAG",
        "Google Chat",
        "Gemini"
      ]
    },
    {
      "id": "people-analytics",
      "company": "MadeiraMadeira",
      "project": "People Analytics · De los datos brutos a la capa Gold",
      "summary": "Senté las bases de un nuevo dominio de People Analytics, preparando los datos brutos para una capa Gold de uso analítico.",
      "contribution": "Diseñé la infraestructura en GCP y el flujo de entrega con BigQuery, Cloud Run, Cloud Composer, Dataform y Terraform, separando la ingesta, la normalización y el modelado analítico.",
      "technologies": [
        "BigQuery",
        "Dataform",
        "Cloud Composer",
        "Cloud Run",
        "Terraform"
      ]
    },
    {
      "id": "hubspot-crm",
      "company": "Gobrax",
      "project": "Modelado del CRM HubSpot en BigQuery",
      "summary": "HubSpot ofrece propiedades flexibles y objetos relacionados. Para analizarlos hacen falta tipos, claves y relaciones estables, así como una granularidad de eventos bien definida.",
      "contribution": "Creé modelos dbt en BigQuery para empresas, contactos, oportunidades e interacciones. Normalicé propiedades, eliminé duplicados, resolví asociaciones del CRM y publiqué vistas preparadas para el análisis.",
      "technologies": [
        "BigQuery",
        "dbt",
        "SQL",
        "Modelado de datos CRM"
      ]
    },
    {
      "id": "copapa-market-sizing",
      "company": "COPAPA",
      "project": "Estimación de mercado · Planificación de territorios de venta",
      "summary": "La planificación comercial carecía de una visión coherente de la demanda y la cuota de mercado por municipio brasileño.",
      "contribution": "Combiné datos demográficos del IBGE, ventas del ERP y datos sectoriales para estimar la demanda y la cuota municipal. Las estimaciones orientaron una propuesta de reorganización territorial y se mantuvieron separadas de las ventas realizadas.",
      "technologies": [
        "Modelado de mercado",
        "IBGE",
        "TOTVS Protheus",
        "Análisis geoespacial"
      ]
    }
  ],
  "decisions": [
    {
      "projectId": "lumi",
      "title": "Consultar documentos de la empresa antes de responder",
      "situation": "La IA no conoce por sí sola las políticas vigentes de la empresa. El equipo de RR. HH. debe mantener actualizada esa información.",
      "options": "Entrenar la IA con los documentos, incluir todo en una instrucción fija o buscar los pasajes necesarios para cada pregunta.",
      "choice": "Buscar los pasajes pertinentes y dárselos a la IA para que redacte la respuesta. La base se actualiza sin modificar el asistente ni volver a entrenar la IA.",
      "tradeoff": "Las respuestas se basan en documentos verificables. Su calidad depende de que el contenido esté al día y de que se encuentren los pasajes necesarios.",
      "revisit": "Cuando la búsqueda omite documentos útiles, las fuentes quedan desactualizadas o faltan respuestas a preguntas frecuentes."
    },
    {
      "projectId": "people-analytics",
      "title": "Guardar resultados preparados y organizar los datos por fecha",
      "situation": "Leer todo el historial en cada consulta ralentiza y encarece el análisis. Los datos de referencia y los eventos también se actualizan a ritmos distintos.",
      "options": "Recalcular en cada consulta, almacenar todo de la misma forma u organizar cada conjunto según su uso.",
      "choice": "Guardar las referencias en tablas y dividir los eventos voluminosos por fecha. Agrupar los registros según los campos usados a menudo para filtrar o relacionar datos.",
      "tradeoff": "Las consultas leen solo las fechas necesarias. Los resultados almacenados ocupan espacio y deben actualizarse.",
      "revisit": "Cuando sube el coste de las consultas, hacen falta actualizaciones más frecuentes o cambian los patrones de consulta."
    },
    {
      "projectId": "people-analytics",
      "title": "Organizar los datos antes de aplicar las reglas de negocio",
      "situation": "Los sistemas de origen usan distintos nombres y formatos. Mezclar la limpieza con los cálculos de negocio obliga a repetir el trabajo en cada análisis.",
      "options": "Entregar los datos tal como llegan o separar su preparación de los cálculos analíticos.",
      "choice": "Conservar los datos de origen, corregir formatos y eliminar duplicados en una etapa separada. Después, construir tablas para responder preguntas de negocio.",
      "tradeoff": "Hay más etapas que mantener, pero cada una cumple una función clara y puede verificarse por separado. Los datos preparados se reutilizan.",
      "revisit": "Cuando cambia el formato de origen o un análisis necesita el registro original."
    },
    {
      "projectId": "hubspot-crm",
      "title": "Definir qué representa cada fila antes de combinar datos",
      "situation": "Una oportunidad puede tener varios contactos, productos e interacciones. Al combinarlos, la oportunidad puede aparecer varias veces e inflar los totales.",
      "options": "Sumar los registros de origen o definir cómo identificar y relacionar cada registro antes de calcular los totales.",
      "choice": "Definir qué representa cada fila y cómo identificarla, guardar las relaciones en tablas separadas y aplicar una regla fija para conservar una versión si hay duplicados.",
      "tradeoff": "Se necesitan más tablas y comprobaciones. Así disminuye el riesgo de contar un registro varias veces y resulta más sencillo distinguir sus versiones.",
      "revisit": "Cuando cambian las relaciones, las claves o las etapas de una oportunidad o actividad."
    }
  ],
  "skills": {
    "title": "Las herramientas ayudan. Lo decisivo es el criterio.",
    "summary": "Python · SQL · BigQuery · Google Cloud · Terraform · dbt · Dataform · RAG"
  },
  "experience": {
    "title": "Una trayectoria cercana al problema",
    "items": [
      {
        "org": "MadeiraMadeira",
        "dates": "2026–actualidad",
        "role": "Ingeniería de datos",
        "summary": "Desarrollo productos de datos y capacidades de plataforma para una gran empresa digital."
      },
      {
        "org": "Gobrax",
        "dates": "2023–2026",
        "role": "Ingeniería de datos",
        "summary": "Trabajé con datos operativos, ingeniería analítica y plataformas de datos en tecnología para logística."
      },
      {
        "org": "Leads2b",
        "dates": "2020–2022",
        "role": "Análisis para Customer Success",
        "summary": "Usé el análisis para responder a preguntas de clientes y del equipo comercial y orientar la operación."
      },
      {
        "org": "COPAPA",
        "dates": "2013–2018",
        "role": "Inteligencia comercial",
        "summary": "Me formé en automatización, información de ventas y análisis de negocio aplicado."
      }
    ]
  },
  "education": {
    "title": "Formación",
    "items": [
      {
        "name": "Ciencias de la Computación",
        "school": "Descomplica Faculdade Digital",
        "dates": "2025–2028 · En curso"
      },
      {
        "name": "Posgrado Lato Sensu en Análisis de Datos",
        "school": "Descomplica Faculdade Digital",
        "dates": "2021–2022 · Finalizado"
      },
      {
        "name": "Administración de Empresas",
        "school": "UNOPAR",
        "dates": "2015–2018 · Finalizada"
      }
    ]
  },
  "contact": {
    "title": "¿Tienes un reto interesante con tus datos?",
    "intro": "Me interesan la ingeniería bien pensada, los productos de datos útiles y las conversaciones que parten de una pregunta real.",
    "email": "Correo electrónico",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "whatsapp": "WhatsApp",
    "footer": "Hecho con curiosidad, un poco de escepticismo y menos hojas de cálculo de las estrictamente necesarias."
  },
  "pages": {
    "home": {
      "title": "Carlos Dutra · Ingeniero de datos sénior",
      "description": "Ingeniero de datos sénior. Construyo bases de datos fiables para tomar mejores decisiones."
    },
    "projects": {
      "title": "Proyectos · Carlos Dutra",
      "description": "Cuatro proyectos destacados de ingeniería y análisis de datos de Carlos Dutra.",
      "kicker": "PROYECTOS DESTACADOS",
      "heading": "Elige un problema y descubre cómo lo abordé.",
      "intro": "Conoce el trabajo detrás de cada proyecto, su contexto de negocio y las decisiones técnicas que lo definieron.",
      "listLabel": "Proyectos destacados"
    },
    "project": {
      "breadcrumbHome": "Inicio",
      "breadcrumbProjects": "Proyectos",
      "problem": "Problema de negocio",
      "contribution": "Mi contribución",
      "technology": "Herramientas y métodos",
      "decisions": "Decisiones de ingeniería",
      "back": "Todos los proyectos",
      "contact": "Hablemos"
    },
    "about": {
      "title": "Sobre mí · Carlos Dutra · Ingeniero de datos sénior",
      "description": "Conoce la trayectoria de Carlos Dutra en plataformas de datos en la nube, modelado, automatización y análisis de negocio."
    },
    "experience": {
      "title": "Experiencia · Carlos Dutra · Ingeniero de datos sénior",
      "description": "Experiencia profesional de Carlos Dutra en ingeniería de datos, análisis e inteligencia comercial."
    },
    "education": {
      "title": "Formación · Carlos Dutra · Ingeniero de datos sénior",
      "description": "Formación en Ciencias de la Computación, Análisis de Datos y Administración de Empresas."
    }
  },
  "projectDetails": {
    "lumi": {
      "problem": "El personal necesita respuestas coherentes y actualizadas sobre las políticas y los procesos de RR. HH. en Google Chat.",
      "contribution": "Diseñé y desarrollé el servicio del asistente, que conecta las preguntas del personal con la base de conocimiento actualizada de RR. HH."
    },
    "people-analytics": {
      "problem": "El nuevo dominio de People Analytics necesitaba un flujo fiable desde registros dispersos hasta modelos analíticos reutilizables.",
      "contribution": "Diseñé la infraestructura en la nube y el flujo de entrega, separando ingesta, normalización y modelado analítico. El desarrollo de los modelos Gold sigue avanzando."
    },
    "hubspot-crm": {
      "problem": "El análisis comercial necesitaba entidades y medidas coherentes pese a las propiedades flexibles, los registros cambiantes y las relaciones de muchos a muchos del CRM.",
      "contribution": "Creé modelos para empresas, contactos, oportunidades e interacciones. Normalicé propiedades, eliminé duplicados, resolví asociaciones del CRM y publiqué vistas de oportunidades y actividades para su análisis."
    },
    "copapa-market-sizing": {
      "problem": "La planificación comercial carecía de una visión coherente de la demanda y la cuota de mercado por municipio brasileño.",
      "contribution": "Combiné datos demográficos, sectoriales y ventas del ERP para estimar demanda y cuota por municipio. Las estimaciones orientaron una propuesta de rediseño de los territorios de venta.",
      "analysis": {
        "title": "Comparar municipios para planificar los territorios de venta",
        "body": "Comparé municipios mediante estimaciones de demanda y ventas registradas. Esto permitió identificar dónde ampliar la actividad comercial y distinguir el potencial de mercado de las ventas realizadas."
      }
    }
  },
  "experiencePage": {
    "kicker": "EXPERIENCIA PROFESIONAL",
    "heading": "Productos de datos cerca del negocio",
    "intro": "He trabajado en ingeniería de datos, análisis, operaciones con clientes e inteligencia comercial. En mis puestos recientes me he centrado en plataformas de datos en la nube y contribución técnica."
  },
  "academicPage": {
    "kicker": "FORMACIÓN ACADÉMICA",
    "heading": "Formación",
    "intro": "Actualmente estudio Ciencias de la Computación. Ya he completado estudios en Análisis de Datos y Administración de Empresas.",
    "degrees": [
      {
        "name": "Grado en Ciencias de la Computación",
        "school": "Descomplica Faculdade Digital",
        "dates": "2025–2028 · En curso",
        "summary": "Estudios de grado en curso."
      },
      {
        "name": "Posgrado Lato Sensu en Análisis de Datos",
        "school": "Descomplica Faculdade Digital",
        "dates": "2021–2022 · Finalizado",
        "summary": "Programa de posgrado Lato Sensu de 390 horas."
      },
      {
        "name": "Grado en Administración de Empresas",
        "school": "UNOPAR",
        "dates": "2015–2018 · Finalizado",
        "summary": "Estudios de grado finalizados."
      }
    ]
  },
  "aboutPage": {
    "role": "INGENIERO DE DATOS SÉNIOR / CURITIBA, BRASIL",
    "heading": "Ingeniería de datos con visión de negocio.",
    "intro": "Soy Carlos Dutra. Diseño y desarrollo plataformas de datos en la nube, desde la integración de sistemas de origen hasta las tablas que sustentan análisis y decisiones.",
    "perspective": "Empecé en inteligencia comercial y pasé por Customer Success y operaciones de ingresos. Esta experiencia me ayuda a entender qué necesitan medir los equipos, convertirlo en modelos de datos y explicar las decisiones técnicas.",
    "focusTitle": "Dónde concentro mi trabajo",
    "focus": [
      {
        "title": "Plataformas de datos en la nube",
        "body": "Construyo la infraestructura para recopilar, organizar y poner los datos a disposición. Trabajo con Google Cloud, BigQuery y Terraform, y tengo experiencia con Databricks y migraciones de procesos a Cloud Run."
      },
      {
        "title": "Modelado y automatización de datos",
        "body": "Integro bases de datos, ERP y API, organizo transformaciones con dbt y Dataform y coordino su ejecución con Airflow. Priorizo tablas reutilizables, definiciones claras y controles que detecten problemas antes de la entrega."
      },
      {
        "title": "IA conectada a datos y documentos",
        "body": "Desarrollé Lumi en Python con Gemini, búsqueda de conocimiento en Firestore e integración con Google Chat. El proyecto combina ingeniería de software con respuestas sustentadas en documentos internos."
      }
    ],
    "careerTitle": "Una trayectoria cercana al negocio",
    "careerIntro": "En 2013 empecé a trabajar con información comercial. En mis puestos recientes profundicé en ingeniería de datos, arquitectura en la nube y liderazgo técnico.",
    "career": [
      {
        "org": "MadeiraMadeira",
        "dates": "Abril de 2026–actualidad",
        "role": "Ingeniería de datos sénior · People Analytics e IA",
        "summary": "Diseñé la infraestructura y el flujo de datos de People Analytics con BigQuery, Dataform, Cloud Composer y Terraform. También diseñé y desarrollé Lumi, el asistente de IA para el personal, y ayudo a orientar el trabajo técnico del equipo."
      },
      {
        "org": "Gobrax",
        "dates": "Febrero de 2023–marzo de 2026",
        "role": "Ingeniería de datos y liderazgo técnico",
        "summary": "Construí el almacén de datos de BigQuery y migré datos de PostgreSQL a Google Cloud. Desarrollé integraciones de ERP y CRM con Airbyte, Airflow y dbt y automaticé los informes que utiliza Customer Success."
      },
      {
        "org": "Leads2b",
        "dates": "Noviembre de 2020–diciembre de 2022",
        "role": "Customer Success y análisis de datos",
        "summary": "Analicé datos de clientes potenciales, conversiones e indicadores de interacción para apoyar a los clientes de una plataforma SaaS B2B. Así reforcé mi capacidad para conectar los datos y las operaciones con sus necesidades."
      },
      {
        "org": "COPAPA",
        "dates": "Diciembre de 2013–agosto de 2018",
        "role": "Análisis de datos e inteligencia comercial",
        "summary": "Desarrollé análisis de mercado, automatizaciones de informes y controles comerciales. Combiné datos demográficos y ventas del ERP para estimar la demanda por municipio y apoyar una propuesta de reorganización territorial."
      }
    ],
    "workingTitle": "Cómo trabajo",
    "workingBody": "Trabajo como especialista técnico. Participo en el diseño, escribo código y acompaño la entrega. Mi experiencia de liderazgo técnico me ayuda a orientar a mis compañeros, revisar decisiones y alinear la ingeniería con las prioridades del negocio.",
    "educationTitle": "Formación",
    "projectsAction": "Ver mis proyectos",
    "contactTitle": "Hablemos de tu equipo de datos.",
    "contactIntro": "Si buscas un ingeniero de datos sénior con experiencia en plataformas en la nube, modelado y automatización, podemos hablar del contexto y los retos de tu equipo.",
    "experienceSummaryTitle": "Experiencia reciente",
    "experienceSummary": "Ingeniería de datos sénior en MadeiraMadeira y plataformas de datos en Gobrax, con experiencia previa en análisis de clientes e inteligencia comercial.",
    "experienceAction": "Ver toda la experiencia",
    "educationSummary": "Estudios en curso de Ciencias de la Computación, posgrado finalizado en Análisis de Datos y grado en Administración de Empresas.",
    "educationAction": "Ver toda la formación"
  }
};
