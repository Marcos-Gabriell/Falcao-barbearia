"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import type { ProfessionalSimple } from "../api";
import { WHATSAPP_LINK } from "../../utils/links";

interface ProfessionalStepProps {
  professionals: ProfessionalSimple[];
  loading: boolean;
  /** Quando há mais de 1 serviço, avisa no texto que precisa atender todos */
  isMulti?: boolean;
  onNext: (professional: ProfessionalSimple) => void;
}

export function ProfessionalStep({ professionals, loading, isMulti, onNext }: ProfessionalStepProps) {
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
          {isMulti
            ? "Nenhum profissional atende todos os serviços escolhidos no momento. Tente uma combinação diferente ou fale no WhatsApp."
            : "Nenhum profissional disponível para esse serviço no momento. Tente outro serviço ou entre em contato pelo WhatsApp."}
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300 bg-[#25D366] text-black hover:bg-[#1ebe5d] active:scale-[0.98] shadow-[0_8px_32px_rgba(37,211,102,0.2)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.054 23.077a.75.75 0 00.918.919l5.261-1.488A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.964-1.362l-.356-.211-3.683 1.042 1.058-3.592-.232-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Falar no WhatsApp
        </a>
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
        {isMulti && (
          <p className="text-white/30 text-[11px] mt-3 font-medium">
            Mostrando apenas quem atende todos os serviços escolhidos
          </p>
        )}
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
              <div className={`w-12 h-12 rounded-full shrink-0 overflow-hidden transition-colors duration-300
                ${!p.photoUrl ? (active ? "bg-[#b8853a]/20 text-[#d4aa7a]" : "bg-white/5 text-white/40 group-hover:text-[#d4aa7a]") : ""}
                flex items-center justify-center
                ${active ? "ring-2 ring-[#b8853a]" : "ring-1 ring-white/10"}
              `}>
                {p.photoUrl ? (
                  <Image
                    src={p.photoUrl}
                    alt={p.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={20} strokeWidth={1.5} />
                )}
              </div>

              <span className={`font-bold text-[15px] transition-colors flex-1
                ${active ? "text-[#f5f1eb]" : "text-white/70 group-hover:text-[#f5f1eb]"}
              `}>
                {p.name}
              </span>

              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-300
                ${active ? "border-[#b8853a]" : "border-white/10 group-hover:border-[#b8853a]/50"}
              `}>
                {active && <div className="w-2 h-2 rounded-full bg-[#d4aa7a]" />}
              </div>
            </button>
          );
        })}
      </div>

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