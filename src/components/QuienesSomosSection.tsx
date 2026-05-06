"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  clipReveal,
  scaleXReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";

const pillars = [
  {
    n: "01",
    title: "Productos certificados",
    body: "Tratamientos de calidad con productos de primeras marcas y trazabilidad total.",
  },
  {
    n: "02",
    title: "Tecnología avanzada",
    body: "Equipos de última generación e instalaciones diseñadas para tu confort y resultado.",
  },
  {
    n: "03",
    title: "Personal cualificado",
    body: "Equipo médico con formación oficial y titulaciones reconocidas en medicina estética.",
  },
  {
    n: "04",
    title: "Trato cercano y familiar",
    body: "Cada paciente recibe un protocolo personalizado y acompañamiento humano.",
  },
];

export function QuienesSomosSection() {
  return (
    <section
      id="nosotros"
      className="relative bg-bg-primary py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 85% 20%, rgba(184,115,85,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 90%, rgba(191,179,158,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInLeft}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-12 h-px bg-accent-gold" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
            Quiénes Somos
          </span>
        </motion.div>

        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Headline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal not-italic text-text-primary leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              Belleza desde la
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display italic text-accent-gold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              salud, alma de
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal not-italic text-text-primary leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}
            >
              Maysoon.
            </motion.h2>

            <motion.div
              variants={scaleXReveal}
              className="mt-8 w-16 h-0.5 bg-accent-gold/60 origin-left"
            />
          </motion.div>

          {/* Right: Body + pull quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerFast}
            className="lg:col-span-7 space-y-8"
          >
            <motion.p
              variants={fadeInUp}
              className="font-body text-base lg:text-lg text-text-secondary leading-[1.8]"
            >
              Nos dedicamos a devolver la belleza, y a conseguir esta desde la
              restitución de la salud. En nuestra clínica de Valencia, cada
              tratamiento parte de una valoración integral: cuidamos lo que se
              ve y lo que sostiene tu bienestar por dentro.
            </motion.p>

            <motion.figure
              variants={fadeInUp}
              className="relative pl-8 py-2 border-l-2 border-accent-gold"
            >
              <span className="block font-body text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accent-gold mb-3">
                El origen del nombre
              </span>
              <blockquote className="font-display italic text-xl lg:text-2xl text-text-primary leading-[1.4]">
                «Maysoon» es un nombre árabe que significa
                <span className="text-accent-gold not-italic font-normal">
                  {" "}de hermosos rostros y cuerpo
                </span>
                . Una filosofía hecha clínica.
              </blockquote>
            </motion.figure>

            <motion.p
              variants={fadeInUp}
              className="font-body text-sm text-text-muted leading-[1.7] uppercase tracking-[0.15em]"
            >
              Avda. Cardenal Benlloch 11 · 46021 Valencia
            </motion.p>
          </motion.div>
        </div>

        {/* Pillars row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerFast}
          className="mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-accent-stone/30 pt-12"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.n}
              variants={fadeInUp}
              className="group relative"
            >
              <span className="block font-display text-3xl text-accent-gold/70 mb-4 transition-colors duration-300 group-hover:text-accent-gold">
                {p.n}
              </span>
              <h3 className="font-display text-xl text-text-primary mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-[1.7]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
