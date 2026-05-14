const coverageAreas = [
  "Feira de Santana",
  "Conceição da Feira",
  "São Gonçalo dos Campos",
  "Amélia Rodrigues",
  "Santo Estêvão",
  "Distrito de Maria Quitéria",
];

const neighborhoodHighlights = [
  "Centro",
  "SIM",
  "Tomba",
  "Mangabeira",
  "Campo Limpo",
  "Brasília",
];

export default function LocalSeo() {
  return (
    <section id="regioes-atendidas" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-cyan-100 bg-cyan-50/60 p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Cobertura regional</p>
          <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Internet fibra óptica em cidades e bairros da região</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            A Topnet atende endereços residenciais e empresariais com instalação rápida e suporte local. Consulte a
            disponibilidade para sua rua e encontre o plano ideal para sua rotina.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold text-slate-900">Cidades atendidas</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-slate-700 sm:grid-cols-2">
                {coverageAreas.map((city) => (
                  <li key={city} className="rounded-xl border border-cyan-100 bg-white px-3 py-2">
                    {city}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3 className="text-lg font-semibold text-slate-900">Bairros com alta procura</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-slate-700 sm:grid-cols-2">
                {neighborhoodHighlights.map((neighborhood) => (
                  <li key={neighborhood} className="rounded-xl border border-cyan-100 bg-white px-3 py-2">
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cobertura"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-500 hover:text-cyan-800"
            >
              Consultar cobertura no mapa
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero consultar cobertura de internet fibra no meu endereço."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
            >
              Consultar meu endereço
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
