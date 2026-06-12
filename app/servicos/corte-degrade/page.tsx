import type { Metadata } from "next";
import CorteDegradePageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Corte Degradê em Tapiramutá - BA | Falcão Barbearia",
  description:
    "Degradê profissional em Tapiramutá-BA. Mid fade, low fade, high fade e skin fade feitos com precisão milimétrica na Falcão Barbearia. Agende seu horário online.",
  keywords: [
    "corte degradê Tapiramutá",
    "mid fade Tapiramutá",
    "low fade Tapiramutá",
    "high fade Bahia",
    "degradê profissional Tapiramutá",
    "Falcão Barbearia degradê",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos/corte-degrade`,
    languages: { "pt-BR": `${siteUrl}/servicos/corte-degrade` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/corte-degrade`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Corte Degradê | Falcão Barbearia — Tapiramutá",
    description:
      "Mid, low, high e skin fade com precisão milimétrica. O melhor degradê de Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte15.jpeg`,
        width: 1200,
        height: 800,
        alt: "Corte Degradê — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corte Degradê | Falcão Barbearia",
    description: "O melhor degradê de Tapiramutá-BA. Agende online.",
    images: [`${siteUrl}/cortes/corte15.jpeg`],
  },
};

export default function CorteDegradePage() {
  return <CorteDegradePageClient />;
}
