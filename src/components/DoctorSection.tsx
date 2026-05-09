"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
import { DoctorHighlight } from "./DoctorHighlight";
import { TeamMemberCard } from "./TeamMemberCard";
import { CredentialsBadge } from "./CredentialsBadge";

const teamMembers = [
  {
    image: "/images/team/dr-jose-david.webp",
    name: "Dr. José David",
    role: "Médico Estético",
    description:
      "Criterio clínico y técnica al servicio del resultado natural. Diseña cada protocolo respetando tus rasgos y tus tiempos.",
  },
  {
    image: "/images/team/sandra-auxiliar.webp",
    name: "Sandra",
    role: "Auxiliar Médica",
    description:
      "El apoyo del gabinete. Acompaña cada tratamiento con precisión, asegurando higiene, seguridad y la calma que necesitas en cada sesión.",
  },
  {
    image: "/images/team/ricardo-cabina.jpg",
    name: "Ricardo",
    role: "Masajista Profesional",
    description:
      "Manos expertas. Especialista en técnicas terapéuticas y de bienestar para liberar tensión y devolver el equilibrio al cuerpo.",
    imageObjectPosition: "center top",
  },
  {
    image: "/images/team/laura-fernandez-portrait.jpg",
    name: "Laura Fernández",
    role: "Comercial y Ventas",
    description:
      "Tu primera guía. Te acompaña desde el primer contacto, resolviendo dudas y diseñando el plan que mejor encaja con tus objetivos.",
  },
  {
    image: "/images/team/lisa-recepcion.webp",
    name: "Lisa",
    role: "Recepción y Atención",
    description:
      "El rostro que te recibe. Coordina agendas y se asegura de que cada visita transcurra con calma, puntualidad y cercanía.",
  },
];

export function DoctorSection() {
  return (
    <section id="equipo" className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-4"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeInLeft}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Equipo Médico
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
              Profesionales
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal italic text-[#7B6E5E] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              A Tu Servicio
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
          >
            Un equipo titulado, con años de experiencia y una pasión genuina por
            la medicina estética y el bienestar de cada paciente.
          </motion.p>
        </motion.div>

        {/* ── Doctor Highlight Block ── */}
        <DoctorHighlight />

        {/* ── Credentials Badge Strip ── */}
        <CredentialsBadge />

        {/* ── Team Member Cards ── */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-2"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
