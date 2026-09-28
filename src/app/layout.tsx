import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import "./home-refresh.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { copy, siteUrl } from "@/lib/i18n";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: copy["pt-BR"].meta.title,
  description: copy["pt-BR"].meta.description,
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title: copy["pt-BR"].meta.title,
    description: copy["pt-BR"].meta.description,
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body>
        <a href="#main-content" className="skip-link">{copy["pt-BR"].skip}</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
