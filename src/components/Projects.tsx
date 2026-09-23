"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { copy, type Locale } from "@/lib/i18n";

type Filter = "all" | "engineering" | "ml" | "bi";

export default function Projects({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const t = copy[locale].projects;
  const filters = Object.entries(t.filters) as [Filter, string][];
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading split-heading light">
        <div><p className="eyebrow">04 · {t.eyebrow}</p><h2>{t.title}</h2></div><p>{t.description}</p>
      </div>
      <div className="project-toolbar" role="group" aria-label={t.filterLabel}>
        <div>{filters.map(([key, label]) => <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)} aria-pressed={filter === key}>{label}</button>)}</div>
        <span>{visible.length} {t.count}</span>
      </div>
      <div className="project-grid">
        {visible.map((project, index) => <ProjectCard key={project.id} project={project} locale={locale} index={index} featured={index === 0 && visible.length % 2 === 1} />)}
      </div>
    </section>
  );
}
