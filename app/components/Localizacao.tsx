"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_MAPS_ROUTE_URL = "https://maps.app.goo.gl/pPFXwU1dtws6HT9aA";

const horarios = [
  { dia: "Segunda a Sexta", hora: "09:00 – 19:00", aberto: true },
  { dia: "Sábado", hora: "08:00 – 20:00", aberto: true },
  { dia: "Domingo", hora: "Fechado", aberto: false },
];

export default function Localizacao() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-60px" });

  return (
    <section id="localizacao" className="relative w-full bg-transparent py-32 text-zinc-300 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,157,110,0.04),_transparent_50%)]" />
        <motion.div
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #c59d6e 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
                  Localização
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
                Onde nos
                <br />
                <span className="text-[#c59d6e]">encontrar</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-xs text-sm leading-relaxed lg:text-right"
            >
              Localização fácil e acessível no coração de Tapiramutá.
            </motion.p>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-[340px_1fr] items-start">
          
          {/* Info section */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:sticky lg:top-8"
          >
            {/* Endereço */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-6 h-0.5 bg-[#c59d6e]"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#c59d6e] uppercase">
                  Endereço
                </span>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-semibold text-[#e4ddd2]">Barbearia Falcão</p>
                <p className="text-sm text-zinc-500">
                  R. Olavo Bilac<br />
                  Tapiramutá, BA – 44840-027
                </p>
              </div>
            </div>

            {/* Horários */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-6 h-0.5 bg-[#c59d6e]"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={contentInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <span className="text-[11px] font-mono tracking-[0.3em] text-[#c59d6e] uppercase">
                  Horários
                </span>
              </div>

              <div className="space-y-2">
                {horarios.map((h, i) => (
                  <motion.div
                    key={h.dia}
                    initial={{ opacity: 0, x: -10 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-zinc-800/50 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <motion.span
                        className={`w-1.5 h-1.5 rounded-full ${h.aberto ? "bg-emerald-400" : "bg-zinc-600"}`}
                        animate={h.aberto ? { opacity: [1, 0.5, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm text-zinc-400">{h.dia}</span>
                    </div>
                    <span className={`text-sm font-medium ${h.aberto ? "text-[#e4ddd2]" : "text-zinc-600"}`}>
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
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#c59d6e] text-sm font-bold text-black"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(197,157,110,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="5" cy="5" r="2.5" />
                <circle cx="19" cy="19" r="2.5" />
                <path d="M5 7.5V10c0 2 1.5 3 3 3h8c1.5 0 3 1 3 3v1.5" strokeLinecap="round" />
              </svg>
              Traçar rota no Google Maps
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 30 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mapInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-semibold text-[#c59d6e] uppercase tracking-wider">
                Aberto
              </span>
            </motion.div>

            {/* Border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none z-10"
              whileHover={{ boxShadow: "inset 0 0 0 2px rgba(197,157,110,0.3)" }}
              transition={{ duration: 0.3 }}
            />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.049292743803!2d-40.000000!3d-11.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773249761921637b%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sBR!4v0000000000"
              width="100%"
              height="480"
              style={{ 
                border: 0, 
                filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)",
                borderRadius: "1rem"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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