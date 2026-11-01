"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/config/site";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_NAMES_PT = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

/** Calcula se está aberto agora no fuso da Bahia (não depende do fuso do visitante). */
function getStatus() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bahia",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const now = hour * 60 + minute;

  const today = SITE.hours.find((h) => (h.days as readonly string[]).includes(weekday));
  if (today) {
    const [oh, om] = today.opens.split(":").map(Number);
    const [ch, cm] = today.closes.split(":").map(Number);
    if (now >= oh * 60 + om && now < ch * 60 + cm) {
      return { open: true, text: `Aberto agora · até ${today.closes.replace(":00", "h")}` };
    }
  }

  // Próxima abertura
  const idx = DAY_NAMES.indexOf(weekday);
  for (let i = 0; i < 7; i++) {
    const day = DAY_NAMES[(idx + i) % 7];
    const slot = SITE.hours.find((h) => (h.days as readonly string[]).includes(day));
    if (!slot) continue;
    const [oh] = slot.opens.split(":").map(Number);
    if (i === 0 && now >= oh * 60) continue;
    const when = i === 0 ? "hoje" : i === 1 ? "amanhã" : DAY_NAMES_PT[(idx + i) % 7];
    return { open: false, text: `Fechado · abre ${when} às ${oh}h` };
  }
  return { open: false, text: "Fechado agora" };
}

export default function OpenNow({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    // Só no navegador (o horário do servidor não serve pro visitante)
    const tick = () => setStatus(getStatus());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md ${
        status?.open
          ? "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-300/90"
          : "border-white/10 bg-white/[0.04] text-white/60"
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {status?.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${status?.open ? "bg-emerald-400" : "bg-white/40"}`} />
      </span>
      {status?.text ?? "Sem agendamento · por ordem de chegada"}
    </span>
  );
}
