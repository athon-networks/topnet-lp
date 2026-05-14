export default function BackToTopButton() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=5575999534296"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-40 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-[0_10px_24px_rgba(16,185,129,0.4)] transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:bottom-22 sm:right-6"
      >
        <img src="/images/logos/icone-whatsapp.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
      </a>

      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className="fixed bottom-24 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_10px_24px_rgba(8,145,178,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-600 sm:bottom-6 sm:right-6"
      >
        ↑
      </a>
    </>
  );
}
