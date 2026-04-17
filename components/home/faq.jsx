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

export default function Faq() {
  return (
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
  );
}
