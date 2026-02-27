"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    ano: "2020",
    titulo: "O começo",
    texto: "Thaylle inicia os primeiros cortes, aprendendo na prática e ganhando confiança dos primeiros clientes.",
  },
  {
    ano: "Evolução",
    titulo: "Técnica e detalhe",
    texto: "Aperfeiçoamento constante em degradê, acabamento e barba completa.",
  },
  {
    ano: "Hoje",
    titulo: "Experiência Falcão",
    texto: "Atendimento mais profissional, ambiente mais estruturado e identidade forte.",
  },
  {
    ano: "Futuro",
    titulo: "Sempre em avanço",
    texto: "Prontos para evoluir com novas ideias, tendências e melhorias para quem senta na cadeira.",
  },
];

const pilares = [
  { titulo: "Precisão",     texto: "Acabamento alinhado, degradê limpo e linhas bem definidas." },
  { titulo: "Atitude",      texto: "Estilo que acompanha sua personalidade — do clássico ao ousado." },
  { titulo: "Confiança",    texto: "Transparência, escuta atenta e compromisso com o resultado." },
  { titulo: "Pontualidade", texto: "Horário marcado é compromisso sério com o seu tempo." },
];

const servicos = [
  { nome: "Corte na máquina", preco: "R$ 30"  },
  { nome: "Corte tesoura",    preco: "R$ 35"  },
  { nome: "Barba completa",   preco: "R$ 15"  },
  { nome: "Pezinho",          preco: "R$ 15"  },
  { nome: "Pigmentação",      preco: "R$ 20"  },
  { nome: "Sobrancelha",      preco: "R$ 10"  },
  { nome: "Nevou",            preco: "R$ 100" },
  { nome: "Luzes",            preco: "R$ 80"  },
];

export default function Valores() {
  const titleRef      = useRef(null);
  const titleInView   = useInView(titleRef,    { once: true, margin: "-80px" });
  const timelineRef   = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });
  const pilaresRef    = useRef(null);
  const pilaresInView = useInView(pilaresRef,  { once: true, margin: "-60px" });
  const precosRef     = useRef(null);
  const precosInView  = useInView(precosRef,   { once: true, margin: "-60px" });

  return (
    <section
      id="valores"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute rounded-full"
          style={{
            right: "-8%", top: "20%",
            width: "480px", height: "480px",
            background: "radial-gradient(circle, rgba(197,157,110,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            left: "-8%", bottom: "10%",
            width: "380px", height: "380px",
            background: "radial-gradient(circle, rgba(197,157,110,0.03) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Linha top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.38), transparent)" }}
        animate={{ opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span
                  className="font-mono text-[10px] tracking-[0.42em] uppercase"
                  style={{ color: "rgba(197,157,110,0.80)" }}
                >
                  Filosofia
                </span>
                <motion.div
                  className="h-px flex-1 max-w-[90px]"
                  style={{ background: "linear-gradient(to right, rgba(197,157,110,0.60), transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={titleInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.93] tracking-tight"
                style={{ color: "#e6dfd5" }}
              >
                Nossos
                <br />
                <span style={{ color: "#c59d6e" }}>Pilares</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="max-w-xs text-sm leading-relaxed lg:text-right"
              style={{ color: "rgba(160,156,174,0.55)" }}
            >
              Desde 2021, crescendo junto com nossos clientes.
              Técnica, atendimento e essência de barbearia de verdade.
            </motion.p>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className="mb-24">
          <motion.div
            className="hidden md:block h-px mb-12"
            style={{ background: "linear-gradient(to right, transparent, rgba(197,157,110,0.35), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={timelineInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.ano}
                initial={{ opacity: 0, y: 28 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#c59d6e" }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.28 }}
                  />
                  <span
                    className="text-[11px] font-mono tracking-[0.32em] uppercase"
                    style={{ color: "#c59d6e" }}
                  >
                    {item.ano}
                  </span>
                </div>

                <h3
                  className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#c59d6e]"
                  style={{ color: "#e6dfd5" }}
                >
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(160,156,174,0.58)" }}>
                  {item.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Pilares + Preços ── */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Pilares */}
          <div ref={pilaresRef}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={pilaresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="text-[11px] font-mono tracking-[0.32em] uppercase"
                style={{ color: "rgba(197,157,110,0.75)" }}
              >
                4 Pilares
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, rgba(197,157,110,0.28), transparent)" }}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pilares.map((pilar, i) => (
                <motion.div
                  key={pilar.titulo}
                  initial={{ opacity: 0, y: 18 }}
                  animate={pilaresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.10 + i * 0.08 }}
                  className="group p-5 rounded-2xl transition-all duration-350"
                  style={{
                    background: "#0d0d18",
                    border: "1px solid rgba(197,157,110,0.09)",
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(197,157,110,0.30)",
                    backgroundColor: "#111128",
                  }}
                >
                  <motion.div
                    className="w-8 h-0.5 mb-4 origin-left"
                    style={{ background: "#c59d6e" }}
                    initial={{ scaleX: 0 }}
                    animate={pilaresInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.28 + i * 0.10 }}
                  />
                  <h4
                    className="text-base font-semibold mb-2 transition-colors duration-300 group-hover:text-[#c59d6e]"
                    style={{ color: "#e6dfd5" }}
                  >
                    {pilar.titulo}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(160,156,174,0.55)" }}>
                    {pilar.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tabela de preços */}
          <div ref={precosRef}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={precosInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="text-[11px] font-mono tracking-[0.32em] uppercase"
                style={{ color: "rgba(197,157,110,0.75)" }}
              >
                Valores
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, rgba(197,157,110,0.28), transparent)" }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={precosInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.10 }}
              className="p-6 rounded-2xl"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(197,157,110,0.09)",
              }}
            >
              <div className="space-y-0">
                {servicos.map((item, i) => (
                  <motion.div
                    key={item.nome}
                    initial={{ opacity: 0, x: -16 }}
                    animate={precosInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.14 + i * 0.045 }}
                    className="group flex items-center gap-3 py-3"
                    style={{
                      borderBottom:
                        i < servicos.length - 1
                          ? "1px solid rgba(197,157,110,0.07)"
                          : "none",
                    }}
                  >
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-[#e6dfd5]"
                      style={{ color: "rgba(184,180,192,0.72)" }}
                    >
                      {item.nome}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted"
                      style={{ borderColor: "rgba(197,157,110,0.10)" }}
                    />
                    <motion.span
                      className="text-sm font-bold"
                      style={{ color: "#c59d6e" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.preco}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Observação */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={precosInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.52 }}
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid rgba(197,157,110,0.08)" }}
              >
                <p className="text-[11px] leading-relaxed" style={{ color: "rgba(160,156,174,0.38)" }}>
                  Valores referentes ao trabalho anunciado. Pagamento no ato do
                  atendimento. Serviços extras são combinados antes.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to top, rgba(197,157,110,0.20), transparent)" }}
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}