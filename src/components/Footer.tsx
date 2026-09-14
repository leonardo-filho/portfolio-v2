"use client";

import { usePathname } from "next/navigation";
import { copy, type Locale } from "@/lib/i18n";

export default function Footer() {
  const locale: Locale = usePathname().startsWith("/en") ? "en" : "pt-BR";
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Leonardo Filho</p>
      <p>{copy[locale].footer}</p>
      <a href="#main-content" aria-label={locale === "en" ? "Back to top" : "Voltar ao topo"}>↑</a>
    </footer>
  );
}
