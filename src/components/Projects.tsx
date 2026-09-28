"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { copy, type Locale } from "@/lib/i18n";

export default function Projects({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const t = copy[locale].projects;
  const visible = expanded ? projects : projects.slice(0, 3);
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading split-heading light">
        <div><p className="eyebrow">02 · {t.eyebrow}</p><h2>{t.title}</h2></div><p>{t.description}</p>
      </div>
      <div className="project-grid">
        {visible.map((project, index) => <ProjectCard key={project.id} project={project} locale={locale} index={index} featured={index === 0} />)}
      </div>
      <button className="show-projects" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>{expanded ? t.showLess : t.showAll}<span aria-hidden="true">{expanded ? "↑" : "↓"}</span></button>
    </section>
  );
}
