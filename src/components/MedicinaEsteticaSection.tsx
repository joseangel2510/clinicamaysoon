"use client";

import { motion } from "framer-motion";
import { staggerFast } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const treatments = [
  {
    title: "Botox · Toxina Botulínica Tipo A",
    description:
      "Tratamiento de referencia para suavizar arrugas dinámicas y para hiperhidrosis. Aplicación precisa en zonas concretas con resultado natural y reversible.",
    details: [
      "Arrugas del entrecejo y frente",
      "Patas de gallo",
      "Hiperhidrosis: axilas, palmas y plantas",
      "Duración del efecto: 4–6 meses",
      "Sesión: 10–20 minutos",
    ],
  },
  {
    title: "Hilos Tensores",
    description:
      "Reposicionan tejidos y estimulan la producción de colágeno para un efecto lifting progresivo, sin cirugía. Tres tipos según necesidad y zona.",
    details: [
      "PDO lisos · estimulación de colágeno",
      "PDO arponados · efecto tensor inmediato",
      "Hilos APTOS · sostén estructural",
      "Zonas: rostro, orejas, Fox Eyes",
      "Sesión: 30–45 minutos · durabilidad hasta 18 meses",
    ],
  },
  {
    title: "Peeling Médico",
    description:
      "Renovación celular controlada para mejorar textura, manchas y signos del envejecimiento. Protocolo personalizado según tipo de piel.",
    details: [
      "Mejora de textura y luminosidad",
      "Tratamiento de manchas e hiperpigmentación",
      "Recuperación según profundidad del peeling",
    ],
    price: "220 €",
  },
  {
    title: "Molding Mask",
    description:
      "Tratamiento facial anti-envejecimiento que combina activos modeladores y mascarilla termorreguladora para reafirmar y revitalizar la piel.",
    details: [
      "Efecto reafirmante inmediato",
      "Hidratación profunda y luminosidad",
      "Protocolo combinable con otros tratamientos",
    ],
  },
];

export function MedicinaEsteticaSection() {
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
          {treatments.map((t, i) => (
            <TreatmentRow key={t.title} index={i} {...t} />
          ))}
        </motion.div>

        <ConsultaBlock
          title="Otros tratamientos disponibles bajo consulta"
          description="Ácido hialurónico, mesoterapia facial, vitaminas inyectables y protocolos personalizados. Cada plan se diseña tras una valoración médica completa."
        />
      </div>
    </section>
  );
}
