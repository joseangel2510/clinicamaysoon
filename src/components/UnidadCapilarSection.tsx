"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Palette } from "lucide-react";
import { fadeInUp, staggerContainer, staggerFast } from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { PricingTable } from "./PricingTable";
import { BulletListBlock } from "./BulletListBlock";
import { InfoBlock } from "./InfoBlock";
import { HighlightCallout } from "./HighlightCallout";
import { StatsCard } from "./StatsCard";
import { ComparisonBlock } from "./ComparisonBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const tecnicas = [
  { id: "estudio", label: "Estudio Capilar" },
  { id: "trasplante", label: "Trasplante FUE" },
  { id: "tricopigmentacion", label: "Tricopigmentación" },
  { id: "trichotest", label: "Trichotest" },
  { id: "prp", label: "PRP Capilar" },
  { id: "mesoterapia", label: "Mesoterapia" },
];

export function UnidadCapilarSection() {
  return (
    <section className="bg-bg-primary pt-12 pb-20 lg:pb-28">
      {/* ── Tech nav ── */}
      <div className="mb-12 lg:mb-16">
        <ZonaNav zonas={tecnicas} />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Intro institucional ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="font-display italic text-lg lg:text-2xl text-text-secondary leading-[1.5] max-w-3xl mx-auto mb-4"
          >
            &ldquo;Uno de los pocos centros nacionales de referencia que reúne
            <span className="text-accent-gold"> todas </span>
            las técnicas médicas capilares.&rdquo;
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm text-text-secondary max-w-2xl mx-auto"
          >
            Pioneros en la Comunidad Valenciana desde hace más de 4 años.
          </motion.p>
        </motion.div>

        {/* ═════════ 01 · ESTUDIO CAPILAR ═════════ */}
        <TechniqueHeader
          id="estudio"
          number="01"
          eyebrow="Punto de partida"
          title="Estudio Capilar Personalizado"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent-gold text-bg-dark"
        >
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em]">
            100 % Gratuito
          </span>
          <span className="font-display text-base">·</span>
          <span className="font-body text-sm font-medium">
            Diagnóstico capilar sin coste
          </span>
        </motion.div>

        <InfoBlock
          title="Tu primer paso"
          paragraphs={[
            "Análisis del cabello y de sus necesidades reales. Asesoramiento con una rutina capilar personalizada y los tratamientos adecuados a tu caso.",
            "Incluye revisión y atención continua para asegurar que se cumplen los objetivos marcados.",
          ]}
        />

        <BulletListBlock
          eyebrow="Cuándo hacerse uno"
          title="Síntomas que justifican un análisis"
          items={[
            "Pérdida de cabello",
            "Picores o molestias",
            "Grasa en cuero cabelludo",
            "Poco volumen o densidad",
            "Descamación del cuero cabelludo",
            "Granos o rojeces",
            "Dolor u otras molestias",
          ]}
          columns={2}
        />

        {/* Tabla comparativa de técnicas de implantología */}
        <ComparisonBlock
          eyebrow="Comparativa técnica"
          title="Métodos de implantología capilar"
          intro="Tres técnicas históricas con perfiles muy distintos. En Maysoon trabajamos con la técnica FUE — la opción más equilibrada para la mayoría de pacientes."
          competitors={["FUE · Maysoon", "FUT", "ARTAS"]}
          rows={[
            {
              feature: "Método",
              values: ["Extracción individual", "Tira de cuero cabelludo", "Robot de alta precisión"],
            },
            {
              feature: "Unidades por sesión",
              values: ["Hasta 1.500", "Hasta 4.000", "Hasta 2.500"],
            },
            {
              feature: "Cicatriz",
              values: ["Puntiformes casi imperceptibles", "Cicatriz lineal visible", "Apenas deja cicatriz"],
            },
            {
              feature: "Rasurado",
              values: ["Opcional (con DHI)", "Requerido", "Requerido"],
            },
            {
              feature: "Limitado por zona donante",
              values: [true, true, true],
            },
          ]}
        />

        {/* ═════════ 02 · TRASPLANTE FUE ═════════ */}
        <TechniqueHeader
          id="trasplante"
          number="02"
          eyebrow="Solución definitiva"
          title="Trasplante Capilar FUE"
        />

        <PricingTable
          title="Tarifas planas · sin límite de unidades foliculares"
          intro="Todas las tarifas incluyen: técnica de Zafiro o implanters según caso, diagnóstico previo, 1 sesión de PRP enriquecido, controles y seguimiento durante 1 año, y prescripción de tratamiento de mantenimiento personalizado."
          rows={[
            { label: "Trasplante de barba", detail: "FUE", price: "1.200 €" },
            { label: "Entradas o avance línea frontal", price: "2.000 €" },
            { label: "Coronilla simple", price: "2.000 €" },
            { label: "Mitad anterior o posterior", price: "2.500 €" },
            { label: "Trasplante completo", price: "3.000 €" },
          ]}
        />

        <InfoBlock
          eyebrow="Técnica 1"
          title="FUE Clásica"
          paragraphs={[
            "Extracción individual de los folículos uno a uno desde la zona donante (nuca y región occipital), implantación en la zona receptora.",
            "Sin puntos de sutura ni cicatrices visibles. Trabajamos con folículos de 1 a 4 pelos según la densidad necesaria en cada zona del cuero cabelludo.",
          ]}
        />

        <InfoBlock
          eyebrow="Técnica 2"
          title="DHI · FUE sin Rasurado"
          paragraphs={[
            "Misma extracción que la FUE, pero con implantación directa mediante dispositivo 'implanter' (aguja hueca, sin necesidad de orificio receptor previo).",
            "Ventajas: menos sangrado, mayor densidad posible, puede hacerse sin rasurado y la curación es más rápida. Contras: intervención más larga, coste superior y mayor manipulación del folículo.",
          ]}
        />

        <BulletListBlock
          eyebrow="Pacientes idóneos"
          title="Cuándo el trasplante FUE es la opción"
          items={[
            "Alopecias cicatriciales delimitadas",
            "Zonas donantes con alta o media densidad",
            "Pérdida de cabello estabilizada",
            "Mejora de trasplantes previos",
            "Look de pelo corto",
          ]}
          columns={2}
        />

        <HighlightCallout
          eyebrow="Por qué Maysoon (no Turquía)"
          text="Diagnóstico previo correcto, Trichotest genético para una efectividad del 99 % y seguimiento post-tratamiento que asegura el resultado. Tarifa plana competitiva."
          icon="star"
        />

        <BulletListBlock
          eyebrow="Procedimiento general"
          title="Lo que debes saber"
          items={[
            "Ambulatorio — sin ingreso ni baja prolongada",
            "Indoloro con anestesia local",
            "Resultados visibles a los 3 meses",
            "Resultado óptimo entre 9 y 12 meses",
            "Modalidad con o sin rasurado",
          ]}
          style="plus"
        />

        {/* ═════════ 03 · TRICOPIGMENTACIÓN ═════════ */}
        <TechniqueHeader
          id="tricopigmentacion"
          number="03"
          eyebrow="Sin trasplante"
          title="Tricopigmentación Capilar 3D"
        />

        <PricingTable
          title="Tarifas · Tricopigmentación 3D"
          rows={[
            {
              label: "1 zona",
              detail: "2 sesiones · inicial + retoque mensual",
              price: "1.000 €",
            },
            {
              label: "2 zonas",
              detail: "3 sesiones · 2 iniciales + retoque mensual",
              price: "1.800 €",
            },
            {
              label: "Completa",
              detail: "4 sesiones · 3 iniciales + retoque mensual",
              price: "2.500 €",
            },
          ]}
        />

        <InfoBlock
          title="Tatuaje capilar 3D para look rapado o pelo corto"
          paragraphs={[
            "Técnica innovadora de tatuaje capilar 3D que cubre zonas de calvicie sin necesidad de trasplante. Crea el efecto óptico de cabeza poblada con un look rapado o pelo de hasta 5 mm.",
            "Resultados espectaculares, duraderos y visibles de inmediato. Permanente — puede atenuarse con los años y precisar un repaso. Apto para cualquier paciente, independientemente de sexo, edad o grado de alopecia.",
          ]}
        />

        {/* ── Mar Marín Leal · destacada ── */}
        <ProfessionalFeature />

        <BulletListBlock
          eyebrow="Tricopigmentación · Contraindicaciones"
          title="Cuándo no aplicarla"
          items={[
            "Pacientes inmunodeprimidos mal controlados",
            "Pacientes en quimioterapia sin consentimiento del oncólogo",
            "Inflamaciones o infecciones activas en la zona",
            "Dermatitis o irritaciones del cuero cabelludo",
            "Alergia a los componentes de los pigmentos",
          ]}
          style="warning"
          columns={2}
        />

        {/* ═════════ 04 · TRICHOTEST ═════════ */}
        <TechniqueHeader
          id="trichotest"
          number="04"
          eyebrow="Test genético"
          title="Trichotest Capilar"
        />

        <PricingTable
          title="Tarifa"
          intro="Incluye realización del test, informe completo y pauta de tratamiento domiciliario."
          rows={[{ label: "Trichotest · genético capilar", price: "250 €" }]}
        />

        <InfoBlock
          title="ADN al servicio de tu cabello"
          paragraphs={[
            "Test genético que analiza 48 variables genéticas de 13 genes implicados en la alopecia. Muestra simple de saliva — sin pinchazos ni sangre.",
            "Indica qué activos son altamente efectivos para tu caso y cuáles no harán efecto. Permite personalizar los tratamientos al 100 %.",
            "Los activos recomendados se pueden formular para administración oral, tópica (lociones) o infiltrada (mesoterapia o PRP).",
          ]}
        />

        <StatsCard
          eyebrow="Datos del test"
          title="Lo que mide y lo que entrega"
          stats={[
            { value: "48", label: "Variables genéticas", detail: "analizadas" },
            { value: "13", label: "Genes", detail: "implicados en alopecia" },
            { value: "3 sem.", label: "Resultados", detail: "informe completo" },
            { value: "99 %", label: "Efectividad", detail: "junto a PRP / mesoterapia" },
          ]}
          variant="dark"
        />

        <BulletListBlock
          eyebrow="Cuándo es imprescindible"
          title="Indicaciones del Trichotest"
          items={[
            "Imprescindible en trasplante capilar — optimiza supervivencia de folículos",
            "Aconsejable en mesoterapia capilar",
            "Aconsejable en tratamientos orales y tópicos",
            "Útil de forma preventiva en estadios iniciales de la alopecia",
          ]}
          style="plus"
        />

        {/* ═════════ 05 · PRP CAPILAR ═════════ */}
        <TechniqueHeader
          id="prp"
          number="05"
          eyebrow="Bioestimulación"
          title="PRP · Plasma Rico en Plaquetas"
        />

        <PricingTable
          title="Tarifas · Pauta recomendada"
          intro="Pauta inicial: 3 sesiones espaciadas un mes. Después, mantenimiento personalizado."
          rows={[
            { label: "Sesión suelta", price: "100 €" },
            { label: "Pack 3 sesiones", price: "285 €" },
            {
              label: "Pack 6 sesiones",
              detail: "incluye fototerapia LED",
              price: "540 €",
            },
            {
              label: "Pack 10 sesiones",
              detail: "incluye fototerapia LED",
              price: "800 €",
            },
          ]}
          footnote="Trichotest aparte. Resultados 100 % efectivos al combinar PRP con análisis genético."
        />

        <InfoBlock
          title="El único que aumenta el número de fibroblastos"
          paragraphs={[
            "Único tratamiento capilar capaz de aumentar el número de fibroblastos — no solo de estimular los existentes. Alta concentración de factores de crecimiento que generan colágeno nuevo, neovascularización y elastina.",
            "Desde la primera sesión se nota una disminución de la pérdida capilar. Al segundo o tercer mes se aprecia engrosamiento y ganancia capilar por recuperación de folículos miniaturizados.",
            "Técnica rápida y mínimamente molesta.",
          ]}
        />

        {/* ═════════ 06 · MESOTERAPIA ═════════ */}
        <TechniqueHeader
          id="mesoterapia"
          number="06"
          eyebrow="Activos directos"
          title="Mesoterapia Capilar"
        />

        <PricingTable
          title="Tarifa · Por sesión con bono"
          intro="Precio por sesión al contratar bono. Consulta tarifas para sesiones sueltas."
          rows={[{ label: "Mesoterapia capilar", price: "desde 80 €" }]}
        />

        <InfoBlock
          title="Cocktail personalizado en cuero cabelludo"
          paragraphs={[
            "Introducción intradérmica de factores de crecimiento capilar, péptidos biomiméticos, biotina y otros activos que favorecen la regeneración y revitalización capilar.",
            "Frena la caída activa y recupera folículos en miniaturización. La fórmula se personaliza según los resultados del Trichotest.",
            "Agujas finas y cortas, mínimamente molesto con crema anestésica. Varias sesiones consecutivas para alcanzar el resultado óptimo.",
          ]}
        />

        {/* ═════════ EXTRAS ═════════ */}
        <ExtrasBlock />

        <ConsultaBlock
          title="¿Por dónde empezar?"
          description="Reservamos un diagnóstico capilar gratuito para valorar tu caso y diseñar el protocolo más adecuado. Sin compromiso."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Sub-componentes
   ───────────────────────────────────────────────── */

function TechniqueHeader({
  id,
  number,
  eyebrow,
  title,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      id={id}
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="scroll-mt-24 pt-16 lg:pt-20 mb-2 border-t border-text-secondary/15 first:border-t-0 first:pt-12"
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-baseline gap-4 mb-3"
      >
        <span className="font-display text-3xl lg:text-4xl text-accent-gold/60 leading-none">
          {number}
        </span>
        <span className="block w-10 h-px bg-accent-gold/50" />
        <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeInUp}
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em]"
        style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}

function ProfessionalFeature() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="my-12 lg:my-14 rounded-3xl bg-bg-dark text-text-light relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(184,115,85,0.22), transparent 60%)",
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 p-10 lg:p-14 items-center">
        <div>
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30"
          >
            <Award size={12} strokeWidth={2.2} className="text-accent-gold" />
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-accent-gold">
              La firma · Maysoon
            </span>
          </motion.div>
          <motion.h3
            variants={fadeInUp}
            className="font-display font-normal text-3xl lg:text-4xl text-text-light leading-[1.1] tracking-[-0.02em] mb-3"
          >
            Mar Marín Leal
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="font-body italic text-sm lg:text-base text-accent-gold mb-5"
          >
            Pintora valenciana especializada en hiperrealismo
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="font-body text-sm lg:text-[15px] text-text-light/75 leading-[1.85] max-w-xl mb-6"
          >
            La tricopigmentación es un arte. Mar Marín firma cada sesión con la
            precisión de quien expone en galerías de Nueva York y ha realizado
            retratos para la Casa Real Española.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-light/5 border border-text-light/10 font-body text-xs text-text-light/85">
              <MapPin size={12} strokeWidth={2} className="text-accent-gold" />
              Galerías en Nueva York
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-light/5 border border-text-light/10 font-body text-xs text-text-light/85">
              <Award size={12} strokeWidth={2} className="text-accent-gold" />
              Retratos · Casa Real Española
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-text-light/5 border border-text-light/10 font-body text-xs text-text-light/85">
              <Palette size={12} strokeWidth={2} className="text-accent-gold" />
              Hiperrealismo
            </span>
          </motion.div>
        </div>
        <motion.div
          variants={fadeInUp}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-48 h-48 rounded-full bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center">
            <Palette size={56} strokeWidth={1.2} className="text-accent-gold" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExtrasBlock() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 lg:mt-20 pt-12 border-t border-text-secondary/15"
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-3 mb-4"
      >
        <span className="block w-8 h-px bg-accent-gold" />
        <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          También disponibles
        </span>
      </motion.div>
      <motion.h3
        variants={fadeInUp}
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-8"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        Para casos no recuperables
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl bg-bg-secondary p-6 lg:p-7"
        >
          <h4 className="font-display text-xl text-text-primary leading-tight mb-3">
            Implante Capilar Biofibre
          </h4>
          <p className="font-body text-sm text-text-secondary leading-[1.7]">
            Solución para pacientes que no son candidatos a trasplante FUE.
            Implante de fibras capilares biocompatibles para densidad inmediata.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl bg-bg-secondary p-6 lg:p-7"
        >
          <h4 className="font-display text-xl text-text-primary leading-tight mb-3">
            Tratamientos Orales y Tópicos
          </h4>
          <p className="font-body text-sm text-text-secondary leading-[1.7]">
            Pautas farmacológicas y dermocosméticas adaptadas, integradas en el
            protocolo capilar global para potenciar el resultado a largo plazo.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
