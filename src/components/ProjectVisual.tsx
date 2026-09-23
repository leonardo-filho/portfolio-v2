import type { ProjectVisualKind } from "@/data/projects";
import { copy, type Locale } from "@/lib/i18n";

// Capas desenhadas em código. Os projetos internos usam dados ilustrativos:
// a estrutura é real, os números não saem da operação.
export default function ProjectVisual({ visual, locale, detail = false }: { visual: ProjectVisualKind; locale: Locale; detail?: boolean }) {
  const t = copy[locale].projects.visuals[visual];
  return (
    <div className={`internal-visual internal-visual-${visual}${detail ? " internal-visual-detail" : ""}`} role="img" aria-label={t.label}>
      <div className="internal-visual-header">
        <span>{t.code}</span>
        <small>{t.tag}</small>
      </div>
      {visual === "platform" && <PlatformVisual locale={locale} />}
      {visual === "audit" && <AuditVisual locale={locale} />}
      {visual === "anomaly" && <AnomalyVisual locale={locale} />}
    </div>
  );
}

// Série ilustrativa: 14 meses de receita (barras) e crescimento mensal (linha).
const revenue = [52, 54, 57, 58, 61, 63, 62, 66, 69, 71, 74, 76, 80, 84];
const aging = [44, 27, 17, 12];

function PlatformVisual({ locale }: { locale: Locale }) {
  const t = copy[locale].projects.visuals.platform;
  const max = Math.max(...revenue);
  const growth = revenue.map((value, index) => index === 0 ? 0 : (value - revenue[index - 1]) / revenue[index - 1]);
  const points = growth.slice(1).map((value, index) => `${index * 30 + 45},${62 - value * 700}`).join(" ");
  return (
    <div className="visual-platform" aria-hidden>
      <nav>{t.nav.map((item, index) => <span key={item} className={index === 0 ? "is-active" : ""}>{item}</span>)}</nav>
      <div className="visual-platform-kpis">{t.kpis.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
      <div className="visual-platform-charts">
        <figure>
          <small>{t.chart}</small>
          <svg viewBox="0 0 420 140" preserveAspectRatio="none">
            {revenue.map((value, index) => <rect key={index} x={index * 30 + 6} y={140 - (value / max) * 120} width={18} height={(value / max) * 120} />)}
            <polyline points={points} />
          </svg>
        </figure>
        <figure>
          <small>{t.aging}</small>
          <svg className="visual-platform-aging" viewBox="0 0 200 100" preserveAspectRatio="none">{aging.map((value, index) => <rect key={index} x={index * 52 + 8} y={100 - value * 2} width={32} height={value * 2} />)}</svg>
          <div className="visual-platform-aging-labels"><span>6–15</span><span>16–30</span><span>31–60</span><span>61+</span></div>
        </figure>
      </div>
    </div>
  );
}

function AuditVisual({ locale }: { locale: Locale }) {
  const t = copy[locale].projects.visuals.audit;
  const top = 1972;
  return (
    <div className="visual-audit" aria-hidden>
      <ol>{t.steps.map(([when, what], index) => <li key={what} className={index === t.steps.length - 2 ? "is-output" : ""}><b>{when}</b><span>{what}</span></li>)}</ol>
      <div className="visual-audit-funnel">
        <small>{t.funnelTitle}</small>
        {t.funnel.map(([value, label]) => (
          <div key={label}><span style={{ width: `${(Number(value.replace(/\D/g, "")) / top) * 100}%` }} /><strong>{value}</strong><em>{label}</em></div>
        ))}
      </div>
    </div>
  );
}

const anomalyMethods = [
  { name: "Isolation Forest", recall: 97, precision: 31, best: true },
  { name: "Baseline", recall: 81, precision: 100 },
  { name: "DBSCAN", recall: 100, precision: 2 },
];

function AnomalyVisual({ locale }: { locale: Locale }) {
  const t = copy[locale].projects.visuals.anomaly;
  return (
    <div className="visual-anomaly" aria-hidden>
      <div className="visual-anomaly-legend"><span><i className="is-recall"/>{t.recall}</span><span><i className="is-precision"/>{t.precision}</span></div>
      {anomalyMethods.map((method) => (
        <div key={method.name} className={`visual-anomaly-row${method.best ? " is-best" : ""}`}>
          <strong>{method.name}</strong>
          <div className="visual-anomaly-bars">
            <span className="is-recall" style={{ width: `${method.recall}%` }}><b>{method.recall}%</b></span>
            <span className="is-precision" style={{ width: `${Math.max(method.precision, 3)}%` }}><b>{method.precision}%</b></span>
          </div>
        </div>
      ))}
      <p>{t.footnote}</p>
    </div>
  );
}
