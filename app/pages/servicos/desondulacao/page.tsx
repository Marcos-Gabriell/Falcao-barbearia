import type { Metadata } from "next";
import DesondulacaoPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Desondulação Capilar em Tapiramutá - BA | Falcão Barbearia",
  description:
    "Desondulação profissional em Tapiramutá-BA. Elimine o volume excessivo e os fios rebeldes mantendo a naturalidade. Tratamento químico realizado com segurança e técnica na Falcão Barbearia.",
  keywords: [
    "desondulação Tapiramutá",
    "desondulação capilar Bahia",
    "relaxamento capilar masculino Tapiramutá",
    "química cabelo masculino Tapiramutá",
    "Falcão Barbearia desondulação",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos/desondulacao`,
    languages: { "pt-BR": `${siteUrl}/servicos/desondulacao` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/desondulacao`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Desondulação Capilar | Falcão Barbearia — Tapiramutá",
    description:
      "Cabelo no lugar, caimento natural, zero volume rebelde. Desondulação profissional em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte21.png`,
        width: 1200,
        height: 800,
        alt: "Desondulação Capilar — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desondulação Capilar | Falcão Barbearia",
    description: "Elimine o volume e os fios rebeldes. Desondulação em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/corte21.png`],
  },
};

export default function DesondulacaoPage() {
  return <DesondulacaoPageClient />;
}
