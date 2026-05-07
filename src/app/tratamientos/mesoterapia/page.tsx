import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mesoterapia Facial, Corporal y Capilar | Maysoon",
  description:
    "Mesoterapia personalizada: facial desde 50 €, capilar desde 80 €, corporal desde 48 €. Hidratación, flacidez, retención de líquidos, frenar caída capilar y más.",
};

export default function MesoterapiaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Inyectable Personalizado"
        titleLine1="Mesoterapia"
        titleLine2="Facial · Corporal · Capilar"
        subtitle="Introducción intradérmica de cocktails personalizados de activos. Una técnica versátil que se adapta al diagnóstico de cada paciente."
        image="/images/sections/hero-treatment-mesoterapia.webp"
        imageAlt="Tratamiento de Mesoterapia — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por sesión con bono"
            intro="Precios por sesión al contratar bonos de tratamiento. Consulta tarifas para sesiones sueltas."
            rows={[
              { label: "Mesoterapia Facial", price: "desde 50 €" },
              { label: "Mesoterapia Capilar", price: "desde 80 €" },
              { label: "Mesoterapia Corporal", price: "desde 48 €" },
            ]}
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Inyección intradérmica personalizada"
            paragraphs={[
              "Método de introducción intradérmica o subdérmica de productos mediante agujas finas. La combinación de activos se personaliza en cada caso, según el diagnóstico clínico y los objetivos del paciente.",
            ]}
          />

          <InfoBlock
            eyebrow="Mesoterapia Facial"
            title="Hidratación, flacidez y luminosidad"
            paragraphs={[
              "Cocktail de ácido hialurónico, vitaminas, aminoácidos y péptidos. Trata hidratación profunda, flacidez cutánea y devuelve luminosidad a la piel.",
              "Producto especial Eyes Peptide para el tratamiento específico de ojeras y contorno de ojos.",
            ]}
          />

          <InfoBlock
            eyebrow="Mesoterapia Corporal"
            title="Drenaje y reducción"
            paragraphs={[
              "Combate flacidez, retención de líquidos, mejora el retorno venoso, elimina depósitos grasos y trata estrías.",
              "Frecuentemente se utiliza como preparación previa a la intralipoterapia. Procedimiento seguro y prácticamente indoloro con crema anestésica.",
            ]}
          />

          <InfoBlock
            eyebrow="Mesoterapia Capilar"
            title="Regeneración del cabello"
            paragraphs={[
              "Combinación de factores de crecimiento, péptidos biomiméticos y biotina. Regenera y revitaliza el cabello, frena la caída activa y recupera folículos en miniaturización.",
            ]}
          />

          <ConsultaBlock
            title="¿Cuál es la mesoterapia para tu caso?"
            description="Cada protocolo se diseña en consulta tras una valoración. Reserva tu primera cita y te indicamos el cocktail más adecuado para ti."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
