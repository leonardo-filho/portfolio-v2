"use client";

import { useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { certifications, resumeByLocale } from "@/data/resume";
import { copy, type Locale } from "@/lib/i18n";

export default function Credentials({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const t = copy[locale].credentials;
  const profile = resumeByLocale[locale];
  const visibleCerts = expanded ? certifications : certifications.slice(0, 3);
  return (
    <section id="credentials" className="section credentials-section">
      <div className="section-heading split-heading light"><div><p className="eyebrow">04 · {t.eyebrow}</p><h2>{t.title}</h2></div><p>{t.description}</p></div>
      <div className="credential-layout">
        <div className="academic-column">
          <h3>{t.education}</h3>
          {profile.education.map((item) => <article key={item.degree}><span>{item.period}</span><h4>{item.degree}</h4><p>{item.school}</p></article>)}
          <h3 className="language-title">{t.languages}</h3>
          <ul className="languages">{profile.languages.map((language) => <li key={language.name}><span>{language.name}</span><strong>{language.level}</strong></li>)}</ul>
        </div>
        <div className="cert-column">
          <h3>{t.certifications}</h3>
          <div className="cert-grid">
            {visibleCerts.map((cert, index) => <article key={cert.name} className={cert.featured ? "featured-cert" : ""}>
              <div className="cert-top"><span>{t.types[cert.type]} · {cert.year}</span>{index === 0 && <b>{t.latest}</b>}</div>
              <h4>{cert.name}</h4><p>{cert.issuer}</p>
              {cert.url ? <a href={cert.url} target="_blank" rel="noreferrer">{t.verify}<FiArrowUpRight/></a> : cert.credentialId ? <small>ID {cert.credentialId}</small> : null}
            </article>)}
          </div>
          {!expanded && <button className="expand-button" onClick={() => setExpanded(true)}>{t.more}<FiChevronDown/></button>}
        </div>
      </div>
    </section>
  );
}
