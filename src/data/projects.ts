// src/data/projects.ts

// Definimos o "formato" de um projeto para garantir consistência
export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string; // Mantemos o HTML aqui
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: {
    src: string;
    caption: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 4,
    title: "⭐ Capstone: Google Advanced Data Analytics",
    shortDescription: "End-to-end pipeline: analysis, machine learning, a cloud API on GCP and an interactive React dashboard.",
    longDescription: `<p class="leading-relaxed">Part of the Google Advanced Data Analytics program, this project tackled employee attrition (churn) prediction in an HR setting. The goal was a complete solution, from initial analysis to a working interactive tool, using a public dataset provided by Google.</p><p class="mt-4 font-semibold">The solution covered every stage of a modern data pipeline:</p><ul class="list-disc pl-6 space-y-1"><li><b>Exploratory Data Analysis (EDA):</b> visualizations to surface patterns in satisfaction, workload, project count and compensation.</li><li><b>Machine learning model:</b> built and evaluated a predictive model estimating attrition probability with high accuracy.</li><li><b>Cloud API:</b> a FastAPI service hosted on Google Cloud Run, serving predictions in real time.</li><li><b>Interactive dashboard:</b> a React + Vite + Tailwind interface to explore the data and simulate retention scenarios.</li><li><b>Strategic documentation:</b> PACE Strategy and Executive Summary reports covering process, results and business value.</li></ul><p class="mt-4">✨ <b>Outcome:</b> an end-to-end pipeline in production:<br/><span>Data → Model → API (GCP) → Web interface.</span></p><p class="mt-4 font-semibold">🔗 Project links:</p><ul class="list-none pl-0 space-y-1"><li><a href="https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard" target="_blank" rel="noopener noreferrer">Live application</a></li><li><a href="https://salifort-hr-api-534fnyfc3a-uc.a.run.app/docs" target="_blank" rel="noopener noreferrer">API in production</a></li><li><a href="https://github.com/leonardo-filho/salifort-hr-churn" target="_blank" rel="noopener noreferrer">GitHub repository</a></li></ul>`,
    technologies: ["Data Science", "Machine Learning", "GCP", "FastAPI", "React", "Python", "Vite", "Tailwind", "Data Engineering"],
    githubUrl: "https://github.com/leonardo-filho/salifort-hr-churn",
    liveUrl: "https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard",
    images: [
      { src: "/images/churn-dashboard-main.png", caption: "📊 Main dashboard with churn rate, average hours and project count KPIs." },
      { src: "/images/churn-prediction-ui.png", caption: "🤖 Interactive prediction interface to simulate an employee's attrition probability." },
      { src: "/images/churn-eda-charts.png", caption: "📈 EDA charts showing the relationship between attrition, satisfaction and workload." },
      { src: "/images/churn-architecture.png", caption: "🏗️ Project architecture, from data processing to the React frontend deployment." },
      { src: "/images/churn-api-docs.png", caption: "🔌 FastAPI documentation with the analysis and prediction endpoints." },
      { src: "/images/churn-github-repo.png", caption: "📁 GitHub repository with backend, frontend and the analysis notebook." }
    ]
  },
  {
    id: 1,
    title: "Commercial Sales Dashboard in Power BI",
    shortDescription: "A full sales analytics dashboard focused on visual insight and strategic decision-making.",
    longDescription: `<p class="leading-relaxed">An <b>interactive Power BI dashboard</b> for commercial sales analysis, focused on <b>visual insight</b> and support for <b>strategic decisions</b>.</p><p class="mt-4 font-semibold">📌 Dashboard features:</p><ul class="list-disc pl-6 space-y-1"><li>Sales KPIs by category and manufacturer.</li><li>Key influencer analysis on sales performance.</li><li>Geographic analysis of sales rep performance.</li><li>Narrative highlights for strategic insight.</li><li>Navigation organized by a thematic index.</li></ul><p class="mt-4"><b>Sankey</b> diagrams, pie charts, histograms and geographic maps turn raw data into clear, decision-oriented visuals.</p><p class="mt-4">✨ <b>Goal:</b> provide a visual platform supporting strategic commercial decisions.</p>`,
    technologies: ["Power BI", "DAX", "Data Storytelling", "Data Modeling", "Geospatial Visualization"],
    images: [
      { src: "/images/dashboard-pbi-indice.png", caption: "🧭 Navigable index organized by analysis theme." },
      { src: "/images/dashboard-pbi-narrativa.png", caption: "📖 Smart narrative highlighting leading manufacturers and market insights." },
      { src: "/images/dashboard-pbi-influenciadores.png", caption: "🎯 Key influencers chart pointing to the variables that drive sales." },
      { src: "/images/dashboard-pbi-categoria-loja.png", caption: "🛒 Sankey chart showing the relationship between product categories and stores." },
      { src: "/images/dashboard-pbi-mapa.png", caption: "🗺️ Interactive map with sales performance by state and rep." }
    ]
  },
  {
    id: 2,
    title: "Anomaly Detection in Ethereum Transactions",
    shortDescription: "Machine learning to identify suspicious behavior in Ethereum blockchain data.",
    longDescription: `<p class="leading-relaxed">This project applies <b>machine learning</b> to identify <b>suspicious behavior</b> in <b>Ethereum blockchain</b> transactions.</p><p class="mt-4 font-semibold">📌 Methodology:</p><ul class="list-disc pl-6 space-y-1"><li><b>EDA:</b> exploratory analysis to understand patterns and outliers.</li><li><b>Unsupervised algorithms:</b> Isolation Forest and DBSCAN for anomaly detection.</li><li><b>Baseline:</b> a manual threshold to compare against the models.</li><li><b>Evaluation:</b> recall, accuracy and false-positive rate.</li></ul><p class="mt-4 font-semibold">📊 Key results:</p><ul class="list-disc pl-6 space-y-1"><li><b>Isolation Forest:</b> 97% recall on fraud and 97% accuracy.</li><li><b>Baseline:</b> 100% precision but only 81% recall.</li><li><b>DBSCAN:</b> low recall (5%) and a high false-positive rate.</li></ul><p class="mt-4">✨ <b>Applications:</b> compliance, auditing, cybersecurity and anti-money-laundering, showing how relevant this modeling is to decentralized finance.</p>`,
    technologies: ["Python", "EDA", "Machine Learning", "Isolation Forest", "DBSCAN", "Data Visualization", "Blockchain", "Compliance"],
    images: [
      { src: "/images/anomalias-corr.png", caption: "🔍 Correlation heatmap across the relevant transaction variables." },
      { src: "/images/anomalias-sent-dist.png", caption: "📊 Distribution of 'Sent tnx' reveals skewed behavior and outliers." },
      { src: "/images/anomalias-erc20-boxplot.png", caption: "📦 Boxplot showing extreme values in ERC20 token transactions." },
      { src: "/images/anomalias-threshold.png", caption: "🚩 Manual threshold applied as a baseline for flagging anomalies." },
      { src: "/images/anomalias-matriz-baseline.png", caption: "📈 Confusion matrix evaluating the baseline method." },
      { src: "/images/anomalias-isolation-scatter.png", caption: "🌲 Isolation Forest anomaly detection: red points mark suspicious activity." },
      { src: "/images/anomalias-matriz-isolation.png", caption: "📊 Isolation Forest evaluation with high accuracy and recall on fraud." },
      { src: "/images/anomalias-dbscan-scatter.png", caption: "🧬 DBSCAN clustering applied to detect out-of-pattern transactions." },
      { src: "/images/anomalias-matriz-dbscan.png", caption: "⚠️ DBSCAN shows low recall and a high false-positive rate." }
    ]
  },
  {
    id: 3,
    title: "Hospital Mortality Prediction Dashboard",
    shortDescription: "Exploratory analysis and hospital mortality prediction with Random Forest, served in an interactive dashboard.",
    longDescription: `<p class="leading-relaxed">An <b>interactive dashboard built with Streamlit</b> for exploratory analysis and <b>hospital mortality prediction</b>, based on real admission and death records.</p><p class="mt-4 font-semibold">📌 Approach:</p><ul class="list-disc pl-6 space-y-1"><li>Statistical analysis of variables such as age, gender, length of stay, pollutants and AQI.</li><li>A <b>Random Forest</b> model trained for mortality prediction, reaching 99% accuracy.</li><li>Interactive interface for dynamic filtering and result visualization.</li></ul><p class="mt-4 font-semibold">📊 Available visualizations:</p><ul class="list-disc pl-6 space-y-1"><li>Bar charts, boxplots and distributions.</li><li>Heatmaps for correlation between pollutants.</li><li>Model performance metrics.</li></ul><p class="mt-4">✨ <b>Conclusion:</b> combining environmental, demographic and clinical variables proved relevant to hospital mortality analysis. The Random Forest model performed strongly, showing the potential of <b>machine learning</b> in clinical settings.</p>`,
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Random Forest", "Data Science"],
    images: [
      { src: "/images/mortalidade-area-boxplot.png", caption: "📦 Mortality (MRD) by area type." },
      { src: "/images/mortalidade-distribuicao-idade.png", caption: "📊 Age distribution of mortality patients." },
      { src: "/images/mortalidade-correlacao-poluentes.png", caption: "🔬 Correlation matrix across atmospheric pollutants." },
      { src: "/images/mortalidade-distribuicao-aqi.png", caption: "🌫️ Air quality index (AQI) distribution." },
      { src: "/images/mortalidade-pm25-aqi-scatter.png", caption: "📈 Relationship between PM2.5 and AQI." },
      { src: "/images/mortalidade-tempmax-pm25.png", caption: "🌡️ Relationship between maximum temperature and PM2.5." },
      { src: "/images/mortalidade-rf-treino-avaliacao.png", caption: "🧠 Random Forest training and evaluation." },
      { src: "/images/mortalidade-dashboard-distribuicao.png", caption: "📊 Mortality dashboard with age and gender filters." },
      { src: "/images/mortalidade-dashboard-metricas.png", caption: "📈 Metrics and performance of the prediction model." },
      { src: "/images/mortalidade-tabela-admissoes.png", caption: "📝 Filtered hospital admissions table." }
    ]
  }
];
