import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

const offices = [
  "Amargosa",
  "Elísio Medrado",
  "São Miguel das Matas",
  "Itatim",
  "Laje",
  "Jaguaquara",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2f84] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-10">
        <div>
          <img src="/images/logos/topnet.png" alt="Topnet" className="h-20 w-auto" />
          <p className="mt-6 text-lg leading-relaxed text-cyan-50">
            TOPNET SERVICOS DE PROVEDOR LTDA - CNPJ: 27.449.331/0001-60
          </p>
        </div>

        <div>
          <div className="inline-flex items-center rounded-xl border border-cyan-300/25 bg-cyan-500/10 px-4 py-3">
            <img src="/images/anatel.webp" alt="Logo de licenciado Anatel" />
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
              <img src="/images/athonnetworks-white.png" alt="Athon Networks" className="h-8 w-auto rounded" />
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
  );
}
