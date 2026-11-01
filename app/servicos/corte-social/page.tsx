import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import CorteSocialPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: { absolute: "Corte Social Masculino em Tapiramutá - BA | Falcão Barbearia" },
  description:
    "Corte social masculino clássico e moderno em Tapiramutá-BA. Ideal para ambientes profissionais sem abrir mão do estilo. Acabamento impecável na Falcão Barbearia.",
  alternates: {
    canonical: `${siteUrl}/servicos/corte-social`,
    languages: { "pt-BR": `${siteUrl}/servicos/corte-social` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/corte-social`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Corte Social | Falcão Barbearia — Tapiramutá",
    description:
      "Corte social impecável para quem quer presença profissional sem perder o estilo. Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte14.jpeg`,
        width: 1200,
        height: 800,
        alt: "Corte Social — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corte Social | Falcão Barbearia",
    description: "Estilo e presença profissional em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/corte14.jpeg`],
  },
};

export default function CorteSocialPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Serviços", path: "/servicos" }, { name: "Corte Social", path: "/servicos/corte-social" }]} />
      <CorteSocialPageClient />
    </>
  );
}
