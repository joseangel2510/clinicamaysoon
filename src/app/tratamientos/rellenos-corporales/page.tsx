import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rellenos Corporales · Lanluma X y Powerfill | Maysoon",
  description:
    "Rellenos corporales con ácido hialurónico y ácido poliláctico (Lanluma X®, Powerfill®). Aumento de gemelos, pectorales, glúteos, abdominales y rejuvenecimiento genital.",
};

export default function RellenosCorporalesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Cuerpo"
        titleLine1="Rellenos"
        titleLine2="Corporales"
        subtitle="Volumen estructural con los únicos productos heterólogos autorizados para revoluminización corporal. Ácido hialurónico corporal y ácido poliláctico Lanluma X® y Powerfill®."
        image="/images/sections/hero-treatment-rellenos-corporales.webp"
        imageAlt="Tratamiento de Rellenos Corporales — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Productos"
            title="Únicos heterólogos autorizados"
            paragraphs={[
              "Trabajamos con ácido hialurónico corporal y ácido poliláctico de las marcas Lanluma X® y Powerfill® — los únicos productos heterólogos autorizados para revoluminización corporal.",
              "Tratamiento ambulatorio con reincorporación inmediata. Resultados visibles desde la primera sesión.",
            ]}
          />

          <BulletListBlock
            eyebrow="Aplicaciones"
            title="Para qué se usan"
            items={[
              "Aumento de gemelos",
              "Aumento de pectorales",
              "Redibujado de abdominales",
              "Elevación y revoluminización de glúteos",
              "Corrección de depresiones patológicas (Pectum Excavatum)",
              "Corrección de cicatrices corporales",
              "Rejuvenecimiento genital femenino · atrofia por menopausia",
              "Engrosamiento genital masculino · ganancia notable en diámetro",
            ]}
            columns={2}
          />

          <ConsultaBlock
            title="¿Buscas volumen estructural natural?"
            description="Reservamos una primera valoración médica para diseñar el protocolo de relleno corporal que mejor responde a tu objetivo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
