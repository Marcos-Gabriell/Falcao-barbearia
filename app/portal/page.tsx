import type { Metadata } from "next";
import PortalDashboardClient from "./PortalDashboardClient";

export const metadata: Metadata = {
  title: "Minha Conta | Portal do Cliente — Falcão Barbearia",
  description: "Histórico de agendamentos e dados pessoais.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return <PortalDashboardClient />;
}