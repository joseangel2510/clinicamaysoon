import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { TreatmentSchema } from "@/components/TreatmentSchema";
import { TreatmentDirectAnswer } from "@/components/TreatmentDirectAnswer";
import { TreatmentFAQ } from "@/components/TreatmentFAQ";
import { ClinicalSignature } from "@/components/ClinicalSignature";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Láser CO2 Fraccionado | Maysoon",
  description:
    "Resurfacing con láser CO2 fraccionado en Valencia: arrugas, marcas de acné, cicatrices, textura y poros, flacidez del contorno de ojos y fotoenvejecimiento.",
};

export default function LaserCO2Page() {
  return (
    <main>
      <TreatmentSchema slug="laser-co2" />
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Tecnología Láser"
        titleLine1="Láser"
        titleLine2="CO2"
        subtitle="El láser ablativo de referencia para renovar la piel en profundidad. Retensa, pule la textura y estimula colágeno nuevo para tratar arrugas, marcas de acné y fotoenvejecimiento."
        image="/images/sections/closeup-rostro.webp"
        imageAlt="Tratamiento de Láser CO2 — Maysoon"
      />
      <TreatmentDirectAnswer slug="laser-co2" />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Tecnología"
            title="Resurfacing ablativo fraccionado"
            paragraphs={[
              "El láser de CO2 emite una longitud de onda de 10.600 nm que absorbe el agua de la piel. En modo fraccionado crea miles de microcolumnas de tratamiento separadas por piel sana, que actúa como reservorio para una cicatrización más rápida.",
              "El calor que genera en la dermis contrae las fibras de colágeno existentes y activa la producción de colágeno y elastina nuevos. El resultado es un efecto tensor inmediato que sigue mejorando durante los meses siguientes.",
            ]}
          />

          <InfoBlock
            eyebrow="Rostro"
            title="Arrugas, textura y cicatrices"
            paragraphs={[
              "Suaviza arrugas finas y medias, afina la textura, cierra el poro y unifica el tono. Es uno de los tratamientos más eficaces para las marcas y cicatrices de acné, porque remodela la piel desde la superficie hasta la dermis.",
            ]}
          />

          <InfoBlock
            eyebrow="Contorno de ojos"
            title="Párpados y ojeras"
            paragraphs={[
              "Con parámetros específicos para la zona periocular, retensa la piel fina de párpados y ojeras, mejora las arrugas de patas de gallo y aporta una mirada más descansada.",
            ]}
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Para qué sirve"
            items={[
              "Arrugas finas y medias",
              "Marcas y cicatrices de acné",
              "Textura irregular y poro dilatado",
              "Flacidez leve del rostro y cuello",
              "Contorno de ojos: párpados y ojeras",
              "Fotoenvejecimiento y manchas solares",
            ]}
            columns={2}
          />

          <BulletListBlock
            eyebrow="Después de la sesión"
            title="Recuperación y cuidados"
            items={[
              "Enrojecimiento y sensación de calor las primeras horas",
              "Costritas finas y descamación durante 5-7 días",
              "Crema reparadora e hidratación intensa",
              "Fotoprotección estricta los meses siguientes",
            ]}
          />

          <ConsultaBlock
            title="¿Es el láser CO2 para tu piel?"
            description="En consulta valoramos tu fototipo, la zona y tu objetivo para ajustar los parámetros y el número de sesiones."
          />
        </div>
      </section>

      <TreatmentFAQ slug="laser-co2" />
      <ClinicalSignature />
      <Footer />
    </main>
  );
}
