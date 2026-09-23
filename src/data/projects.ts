import type { Locale } from "@/lib/i18n";

export type ProjectVisualKind = "platform" | "audit" | "anomaly";

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
  visual?: ProjectVisualKind;
  highlights?: { value: LocalizedText; label: LocalizedText }[];
};

export const projects: Project[] = [
  {
    id: 5,
    title: { "pt-BR": "Quadra One — plataforma executiva", en: "Quadra One — executive platform" },
    shortDescription: { "pt-BR": "Plataforma executiva com 51 páginas lendo o BigQuery direto, com login corporativo e acesso por papel.", en: "An executive platform with 51 pages reading BigQuery directly, with corporate sign-in and role-based access." },
    longDescription: {
      "pt-BR": `<p>Plataforma interna que reúne indicadores antes dispersos em relatórios e rotinas distintas. A aplicação consulta o BigQuery direto e organiza módulos de indicadores, saldos, inadimplência, compras e acompanhamento dos robôs de auditoria. Foi apresentada para mais de 50 pessoas da empresa.</p><h2>Minha atuação</h2><ul><li>Construção do zero com Next.js, TypeScript e ECharts: 51 páginas e 16 funcionalidades entregues.</li><li>Login corporativo com Microsoft Entra ID e acesso por papel. Uma consultoria externa, por exemplo, enxerga só o módulo que lhe cabe.</li><li>Histórico de inadimplência reconstruído mês a mês como estava em cada data, reconciliando exatamente com a visão atual.</li><li>Página de saúde dos dados que acompanha 53 fontes e mostra, em uma frase, o que está em dia, atrasado ou parado.</li></ul>`,
      en: `<p>An internal platform that brings together metrics previously spread across reports and separate workflows. It queries BigQuery directly and organizes metrics, balances, delinquency, procurement and audit-bot monitoring modules. It was presented to more than 50 people across the company.</p><h2>My contribution</h2><ul><li>Built from scratch with Next.js, TypeScript and ECharts: 51 pages and 16 features shipped.</li><li>Corporate sign-in with Microsoft Entra ID and role-based access. An external consultancy, for instance, only sees the module meant for it.</li><li>Delinquency history rebuilt month by month as it stood on each date, reconciling exactly with the current view.</li><li>A data health page that tracks 53 sources and states in one sentence what is fresh, late or stopped.</li></ul>`,
    },
    businessValue: { "pt-BR": "Reduz a dependência de relatórios manuais e aproxima a diretoria dos dados operacionais usados para decidir.", en: "Reduces dependence on manual reports and brings leaders closer to the operational data used in decisions." },
    category: "engineering", technologies: ["Next.js", "TypeScript", "BigQuery", "ECharts", "Entra ID"], visibility: "internal", images: [], visual: "platform",
    highlights: [
      { value: { "pt-BR": "51", en: "51" }, label: { "pt-BR": "páginas em produção", en: "pages in production" } },
      { value: { "pt-BR": "53", en: "53" }, label: { "pt-BR": "fontes de dados monitoradas", en: "data sources monitored" } },
      { value: { "pt-BR": "50+", en: "50+" }, label: { "pt-BR": "pessoas na apresentação interna", en: "people at the internal launch" } },
    ],
  },
  {
    id: 6,
    title: { "pt-BR": "Automação de auditorias financeiras", en: "Financial audit automation" },
    shortDescription: { "pt-BR": "Robô que audita contas a pagar no ERP com 14 regras, passa por revisão humana e avisa cada responsável.", en: "A bot that audits ERP accounts payable against 14 rules, goes through human review and alerts each owner." },
    longDescription: {
      "pt-BR": `<p>Robô em produção que confere os títulos a pagar lançados no ERP. Cada regra da operação (vencimento, anexo, plano de contas, documento fiscal) vira uma validação reproduzível, e nenhum alerta sai sem revisão humana.</p><h2>Como funciona</h2><ul><li>O ERP é copiado para o BigQuery ao longo do dia. O robô aplica 14 regras e descarta exceções conhecidas, como impostos, tarifas e reembolsos.</li><li>Um revisor marca cada alerta como procedente ou não. Só o que foi aprovado vira e-mail, um por responsável.</li><li>Na manhã seguinte, o robô reconfere na fonte se o título foi corrigido, pago ou continua aberto, e o resultado alimenta um placar semanal.</li><li>Roda em Cloud Run com telemetria por execução, comum aos 9 robôs da plataforma.</li></ul><h2>Resultados</h2><ul><li>A cobertura passou de 2 para todas as 32 empresas do grupo.</li><li>A taxa de falso positivo caiu de 58% para 34% ao ajustar o horário de execução ao ritmo de lançamento.</li><li>A leitura de PDFs com IA subiu a precisão do cruzamento de valores de 66% para 88%.</li><li>Em 30 dias, 258 dos 427 alertas corrigíveis foram corrigidos pelos responsáveis.</li></ul>`,
      en: `<p>A production bot that checks the payables posted in the ERP. Each operational rule (due date, attachment, chart of accounts, tax document) becomes a reproducible check, and no alert goes out without human review.</p><h2>How it works</h2><ul><li>The ERP is copied into BigQuery throughout the day. The bot applies 14 rules and drops known exceptions such as taxes, fees and reimbursements.</li><li>A reviewer marks each alert as valid or not. Only approved alerts become emails, one per owner.</li><li>The next morning the bot rechecks the source to see whether each item was fixed, paid or is still open, feeding a weekly scoreboard.</li><li>Runs on Cloud Run with per-run telemetry shared by the platform's 9 bots.</li></ul><h2>Results</h2><ul><li>Coverage grew from 2 companies to all 32 in the group.</li><li>The false positive rate fell from 58% to 34% by aligning the run schedule with posting patterns.</li><li>AI-based PDF reading raised amount-matching precision from 66% to 88%.</li><li>Within 30 days, owners fixed 258 of 427 fixable alerts.</li></ul>`,
    },
    businessValue: { "pt-BR": "Direciona a equipe para as exceções reais, reduz retrabalho e deixa cada alerta auditável.", en: "Directs teams to real exceptions, reduces rework and makes every alert auditable." },
    category: "engineering", technologies: ["Python", "BigQuery", "Cloud Run", "Microsoft Graph", "Gemini"], visibility: "internal", images: [], visual: "audit",
    highlights: [
      { value: { "pt-BR": "2 → 32", en: "2 → 32" }, label: { "pt-BR": "empresas cobertas", en: "companies covered" } },
      { value: { "pt-BR": "58% → 34%", en: "58% → 34%" }, label: { "pt-BR": "taxa de falso positivo", en: "false positive rate" } },
      { value: { "pt-BR": "66% → 88%", en: "66% → 88%" }, label: { "pt-BR": "precisão na leitura de PDFs", en: "PDF matching precision" } },
    ],
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
      { src: "/images/dashboard-pbi-narrativa.png", caption: { "pt-BR": "Visão geral com narrativa automática dos principais achados.", en: "Overview with an automated narrative of the key findings." } },
      { src: "/images/dashboard-pbi-influenciadores.png", caption: { "pt-BR": "Variáveis que influenciam o desempenho de vendas.", en: "Variables influencing sales performance." } },
      { src: "/images/dashboard-pbi-categoria-loja.png", caption: { "pt-BR": "Vendas por categoria e loja.", en: "Sales by category and store." } },
      { src: "/images/dashboard-pbi-indice.png", caption: { "pt-BR": "Índice navegável por tema de análise.", en: "Navigable index organized by analysis theme." } },
      { src: "/images/dashboard-pbi-mapa.png", caption: { "pt-BR": "Desempenho por estado e representante.", en: "Performance by state and sales representative." } },
    ],
  },
  {
    id: 2,
    title: { "pt-BR": "Detecção de anomalias em Ethereum", en: "Anomaly detection in Ethereum" },
    shortDescription: { "pt-BR": "Comparação de métodos para identificar transações suspeitas em dados de blockchain.", en: "A comparison of methods for identifying suspicious transactions in blockchain data." },
    longDescription: {
      "pt-BR": `<p>Estudo de detecção de comportamentos atípicos em transações Ethereum, comparando uma regra de baseline com Isolation Forest e DBSCAN.</p><h2>Resultados do estudo</h2><ul><li>O baseline por limiar teve 100% de precisão, mas deixou passar 28 das 144 fraudes (81% de recall).</li><li>O Isolation Forest pegou 140 das 144 fraudes (97% de recall), com 311 falsos positivos (31% de precisão).</li><li>O DBSCAN sinalizou todas as fraudes, mas marcou 6.102 transações normais como suspeitas (2% de precisão), o que o torna inviável para triagem.</li></ul><h2>Leitura</h2><p>Nenhum método é melhor em tudo. Para triagem de compliance, o Isolation Forest é o melhor ponto de partida: perde poucas fraudes e gera uma fila de revisão que uma equipe consegue analisar. O baseline serve como regra de alta confiança para bloqueio automático.</p>`,
      en: `<p>A study of atypical behavior in Ethereum transactions, comparing a rule-based baseline with Isolation Forest and DBSCAN.</p><h2>Study results</h2><ul><li>The threshold baseline reached 100% precision but missed 28 of 144 frauds (81% recall).</li><li>Isolation Forest caught 140 of 144 frauds (97% recall) with 311 false positives (31% precision).</li><li>DBSCAN flagged every fraud but also marked 6,102 normal transactions as suspicious (2% precision), which rules it out for screening.</li></ul><h2>Takeaway</h2><p>No method wins on every metric. For compliance screening, Isolation Forest is the best starting point: it misses few frauds and produces a review queue a team can actually work through. The baseline works as a high-confidence rule for automatic blocking.</p>`,
    },
    businessValue: { "pt-BR": "Demonstra avaliação comparativa de modelos para triagem em compliance, auditoria e prevenção a fraudes.", en: "Demonstrates comparative model evaluation for compliance, auditing and fraud screening." },
    category: "ml", technologies: ["Python", "Isolation Forest", "DBSCAN", "Compliance", "Blockchain"], visibility: "public", visual: "anomaly",
    highlights: [
      { value: { "pt-BR": "97%", en: "97%" }, label: { "pt-BR": "recall do Isolation Forest", en: "Isolation Forest recall" } },
      { value: { "pt-BR": "140 de 144", en: "140 of 144" }, label: { "pt-BR": "fraudes encontradas", en: "frauds caught" } },
      { value: { "pt-BR": "3", en: "3" }, label: { "pt-BR": "métodos comparados", en: "methods compared" } },
    ],
    images: [
      { src: "/images/anomalias-threshold.png", caption: { "pt-BR": "Baseline para sinalização de anomalias.", en: "Baseline for flagging anomalies." } },
      { src: "/images/anomalias-isolation-scatter.png", caption: { "pt-BR": "Anomalias detectadas pelo Isolation Forest.", en: "Anomalies detected by Isolation Forest." } },
      { src: "/images/anomalias-matriz-isolation.png", caption: { "pt-BR": "Matriz de confusão do Isolation Forest.", en: "Isolation Forest confusion matrix." } },
      { src: "/images/anomalias-matriz-dbscan.png", caption: { "pt-BR": "Matriz de confusão do DBSCAN: todas as fraudes, mas 6.102 falsos positivos.", en: "DBSCAN confusion matrix: every fraud, but 6,102 false positives." } },
    ],
  },
];
