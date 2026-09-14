"use client";

import { FiArrowDownRight, FiCheckCircle, FiDatabase, FiRepeat, FiTrendingUp, FiActivity } from "react-icons/fi";
import { copy, type Locale } from "@/lib/i18n";

const icons = [FiDatabase, FiRepeat, FiTrendingUp, FiActivity];

export default function Services({ locale }: { locale: Locale }) {
  const t = copy[locale].capabilities;
  return (
    <section id="capabilities" className="section section-warm">
      <div className="section-heading split-heading">
        <div><p className="eyebrow dark">02 · {t.eyebrow}</p><h2>{t.title}</h2></div>
        <p>{t.description}</p>
      </div>
      <div className="capability-list">
        {t.items.map((item, index) => {
          const Icon = icons[index];
          return <article key={item.title} className="capability-card">
            <div className="capability-number">0{index + 1}</div>
            <Icon className="capability-icon" aria-hidden />
            <div><h3>{item.title}</h3><p>{item.description}</p><div className="outcome"><FiCheckCircle/><span><strong>{t.outcome}</strong>{item.outcome}</span></div><small>{item.stack}</small></div>
            <FiArrowDownRight className="corner-arrow" aria-hidden />
          </article>;
        })}
      </div>
    </section>
  );
}
