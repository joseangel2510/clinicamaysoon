"use client";

import "./nuevo/confianza.css";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

// Pasos de la demostración al entrar en pantalla: 50 → 30 → 70 → 50
const DEMO = [
  { to: 30, duration: 400 },
  { to: 70, duration: 500 },
  { to: 50, duration: 400 },
];
const suave = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedDemo = useRef(false);
  const tocado = useRef(false);

  // Demo swipe animation on first viewport entry
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let espera: ReturnType<typeof setTimeout> | undefined;

    const reproducir = () => {
      let paso = 0;
      let desde = 50;
      let t0 = 0;
      const tic = (ahora: number) => {
        if (tocado.current) return;
        if (!t0) t0 = ahora;
        const { to, duration } = DEMO[paso];
        const p = Math.min(1, (ahora - t0) / duration);
        setPosition(desde + (to - desde) * suave(p));
        if (p >= 1) {
          paso += 1;
          if (paso >= DEMO.length) return;
          desde = to;
          t0 = ahora + 50;
        }
        raf = requestAnimationFrame(tic);
      };
      raf = requestAnimationFrame(tic);
    };

    const io = new IntersectionObserver(
      (entradas) => {
        if (!entradas.some((e) => e.isIntersecting) || hasPlayedDemo.current) return;
        hasPlayedDemo.current = true;
        io.disconnect();
        espera = setTimeout(reproducir, 900);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (espera) clearTimeout(espera);
      cancelAnimationFrame(raf);
    };
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, pct)));
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      tocado.current = true;
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePosition(e.clientX);
    };
    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  const handleTouchStart = useCallback(() => {
    tocado.current = true;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <div className="co__sl" data-ap>
      {/* Slider container */}
      <div
        ref={containerRef}
        className="co__sl-marco"
        data-arrastre={isDragging ? "" : undefined}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
        onTouchCancel={() => setIsDragging(false)}
      >
        {/* After image (base layer) */}
        <Image
          src={afterImage}
          alt="Después del tratamiento"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          draggable={false}
        />

        {/* Before image (clipped overlay) */}
        <div
          className="co__sl-antes"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Antes del tratamiento"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="co__sl-eti co__sl-eti--antes">Antes</span>
        <span className="co__sl-eti co__sl-eti--despues">Después</span>

        {/* Drag handle: listón vertical con empuñadura redonda */}
        <div className="co__sl-tirador" style={{ left: `${position}%` }}>
          <span className="co__sl-liston" />
          <span className="co__sl-puno">
            <ChevronLeft size={15} strokeWidth={1.5} />
            <ChevronRight size={15} strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Treatment info below slider */}
      <div className="co__sl-pie">
        <h3 className="co__sl-tit">{title}</h3>
        <p className="co__sl-desc">{description}</p>
      </div>
    </div>
  );
}
