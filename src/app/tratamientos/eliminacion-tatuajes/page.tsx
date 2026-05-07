import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ProcessSteps } from "@/components/ProcessSteps";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eliminación de Tatuajes con Láser | Maysoon TAN Pearl",
  description:
    "Eliminación de tatuajes con tecnología láser. Borrado progresivo, controlado y respetando la piel. Sesiones espaciadas para resultados óptimos sin marcas.",
};

export default function EliminacionTatuajesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Cuerpo y Brazos"
        titleLine1="Eliminación"
        titleLine2="de Tatuajes con Láser"
        subtitle="Borrado progresivo y controlado de tatuajes con tecnología láser. Respetamos la integridad de la piel — sin cicatrices, sin marcas y con resultados visibles desde las primeras sesiones."
        image="/images/sections/closeup-brazo.webp"
        imageAlt="Eliminación de Tatuajes con Láser — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Borrado progresivo y controlado"
            paragraphs={[
              "El láser fragmenta las partículas de pigmento del tatuaje en partículas microscópicas que el sistema linfático elimina de forma natural en las semanas siguientes a cada sesión.",
              "El proceso es progresivo: cada sesión aclara el tatuaje un porcentaje hasta llegar al borrado total. La piel se respeta en todo momento — sin cicatrices ni marcas residuales.",
            ]}
          />

          <ProcessSteps
            eyebrow="Procedimiento"
            title="Cómo es una sesión"
            steps={[
              {
                title: "Valoración previa",
                description:
                  "Estudiamos colores, profundidad, antigüedad y zona del tatuaje. Diseñamos el plan de sesiones.",
              },
              {
                title: "Sesión láser",
                description:
                  "Aplicación con frío local. Sensación intensa pero soportable, similar a un chasquido sobre la piel.",
              },
              {
                title: "Cuidados post-sesión",
                description:
                  "Indicaciones específicas para cuidar la zona: hidratación, fotoprotección y evitar fricción durante unos días.",
              },
              {
                title: "Espaciado entre sesiones",
                description:
                  "Sesiones espaciadas 6-8 semanas para permitir que el sistema linfático elimine el pigmento fragmentado.",
              },
            ]}
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Qué tatuajes tratamos"
            items={[
              "Tatuajes negros y de colores oscuros",
              "Tatuajes coloridos (algunos pigmentos requieren más sesiones)",
              "Microblading o micropigmentación con la que ya no se identifica",
              "Borrados parciales para cobertura posterior",
            ]}
            columns={2}
          />

          <HighlightCallout
            eyebrow="Importante"
            text="El número de sesiones depende de los colores, la antigüedad y la profundidad del pigmento — la valoración previa es clave para una expectativa realista."
            icon="insight"
          />

          <BulletListBlock
            eyebrow="Cuidados"
            title="Lo que debes evitar"
            items={[
              "Exposición solar directa entre sesiones",
              "Rascar o frotar la zona tratada",
              "Saunas, baños calientes y piscinas durante 48 h",
              "Cosméticos con alcohol en la zona",
            ]}
            style="warning"
          />

          <ConsultaBlock
            title="¿Quieres borrar un tatuaje?"
            description="Reservamos una primera valoración para estimar el número de sesiones necesarias y darte un presupuesto personalizado."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
