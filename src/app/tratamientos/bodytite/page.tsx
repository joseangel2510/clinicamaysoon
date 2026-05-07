import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BodyTite · Remodelación Corporal con Radiofrecuencia | Maysoon",
  description:
    "BodyTite: alternativa mínimamente invasiva a la liposucción. Aprobado por la FDA. Radiofrecuencia profunda + tensado simultáneo de la piel. Variantes FaceTite y AccuTite.",
};

export default function BodyTitePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Remodelación Corporal"
        titleLine1="BodyTite"
        titleLine2="Sin Liposucción"
        subtitle="Procedimiento mínimamente invasivo de remodelación corporal con radiofrecuencia. Aprobado por la FDA. Disuelve la grasa subcutánea mientras tensa la piel desde dentro — la alternativa moderna a la liposucción tradicional."
        image="/images/sections/closeup-abdomen.webp"
        imageAlt="Tratamiento BodyTite — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Radiofrecuencia profunda + superficial"
            paragraphs={[
              "Pequeñas incisiones permiten introducir una sonda que emite radiofrecuencia tanto en profundidad como en superficie. La grasa subcutánea se disuelve y se extrae mientras la piel se tensa simultáneamente por estímulo del colágeno.",
              "Resultados naturales: la piel se va tensando gradualmente sin grandes cambios bruscos, manteniendo la armonía corporal.",
            ]}
          />

          <ProcessSteps
            eyebrow="Procedimiento"
            title="Cómo se realiza"
            steps={[
              {
                title: "Anestesia local",
                description:
                  "Se anestesia únicamente la zona a tratar — no es necesaria anestesia general.",
              },
              {
                title: "Microincisiones",
                description:
                  "Pequeñas incisiones discretas para introducir la sonda. No requieren puntos visibles.",
              },
              {
                title: "Radiofrecuencia bipolar",
                description:
                  "La sonda emite calor controlado en profundidad y superficie: disolución grasa + estímulo del colágeno.",
              },
              {
                title: "Recuperación rápida",
                description:
                  "Vuelta a la rutina en pocos días. Resultados naturales que se consolidan en semanas.",
              },
            ]}
          />

          <BulletListBlock
            eyebrow="Ventajas"
            title="Por qué elegirlo"
            items={[
              "Mínima invasión vs liposucción tradicional",
              "Resultados naturales (piel tensada gradualmente)",
              "Menos dolor y hematomas",
              "Recuperación rápida (días a una semana)",
              "Aprobado por la FDA",
            ]}
            columns={2}
            style="plus"
          />

          <BulletListBlock
            eyebrow="Variantes y zonas"
            title="Una tecnología, tres aplicaciones"
            intro="Según la zona, BodyTite cuenta con cabezales específicos diseñados para optimizar el resultado."
            items={[
              "BodyTite · abdomen, muslos, brazos, papada",
              "FaceTite · facial, papada, flacidez del cuello",
              "AccuTite · zonas pequeñas y delicadas (bolsas oculares, surcos nasogenianos)",
            ]}
          />

          <ConsultaBlock
            title="¿Es BodyTite la mejor opción para ti?"
            description="Reservamos una primera valoración para confirmar si BodyTite (o sus variantes) es el procedimiento adecuado para tu caso."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
