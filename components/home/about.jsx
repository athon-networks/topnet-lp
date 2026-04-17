import { Headset, Home, Router, Wifi } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
      <div className="grid gap-8 md:grid-cols-[1.5fr_0.8fr] md:items-start">
        <div>
          <h2 className="font-uxum text-3xl text-slate-900 sm:text-4xl">Sobre a Topnet</h2>
          <p className="mt-5 max-w-4xl text-lg text-slate-600">
            A Topnet Serviços de Provedor LTDA conecta pessoas e negócios com internet fibra óptica de alta qualidade. Nosso foco é atendimento humano,
            suporte rápido e infraestrutura preparada para acompanhar o seu ritmo.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <div className="inline-flex rounded-xl bg-white p-2 text-cyan-700">
                <Home className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">Equipe local</p>
              <p className="mt-2 text-slate-700">Atendimento próximo com quem conhece a região.</p>
            </article>
            <article className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <div className="inline-flex rounded-xl bg-white p-2 text-cyan-700">
                <Router className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">Instalação ágil</p>
              <p className="mt-2 text-slate-700">Agendamento rápido para ativar sua internet.</p>
            </article>
            <article className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <div className="inline-flex rounded-xl bg-white p-2 text-cyan-700">
                <Wifi className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">100% fibra</p>
              <p className="mt-2 text-slate-700">Mais estabilidade para casa e empresa.</p>
            </article>
            <article className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <div className="inline-flex rounded-xl bg-white p-2 text-cyan-700">
                <Headset className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">Atendimento humano</p>
              <p className="mt-2 text-slate-700">Suporte por WhatsApp e recepção presencial.</p>
            </article>
          </div>
        </div>

        <article className="rounded-2xl border border-cyan-100 bg-white p-4 shadow-[0_8px_22px_rgba(8,145,178,0.10)] md:w-[300px] md:justify-self-end">
          <p className="text-lg font-semibold text-slate-900">Atendimento real na recepção</p>
          <p className="mt-2 text-sm text-slate-600">Veja como o cliente é recebido quando chega na central da Topnet.</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-cyan-100">
            <video
              src="/videos/atendimento.mp4"
              controls
              playsInline
              className="h-[440px] w-full bg-slate-900 object-contain"
            />
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero ser atendido pela Topnet."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Quero esse atendimento
          </a>
        </article>
      </div>
    </section>
  );
}
