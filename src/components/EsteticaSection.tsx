"use client";

import { m as motion } from "framer-motion";
import { staggerFast } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const tratamientos = [
  {
    title: "Micropigmentación · Cejas, Eyeliner y Labios",
    description:
      "Maquillaje semipermanente que define cejas, mirada y labios con un acabado natural. Diseño personalizado según tu rostro y expresión.",
    details: [
      "Cejas: efecto pelo a pelo o sombreado",
      "Eyeliner: mirada definida sin maquillaje diario",
      "Labios: contorno, color y simetría",
      "Sesión inicial + retoque al mes incluido",
    ],
    href: "/tratamientos/micropigmentacion-microblading",
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
