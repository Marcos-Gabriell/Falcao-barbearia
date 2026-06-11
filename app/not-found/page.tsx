import type { Metadata } from "next";

import Header          from "../components/Header";
import Footer          from "../components/Footer";
import WhatsFloating   from "../components/WhatsFloating";
import NotFoundContent from "../components/NotFoundContent";

export const metadata: Metadata = {
  title: "Página não encontrada | Falcão Barbearia",
  description: "A página que você está procurando não existe ou foi movida.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundContent />
      <Footer />
      <WhatsFloating />
    </>
  );
}