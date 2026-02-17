"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_ALL_REVIEWS_URL =
  "https://www.google.com/search?client=opera&sca_esv=7c6910cd552a3b71&cs=1&output=search&kgmid=/g/11ybt_kkr2&q=Barbearia+Falc%C3%A3o&shndl=30&shem=damc,shrtsdl&source=sh/x/kp/local/m1/1&kgs=bf51a9cd0e34bf61&utm_source=damc,shrtsdl,sh/x/kp/local/m1/1#lrd=0x76ba32c243da499:0x6b4f599dbbf227ec,1,,,,";

const GOOGLE_NEW_REVIEW_URL = "https://g.page/r/Cewn8rudWU9rEBM/review";

const reviews = [
  { nome: "Jayllon Gabriel Oliveira", nota: "★★★★★", tempo: "2 meses atrás", texto: "Exatamente, ainda ganhei um abraço", servico: "Corte de cabelo" },
  { nome: "João Souza", nota: "★★★★★", tempo: "1 mês atrás", texto: "Muito boa", servico: null },
  { nome: "Kauã Agiar", nota: "★★★★★", tempo: "10 meses atrás", texto: "Ótimo corte!!", servico: "Corte de cabelo, Aparar a barba, Corte com navalha" },
  { nome: "Keirisson Silva", nota: "★★★★★", tempo: "2 meses atrás", texto: "Corte de cabelo", servico: null },
];

const barWidths: Record<number, string> = { 5: "90%", 4: "35%", 3: "10%", 2: "5%", 1: "2%" };

function AnimatedBar({ stars, index }: { stars: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="w-6 text-xs text-zinc-400 text-right">{stars}★</span>
      <div className="flex-1 h-[6px] rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#c59d6e] to-[#e4c08a]"
          initial={{ width: 0 }}
          animate={inView ? { width: barWidths[stars] ?? "2%" } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5"
      whileHover={{ borderColor: "rgba(197,157,110,0.5)", y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[#e4ddd2] text-sm">{review.nome}</h3>
        <motion.span
          className="text-[#c59d6e] text-xs"
          animate={{ textShadow: ["0 0 0px #c59d6e", "0 0 10px #c59d6e60", "0 0 0px #c59d6e"] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
        >
          {review.nota}
        </motion.span>
      </div>
      <p className="mt-1 text-xs text-zinc-500">{review.tempo}</p>
      <p className="mt-2 text-sm text-zinc-400">"{review.texto}"</p>
      {review.servico && <p className="mt-2 text-xs text-zinc-500">Serviço: {review.servico}</p>}
    </motion.article>
  );
}

export default function Avaliacoes() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="avaliacoes" className="relative w-full bg-black py-28 text-zinc-300 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
        animate={{ background: ["radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.1) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)"] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center mb-14" ref={headerRef}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase border border-[#c59d6e]/30 px-3 py-1 mb-5"
          >
            ✦ Avaliações
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl"
          >
            O que dizem sobre a Falcão
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c59d6e] to-transparent"
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg text-zinc-400"
          >
            A melhor forma de conhecer é ouvindo quem já passou pela cadeira.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.9fr,1.1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-zinc-800 bg-[#050505]/80 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            whileHover={{ boxShadow: "0 0 60px rgba(0,0,0,0.8), 0 0 40px rgba(197,157,110,0.06)" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#c59d6e]">Avaliação geral</p>

            <div className="mt-5 flex items-end gap-4">
              <motion.span
                className="text-6xl font-extrabold text-[#e4ddd2] leading-none"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              >
                4,9
              </motion.span>
              <motion.span
                className="text-2xl text-[#c59d6e] pb-1"
                animate={{ textShadow: ["0 0 0px #c59d6e", "0 0 16px #c59d6e70", "0 0 0px #c59d6e"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ★★★★★
              </motion.span>
            </div>

            <p className="mt-2 text-sm text-zinc-400">Baseado em avaliações reais no Google.</p>

            <div className="mt-6 space-y-3">
              {[5, 4, 3, 2, 1].map((s, i) => (
                <AnimatedBar key={s} stars={s} index={i} />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <motion.a
                href={GOOGLE_ALL_REVIEWS_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(197,157,110,0.6)]"
                whileHover={{ scale: 1.04, boxShadow: "0 0 48px rgba(197,157,110,0.9)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Ver todas as avaliações no Google
              </motion.a>
              <motion.a
                href={GOOGLE_NEW_REVIEW_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-[#c59d6e]/70 px-6 py-3 text-sm font-semibold text-[#c59d6e]"
                whileHover={{ scale: 1.04, backgroundColor: "rgba(197,157,110,0.1)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Avaliar agora
              </motion.a>
            </div>
          </motion.div>

          <div className="space-y-4">
            {reviews.map((review, i) => (
              <ReviewCard key={review.nome} review={review} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}