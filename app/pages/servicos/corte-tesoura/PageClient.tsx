"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Header"; 
import Footer from "../../../components/Footer";
import { WHATSAPP_LINK } from "../../../utils/links";

const galeriaTesoura = [
  "/cortes/corte12.jpeg",
];

export default function CorteTesouraPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="w-full text-left mb-8">
            <Link href="/#servicos" className="text-[#b8853a] text-[10px] uppercase tracking-widest font-bold hover:text-[#d4aa7a] inline-block transition-colors">
              ← Voltar para Serviços
            </Link>
          </motion.div>

          {/* Imagem Centralizada com Moldura Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            className="w-full max-w-sm mb-16"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src={galeriaTesoura[0]} 
                alt="Corte na Tesoura" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
          </motion.div>

          {/* Informações */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="w-full text-center flex flex-col items-center">
            <div className="inline-block bg-[#b8853a]/10 text-[#d4aa7a] px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold mb-6 border border-[#b8853a]/20">
              🔥 Técnica Exclusiva
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif font-black text-[#f5f1eb] leading-tight mb-8">
              100% na <span className="text-[#d4aa7a] italic">Tesoura.</span>
            </h1>
            
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl">
              A verdadeira prova de fogo de um barbeiro. Um corte desenhado inteiramente na tesoura, ideal para quem busca um caimento natural, texturização precisa e um visual mais longo ou clássico. Cada mecha é trabalhada com técnica e exclusividade.
            </p>
            
            {/* Cards de Info */}
            <div className="flex items-center justify-center gap-8 mb-12 bg-white/[0.02] border border-white/5 py-5 px-10 rounded-2xl w-full max-w-sm">
              <div className="text-center">
                <div className="text-2xl font-black text-[#d4aa7a]">R$ 40</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Investimento</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#f5f1eb]">50 min</div>
                <div className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">Duração</div>
              </div>
            </div>
            
            <a href='/agendar?servico=2' rel="noopener noreferrer" className="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-12 py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-[1.02] transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)]">
              Agendar Corte
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}