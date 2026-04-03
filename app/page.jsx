import {
  Facebook,
  Gamepad2,
  Headset,
  Home,
  Instagram,
  MessageCircle,
  Phone,
  Router,
  ShieldCheck,
  Smartphone,
  Star,
  Tv,
  Wifi,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

const stats = [
  { value: "7", label: "Cidades atendidas" },
  { value: "+70", label: "Povoados atendidos" },
  { value: "100%", label: "Fibra óptica" },
  { value: "24/7", label: "Suporte" },
];

const statPhotos = [
  "/images/external/stats-cidades-atendidas.jpg",
  "/images/external/stats-povoados-atendidos.jpg",
  "/images/external/stats-fibra-optica.jpg",
  "/images/external/stats-suporte-24-7.jpg",
];

const svaLogos = [
  { name: "SVA 1", src: "/logos/deezer.png" },
  { name: "SVA 2", src: "/logos/cdn.png" },
  { name: "SVA 3", src: "/logos/hbo.png" },
  { name: "SVA 4", src: "/logos/sky.png" },
  { name: "SVA 5", src: "/logos/looke.png" },
  { name: "SVA 6", src: "/logos/exitlag.png" },
  { name: "SVA 7", src: "/logos/disney.png" },
  { name: "SVA 8", src: "/logos/prime.png" },
];
const svasTicker = [...svaLogos, ...svaLogos];

const offices = [
  "Amargosa",
  "Elísio Medrado",
  "São Miguel das Matas",
  "Itatim",
  "Laje",
  "Jaguaquara",
];

const plans = [
  {
    speed: "100",
    area: "Cidade",
    price: "R$59,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado"],
  },
  {
    speed: "200",
    area: "Cidade",
    price: "R$69,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
  {
    speed: "400",
    area: "Cidade / Rural fibra",
    price: "R$79,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
    featured: true,
  },
  {
    speed: "500",
    area: "Cidade / Rural fibra",
    price: "R$99,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
  {
    speed: "600",
    area: "Cidade / Rural fibra",
    price: "R$119,99",
    features: ["Instalação completa", "Suporte especializado", "Acesso ilimitado", "Roteador incluso"],
  },
];

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

const socialNumbers = [
  { value: "7 cidades", label: "Cobertura urbana ativa" },
  { value: "+70 povoados", label: "Presença regional consolidada" },
  { value: "24/7", label: "Canal de suporte e atendimento" },
  { value: "100% fibra", label: "Infraestrutura principal da operação" },
];

const testimonials = [
  {
    quote:
      "A internet ficou muito mais estável aqui em casa. Trabalho remoto e chamadas de vídeo sem dor de cabeça.",
    author: "Cliente residencial",
    city: "Amargosa",
  },
  {
    quote:
      "Quando precisamos de suporte, o retorno foi rápido e objetivo. Resolveu sem enrolação.",
    author: "Cliente residencial",
    city: "São Miguel das Matas",
  },
  {
    quote:
      "Com a Topnet a loja ficou com conexão constante no caixa, maquininhas e câmeras. Melhorou muito a rotina.",
    author: "Cliente empresarial",
    city: "Jaguaquara",
  },
];

const objectionFaq = [
  {
    question: "Tem fidelidade nos planos?",
    answer:
      "Consulte as condições comerciais no atendimento. Nosso time informa com clareza prazo de permanência, promoção e regras antes da contratação.",
  },
  {
    question: "Como funciona a instalação?",
    answer:
      "A equipe técnica agenda a visita, faz a instalação completa e testa a conexão no local antes de finalizar o atendimento.",
  },
  {
    question: "Qual o prazo para instalar?",
    answer:
      "O prazo varia por região e disponibilidade técnica. No WhatsApp você recebe a previsão atualizada para seu endereço.",
  },
  {
    question: "Como é o suporte quando cai a internet?",
    answer:
      "Você pode chamar pelo WhatsApp ou telefone. Abrimos o chamado e acompanhamos até a normalização da conexão.",
  },
  {
    question: "O roteador está incluso?",
    answer:
      "Alguns planos incluem roteador. Essa informação aparece na oferta e também é confirmada no momento da contratação.",
  },
  {
    question: "Posso pagar no boleto e no cartão?",
    answer:
      "Sim. As formas de pagamento disponíveis são apresentadas no fechamento do plano para você escolher a melhor opção.",
  },
];

export const metadata = {
  title: "Topnet | A melhor fibra óptica da cidade",
  description:
    "Internet fibra óptica para residências e empresas. Atendimento regional, estabilidade e suporte rápido.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader
        logoHref="#inicio"
        logoClassName="h-15 w-auto"
        navItems={[
          { label: "Início", href: "#inicio" },
          { label: "Planos", href: "#planos" },
          { label: "Serviços", href: "#servicos" },
          { label: "Sobre", href: "#sobre" },
          { label: "Cobertura", href: "#cobertura" },
          { label: "Contato", href: "#contato" },
          {
            label: "Central do Assinante",
            href: "https://ixc.topoficial.com.br/central_assinante_web/login",
            external: true,
            variant: "outline",
          },
          {
            label: "Empresas",
            href: "/empresas",
            variant: "outline",
            icon: "building",
          },
        ]}
        cta={{
          label: "WhatsApp",
          href: "https://api.whatsapp.com/send/?phone=5575999534296",
          external: true,
        }}
      />

      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.22),transparent_45%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">Topnet</p>
            <h1 className="font-uxum mb-6 text-4xl leading-tight text-slate-900 sm:text-5xl">
              Internet fibra óptica para quem precisa de <span className="text-cyan-400">estabilidade</span> de verdade.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-slate-600">
              Planos para residências e empresas com atendimento próximo, velocidade consistente e equipe técnica pronta para ajudar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5575999534296"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Falar com atendimento
              </a>
              <a href="#cobertura" className="rounded-xl border border-cyan-200 px-6 py-3 text-sm font-semibold text-cyan-700 transition hover:border-cyan-500">
                Ver cobertura
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-100/70 blur-2xl" />
            <img
              src="/images/external/hero-home-atendimento.jpg"
              alt="Atendimento e tecnologia de internet"
              className="relative h-full min-h-[330px] w-full rounded-3xl border border-cyan-100 object-cover shadow-[0_24px_60px_rgba(8,145,178,0.18)]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-cyan-50/60">
        <div className="w-full py-10">
          <div className="mb-6 px-4 text-center sm:px-6 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">SVAs inclusos</p>
            <h2 className="mt-2 text-2xl text-slate-900 sm:text-3xl">Serviços que você encontra com a <span className="text-cyan-400">Topnet</span></h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-white/70 py-4">
            <div className="flex w-max items-center gap-4 svas-marquee">
              {svasTicker.map((logo, index) => (
                <article
                  key={`${logo.name}-${index}`}
                  className="flex h-16 min-w-[170px] items-center justify-center rounded-xl border border-cyan-100 bg-white px-4 text-center"
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
      </section>

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

      <section id="prova-social" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Prova social</p>
            <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Resultados e feedback de quem já é cliente</h2>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero falar sobre os serviços da Topnet."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.1em] text-cyan-700 transition hover:text-cyan-900"
          >
            Falar com a Topnet &gt;
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialNumbers.map((item) => (
            <article key={item.label} className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
              <p className="text-3xl font-bold text-cyan-700">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={`${item.author}-${item.city}`} className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_8px_22px_rgba(8,145,178,0.10)]">
              <div className="mb-4 flex items-center gap-1 text-cyan-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{item.author}</p>
              <p className="text-sm text-slate-500">{item.city}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="planos" className="relative overflow-hidden">
        <img
          src="/images/external/planos-secao-fundo.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Planos de internet</p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">Escolha o plano ideal para sua casa</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100">
            Todos os planos com fibra óptica, instalação completa e suporte especializado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.speed}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-[0_14px_35px_rgba(8,145,178,0.14)] transition hover:-translate-y-1 ${
                plan.featured
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-cyan-100 bg-white text-slate-900"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Mais popular
                </span>
              ) : null}

              {plan.featured ? (
                <>
                  <img
                    src="/images/external/planos-destaque-400.jpg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full rounded-3xl object-cover opacity-40"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-cyan-900/35" />
                </>
              ) : null}

              <div className="relative z-10 text-center">
                <p className={`text-6xl font-bold leading-none ${plan.featured ? "text-white" : "text-cyan-300"}`}>{plan.speed}</p>
                <p className={`mt-1 text-3xl font-bold ${plan.featured ? "text-cyan-100" : "text-cyan-300"}`}>mega</p>
                <p className={`mt-2 text-lg font-semibold ${plan.featured ? "text-cyan-100" : "text-slate-700"}`}>{plan.area}</p>
              </div>

              <ul className={`relative z-10 mt-8 space-y-2 border-y py-5 text-sm ${plan.featured ? "border-cyan-300/40 text-cyan-50" : "border-cyan-100 text-slate-600"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="text-center">{feature}</li>
                ))}
              </ul>

              <p className={`relative z-10 mt-8 text-center text-5xl font-bold ${plan.featured ? "text-white" : "text-cyan-300"}`}>{plan.price}</p>

              <a
                href={`https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero assinar o plano de ${plan.speed} mega por ${plan.price}.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] transition ${
                  plan.featured
                    ? "bg-white text-cyan-700 hover:bg-cyan-50"
                    : "bg-cyan-400 text-white hover:bg-cyan-300"
                }`}
              >
                Assine já
              </a>
            </article>
          ))}

          <article className="flex flex-col rounded-3xl border border-cyan-200 bg-cyan-50 p-7 shadow-[0_14px_35px_rgba(8,145,178,0.10)]">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Ajuda para escolher</p>
            <h3 className="mt-3 text-3xl leading-tight text-slate-900">Não sabe qual plano escolher?</h3>
            <p className="mt-4 text-lg text-slate-600">
              Nosso time analisa seu endereço e indica o melhor plano para sua casa ou empresa.
            </p>

            <div className="mt-auto space-y-3 pt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Preciso de ajuda para escolher o melhor plano para meu endereço."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-white transition hover:bg-cyan-700"
              >
                Falar no WhatsApp
              </a>
              <a
                href="#cobertura"
                className="inline-flex w-full items-center justify-center rounded-full border border-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-cyan-700 transition hover:border-cyan-500 hover:text-cyan-800"
              >
                Ver cobertura da minha rua
              </a>
            </div>
          </article>
        </div>

        </div>
      </section>

      <section className="hidden py-14 sm:block">
        <img
          src="/arte.png"
          alt="Arte promocional Topnet"
          className="mx-auto w-[70%] rounded-2xl border border-cyan-100 shadow-[0_14px_35px_rgba(8,145,178,0.12)]"
        />
      </section>

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
            {svaLogos.map((logo) => (
              <article
                key={`stack-${logo.name}`}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-cyan-500/30 bg-white px-4"
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

      <section id="faq" className="bg-cyan-50/60">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">FAQ de objeções</p>
            <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Perguntas frequentes antes de contratar</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {objectionFaq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-cyan-100 bg-white p-5 open:shadow-[0_10px_22px_rgba(8,145,178,0.08)]">
                <summary className="cursor-pointer text-lg font-semibold text-slate-900">{item.question}</summary>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0a2f84] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-10">
          <div>
            <img src="/logos/topnet.png" alt="Topnet" className="h-20 w-auto" />
            <p className="mt-6 text-lg leading-relaxed text-cyan-50">
              TOPNET SERVICOS DE PROVEDOR LTDA - CNPJ: 27.449.331/0001-60
            </p>
          </div>

          <div>
            <div className="inline-flex items-center rounded-xl border border-cyan-300/25 bg-cyan-500/10 px-4 py-3">
              <img src="/anatel.webp" alt="Logo de licenciado Anatel" />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-cyan-50">
              Empresa autorizada pela Anatel para explorar o serviço de Comunicação Multimídia em todo território nacional. Ato 4092 de 04/07/2019
            </p>
          </div>

          <div>
            <p className="text-base font-semibold uppercase tracking-[0.14em] text-cyan-300">Nossos escritórios:</p>
            <ul className="mt-4 space-y-3 text-2xl text-cyan-50">
              {offices.map((office) => (
                <li key={office}>{office}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold text-white">Entre em contato:</p>
            <p className="mt-4 flex items-center gap-2 text-[26px] font-semibold">
              <Phone className="h-5 w-5 text-cyan-200" />
              75 3634-1825
            </p>
            <p className="mt-6 text-xl font-semibold">Ou Fale Conosco no WhatsApp</p>
            <p className="mt-5 flex items-center gap-2 text-[24px] font-semibold text-cyan-100">
              <MessageCircle className="h-5 w-5" />
              (75) 99953-4296
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5575999534296"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-lg bg-[#2e6bff] px-8 py-3 text-lg font-semibold text-white transition hover:bg-[#3d79ff]"
            >
              Fale Agora
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-300/25">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:px-10">
            <div className="text-center lg:text-left">
              <p className="text-lg text-cyan-50">© {new Date().getFullYear()} Topnet - Todos os direitos reservados.</p>
              <p className="mt-1 text-sm text-cyan-100">
                Desenvolvido por{" "}
                <a
                  href="https://athon-networks.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white underline decoration-cyan-300/60 underline-offset-2 transition hover:text-cyan-200"
                >
                  Athon Networks
                </a>
              </p>
              <a
                href="https://athon-networks.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-3 rounded-xl border border-cyan-300/35 bg-cyan-500/10 px-3 py-2 transition hover:bg-cyan-500/15"
              >
                <img src="/athon-networks.avif" alt="Athon Networks" className="h-8 w-auto rounded" />
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan-100">
                  Esta empresa tem a consultoria da Athon Networks
                </span>
              </a>
            </div>
            <div className="flex items-center gap-5 text-cyan-50">
              <a href="https://www.facebook.com/61554419318757" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/topnet.provedor.de.internet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.threads.com/@topnet.provedor.de.internet" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                <span className="text-sm font-bold">@</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5575999534296" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_10px_24px_rgba(8,145,178,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-600"
      >
        ↑
      </a>
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
    </main>
  );
}
