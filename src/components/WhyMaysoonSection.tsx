"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Heart, Shield, Award } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
import { AnimatedCounter } from "./AnimatedCounter";
import { FeatureBlock } from "./FeatureBlock";

const counters = [
  {
    end: 10,
    prefix: "+",
    suffix: "",
    label: "Años de experiencia",
    duration: 2000,
    decimals: 0,
  },
  {
    end: 114,
    prefix: "+",
    suffix: "",
    label: "Reseñas en Google",
    duration: 2500,
    decimals: 0,
  },
  {
    end: 100,
    prefix: "",
    suffix: "%",
    label: "Personal titulado",
    duration: 2000,
    decimals: 0,
  },
  {
    end: 4.5,
    prefix: "",
    suffix: "/5",
    label: "Valoración media",
    duration: 2000,
    decimals: 1,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Tecnología de Última Generación",
    description:
      "Equipos de láser diodo de alta potencia, Morpheus, BodyTite y las técnicas más avanzadas del mercado.",
  },
  {
    icon: Heart,
    title: "Trato Cercano y Personalizado",
    description:
      "Cada paciente recibe una valoración integral y un protocolo diseñado específicamente para sus necesidades.",
  },
  {
    icon: Shield,
    title: "Productos Certificados de Primera Línea",
    description:
      "Solo trabajamos con marcas comerciales certificadas. Transparencia total en cada tratamiento.",
  },
  {
    icon: Award,
    title: "Resultados Naturales y Duraderos",
    description:
      "Nuestra filosofía: realzar tu belleza natural. Sin excesos, sin artificialidad. Tú, en tu mejor versión.",
  },
];

export function WhyMaysoonSection() {
  return (
    <section id="por-que-maysoon">
      {/* ── PART A: Animated Counters ── */}
      <div className="bg-bg-dark py-20">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-5xl px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-10"
        >
          {counters.map((c, i) => (
            <div
              key={c.label}
              className={
                i < counters.length - 1
                  ? "lg:border-r lg:border-text-light/10"
                  : ""
              }
            >
              <AnimatedCounter {...c} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Gradient Transition ── */}
      <div
        className="h-20"
        style={{
          background: "linear-gradient(to bottom, #0F0E0D, #F4EFE7)",
        }}
      />

      {/* ── PART B: Features with Image ── */}
      <div className="bg-bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeInLeft}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
                ¿Por Qué Elegirnos?
              </span>
              <span className="block w-10 h-px bg-accent-gold" />
            </motion.div>

            {/* H2 */}
            <div className="mb-5">
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal not-italic text-[#0F0E0D] leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                La Excelencia
              </motion.h2>
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal italic text-[#7B6E5E] leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                Como Estándar
              </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-lg mx-auto"
            >
              En Maysoon TAN Pearl no solo cuidamos tu imagen, cuidamos cada
              detalle de tu experiencia.
            </motion.p>
          </motion.div>

          {/* 2-Column: Image + Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.08)]">
            {/* Left: Clinic Interior Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative h-[300px] lg:h-auto lg:min-h-[520px]"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/clinic-interior.webp"
                  alt="Interior de Maysoon TAN Pearl — Clínica Médico-Estética"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Subtle overlays */}
              <div className="absolute inset-0 bg-accent-gold/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              {/* Right-edge blend for desktop */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent" />
            </motion.div>

            {/* Right: Feature Blocks */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-8 lg:p-12 flex flex-col justify-center"
            >
              {features.map((f, i) => (
                <FeatureBlock
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  isLast={i === features.length - 1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
