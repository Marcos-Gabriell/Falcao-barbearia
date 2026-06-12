import type { Metadata } from "next";
import SobrePageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Sobre a Falcão Barbearia | História e Missão em Tapiramutá - BA",
  description:
    "Conheça a história da Falcão Barbearia. Fundada em 2021 em Tapiramutá-BA, somos referência em corte masculino, degradê e barba alinhada. Estilo, técnica e respeito na cadeira.",
  keywords: [
    "história Falcão Barbearia",
    "sobre a barbearia Tapiramutá",
    "barbearia desde 2021",
    "barbearia premium Bahia",
    "missão Falcão Barbearia",
  ],
  alternates: {
    canonical: `${siteUrl}/sobre`,
    languages: { "pt-BR": `${siteUrl}/sobre` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/sobre`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Sobre a Falcão Barbearia | História e Missão",
    description:
      "Fundada em 2021 em Tapiramutá-BA. Conheça a essência da Falcão Barbearia: técnica de alto nível, ambiente premium e foco total no seu visual.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia — Sobre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Falcão Barbearia",
    description:
      "Fundada em 2021 em Tapiramutá-BA. A história por trás do melhor corte da região.",
    images: [`${siteUrl}/og-home.png`],
  },
};

export default function SobrePage() {
  return <SobrePageClient />;
}
