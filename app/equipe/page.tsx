import type { Metadata } from "next";
import EquipePageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Thaylle — Master Barber | Falcão Barbearia em Tapiramutá - BA",
  description:
    "Conheça Thaylle, o fundador e master barber da Falcão Barbearia. Especialista em degradê milimétrico, barba e finalizações na tesoura. Referência em estética masculina em Tapiramutá-BA desde 2021.",
  keywords: [
    "Thaylle barbeiro Tapiramutá",
    "master barber Tapiramutá",
    "barbeiro Falcão",
    "equipe Falcão Barbearia",
    "fundador barbearia Tapiramutá",
  ],
  alternates: {
    canonical: `${siteUrl}/equipe`,
    languages: { "pt-BR": `${siteUrl}/equipe` },
  },
  openGraph: {
    type: "profile",
    url: `${siteUrl}/equipe`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Thaylle — Master Barber | Falcão Barbearia",
    description:
      "Mais do que um barbeiro. Thaylle é o fundador da Falcão e referência em degradê, barba e estilo em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Thaylle — Master Barber da Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thaylle — Master Barber | Falcão Barbearia",
    description:
      "Fundador e barbeiro referência em Tapiramutá-BA. Degradê, barba e estilo.",
    images: [`${siteUrl}/og-home.png`],
  },
};

export default function EquipePage() {
  return <EquipePageClient />;
}
