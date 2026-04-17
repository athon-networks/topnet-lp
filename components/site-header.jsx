"use client";

import { useEffect, useState } from "react";
import { Building2, Menu, Moon, Sun, X } from "lucide-react";
import { applyTheme, getPreferredTheme, toggleTheme } from "@/lib/theme";

function HeaderLink({ item, className, onClick }) {
  const isExternal = item.external ?? false;
  const icon = item.icon === "building" ? <Building2 className="h-4 w-4" /> : null;

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      <span>{item.label}</span>
      {icon}
    </a>
  );
}

export default function SiteHeader({
  logoHref,
  logoClassName = "h-14 w-auto",
  navItems = [],
  cta,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100/90 bg-white/95 backdrop-blur dark:border-cyan-900/80 dark:bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href={logoHref} className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img src="/images/logos/topnet.png" alt="Topnet" className={logoClassName} />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <HeaderLink
              key={`${item.label}-${item.href}`}
              item={item}
              className={
                item.variant === "outline"
                  ? "inline-flex items-center gap-1 rounded-full border border-cyan-200 px-3 py-1 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-cyan-800 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
                  : "transition hover:text-cyan-700 dark:hover:text-cyan-300"
              }
            />
          ))}
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

          {cta ? (
            <a
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 md:inline-flex"
            >
              {cta.label}
            </a>
          ) : null}

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
            {cta ? (
              <a
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="rounded-xl bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
                onClick={() => setIsOpen(false)}
              >
                {cta.label}
              </a>
            ) : null}

            {navItems.map((item) => (
              <HeaderLink
                key={`mobile-${item.label}-${item.href}`}
                item={item}
                className="inline-flex items-center justify-between rounded-xl border border-cyan-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-cyan-900 dark:text-slate-200 dark:hover:border-cyan-700 dark:hover:bg-slate-900 dark:hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
