"use client";

import { motion } from "framer-motion";
import { staggerFast } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const tratamientos = [
  {
    title: "Microblading de Cejas",
    description:
      "Pigmentación manual técnica pelo a pelo que crea cejas naturales, definidas y duraderas. Diseño personalizado según rostro y expresión.",
    details: [
      "Diseño y simetrización personalizada",
      "Acabado natural pelo a pelo",
      "Duración: 1 a 1,5 años",
      "Sesión inicial + retoque al mes incluido",
    ],
    price: "250 €",
  },
];

export function EsteticaSection() {
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
          {tratamientos.map((t, i) => (
            <TreatmentRow key={t.title} index={i} {...t} />
          ))}
        </motion.div>

        <ConsultaBlock
          title="Más servicios estéticos bajo consulta"
          description="Limpiezas faciales, depilación, manicura, lifting de pestañas y cuidados personalizados. Pregunta por nuestra agenda y precios actualizados."
        />
      </div>
    </section>
  );
}
