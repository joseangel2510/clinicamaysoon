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
  title: "Micropigmentación de Cejas, Eyeliner y Labios | Maysoon",
  description:
    "Micropigmentación: maquillaje semipermanente de cejas, eyeliner y labios con diseño personalizado y acabado natural. Durabilidad de 1 a 3 años. En Maysoon Valencia.",
};

export default function MicropigmentacionPage() {
  return (
    <main>
      <TreatmentSchema slug="micropigmentacion-microblading" />
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Maquillaje Semipermanente"
        titleLine1="Micropigmentación"
        titleLine2="Cejas, Eyeliner y Labios"
        subtitle="Maquillaje semipermanente que define cejas, mirada y labios con un acabado natural. Diseño a medida de tu rostro y durabilidad de 1 a 3 años."
        image="/images/sections/closeup-cejas.webp"
        imageAlt="Tratamiento de micropigmentación — Maysoon"
      />
      <TreatmentDirectAnswer slug="micropigmentacion-microblading" />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Maquillaje semipermanente a medida"
            paragraphs={[
              "Con un dermógrafo se deposita pigmento en las capas superficiales de la piel. Se diseña antes la forma y el color que mejor encajan con tu rostro, tu tono de piel y tu expresión.",
              "El resultado es un maquillaje que se mantiene día y noche, resiste el agua y el deporte y se va atenuando poco a poco con el tiempo.",
            ]}
          />

          <InfoBlock
            eyebrow="Cejas"
            title="Cejas definidas y simétricas"
            paragraphs={[
              "Rellena huecos, corrige asimetrías y redibuja la forma de la ceja. Según lo que busques, se trabaja con efecto pelo a pelo, más natural, o con sombreado, con un acabado más de maquillaje.",
            ]}
          />

          <InfoBlock
            eyebrow="Eyeliner"
            title="Mirada definida"
            paragraphs={[
              "Una línea fina en el nacimiento de las pestañas que da densidad y profundidad a la mirada. Desde un efecto sutil que engrosa la pestaña hasta un eyeliner más marcado.",
            ]}
          />

          <InfoBlock
            eyebrow="Labios"
            title="Contorno y color"
            paragraphs={[
              "Define el contorno, corrige asimetrías y aporta un color natural y uniforme a los labios. Muy indicado cuando el labio ha perdido color o definición con los años.",
            ]}
          />

          <BulletListBlock
            eyebrow="Para quién es"
            title="Ideal en casos de"
            items={[
              "Cejas dispersas, con poco vello o asimétricas",
              "Pestañas poco pobladas o mirada sin definición",
              "Labios con poco color o contorno desdibujado",
              "Personas que quieren ahorrar tiempo en su rutina diaria",
            ]}
          />

          <BulletListBlock
            eyebrow="Ventajas"
            title="Por qué funciona"
            items={[
              "Acabado natural y diseño personalizado",
              "Durabilidad de 1 a 3 años con cuidados adecuados",
              "Poco invasivo",
              "Relativamente indoloro",
              "Sin tiempo de recuperación significativo",
            ]}
            columns={2}
            style="plus"
          />

          <ConsultaBlock
            title="¿Lista para olvidarte del maquillaje diario?"
            description="En consulta diseñamos contigo la forma y el color de tus cejas, eyeliner o labios y te explicamos cómo es el proceso."
          />
        </div>
      </section>

      <TreatmentFAQ slug="micropigmentacion-microblading" />
      <ClinicalSignature />
      <Footer />
    </main>
  );
}
