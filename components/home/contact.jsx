export default function ContactSection() {
  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
      <div className="grid gap-8 rounded-3xl border border-cyan-100 bg-cyan-50/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="font-uxum text-3xl text-slate-900">Fale com a Topnet</h2>
          <p className="mt-4 text-slate-600">Atendimento comercial e suporte técnico para residencial e empresarial.</p>
          <p className="mt-6 text-sm text-slate-500">Telefone</p>
          <p className="text-sm font-semibold text-slate-900">(75) 3634-1825</p>
          <p className="mt-4 text-sm text-slate-500">WhatsApp</p>
          <p className="text-sm font-semibold text-slate-900">(75) 99953-4296</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_12px_28px_rgba(14,116,144,0.10)]">
            <p className="text-xl font-semibold text-slate-900">Visite nossa central</p>
            <p className="mt-2 text-sm text-slate-600">R. Marque de Herval, 42 - Centro, Amargosa - BA, 45300-000</p>

            <div className="mt-4 overflow-hidden rounded-xl border border-cyan-100">
              <iframe
                title="Mapa da central da Topnet em Amargosa"
                src="https://www.google.com/maps?q=-13.028903303568086,-39.602685508260365&z=17&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps?q=-13.028903303568086,-39.602685508260365"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
