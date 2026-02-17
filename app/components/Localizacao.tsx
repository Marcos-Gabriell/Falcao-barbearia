"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_MAPS_ROUTE_URL = "https://maps.app.goo.gl/pPFXwU1dtws6HT9aA";

const horarios = [
  { dia: "Segunda a Sexta", hora: "09:00 às 19:00" },
  { dia: "Sábado", hora: "08:00 às 20:00" },
];

export default function Localizacao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" className="relative w-full bg-black py-28 text-zinc-300 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <motion.div
        className="pointer-events-none absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full"
        animate={{ background: ["radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.09) 0%, transparent 70%)", "radial-gradient(circle, rgba(197,157,110,0.05) 0%, transparent 70%)"] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6" ref={ref}>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-mono text-[10px] tracking-[0.4em] text-[#c59d6e] uppercase border border-[#c59d6e]/30 px-3 py-1 mb-5"
          >
            ✦ Localização
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl"
          >
            Onde nos encontrar
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c59d6e] to-transparent"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-lg text-zinc-400"
          >
            Localização fácil e acessível no coração da cidade.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-zinc-800 bg-[#050505]/80 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            whileHover={{ boxShadow: "0 0 60px rgba(0,0,0,0.8), 0 0 30px rgba(197,157,110,0.05)" }}
          >
            <motion.div
              className="mb-6 h-[1px] bg-gradient-to-r from-[#c59d6e] to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <h3 className="text-xl font-semibold text-[#e4ddd2] mb-3">Endereço</h3>
            <p className="text-zinc-400 leading-relaxed">
              <span className="font-semibold text-[#e4ddd2]">Barbearia Falcão</span>
              <br />
              R. Olavo Bilac – Tapiramutá, BA, 44840-027
            </p>

            <h3 className="mt-8 text-xl font-semibold text-[#e4ddd2] mb-3">Horário de funcionamento</h3>
            <div className="space-y-3">
              {horarios.map((h, i) => (
                <motion.div
                  key={h.dia}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 px-4 py-3"
                  whileHover={{ borderColor: "rgba(197,157,110,0.4)", x: 4 }}
                >
                  <span className="text-sm font-medium text-[#c59d6e]">{h.dia}</span>
                  <span className="text-sm text-zinc-300">{h.hora}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={GOOGLE_MAPS_ROUTE_URL}
              target="_blank"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(197,157,110,0.6)]"
              whileHover={{ scale: 1.04, boxShadow: "0 0 48px rgba(197,157,110,0.9)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Traçar rota no Google Maps
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-[#050505] relative"
            whileHover={{ boxShadow: "0 0 60px rgba(0,0,0,0.9), 0 0 30px rgba(197,157,110,0.08)" }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none z-10 rounded-3xl"
              animate={{ boxShadow: ["inset 0 0 0px rgba(197,157,110,0)", "inset 0 0 30px rgba(197,157,110,0.06)", "inset 0 0 0px rgba(197,157,110,0)"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.049292743803!2d-40.000000!3d-11.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773249761921637b%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sBR!4v0000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}