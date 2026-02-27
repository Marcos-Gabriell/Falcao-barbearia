"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_MAPS_ROUTE_URL = "https://maps.app.goo.gl/pPFXwU1dtws6HT9aA";

const horarios = [
  { dia: "Segunda a Sexta", hora: "09:00 – 19:00", aberto: true  },
  { dia: "Sábado",          hora: "08:00 – 20:00", aberto: true  },
  { dia: "Domingo",         hora: "Fechado",        aberto: false },
];

export default function Localizacao() {
  const titleRef    = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const contentRef  = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const mapRef      = useRef(null);
  const mapInView   = useInView(mapRef, { once: true, margin: "-60px" });

  return (
    <section
      id="localizacao"
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent", color: "#b8b4c0" }}
    >
      {/* Linha top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.35), transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Glow ambiente */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute rounded-full"
          style={{
            left: "-8%", bottom: "0",
            width: "480px", height: "380px",
            background: "radial-gradient(circle, rgba(197,157,110,0.04) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="font-mono text-[10px] tracking-[0.42em] uppercase" style={{ color: "rgba(197,157,110,0.75)" }}>
                  Localização
                </span>
                <motion.div
                  className="h-px flex-1 max-w-[90px]"
                  style={{ background: "linear-gradient(to right, rgba(197,157,110,0.55), transparent)" }}
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
                Onde nos<br />
                <span style={{ color: "#c59d6e" }}>encontrar</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="max-w-xs text-sm leading-relaxed lg:text-right"
              style={{ color: "rgba(160,156,174,0.50)" }}
            >
              Localização fácil e acessível no coração de Tapiramutá.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] items-start">

          {/* Info */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -28 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 lg:sticky lg:top-8"
          >
            {/* Endereço */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#0d0d18", border: "1px solid rgba(197,157,110,0.10)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-0.5 w-6"
                  style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <span className="text-[10px] font-mono tracking-[0.32em] uppercase" style={{ color: "rgba(197,157,110,0.70)" }}>
                  Endereço
                </span>
              </div>
              <p className="text-base font-semibold mb-1" style={{ color: "#e6dfd5" }}>Barbearia Falcão</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(160,156,174,0.55)" }}>
                R. Olavo Bilac<br />Tapiramutá, BA – 44840-027
              </p>
            </div>

            {/* Horários */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#0d0d18", border: "1px solid rgba(197,157,110,0.10)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="h-0.5 w-6"
                  style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.28 }}
                />
                <span className="text-[10px] font-mono tracking-[0.32em] uppercase" style={{ color: "rgba(197,157,110,0.70)" }}>
                  Horários
                </span>
              </div>

              <div className="space-y-2.5">
                {horarios.map((h, i) => (
                  <motion.div
                    key={h.dia}
                    initial={{ opacity: 0, x: -10 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.36 + i * 0.09 }}
                    className="flex items-center justify-between py-2"
                    style={{
                      borderBottom: i < horarios.length - 1
                        ? "1px solid rgba(197,157,110,0.07)"
                        : "none",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: h.aberto ? "#34d399" : "rgba(160,156,174,0.22)" }}
                        animate={h.aberto ? { opacity: [1, 0.4, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm" style={{ color: "rgba(184,180,192,0.70)" }}>{h.dia}</span>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: h.aberto ? "#e6dfd5" : "rgba(160,156,174,0.30)" }}
                    >
                      {h.hora}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href={GOOGLE_MAPS_ROUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #c59d6e 0%, #e8c589 55%, #9b7540 100%)",
                color: "#000",
                boxShadow: "0 4px 22px rgba(197,157,110,0.22)",
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 6px 36px rgba(197,157,110,0.42)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="5" cy="5" r="2.5" />
                <circle cx="19" cy="19" r="2.5" />
                <path d="M5 7.5V10c0 2 1.5 3 3 3h8c1.5 0 3 1 3 3v1.5" strokeLinecap="round" />
              </svg>
              Traçar rota no Google Maps
            </motion.a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 28 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(197,157,110,0.12)" }}
          >
            {/* Badge status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mapInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(5,5,10,0.88)",
                border: "1px solid rgba(52,211,153,0.20)",
                backdropFilter: "blur(8px)",
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#34d399" }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#34d399" }}>
                Aberto
              </span>
            </motion.div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.049292743803!2d-40.000000!3d-11.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773249761921637b%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sBR!4v0000000000"
              width="100%"
              height="460"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(180deg) saturate(0.35) brightness(0.78)",
                borderRadius: "1rem",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to top, rgba(197,157,110,0.18), transparent)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}