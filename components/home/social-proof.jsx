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

export default function SocialProof() {
  return (
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
  );
}
