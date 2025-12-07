import Image from "next/image";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative w-full bg-black py-24 text-zinc-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row md:items-start">
        
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Sobre a Falcão Barbearia
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed">
            A Falcão Barbearia nasceu para unir a tradição das barbearias clássicas 
            com a experiência moderna. Um ambiente criado para você relaxar, 
            alinhar o visual e sair com confiança.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            No comando está <span className="text-[#c59d6e] font-semibold">𝑇ℎ𝑎𝑦𝑙𝑙𝑒</span>, 
            jovem barbeiro que começou a cortar cabelo em 2020. Desde então, vem 
            se destacando pela dedicação, profissionalismo e busca constante pela 
            excelência. Seu foco sempre foi entregar cortes bem trabalhados, 
            acabamento limpo e um atendimento que valoriza cada cliente.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Em um mundo acelerado, a Falcão Barbearia é o espaço onde a tradição 
            encontra a elegância moderna: conversa leve, atenção aos detalhes e 
            ambiente confortável.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#0a0a0a]/60 p-6 border border-zinc-800 hover:border-[#c59d6e]/50 transition">
              <h3 className="text-lg font-semibold text-[#c59d6e]">Ambiente acolhedor</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Espaço confortável, pensado para você se sentir bem.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0a0a0a]/60 p-6 border border-zinc-800 hover:border-[#c59d6e]/50 transition">
              <h3 className="text-lg font-semibold text-[#c59d6e]">Detalhe no acabamento</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Degradê bem feito, linha precisa e barba alinhada.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0a0a0a]/60 p-6 border border-zinc-800 hover:border-[#c59d6e]/50 transition">
              <h3 className="text-lg font-semibold text-[#c59d6e]">Foco na experiência</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Não é só um corte — é o seu momento de relaxar.
              </p>
            </div>
          </div>

        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/thaylle.jpg" 
            alt="Barbeiro 𝑇ℎ𝑎𝑦𝑙𝑙𝑒"
            width={480}
            height={600}
            className="
              rounded-3xl object-cover shadow-[0_0_60px_rgba(197,157,110,0.15)]
              border border-zinc-800
              max-w-[300px] sm:max-w-[360px] md:max-w-[420px]
            "
          />
        </div>

      </div>
    </section>
  );
}
