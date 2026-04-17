const offices = [
  "Amargosa",
  "Elísio Medrado",
  "São Miguel das Matas",
  "Itatim",
  "Laje",
  "Jaguaquara",
];

export default function Coverage() {
  return (
    <section id="cobertura" className="bg-slate-900 rounded-t-[70px] rounded-b-[70px]">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
        <h2 className="font-uxum text-3xl text-white sm:text-4xl">Cobertura regional</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Estamos presentes em cidades e povoados da região, mantendo proximidade no atendimento e agilidade no suporte técnico.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <div key={office} className="rounded-2xl border border-cyan-400/20 bg-slate-800/70 p-5 text-cyan-100">
              {office}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
