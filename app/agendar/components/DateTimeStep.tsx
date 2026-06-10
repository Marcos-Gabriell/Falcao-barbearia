"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { fetchSlots, type SlotResponse } from "../api";

const DAYS_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

function formatDateISO(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatTime(t: string) {
  return t.substring(0, 5);
}

interface DateTimeStepProps {
  serviceId: number;
  professionalId: number;
  onNext: (startAt: string) => void;
}

export function DateTimeStep({ serviceId, professionalId, onNext }: DateTimeStepProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewMonth, setViewMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slots, setSlots] = useState<SlotResponse[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SlotResponse | null>(null);

  useEffect(() => {
    if (!selectedDate) return;
    setSlots([]);
    setSelectedSlot(null);
    setSlotsError(null);
    setLoadingSlots(true);
    fetchSlots(serviceId, professionalId, formatDateISO(selectedDate))
      .then(setSlots)
      .catch(e => setSlotsError(e.message))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate, serviceId, professionalId]);

  const firstDayOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();

  // Células: nulls pro offset inicial + dias do mês
  const cells: (Date | null)[] = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) =>
      new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i + 1)
    ),
  ];
  // Preenche até múltiplo de 7
  while (cells.length % 7 !== 0) cells.push(null);

  function prevMonth() {
    const d = new Date(viewMonth);
    d.setMonth(d.getMonth() - 1);
    if (d >= new Date(today.getFullYear(), today.getMonth(), 1)) setViewMonth(d);
  }

  function nextMonth() {
    const d = new Date(viewMonth);
    d.setMonth(d.getMonth() + 1);
    setViewMonth(d);
  }

  function handleConfirm() {
    if (!selectedDate || !selectedSlot) return;
    onNext(`${formatDateISO(selectedDate)}T${selectedSlot.start.substring(0, 5)}:00`);
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <p className="text-white/40 text-[11px] font-bold tracking-[0.25em] uppercase mb-2">Passo 6</p>
        <h2 className="text-3xl md:text-4xl font-serif font-black text-[#f5f1eb] leading-tight">
          Quando você<br />quer vir?
        </h2>
      </div>

      {/* Calendário */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20 }}>
        
        {/* Nav mês */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <button
            onClick={prevMonth}
            style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)" }}
          >
            <ChevronLeft size={16} />
          </button>
          <span style={{ color: "#f5f1eb", fontSize: 14, fontWeight: 700, textTransform: "capitalize" }}>
            {MONTHS_PT[viewMonth.getMonth()]} {viewMonth.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)" }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Header dias da semana */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 8 }}>
          {DAYS_PT.map(d => (
            <div key={d} style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.25)", fontWeight: 700, paddingTop: 4, paddingBottom: 4 }}>
              {d}
            </div>
          ))}
        </div>

        {/* Grid dias */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px 0" }}>
          {cells.map((day, i) => {
            if (!day) return <div key={`e-${i}`} style={{ height: 36 }} />;

            const isPast = day < today;
            const isSelected = selectedDate?.toDateString() === day.toDateString();
            const isToday = day.toDateString() === today.toDateString();

            let bg = "transparent";
            let color = "rgba(255,255,255,0.5)";
            let border = "none";

            if (isSelected) { bg = "#b8853a"; color = "#000"; }
            else if (isToday) { color = "#b8853a"; border = "1px solid rgba(184,133,58,0.4)"; }
            else if (isPast) { color = "rgba(255,255,255,0.12)"; }

            return (
              <button
                key={day.toISOString()}
                onClick={() => !isPast && setSelectedDate(day)}
                disabled={isPast}
                style={{
                  width: 36,
                  height: 36,
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  background: bg,
                  color,
                  border,
                  cursor: isPast ? "not-allowed" : "pointer",
                  transition: "all 0.15s",
                }}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slots */}
      {selectedDate && (
        <div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
            Horários — {selectedDate.getDate()} de {MONTHS_PT[selectedDate.getMonth()]}
          </p>

          {loadingSlots && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} style={{ height: 40, borderRadius: 8, background: "rgba(255,255,255,0.03)", animation: "pulse 1.5s infinite" }} />
              ))}
            </div>
          )}

          {slotsError && <p style={{ color: "rgba(248,113,113,0.7)", fontSize: 12 }}>{slotsError}</p>}

          {!loadingSlots && !slotsError && slots.length === 0 && (
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Nenhum horário disponível. Escolha outra data.</p>
          )}

          {!loadingSlots && slots.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {slots.map((slot, i) => {
                const active = selectedSlot?.start === slot.start;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedSlot(slot)}
                    style={{
                      padding: "10px 0",
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 900,
                      border: active ? "1px solid #b8853a" : "1px solid rgba(255,255,255,0.07)",
                      background: active ? "#b8853a" : "rgba(255,255,255,0.02)",
                      color: active ? "#000" : "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {formatTime(slot.start)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <button
        disabled={!selectedDate || !selectedSlot}
        onClick={handleConfirm}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 28px",
          borderRadius: 12,
          fontWeight: 900,
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          background: !selectedDate || !selectedSlot ? "rgba(184,133,58,0.3)" : "#b8853a",
          color: !selectedDate || !selectedSlot ? "rgba(0,0,0,0.4)" : "#000",
          border: "none",
          cursor: !selectedDate || !selectedSlot ? "not-allowed" : "pointer",
          transition: "all 0.2s",
          alignSelf: "flex-start",
        }}
      >
        Confirmar horário
        <ArrowRight size={14} />
      </button>
    </div>
  );
}