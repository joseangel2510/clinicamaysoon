import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bruxismo · Tratamiento con Toxina Botulínica | Maysoon",
  description:
    "Tratamiento del bruxismo con toxina botulínica en maseteros. Reduce cefaleas, protege ATM y dientes. También afina la cara y da forma en V a la mandíbula femenina.",
};

export default function BruxismoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Maseteros"
        titleLine1="Bruxismo"
        titleLine2="Sin Tensión"
        subtitle="Toxina botulínica en maseteros: relajación efectiva que elimina la causa, no solo las consecuencias. Reduce cefaleas, protege la ATM y las piezas dentales."
        image="/images/sections/closeup-mandibula.webp"
        imageAlt="Tratamiento del Bruxismo — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Cómo funciona"
            title="Relajación del músculo masetero"
            paragraphs={[
              "La toxina botulínica se aplica directamente en los músculos maseteros, relajándolos de forma efectiva. Eliminamos la causa del bruxismo (exceso de tensión muscular), no solo las consecuencias.",
              "Sesión de 20 minutos, indolora (2-3 pinchazos por lado con aguja muy fina). Efecto visible a los 2-3 días, máximo a los 10-15 días.",
            ]}
          />

          <BulletListBlock
            eyebrow="Beneficios"
            title="Qué consigues"
            items={[
              "Reducción de cefaleas tensionales",
              "Protección de la ATM (articulación temporomandibular)",
              "Protección de las piezas dentales",
              "Eliminación del rechinar nocturno",
              "Mejora de la calidad del sueño",
            ]}
          />

          <InfoBlock
            eyebrow="Duración"
            title="3 a 5 meses por sesión"
            paragraphs={[
              "Duración inicial de 3-4 meses, prolongándose hasta 5 meses tras varias sesiones de mantenimiento.",
            ]}
          />

          <InfoBlock
            eyebrow="Bonus estético"
            title="Mandíbula en forma de V"
            paragraphs={[
              "El mismo tratamiento también se utiliza con fines estéticos para afinar la cara y dar forma en V a la mandíbula femenina, eliminando la cuadratura del tercio inferior y consiguiendo un óvalo más armónico.",
            ]}
          />

          <ConsultaBlock
            title="¿Sufres bruxismo o quieres afinar tu mandíbula?"
            description="Reservamos una primera consulta médica para valorar tu caso y diseñar el protocolo más adecuado."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
