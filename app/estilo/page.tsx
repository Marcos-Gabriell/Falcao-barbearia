import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import EstiloPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Blog: dicas de corte, barba e estilo masculino",
  description:
    "Dicas de corte, tendências masculinas, cuidados com a barba e muito mais. O blog da Falcão Barbearia em Tapiramutá-BA: preços, tendências e cuidados com cabelo e barba.",
  alternates: {
    canonical: `${siteUrl}/estilo`,
    languages: { "pt-BR": `${siteUrl}/estilo` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/estilo`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Cultura & Estilo | Revista Falcão Barbearia",
    description:
      "Tendências, dicas e tudo sobre estética masculina. A revista digital da Falcão Barbearia.",
    images: [
      {
        url: `${siteUrl}/cortes/corte21.png`,
        width: 1200,
        height: 800,
        alt: "Falcão Barbearia — Cultura & Estilo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultura & Estilo | Falcão Barbearia",
    description: "Tendências e dicas de estética masculina em Tapiramutá-BA.",
    images: [`${siteUrl}/cortes/corte21.png`],
  },
};

export default function EstiloPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Blog", path: "/estilo" }]} />
      <EstiloPageClient />
    </>
  );
}
