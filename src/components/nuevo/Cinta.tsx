"use client";

// Cinta de palabras: dos filas gigantes que el scroll empuja en sentidos
// contrarios. Una palabra en sans, la siguiente en la cursiva serif.
import "./cinta.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { alListo, sinMovimiento } from "@/lib/mov";

const filas = [
  ["Medicina Estética", "Láser", "Unidad Capilar", "Aparatología", "Cirugías Menores", "Bienestar"],
  ["Estética", "Masajes", "Valencia", "Formaciones", "Trato Cercano", "Tecnología"],
];

export function Cinta() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const st = { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 };
        gsap.fromTo(".cinta__fila--0", { xPercent: 0 }, { xPercent: -28, ease: "none", scrollTrigger: st });
        gsap.fromTo(".cinta__fila--1", { xPercent: -36 }, { xPercent: -8, ease: "none", scrollTrigger: st });
      }, el);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={raiz} className="cinta" aria-hidden="true" data-propio>
      {filas.map((f, n) => (
        <div key={n} className={`cinta__fila cinta__fila--${n}`}>
          {[...f, ...f, ...f].map((p, i) => (
            <span key={i} className={i % 2 ? "serif" : ""}>
              {p}
              <i />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
