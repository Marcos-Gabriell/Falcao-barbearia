import type { Metadata } from "next";
import TermosPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Termos de Uso | Falcão Barbearia",
  description:
    "Termos de Uso do sistema de agendamento online da Falcão Barbearia. Conheça as regras e condições para utilização do nosso serviço digital.",
  alternates: {
    canonical: `${siteUrl}/termos-de-uso`,
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/termos-de-uso`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Termos de Uso | Falcão Barbearia",
    description: "Condições de uso do sistema de agendamento online.",
    images: [
      {
        url: `${siteUrl}/og-home.png`,
        width: 1200,
        height: 630,
        alt: "Falcão Barbearia",
      },
    ],
  },
};

export default function TermosDeUsoPage() {
  return <TermosPageClient />;
}
