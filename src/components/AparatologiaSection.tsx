"use client";

import { motion } from "framer-motion";
import { staggerFast } from "@/lib/animations";
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

        <ConsultaBlock
          title="Más equipos avanzados bajo consulta"
          description="Disponemos de protocolos combinados con tecnologías de remodelación, rejuvenecimiento y tratamiento corporal. Cada caso se valora individualmente para diseñar el plan más adecuado."
        />
      </div>
    </section>
  );
}
