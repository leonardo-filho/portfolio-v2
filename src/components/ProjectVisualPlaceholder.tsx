import { copy, type Locale } from "@/lib/i18n";

export default function ProjectVisualPlaceholder({ projectId, locale, detail = false }: { projectId: number; locale: Locale; detail?: boolean }) {
  const t = copy[locale].projects.placeholder;
  const isPlatform = projectId === 5;

  return (
    <div
      className={`internal-visual internal-visual-${isPlatform ? "platform" : "automation"}${detail ? " internal-visual-detail" : ""}`}
      role="img"
      aria-label={`${t.protected}: ${isPlatform ? t.platform : t.automation}`}
    >
      <div className="internal-visual-header">
        <span>{isPlatform ? "Q1 / 05" : "AUDIT / 06"}</span>
        <small>{t.protected}</small>
      </div>

      {isPlatform ? (
        <div className="visual-dashboard" aria-hidden>
          <div className="visual-sidebar"><i/><i/><i/><i/></div>
          <div className="visual-dashboard-main">
            <div className="visual-kpis"><i/><i/><i/></div>
            <svg viewBox="0 0 420 140" preserveAspectRatio="none">
              <path d="M0 112 L58 91 L116 99 L176 57 L236 72 L298 31 L360 48 L420 12" />
              <path className="visual-chart-shadow" d="M0 128 L58 117 L116 120 L176 96 L236 105 L298 82 L360 92 L420 70" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="visual-automation" aria-hidden>
          <div className="visual-flow">
            {t.flow.map((label, index) => <span key={label}><i>0{index + 1}</i>{label}</span>)}
          </div>
          <div className="visual-audit-lines"><i/><i/><i/></div>
        </div>
      )}
    </div>
  );
}
