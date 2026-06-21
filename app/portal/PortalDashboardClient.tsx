"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar, Clock, Scissors, User, Mail, Phone,
  LogOut, RotateCcw, CheckCircle2, XCircle, AlertCircle, PlusCircle,
} from "lucide-react";

import Navbar from "../components/Header";
import Footer from "../components/Footer";
import {
  fetchPortalMe, fetchPortalAppointments, clearPortalToken, getPortalToken,
  type PortalAppointment, type PortalMe,
} from "./api";

const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function formatDisplay(startAt: string) {
  const [datePart, timePart] = startAt.split("T");
  const [year, month, day] = datePart.split("-");
  return {
    date: `${parseInt(day)} ${MONTHS_PT[parseInt(month) - 1]} ${year}`,
    time: timePart?.substring(0, 5) ?? "",
  };
}

function statusInfo(status: string) {
  switch (status) {
    case "CONFIRMED":
      return { label: "Confirmado", color: "#4ade80", icon: <CheckCircle2 size={14} /> };
    case "CANCELLED":
      return { label: "Cancelado", color: "#f87171", icon: <XCircle size={14} /> };
    case "NO_SHOW":
      return { label: "Não compareceu", color: "#f87171", icon: <XCircle size={14} /> };
    case "COMPLETED":
      return { label: "Concluído", color: "#8a8a8a", icon: <CheckCircle2 size={14} /> };
    default:
      return { label: "Agendado", color: "#b8853a", icon: <AlertCircle size={14} /> };
  }
}

export default function PortalDashboardClient() {
  const router = useRouter();

  const [me, setMe] = useState<PortalMe | null>(null);
  const [appointments, setAppointments] = useState<PortalAppointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!getPortalToken()) {
      router.push("/portal/login");
      return;
    }

    Promise.all([fetchPortalMe(), fetchPortalAppointments()])
      .then(([meData, appts]) => {
        setMe(meData);
        setAppointments(appts);
      })
      .catch((e) => {
        if (e.message === "SESSION_EXPIRED") {
          router.push("/portal/login");
          return;
        }
        setError(e.message || "Erro ao carregar seus dados.");
      })
      .finally(() => setLoading(false));
  }, [router]);

  function handleLogout() {
    clearPortalToken();
    router.push("/portal/login");
  }

  function handleRebook(appt: PortalAppointment) {
    // TODO: quando o backend retornar serviceId/professionalId no histórico,
    // passar como query params pra pular direto pro DateTimeStep.
    router.push(`/agendar`);
  }

  const now = new Date();
  const upcoming = appointments
    .filter(a => new Date(a.startAt) >= now && a.status !== "CANCELLED" && a.status !== "NO_SHOW")
    .sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime())[0];

  const history = appointments
    .filter(a => a.id !== upcoming?.id)
    .sort((a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime());

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] min-h-screen flex flex-col items-center px-4 md:px-8 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,133,58,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-2xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[2px] w-6 bg-[#b8853a] rounded-full" />
                <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                  Portal do Cliente
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb]">
                Olá, <span className="text-[#d4aa7a] italic">{me?.name?.split(" ")[0] || "..."}</span>
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-white/40 hover:text-red-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <LogOut size={14} /> Sair
            </button>
          </motion.div>

          {loading && (
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 rounded-2xl bg-white/[0.03] border border-white/[0.06] animate-pulse" />
              ))}
            </div>
          )}

          {error && (
            <div className="px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <p className="text-red-400 text-xs font-bold">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="flex flex-col gap-8">

              {/* CTA Novo Agendamento */}
              <a
                href="/agendar"
                className="group flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300
                  bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-[#070707] shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.01]"
              >
                <PlusCircle size={16} /> Novo Agendamento
              </a>

              {/* Próximo agendamento */}
              {upcoming && (
                <div>
                  <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    Próximo Agendamento
                  </p>
                  <div className="rounded-2xl border border-[#b8853a]/30 bg-gradient-to-br from-[#b8853a]/[0.08] to-transparent p-6 shadow-[0_0_30px_rgba(184,133,58,0.08)]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[#f5f1eb] text-lg font-black mb-1">{upcoming.serviceName}</p>
                        <p className="text-white/40 text-sm flex items-center gap-1.5">
                          <User size={13} /> {upcoming.professionalName}
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                        style={{ color: statusInfo(upcoming.status).color, background: `${statusInfo(upcoming.status).color}1a` }}
                      >
                        {statusInfo(upcoming.status).icon} {statusInfo(upcoming.status).label}
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-white/60 text-sm mb-5">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#b8853a]" /> {formatDisplay(upcoming.startAt).date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#b8853a]" /> {formatDisplay(upcoming.startAt).time}</span>
                    </div>
                    <button
                      onClick={() => handleRebook(upcoming)}
                      className="flex items-center gap-2 text-[#d4aa7a] hover:text-[#f5f1eb] transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                      <RotateCcw size={13} /> Reagendar
                    </button>
                  </div>
                </div>
              )}

              {/* Meus dados */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-lg">
                <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-[#111111]">
                  <div className="p-1.5 rounded-md bg-[#b8853a]/10 text-[#d4aa7a]">
                    <User size={14} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                    Meus Dados
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <User size={14} className="text-[#b8853a]/60" />
                    <span className="text-[#f5f1eb] text-sm font-medium">{me?.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-[#b8853a]/60" />
                    <span className="text-white/60 text-sm">{me?.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-[#b8853a]/60" />
                    <span className="text-white/60 text-sm">{me?.phone}</span>
                  </div>
                </div>
              </div>

              {/* Histórico */}
              <div>
                <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                  Histórico
                </p>
                {history.length === 0 ? (
                  <p className="text-white/30 text-sm">Nenhum agendamento anterior ainda.</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {history.map(appt => {
                      const s = statusInfo(appt.status);
                      const { date, time } = formatDisplay(appt.startAt);
                      return (
                        <div
                          key={appt.id}
                          className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="p-2 rounded-lg bg-white/[0.04] text-white/40 shrink-0">
                              <Scissors size={14} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[#f5f1eb] text-sm font-bold truncate">{appt.serviceName}</p>
                              <p className="text-white/30 text-xs">{date} · {time} · {appt.professionalName}</p>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0"
                            style={{ color: s.color, background: `${s.color}1a` }}
                          >
                            {s.icon} {s.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}