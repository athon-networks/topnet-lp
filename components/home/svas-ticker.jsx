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
    <section className="py-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-2xl py-4 sm:py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24" />

          <div className="flex w-max items-center gap-4 svas-marquee sm:gap-5">
            {ticker.map((logo, index) => (
              <article
                key={`${logo.name}-${index}`}
                className="logo-card flex h-14 min-w-[150px] items-center justify-center rounded-xl bg-white/95 px-4 text-center sm:h-16 sm:min-w-[170px]"
              >
                <img src={logo.src} alt={`Logo ${logo.name}`} className="h-7 w-auto object-contain sm:h-8" />
              </article>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .svas-marquee {
          animation: svas-marquee 30s linear infinite;
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
