const logos = [
  { name: "SVA 1", src: "/images/logos/deezer.png" },
  { name: "SVA 2", src: "/images/logos/cdn.png" },
  { name: "SVA 3", src: "/images/logos/hbo.png" },
  { name: "SVA 4", src: "/images/logos/sky.png" },
  { name: "SVA 5", src: "/images/logos/looke.png" },
  { name: "SVA 6", src: "/images/logos/exitlag.png" },
  { name: "SVA 7", src: "/images/logos/disney.png" },
  { name: "SVA 8", src: "/images/logos/prime.png" },
];

export default function SvasShowcase() {
  return (
    <section className="border-y border-cyan-500/20 rounded-t-[70px] rounded-b-[70px] bg-[linear-gradient(120deg,#020617_10%,#05243e_55%,#38bdf8_130%)]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">SVAs inclusos</p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">
            A Topnet tem muitos SVAs bacanas para você aproveitar com mais entretenimento.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Plataformas de música, filmes, séries e conteúdo digital para agregar mais valor ao seu plano.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero conhecer todos os SVAs disponíveis na Topnet."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Ver SVAs no meu plano
          </a>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:justify-self-end">
          {logos.map((logo) => (
            <article
              key={`stack-${logo.name}`}
              className="logo-card flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-cyan-500/30 bg-white px-4"
            >
              <img
                src={logo.src}
                alt={`Logo ${logo.name}`}
                className="h-8 w-auto object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
