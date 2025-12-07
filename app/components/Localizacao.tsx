const GOOGLE_MAPS_ROUTE_URL = "https://maps.app.goo.gl/pPFXwU1dtws6HT9aA";

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="relative w-full bg-black py-24 text-zinc-300"
    >
      {/* Fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a150f,_#000)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#e4ddd2] sm:text-5xl">
            Onde nos encontrar
          </h2>
          <p className="mt-3 text-lg text-zinc-400">
            Localização fácil e acessível no coração da cidade.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* INFO */}
          <div className="rounded-3xl border border-zinc-800 bg-[#050505]/80 p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <h3 className="text-xl font-semibold text-[#e4ddd2]">Endereço</h3>

            <p className="mt-3 text-zinc-400 leading-relaxed">
              <span className="font-semibold text-[#e4ddd2]">Barbearia Falcão</span>
              <br />
              R. Olavo Bilac – Tapiramutá, BA, 44840-027
            </p>

            <h3 className="mt-6 text-xl font-semibold text-[#e4ddd2]">
              Horário de funcionamento
            </h3>

            <p className="mt-3 text-zinc-400">
              <span className="text-[#c59d6e] font-medium">Segunda a Sexta:</span>{" "}
              09:00 às 19:00
              <br />
              <span className="text-[#c59d6e] font-medium">Sábado:</span>{" "}
              08:00 às 20:00
            </p>

            <a
              href={GOOGLE_MAPS_ROUTE_URL}
              target="_blank"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c59d6e] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_32px_rgba(197,157,110,0.6)] transition hover:bg-[#d6b37f]"
            >
              Traçar rota no Google Maps
            </a>
          </div>

          {/* MAPA */}
          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-[#050505]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.049292743803!2d-40.000000!3d-11.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773249761921637b%3A0x6b4f599dbbf227ec!2sBarbearia%20Falc%C3%A3o!5e0!3m2!1spt-BR!2sBR!4v0000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
