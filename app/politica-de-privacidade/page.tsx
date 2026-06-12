import type { Metadata } from "next";
import PoliticaPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Política de Privacidade | Falcão Barbearia",
  description:
    "Política de Privacidade da Falcão Barbearia em conformidade com a LGPD. Saiba como coletamos, utilizamos e protegemos seus dados pessoais no sistema de agendamento online.",
  alternates: {
    canonical: `${siteUrl}/politica-de-privacidade`,
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/politica-de-privacidade`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Política de Privacidade | Falcão Barbearia",
    description: "Como tratamos seus dados pessoais conforme a LGPD.",
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

export default function PoliticaPrivacidadePage() {
  return <PoliticaPageClient />;
}
