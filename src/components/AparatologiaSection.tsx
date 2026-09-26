"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
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
  {
    title: "Ultraformer III · HIFU",
    description:
      "Ultrasonido focalizado de alta intensidad que actúa en profundidad para tensar la piel y estimular colágeno. Efecto lifting sin cirugía en rostro, cuello y cuerpo.",
    details: [
      "Lifting facial y de cuello sin cirugía",
      "Redefine el óvalo y reduce la papada",
      "Reafirmación corporal",
      "Sin tiempo de recuperación",
    ],
  },
  {
    title: "EMSlim · Tonificación Muscular",
    description:
      "Estimulación electromagnética de alta intensidad que genera contracciones musculares intensas para tonificar y ayudar a reducir grasa localizada.",
    details: [
      "Abdomen, glúteos, brazos y piernas",
      "Tonifica y define el músculo",
      "Sesiones cómodas, sin agujas",
      "Sin tiempo de recuperación",
    ],
  },
  {
    title: "PLASMAGE · Plasma",
    description:
      "Tecnología de plasma que retrae la piel con gran precisión, sin cortes. Indicada para párpados caídos, arrugas finas y lesiones cutáneas como verrugas o lunares.",
    details: [
      "Blefaroplastia sin cirugía",
      "Arrugas finas y flacidez localizada",
      "Eliminación de verrugas y pequeñas lesiones",
    ],
    href: "/tratamientos/blefaroplastia-plasmage",
  },
  {
    title: "ENDOLÁSER · Liften Dual",
    description:
      "Láser de fibra óptica que se introduce bajo la piel para retensar tejidos y reducir grasa localizada sin cirugía. Es la base del endolifting facial y de muchos tratamientos corporales.",
    details: [
      "Endolifting facial y reducción de papada",
      "Grasa localizada: abdomen, flancos, cartucheras",
      "Flacidez de brazos",
      "Bolsas de ojeras",
    ],
    href: "/medicina-estetica/corporal#endolaser-fox-iii",
  },
  {
    title: "Láser Diodo Vascular",
    description:
      "Láser específico para lesiones vasculares: cierra arañas vasculares, puntos rubí y capilares superficiales sin geles ni anestesia.",
    details: [
      "Arañas vasculares en rostro y piernas",
      "Puntos rubí y capilares dilatados",
      "Sin marcas residuales",
    ],
    href: "/tratamientos/laser-vascular",
  },
  {
    title: "Morpheus 8 · Radiofrecuencia con Microagujas",
    description:
      "Radiofrecuencia fraccionada que llega a capas profundas de la piel mediante microagujas. Retensa, remodela y mejora la textura del rostro y el cuerpo.",
    details: [
      "Flacidez facial y corporal",
      "Marcas de acné y textura irregular",
      "Hiperhidrosis axilar",
    ],
    href: "/medicina-estetica#morpheus-8",
  },
  {
    title: "IPL · Luz Pulsada Intensa",
    description:
      "Luz de amplio espectro que elimina manchas y rojeces y unifica el tono de la piel. Fotorrejuvenecimiento de rostro, cuello, escote y manos.",
    details: [
      "Manchas solares y léntigos",
      "Rojeces y cuperosis",
      "Fotorrejuvenecimiento",
    ],
    href: "/tratamientos/luz-pulsada-ipl",
  },
  {
    title: "Láser CO2 Fraccionado",
    description:
      "Láser ablativo de referencia para el resurfacing: renueva la piel en profundidad y estimula colágeno nuevo para tratar arrugas, marcas de acné y textura.",
    details: [
      "Arrugas finas y medias",
      "Marcas y cicatrices de acné",
      "Párpados y ojeras",
    ],
    href: "/tratamientos/laser-co2",
  },
  {
    title: "Láser Q-Switched · Tatuajes",
    description:
      "Láser de pulsos ultracortos que fragmenta el pigmento del tatuaje en partículas diminutas que el organismo elimina poco a poco. También trata manchas pigmentadas.",
    details: [
      "Eliminación de tatuajes",
      "Borrado de micropigmentación antigua",
      "Manchas pigmentadas",
    ],
    href: "/tratamientos/eliminacion-tatuajes",
  },
];

export function AparatologiaSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Editorial gallery: real cabin equipment ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 lg:mb-24">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div
              variants={fadeInLeft}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-gold">
                Nuestra Cabina
              </span>
            </motion.div>

            <div className="mb-6">
              <motion.h2
                variants={clipReveal}
                className="font-display font-normal not-italic text-text-primary leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}
              >
                Equipos reales,
              </motion.h2>
              <motion.h2
                variants={clipReveal}
                className="font-display italic text-accent-gold leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}
              >
                resultados verificables
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="font-body text-base text-text-secondary leading-[1.8] mb-5"
            >
              Trabajamos con tecnología certificada y mantenimiento profesional.
              Sin equipos genéricos, sin atajos: cada protocolo se ejecuta con
              el aparato adecuado y los parámetros que tu piel necesita.
            </motion.p>
          </motion.div>

          {/* Right: stacked imagery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerFast}
            className="lg:col-span-7 relative"
          >
            {/* Primary image — wide cabin shot */}
            <motion.div
              variants={fadeInUp}
              className="relative z-10 overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(15,14,13,0.35)] ring-1 ring-accent-stone/25"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/aparatologia/equipos-cabina.jpg"
                  alt="Equipos de aparatología en la cabina de Maysoon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.05) 0%, rgba(15,14,13,0.16) 100%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Secondary image — Celvyn laser closeup overlapping */}
            <motion.div
              variants={fadeInRight}
              className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-20 ml-auto w-[68%] sm:w-[55%] overflow-hidden rounded-sm shadow-[0_24px_48px_-16px_rgba(15,14,13,0.45)] ring-1 ring-accent-stone/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/aparatologia/laser-celvyn.jpg"
                  alt="Equipo láser Celvyn — detalle del sistema en cabina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.04) 0%, rgba(15,14,13,0.10) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

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
