"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destaques = [
  {
    titulo: "Ambiente acolhedor",
    texto: "Espaço confortável, pensado para você se sentir bem.",
  },
  {
    titulo: "Detalhe no acabamento",
    texto: "Degradê bem feito, linha precisa e barba alinhada.",
  },
  {
    titulo: "Foco na experiência",
    texto: "Não é só um corte — é o seu momento de relaxar.",
  },
];

export default function Sobre() {
  const titleRef    = useRef(null);
  const titleInView = useInView(titleRef,   { once: true, margin: "-80px" });
  const contentRef  = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const imageRef    = useRef(null);
  const imageInView = useInView(imageRef,   { once: true, margin: "-60px" });

  return (
    <section
      id="sobre"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute rounded-full"
          style={{
            left: "-10%", top: "40%",
            width: "520px", height: "520px",
            background: "radial-gradient(circle, rgba(197,157,110,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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
                  Sobre
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
                Falcão
                <br />
                <span style={{ color: "#c59d6e" }}>Barbearia</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="max-w-xs text-sm leading-relaxed lg:text-right"
              style={{ color: "rgba(160,156,174,0.55)" }}
            >
              Tradição das barbearias clássicas com a experiência moderna.
              Relaxe, alinhe o visual e saia com confiança.
            </motion.p>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] items-start">

          {/* Texto */}
          <div ref={contentRef} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <p
                className="text-lg leading-relaxed font-medium"
                style={{ color: "#c8c4d4" }}
              >
                A Falcão Barbearia nasceu para unir a tradição das barbearias
                clássicas com a experiência moderna. Um ambiente criado para você
                relaxar, alinhar o visual e sair com confiança.
              </p>

              <p className="leading-relaxed" style={{ color: "rgba(160,156,174,0.65)" }}>
                No comando está{" "}
                <span style={{ color: "#c59d6e", fontWeight: 600 }}>Thaylle</span>,
                jovem barbeiro que começou a cortar cabelo em 2020. Desde então,
                vem se destacando pela dedicação, profissionalismo e busca
                constante pela excelência.
              </p>

              <p className="leading-relaxed" style={{ color: "rgba(160,156,174,0.65)" }}>
                Seu foco sempre foi entregar cortes bem trabalhados, acabamento
                limpo e um atendimento que valoriza cada cliente. Em um mundo
                acelerado, a Falcão é o espaço onde a tradição encontra a
                elegância moderna.
              </p>
            </motion.div>

            {/* Destaques */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={contentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-8"
              style={{ borderTop: "1px solid rgba(197,157,110,0.10)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {destaques.map((item, i) => (
                  <motion.div
                    key={item.titulo}
                    initial={{ opacity: 0, y: 18 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.10 }}
                    className="group"
                  >
                    <motion.div
                      className="w-6 h-0.5 mb-4 origin-left"
                      style={{ background: "#c59d6e" }}
                      initial={{ scaleX: 0 }}
                      animate={contentInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.38 + i * 0.10 }}
                    />
                    <h3
                      className="text-sm font-semibold mb-2 transition-colors duration-300 group-hover:text-[#c59d6e]"
                      style={{ color: "#e6dfd5" }}
                    >
                      {item.titulo}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(160,156,174,0.55)" }}>
                      {item.texto}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Imagem */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 36 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Anel cônico animado */}
            <motion.div
              className="absolute -inset-3 rounded-3xl opacity-40"
              animate={{
                background: [
                  "conic-gradient(from 0deg, rgba(197,157,110,0.12), transparent, rgba(197,157,110,0.12))",
                  "conic-gradient(from 180deg, rgba(197,157,110,0.12), transparent, rgba(197,157,110,0.12))",
                  "conic-gradient(from 360deg, rgba(197,157,110,0.12), transparent, rgba(197,157,110,0.12))",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/thaylle.jpg"
                alt="Thaylle - Barbeiro & Fundador"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,10,0.72) 0%, rgba(5,5,10,0.10) 45%, transparent 100%)",
                }}
              />

              {/* Badge nome */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={imageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.62 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-0.5"
                    style={{ background: "#c59d6e" }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={imageInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.80 }}
                  />
                  <div>
                    <p className="text-base font-semibold" style={{ color: "#e6dfd5" }}>
                      Thaylle
                    </p>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ color: "rgba(197,157,110,0.65)" }}
                    >
                      Barbeiro &amp; Fundador
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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