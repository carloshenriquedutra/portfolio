export default {
  "locale": "fr",
  "description": "Ingénieur data senior. Je construis des fondations de données fiables pour éclairer les décisions.",
  "nav": {
    "about": "À propos",
    "work": "Projets",
    "experience": "Expérience",
    "education": "Formation",
    "contact": "Contact",
    "language": "Langue"
  },
  "interface": {
    "skipLink": "Aller au contenu",
    "mainNavigation": "Navigation principale",
    "toggleNavigation": "Ouvrir ou fermer la navigation",
    "aboutKicker": "01 / PARCOURS",
    "workKicker": "02 / PROJETS",
    "skillsKicker": "03 / OUTILS",
    "experienceKicker": "04 / EXPÉRIENCE",
    "educationKicker": "05 / FORMATION",
    "contactKicker": "06 / CONTACT",
    "portraitTitle": "Carlos Dutra, ingénieur data senior"
  },
  "hero": {
    "roleLine": "CARLOS DUTRA / INGÉNIEUR DATA SENIOR",
    "title": "Je construis les fondations de données qui permettent de prendre de meilleures décisions.",
    "intro": "Je remonte des chiffres à leurs définitions et à leurs systèmes sources, puis je prépare des données utiles à la décision.",
    "note": "Curieux par nature. Rigoureux sur les définitions.",
    "workAction": "Découvrir mes projets",
    "contactAction": "Me contacter",
    "portraitAlt": "Carlos Dutra sourit sur son portrait professionnel"
  },
  "about": {
    "title": "Des questions métier aux données fiables",
    "body": "Mon parcours couvre les opérations de revenus, l’analyse et l’ingénierie des données. J’ai appris à demander quelle décision un chiffre aidera à prendre avant de concevoir le flux qui le produit.",
    "detail": "En tant que spécialiste technique senior, je conçois des architectures et des produits data utiles, en restant proche du problème métier. La fiabilité d’un tableau de bord dépend des définitions et des systèmes sur lesquels il repose.",
    "moreAction": "Découvrir mon parcours"
  },
  "work": {
    "title": "Projets sélectionnés",
    "intro": "Quatre projets où les questions métier ont guidé la conception de produits data et les décisions techniques.",
    "openProject": "Voir le projet"
  },
  "decisionLabels": {
    "context": "Le défi",
    "options": "Options envisagées",
    "choice": "Mon choix",
    "tradeoff": "Avantages et limites",
    "revisit": "Quand revoir ce choix"
  },
  "cases": [
    {
      "id": "lumi",
      "company": "MadeiraMadeira",
      "project": "Lumi · Assistant IA pour les RH",
      "summary": "Lumi aide les employés à trouver des réponses sur les politiques et les procédures RH grâce à un assistant conversationnel.",
      "contribution": "J’ai conçu et développé le service Python qui recherche les passages pertinents de la base de connaissances et les fournit à Gemini pour contextualiser ses réponses.",
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
      "project": "People Analytics · Des données brutes à la couche Gold",
      "summary": "J’ai posé les bases d’un nouveau domaine People Analytics en faisant évoluer les données brutes vers une couche Gold destinée à l’analyse.",
      "contribution": "J’ai conçu l’infrastructure GCP et le flux de livraison avec BigQuery, Cloud Run, Cloud Composer, Dataform et Terraform, en séparant l’ingestion, la mise en conformité et la modélisation analytique.",
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
      "project": "Modélisation du CRM HubSpot dans BigQuery",
      "summary": "HubSpot expose des propriétés flexibles et des objets liés. L’analyse exige des types, des clés et des relations stables, ainsi qu’une granularité bien définie pour les événements.",
      "contribution": "J’ai créé des modèles dbt dans BigQuery pour les entreprises, les contacts, les opportunités et les interactions. J’ai normalisé les propriétés, dédupliqué les enregistrements, résolu les relations du CRM et publié des vues prêtes pour l’analyse.",
      "technologies": [
        "BigQuery",
        "dbt",
        "SQL",
        "Modélisation de données CRM"
      ]
    },
    {
      "id": "copapa-market-sizing",
      "company": "COPAPA",
      "project": "Estimation du marché · Planification des territoires de vente",
      "summary": "La planification commerciale manquait d’une vision cohérente de la demande et des parts de marché par commune brésilienne.",
      "contribution": "J’ai combiné les données démographiques de l’IBGE, les ventes de l’ERP et les données sectorielles pour estimer la demande et les parts de marché par commune. Ces estimations ont éclairé une proposition de redécoupage commercial et sont restées distinctes des ventes réalisées.",
      "technologies": [
        "Modélisation du marché",
        "IBGE",
        "TOTVS Protheus",
        "Analyse géospatiale"
      ]
    }
  ],
  "decisions": [
    {
      "projectId": "lumi",
      "title": "Consulter les documents de l’entreprise avant de répondre",
      "situation": "L’IA ne connaît pas spontanément les politiques en vigueur. L’équipe RH doit tenir ces informations à jour.",
      "options": "Entraîner l’IA sur les documents, tout inclure dans une consigne fixe ou rechercher les passages utiles à chaque question.",
      "choice": "Je recherche les passages pertinents et les fournis à l’IA pour qu’elle rédige sa réponse. La base peut évoluer sans modifier l’assistant ni réentraîner l’IA.",
      "tradeoff": "Les réponses s’appuient sur des documents vérifiables. Leur qualité dépend de l’actualité du contenu et de la capacité à retrouver les passages utiles.",
      "revisit": "Lorsque la recherche ignore des documents utiles, que les sources vieillissent ou que des questions fréquentes manquent de réponses documentées."
    },
    {
      "projectId": "people-analytics",
      "title": "Stocker les résultats préparés et organiser les données par date",
      "situation": "Lire tout l’historique à chaque requête peut ralentir et renchérir l’analyse. Les données de référence et les événements se mettent aussi à jour à des rythmes différents.",
      "options": "Recalculer à chaque requête, tout stocker de la même façon ou organiser chaque jeu de données selon son usage.",
      "choice": "Stocker les références dans des tables et partitionner les volumes importants d’événements selon leur date. Regrouper les enregistrements par champs souvent utilisés pour filtrer ou relier les données.",
      "tradeoff": "Les requêtes ne lisent que les dates nécessaires. Les résultats stockés occupent de l’espace et doivent être actualisés.",
      "revisit": "Lorsque le coût des requêtes augmente, que les mises à jour doivent être plus fréquentes ou que les usages changent."
    },
    {
      "projectId": "people-analytics",
      "title": "Organiser les données avant d’appliquer les règles métier",
      "situation": "Les systèmes sources utilisent des noms et des formats différents. Mélanger le nettoyage et les calculs métier oblige à répéter ce travail à chaque analyse.",
      "options": "Fournir les données telles qu’elles arrivent ou séparer leur préparation des calculs analytiques.",
      "choice": "Conserver les données sources, corriger les formats et supprimer les doublons dans une étape distincte. Construire ensuite des tables pour répondre aux questions métier.",
      "tradeoff": "Il y a davantage d’étapes à maintenir, mais chacune a un rôle clair et se vérifie séparément. Les données préparées sont réutilisables.",
      "revisit": "Lorsqu’un système source change de format ou qu’une analyse nécessite l’enregistrement d’origine."
    },
    {
      "projectId": "hubspot-crm",
      "title": "Définir ce que représente chaque ligne avant de combiner les données",
      "situation": "Une opportunité peut être liée à plusieurs contacts, produits et interactions. Leur combinaison peut faire apparaître plusieurs fois la même opportunité et gonfler les totaux.",
      "options": "Additionner directement les enregistrements sources ou définir comment les identifier et les relier avant de calculer les totaux.",
      "choice": "Définir ce que représente chaque ligne et comment l’identifier, stocker les relations dans des tables distinctes et appliquer une règle fixe pour choisir la version à garder en cas de doublon.",
      "tradeoff": "Cela demande plus de tables et de contrôles. Le risque de compter plusieurs fois un enregistrement diminue et ses différentes versions sont plus faciles à distinguer.",
      "revisit": "Lorsque les relations, les identifiants ou les étapes d’une opportunité ou d’une activité changent."
    }
  ],
  "skills": {
    "title": "Les outils sont utiles. Le discernement fait la différence.",
    "summary": "Python · SQL · BigQuery · Google Cloud · Terraform · dbt · Dataform · RAG"
  },
  "experience": {
    "title": "Un parcours proche des enjeux métier",
    "items": [
      {
        "org": "MadeiraMadeira",
        "dates": "Depuis 2026",
        "role": "Ingénierie des données",
        "summary": "Je développe des produits data et des capacités de plateforme pour une grande entreprise numérique."
      },
      {
        "org": "Gobrax",
        "dates": "2023–2026",
        "role": "Ingénierie des données",
        "summary": "J’ai travaillé sur les données opérationnelles, l’ingénierie analytique et les fondations de plateformes dans le secteur des technologies logistiques."
      },
      {
        "org": "Leads2b",
        "dates": "2020–2022",
        "role": "Analyse pour Customer Success",
        "summary": "J’ai utilisé l’analyse pour répondre aux questions des clients et des équipes commerciales et éclairer les opérations."
      },
      {
        "org": "COPAPA",
        "dates": "2013–2018",
        "role": "Intelligence commerciale",
        "summary": "J’ai acquis mes premières expériences en automatisation, suivi des ventes et analyse commerciale."
      }
    ]
  },
  "education": {
    "title": "Formation",
    "items": [
      {
        "name": "Informatique",
        "school": "Descomplica Faculdade Digital",
        "dates": "2025–2028 · En cours"
      },
      {
        "name": "Diplôme de troisième cycle Lato Sensu en analyse de données",
        "school": "Descomplica Faculdade Digital",
        "dates": "2021–2022 · Terminé"
      },
      {
        "name": "Gestion des entreprises",
        "school": "UNOPAR",
        "dates": "2015–2018 · Terminée"
      }
    ]
  },
  "contact": {
    "title": "Vous avez un défi intéressant autour des données ?",
    "intro": "Je m’intéresse à l’ingénierie bien pensée, aux produits data utiles et aux échanges qui partent d’une vraie question.",
    "email": "Courriel",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "whatsapp": "WhatsApp",
    "footer": "Réalisé avec curiosité, une dose de scepticisme et moins de feuilles de calcul que nécessaire."
  },
  "pages": {
    "home": {
      "title": "Carlos Dutra · Ingénieur data senior",
      "description": "Ingénieur data senior. Je construis des fondations de données fiables pour éclairer les décisions."
    },
    "projects": {
      "title": "Projets · Carlos Dutra",
      "description": "Quatre projets d’ingénierie et d’analyse de données de Carlos Dutra.",
      "kicker": "PROJETS SÉLECTIONNÉS",
      "heading": "Choisissez un problème et découvrez comment je l’ai abordé.",
      "intro": "Découvrez le travail derrière chaque projet, son contexte métier et les décisions techniques qui l’ont façonné.",
      "listLabel": "Projets sélectionnés"
    },
    "project": {
      "breadcrumbHome": "Accueil",
      "breadcrumbProjects": "Projets",
      "problem": "Problème métier",
      "contribution": "Ma contribution",
      "technology": "Outils et méthodes",
      "decisions": "Décisions techniques",
      "back": "Tous les projets",
      "contact": "Échangeons"
    },
    "about": {
      "title": "À propos · Carlos Dutra · Ingénieur data senior",
      "description": "Découvrez le parcours de Carlos Dutra en plateformes data cloud, modélisation, automatisation et compréhension des enjeux métier."
    },
    "experience": {
      "title": "Expérience · Carlos Dutra · Ingénieur data senior",
      "description": "Expérience professionnelle de Carlos Dutra en ingénierie des données, analyse et intelligence commerciale."
    },
    "education": {
      "title": "Formation · Carlos Dutra · Ingénieur data senior",
      "description": "Formation en informatique, analyse de données et gestion des entreprises."
    }
  },
  "projectDetails": {
    "lumi": {
      "problem": "Les employés ont besoin de réponses cohérentes et à jour sur les politiques et procédures RH dans Google Chat.",
      "contribution": "J’ai conçu et développé le service de l’assistant, qui relie les questions des employés à la base de connaissances tenue à jour par les RH."
    },
    "people-analytics": {
      "problem": "Le nouveau domaine People Analytics avait besoin d’un flux fiable entre des sources fragmentées et des modèles analytiques réutilisables.",
      "contribution": "J’ai conçu l’infrastructure cloud et le flux de livraison en séparant ingestion, mise en conformité et modélisation analytique. Le développement des modèles Gold se poursuit."
    },
    "hubspot-crm": {
      "problem": "L’analyse commerciale exigeait des entités et des mesures cohérentes malgré les propriétés flexibles, les enregistrements évolutifs et les relations plusieurs à plusieurs du CRM.",
      "contribution": "J’ai créé des modèles pour les entreprises, les contacts, les opportunités et les interactions. J’ai normalisé les propriétés, dédupliqué les enregistrements, résolu les relations du CRM et publié des vues d’opportunités et d’activités pour l’analyse."
    },
    "copapa-market-sizing": {
      "problem": "La planification commerciale manquait d’une vision cohérente de la demande et des parts de marché par commune brésilienne.",
      "contribution": "J’ai combiné les données démographiques et sectorielles avec les ventes de l’ERP pour estimer la demande et les parts de marché par commune. Ces estimations ont éclairé une proposition de redécoupage des territoires de vente.",
      "analysis": {
        "title": "Comparer les communes pour planifier les territoires de vente",
        "body": "J’ai comparé les communes à partir des estimations de la demande et des ventes enregistrées. Cette comparaison a permis de discuter des possibilités de développement commercial tout en distinguant le potentiel du marché des ventes réalisées."
      }
    }
  },
  "experiencePage": {
    "kicker": "EXPÉRIENCE PROFESSIONNELLE",
    "heading": "Des produits data proches des besoins métier",
    "intro": "Mon parcours couvre l’ingénierie des données, l’analyse, les opérations clients et l’intelligence commerciale. Mes postes récents se concentrent sur les plateformes data cloud et les contributions techniques."
  },
  "academicPage": {
    "kicker": "PARCOURS UNIVERSITAIRE",
    "heading": "Formation",
    "intro": "J’étudie actuellement l’informatique, après avoir terminé des études en analyse de données et en gestion des entreprises.",
    "degrees": [
      {
        "name": "Diplôme universitaire en informatique",
        "school": "Descomplica Faculdade Digital",
        "dates": "2025–2028 · En cours",
        "summary": "Études universitaires en cours."
      },
      {
        "name": "Diplôme de troisième cycle Lato Sensu en analyse de données",
        "school": "Descomplica Faculdade Digital",
        "dates": "2021–2022 · Terminé",
        "summary": "Programme de troisième cycle Lato Sensu de 390 heures."
      },
      {
        "name": "Diplôme universitaire en gestion des entreprises",
        "school": "UNOPAR",
        "dates": "2015–2018 · Terminé",
        "summary": "Études universitaires terminées."
      }
    ]
  },
  "aboutPage": {
    "role": "INGÉNIEUR DATA SENIOR / CURITIBA, BRÉSIL",
    "heading": "L’ingénierie des données avec une vision métier.",
    "intro": "Je suis Carlos Dutra. Je conçois et développe des plateformes data cloud, de l’intégration des systèmes sources aux tables qui éclairent les analyses et les décisions.",
    "perspective": "J’ai commencé en intelligence commerciale, puis travaillé en Customer Success et dans les opérations de revenus. Cette expérience m’aide à comprendre ce que les équipes doivent mesurer, à le traduire en modèles de données et à expliquer mes choix techniques.",
    "focusTitle": "Mes domaines d’intervention",
    "focus": [
      {
        "title": "Plateformes data cloud",
        "body": "Je construis l’infrastructure pour collecter, organiser et mettre les données à disposition. Je travaille avec Google Cloud, BigQuery et Terraform, et j’ai de l’expérience avec Databricks et la migration de traitements vers Cloud Run."
      },
      {
        "title": "Modélisation et automatisation des données",
        "body": "J’intègre des bases de données, des ERP et des API, organise les transformations avec dbt et Dataform et orchestre leur exécution avec Airflow. Je privilégie des tables réutilisables, des définitions claires et des contrôles qui détectent les problèmes avant la mise à disposition."
      },
      {
        "title": "IA reliée aux données et aux documents",
        "body": "J’ai développé Lumi en Python avec Gemini, la recherche dans Firestore et une intégration à Google Chat. Le projet associe l’ingénierie logicielle à des réponses ancrées dans la documentation interne."
      }
    ],
    "careerTitle": "Un parcours proche des métiers",
    "careerIntro": "J’ai commencé à travailler avec des données commerciales en 2013. Mes postes récents m’ont permis d’approfondir l’ingénierie des données, l’architecture cloud et le leadership technique.",
    "career": [
      {
        "org": "MadeiraMadeira",
        "dates": "Depuis avril 2026",
        "role": "Ingénierie des données senior · People Analytics et IA",
        "summary": "J’ai conçu l’infrastructure et le flux de données de People Analytics avec BigQuery, Dataform, Cloud Composer et Terraform. J’ai aussi conçu et développé Lumi, l’assistant IA des employés, et je contribue à orienter le travail technique de l’équipe."
      },
      {
        "org": "Gobrax",
        "dates": "Février 2023–mars 2026",
        "role": "Ingénierie des données et leadership technique",
        "summary": "J’ai construit l’entrepôt de données BigQuery et migré les données de PostgreSQL vers Google Cloud. J’ai développé des intégrations ERP et CRM avec Airbyte, Airflow et dbt, et automatisé la mise à jour des rapports utilisés par Customer Success."
      },
      {
        "org": "Leads2b",
        "dates": "Novembre 2020–décembre 2022",
        "role": "Customer Success et analyse de données",
        "summary": "J’ai analysé des données de prospects, des taux de conversion et des indicateurs d’engagement pour accompagner les clients d’une plateforme SaaS B2B. J’ai ainsi appris à mieux relier données, opérations et besoins des clients."
      },
      {
        "org": "COPAPA",
        "dates": "Décembre 2013–août 2018",
        "role": "Analyse de données et intelligence commerciale",
        "summary": "J’ai développé des analyses de marché, automatisé des rapports et mis en place des contrôles commerciaux. J’ai combiné données démographiques et ventes de l’ERP pour estimer la demande par commune et appuyer une proposition de redécoupage commercial."
      }
    ],
    "workingTitle": "Ma façon de travailler",
    "workingBody": "Je travaille comme spécialiste technique. Je participe à la conception, j’écris le code et je suis la livraison. Mon expérience de leadership technique m’aide à guider mes collègues, à revoir les décisions et à aligner l’ingénierie sur les priorités métier.",
    "educationTitle": "Formation",
    "projectsAction": "Découvrir mes projets",
    "contactTitle": "Parlons de votre équipe data.",
    "contactIntro": "Si vous cherchez un ingénieur data senior ayant de l’expérience en plateformes cloud, modélisation et automatisation, échangeons sur le contexte et les défis de votre équipe.",
    "experienceSummaryTitle": "Expérience récente",
    "experienceSummary": "Ingénierie des données senior chez MadeiraMadeira et plateformes data chez Gobrax, après une première expérience en analyse clients et en intelligence commerciale.",
    "experienceAction": "Voir toute l’expérience",
    "educationSummary": "Études d’informatique en cours, diplôme de troisième cycle en analyse de données et diplôme universitaire en gestion des entreprises.",
    "educationAction": "Voir tout le parcours universitaire"
  }
};
