"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { StatsCard } from "@/components/StatsCard";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ComparisonBlock } from "@/components/ComparisonBlock";
import { ZonePriceCard } from "@/components/ZonePriceCard";
import { PricingTable } from "@/components/PricingTable";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";
import { fadeInUp, staggerFast } from "@/lib/animations";

const zones = [
  {
    category: "Mini",
    sessionPrice: "12 €",
    bonoPrice: "54 €",
    zones: [
      "Areola",
      "Línea alba",
      "Labio superior",
      "Patillas",
      "Mentón",
      "Entrecejo",
      "Pómulos",
      "Pies",
      "Nuca",
    ],
  },
  {
    category: "Pequeña 1",
    sessionPrice: "20 €",
    bonoPrice: "90 €",
    zones: [
      "Axilas",
      "Ingles",
      "Flancos",
      "Glúteos",
      "Hombros",
      "Escote",
      "Medio Facial",
      "Interglútea",
      "Manos",
    ],
  },
  {
    category: "Pequeña 2",
    sessionPrice: "33 €",
    bonoPrice: "149 €",
    zones: [
      "Abdomen",
      "Pecho",
      "Medias Piernas",
      "Medios Brazos",
      "Media Espalda",
      "Facial Completo",
      "Brasileñas",
      "Cuello + Marcado de Barba",
      "Glúteos + Interglútea",
    ],
    highlight: true,
  },
  {
    category: "Mediana",
    sessionPrice: "50 €",
    bonoPrice: "225 €",
    zones: ["Pecho + Abdomen", "Espalda", "Brazos enteros", "Barba hombre"],
  },
  {
    category: "Grande",
    sessionPrice: "66 €",
    bonoPrice: "297 €",
    zones: ["Piernas completas", "Genital Masculino"],
  },
];

const combos = [
  {
    label: "Combo 1 · 2 Pequeñas 1 + 1 Grande",
    detail: "sesión / pack 5",
    price: "95 € · 455 €",
  },
  {
    label: "Combo 2 · 2 Pequeñas 1",
    detail: "sesión / pack 5",
    price: "36 € · 170 €",
  },
  {
    label: "Combo 3 · 1 Grande + 1 Pequeña 1",
    detail: "sesión / pack 5",
    price: "78 € · 365 €",
  },
  {
    label: "Combo 4 · 1 Pequeña 1 + 1 Pequeña 2",
    detail: "sesión / pack 5",
    price: "47 € · 265 €",
  },
  {
    label: "Combo 5 · 2 Pequeñas 1 + 1 Pequeña 2",
    detail: "sesión / pack 5",
    price: "65 € · 310 €",
  },
  {
    label: "Combo 6 · 1 Mediana + 1 Pequeña 1",
    detail: "sesión / pack 5",
    price: "63 € · 297 €",
  },
  {
    label: "Combo 7 · Total Body Mujer",
    detail: "sesión / pack 5",
    price: "280 € · 1.360 €",
  },
  {
    label: "Combo 8 · Total Body Hombre",
    detail: "sesión / pack 5",
    price: "320 € · 1.525 €",
  },
];

export default function DepilacionLaserPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Depilación Láser · HS-810"
        titleLine1="Adiós al Vello"
        titleLine2="con Garantía Médica"
        subtitle="Láser de diodo de alta potencia HS-810 · 1600 W. Apto para todos los tipos de piel, sin riesgo de quemaduras y disponible todo el año — incluso en verano."
        image="/images/sections/hero-treatment-laser-vascular.webp"
        imageAlt="Depilación Láser HS-810 — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* ── Tech Stats ── */}
          <StatsCard
            eyebrow="Especificaciones del equipo"
            title="HS-810 · Diodo 810 nm de última generación"
            stats={[
              { value: "1600 W", label: "Potencia", detail: "vs 1200 W de Soprano y Light Sheer" },
              { value: "810 nm", label: "Longitud de onda", detail: "máxima absorción por la melanina" },
              { value: "23×40 mm", label: "Aplicador corporal", detail: "+ aplicador facial de precisión" },
              { value: "10-12 sem.", label: "Entre sesiones", detail: "no requiere repeticiones mensuales" },
            ]}
            variant="dark"
          />

          {/* ── Cómo funciona ── */}
          <InfoBlock
            eyebrow="Cómo funciona"
            title="Destrucción del folículo de raíz"
            paragraphs={[
              "La luz del láser a 810 nm es absorbida específicamente por la melanina del pelo. Se transforma en calor y destruye las células madre del folículo, eliminando el vello desde la raíz.",
              "La mayor longitud de onda del diodo 810 nm permite alcanzar folículos más profundos que otros sistemas láser, llegando donde otros equipos no llegan.",
            ]}
          />

          <HighlightCallout
            eyebrow="Único en el mercado"
            text="El HS-810 es el único equipo comercial que ofrece resultados óptimos desde la primera sesión gracias a su capacidad de variar el ancho de pulso."
            icon="star"
          />

          {/* ── Comparativa ── */}
          <ComparisonBlock
            eyebrow="Comparativa técnica"
            title="HS-810 vs Soprano vs Light Sheer"
            intro="Los equipos Soprano y Light Sheer no pueden variar el ancho de pulso. Funcionan bien en las primeras sesiones pero no logran eliminar el vello fino residual. Nuestro HS-810 sí puede ajustar este parámetro para que el vello fino absorba la energía necesaria durante el tiempo preciso."
            competitors={["HS-810", "Soprano", "Light Sheer"]}
            rows={[
              { feature: "Potencia máxima", values: ["1600 W", "1200 W", "1200 W"] },
              { feature: "Variar ancho de pulso", values: [true, false, false] },
              { feature: "Elimina vello fino residual", values: [true, false, false] },
              { feature: "Dos aplicadores simultáneos", values: [true, false, false] },
              { feature: "Modo SHR (fototipos altos)", values: [true, true, true] },
              { feature: "Resultados desde 1ª sesión", values: [true, false, false] },
              { feature: "Apto para piel bronceada", values: [true, true, false] },
            ]}
          />

          {/* ── Tiempos ── */}
          <StatsCard
            eyebrow="Velocidad récord"
            title="Probablemente la plataforma más rápida del mercado"
            stats={[
              { value: "20 min", label: "Piernas completas", detail: "y poco más" },
              { value: "5 min", label: "Torso y abdomen", detail: "completos" },
              { value: "5 min", label: "Espalda completa", detail: "completa" },
              { value: "Indolora", label: "Prácticamente", detail: "sin sensación intensa" },
            ]}
            variant="light"
          />

          {/* ── Ventajas ── */}
          <BulletListBlock
            eyebrow="Ventajas principales"
            title="Por qué elegir nuestra depilación"
            items={[
              "Apto para todo tipo de pieles, incluso las más bronceadas",
              "Sin riesgo de quemaduras",
              "Disponible todo el año, incluso en verano",
              "Prácticamente indolora",
              "Sesiones cada 10-12 semanas, sin repeticiones mensuales",
              "Programa específico para vello fino y resistente",
              "Modo SHR para fototipos altos o vellos muy densos",
              "Modo de barrido para grandes superficies",
            ]}
            columns={2}
            style="plus"
          />

          {/* ── Tarifas por zona ── */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="py-12 lg:py-16 border-t border-text-secondary/15"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-4"
            >
              <span className="block w-8 h-px bg-accent-gold" />
              <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                Tarifas · Por zona individual
              </span>
            </motion.div>
            <motion.h3
              variants={fadeInUp}
              className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Cinco categorías · {zones.reduce((acc, z) => acc + z.zones.length, 0)} zonas
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-3xl mb-8"
            >
              Cada categoría incluye una serie de zonas con la misma tarifa. Los
              bonos de 5 sesiones suponen un ahorro de aproximadamente un 10 %
              frente al precio individual.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {zones.map((z) => (
                <ZonePriceCard key={z.category} {...z} />
              ))}
            </div>
          </motion.div>

          {/* ── Combos ── */}
          <PricingTable
            title="Combos · Más zonas, mejor precio"
            intro="Combinaciones diseñadas para los protocolos más demandados. Total Body cubre todas las zonas del cuerpo en una única tarifa."
            rows={combos}
            footnote="Pack 5 = 5 sesiones espaciadas según protocolo médico (10-12 semanas). Resultados óptimos desde la primera."
          />

          <ConsultaBlock
            title="¿Quieres una depilación a medida?"
            description="Reservamos una primera valoración gratuita para diseñar tu plan según fototipo, zonas y objetivo. Estés donde estés en el calendario depilatorio."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
