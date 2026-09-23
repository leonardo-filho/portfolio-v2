import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";
import { projects } from "@/data/projects";
import { copy, localizedPath, type Locale } from "@/lib/i18n";
import ProjectVisual from "@/components/ProjectVisual";

export default function ProjectDetails({ id, locale }: { id: string; locale: Locale }) {
  const project = projects.find((item) => item.id.toString() === id);
  if (!project) notFound();
  const t = copy[locale].projects;
  const root = localizedPath(locale);
  const gallery = project.visual ? project.images : project.images.slice(1);
  return (
    <main id="main-content" className="project-detail">
      <Link href={`${root}#projects`} className="back-link"><FiArrowLeft/>{t.back}</Link>
      <header className="project-detail-header">
        <div><p className="eyebrow">{project.visibility === "internal" ? t.internal : t.study}</p><h1>{project.title[locale]}</h1><p>{project.shortDescription[locale]}</p></div>
        <div className="detail-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </header>
      {project.visual ? <figure className="project-hero-image project-placeholder-figure"><ProjectVisual visual={project.visual} locale={locale} detail/><figcaption>{t.visuals[project.visual].caption}</figcaption></figure>
        : project.images[0] && <figure className="project-hero-image"><Image src={project.images[0].src} alt={project.images[0].caption[locale]} width={1400} height={800} priority/><figcaption>{project.images[0].caption[locale]}</figcaption></figure>}
      {project.visibility === "internal" && <div className="privacy-note"><FiLock/><p>{t.internalNote}</p></div>}
      {project.highlights && <section className="project-highlights" aria-label={locale === "pt-BR" ? "Números do projeto" : "Project highlights"}>
        {project.highlights.map((highlight) => <article key={highlight.label.en}><strong>{highlight.value[locale]}</strong><span>{highlight.label[locale]}</span></article>)}
      </section>}
      <div className="detail-grid">
        <article className="project-prose" dangerouslySetInnerHTML={{ __html: project.longDescription[locale] }} />
        <aside><span>{t.context}</span><p>{project.businessValue[locale]}</p></aside>
      </div>
      {(project.githubUrl || project.liveUrl) && <div className="detail-links">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><FiGithub/>{t.github}</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{t.live}<FiArrowUpRight/></a>}
      </div>}
      {gallery.length > 0 && <section className="gallery"><h2>{t.gallery}</h2><div>{gallery.map((image) => <figure key={image.src}><Image src={image.src} alt={image.caption[locale]} width={900} height={560}/><figcaption>{image.caption[locale]}</figcaption></figure>)}</div></section>}
    </main>
  );
}
