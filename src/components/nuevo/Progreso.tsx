"use client";

// Un filete terracota arriba que crece con el avance de la página.
import { useEffect, useRef } from "react";

export function Progreso() {
  const barra = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = barra.current;
    if (!el) return;
    let marco = 0;
    const pintar = () => {
      marco = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const alMover = () => {
      if (!marco) marco = requestAnimationFrame(pintar);
    };
    pintar();
    window.addEventListener("scroll", alMover, { passive: true });
    window.addEventListener("resize", alMover);
    return () => {
      window.removeEventListener("scroll", alMover);
      window.removeEventListener("resize", alMover);
      cancelAnimationFrame(marco);
    };
  }, []);
  return (
    <div
      ref={barra}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 70,
        width: "100%",
        height: 3,
        transformOrigin: "0 50%",
        transform: "scaleX(0)",
        background: "linear-gradient(90deg, #c47a3a, #b8573c 60%, #e0694f)",
        pointerEvents: "none",
      }}
    />
  );
}
