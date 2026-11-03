import type { Metadata } from "next";

import Header        from "./components/Header";
import Hero          from "./components/Hero";
import Sobre         from "./components/Sobre";
import Valores       from "./components/Valores";
import Galeria       from "./components/Galeria";
import Avaliacoes    from "./components/Avaliacoes";
import Localizacao   from "./components/Localizacao";
import Footer        from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";
import BarraMobile   from "./components/BarraMobile";
import FundoDinamico from "./components/FundoDinamico";
import ComoFunciona  from "./components/ComoFunciona";
import Faq           from "./components/faq";
import { faqs }      from "./utils/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.pergunta,
    acceptedAnswer: { "@type": "Answer", text: f.resposta },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Fundo: degradê em CSS (aparece na hora) + partículas 3D por cima */}
      <div className="fundo-base pointer-events-none fixed inset-0 -z-20" aria-hidden />
      <FundoDinamico />
      <Header />
      <main className="w-full">
        <Hero />
        <Avaliacoes />
        <div className="cv-auto"><Valores /></div>
        <div className="cv-auto"><Galeria /></div>
        <div className="cv-auto"><ComoFunciona /></div>
        <div className="cv-auto"><Sobre /></div>
        <div className="cv-auto"><Localizacao /></div>
        <div className="cv-auto"><Faq /></div>
      </main>

      <div className="cv-auto"><Footer /></div>
      <WhatsFloating />
      <BarraMobile />
    </>
  );
}