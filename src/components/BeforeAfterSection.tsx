"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  clipReveal,
  staggerContainer,
} from "@/lib/animations";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const treatments = [
  {
    beforeImage: "/images/before-after/facial-before.webp",
    afterImage: "/images/before-after/facial-after.webp",
    title: "Rejuvenecimiento Facial",
    description: "Combinación de mesoterapia y factores de crecimiento",
  },
  {
    beforeImage: "/images/before-after/lips-before.webp",
    afterImage: "/images/before-after/lips-after.webp",
    title: "Aumento de Labios",
    description: "Ácido hialurónico para volumen natural y definición",
  },
  {
    beforeImage: "/images/before-after/body-before.webp",
    afterImage: "/images/before-after/body-after.webp",
    title: "Reafirmación Corporal",
    description: "Radiofrecuencia y tratamiento Tightening",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="relative bg-bg-secondary py-24 lg:py-32 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(184,115,85,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInLeft}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Resultados Reales
            </span>
            <span className="block w-10 h-px bg-accent-gold" />
          </motion.div>

          {/* H2 with contrast typography */}
          <div className="mb-5">
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal not-italic text-[#0F0E0D] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              La Transformación
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal italic text-[#7B6E5E] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Habla por Sí Misma
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
          >
            Nuestros pacientes confían en nosotros para lograr resultados
            naturales y duraderos. Estos son algunos de sus tratamientos.
          </motion.p>
        </motion.div>

        {/* ── Slider Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {treatments.map((t) => (
            <BeforeAfterSlider key={t.title} {...t} />
          ))}
        </motion.div>

        {/* ── CTA Link ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <a
            href="/medicina-estetica"
            className="group/cta inline-flex items-center gap-2 font-body font-medium text-accent-gold tracking-wide hover:underline decoration-accent-gold/40 underline-offset-4 transition-colors duration-300"
          >
            Ver Todos los Tratamientos
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/cta:translate-x-1.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
