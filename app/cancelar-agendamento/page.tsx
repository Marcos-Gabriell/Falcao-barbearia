"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Scissors, User, Calendar, Clock, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

import Navbar from "../components/Header";
import Footer from "../components/Footer";

const API_BASE = "https://api.falcaobarbearia.com.br";

const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

interface CancelInfo {
  clientName: string;
  serviceName: string;
  professionalName: string;
  startAt: string;
  code: string;
}

function formatDate(startAt: string) {
  const [datePart, timePart] = startAt.split("T");
  const [year, month, day] = datePart.split("-");
  const time = timePart?.substring(0, 5) ?? "";
  const monthName = MONTHS_PT[parseInt(month) - 1];
  return {
    full: `${parseInt(day)} de ${monthName} de ${year}`,
    time,
    day: datePart,
  };
}

type PageState = "loading" | "confirm" | "success" | "error";

export default function CancelarAgendamentoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] flex flex-col antialiased pt-32 pb-24">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#b8853a]/4 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed inset-0 pointer-events-none opacity-[0.025] z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <Suspense fallback={
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 size={32} className="text-[#b8853a] animate-spin" strokeWidth={1.5} />
                <p className="text-white/40 text-sm font-medium">Carregando informações...</p>
              </div>
            }>
              <CancelarAgendamentoContent />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CancelarAgendamentoContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, setState] = useState<PageState>("loading");
  const [info, setInfo] = useState<CancelInfo | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [canceling, setCanceling] = useState(false);

  // ── Busca info do agendamento ────────────────────────────────────────────
  useEffect(() => {
    if (!token) {
      setErrorMsg("Link inválido. Nenhum token encontrado.");
      setState("error");
      return;
    }

    fetch(`${API_BASE}/public/appointments/cancel-info?token=${encodeURIComponent(token)}`)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error((err as any).message || "Link inválido ou expirado.");
        }
        return res.json() as Promise<CancelInfo>;
      })
      .then((data) => {
        setInfo(data);
        setState("confirm");
      })
      .catch((e) => {
        setErrorMsg(e.message);
        setState("error");
      });
  }, [token]);

  // ── Confirma cancelamento ────────────────────────────────────────────────
  async function handleCancel() {
    if (!token) return;
    setCanceling(true);
    try {
      const res = await fetch(
        `${API_BASE}/public/appointments/cancel?token=${encodeURIComponent(token)}`,
        { method: "POST" }
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any).message || "Erro ao cancelar.");
      }
      setState("success");
    } catch (e: any) {
      setErrorMsg(e.message);
      setState("error");
    } finally {
      setCanceling(false);
    }
  }

  const formatted = info ? formatDate(info.startAt) : null;

  return (
    <>
      {/* ── LOADING ── */}
      {state === "loading" && (
              <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 size={32} className="text-[#b8853a] animate-spin" strokeWidth={1.5} />
                <p className="text-white/40 text-sm font-medium">Carregando informações...</p>
              </div>
            )}

            {/* ── CONFIRM ── */}
            {state === "confirm" && info && formatted && (
              <div className="flex flex-col gap-6">
                {/* Título */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-[2px] w-5 bg-[#b8853a] rounded-full" />
                    <span className="text-[#b8853a] font-bold text-[10px] tracking-[0.3em] uppercase">
                      Cancelamento
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
                    Cancelar<br />
                    <span className="italic text-[#d4aa7a] font-normal">agendamento?</span>
                  </h1>
                  <p className="text-white/40 text-sm mt-3 leading-relaxed">
                    Revise os detalhes abaixo antes de confirmar.
                  </p>
                </div>

                {/* Card de detalhes */}
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl">

                  {/* Cliente */}
                  <div className="px-5 py-4 border-b border-white/[0.04]">
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] mb-1">Cliente</p>
                    <p className="text-[#f5f1eb] text-base font-semibold">{info.clientName}</p>
                  </div>

                  {/* Rows */}
                  <div className="divide-y divide-white/[0.04]">
                    <DetailRow icon={<Scissors size={14} strokeWidth={1.5} />} label="Serviço" value={info.serviceName} />
                    <DetailRow icon={<User size={14} strokeWidth={1.5} />} label="Profissional" value={info.professionalName} />
                    <DetailRow icon={<Calendar size={14} strokeWidth={1.5} />} label="Data" value={formatted.full} />
                    <DetailRow icon={<Clock size={14} strokeWidth={1.5} />} label="Horário" value={formatted.time} accent />
                  </div>

                  {/* Código */}
                  {info.code && (
                    <div className="px-5 py-3 bg-white/[0.01] border-t border-white/[0.04]">
                      <p className="text-[10px] text-white/20 font-medium">
                        Código: <span className="text-[#b8853a]/60 font-mono">{info.code}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Aviso */}
                <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <AlertTriangle size={14} className="text-[#b8853a]/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    Esta ação não pode ser desfeita. O cancelamento é permitido até <strong className="text-white/60">10 minutos antes</strong> do horário agendado.
                  </p>
                </div>

                {/* Botões */}
                <div className="flex gap-3">
                  <a
                    href="/"
                    className="flex-1 py-3.5 rounded-xl border border-white/10 text-white/50 text-[11px] font-black uppercase tracking-widest text-center hover:border-white/20 hover:text-white/70 transition-all"
                  >
                    Voltar
                  </a>
                  <button
                    onClick={handleCancel}
                    disabled={canceling}
                    className="flex-1 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all
                      disabled:opacity-50
                      bg-red-600/80 text-white hover:bg-red-600 active:scale-[0.98] border border-red-500/30"
                  >
                    {canceling ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={13} className="animate-spin" />
                        Cancelando...
                      </span>
                    ) : "Confirmar Cancelamento"}
                  </button>
                </div>
              </div>
            )}

            {/* ── SUCCESS ── */}
            {state === "success" && (
              <div className="flex flex-col items-center gap-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(184,133,58,0.15)]">
                  <CheckCircle size={32} className="text-[#b8853a]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-black text-[#f5f1eb] mb-2">
                    Cancelado
                  </h2>
                  <p className="text-white/40 text-sm max-w-xs mx-auto leading-relaxed">
                    Seu agendamento foi cancelado com sucesso. Esperamos te ver em breve na Falcão Barbearia.
                  </p>
                </div>
                <a
                  href="/agendar"
                  className="px-8 py-3.5 rounded-xl bg-[#b8853a] text-black font-black text-[11px] uppercase tracking-widest hover:bg-[#d4aa7a] transition-all active:scale-[0.97] shadow-[0_8px_32px_rgba(184,133,58,0.25)]"
                >
                  Fazer Novo Agendamento
                </a>
                <a href="/" className="text-white/25 text-[11px] hover:text-white/50 transition-colors uppercase tracking-widest font-bold mt-2">
                  Voltar ao início
                </a>
              </div>
            )}

            {/* ── ERROR ── */}
            {state === "error" && (
              <div className="flex flex-col items-center gap-6 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                  <AlertTriangle size={28} className="text-white/30" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-black text-[#f5f1eb] mb-2">
                    Link inválido
                  </h2>
                  <p className="text-white/40 text-sm max-w-xs mx-auto leading-relaxed">
                    {errorMsg || "Este link de cancelamento é inválido ou já foi utilizado."}
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <a
                    href="/agendar"
                    className="w-full py-3.5 rounded-xl bg-[#b8853a] text-black font-black text-[11px] uppercase tracking-widest text-center hover:bg-[#d4aa7a] transition-all shadow-[0_8px_32px_rgba(184,133,58,0.25)]"
                  >
                    Fazer Novo Agendamento
                  </a>
                  <a
                    href="/"
                    className="w-full py-3 rounded-xl border border-white/10 text-white/40 text-[11px] font-bold uppercase tracking-widest text-center hover:border-white/20 hover:text-white/60 transition-all"
                  >
                    Voltar ao início
                  </a>
                </div>
              </div>
            )}

    </>
  );
}

// ── Componente auxiliar ────────────────────────────────────────────────────────
function DetailRow({
  icon, label, value, accent
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.01] transition-colors">
      <div className={`shrink-0 ${accent ? "text-[#b8853a]" : "text-white/25"}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] text-white/25 font-bold uppercase tracking-[0.2em] mb-0.5">{label}</p>
        <p className={`text-sm font-semibold truncate ${accent ? "text-[#d4aa7a] text-base" : "text-white/80"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}