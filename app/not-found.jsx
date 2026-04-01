export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Erro 404</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Pagina nao encontrada</h1>
        <a href="/" className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">
          Voltar para inicio
        </a>
      </div>
    </main>
  );
}
