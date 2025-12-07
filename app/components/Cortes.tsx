import Image from "next/image";

const imagens = [
  "/cortes/corte1.jpg",
  "/cortes/corte2.jpg",
  "/cortes/corte3.png",
  "/cortes/corte4.jpg",
  "/cortes/corte5.png",
  "/cortes/corte6.jpg",
  "/cortes/corte7.jpg",
  "/cortes/corte8.png",
  "/cortes/corte9.png",
];

export default function Cortes() {
  return (
    <section
      id="cortes"
      className="relative w-full bg-black py-24 text-zinc-300"
    >
      {/* fundo suave premium */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Portfólio de Cortes
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            Alguns dos cortes realizados na Falcão Barbearia.
          </p>
        </div>

        {/* GRID PADRONIZADO */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-6 
          "
        >
          {imagens.map((src, i) => (
            <div
              key={i}
              className="
                w-full 
                aspect-square
                overflow-hidden rounded-2xl 
                border border-zinc-800 
                bg-[#0a0a0a]/40 
                shadow-[0_0_25px_rgba(0,0,0,0.4)]
                hover:scale-[1.02] 
                hover:shadow-[0_0_45px_rgba(197,157,110,0.25)]
                hover:border-[#c59d6e]/40 
                transition-all duration-300
              "
            >
              <Image
                src={src}
                alt={`Corte ${i + 1}`}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
