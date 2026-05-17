"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Flame, 
  Smile, 
  CheckCircle 
} from "lucide-react";

const GOLD = "#b8853a";
const DARK_CARD = "rgba(12, 12, 12, 0.7)";

const diferenciais = [
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: "Corte no detalhe",
    desc: "Acabamento limpo, degradê alinhado e atenção até no último fio."
  },
  {
    icon: <Smile size={24} strokeWidth={1.5} />,
    title: "Ambiente diferenciado",
    desc: "Lugar confortável, resenha boa e experiência completa."
  },
  {
    icon: <Flame size={24} strokeWidth={1.5} />,
    title: "Visual atualizado",
    desc: "Fade, social, americano, low fade, freestyle e muito mais."
  },
  {
    icon: <CheckCircle size={24} strokeWidth={1.5} />,
    title: "Resultado de respeito",
    desc: "Você sai pronto pra foto, pro rolê ou pra qualquer ocasião."
  }
];

export default function Experiencia() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden select-none">
      {/* Background Decorativo e Luzes */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#b8853a]/3 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção Estilo Hype */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#b8853a] font-bold text-[10px] tracking-[0.3em] uppercase block"
            >
              Sem Enrolação
            </motion.span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-black text-[#f5f1eb] tracking-tight"
          >
            Por que geral corta <br className="hidden sm:block" />
            na <span className="italic text-[#d4aa7a]">Falcão?</span>
          </motion.h2>
        </div>

        {/* Grid Adaptado para 4 Elementos mais compacto e focado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {diferenciais.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: "rgba(184,133,58,0.4)" }}
              className="group relative p-6 rounded-xl border border-white/5 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[190px]"
              style={{ background: DARK_CARD, backdropFilter: "blur(12px)" }}
            >
              {/* Soft Dourado Glow no Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8853a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div>
                {/* Ícone Estilo Selo */}
                <div className="text-[#b8853a] mb-5 w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#b8853a]/10 group-hover:border-[#b8853a]/20">
                  {item.icon}
                </div>

                {/* Texto Curto */}
                <h3 className="text-[#f5f1eb] text-base font-bold mb-2 tracking-tight group-hover:text-[#d4aa7a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Tag Numérica Streetwear */}
              <div className="absolute bottom-3 right-4 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-300">
                <span className="text-[36px] font-black tracking-tighter text-[#b8853a]">//0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}