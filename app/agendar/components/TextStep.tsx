"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

function applyPhoneMask(raw: string): string {
  const digits = raw.replace(/\D/g, "").substring(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

interface TextStepProps {
  label: string;
  sublabel?: string;
  placeholder: string;
  type?: string;
  defaultValue?: string;
  validate?: (v: string) => string | null;
  onNext: (value: string) => void;
}

export function TextStep({
  label,
  sublabel,
  placeholder,
  type = "text",
  defaultValue = "",
  validate,
  onNext,
}: TextStepProps) {
  const isPhone = type === "tel";
  const isEmail = type === "email";

  const [value, setValue] = useState(isPhone ? applyPhoneMask(defaultValue) : defaultValue);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(isPhone ? applyPhoneMask(defaultValue) : defaultValue);
  }, [defaultValue, isPhone]);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, []);

  const phoneDigits = isPhone ? value.replace(/\D/g, "").length : 0;

  // Limite de caracteres: Telefone = 15, Email = 80, Nome/Texto = 60
  const maxChars = isPhone ? 15 : isEmail ? 50 : 60;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setValue(isPhone ? applyPhoneMask(raw) : raw);
    setError(null);
  }

  function handleSubmit() {
    const trimmed = value.trim();
    const err = validate ? validate(trimmed) : null;
    if (err) { setError(err); return; }
    setError(null);
    onNext(trimmed);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="w-full flex flex-col gap-8">

      {/* Heading */}
      <div>
        {sublabel && (
          <p className="text-[#b8853a] text-[10px] font-black tracking-[0.2em] uppercase mb-3">
            {sublabel}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
          {label}
        </h2>
      </div>

      {/* Input area */}
      <div className="flex flex-col gap-2">
        <div className="relative group">
          <input
            ref={inputRef}
            type={isPhone ? "tel" : type}
            inputMode={isPhone ? "numeric" : isEmail ? "email" : "text"}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKey}
            placeholder={placeholder}
            autoComplete={isEmail ? "email" : isPhone ? "tel" : "name"}
            maxLength={maxChars}
            className={`
              w-full bg-[#0a0a0a] rounded-xl px-5 py-4 text-[#f5f1eb] text-base md:text-lg font-medium
              placeholder:text-white/20 outline-none transition-all duration-300
              /* Correção do Autofill do Navegador para não ficar branco */
              [&:-webkit-autofill]:[-webkit-text-fill-color:#f5f1eb]
              [&:-webkit-autofill]:[box-shadow:0_0_0px_1000px_#0a0a0a_inset]
              ${error
                ? "border border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                : "border border-white/10 hover:border-white/20 focus:border-[#b8853a] focus:shadow-[0_0_20px_rgba(184,133,58,0.15)]"
              }
            `}
          />
        </div>

        {/* Linha de Dicas e Contadores (Embaixo do Input) */}
        <div className="flex items-center justify-between px-1 mt-1">
          {/* Helper do telefone ou mensagem de erro */}
          <div className="flex-1">
            {error ? (
              <p className="text-red-400 text-[11px] font-bold tracking-wide">{error}</p>
            ) : isPhone ? (
              <span className="text-[10px] text-white/30 font-medium tracking-wide">
                Formato: (DDD) 9XXXX-XXXX
              </span>
            ) : (
              <span /> // Espaço vazio para manter o alinhamento
            )}
          </div>

          {/* Contador de caracteres dinâmico */}
          <div className="flex-shrink-0 text-right">
            {isPhone ? (
               <span className={`text-[10px] font-black tabular-nums transition-colors ${
                 phoneDigits >= 10 ? "text-[#b8853a]" : "text-white/20"
               }`}>
                 {phoneDigits}/11
               </span>
            ) : (
               <span className={`text-[10px] font-black tabular-nums transition-colors ${
                 value.length >= maxChars - 5 ? "text-[#b8853a]" : "text-white/20"
               }`}>
                 {value.length}/{maxChars}
               </span>
            )}
          </div>
        </div>
      </div>

      {/* CTA (Botão Continuar) */}
      <button
        onClick={handleSubmit}
        disabled={value.length === 0}
        className={`group w-full flex items-center justify-center gap-3 py-4 mt-2 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300
          ${value.length > 0 
            ? "bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.02] cursor-pointer" 
            : "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
          }
        `}
      >
        Continuar
        <ArrowRight size={14} className={`transition-transform duration-300 ${value.length > 0 ? "group-hover:translate-x-1" : ""}`} />
      </button>
      
    </div>
  );
}