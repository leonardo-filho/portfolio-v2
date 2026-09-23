import type { Locale } from "@/lib/i18n";

export type Experience = { company: string; role: string; period: string; location: string; highlights: string[]; stack: string[] };
export type Certification = { name: string; issuer: string; year: string; type: "specialization" | "course" | "badge" | "certificate"; group: "cloud" | "analytics"; credentialId?: string; url?: string; featured?: boolean };

const quadraStack = ["Python", "BigQuery", "Google Cloud", "Cloud Run", "Next.js", "TypeScript", "Power BI"];

export const resumeByLocale: Record<Locale, {
  experiences: Experience[];
  education: { degree: string; school: string; period: string }[];
  languages: { name: string; level: string }[];
  skillGroups: { label: string; items: string[] }[];
}> = {
  "pt-BR": {
    experiences: [
      {
        company: "Quadra Engenharia", role: "Especialista em Engenharia de Dados", period: "jun. 2025 — atual", location: "Belém, PA · PJ",
        highlights: [
          "Construção e operação de pipelines em Google Cloud que integram ERP, APIs, arquivos e planilhas ao BigQuery, com cargas idempotentes e validação entre origem e destino.",
          "Criação do robô de auditoria de contas a pagar: 14 regras, revisão humana e e-mail por responsável. A cobertura passou de 2 para as 32 empresas do grupo e o falso positivo caiu de 58% para 34%.",
          "Desenvolvimento do Quadra One, plataforma executiva com 51 páginas, login corporativo e acesso por papel, apresentada para mais de 50 pessoas da empresa.",
          "Telemetria comum para 9 robôs e monitoramento de 53 fontes de dados, para que atrasos e falhas apareçam antes de chegar aos relatórios.",
        ], stack: quadraStack,
      },
      {
        company: "Nexar", role: "Analista de Dados", period: "mar. — jun. 2025", location: "Remoto",
        highlights: ["Estruturação de dados de sensores industriais e séries temporais para análises e treinamento de modelos.", "Prototipação de modelos de machine learning para detecção antecipada de falhas em equipamentos.", "Entrega da camada analítica e visual do MVP apresentado a investidores."],
        stack: ["Python", "scikit-learn", "MySQL", "Séries temporais", "Flask", "React"],
      },
      {
        company: "Enacom Group", role: "Analista de Qualidade", period: "mai. 2022 — mai. 2023", location: "Remoto",
        highlights: ["Análise de logs e desempenho para localizar gargalos críticos, contribuindo para elevar em 10% a estabilidade da aplicação.", "Automação de testes e análise de logs em Python, com ganho de 30% na eficiência do processo de QA.", "Painéis em Power BI e relatórios de qualidade para apoiar a priorização do roadmap de desenvolvimento."],
        stack: ["Python", "Power BI", "SQL", "Automação de testes"],
      },
    ],
    education: [
      { degree: "MBA em Inteligência Artificial, Ciência de Dados e Big Data", school: "PUCRS", period: "Concluído em abr. 2026" },
      { degree: "Bacharelado em Engenharia de Computação", school: "CESUPA", period: "Concluído em dez. 2024" },
    ],
    languages: [{ name: "Português", level: "Nativo" }, { name: "Inglês", level: "C1 avançado · EF SET 70/100" }, { name: "Espanhol", level: "Conversação" }],
    skillGroups: [
      { label: "Cloud & dados", items: ["BigQuery", "Cloud Storage", "Cloud Run Jobs", "Cloud Scheduler", "Docker"] },
      { label: "Engenharia", items: ["Python", "SQL avançado", "Pandas", "APIs REST", "Cargas idempotentes", "Validação de dados"] },
      { label: "Analytics", items: ["Power BI", "Looker / LookML", "ECharts", "Next.js", "Modelagem dimensional"] },
      { label: "IA & aprendizado", items: ["scikit-learn", "BigQuery ML", "Vertex AI / Gemini", "RAG", "Séries temporais"] },
    ],
  },
  en: {
    experiences: [
      {
        company: "Quadra Engenharia", role: "Data Engineering Specialist", period: "Jun 2025 — present", location: "Belém, Brazil · Contractor",
        highlights: ["Build and operate Google Cloud pipelines that integrate ERP, APIs, files and spreadsheets into BigQuery, with idempotent loads and source-to-target validation.", "Built the accounts payable audit bot: 14 rules, human review and one email per owner. Coverage grew from 2 to all 32 group companies and false positives fell from 58% to 34%.", "Develop Quadra One, an executive platform with 51 pages, corporate sign-in and role-based access, presented to more than 50 people across the company.", "Shared telemetry for 9 bots and monitoring of 53 data sources, so delays and failures surface before they reach business reports."],
        stack: quadraStack,
      },
      {
        company: "Nexar", role: "Data Analyst", period: "Mar — Jun 2025", location: "Remote",
        highlights: ["Structured industrial sensor and time series data for analytics and model training.", "Prototyped machine learning models for early equipment failure detection.", "Delivered the analytical and visual layer of the MVP used in investor presentations."],
        stack: ["Python", "scikit-learn", "MySQL", "Time series", "Flask", "React"],
      },
      {
        company: "Enacom Group", role: "Quality Analyst", period: "May 2022 — May 2023", location: "Remote",
        highlights: ["Analyzed system logs and performance data to identify critical bottlenecks, contributing to a 10% increase in application stability.", "Automated testing and log analysis in Python, improving QA process efficiency by 30%.", "Built Power BI dashboards and quality reports to support development roadmap priorities."],
        stack: ["Python", "Power BI", "SQL", "Test automation"],
      },
    ],
    education: [{ degree: "MBA in Artificial Intelligence, Data Science and Big Data", school: "PUCRS", period: "Completed Apr 2026" }, { degree: "B.Sc. in Computer Engineering", school: "CESUPA", period: "Completed Dec 2024" }],
    languages: [{ name: "Portuguese", level: "Native" }, { name: "English", level: "Advanced C1 · EF SET 70/100" }, { name: "Spanish", level: "Conversational" }],
    skillGroups: [
      { label: "Cloud & data", items: ["BigQuery", "Cloud Storage", "Cloud Run Jobs", "Cloud Scheduler", "Docker"] },
      { label: "Engineering", items: ["Python", "Advanced SQL", "Pandas", "REST APIs", "Idempotent loads", "Data validation"] },
      { label: "Analytics", items: ["Power BI", "Looker / LookML", "ECharts", "Next.js", "Dimensional modeling"] },
      { label: "AI & machine learning", items: ["scikit-learn", "BigQuery ML", "Vertex AI / Gemini", "RAG", "Time series"] },
    ],
  },
};

export const certifications: Certification[] = [
  { name: "Data Engineering, Big Data, and Machine Learning on GCP", issuer: "Coursera · Google Cloud Training", year: "2026", type: "specialization", group: "cloud", credentialId: "N1MHT34CFOJK", url: "https://coursera.org/verify/specialization/N1MHT34CFOJK", featured: true },
  { name: "Preparing for Google Cloud Certification: Cloud Data Engineer", issuer: "Coursera · Google Cloud", year: "2026", type: "certificate", group: "cloud", credentialId: "UNZTPICXY600", url: "https://coursera.org/verify/professional-cert/UNZTPICXY600", featured: true },
  { name: "Build Streaming Data Pipelines on Google Cloud", issuer: "Coursera · Google Cloud", year: "2026", type: "course", group: "cloud", credentialId: "N074SL4LXK97", url: "https://coursera.org/verify/N074SL4LXK97" },
  { name: "Build Batch Data Pipelines on Google Cloud", issuer: "Coursera · Google Cloud", year: "2026", type: "course", group: "cloud", credentialId: "A3AZ6HSVH61G", url: "https://coursera.org/verify/A3AZ6HSVH61G" },
  { name: "AI Driven Data Engineering", issuer: "Dagster University", year: "2026", type: "course", group: "cloud", credentialId: "tenegr0ipk" },
  { name: "Developing Data Models with LookML", issuer: "Google Cloud Skills Boost", year: "2026", type: "badge", group: "cloud", credentialId: "25993908" },
  { name: "dbt Fundamentals", issuer: "dbt Labs", year: "2026", type: "badge", group: "cloud" },
  { name: "Introduction to Vertex Forecasting and Time Series in Practice", issuer: "Coursera · Google Cloud", year: "2026", type: "course", group: "analytics", credentialId: "DTJ2TYX0CUSG", url: "https://coursera.org/verify/DTJ2TYX0CUSG" },
  { name: "Google Advanced Data Analytics", issuer: "Coursera · Google", year: "2025", type: "certificate", group: "analytics", credentialId: "6CE7415GTKMJ" },
  { name: "Google Data Analytics", issuer: "Coursera · Google", year: "2025", type: "certificate", group: "analytics" },
  { name: "Business Intelligence Analyst", issuer: "Escola DNC", year: "2025", type: "course", group: "analytics", credentialId: "1230822" },
  { name: "Microsoft Power BI for Business Intelligence and Data Science", issuer: "Data Science Academy", year: "2024", type: "course", group: "analytics" },
];
