"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { ExperienceContentPanel } from "./ExperienceContentPanel";
import { ExperienceProgressBar } from "./ExperienceProgressBar";

const steps = [
  {
    number: "01",
    title: "Te Escuchamos",
    description:
      "Desde el primer momento, tu consulta es un espacio personal y sin prisas. Analizamos tu caso, entendemos tus deseos y resolvemos cada duda. Sin compromiso, sin presión.",
    image: "/media/experience-01-consultation.png",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 52c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M44 18c4 2 6 6 6 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="48" cy="32" r="3" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
    accentPos: "70% 30%",
  },
  {
    number: "02",
    title: "Diseñamos Tu Plan",
    description:
      "Creamos un protocolo único para ti, basado en evidencia científica y adaptado a tus necesidades, tus objetivos y tu ritmo de vida.",
    image: "/media/experience-02-plan.png",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="14" y="8" width="36" height="48" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="22" y1="20" x2="42" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="22" y1="28" x2="38" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="22" y1="36" x2="35" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="22" cy="44" r="2" fill="currentColor" opacity="0.4" />
        <path d="M26 44l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accentPos: "65% 45%",
  },
  {
    number: "03",
    title: "En Las Mejores Manos",
    description:
      "Con la tecnología más avanzada y un equipo médico titulado, tu tratamiento se realiza con precisión milimétrica en un entorno diseñado para tu confort.",
    image: "/media/experience-03-treatment.png",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 8v48M24 16l8-8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.6" />
        <path d="M14 32h6M44 32h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    accentPos: "60% 35%",
  },
  {
    number: "04",
    title: "Tu Nueva Versión",
    description:
      "No termina con el tratamiento. Te acompañamos en cada paso de tu evolución, porque tu satisfacción es nuestro mejor resultado.",
    image: "/media/experience-04-results.png",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M32 12l4 8 9 1.3-6.5 6.3 1.5 9L32 32l-8 4.6 1.5-9L19 21.3l9-1.3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 44c0 0 4 8 12 8s12-8 12-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="2 4" />
      </svg>
    ),
    accentPos: "55% 40%",
  },
];

/* ── Floating Gold Particles ── */
function GoldParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.35 + 0.08,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: "#B87355",
          }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.6, 0],
            y: [0, -50, -100, -160],
            x: [0, Math.random() * 20 - 10, Math.random() * 30 - 15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── Geometric accents & decorative SVG ── */
function GeometricAccents({ activeStep }: { activeStep: number }) {
  return (
    <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none">
      {/* Slowly rotating concentric rings — top-right */}
      <motion.div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] md:w-[550px] md:h-[550px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full opacity-[0.06]">
          <circle cx="250" cy="250" r="230" stroke="#B87355" strokeWidth="0.5" strokeDasharray="10 14" />
          <circle cx="250" cy="250" r="190" stroke="#B87355" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="150" stroke="#B87355" strokeWidth="0.3" strokeDasharray="4 10" />
        </svg>
      </motion.div>

      {/* Breathing vertical gold line — right side */}
      <motion.div
        className="absolute right-[14%] top-[8%] bottom-[8%] w-px hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(184,115,85,0.18) 30%, rgba(184,115,85,0.18) 70%, transparent 100%)",
        }}
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Step icon — right side, large ghost */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`icon-${activeStep}`}
          className="absolute right-[6%] top-1/2 -translate-y-1/2 w-28 h-28 md:w-44 md:h-44 text-accent-gold/15 hidden md:block"
          initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.3, rotate: 10 }}
          transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {steps[activeStep].icon}
        </motion.div>
      </AnimatePresence>

      {/* Subtle diagonal lines across viewport */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <line x1="900" y1="0" x2="1440" y2="600" stroke="#B87355" strokeWidth="1" />
        <line x1="1000" y1="0" x2="1440" y2="400" stroke="#B87355" strokeWidth="0.5" />
        <line x1="800" y1="900" x2="1440" y2="250" stroke="#B87355" strokeWidth="0.5" />
      </svg>

      {/* Horizontal gold rule — bottom-left accent */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] h-px w-20 md:w-32 bg-accent-gold/10 hidden md:block"
        animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ── Scroll hint that disappears ── */
function ScrollHint({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="h-1.5 w-1 rounded-full bg-accent-gold" />
          </motion.div>
          <span className="font-body text-xs text-white/50">
            Desliza para descubrir
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Noise texture overlay for grain ── */
function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [showEyebrow, setShowEyebrow] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const step = Math.min(3, Math.floor(value * 4));
    setActiveStep(step);
    setShowHint(value < 0.05);
    setShowEyebrow(value < 0.05);
  });

  // Ken Burns — gentle zoom per step
  const kenBurns0 = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);
  const kenBurns1 = useTransform(scrollYProgress, [0.25, 0.5], [1, 1.1]);
  const kenBurns2 = useTransform(scrollYProgress, [0.5, 0.75], [1, 1.1]);
  const kenBurns3 = useTransform(scrollYProgress, [0.75, 1], [1, 1.1]);
  const kenBurnsScales = [kenBurns0, kenBurns1, kenBurns2, kenBurns3];

  return (
    <section
      ref={containerRef}
      id="experiencia"
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── Layer 1: Real photos with Ken Burns ── */}
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="absolute inset-0"
            animate={{ opacity: activeStep === i ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="h-full w-full"
              style={{ scale: kenBurnsScales[i] }}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        ))}

        {/* ── Layer 2: Cinematic lateral gradient overlay ── */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `linear-gradient(to right, rgba(15,14,13,0.88) 0%, rgba(15,14,13,0.65) 28%, rgba(15,14,13,0.30) 52%, rgba(15,14,13,0.08) 75%, rgba(15,14,13,0.15) 100%)`,
          }}
        />

        {/* ── Layer 2b: Mobile stronger overlay ── */}
        <div
          className="absolute inset-0 z-[2] md:hidden"
          style={{ background: "rgba(15,14,13,0.50)" }}
        />

        {/* ── Layer 2c: Bottom gradient for depth ── */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to top, rgba(15,14,13,0.50) 0%, transparent 35%)",
          }}
        />

        {/* ── Layer 2d: Top vignette ── */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,14,13,0.25) 0%, transparent 20%)",
          }}
        />

        {/* ── Layer 3: Animated accent glow (follows step) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${activeStep}`}
            className="absolute inset-0 z-[3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            style={{
              background: `radial-gradient(ellipse 45% 45% at ${steps[activeStep].accentPos}, rgba(184,115,85,0.07) 0%, transparent 70%)`,
            }}
          />
        </AnimatePresence>

        {/* ── Layer 4: Noise texture (film grain) ── */}
        <NoiseOverlay />

        {/* ── Layer 5: Gold particles ── */}
        <GoldParticles />

        {/* ── Layer 6: Geometric decorative accents ── */}
        <GeometricAccents activeStep={activeStep} />

        {/* ── Layer 7: Content Panel ── */}
        <div className="relative z-10 h-full">
          <ExperienceContentPanel
            activeStep={activeStep}
            steps={steps}
            showEyebrow={showEyebrow}
          />
        </div>

        {/* ── Scroll Hint ── */}
        <ScrollHint visible={showHint} />

        {/* ── Progress Bar ── */}
        <ExperienceProgressBar
          progress={scrollYProgress}
          activeStep={activeStep}
        />
      </div>
    </section>
  );
}
