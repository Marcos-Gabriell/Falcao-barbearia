const GOOGLE_ALL_REVIEWS_URL =
  "https://www.google.com/search?client=opera&sca_esv=7c6910cd552a3b71&cs=1&output=search&kgmid=/g/11ybt_kkr2&q=Barbearia+Falc%C3%A3o&shndl=30&shem=damc,shrtsdl&source=sh/x/kp/local/m1/1&kgs=bf51a9cd0e34bf61&utm_source=damc,shrtsdl,sh/x/kp/local/m1/1#lrd=0x76ba32c243da499:0x6b4f599dbbf227ec,1,,,,";
  
const GOOGLE_NEW_REVIEW_URL =
  "https://g.page/r/Cewn8rudWU9rEBM/review";

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="relative w-full bg-black py-24 text-zinc-300"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            O que dizem sobre a Falcão
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            A melhor forma de conhecer é ouvindo quem já passou pela cadeira.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[0.9fr,1.1fr] items-start">
          {/* RESUMO */}
          <div className="rounded-3xl border border-zinc-800 bg-[#050505]/80 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c59d6e]">
              Avaliação geral
            </p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-extrabold text-[#e4ddd2]">
                4,9
              </span>
              <span className="text-2xl text-[#c59d6e]">★★★★★</span>
            </div>

            <p className="mt-2 text-sm text-zinc-400">
              Baseado em avaliações reais no Google.
            </p>

            {/* Barrinhas */}
            <div className="mt-6 space-y-2 text-sm">
              {[5, 4, 3, 2, 1].map((stars, idx) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="w-6 text-xs text-zinc-400">{stars}★</span>
                  <div className="flex-1 h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#c59d6e]"
                      style={{
                        width:
                          idx === 0
                            ? "90%"
                            : idx === 1
                            ? "35%"
                            : idx === 2
                            ? "10%"
                            : "5%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Botões */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={GOOGLE_ALL_REVIEWS_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(197,157,110,0.6)] transition hover:bg-[#d6b37f]"
              >
                Ver todas as avaliações no Google
              </a>

              <a
                href={GOOGLE_NEW_REVIEW_URL}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-[#c59d6e]/70 px-6 py-3 text-sm font-semibold text-[#c59d6e] transition hover:bg-[#c59d6e]/10"
              >
                Avaliar agora
              </a>
            </div>
          </div>

          {/* AVALIAÇÕES REAIS DO GOOGLE */}
          <div className="space-y-4">
            {/* REVIEW 1 */}
            <article className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5 hover:border-[#c59d6e]/50 transition">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[#e4ddd2]">
                  Jayllon Gabriel Oliveira
                </h3>
                <span className="text-[#c59d6e]">★★★★★</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">2 meses atrás</p>
              <p className="mt-2 text-sm text-zinc-400">
                “Exatamente, ainda ganhei um abraço”
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Serviço: Corte de cabelo
              </p>
            </article>

            {/* REVIEW 2 */}
            <article className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5 hover:border-[#c59d6e]/50 transition">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[#e4ddd2]">João Souza</h3>
                <span className="text-[#c59d6e]">★★★★★</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">1 mês atrás</p>
              <p className="mt-2 text-sm text-zinc-400">“Muito boa”</p>
            </article>

            {/* REVIEW 3 */}
            <article className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5 hover:border-[#c59d6e]/50 transition">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[#e4ddd2]">Kauã Agiar</h3>
                <span className="text-[#c59d6e]">★★★★★</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">10 meses atrás</p>
              <p className="mt-2 text-sm text-zinc-400">“Ótimo corte!!”</p>
              <p className="mt-2 text-xs text-zinc-500">
                Serviços: Corte de cabelo, Aparar a barba, Corte com navalha
              </p>
            </article>

            {/* REVIEW 4 */}
            <article className="rounded-2xl border border-zinc-800 bg-[#050505]/70 p-5 hover:border-[#c59d6e]/50 transition">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-[#e4ddd2]">
                  Keirisson Silva
                </h3>
                <span className="text-[#c59d6e]">★★★★★</span>
              </div>
              <p className="mt-1 text-xs text-zinc-500">2 meses atrás</p>
              <p className="mt-2 text-sm text-zinc-400">“Corte de cabelo”</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
