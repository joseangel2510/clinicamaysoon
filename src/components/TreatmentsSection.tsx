"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  clipReveal,
  staggerContainer,
} from "@/lib/animations";
import { TreatmentCard } from "./TreatmentCard";

const treatments = [
  {
    image: "/images/treatments/rejuvenecimiento.webp",
    title: "Rejuvenecimiento Facial",
    description:
      "Mesoterapia, factores de crecimiento y tecnología láser para devolver la luminosidad y firmeza a tu piel.",
    link: "/tratamientos/rejuvenecimiento-facial",
  },
  {
    image: "/images/treatments/labios.webp",
    title: "Aumento de Labios",
    description:
      "Ácido hialurónico de primera línea para un volumen natural, definido y en armonía con tu rostro.",
    link: "/tratamientos/aumento-labios",
  },
  {
    image: "/images/treatments/laser.webp",
    title: "Depilación Láser",
    description:
      "Última tecnología en diodo de alta potencia, eficaz todo el año y para todos los tipos de piel.",
    link: "/tratamientos/depilacion-laser",
  },
  {
    image: "/images/treatments/capilar.webp",
    title: "Tratamientos Capilares",
    description:
      "La única clínica en Valencia con todo el abanico: trasplante, PRP, mesoterapia, Biofibre y tricopigmentación.",
    link: "/tratamientos/capilares",
  },
  {
    image: "/images/treatments/corporal.webp",
    title: "Reafirmación Corporal",
    description:
      "Tratamientos Tightening, radiofrecuencia y BodyTite para combatir flaccidez y remodelar tu silueta.",
    link: "/tratamientos/corporal",
  },
  {
    image: "/images/treatments/facial.webp",
    title: "Medicina Estética Facial",
    description:
      "Rellenos, hilos tensores, Morpheus y estimuladores de colágeno para resultados naturales y duraderos.",
    link: "/tratamientos/estetica-facial",
  },
];

export function TreatmentsSection() {
  return (
    <section id="tratamientos" className="relative bg-bg-primary py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInLeft}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Nuestros Tratamientos
            </span>
            <span className="block w-10 h-px bg-accent-gold" />
          </motion.div>

          {/* H2 with contrast typography */}
          <div className="mb-5">
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal not-italic text-[#1A1614] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Soluciones Personalizadas
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal italic text-[#7B6E5E] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Para Tu Bienestar
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
          >
            Protocolos avanzados basados en evidencia científica, con productos
            certificados de primeras marcas y la más moderna tecnología.
          </motion.p>
        </motion.div>

        {/* Decorative separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto w-20 h-px bg-accent-gold/40 mb-12 origin-center"
        />

        {/* ── Treatment Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {treatments.map((t, i) => (
            <TreatmentCard key={t.title} {...t} index={i} />
          ))}
        </motion.div>

        {/* ── CTA Button ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="tel:+34963201133"
            className="inline-flex items-center justify-center bg-accent-gold text-bg-dark px-10 py-4 rounded-full font-body text-base font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(196,162,101,0.3)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent-gold/50"
          >
            Solicita tu Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
