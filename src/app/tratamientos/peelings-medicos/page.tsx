import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peelings Médicos · 4 Profundidades | Maysoon",
  description:
    "Peelings médicos en cuatro profundidades: superficial (75 €), medio (220 €), profundo (350 €) y específico para melasma New Melan (480 €). Disponibles todo el año.",
};

export default function PeelingsMedicosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Renovación Cutánea"
        titleLine1="Peelings"
        titleLine2="Médicos"
        subtitle="Diferentes a los peelings de salón de belleza por la potencia de los ácidos empleados. Cuatro niveles de profundidad para tratar manchas, flacidez, acné, cicatrices y arrugas profundas."
        image="/images/sections/closeup-rostro.webp"
        imageAlt="Peelings Médicos — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por profundidad"
            intro="Cuatro modalidades según el objetivo y el grosor de tu piel."
            rows={[
              {
                label: "Peeling Superficial",
                detail: "Pirúvico, Salicílico, Ferúlico, Mandélico",
                price: "desde 75 €",
              },
              {
                label: "Peeling Medio",
                detail: "TCA medio o NML",
                price: "desde 220 €",
              },
              {
                label: "Peeling Profundo",
                detail: "Fenol, TCA fuerte, Fenol-Croton",
                price: "desde 350 €",
              },
              {
                label: "New Melan",
                detail: "Específico para melasma",
                price: "desde 480 €",
              },
            ]}
            footnote="Consulta descuentos en bonos y packs."
          />

          <InfoBlock
            eyebrow="Qué es"
            title="No tiene nada que ver con un peeling de salón"
            paragraphs={[
              "Los peelings médicos se diferencian de los de salón de belleza por la potencia de los ácidos empleados y la profundidad controlada de actuación.",
              "Se aplican en cara, cuello y/o escote, siempre tras una valoración médica previa, historial clínico completo y la preparación adecuada de la piel.",
            ]}
          />

          <BulletListBlock
            eyebrow="Resultados"
            title="Para qué se usan"
            items={[
              "Eliminación de manchas",
              "Tensado de la piel",
              "Luminosidad y unificación del tono",
              "Control y eliminación del acné",
              "Mejora de cicatrices de acné",
              "Desaparición de arrugas profundas",
              "Corrección de flacidez facial",
            ]}
            columns={2}
          />

          <HighlightCallout
            eyebrow="Sabías que"
            text="Hay peelings disponibles todo el año, incluso en verano — algunos tienen efecto reparador del ADN y propiedades fotoprotectoras."
            icon="insight"
          />

          <ConsultaBlock
            title="¿Qué peeling necesita tu piel?"
            description="En consulta valoramos tu fototipo, objetivos y condición cutánea para recomendar la profundidad y los activos adecuados."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
