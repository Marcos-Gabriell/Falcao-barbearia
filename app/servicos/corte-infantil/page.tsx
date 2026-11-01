import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import CorteInfantilPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: { absolute: "Corte Infantil em Tapiramutá - BA | Falcão Barbearia" },
  description:
    "Corte infantil especializado em Tapiramutá-BA. Atendimento com paciência e técnica para os pequenos. Estilo desde cedo na Falcão Barbearia. Sem agendamento: chama no WhatsApp.",
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
  return (
    <>
      <Breadcrumb items={[{ name: "Serviços", path: "/servicos" }, { name: "Corte Infantil", path: "/servicos/corte-infantil" }]} />
      <CorteInfantilPageClient />
    </>
  );
}
