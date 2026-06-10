"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Header"; 
import Footer from "../../components/Footer";
import { WHATSAPP_LINK } from "../../utils/links";

const galeriaSocial = [
  "/cortes/corte14.jpeg",
];

export default function CorteSocialPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center">
          
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left mb-8">
            <Link href="/servicos" className="text-[#b8853a] text-[10px] uppercase tracking-widest font-bold hover:text-[#d4aa7a] inline-block transition-colors">
              ← Voltar para Serviços
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {galeriaSocial.map((imagem, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1, duration: 0.5 }} className="relative group overflow-hidden rounded-xl bg-white/5 aspect-[4/5] border border-white/5">
                  <Image src={imagem} alt={`Exemplo de Corte Social ${index + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="w-full max-w-2xl text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#f5f1eb] leading-tight mb-6">
              Corte <span className="text-[#d4aa7a] italic">Social.</span>
            </h1>
            
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium mb-10 text-center">
              O clássico que nunca sai de moda. O corte social é ideal para quem precisa de um visual sério, alinhado e elegante para o ambiente de trabalho ou eventos formais. Laterais bem desenhadas na máquina e topo ajustado na régua.
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-12 bg-white/[0.02] border border-white/5 py-4 px-8 rounded-2xl">
              <div className="text-3xl font-bold text-[#d4aa7a]">R$ 30</div>
              <div className="h-8 w-[1px] bg-white/10"></div>
              <div className="text-white/40 text-xs uppercase tracking-widest font-bold flex flex-col items-start text-left">
                <span>Duração</span>
                <span className="text-white/70">Aprox. 30 min</span>
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]">
              Agendar Corte
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}