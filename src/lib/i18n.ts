export type Locale = "pt-BR" | "en";

export const siteUrl = "https://leonardofilho.com.br";
export const emailAddress = "leonardofilho.work@gmail.com";

export function localizedPath(locale: Locale, path = "/") {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const path = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localizedPath(locale, path);
}

export const copy = {
  "pt-BR": {
    skip: "Pular para o conteúdo",
    role: "Especialista em Engenharia de Dados",
    navigation: "Navegação principal", openMenu: "Abrir menu", closeMenu: "Fechar menu",
    language: "Versão em inglês", languageHint: "Mudar para inglês",
    downloadCv: "Baixar currículo", cvFile: "/cv-leonardo-filho-pt.pdf",
    nav: { capabilities: "Soluções", projects: "Projetos", experience: "Trajetória", credentials: "Formação", about: "Sobre", contact: "Contato" },
    hero: {
      eyebrow: "Leonardo Filho · Engenharia de dados & Analytics",
      title: ["Dados confiáveis.", "Decisões melhores."],
      description: "Ajudo empresas a reduzir retrabalho e enxergar o que precisa de ação. Integro sistemas, automatizo conferências e entrego indicadores confiáveis.",
      projects: "Ver projetos", capabilities: "Como contribuo para o negócio", contactAction: "Falar sobre um projeto", inquirySubject: "Projeto de dados para minha empresa",
      location: "Belém, Brasil · UTC−3",
      steps: [
        { title: "Integrar", description: "Sistemas que conversam" },
        { title: "Conferir", description: "Números com rastreabilidade" },
        { title: "Automatizar", description: "Menos tarefas repetitivas" },
        { title: "Decidir", description: "Indicadores com contexto" },
      ],
    },
    capabilities: {
      eyebrow: "Para sua empresa", title: "Onde posso gerar resultado",
      description: "Trabalho por projeto em problemas que custam tempo, criam dúvidas sobre os números ou atrasam decisões.",
      caseLabel: "Ver um exemplo", invite: "Tem um processo lento ou um indicador em que ninguém confia? Conte o contexto e vamos avaliar um projeto.",
      items: [
        { problem: "Dados espalhados", title: "Números que batem", description: "Integro ERP, APIs e planilhas, valido as cargas e sinalizo atrasos. Sua equipe trabalha com uma base rastreável, sem conciliar versões a cada reunião.", projectId: 5 },
        { problem: "Rotinas manuais", title: "Menos tempo conferindo", description: "Transformo regras em verificações automáticas, com revisão humana e alertas por responsável. A equipe passa a focar nas exceções que exigem ação.", projectId: 6 },
        { problem: "Decisões no escuro", title: "Gestão com visão clara", description: "Construo painéis que ligam financeiro e operação às perguntas do negócio. Gestores enxergam variações, prioridades e o estado dos dados.", projectId: 5 },
      ],
    },
    updates: {
      eyebrow: "Evolução contínua", title: "Atualizações recentes", asOf: "Setembro de 2026",
      items: [
        { date: "Set. 2026", dateTime: "2026-09", title: "Especialista em Engenharia de Dados", text: "Nova etapa na Quadra Engenharia, com atuação em arquitetura de dados, confiabilidade e produtos analíticos." },
        { date: "10 set. 2026", dateTime: "2026-09-10", title: "Especialização em dados no Google Cloud", text: "Conclusão de Data Engineering, Big Data, and Machine Learning on GCP, reunindo data warehouses, pipelines batch, streaming e analytics." },
        { date: "Ago. 2026", dateTime: "2026-08", title: "Formação em pipelines, IA e forecasting", text: "Novos cursos de batch e streaming no Google Cloud, séries temporais com Vertex AI e AI Driven Data Engineering, da Dagster University." },
      ],
      more: "Ver formação e credenciais",
    },
    projects: {
      eyebrow: "Trabalho aplicado", title: "Projetos selecionados", description: "Produtos internos e estudos de portfólio: o problema, a implementação e o que muda para o negócio.",
      filters: { all: "Todos", engineering: "Engenharia de dados", ml: "Machine learning", bi: "BI & Analytics" },
      showAll: "Ver todos os projetos", showLess: "Mostrar projetos selecionados",
      filterLabel: "Filtrar projetos por área", view: "Conhecer o projeto", back: "Todos os projetos",
      internal: "Produto interno", study: "Estudo de portfólio", context: "Aplicação no negócio",
      internalNote: "Projeto desenvolvido na Quadra Engenharia. Visão geral do trabalho, com código e dados internos preservados.",
      visuals: {
        platform: { code: "Q1 / 05", tag: "Dados ilustrativos", label: "Reprodução da plataforma executiva com dados ilustrativos", caption: "Reprodução com dados ilustrativos. A estrutura das telas é a real; os números não saem da operação.", nav: ["Indicadores", "Saldos", "Inadimplência", "Auditorias", "Saúde dos dados"], kpis: [["Receita 12m", "+8,4%"], ["Em atraso", "2,1%"], ["Fontes em dia", "50/53"]], chart: "Receita mensal × crescimento", aging: "Atraso por faixa" },
        audit: { code: "AUDIT / 06", tag: "Fluxo real · sem dados internos", label: "Fluxo diário do robô de auditoria de contas a pagar", caption: "Fluxo diário do robô, do ERP ao e-mail do responsável, e o funil de uma janela de 30 dias.", steps: [["10:30", "ERP → BigQuery"], ["14:20", "14 regras"], ["Revisão", "humana"], ["E-mail", "por responsável"], ["06:00", "reconferência"]], funnel: [["1.972", "parcelas lançadas"], ["833", "conferidas"], ["375", "com erro"]], funnelTitle: "Funil de 30 dias em 6 obras" },
        anomaly: { code: "ETH / 02", tag: "Resultado do estudo", label: "Comparação de recall e precisão entre Isolation Forest, baseline e DBSCAN", caption: "Recall e precisão de cada método sobre as 144 fraudes do conjunto de teste.", recall: "Recall", precision: "Precisão", footnote: "144 fraudes no conjunto de teste" },
      },
      github: "Repositório", live: "Ver aplicação", gallery: "Galeria", count: "projetos",
      notFound: "Projeto não encontrado", notFoundText: "O endereço pode ter mudado. Explore os projetos disponíveis no portfólio.", home: "Voltar ao início",
    },
    experience: { eyebrow: "Trajetória", title: "Experiência que conecta tecnologia e operação", description: "Da qualidade de software à construção de produtos de dados usados no dia a dia.", details: "Ver mais sobre esta experiência" },
    credentials: {
      eyebrow: "Formação & aprendizado", title: "Conhecimento em evolução", description: "Formação acadêmica, especializações, cursos e badges que complementam minha prática.",
      education: "Formação acadêmica", languages: "Idiomas", certifications: "Cursos e credenciais", latest: "Mais recente",
      verify: "Ver credencial", more: "Ver outras credenciais", skills: "Ferramentas e práticas",
      cloud: "Cloud & engenharia de dados", analytics: "Analytics, ML & BI",
      types: { specialization: "Especialização", course: "Curso", badge: "Skill badge", certificate: "Certificado profissional" },
    },
    about: {
      eyebrow: "Sobre mim", title: "A engenharia começa pelo problema.",
      paragraphs: [
        "Sou Leonardo Filho, engenheiro de computação pelo CESUPA, com MBA em Inteligência Artificial, Ciência de Dados e Big Data pela PUCRS. Atuo como Especialista em Engenharia de Dados na Quadra Engenharia, em Belém.",
        "Meu trabalho aproxima tecnologia e operação: entender como um número é produzido, transformar a regra em código e entregar uma informação que faça sentido para quem vai usá-la.",
      ],
      principles: ["Conferir a origem antes de apresentar o número.", "Documentar regras, exceções e decisões.", "Dar visibilidade às falhas e ao estado dos dados.", "Construir soluções que possam ser mantidas."],
    },
    contact: { eyebrow: "Contato", title: "Seu próximo projeto começa por uma conversa.", description: "Se relatórios não batem, conferências consomem horas ou falta clareza para decidir, me conte o contexto. Podemos definir um projeto com escopo claro.", email: "Enviar e-mail", cv: "Currículo", cvPT: "Currículo em português (PDF)", cvEN: "Currículo em inglês (PDF)", location: "Belém, Pará · Brasil · UTC−3" },
    footer: "Engenharia de dados com contexto de negócio.",
    meta: { title: "Leonardo Filho | Engenharia de Dados para Negócios", description: "Projetos de integração de dados, automação e analytics para reduzir retrabalho, confiar nos números e decidir com clareza." },
  },
  en: {
    skip: "Skip to content",
    role: "Data Engineering Specialist",
    navigation: "Primary navigation", openMenu: "Open menu", closeMenu: "Close menu",
    language: "English version", languageHint: "Switch to Brazilian Portuguese",
    downloadCv: "Download resume", cvFile: "/cv-leonardo-filho.pdf",
    nav: { capabilities: "Solutions", projects: "Projects", experience: "Experience", credentials: "Credentials", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Leonardo Filho · Data Engineering & Analytics",
      title: ["Reliable data.", "Better decisions."],
      description: "I help companies cut manual work and see what needs attention. I connect systems, automate checks and deliver reliable metrics.",
      projects: "View projects", capabilities: "How I contribute to your business", contactAction: "Discuss a project", inquirySubject: "Data project for my company",
      location: "Belém, Brazil · UTC−3",
      steps: [
        { title: "Integrate", description: "Connected business systems" },
        { title: "Validate", description: "Traceable numbers" },
        { title: "Automate", description: "Fewer repetitive tasks" },
        { title: "Decide", description: "Metrics with context" },
      ],
    },
    capabilities: {
      eyebrow: "For your business", title: "Where I can make a difference",
      description: "I work on projects where slow processes, unreliable numbers or limited visibility hold teams back.",
      caseLabel: "See an example", invite: "Have a slow process or a metric nobody trusts? Share the context and let's explore a project.",
      items: [
        { problem: "Scattered data", title: "Numbers you can trust", description: "I connect ERPs, APIs and spreadsheets, validate data loads and flag delays. Teams work from traceable numbers instead of reconciling versions before every meeting.", projectId: 5 },
        { problem: "Manual workflows", title: "Less time spent checking", description: "I turn rules into automated checks with human review and alerts for each owner. Teams can focus on exceptions that require action.", projectId: 6 },
        { problem: "Limited visibility", title: "A clearer view for leaders", description: "I build dashboards that connect finance and operations to business questions. Leaders can see changes, priorities and data health.", projectId: 5 },
      ],
    },
    updates: {
      eyebrow: "Continuous development", title: "Recent updates", asOf: "September 2026",
      items: [
        { date: "Sep 2026", dateTime: "2026-09", title: "Data Engineering Specialist", text: "A new chapter at Quadra Engenharia, working on data architecture, reliability and analytics products." },
        { date: "Sep 10, 2026", dateTime: "2026-09-10", title: "Google Cloud data specialization", text: "Completed Data Engineering, Big Data, and Machine Learning on GCP, covering data warehouses, batch pipelines, streaming and analytics." },
        { date: "Aug 2026", dateTime: "2026-08", title: "Pipelines, AI and forecasting coursework", text: "Completed Google Cloud batch and streaming courses, time series with Vertex AI, and AI Driven Data Engineering from Dagster University." },
      ],
      more: "Explore education and credentials",
    },
    projects: {
      eyebrow: "Applied work", title: "Selected projects", description: "Internal products and portfolio studies: the problem, the implementation and the business application.",
      filters: { all: "All", engineering: "Data engineering", ml: "Machine learning", bi: "BI & Analytics" },
      showAll: "View all projects", showLess: "Show selected projects",
      filterLabel: "Filter projects by discipline", view: "Explore project", back: "All projects",
      internal: "Internal product", study: "Portfolio study", context: "Business application",
      internalNote: "Developed at Quadra Engenharia. This overview describes the work while keeping internal code and data private.",
      visuals: {
        platform: { code: "Q1 / 05", tag: "Illustrative data", label: "Recreation of the executive platform with illustrative data", caption: "Recreated with illustrative data. The screen structure is real; the numbers do not come from operations.", nav: ["Metrics", "Balances", "Delinquency", "Audits", "Data health"], kpis: [["Revenue 12m", "+8.4%"], ["Overdue", "2.1%"], ["Fresh sources", "50/53"]], chart: "Monthly revenue × growth", aging: "Overdue by bucket" },
        audit: { code: "AUDIT / 06", tag: "Real flow · no internal data", label: "Daily flow of the accounts payable audit bot", caption: "The bot's daily flow, from the ERP to the owner's inbox, and the funnel of a 30-day window.", steps: [["10:30", "ERP → BigQuery"], ["14:20", "14 rules"], ["Human", "review"], ["Email", "per owner"], ["06:00", "recheck"]], funnel: [["1,972", "installments posted"], ["833", "checked"], ["375", "with errors"]], funnelTitle: "30-day funnel across 6 sites" },
        anomaly: { code: "ETH / 02", tag: "Study result", label: "Recall and precision compared across Isolation Forest, baseline and DBSCAN", caption: "Recall and precision of each method on the 144 frauds in the test set.", recall: "Recall", precision: "Precision", footnote: "144 frauds in the test set" },
      },
      github: "Repository", live: "View application", gallery: "Gallery", count: "projects",
      notFound: "Project not found", notFoundText: "This address may have changed. Explore the available projects in the portfolio.", home: "Back to home",
    },
    experience: { eyebrow: "Career", title: "Connecting technology and operations", description: "From software quality to data products used in everyday business operations.", details: "Read more about this role" },
    credentials: {
      eyebrow: "Education & learning", title: "Building on what I know", description: "Degrees, specializations, courses and badges that complement my hands-on work.",
      education: "Education", languages: "Languages", certifications: "Courses and credentials", latest: "Latest",
      verify: "View credential", more: "View more credentials", skills: "Tools and practices",
      cloud: "Cloud & data engineering", analytics: "Analytics, ML & BI",
      types: { specialization: "Specialization", course: "Course", badge: "Skill badge", certificate: "Professional certificate" },
    },
    about: {
      eyebrow: "About me", title: "Engineering starts with the problem.",
      paragraphs: [
        "I'm Leonardo Filho, a Computer Engineering graduate from CESUPA with an MBA in Artificial Intelligence, Data Science and Big Data from PUCRS. I work as a Data Engineering Specialist at Quadra Engenharia in Belém, Brazil.",
        "My work connects technology and operations: understanding how a number is produced, turning the business rule into code and delivering information that makes sense to the people using it.",
      ],
      principles: ["Validate the source before presenting the number.", "Document rules, exceptions and decisions.", "Make failures and data freshness visible.", "Build solutions that can be maintained."],
    },
    contact: { eyebrow: "Contact", title: "Your next project starts with a conversation.", description: "If reports disagree, checks take hours or decisions lack clear information, tell me the context. We can define a project with a clear scope.", email: "Send an email", cv: "Resume", cvPT: "Resume in Portuguese (PDF)", cvEN: "Resume in English (PDF)", location: "Belém, Pará · Brazil · UTC−3" },
    footer: "Data engineering with business context.",
    meta: { title: "Leonardo Filho | Data Engineering for Business", description: "Data integration, automation and analytics projects to cut manual work, trust the numbers and make clear decisions." },
  },
};
