import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { copy, emailAddress, localizedPath, type Locale } from "@/lib/i18n";

export default function Services({ locale }: { locale: Locale }) {
  const t = copy[locale].capabilities;
  const contactHref = `mailto:${emailAddress}?subject=${encodeURIComponent(copy[locale].hero.inquirySubject)}`;

  return (
    <section id="capabilities" className="section value-section">
      <div className="section-heading split-heading">
        <div><p className="eyebrow dark">01 · {t.eyebrow}</p><h2>{t.title}</h2></div>
        <p>{t.description}</p>
      </div>
      <div className="value-grid">
        {t.items.map((item, index) => (
          <article className="value-card" key={item.title}>
            <div className="value-card-top"><span>0{index + 1}</span><span>{item.problem}</span></div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={localizedPath(locale, `/projects/${item.projectId}`)}>{t.caseLabel}<FiArrowUpRight aria-hidden="true" /></Link>
          </article>
        ))}
      </div>
      <div className="value-invite"><p>{t.invite}</p><a href={contactHref}>{copy[locale].hero.contactAction}<FiArrowUpRight aria-hidden="true" /></a></div>
    </section>
  );
}
