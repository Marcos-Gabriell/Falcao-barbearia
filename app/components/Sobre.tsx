"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Títulos alterados para focar nos "Pilares" e não apenas nos "Serviços/Benefícios"
const destaques = [
  {
    titulo: "Precisão",
    texto: "Fade limpo e atenção aos mínimos detalhes na régua.",
  },
  {
    titulo: "Autenticidade",
    texto: "Construímos um visual que combina com a sua presença.",
  },
  {
    titulo: "Experiência",
    texto: "Música, conversa boa e um espaço para você relaxar.",
  },
  {
    titulo: "Exclusividade",
    texto: "Aqui você não é só mais um corte. O seu momento importa.",
  },
];

export default function Sobre() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      className="relative w-full py-32 md:py-48 overflow-hidden bg-[#070707] select-none"
      ref={containerRef}
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <motion.div
          className="absolute right-[-10%] top-[20%] rounded-full"
          style={{
            width: "600px", height: "600px",
            background: `radial-gradient(ellipse, rgba(184,133,58,0.08) 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] w-full text-center">
          <h2 className="text-[18vw] font-serif font-black leading-none tracking-tighter">PRESENÇA</h2>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          {/* ── LADO ESQUERDO: LOOKBOOK GRID ── */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-2 md:gap-3"
            >
              <div className="relative row-span-2 h-full w-full group overflow-hidden rounded-l-xl">
                <Image
                  src="/cortes/corte21.png" 
                  alt="Corte Falcão Principal"
                  fill
                  className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>

              <div className="relative h-full w-full group overflow-hidden rounded-tr-xl">
                <Image
                  src="/cortes/corte22.png" 
                  alt="Detalhe Corte Falcão"
                  fill
                  className="object-cover object-top transition-transform duration-[3s] ease-out group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>

              <div className="relative h-full w-full group overflow-hidden rounded-br-xl">
                <Image
                  src="/cortes/corte23.png" 
                  alt="Fade Falcão"
                  fill
                  className="object-cover object-center transition-transform duration-[3s] ease-out group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none z-10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -left-4 md:-left-10 z-20 backdrop-blur-xl bg-[#070707]/80 p-6 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(184,133,58,0.15)] flex items-center gap-5"
            >
              <div className="text-[#b8853a] font-serif italic font-black text-4xl md:text-5xl leading-none">
                +4<span className="text-2xl">anos</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold max-w-[120px] leading-relaxed">
                Transformando estilo em presença
              </p>
            </motion.div>
          </div>

          {/* ── LADO DIREITO: CONTEÚDO E CARDS ── */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
                <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                  Nossa Essência
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-serif font-black text-[#f5f1eb] leading-[1.1] mb-8 tracking-tight">
                Estilo não se explica. <br />
                <span className="text-[#d4aa7a] italic">Se mostra.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-6 text-white/60 text-sm md:text-base leading-relaxed max-w-xl font-medium"
            >
              <p>
                A Falcão não é só um lugar pra cortar cabelo. É onde estilo, presença e autoestima se encontram. 
                Cada corte é pensado nos detalhes pra fazer você sair diferente — mais alinhado, mais confiante e pronto pra qualquer ocasião.
              </p>
            </motion.div>

            {/* Pilares da Marca */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {destaques.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="group relative bg-white/[0.02] border border-white/5 hover:border-[#b8853a]/30 p-5 rounded-2xl transition-all duration-300 hover:bg-[#b8853a]/[0.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b8853a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8853a] opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h3 className="text-[#f5f1eb] font-bold text-xs md:text-sm uppercase tracking-[0.15em] group-hover:text-[#d4aa7a] transition-colors">
                        {item.titulo}
                      </h3>
                    </div>
                    <p className="text-white/40 text-[11px] md:text-xs leading-relaxed font-medium pl-3.5 border-l border-white/5 group-hover:border-[#b8853a]/30 transition-colors">
                      {item.texto}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b8853a]/10 to-transparent" />
    </section>
  );
}