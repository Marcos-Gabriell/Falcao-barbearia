const API_BASE = "https://api.falcaobarbearia.com.br";

export interface ServiceItem {
  id: number;
  name: string;
  description?: string;
  durationMinutes?: number;
  price?: number;
}

export interface ProfessionalSimple {
  id: number;
  name: string;
  photoUrl?: string;
}

export interface SlotResponse {
  date: string;      // "2024-06-10"
  start: string;     // "09:00:00"
  end: string;       // "09:30:00"
}

export interface CreateAppointmentPayload {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: number;
  professionalUserId: number;
  startAt: string; // "2024-06-10T09:00:00"
}

export interface CreateAppointmentMultiPayload {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceIds: number[];
  professionalUserId: number;
  startAt: string;
}

export interface AppointmentCreated {
  id: number;
  code: string;
  startAt: string;
}

// ── Fetch catalog (public) ──────────────────────────────────────────────────
export async function fetchServices(): Promise<ServiceItem[]> {
  const res = await fetch(`${API_BASE}/public/catalog/services`);
  if (!res.ok) throw new Error("Erro ao buscar serviços.");
  return res.json();
}

// ── Fetch professionals by service (single) ─────────────────────────────────
export async function fetchProfessionals(serviceId: number): Promise<ProfessionalSimple[]> {
  const res = await fetch(`${API_BASE}/public/appointments/services/${serviceId}/professionals`);
  if (!res.ok) throw new Error("Erro ao buscar profissionais.");
  return res.json();
}

// ── Fetch professionals que atendem TODOS os serviços (multi) ───────────────
export async function fetchProfessionalsMulti(serviceIds: number[]): Promise<ProfessionalSimple[]> {
  const params = new URLSearchParams();
  serviceIds.forEach(id => params.append("serviceIds", String(id)));
  const res = await fetch(`${API_BASE}/public/appointments/services/professionals?${params.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar profissionais.");
  return res.json();
}

// ── Fetch available slots (single service) ──────────────────────────────────
export async function fetchSlots(
  serviceId: number,
  professionalId: number,
  date: string
): Promise<SlotResponse[]> {
  const url = `${API_BASE}/public/appointments/slots?serviceId=${serviceId}&professionalId=${professionalId}&date=${date}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar horários.");
  return res.json();
}

// ── Fetch available slots (multi service — duração combinada) ───────────────
export async function fetchSlotsMulti(
  serviceIds: number[],
  professionalId: number,
  date: string
): Promise<SlotResponse[]> {
  const params = new URLSearchParams();
  serviceIds.forEach(id => params.append("serviceIds", String(id)));
  params.append("professionalId", String(professionalId));
  params.append("date", date);
  const res = await fetch(`${API_BASE}/public/appointments/slots/multi?${params.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar horários.");
  return res.json();
}

// ── Create appointment (single service) ──────────────────────────────────────
export async function createAppointment(payload: CreateAppointmentPayload): Promise<AppointmentCreated> {
  const res = await fetch(`${API_BASE}/public/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any).message || "Erro ao agendar.");
  }
  return res.json();
}

// ── Create appointment (multi service — corte + barba, etc) ─────────────────
// FIX: backend agora cria UM ÚNICO agendamento com os serviços extras vinculados.
// O retorno é um objeto, não mais um array.
export interface AppointmentCreatedMultiItem {
  id: number;
  code: string;
  serviceName: string;
  professionalName: string;
  startAt: string;
  endAt: string;
}

export async function createAppointmentMulti(
  payload: CreateAppointmentMultiPayload
): Promise<AppointmentCreatedMultiItem> {
  const res = await fetch(`${API_BASE}/public/appointments/multi`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any).message || "Erro ao agendar.");
  }
  return res.json();
}

// ── localStorage helpers ────────────────────────────────────────────────────
const LS_KEY = "falcao_client";

export interface SavedClient {
  name: string;
  email: string;
  phone: string;
}

export function loadSavedClient(): Partial<SavedClient> {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveClient(client: SavedClient) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(client));
  } catch {}
}