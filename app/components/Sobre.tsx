"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { titulo: "Ambiente acolhedor", texto: "Espaço confortável, pensado para você se sentir bem.", icon: "◈" },
  { titulo: "Detalhe no acabamento", texto: "Degradê bem feito, linha precisa e barba alinhada.", icon: "✦" },
  { titulo: "Foco na experiência", texto: "Não é só um corte — é o seu momento de relaxar.", icon: "◉" },
];

function FadeIn({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const initial = { opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? -50 : direction === "right" ? 50 : 0 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Sobre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative w-full bg-black py-28 text-zinc-300 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ background: ["radial-gradient(circle at 20% 50%, #1a150f 0%, #000 60%)", "radial-gradient(circle at 80% 50%, #1a150f 0%, #000 60%)", "radial-gradient(circle at 20% 50%, #1a150f 0%, #000 60%)"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        animate={{ background: ["radial-gradient(circle, rgba(197,157,110,0.06) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.12) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.06) 0%, transparent 70%)"] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:items-start">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <FadeIn>
            <span className="inline-block font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase border border-[#c59d6e]/30 px-3 py-1 mb-3">
              ✦ Sobre a barbearia
            </span>
            <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl leading-tight">
              Sobre a{" "}
              <span className="relative inline-block">
                Falcão
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#c59d6e] to-transparent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  ref={ref}
                  style={{ width: "100%" }}
                />
              </span>{" "}
              Barbearia
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-zinc-300 leading-relaxed">
              A Falcão Barbearia nasceu para unir a tradição das barbearias clássicas com a experiência moderna. Um ambiente criado para você relaxar, alinhar o visual e sair com confiança.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-zinc-400 leading-relaxed">
              No comando está{" "}
              <motion.span
                className="text-[#c59d6e] font-semibold"
                animate={{ textShadow: ["0 0 0px #c59d6e", "0 0 14px #c59d6e60", "0 0 0px #c59d6e"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                𝑇ℎ𝑎𝑦𝑙𝑙𝑒
              </motion.span>
              , jovem barbeiro que começou a cortar cabelo em 2020. Desde então, vem se destacando pela dedicação, profissionalismo e busca constante pela excelência. Seu foco sempre foi entregar cortes bem trabalhados, acabamento limpo e um atendimento que valoriza cada cliente.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-zinc-400 leading-relaxed">
              Em um mundo acelerado, a Falcão Barbearia é o espaço onde a tradição encontra a elegância moderna: conversa leve, atenção aos detalhes e ambiente confortável.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeIn key={p.titulo} delay={0.6 + i * 0.12}>
                <motion.div
                  className="rounded-2xl bg-[#0a0a0a]/60 p-6 border border-zinc-800 h-full"
                  whileHover={{ borderColor: "rgba(197,157,110,0.6)", y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(197,157,110,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-2xl block mb-3 text-[#c59d6e]">{p.icon}</span>
                  <h3 className="text-base font-semibold text-[#c59d6e] mb-2">{p.titulo}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.texto}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} direction="right" className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-3xl"
              animate={{
                background: [
                  "conic-gradient(from 0deg, rgba(197,157,110,0.15), transparent, rgba(197,157,110,0.15))",
                  "conic-gradient(from 180deg, rgba(197,157,110,0.15), transparent, rgba(197,157,110,0.15))",
                  "conic-gradient(from 360deg, rgba(197,157,110,0.15), transparent, rgba(197,157,110,0.15))",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              <Image
                src="/thaylle.jpg"
                alt="Barbeiro 𝑇ℎ𝑎𝑦𝑙𝑙𝑒"
                width={480}
                height={600}
                className="rounded-3xl object-cover shadow-[0_0_60px_rgba(197,157,110,0.15)] border border-zinc-800 max-w-[300px] sm:max-w-[360px] md:max-w-[420px] relative z-10"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />
              <div className="absolute bottom-5 left-5 z-30">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="rounded-xl bg-black/70 backdrop-blur-sm border border-[#c59d6e]/30 px-4 py-2"
                >
                  <p className="text-sm font-semibold text-[#c59d6e]">𝑇ℎ𝑎𝑦𝑙𝑙𝑒</p>
                  <p className="text-[10px] tracking-widest uppercase text-zinc-400">Barbeiro & Fundador</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}