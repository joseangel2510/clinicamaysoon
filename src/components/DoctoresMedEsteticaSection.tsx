"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";

const doctores = [
  {
    image: "/images/team/dr-daniel-cabina.jpg",
    name: "Dr. Daniel Sánchez Salvador",
    role: "Director Médico",
    description:
      "Más de una década diseñando protocolos de medicina estética con criterio clínico y mirada artística. Cada tratamiento parte de tu anatomía, no de un molde.",
  },
  {
    image: "/images/team/dr-jose-david-cabina.jpg",
    name: "Dr. José David",
    role: "Médico Estético",
    description:
      "Técnica precisa al servicio del resultado natural. Acompaña cada protocolo con calma, escucha y respeto por tus tiempos y tus rasgos.",
  },
];

export function DoctoresMedEsteticaSection() {
  return (
    <section
      id="doctores"
      className="relative bg-bg-secondary py-20 lg:py-28 overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(184,115,85,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 5% 95%, rgba(191,179,158,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Editorial header with overlapping image ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 lg:mb-24">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <motion.div
              variants={fadeInLeft}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-gold">
                Equipo Médico
              </span>
            </motion.div>

            <div className="mb-6">
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal not-italic text-text-primary leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Dos miradas,
              </motion.h2>
              <motion.h2
                variants={clipReveal}
                className="font-display italic text-accent-gold leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                un mismo criterio
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base lg:text-lg text-text-secondary leading-[1.8] mb-6"
            >
              La medicina estética en Maysoon la firman dos médicos que comparten
              filosofía: resultado natural, técnica rigurosa y un trato que pone
              al paciente — no al protocolo — en el centro.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 pt-5 border-t border-accent-stone/30"
            >
              <span className="font-display text-3xl text-accent-gold/80 leading-none">
                10+
              </span>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-text-muted leading-tight">
                años de experiencia
                <br />
                clínica acreditada
              </span>
            </motion.div>
          </motion.div>

          {/* Right: editorial image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <span
              aria-hidden
              className="absolute -top-6 right-2 sm:right-4 font-display text-[5rem] sm:text-[6rem] lg:text-[7rem] leading-none text-accent-gold/15 select-none pointer-events-none z-0"
            >
              01
            </span>

            <div className="relative z-10 overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(15,14,13,0.4)] ring-1 ring-accent-stone/25">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/team/doctores-despacho.jpg"
                  alt="Dr. Daniel Sánchez Salvador y Dr. José David — equipo médico de Maysoon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.04) 0%, rgba(15,14,13,0.18) 100%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-8 h-px bg-accent-gold"
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-px h-8 bg-accent-gold"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Doctor portrait cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerFast}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {doctores.map((doc) => (
            <motion.article
              key={doc.name}
              variants={fadeInUp}
              className="group relative bg-white rounded-sm overflow-hidden shadow-[0_20px_50px_-20px_rgba(15,14,13,0.18)] ring-1 ring-accent-stone/20 transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(15,14,13,0.28)] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role}`}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.04) 0%, rgba(15,14,13,0.10) 100%)",
                  }}
                />
              </div>

              <div className="p-7 lg:p-8">
                <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent-gold block mb-3">
                  {doc.role}
                </span>
                <h3 className="font-display font-normal text-2xl text-text-primary leading-tight tracking-[-0.01em] mb-4">
                  {doc.name}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-[1.75]">
                  {doc.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
