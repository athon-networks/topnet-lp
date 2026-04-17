export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.22),transparent_45%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">Topnet</p>
          <h1 className="font-uxum mb-6 text-4xl leading-tight text-slate-900 sm:text-5xl">
            Internet fibra óptica para quem precisa de <span className="text-cyan-400">estabilidade</span> de verdade.
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-600">
            Planos para residências e empresas com atendimento próximo, velocidade consistente e equipe técnica pronta para ajudar.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5575999534296"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Falar com atendimento
            </a>
            <a href="#cobertura" className="rounded-xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-500">
              Ver cobertura
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl" />
          <img
            src="/images/internet-fibra-hero.avif"
            alt="Atendimento e tecnologia de internet"
            className="relative h-full min-h-[330px] w-full rounded-3xl border border-cyan-100 object-cover shadow-[0_24px_60px_rgba(8,145,178,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
