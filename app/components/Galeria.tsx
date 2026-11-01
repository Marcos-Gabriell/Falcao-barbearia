"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Scissors, Star, Calendar } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/config/site";
import { INSTAGRAM_URL, WHATSAPP_LINK } from "../utils/links";
import LazyVideo from "./LazyVideo";
import Contador from "./Contador";
import AntesDepois from "./AntesDepois";
import Tilt3D from "./Tilt3D";

type Item =
  | { type: "photo"; src: string; title: string; desc: string }
  | { type: "video"; n: number; title: string; desc: string };

/* Só trabalhos reais da Falcão (fotos e vídeos de /public/cortes). */
const ITEMS: Item[] = [
  { type: "video", n: 1, title: "Platinado de Respeito", desc: "Descoloração sem agredir o fio." },
  { type: "photo", src: "/cortes/corte12.jpeg", title: "Corte Social", desc: "Clássico com acabamento na tesoura." },
  { type: "photo", src: "/cortes/Barba.png", title: "Barba Terapia", desc: "Alinhamento, simetria e hidratação." },
  { type: "video", n: 5, title: "Degradê Navalhado", desc: "Transição limpa e perfilamento." },
  { type: "photo", src: "/cortes/corte1.jpg", title: "Estilo Desde Cedo", desc: "Corte infantil com paciência." },
  { type: "video", n: 2, title: "Nevou Falcão", desc: "O platinado que chama atenção." },
  { type: "photo", src: "/cortes/corte2.jpg", title: "Low Fade", desc: "Sombra bem marcada e aresta preservada." },
  { type: "photo", src: "/cortes/corte15.jpeg", title: "Fade com Textura", desc: "Volume no topo, lateral limpa." },
  { type: "video", n: 8, title: "Freestyle", desc: "Arte e precisão no acabamento." },
  { type: "photo", src: "/cortes/corte6.jpg", title: "Mid Fade", desc: "Equilíbrio entre claro e escuro." },
  { type: "video", n: 3, title: "Transformação", desc: "A mudança que eleva a autoestima." },
  { type: "photo", src: "/cortes/corte4.jpg", title: "Buzz Cut", desc: "Praticidade com fade milimétrico." },
  { type: "photo", src: "/cortes/corte11.jpeg", title: "Fade Texturizado", desc: "Caimento com finalização profissional." },
  { type: "video", n: 4, title: "Toque Final", desc: "O detalhe na tesoura." },
  { type: "photo", src: "/cortes/corte13.jpeg", title: "Alinhamento Total", desc: "Perfilamento cirúrgico." },
  { type: "video", n: 6, title: "Padrão Falcão", desc: "Qualidade em cada atendimento." },
  { type: "photo", src: "/cortes/corte14.jpeg", title: "Corte Jovem", desc: "Estilo urbano e despojado." },
  { type: "video", n: 7, title: "Fade Simétrico", desc: "Sombra sem marcações visíveis." },
  { type: "photo", src: "/cortes/corte3.png", title: "Acabamento", desc: "A precisão que você exige." },
  { type: "photo", src: "/cortes/corte5.png", title: "High Fade", desc: "Laterais limpas, destaque no topo." },
  { type: "photo", src: "/cortes/corte7.jpg", title: "Fade em V", desc: "Marcante e moderno." },
  { type: "photo", src: "/cortes/corte8.png", title: "Corte Urbano", desc: "A tendência das ruas." },
  { type: "photo", src: "/cortes/corte9.png", title: "Skin Fade", desc: "Do zero à transição mais suave." },
  { type: "photo", src: "/cortes/corte10.jpeg", title: "Na Régua", desc: "Perfilamento frontal simétrico." },
  { type: "photo", src: "/cortes/corte16.jpeg", title: "Social Moderno", desc: "O clássico com técnica de fade." },
];

const INICIAIS = 10;

const alt = (item: Item) => `${item.title}: ${item.desc} Trabalho da Falcão Barbearia em ${SITE.city}-BA.`;
const video = (n: number) => ({
  webm: `/generated/loops/vid${n}.webm`,
  mp4: `/cortes/vid${n}.mp4`,
  poster: `/generated/posters/vid${n}.webp`,
});

/* Grade assimétrica no desktop; no celular vira carrossel com swipe nativo. */
const desktopSpan = (i: number) =>
  [
    "lg:col-span-8 lg:row-span-2",
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-4",
    "lg:col-span-6",
    "lg:col-span-6",
  ][i] ?? "lg:col-span-3";

export default function Galeria() {
  const [verTodos, setVerTodos] = useState(false);
  const [aberto, setAberto] = useState<number | null>(null);
  const lista = verTodos ? ITEMS : ITEMS.slice(0, INICIAIS);

  const fechar = useCallback(() => setAberto(null), []);
  const mover = useCallback(
    (d: number) => setAberto((i) => (i === null ? i : (i + d + lista.length) % lista.length)),
    [lista.length]
  );

  useEffect(() => {
    if (aberto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, fechar, mover]);

  const atual = aberto !== null ? lista[aberto] : null;

  return (
    <section id="cortes" aria-labelledby="galeria-title" className="relative w-full overflow-hidden bg-[#050505] pt-24 lg:pt-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.02]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#b8853a]/5 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#b8853a] to-transparent" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.4em] text-[#b8853a]">Portfólio</span>
            </div>
            <h2 id="galeria-title" className="font-serif text-5xl leading-[0.95] tracking-tight text-[#f5f1eb] md:text-7xl lg:text-8xl">
              Nossos <span className="italic font-normal text-[#b8853a]">trabalhos.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-white/50 lg:text-right">
            Degradê, social, platinado, barba e freestyle — tudo feito aqui na cadeira da Falcão, em {SITE.city}.
          </p>
        </div>

        {/* Números */}
        <dl className="mb-14 grid grid-cols-2 gap-6 border-y border-white/5 bg-white/[0.01] py-10 md:grid-cols-4">
          {[
            { icon: <Scissors size={18} />, label: "Cortes realizados", value: <Contador to={SITE.cortesRealizados} prefix="+" /> },
            { icon: <Star size={18} />, label: "Nota no Google", value: <Contador to={SITE.rating.value} decimals={1} /> },
            { icon: <Maximize2 size={18} />, label: "Atenção aos detalhes", value: <Contador to={100} suffix="%" /> },
            { icon: <Calendar size={18} />, label: "No Centro de Tapiramutá", value: <>desde {SITE.foundingYear}</> },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-[#b8853a]" aria-hidden>{s.icon}</span>
              <dd className="font-serif text-3xl font-black text-white md:text-4xl">{s.value}</dd>
              <dt className="text-[10px] font-semibold uppercase tracking-widest text-white/45">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Um só DOM: carrossel (celular) → grade (desktop) */}
      <ul
        className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-6 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:auto-rows-[300px] lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-6"
        aria-label="Galeria de cortes"
      >
        {lista.map((item, i) => (
          <li key={i} className={`w-[78vw] shrink-0 snap-center sm:w-[46vw] lg:w-auto ${desktopSpan(i)}`}>
            <Tilt3D max={4} className="group h-[60vh] max-h-[520px] overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] lg:h-full lg:max-h-none">
              <button
                type="button"
                onClick={() => setAberto(i)}
                className="relative block h-full w-full cursor-zoom-in text-left"
                aria-label={`Ampliar: ${item.title}`}
              >
                <span className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.06]">
                  {item.type === "video" ? (
                    <LazyVideo {...video(item.n)} label={alt(item)} className="h-full w-full object-cover" />
                  ) : (
                    <Image
                      src={item.src}
                      alt={alt(item)}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 78vw"
                      className="object-cover"
                    />
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                {item.type === "video" && (
                  <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
                    <Play size={10} className="text-[#b8853a]" fill="#b8853a" /> Vídeo
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-1 block font-serif text-xl text-[#f5f1eb] drop-shadow-lg sm:text-2xl">{item.title}</span>
                  <span className="block text-sm font-light text-white/60">{item.desc}</span>
                </span>
              </button>
            </Tilt3D>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-6 flex max-w-7xl justify-center px-5">
        {!verTodos && (
          <button
            type="button"
            onClick={() => setVerTodos(true)}
            className="min-h-[48px] rounded-full border border-white/10 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-[#b8853a]/50 hover:text-[#d4aa7a]"
          >
            Ver todos os {ITEMS.length} trabalhos
          </button>
        )}
      </div>

      <AntesDepois />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-24 flex flex-col items-center justify-center gap-8 border-t border-white/5 pt-16 text-center">
          <h3 className="font-serif text-3xl italic text-white">Curtiu algum? Mostra pro Thaylle.</h3>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp"
              data-track-label="galeria"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#b8853a] px-8 text-[11px] font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
            >
              <FaWhatsapp size={16} /> Quero esse corte
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="instagram"
              data-track-label="galeria"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/10 px-8 text-[11px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:border-[#b8853a]/50 hover:text-[#b8853a]"
            >
              <FaInstagram size={16} /> Mais no Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {atual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={atual.title}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          onClick={fechar}
        >
          <button onClick={fechar} aria-label="Fechar" className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-[#b8853a] hover:text-black">
            <X size={22} />
          </button>
          <div className="relative aspect-[4/5] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 md:aspect-video" onClick={(e) => e.stopPropagation()}>
            {atual.type === "video" ? (
              <video src={video(atual.n).mp4} poster={video(atual.n).poster} className="h-full w-full bg-black object-contain" autoPlay controls playsInline />
            ) : (
              <Image src={atual.src} alt={alt(atual)} fill sizes="100vw" className="bg-black object-contain" />
            )}
          </div>
          <button
            aria-label="Anterior"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-[#b8853a] md:left-8"
            onClick={(e) => { e.stopPropagation(); mover(-1); }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Próximo"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-[#b8853a] md:right-8"
            onClick={(e) => { e.stopPropagation(); mover(1); }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
