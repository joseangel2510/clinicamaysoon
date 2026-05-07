"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { TratamientoCard } from "@/components/TratamientoCard";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";
import {
  fadeInLeft,
  fadeInUp,
  clipReveal,
  scaleXReveal,
  staggerContainer,
  staggerFast,
  heroContainer,
} from "@/lib/animations";

const tratamientos = [
  {
    image: "/images/sections/hero-treatment-endopeel.webp",
    category: "Facial · Corporal",
    title: "Lifting Retensor Endopeel",
    description:
      "Lifting sin cirugía con resultados visibles a los 30 minutos. Mejora flacidez, tono muscular y elevación.",
    href: "/tratamientos/lifting-retensor-endopeel",
    priceFrom: "350 €",
  },
  {
    image: "/images/sections/hero-treatment-plasmage.webp",
    category: "Tecnología Plasma",
    title: "Blefaroplastia PLASMAGE",
    description:
      "El cuarto estado de la materia para blefaroplastia, código de barras, plasmalift y lesiones cutáneas.",
    href: "/tratamientos/blefaroplastia-plasmage",
    priceFrom: "700 €",
  },
  {
    image: "/images/sections/closeup-rostro.webp",
    category: "100% Autólogo",
    title: "Plasma-Gel Relleno",
    description:
      "Relleno facial obtenido de tu propia sangre. Sin alergias, 25 % de fijación definitiva.",
    href: "/tratamientos/plasma-gel-relleno",
    priceFrom: "50 €/ml",
  },
  {
    image: "/images/sections/hero-treatment-mesoterapia.webp",
    category: "Inyectable Personalizado",
    title: "Mesoterapia Facial · Corporal · Capilar",
    description:
      "Cocktails personalizados de activos para hidratación, drenaje, flacidez y revitalización capilar.",
    href: "/tratamientos/mesoterapia",
    priceFrom: "48 €",
  },
  {
    image: "/images/sections/hero-treatment-prp.webp",
    category: "Bioestimulación",
    title: "Plasma Rico en Plaquetas (PRP)",
    description:
      "Único tratamiento capaz de aumentar el número de fibroblastos. Capilar, facial y de escote.",
    href: "/tratamientos/prp",
    priceFrom: "100 €",
  },
  {
    image: "/images/sections/hero-treatment-mesoterapia.webp",
    category: "Micropunción",
    title: "DermaPen · Micropunción",
    description:
      "65.000 microcanales por minuto. Absorción de activos + estímulo de colágeno y elastina.",
    href: "/tratamientos/dermapen-micropuncion",
    priceFrom: "83 €",
  },
  {
    image: "/images/sections/hero-treatment-ipl.webp",
    category: "Luz Pulsada Intensa",
    title: "IPL · Fotorrejuvenecimiento",
    description:
      "Manchas, pecas, puntos rubí, telangiectasias y acné. Resultados desde la primera sesión.",
    href: "/tratamientos/luz-pulsada-ipl",
    priceFrom: "134 €",
  },
  {
    image: "/images/sections/hero-treatment-laser-vascular.webp",
    category: "Láser Diodo 980 nm",
    title: "Láser Vascular",
    description:
      "Eliminación de arañas vasculares, puntos rubí y capilares hasta 2 mm sin geles ni anestesia.",
    href: "/tratamientos/laser-vascular",
  },
  {
    image: "/images/sections/closeup-acne.webp",
    category: "Tecnología Láser",
    title: "Láser Erbio YAG",
    description:
      "Tres modalidades: quirúrgico, Velo de Novia (peeling láser) y fraccionado/resurfacing.",
    href: "/tratamientos/laser-erbio-yag",
  },
  {
    image: "/images/sections/closeup-rostro.webp",
    category: "Renovación Cutánea",
    title: "Peelings Médicos",
    description:
      "Cuatro profundidades: superficial, medio, profundo y New Melan específico para melasma.",
    href: "/tratamientos/peelings-medicos",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/closeup-mandibula.webp",
    category: "Tercio Inferior",
    title: "Armonización Mandibular",
    description:
      "Forma en V femenina o definición masculina con ácido hialurónico. Rápido e indoloro.",
    href: "/tratamientos/armonizacion-mandibular",
  },
  {
    image: "/images/sections/closeup-hombre-mandibula.webp",
    category: "Exclusivo Hombre",
    title: "MASCULOOK",
    description:
      "Armonización mandibular masculina. Mandíbula marcada, ángulo definido y mentón prominente.",
    href: "/tratamientos/masculook",
  },
  {
    image: "/images/sections/closeup-cejas.webp",
    category: "Cejas Semipermanentes",
    title: "Microblading · Micropigmentación",
    description:
      "Maquillaje semipermanente pelo a pelo con aspecto totalmente natural. Durabilidad 1-3 años.",
    href: "/tratamientos/micropigmentacion-microblading",
  },
  {
    image: "/images/sections/closeup-labios.webp",
    category: "Arrugas Peribucales",
    title: "Código de Barras",
    description:
      "Tratamiento personalizado: ácido hialurónico, toxina botulínica y láser CO2/plasma según el grado.",
    href: "/tratamientos/codigo-de-barras",
  },
  {
    image: "/images/sections/closeup-abdomen.webp",
    category: "Remodelación Corporal",
    title: "BodyTite",
    description:
      "Alternativa mínimamente invasiva a la liposucción. Aprobado por la FDA. FaceTite y AccuTite incluidos.",
    href: "/tratamientos/bodytite",
  },
  {
    image: "/images/sections/hero-treatment-intralipoterapia.webp",
    category: "Cuerpo · Sin cirugía",
    title: "Intralipoterapia",
    description:
      "Eliminación de grasa localizada con agujas. Indoloro, ambulatorio y reincorporación inmediata.",
    href: "/tratamientos/intralipoterapia",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/hero-treatment-rellenos-corporales.webp",
    category: "Cuerpo · Volumen estructural",
    title: "Rellenos Corporales",
    description:
      "Lanluma X® y Powerfill® para gemelos, pectorales, glúteos y rejuvenecimiento genital.",
    href: "/tratamientos/rellenos-corporales",
  },
  {
    image: "/images/sections/closeup-flancos.webp",
    category: "Cuerpo",
    title: "Tratamiento de Celulitis",
    description:
      "Maderoterapia + mesoterapia drenante + Alidya® específico. Ataca las causas, no solo el síntoma.",
    href: "/tratamientos/tratamiento-celulitis",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/closeup-piernas.webp",
    category: "Médico Ambulatorio",
    title: "Esclerosis de Varices",
    description:
      "Esclerosante inyectable para varículas y varices. Sin cirugía si se aborda a tiempo.",
    href: "/tratamientos/esclerosis-varices",
    priceFrom: "80 €",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Cuerpo · Brazos",
    title: "Eliminación de Tatuajes con Láser",
    description:
      "Borrado progresivo y controlado. Sin cicatrices, sin marcas, respetando la piel.",
    href: "/tratamientos/eliminacion-tatuajes",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Sudoración Excesiva",
    title: "Hiperhidrosis",
    description:
      "Toxina botulínica o Morpheus 8 para axilas, manos, pies y otras zonas. 90 % de efectividad.",
    href: "/tratamientos/hiperhidrosis",
    priceFrom: "500 €",
  },
  {
    image: "/images/sections/closeup-mandibula.webp",
    category: "Maseteros · Toxina Botulínica",
    title: "Bruxismo",
    description:
      "Relaja la causa del rechinar nocturno y protege ATM y dientes. También afina la mandíbula.",
    href: "/tratamientos/bruxismo",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Bienestar Integral",
    title: "Sueroterapia · 7 Fórmulas",
    description:
      "Antiaging, Sport, Inmuno, Energy, Detox, Mayers, Fitness. Vía intravenosa, máxima absorción.",
    href: "/tratamientos/sueroterapia",
    priceFrom: "130 €",
  },
  {
    image: "/images/sections/closeup-hombre-intima.webp",
    category: "Zona Íntima",
    title: "Engrosamiento de Pene · Aumento Labios Mayores",
    description:
      "Tratamientos íntimos con ácido hialurónico corporal. Discreción y técnica reversible.",
    href: "/tratamientos/tratamientos-intimos",
    priceFrom: "600 €",
  },
];

export default function TratamientosIndexPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden bg-bg-primary">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184,115,85,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center"
        >
          <motion.div
            variants={fadeInLeft}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-accent-gold" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
              Catálogo de Tratamientos
            </span>
            <span className="block w-10 h-px bg-accent-gold" />
          </motion.div>

          <div className="mb-6">
            <motion.h1
              variants={clipReveal}
              className="font-display font-normal not-italic text-[#0F0E0D] leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              Fichas Detalladas
            </motion.h1>
            <motion.h1
              variants={clipReveal}
              className="font-display font-normal italic text-[#7B6E5E] leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              de Cada Técnica
            </motion.h1>
          </div>

          <motion.div
            variants={scaleXReveal}
            className="flex items-center justify-center gap-3 mb-8 origin-center"
          >
            <span className="block w-[60px] h-px bg-accent-gold/50" />
            <motion.span
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="block w-1.5 h-1.5 rounded-full bg-accent-gold"
            />
            <span className="block w-[60px] h-px bg-accent-gold/50" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-body text-sm sm:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
          >
            Profundiza en cada tratamiento que ofrecemos: tarifas reales, qué es
            la técnica, cómo se aplica, indicaciones y combinaciones clínicas.
            Todo lo que necesitas para tomar una decisión informada.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Grid de tratamientos ── */}
      <section className="bg-bg-primary pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {tratamientos.map((t) => (
              <TratamientoCard key={t.href} {...t} />
            ))}
          </motion.div>
        </div>
      </section>

      <ConsultaBlock
        title="¿No sabes por dónde empezar?"
        description="Una primera valoración médica te orienta hacia el tratamiento o protocolo combinado más adecuado para tu caso."
      />
      <Footer />
    </main>
  );
}
