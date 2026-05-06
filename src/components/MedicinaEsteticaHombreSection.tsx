"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, Zap } from "lucide-react";
import { fadeInUp, staggerContainer, staggerFast } from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { PricingTable } from "./PricingTable";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-capilar", label: "Capilar" },
  { id: "zona-acne", label: "Acné y Manchas" },
  { id: "zona-facial", label: "Facial" },
  { id: "zona-frente", label: "Frente" },
  { id: "zona-entrecejo", label: "Entrecejo" },
  { id: "zona-cejas", label: "Cejas" },
  { id: "zona-parpados", label: "Párpados" },
  { id: "zona-ojeras", label: "Ojeras" },
  { id: "zona-nariz", label: "Nariz" },
  { id: "zona-mandibula", label: "Mandíbula" },
  { id: "zona-labios", label: "Labios" },
];

export function MedicinaEsteticaHombreSection() {
  return (
    <section className="bg-bg-primary pt-12 pb-20 lg:pb-28">
      {/* ── Zona nav ── */}
      <div className="mb-12 lg:mb-16">
        <ZonaNav zonas={zonasNav} />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── 01 · CAPILAR ── */}
        <ZonaBlock
          id="zona-capilar"
          index={0}
          eyebrow="Zona Capilar"
          title="Cuero Cabelludo y Cabello"
          description="Tratamiento integral capilar para hombre: desde mantenimiento médico para frenar la caída hasta soluciones definitivas como el trasplante FUE y la tricopigmentación."
          treatments={[
            "Mesoterapia Capilar",
            "Factores de crecimiento (PRP)",
            "Tricopigmentación capilar",
            "Trasplante capilar FUE",
          ]}
          image="/images/sections/closeup-hombre-capilar.webp"
          imageAlt="Cuero cabelludo masculino — Maysoon TAN Pearl"
          imageSide="right"
        />

        {/* ── 02 · ACNÉ Y MANCHAS ── */}
        <ZonaBlock
          id="zona-acne"
          index={1}
          eyebrow="Acné y Manchas"
          title="Renovación de la Piel"
          description="Combinamos láser, radiofrecuencia y peelings específicos para tratar marcas de acné, lesiones vasculares e hiperpigmentación. Incluye protocolos exclusivos en nuestro catálogo masculino."
          treatments={[
            "Marcas de acné con Láser Erbio YAG",
            "Láser Vascular",
            "Luz Pulsada Intensa (IPL)",
            "Morpheus 8",
            "Lumixa",
            "Carbonpeel",
          ]}
          image="/images/sections/closeup-hombre-acne.webp"
          imageAlt="Piel masculina renovada — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── 03 · FACIAL ── */}
        <ZonaBlock
          id="zona-facial"
          index={2}
          eyebrow="Zona Facial"
          title="Tratamientos de Rostro"
          description="El bloque central de la medicina estética masculina. Rellenos, hilos, láser y bioestimulación combinados según las necesidades reales de tu piel."
          treatments={[
            "Rellenos Faciales con ácido hialurónico",
            "Plasma-Gel relleno",
            "Mesoterapia Facial",
            "Lifting Retensor cutáneo (Endopeel)",
            "Factores de crecimiento (PRP)",
            "Hilos Tensores",
            "Eliminación de manchas con Luz Pulsada Intensa (IPL)",
            "DermaPen — micropunción",
            "Endolifting (ENDOLÁSER Fox III)",
            "Resurfacing con Láser Erbio YAG",
          ]}
          image="/images/sections/closeup-hombre-facial.webp"
          imageAlt="Retrato editorial masculino — Maysoon TAN Pearl"
          imageOrientation="portrait"
          imageSide="right"
        />

        {/* ── Tarifas Rellenos + Hilos lado a lado ── */}
        <FacialPricingGridHombre />

        {/* ── 04 · FRENTE ── */}
        <ZonaBlock
          id="zona-frente"
          index={3}
          eyebrow="Zona Frente"
          title="Líneas de Expresión"
          description="Suavizamos las arrugas de la frente sin perder el carácter de tu mirada. Tratamientos reversibles, dosis pensadas para piel masculina."
          treatments={[
            "Ácido hialurónico (rellenos faciales)",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-hombre-frente.webp"
          imageAlt="Frente masculina — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── 05 · ENTRECEJO ── */}
        <ZonaBlock
          id="zona-entrecejo"
          index={4}
          eyebrow="Arrugas Entrecejo"
          title="Mirada Distendida"
          description="Relajación selectiva del músculo del entrecejo. Adiós al gesto de tensión sin perder expresión natural."
          treatments={["Neuromodulación (toxina botulínica)"]}
          image="/images/sections/closeup-hombre-entrecejo.webp"
          imageAlt="Entrecejo masculino — Maysoon TAN Pearl"
          imageSide="right"
        />

        {/* ── 06 · CEJAS ── */}
        <ZonaBlock
          id="zona-cejas"
          index={5}
          eyebrow="Zona Cejas"
          title="Marco de la Mirada"
          description="Tratamientos de cejas pensados para hombre: definición, tracción y pigmentación con resultados sutiles y naturales."
          treatments={[
            "Micropigmentación",
            "Lifting con hilos tensores",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-hombre-cejas.webp"
          imageAlt="Ceja masculina — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── 07 · PÁRPADOS ── */}
        <ZonaBlock
          id="zona-parpados"
          index={6}
          eyebrow="Zona Párpados"
          title="Sin Quirófano"
          description="Tensado del párpado y reducción del exceso de piel mediante tecnología plasma. Sin cirugía, recuperación rápida y sin baja."
          treatments={["Blefaroplastia con PLASMAGE (sin cirugía)"]}
          image="/images/sections/closeup-hombre-parpados.webp"
          imageAlt="Párpado masculino — Maysoon TAN Pearl"
          imageSide="right"
        />

        {/* ── 08 · OJERAS ── */}
        <ZonaBlock
          id="zona-ojeras"
          index={7}
          eyebrow="Zona Ojeras"
          title="Mirada Descansada"
          description="Tratamos surcos, oscurecimiento y bolsas con técnicas específicas para el contorno de ojos masculino. Producto y dosis ajustados."
          treatments={[
            "Corrección de ojeras con Redensity II de Teoxane",
            "Plasmage / Blefaroplastia",
            "Eliminación de bolsas con Endoláser",
          ]}
          image="/images/sections/closeup-hombre-ojeras.webp"
          imageAlt="Contorno de ojos masculino — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── 09 · NARIZ ── */}
        <ZonaBlock
          id="zona-nariz"
          index={8}
          eyebrow="Zona Nariz"
          title="Rinomodelación"
          description="Corrección no quirúrgica del perfil nasal con ácido hialurónico. Modificación visible al instante, recuperación inmediata."
          treatments={[
            "Rinomodelación con ácido hialurónico",
            "Correcciones de dorso, punta y simetría",
          ]}
          image="/images/sections/closeup-hombre-nariz.webp"
          imageAlt="Perfil masculino — Maysoon TAN Pearl"
          imageOrientation="portrait"
          imageSide="right"
        />

        {/* ── 10 · MANDÍBULA ── */}
        <ZonaBlock
          id="zona-mandibula"
          index={9}
          eyebrow="Zona Mandíbula"
          title="Definición Masculina"
          description="Reforzamos el ángulo mandibular y tratamos el bruxismo con técnicas reversibles. Esta es la zona que más diferencia el catálogo masculino."
          treatments={[
            "Corrección de Bruxismo",
            "Armonización mandibular",
            "MASCULOOK — definición masculina del ángulo mandibular",
          ]}
          image="/images/sections/closeup-hombre-mandibula.webp"
          imageAlt="Mandíbula masculina definida — Maysoon TAN Pearl"
          imageSide="left"
        />

        {/* ── MASCULOOK · Featured ── */}
        <MasculookFeatured />

        {/* ── 11 · LABIOS ── */}
        <ZonaBlock
          id="zona-labios"
          index={10}
          eyebrow="Zona Labios"
          title="Aumento Sutil"
          description="Diseño masculino del contorno labial buscando volumen natural y armonía con el resto del rostro."
          treatments={["Aumento de labios"]}
          image="/images/sections/closeup-hombre-labios.webp"
          imageAlt="Labios masculinos — Maysoon TAN Pearl"
          imageSide="right"
        />

        {/* ── Neuromodulación + Tarifas (mismas que Mujer) ── */}
        <NeuromodulacionFeaturedHombre />

        <ConsultaBlock
          title="¿Quieres una valoración masculina personalizada?"
          description="El rostro masculino tiene su propia estructura. Diseñamos un protocolo que respeta tus rasgos y refuerza lo que ya funciona."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   FacialPricingGridHombre — mismas tarifas que Mujer
   ───────────────────────────────────────────────── */

function FacialPricingGridHombre() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="mt-2"
    >
      <motion.p
        variants={fadeInUp}
        className="font-body italic text-sm text-text-secondary text-center mb-6"
      >
        Tarifas idénticas a la sección Mujer · transparencia total.
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <PricingTable
          title="Rellenos Faciales · Teoxane"
          intro="El relleno más extendido por su alta tolerancia y versatilidad. Hidrata, revoluminiza y produce un efecto lifting natural."
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

        <PricingTable
          title="Hilos Tensores"
          intro="Tres tipos según necesidad: PDO lisos, PDO arponados y suturas APTOS. Sesión 30–45 min, efecto definitivo a los 2 meses, duración hasta 18 meses."
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
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────
   MASCULOOK — bloque destacado exclusivo hombre
   ───────────────────────────────────────────────── */

function MasculookFeatured() {
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
            "radial-gradient(ellipse at 20% 80%, rgba(184,115,85,0.22), transparent 60%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 lg:gap-12 p-10 lg:p-14 items-center">
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
            className="font-display font-normal text-3xl lg:text-5xl text-text-light leading-[1.05] tracking-[-0.02em] mb-5"
          >
            <span className="block not-italic">MASCULOOK</span>
            <span className="block italic text-accent-gold text-2xl lg:text-3xl mt-2">
              Definición masculina del ángulo mandibular
            </span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="font-body text-sm lg:text-base text-text-light/75 leading-[1.85] mb-5 max-w-xl"
          >
            Protocolo desarrollado para reforzar el ángulo mandibular masculino,
            ganar definición lateral y conseguir una mandíbula más marcada sin
            perder naturalidad. Una de las firmas del catálogo masculino de
            Maysoon.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="flex flex-col gap-2.5"
          >
            {[
              "Definición precisa del ángulo mandibular",
              "Refuerzo lateral y proyección del mentón",
              "Resultado masculino, natural y reversible",
              "Combinable con corrección de bruxismo",
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

        {/* Right: visual placeholder using an icon stack */}
        <motion.div
          variants={fadeInUp}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[380px]">
            {/* Decorative concentric rings */}
            <div className="absolute inset-0 rounded-full border border-accent-gold/15" />
            <div className="absolute inset-8 rounded-full border border-accent-gold/20" />
            <div className="absolute inset-16 rounded-full border border-accent-gold/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Zap
                  size={56}
                  strokeWidth={1.2}
                  className="text-accent-gold mx-auto mb-4"
                />
                <span className="font-display italic text-text-light/80 text-lg block">
                  Solo hombre
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────
   NeuromodulacionFeaturedHombre
   ───────────────────────────────────────────────── */

function NeuromodulacionFeaturedHombre() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
            En hombre buscamos relajar musculatura sin perder expresión. El
            objetivo es un rostro descansado, no un rostro &ldquo;tratado&rdquo;.
            Mismo protocolo y mismas tarifas que en la sección Mujer.
          </motion.p>

          <motion.ul
            variants={staggerContainer}
            className="flex flex-col gap-2.5 mb-2"
          >
            {[
              "Sesión de 30 min, indolora",
              "Efecto visible entre los 3 y 5 días",
              "Efecto completo a los 15 días con sesión de revisión",
              "Trabajamos con Botox, Azzalure o Bocouture",
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
