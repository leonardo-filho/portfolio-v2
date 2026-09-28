"use client";

import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { copy, emailAddress, localizedPath, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale].hero;
  const root = localizedPath(locale);
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden />
      <div className="hero-main">
        <div className="hero-portrait entrance entrance-1">
          <Image src="/images/leonardo-hero-hd.webp" alt="Leonardo Filho" fill quality={95} sizes="(max-width: 680px) 168px, (max-width: 900px) 160px, 260px" priority />
          <span className="portrait-index">01</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow entrance entrance-2">{t.eyebrow}</p>
          <h1 className="entrance entrance-3">
            {t.title[0]}<br/><em>{t.title[1]}</em>
          </h1>
          <p className="hero-description entrance entrance-4">{t.description}</p>
          <div className="hero-actions entrance entrance-4">
            <a className="button button-primary" href={`mailto:${emailAddress}?subject=${encodeURIComponent(t.inquirySubject)}`}>{t.contactAction}<FiArrowUpRight aria-hidden="true" /></a>
            <a className="button button-outline" href={`${root}#projects`}>{t.projects}<FiArrowDownRight aria-hidden="true" /></a>
          </div>
          <a className="hero-download-link" href={copy[locale].portfolioFile} download><FiDownload aria-hidden="true" />{copy[locale].downloadPortfolio} PDF</a>
          <p className="hero-location"><FiMapPin /> {t.location}</p>
        </div>
      </div>
    </section>
  );
}
