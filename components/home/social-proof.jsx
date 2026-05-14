import { Star } from "lucide-react";

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
    initials: "CR",
    featured: true,
  },
  {
    quote:
      "Quando precisamos de suporte, o retorno foi rápido e objetivo. Resolveu sem enrolação.",
    author: "Cliente residencial",
    city: "São Miguel das Matas",
    initials: "CR",
  },
  {
    quote:
      "Com a Topnet a loja ficou com conexão constante no caixa, maquininhas e câmeras. Melhorou muito a rotina.",
    author: "Cliente empresarial",
    city: "Jaguaquara",
    initials: "CE",
  },
  {
    quote:
      "Aqui no bairro a estabilidade melhorou demais. Streaming, jogos e trabalho funcionam sem queda durante o dia.",
    author: "Cliente residencial",
    city: "Feira de Santana",
    initials: "CR",
  },
];

export default function SocialProof() {
  return (
    <section id="prova-social" className="mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-5 sm:py-16 lg:px-6 lg:py-20">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Prova social</p>
          <h2 className="mt-3 text-3xl text-slate-900 sm:text-4xl">Quem usa Topnet recomenda</h2>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero falar sobre os serviços da Topnet."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-cyan-200 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-cyan-700 transition hover:border-cyan-400 hover:bg-cyan-50"
        >
          Falar com a Topnet
        </a>
      </div>

      <div className="mt-6 grid items-start gap-6 sm:mt-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-3xl border border-cyan-100">
          <img src="/images/happy-client.jpg" alt="Cliente satisfeito com a internet Topnet" className="h-full w-full object-cover" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 sm:gap-5">
          {testimonials.map((item, index) => (
            <article
              key={`${item.author}-${item.city}`}
              className={`rounded-2xl border bg-white p-6 shadow-[0_10px_28px_rgba(8,145,178,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(8,145,178,0.16)] ${
                item.featured ? "border-cyan-300" : "border-cyan-100"
              }`}
              style={{ animation: `fade-up 480ms ease-out ${120 + index * 120}ms both` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-cyan-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">
                  {item.initials}
                </div>
              </div>

              <p className="text-slate-700">“{item.quote}”</p>

              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-900">{item.author}</p>
                <div className="mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{item.city}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
