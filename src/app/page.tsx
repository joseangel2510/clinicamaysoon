"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionTeaserCard } from "@/components/SectionTeaserCard";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import {
  fadeInLeft,
  fadeInUp,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";

const sections = [
  {
    image: "/images/sections/por-que-maysoon-logo.jpg",
    title: "¿Por qué Maysoon?",
    description:
      "Tecnología, trato y resultados al nivel que mereces. La excelencia como estándar.",
    href: "/por-que-maysoon",
  },
  {
    image: "/images/team/equipo-recepcion.jpg",
    title: "Quiénes Somos",
    description:
      "Conoce al Dr. Daniel Sánchez Salvador y al equipo titulado de Maysoon.",
    href: "/quienes-somos",
  },
  {
    image: "/images/team/doctores-recepcion.jpg",
    title: "Medicina Estética",
    description:
      "Botox, hilos tensores, peelings y protocolos médicos personalizados.",
    href: "/medicina-estetica",
  },
  {
    image: "/images/aparatologia/equipos-cabina.jpg",
    title: "Aparatología & Técnicas",
    description:
      "Láser diodo HS-810 y tecnologías avanzadas para resultados eficaces.",
    href: "/aparatologia",
  },
  {
    image: "/images/sections/teaser-cirugias.webp",
    title: "Cirugías Menores",
    description:
      "Blefaroplastia y otras intervenciones precisas con resultados naturales.",
    href: "/cirugias-menores",
  },
  {
    image: "/images/sections/unidad-capilar-real.png",
    title: "Unidad Capilar",
    description:
      "Trasplante FUE, mesoterapia, PRP, Trichotest, tricopigmentación y Biofibre.",
    href: "/unidad-capilar",
  },
  {
    image: "/images/sections/teaser-estetica.webp",
    title: "Estética",
    description:
      "Microblading y servicios estéticos refinados con técnica y mirada artística.",
    href: "/estetica",
  },
  {
    image: "/images/masajes/cabina-masajes.jpg",
    title: "Masajes",
    description:
      "Sesiones estéticas, relajantes y terapéuticas en manos de un equipo titulado.",
    href: "/masajes",
  },
  {
    image: "/images/formaciones/aula-completa.jpg",
    title: "Formaciones",
    description:
      "Próximamente: programa de formaciones para profesionales del sector.",
    href: "/formaciones",
  },
  {
    image: "/images/sections/teaser-contacto.webp",
    title: "Contacto · Dónde Estamos",
    description:
      "Avda. Cardenal Benlloch 11, Valencia. Teléfono, WhatsApp y horarios.",
    href: "/contacto",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* ── Section explorer ── */}
      <section
        id="servicios"
        className="relative bg-bg-primary py-20 lg:py-28 overflow-hidden"
      >
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184,115,85,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              variants={fadeInLeft}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
                Explora Maysoon
              </span>
              <span className="block w-10 h-px bg-accent-gold" />
            </motion.div>

            <div className="mb-6">
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal not-italic text-[#0F0E0D] leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Diez Áreas,
              </motion.h2>
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal italic text-[#7B6E5E] leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
              >
                Una Misma Excelencia
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
            >
              Cada sección refleja la misma filosofía: protocolos médicos serios,
              tecnología avanzada y un trato personalizado.
            </motion.p>
          </motion.div>

          {/* Grid 10 teasers */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7"
          >
            {sections.map((s, i) => (
              <SectionTeaserCard key={s.href} index={i} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
