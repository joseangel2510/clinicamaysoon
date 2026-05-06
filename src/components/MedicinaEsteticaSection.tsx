"use client";

import { motion } from "framer-motion";
import { Sparkles, Award } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { PricingTable } from "./PricingTable";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-capilar", label: "Capilar" },
  { id: "zona-frente", label: "Frente" },
  { id: "zona-entrecejo", label: "Entrecejo" },
  { id: "zona-facial", label: "Facial" },
  { id: "zona-acne", label: "Acné y Manchas" },
  { id: "zona-ojeras", label: "Ojeras" },
  { id: "zona-cejas", label: "Cejas" },
  { id: "zona-parpados", label: "Párpados" },
  { id: "zona-nariz", label: "Nariz" },
  { id: "zona-labios", label: "Labios" },
  { id: "zona-mandibula", label: "Mandíbula" },
];

export function MedicinaEsteticaSection() {
  return (
    <section className="bg-bg-primary pt-12 pb-20 lg:pb-28">
      {/* ── Sticky-feel zona nav ── */}
      <div className="mb-16 lg:mb-20">
        <ZonaNav zonas={zonasNav} />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── ZONA: CAPILAR ── */}
        <ZonaBlock
          id="zona-capilar"
          index={0}
          eyebrow="Zona Capilar"
          title="Cuero Cabelludo"
          description="Tratamientos de cabecera para frenar la caída y reforzar el folículo desde dentro. Cada protocolo se adapta al patrón capilar de cada paciente."
          treatments={[
            "Mesoterapia Capilar",
            "Factores de crecimiento (PRP)",
          ]}
        />

        {/* ── ZONA: FRENTE ── */}
        <ZonaBlock
          id="zona-frente"
          index={1}
          eyebrow="Zona Frente"
          title="Líneas de Expresión"
          description="Suavizamos las arrugas de la frente con técnicas reversibles, manteniendo la naturalidad y el carácter de tu mirada."
          treatments={[
            "Ácido hialurónico (rellenos faciales)",
            "Neuromoduladores (toxina botulínica)",
          ]}
        />

        {/* ── ZONA: ENTRECEJO ── */}
        <ZonaBlock
          id="zona-entrecejo"
          index={2}
          eyebrow="Arrugas Entrecejo"
          title="Mirada Distendida"
          description="Relajación selectiva del músculo del entrecejo. Adiós al gesto preocupado sin perder expresión."
          treatments={["Neuromoduladores (toxina botulínica)"]}
        />

        {/* ── ZONA: FACIAL (la más densa) ── */}
        <ZonaBlock
          id="zona-facial"
          index={3}
          eyebrow="Zona Facial"
          title="Tratamientos de Rostro"
          description="El corazón de nuestra medicina estética. Rellenos, hilos, láser, radiofrecuencia y bioestimulación combinados según las necesidades reales de tu piel."
          treatments={[
            "Rellenos Faciales con ácido hialurónico (Teoxane)",
            "Plasma-Gel relleno",
            "Mesoterapia Facial",
            "Lifting Retensor cutáneo (Endopeel)",
            "Factores de crecimiento (PRP)",
            "Hilos Tensores (PDO, PCLA, APTOS)",
            "Eliminación de manchas con Luz Pulsada Intensa (IPL)",
            "DermaPen — micropunción para arrugas, manchas y cicatrices",
            "Resurfacing con Láser Erbio YAG",
            "Endolifting (ENDOLÁSER Fox III)",
            "Morpheus 8 — radiofrecuencia fraccionada con microagujas",
            "Estimuladores de colágeno (ácido poliláctico)",
          ]}
          image="/images/sections/closeup-rostro.webp"
          imageAlt="Close-up editorial de rostro femenino — Maysoon TAN Pearl"
          imageOrientation="portrait"
        >
          {/* Pricing — Rellenos faciales (Teoxane) */}
          <PricingTable
            title="Rellenos Faciales · Teoxane (ácido hialurónico)"
            intro="El relleno más extendido por su alta tolerancia y versatilidad. Hidrata, revoluminiza y produce un efecto lifting natural. Tratamiento indoloro con reincorporación inmediata."
            rows={[
              { label: "Labios", price: "280 €" },
              { label: "Ojeras", detail: "1 vial", price: "350 €" },
              { label: "Ojeras", detail: "2 viales", price: "550 €" },
              { label: "Rinomodelación", detail: "1 vial", price: "450 €" },
              { label: "Otras áreas faciales", detail: "1 vial", price: "280 €" },
              { label: "Otras áreas faciales", detail: "2 viales", price: "540 €" },
              { label: "Otras áreas faciales", detail: "3 viales", price: "780 €" },
              { label: "Otras áreas faciales", detail: "4 viales", price: "1.000 €" },
              { label: "Otras áreas faciales", detail: "5 viales", price: "1.200 €" },
            ]}
            footnote="Presupuestos personalizados para fullface o técnica MLT 3.1."
          />

          {/* Pricing — Hilos tensores */}
          <PricingTable
            title="Hilos Tensores"
            intro="Tres tipos según necesidad: PDO lisos (generadores de colágeno), PDO arponados (efecto lifting inmediato + colagénesis) y suturas APTOS (última generación, ácido poliláctico + policaprolactona, máxima tracción). Sesión 30–45 min, efecto definitivo a los 2 meses, duración hasta 18 meses."
            rows={[
              { label: "PDO monofilamento", price: "desde 10 €/hilo" },
              {
                label: "Arponados Dual y Fox Eyes",
                detail: "PDO · pack 2 hilos dobles",
                price: "desde 350 €",
              },
              {
                label: "Arponados PCLA",
                detail: "pack 2 hilos dobles",
                price: "desde 450 €",
              },
              {
                label: "Otoplastia con APTOS permanentes",
                detail: "ambas orejas",
                price: "900 €",
              },
            ]}
          />

          {/* Featured treatment — Morpheus 8 */}
          <FeaturedTreatment
            badge="Aprobado por la FDA"
            title="Morpheus 8"
            description="Radiofrecuencia fraccionada con microagujas. Primer y único dispositivo que trata acumulación de grasa y flacidez cutánea en un solo tratamiento. Rejuvenece la piel, estimula colágeno, reafirma, retensa y elimina grasa de forma permanente."
            extras={[
              "También trata celulitis, arrugas, hiperhidrosis, marcas de acné y estrías",
              "Resultados visibles desde la primera sesión",
            ]}
          />

          {/* Featured treatment — Estimuladores de colágeno */}
          <FeaturedTreatment
            badge="Bioestimulación"
            title="Estimuladores de Colágeno · Ácido Poliláctico"
            description="Biopolímero reabsorbible y biocompatible. No aporta volumen inmediato — estimula la producción natural de colágeno. Indicado para rostro, cuello, escote y brazos a partir de los 35 años."
            extras={[
              "2–3 sesiones espaciadas 4–6 semanas",
              "Mantenimiento anual recomendado",
            ]}
          />
        </ZonaBlock>

        {/* ── ZONA: ACNÉ Y MANCHAS ── */}
        <ZonaBlock
          id="zona-acne"
          index={4}
          eyebrow="Acné y Manchas"
          title="Renovación de la Piel"
          description="Combinamos tecnologías láser y radiofrecuencia para tratar marcas de acné, lesiones vasculares e hiperpigmentación con resultados visibles."
          treatments={[
            "Marcas de acné con Láser Erbio YAG",
            "Láser Vascular",
            "Luz Pulsada Intensa (IPL)",
            "Morpheus 8",
          ]}
        />

        {/* ── ZONA: OJERAS ── */}
        <ZonaBlock
          id="zona-ojeras"
          index={5}
          eyebrow="Zona Ojeras"
          title="Mirada Descansada"
          description="Tratamos surcos, oscurecimiento y bolsas con técnicas específicas para el contorno de ojos. Producto y dosis pensados para esta zona delicada."
          treatments={[
            "Corrección de ojeras con Redensity II de Teoxane (específico para ojeras)",
            "Plasmage / Blefaroplastia sin cirugía",
            "Eliminación de bolsas con Endoláser",
          ]}
          image="/images/sections/closeup-ojos.webp"
          imageAlt="Close-up editorial de ojo y ceja — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── ZONA: CEJAS ── */}
        <ZonaBlock
          id="zona-cejas"
          index={6}
          eyebrow="Zona Cejas"
          title="Marco de la Mirada"
          description="Diseñamos cejas a tu medida combinando técnicas estéticas y médicas: pigmentación, tracción con hilos o corrección de la posición."
          treatments={[
            "Micropigmentación / Microblading",
            "Lifting con hilos tensores",
            "Neuromoduladores (toxina botulínica)",
          ]}
        />

        {/* ── ZONA: PÁRPADOS ── */}
        <ZonaBlock
          id="zona-parpados"
          index={7}
          eyebrow="Zona Párpados"
          title="Sin Quirófano"
          description="Tensado del párpado y reducción del exceso de piel mediante tecnología plasma, sin cirugía y con recuperación rápida."
          treatments={["Blefaroplastia con PLASMAGE (sin cirugía)"]}
        />

        {/* ── ZONA: NARIZ ── */}
        <ZonaBlock
          id="zona-nariz"
          index={8}
          eyebrow="Zona Nariz"
          title="Rinomodelación"
          description="Corrección no quirúrgica del perfil nasal con ácido hialurónico. Modificación visible al instante, recuperación inmediata y resultado natural."
          treatments={[
            "Rinomodelación con ácido hialurónico",
            "Correcciones de dorso, punta y simetría",
          ]}
          image="/images/sections/closeup-perfil.webp"
          imageAlt="Perfil editorial de rostro — Maysoon TAN Pearl"
          imageOrientation="portrait"
        />

        {/* ── ZONA: LABIOS ── */}
        <ZonaBlock
          id="zona-labios"
          index={9}
          eyebrow="Zona Labios"
          title="Aumento y Definición"
          description="Uno de nuestros tratamientos más demandados. Diseño personalizado del volumen y contorno labial, siempre buscando la naturalidad."
          treatments={[
            "Aumento de labios",
            "Código de barras (arrugas peribucales)",
          ]}
          image="/images/sections/closeup-labios.webp"
          imageAlt="Close-up editorial de labios — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── ZONA: MANDÍBULA ── */}
        <ZonaBlock
          id="zona-mandibula"
          index={10}
          eyebrow="Zona Mandíbula"
          title="Definición del Óvalo"
          description="Tratamientos para el bruxismo y para la armonización del tercio inferior, con técnicas reversibles y resultados naturales."
          treatments={[
            "Corrección de Bruxismo",
            "Armonización mandibular",
          ]}
        />

        {/* ── FEATURED: NEUROMODULACIÓN ── */}
        <NeuromodulacionFeatured />

        <ConsultaBlock
          title="¿Tu caso necesita un protocolo combinado?"
          description="Cada rostro es único. Reservamos una primera valoración médica para diseñar el plan que mejor responde a tu objetivo."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   FeaturedTreatment — destacado dentro de un zona
   ───────────────────────────────────────────────── */

function FeaturedTreatment({
  badge,
  title,
  description,
  extras = [],
}: {
  badge: string;
  title: string;
  description: string;
  extras?: string[];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl bg-bg-dark text-text-light p-7 lg:p-9 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 100%, rgba(184,115,85,0.18), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30">
          <Award size={12} strokeWidth={2.2} className="text-accent-gold" />
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-accent-gold">
            {badge}
          </span>
        </div>
        <h4 className="font-display font-normal text-2xl lg:text-3xl text-text-light leading-tight tracking-[-0.01em] mb-4">
          {title}
        </h4>
        <p className="font-body text-sm lg:text-[15px] text-text-light/75 leading-[1.8] mb-5 max-w-2xl">
          {description}
        </p>
        {extras.length > 0 && (
          <ul className="flex flex-col gap-2">
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

/* ─────────────────────────────────────────────────
   NeuromodulacionFeatured — bloque destacado al final
   ───────────────────────────────────────────────── */

function NeuromodulacionFeatured() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-16 lg:mt-20 rounded-3xl overflow-hidden bg-bg-dark text-text-light relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(184,115,85,0.18), transparent 60%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 p-10 lg:p-14">
        {/* Left: copy */}
        <div>
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30"
          >
            <Sparkles size={12} strokeWidth={2.2} className="text-accent-gold" />
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              Neuromodulación · Toxina botulínica
            </span>
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="font-display font-normal text-3xl lg:text-4xl text-text-light leading-[1.1] tracking-[-0.02em] mb-5"
          >
            <span className="block not-italic">Menos es</span>
            <span className="block italic text-accent-gold">Más Natural</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="font-body text-sm lg:text-base text-text-light/75 leading-[1.85] mb-5 max-w-xl"
          >
            Nuestra filosofía no busca &ldquo;planchar&rdquo; el rostro: relaja
            la musculatura hiperactiva para conseguir un aspecto más suave y
            relajado. Minimiza arrugas profundas y elimina las finas, manteniendo
            la expresión.
          </motion.p>

          <motion.ul variants={staggerContainer} className="flex flex-col gap-2.5 mb-2">
            {[
              "Sesión de 30 min, indolora",
              "Efecto visible entre los 3 y 5 días",
              "Efecto completo a los 15 días con sesión de revisión",
              "Trabajamos con Botox, Azzalure o Bocouture (consulta también por Alluzience)",
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

        {/* Right: pricing */}
        <motion.div variants={fadeInUp}>
          <div className="rounded-2xl bg-text-light/5 border border-text-light/10 p-7 lg:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px bg-accent-gold" />
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
                Tarifas
              </span>
            </div>
            <ul className="flex flex-col divide-y divide-text-light/10">
              {[
                {
                  label: "Zona única",
                  detail: "frente o entrecejo",
                  price: "100 €",
                },
                {
                  label: "Zona única",
                  detail: "patas de gallo",
                  price: "120 €",
                },
                { label: "Tercio superior completo", price: "300 €" },
                { label: "Hiperhidrosis", price: "500 €" },
              ].map((r) => (
                <li
                  key={`${r.label}-${r.price}`}
                  className="flex items-baseline justify-between gap-4 py-3.5"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="font-body text-sm text-text-light/95 leading-[1.5]">
                      {r.label}
                    </span>
                    {r.detail && (
                      <span className="font-body text-xs text-text-light/45 leading-[1.5] mt-0.5">
                        {r.detail}
                      </span>
                    )}
                  </div>
                  <span className="font-display text-lg text-accent-gold whitespace-nowrap">
                    {r.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
