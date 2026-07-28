// src/data/resume.ts
// Single source of truth for the resume content shown on the site.
// Mirrors the CV in /public/cv-leonardo-filho.pdf — keep both in sync.

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    company: "Quadra Engenharia",
    role: "Data Analyst, Operations",
    period: "06/2025 — Present",
    location: "Belem, Brazil",
    highlights: [
      "Built and operate production data pipelines on GCP (Python + BigQuery) ingesting ERP, REST API, Cloud Storage and spreadsheet sources, with idempotent loads and source-vs-target validation enforced before any number is published.",
      "Designed the monitoring layer for those pipelines: structured execution logs and run telemetry in a dedicated BigQuery dataset, making pipeline state queryable and auditable instead of silently failing.",
      "Detected and diagnosed a stalled upstream job that had frozen 26 warehouse tables unnoticed, plus a table dead since January still being read as current; escalated and drove the fix, then added freshness guard-rails so downstream apps refuse stale data.",
      "Developed BillBot, a Python compliance auditing system that cross-checks financial records in BigQuery, flags inconsistencies at the correct grain and notifies owners with traceable reports, with a QA gate and durable false-positive tracking.",
      "Built Quadra One, an executive analytics platform (Next.js + TypeScript + ECharts) reading live BigQuery data, delivering KPI dashboards read directly by directors with no analyst in the room.",
      "Integrated Google Gemini (Vertex AI) as an LLM-as-a-judge in automated financial document reconciliation, and shipped a RAG assistant over internal procedures.",
    ],
    stack: ["Python", "BigQuery", "GCP", "Next.js", "TypeScript", "ECharts", "Vertex AI", "Docker"],
  },
  {
    company: "Nexar",
    role: "Data Analyst",
    period: "03/2025 — 06/2025",
    location: "Remote",
    highlights: [
      "Collected, cleaned and structured industrial sensor and time-series data, building processing pipelines for analytics and model training.",
      "Prototyped and validated supervised machine learning models (scikit-learn) for early equipment failure detection (predictive maintenance).",
      "Delivered the analytics and visualization layer of the monitoring platform MVP, used in investor presentations.",
    ],
    stack: ["Python", "scikit-learn", "MySQL", "Time Series", "Flask", "React"],
  },
  {
    company: "Enacom Group",
    role: "Quality Analyst",
    period: "05/2022 — 05/2023",
    location: "Remote",
    highlights: [
      "Analyzed system logs and performance data, identifying critical bottlenecks and contributing to a 10% increase in application stability.",
      "Automated testing and log analysis routines in Python, improving QA process efficiency by 30%.",
      "Built Power BI dashboards and Excel reports on software quality metrics, supporting development roadmap prioritization.",
    ],
    stack: ["Python", "Power BI", "SQL", "QA Automation"],
  },
];

export const education: Education[] = [
  {
    degree: "MBA in Artificial Intelligence, Data Science and Big Data",
    school: "PUC-RS",
    period: "Completed 04/2026",
  },
  {
    degree: "B.Sc. in Computer Engineering",
    school: "Centro Universitario do Estado do Para (CESUPA)",
    period: "Completed 12/2024",
  },
];

export const certifications: Certification[] = [
  {
    name: "Developing Data Models with LookML",
    issuer: "Google Cloud",
    year: "2026",
    credentialId: "25993908",
  },
  {
    name: "Smart Analytics, Machine Learning and AI on Google Cloud",
    issuer: "Google Cloud",
    year: "2026",
    credentialId: "SCQXE2ZE7XDJ",
  },
  { name: "dbt Fundamentals", issuer: "dbt Labs", year: "2026" },
  {
    name: "Modernizing Data Lakes and Data Warehouses with Google Cloud",
    issuer: "Google Cloud (Coursera)",
    year: "2025",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (Coursera)",
    year: "2025",
  },
  { name: "Python for Data Analytics", issuer: "Meta (Coursera)", year: "2025" },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud (GCP)",
    items: ["BigQuery", "Cloud Storage", "Cloud Run Jobs", "Cloud Scheduler", "Vertex AI", "IAM & Service Accounts", "Docker"],
  },
  {
    label: "Pipeline reliability",
    items: ["Structured execution logging", "Freshness & staleness checks", "Idempotent loads", "Source-vs-target reconciliation", "Automated alerting", "Root-cause analysis"],
  },
  {
    label: "Programming",
    items: ["Python (Pandas, NumPy, scikit-learn)", "Advanced SQL", "TypeScript", "Bash"],
  },
  {
    label: "Modeling & governance",
    items: ["Layered modeling (staging, intermediate, marts)", "dbt", "LookML", "Documented grain", "Data quality checks"],
  },
  {
    label: "BI & dashboards",
    items: ["Power BI", "Looker / LookML", "ECharts", "Next.js analytics apps", "Executive KPI reporting"],
  },
  {
    label: "Integrations & APIs",
    items: ["REST API extraction", "Sienge ERP", "Microsoft Graph API", "Notion API", "Semi-structured payloads"],
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced — C1 (EF SET 70/100)" },
  { name: "Spanish", level: "Conversational" },
];
