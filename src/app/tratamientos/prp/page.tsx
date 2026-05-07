import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plasma Rico en Plaquetas (PRP) | Maysoon",
  description:
    "PRP capilar y facial: el único tratamiento capaz de aumentar el número de fibroblastos. Pack de 3 sesiones desde 285 €, packs con LED desde 540 €.",
};

export default function PRPPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Bioestimulación"
        titleLine1="Plasma Rico"
        titleLine2="en Plaquetas"
        subtitle="El único tratamiento capaz de aumentar el número de fibroblastos, no solo estimular los existentes. Alta concentración de factores de crecimiento, colágeno nuevo y neovascularización."
        image="/images/sections/hero-treatment-prp.webp"
        imageAlt="Tratamiento de PRP — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · PRP Capilar"
            intro="Pauta recomendada: 3 sesiones espaciadas un mes, después mantenimiento personalizado. Trichotest aparte."
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
            footnote="Resultados 100% efectivos al combinar PRP con el Trichotest genético."
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Más fibroblastos, no solo más actividad"
            paragraphs={[
              "El PRP es el único tratamiento capaz de aumentar el número de fibroblastos, no solo estimular los existentes. Alta concentración en factores de crecimiento que generan colágeno nuevo, nuevos vasos sanguíneos (neovascularización) y elastina.",
            ]}
          />

          <InfoBlock
            eyebrow="Aplicación capilar"
            title="Resultado desde la primera sesión"
            paragraphs={[
              "Desde la primera sesión se nota una disminución de la pérdida capilar. Al segundo o tercer mes se aprecia engrosamiento y ganancia capilar.",
              "Pauta: 3 sesiones espaciadas un mes, luego mantenimiento personalizado. Los resultados son 100% efectivos cuando se combinan con la información del Trichotest genético.",
            ]}
          />

          <InfoBlock
            eyebrow="Aplicación facial y corporal"
            title="También para rejuvenecimiento"
            paragraphs={[
              "El PRP también está disponible para rejuvenecimiento facial y de escote, donde aprovecha sus propiedades regenerativas para mejorar textura, luminosidad y firmeza cutánea.",
            ]}
          />

          <ConsultaBlock
            title="¿Quieres una valoración capilar?"
            description="Reservamos una primera consulta para diagnosticar tu caso y diseñar el protocolo PRP que mejor se adapta a ti."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
