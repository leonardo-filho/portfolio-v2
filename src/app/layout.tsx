// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// DEIXE APENAS ESTE BLOCO DE METADATA ESTÁTICO AQUI
export const metadata: Metadata = {
  metadataBase: new URL("https://leonardo-filho.vercel.app"),
  title: "Leonardo Filho | Analytics Engineer",
  description:
    "Analytics Engineer building production data pipelines on Google Cloud: BigQuery, Python, dbt and Next.js. Remote, GMT-3.",
  openGraph: {
    title: "Leonardo Filho | Analytics Engineer",
    description:
      "Production data pipelines on GCP, pipeline reliability and executive dashboards. BigQuery, Python, dbt, Next.js.",
    url: "https://leonardo-filho.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

// A FUNÇÃO generateMetadata FOI REMOVIDA DESTE ARQUIVO

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-black text-neutral-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}