"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Header"; 
import Footer from "../../../components/Footer";

// Colocamos as suas 2 fotos aqui
const fotos = [
  "/cortes/corte21.png",
  "/cortes/corte20.png",
];

export default function DesondulacaoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Botão Voltar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
            <Link href="/#servicos" className="text-[#b8853a] text-[10px] uppercase tracking-[0.3em] font-black hover:text-[#d4aa7a] transition-colors inline-flex items-center gap-2">
              ← Voltar para Serviços
            </Link>
          </motion.div>

          {/* Layout Editorial das fotos */}
        {/* Layout Editorial das fotos - Agora com tamanhos iguais */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="grid grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto"
          >
            {/* Foto 1 */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              <Image src={fotos[0]} alt="Desondulação 1" fill className="object-cover" />
            </div>
            {/* Foto 2 */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-white/5">
              <Image src={fotos[1]} alt="Desondulação 2" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Texto e Agendamento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            className="text-center flex flex-col items-center"
          >
            <div className="inline-block bg-[#b8853a]/10 text-[#d4aa7a] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold mb-6 border border-[#b8853a]/20">
              🔥 Tratamento Premium
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#f5f1eb] leading-tight mb-8">
              Desondu<span className="text-[#d4aa7a] italic">lação.</span>
            </h1>
            
            <p className="text-white/60 text-lg leading-relaxed font-medium mb-12 max-w-xl">
              Cansado de brigar com o volume do cabelo? Nossa química de desondulação entrega uma redução extrema de volume e alinhamento dos fios, mantendo um aspecto liso, hidratado e natural, sem deixar o cabelo com aspecto artificial.
            </p>
            
            {/* Info Box */}
            <div className="flex items-center justify-center gap-8 mb-12 bg-white/[0.02] border border-white/5 py-5 px-10 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-black text-[#d4aa7a]">R$ 100</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Investimento</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#f5f1eb]">1h 30m</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Duração</div>
              </div>
            </div>

            <Link 
              href="/agendar?servico=9"
              className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-12 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]"
            >
              Garantir Transformação
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}