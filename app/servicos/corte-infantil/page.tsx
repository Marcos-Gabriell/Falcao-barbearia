"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Header"; 
import Footer from "../../components/Footer";
import { WHATSAPP_LINK } from "../../utils/links";

// Adicione as 2 fotos do corte infantil aqui
const galeriaKids = [
  "/cortes/corte1.jpg",
  "/cortes/coorte17.png", // Substitua pelo caminho da sua segunda foto
];

export default function CorteInfantilPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left mb-8">
            <Link href="/#servicos" className="text-[#b8853a] text-[10px] uppercase tracking-widest font-bold hover:text-[#d4aa7a] inline-block transition-colors">
              ← Voltar para Serviços
            </Link>
          </motion.div>

          {/* Layout das 2 fotos lado a lado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="grid grid-cols-2 gap-4 mb-16 w-full max-w-2xl"
          >
            {galeriaKids.map((imagem, index) => (
              <div key={index} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-white/5 shadow-xl">
                <Image src={imagem} alt={`Corte Infantil ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Conteúdo */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full text-center flex flex-col items-center">
            <div className="inline-block bg-[#b8853a]/10 text-[#d4aa7a] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold mb-6 border border-[#b8853a]/20">
              ✂️ Experiência Kids
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-black text-[#f5f1eb] leading-tight mb-8">
              Estilo <span className="text-[#d4aa7a] italic">Desde Cedo.</span>
            </h1>
            
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl text-center">
              Cortar o cabelo dos pequenos exige paciência e técnica afiada. Criamos um ambiente tranquilo onde a criança se sente segura e o resultado é um corte moderno, com acabamento impecável e digno de um verdadeiro pequeno Falcão.
            </p>
            
            {/* Info Box */}
            <div className="flex items-center justify-center gap-8 mb-12 bg-white/[0.02] border border-white/5 py-5 px-10 rounded-2xl w-full max-w-sm">
              <div className="text-center">
                <div className="text-2xl font-black text-[#d4aa7a]">R$ 30</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Investimento</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#f5f1eb]">30 min</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Duração</div>
              </div>
            </div>

            <a href="/agendar?servico=1" rel="noopener noreferrer" className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-12 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]">
              Agendar Corte Kids
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}