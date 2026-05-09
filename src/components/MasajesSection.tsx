"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Activity,
  Footprints,
  Brain,
  Star,
  Droplet,
  Bandage,
  Hand,
  Wind,
  Dumbbell,
  Flame,
  LucideIcon,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  clipReveal,
  staggerContainer,
  staggerFast,
} from "@/lib/animations";
import { ZonaNav } from "./ZonaNav";
import { BulletListBlock } from "./BulletListBlock";
import { HighlightCallout } from "./HighlightCallout";
import { ConsultaBlock } from "./ConsultaBlock";

const categorias = [
  { id: "esteticos", label: "Estéticos" },
  { id: "relajantes", label: "Relajantes" },
  { id: "terapeuticos", label: "Terapéuticos" },
];

type MasajeData = {
  name: string;
  duration: string;
  price?: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const esteticos: MasajeData[] = [
  {
    name: "Reafirmante",
    duration: "30 min · 50 min",
    price: "25 € / 40 €",
    description:
      "Activa la elastina con cremas reafirmantes, rehidrata y mejora la calidad de la piel. Ideal combinado con mesoterapia.",
    icon: Sparkles,
  },
  {
    name: "Anticelulítico",
    duration: "30 min · 50 min",
    price: "25 € / 40 €",
    description:
      "Masaje vigoroso que rompe y desencapsula nódulos adiposos. Combinado con mesoterapia o Alidya® para resultados óptimos.",
    icon: Activity,
  },
  {
    name: "KOBIDO",
    duration: "30 min · 45 min",
    price: "30 € / 45 €",
    description:
      "Ancestral ritual japonés conocido como 'lifting facial natural'. Manipulación profunda con aceite Tsubaki.",
    icon: Star,
    highlight: true,
  },
];

const relajantes: MasajeData[] = [
  {
    name: "Templado",
    duration: "Piedras calientes",
    description: "Sesión con piedras volcánicas calientes que desbloquean tensiones profundas con calor envolvente.",
    icon: Flame,
  },
  {
    name: "Relajante",
    duration: "Clásico",
    description: "Maniobras suaves y constantes, aceites cálidos y ambiente íntimo. El masaje de cabecera para desconectar.",
    icon: Heart,
  },
  {
    name: "Pies",
    duration: "Reflexología relax",
    description: "Masaje específico de pies y tobillos. Alivia carga, mejora circulación y produce sensación de ligereza global.",
    icon: Footprints,
  },
  {
    name: "Cráneo-facial",
    duration: "Cara y cabeza",
    description: "Trabajo suave en cuero cabelludo, sienes y rostro. Ideal para insomnio, fatiga ocular y estrés acumulado.",
    icon: Brain,
  },
  {
    name: "Californiano",
    duration: "Anti-estrés",
    description: "Maniobras largas y envolventes características del anti-estrés californiano. Reconecta cuerpo y mente.",
    icon: Sparkles,
  },
  {
    name: "Aromático",
    duration: "Aceites esenciales",
    description: "Aceites esenciales seleccionados según tu necesidad. La aromaterapia potencia el efecto del masaje.",
    icon: Droplet,
  },
];

const terapeuticos: MasajeData[] = [
  {
    name: "Vendajes Neurotape",
    duration: "Kinesiotaping",
    description: "Vendaje neuromuscular elástico que estabiliza la articulación sin limitar movimiento. Útil en lesiones deportivas.",
    icon: Bandage,
  },
  {
    name: "Reflexología Podal",
    duration: "Terapia refleja",
    description: "Estimulación de zonas reflejas del pie que se corresponden con órganos y sistemas del cuerpo.",
    icon: Footprints,
  },
  {
    name: "Drenaje Linfático Manual",
    duration: "Sistema linfático",
    description: "Estimulación suave del sistema linfático. Reduce edemas, mejora retorno venoso y depura el organismo.",
    icon: Droplet,
  },
  {
    name: "Descontracturante",
    duration: "Contracturas",
    description: "Trabajo profundo y focalizado sobre contracturas musculares de cuello, espalda, hombros y zona lumbar.",
    icon: Hand,
  },
  {
    name: "Deportivo",
    duration: "Deportistas",
    description: "Para deportistas en pre o post entreno. Mejora rendimiento, previene lesiones y acelera la recuperación.",
    icon: Dumbbell,
  },
  {
    name: "Circulatorio",
    duration: "Retorno venoso",
    description: "Estimulación del retorno venoso para piernas pesadas, mala circulación o sensación de hinchazón frecuente.",
    icon: Wind,
  },
];

export function MasajesSection() {
  return (
    <section className="bg-bg-primary pt-12 pb-20 lg:pb-28">
      {/* ── Categoria nav ── */}
      <div className="mb-12 lg:mb-16">
        <ZonaNav zonas={categorias} />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Intro general ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-base lg:text-lg text-text-secondary leading-[1.85]">
            Profesionales titulados altamente cualificados y productos de la
            más alta calidad. Tres familias de masajes para que encuentres el
            tuyo.
          </p>
        </motion.div>

        {/* ── Editorial gallery: cabin + ritual + therapist ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-20 lg:mb-24 items-stretch">
          {/* Left: large cabin shot */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
            className="lg:col-span-7 relative"
          >
            <span
              aria-hidden
              className="absolute -top-6 -left-2 sm:-left-4 font-display text-[5rem] sm:text-[6rem] lg:text-[7rem] leading-none text-accent-gold/15 select-none pointer-events-none z-0"
            >
              03
            </span>

            <div className="relative z-10 h-full overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(15,14,13,0.4)] ring-1 ring-accent-stone/25">
              <div className="relative h-full min-h-[300px] aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/images/masajes/cabina-masajes.jpg"
                  alt="Cabina de masajes Maysoon — ambiente íntimo y cálido"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.04) 0%, rgba(15,14,13,0.16) 100%)",
                  }}
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-8 h-px bg-accent-gold"
                />
                <span
                  aria-hidden
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-px h-8 bg-accent-gold"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: stacked therapist + ritual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerFast}
            className="lg:col-span-5 grid grid-rows-2 gap-6 lg:gap-7"
          >
            {/* Therapist portrait */}
            <motion.div
              variants={fadeInRight}
              className="relative overflow-hidden rounded-sm shadow-[0_24px_48px_-16px_rgba(15,14,13,0.35)] ring-1 ring-accent-stone/25"
            >
              <div className="relative h-full min-h-[220px] aspect-[3/4] lg:aspect-auto">
                <Image
                  src="/images/masajes/ricardo-masajista.jpg"
                  alt="Ricardo, masajista titulado de Maysoon, preparando los útiles de sesión"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.05) 0%, rgba(15,14,13,0.18) 100%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Ritual closeup — singing bowl */}
            <motion.div
              variants={fadeInRight}
              className="relative overflow-hidden rounded-sm shadow-[0_24px_48px_-16px_rgba(15,14,13,0.35)] ring-1 ring-accent-stone/25"
            >
              <div className="relative h-full min-h-[220px] aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/images/masajes/cuenco-tibetano.jpg"
                  alt="Cuenco tibetano sobre superficie de mármol — detalle del ritual de relajación"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,115,85,0.05) 0%, rgba(15,14,13,0.14) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Editorial caption beneath gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerFast}
          className="grid lg:grid-cols-12 gap-6 lg:gap-12 mb-20 lg:mb-24 items-end border-b border-accent-stone/30 pb-12"
        >
          <motion.div variants={fadeInLeft} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-accent-gold" />
              <span className="font-body text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent-gold">
                El Ritual
              </span>
            </div>
            <motion.h2
              variants={clipReveal}
              className="font-display font-normal not-italic text-text-primary leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)" }}
            >
              Cabina íntima,
            </motion.h2>
            <motion.h2
              variants={clipReveal}
              className="font-display italic text-accent-gold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)" }}
            >
              manos titulada<span className="not-italic">s</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="lg:col-span-7 font-body text-base lg:text-lg text-text-secondary leading-[1.85]"
          >
            Cada sesión transcurre en una cabina diseñada para el silencio —
            iluminación cálida, aromas medidos, materiales nobles. Ricardo, nuestro
            masajista titulado, prepara cada protocolo con los útiles adecuados:
            cuencos tibetanos, rodillos de bambú, piedras volcánicas o aceites
            esenciales según lo que tu cuerpo pide hoy.
          </motion.p>
        </motion.div>

        {/* ═════════ ESTÉTICOS ═════════ */}
        <CategoryHeader
          id="esteticos"
          eyebrow="Categoría · Estéticos"
          title="Apoyo a tus Tratamientos"
          description="Abordan directamente celulitis y flacidez. Son el complemento ideal de los tratamientos médicos: aceleran y potencian su efectividad."
        />

        <MasajesGrid masajes={esteticos} />

        {/* KOBIDO featured */}
        <HighlightCallout
          eyebrow="KOBIDO · El detalle"
          text="Lifting facial sin cirugía. Tonifica musculatura facial, atenúa líneas de expresión, ojeras y bolsas, mejora la luminosidad y reduce migrañas y bruxismo."
          icon="star"
        />

        <BulletListBlock
          eyebrow="KOBIDO · Contraindicaciones"
          title="Cuándo no aplicarlo"
          items={[
            "Inflamaciones o infecciones en piel de la zona",
            "Flemones",
            "Heridas abiertas, irritaciones o dermatitis",
            "Procesos neoplásicos",
            "Pacientes con hilos tensores faciales de menos de 4 meses",
          ]}
          style="warning"
          columns={2}
        />

        {/* ═════════ RELAJANTES ═════════ */}
        <CategoryHeader
          id="relajantes"
          eyebrow="Categoría · Relajantes"
          title="Combatir el Estrés y la Ansiedad"
          description="El estrés aumenta la producción de radicales libres, acelera el envejecimiento cutáneo, debilita el sistema inmune y provoca arrugas, deshidratación y pérdida de elasticidad."
        />

        <PriceBanner
          text="Todos los masajes relajantes"
          price="30 min · 25 € · 50 min · 40 €"
        />

        <MasajesGrid masajes={relajantes} />

        {/* ═════════ TERAPÉUTICOS ═════════ */}
        <CategoryHeader
          id="terapeuticos"
          eyebrow="Categoría · Terapéuticos"
          title="Atacar la Causa, no la Consecuencia"
          description="Abordaje alternativo o complementario a la medicación para patologías musculares, dolores, contracturas y problemas circulatorios. Acortan el tratamiento farmacológico y reducen dosis."
        />

        <PriceBanner
          text="Todos los masajes terapéuticos"
          price="30 min · 25 € · 50 min · 40 €"
        />

        <MasajesGrid masajes={terapeuticos} />

        {/* ═════════ CONTRAINDICACIONES GENERALES ═════════ */}
        <ContraindicationsBlock />

        <ConsultaBlock
          title="¿Qué masaje necesita tu cuerpo hoy?"
          description="Reservamos una valoración rápida para recomendar el masaje (o combinación) que mejor se adapta a ti."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Sub-componentes
   ───────────────────────────────────────────────── */

function CategoryHeader({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      id={id}
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="scroll-mt-24 pt-16 lg:pt-20 mb-10 lg:mb-12 border-t border-text-secondary/15 first:border-t-0 first:pt-12"
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-3 mb-4"
      >
        <span className="block w-8 h-px bg-accent-gold" />
        <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeInUp}
        className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-4"
        style={{ fontSize: "clamp(1.7rem, 3.6vw, 2.6rem)" }}
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="font-body text-sm lg:text-base text-text-secondary leading-[1.85] max-w-3xl"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

function PriceBanner({ text, price }: { text: string; price: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="mb-8 lg:mb-10 rounded-2xl bg-bg-secondary border border-accent-gold/20 px-6 py-5 lg:px-8 lg:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
    >
      <span className="font-body text-sm lg:text-base text-text-primary">
        <span className="text-accent-gold">·</span> {text}
      </span>
      <span className="font-display text-base lg:text-lg text-accent-gold">
        {price}
      </span>
    </motion.div>
  );
}

function MasajesGrid({ masajes }: { masajes: MasajeData[] }) {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
    >
      {masajes.map((m) => (
        <MasajeCard key={m.name} {...m} />
      ))}
    </motion.div>
  );
}

function MasajeCard({
  name,
  duration,
  price,
  description,
  icon: Icon,
  highlight,
}: MasajeData) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={`group relative rounded-2xl p-6 lg:p-7 overflow-hidden h-full flex flex-col transition-shadow duration-[400ms] ${
        highlight
          ? "bg-bg-dark text-text-light shadow-[0_4px_20px_rgba(15,14,13,0.18)] hover:shadow-[0_20px_50px_rgba(15,14,13,0.24)]"
          : "bg-white text-text-primary shadow-[0_2px_10px_rgba(15,14,13,0.04)] hover:shadow-[0_12px_30px_rgba(15,14,13,0.08)]"
      }`}
    >
      {highlight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(184,115,85,0.18), transparent 60%)",
          }}
        />
      )}
      <div className="relative flex flex-col flex-1">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
            highlight
              ? "bg-accent-gold/15 border border-accent-gold/30"
              : "bg-bg-secondary border border-accent-gold/20"
          }`}
        >
          <Icon size={18} strokeWidth={1.6} className="text-accent-gold" />
        </div>
        <h4
          className={`font-display font-normal text-xl lg:text-2xl leading-tight tracking-[-0.01em] mb-1 ${
            highlight ? "text-text-light" : "text-text-primary"
          }`}
        >
          {name}
        </h4>
        <p
          className={`font-body text-[11px] uppercase tracking-[0.18em] mb-3 ${
            highlight ? "text-accent-gold" : "text-accent-gold/85"
          }`}
        >
          {duration}
        </p>
        <p
          className={`font-body text-sm leading-[1.7] mb-4 flex-1 ${
            highlight ? "text-text-light/75" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
        {price && (
          <div
            className={`pt-4 border-t ${
              highlight ? "border-text-light/15" : "border-text-secondary/15"
            }`}
          >
            <span
              className={`font-body text-[10px] uppercase tracking-[0.2em] block mb-1 ${
                highlight ? "text-text-light/55" : "text-text-secondary"
              }`}
            >
              Tarifa
            </span>
            <span className="font-display text-base lg:text-lg text-accent-gold">
              {price}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ContraindicationsBlock() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-20 lg:mt-24 rounded-3xl bg-bg-secondary p-8 lg:p-12 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(184,115,85,0.06), transparent 60%)",
        }}
      />
      <div className="relative">
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-accent-gold" />
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
            Información médica
          </span>
        </motion.div>
        <motion.h3
          variants={fadeInUp}
          className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em] mb-3"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
        >
          Contraindicaciones generales
        </motion.h3>
        <motion.p
          variants={fadeInUp}
          className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-3xl mb-10"
        >
          Por seguridad, antes de cualquier sesión revisamos tu historial. Las
          siguientes condiciones son contraindicaciones absolutas o relativas
          para los masajes.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Absolutas */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-text-primary/10 border border-text-primary/15">
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-text-primary">
                Absolutas · No se realiza
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "Tumores",
                "Riesgo de hemorragia",
                "Fragilidad capilar en edad avanzada",
                "Cardiopatías severas descompensadas",
                "Enfermedades infecciosas",
                "Heridas graves y traumatismos agudos",
                "Trombosis, flebitis o tromboflebitis",
                "Varices tortuosas o con relieve",
                "Reacciones alérgicas agudas",
                "Patología renal descompensada",
                "Quemaduras en zona de tratamiento",
                "Bursitis en zona",
                "Roturas musculares o tendinosas",
                "Micosis en zona",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <span className="text-text-primary/40 mt-1 flex-shrink-0">
                    ●
                  </span>
                  <span className="font-body text-sm text-text-primary leading-[1.55]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Relativas */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30">
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-accent-gold">
                Relativas · Precaución
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "Fracturas y luxaciones (no masajear con inflamación)",
                "Embarazo (desaconsejado en los primeros 3 meses)",
                "Cólicos hepáticos o biliares (esperar alta médica)",
                "Hipertensión (consultar si hay mareos o vómitos)",
                "Hipotensión (precaución en relajantes)",
                "Irritación dérmica en la zona",
                "Enfermedades reumáticas en fase aguda",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <span className="text-accent-gold mt-1 flex-shrink-0">○</span>
                  <span className="font-body text-sm text-text-primary leading-[1.55]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          variants={fadeInUp}
          className="font-body text-xs italic text-text-secondary leading-[1.7] mt-10 pt-6 border-t border-text-secondary/15 max-w-3xl"
        >
          Si tienes alguna duda sobre tu caso particular, escríbenos por
          WhatsApp antes de reservar. Nuestro masajista terapeuta valorará si
          el masaje es adecuado para ti.
        </motion.p>
      </div>
    </motion.div>
  );
}
