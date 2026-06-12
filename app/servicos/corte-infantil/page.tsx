import type { Metadata } from "next";
import CorteInfantilPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Corte Infantil em Tapiramutá - BA | Falcão Barbearia",
  description:
    "Corte infantil especializado em Tapiramutá-BA. Atendimento com paciência e técnica para os pequenos. Estilo desde cedo na Falcão Barbearia. Agende online.",
  keywords: [
    "corte infantil Tapiramutá",
    "barbearia infantil Tapiramutá",
    "corte de cabelo criança Tapiramutá",
    "cabelo infantil masculino Bahia",
    "Falcão Barbearia corte kids",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos/corte-infantil`,
    languages: { "pt-BR": `${siteUrl}/servicos/corte-infantil` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/corte-infantil`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Corte Infantil | Falcão Barbearia — Tapiramutá",
    description:
      "Estilo desde cedo. Corte infantil com paciência e técnica em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte1.jpg`,
        width: 1200,
        height: 800,
        alt: "Corte Infantil — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corte Infantil | Falcão Barbearia",
    description: "Atendimento especializado para os pequenos em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/corte1.jpg`],
  },
};

export default function CorteInfantilPage() {
  return <CorteInfantilPageClient />;
}
