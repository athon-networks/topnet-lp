import {
  Gamepad2,
  Headset,
  Home,
  MessageCircle,
  Phone,
  Router,
  ShieldCheck,
  Smartphone,
  Tv,
  Wifi,
} from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Fibra residencial",
    description: "Internet estável para streaming, estudos, trabalho remoto e chamadas de vídeo.",
  },
  {
    icon: Router,
    title: "Wi-Fi de alta performance",
    description: "Cobertura interna com roteador incluso nos planos elegíveis.",
  },
  {
    icon: Smartphone,
    title: "Atendimento digital",
    description: "Suporte rápido via WhatsApp para dúvidas, instalação e suporte técnico.",
  },
  {
    icon: Tv,
    title: "Qualidade para TV e streaming",
    description: "Conexão preparada para sua família assistir com estabilidade e sem travar.",
  },
  {
    icon: ShieldCheck,
    title: "Navegação mais segura",
    description: "Infraestrutura monitorada para mais confiança no uso diário da internet.",
  },
  {
    icon: Home,
    title: "Instalação completa",
    description: "Equipe local para instalar e ativar seu plano com rapidez e qualidade.",
  },
  {
    icon: Headset,
    title: "Suporte especializado",
    description: "Time técnico próximo para resolver ocorrências com agilidade.",
  },
  {
    icon: MessageCircle,
    title: "Canal direto com a Topnet",
    description: "Fale com a nossa equipe sem burocracia e receba atendimento humano.",
  },
  {
    icon: Gamepad2,
    title: "Baixa latência para jogos",
    description: "Mais estabilidade para partidas online e melhor experiência no dia a dia.",
  },
  {
    icon: Phone,
    title: "Central de relacionamento",
    description: "Atendimento comercial e técnico para clientes residenciais e empresariais.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-cyan-50/70 rounded-b-[70px]">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-3xl text-slate-900 sm:text-4xl">
            Viva mais conexão com os serviços da <span className="text-cyan-300">Topnet</span>
          </h2>
          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero conhecer os produtos e serviços da Topnet."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.1em] text-cyan-700 transition hover:text-cyan-900"
          >
            Conhecer produtos e serviços &gt;
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_8px_22px_rgba(8,145,178,0.10)] transition hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(8,145,178,0.16)]"
              >
                <Icon className="h-10 w-10 text-cyan-600" />
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
