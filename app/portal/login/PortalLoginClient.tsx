"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Mail, Phone, KeyRound, Loader2 } from "lucide-react";

import Navbar from "../../components/Header";
import Footer from "../../components/Footer";
import { Turnstile } from "../../components/Turnstile";
import { requestPortalLogin, verifyPortalLogin } from "../api";

export default function PortalLoginClient() {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [identifier, setIdentifier] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  async function handleRequestCode() {
    if (identifier.trim().length < 5) {
      setError("Informe um e-mail ou telefone válido.");
      return;
    }
    if (!turnstileToken) {
      setError("Aguarde a verificação de segurança carregar e tente novamente.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await requestPortalLogin({ identifier: identifier.trim(), turnstileToken });
      setStep(2);
    } catch (e: any) {
      setError(e.message || "Erro ao solicitar código.");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyCode() {
    if (code.trim().length !== 4) {
      setError("Digite os 4 números do código.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await verifyPortalLogin({ identifier: identifier.trim(), code: code.trim() });
      router.push("/portal");
    } catch (e: any) {
      setError(e.message || "Código inválido ou expirado.");
    } finally {
      setLoading(false);
    }
  }

  function handleCodeChange(v: string) {
    setCode(v.replace(/\D/g, "").slice(0, 4));
    setError(null);
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,133,58,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Portal do Cliente
              </span>
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb]">
              {step === 1 ? "Entrar na " : "Confirme o "}
              <span className="text-[#d4aa7a] italic">{step === 1 ? "conta." : "código."}</span>
            </h1>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <label className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                      E-mail ou telefone
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={identifier}
                        onChange={(e) => { setIdentifier(e.target.value); setError(null); }}
                        onKeyDown={(e) => e.key === "Enter" && handleRequestCode()}
                        placeholder="voce@email.com ou (71) 99999-9999"
                        className="w-full bg-[#0a0a0a] rounded-xl px-5 py-4 pr-12 text-[#f5f1eb] text-base font-medium
                          placeholder:text-white/20 outline-none transition-all duration-300
                          border border-white/10 hover:border-white/20 focus:border-[#b8853a] focus:shadow-[0_0_20px_rgba(184,133,58,0.15)]"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                        {identifier.includes("@") ? <Mail size={18} /> : <Phone size={18} />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Turnstile
                      onVerify={setTurnstileToken}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => setTurnstileToken(null)}
                    />
                  </div>

                  {error && <p className="text-red-400 text-xs font-bold text-center">{error}</p>}

                  <button
                    onClick={handleRequestCode}
                    disabled={loading || !turnstileToken}
                    className={`group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300
                      ${loading || !turnstileToken
                        ? "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.02] cursor-pointer"
                      }`}
                  >
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : <>Receber código <ArrowRight size={14} /></>}
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  <p className="text-white/40 text-sm text-center">
                    Enviamos um código de 4 dígitos para o e-mail vinculado a <b className="text-white/70">{identifier}</b>
                  </p>

                  <div>
                    <label className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block text-center">
                      Código de 4 dígitos
                    </label>
                    <div className="relative max-w-[200px] mx-auto">
                      <input
                        type="tel"
                        inputMode="numeric"
                        value={code}
                        onChange={(e) => handleCodeChange(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleVerifyCode()}
                        placeholder="0000"
                        maxLength={4}
                        autoFocus
                        className="w-full bg-[#0a0a0a] rounded-xl px-5 py-4 text-[#f5f1eb] text-3xl font-black text-center tracking-[0.5em]
                          placeholder:text-white/10 outline-none transition-all duration-300
                          border border-white/10 hover:border-white/20 focus:border-[#b8853a] focus:shadow-[0_0_20px_rgba(184,133,58,0.15)]"
                      />
                    </div>
                  </div>

                  {error && <p className="text-red-400 text-xs font-bold text-center">{error}</p>}

                  <button
                    onClick={handleVerifyCode}
                    disabled={loading || code.length !== 4}
                    className={`group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300
                      ${loading || code.length !== 4
                        ? "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.02] cursor-pointer"
                      }`}
                  >
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Verificando...</> : <><KeyRound size={14} /> Entrar</>}
                  </button>

                  <button
                    onClick={() => { setStep(1); setCode(""); setError(null); }}
                    className="flex items-center justify-center gap-2 text-white/40 hover:text-[#d4aa7a] transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    <ArrowLeft size={14} /> Corrigir e-mail/telefone
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}