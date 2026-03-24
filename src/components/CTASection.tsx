"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function GoldenParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      wobble: number;
      wobbleSpeed: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 18; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1.5 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.5,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.005 + Math.random() * 0.01,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y -= p.speed;
        p.wobble += p.wobbleSpeed;
        const wx = Math.sin(p.wobble) * 30;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x + wx, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 162, 101, ${p.opacity})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}

function PulsingRipple() {
  return (
    <span className="absolute inset-0 rounded-full pointer-events-none" aria-hidden="true">
      <span className="absolute inset-0 rounded-full animate-[cta-ripple_3s_ease-out_infinite] bg-accent-gold/40" />
    </span>
  );
}

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "500px", height: "70vh" }}
      id="cta"
    >
      {/* Top gradient transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 h-[60px] z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--color-bg-primary), transparent)",
        }}
      />

      {/* Background image with Ken Burns (falls back to gradient if image missing) */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('/images/cta-background.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#2A2420",
          }}
        />
        {/* Warm gradient fallback layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(196,162,101,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(212,184,122,0.1) 0%, transparent 50%), linear-gradient(135deg, #2A2420 0%, #1A1614 50%, #2A2420 100%)",
          }}
        />
      </div>

      {/* Multi-layer overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            rgba(26,22,20,0.55),
            linear-gradient(to top, rgba(26,22,20,0.7) 0%, rgba(26,22,20,0.3) 100%)
          `.replace(/\n/g, ""),
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to top, rgba(26,22,20,0.7) 0%, rgba(26,22,20,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(26,22,20,0.5)" }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "rgba(196,162,101,0.05)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(26,22,20,0.4) 100%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <GoldenParticles />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-[3] flex flex-col items-center justify-center h-full text-center px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            className="font-body text-xs uppercase tracking-[0.4em] text-accent-gold mb-6"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
              },
            }}
          >
            Da el Primer Paso
          </motion.p>

          {/* Title */}
          <motion.h2
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              lineHeight: 1.1,
            }}
            variants={{
              hidden: { clipPath: "inset(0 100% 0 0)" },
              visible: {
                clipPath: "inset(0 0% 0 0)",
                transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 },
              },
            }}
          >
            <span className="text-text-light block">Tu Mejor Versión</span>
            <span className="text-accent-gold italic block mt-1">Te Está Esperando</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg leading-[1.8] max-w-xl mx-auto mb-10"
            style={{ color: "rgba(250,247,242,0.8)" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 },
              },
            }}
          >
            Reserva tu consulta gratuita y sin compromiso. Analizamos tu caso, resolvemos
            tus dudas y diseñamos el plan perfecto para ti.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.7 },
              },
            }}
          >
            {/* Primary CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center bg-accent-gold text-bg-dark font-semibold text-lg rounded-full px-10 py-4 transition-all duration-300 hover:bg-accent-gold-light hover:scale-105 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              style={{
                boxShadow: "0 4px 20px rgba(196,162,101,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px rgba(196,162,101,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(196,162,101,0.3)";
              }}
            >
              Reserva tu Consulta
              <PulsingRipple />
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 bg-transparent text-text-light font-medium text-base rounded-full px-8 py-4 transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-103 active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </motion.div>

          {/* Phone */}
          <motion.p
            className="mt-8 font-body text-sm"
            style={{ color: "rgba(250,247,242,0.5)" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, delay: 1.0 },
              },
            }}
          >
            O llámanos:{" "}
            <a
              href="tel:+34963201133"
              className="transition-colors duration-300 hover:text-text-light/80 hover:underline"
              style={{ color: "rgba(250,247,242,0.5)" }}
            >
              +34 963 20 11 33
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
