"use client";

import { useState } from "react";
import { ArrowRight, User } from "lucide-react";
import type { ProfessionalSimple } from "../api";

interface ProfessionalStepProps {
  professionals: ProfessionalSimple[];
  loading: boolean;
  onNext: (professional: ProfessionalSimple) => void;
}

export function ProfessionalStep({ professionals, loading, onNext }: ProfessionalStepProps) {
  const [selected, setSelected] = useState<number | null>(
    professionals.length === 1 ? professionals[0].id : null
  );

  const selectedPro = professionals.find(p => p.id === selected);

  if (loading) {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-[#b8853a] text-[10px] font-black tracking-[0.2em] uppercase mb-3">Passo 5 de 6</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
            Escolha o<br />
            <span className="text-[#d4aa7a] italic">profissional.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2].map(i => (
            <div key={i} className="h-[76px] rounded-xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (professionals.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[#b8853a] text-[10px] font-black tracking-[0.2em] uppercase mb-3">Passo 5 de 6</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
            Sem disponibilidade
          </h2>
        </div>
        <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
          Nenhum profissional disponível para esse serviço no momento.
          Tente outro serviço ou entre em contato pelo WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">

      {/* Heading */}
      <div>
        <p className="text-[#b8853a] text-[10px] font-black tracking-[0.2em] uppercase mb-3">Passo 5 de 6</p>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
          {professionals.length === 1 ? "Profissional" : "Com quem vai"}<br />
          <span className="text-[#d4aa7a] italic">
            {professionals.length === 1 ? "disponível." : "cortar?"}
          </span>
        </h2>
      </div>

      {/* Professional list */}
      <div className="flex flex-col gap-3">
        {professionals.map(p => {
          const active = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300
                ${active
                  ? "border-[#b8853a] bg-[#b8853a]/10 shadow-[0_0_15px_rgba(184,133,58,0.15)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }
              `}
            >
              {/* Ícone Circular do Profissional */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0
                ${active
                  ? "bg-[#b8853a]/20 text-[#d4aa7a]"
                  : "bg-white/5 text-white/40 group-hover:text-[#d4aa7a]"
                }
              `}>
                <User size={20} strokeWidth={1.5} />
              </div>
              
              {/* Nome do Profissional */}
              <span className={`font-bold text-[15px] transition-colors flex-1
                ${active ? "text-[#f5f1eb]" : "text-white/70 group-hover:text-[#f5f1eb]"}
              `}>
                {p.name}
              </span>
              
              {/* Indicador de Selecionado */}
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-300
                ${active ? "border-[#b8853a]" : "border-white/10 group-hover:border-[#b8853a]/50"}
              `}>
                {active && <div className="w-2 h-2 rounded-full bg-[#d4aa7a]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* CTA (Botão Continuar) */}
      <button
        disabled={!selectedPro}
        onClick={() => selectedPro && onNext(selectedPro)}
        className={`group w-full flex items-center justify-center gap-3 py-4 mt-2 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300
          ${selectedPro
            ? "bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.02] cursor-pointer"
            : "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
          }
        `}
      >
        Continuar
        <ArrowRight size={14} className={`transition-transform duration-300 ${selectedPro ? "group-hover:translate-x-1" : ""}`} />
      </button>
      
    </div>
  );
}