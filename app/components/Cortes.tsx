"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { WHATSAPP_LINK } from "../utils/links";

type Item = { type: "photo"; src: string } | { type: "video"; src: string };

const ITEMS: Item[] = [
  { type: "video", src: "/cortes/vid1.mp4"     },
  { type: "photo", src: "/cortes/corte1.jpg"   },
  { type: "photo", src: "/cortes/corte2.jpg"   },
  { type: "video", src: "/cortes/vid2.mp4"     },
  { type: "photo", src: "/cortes/corte3.png"   },
  { type: "photo", src: "/cortes/corte4.jpg"   },
  { type: "video", src: "/cortes/vid3.mp4"     },
  { type: "photo", src: "/cortes/corte5.png"   },
  { type: "photo", src: "/cortes/corte6.jpg"   },
  { type: "video", src: "/cortes/vid4.mp4"     },
  { type: "photo", src: "/cortes/corte7.jpg"   },
  { type: "photo", src: "/cortes/corte8.png"   },
  { type: "photo", src: "/cortes/corte9.png"   },
  { type: "photo", src: "/cortes/corte10.jpeg" },
  { type: "video", src: "/cortes/vid5.mp4"     },
];

const PHOTO_DURATION = 4000;
const INSTAGRAM_URL  = "https://instagram.com/barbeariafalcao_";

function SegmentProgress({ item, active, onDone }: {
  item: Item; active: boolean; onDone: () => void;
}) {
  const [pct, setPct] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);
  const done = useRef(false);

  useEffect(() => {
    done.current = false;
    setPct(0);
    if (!active) return;
    if (item.type === "photo") {
      startRef.current = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - (startRef.current ?? now)) / PHOTO_DURATION, 1);
        setPct(p * 100);
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
        else if (!done.current) { done.current = true; onDone(); }
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    } else {
      setPct(100);
    }
  }, [active, item]);

  return (
    <div className="h-full rounded-full"
      style={{ width: `${pct}%`, background: "linear-gradient(to right,#c59d6e,#f0d99a)" }} />
  );
}

function MediaSlide({ item, index, active, direction, onVideoEnd }: {
  item: Item; index: number; active: boolean; direction: 1 | -1; onVideoEnd: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) { v.currentTime = 0; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [active]);

  return (
    <AnimatePresence custom={direction} mode="popLayout">
      <motion.div key={index} custom={direction}
        variants={{
          enter: (d: number) => ({ clipPath: d > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }),
          center: { clipPath: "inset(0 0% 0 0)" },
          exit:  (d: number) => ({ clipPath: d > 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }),
        }}
        initial="enter" animate="center" exit="exit"
        transition={{ duration: 0.72, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0"
      >
        {item.type === "video" ? (
          <video ref={videoRef} src={item.src} className="w-full h-full object-cover"
            muted playsInline onEnded={onVideoEnd} />
        ) : (
          <Image src={item.src} alt="" fill className="object-cover" sizes="100vw" priority />
        )}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom,rgba(3,6,13,0.60) 0%,transparent 30%,transparent 55%,rgba(3,6,13,0.94) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right,rgba(3,6,13,0.60) 0%,transparent 55%)" }} />
      </motion.div>
    </AnimatePresence>
  );
}

function LightboxModal({ items, startIndex, onClose }: {
  items: Item[]; startIndex: number; onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRaf = useRef<number | undefined>(undefined);

  const item = items[current];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(current + 1, 1);
      if (e.key === "ArrowLeft")  go(current - 1, -1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const go = useCallback((next: number, dir: 1 | -1) => {
    const n = ((next % items.length) + items.length) % items.length;
    setDirection(dir);
    setCurrent(n);
    setPlaying(false);
    setProgress(0);
    setDuration(0);
  }, [items.length]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || item.type !== "video") return;
    v.currentTime = 0;
    setPlaying(false);
    setProgress(0);

    const onLoaded = () => setDuration(v.duration || 0);
    v.addEventListener("loadedmetadata", onLoaded);
    return () => v.removeEventListener("loadedmetadata", onLoaded);
  }, [current, item.type]);

  useEffect(() => {
    if (!playing) { cancelAnimationFrame(progressRaf.current!); return; }
    const tick = () => {
      const v = videoRef.current;
      if (v && v.duration) setProgress(v.currentTime / v.duration);
      progressRaf.current = requestAnimationFrame(tick);
    };
    progressRaf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRaf.current!);
  }, [playing]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
    setProgress(ratio);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(18px)" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        onClick={onClose}
      >
        {/* Container */}
        <motion.div
          className="relative flex flex-col"
          style={{ width: "min(88vw, 960px)", maxHeight: "92vh" }}
          initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          {/* Borda dourada */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(197,157,110,0.20), 0 40px 100px rgba(0,0,0,0.80)" }} />

          <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl"
            style={{ background: "rgba(6,11,20,0.95)", borderBottom: "1px solid rgba(197,157,110,0.10)" }}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.36em] uppercase" style={{ color: "rgba(197,157,110,0.60)" }}>
                {item.type === "video" ? "Vídeo" : "Foto"}
              </span>
              <span className="font-mono text-[9px]" style={{ color: "rgba(148,163,194,0.30)" }}>
                {String(current + 1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto" style={{ maxWidth: "60%", scrollbarWidth: "none" }}>
              {items.map((itm, i) => (
                <button key={i} onClick={() => go(i, i > current ? 1 : -1)}
                  className="flex-shrink-0 rounded-md overflow-hidden transition-all"
                  style={{ width: i === current ? 36 : 26, height: 26, outline: i === current ? "1.5px solid #c59d6e" : "none", opacity: i === current ? 1 : 0.45 }}>
                  {itm.type === "video"
                    ? <video src={itm.src} className="w-full h-full object-cover" muted playsInline preload="metadata" />
                    : <Image src={itm.src} alt="" width={36} height={26} className="object-cover w-full h-full" />
                  }
                </button>
              ))}
            </div>

            <button onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(197,157,110,0.08)", color: "rgba(197,157,110,0.70)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(197,157,110,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(197,157,110,0.08)")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="relative overflow-hidden" style={{ background: "#03060d", aspectRatio: "16/9" }}>
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div key={current} custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
                  center: { x: 0, opacity: 1 },
                  exit:  (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 }),
                }}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.40, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {item.type === "video" ? (
                  <video ref={videoRef} src={item.src} className="w-full h-full object-contain"
                    playsInline onClick={togglePlay}
                    onEnded={() => { setPlaying(false); setProgress(1); }}
                    style={{ cursor: "pointer" }} />
                ) : (
                  <Image src={item.src} alt="" fill className="object-contain" sizes="960px" />
                )}
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={() => go(current - 1, -1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(3,6,13,0.82)", border: "1px solid rgba(197,157,110,0.22)", color: "#c59d6e", backdropFilter: "blur(10px)" }}
              whileHover={{ scale: 1.1, borderColor: "rgba(197,157,110,0.55)" }}
              whileTap={{ scale: 0.90 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <motion.button
              onClick={() => go(current + 1, 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(3,6,13,0.82)", border: "1px solid rgba(197,157,110,0.22)", color: "#c59d6e", backdropFilter: "blur(10px)" }}
              whileHover={{ scale: 1.1, borderColor: "rgba(197,157,110,0.55)" }}
              whileTap={{ scale: 0.90 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            {item.type === "video" && !playing && (
              <motion.button
                onClick={togglePlay}
                className="absolute inset-0 z-10 flex items-center justify-center"
                style={{ background: "rgba(3,6,13,0.28)" }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(3,6,13,0.80)", border: "1.5px solid rgba(197,157,110,0.45)" }}
                  whileHover={{ scale: 1.10, borderColor: "rgba(197,157,110,0.80)" }}
                  whileTap={{ scale: 0.93 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#c59d6e">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </motion.div>
              </motion.button>
            )}
          </div>

          {item.type === "video" && (
            <div className="px-4 py-3 rounded-b-2xl"
              style={{ background: "rgba(6,11,20,0.95)", borderTop: "1px solid rgba(197,157,110,0.08)" }}>

              <div className="relative h-1.5 rounded-full mb-3 cursor-pointer group/bar"
                style={{ background: "rgba(197,157,110,0.12)" }}
                onClick={seekTo}>
                <div className="h-full rounded-full transition-none"
                  style={{ width: `${progress * 100}%`, background: "linear-gradient(to right,#c59d6e,#e8c589)" }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress * 100}% - 6px)`, background: "#c59d6e", boxShadow: "0 0 8px rgba(197,157,110,0.60)" }} />
              </div>

              <div className="flex items-center gap-3">
                <motion.button onClick={togglePlay}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(197,157,110,0.10)", color: "#c59d6e" }}
                  whileHover={{ background: "rgba(197,157,110,0.22)" }}
                  whileTap={{ scale: 0.90 }}>
                  {playing
                    ? <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
                    : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  }
                </motion.button>

                <motion.button onClick={() => go(current - 1, -1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ color: "rgba(197,157,110,0.55)" }}
                  whileHover={{ color: "#c59d6e" }} whileTap={{ scale: 0.90 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 20L9 12l10-8v16zM5 19V5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
                <motion.button onClick={() => go(current + 1, 1)}
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ color: "rgba(197,157,110,0.55)" }}
                  whileHover={{ color: "#c59d6e" }} whileTap={{ scale: 0.90 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4l10 8-10 8V4zM19 5v14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>

                <span className="font-mono text-[10px]" style={{ color: "rgba(148,163,194,0.45)" }}>
                  {formatTime((videoRef.current?.currentTime) || 0)} / {formatTime(duration)}
                </span>

                <div className="ml-auto flex items-center gap-1.5">
                  {playing && (
                    <>
                      <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }}
                        animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                      <span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: "rgba(197,157,110,0.55)" }}>
                        Reproduzindo
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MobileSlider() {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const item = ITEMS[current];

  const go = useCallback((next: number, dir: 1 | -1) => {
    const n = ((next % ITEMS.length) + ITEMS.length) % ITEMS.length;
    setDirection(dir);
    setCurrent(n);
  }, []);

  const tx = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { tx.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = tx.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 44) go(current + (dx > 0 ? 1 : -1), dx > 0 ? 1 : -1);
  };

  const handleClick = (e: React.MouseEvent) => {
    const mid = (e.currentTarget as HTMLElement).clientWidth / 2;
    if (e.clientX < mid) go(current - 1, -1);
    else go(current + 1, 1);
  };

  const itemNumber  = String(current + 1).padStart(2, "0");
  const totalNumber = String(ITEMS.length).padStart(2, "0");

  return (
    <div className="flex flex-col">
      <div className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: 560, cursor: "pointer" }}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        onClick={handleClick}>

        <MediaSlide item={item} index={current} active={true}
          direction={direction} onVideoEnd={() => go(current + 1, 1)} />

        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-5 pointer-events-none">
          <div className="relative h-8 w-24">
            <Image src="/logo1.png" alt="Falcão Barbearia" fill className="object-contain object-left" />
          </div>
          <div className="flex items-center gap-1.5">
            <AnimatePresence mode="wait">
              <motion.span key={current} className="font-mono text-xs font-bold" style={{ color: "#c59d6e" }}
                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.22 }}>
                {itemNumber}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-[9px]" style={{ color: "rgba(148,163,194,0.35)" }}>/{totalNumber}</span>
          </div>
        </div>

        <AnimatePresence>
          {item.type === "video" && (
            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }}
              className="absolute top-16 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full pointer-events-none"
              style={{ background: "rgba(3,6,13,0.82)", border: "1px solid rgba(197,157,110,0.28)", backdropFilter: "blur(12px)" }}>
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }}
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
              <span className="text-[8px] font-mono tracking-[0.30em] uppercase" style={{ color: "#e6dfd5" }}>Vídeo</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 z-10 flex pointer-events-none">
          <div className="w-1/2 h-full flex items-center justify-start pl-3 opacity-0" />
          <div className="w-1/2 h-full flex items-center justify-end pr-3 opacity-0" />
        </div>

        <div className="absolute bottom-0 left-0 z-20 p-5 pointer-events-none" style={{ maxWidth: "75vw" }}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-px w-6" style={{ background: "#c59d6e" }} />
            <span className="font-mono text-[8px] tracking-[0.44em] uppercase" style={{ color: "rgba(197,157,110,0.60)" }}>Galeria</span>
          </div>
          <h2 className="font-black leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(2rem,9vw,3rem)", color: "#e6dfd5" }}>
            Nossos<br />
            <AnimatePresence mode="wait">
              <motion.span key={item.type} style={{ color: "#c59d6e" }}
                initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ clipPath: "inset(0 0 0 100%)" }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                className="inline-block">
                {item.type === "video" ? "Vídeos" : "Trabalhos"}
              </motion.span>
            </AnimatePresence>
          </h2>
        </div>

        <div className="absolute bottom-6 right-4 z-20 flex gap-1.5 pointer-events-none">
          {ITEMS.map((_, i) => (
            <div key={i} className="rounded-full transition-all duration-300"
              style={{ width: i === current ? 16 : 4, height: 4, background: i === current ? "#c59d6e" : "rgba(197,157,110,0.25)" }} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none font-black"
            style={{ fontSize: "clamp(6rem,22vw,10rem)", color: "transparent", WebkitTextStroke: "1px rgba(197,157,110,0.05)", letterSpacing: "-0.06em", lineHeight: 1 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {itemNumber}
          </motion.div>
        </AnimatePresence>
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

function GalleryCard({ item, index, onOpen }: { item: Item; index: number; onOpen: () => void }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl"
      style={{ background: "#060b14" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        <div className="absolute inset-0">

          <motion.div className="absolute inset-0"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            {item.type === "video" ? (
              <video src={item.src} className="w-full h-full object-cover" muted playsInline loop preload="metadata" />
            ) : (
              <Image src={item.src} alt={`Corte ${index + 1}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 20vw" />
            )}
          </motion.div>

          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(3,6,13,0.90) 0%, rgba(3,6,13,0.10) 55%, transparent 100%)" }}
            animate={{ opacity: hovered ? 1 : 0.5 }} transition={{ duration: 0.30 }} />

          <motion.div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(197,157,110,0.06) 0%, transparent 60%)" }}
            animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.30 }} />

          <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{ boxShadow: hovered ? "inset 0 0 0 1.5px rgba(197,157,110,0.55)" : "inset 0 0 0 1px rgba(197,157,110,0.07)" }}
            transition={{ duration: 0.28 }} />

          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full"
            style={{ background: "rgba(3,6,13,0.82)", border: "1px solid rgba(197,157,110,0.20)", backdropFilter: "blur(8px)" }}>
            {item.type === "video"
              ? <svg width="7" height="7" viewBox="0 0 24 24" fill="#c59d6e"><polygon points="5,3 19,12 5,21"/></svg>
              : <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#c59d6e" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            }
            <span className="text-[7px] font-mono tracking-[0.24em] uppercase" style={{ color: "#e6dfd5" }}>
              {item.type === "video" ? "Vídeo" : "Foto"}
            </span>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.20 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(3,6,13,0.80)", border: "1.5px solid rgba(197,157,110,0.50)" }}>
                  {item.type === "video"
                    ? <svg width="14" height="14" viewBox="0 0 24 24" fill="#c59d6e"><polygon points="5,3 19,12 5,21"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c59d6e" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  }
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22 }}
                className="absolute bottom-0 left-0 right-0 p-3 z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <motion.div className="h-px mb-1" style={{ background: "linear-gradient(to right, #c59d6e, transparent)" }}
                      initial={{ width: 0 }} animate={{ width: 18 }} transition={{ duration: 0.28 }} />
                    <span className="text-[7px] font-mono tracking-[0.34em] uppercase" style={{ color: "#c59d6e" }}>Falcão</span>
                  </div>
                  <span className="text-[8px] font-mono" style={{ color: "rgba(197,157,110,0.40)" }}>
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.06) 44%, transparent 50%)" }}
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "220%" : "-100%" }}
            transition={{ duration: 0.85, ease: "easeInOut" }} />
        </div>
      </div>
    </motion.div>
  );
}

function DesktopGallery() {
  const sectionRef  = useRef(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-60px" });
  const titleRef    = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="cortes" ref={sectionRef}
      className="relative w-full py-28 overflow-hidden"
      style={{ background: "transparent" }}>

      <motion.div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(197,157,110,0.35),transparent)" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16" ref={titleRef}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, x: -18 }} animate={titleInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] tracking-[0.44em] uppercase" style={{ color: "rgba(197,157,110,0.75)" }}>Galeria</span>
                <motion.div className="h-px flex-1 max-w-[90px]"
                  style={{ background: "linear-gradient(to right, rgba(197,157,110,0.50), transparent)" }}
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
                    <span className="font-mono text-[8px] tracking-wider uppercase block mt-1" style={{ color: "rgba(148,163,194,0.35)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {ITEMS.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} onOpen={() => setLightboxIndex(i)} />
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
        <LightboxModal
          items={ITEMS}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
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