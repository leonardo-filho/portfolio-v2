"use client";

import { FiCheck } from "react-icons/fi";
import { copy, type Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const t = copy[locale].about;
  return (
    <section id="about" className="section about-section">
      <div className="about-image photo-placeholder photo-placeholder-light" role="img" aria-label="Placeholder para a Foto 2">
        <span className="photo-placeholder-label">Foto 2</span>
        <span className="portrait-index">02</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow dark">07 · {t.eyebrow}</p><h2>{t.title}</h2>
        {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <ul>{t.principles.map((principle) => <li key={principle}><FiCheck/><span>{principle}</span></li>)}</ul>
      </div>
    </section>
  );
}
