"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial = { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -40 : direction === "right" ? 40 : 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

function TimelineBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="hidden sm:block absolute top-5 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-[#c59d6e] via-[#c59d6e]/60 to-[#c59d6e]/20"
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export default function Valores() {
  return (
    <section id="valores" className="relative w-full bg-black py-28 text-zinc-300 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ background: ["radial-gradient(circle at top, #1a150f, #000) opacity-40", "radial-gradient(circle at bottom, #1a150f, #000) opacity-40", "radial-gradient(circle at top, #1a150f, #000) opacity-40"] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6">
        <FadeIn>
          <span className="inline-block font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase border border-[#c59d6e]/30 px-3 py-1 mb-4">
            ✦ Filosofia
          </span>
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Nossos Pilares: A Filosofia Falcão
          </h2>
          <motion.div
            className="mt-3 h-[1px] w-24 bg-gradient-to-r from-[#c59d6e] to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="mt-5 text-lg leading-relaxed text-zinc-300 max-w-3xl">
            Desde 2021, a Falcão Barbearia vem crescendo junto com seus clientes. Começamos em um espaço simples, evoluímos na técnica e no atendimento e agora damos mais um passo, prontos para o futuro — sem perder a essência de barbearia de verdade.
          </p>
          <p className="mt-3 leading-relaxed text-zinc-400 max-w-3xl">
            Cada corte é parte dessa construção: início, evolução e um presente preparado para o que vem pela frente.
          </p>
        </FadeIn>

        <div className="relative">
          <TimelineBar />
          <div className="grid gap-6 rounded-3xl border border-zinc-800 bg-[#050505]/70 p-8 sm:grid-cols-4 relative">
            {timeline.map((item, i) => (
              <FadeIn key={item.ano} delay={i * 0.12}>
                <motion.div
                  className="relative pt-8"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#c59d6e] rotate-45"
                    whileHover={{ scale: 1.5, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c59d6e]">{item.ano}</p>
                  <h3 className="mt-2 text-sm font-semibold text-[#e4ddd2]">{item.titulo}</h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{item.texto}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-[1.15fr_0.95fr]">
          <div>
            <FadeIn>
              <h3 className="text-2xl font-semibold text-[#e4ddd2]">4 Pilares da marca</h3>
              <p className="mt-2 text-sm text-zinc-400 max-w-md">
                A cada atendimento, a Falcão Barbearia se apoia nesses pilares para entregar um padrão alto em tudo que faz.
              </p>
            </FadeIn>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pilares.map((pilar, i) => (
                <FadeIn key={pilar.titulo} delay={0.1 + i * 0.1}>
                  <motion.div
                    className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5 h-full"
                    whileHover={{ borderColor: "rgba(197,157,110,0.6)", y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(197,157,110,0.08)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="w-6 h-[2px] bg-[#c59d6e] mb-3"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    />
                    <h4 className="text-base font-semibold text-[#c59d6e]">{pilar.titulo}</h4>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{pilar.texto}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <FadeIn delay={0.1} direction="right">
              <motion.div
                className="rounded-3xl border border-zinc-800 bg-[#050505]/90 p-7 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                whileHover={{ boxShadow: "0 0 60px rgba(0,0,0,0.8), 0 0 30px rgba(197,157,110,0.08)" }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-[#e4ddd2]">Tabela de preços</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#c59d6e]">valores por serviço</p>

                <div className="mt-5 space-y-3 text-sm">
                  {servicos.map((item, i) => (
                    <motion.div
                      key={item.nome}
                      className="flex items-center gap-2 text-zinc-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xs font-medium uppercase tracking-wide text-zinc-300">{item.nome}</span>
                      <span className="mx-2 flex-1 border-b border-dotted border-zinc-700" />
                      <motion.span
                        className="text-sm font-bold text-[#c59d6e]"
                        whileHover={{ textShadow: "0 0 12px rgba(197,157,110,0.8)" }}
                      >
                        {item.preco}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <motion.div
                className="relative rounded-2xl bg-[#2a1d07]/80 border border-[#e0b566] px-5 py-5 text-sm text-[#f3e4c2] backdrop-blur-sm"
                animate={{ boxShadow: ["0 0 20px rgba(224,181,102,0.3)", "0 0 35px rgba(224,181,102,0.5)", "0 0 20px rgba(224,181,102,0.3)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span
                  className="absolute -top-3 -right-3 rounded-full bg-red-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white border border-red-400"
                  animate={{ boxShadow: ["0 0 10px rgba(220,38,38,0.6)", "0 0 20px rgba(220,38,38,0.9)", "0 0 10px rgba(220,38,38,0.6)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  IMPORTANTE
                </motion.span>

                <p className="font-semibold text-[#ffd27c]">⚠️ Observações importantes:</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[#f3e4c2]/90">
                  <li>Valores referentes ao trabalho anunciado para cada serviço.</li>
                  <li>Pagamento somente no ato do atendimento.</li>
                  <li>Qualquer serviço extra ou alteração é combinado e ajustado antes da execução.</li>
                </ul>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}