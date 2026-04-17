const stats = [
  { value: "7", label: "Cidades atendidas" },
  { value: "+70", label: "Povoados atendidos" },
  { value: "100%", label: "Fibra óptica" },
  { value: "24/7", label: "Suporte" },
];

const statPhotos = [
  "/images/estatistica-cidades-atendidas.avif",
  "/images/estatistica-povoados-atendidos.avif",
  "/images/estatistica-fibra-optica.avif",
  "/images/estatistica-suporte-24h.avif",
];

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Nossos números</p>
          <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Presença forte na região e suporte ativo</h2>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <article key={item.label} className="relative overflow-hidden rounded-3xl border border-cyan-100">
            <img
              src={statPhotos[index]}
              alt=""
              aria-hidden="true"
              className="h-64 w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <p className="text-5xl font-bold text-cyan-200">{item.value}</p>
              <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
