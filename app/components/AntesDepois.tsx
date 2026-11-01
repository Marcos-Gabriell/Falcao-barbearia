"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE } from "@/config/site";

/* Antes/depois com <input type="range"> por baixo:
   arrasta no dedo ou mouse, e funciona no teclado (setas) e em leitor de tela. */
export default function AntesDepois() {
  const [pos, setPos] = useState(50);

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 mt-24 mb-16">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.4em] text-[#b8853a]">
            Antes e depois
          </span>
          <h3 className="font-serif text-4xl text-[#f5f1eb] md:text-5xl">
            Transformações <span className="italic text-[#b8853a]">reais.</span>
          </h3>
        </div>
        <p className="max-w-sm text-sm font-light text-white/50">
          Arraste pra ver a diferença que um corte bem feito faz.
        </p>
      </div>

      <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl md:aspect-video">
        <Image
          src="/cortes/depois.png"
          alt={`Depois: resultado do corte na Falcão Barbearia em ${SITE.city}`}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src="/cortes/antes.png"
            alt="Antes do corte"
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover grayscale brightness-75"
          />
        </div>

        <span className="pointer-events-none absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
          Antes
        </span>
        <span className="pointer-events-none absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d4aa7a] backdrop-blur-md">
          Depois
        </span>

        {/* divisória + alça */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-[#b8853a] shadow-[0_0_20px_rgba(184,133,58,0.8)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b8853a] text-black shadow-xl ring-4 ring-[#b8853a]/30">
            <ChevronLeft size={16} className="-mr-1" />
            <ChevronRight size={16} />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Comparar antes e depois do corte"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0 touch-pan-y"
        />
      </div>
    </div>
  );
}
