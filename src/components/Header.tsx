"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { copy, localizedPath, switchLocalePath, type Locale } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "pt-BR";
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const nav = [
    [t.nav.capabilities, "capabilities"], [t.nav.projects, "projects"], [t.nav.experience, "experience"],
    [t.nav.credentials, "credentials"], [t.nav.about, "about"], [t.nav.contact, "contact"],
  ];

  useEffect(() => {
    document.documentElement.lang = locale;
    setOpen(false);
  }, [locale, pathname]);

  const root = localizedPath(locale);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href={`${root}#home`} className="brand" aria-label="Leonardo Filho">
          <span className="brand-mark">LF</span>
          <span className="brand-copy"><strong>Leonardo Filho</strong><small>{t.role}</small></span>
        </Link>
        <nav className="desktop-nav" aria-label={t.navigation}>
          {nav.map(([label, id]) => <Link key={id} href={`${root}#${id}`}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="language-switch" href={switchLocalePath(pathname, locale === "en" ? "pt-BR" : "en")} hrefLang={locale === "en" ? "pt-BR" : "en"} aria-label={locale === "en" ? t.languageHint : t.language}>
            <span className={locale === "pt-BR" ? "active" : ""}>PT</span><i aria-hidden>/</i><span className={locale === "en" ? "active" : ""}>EN</span>
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.closeMenu : t.openMenu}>{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label={t.navigation}>
            {nav.map(([label, id]) => <Link key={id} href={`${root}#${id}`} onClick={() => setOpen(false)}>{label}<span>↘</span></Link>)}
          </nav>
        )}
    </header>
  );
}
