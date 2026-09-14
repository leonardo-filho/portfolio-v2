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
    title: { "pt-BR": "Previsão de rotatividade de pessoas", en: "Employee attrition prediction" },
    shortDescription: { "pt-BR": "Projeto ponta a ponta: análise, modelo preditivo, API no Google Cloud e dashboard React.", en: "End-to-end project: analysis, predictive model, Google Cloud API and React dashboard." },
    longDescription: {
      "pt-BR": `<p>Projeto final do Google Advanced Data Analytics, desenvolvido com um conjunto de dados público de RH. A solução percorre análise exploratória, modelagem e entrega de uma aplicação interativa.</p><h2>Solução</h2><ul><li>Análise de satisfação, carga de trabalho, projetos e remuneração.</li><li>Modelo para estimar a probabilidade de desligamento.</li><li>API FastAPI publicada no Google Cloud Run.</li><li>Interface React para explorar dados e simular cenários.</li><li>Relatório executivo com processo, resultados e limites.</li></ul>`,
      en: `<p>Capstone for the Google Advanced Data Analytics program, using a public HR dataset. The solution covers exploratory analysis, modeling and delivery through an interactive application.</p><h2>Solution</h2><ul><li>Analysis of satisfaction, workload, projects and compensation.</li><li>A model that estimates attrition probability.</li><li>FastAPI service deployed to Google Cloud Run.</li><li>React interface to explore data and simulate scenarios.</li><li>Executive report covering process, results and limitations.</li></ul>`,
    },
    businessValue: { "pt-BR": "Mostra como combinar análise e produto para apoiar ações de retenção baseadas em sinais observáveis.", en: "Shows how analytics and product delivery can support retention actions based on observable signals." },
    category: "ml", technologies: ["Python", "Machine Learning", "FastAPI", "Cloud Run", "React"], visibility: "public",
    githubUrl: "https://github.com/leonardo-filho/salifort-hr-churn", liveUrl: "https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard",
    images: [
      { src: "/images/churn-dashboard-main.png", caption: { "pt-BR": "Painel principal com indicadores de rotatividade, horas e projetos.", en: "Main dashboard with attrition, hours and project metrics." } },
      { src: "/images/churn-prediction-ui.png", caption: { "pt-BR": "Interface para simular a probabilidade de desligamento.", en: "Interface for simulating attrition probability." } },
      { src: "/images/churn-architecture.png", caption: { "pt-BR": "Arquitetura da análise à aplicação web.", en: "Architecture from analysis to the web application." } },
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
