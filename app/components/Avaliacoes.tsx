"use client";

import { motion, type Variants } from "framer-motion";
import { Star, CheckCircle2, Quote, ArrowUpRight } from "lucide-react";

const GOLD = "#b8853a";

const REVIEWS = [
  {
    nome: "Jayllon Gabriel Oliveira",
    tempo: "2 meses atrás",
    texto: "Atendimento impecável e o ambiente é diferenciado. O Thaylle entende do assunto, saí com o corte exatamente como pedi. A melhor experiência de barbearia que já tive.",
    servico: "Corte & Barba",
    stars: 5,
  },
  {
    nome: "Keirisson Silva",
    tempo: "2 meses atrás",
    texto: "Corte de cabelo perfeito, recomendo demais. O melhor da região sem dúvidas. Profissionalismo puro.",
    servico: "Corte na Tesoura",
    stars: 5,
  },
  {
    nome: "Kauã Agiar",
    tempo: "10 meses atrás",
    texto: "Ótimo corte! A atenção aos detalhes no acabamento é o que faz a diferença.",
    servico: "Aparar a barba",
    stars: 5,
  },
];

// Ícone Oficial do Google
function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow-md">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

// Animações
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Avaliacoes = () => {
  return (
    <section id="avaliacoes" className="relative w-full py-32 bg-[#050505] overflow-hidden antialiased">
      
      {/* ── Background Effects & Grain Cinematográfico ── */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(184,133,58,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(184,133,58,0.03)_0%,transparent_40%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ═══════════════════════════════════════
            TOPO — HEADLINE EDITORIAL
            ═══════════════════════════════════════ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-gradient-to-r from-[#b8853a] to-transparent" />
              <span className="text-[#b8853a] font-mono text-[10px] tracking-[0.4em] uppercase font-semibold">
                Vozes da nossa cadeira
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#f5f1eb] leading-[1.05] tracking-tight">
              Honra e <br className="md:hidden" />
              <span className="italic text-[#b8853a] font-normal">Satisfação.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:max-w-sm">
            <p className="text-white/50 text-sm md:text-base font-light leading-relaxed lg:text-right border-l border-white/10 lg:border-l-0 lg:border-r pl-6 lg:pl-0 lg:pr-6">
              A maior métrica da Falcão sempre foi a confiança depositada em cada atendimento. Cada corte carrega experiência, atenção e respeito aos detalhes.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ═══════════════════════════════════════
              ESQUERDA — GOOGLE HERO CARD
              ═══════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-4 lg:sticky lg:top-32 group"
          >
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-2xl overflow-hidden hover:border-[#b8853a]/20 transition-colors duration-700">
              
              {/* Inner Glows */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#b8853a]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10 flex items-center justify-between mb-12">
                <GoogleIcon />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-bold text-white/70 uppercase tracking-widest shadow-inner">
                  <CheckCircle2 size={12} className="text-[#34A853]" /> Verificado
                </div>
              </div>
              
              <div className="mb-12 relative z-10">
                <div className="flex items-start gap-4">
                  <span className="text-[6rem] md:text-[7rem] leading-none font-serif font-black text-[#f5f1eb] tracking-tighter drop-shadow-2xl">
                    4.9
                  </span>
                  <div className="flex flex-col pt-4">
                    <div className="flex gap-1 text-[#b8853a] mb-2 drop-shadow-[0_0_8px_rgba(184,133,58,0.4)]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={GOLD} stroke={GOLD} />)}
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">+100 Avaliações</span>
                  </div>
                </div>
              </div>

              {/* Progress Bars Cinematográficas */}
              <div className="space-y-5 mb-12 relative z-10">
                {[5, 4, 3].map((num) => (
                  <div key={num} className="space-y-2">
                    <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/40 font-semibold">
                      <span>{num} Estrelas</span>
                      <span>{num === 5 ? "96%" : num === 4 ? "3%" : "1%"}</span>
                    </div>
                    <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: num === 5 ? "96%" : num === 4 ? "3%" : "1%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#b8853a]/80 to-[#d4aa7a] shadow-[0_0_10px_rgba(184,133,58,0.5)] rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://g.page/r/Cewn8rudWU9rEBM/review"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden group/btn w-full py-5 rounded-xl bg-[#b8853a] text-[#050505] text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-500 shadow-[0_0_20px_rgba(184,133,58,0.15)] hover:shadow-[0_0_30px_rgba(184,133,58,0.3)] z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Escrever Avaliação
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════
              DIREITA — CARDS DE AVALIAÇÃO PREMIUM
              ═══════════════════════════════════════ */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={staggerContainer}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {REVIEWS.map((review, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                // O primeiro card ganha destaque (ocupa 2 colunas no tablet/desktop) para quebrar o grid e parecer mais editorial.
                className={`group relative p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] hover:border-[#b8853a]/20 transition-all duration-700 overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Background Decorativo Sutil */}
                <Quote className="absolute -top-6 -right-6 text-white/[0.02] group-hover:text-[#b8853a]/5 transition-colors duration-700 rotate-12 scale-150" size={140} />
                <div className="absolute inset-0 bg-gradient-to-br from-[#b8853a]/0 via-[#b8853a]/0 to-[#b8853a]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header do Card */}
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#111] border border-white/10 flex items-center justify-center text-[#f5f1eb] font-serif italic font-black text-xl shadow-lg">
                          {review.nome.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#050505] p-1 rounded-full">
                          <div className="bg-[#34A853] w-3 h-3 rounded-full border border-white/10" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[#f5f1eb] font-semibold text-base tracking-tight mb-1">{review.nome}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">{review.tempo}</p>
                      </div>
                    </div>

                    {/* Corpo do Review */}
                    <p className={`text-white/60 font-light leading-relaxed mb-10 ${i === 0 ? 'text-lg md:text-xl md:leading-loose' : 'text-base'}`}>
                      "{review.texto}"
                    </p>
                  </div>

                  {/* Footer do Card */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8853a] opacity-60" />
                      <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-medium">{review.servico}</span>
                    </div>
                    <div className="flex gap-1 text-[#b8853a]">
                      {[...Array(review.stars)].map((_, s) => <Star key={s} size={12} fill={GOLD} stroke="transparent" className="opacity-90 group-hover:opacity-100" />)}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;
