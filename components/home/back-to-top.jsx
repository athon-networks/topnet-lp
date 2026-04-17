export default function BackToTopButton() {
  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_10px_24px_rgba(8,145,178,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-600"
    >
      ↑
    </a>
  );
}
