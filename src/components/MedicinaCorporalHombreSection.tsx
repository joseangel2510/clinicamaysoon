"use client";

import { motion } from "framer-motion";
import { Award, Activity, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, staggerFast } from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-cuello", label: "Cuello" },
  { id: "zona-brazo", label: "Axilas / Brazos" },
  { id: "zona-pectoral", label: "Pectoral" },
  { id: "zona-abdomen", label: "Abdomen" },
  { id: "zona-intima", label: "Zona Íntima" },
  { id: "zona-gluteos", label: "Glúteos" },
  { id: "zona-piernas", label: "Piernas" },
];

export function MedicinaCorporalHombreSection() {
  return (
    <section className="bg-bg-primary pt-12 pb-20 lg:pb-28">
      {/* ── Zona nav ── */}
      <div className="mb-12 lg:mb-16">
        <ZonaNav zonas={zonasNav} />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── 01 · CUELLO ── */}
        <ZonaBlock
          id="zona-cuello"
          index={0}
          eyebrow="Zona Cuello"
          title="Tensado y Definición"
          description="Combinamos láser, hilos, bioestimulación y BodyTite para reafirmar el cuello masculino, una de las zonas que más delata el paso del tiempo."
          treatments={[
            "Reducción de papada (ENDOLÁSER Fox III)",
            "Lifting Retensor cutáneo (Endopeel)",
            "Estimulador de colágeno (bioestimuladores)",
            "Hilos tensores",
            "PLASMAGE para lunares y verrugas",
            "Morpheus 8",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-cuello.webp"
          imageAlt="Cuello masculino — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · AXILAS / BRAZOS ── */}
        <ZonaBlock
          id="zona-brazo"
          index={1}
          eyebrow="Zona Axilas y Brazos"
          title="Reafirmación y Bienestar"
          description="Tratamientos focalizados en flacidez del brazo masculino, sudoración excesiva, eliminación de tatuajes y bienestar integral con sueroterapia."
          treatments={[
            "ENDOLÁSER Brazos (Fox III)",
            "Reducción de sudoración / Hiperhidrosis",
            "BodyTite — remodelación corporal avanzada",
            "Eliminación de tatuajes con láser",
            "Sueroterapia — recuperación de vitalidad",
          ]}
          image="/images/sections/closeup-hombre-brazo.webp"
          imageAlt="Brazo masculino — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · PECTORAL (exclusivo hombre) ── */}
        <ZonaBlock
          id="zona-pectoral"
          index={2}
          eyebrow="Zona Pectoral · Exclusivo Hombre"
          title="Pectoral con Definición"
          description="Tratamiento específico de la zona pectoral masculina: reafirmación cutánea y volumen estructural con técnicas reversibles e indoloras."
          treatments={[
            "Lifting Retensor cutáneo (Endopeel)",
            "Rellenos Corporales",
          ]}
          image="/images/sections/closeup-hombre-pectoral.webp"
          imageAlt="Zona pectoral masculina — Maysoon"
          imageSide="right"
        />

        {/* ── 04 · ABDOMEN ── */}
        <ZonaBlock
          id="zona-abdomen"
          index={3}
          eyebrow="Zona Abdomen"
          title="Tratamiento Integral"
          description="Catálogo completo para el abdomen masculino: combinamos lifting, mesoterapia, rellenos, intralipoterapia, láser y BodyTite según el objetivo."
          treatments={[
            "Lifting Endopeel",
            "Mesoterapia Corporal",
            "Rellenos Corporales",
            "Intralipoterapia — eliminación de grasa localizada",
            "Reducción de grasa con ENDOLÁSER (Fox III)",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-abdomen.webp"
          imageAlt="Abdomen masculino — Maysoon"
          imageSide="left"
        />

        {/* ── 05 · ZONA ÍNTIMA (exclusivo hombre) ── */}
        <ZonaBlock
          id="zona-intima"
          index={4}
          eyebrow="Zona Íntima · Exclusivo Hombre"
          title="Cuidado Discreto"
          description="Tratamientos íntimos masculinos con la máxima discreción y técnica. Espacio reservado, valoración personalizada y máximo respeto."
          treatments={[
            "Aumento de glande",
            "Engrosamiento de pene · ácido hialurónico corporal",
            "Verrugas genitales · eliminación con PLASMAGE",
          ]}
          image="/images/sections/closeup-hombre-intima.webp"
          imageAlt="Detalle estético masculino — Maysoon"
          imageSide="right"
        />

        {/* ── Engrosamiento de pene · destacado con stats ── */}
        <EngrosamientoFeatured />

        {/* ── 06 · GLÚTEOS ── */}
        <ZonaBlock
          id="zona-gluteos"
          index={5}
          eyebrow="Zona Glúteos"
          title="Volumen y Firmeza"
          description="Catálogo masculino simplificado: volumen estructural con rellenos corporales y reafirmación con BodyTite."
          treatments={[
            "Rellenos Corporales",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-gluteos.webp"
          imageAlt="Espalda y glúteos masculinos — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · PIERNAS ── */}
        <ZonaBlock
          id="zona-piernas"
          index={6}
          eyebrow="Zona Piernas"
          title="Vasos y Volumen"
          description="Tratamiento médico de varices y arañas vasculares, además del exclusivo aumento de gemelos masculino con rellenos corporales."
          treatments={[
            "Esclerosis de varices",
            "Láser Vascular (ENDOLÁSER)",
            "Aumento de gemelos · Exclusivo Hombre",
          ]}
          image="/images/sections/closeup-hombre-piernas.webp"
          imageAlt="Piernas masculinas — Maysoon"
          imageSide="right"
        />

        {/* ── Aumento de gemelos · destacado ── */}
        <GemelosFeatured />

        <ConsultaBlock
          title="¿Quieres una valoración corporal masculina?"
          description="El cuerpo masculino tiene su propia estructura. Reservamos una primera consulta para diseñar el protocolo que mejor responde a tu objetivo."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   EngrosamientoFeatured — bloque destacado con stats
   ───────────────────────────────────────────────── */

function EngrosamientoFeatured() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-10 lg:mt-12 rounded-3xl overflow-hidden bg-bg-dark text-text-light relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(184,115,85,0.22), transparent 60%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 p-10 lg:p-14">
        {/* Left: copy */}
        <div>
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30"
          >
            <Award size={12} strokeWidth={2.2} className="text-accent-gold" />
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              Exclusivo · Hombre
            </span>
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="font-display font-normal text-3xl lg:text-4xl text-text-light leading-[1.1] tracking-[-0.02em] mb-5"
          >
            <span className="block not-italic">Engrosamiento</span>
            <span className="block italic text-accent-gold">de Pene</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="font-body text-sm lg:text-base text-text-light/75 leading-[1.85] mb-5 max-w-xl"
          >
            Infiltración de ácido hialurónico corporal específicamente
            formulado para esta zona. Tratamiento ambulatorio, indoloro y
            con resultados visibles desde la primera y única sesión.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="flex flex-col gap-2.5"
          >
            {[
              "Procedimiento ambulatorio · sin baja",
              "Aplicación indolora",
              "Resultados visibles desde la primera sesión",
              "Atención discreta · espacio reservado",
            ].map((e) => (
              <motion.li
                key={e}
                variants={fadeInUp}
                className="flex items-start gap-2.5"
              >
                <span className="text-accent-gold mt-1 flex-shrink-0">✦</span>
                <span className="font-body text-sm text-text-light/70 leading-[1.65]">
                  {e}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: stats card */}
        <motion.div variants={fadeInUp}>
          <div className="rounded-2xl bg-text-light/5 border border-text-light/10 p-7 lg:p-8 backdrop-blur-sm h-full flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-accent-gold" />
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
                Datos clínicos
              </span>
            </div>
            <div className="flex flex-col divide-y divide-text-light/10">
              <Stat
                value="Hasta 4 cm"
                label="Ganancia de circunferencia"
                detail="en una sola sesión"
              />
              <Stat
                value="1 sesión"
                label="Tratamiento completo"
                detail="sin necesidad de retoque inmediato"
              />
              <Stat
                value="Hasta 2 años"
                label="Duración del resultado"
                detail="en la mayoría de pacientes"
              />
              <Stat
                value="Indoloro"
                label="Procedimiento ambulatorio"
                detail="sin baja médica"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Stat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <div className="font-display text-2xl lg:text-3xl text-accent-gold leading-none mb-1.5">
        {value}
      </div>
      <div className="font-body text-sm text-text-light/95 leading-[1.4]">
        {label}
      </div>
      {detail && (
        <div className="font-body text-xs text-text-light/45 leading-[1.4] mt-0.5">
          {detail}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   GemelosFeatured — bloque destacado para gemelos
   ───────────────────────────────────────────────── */

function GemelosFeatured() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-10 lg:mt-12 rounded-2xl bg-bg-dark text-text-light relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 100%, rgba(184,115,85,0.18), transparent 60%)",
        }}
      />
      <div className="relative p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-center">
        <div className="flex items-center gap-4">
          <span className="w-14 h-14 rounded-full bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center flex-shrink-0">
            <Activity size={22} strokeWidth={1.6} className="text-accent-gold" />
          </span>
          <div className="lg:hidden">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              Exclusivo · Hombre
            </span>
            <h4 className="font-display font-normal text-2xl text-text-light leading-tight tracking-[-0.01em] mt-1">
              Aumento de Gemelos
            </h4>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="hidden lg:flex items-center gap-3 mb-1.5">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              Exclusivo · Hombre
            </span>
          </div>
          <h4 className="hidden lg:block font-display font-normal text-2xl lg:text-3xl text-text-light leading-tight tracking-[-0.01em] mb-3">
            Aumento de Gemelos
          </h4>
          <p className="font-body text-sm lg:text-[15px] text-text-light/75 leading-[1.8]">
            Volumen y proyección del gemelo con rellenos corporales. Una de las
            firmas del catálogo masculino de Maysoon, especialmente demandada
            por hombres con asimetrías o falta de definición en la pierna.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
