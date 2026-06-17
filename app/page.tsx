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
import Faq           from "./components/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
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