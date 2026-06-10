"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../app/components/Header"; // Ajuste se necessário
import Footer from "../../app/components/Footer"; // Ajuste se necessário
import { WHATSAPP_LINK } from "../utils/links";

export default function EquipePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* ================= SEÇÃO 1: BIOGRAFIA PRINCIPAL ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            
            {/* Imagem Principal (Esquerda) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* CORRIGIDO PARA .JPEG MAIÚSCULO COMO ESTÁ NA PASTA */}
              <Image 
                src="/thaylle2.JPEG" 
                alt="Thaylle - Master Barber" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8">
                <p className="text-[#b8853a] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                  Fundador
                </p>
                <h2 className="text-[#f5f1eb] font-serif italic text-4xl">Thaylle</h2>
              </div>
            </motion.div>

            {/* Texto de Biografia (Direita) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
                <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                  O Mestre por trás da cadeira
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#f5f1eb] leading-tight mb-8">
                Mais do que um <br /> <span className="text-[#d4aa7a] italic">Barbeiro.</span>
              </h1>
              
              <div className="space-y-6 text-white/60 text-base leading-relaxed font-medium mb-12">
                <p>
                  "A barbearia nunca foi apenas sobre cortar cabelo, mas sobre esculpir a autoestima e construir uma identidade." É com essa filosofia que <strong className="text-[#d4aa7a]">Thaylle</strong> comanda a Falcão Barbearia desde a sua fundação em 2021.
                </p>
                <p>
                  Nascido e criado com a cultura do estilo de rua misturada com a barbearia clássica, ele se tornou referência em Tapiramutá. Especialista em degradês milimétricos, finalizações impecáveis na tesoura e transformações visuais.
                </p>
                <p>
                  Sentar na cadeira do Thaylle é ter a certeza de que você não é só mais um número. É um momento de resenha, respeito e foco total em entregar o melhor resultado que o seu visual já teve.
                </p>
              </div>

              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-max bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] px-10 py-4 rounded-xl font-black uppercase text-[11px] tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(184,133,58,0.25)] text-center"
              >
                Agendar com Thaylle
              </a>
            </motion.div>
          </div>

          {/* ================= SEÇÃO 2: MINI GALERIA DE AÇÃO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-black text-[#f5f1eb]">
                A Arte em <span className="text-[#d4aa7a] italic">Prática.</span>
              </h3>
            </div>

            {/* Grid com 3 fotos dele trabalhando/barbearia */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              
              {/* Foto 1 (thaylle4.png) */}
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
                <Image 
                  src="/thaylle4.png" 
                  alt="Thaylle trabalhando na Falcão Barbearia" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] hover:grayscale-0"
                />
              </div>

              {/* Foto 2 (thaylle2.JPEG - Deslocada para baixo para charme de design) */}
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/5 group md:mt-12">
                <Image 
                  src="/cortes/corte19.png" 
                  alt="Thaylle finalizando um corte" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] hover:grayscale-0"
                />
              </div>

              {/* Foto 3 (Reutilizando a thaylle3.JPEG ou uma de corte se preferir) */}
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/5 group">
                <Image 
                 src="/cortes/corte20.png" 
                  alt="Detalhe do trabalho do Thaylle" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] hover:grayscale-0"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}