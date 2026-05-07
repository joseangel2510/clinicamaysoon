import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Armonización Mandibular | Maysoon TAN Pearl",
  description:
    "Remodelación del tercio inferior facial con ácido hialurónico: forma en V femenina o definición masculina. Tratamiento rápido, indoloro, sin cicatrices.",
};

export default function ArmonizacionMandibularPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Tercio Inferior"
        titleLine1="Armonización"
        titleLine2="Mandibular"
        subtitle="Remodelación del tercio inferior facial con ácido hialurónico. Devuelve volumen, resuelve descolgamientos y da forma en V femenina o definición masculina al óvalo facial."
        image="/images/sections/closeup-mandibula.webp"
        imageAlt="Armonización Mandibular — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Diseño del tercio inferior"
            paragraphs={[
              "Con ácido hialurónico devolvemos volumen a las zonas que lo han perdido, resolvemos descolgamientos y potenciamos mentones pequeños o retraídos.",
              "El objetivo cambia según el género: forma en V femenina (más afilada y definida) o definición masculina (líneas más cuadradas y proyección lateral).",
            ]}
          />

          <BulletListBlock
            eyebrow="Ventajas"
            title="Por qué funciona tan bien"
            items={[
              "Tratamiento rápido en consulta",
              "Indoloro y bien tolerado",
              "Larga duración",
              "Sin cicatrices (sin cirugía)",
              "Reincorporación inmediata",
            ]}
            columns={2}
            style="plus"
          />

          <BulletListBlock
            eyebrow="Combinable con"
            title="Sinergias clínicas"
            intro="La valoración siempre es individual y personalizada. Según el caso, combinamos:"
            items={[
              "Estimuladores de colágeno",
              "Hilos tensores",
              "Toxina botulínica en maseteros (efecto adelgazante mandibular)",
            ]}
          />

          <ConsultaBlock
            title="¿Quieres definir tu mandíbula?"
            description="En consulta valoramos tu rostro y diseñamos un plan de armonización a medida — femenino o masculino, según tu objetivo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
