"use client";

import { useEffect, useRef } from "react";

/* Vídeo que não baixa nada até aparecer na tela.
   - preload="none" + poster: na abertura da página só o poster (~20 KB) carrega
   - toca quando ≥ 40% visível, pausa quando sai
   - com "reduzir movimento", fica no poster */
export default function LazyVideo({
  webm,
  mp4,
  poster,
  label,
  className = "",
}: {
  webm: string;
  mp4: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      disablePictureInPicture
      aria-label={label}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
