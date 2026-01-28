import type { Metadata } from "next";

import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Valores from "./components/Valores";
import Cortes from "./components/Cortes";
import Avaliacoes from "./components/Avaliacoes";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";

const siteUrl = "https://www.falcaobarbearia.online";

export const metadata: Metadata = {
  title: "Falcão Barbearia em Tapiramutá - BA | Corte Masculino & Barba",
  description:
    "Barbearia em Tapiramutá - BA. Corte masculino moderno, degradê, barba alinhada e acabamento profissional. Agende pelo WhatsApp!",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Falcão Barbearia | Tapiramutá - BA",
    description:
      "Corte masculino moderno, degradê profissional e barba alinhada. Agende agora!",
    url: siteUrl,
    images: [`${siteUrl}/logo1.png`],
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-100 font-sans">
      <main className="w-full">
        <Hero />
        <Sobre />
        <Valores />
        <Cortes />
        <Avaliacoes />
        <Localizacao />
        <Footer />
      </main>

      <WhatsFloating />
    </div>
  );
}
