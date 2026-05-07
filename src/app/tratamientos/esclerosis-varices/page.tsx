import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Esclerosis de Varices | Maysoon",
  description:
    "Tratamiento médico ambulatorio de varices y varículas con esclerosante inyectado. Indoloro, sin cirugía, valoración circulatoria previa. Desde 80 €/sesión.",
};

export default function EsclerosisVaricesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Médico Ambulatorio"
        titleLine1="Esclerosis"
        titleLine2="de Varices"
        subtitle="Tratamiento médico de varices y varículas con esclerosante inyectado. Indoloro, ambulatorio y altamente efectivo. Sin cirugía si se aborda a tiempo."
        image="/images/sections/closeup-piernas.webp"
        imageAlt="Tratamiento de Esclerosis de Varices — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas"
            intro="Precio por sesión al contratar bono de 5 sesiones. Máximo 4 viales por sesión."
            rows={[
              {
                label: "Esclerosis · sesión con bono de 5",
                price: "desde 80 €",
              },
            ]}
            footnote="Consulta tarifas para sesiones sueltas y casos avanzados."
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Esclerosante inyectable"
            paragraphs={[
              "Tratamiento médico ambulatorio en el que se inyecta un esclerosante directamente en la variz o varícula. El producto irrita la pared del vaso, que se cierra y se reabsorbe progresivamente.",
              "Trata varículas y varices de prácticamente cualquier calibre y extensión sin necesidad de cirugía, siempre que se aborden a tiempo.",
            ]}
          />

          <InfoBlock
            eyebrow="Importante"
            title="Valoración previa por profesional"
            paragraphs={[
              "El número de sesiones y la concentración del esclerosante varían según las características de cada paciente. Es imprescindible una correcta valoración previa del estado circulatorio por un profesional cualificado antes de iniciar el tratamiento.",
            ]}
          />

          <ConsultaBlock
            title="¿Listo para librarte de tus varices?"
            description="Reservamos una primera valoración circulatoria para confirmar que la esclerosis es la mejor opción y diseñar el plan de sesiones."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
