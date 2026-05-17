"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Zap, 
  Flame, 
  Smile, 
  CheckCircle,
  Scissors, 
  Crown, 
  Droplet 
} from "lucide-react";
import { WHATSAPP_LINK } from "../utils/links";

const GOLD = "#b8853a";
const DARK_CARD = "rgba(12, 12, 12, 0.7)";

// ─── ANIMAÇÕES PREMIUM (Framer Motion) ─────────────────────────────────────────
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

// ─── DADOS: EXPERIÊNCIA ────────────────────────────────────────────────────────
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

// ─── DADOS: SERVIÇOS ───────────────────────────────────────────────────────────
const categorias = [
  {
    titulo: "Cortes & Estilo",
    icon: <Scissors size={20} strokeWidth={1.5} />,
    itens: [
      { nome: "Corte Tradicional", desc: "Na régua e no estilo que você já conhece.", preco: "30" },
      { nome: "Corte na Tesoura", desc: "Design exclusivo feito 100% na tesoura.", preco: "40", maisPedido: true },
      { nome: "Pezinho", desc: "Alinhamento rápido de contorno e nuca.", preco: "15" },
    ]
  },
  {
    titulo: "Barba & Rosto",
    icon: <Crown size={20} strokeWidth={1.5} />,
    itens: [
      { nome: "Barba Premium", desc: "Terapia de toalha quente e acabamento navalhado.", preco: "15", maisPedido: true },
      { nome: "Sobrancelha", desc: "Limpeza de contorno prática e bem alinhada.", preco: "10" },
      { nome: "Pigmentação", desc: "Correção de imperfeições com aspecto natural.", preco: "20" },
    ]
  },
  {
    titulo: "Química & Cor",
    icon: <Droplet size={20} strokeWidth={1.5} />,
    itens: [
      { nome: "Nevou", desc: "Descoloração global platinada pura, sem quebrar o fio.", preco: "100", maisPedido: true },
      { nome: "Luzes", desc: "Mechas e reflexos de alto contraste pra iluminar.", preco: "80" },
      { nome: "Desondulação", desc: "Redução extrema de volume e alinhamento do fio.", preco: "100" },
    ]
  }
];

// ─── COMPONENTE 1: EXPERIÊNCIA (DIFERENCIAIS) ──────────────────────────────────
export function Experiencia() {
  return (
    <section id="diferenciais" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#b8853a]/3 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Animado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
            <span className="text-[#b8853a] font-bold text-[10px] tracking-[0.3em] uppercase block">
              Sem Enrolação
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-black text-[#f5f1eb] tracking-tight">
            Por que geral corta <br className="hidden sm:block" />
            na <span className="italic text-[#d4aa7a]">Falcão?</span>
          </motion.h2>
        </motion.div>

        {/* Grid de Diferenciais Animado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {diferenciais.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(184,133,58,0.4)" }}
              className="group relative p-6 rounded-xl border border-white/5 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[190px]"
              style={{ background: DARK_CARD, backdropFilter: "blur(12px)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8853a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <div>
                <div className="text-[#b8853a] mb-5 w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#b8853a]/10 group-hover:border-[#b8853a]/20">
                  {item.icon}
                </div>
                <h3 className="text-[#f5f1eb] text-base font-bold mb-2 tracking-tight group-hover:text-[#d4aa7a] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-3 right-4 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-300">
                <span className="text-[36px] font-black tracking-tighter text-[#b8853a]">//0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── COMPONENTE 2: SERVIÇOS (TABELA DE VALORES) ────────────────────────────────
export default function Valores() {
  return (
    <section id="valores" className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden antialiased select-none">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(184,133,58,0.04)_0%,transparent_60%)]" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Animado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[10px] tracking-[0.3em] uppercase block">
                Menu de Experiências
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#f5f1eb] font-black leading-tight tracking-tight">
              Tabela de <span className="italic text-[#b8853a] font-normal">Estilo.</span>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/40 text-xs sm:text-sm max-w-xs font-medium leading-relaxed">
            Escolha o trato ideal. Sem complicação, focado no que você precisa.
          </motion.p>
        </motion.div>

        {/* Grid de Serviços Animado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {categorias.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-3.5 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#b8853a]/10 border border-[#b8853a]/20 flex items-center justify-center text-[#b8853a]">
                    {cat.icon}
                  </div>
                  <h3 className="text-[#f5f1eb] font-serif text-lg font-bold tracking-wide">{cat.titulo}</h3>
                </div>

                <div className="space-y-4">
                  {cat.itens.map((item, i) => (
                    <div 
                      key={i} 
                      className="group relative p-4 rounded-xl border border-white/[0.03] bg-black/40 hover:bg-[#b8853a]/[0.02] hover:border-[#b8853a]/20 transition-all duration-300"
                    >
                      {item.maisPedido && (
                        <span className="absolute -top-2 right-4 bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-black text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 z-10">
                          <Zap size={8} fill="black" /> Mais Pedido 🔥
                        </span>
                      )}

                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-[14px] font-bold text-white group-hover:text-[#d4aa7a] transition-colors">
                          {item.nome}
                        </h4>
                        <span className="text-[#b8853a] font-black text-sm whitespace-nowrap ml-2">
                          R$ {item.preco}
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-white/40 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/[0.03] border border-white/5 hover:border-[#b8853a]/40 hover:bg-[#b8853a] hover:text-black rounded-xl text-center text-[10px] font-black uppercase tracking-widest text-white/80 block transition-all active:scale-[0.98]"
                >
                  Agendar desta lista
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
