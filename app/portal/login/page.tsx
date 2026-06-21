import type { Metadata } from "next";
import PortalLoginClient from "./PortalLoginClient";

export const metadata: Metadata = {
  title: "Entrar | Portal do Cliente — Falcão Barbearia",
  description: "Acesse seu histórico de agendamentos e seus dados na Falcão Barbearia.",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return <PortalLoginClient />;
}