"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { copy, type Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const t = copy[locale].about;
  return (
    <section id="about" className="section about-section">
      <div className="about-image"><Image src="/images/leonardo-filho.webp" alt="Leonardo Filho" width={720} height={900} sizes="(max-width: 768px) 100vw, 42vw" /></div>
      <div className="about-copy">
        <p className="eyebrow dark">07 · {t.eyebrow}</p><h2>{t.title}</h2>
        {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <ul>{t.principles.map((principle) => <li key={principle}><FiCheck/><span>{principle}</span></li>)}</ul>
      </div>
    </section>
  );
}
