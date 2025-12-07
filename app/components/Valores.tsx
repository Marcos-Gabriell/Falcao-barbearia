export default function Valores() {
  return (
    <section
      id="valores"
      className="relative w-full bg-black py-24 text-zinc-300"
    >
      {/* fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6">
        {/* TÍTULO + INTRO */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Nossos Pilares: A Filosofia Falcão
          </h2>

          <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
            Desde 2021, a Falcão Barbearia vem crescendo junto com seus clientes. 
            Começamos em um espaço simples, evoluímos na técnica e no atendimento 
            e agora damos mais um passo, prontos para o futuro — sem perder a essência 
            de barbearia de verdade.
          </p>

          <p className="mt-3 text-zinc-400 leading-relaxed">
            Cada corte é parte dessa construção: início, evolução e um presente 
            preparado para o que vem pela frente.
          </p>
        </div>

        {/* LINHA DO TEMPO */}
        <div className="grid gap-6 rounded-3xl border border-zinc-800 bg-[#050505]/70 p-6 sm:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c59d6e]">
              2020
            </p>
            <h3 className="mt-1 text-sm font-semibold text-[#e4ddd2]">
              O começo
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Thaylle inicia os primeiros cortes, aprendendo na prática e ganhando
              confiança dos primeiros clientes.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c59d6e]">
              Evolução
            </p>
            <h3 className="mt-1 text-sm font-semibold text-[#e4ddd2]">
              Técnica e detalhe
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Aperfeiçoamento constante em degradê, acabamento e barba completa.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c59d6e]">
              Hoje
            </p>
            <h3 className="mt-1 text-sm font-semibold text-[#e4ddd2]">
              Experiência Falcão
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Atendimento mais profissional, ambiente mais estruturado e
              identidade forte.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c59d6e]">
              Futuro
            </p>
            <h3 className="mt-1 text-sm font-semibold text-[#e4ddd2]">
              Sempre em avanço
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Prontos para evoluir com novas ideias, tendências e melhorias para
              quem senta na cadeira.
            </p>
          </div>
        </div>

        {/* PILARES + TABELA DE PREÇOS */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* PILARES */}
          <div>
            <h3 className="text-xl font-semibold text-[#e4ddd2]">
              4 Pilares da marca
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              A cada atendimento, a Falcão Barbearia se apoia nesses pilares
              para entregar um padrão alto em tudo que faz.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#050505]/70 p-5 border border-zinc-800 hover:border-[#c59d6e]/60 transition">
                <h4 className="text-lg font-semibold text-[#c59d6e]">Precisão</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  Acabamento alinhado, degradê limpo e linhas bem definidas.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050505]/70 p-5 border border-zinc-800 hover:border-[#c59d6e]/60 transition">
                <h4 className="text-lg font-semibold text-[#c59d6e]">Atitude</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  Estilo que acompanha sua personalidade — do clássico ao ousado.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050505]/70 p-5 border border-zinc-800 hover:border-[#c59d6e]/60 transition">
                <h4 className="text-lg font-semibold text-[#c59d6e]">Confiança</h4>
                <p className="mt-2 text-sm text-zinc-400">
                  Transparência, escuta atenta e compromisso com o resultado.
                </p>
              </div>

              <div className="rounded-2xl bg-[#050505]/70 p-5 border border-zinc-800 hover:border-[#c59d6e]/60 transition">
                <h4 className="text-lg font-semibold text-[#c59d6e]">
                  Pontualidade
                </h4>
                <p className="mt-2 text-sm text-zinc-400">
                  Horário marcado é compromisso sério com o seu tempo.
                </p>
              </div>
            </div>
          </div>

          {/* TABELA DE PREÇOS */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-[#050505]/90 border border-zinc-800 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <h3 className="text-lg font-semibold text-[#e4ddd2]">
                Tabela de preços
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#c59d6e]">
                valores por serviço
              </p>

              <div className="mt-5 space-y-3 text-sm">
                {[
                  { nome: "Corte na máquina", preco: "R$ 30" },
                  { nome: "Corte tesoura", preco: "R$ 35" },
                  { nome: "Barba completa", preco: "R$ 15" },
                  { nome: "Pezinho", preco: "R$ 15" },
                  { nome: "Pigmentação", preco: "R$ 20" },
                  { nome: "Sobrancelha", preco: "R$ 10" },
                  { nome: "Nevou", preco: "R$ 100" },
                  { nome: "Luzes", preco: "R$ 80" },
                ].map((item) => (
                  <div
                    key={item.nome}
                    className="flex items-center gap-2 text-zinc-300"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {item.nome}
                    </span>
                    <span className="mx-2 flex-1 border-b border-dotted border-zinc-700" />
                    <span className="text-sm font-semibold text-[#c59d6e]">
                      {item.preco}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AVISO EM VERMELHO */}
            <div
  className="
    rounded-2xl 
    bg-[#2a1d07]/80 
    border border-[#e0b566] 
    px-5 py-4 
    text-sm 
    text-[#f3e4c2] 
    shadow-[0_0_25px_rgba(224,181,102,0.45)]
    backdrop-blur-sm
  "
>
  <p className="font-semibold text-[#ffd27c]">
    ⚠️ Observações importantes:
  </p>

  <ul className="mt-2 list-disc space-y-1 pl-4">
    <li>Valores referentes ao trabalho anunciado para cada serviço.</li>
    <li>Pagamento somente no ato do atendimento.</li>
    <li>
      Qualquer serviço extra ou alteração é combinado e ajustado antes da execução.
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
