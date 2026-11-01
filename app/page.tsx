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
      <Header />
      <main className="w-full">
        <Hero />
        <ComoFunciona />
        <Sobre />
        <Valores />
        <Cortes />
        <Avaliacoes />
        <Localizacao />
        <Faq />
      </main>

      <Footer />
      <WhatsFloating />
    </>
  );
}