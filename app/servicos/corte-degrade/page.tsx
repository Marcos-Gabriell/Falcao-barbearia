import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";
import CorteDegradePageClient from "./PageClient";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: { absolute: "Corte Degradê em Tapiramutá - BA | Falcão Barbearia" },
  description:
    "Degradê profissional em Tapiramutá-BA. Mid fade, low fade, high fade e skin fade feitos com precisão milimétrica na Falcão Barbearia. Sem agendamento: chama no WhatsApp.",
  alternates: {
    canonical: `${siteUrl}/servicos/corte-degrade`,
    languages: { "pt-BR": `${siteUrl}/servicos/corte-degrade` },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/servicos/corte-degrade`,
    locale: "pt_BR",
    siteName: "Falcão Barbearia",
    title: "Corte Degradê | Falcão Barbearia — Tapiramutá",
    description:
      "Mid, low, high e skin fade com precisão milimétrica. O melhor degradê de Tapiramutá-BA.",
    images: [
      {
        url: `${siteUrl}/cortes/corte15.jpeg`,
        width: 1200,
        height: 800,
        alt: "Corte Degradê — Falcão Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corte Degradê | Falcão Barbearia",
    description: "O melhor degradê de Tapiramutá-BA. Sem agendamento, por ordem de chegada.",
    images: [`${siteUrl}/cortes/corte15.jpeg`],
  },
};

export default function CorteDegradePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Serviços", path: "/servicos" }, { name: "Corte Degradê", path: "/servicos/corte-degrade" }]} />
      <CorteDegradePageClient />
    </>
  );
}
