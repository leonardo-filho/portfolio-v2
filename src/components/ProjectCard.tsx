"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { copy, localizedPath, type Locale } from "@/lib/i18n";

export default function ProjectCard({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  const t = copy[locale].projects;
  const href = localizedPath(locale, `/projects/${project.id}`);
  return (
    <article className={`project-card ${index === 0 ? "project-featured" : ""}`}>
      <Link href={href}>
        <div className="project-visual">
          {project.images[0] ? <Image src={project.images[0].src} alt={project.images[0].caption[locale]} width={1200} height={675} sizes="(max-width: 768px) 100vw, 50vw" /> : <div className="internal-visual"><span>LF / 0{project.id}</span><div className="data-lines"><i/><i/><i/><i/></div></div>}
          <span className="project-type">{project.visibility === "internal" ? <><FiLock/>{t.internal}</> : t.study}</span>
        </div>
        <div className="project-body">
          <div><span className="project-index">0{index + 1}</span><h3>{project.title[locale]}</h3><p>{project.shortDescription[locale]}</p></div>
          <div className="project-tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <span className="project-link">{t.view}<FiArrowUpRight/></span>
        </div>
      </Link>
    </article>
  );
}
