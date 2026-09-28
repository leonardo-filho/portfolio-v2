"use client";

import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { copy, emailAddress, localizedPath, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale].hero;
  const root = localizedPath(locale);
  return (
    <section id="home" className="hero-section">
      <div className="hero-main">
        <div className="hero-copy">
          <div className="hero-overline entrance entrance-1"><span>01 / LF</span><span className="hero-overline-rule" aria-hidden="true" /><p className="eyebrow">{t.eyebrow}</p></div>
          <h1 className="entrance entrance-2">
            <span>{t.title[0]}</span><span className="hero-title-accent">{t.title[1]}</span>
          </h1>
          <p className="hero-description entrance entrance-3">{t.description}</p>
          <div className="hero-actions entrance entrance-4">
            <a className="button button-primary" href={`mailto:${emailAddress}?subject=${encodeURIComponent(t.inquirySubject)}`}>{t.contactAction}<FiArrowUpRight aria-hidden="true" /></a>
            <a className="button button-outline" href={`${root}#projects`}>{t.projects}<FiArrowDownRight aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote entrance entrance-4">
            <p className="hero-location"><FiMapPin aria-hidden="true" /> {t.location}</p>
            <a className="hero-download-link" href={copy[locale].portfolioFile} download><FiDownload aria-hidden="true" />{copy[locale].downloadPortfolio} PDF</a>
          </div>
        </div>
        <div className="hero-portrait entrance entrance-3">
          <Image src="/images/leonardo-hero-hd.webp" alt="Leonardo Filho" fill quality={95} sizes="(max-width: 680px) 260px, (max-width: 1100px) 270px, 300px" priority />
          <span className="portrait-index">LF / 01</span>
        </div>
      </div>
      <div className="hero-side-caption" aria-hidden="true">{copy[locale].role}</div>
    </section>
  );
}
