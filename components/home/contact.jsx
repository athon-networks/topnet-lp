import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-slate-900 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1600px] items-end gap-8 px-4 sm:px-5 lg:grid-cols-[1.05fr_0.55fr_1.2fr] lg:gap-0 lg:px-6">
        <div className="order-1 text-white">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/10 text-cyan-200">
            <Clock3 className="h-7 w-7" />
          </div>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-cyan-300 sm:text-5xl">
            Suporte que você pode contar, 24 horas por dia, 7 dias por semana.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
            Fale conosco do jeito que preferir. Nossa equipe está sempre disponível com atendimento rápido e humanizado.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-slate-100">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <span>R. Marque de Herval, 42 - Centro, Amargosa - BA, 45300-000</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <a href="https://api.whatsapp.com/send/?phone=5575999534296" target="_blank" rel="noopener noreferrer" className="underline decoration-cyan-200/60 underline-offset-4 hover:text-cyan-200">
                (75) 99953-4296
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <a href="mailto:contato@topnetbahia.com.br" className="underline decoration-cyan-200/60 underline-offset-4 hover:text-cyan-200">
                contato@topnetbahia.com.br
              </a>
            </li>
          </ul>

          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-emerald-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-400"
          >
            Fale Conosco
          </a>
        </div>

        <div className="pointer-events-none order-3 justify-self-center lg:order-2 lg:relative lg:z-20 lg:-mr-24 lg:-mb-24 xl:-mr-28">
          <img
            src="/images/personagem.png"
            alt="Atendente da Topnet"
            className="h-[420px] w-auto max-w-none object-contain sm:h-[520px] lg:h-[680px] xl:h-[740px]"
          />
        </div>

        <div className="order-2 overflow-hidden rounded-2xl border border-cyan-300/30 bg-white shadow-[0_20px_60px_rgba(2,12,27,0.35)] lg:order-3 lg:ml-[-40px]">
          <iframe
            title="Mapa da central da Topnet em Amargosa"
            src="https://www.google.com/maps?q=-13.028903303568086,-39.602685508260365&z=17&output=embed"
            className="h-[320px] w-full sm:h-[400px] lg:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
