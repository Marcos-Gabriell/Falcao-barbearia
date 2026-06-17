import type { Metadata } from "next";
import ServicosPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Serviços e Preços | Falcão Barbearia — Tapiramutá - BA",
  description:
    "Conheça todos os serviços da Falcão Barbearia: corte tradicional, degradê, corte na tesoura, barba premium, pigmentação, desondulação e mais. Preços transparentes e agendamento online.",
  keywords: [
    "serviços barbearia Tapiramutá",
    "preços barbearia Tapiramutá",
    "corte degradê Tapiramutá",
    "barba premium Tapiramutá",
    "tabela de preços barbearia",
    "Falcão Barbearia serviços",
  ],
  alternates: {
    canonical: `${siteUrl}/servicos`,
    languages: { "pt-BR": `${siteUrl}/servicos` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Serviços e Preços | Falcão Barbearia",
    description:
      "Corte, degradê, barba, desondulação e muito mais. Veja todos os serviços e preços da Falcão Barbearia em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia — Serviços",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços e Preços | Falcão Barbearia",
    description:
      "Todos os serviços da Falcão Barbearia com preços. Agende online em Tapiramutá-BA.",
    images: [`${siteUrl}/og-home.png`],
  },
};

export default function ServicosPage() {
  return <ServicosPageClient />;
}
