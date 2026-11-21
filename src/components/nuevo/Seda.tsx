"use client";

// Lienzo fijo de la seda, detrás de toda la portada. three.js se carga aparte para no pesar en el primer JS.
// Si no hay WebGL, queda una banda de color en CSS (clase sin-seda) y la portada funciona igual.
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MotorSeda } from "@/lib/seda";
import { alListo, sinMovimiento } from "@/lib/mov";
import "./hero-seda.css";

declare global {
  interface Window {
    __seda?: MotorSeda;
  }
}

export function Seda() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let motor: MotorSeda | undefined;
    let vivo = true;
    let cancelar = () => {};
    const html = document.documentElement;
    const bucle = (_t: number, delta: number) => {
      motor?.cuadro(delta / 1000);
    };
    const medir = () => motor?.medir();

    import("@/lib/seda")
      .then(async ({ MotorSeda }) => {
        if (!vivo || !ref.current) return;
        motor = new MotorSeda(ref.current);
        await motor.compilar();
        if (!vivo) return motor.destruir();
        window.__seda = motor;
        const qa = new URLSearchParams(location.search).has("qa");
        if (sinMovimiento() || qa) {
          motor.quieto = sinMovimiento();
          motor.snap = qa;
          motor.entrada = 1;
        } else {
          const m = motor;
          cancelar = alListo(() => gsap.to(m, { entrada: 1, duration: 2.4, ease: "power3.out", delay: 0.1 }));
        }
        gsap.ticker.add(bucle);
        ScrollTrigger.addEventListener("refresh", medir);
        html.classList.add("con-seda-3d");
      })
      .catch(() => html.classList.add("sin-seda"));

    return () => {
      vivo = false;
      cancelar();
      gsap.ticker.remove(bucle);
      ScrollTrigger.removeEventListener("refresh", medir);
      motor?.destruir();
      window.__seda = undefined;
      html.classList.remove("con-seda-3d", "sin-seda");
    };
  }, []);

  return <canvas ref={ref} className="seda-lienzo" aria-hidden="true" />;
}
