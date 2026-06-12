import type { Metadata } from "next";
import EstiloPageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Cultura & Estilo — Revista da Barbearia | Falcão Barbearia",
  description:
    "Dicas de corte, tendências masculinas, cuidados com a barba e muito mais. A revista digital da Falcão Barbearia em Tapiramutá-BA. Conteúdo semanal sobre estética e estilo masculino.",
  keywords: [
    "blog barbearia Tapiramutá",
    "dicas corte masculino",
    "tendências degradê 2025",
    "cuidados com a barba",
    "estilo masculino Bahia",
    "revista barbearia Falcão",
  ],
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
  return <EstiloPageClient />;
}
