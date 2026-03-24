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
    image: "/images/team/doctora-colaboradora.webp",
    name: "Dra. Colaboradora",
    role: "Cirugía Estética",
    description:
      "Especialista con experiencia internacional y colaboración con ISAPS.",
  },
  {
    image: "/images/team/doctor-principal.webp",
    name: "Daniel Almela",
    role: "Gestión y Atención al Paciente",
    description:
      "Responsable de que cada detalle de tu experiencia sea perfecto.",
  },
  {
    image: "/images/team/clinica-equipo.webp",
    name: "Equipo Terapéutico",
    role: "Profesionales Titulados",
    description:
      "Fisioterapeutas, esteticistas y personal cualificado en cada área.",
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
              className="font-display font-normal not-italic text-[#1A1614] leading-[1.1] tracking-[-0.02em]"
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
