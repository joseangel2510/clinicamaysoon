"use client";

import { m as motion } from "framer-motion";
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
      "Resultados visibles en 10 días",
      "Cicatrices imperceptibles ocultas en los pliegues",
    ],
    href: "/tratamientos/blefaroplastia-plasmage",
  },
  {
    title: "Corrección de Lóbulos Rasgados · Orejas",
    description:
      "Reparación del lóbulo de la oreja rasgado o dilatado por pendientes, dilatadores o traumatismos. Devuelve al lóbulo su forma natural con una intervención sencilla bajo anestesia local.",
    details: [
      "Lóbulos rasgados o alargados",
      "Anestesia local, sin ingreso",
      "Cicatriz fina y discreta",
    ],
  },
  {
    title: "Elevación de Cejas · Cejaplastia",
    description:
      "Elevación quirúrgica de la cola de la ceja para corregir la caída que da a la mirada un aspecto cansado o triste. Abre la mirada y rejuvenece el tercio superior del rostro.",
    details: [
      "Corrige la ceja caída",
      "Mirada más abierta y descansada",
      "Anestesia local, sin ingreso",
    ],
  },
  {
    title: "Lip Lift · Elevación del Labio Superior",
    description:
      "Acorta la distancia entre la nariz y el labio superior para devolver al labio su proyección y mostrar más bermellón. Resultado natural y permanente, sin rellenos.",
    details: [
      "Labio superior más corto y proyectado",
      "Resultado permanente",
      "Cicatriz oculta bajo la base de la nariz",
    ],
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
