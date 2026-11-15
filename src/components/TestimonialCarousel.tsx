"use client";

// Testimonios de uno en uno. Se pasa con las flechas, con las marcas de
// listón, arrastrando o con las teclas ← →. El listón activo se va llenando:
// cuando termina, pasa a la cita siguiente (en pausa mientras se lee con el
// puntero encima, con el foco dentro o mientras se arrastra).
import "./nuevo/confianza.css";
import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import type { CSSProperties, FocusEvent, KeyboardEvent, PointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  stars: number;
  text: string;
  name: string;
  treatment: string;
  timeAgo: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const UMBRAL = 50;
const sinSuscripcion = () => () => {};

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [starKey, setStarKey] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [dx, setDx] = useState<number | null>(null);
  const inicio = useRef<number | null>(null);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // El reloj del pase automático solo arranca ya hidratado: así no se pierde
  // su final si la página tarda en cargar.
  const montado = useSyncExternalStore(
    sinSuscripcion,
    () => true,
    () => false
  );

  const maxIndex = Math.max(0, testimonials.length - 1);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(clamped);
      setStarKey((k) => k + 1);
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, maxIndex, goTo]);

  const prev = useCallback(() => {
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, maxIndex, goTo]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  function pauseAutoplay() {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    setPausa(true);
  }

  function resumeAutoplay() {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setPausa(false);
    }, 3000);
  }

  // Teclado: ← → con el foco en cualquier control del carrusel
  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      pauseAutoplay();
      prev();
      resumeAutoplay();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      pauseAutoplay();
      next();
      resumeAutoplay();
    }
  }

  function handleFocus(e: FocusEvent<HTMLDivElement>) {
    if (e.target.matches(":focus-visible")) pauseAutoplay();
  }

  // Arrastre
  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    inicio.current = e.clientX;
    pauseAutoplay();
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (inicio.current === null) return;
    if (e.pointerType === "mouse" && e.buttons === 0) {
      // se soltó fuera de la escena
      handlePointerEnd(e, true);
      return;
    }
    const d = e.clientX - inicio.current;
    if (dx === null && Math.abs(d) < 6) return;
    if (dx === null) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // sin captura: el arrastre sigue funcionando dentro de la escena
      }
    }
    setDx(d * 0.55);
  }

  function handlePointerEnd(e: PointerEvent<HTMLDivElement>, cancelado: boolean) {
    if (inicio.current === null) return;
    const d = e.clientX - inicio.current;
    inicio.current = null;
    setDx(null);
    if (!cancelado) {
      if (d < -UMBRAL) next();
      else if (d > UMBRAL) prev();
    }
    resumeAutoplay();
  }

  return (
    <div
      className="co__car"
      data-pausa={pausa ? "" : undefined}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") pauseAutoplay();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") resumeAutoplay();
      }}
      onFocus={handleFocus}
      onBlur={resumeAutoplay}
      onKeyDown={handleKeyDown}
    >
      {/* Carousel track */}
      <div
        className="co__car-escena"
        data-arrastre={dx !== null ? "" : undefined}
        style={{ "--dx": `${dx ?? 0}px` } as CSSProperties}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(e) => handlePointerEnd(e, false)}
        onPointerCancel={(e) => handlePointerEnd(e, true)}
      >
        {testimonials.map((t, i) => {
          const activa = i === currentIndex;
          return (
            <div
              key={i}
              className="co__car-lam"
              data-activa={activa ? "" : undefined}
              aria-hidden={!activa}
            >
              <TestimonialCard
                {...t}
                isActive={activa}
                animateStars={activa}
                key={activa ? `${i}-${starKey}` : `${i}`}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows + marks */}
      <div className="co__car-pie">
        <div className="co__car-marcas">
          {testimonials.map((_, i) => {
            const activa = i === currentIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  pauseAutoplay();
                  goTo(i);
                  resumeAutoplay();
                }}
                aria-label={`Ir al grupo de testimonios ${i + 1}`}
                aria-current={activa ? "true" : undefined}
                className="co__car-marca"
                data-activa={activa ? "" : undefined}
              >
                <span>
                  {activa && montado && <i key={starKey} onAnimationEnd={next} />}
                </span>
              </button>
            );
          })}
        </div>

        <div className="co__car-flechas">
          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              prev();
              resumeAutoplay();
            }}
            aria-label="Testimonio anterior"
            className="co__car-flecha"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              next();
              resumeAutoplay();
            }}
            aria-label="Siguiente testimonio"
            className="co__car-flecha"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
