"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_ALL_REVIEWS_URL =
  "https://www.google.com/search?client=opera&sca_esv=7c6910cd552a3b71&cs=1&output=search&kgmid=/g/11ybt_kkr2&q=Barbearia+Falc%C3%A3o&shndl=30&shem=damc,shrtsdl&source=sh/x/kp/local/m1/1&kgs=bf51a9cd0e34bf61&utm_source=damc,shrtsdl,sh/x/kp/local/m1/1#lrd=0x76ba32c243da499:0x6b4f599dbbf227ec,1,,,,";
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5c-.2 1.2-1 2.2-2 2.9v2.4h3.3c1.9-1.7 3-4.3 3-7.1z" fill="#4285F4" />
      <path d="M12 22c2.7 0 5-0.9 6.7-2.4l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z" fill="#34A853" />
      <path d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3C2.4 8.7 2 10.3 2 12s.4 3.3 1 4.6L6.4 14z" fill="#FBBC05" />
      <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.6 2 12 2 8.1 2 4.7 4.1 3 7.4l3.4 2.6C7.2 7.7 9.4 5.9 12 5.9z" fill="#EA4335" />
    </svg>
  );
}

function Stars({ count = 5, size = 13 }: { count?: number; size?: number }) {
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

function SectionHeader({ label, titleA, titleB, sub, inView }: any) {
  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-[10px] tracking-[0.42em] uppercase" style={{ color: "rgba(197,157,110,0.75)" }}>
              {label}
            </span>
            <motion.div
              className="h-px flex-1 max-w-[90px]"
              style={{ background: "linear-gradient(to right, rgba(197,157,110,0.55), transparent)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.93] tracking-tight"
            style={{ color: "#e6dfd5" }}
          >
            {titleA}<br />
            <span style={{ color: "#c59d6e" }}>{titleB}</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="max-w-xs text-sm leading-relaxed lg:text-right"
          style={{ color: "rgba(160,156,174,0.50)" }}
        >
          {sub}
        </motion.p>
      </div>
    </div>
  );
}

export default function Avaliacoes() {
  const titleRef      = useRef(null);
  const titleInView   = useInView(titleRef,    { once: true, margin: "-80px" });
  const scoreRef      = useRef(null);
  const scoreInView   = useInView(scoreRef,    { once: true, margin: "-60px" });
  const reviewsRef    = useRef(null);
  const reviewsInView = useInView(reviewsRef,  { once: true, margin: "-60px" });

  return (
    <section
      id="avaliacoes"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.35), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute rounded-full"
          style={{
            right: "-8%", top: "15%", width: "450px", height: "450px",
            background: "radial-gradient(circle, rgba(197,157,110,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div ref={titleRef}>
          <SectionHeader
            label="Avaliações"
            titleA="O que dizem"
            titleB="sobre nós"
            sub="A melhor forma de conhecer é ouvindo quem já passou pela cadeira."
            inView={titleInView}
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[280px_1fr] items-start">
          <motion.div
            ref={scoreRef}
            initial={{ opacity: 0, x: -28 }}
            animate={scoreInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-8"
          >
            <div
              className="rounded-2xl p-5 mb-6"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(197,157,110,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GoogleIcon />
                <span className="text-sm font-semibold" style={{ color: "#e6dfd5" }}>
                  Google Reviews
                </span>
              </div>

              <div className="flex items-end gap-4 mb-3">
                <motion.span
                  className="font-black leading-none tracking-tighter"
                  style={{
                    fontSize: "4.5rem",
                    background: "linear-gradient(135deg, #e6dfd5 0%, #c59d6e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={scoreInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.18, type: "spring" }}
                >
                  4,9
                </motion.span>
                <div className="pb-2">
                  <Stars count={5} size={17} />
                  <p className="text-[10px] mt-1" style={{ color: "rgba(160,156,174,0.45)" }}>
                    Média de avaliações
                  </p>
                </div>
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                style={{
                  background: "rgba(197,157,110,0.08)",
                  border: "1px solid rgba(197,157,110,0.20)",
                  color: "rgba(197,157,110,0.80)",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#c59d6e">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                Verificado no Google
              </div>
            </div>

            {/* Barras de rating */}
            <div className="space-y-2 mb-6">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-3 text-[10px]" style={{ color: "rgba(160,156,174,0.40)" }}>
                    {star}
                  </span>
                  <svg width="9" height="9" viewBox="0 0 24 24">
                    <polygon
                      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                      fill="#c59d6e"
                    />
                  </svg>
                  <div
                    className="flex-1 h-1 rounded-full overflow-hidden"
                    style={{ background: "rgba(197,157,110,0.08)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          star === 5
                            ? "linear-gradient(to right, #c59d6e, #e8c589)"
                            : "rgba(197,157,110,0.25)",
                      }}
                      initial={{ width: 0 }}
                      animate={scoreInView ? { width: star === 5 ? "90%" : star === 4 ? "7%" : "2%" } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <motion.a
                href={GOOGLE_ALL_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #c59d6e 0%, #e8c589 55%, #9b7540 100%)",
                  color: "#000",
                  boxShadow: "0 4px 20px rgba(197,157,110,0.22)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 4px 32px rgba(197,157,110,0.42)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.28 }}
              >
                <GoogleIcon />
                Ver todas as avaliações
              </motion.a>

              <motion.a
                href={GOOGLE_NEW_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold"
                style={{
                  border: "1px solid rgba(197,157,110,0.22)",
                  color: "rgba(197,157,110,0.80)",
                }}
                whileHover={{ borderColor: "rgba(197,157,110,0.50)", backgroundColor: "rgba(197,157,110,0.05)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.28 }}
              >
                Deixar avaliação
              </motion.a>
            </div>
          </motion.div>

          <div ref={reviewsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((r, i) => (
              <motion.article
                key={r.nome}
                initial={{ opacity: 0, y: 28 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-5 rounded-2xl ${i === 0 ? "sm:col-span-2" : ""}`}
                style={{
                  background: "#0d0d18",
                  border: "1px solid rgba(197,157,110,0.09)",
                }}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(197,157,110,0.28)",
                  backgroundColor: "#111128",
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(197,157,110,0.08)",
                        border: "1px solid rgba(197,157,110,0.18)",
                      }}
                    >
                      <span className="text-sm font-bold" style={{ color: "#c59d6e" }}>
                        {r.nome.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold" style={{ color: "#e6dfd5" }}>
                        {r.nome}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-[10px]" style={{ color: "rgba(160,156,174,0.45)" }}>
                          {r.tempo}
                        </p>
                        <span style={{ color: "rgba(160,156,174,0.25)", fontSize: "10px" }}>·</span>
                        <GoogleIcon />
                      </div>
                    </div>
                  </div>
                  <Stars count={r.stars} size={12} />
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(184,180,192,0.75)" }}>
                  "{r.texto}"
                </p>

                {r.servico && (
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ background: "#c59d6e" }} />
                    <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(160,156,174,0.40)" }}>
                      {r.servico}
                    </span>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to top, rgba(197,157,110,0.18), transparent)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}