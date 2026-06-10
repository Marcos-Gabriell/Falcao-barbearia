import type { Metadata } from "next";

import Header        from "./components/Header";
import Hero          from "./components/Hero";
import Sobre         from "./components/Sobre";
import Valores       from "./components/Valores";
import Cortes        from "./components/Cortes";
import Avaliacoes    from "./components/Avaliacoes";
import Localizacao   from "./components/Localizacao";
import Footer        from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";
import IdleModal     from "./components/IdleModal";
import Faq from "./components/faq";

const siteUrl = "https://www.falcaobarbearia.com.br";

export const metadata: Metadata = {
  title: "Falcão Barbearia em Tapiramutá - BA | Corte Masculino, Degradê e Barba",
  description:
    "Barbearia premium em Tapiramutá - BA. Corte masculino moderno, degradê profissional, barba alinhada e acabamento com navalha. Agende pelo WhatsApp!",
  alternates: {
    canonical: siteUrl,
    languages: { "pt-BR": siteUrl },
  },
  openGraph: {
    title: "Falcão Barbearia | Corte Masculino em Tapiramutá - BA",
    description:
      "Corte masculino moderno, degradê profissional e barba alinhada em Tapiramutá - BA. Agende agora pelo WhatsApp!",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/logo1.png`,
        width: 1200,
        height: 1200,
        alt: "Falcão Barbearia – Logo",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full">
        <Hero />
        <Sobre />
        <Valores />
        <Cortes />
        <Avaliacoes />
        <Localizacao />
        <Faq />
      </main>

      <IdleModal />
      <Footer />
      <WhatsFloating />
    </>
  );
}