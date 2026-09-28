import { projects } from "@/data/projects";
import { copy, emailAddress, siteUrl, type Locale } from "@/lib/i18n";

export default function PortfolioDocument({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";
  const selected = projects.slice(0, 3);

  return (
    <main id="main-content" className="portfolio-document" lang={locale}>
      <div className="document-topline"><span>LF / {isEnglish ? "Portfolio" : "Portfólio"}</span><span>{isEnglish ? "Data engineering + analytics" : "Engenharia de dados + analytics"}</span></div>
      <header className="document-heading">
        <div>
          <p>{isEnglish ? "Selected work" : "Projetos selecionados"}</p>
          <h1>Leonardo<br /><em>Filho.</em></h1>
        </div>
        <div className="document-intro">
          <strong>{copy[locale].role}</strong>
          <p>{copy[locale].hero.description}</p>
          <span>{isEnglish ? "Belém, Brazil" : "Belém, Brasil"}</span>
        </div>
      </header>
      <section className="document-projects" aria-label={isEnglish ? "Selected projects" : "Projetos selecionados"}>
        {selected.map((project, index) => (
          <article className="document-project" key={project.id}>
            <div className="document-project-number">0{index + 1}</div>
            <div className="document-project-main">
              <div className="document-project-title"><h2>{project.title[locale].replace(/\s*\u2014\s*/g, ": ")}</h2><span>{project.visibility === "internal" ? (isEnglish ? "Internal product" : "Produto interno") : (isEnglish ? "Public project" : "Projeto público")}</span></div>
              <p>{project.shortDescription[locale]}</p>
              <p className="document-value">{project.businessValue[locale]}</p>
              <div className="document-project-footer">
                <div>{project.highlights?.slice(0, 2).map((highlight) => <span key={highlight.label[locale]}><strong>{highlight.value[locale]}</strong>{highlight.label[locale]}</span>)}</div>
                <a href={`${siteUrl}${isEnglish ? "/en" : ""}/projects/${project.id}`}>{isEnglish ? "Full case study" : "Ver projeto completo"} ↗</a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <footer className="document-footer"><div><strong>{isEnglish ? "Let's talk." : "Vamos conversar."}</strong><a href={`mailto:${emailAddress}`}>{emailAddress}</a></div><div><span>{siteUrl.replace("https://", "")}</span><span>LinkedIn: leo-filho</span></div></footer>
    </main>
  );
}
