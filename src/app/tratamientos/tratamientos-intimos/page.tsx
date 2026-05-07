import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Engrosamiento de Pene y Aumento de Labios Mayores | Maysoon",
  description:
    "Tratamientos íntimos con ácido hialurónico corporal: engrosamiento de pene (hasta 4 cm circunferencia), aumento de glande y aumento de labios mayores. Discreción total.",
};

export default function TratamientosIntimosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamientos · Zona Íntima"
        titleLine1="Cuidado Íntimo"
        titleLine2="con Discreción"
        subtitle="Tratamientos íntimos con ácido hialurónico corporal de máxima calidad. Engrosamiento de pene, aumento de glande y aumento de labios mayores con técnica reversible y resultado natural."
        image="/images/sections/closeup-hombre-intima.webp"
        imageAlt="Tratamientos íntimos — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* ── HOMBRE ── */}
          <PricingTable
            title="Tarifas · Engrosamiento de pene"
            intro="Aplicación con cánulas (no agujas) para máxima seguridad. Anestesia local."
            rows={[
              { label: "Hasta 10 ml", price: "800 €" },
              { label: "Hasta 15 ml", price: "900 €" },
              { label: "Hasta 20 ml", price: "1.000 €" },
            ]}
          />

          <PricingTable
            title="Tarifas · Engrosamiento de glande"
            rows={[
              { label: "1 ml", price: "400 €" },
              {
                label: "Combinado con engrosamiento de pene",
                detail: "en la misma sesión",
                price: "+ 200 €",
              },
            ]}
          />

          <InfoBlock
            eyebrow="Engrosamiento de Pene · Hombre"
            title="Hasta 4 cm de circunferencia"
            paragraphs={[
              "Tratamiento con ácido hialurónico corporal específico que permite una ganancia de hasta 4 cm de circunferencia, tanto en reposo como en erección. La duración del efecto es de hasta 2 años, con un efecto residual permanente por la producción endógena de colágeno.",
              "Ambulatorio, con anestesia local e indoloro. Aplicamos cánulas (no agujas) para máxima seguridad. Reincorporación inmediata.",
              "Lo ideal es estar circuncidado, pero los pacientes con prepucio también son candidatos. El engrosamiento del glande puede ayudar también a controlar la eyaculación precoz. Importante: no mejora la calidad de la erección ni la potencia sexual.",
              "Sin contraindicaciones de edad, salvo en casos de diabetes mal controlada.",
            ]}
          />

          <HighlightCallout
            eyebrow="El dato clínico"
            text="Hasta 4 cm de ganancia en circunferencia en una sola sesión. Duración hasta 2 años con efecto residual permanente."
            icon="star"
          />

          {/* ── MUJER ── */}
          <PricingTable
            title="Tarifas · Aumento de labios mayores"
            intro="Para casos de pérdida de volumen natural por bajada de peso, atrofia por edad o menopausia."
            rows={[
              { label: "Hasta 10 ml", price: "600 €" },
              { label: "Hasta 20 ml", price: "800 €" },
            ]}
          />

          <InfoBlock
            eyebrow="Aumento de Labios Mayores · Mujer"
            title="Volumen, hidratación y protección"
            paragraphs={[
              "Tratamiento indicado para casos de pérdida de volumen natural en la zona genital femenina externa: pérdida de peso, atrofia por edad o cambios hormonales en la menopausia.",
              "El ácido hialurónico devuelve volumen, turgencia e hidratación a los labios mayores. Aporta protección frente a infecciones, roces y sequedad de la mucosa.",
            ]}
          />

          <BulletListBlock
            eyebrow="Procedimiento · Mujer"
            title="Sencillo y rápido"
            items={[
              "Anestesia local",
              "Duración aproximada de 30 minutos",
              "Reincorporación inmediata",
              "4-6 días de reposo sexual recomendado",
            ]}
          />

          <ConsultaBlock
            title="¿Quieres más información en privado?"
            description="Espacio reservado, atención discreta y valoración personalizada. Reserva tu consulta de tratamientos íntimos."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
