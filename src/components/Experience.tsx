"use client";

import { resumeByLocale } from "@/data/resume";
import { copy, type Locale } from "@/lib/i18n";

export default function Experience({ locale }: { locale: Locale }) {
  const t = copy[locale].experience;
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading split-heading"><div><p className="eyebrow dark">02 · {t.eyebrow}</p><h2>{t.title}</h2></div><p>{t.description}</p></div>
      <div className="timeline">
        {resumeByLocale[locale].experiences.map((job, index) => <article key={`${job.company}-${job.period}`}>
          <div className="timeline-meta"><span>0{index + 1}</span><time>{job.period}</time><p>{job.location}</p></div>
          <div className="timeline-content"><h3>{job.role}</h3><h4>{job.company}</h4><p className="timeline-summary">{job.highlights[0]}</p><details><summary>{t.details}</summary><ul>{job.highlights.slice(1).map((item) => <li key={item}>{item}</li>)}</ul><div className="tech-list">{job.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></details></div>
        </article>)}
      </div>
    </section>
  );
}
