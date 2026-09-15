import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";
import { projects } from "@/data/projects";
import { copy, localizedPath, type Locale } from "@/lib/i18n";
import ProjectVisualPlaceholder from "@/components/ProjectVisualPlaceholder";

export default function ProjectDetails({ id, locale }: { id: string; locale: Locale }) {
  const project = projects.find((item) => item.id.toString() === id);
  if (!project) notFound();
  const t = copy[locale].projects;
  const root = localizedPath(locale);
  return (
    <main id="main-content" className="project-detail">
      <Link href={`${root}#projects`} className="back-link"><FiArrowLeft/>{t.back}</Link>
      <header className="project-detail-header">
        <div><p className="eyebrow">{project.visibility === "internal" ? t.internal : t.study}</p><h1>{project.title[locale]}</h1><p>{project.shortDescription[locale]}</p></div>
        <div className="detail-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </header>
      {project.images[0] && <figure className="project-hero-image"><Image src={project.images[0].src} alt={project.images[0].caption[locale]} width={1400} height={800} priority/><figcaption>{project.images[0].caption[locale]}</figcaption></figure>}
      {!project.images[0] && project.visibility === "internal" && <figure className="project-hero-image project-placeholder-figure"><ProjectVisualPlaceholder projectId={project.id} locale={locale} detail/><figcaption>{t.placeholder.protected}</figcaption></figure>}
      {project.visibility === "internal" && <div className="privacy-note"><FiLock/><p>{t.internalNote}</p></div>}
      <div className="detail-grid">
        <article className="project-prose" dangerouslySetInnerHTML={{ __html: project.longDescription[locale] }} />
        <aside><span>{t.context}</span><p>{project.businessValue[locale]}</p></aside>
      </div>
      {(project.githubUrl || project.liveUrl) && <div className="detail-links">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><FiGithub/>{t.github}</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{t.live}<FiArrowUpRight/></a>}
      </div>}
      {project.images.length > 1 && <section className="gallery"><h2>{t.gallery}</h2><div>{project.images.slice(1).map((image) => <figure key={image.src}><Image src={image.src} alt={image.caption[locale]} width={900} height={560}/><figcaption>{image.caption[locale]}</figcaption></figure>)}</div></section>}
    </main>
  );
}
