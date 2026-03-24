"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  heroContainer,
  fadeInUp,
  fadeInLeft,
  clipReveal,
  scaleXReveal,
  lineReveal,
} from "@/lib/animations";
import { ScrollIndicator } from "./ScrollIndicator";
import { AuthorizationBadge } from "./AuthorizationBadge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* ── Mobile Image (top, 40vh) ── */}
      <div className="relative w-full h-[40vh] overflow-hidden lg:hidden flex-shrink-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[110%] h-[110%] -ml-[5%] -mt-[5%]"
        >
          <Image
            src="/images/hero-maysoon.webp"
            alt="Mujer con piel luminosa — Clínica Maysoon"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>
        {/* Dark overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-accent-gold/5" />
      </div>

      {/* ── Left Side — Text Content ── */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-12 lg:pl-20 lg:pr-12 pt-24 pb-10 lg:pt-24 lg:pb-0 bg-gradient-to-b from-bg-primary to-bg-secondary lg:bg-gradient-to-b lg:from-bg-primary lg:to-bg-secondary"
      >
        {/* Subtle radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(196,162,101,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-xl">
          {/* Eyebrow */}
          <motion.div variants={fadeInLeft} className="flex items-center gap-3 mb-6 lg:mb-8">
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Medicina Estética Avanzada en Valencia
            </span>
          </motion.div>

          {/* H1 — each line clip-revealed */}
          <div className="mb-5 lg:mb-6">
            <motion.h1
              variants={clipReveal}
              className="font-display font-normal not-italic text-[#1A1614] leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              Tu Belleza,
            </motion.h1>
            <motion.h1
              variants={clipReveal}
              className="font-display font-normal italic text-[#7B6E5E] leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              Nuestra Ciencia
            </motion.h1>
          </div>

          {/* Decorative separator with breathing pulse */}
          <motion.div
            variants={scaleXReveal}
            className="flex items-center gap-3 mb-6 lg:mb-8 origin-left"
          >
            <span className="block w-[60px] h-px bg-accent-gold/50" />
            <motion.span
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="block w-1.5 h-1.5 rounded-full bg-accent-gold"
            />
            <span className="block w-[60px] h-px bg-accent-gold/50" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-[480px] mb-8 lg:mb-10"
          >
            Donde las técnicas más avanzadas en medicina estética y láser se ponen
            al servicio de tu bienestar. Resultados naturales, atención
            personalizada.
          </motion.p>

          {/* CTA + Badge row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-5"
          >
            {/* Authorization Badge */}
            <AuthorizationBadge />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent-gold text-bg-dark px-8 py-3.5 rounded-full font-body text-base font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(196,162,101,0.3)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent-gold/50"
            >
              <MessageCircle size={20} strokeWidth={2} />
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Decorative vertical gold line between sides ── */}
      <motion.div
        variants={lineReveal}
        initial="hidden"
        animate="visible"
        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-accent-gold/15 z-20 origin-top"
      />

      {/* ── Right Side — Desktop Hero Image with Ken Burns ── */}
      <div className="hidden lg:block relative w-1/2 h-screen overflow-hidden">
        {/* Ken Burns animated image */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ width: "110%", height: "110%", marginLeft: "-5%", marginTop: "-5%" }}
        >
          <Image
            src="/images/hero-maysoon.webp"
            alt="Mujer con piel luminosa — Clínica Maysoon"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
        </motion.div>

        {/* Gradient overlay — left fade into text area */}
        <div
          className="absolute inset-y-0 left-0 w-[35%] z-10"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-primary) 0%, transparent 100%)",
          }}
        />

        {/* Subtle gold tint overlay */}
        <div className="absolute inset-0 bg-accent-gold/5 z-[5]" />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
