"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerFast } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const equipos = [
  {
    title: "Láser Diodo 810 nm · HS-810",
    description:
      "Equipo de depilación médica de alta potencia (1600 W) con dos aplicadores simultáneos. Tecnología que respeta todos los fototipos y permite tratamientos rápidos y eficaces.",
    details: [
      "Potencia: 1600 W · longitud de onda 810 nm",
      "Apto para todos los tipos de piel",
      "Dos aplicadores simultáneos · sesiones más cortas",
      "Sistema de refrigeración para máximo confort",
    ],
  },
];

export function AparatologiaSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {equipos.map((t, i) => (
            <TreatmentRow key={t.title} index={i} {...t} />
          ))}
        </motion.div>

        {/* Cross-link a Depilación Láser */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/depilacion-laser"
            className="group flex items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl bg-bg-secondary border border-accent-gold/20 transition-all duration-300 hover:border-accent-gold hover:shadow-[0_10px_30px_rgba(15,14,13,0.06)]"
          >
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-accent-gold block mb-2">
                Página dedicada
              </span>
              <span className="font-display text-xl lg:text-2xl text-text-primary block leading-tight">
                Depilación Láser HS-810 · Tarifas y combos completos
              </span>
            </div>
            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-gold text-bg-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </span>
          </Link>
        </motion.div>

        <ConsultaBlock
          title="Más equipos avanzados bajo consulta"
          description="Disponemos de protocolos combinados con tecnologías de remodelación, rejuvenecimiento y tratamiento corporal. Cada caso se valora individualmente para diseñar el plan más adecuado."
        />
      </div>
    </section>
  );
}
