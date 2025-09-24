// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// DEIXE APENAS ESTE BLOCO DE METADATA ESTÁTICO AQUI
export const metadata: Metadata = {
  title: "Leonardo Filho | Analista de Dados",
  description: "Portfólio de Leonardo Filho, Analista de Dados especialista em Python, SQL, GCP e visualização de dados.",
  openGraph: {
    title: "Leonardo Filho | Analista de Dados",
    description: "Portfólio de um especialista em transformar dados em insights estratégicos.",
    url: "https://seu-portfolio.vercel.app", // Lembre-se de trocar pela sua URL
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
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
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-black text-neutral-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}