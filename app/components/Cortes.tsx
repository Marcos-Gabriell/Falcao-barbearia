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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Portfólio de Cortes
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            Alguns dos cortes realizados na Falcão Barbearia.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagens.map((src, i) => (
            <div
              key={i}
              className="
                group w-full aspect-square p-[10px] rounded-[22px]
                bg-[url('/textures/madeira1.png')]
                bg-cover bg-center
                shadow-[0_10px_25px_rgba(0,0,0,0.7)]
                border border-[#3a2a16]
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)]
                transition-all duration-300
              "
              style={{
                backgroundBlendMode: "multiply",
                backgroundColor: "#4a3a21",
              }}
            >
              {/* borda dourada interna */}
              <div
                className="
                  w-full h-full rounded-[16px] p-[4px]
                  bg-gradient-to-br from-[#e4c08a] to-[#a17843]
                  shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
                  group-hover:from-[#f1d9a6] group-hover:to-[#c09155]
                  transition-all
                "
              >
                {/* Área da foto */}
                <div
                  className="
                    w-full h-full overflow-hidden rounded-[12px]
                    bg-black
                    shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]
                  "
                >
                  <Image
                    src={src}
                    alt={`Corte ${i + 1}`}
                    width={800}
                    height={800}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105 group-hover:brightness-110
                      transition-all duration-500
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
