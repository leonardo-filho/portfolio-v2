import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
export type Project = {
  id: number;
  title: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  businessValue: LocalizedText;
  category: "engineering" | "ml" | "bi";
  technologies: string[];
  visibility: "internal" | "public";
  githubUrl?: string;
  liveUrl?: string;
  images: { src: string; caption: LocalizedText }[];
  highlights?: { value: LocalizedText; label: LocalizedText }[];
};

export const projects: Project[] = [
  {
    id: 5,
    title: { "pt-BR": "Quadra One — plataforma executiva", en: "Quadra One — executive platform" },
    shortDescription: { "pt-BR": "Indicadores financeiros e operacionais em uma aplicação web conectada ao BigQuery.", en: "Financial and operational metrics in a web application connected to BigQuery." },
    longDescription: {
      "pt-BR": `<p>Plataforma interna que reúne indicadores antes dispersos em relatórios e rotinas distintas. A aplicação consulta dados do BigQuery e organiza módulos de caixa, DRE, operações, compras e acompanhamento de obras.</p><h2>Minha atuação</h2><ul><li>Desenvolvimento da aplicação com Next.js, TypeScript e ECharts.</li><li>Modelagem das consultas e regras de negócio com rastreabilidade até a origem.</li><li>Controles de acesso, filtros e telas adaptadas para diferentes públicos.</li><li>Integração dos produtos automatizados da operação em um único ponto de acompanhamento.</li></ul>`,
      en: `<p>An internal platform that brings together metrics previously spread across reports and separate workflows. It queries BigQuery and organizes cash flow, P&amp;L, operations, procurement and construction monitoring modules.</p><h2>My contribution</h2><ul><li>Developed the application with Next.js, TypeScript and ECharts.</li><li>Modeled queries and business rules with traceability to source data.</li><li>Implemented access controls, filters and views for different audiences.</li><li>Connected automated operations products in a single monitoring experience.</li></ul>`,
    },
    businessValue: { "pt-BR": "Reduz a dependência de relatórios manuais e aproxima a diretoria dos dados operacionais usados para decidir.", en: "Reduces dependence on manual reports and brings leaders closer to the operational data used in decisions." },
    category: "engineering", technologies: ["Next.js", "TypeScript", "BigQuery", "ECharts", "Google Cloud"], visibility: "internal", images: [],
  },
  {
    id: 6,
    title: { "pt-BR": "Automação de auditorias financeiras", en: "Financial audit automation" },
    shortDescription: { "pt-BR": "Robôs que conferem dados do ERP, aplicam regras e notificam responsáveis com evidências.", en: "Automation that checks ERP data, applies rules and alerts owners with evidence." },
    longDescription: {
      "pt-BR": `<p>Conjunto de automações em produção para conferências financeiras, investimentos, suprimentos e caixa. Cada fluxo transforma uma regra operacional em validações reproduzíveis sobre dados do ERP.</p><h2>Como funciona</h2><ul><li>Extração e tratamento em Python e SQL sobre dados do BigQuery.</li><li>Classificação de exceções e preservação do histórico para evitar alertas repetidos.</li><li>Relatórios por responsável e envio automatizado por integrações corporativas.</li><li>Telemetria de execução, conciliação de totais e controles de qualidade.</li></ul>`,
      en: `<p>A suite of production automation for financial, investment, procurement and cash controls. Each workflow turns an operational rule into reproducible checks over ERP data.</p><h2>How it works</h2><ul><li>Extraction and processing in Python and SQL over BigQuery data.</li><li>Exception classification and history preservation to prevent repeated alerts.</li><li>Owner-specific reports and automated delivery through enterprise integrations.</li><li>Execution telemetry, total reconciliation and data quality controls.</li></ul>`,
    },
    businessValue: { "pt-BR": "Direciona a equipe para as exceções reais, reduz retrabalho e deixa cada alerta auditável.", en: "Directs teams to real exceptions, reduces rework and makes every alert auditable." },
    category: "engineering", technologies: ["Python", "SQL", "BigQuery", "Microsoft Graph", "Data Quality"], visibility: "internal", images: [],
  },
  {
    id: 4,
    title: { "pt-BR": "Salifort — People Risk Lab", en: "Salifort — People Risk Lab" },
    shortDescription: { "pt-BR": "Produto interativo que transforma um estudo de rotatividade em sinais, cenários e decisões investigáveis.", en: "An interactive product that turns an attrition study into signals, scenarios and decisions worth investigating." },
    longDescription: {
      "pt-BR": `<p>O capstone do Google Advanced Data Analytics partiu de uma base pública de RH e evoluiu para um produto de decisão. Em vez de abrir com dados brutos, a experiência conduz a leitura por três perguntas: qual é o tamanho do problema, onde o risco muda de comportamento e o que acontece quando um cenário é alterado.</p><h2>De análise a produto</h2><ul><li>Visão executiva com indicadores, contexto e achados prioritários.</li><li>Exploração das relações entre satisfação, carga, projetos e remuneração.</li><li>Laboratório de risco conectado a um modelo Random Forest por uma API FastAPI no Cloud Run.</li><li>Experiência resiliente, com agregados versionados quando a API estiver indisponível e identificação transparente do modo demonstração.</li><li>Frontend responsivo com carregamento por rota, container queries, View Transitions e movimento reduzido por preferência do usuário.</li></ul><h2>Limites</h2><p>Os sinais representam associações encontradas neste conjunto. A aplicação trata a previsão como ponto de partida para investigação, não como decisão automatizada sobre pessoas.</p>`,
      en: `<p>This Google Advanced Data Analytics capstone started from a public HR dataset and evolved into a decision product. Instead of opening with raw data, the experience guides the reader through three questions: how large is the problem, where does risk change behavior, and what happens when a scenario changes.</p><h2>From analysis to product</h2><ul><li>Executive view with headline indicators, context and priority findings.</li><li>Exploration of relationships across satisfaction, workload, projects and compensation.</li><li>Risk lab connected to a Random Forest model through a FastAPI service on Cloud Run.</li><li>Resilient experience with versioned aggregates when the API is unavailable and transparent demo-mode labeling.</li><li>Responsive frontend with route splitting, container queries, View Transitions and reduced-motion support.</li></ul><h2>Limitations</h2><p>The signals are associations found in this dataset. The application treats prediction as a starting point for investigation, not as an automated decision about people.</p>`,
    },
    businessValue: { "pt-BR": "Traduz um modelo em uma experiência compreensível para investigar retenção, mantendo visíveis as evidências, a fonte e os limites da previsão.", en: "Translates a model into an understandable retention investigation experience while keeping the evidence, source and prediction limits visible." },
    category: "ml", technologies: ["React 19", "TypeScript", "Recharts", "FastAPI", "Cloud Run"], visibility: "public",
    githubUrl: "https://github.com/leonardo-filho/salifort-hr-churn", liveUrl: "https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard",
    images: [
      { src: "/images/churn-dashboard-main.png", caption: { "pt-BR": "Visão executiva conduzida por problema, evidência e próxima ação.", en: "Executive view structured around problem, evidence and next action." } },
      { src: "/images/churn-prediction-ui.png", caption: { "pt-BR": "Laboratório para comparar cenários e questionar o resultado do modelo.", en: "Risk lab for comparing scenarios and questioning the model output." } },
      { src: "/images/churn-architecture.png", caption: { "pt-BR": "Arquitetura da análise à aplicação web.", en: "Architecture from analysis to the web application." } },
    ],
    highlights: [
      { value: { "pt-BR": "14.999", en: "14,999" }, label: { "pt-BR": "registros analisados", en: "records analyzed" } },
      { value: { "pt-BR": "23,8%", en: "23.8%" }, label: { "pt-BR": "taxa histórica de saída", en: "historical attrition rate" } },
      { value: { "pt-BR": "3", en: "3" }, label: { "pt-BR": "experiências interativas", en: "interactive experiences" } },
    ],
  },
  {
    id: 1,
    title: { "pt-BR": "Dashboard comercial em Power BI", en: "Commercial sales dashboard" },
    shortDescription: { "pt-BR": "Análise de vendas com narrativa visual para apoiar decisões comerciais.", en: "Sales analysis with a visual narrative to support commercial decisions." },
    longDescription: {
      "pt-BR": `<p>Dashboard interativo para análise comercial, organizado para conduzir a leitura dos indicadores até os fatores que explicam o resultado.</p><h2>Recursos</h2><ul><li>KPIs por categoria e fabricante.</li><li>Análise de influenciadores do desempenho de vendas.</li><li>Visão geográfica por estado e representante.</li><li>Narrativa com os principais achados.</li></ul>`,
      en: `<p>An interactive commercial analytics dashboard, organized to guide the reader from headline metrics to the factors explaining performance.</p><h2>Features</h2><ul><li>KPIs by category and manufacturer.</li><li>Analysis of sales performance drivers.</li><li>Geographic view by state and sales representative.</li><li>Narrative highlighting key findings.</li></ul>`,
    },
    businessValue: { "pt-BR": "Ajuda a gestão comercial a identificar produtos, regiões e fatores que merecem atenção.", en: "Helps commercial leaders identify products, regions and performance drivers that need attention." },
    category: "bi", technologies: ["Power BI", "DAX", "Data Storytelling", "Modelagem"], visibility: "public",
    images: [
      { src: "/images/dashboard-pbi-indice.png", caption: { "pt-BR": "Índice navegável por tema de análise.", en: "Navigable index organized by analysis theme." } },
      { src: "/images/dashboard-pbi-influenciadores.png", caption: { "pt-BR": "Variáveis que influenciam o desempenho de vendas.", en: "Variables influencing sales performance." } },
      { src: "/images/dashboard-pbi-mapa.png", caption: { "pt-BR": "Desempenho por estado e representante.", en: "Performance by state and sales representative." } },
    ],
  },
  {
    id: 2,
    title: { "pt-BR": "Detecção de anomalias em Ethereum", en: "Anomaly detection in Ethereum" },
    shortDescription: { "pt-BR": "Comparação de métodos para identificar transações suspeitas em dados de blockchain.", en: "A comparison of methods for identifying suspicious transactions in blockchain data." },
    longDescription: {
      "pt-BR": `<p>Estudo de detecção de comportamentos atípicos em transações Ethereum, comparando uma regra de baseline com Isolation Forest e DBSCAN.</p><h2>Resultados do estudo</h2><ul><li>Isolation Forest atingiu 97% de recall para fraude e 97% de acurácia.</li><li>O baseline obteve 100% de precisão e 81% de recall.</li><li>O DBSCAN apresentou baixo recall e muitos falsos positivos neste conjunto.</li></ul>`,
      en: `<p>A study of atypical behavior in Ethereum transactions, comparing a rule-based baseline with Isolation Forest and DBSCAN.</p><h2>Study results</h2><ul><li>Isolation Forest reached 97% fraud recall and 97% accuracy.</li><li>The baseline achieved 100% precision and 81% recall.</li><li>DBSCAN showed low recall and many false positives on this dataset.</li></ul>`,
    },
    businessValue: { "pt-BR": "Demonstra avaliação comparativa de modelos para triagem em compliance, auditoria e prevenção a fraudes.", en: "Demonstrates comparative model evaluation for compliance, auditing and fraud screening." },
    category: "ml", technologies: ["Python", "Isolation Forest", "DBSCAN", "Compliance", "Blockchain"], visibility: "public",
    images: [
      { src: "/images/anomalias-threshold.png", caption: { "pt-BR": "Baseline para sinalização de anomalias.", en: "Baseline for flagging anomalies." } },
      { src: "/images/anomalias-isolation-scatter.png", caption: { "pt-BR": "Anomalias detectadas pelo Isolation Forest.", en: "Anomalies detected by Isolation Forest." } },
      { src: "/images/anomalias-matriz-isolation.png", caption: { "pt-BR": "Matriz de avaliação do modelo.", en: "Model evaluation matrix." } },
    ],
  },
];
