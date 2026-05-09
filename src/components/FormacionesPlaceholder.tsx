"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";

export function FormacionesPlaceholder() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Editorial gallery: real classroom in motion ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 lg:mb-24">
          {/* Left: stacked imagery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerFast}
            className="lg:col-span-7 relative"
          >
            <span
              aria-hidden
              className="absolute -top-6 -left-2 sm:-left-4 font-display text-[5rem] sm:text-[6rem] lg:text-[7rem] leading-none text-accent-gold/15 select-none pointer-events-none z-0"
            >
              04
            </span>

            {/* Primary image — wide classroom shot */}
            <motion.div
              variants={fadeInUp}
              className="relative z-10 overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(15,14,13,0.4)] ring-1 ring-accent-stone/25"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/formaciones/aula-completa.jpg"
                  alt="Aula de formaciones Maysoon — sesión con Dr. Daniel Sánchez Salvador"
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
                      "linear-gradient(180deg, rgba(184,115,85,0.05) 0%, rgba(15,14,13,0.18) 100%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-px bg-accent-gold"
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-px h-8 bg-accent-gold"
                />
              </div>
            </motion.div>

            {/* Secondary image — Dr. Daniel teaching closeup */}
            <motion.div
              variants={fadeInRight}
              className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 ml-auto w-[68%] sm:w-[55%] overflow-hidden rounded-sm shadow-[0_24px_48px_-16px_rgba(15,14,13,0.45)] ring-1 ring-accent-stone/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/formaciones/dr-daniel-formando.jpg"
                  alt="Dr. Daniel Sánchez Salvador impartiendo una sesión formativa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.04) 0%, rgba(15,14,13,0.12) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: editorial copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div
              variants={fadeInLeft}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-gold">
                Aula Maysoon
              </span>
            </motion.div>

            <div className="mb-6">
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal not-italic text-text-primary leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}
              >
                Aula propia,
              </motion.h2>
              <motion.h2
                variants={clipReveal}
                className="font-display italic text-accent-gold leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}
              >
                docencia clínica
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base text-text-secondary leading-[1.85] mb-6"
            >
              Las primeras sesiones internas ya están en marcha en nuestra aula
              dedicada. El Dr. Daniel Sánchez Salvador comparte protocolo,
              criterio clínico y horas de cabina con grupos reducidos — el
              formato que abriremos al público profesional próximamente.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 pt-4 border-t border-accent-stone/30"
            >
              <span className="font-display text-2xl text-accent-gold/85 leading-none">
                ✦
              </span>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-text-muted leading-tight">
                Grupos reducidos
                <br />
                Práctica con casos reales
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── CTA waitlist ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-3xl bg-bg-secondary p-10 lg:p-14 text-center overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(184,115,85,0.10) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <motion.span
              variants={fadeInUp}
              className="block font-body text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-gold mb-4"
            >
              Programa profesional
            </motion.span>

            <motion.h3
              variants={fadeInUp}
              className="font-display font-normal text-3xl lg:text-4xl text-text-primary leading-tight tracking-[-0.01em] mb-5"
            >
              Apertura al público{" "}
              <span className="italic text-accent-gold">en breve</span>.
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base lg:text-lg text-text-secondary leading-[1.8] max-w-xl mx-auto mb-8"
            >
              Si quieres ser de los primeros profesionales del sector en recibir
              fechas, plazas y temario, déjanos tu interés por WhatsApp.
            </motion.p>

            <motion.a
              variants={fadeInUp}
              href="https://wa.me/34651545268?text=Hola%2C%20me%20interesa%20vuestra%20formaci%C3%B3n%20para%20profesionales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent-gold text-bg-dark px-8 py-3.5 rounded-full font-body text-sm font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(184,115,85,0.3)] active:scale-[0.97]"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Apúntame a la lista
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
