const plans = [
  {
    speed: "100",
    area: "Cidade",
    price: "R$59,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado"],
  },
  {
    speed: "200",
    area: "Cidade",
    price: "R$69,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
  {
    speed: "400",
    area: "Cidade / Rural fibra",
    price: "R$79,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
    featured: true,
  },
  {
    speed: "500",
    area: "Cidade / Rural fibra",
    price: "R$99,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
  {
    speed: "600",
    area: "Cidade / Rural fibra",
    price: "R$119,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
];

export default function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-slate-900 rounded-t-[70px] rounded-b-[70px]">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Planos de internet</p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">Escolha o plano ideal para sua casa</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100">
            Todos os planos com fibra óptica, instalação completa e suporte especializado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.speed}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-[0_14px_35px_rgba(8,145,178,0.14)] transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-cyan-300/40 bg-slate-900 text-white"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Mais popular
                </span>
              ) : null}

              {plan.featured ? (
                <>
                  <img
                    src="/images/plano-400-destaque.avif"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 hidden h-full w-full rounded-3xl object-cover opacity-40 md:block"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-cyan-900/35" />
                </>
              ) : null}

              <div className="relative z-10 text-center">
                <p className={`text-6xl font-bold leading-none ${plan.featured ? "text-white" : "text-cyan-300"}`}>{plan.speed}</p>
                <p className={`mt-1 text-3xl font-bold ${plan.featured ? "text-cyan-100" : "text-cyan-300"}`}>mega</p>
                <p className={`mt-2 text-lg font-semibold ${plan.featured ? "text-cyan-100" : "text-cyan-100"}`}>{plan.area}</p>
              </div>

              <ul className={`relative z-10 mt-8 space-y-2 border-y py-5 text-sm ${plan.featured ? "border-cyan-300/40 text-cyan-50" : "border-cyan-300/40 text-cyan-50"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="text-center">{feature}</li>
                ))}
              </ul>

              <p className={`relative z-10 mt-8 text-center text-5xl font-bold ${plan.featured ? "text-white" : "text-cyan-300"}`}>{plan.price}</p>

              <a
                href={`https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero assinar o plano de ${plan.speed} mega por ${plan.price}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] transition ${
                  plan.featured
                    ? "bg-white text-cyan-700 hover:bg-cyan-50"
                    : "bg-cyan-400 text-white hover:bg-cyan-300"
                }`}
              >
                Assine já
              </a>
            </article>
          ))}

          <article className="flex flex-col rounded-3xl border border-cyan-200 bg-cyan-50 p-7 shadow-[0_14px_35px_rgba(8,145,178,0.10)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Ajuda para escolher</p>
            <h3 className="mt-3 text-3xl leading-tight text-slate-900">Não sabe qual plano escolher?</h3>
            <p className="mt-4 text-lg text-slate-600">
              Nosso time analisa seu endereço e indica o melhor plano para sua casa ou empresa.
            </p>

            <div className="mt-auto space-y-3 pt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Preciso de ajuda para escolher o melhor plano para meu endereço."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white transition hover:bg-cyan-700"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#cobertura"
                className="inline-flex w-full items-center justify-center rounded-full border border-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-cyan-700 transition hover:border-cyan-500 hover:text-cyan-800"
              >
                Ver cobertura da minha rua
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
