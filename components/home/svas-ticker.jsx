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

export default function SvasTicker() {
  const ticker = [...logos, ...logos];

  return (
    <section className="border-y border-cyan-100 bg-cyan-50/60">
      <div className="w-full py-10">
        <div className="mb-6 px-4 text-center sm:px-6 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">SVAs inclusos</p>
          <h2 className="mt-2 text-2xl text-slate-900 sm:text-3xl">Serviços que você encontra com a <span className="text-cyan-400">Topnet</span></h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-white/70 py-4">
          <div className="flex w-max items-center gap-4 svas-marquee">
            {ticker.map((logo, index) => (
              <article
                key={`${logo.name}-${index}`}
                className="logo-card flex h-16 min-w-[170px] items-center justify-center rounded-xl border border-cyan-100 bg-white px-4 text-center"
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
      </div>
      <style>{`
        .svas-marquee {
          animation: svas-marquee 28s linear infinite;
        }

        @keyframes svas-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
