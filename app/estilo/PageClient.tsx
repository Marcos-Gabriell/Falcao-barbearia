"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

import { postsOrdenados, formatarData, tempoLeitura } from "./data";

export default function EstiloBlogPage() {
  const postDestaque = postsOrdenados.find((p) => p.destaque) ?? postsOrdenados[0];
  const postsSecundarios = postsOrdenados.filter((p) => p !== postDestaque);
  const categorias = ["Todos", ...Array.from(new Set(postsSecundarios.map((p) => p.categoria)))];
  const [cat, setCat] = useState("Todos");
  const visiveis = cat === "Todos" ? postsSecundarios : postsSecundarios.filter((p) => p.categoria === cat);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] pt-32 pb-24 select-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* ================= CABEÇALHO ================= */}
          <div className="hero-in mb-16 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Blog da Falcão
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#f5f1eb] leading-tight tracking-tight">
              Cultura & <span className="text-[#d4aa7a] italic">Estilo.</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl font-medium mx-auto md:mx-0">
              Dicas de corte, barba e estilo masculino direto da cadeira da Falcão Barbearia, em Tapiramutá-BA.
            </p>
          </div>

          {/* ================= POST EM DESTAQUE ================= */}
          <div className="hero-in [--d:80ms] mb-20">
            <Link href={`/estilo/${postDestaque.slug}`} className="group block relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                  <Image 
                    src={postDestaque.imagem} 
                    alt={postDestaque.titulo} 
                    fill sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070707] opacity-0 lg:opacity-100" />
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center relative z-10 bg-[#070707] lg:bg-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[#b8853a]/10 text-[#d4aa7a] px-3 py-1.5 rounded-md text-[9px] uppercase tracking-widest font-bold border border-[#b8853a]/20">
                      {postDestaque.categoria}
                    </span>
                    <span className="text-white/55 text-[10px] uppercase tracking-widest font-bold">
                      <time dateTime={postDestaque.data}>{formatarData(postDestaque.data)}</time> · {tempoLeitura(postDestaque)} min
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#f5f1eb] leading-tight mb-6 group-hover:text-[#d4aa7a] transition-colors">
                    {postDestaque.titulo}
                  </h2>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed font-medium mb-8">
                    {postDestaque.resumo}
                  </p>
                  <div className="flex items-center gap-3 text-[#b8853a] text-xs font-bold uppercase tracking-[0.2em] group-hover:text-[#d4aa7a] transition-colors">
                    Ler Artigo Completo <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* ================= GRID DE POSTS ================= */}
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-[#f5f1eb] mb-8 border-b border-white/5 pb-4">
              Publicações Recentes
            </h2>
            {/* Filtro por categoria */}
            <div className="-mt-2 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
              {categorias.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`min-h-[40px] rounded-full border px-4 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
                    cat === c
                      ? "border-[#b8853a] bg-[#b8853a] text-[#070707]"
                      : "border-white/10 text-white/60 hover:border-[#b8853a]/40 hover:text-[#d4aa7a]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiveis.map((post) => (
              <div key={post.id} className="cv-card">
                <Link href={`/estilo/${post.slug}`} className="group block flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-2xl p-4 hover:bg-white/[0.03] transition-colors">
                  <div className="relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <Image 
                      src={post.imagem} 
                      alt={post.titulo} 
                      fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    />
                    <div className="absolute top-3 left-3 bg-[#070707]/80 backdrop-blur-sm text-[#d4aa7a] px-3 py-1.5 rounded-md text-[8px] uppercase tracking-widest font-bold border border-white/10">
                      {post.categoria}
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow px-2">
                    <span className="text-white/55 text-[10px] uppercase tracking-widest font-bold mb-3">
                      <time dateTime={post.data}>{formatarData(post.data)}</time> · {tempoLeitura(post)} min de leitura
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#f5f1eb] leading-tight mb-3 group-hover:text-[#d4aa7a] transition-colors">
                      {post.titulo}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed font-medium mb-6 flex-grow line-clamp-3">
                      {post.resumo}
                    </p>
                    <div className="mt-auto text-[#b8853a] text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Ler mais <span className="text-lg leading-none">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}