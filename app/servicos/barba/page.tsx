import type { Metadata } from "next";
import BarbaPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Barba Premium com Navalha em Tapiramutá - BA | Falcão Barbearia",
  description:
    "Barba alinhada com navalha, toalha quente e acabamento impecável na Falcão Barbearia em Tapiramutá-BA. Pigmentação e sobrancelha também disponíveis. Agende online.",
  keywords: [
    "barba com navalha Tapiramutá",
    "barba alinhada Tapiramutá",
    "barba premium Bahia",
    "pigmentação de barba Tapiramutá",
    "Falcão Barbearia barba",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos/barba`,
    languages: { "pt-BR": `${siteUrl}/servicos/barba` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/barba`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Barba Premium com Navalha | Falcão Barbearia",
    description:
      "Terapia de toalha quente, navalha e acabamento de nível. A barba que você merece em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/Barba.png`,
        width: 1200,
        height: 800,
        alt: "Barba Premium — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barba Premium | Falcão Barbearia",
    description: "Navalha, toalha quente e acabamento impecável em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/Barba.png`],
  },
};

export default function BarbaPage() {
  return <BarbaPageClient />;
}
