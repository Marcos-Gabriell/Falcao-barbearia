"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Calendar, ArrowLeft } from "lucide-react";

export default function NotFoundContent() {
  return (
    <main className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-[#050505] select-none">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#b8853a]/6 blur-[140px] rounded-full pointer-events-none" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* 404 watermark animado */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="text-[38vw] font-serif font-black text-white opacity-[0.025] leading-none tracking-tighter">
          404
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">

        {/* Badge */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="h-px w-10 bg-[#b8853a]" />
          <span className="text-[#b8853a] text-[10px] font-bold tracking-[0.35em] uppercase">
            Erro 404
          </span>
          <div className="h-px w-10 bg-[#b8853a]" />
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl md:text-5xl font-serif font-black text-[#f5f1eb] leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Página não<br />
          <span className="italic text-[#b8853a] font-normal">encontrada.</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-white/40 text-sm leading-relaxed max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          O endereço que você tentou acessar não existe ou foi movido.
          Mas ainda dá pra agendar seu corte por aqui.
        </motion.p>

        {/* Botões */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Link
            href="/"
            className="group flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#b8853a] text-black text-[11px] font-black tracking-widest uppercase rounded-xl hover:bg-[#d4aa7a] active:scale-[0.97] transition-all duration-200 shadow-[0_0_20px_rgba(184,133,58,0.2)] hover:shadow-[0_0_30px_rgba(184,133,58,0.4)]"
          >
            <Home size={14} className="shrink-0" />
            Voltar ao Início
          </Link>

          <Link
            href="/agendar"
            className="group flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/10 text-white/50 text-[11px] font-black tracking-widest uppercase rounded-xl hover:border-[#b8853a]/40 hover:text-[#d4aa7a] active:scale-[0.97] transition-all duration-200"
          >
            <Calendar size={14} className="shrink-0" />
            Agendar Horário
          </Link>
        </motion.div>

        {/* Voltar link */}
        <motion.button
          onClick={() => window.history.back()}
          className="flex items-center gap-1.5 text-white/20 hover:text-white/50 text-[11px] tracking-widest uppercase transition-colors mt-1 cursor-pointer bg-transparent border-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <ArrowLeft size={12} />
          Página anterior
        </motion.button>

      </div>
    </main>
  );
}