
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Valores from "./components/Valores";
import Cortes from "./components/Cortes";
import Avaliacoes from "./components/Avaliacoes";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import WhatsFloating from "./components/WhatsFloating";

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
