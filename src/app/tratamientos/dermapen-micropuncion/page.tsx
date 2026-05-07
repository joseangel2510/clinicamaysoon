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
  title: "DermaPen · Micropunción | Maysoon TAN Pearl",
  description:
    "DermaPen: 65.000 microcanales por minuto en tu piel. Doble función absorción + estimulación de colágeno. Desde 83 €/sesión facial con bono.",
};

export default function DermapenPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Micropunción"
        titleLine1="DermaPen"
        titleLine2="Micropunción"
        subtitle="Dispositivo médico que abre hasta 65.000 microcanales por minuto en la epidermis. Doble función: permite la absorción de principios activos en capas profundas y estimula directamente la producción de colágeno y elastina."
        image="/images/sections/hero-treatment-mesoterapia.webp"
        imageAlt="Tratamiento DermaPen — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por sesión con bono"
            intro="Precios por sesión al contratar bonos. Consulta tarifas para sesiones sueltas."
            rows={[
              { label: "Facial", price: "desde 83 €" },
              {
                label: "Facial + Cuello + Escote",
                price: "desde 110 €",
              },
              { label: "Corporal", price: "desde 120 €" },
              { label: "Capilar", price: "desde 84 €" },
            ]}
          />

          <InfoBlock
            eyebrow="Tecnología"
            title="Microcanales con doble función"
            paragraphs={[
              "Dispositivo médico indoloro con profundidad regulable de 0,25 a 2,50 mm según la zona y el objetivo. Genera microcanales controlados que cumplen dos funciones simultáneas.",
              "Por un lado, permite la absorción profunda de principios activos. Por otro, estimula directamente la producción de colágeno y elastina nueva.",
            ]}
          />

          <HighlightCallout
            eyebrow="El dato"
            text="Hasta 65.000 microcanales por minuto en tu piel — sin marcas, sin hematomas y con profundidad regulable al milímetro."
            icon="star"
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Para qué se usa"
            items={[
              "Rejuvenecimiento facial · envejecimiento dérmico",
              "Despigmentación de manchas",
              "Estrías y flacidez cutánea",
              "Estimulación capilar contra alopecia",
              "Cicatrices de acné y quirúrgicas",
            ]}
            columns={2}
          />

          <InfoBlock
            eyebrow="Por qué es superior"
            title="Más que un derma-roller"
            paragraphs={[
              "Alternativa a la mesoterapia con un estímulo más intenso y sin marcas. Comparado con los derma-rollers de uso estético, el DermaPen es regulable, abre más canales por minuto y produce menos daño cutáneo gracias a su tecnología de aguja vertical.",
              "Complementa muy bien otros tratamientos: fotorrejuvenecimiento, PRP y peelings médicos.",
            ]}
          />

          <ConsultaBlock
            title="¿Quieres potenciar tus principios activos?"
            description="En consulta diseñamos el protocolo DermaPen con los activos más adecuados para tu objetivo cutáneo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
