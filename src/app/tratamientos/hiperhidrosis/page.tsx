import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hiperhidrosis · Sudoración Excesiva | Maysoon TAN Pearl",
  description:
    "Tratamiento de hiperhidrosis con toxina botulínica (500 €) o Morpheus 8. Hasta 6 meses (botox) o 2+ años (Morpheus 8) sin sudoración excesiva. 90% de efectividad.",
};

export default function HiperhidrosisPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Sudoración Excesiva"
        titleLine1="Hiperhidrosis"
        titleLine2="Bajo Control"
        subtitle="Dos tratamientos disponibles según el caso: toxina botulínica (efecto hasta 6 meses) o Morpheus 8 (efecto duradero hasta 2+ años). Sin hipersudoración compensatoria."
        image="/images/sections/closeup-brazo.webp"
        imageAlt="Tratamiento de Hiperhidrosis — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas"
            intro="Tratamiento con toxina botulínica (2 viales de Botox o Bocouture)."
            rows={[{ label: "Hiperhidrosis · toxina botulínica", price: "500 €" }]}
          />

          <InfoBlock
            eyebrow="Opción 1 · Toxina botulínica"
            title="Bloqueo colinérgico de glándulas sudoríparas"
            paragraphs={[
              "La toxina botulínica bloquea selectivamente las señales nerviosas que activan las glándulas sudoríparas, controlando la hipersudoración hasta 6 meses.",
              "Sesión de 30 minutos, indolora, con efecto visible a los 2-3 días. Efectividad del 90%.",
            ]}
          />

          <InfoBlock
            eyebrow="Opción 2 · Morpheus 8"
            title="Destrucción de glándulas con radiofrecuencia"
            paragraphs={[
              "Morpheus 8 destruye las glándulas sudoríparas mediante calor con microagujas de radiofrecuencia. El control de la sudoración dura hasta 2+ años.",
              "Pauta: 2 sesiones iniciales + mantenimiento anual.",
            ]}
          />

          <BulletListBlock
            eyebrow="Zonas tratables"
            title="Donde se aplica"
            items={[
              "Axilas",
              "Palmas de las manos",
              "Plantas de los pies",
              "Espalda",
              "Torso",
              "Región inguinal y perigenital",
            ]}
            columns={2}
          />

          <ConsultaBlock
            title="¿Cuál es la mejor opción para ti?"
            description="En consulta valoramos tu caso y recomendamos toxina botulínica o Morpheus 8 según tu objetivo y duración deseada."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
