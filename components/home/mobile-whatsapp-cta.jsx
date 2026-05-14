export default function MobileWhatsAppCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan-200/80 bg-white/95 p-3 backdrop-blur md:hidden dark:border-cyan-900/80 dark:bg-slate-950/95">
      <a
        href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero contratar agora um plano da Topnet."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400"
      >
        Quero contratar agora
      </a>
    </div>
  );
}
