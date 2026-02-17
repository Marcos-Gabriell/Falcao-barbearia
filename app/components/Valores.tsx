"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { ano: "2020", titulo: "O começo", texto: "Thaylle inicia os primeiros cortes, aprendendo na prática e ganhando confiança dos primeiros clientes." },
  { ano: "Evolução", titulo: "Técnica e detalhe", texto: "Aperfeiçoamento constante em degradê, acabamento e barba completa." },
  { ano: "Hoje", titulo: "Experiência Falcão", texto: "Atendimento mais profissional, ambiente mais estruturado e identidade forte." },
  { ano: "Futuro", titulo: "Sempre em avanço", texto: "Prontos para evoluir com novas ideias, tendências e melhorias para quem senta na cadeira." },
];

const pilares = [
  { titulo: "Precisão", texto: "Acabamento alinhado, degradê limpo e linhas bem definidas." },
  { titulo: "Atitude", texto: "Estilo que acompanha sua personalidade — do clássico ao ousado." },
  { titulo: "Confiança", texto: "Transparência, escuta atenta e compromisso com o resultado." },
  { titulo: "Pontualidade", texto: "Horário marcado é compromisso sério com o seu tempo." },
];

const servicos = [
  { nome: "Corte na máquina", preco: "R$ 30" },
  { nome: "Corte tesoura", preco: "R$ 35" },
  { nome: "Barba completa", preco: "R$ 15" },
  { nome: "Pezinho", preco: "R$ 15" },
  { nome: "Pigmentação", preco: "R$ 20" },
  { nome: "Sobrancelha", preco: "R$ 10" },
  { nome: "Nevou", preco: "R$ 100" },
  { nome: "Luzes", preco: "R$ 80" },
];

export default function Valores() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });
  const pilaresRef = useRef(null);
  const pilaresInView = useInView(pilaresRef, { once: true, margin: "-60px" });
  const precosRef = useRef(null);
  const precosInView = useInView(precosRef, { once: true, margin: "-60px" });

  return (
    <section id="valores" className="relative w-full bg-transparent py-32 text-zinc-300 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(197,157,110,0.04),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(197,157,110,0.03),_transparent_50%)]" />
      </div>

      {/* Top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.4), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header - mesmo padrão da galeria */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase">
                  Filosofia
                </span>
                <motion.div
                  className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[#c59d6e]/60 to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={titleInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e4ddd2] leading-[0.95] tracking-tight"
              >
                Nossos
                <br />
                <span className="text-[#c59d6e]">Pilares</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-xs text-sm leading-relaxed lg:text-right"
            >
              Desde 2021, crescendo junto com nossos clientes. Técnica, atendimento e essência de barbearia de verdade.
            </motion.p>
          </div>
        </div>

        {/* Timeline - horizontal clean */}
        <div ref={timelineRef} className="mb-24">
          {/* Timeline line */}
          <motion.div
            className="hidden md:block h-px bg-gradient-to-r from-transparent via-[#c59d6e]/40 to-transparent mb-12"
            initial={{ scaleX: 0 }}
            animate={timelineInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.ano}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                {/* Dot indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#c59d6e]"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <span className="text-[11px] font-mono tracking-[0.3em] text-[#c59d6e] uppercase">
                    {item.ano}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#e4ddd2] mb-2 group-hover:text-[#c59d6e] transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.texto}
                </p>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[#c59d6e]/30 w-0 group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pilares + Preços grid */}
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Pilares */}
          <div ref={pilaresRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pilaresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#c59d6e] uppercase">
                4 Pilares
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#c59d6e]/30 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pilares.map((pilar, i) => (
                <motion.div
                  key={pilar.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={pilaresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-[#c59d6e]/30 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="w-8 h-0.5 bg-[#c59d6e] mb-4 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={pilaresInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  />
                  <h4 className="text-base font-semibold text-[#e4ddd2] mb-2 group-hover:text-[#c59d6e] transition-colors">
                    {pilar.titulo}
                  </h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {pilar.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tabela de preços */}
          <div ref={precosRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={precosInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#c59d6e] uppercase">
                Valores
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#c59d6e]/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={precosInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50"
            >
              <div className="space-y-3">
                {servicos.map((item, i) => (
                  <motion.div
                    key={item.nome}
                    initial={{ opacity: 0, x: -20 }}
                    animate={precosInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.04 }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {item.nome}
                    </span>
                    <span className="flex-1 border-b border-dotted border-zinc-800 group-hover:border-zinc-700 transition-colors" />
                    <motion.span
                      className="text-sm font-bold text-[#c59d6e]"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.preco}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Observação sutil */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={precosInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 pt-4 border-t border-zinc-800/50"
              >
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  Valores referentes ao trabalho anunciado. Pagamento no ato do atendimento. Serviços extras são combinados antes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-[#c59d6e]/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}