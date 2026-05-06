"use client";

import { motion } from "framer-motion";
import { staggerFast, fadeInUp } from "@/lib/animations";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const tratamientos = [
  {
    title: "Estudio Capilar Personalizado",
    description:
      "Diagnóstico completo del cuero cabelludo y la fibra capilar. Punto de partida para un protocolo adaptado a tu caso real, no a una solución estándar.",
    details: [
      "Análisis del cuero cabelludo",
      "Valoración del patrón de caída",
      "Plan personalizado por etapas",
    ],
  },
  {
    title: "Trasplante Capilar FUE",
    description:
      "Técnica de extracción y reimplante folículo a folículo, con o sin rasurado, para resultados naturales y permanentes en zonas con alopecia consolidada.",
    details: [
      "Modalidad con o sin rasurado",
      "Resultados naturales y permanentes",
      "Recuperación rápida tras la intervención",
    ],
  },
  {
    title: "PRP · Plasma Rico en Plaquetas",
    description:
      "Microinyecciones de plasma rico en plaquetas para estimular la microcirculación folicular, frenar la caída y reforzar los folículos activos.",
    details: [
      "Frena la caída activa",
      "Refuerza folículos existentes",
      "Recuperación inmediata · sin baja",
      "No regenera folículos ya muertos",
    ],
  },
  {
    title: "Mesoterapia Capilar Personalizada",
    description:
      "Cocktail de factores de crecimiento, péptidos y biotina aplicado por microinyecciones en cuero cabelludo. Frecuencia adaptada según fase de la alopecia.",
    details: [
      "1 sesión: 100 €",
      "3 sesiones: 285 €",
      "6 sesiones + LED: 540 €",
      "10 sesiones + LED: 800 €",
    ],
    price: "100 €",
  },
  {
    title: "Trichotest Capilar",
    description:
      "Test genético para identificar los activos a los que tu cabello responde mejor. Permite optimizar tratamientos y evitar protocolos genéricos.",
    details: [
      "Análisis genético del cabello",
      "Optimiza la elección de activos",
      "Resultados en pocas semanas",
    ],
  },
  {
    title: "Tricopigmentación Capilar",
    description:
      "Técnica tipo tatuaje en el cuero cabelludo que crea el efecto óptico de cabello poblado. Indicada para alopecias avanzadas o como complemento estético.",
    details: [
      "2–4 sesiones según zonas a cubrir",
      "Resultados permanentes (pueden atenuarse con el tiempo)",
      "Indicada también como complemento al trasplante",
    ],
    price: "1.000 €",
  },
  {
    title: "Implante Capilar Biofibre",
    description:
      "Solución pensada para pacientes que no son candidatos a trasplante FUE convencional. Implante de fibras capilares biocompatibles para densidad inmediata.",
    details: [
      "Resultado inmediato",
      "Para casos no aptos para FUE",
      "Mantenimiento periódico recomendado",
    ],
  },
  {
    title: "Tratamientos Orales y Tópicos",
    description:
      "Pautas farmacológicas y dermocosméticas adaptadas a cada paciente, integradas en el protocolo capilar global para potenciar el resultado a largo plazo.",
    details: [
      "Tratamientos personalizados",
      "Compatibles con otros protocolos capilares",
      "Seguimiento médico continuo",
    ],
  },
];

export function UnidadCapilarSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="font-display italic text-lg lg:text-xl text-text-secondary leading-[1.6] max-w-2xl mx-auto">
            &ldquo;Uno de los pocos centros nacionales de referencia que reúne
            todos los tratamientos médicos capilares disponibles.&rdquo;
          </p>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col"
        >
          {tratamientos.map((t, i) => (
            <TreatmentRow key={t.title} index={i} {...t} />
          ))}
        </motion.div>

        <ConsultaBlock
          title="¿Necesitas un protocolo combinado?"
          description="Cada caso de alopecia es distinto. Concertamos una primera valoración para diseñar el protocolo capilar más adecuado para ti."
        />
      </div>
    </section>
  );
}
