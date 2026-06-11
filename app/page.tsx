import type { Metadata } from "next";

import Header        from "./components/Header";
import Hero          from "./components/Hero";
import Sobre         from "./components/Sobre";
import Valores       from "./components/Valores";
import Cortes        from "./components/Cortes";
import Avaliacoes    from "./components/Avaliacoes";
import Localizacao   from "./components/Localizacao";
import Footer        from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";
import IdleModal     from "./components/IdleModal";
import Faq           from "./components/faq";

const siteUrl  = "https://www.falcaobarbearia.com.br";
const ogImage  = `${siteUrl}/og-home.png`;
const title    = "Falcão Barbearia | Agendamento Online em Tapiramutá - BA";
const desc     = "Barbearia premium em Tapiramutá-BA. Corte masculino moderno, degradê perfeito e barba alinhada. Agende seu horário online pelo site, sem filas e sem complicação.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title,
  description: desc,

  /* ── Canonical + hreflang ─────────────────────────────────────────── */
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },

  /* ── Indexação ────────────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* ── Palavras-chave de Alto Desempenho ────────────────────────────── */
  keywords: [
    "agendamento online barbearia",
    "marcar corte de cabelo online",
    "barbearia Tapiramutá",
    "corte masculino Tapiramutá",
    "degradê Tapiramutá",
    "Falcão Barbearia",
    "barbearia premium Bahia",
    "barba alinhada",
    "agendar barbeiro Tapiramutá",
  ],

  /* ── Open Graph ───────────────────────────────────────────────────── */
  openGraph: {
    type:        "website",
    url:         siteUrl,
    locale:      "pt_BR",
    siteName:    "Falcão Barbearia",
    title:       "Falcão Barbearia | Agende seu Corte Online",
    description: "Corte moderno, degradê e barba alinhada em Tapiramutá-BA. Esqueça o WhatsApp: escolha seu horário e agende direto pelo nosso site!",
    images: [
      {
        url:    ogImage,
        width:  1200,
        height: 630,
        alt:    "Falcão Barbearia — Agendamento Online",
      },
    ],
  },

  /* ── Twitter ───────────────────────────────────────────── */
  twitter: {
    card:        "summary_large_image",
    title:       "Falcão Barbearia | Agende seu Corte Online",
    description: "Corte moderno e degradê em Tapiramutá-BA. Agende seu horário direto pelo site!",
    images:      [ogImage],
  },

  /* ── Ícones ───────────────────────────────────────────────────────── */
  icons: {
    icon:  [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Sobre />
        <Valores />
        <Cortes />
        <Avaliacoes />
        <Localizacao />
        <Faq />
      </main>

      <IdleModal />
      <Footer />
      <WhatsFloating />
    </>
  );
}