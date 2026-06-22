const API_BASE = "https://api.falcaobarbearia.com.br";

const TOKEN_KEY = "falcao_portal_token";

// ── Tipos ────────────────────────────────────────────────────────────────────
export interface PortalLoginRequestPayload {
  identifier: string;
  turnstileToken: string;
}

export interface PortalLoginVerifyPayload {
  identifier: string;
  code: string;
}

export interface PortalAppointment {
  id: number;
  code: string;
  serviceName: string;
  professionalName: string;
  startAt: string;
  endAt: string;
  status: "SCHEDULED" | "CONFIRMED" | "CANCELLED" | "NO_SHOW" | "COMPLETED" | string;
}

export interface PortalMe {
  name: string;
  email: string;
  phone: string;
}

// ── Token helpers ────────────────────────────────────────────────────────────
export function savePortalToken(token: string) {
  try { localStorage.setItem(TOKEN_KEY, token); } catch {}
}

export function getPortalToken(): string | null {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
}

export function clearPortalToken() {
  try { localStorage.removeItem(TOKEN_KEY); } catch {}
}

function authHeaders(): HeadersInit {
  const token = getPortalToken();
  return token ? { 'X-Portal-Token': token } : {};
}

// ── Login ────────────────────────────────────────────────────────────────────
export async function requestPortalLogin(payload: PortalLoginRequestPayload): Promise<void> {
  const res = await fetch(`${API_BASE}/public/portal/login/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any).message || "Erro ao solicitar código.");
  }
}

export async function verifyPortalLogin(payload: PortalLoginVerifyPayload): Promise<string> {
  const res = await fetch(`${API_BASE}/public/portal/login/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any).message || "Código inválido.");
  }
  const data = await res.json();
  const token = data?.data?.token;
  if (!token) throw new Error("Token não recebido.");
  savePortalToken(token);
  return token;
}

// ── Dados do cliente ─────────────────────────────────────────────────────────
export async function fetchPortalMe(): Promise<PortalMe> {
  const res = await fetch(`${API_BASE}/public/portal/me`, {
    headers: authHeaders(),
  });
  if (res.status === 401) { clearPortalToken(); throw new Error("SESSION_EXPIRED"); }
  if (!res.ok) throw new Error("Erro ao buscar dados.");
  return res.json();
}

export async function fetchPortalAppointments(): Promise<PortalAppointment[]> {
  const res = await fetch(`${API_BASE}/public/portal/appointments`, {
    headers: authHeaders(),
  });
  if (res.status === 401) { clearPortalToken(); throw new Error("SESSION_EXPIRED"); }
  if (!res.ok) throw new Error("Erro ao buscar agendamentos.");
  return res.json();
}