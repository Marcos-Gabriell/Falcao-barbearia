import type { Metadata } from "next";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";

export const metadata: Metadata = {
  title: "Página não encontrada | Falcão Barbearia",
  description: "A página que você está procurando não existe ou foi movida.",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-7xl md:text-9xl font-black text-zinc-800 dark:text-zinc-200 mb-4 opacity-20">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
          Página não encontrada
        </h2>

        <p className="max-w-md text-zinc-600 dark:text-zinc-400 mb-8">
          Ops! Parece que o corte que você estava procurando não existe por aqui.
          A página pode ter sido movida ou o link está quebrado.
        </p>

        <Link
          href="/"
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
        >
          Voltar para o Início
        </Link>

      </main>

      <Footer />
      <WhatsFloating />
    </>
  );
}
