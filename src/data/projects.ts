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
    title: "⭐ Projeto Final – Google Advanced Data Analytics",
    shortDescription: "Pipeline de ponta a ponta: Análise, Machine Learning, API na nuvem (GCP) e dashboard interativo em React.",
    longDescription: `<p class="leading-relaxed">Este projeto, parte do programa Google Advanced Data Analytics, teve como desafio prever a evasão de funcionários (churn) em um ambiente de Recursos Humanos. O objetivo foi desenvolver uma solução completa, da análise inicial até a entrega de uma ferramenta interativa, utilizando um dataset público disponibilizado pelo Google.</p><p class="mt-4 font-semibold">A solução abrangeu todas as etapas de um pipeline de dados moderno:</p><ul class="list-disc pl-6 space-y-1"><li><b>Análise Exploratória de Dados (EDA):</b> visualizações para identificar padrões relacionados à satisfação, carga horária, número de projetos e remuneração.</li><li><b>Modelo de Machine Learning:</b> construção e avaliação de um modelo preditivo para estimar a probabilidade de evasão com alta precisão.</li><li><b>API em Nuvem:</b> desenvolvimento de uma API em FastAPI, hospedada no Google Cloud Run, para servir previsões em tempo real.</li><li><b>Dashboard Interativo:</b> interface em React + Vite + Tailwind para explorar dados e simular cenários de retenção.</li><li><b>Documentação Estratégica:</b> relatórios PACE Strategy e Executive Summary descrevendo processo, resultados e valor de negócio.</li></ul><p class="mt-4">✨ <b>Resultado:</b> pipeline de ponta a ponta em produção:<br/><span>Dados → Modelo → API (GCP) → Interface Web.</span></p><p class="mt-4 font-semibold">🔗 Links do Projeto:</p><ul class="list-none pl-0 space-y-1"><li><a href="https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard" target="_blank" rel="noopener noreferrer">Aplicação online</a></li><li><a href="https://salifort-hr-api-534fnyfc3a-uc.a.run.app/docs" target="_blank" rel="noopener noreferrer">API em produção</a></li><li><a href="https://github.com/leonardo-filho/salifort-hr-churn" target="_blank" rel="noopener noreferrer">Repositório no GitHub</a></li></ul>`,
    technologies: ["Data Science", "Machine Learning", "GCP", "FastAPI", "React", "Python", "Vite", "Tailwind", "Data Engineering"],
    githubUrl: "https://github.com/leonardo-filho/salifort-hr-churn",
    liveUrl: "https://leonardo-filho.github.io/salifort-hr-churn/#/dashboard",
    images: [
      { src: "/images/churn-dashboard-main.png", caption: "📊 Dashboard principal com KPIs de Churn Rate, horas médias e projetos." },
      { src: "/images/churn-prediction-ui.png", caption: "🤖 Interface de previsão interativa para simular a probabilidade de rotatividade de um funcionário." },
      { src: "/images/churn-eda-charts.png", caption: "📈 Gráficos da Análise Exploratória (EDA) mostrando a relação entre evasão, satisfação e carga horária." },
      { src: "/images/churn-architecture.png", caption: "🏗️ Arquitetura do projeto, do tratamento dos dados ao deploy do frontend em React." },
      { src: "/images/churn-api-docs.png", caption: "🔌 Documentação da API (FastAPI) com os endpoints para análise e previsão." },
      { src: "/images/churn-github-repo.png", caption: "📁 Repositório no GitHub com a estrutura de backend, frontend e o notebook de análise." }
    ]
  },
  {
    id: 1,
    title: "Dashboard Comercial com Power BI",
    shortDescription: "Dashboard completo de análise de vendas com foco em insights visuais e decisão estratégica.",
    longDescription: `<p class="leading-relaxed">Este projeto consiste em um <b>dashboard interativo em Power BI</b> para análise de vendas comerciais, com foco em <b>insights visuais</b> e apoio à <b>decisão estratégica</b>.</p><p class="mt-4 font-semibold">📌 Recursos do dashboard:</p><ul class="list-disc pl-6 space-y-1"><li>KPI de vendas por categoria e fabricante.</li><li>Análise dos principais influenciadores de vendas.</li><li>Análise geográfica da performance de vendedores.</li><li>Storytelling de destaque para insights estratégicos.</li><li>Navegação organizada por índice temático.</li></ul><p class="mt-4">Foram utilizados gráficos <b>Sankey</b>, <b>pie charts</b>, histogramas e mapas geográficos para transformar dados brutos em visualizações claras e orientadas à decisão.</p><p class="mt-4">✨ <b>Objetivo:</b> fornecer uma plataforma visual de apoio à tomada de decisão comercial estratégica.</p>`,
    technologies: ["Power BI", "DAX", "Storytelling", "Modelagem de Dados", "Geovisualização"],
    images: [
      { src: "/images/dashboard-pbi-indice.png", caption: "🧭 Índice navegável e organizado por temas de análise." },
      { src: "/images/dashboard-pbi-narrativa.png", caption: "📖 Narrativa inteligente destacando fabricantes líderes e insights de mercado." },
      { src: "/images/dashboard-pbi-influenciadores.png", caption: "🎯 Gráfico de influenciadores apontando variáveis que impactam as vendas." },
      { src: "/images/dashboard-pbi-categoria-loja.png", caption: "🛒 Gráfico Sankey demonstrando a relação entre categorias de produto e lojas." },
      { src: "/images/dashboard-pbi-mapa.png", caption: "🗺️ Mapa interativo exibindo performance de vendas por estado e vendedor." }
    ]
  },
  {
    id: 2,
    title: "Detecção de Anomalias em Transações Ethereum",
    shortDescription: "Machine Learning para identificar comportamentos suspeitos em dados da blockchain Ethereum.",
    longDescription: `<p class="leading-relaxed">Este projeto aplica <b>Machine Learning</b> para identificar <b>comportamentos suspeitos</b> em transações da <b>blockchain Ethereum</b>.</p><p class="mt-4 font-semibold">📌 Metodologia:</p><ul class="list-disc pl-6 space-y-1"><li><b>EDA:</b> análise exploratória para entender padrões e outliers.</li><li><b>Algoritmos não supervisionados:</b> Isolation Forest e DBSCAN para detecção de anomalias.</li><li><b>Baseline:</b> threshold manual para comparação com modelos.</li><li><b>Avaliação:</b> métricas de recall, acurácia e taxa de falsos positivos.</li></ul><p class="mt-4 font-semibold">📊 Principais resultados:</p><ul class="list-disc pl-6 space-y-1"><li><b>Isolation Forest:</b> recall de 97% para fraudes e acurácia de 97%.</li><li><b>Baseline:</b> 100% de precisão, mas recall de 81%.</li><li><b>DBSCAN:</b> recall baixo (5%) e alta taxa de falsos positivos.</li></ul><p class="mt-4">✨ <b>Aplicações:</b> compliance, auditoria, cibersegurança e prevenção à lavagem de dinheiro, mostrando a relevância da modelagem para o setor financeiro descentralizado.</p>`,
    technologies: ["Python", "EDA", "Machine Learning", "Isolation Forest", "DBSCAN", "Visualização de Dados", "Blockchain", "Compliance"],
    images: [
      { src: "/images/anomalias-corr.png", caption: "🔍 Heatmap de correlação entre variáveis relevantes das transações" },
      { src: "/images/anomalias-sent-dist.png", caption: "📊 Distribuição da variável 'Sent tnx' revela comportamento assimétrico e outliers" },
      { src: "/images/anomalias-erc20-boxplot.png", caption: "📦 Boxplot evidencia valores extremos em transações com tokens ERC20" },
      { src: "/images/anomalias-threshold.png", caption: "🚩 Aplicação de threshold manual como baseline para flag de anomalias" },
      { src: "/images/anomalias-matriz-baseline.png", caption: "📈 Matriz de confusão para avaliação do método baseline" },
      { src: "/images/anomalias-isolation-scatter.png", caption: "🌲 Detecção de anomalias com Isolation Forest: pontos vermelhos indicam suspeitas" },
      { src: "/images/anomalias-matriz-isolation.png", caption: "📊 Avaliação do Isolation Forest com alta acurácia e recall para fraudes" },
      { src: "/images/anomalias-dbscan-scatter.png", caption: "🧬 DBSCAN aplicando clusterização para detectar transações fora do padrão" },
      { src: "/images/anomalias-matriz-dbscan.png", caption: "⚠️ DBSCAN apresenta recall baixo e alta taxa de falsos positivos" }
    ]
  },
  {
    id: 3,
    title: "Dashboard de Previsão de Mortalidade Hospitalar",
    shortDescription: "Dashboard com análise exploratória e previsão de mortalidade hospitalar utilizando Random Forest.",
    longDescription: `<p class="leading-relaxed">Este projeto consiste em um <b>dashboard interativo desenvolvido com Streamlit</b>, para análise exploratória e <b>previsão de mortalidade hospitalar</b> a partir de dados reais de internações e óbitos.</p><p class="mt-4 font-semibold">📌 Abordagem:</p><ul class="list-disc pl-6 space-y-1"><li>Análise estatística de variáveis como idade, gênero, tempo de internação, poluentes e índice AQI.</li><li>Treinamento de modelo <b>Random Forest</b> para previsão de mortalidade, alcançando acurácia de 99%.</li><li>Interface interativa para filtragem dinâmica e visualização dos resultados.</li></ul><p class="mt-4 font-semibold">📊 Visualizações disponíveis:</p><ul class="list-disc pl-6 space-y-1"><li>Gráficos de barras, boxplots e distribuições.</li><li>Mapas de calor para correlação entre poluentes.</li><li>Métricas de performance do modelo.</li></ul><p class="mt-4">✨ <b>Conclusão:</b> a combinação entre variáveis ambientais, demográficas e clínicas se mostrou relevante para a análise de mortalidade hospitalar. O modelo Random Forest teve desempenho excelente, evidenciando o potencial do <b>Machine Learning</b> em contextos hospitalares.</p>`,
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib", "Random Forest", "Ciência de Dados"],
    images: [
      { src: "/images/mortalidade-area-boxplot.png", caption: "📦 Mortalidade (MRD) por tipo de área" },
      { src: "/images/mortalidade-distribuicao-idade.png", caption: "📊 Distribuição de idade dos pacientes de mortalidade" },
      { src: "/images/mortalidade-correlacao-poluentes.png", caption: "🔬 Matriz de correlação entre poluentes atmosféricos" },
      { src: "/images/mortalidade-distribuicao-aqi.png", caption: "🌫️ Distribuição do índice de qualidade do ar (AQI)" },
      { src: "/images/mortalidade-pm25-aqi-scatter.png", caption: "📈 Relação entre PM2.5 e AQI" },
      { src: "/images/mortalidade-tempmax-pm25.png", caption: "🌡️ Relação entre temperatura máxima e PM2.5" },
      { src: "/images/mortalidade-rf-treino-avaliacao.png", caption: "🧠 Treinamento e avaliação do modelo Random Forest" },
      { src: "/images/mortalidade-dashboard-distribuicao.png", caption: "📊 Dashboard de mortalidade com filtros por idade e gênero" },
      { src: "/images/mortalidade-dashboard-metricas.png", caption: "📈 Métricas e desempenho do modelo de previsão" },
      { src: "/images/mortalidade-tabela-admissoes.png", caption: "📝 Tabela de admissões hospitalares filtradas" }
    ]
  }
];