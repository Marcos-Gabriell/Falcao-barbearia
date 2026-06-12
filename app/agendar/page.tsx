import type { Metadata } from "next";
import AgendarPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Agendar Horário Online | Falcão Barbearia — Tapiramutá - BA",
  description:
    "Agende seu corte, degradê ou barba de forma rápida e fácil pelo site da Falcão Barbearia em Tapiramutá-BA. Escolha o serviço, o horário e o profissional. Sem fila, sem complicação.",
  keywords: [
    "agendar barbearia online Tapiramutá",
    "marcar horário barbearia Tapiramutá",
    "agendamento online corte cabelo Bahia",
    "Falcão Barbearia agendar",
    "reservar horário barbeiro Tapiramutá",
  ],
  alternates: {
    canonical: `${siteUrl}/agendar`,
    languages: { "pt-BR": `${siteUrl}/agendar` },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/agendar`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Agendar Horário Online | Falcão Barbearia",
    description:
      "Escolha o serviço, o profissional e o horário. Agendamento 100% online em Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia — Agendar Horário",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendar Horário | Falcão Barbearia",
    description: "Agendamento online em Tapiramutá-BA. Rápido, fácil, sem fila.",
    images: [`${siteUrl}/og-home.png`],
  },
};

export default function AgendarPage() {
  return <AgendarPageClient />;
}
