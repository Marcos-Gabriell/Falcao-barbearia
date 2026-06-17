"use client";

import { useState } from "react";
import {
  CheckCircle, Loader2, Scissors, User, Calendar, Clock,
  Mail, Phone, BookCheck, Check
} from "lucide-react";
import {
  createAppointment, createAppointmentMulti, saveClient, loadSavedClient,
  type ServiceItem, type ProfessionalSimple, type AppointmentCreatedMultiItem,
} from "../api";

const MONTHS_PT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function formatDisplay(startAt: string) {
  const [datePart, timePart] = startAt.split("T");
  const [year, month, day] = datePart.split("-");
  return {
    date: `${parseInt(day)} de ${MONTHS_PT[parseInt(month) - 1]}, ${year}`,
    time: timePart.substring(0, 5),
  };
}

interface ConfirmStepProps {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  /** Agora sempre uma lista — 1 ou mais serviços */
  services: ServiceItem[];
  professional: ProfessionalSimple;
  startAt: string;
}

export function ConfirmStep({
  clientName,
  clientEmail,
  clientPhone,
  services,
  professional,
  startAt,
}: ConfirmStepProps) {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);
  const [codes,   setCodes]   = useState<string[] | null>(null);

  const [saveData, setSaveData] = useState(() => {
    const saved = loadSavedClient();
    return !!(saved.name || saved.email || saved.phone);
  });

  const { date, time } = formatDisplay(startAt);
  const isMulti = services.length > 1;
  const totalPrice = services.reduce((sum, s) => sum + (s.price ?? 0), 0);
  const totalDuration = services.reduce((sum, s) => sum + (s.durationMinutes ?? 0), 0);
  const serviceNames = services.map(s => s.name).join(" + ");

  async function handleConfirm() {
    setLoading(true);
    setError(null);
    try {
      if (isMulti) {
        // Backend cria UM ÚNICO agendamento com os serviços extras vinculados
        const result = await createAppointmentMulti({
          clientName,
          clientEmail,
          clientPhone,
          serviceIds: services.map(s => s.id),
          professionalUserId: professional.id,
          startAt,
        });
        if (saveData) saveClient({ name: clientName, email: clientEmail, phone: clientPhone });
        setCodes([result.code]);
      } else {
        const result = await createAppointment({
          clientName,
          clientEmail,
          clientPhone,
          serviceId: services[0].id,
          professionalUserId: professional.id,
          startAt,
        });
        if (saveData) saveClient({ name: clientName, email: clientEmail, phone: clientPhone });
        setCodes([result.code ?? String(result.id)]);
      }
    } catch (e: any) {
      setError(e.message || "Erro ao agendar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  /* ── TELA DE SUCESSO ─────────────────────────────────────────────────────── */
  if (codes) {
    return (
      <div className="w-full flex flex-col items-center gap-8 py-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#b8853a]/10 border border-[#b8853a]/30 flex items-center justify-center shadow-[0_0_30px_rgba(184,133,58,0.2)]">
          <CheckCircle size={40} className="text-[#b8853a]" strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-black text-[#f5f1eb] mb-3">
            Agendado!
          </h2>
          <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
            {isMulti
              ? "Confirmação dos seus serviços enviada para o seu e-mail. Use o link recebido para cancelar caso precise."
              : "Confirmação enviada para o seu e-mail. Use o link recebido para cancelar caso precise."}
          </p>
        </div>

        <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 w-full max-w-md text-left space-y-4 shadow-lg">
          <SuccessRow icon={<Scissors size={16} />} label={serviceNames} />
          <SuccessRow icon={<User     size={16} />} label={professional.name} />
          <SuccessRow icon={<Calendar size={16} />} label={date} />
          <SuccessRow icon={<Clock    size={16} />} label={time} />
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
            {codes.length > 1 ? "Seus Códigos" : "Seu Código"}
          </span>
          <div className="flex flex-wrap gap-2 justify-center">
            {codes.map(code => (
              <span
                key={code}
                className="text-[#d4aa7a] text-xl font-black font-mono bg-[#b8853a]/10 px-5 py-2 rounded-lg border border-[#b8853a]/20"
              >
                {code}
              </span>
            ))}
          </div>
        </div>

        <a
          href="/"
          className="mt-4 px-10 py-4 rounded-xl border border-white/10 text-white/60 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all"
        >
          Voltar ao início
        </a>
      </div>
    );
  }

  /* ── TELA DE CONFIRMAÇÃO (REVISÃO) ──────────────────────────────────────── */
  return (
    <div className="w-full flex flex-col gap-6">

      {/* Header */}
      <div className="mb-2">
        <p className="text-[#b8853a] text-[10px] font-black tracking-[0.2em] uppercase mb-3">
          Passo 6 de 6
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
          Tudo certo?
        </h2>
      </div>

      {/* Card — Agendamento */}
      <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-lg">
        <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-[#111111]">
          <div className="p-1.5 rounded-md bg-[#b8853a]/10 text-[#d4aa7a]">
            <BookCheck size={14} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            Resumo do Agendamento
          </span>
        </div>
        <div className="p-5 space-y-5">
          {isMulti ? (
            <>
              {services.map((s, i) => (
                <ReviewRow
                  key={s.id}
                  icon={<Scissors size={14} />}
                  label={`Serviço ${i + 1}`}
                  value={s.name}
                  badge={s.price != null ? `R$ ${s.price}` : undefined}
                />
              ))}
              <div className="h-px bg-white/10" />
              <ReviewRow
                icon={<Clock size={14} />}
                label="Duração total"
                value={`${totalDuration} min`}
                badge={`R$ ${totalPrice}`}
              />
            </>
          ) : (
            <ReviewRow
              icon={<Scissors size={14} />}
              label="Serviço"
              value={services[0].name}
              badge={services[0].price != null ? `R$ ${services[0].price}` : undefined}
            />
          )}
          <ReviewRow icon={<User     size={14} />} label="Profissional" value={professional.name} />
          <ReviewRow icon={<Calendar size={14} />} label="Data"         value={date} />
          <ReviewRow icon={<Clock    size={14} />} label="Horário"      value={time} />
        </div>
      </div>

      {/* Card — Dados pessoais */}
      <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden shadow-lg">
        <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-[#111111]">
          <div className="p-1.5 rounded-md bg-[#b8853a]/10 text-[#d4aa7a]">
            <User size={14} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            Seus Dados
          </span>
        </div>
        <div className="p-5 space-y-5">
          <ReviewRow icon={<User  size={14} />} label="Nome"     value={clientName}  muted />
          <ReviewRow icon={<Mail  size={14} />} label="E-mail"   value={clientEmail} muted />
          <ReviewRow icon={<Phone size={14} />} label="Telefone" value={clientPhone} muted />
        </div>
      </div>

      {/* Checkbox — Salvar dados */}
      <div
        onClick={() => setSaveData(v => !v)}
        className="flex items-center gap-4 group cursor-pointer py-2 w-full select-none outline-none"
      >
        <div className={`w-5 h-5 min-w-[20px] min-h-[20px] rounded flex items-center justify-center border transition-all duration-300 shrink-0
          ${saveData
            ? "bg-[#b8853a] border-[#b8853a] text-black"
            : "bg-transparent border-white/30 group-hover:border-[#b8853a]"
          }
        `}>
          {saveData && <Check size={14} strokeWidth={3} />}
        </div>
        <span className={`text-sm font-medium transition-colors ${saveData ? "text-[#f5f1eb]" : "text-white/60 group-hover:text-white/90"}`}>
          Salvar meus dados para as próximas visitas
        </span>
      </div>

      {error && (
        <div className="px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <p className="text-red-400 text-xs font-bold tracking-wide">{error}</p>
        </div>
      )}

      <div className="mt-4">
        <button
          onClick={handleConfirm}
          disabled={loading}
          className={`group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300 outline-none
            ${loading
              ? "opacity-70 bg-[#b8853a] text-black cursor-not-allowed"
              : "bg-gradient-to-r from-[#b8853a] to-[#8f6425] text-black shadow-[0_8px_32px_rgba(184,133,58,0.25)] hover:scale-[1.02] cursor-pointer"
            }
          `}
        >
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Processando...</>
          ) : (
            "Confirmar Agendamento"
          )}
        </button>
      </div>

    </div>
  );
}

/* ── Sub-componentes ─────────────────────────────────────────────────────── */

function ReviewRow({
  icon,
  label,
  value,
  badge,
  muted,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  badge?: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[#b8853a]/60">{icon}</span>
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{label}</span>
      </div>

      <div className="flex items-center gap-3 overflow-hidden text-right">
        <span
          title={value}
          className={`text-[14px] font-bold truncate ${muted ? "text-white/60" : "text-[#f5f1eb]"}`}
        >
          {value}
        </span>
        {badge && (
          <span className="text-[10px] font-black text-black bg-[#d4aa7a] px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function SuccessRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-4 text-white/80 text-[15px] font-medium border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <div className="p-2 rounded-lg bg-[#b8853a]/10 text-[#d4aa7a]">
        {icon}
      </div>
      <span className="truncate">{label}</span>
    </div>
  );
}