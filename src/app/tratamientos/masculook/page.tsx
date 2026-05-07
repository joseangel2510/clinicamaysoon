import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MASCULOOK · Armonización Mandibular Masculina | Maysoon TAN Pearl",
  description:
    "MASCULOOK: armonización mandibular exclusiva para hombre con ácido hialurónico. Mandíbula marcada, ángulo definido y mentón prominente. Aspecto masculino y atractivo.",
};

export default function MasculookPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Exclusivo Hombre"
        titleLine1="MASCULOOK"
        titleLine2="Mandíbula Marcada"
        subtitle="Armonización mandibular masculina con ácido hialurónico. Diseñado para conseguir contornos potentes, líneas mandibulares cuadradas y un mentón prominente — el aspecto masculino y atractivo de referencia."
        image="/images/sections/closeup-hombre-mandibula.webp"
        imageAlt="MASCULOOK · Armonización Mandibular Masculina — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Mandíbula con carácter"
            paragraphs={[
              "MASCULOOK es nuestro protocolo exclusivo de armonización mandibular masculina. Con ácido hialurónico se consigue una mandíbula marcada, contornos potentes y cuadrados, una línea mandibular definida y un mentón prominente — los rasgos faciales asociados a un aspecto masculino atractivo.",
              "El ácido hialurónico además rehidrata los tejidos y estimula la colagenogénesis natural, sumando un efecto rejuvenecedor al efecto estructural.",
            ]}
          />

          <HighlightCallout
            eyebrow="Lo que lo distingue"
            text="No es un relleno cualquiera — es un protocolo diseñado específicamente para potenciar la masculinidad facial sin perder naturalidad."
            icon="star"
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Para quién es"
            intro="Varones de cualquier edad que deseen:"
            items={[
              "Potenciar y marcar líneas mandibulares más masculinas",
              "Corregir asimetrías mandibulares",
              "Aumentar la proyección y volumen del mentón",
              "Reforzar el ángulo mandibular",
              "Definir la zona preauricular",
            ]}
          />

          <BulletListBlock
            eyebrow="Ventajas del tratamiento"
            title="Por qué elegir MASCULOOK"
            items={[
              "Tratamiento indoloro",
              "Reincorporación inmediata, sin baja",
              "Resultados naturales y reversibles",
              "Combinable con corrección de bruxismo",
              "Estimula colágeno endógeno",
            ]}
            columns={2}
            style="plus"
          />

          <BulletListBlock
            eyebrow="Contraindicaciones"
            title="Cuándo no aplicarlo"
            items={[
              "Infecciones o inflamaciones activas en la zona",
              "Dermatitis o irritaciones cutáneas",
              "Lupus u otras enfermedades autoinmunes mal controladas",
              "Pacientes con riesgo alto de traumatismos mandibulares (deportes de contacto, profesiones específicas)",
            ]}
            style="warning"
          />

          <ConsultaBlock
            title="¿Quieres una mandíbula con carácter?"
            description="Reservamos una valoración masculina personalizada para diseñar el plan MASCULOOK adaptado a tus rasgos."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
