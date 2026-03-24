"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const spring = { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const };

export function ExperienceContentPanel({
  activeStep,
  steps,
  showEyebrow,
}: {
  activeStep: number;
  steps: Step[];
  showEyebrow: boolean;
}) {
  const step = steps[activeStep];

  return (
    <div className="absolute inset-y-0 left-0 z-10 flex w-full flex-col justify-center px-6 md:w-[48%] md:pl-16 md:pr-8">
      {/* Eyebrow — fades out after first scroll */}
      <AnimatePresence>
        {showEyebrow && (
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <motion.span
              className="block h-px bg-accent-gold"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className="font-body text-xs uppercase tracking-[0.35em] text-accent-gold">
              Tu Experiencia
            </span>
            <motion.span
              className="block h-px bg-accent-gold"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress dots — with animated connector lines */}
      <div className="mb-10 flex items-center gap-2">
        {steps.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              className="relative rounded-full"
              animate={{
                width: activeStep === i ? 12 : 8,
                height: activeStep === i ? 12 : 8,
                backgroundColor:
                  activeStep === i ? "#C4A265" : "rgba(250,247,242,0.25)",
                boxShadow:
                  activeStep === i
                    ? "0 0 16px rgba(196,162,101,0.5), 0 0 32px rgba(196,162,101,0.2)"
                    : "none",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {i < steps.length - 1 && (
              <div className="relative h-px w-6 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent-gold"
                  animate={{
                    width: activeStep > i ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        ))}
        {/* Step counter */}
        <motion.span
          className="ml-3 font-body text-[0.65rem] uppercase tracking-[0.2em] text-white/30"
          key={`counter-${activeStep}`}
        >
          Paso {step.number} de 04
        </motion.span>
      </div>

      {/* Ghost step number — large background element */}
      <div className="relative h-[90px] md:h-[110px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={step.number}
            className="absolute font-display text-[6rem] md:text-[9rem] font-bold leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(196,162,101,0.12)",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            {step.number}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Title — with staggered character reveal feel */}
      <AnimatePresence mode="wait">
        <motion.h3
          key={`title-${step.number}`}
          className="font-display text-3xl font-bold text-text-light md:text-5xl"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
          transition={spring}
        >
          {step.title}
        </motion.h3>
      </AnimatePresence>

      {/* Gold separator — animated draw */}
      <div className="my-6 flex items-center gap-3">
        <motion.div
          className="h-[2px] origin-left bg-accent-gold"
          key={`sep-${step.number}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ width: 56 }}
        />
        <motion.div
          className="h-1 w-1 rounded-full bg-accent-gold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`desc-${step.number}`}
          className="max-w-[440px] font-body text-base leading-[1.85] text-text-light/70 md:text-lg"
          initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(2px)" }}
          transition={{ ...spring, delay: 0.18 }}
        >
          {step.description}
        </motion.p>
      </AnimatePresence>

      {/* CTA micro-button — appears after description */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <motion.a
          href="#contacto"
          className="group inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-accent-gold transition-colors hover:text-accent-gold-light"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.25 }}
        >
          <span>Reservar Consulta</span>
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
