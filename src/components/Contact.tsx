"use client";

import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { copy, emailAddress, type Locale } from "@/lib/i18n";

export default function Contact({ locale }: { locale: Locale }) {
  const t = copy[locale].contact;
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">08 · {t.eyebrow}</p><h2>{t.title}</h2><p>{t.description}</p>
        <a className="contact-email" href={`mailto:${emailAddress}`}>{emailAddress}<FiArrowUpRight/></a>
      </div>
      <aside>
        <p><FiMapPin/>{t.location}</p>
        <nav aria-label="Social">
          <a href="https://www.linkedin.com/in/leo-filho/" target="_blank" rel="noreferrer"><FiLinkedin/>LinkedIn</a>
          <a href="https://github.com/leonardo-filho" target="_blank" rel="noreferrer"><FiGithub/>GitHub</a>
          <a href={`mailto:${emailAddress}`}><FiMail/>{t.email}</a>
        </nav>
        <div className="cv-links"><span>{t.cv}</span><a href="/cv-leonardo-filho-pt.pdf" download>PT-BR</a><a href="/cv-leonardo-filho.pdf" download>EN</a></div>
      </aside>
    </section>
  );
}
