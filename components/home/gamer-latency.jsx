export default function GamerLatency() {
  const gamerVideoUrl = "https://www.pexels.com/download/video/9071269/";

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-16 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 shadow-[0_30px_80px_rgba(8,145,178,0.2)]">
          <video
            src={gamerVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="absolute inset-0 h-full w-full scale-[1.14] object-cover object-[72%_17%] sm:scale-[1.12] sm:object-[70%_15%] lg:scale-[1.1] lg:object-[68%_13%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/15" />
          <div className="relative flex min-h-[360px] items-center p-6 sm:min-h-[460px] sm:p-10 lg:min-h-[560px] lg:p-14">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Desempenho para jogos</p>
              <h2 className="mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">Uma das menores latências do nordeste para jogos</h2>
              <p className="mt-4 max-w-xl text-slate-200">
                Conexão estável para partidas online, resposta rápida nos comandos e mais consistência para jogar sem
                travamentos.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5575999534296&text=Olá! Quero um plano com baixa latência para jogos."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-cyan-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Quero jogar com menor ping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
