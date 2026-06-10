"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ArrowRight, Scissors, Maximize2, X, ChevronLeft, ChevronRight, Star, Calendar } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_URL } from "../utils/links";
import Link from "next/link";

const GOLD = "#b8853a";

// ─── DADOS MAPEADOS COM BASE NO SEU PRINT ──────────────────────────────────────
type Item = { type: "photo" | "video"; src: string; title: string; desc: string };

const ITEMS: Item[] = [
  { type: "video", src: "/cortes/vid1.mp4", title: "Platinado de Respeito", desc: "Descoloração perfeita sem agredir o fio." },
  { type: "photo", src: "/cortes/corte12.jpeg", title: "Corte Social Premium", desc: "Clássico atemporal com acabamento em tesoura." },
  { type: "photo", src: "/cortes/Barba.png", title: "Barba Terapia", desc: "Alinhamento, simetria e hidratação profunda." },
  { type: "video", src: "/cortes/vid5.mp4", title: "Degradê Navalhado", desc: "Transição limpa e perfilamento impecável." },
  { type: "photo", src: "/cortes/corte1.jpg", title: "Estilo Desde Cedo", desc: "Corte infantil com paciência e técnica afiada." },
  { type: "video", src: "/cortes/vid2.mp4", title: "Nevou Falcão", desc: "O platinado que chama atenção onde passa." },
  { type: "photo", src: "/cortes/corte2.jpg", title: "Low Fade", desc: "Preservação da aresta e sombra bem marcada." },
  { type: "photo", src: "/cortes/corte15.jpeg", title: "Fade com Textura", desc: "Volume natural no topo com lateral limpa." },
  { type: "video", src: "/cortes/vid8.mp4", title: "Freestyle Design", desc: "Arte, personalidade e precisão no acabamento." },
  { type: "photo", src: "/cortes/corte6.jpg", title: "Mid Fade", desc: "Equilíbrio perfeito entre claro, cinza e escuro." },
  { type: "video", src: "/cortes/vid3.mp4", title: "Transformação", desc: "A mudança que eleva a autoestima na hora." },
  { type: "photo", src: "/cortes/corte4.jpg", title: "Buzz Cut", desc: "Praticidade urbana com fade milimétrico." },
  { type: "photo", src: "/cortes/corte11.jpeg", title: "Fade Texturizado", desc: "Caimento perfeito com finalização profissional." },
  { type: "video", src: "/cortes/vid4.mp4", title: "Toque Final", desc: "O detalhe na tesoura que faz toda a diferença." },
  { type: "photo", src: "/cortes/corte13.jpeg", title: "Alinhamento Total", desc: "Elegância e perfilamento cirúrgico." },
  { type: "video", src: "/cortes/vid6.mp4", title: "Padrão Falcão", desc: "Qualidade garantida em cada atendimento." },
  { type: "photo", src: "/cortes/corte14.jpeg", title: "Corte Jovem", desc: "Estilo urbano, despojado e com atitude." },
  { type: "video", src: "/cortes/vid7.mp4", title: "Fade Simétrico", desc: "Sombra perfeita e sem marcações visíveis." },
  { type: "photo", src: "/cortes/corte3.png", title: "Acabamento Perfeito", desc: "A precisão e o detalhe que você exige." },
  { type: "photo", src: "/cortes/corte5.png", title: "High Fade", desc: "Laterais limpas e muito destaque no topo." },
  { type: "photo", src: "/cortes/corte7.jpg", title: "Fade em V", desc: "Estilo agressivo, marcante e muito moderno." },
  { type: "photo", src: "/cortes/corte8.png", title: "Corte Urbano", desc: "A tendência das ruas direto na nossa cadeira." },
  { type: "photo", src: "/cortes/corte9.png", title: "Skin Fade", desc: "Do zero absoluto à transição mais suave." },
  { type: "photo", src: "/cortes/corte10.jpeg", title: "Na Régua", desc: "Perfilamento frontal afiado e simétrico." },
  { type: "photo", src: "/cortes/corte16.jpeg", title: "Social Moderno", desc: "O clássico reinventado com técnica de fade." }
];

// ─── PREMIUM STATS ─────────────────────────────────────────────────────────────
const StatsBanner = () => {
  const stats = [
    { value: "+300", label: "Cortes Realizados", icon: <Scissors size={18} /> },
    { value: "4.9★", label: "Avaliações no Google", icon: <Star size={18} /> },
    { value: "100%", label: "Atenção aos Detalhes", icon: <Maximize2 size={18} /> },
    { value: "2021", label: "Fundação da Marca", icon: <Calendar size={18} /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-white/5 mb-20 bg-white/[0.01]">
      {stats.map((stat, i) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          key={i} 
          className="flex flex-col items-center justify-center text-center space-y-3"
        >
          <div className="text-[#b8853a] mb-2">{stat.icon}</div>
          <span className="text-3xl md:text-4xl font-serif font-black text-white">{stat.value}</span>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

// ─── BEFORE / AFTER SLIDER PREMIUM (Corrigido o alinhamento) ───────────────────
const BeforeAfterSlider = () => {
  const sliderPosition = useMotionValue(50);
  const sliderLeft = useMotionTemplate`${sliderPosition}%`;
  const clipPath = useMotionTemplate`inset(0 calc(100% - ${sliderLeft}) 0 0)`;
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderByX = (clientX: number) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    sliderPosition.set(percentage);
  };

  const handleDrag = (_event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent | PointerEvent, info: any) => {
    updateSliderByX(info.point.x);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 mt-24 mb-16">
      <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="text-[#b8853a] font-mono text-[10px] tracking-[0.4em] uppercase block mb-4"
          >
            A Mágica Acontece
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-4xl md:text-5xl font-serif text-[#f5f1eb]"
          >
            Transformações <span className="italic text-[#b8853a]">Reais.</span>
          </motion.h3>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/40 text-sm max-w-sm font-light"
        >
          Deslize para ver o impacto que um corte feito com precisão e técnica pode causar na sua imagem pessoal.
        </motion.p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl bg-[#0a0a0a]"
        onClick={(e) => updateSliderByX(e.clientX)}
      >
        {/* IMAGEM DEPOIS (FUNDO) */}
        <div className="absolute inset-0 pointer-events-none">
          <Image 
            src="/cortes/depois.png" 
            alt="Depois" 
            fill 
            className="object-cover object-center" 
            quality={100}
          />
          <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-[#b8853a] uppercase tracking-widest z-20">
            Depois
          </div>
        </div>

        {/* IMAGEM ANTES (SOBREPOSTA COM CLIP-PATH) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none bg-[#0a0a0a]"
          style={{ clipPath, willChange: "clip-path" }}
        >
          <Image 
            src="/cortes/antes.png" 
            alt="Antes" 
            fill 
            className="object-cover object-center grayscale brightness-75" 
            quality={100}
          />
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold text-white/80 uppercase tracking-widest z-20">
            Antes
          </div>
        </motion.div>

        {/* SLIDER HANDLE */}
        <motion.div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-[#b8853a] shadow-[0_0_20px_rgba(184,133,58,0.8)] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ left: sliderLeft, x: "-50%", willChange: "left" }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
        >
          <div className="w-10 h-10 rounded-full bg-[#b8853a] flex items-center justify-center text-black shadow-xl ring-4 ring-[#b8853a]/30">
            <ChevronLeft size={16} className="-mr-1" />
            <ChevronRight size={16} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ─── EDITORIAL GALLERY CARD ────────────────────────────────────────────────────
const GalleryCard = ({ item, index, className, onOpen }: { item: Item; index: number; className?: string; onOpen: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 5) * 0.1 }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/5 bg-white/[0.02] ${className}`}
      onMouseEnter={() => { setIsHovered(true); videoRef.current?.play().catch(()=>{}); }}
      onMouseLeave={() => { setIsHovered(false); videoRef.current?.pause(); }}
      onClick={onOpen}
    >
      <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.08]">
        {item.type === "video" ? (
          <video ref={videoRef} src={item.src} className="w-full h-full object-cover" muted playsInline loop />
        ) : (
          <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" loading={index < 3 ? "eager" : "lazy"} />
        )}
      </div>

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Gold Glow border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#b8853a]/30 rounded-3xl transition-colors duration-500 shadow-[inset_0_0_0_rgba(184,133,58,0)] group-hover:shadow-[inset_0_0_30px_rgba(184,133,58,0.15)]" />

      {/* Top Badge (Video) */}
      {item.type === "video" && (
        <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white/80 text-[10px] uppercase tracking-widest font-bold">
          <Play size={10} className="text-[#b8853a]" fill="#b8853a" /> Vídeo
        </div>
      )}

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-xl sm:text-2xl font-serif text-[#f5f1eb] mb-2 drop-shadow-lg">{item.title}</h4>
        <p className="text-white/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
        
        <div className="mt-4 w-10 h-10 rounded-full bg-[#b8853a]/10 border border-[#b8853a]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
          <ArrowRight size={16} className="text-[#b8853a]" />
        </div>
      </div>
    </motion.div>
  );
};

// ─── MOBILE CAROUSEL (HORIZONTAL SWIPE) ────────────────────────────────────────
const MobileCarousel = ({ onOpenLightbox }: { onOpenLightbox: (index: number) => void }) => {
  return (
    <div className="w-full relative lg:hidden bg-[#050505] pt-20 pb-10">
      
      {/* Mobile Header */}
      <div className="px-6 mb-10">
        <span className="text-[#b8853a] font-mono text-[10px] tracking-[0.4em] uppercase block mb-3">Galeria Premium</span>
        <h2 className="text-4xl font-serif text-[#f5f1eb] leading-tight mb-4">Nossos <span className="italic text-[#b8853a]">Trabalhos</span></h2>
        <p className="text-white/40 text-sm font-light">Deslize para explorar a excelência em cada detalhe.</p>
      </div>

      {/* Horizontal Swipe Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-6 pb-10" style={{ scrollbarWidth: "none" }}>
        {ITEMS.map((item, index) => (
          <div key={index} className="w-[85vw] sm:w-[60vw] flex-shrink-0 snap-center">
            <div 
              className="relative w-full h-[65vh] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
              onClick={() => onOpenLightbox(index)}
            >
              {item.type === "video" ? (
                <video src={item.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              ) : (
                <Image src={item.src} alt={item.title} fill className="object-cover" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Type Badge */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[9px] text-white uppercase tracking-widest font-bold flex items-center gap-1.5">
                {item.type === "video" ? <Play size={10} fill="currentColor" /> : <Maximize2 size={10} />}
                {item.type === "video" ? "Vídeo" : "Foto"}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-serif text-white mb-2">{item.title}</h4>
                <p className="text-white/50 text-xs font-light mb-4">{item.desc}</p>
                <button className="flex items-center gap-2 text-[10px] font-bold text-[#b8853a] uppercase tracking-widest border border-[#b8853a]/30 px-4 py-2 rounded-full bg-[#b8853a]/10 backdrop-blur-md">
                  Expandir <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4 text-white/30 text-xs font-mono uppercase tracking-widest">
        <ChevronLeft size={14} /> Deslize <ChevronRight size={14} />
      </div>
    </div>
  );
};

// ─── MAIN EXPORT: EDITORIAL GALLERY ────────────────────────────────────────────
export default function TrabalhosEditorial() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Helper para montar o Grid Assimétrico no Desktop
  const getGridClass = (index: number) => {
    switch(index) {
      case 0: return "col-span-12 lg:col-span-8 min-h-[500px] lg:min-h-[600px]"; // Hero Wide
      case 1: return "col-span-12 lg:col-span-4 min-h-[500px] lg:min-h-[600px]"; // Hero Portrait
      case 2: return "col-span-12 lg:col-span-4 min-h-[400px]"; // Square/Portrait
      case 3: return "col-span-12 lg:col-span-4 min-h-[400px]"; // Square/Portrait
      case 4: return "col-span-12 lg:col-span-4 min-h-[400px]"; // Square/Portrait
      case 5: return "col-span-12 lg:col-span-6 min-h-[450px]"; // Mid Wide
      case 6: return "col-span-12 lg:col-span-6 min-h-[450px]"; // Mid Wide
      default: return "col-span-12 md:col-span-6 lg:col-span-3 min-h-[350px]"; // Small cards
    }
  };

  return (
    <div id="cortes" className="w-full bg-[#050505]">
      <MobileCarousel onOpenLightbox={setLightboxIndex} />

      <section className="hidden lg:block relative w-full pt-32 bg-[#050505] overflow-hidden antialiased">
        
        {/* Grain & Glow Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#b8853a]/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6">
          
          {/* Header Editorial */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-[#b8853a] to-transparent" />
                <span className="text-[#b8853a] font-mono text-[10px] tracking-[0.4em] uppercase font-semibold">Portfólio de Luxo</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-[#f5f1eb] leading-[0.95] tracking-tight">
                Nossos <br />
                <span className="italic text-[#b8853a] font-normal">Trabalhos.</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm lg:text-right border-l border-white/10 lg:border-l-0 lg:border-r pl-6 lg:pl-0 lg:pr-6">
              Cada corte carrega precisão, identidade e atenção aos detalhes. Mais do que um corte — uma presença marcante.
            </p>
          </div>

          <StatsBanner />
          
          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-12 gap-6 mb-32">
            {ITEMS.slice(0, 11).map((item, index) => (
              <GalleryCard 
                key={index} 
                item={item} 
                index={index} 
                className={getGridClass(index)} 
                onOpen={() => setLightboxIndex(index)}
              />
            ))}
          </div>

        </div>

        {/* ── O SLIDER AGORA ESTÁ PERFEITAMENTE ALINHADO AQUI ── */}
        <BeforeAfterSlider />

        <div className="mx-auto max-w-7xl px-6">
          {/* Premium Footer CTA */}
          <div className="mb-32 flex flex-col items-center justify-center text-center space-y-8 border-t border-white/5 pt-20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-serif text-white italic"
            >
              Eleve seu estilo ao próximo nível.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="/agendar" className="px-8 py-4 bg-[#b8853a] text-black font-bold uppercase tracking-widest text-[11px] rounded-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(184,133,58,0.4)] transition-all flex items-center gap-2">
                <Calendar size={16} /> Agendar Experiência
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-white/10 text-white/70 font-bold uppercase tracking-widest text-[11px] rounded-lg hover:border-[#b8853a]/50 hover:text-[#b8853a] transition-all flex items-center gap-2">
                <FaInstagram size={16} /> Ver mais no Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 z-50 text-white/50 hover:text-white bg-white/5 p-3 rounded-full backdrop-blur-md border border-white/10 hover:bg-[#b8853a] hover:border-[#b8853a] hover:text-black transition-all">
              <X size={24} />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
              {ITEMS[lightboxIndex].type === "video" ? (
                <video src={ITEMS[lightboxIndex].src} className="w-full h-full object-contain bg-black" autoPlay controls playsInline />
              ) : (
                <Image src={ITEMS[lightboxIndex].src} alt="Galeria" fill className="object-contain bg-black" />
              )}
            </div>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-[#b8853a] bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:border-[#b8853a]/50 transition-all"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev! === 0 ? ITEMS.length - 1 : prev! - 1); }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-[#b8853a] bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hover:border-[#b8853a]/50 transition-all"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev! === ITEMS.length - 1 ? 0 : prev! + 1); }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
