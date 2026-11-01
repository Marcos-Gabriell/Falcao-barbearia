import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import TermosPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: { absolute: "Termos de Uso | Falcão Barbearia" },
  description:
    "Termos de Uso do site da Falcão Barbearia, barbearia em Tapiramutá-BA.",
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
    description: "Condições de uso do site da Falcão Barbearia.",
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
  return (
    <>
      <Breadcrumb items={[{ name: "Termos de Uso", path: "/termos-de-uso" }]} />
      <TermosPageClient />
    </>
  );
}
