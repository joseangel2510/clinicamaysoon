"use client";

import { motion } from "framer-motion";
import { staggerFast } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const cirugias = [
  {
    title: "Blefaroplastia · Cirugía de Párpados",
    description:
      "Eliminación quirúrgica de bolsas grasas, exceso de piel y arrugas en párpados superiores e inferiores. Mirada descansada y rejuvenecida con resultados naturales.",
    details: [
      "Párpados superiores e inferiores",
      "Eliminación de bolsas y exceso de piel",
      "Resultados visibles a partir de los 2 meses",
      "Cicatrices imperceptibles ocultas en los pliegues",
    ],
    href: "/tratamientos/blefaroplastia-plasmage",
  },
];

export function CirugiasMenoresSection() {
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
          {cirugias.map((t, i) => (
            <TreatmentRow key={t.title} index={i} {...t} />
          ))}
        </motion.div>

        <ConsultaBlock
          title="Más cirugías menores bajo valoración médica"
          description="Cada intervención se planifica con consulta previa, análisis individualizado y un protocolo claro de seguimiento. Pide tu valoración personalizada."
        />
      </div>
    </section>
  );
}
