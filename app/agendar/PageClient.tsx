"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import Navbar from "../components/Header";
import Footer from "../components/Footer";

import { StepDots } from "./components/StepDots";
import { ServiceStep } from "./components/ServiceStep";
import { TextStep } from "./components/TextStep";
import { ProfessionalStep } from "./components/ProfessionalStep";
import { DateTimeStep } from "./components/DateTimeStep";
import { ConfirmStep } from "./components/ConfirmStep";

import {
  fetchServices,
  fetchProfessionals,
  loadSavedClient,
  type ServiceItem,
  type ProfessionalSimple,
} from "./api";

// 0: serviço | 1: nome | 2: email | 3: telefone | 4: profissional | 5: data/hora | 6: confirmar
const TOTAL_STEPS = 7;

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit:  (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.2 } }),
};

const validators = {
  name:  (v: string) => v.length < 3 ? "Nome muito curto." : null,
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "E-mail inválido.",
  phone: (v: string) => {
    const digits = v.replace(/\D/g, "");
    return digits.length < 10 ? "Telefone deve ter DDD + número (mín. 10 dígitos)." : null;
  },
};

function AgendarPageInner() {
  const searchParams = useSearchParams();
  const router       = useRouter();

  const preServiceId = searchParams.get("servico") ? Number(searchParams.get("servico")) : null;

  const [step,       setStep]       = useState(0);
  const [direction,  setDirection]  = useState(1);

  const [services,     setServices]     = useState<ServiceItem[]>([]);
  const [professionals,setProfessionals]= useState<ProfessionalSimple[]>([]);
  const [loadingPros,  setLoadingPros]  = useState(false);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [clientName,      setClientName]      = useState("");
  const [clientEmail,     setClientEmail]     = useState("");
  const [clientPhone,     setClientPhone]     = useState("");
  const [selectedPro,     setSelectedPro]     = useState<ProfessionalSimple | null>(null);
  const [startAt,         setStartAt]         = useState("");

  useEffect(() => {
    const saved = loadSavedClient();
    if (saved.name)  setClientName(saved.name);
    if (saved.email) setClientEmail(saved.email);
    if (saved.phone) setClientPhone(saved.phone);
    fetchServices().then(setServices).catch(() => {});
  }, []);

  useEffect(() => {
    if (!selectedService) return;
    setLoadingPros(true);
    setProfessionals([]);
    fetchProfessionals(selectedService.id)
      .then(setProfessionals)
      .catch(() => setProfessionals([]))
      .finally(() => setLoadingPros(false));
  }, [selectedService]);

  function goNext() { setDirection(1);  setStep(s => s + 1); }
  function goBack() {
    if (step === 0) { router.back(); return; }
    setDirection(-1); setStep(s => s - 1);
  }

  const handleService  = useCallback((s: ServiceItem)        => { setSelectedService(s); goNext(); }, []);
  const handleName     = useCallback((v: string)             => { setClientName(v);      goNext(); }, []);
  const handleEmail    = useCallback((v: string)             => { setClientEmail(v);     goNext(); }, []);
  const handlePhone    = useCallback((v: string)             => { setClientPhone(v);     goNext(); }, []);
  const handlePro      = useCallback((p: ProfessionalSimple) => { setSelectedPro(p);     goNext(); }, []);
  const handleDateTime = useCallback((dt: string)            => { setStartAt(dt);        goNext(); }, []);

  function renderStep() {
    switch (step) {
      case 0: return <ServiceStep services={services} preSelected={preServiceId} onNext={handleService} />;
      case 1: return <TextStep label="Qual é o seu nome?"    sublabel="Passo 2" placeholder="Ex: João Silva"       defaultValue={clientName}  validate={validators.name}  onNext={handleName}  />;
      case 2: return <TextStep label="Seu e-mail"            sublabel="Passo 3" placeholder="voce@email.com"       type="email" defaultValue={clientEmail} validate={validators.email} onNext={handleEmail} />;
      case 3: return <TextStep label="WhatsApp / Telefone"   sublabel="Passo 4" placeholder="(71) 99999-9999"      type="tel"   defaultValue={clientPhone} validate={validators.phone} onNext={handlePhone} />;
      case 4: return <ProfessionalStep professionals={professionals} loading={loadingPros} onNext={handlePro} />;
      case 5: return <DateTimeStep serviceId={selectedService!.id} professionalId={selectedPro!.id} onNext={handleDateTime} />;
      case 6: return <ConfirmStep clientName={clientName} clientEmail={clientEmail} clientPhone={clientPhone} service={selectedService!} professional={selectedPro!} startAt={startAt} />;
      default: return null;
    }
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#070707] flex flex-col antialiased select-none pt-24 pb-20 relative overflow-hidden">

        {/* Glow de fundo super suave */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(184,133,58,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center px-4 md:px-8 w-full">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 mb-8 text-center w-full max-w-3xl"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
              <span className="text-[#b8853a] font-bold text-[9px] tracking-[0.3em] uppercase">
                Reserva Online
              </span>
              <div className="h-[2px] w-8 bg-[#b8853a] rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-[#f5f1eb]">
              Agendar <span className="text-[#d4aa7a] italic">Horário.</span>
            </h1>
          </motion.div>

          {/* Card do fluxo de agendamento */}
          <div className="relative w-full max-w-2xl group mb-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b8853a]/0 via-[#b8853a]/10 to-[#b8853a]/0 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.5)] z-10">

              <div className="flex items-center justify-between mb-8 md:mb-10">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-white/40 hover:text-[#d4aa7a] transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  <ArrowLeft size={14} />
                  Voltar
                </button>

                {step < TOTAL_STEPS - 1 && (
                  <StepDots total={TOTAL_STEPS - 1} current={step} />
                )}
                {step === TOTAL_STEPS - 1 && <div />}
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#b8853a]/20 to-transparent mb-8 md:mb-10" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default function AgendarPage() {
  return (
    <Suspense>
      <AgendarPageInner />
    </Suspense>
  );
}