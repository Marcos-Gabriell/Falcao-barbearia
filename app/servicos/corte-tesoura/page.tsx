import type { Metadata } from "next";
import CorteTesouraPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Corte na Tesoura em Tapiramutá - BA | Falcão Barbearia",
  description:
    "Corte masculino 100% na tesoura em Tapiramutá-BA. Ideal para cabelos mais longos, ondulados ou quem busca um caimento natural e exclusivo. Design personalizado na Falcão Barbearia.",
  keywords: [
    "corte na tesoura Tapiramutá",
    "corte tesoura masculino Bahia",
    "corte cabelo longo masculino Tapiramutá",
    "Falcão Barbearia tesoura",
    "corte clássico masculino Tapiramutá",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos/corte-tesoura`,
    languages: { "pt-BR": `${siteUrl}/servicos/corte-tesoura` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/corte-tesoura`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Corte na Tesoura | Falcão Barbearia — Tapiramutá",
    description:
      "Design exclusivo 100% na tesoura. O clássico que nunca morre, feito com precisão em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte12.jpeg`,
        width: 1200,
        height: 800,
        alt: "Corte na Tesoura — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corte na Tesoura | Falcão Barbearia",
    description: "100% na tesoura. Caimento natural e exclusivo em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/corte12.jpeg`],
  },
};

export default function CorteTesouraPage() {
  return <CorteTesouraPageClient />;
}
