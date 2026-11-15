"use client";

// Cifra con rótulo. El valor real va en el HTML del servidor; al entrar en
// pantalla cuenta desde cero hasta él (si no se ha pedido reducir movimiento).
import "./nuevo/nosotros.css";
import { useState, useEffect, useRef } from "react";
import { sinMovimiento } from "@/lib/mov";

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || sinMovimiento() || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const startTime = performance.now();

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(progress < 1 ? parseFloat((eased * end).toFixed(decimals)) : end);

          if (progress < 1) {
            raf = requestAnimationFrame(animate);
          }
        };

        raf = requestAnimationFrame(animate);
      },
      { threshold: 0.5 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration, decimals]);

  return { count, ref };
}

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
  decimals = 0,
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration, decimals);

  // La última palabra del rótulo va en cursiva serif
  const corte = label.lastIndexOf(" ");
  const inicio = corte > 0 ? label.slice(0, corte) : "";
  const fin = corte > 0 ? label.slice(corte + 1) : label;

  return (
    <div ref={ref} className="no__cifra" data-ap>
      <dt className="no__cifra-rotulo">
        {inicio ? `${inicio} ` : null}
        <em className="serif">{fin}</em>
      </dt>
      <dd className="no__cifra-valor">
        {prefix ? <sup>{prefix}</sup> : null}
        <span>{decimals > 0 ? count.toFixed(decimals) : count}</span>
        {suffix ? <sup>{suffix}</sup> : null}
      </dd>
    </div>
  );
}
