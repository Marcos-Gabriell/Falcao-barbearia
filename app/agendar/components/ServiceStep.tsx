"use client";

import { useState } from "react";
import { Scissors, Crown, Droplet, ArrowRight, Check, Clock } from "lucide-react";
import type { ServiceItem } from "../api";

function getIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("barba") || n.includes("sobrancelha") || n.includes("pigment"))
    return <Crown size={17} strokeWidth={1.5} />;
  if (n.includes("nevou") || n.includes("luzes") || n.includes("desond") || n.includes("quím"))
    return <Droplet size={17} strokeWidth={1.5} />;
  return <Scissors size={17} strokeWidth={1.5} />;
}

const FALLBACK_SERVICES: ServiceItem[] = [
  { id: 1, name: "Corte Tradicional",  description: "Na régua e no estilo que você já conhece.",              price: 30  },
  { id: 2, name: "Corte na Tesoura",   description: "Design exclusivo feito 100% na tesoura.",                price: 40  },
  { id: 3, name: "Pezinho",            description: "Alinhamento rápido de contorno e nuca.",                 price: 15  },
  { id: 4, name: "Barba Premium",      description: "Terapia de toalha quente e acabamento navalhado.",       price: 15  },
  { id: 5, name: "Sobrancelha",        description: "Limpeza de contorno prática e bem alinhada.",            price: 10  },
  { id: 6, name: "Pigmentação",        description: "Correção de imperfeições com aspecto natural.",          price: 20  },
  { id: 8, name: "Luzes",             description: "Mechas e reflexos de alto contraste pra iluminar.",      price: 80  },
  { id: 9, name: "Desondulação",       description: "Redução extrema de volume e alinhamento do fio.",       price: 100 },
];

interface ServiceStepProps {
  services: ServiceItem[];
  preSelected?: number | null;
  onNext: (service: ServiceItem) => void;
}

export function ServiceStep({ services, preSelected, onNext }: ServiceStepProps) {
  const list = services.length > 0 ? services : FALLBACK_SERVICES;
  const [selected, setSelected] = useState<number | null>(preSelected ?? null);

  const selectedService = list.find(s => s.id === selected);

  return (
    <div className="w-full flex flex-col gap-7">

      {/* Heading */}
      <div>
        <p className="text-[#b8853a] text-[9px] font-black tracking-[0.35em] uppercase mb-3">
          Passo 1 de 6
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-black text-[#f5f1eb] leading-tight">
          Qual serviço<br />
          <span className="text-[#d4aa7a] italic">você quer?</span>
        </h2>
      </div>

      {/* Service grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {list.map(s => {
          const active = selected === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`
                group relative text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer
                ${active
                  ? "border-[#b8853a]/55 bg-gradient-to-br from-[#b8853a]/[0.13] to-[#b8853a]/[0.03] shadow-[0_0_28px_rgba(184,133,58,0.12)]"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_0_16px_rgba(255,255,255,0.02)]"
                }
              `}
            >
              {/* Check indicator */}
              <div className={`absolute top-3.5 right-3.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-200 ${
                active
                  ? "bg-[#b8853a] border-[#b8853a] scale-100"
                  : "border-white/[0.12] bg-transparent scale-90 opacity-0 group-hover:opacity-60 group-hover:scale-100"
              }`}>
                {active && <Check size={10} strokeWidth={3} className="text-black" />}
              </div>

              <div className="flex items-start gap-3 pr-8">
                {/* Icon in rounded box */}
                <div className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  active
                    ? "bg-[#b8853a]/20 text-[#b8853a]"
                    : "bg-white/[0.05] text-white/25 group-hover:text-white/50 group-hover:bg-white/[0.08]"
                }`}>
                  {getIcon(s.name)}
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-[13px] font-bold leading-snug transition-colors ${
                    active ? "text-[#d4aa7a]" : "text-white/80 group-hover:text-white/95"
                  }`}>
                    {s.name}
                  </p>
                  {s.description && (
                    <p className="text-[10.5px] text-white/28 mt-1 leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  )}

                  {/* Price + duration row */}
                  <div className="flex items-center gap-2 mt-3">
                    {s.price != null && (
                      <span className={`text-[11px] font-black px-2 py-0.5 rounded-md transition-all duration-200 ${
                        active
                          ? "bg-[#b8853a]/20 text-[#b8853a]"
                          : "bg-white/[0.05] text-white/35 group-hover:text-white/55"
                      }`}>
                        R$ {s.price}
                      </span>
                    )}
                    {s.durationMinutes != null && (
                      <span className="flex items-center gap-1 text-[10px] text-white/20">
                        <Clock size={9} strokeWidth={2} />
                        {s.durationMinutes} min
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* CTA button */}
      <button
        disabled={!selectedService}
        onClick={() => selectedService && onNext(selectedService)}
        className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-200
          disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer
          bg-[#b8853a] text-[#070707] hover:bg-[#d4aa7a] active:scale-[0.98]"
      >
        {selectedService ? `Continuar — ${selectedService.name}` : "Selecione um serviço"}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
