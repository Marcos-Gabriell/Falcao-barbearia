import { Quote, ArrowUpRight } from "lucide-react";
import { SITE, RATING } from "@/config/site";

/* Avaliações reais do Google (copiadas do perfil). Para adicionar, cole mais itens aqui. */
const REVIEWS = [
  {
    nome: "Jayllon Gabriel Oliveira",
    tempo: "2 meses atrás",
    texto: "Atendimento impecável e o ambiente é diferenciado. O Thaylle entende do assunto, saí com o corte exatamente como pedi. A melhor experiência de barbearia que já tive.",
    servico: "Corte & Barba",
  },
  {
    nome: "Keirisson Silva",
    tempo: "2 meses atrás",
    texto: "Corte de cabelo perfeito, recomendo demais. O melhor da região sem dúvidas. Profissionalismo puro.",
    servico: "Corte na Tesoura",
  },
  {
    nome: "Kauã Agiar",
    tempo: "10 meses atrás",
    texto: "Ótimo corte! A atenção aos detalhes no acabamento é o que faz a diferença.",
    servico: "Aparar a barba",
  },
];

/* Ícones definidos uma vez só (sprite) e reaproveitados com <use>:
   a faixa repete os cards, e cada cópia inline inchava o HTML. */
function Sprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <symbol id="ic-google" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </symbol>
        <symbol id="ic-5stars" viewBox="0 0 120 24">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              transform={`translate(${i * 24} 0)`}
              d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.3L12 17.8 5.8 21.5l1.6-7.3L2 9.5l7.1-.6z"
              fill="currentColor"
            />
          ))}
        </symbol>
      </defs>
    </svg>
  );
}

function GoogleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} aria-hidden>
      <use href="#ic-google" />
    </svg>
  );
}

function Estrelas({ size = 14 }: { size?: number }) {
  return (
    <svg width={size * 5} height={size} className="text-[#d4aa7a]" role="img" aria-label="5 de 5 estrelas">
      <use href="#ic-5stars" />
    </svg>
  );
}

function Card({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <figure className="flex h-full w-[82vw] max-w-[380px] shrink-0 flex-col rounded-3xl border border-white/[0.06] bg-[#0b0b0b]/95 p-7 sm:w-[380px]">
      <div className="mb-5 flex items-center justify-between">
        <Estrelas />
        <Quote size={22} className="text-[#b8853a]/30" aria-hidden />
      </div>
      <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-white/75">“{r.texto}”</blockquote>
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b8853a]/15 font-serif text-lg font-bold text-[#d4aa7a]" aria-hidden>
            {r.nome[0]}
          </span>
          <span>
            <span className="block text-sm font-bold text-[#f5f1eb]">{r.nome}</span>
            <span className="block text-[11px] text-white/55">{r.servico} · {r.tempo}</span>
          </span>
        </span>
        <GoogleIcon size={18} />
      </figcaption>
    </figure>
  );
}

/* Prova social logo depois do hero: nota do Google + faixa rolante de avaliações. */
export default function Avaliacoes() {
  // 4 cópias: a animação anda 50% (2 cópias), então o loop fecha sem emenda até em 1920px.
  // As cópias ficam escondidas do leitor de tela.
  const faixa = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="relative overflow-hidden border-y border-white/5 bg-[#050505]/85 py-20 md:py-28">
      <Sprite />
      <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-8 px-5 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-6 rounded-full bg-[#b8853a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b8853a]">Quem cortou, aprova</span>
          </div>
          <h2 id="avaliacoes-title" className="font-serif text-4xl font-black tracking-tight text-[#f5f1eb] md:text-6xl">
            A resenha <span className="italic text-[#d4aa7a]">no Google.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={SITE.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            data-track="google"
            data-track-label="avaliacoes-nota"
            className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#0b0b0b]/95 px-5 py-4 transition-colors hover:border-[#b8853a]/30"
          >
            <GoogleIcon size={28} />
            <span>
              <span className="flex items-center gap-2">
                <span className="font-serif text-4xl font-black leading-none text-[#f5f1eb]">{RATING}</span>
                <Estrelas size={15} />
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Ver no Google Maps</span>
            </span>
          </a>
          <a
            href={SITE.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            data-track="google-review"
            data-track-label="avaliacoes"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#b8853a]/40 px-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#d4aa7a] transition-colors hover:bg-[#b8853a] hover:text-[#070707]"
          >
            Avaliar <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      {/* Faixa rolante (pausa no hover/foco; parada com "reduzir movimento") */}
      <div
        className="marquee relative motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ ["--marquee-speed" as string]: "55s" }}
      >
        <ul className="marquee-track flex w-max gap-5 pr-5">
          {faixa.map((r, i) => (
            <li key={i} aria-hidden={i >= REVIEWS.length || undefined} className="flex">
              <Card r={r} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
