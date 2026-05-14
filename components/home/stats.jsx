"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Building2, Headset, MapPinned, Wifi } from "lucide-react";

const stats = [
  { value: 7, suffix: "", label: "Cidades atendidas", icon: MapPinned },
  { value: 70, suffix: "+", label: "Povoados atendidos", icon: Building2 },
  { value: 100, suffix: "%", label: "Fibra óptica", icon: Wifi },
  { value: 24, suffix: "/7", label: "Suporte", icon: Headset },
];

function AnimatedNumber({ target, suffix = "", start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sectionClass = useMemo(
    () =>
      "mx-auto w-full max-w-[1600px] px-4 py-14 sm:px-5 sm:py-16 lg:px-6 lg:py-20",
    [],
  );

  return (
    <section ref={sectionRef} className={sectionClass}>
      <div className="mb-8 sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">Nossos números</p>
        <h2 className="mt-3 text-3xl text-slate-900 dark:text-slate-100 sm:text-4xl">Presença forte na região e suporte ativo</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="group rounded-3xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/40 to-white p-6 shadow-[0_12px_30px_rgba(2,132,199,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.16)] dark:border-cyan-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:shadow-[0_12px_30px_rgba(2,12,27,0.35)] dark:hover:border-cyan-600 dark:hover:shadow-[0_20px_50px_rgba(2,12,27,0.45)]"
              style={{ animation: start ? `card-in 500ms ease-out ${index * 100}ms both` : undefined }}
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200 bg-white text-cyan-700 dark:border-cyan-700 dark:bg-slate-950 dark:text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-5xl font-bold leading-none text-cyan-500 dark:text-cyan-300">
                <AnimatedNumber target={item.value} suffix={item.suffix} start={start} />
              </p>
              <p className="mt-3 text-base font-semibold text-slate-700 dark:text-slate-200">{item.label}</p>
            </article>
          );
        })}
      </div>

      <style>{`
        @keyframes card-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
