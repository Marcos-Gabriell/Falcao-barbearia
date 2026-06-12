import type { Metadata } from "next";
import ContatoPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Localização e Contato | Falcão Barbearia — Tapiramutá - BA",
  description:
    "Encontre a Falcão Barbearia em Tapiramutá-BA. R. Olavo Bilac, Centro. Atendimento de segunda a sábado. Agende pelo site ou fale pelo WhatsApp.",
  keywords: [
    "contato Falcão Barbearia",
    "endereço barbearia Tapiramutá",
    "localização Falcão Barbearia",
    "barbearia R. Olavo Bilac Tapiramutá",
    "horário de funcionamento barbearia Tapiramutá",
  ],
  alternates: {
    canonical: `${siteUrl}/contato`,
    languages: { "pt-BR": `${siteUrl}/contato` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/contato`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Localização e Contato | Falcão Barbearia",
    description:
      "Estamos na R. Olavo Bilac, Centro — Tapiramutá-BA. Seg–Sex das 9h às 19h, Sábado das 8h às 20h. Agende online ou via WhatsApp.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia — Localização",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Falcão Barbearia — Tapiramutá",
    description:
      "Endereço, horários e como chegar até a Falcão Barbearia em Tapiramutá-BA.",
    images: [`${siteUrl}/og-home.png`],
  },
};

export default function ContatoPage() {
  return <ContatoPageClient />;
}
