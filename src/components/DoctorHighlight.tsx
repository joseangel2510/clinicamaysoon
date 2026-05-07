"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeInUp,
  fadeInRight,
  scaleXReveal,
  staggerContainer,
} from "@/lib/animations";

const credentials = [
  "Licenciado en Medicina — Universidad de Salamanca",
  "Máster en Técnicas Avanzadas de Medicina Estética y Láser — CEU",
  "Diploma en Estudios Avanzados (DEA) — Sobresaliente",
  "+10 años de experiencia en medicina estética",
];

export function DoctorHighlight() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] max-w-5xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.06)] bg-white">
      {/* Left: Doctor Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative h-[400px] lg:h-auto lg:min-h-[500px] border-b-3 lg:border-b-0 lg:border-r-3 border-accent-gold/30"
      >
        <Image
          src="/images/team/dr-daniel.jpg"
          alt="Dr. Daniel Sánchez Salvador — Director Médico"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-accent-gold/5" />
      </motion.div>

      {/* Right: Doctor Info */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="p-8 lg:p-12 flex flex-col justify-center"
      >
        {/* Name */}
        <motion.h3
          variants={fadeInRight}
          className="font-display font-bold text-2xl text-text-primary"
        >
          Dr. Daniel Sánchez Salvador
        </motion.h3>

        {/* Role */}
        <motion.p
          variants={fadeInRight}
          className="font-body text-sm uppercase tracking-[0.15em] text-accent-gold mt-2"
        >
          Director Médico · Responsable Maysoon
        </motion.p>

        {/* Separator */}
        <motion.div
          variants={scaleXReveal}
          className="w-[60px] h-0.5 bg-accent-gold/50 my-6 origin-left"
        />

        {/* Quote */}
        <motion.blockquote
          variants={fadeInUp}
          className="font-body italic text-base text-text-secondary leading-[1.8] border-l-2 border-accent-gold pl-6"
        >
          &ldquo;Nuestra filosofía es conseguir una armonía entre el rostro y el
          cuerpo. No dejes que los años te roben lo que eres, vuelve a ser tú a
          pesar del paso del tiempo.&rdquo;
        </motion.blockquote>

        {/* Credentials */}
        <motion.ul
          variants={staggerContainer}
          className="mt-6 flex flex-col gap-3"
        >
          {credentials.map((cred) => (
            <motion.li
              key={cred}
              variants={fadeInUp}
              className="flex items-start gap-3"
            >
              <span className="text-accent-gold text-sm mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span className="font-body text-sm text-text-primary leading-[1.5]">
                {cred}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Link */}
        <motion.a
          variants={fadeInUp}
          href="/quienes-somos"
          className="group/link inline-flex items-center gap-2 font-body text-sm font-medium text-accent-gold mt-8 transition-colors duration-300 hover:text-accent-gold-light"
        >
          Conoce a todo el equipo
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}
