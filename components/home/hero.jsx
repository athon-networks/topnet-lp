export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-6">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-100 shadow-[0_30px_80px_rgba(8,145,178,0.2)] sm:min-h-[520px]">
          <img src="/images/hero.png" alt="Banner principal Topnet" className="absolute inset-0 h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/72 to-slate-950/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.3),transparent_40%)]" />

          <div className="relative flex min-h-[420px] items-center p-8 sm:min-h-[520px] sm:p-12 lg:p-16">
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Topnet</p>
              <h1 className="font-uxum mb-6 text-4xl leading-tight text-white sm:text-5xl">
                Internet fibra óptica com <span className="text-cyan-300">velocidade real</span> para sua casa e empresa.
              </h1>
              <p className="mb-8 text-lg text-slate-200">
                Planos estáveis, atendimento próximo e suporte técnico rápido para você navegar sem dor de cabeça.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=5575999534296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
                >
                  Clique e confira os novos planos
                </a>
                <a
                  href="#cobertura"
                  className="rounded-full border border-cyan-200/70 px-7 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:text-white"
                >
                  Ver cobertura
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
