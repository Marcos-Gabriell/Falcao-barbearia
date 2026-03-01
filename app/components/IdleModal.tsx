"use client";

import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { WHATSAPP_LINK } from "../utils/links";

const IDLE_SECONDS = 10;
const STORAGE_KEY  = "fb_idle_modal_dismissed";

function WAIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 256 258" fill="currentColor">
      <path d="M128.1 0C57.3 0 .7 56.5.7 126.3c0 22.1 5.8 43.7 16.8 62.7L0 256l69.9-17.9c18.3 10 39 15.3 60.3 15.3h.1c70.8 0 127.4-56.5 127.4-126.3C257.7 56.5 199 0 128.1 0zm75.2 180.4c-3.2 9-18.4 17.2-25.3 18.3-6.5 1-14.8 1.4-23.9-1.5-5.5-1.8-12.6-4.1-21.7-8.1-38.1-16.6-62.8-55.3-64.8-57.9-1.9-2.6-15.4-20.5-15.4-39.1 0-18.6 9.7-27.7 13.1-31.5 3.3-3.8 7.2-4.7 9.6-4.7 2.4 0 4.8 0 6.8.1 2.2.1 5.1-.8 8 6.1 3.2 7.5 10.8 26.2 11.7 28.1.9 1.9 1.5 4.1.3 6.6-1.2 2.6-1.8 4.1-3.5 6.3-1.8 2.1-3.8 4.7-5.3 6.3-1.8 1.9-3.7 3.9-1.6 7.4 2.1 3.6 9.3 15.4 20 24.8 13.8 12.4 24.9 16.3 28.4 18.1 3.5 1.9 5.5 1.6 7.5-.9 2.1-2.6 8.7-10.1 11-13.6 2.3-3.4 4.6-2.9 7.6-1.7 3.2 1.3 20.4 9.8 23.9 11.6 3.5 1.9 5.8 2.8 6.6 4.4.8 1.6.8 9.3-2.4 18.3z" />
    </svg>
  );
}

export default function IdleModal() {
  const [open,      setOpen]    = useState(false);
  const idleTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dismissed   = useRef(false);
  const shimmer     = useAnimation();

  // Shimmer loop on CTA
  useEffect(() => {
    if (!open) return;
    let active = true;
    const loop = async () => {
      while (active) {
        await shimmer.start({ x: ["-110%", "220%"], transition: { duration: 1.1, ease: "easeInOut" } });
        await new Promise((r) => setTimeout(r, 3400));
      }
    };
    loop();
    return () => { active = false; };
  }, [open, shimmer]);

  const dismiss = useCallback(() => {
    dismissed.current = true;
    setOpen(false);
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
  }, []);

  const resetTimer = useCallback(() => {
    if (dismissed.current) return;
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      try { if (sessionStorage.getItem(STORAGE_KEY)) return; } catch {}
      setOpen(true);
    }, IDLE_SECONDS * 1000);
  }, []);

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"];
    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();
    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [resetTimer]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[99] flex items-center justify-center p-5"
            style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38 }}
            onClick={dismiss}
          >
            <div className="absolute inset-0" style={{ background: "rgba(3,6,13,0.80)" }} />

            {/* ── Modal card ── */}
            <motion.div
              key="modal"
              className="relative w-full max-w-sm overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(160deg, rgba(10,25,47,0.99) 0%, rgba(4,8,20,1) 100%)",
                border: "1px solid rgba(197,157,110,0.24)",
                boxShadow: "0 48px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(79,142,247,0.06) inset",
              }}
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.94,  y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.04 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px z-20"
                style={{ background: "linear-gradient(90deg, transparent, rgba(197,157,110,0.65), transparent)" }}
              />

              {/* ambient orbs */}
              <motion.div
                className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(197,157,110,0.11) 0%, transparent 70%)", filter: "blur(36px)" }}
                animate={{ scale: [1, 1.16, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-16 -left-16 w-52 h-52 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)", filter: "blur(30px)" }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              {/* grain */}
              <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.032]" style={{ mixBlendMode: "overlay" }}>
                <filter id="igrain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#igrain)" />
              </svg>

              {/* ── Content ── */}
              <div className="relative z-10 p-7">

                {/* ── Header: Logo + Close ── */}
                <div className="flex items-center justify-between mb-6">
                  {/* Logo com glow dourado */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18, duration: 0.5 }}
                  >
                    {/* Glow atrás da logo */}
                    <motion.div
                      className="absolute inset-0 -z-10 scale-[1.6] blur-2xl"
                      style={{ background: "rgba(197,157,110,0.22)" }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <Image
                      src="/logo1.png"
                      alt="Falcão Barbearia"
                      width={110}
                      height={44}
                      className="h-11 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(197,157,110,0.50)]"
                    />
                  </motion.div>

                  {/* Close button */}
                  <motion.button
                    onClick={dismiss}
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                    style={{
                      background: "rgba(79,142,247,0.07)",
                      border: "1px solid rgba(79,142,247,0.14)",
                      color: "rgba(148,163,194,0.55)",
                    }}
                    whileHover={{ scale: 1.1, borderColor: "rgba(79,142,247,0.32)", color: "rgba(220,230,245,0.80)" }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Fechar"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.button>
                </div>

                {/* Divider dourado */}
                <motion.div
                  className="h-px mb-6"
                  style={{ background: "linear-gradient(90deg, rgba(197,157,110,0.40), transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.28 }}
                />

                {/* Eyebrow */}
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.24 }}
                >
                  <motion.div
                    className="h-px w-7"
                    style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.32 }}
                  />
                  <span className="text-[9px] font-mono tracking-[0.40em] uppercase" style={{ color: "rgba(197,157,110,0.68)" }}>
                    Tapiramutá · BA
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26, duration: 0.55 }}
                  className="text-3xl font-bold leading-[0.96] tracking-tight mb-3"
                  style={{ color: "#dce6f5" }}
                >
                  Está na hora<br />
                  <span style={{ color: "#c59d6e" }}>do seu corte</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.33, duration: 0.50 }}
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(148,163,194,0.65)" }}
                >
                  Agende agora pelo WhatsApp e garanta seu horário com o Thaylle.
                  Corte, barba e acabamento com padrão premium.
                </motion.p>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.40 }}
                  className="flex items-center gap-3 mb-6 pb-5"
                  style={{ borderBottom: "1px solid rgba(79,142,247,0.09)" }}
                >
                  {[["4.9★", "Google"], ["100+", "Clientes"], ["2021", "Fundação"]].map(([val, label]) => (
                    <div key={label} className="text-center flex-1">
                      <div className="text-sm font-black leading-none" style={{ color: "#c59d6e" }}>{val}</div>
                      <div className="mt-1 text-[8px] tracking-[0.18em] uppercase" style={{ color: "rgba(148,163,194,0.42)" }}>{label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.46, duration: 0.50 }}
                >
                  <motion.a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="group relative flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-base font-bold overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #c59d6e 0%, #e8c589 50%, #9b7540 100%)",
                      color: "#000",
                      boxShadow: "0 6px 32px rgba(197,157,110,0.40)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 48px rgba(197,157,110,0.58)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    {/* shimmer sweep */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)" }}
                      animate={shimmer}
                    />
                    <WAIcon />
                    <span className="relative z-10">Marcar horário agora</span>
                    <motion.svg
                      width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>

                  <button
                    onClick={dismiss}
                    className="block w-full text-center mt-4 text-[11px] transition-colors duration-200 pb-1"
                    style={{ color: "rgba(148,163,194,0.32)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(148,163,194,0.65)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(148,163,194,0.32)")}
                  >
                    Talvez mais tarde
                  </button>
                </motion.div>
              </div>

              {/* bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.18), transparent)" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}