"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_ALL_REVIEWS_URL = "https://www.google.com/search?client=opera&sca_esv=7c6910cd552a3b71&cs=1&output=search&kgmid=/g/11ybt_kkr2&q=Barbearia+Falc%C3%A3o&shndl=30&shem=damc,shrtsdl&source=sh/x/kp/local/m1/1&kgs=bf51a9cd0e34bf61&utm_source=damc,shrtsdl,sh/x/kp/local/m1/1#lrd=0x76ba32c243da499:0x6b4f599dbbf227ec,1,,,,";
const GOOGLE_NEW_REVIEW_URL = "https://g.page/r/Cewn8rudWU9rEBM/review";

const reviews = [
  {
    nome: "Jayllon Gabriel Oliveira",
    tempo: "2 meses atrás",
    texto: "Exatamente, ainda ganhei um abraço",
    servico: "Corte de cabelo",
    stars: 5,
  },
  {
    nome: "João Souza",
    tempo: "1 mês atrás",
    texto: "Muito boa",
    servico: null,
    stars: 5,
  },
  {
    nome: "Kauã Agiar",
    tempo: "10 meses atrás",
    texto: "Ótimo corte!!",
    servico: "Corte de cabelo, Aparar a barba",
    stars: 5,
  },
  {
    nome: "Keirisson Silva",
    tempo: "2 meses atrás",
    texto: "Corte de cabelo perfeito, recomendo demais.",
    servico: null,
    stars: 5,
  },
];

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5c-.2 1.2-1 2.2-2 2.9v2.4h3.3c1.9-1.7 3-4.3 3-7.1z" fill="#4285F4"/>
      <path d="M12 22c2.7 0 5-0.9 6.7-2.4l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z" fill="#34A853"/>
      <path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3C2.4 8.7 2 10.3 2 12s.4 3.3 1 4.6L6.4 14z" fill="#FBBC05"/>
      <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.6 2 12 2 8.1 2 4.7 4.1 3 7.4l3.4 2.6C7.2 7.7 9.4 5.9 12 5.9z" fill="#EA4335"/>
    </svg>
  );
}

function StarRow({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={i < count ? "#c59d6e" : "transparent"}
            stroke="#c59d6e"
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </span>
  );
}

export default function Avaliacoes() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const scoreRef = useRef(null);
  const scoreInView = useInView(scoreRef, { once: true, margin: "-60px" });
  const reviewsRef = useRef(null);
  const reviewsInView = useInView(reviewsRef, { once: true, margin: "-60px" });

  return (
    <section id="avaliacoes" className="relative w-full bg-[#030303] py-32 text-zinc-300 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(197,157,110,0.04),_transparent_50%)]" />
        <motion.div
          className="absolute -right-40 top-40 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #c59d6e 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                  Avaliações
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
                O que dizem
                <br />
                <span className="text-[#c59d6e]">sobre nós</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-xs text-sm leading-relaxed lg:text-right"
            >
              A melhor forma de conhecer é ouvindo quem já passou pela cadeira.
            </motion.p>
          </div>
        </div>

        {/* Score + Reviews grid */}
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-start">
          
          {/* Score section */}
          <motion.div
            ref={scoreRef}
            initial={{ opacity: 0, x: -30 }}
            animate={scoreInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-8"
          >
            {/* Score display */}
            <div className="mb-8">
              <div className="flex items-end gap-3 mb-2">
                <motion.span
                  className="text-7xl font-black text-[#e4ddd2] leading-none tracking-tighter"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={scoreInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                >
                  4,9
                </motion.span>
                <div className="pb-2">
                  <StarRow count={5} size={16} />
                  <p className="text-[11px] text-zinc-600 mt-1">no Google</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <GoogleIcon />
                <span className="text-xs text-zinc-500">Avaliações verificadas</span>
              </div>
            </div>

            {/* Rating bars */}
            <div className="space-y-2 mb-8">
              {[5, 4, 3, 2, 1].map((stars, i) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="w-3 text-[11px] text-zinc-600">{stars}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#c59d6e" />
                  </svg>
                  <div className="flex-1 h-1 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#a17843] to-[#c59d6e]"
                      initial={{ width: 0 }}
                      animate={scoreInView ? { width: stars === 5 ? "90%" : stars === 4 ? "8%" : "2%" } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <motion.a
                href={GOOGLE_ALL_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#c59d6e] text-sm font-bold text-black"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(197,157,110,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <GoogleIcon />
                Ver todas
              </motion.a>

              <motion.a
                href={GOOGLE_NEW_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-[#c59d6e]/40 text-sm font-semibold text-[#c59d6e]"
                whileHover={{ borderColor: "rgba(197,157,110,0.8)", backgroundColor: "rgba(197,157,110,0.05)" }}
                whileTap={{ scale: 0.98 }}
              >
                Deixar avaliação
              </motion.a>
            </div>
          </motion.div>

          {/* Reviews */}
          <div ref={reviewsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((review, i) => (
              <motion.article
                key={review.nome}
                initial={{ opacity: 0, y: 30 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-[#c59d6e]/30 transition-all duration-300 ${i === 0 ? "sm:col-span-2" : ""}`}
                whileHover={{ y: -4 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#c59d6e]/10 border border-[#c59d6e]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c59d6e] text-sm font-bold">
                        {review.nome.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#e4ddd2]">{review.nome}</h3>
                      <p className="text-[11px] text-zinc-600">{review.tempo}</p>
                    </div>
                  </div>
                  <StarRow count={review.stars} size={12} />
                </div>

                {/* Quote */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  "{review.texto}"
                </p>

                {/* Service tag */}
                {review.servico && (
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#c59d6e]" />
                    <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                      {review.servico}
                    </span>
                  </div>
                )}
              </motion.article>
            ))}
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