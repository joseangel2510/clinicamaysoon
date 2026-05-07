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
  title: "Tratamiento de Celulitis · Alidya | Maysoon",
  description:
    "Abordaje multidisciplinar de la celulitis: maderoterapia, mesoterapia drenante y Alidya® específico. 75 € por ampolla, máximo 2 por sesión.",
};

export default function CelulitisPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Cuerpo"
        titleLine1="Tratamiento"
        titleLine2="de Celulitis"
        subtitle="Abordaje multidisciplinar: combinamos maderoterapia, mesoterapia reductora y Alidya® — el tratamiento específico para celulitis en personas sin sobrepeso."
        image="/images/sections/closeup-flancos.webp"
        imageAlt="Tratamiento de Celulitis — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por ampolla"
            intro="Máximo 2 ampollas por sesión."
            rows={[{ label: "Sesión · 1 ampolla", price: "75 €" }]}
          />

          <InfoBlock
            eyebrow="Qué es"
            title="No es solo un tratamiento, es una estrategia"
            paragraphs={[
              "La celulitis tiene causas múltiples: alteración del medio extracelular, mala circulación, retención de líquidos, exceso de grasa subcutánea. Por eso el tratamiento eficaz combina varias técnicas.",
              "Diseñamos un protocolo personalizado para tu caso que ataca todas las dimensiones del problema.",
            ]}
          />

          <BulletListBlock
            eyebrow="Las tres patas"
            title="Abordaje multidisciplinar"
            items={[
              "Masajes anticelulíticos · maderoterapia",
              "Mesoterapia reductora y drenante",
              "Alidya® · específico para personas sin sobrepeso",
            ]}
            style="plus"
          />

          <InfoBlock
            eyebrow="Alidya®"
            title="Atacar la causa, no solo el síntoma"
            paragraphs={[
              "Alidya® es un tratamiento inyectable específico para celulitis, especialmente eficaz en personas sin sobrepeso. Normaliza, alcaliniza y detoxifica el medio extracelular — ataca las causas principales de la celulitis para lograr su desaparición y prevenir su reaparición.",
            ]}
          />

          <HighlightCallout
            eyebrow="La diferencia"
            text="Alidya® no enmascara la celulitis: actúa sobre el medio extracelular alterado para conseguir resultados duraderos."
            icon="insight"
          />

          <ConsultaBlock
            title="¿Listo para empezar tu protocolo anti-celulitis?"
            description="En consulta valoramos el tipo y grado de celulitis para diseñar el protocolo combinado más adecuado para ti."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
