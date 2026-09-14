"use client";

import { FiArrowDown } from "react-icons/fi";
import { copy, type Locale } from "@/lib/i18n";

export default function RecentUpdates({ locale }: { locale: Locale }) {
  const t = copy[locale].updates;
  return (
    <section className="updates-section" aria-labelledby="updates-title">
      <div className="updates-intro"><p className="eyebrow">03 · {t.eyebrow}</p><h2 id="updates-title">{t.title}</h2><span>{t.asOf}</span></div>
      <div className="updates-list">
        {t.items.map((item) => <article key={item.title}>
          <time dateTime={item.dateTime}>{item.date}</time><div><h3>{item.title}</h3><p>{item.text}</p></div>
        </article>)}
        <a href="#credentials" className="updates-link">{t.more}<FiArrowDown/></a>
      </div>
    </section>
  );
}
