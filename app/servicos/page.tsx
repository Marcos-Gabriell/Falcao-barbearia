"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_LINK } from "../utils/links"; 

// IMPORTAÇÃO DA NAVBAR E FOOTER (Ajuste o caminho conforme sua estrutura)
import Navbar from "../../app/components/Header"; 
import Footer from "../../app/components/Footer";

/* ─── DADOS DA GALERIA ──────────────────────────────────────────────────── */
const galeriaCortes = [
  "/cortes/corte10.jpeg",
  "/cortes/corte11.jpeg",
  "/cortes/corte12.jpeg",
  "/cortes/corte13.jpeg",
  "/cortes/corte14.jpeg",
  "/cortes/corte15.jpeg",
  "/cortes/corte16.jpeg",
  "/cortes/coorte17.png",
  "/cortes/corte18.png",
  "/cortes/corte19.png",
  "/cortes/corte20.png",
  "/cortes/Barba.png",
  "/cortes/corte21.png",
  "/cortes/corte22.png",
  "/cortes/corte23.png",
    "/cortes/corte5.png",
];

/* ─── DADOS DOS SERVIÇOS ────────────────────────────────────────────────── */
const menuServicos = [
  {
    categoria: "Cortes & Estilo",
    icone: (
      <svg className="w-5 h-5 text-[#b8853a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
    itens: [
      { nome: "Corte Tradicional", preco: "R$ 30", desc: "Na régua e no estilo que você já conhece.", destaque: false },
      { nome: "Corte na Tesoura", preco: "R$ 40", desc: "Design exclusivo feito 100% na tesoura.", destaque: true },
      { nome: "Pezinho", preco: "R$ 15", desc: "Alinhamento rápido de contorno e nuca.", destaque: false },
    ],
  },
  {
    categoria: "Barba & Rosto",
    icone: (
      <svg className="w-5 h-5 text-[#b8853a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    itens: [
      { nome: "Barba Premium", preco: "R$ 15", desc: "Terapia de toalha quente e acabamento navalhado.", destaque: true },
      { nome: "Sobrancelha", preco: "R$ 10", desc: "Limpeza de contorno prática e bem alinhada.", destaque: false },
      { nome: "Pigmentação", preco: "R$ 20", desc: "Correção de imperfeições com aspecto natural.", destaque: false },
    ],
  },
  {
    categoria: "Química & Cor",
    icone: (
      <svg className="w-5 h-5 text-[#b8853a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    itens: [
      { nome: "Nevou", preco: "R$ 100", desc: "Descoloração global platinada pura, sem quebrar o fio.", destaque: false },
      { nome: "Luzes", preco: "R$ 80", desc: "Mechas e reflexos de alto contraste pra iluminar.", destaque: false },
      { nome: "Desondulação", preco: "R$ 100", desc: "Redução extrema de volume e alinhamento do fio.", destaque: true },
    ],
  },
];

export default function ServicosGaleriaPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        
      {/* ================= SEÇÃO 1: GALERIA COMPLETA (NO TOPO) ================= */}
        <section className="px-6 lg:px-8 max-w-[1400px] mx-auto mb-32 pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Nosso Portfólio
              </span>
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-[#f5f1eb]">
              Trabalhos <span className="text-[#d4aa7a] italic">Recentes.</span>
            </h1>
          </motion.div>

          {/* Grid da Galeria Corrigido */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galeriaCortes.map((imagem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
                className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/5 aspect-[4/5]"
              >
                <Image
                  src={imagem}
                  alt={`Corte de cabelo Falcão Barbearia ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                {/* Overlay que aparece ao passar o mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </section>
        {/* ================= SEÇÃO 2: TABELA DE SERVIÇOS (AGORA EMBAIXO) ================= */}
        <section className="px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-white/5 pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16 md:flex md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
                <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                  Menu de Experiências
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#f5f1eb] leading-tight tracking-tight">
                Tabela de <span className="text-[#d4aa7a] italic">Estilo.</span>
              </h2>
            </div>
            <p className="text-white/50 text-sm md:text-base max-w-sm mt-6 md:mt-0 font-medium">
              Escolha o trato ideal. Sem complicação, focado no que você precisa.
            </p>
          </motion.div>

          {/* Grid de 3 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuServicos.map((coluna, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col"
              >
                {/* Cabeçalho da Categoria */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#b8853a]/10 flex items-center justify-center border border-[#b8853a]/20">
                    {coluna.icone}
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f1eb]">{coluna.categoria}</h3>
                </div>

                {/* Lista de Itens */}
                <div className="flex flex-col gap-6 flex-grow">
                  {coluna.itens.map((item, i) => (
                    <div key={i} className="relative group">
                      {item.destaque && (
                        <div className="absolute -top-3 right-0 bg-gradient-to-r from-[#b8853a] to-[#d4aa7a] text-[#070707] text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full z-10 flex items-center gap-1">
                          ✦ Mais Pedido
                        </div>
                      )}
                      
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-[15px] font-bold text-[#f5f1eb] group-hover:text-[#d4aa7a] transition-colors">
                          {item.nome}
                        </h4>
                        <span className="text-[#d4aa7a] font-bold text-sm bg-[#d4aa7a]/10 px-2 py-0.5 rounded-md">
                          {item.preco}
                        </span>
                      </div>
                      <p className="text-white/40 text-[12px] leading-relaxed pr-4">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Botão Agendar da Lista */}
                <a
                  href="/agendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#b8853a] hover:text-[#070707] hover:border-[#b8853a] transition-all duration-300"
                >
                  Agendar desta lista
                </a>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}