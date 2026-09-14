import type { Metadata } from "next";
import PortfolioPage from "@/components/PortfolioPage";
import { copy } from "@/lib/i18n";

export const metadata: Metadata = {
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: { title: copy.en.meta.title, description: copy.en.meta.description, url: "/en", locale: "en_US" },
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
