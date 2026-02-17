"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destaques = [
  { titulo: "Ambiente acolhedor", texto: "Espaço confortável, pensado para você se sentir bem." },
  { titulo: "Detalhe no acabamento", texto: "Degradê bem feito, linha precisa e barba alinhada." },
  { titulo: "Foco na experiência", texto: "Não é só um corte — é o seu momento de relaxar." },
];

export default function Sobre() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" });

  return (
    <section id="sobre" className="relative w-full bg-transparent py-32 text-zinc-300 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_rgba(197,157,110,0.04),_transparent_50%)]" />
        <motion.div
          className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #c59d6e 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
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
                  Sobre
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
                Falcão
                <br />
                <span className="text-[#c59d6e]">Barbearia</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-xs text-sm leading-relaxed lg:text-right"
            >
              Tradição das barbearias clássicas com a experiência moderna. Relaxe, alinhe o visual e saia com confiança.
            </motion.p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] items-start">
          
          {/* Text content */}
          <div ref={contentRef} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <p className="text-lg text-zinc-300 leading-relaxed">
                A Falcão Barbearia nasceu para unir a tradição das barbearias
                clássicas com a experiência moderna. Um ambiente criado para você
                relaxar, alinhar o visual e sair com confiança.
              </p>

              <p className="text-zinc-500 leading-relaxed">
                No comando está{" "}
                <span className="text-[#c59d6e] font-semibold">Thaylle</span>, 
                jovem barbeiro que começou a cortar cabelo em 2020. Desde então,
                vem se destacando pela dedicação, profissionalismo e busca
                constante pela excelência.
              </p>

              <p className="text-zinc-500 leading-relaxed">
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
              className="pt-8 border-t border-zinc-800/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {destaques.map((item, i) => (
                  <motion.div
                    key={item.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      className="w-6 h-0.5 bg-[#c59d6e] mb-4 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={contentInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    />
                    <h3 className="text-sm font-semibold text-[#e4ddd2] mb-2 group-hover:text-[#c59d6e] transition-colors">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {item.texto}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 40 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl opacity-50"
              animate={{
                background: [
                  "conic-gradient(from 0deg, rgba(197,157,110,0.1), transparent, rgba(197,157,110,0.1))",
                  "conic-gradient(from 180deg, rgba(197,157,110,0.1), transparent, rgba(197,157,110,0.1))",
                  "conic-gradient(from 360deg, rgba(197,157,110,0.1), transparent, rgba(197,157,110,0.1))",
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={imageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-0.5 bg-[#c59d6e]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={imageInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                  <div>
                    <p className="text-base font-semibold text-[#e4ddd2]">Thaylle</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400">
                      Barbeiro & Fundador
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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