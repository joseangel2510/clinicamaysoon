import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Intralipoterapia | Maysoon",
  description:
    "Eliminación de grasa localizada sin cirugía con intralipoterapia. Indoloro, ambulatorio, reincorporación inmediata. Desde 75 €/ampolla, packs hasta 5 ampollas.",
};

export default function IntralipoterapiaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Cuerpo"
        titleLine1="Intralipoterapia"
        titleLine2="Sin Cirugía"
        subtitle="Eliminación de grasa localizada mediante agujas especiales que acceden directamente al panículo adiposo. Indoloro, ambulatorio y con reincorporación inmediata."
        image="/images/sections/hero-treatment-intralipoterapia.webp"
        imageAlt="Tratamiento de Intralipoterapia — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por número de ampollas"
            rows={[
              { label: "1 ampolla", price: "75 €" },
              { label: "2 ampollas", price: "135 €" },
              { label: "3 ampollas", price: "190 €" },
              { label: "4 ampollas", price: "240 €" },
              { label: "5 ampollas", price: "280 €" },
            ]}
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Acceso directo al panículo adiposo"
            paragraphs={[
              "Eliminación de grasa localizada mediante agujas especiales que acceden directamente al panículo adiposo. La sesión se realiza con 1-2 pinchazos por zona y resulta indolora.",
              "Tratamiento ambulatorio con reincorporación inmediata. Las molestias posteriores son similares a las agujetas y desaparecen en pocos días.",
            ]}
          />

          <InfoBlock
            eyebrow="Indicaciones"
            title="Para depósitos grasos rebeldes"
            paragraphs={[
              "Indicado para depósitos grasos pequeños y rebeldes resistentes a dieta y ejercicio. La reducción es progresiva y se completa en 8-10 sesiones según la zona y el volumen a tratar.",
            ]}
          />

          <ConsultaBlock
            title="¿Tienes una zona rebelde a tratar?"
            description="Reservamos una primera valoración para confirmar si la intralipoterapia es la mejor opción y cuántas ampollas necesitas."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
