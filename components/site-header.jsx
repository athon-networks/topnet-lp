"use client";

import { useEffect, useState } from "react";
import { Building2, Menu, Moon, Sun, X } from "lucide-react";
import { applyTheme, getPreferredTheme, toggleTheme } from "@/lib/theme";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100/90 bg-white/95 backdrop-blur dark:border-cyan-900/80 dark:bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href="/#inicio" className="flex items-center gap-3 mr-5" onClick={() => setIsOpen(false)}>
          <img src="/images/logos/topnet.png" alt="Topnet" className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <a href="/#inicio" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Início</a>
          <a href="/#planos" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Planos</a>
          <a href="/#servicos" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Serviços</a>
          <a href="/#sobre" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Sobre</a>
          <a href="/#cobertura" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Cobertura</a>
          <a href="/#contato" className="transition hover:text-cyan-700 dark:hover:text-cyan-300">Contato</a>
          <a
            href="https://ixc.topoficial.com.br/central_assinante_web/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-2 font-semibold text-white transition hover:bg-emerald-400"
          >
            Central do Assinante
          </a>
          <a
            href="/empresas"
            className="inline-flex items-center gap-1 rounded-full border border-cyan-200 px-3 py-1 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-cyan-800 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
          >
            <span>Empresas</span>
            <Building2 className="h-4 w-4" />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            title={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            className="inline-flex items-center justify-center rounded-xl border border-cyan-200 p-2 text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-50 dark:border-cyan-800 dark:text-cyan-300 dark:hover:border-cyan-500 dark:hover:bg-slate-900"
            onClick={() => {
              const nextTheme = toggleTheme();
              setTheme(nextTheme);
            }}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="https://api.whatsapp.com/send/?phone=5575999534296"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 md:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex items-center justify-center rounded-xl border border-cyan-200 p-2 text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-50 dark:border-cyan-800 dark:text-cyan-300 dark:hover:border-cyan-500 dark:hover:bg-slate-900 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-cyan-100 bg-white dark:border-cyan-900 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5575999534296"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp
            </a>
            <a href="/#inicio" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Início</a>
            <a href="/#planos" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Planos</a>
            <a href="/#servicos" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="/#sobre" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="/#cobertura" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Cobertura</a>
            <a href="/#contato" className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300" onClick={() => setIsOpen(false)}>Contato</a>
            <a
              href="https://ixc.topoficial.com.br/central_assinante_web/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
              onClick={() => setIsOpen(false)}
            >
              Central do Assinante
            </a>
            <a
              href="/empresas"
              className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              <span>Empresas</span>
              <Building2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
