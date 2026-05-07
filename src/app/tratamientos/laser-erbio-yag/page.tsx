import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Láser Erbio YAG | Maysoon TAN Pearl",
  description:
    "Láser Erbio YAG con tres modalidades: quirúrgico, Velo de Novia (peeling láser) y fraccionado/resurfacing. Más selectivo que el CO2 con menos daño térmico.",
};

export default function LaserErbioPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Tecnología Láser"
        titleLine1="Láser Erbio"
        titleLine2="YAG"
        subtitle="Láser de alta potencia y elevada longitud de onda. Focaliza su acción en el agua de los tejidos vaporizándolos por capas — más selectivo que el CO2, con menos daño térmico y recuperación más rápida."
        image="/images/sections/closeup-acne.webp"
        imageAlt="Tratamiento de Láser Erbio YAG — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Tecnología"
            title="Selectividad superior al láser CO2"
            paragraphs={[
              "El láser Erbio YAG combina alta potencia con una longitud de onda elevada. Su acción se focaliza específicamente en el agua de los tejidos, vaporizándolos por capas controladas.",
              "Comparado con el láser de CO2, el Erbio YAG es más selectivo — produce menos daño térmico colateral y permite una recuperación significativamente más rápida.",
            ]}
          />

          <InfoBlock
            eyebrow="Modalidad 1 · Quirúrgico"
            title="Cabezal focalizado"
            paragraphs={[
              "Elimina con precisión lesiones cutáneas: verrugas planas, fibromas, queratosis seborreicas, nevus intradérmicos y xantelasmas.",
              "Sin dolor, sin anestesia y sin necesidad de puntos. Recuperación inmediata.",
            ]}
          />

          <InfoBlock
            eyebrow="Modalidad 2 · Velo de Novia"
            title="Cabezal desfocalizado"
            paragraphs={[
              "Peeling con láser que renueva la superficie cutánea y estimula la producción de colágeno. Indicado para rejuvenecimiento facial global con un acabado luminoso y unificado — el conocido efecto 'velo de novia'.",
            ]}
          />

          <InfoBlock
            eyebrow="Modalidad 3 · Resurfacing"
            title="Cabezal fraccionado"
            paragraphs={[
              "Modalidad fraccionada para retensado profundo de la piel, unificación del tono, corrección de marcas de acné, cicatrices, hiperpigmentaciones solares y post-inflamatorias, y melasma.",
            ]}
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Para qué sirve"
            items={[
              "Verrugas planas, fibromas, queratosis seborreicas",
              "Nevus intradérmicos, xantelasmas",
              "Rejuvenecimiento global facial (Velo de Novia)",
              "Marcas de acné y cicatrices",
              "Hiperpigmentaciones solares y post-inflamatorias",
              "Melasma",
            ]}
            columns={2}
          />

          <ConsultaBlock
            title="¿Es el Erbio YAG para tu piel?"
            description="En consulta valoramos qué modalidad del láser Erbio YAG es la adecuada para tu caso y tu fototipo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
