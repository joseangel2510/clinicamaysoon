import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lifting Retensor Cutáneo (Endopeel) | Maysoon",
  description:
    "Endopeel: lifting sin cirugía con resultados visibles a los 30 minutos. Mejora flacidez, tono muscular y elevación facial y corporal sin alterar tus rasgos. Desde 350 € pack 3 sesiones.",
};

export default function EndopeelPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Facial y Corporal"
        titleLine1="Lifting Retensor"
        titleLine2="Endopeel"
        subtitle="La técnica del siglo XXI más importante en medicina estética y antienvejecimiento. Lifting sin cirugía, sin prótesis y sin estiramientos — manteniendo tus rasgos naturales."
        image="/images/sections/hero-treatment-endopeel.webp"
        imageAlt="Tratamiento de Lifting Retensor Endopeel — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Pack de 3 sesiones"
            intro="Precios por pack de tres sesiones. Consulta combinaciones con hilos tensores y otros tratamientos."
            rows={[
              { label: "Facial completo", price: "450 €" },
              { label: "Tercio inferior", price: "350 €" },
              { label: "Facial + Cervical", price: "500 €" },
              { label: "Elevación de glúteos", price: "800 €" },
              { label: "Marcado abdominal", price: "500 €" },
            ]}
            footnote="Otros combinados con hilos tensores y rellenos disponibles bajo valoración."
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Una técnica revolucionaria"
            paragraphs={[
              "Endopeel se considera la técnica más importante en medicina estética y antienvejecimiento del siglo XXI. Da solución a la flacidez de la piel y del plano muscular causada por el envejecimiento.",
              "Consigue los mismos resultados que un lifting quirúrgico — sin cirugía, sin prótesis y sin estiramientos — manteniendo intactos los rasgos naturales del paciente.",
              "Inventada por un cirujano plástico suizo, lleva más de 20 años aplicándose con éxito en clínicas de todo el mundo.",
            ]}
          />

          <InfoBlock
            eyebrow="Procedimiento"
            title="Sin anestesia, sin baja"
            paragraphs={[
              "Infiltración de un producto a base de ácido carbólico en los músculos mediante agujas de pequeño calibre. No requiere anestesia (solo gel anestésico tópico).",
              "Se realiza en consulta, sin convalecencia y con reincorporación inmediata. El efecto es visible en los primeros 30 minutos. Tras la sesión se aplica un masaje vigoroso para evitar inflamaciones.",
            ]}
          />

          <InfoBlock
            eyebrow="Resultados"
            title="Retensado natural y reversible"
            paragraphs={[
              "Mejora la flacidez, aumenta el tono muscular y produce elevación con efecto lifting. No genera nódulos ni granulomas, no se desplaza y no es un implante.",
              "Retensado natural por acortamiento del músculo sin modificar la mímica ni la expresión. La duración inicial es de aproximadamente 1 mes y se prolonga a más de medio año tras 2-3 sesiones. Todos los cambios son totalmente reversibles.",
            ]}
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Zonas tratables"
            intro="Apto tanto para hombres como para mujeres en una gran variedad de zonas faciales y corporales."
            items={[
              "Pómulos",
              "Línea mandibular",
              "Surco nasogeniano",
              "Doble mentón",
              "Cuello y escote",
              "Glúteos",
              "Abdomen",
              "Pectoral",
              "Brazos y piernas",
            ]}
            columns={2}
          />

          <BulletListBlock
            eyebrow="Combinable con"
            title="Sinergias clínicas"
            items={[
              "Hilos tensores",
              "Rellenos faciales y corporales",
              "Peelings médicos",
            ]}
            style="plus"
          />

          <ConsultaBlock
            title="¿Quieres saber si Endopeel es para ti?"
            description="Una valoración médica personalizada te dirá qué zonas pueden beneficiarse y qué pack de sesiones es el adecuado para tu caso."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
