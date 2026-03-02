"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { WHATSAPP_LINK, INSTAGRAM_URL } from "../utils/links";

type Item = { type: "photo"; src: string } | { type: "video"; src: string };

const ITEMS: Item[] = [
   { type: "video", src: "/cortes/vid1.mp4" },
  { type: "photo", src: "/cortes/corte12.jpeg" },
  { type: "photo", src: "/cortes/corte11.jpeg" },
  { type: "photo", src: "/cortes/corte13.jpeg" },
  { type: "video", src: "/cortes/vid2.mp4" },
  { type: "photo", src: "/cortes/corte14.jpeg" },
  { type: "photo", src: "/cortes/corte15.jpeg" },
  { type: "video", src: "/cortes/vid6.mp4" },
  { type: "photo", src: "/cortes/corte16.jpeg" },
  { type: "photo", src: "/cortes/corte1.jpg" },
      { type: "video", src: "/cortes/vid8.mp4" },
  { type: "photo", src: "/cortes/corte3.png" },
  { type: "photo", src: "/cortes/corte4.jpg" },
  { type: "photo", src: "/cortes/corte5.png" },
  { type: "video", src: "/cortes/vid4.mp4" },
  { type: "photo", src: "/cortes/corte6.jpg" },
  { type: "video", src: "/cortes/vid5.mp4" },
  { type: "photo", src: "/cortes/corte8.png" },
  { type: "video", src: "/cortes/vid6.mp4" },
  { type: "photo", src: "/cortes/corte9.png" },
   { type: "video", src: "/cortes/vid3.mp4" },
  { type: "photo", src: "/cortes/corte10.jpeg" },
   { type: "photo", src: "/cortes/corte2.jpg" },
    { type: "photo", src: "/cortes/corte7.jpg" },
    { type: "video", src: "/cortes/vid7.mp4" },
];



// ─── MOBILE SLIDER ─────────────────────────────────────────────────────────────
function MobileSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const item = ITEMS[current];

  const go = useCallback((next: number) => {
    const n = ((next % ITEMS.length) + ITEMS.length) % ITEMS.length;
    setCurrent(n);
    setPaused(false);
  }, []);

  const playVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video") return;
    v.play().catch(() => {});
  }, [item]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (item.type === "video") {
      v.src = item.src;
      v.load();
      if (started && !paused) {
        const tryPlay = () => v.play().catch(() => {});
        if (v.readyState >= 2) tryPlay();
        else v.addEventListener("canplay", tryPlay, { once: true });
      }
    } else {
      v.pause();
    }
  }, [current]); // eslint-disable-line

  useEffect(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video" || !started) return;
    if (paused) v.pause();
    else v.play().catch(() => {});
  }, [paused]); // eslint-disable-line

  const tx = useRef(0);
  const ty = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    tx.current = e.touches[0].clientX;
    ty.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = tx.current - e.changedTouches[0].clientX;
    const dy = Math.abs(ty.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 44 && dy < 60) {
      go(current + (dx > 0 ? 1 : -1));
    }
  };

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    if (!started) {
      setStarted(true);
      playVideo();
      return;
    }
    let clientX: number;
    if ("clientX" in e) clientX = e.clientX;
    else clientX = e.changedTouches[0].clientX;
    const w = (e.currentTarget as HTMLElement).clientWidth;
    if (clientX < w * 0.30) go(current - 1);
    else if (clientX > w * 0.70) go(current + 1);
    else if (item.type === "video") setPaused(p => !p);
  };

  const itemNumber = String(current + 1).padStart(2, "0");
  const totalNumber = String(ITEMS.length).padStart(2, "0");

  return (
    <div className="flex flex-col">
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ height: "100svh", minHeight: 560, background: "transparent", touchAction: "pan-y" }}
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => { onTouchEnd(e); handleTap(e); }}
        onClick={handleTap}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: item.type === "video" ? "block" : "none", pointerEvents: "none" }}
          muted playsInline preload="auto"
          onEnded={() => go(current + 1)}
        />
        {item.type === "photo" && (
          <div className="absolute inset-0">
            <Image src={item.src} alt="" fill className="object-cover" sizes="100vw" priority />
          </div>
        )}
        {!started && item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(3,6,13,0.80)", border: "1.5px solid rgba(197,157,110,0.55)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#c59d6e"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(197,157,110,0.60)" }}>toque para iniciar</span>
            </div>
          </div>
        )}
        {paused && item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: "rgba(3,6,13,0.75)", border: "1.5px solid rgba(197,157,110,0.45)", backdropFilter: "blur(10px)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#c59d6e">
                <rect x="6" y="4" width="4" height="16" rx="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            </div>
          </div>
        )}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom,rgba(3,6,13,0.65) 0%,transparent 28%,transparent 55%,rgba(3,6,13,0.95) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right,rgba(3,6,13,0.50) 0%,transparent 55%)" }} />
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-5 pointer-events-none">
          <div className="relative h-8 w-24">
            <Image src="/logo1.png" alt="Falcão Barbearia" fill className="object-contain object-left" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-xs font-bold" style={{ color: "#c59d6e" }}>{itemNumber}</span>
            <span className="font-mono text-[9px]" style={{ color: "rgba(148,163,194,0.35)" }}>/{totalNumber}</span>
          </div>
        </div>
        <div className="absolute left-0 z-20 p-5 pointer-events-none" style={{ maxWidth: "75vw", bottom: "120px" }}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-6" style={{ background: "#c59d6e" }} />
            <span className="font-mono text-[8px] tracking-[0.44em] uppercase"
              style={{ color: "rgba(197,157,110,0.60)" }}>Galeria</span>
          </div>
          <h2 className="font-black leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(2rem,9vw,3rem)", color: "#e6dfd5" }}>
            Nossos<br />
            <span style={{ color: "#c59d6e" }}>{item.type === "video" ? "Vídeos" : "Trabalhos"}</span>
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
          style={{ paddingBottom: "env(safe-area-inset-bottom,0px)" }}>
          <div className="flex justify-center gap-1.5 mb-3">
            {ITEMS.map((_, i) => (
              <div key={i} className="rounded-full transition-all duration-300"
                style={{ width: i === current ? 16 : 4, height: 4,
                  background: i === current ? "#c59d6e" : "rgba(197,157,110,0.25)" }} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 pb-5 pointer-events-auto">
            <motion.button onClick={(e) => { e.stopPropagation(); go(current - 1); }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(3,6,13,0.70)", border: "1px solid rgba(197,157,110,0.25)", color: "#c59d6e" }}
              whileTap={{ scale: 0.88 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                if (!started) { setStarted(true); const v = videoRef.current; if (v && item.type === "video") v.play().catch(() => {}); }
                else if (item.type === "video") setPaused(p => !p);
              }}
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#b8843e,#e8c589,#9b7540)", boxShadow: "0 4px 20px rgba(197,157,110,0.40)" }}
              whileTap={{ scale: 0.90 }}>
              {item.type === "photo" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#07050c" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 12h6M9 15h4"/>
                </svg>
              ) : paused || !started ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#07050c"><polygon points="6,3 20,12 6,21"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#07050c">
                  <rect x="5" y="4" width="4" height="16" rx="1"/>
                  <rect x="15" y="4" width="4" height="16" rx="1"/>
                </svg>
              )}
            </motion.button>
            <motion.button onClick={(e) => { e.stopPropagation(); go(current + 1); }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(3,6,13,0.70)", border: "1px solid rgba(197,157,110,0.25)", color: "#c59d6e" }}
              whileTap={{ scale: 0.88 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-full py-4 px-4 flex items-center gap-2"
        style={{ background: "transparent", borderTop: "1px solid rgba(197,157,110,0.07)" }}>
        <motion.a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(197,157,110,0.16)", color: "rgba(197,157,110,0.72)" }}
          whileTap={{ scale: 0.96 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6"/>
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/>
          </svg>
          <span className="font-mono tracking-wide">@barbeariafalcao_</span>
        </motion.a>
        <motion.a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ml-auto"
          style={{ background: "linear-gradient(135deg,#b8843e 0%,#e8c589 50%,#9b7540 100%)", color: "#07050c", boxShadow: "0 4px 20px rgba(197,157,110,0.28)" }}
          whileTap={{ scale: 0.95 }}>
          <svg width="13" height="13" viewBox="0 0 256 258" fill="currentColor">
            <path d="M128.1 0C57.3 0 .7 56.5.7 126.3c0 22.1 5.8 43.7 16.8 62.7L0 256l69.9-17.9c18.3 10 39 15.3 60.3 15.3h.1c70.8 0 127.4-56.5 127.4-126.3C257.7 56.5 199 0 128.1 0zm75.2 180.4c-3.2 9-18.4 17.2-25.3 18.3-6.5 1-14.8 1.4-23.9-1.5-5.5-1.8-12.6-4.1-21.7-8.1-38.1-16.6-62.8-55.3-64.8-57.9-1.9-2.6-15.4-20.5-15.4-39.1 0-18.6 9.7-27.7 13.1-31.5 3.3-3.8 7.2-4.7 9.6-4.7 2.4 0 4.8 0 6.8.1 2.2.1 5.1-.8 8 6.1 3.2 7.5 10.8 26.2 11.7 28.1.9 1.9 1.5 4.1.3 6.6-1.2 2.6-1.8 4.1-3.5 6.3-1.8 2.1-3.8 4.7-5.3 6.3-1.8 1.9-3.7 3.9-1.6 7.4 2.1 3.6 9.3 15.4 20 24.8 13.8 12.4 24.9 16.3 28.4 18.1 3.5 1.9 5.5 1.6 7.5-.9 2.1-2.6 8.7-10.1 11-13.6 2.3-3.4 4.6-2.9 7.6-1.7 3.2 1.3 20.4 9.8 23.9 11.6 3.5 1.9 5.8 2.8 6.6 4.4.8 1.6.8 9.3-2.4 18.3z"/>
          </svg>
          Marcar horário
        </motion.a>
      </div>
    </div>
  );
}

// ─── LIGHTBOX MODAL (NOVO — limpo, sem bordas, botões grandes) ──────────────────
function LightboxModal({ items, startIndex, onClose }: {
  items: Item[]; startIndex: number; onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const item = items[current];

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(current + 1, 1);
      if (e.key === "ArrowLeft") go(current - 1, -1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const go = useCallback((next: number, dir: 1 | -1) => {
    const n = ((next % items.length) + items.length) % items.length;
    setDirection(dir); setCurrent(n);
    setPlaying(false); setProgress(0); setDuration(0);
  }, [items.length]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video") return;
    v.currentTime = 0; setPlaying(false); setProgress(0);
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [current, item.type]);

  useEffect(() => {
    if (!playing) { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); return; }
    const tick = () => {
      const v = videoRef.current;
      if (v?.duration) setProgress(v.currentTime / v.duration);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [playing]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v?.duration) return;
    const r = (e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.clientWidth;
    v.currentTime = r * v.duration; setProgress(r);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
      >
        {/* Botão fechar — canto superior direito, grande */}
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(197,157,110,0.80)" }}
          whileHover={{ background: "rgba(197,157,110,0.14)", color: "#c59d6e" }}
          whileTap={{ scale: 0.88 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        </motion.button>

        {/* Contador */}
        <div className="absolute top-8 left-8 z-50">
          <span className="font-mono text-sm font-bold" style={{ color: "#c59d6e" }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-sm" style={{ color: "rgba(197,157,110,0.30)" }}>
            &nbsp;/&nbsp;{String(items.length).padStart(2, "0")}
          </span>
        </div>

        {/* Área de mídia */}
        <motion.div
          className="relative flex flex-col items-center justify-center"
          style={{ width: "min(90vw,1000px)", maxHeight: "90vh" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Mídia */}
          <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16/9", background: "rgba(0,0,0,0.5)" }}>
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div key={current} custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.4 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.4 }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.38, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {item.type === "video" ? (
                  <video
                    ref={videoRef} src={item.src}
                    className="w-full h-full object-contain"
                    playsInline style={{ cursor: "pointer" }}
                    onClick={togglePlay}
                    onEnded={() => { setPlaying(false); setProgress(1); }}
                  />
                ) : (
                  <Image src={item.src} alt="" fill className="object-contain" sizes="1000px" />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Botão play central — apenas quando parado */}
            {item.type === "video" && !playing && (
              <motion.button
                onClick={togglePlay}
                className="absolute inset-0 z-10 flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.25)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(197,157,110,0.15)", backdropFilter: "blur(12px)" }}
                  whileHover={{ scale: 1.1, background: "rgba(197,157,110,0.28)" }}
                  whileTap={{ scale: 0.92 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#c59d6e">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </motion.div>
              </motion.button>
            )}
          </div>

          {/* Controles inferiores — barra de progresso + play/pause + tempo */}
          {item.type === "video" && (
            <div className="w-full mt-5 px-2">
              {/* Barra de progresso */}
              <div
                className="relative h-1 rounded-full mb-5 cursor-pointer group/bar"
                style={{ background: "rgba(255,255,255,0.10)" }}
                onClick={seekTo}
              >
                <div className="h-full rounded-full transition-none"
                  style={{ width: `${progress * 100}%`, background: "linear-gradient(to right,#c59d6e,#e8c589)" }} />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress * 100}% - 8px)`, background: "#c59d6e", boxShadow: "0 0 8px rgba(197,157,110,0.60)" }}
                />
              </div>

              {/* Linha: play/pause | tempo */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#b8843e,#e8c589,#9b7540)", boxShadow: "0 4px 20px rgba(197,157,110,0.35)" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.90 }}
                >
                  {playing
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="#07050c"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="#07050c"><polygon points="6,3 20,12 6,21"/></svg>
                  }
                </motion.button>

                <span className="font-mono text-sm" style={{ color: "rgba(197,157,110,0.55)" }}>
                  {fmt(videoRef.current?.currentTime || 0)}
                  <span style={{ color: "rgba(197,157,110,0.25)" }}> / </span>
                  {fmt(duration)}
                </span>

                {playing && (
                  <div className="ml-auto flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#ef4444" }}
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase"
                      style={{ color: "rgba(197,157,110,0.45)" }}>Reproduzindo</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* Setas de navegação laterais — grandes e fora do card */}
        {([-1, 1] as const).map(d => (
          <motion.button
            key={d}
            onClick={(e) => { e.stopPropagation(); go(current + d, d); }}
            className={`absolute ${d < 0 ? "left-6" : "right-6"} top-1/2 -translate-y-1/2 z-40
              w-14 h-14 rounded-full flex items-center justify-center`}
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(197,157,110,0.70)" }}
            whileHover={{ background: "rgba(197,157,110,0.12)", color: "#c59d6e", scale: 1.08 }}
            whileTap={{ scale: 0.90 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {d < 0
                ? <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                : <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>}
            </svg>
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

// ─── GALLERY CARD ───────────────────────────────────────────────────────────────
function GalleryCard({ item, index, onOpen }: {
  item: Item; index: number; onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video") return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView, item.type]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video" || !inView) return;
    v.play().catch(() => {});
  }, [hovered, item.type, inView]);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="relative cursor-pointer overflow-hidden rounded-2xl"
      style={{ background: "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}>
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <div className="absolute inset-0">
          <motion.div className="absolute inset-0"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            {item.type === "video"
              ? <video ref={videoRef} src={item.src} className="w-full h-full object-cover" muted playsInline loop preload="auto" />
              : <Image src={item.src} alt={`Corte ${index + 1}`} fill className="object-cover" sizes="20vw" />}
          </motion.div>
          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top,rgba(3,6,13,0.90) 0%,rgba(3,6,13,0.10) 55%,transparent 100%)" }}
            animate={{ opacity: hovered ? 1 : 0.5 }} transition={{ duration: 0.3 }} />
          <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{ boxShadow: hovered ? "inset 0 0 0 1.5px rgba(197,157,110,0.55)" : "inset 0 0 0 1px rgba(197,157,110,0.07)" }}
            transition={{ duration: 0.28 }} />
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(3,6,13,0.80)", border: "1.5px solid rgba(197,157,110,0.50)" }}>
                  {item.type === "video"
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="#c59d6e"><polygon points="5,3 19,12 5,21"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c59d6e" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.22 }}
                className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <div className="flex items-end justify-between">
                  <span className="text-[7px] font-mono tracking-[0.34em] uppercase" style={{ color: "#c59d6e" }}>Falcão</span>
                  <span className="text-[8px] font-mono" style={{ color: "rgba(197,157,110,0.40)" }}>
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ─── DESKTOP GALLERY ────────────────────────────────────────────────────────────
function DesktopGallery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="cortes" ref={sectionRef}
      className="relative w-full py-32 overflow-hidden"
      style={{ background: "transparent" }}>
      <motion.div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(197,157,110,0.35),transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -18 }} animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] tracking-[0.44em] uppercase"
                  style={{ color: "rgba(197,157,110,0.75)" }}>Galeria</span>
                <motion.div className="h-px flex-1 max-w-[90px]"
                  style={{ background: "linear-gradient(to right,rgba(197,157,110,0.50),transparent)" }}
                  initial={{ scaleX: 0, originX: 0 }} animate={titleInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }} />
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 28 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="font-black leading-[0.90] tracking-tight"
                style={{ fontSize: "clamp(3rem,5vw,5.5rem)", color: "#e6dfd5" }}>
                Nossos<br /><span style={{ color: "#c59d6e" }}>Trabalhos</span>
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-end gap-4">
              <p className="text-sm leading-relaxed text-right max-w-xs" style={{ color: "rgba(148,163,194,0.42)" }}>
                Cada corte é uma obra de arte. Precisão, estilo e atenção aos detalhes em cada trabalho.
              </p>
              <div className="flex items-center gap-6">
                {[
                  { v: ITEMS.filter(i => i.type === "photo").length, l: "fotos" },
                  { v: ITEMS.filter(i => i.type === "video").length, l: "vídeos" },
                  { v: "4.9★", l: "google" },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <span className="font-black text-base block leading-none" style={{ color: "#c59d6e" }}>{v}</span>
                    <span className="font-mono text-[8px] tracking-wider uppercase block mt-1"
                      style={{ color: "rgba(148,163,194,0.35)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {ITEMS.map((it, i) => (
            <GalleryCard key={i} item={it} index={i} onOpen={() => setLightboxIndex(i)} />
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(197,157,110,0.16)", color: "rgba(197,157,110,0.72)" }}
            whileHover={{ borderColor: "rgba(197,157,110,0.45)", color: "#c59d6e", background: "rgba(197,157,110,0.05)" }}
            whileTap={{ scale: 0.96 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
            </svg>
            <span className="font-mono text-sm tracking-wide">@barbeariafalcao_</span>
            <motion.svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              animate={{ x: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.a>
          <motion.a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm"
            style={{ background: "linear-gradient(135deg,#b8843e 0%,#e8c589 50%,#9b7540 100%)", color: "#07050c", boxShadow: "0 4px 24px rgba(197,157,110,0.30)" }}
            whileHover={{ scale: 1.04, boxShadow: "0 6px 36px rgba(197,157,110,0.50)" }}
            whileTap={{ scale: 0.96 }}>
            <svg width="16" height="16" viewBox="0 0 256 258" fill="currentColor">
              <path d="M128.1 0C57.3 0 .7 56.5.7 126.3c0 22.1 5.8 43.7 16.8 62.7L0 256l69.9-17.9c18.3 10 39 15.3 60.3 15.3h.1c70.8 0 127.4-56.5 127.4-126.3C257.7 56.5 199 0 128.1 0zm75.2 180.4c-3.2 9-18.4 17.2-25.3 18.3-6.5 1-14.8 1.4-23.9-1.5-5.5-1.8-12.6-4.1-21.7-8.1-38.1-16.6-62.8-55.3-64.8-57.9-1.9-2.6-15.4-20.5-15.4-39.1 0-18.6 9.7-27.7 13.1-31.5 3.3-3.8 7.2-4.7 9.6-4.7 2.4 0 4.8 0 6.8.1 2.2.1 5.1-.8 8 6.1 3.2 7.5 10.8 26.2 11.7 28.1.9 1.9 1.5 4.1.3 6.6-1.2 2.6-1.8 4.1-3.5 6.3-1.8 2.1-3.8 4.7-5.3 6.3-1.8 1.9-3.7 3.9-1.6 7.4 2.1 3.6 9.3 15.4 20 24.8 13.8 12.4 24.9 16.3 28.4 18.1 3.5 1.9 5.5 1.6 7.5-.9 2.1-2.6 8.7-10.1 11-13.6 2.3-3.4 4.6-2.9 7.6-1.7 3.2 1.3 20.4 9.8 23.9 11.6 3.5 1.9 5.8 2.8 6.6 4.4.8 1.6.8 9.3-2.4 18.3z"/>
            </svg>
            Marcar horário
          </motion.a>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16"
        style={{ background: "linear-gradient(to top,rgba(197,157,110,0.18),transparent)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
      {lightboxIndex !== null && (
        <LightboxModal items={ITEMS} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </section>
  );
}

export default function Cortes() {
  return (
    <>
      <div className="lg:hidden"><MobileSlider /></div>
      <div className="hidden lg:block"><DesktopGallery /></div>
    </>
  );
}