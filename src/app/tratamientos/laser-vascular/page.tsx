import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Láser Vascular Diodo 980 nm (Fox III) | Maysoon TAN Pearl",
  description:
    "Eliminación de arañas vasculares, puntos rubí y capilares hasta 2 mm en cualquier zona del cuerpo o rostro con láser de diodo 980 nm. Sin geles ni anestesia, transdérmico.",
};

export default function LaserVascularPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Láser Diodo 980 nm"
        titleLine1="Láser"
        titleLine2="Vascular"
        subtitle="El láser de diodo 980 nm más avanzado del mercado. Elimina arañas vasculares, puntos rubí y pequeños capilares de hasta 2 mm sin dañar tejidos sanos."
        image="/images/sections/hero-treatment-laser-vascular.webp"
        imageAlt="Tratamiento de Láser Vascular — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Tecnología"
            title="Fototermólisis selectiva"
            paragraphs={[
              "Láser de diodo 980 nm de última generación. Funciona por fototermólisis selectiva: la energía es absorbida por la hemoglobina del capilar, destruyéndolo sin dañar tejidos sanos circundantes.",
              "Tratamiento transdérmico, sin geles ni anestesia (se aconseja frío local). Apto para vasos de hasta 2 mm de diámetro en cualquier zona del cuerpo o rostro.",
            ]}
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Lesiones que tratamos"
            items={[
              "Arañas vasculares y telangiectasias faciales y corporales",
              "Vénulas de piernas",
              "Puntos rubí",
              "Couperosis",
              "Rosácea",
            ]}
          />

          <BulletListBlock
            eyebrow="Sesiones"
            title="Pauta orientativa"
            intro="Espaciado entre sesiones: 3-4 semanas."
            items={[
              "Telangiectasias · 2-3 sesiones",
              "Varículas · 3-4 sesiones",
              "Arañas vasculares · 3-4 sesiones",
              "Puntos rubí · 1-2 sesiones",
            ]}
            columns={2}
          />

          <BulletListBlock
            eyebrow="Contraindicaciones"
            title="Cuándo no aplicarlo"
            items={[
              "Embarazo",
              "Irritaciones o heridas en la zona a tratar",
              "Fototipo alto",
              "Pieles muy sensibles al calor",
            ]}
            style="warning"
          />

          <ConsultaBlock
            title="¿Listo para librarte de las arañas vasculares?"
            description="Una valoración previa te confirmará el número de sesiones necesarias para tu caso."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
