import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../utils/links";
import { faqs } from "../utils/faqs";

/* FAQ renderizado no servidor com <details>/<summary>:
   todas as respostas estão no HTML (o Google lê), abre/fecha sem JavaScript
   e funciona com teclado e leitor de tela. */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative w-full overflow-hidden border-t border-white/5 bg-[#070707] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="grain absolute inset-0 opacity-[0.02]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(184,133,58,0.1)_0%,transparent_70%)] blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 rounded-full bg-gradient-to-r from-transparent to-[#b8853a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#b8853a]">Sem enrolação</span>
            <div className="h-px w-8 rounded-full bg-gradient-to-l from-transparent to-[#b8853a]" />
          </div>
          <h2 id="faq-title" className="font-serif text-4xl font-black leading-none tracking-tight text-[#f5f1eb] sm:text-5xl lg:text-6xl">
            Tira-dúvidas<span className="font-normal italic text-[#b8853a]">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            As perguntas mais comuns antes de vir cortar.
          </p>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/[0.02] px-6 backdrop-blur-sm md:px-10">
          {faqs.map((faq) => (
            <details key={faq.pergunta} className="group border-b border-white/10 last:border-0">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="pr-2 text-[15px] font-semibold leading-snug tracking-wide text-[#f5f1eb]/90 transition-colors group-open:text-[#d4aa7a] group-hover:text-[#d4aa7a]">
                  {faq.pergunta}
                </h3>
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg font-light text-white/50 transition-all duration-300 group-open:rotate-45 group-open:border-[#d4aa7a]/60 group-open:bg-[#d4aa7a]/10 group-open:text-[#d4aa7a]"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-[15px] leading-relaxed text-white/60">{faq.resposta}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp"
            data-track-label="faq"
            className="inline-flex min-h-[48px] items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#b8853a] transition-colors hover:text-[#d4aa7a]"
          >
            <FaWhatsapp size={15} /> Outra dúvida? Chama no Whats
          </a>
        </div>
      </div>
    </section>
  );
}
