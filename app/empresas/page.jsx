import { Building2, Clock3, Headset, Router, ShieldCheck, Workflow } from "lucide-react";
import SiteHeader from "@/components/site-header";

const corporatePlans = [
  {
    name: "Plano Corporativo Start",
    speed: "500 mega",
    price: "Sob consulta",
    features: ["IP fixo opcional", "SLA de atendimento", "Suporte técnico especializado", "Instalação profissional"],
  },
  {
    name: "Plano Corporativo Pro",
    speed: "700 mega",
    price: "Sob consulta",
    features: ["Link principal + contingência", "Monitoramento proativo", "Prioridade em chamados", "Roteador empresarial"],
    featured: true,
  },
  {
    name: "Plano Corporativo Max",
    speed: "1 giga",
    price: "Sob consulta",
    features: ["Projeto sob medida", "Suporte consultivo", "Escalabilidade para filiais", "Maior disponibilidade"],
  },
];

const corporateServices = [
  {
    title: "Internet dedicada para operação crítica",
    description: "Conectividade para caixa, ERP, câmeras, PDV e sistemas internos com alta estabilidade.",
  },
  {
    title: "Telefonia e canais digitais de atendimento",
    description: "Apoio para manter equipes conectadas no escritório, loja e operação externa.",
  },
  {
    title: "Rede interna e Wi-Fi corporativo",
    description: "Configuração e distribuição do sinal para melhor cobertura e desempenho no ambiente empresarial.",
  },
  {
    title: "Segurança e continuidade",
    description: "Apoio técnico para reduzir indisponibilidade e minimizar impacto em caso de incidentes.",
  },
];

const corporateBenefits = [
  {
    icon: Clock3,
    title: "Atendimento prioritario",
    description: "Fluxo de suporte com prioridade para clientes corporativos.",
  },
  {
    icon: Headset,
    title: "Suporte especializado",
    description: "Equipe técnica preparada para cenário empresarial e operação contínua.",
  },
  {
    icon: Router,
    title: "Infraestrutura robusta",
    description: "Topologia planejada para estabilidade e crescimento do seu negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Mais confiança",
    description: "Conectividade com foco em disponibilidade e previsibilidade operacional.",
  },
  {
    icon: Workflow,
    title: "Projeto sob medida",
    description: "Análise técnica para recomendar o melhor desenho de conectividade.",
  },
  {
    icon: Building2,
    title: "Escalável para empresas",
    description: "Solução adequada para pequenas, médias e grandes estruturas.",
  },
];

export const metadata = {
  title: "Topnet Empresas | Planos Corporativos",
  description:
    "Planos corporativos Topnet com conectividade para operações críticas, suporte especializado e serviços para empresas.",
};

export default function EmpresasPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader
        logoHref="/"
        navItems={[
          { label: "Início", href: "/" },
          { label: "Planos corporativos", href: "#planos-corporativos" },
        ]}
        cta={{
          label: "Falar com comercial",
          href: "https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero uma proposta corporativa da Topnet.",
          external: true,
        }}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.20),transparent_45%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Topnet Empresas</p>
            <h1 className="mt-3 text-4xl text-slate-900 sm:text-5xl">Conectividade corporativa para operações que não podem parar</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Planos e serviços para empresas com foco em estabilidade, suporte rápido e desempenho para sistemas críticos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#planos-corporativos"
                className="rounded-xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-500"
              >
                Ver planos corporativos
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero uma proposta corporativa da Topnet."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Para quem é indicado</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>Comércio e varejo com operação de caixa constante</li>
              <li>Escritórios e empresas com equipes conectadas</li>
              <li>Clínicas, escolas e negócios com sistemas online</li>
              <li>Empresas com necessidade de previsibilidade de rede</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="planos-corporativos" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Planos corporativos</p>
          <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Escolha o nivel ideal para sua empresa</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corporatePlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-[0_14px_35px_rgba(8,145,178,0.14)] ${
                plan.featured ? "border-cyan-500 bg-cyan-500 text-white" : "border-cyan-100 bg-white"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Mais recomendado
                </span>
              ) : null}
              <p className={`text-sm uppercase tracking-[0.14em] ${plan.featured ? "text-cyan-100" : "text-cyan-600"}`}>{plan.name}</p>
              <p className={`mt-4 text-5xl font-bold ${plan.featured ? "text-white" : "text-cyan-700"}`}>{plan.speed}</p>
              <p className={`mt-2 text-xl font-semibold ${plan.featured ? "text-cyan-100" : "text-slate-700"}`}>{plan.price}</p>
              <ul className={`mt-6 space-y-2 border-y py-5 text-sm ${plan.featured ? "border-cyan-300/40 text-cyan-50" : "border-cyan-100 text-slate-600"}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href={`https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero uma proposta do ${plan.name}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] ${
                  plan.featured ? "bg-white text-cyan-700 hover:bg-cyan-50" : "bg-cyan-600 text-white hover:bg-cyan-700"
                }`}
              >
                Solicitar proposta
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cyan-50/70">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl text-slate-900 sm:text-4xl">Serviços corporativos</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {corporateServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_8px_22px_rgba(8,145,178,0.10)]">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl text-slate-900 sm:text-4xl">Beneficios para empresas</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {corporateBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_8px_22px_rgba(8,145,178,0.10)]">
                <Icon className="h-9 w-9 text-cyan-600" />
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-slate-600">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 lg:px-10">
          <h2 className="text-3xl text-white sm:text-4xl">Precisa de proposta personalizada para sua empresa?</h2>
          <p className="max-w-2xl text-slate-300">
            Fale agora com o comercial da Topnet e receba orientação técnica para o melhor plano corporativo.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero uma proposta corporativa personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-xl bg-cyan-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Falar com comercial no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
