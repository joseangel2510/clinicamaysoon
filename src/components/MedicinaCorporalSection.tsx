"use client";

import { motion } from "framer-motion";
import { Award, Zap, Droplet, Sparkles, Activity } from "lucide-react";
import { fadeInUp, staggerContainer, staggerFast } from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-cuello", label: "Cuello" },
  { id: "zona-brazo", label: "Axilas / Brazo" },
  { id: "zona-escote", label: "Escote" },
  { id: "zona-abdomen", label: "Abdomen" },
  { id: "zona-flancos", label: "Flancos" },
  { id: "zona-gluteos", label: "Glúteos" },
  { id: "zona-manos", label: "Manos" },
  { id: "zona-intima", label: "Zona Íntima" },
  { id: "zona-piernas", label: "Piernas" },
];

export function MedicinaCorporalSection() {
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
          description="Combinamos láser, hilos y bioestimulación para reafirmar el cuello, una de las zonas que más delata el paso del tiempo."
          treatments={[
            "Reducción de papada (ENDOLÁSER Fox III)",
            "Lifting Retensor cutáneo (Endopeel)",
            "Estimulador de colágeno (bioestimuladores)",
            "Hilos tensores",
            "PLASMAGE para lunares y verrugas",
            "Morpheus 8",
          ]}
          image="/images/sections/closeup-cuello.webp"
          imageAlt="Cuello y mandíbula — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · AXILAS / BRAZO ── */}
        <ZonaBlock
          id="zona-brazo"
          index={1}
          eyebrow="Zona Axilas y Brazo"
          title="Reafirmación y Bienestar"
          description="Tratamos la flacidez del brazo, la sudoración excesiva y la pigmentación de la zona axilar con tecnología y técnicas inyectables."
          treatments={[
            "ENDOLÁSER Brazos (Fox III)",
            "Mesoterapia Corporal",
            "Reducción de sudoración / Hiperhidrosis",
            "Blanqueamiento con peeling médico",
            "BodyTite — remodelación corporal avanzada",
            "Eliminación de tatuajes con láser",
            "Sueroterapia — recuperación de vitalidad",
          ]}
          image="/images/sections/closeup-brazo.webp"
          imageAlt="Brazo y hombro — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · ESCOTE ── */}
        <ZonaBlock
          id="zona-escote"
          index={2}
          eyebrow="Zona Escote"
          title="Luminosidad y Firmeza"
          description="Una zona delicada que se beneficia de tratamientos suaves pero efectivos. Devolvemos uniformidad, firmeza y luz."
          treatments={[
            "Plasma Rico en Plaquetas (PRP)",
            "Elevación de pechos con hilos tensores",
            "Eliminación de manchas con IPL (Luz Pulsada Intensa)",
            "Arañas vasculares con ENDOLÁSER",
          ]}
          image="/images/sections/closeup-escote.webp"
          imageAlt="Escote y clavícula — Maysoon"
          imageSide="right"
        />

        {/* ── 04 · ABDOMEN ── */}
        <ZonaBlock
          id="zona-abdomen"
          index={3}
          eyebrow="Zona Abdomen"
          title="Tratamiento Integral"
          description="La zona más completa: combinamos tecnologías inyectables, láser y radiofrecuencia para tratar grasa localizada y flacidez en una misma sesión."
          treatments={[
            "Rellenos Corporales",
            "Lifting Retensor cutáneo (Endopeel)",
            "Mesoterapia Corporal",
            "ENDOLÁSER (Fox III)",
            "Intralipoterapia — eliminación de grasa localizada",
            "Hilos tensores",
            "Morpheus 8",
            "BodyTite",
          ]}
          image="/images/sections/closeup-abdomen.webp"
          imageAlt="Abdomen — Maysoon"
          imageSide="left"
        />

        {/* ── 05 · FLANCOS ── */}
        <ZonaBlock
          id="zona-flancos"
          index={4}
          eyebrow="Zona Flancos"
          title="Adiós a los Michelines"
          description="Tratamientos focalizados en el contorno de la cintura para reducir grasa localizada con resultados visibles desde la primera sesión."
          treatments={[
            "Grasa localizada con ENDOLÁSER (Fox III)",
            "Mesoterapia Corporal",
            "Intralipoterapia con AQUALIX",
            "BodyTite",
          ]}
          image="/images/sections/closeup-flancos.webp"
          imageAlt="Cintura y flancos — Maysoon"
          imageSide="right"
        />

        {/* ── 06 · GLÚTEOS ── */}
        <ZonaBlock
          id="zona-gluteos"
          index={5}
          eyebrow="Zona Glúteos"
          title="Volumen y Elevación"
          description="Recuperamos firmeza y proyección sin cirugía: rellenos para volumen, hilos para elevación y tecnologías para tratar cartucheras y celulitis."
          treatments={[
            "Relleno corporal",
            "Tratamiento cartucheras con ENDOLÁSER (Fox III)",
            "Elevación de glúteos (Lifting Endopeel)",
            "Mesoterapia Corporal",
            "Intralipoterapia con AQUALIX",
            "BodyTite",
          ]}
          image="/images/sections/closeup-gluteos.webp"
          imageAlt="Espalda baja y glúteos — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · MANOS ── */}
        <ZonaBlock
          id="zona-manos"
          index={6}
          eyebrow="Zona Manos"
          title="Rejuvenecimiento Visible"
          description="Las manos son la otra carta de presentación. Eliminamos manchas y devolvemos volumen al dorso para una imagen más joven."
          treatments={[
            "Eliminación de manchas con IPL",
            "Rejuvenecimiento de manos con rellenos corporales",
          ]}
          image="/images/sections/closeup-manos.webp"
          imageAlt="Manos elegantes — Maysoon"
          imageSide="right"
        />

        {/* ── 08 · ZONA ÍNTIMA ── */}
        <ZonaBlock
          id="zona-intima"
          index={7}
          eyebrow="Zona Íntima"
          title="Cuidado Discreto"
          description="Tratamientos íntimos con la máxima discreción y técnica. Espacio reservado, valoración personalizada y máximo respeto."
          treatments={[
            "Aumento de labios mayores",
            "Eliminación de verrugas con PLASMAGE",
          ]}
          image="/images/sections/closeup-intima.webp"
          imageAlt="Detalle estético — Maysoon"
          imageSide="left"
        />

        {/* ── 09 · PIERNAS ── */}
        <ZonaBlock
          id="zona-piernas"
          index={8}
          eyebrow="Zona Piernas"
          title="Vasos y Celulitis"
          description="Tratamiento médico de varices, arañas vasculares y celulitis. Resultados estéticos y funcionales con técnicas seguras."
          treatments={[
            "Esclerosis de varices",
            "Tratamiento de celulitis",
            "Arañas vasculares con láser vascular",
          ]}
          image="/images/sections/closeup-piernas.webp"
          imageAlt="Piernas — Maysoon"
          imageSide="right"
        />

        {/* ── DESTACADOS: Tecnologías clave ── */}
        <DestacadosCorporales />

        <ConsultaBlock
          title="¿Quieres un protocolo corporal a medida?"
          description="Cada cuerpo necesita una combinación distinta. Reservamos una primera valoración para diseñar el plan que mejor se ajusta a ti."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   DestacadosCorporales — 4 cards 2-col + ENDOLÁSER full-width
   ───────────────────────────────────────────────── */

function DestacadosCorporales() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="mt-16 lg:mt-20"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="text-center mb-10 lg:mb-12">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="block w-10 h-px bg-accent-gold" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
            Tecnologías Destacadas
          </span>
          <span className="block w-10 h-px bg-accent-gold" />
        </div>
        <h3
          className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
        >
          Las Herramientas{" "}
          <span className="italic text-accent-gold/85">de Nuestros Resultados</span>
        </h3>
      </motion.div>

      {/* 2x2 grid of featured */}
      <motion.div
        variants={staggerFast}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
      >
        <FeaturedCard
          icon={Award}
          badge="Aprobado por la FDA"
          title="Morpheus 8 · Aplicación Corporal"
          description="Mínimamente invasiva, con resultados desde la primera sesión. Trata flacidez de brazos (alas de murciélago), abdomen (michelines), cartucheras, glúteos (celulitis + firmeza), muslos (doble pliegue), hiperhidrosis y estrías."
          extras={[
            "Brazos · abdomen · cartucheras · glúteos · muslos",
            "También: hiperhidrosis y estrías",
          ]}
        />

        <FeaturedCard
          icon={Sparkles}
          badge="Remodelación corporal"
          title="BodyTite"
          description="Tratamiento avanzado de remodelación corporal pensado para maximizar resultados físicos. Combina tensado de la piel y eliminación de grasa en una sola sesión."
          extras={[
            "Brazos, abdomen, flancos y glúteos",
            "Resultados visibles a corto plazo",
          ]}
        />

        <FeaturedCard
          icon={Droplet}
          badge="Sin cirugía"
          title="Intralipoterapia · AQUALIX"
          description="Tratamiento inyectable para eliminar grasa localizada sin pasar por quirófano. Aplicación rápida y precisa sobre la zona a tratar."
          extras={[
            "Indicado en abdomen, flancos y glúteos",
            "Sesiones espaciadas según protocolo personalizado",
          ]}
        />

        <FeaturedCard
          icon={Activity}
          badge="Bienestar integral"
          title="Sueroterapia"
          description="Tratamiento intravenoso pensado para recuperar vitalidad, energía y bienestar. Cocktail personalizado de vitaminas y aminoácidos según tu estado."
          extras={[
            "Impulso de energía y recuperación",
            "Combinación personalizada por sesión",
          ]}
        />
      </motion.div>

      {/* ENDOLÁSER Fox III - full width feature */}
      <motion.div
        id="endolaser-fox-iii"
        variants={fadeInUp}
        className="scroll-mt-24 mt-6 lg:mt-8"
      >
        <div className="rounded-2xl bg-bg-dark text-text-light relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 100% 50%, rgba(184,115,85,0.22), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 p-7 lg:p-10 items-center">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-full bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center flex-shrink-0">
                <Zap size={22} strokeWidth={1.6} className="text-accent-gold" />
              </span>
              <div className="lg:hidden">
                <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
                  Tecnología transversal
                </span>
                <h4 className="font-display font-normal text-2xl text-text-light leading-tight tracking-[-0.01em] mt-1">
                  ENDOLÁSER Fox III
                </h4>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="hidden lg:flex items-center gap-3 mb-2">
                <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
                  Tecnología transversal
                </span>
              </div>
              <h4 className="hidden lg:block font-display font-normal text-2xl lg:text-3xl text-text-light leading-tight tracking-[-0.01em] mb-3">
                ENDOLÁSER Fox III
              </h4>
              <p className="font-body text-sm lg:text-[15px] text-text-light/75 leading-[1.8] mb-4">
                La tecnología láser que está detrás de muchos de nuestros
                tratamientos: reducción de papada, eliminación de grasa en
                brazos, abdomen, flancos y cartucheras, eliminación de bolsas en
                ojeras y endolifting facial.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {[
                  "Papada y cuello",
                  "Brazos y axilas",
                  "Abdomen y flancos",
                  "Cartucheras y glúteos",
                  "Bolsas de ojeras",
                  "Endolifting facial",
                ].map((u) => (
                  <li key={u} className="flex items-center gap-2.5">
                    <span className="text-accent-gold flex-shrink-0">✦</span>
                    <span className="font-body text-sm text-text-light/65 leading-[1.5]">
                      {u}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────
   FeaturedCard — card oscura con icono + badge
   ───────────────────────────────────────────────── */

function FeaturedCard({
  icon: Icon,
  badge,
  title,
  description,
  extras = [],
}: {
  icon: typeof Award;
  badge: string;
  title: string;
  description: string;
  extras?: string[];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl bg-bg-dark text-text-light p-7 lg:p-9 relative overflow-hidden h-full flex flex-col"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 100%, rgba(184,115,85,0.18), transparent 60%)",
        }}
      />
      <div className="relative flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-10 rounded-full bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center flex-shrink-0">
            <Icon size={16} strokeWidth={1.8} className="text-accent-gold" />
          </span>
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-accent-gold">
            {badge}
          </span>
        </div>
        <h4 className="font-display font-normal text-2xl lg:text-3xl text-text-light leading-tight tracking-[-0.01em] mb-4">
          {title}
        </h4>
        <p className="font-body text-sm lg:text-[15px] text-text-light/75 leading-[1.8] mb-5">
          {description}
        </p>
        {extras.length > 0 && (
          <ul className="flex flex-col gap-2 mt-auto">
            {extras.map((e) => (
              <li key={e} className="flex items-start gap-2.5">
                <span className="text-accent-gold mt-1 flex-shrink-0">✦</span>
                <span className="font-body text-sm text-text-light/65 leading-[1.6]">
                  {e}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
