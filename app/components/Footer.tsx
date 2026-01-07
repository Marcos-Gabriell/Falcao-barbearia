import { WHATSAPP_LINK } from "../utils/links";

const INSTAGRAM_LINK = "https://instagram.com/SEU_USUARIO_AQUI";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-zinc-300 pt-16 pb-8">

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-bold text-[#e4ddd2]">Falcão Barbearia</h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Corte, barba e experiência premium feita com precisão,
              estilo e dedicação.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#e4ddd2]">Contato</h4>

            <p className="mt-3 text-zinc-400">
              R. Olavo Bilac – Tapiramutá, BA<br />
              CEP 44840-027
            </p>

            <p className="mt-3 text-zinc-400">
              <span className="text-[#c59d6e] font-medium">Seg - Sex:</span> 09:00 às 19:00<br />
              <span className="text-[#c59d6e] font-medium">Sábado:</span> 08:00 às 20:00
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="
                mt-5 inline-flex items-center justify-center 
                rounded-full bg-[#c59d6e] px-5 py-2 text-sm font-semibold text-black
                shadow-[0_0_28px_rgba(197,157,110,0.6)] 
                hover:bg-[#d6b37f] transition
              "
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#e4ddd2]">Siga-nos</h4>

            <div className="flex gap-4 mt-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                className="
                  flex items-center justify-center h-10 w-10 rounded-full 
                  border border-[#c59d6e]/50 text-[#c59d6e] 
                  hover:bg-[#c59d6e]/20 transition
                "
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2A3 3 0 0 0 5 8v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5-3a1 1 0 1 1-.9.9 1 1 0 0 1 .9-.9Z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-zinc-800 pt-6 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Falcão Barbearia — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
