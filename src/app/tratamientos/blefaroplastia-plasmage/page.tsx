import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blefaroplastia PLASMAGE | Maysoon TAN Pearl",
  description:
    "PLASMAGE: tecnología de plasma (4º estado de la materia) para blefaroplastia no quirúrgica, código de barras, plasmalift y mucho más. Desde 700 € por párpado.",
};

export default function PlasmagePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Tecnología Plasma"
        titleLine1="Blefaroplastia"
        titleLine2="PLASMAGE"
        subtitle="El cuarto estado de la materia aplicado a la medicina estética. Blefaroplastia sin cirugía, código de barras, plasmalift y tratamiento de lesiones cutáneas con un solo dispositivo."
        image="/images/sections/hero-treatment-plasmage.webp"
        imageAlt="Tratamiento PLASMAGE — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas"
            rows={[
              { label: "Blefaroplastia superior", price: "700 €" },
              { label: "Blefaroplastia inferior", price: "800 €" },
              { label: "Blefaroplastia completa", price: "1.400 €" },
              { label: "Peribucal completo", price: "800 €" },
            ]}
            footnote="Consulta tarifas para otras zonas y tratamientos combinados."
          />

          <InfoBlock
            eyebrow="Tecnología"
            title="El plasma como bisturí no invasivo"
            paragraphs={[
              "PLASMAGE utiliza el cuarto estado de la materia: el plasma. Genera un campo electromagnético que ioniza el aire creando un haz de plasma que vaporiza y sublima el tejido de forma controlada.",
              "El resultado es una quemadura superficial no ablativa que retrae el tejido y produce un efecto tensor inmediato y duradero, sin necesidad de cirugía.",
            ]}
          />

          <BulletListBlock
            eyebrow="Aplicaciones"
            title="Una tecnología, múltiples usos"
            items={[
              "Blefaroplastia no quirúrgica · párpados superiores e inferiores (1-3 sesiones)",
              "Código de barras · arrugas peribucales sin necesidad de relleno",
              "Plasmalift · piel preauricular, patas de gallo, mejillas, contorno de boca, cuello",
              "Acné y marcas de acné",
              "Cicatrices quirúrgicas o accidentales",
              "Estrías",
              "Fibromas, verrugas, puntos rubí y lesiones vasculares faciales",
            ]}
            columns={2}
          />

          <BulletListBlock
            eyebrow="Combinable con"
            title="Sinergias clínicas"
            intro="Para un efecto lifting completo sin cirugía, PLASMAGE se combina frecuentemente con:"
            items={[
              "Rellenos con ácido hialurónico",
              "Hilos tensores",
              "Endopeel",
            ]}
            style="plus"
          />

          <ConsultaBlock
            title="¿Tu caso necesita Plasmage?"
            description="Una valoración médica te dirá si el plasma es la mejor opción para tu zona y qué número de sesiones es el adecuado."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
