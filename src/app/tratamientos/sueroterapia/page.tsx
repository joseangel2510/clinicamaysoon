import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { FormulasGrid } from "@/components/FormulasGrid";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sueroterapia · 7 Fórmulas | Maysoon",
  description:
    "Sueroterapia intravenosa con 7 fórmulas: Antiaging, Sport, Inmuno, Energy, Detox, Mayers y Fitness. Sesiones de 30-50 min. Desde 130 € gotero o 450 € pack 4.",
};

export default function SueroterapiaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Bienestar Integral"
        titleLine1="Sueroterapia"
        titleLine2="7 Fórmulas"
        subtitle="Administración intravenosa de soluciones ricas en vitaminas, minerales y nutrientes esenciales. Absorción óptima y resultados rápidos — muy superior a la vía digestiva."
        image="/images/sections/closeup-brazo.webp"
        imageAlt="Tratamiento de Sueroterapia — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas"
            intro="Sesiones de 30-50 minutos. Pauta inicial: 1 gotero/mes durante 3-4 meses, luego mantenimiento cada 2-4 meses."
            rows={[
              { label: "Gotero suelto", price: "130 €" },
              { label: "Bono · 4 goteros", price: "450 €" },
              { label: "Bono · 6 goteros", price: "600 €" },
            ]}
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Vía intravenosa, máxima absorción"
            paragraphs={[
              "La sueroterapia administra directamente al torrente sanguíneo una solución personalizada de vitaminas, minerales y nutrientes esenciales.",
              "Comparada con la vía digestiva, la administración intravenosa garantiza una absorción óptima del 100 % y resultados visiblemente más rápidos.",
            ]}
          />

          <FormulasGrid
            eyebrow="Catálogo"
            title="7 fórmulas según tu objetivo"
            intro="Cada gotero se adapta a un objetivo concreto. En consulta te recomendamos la fórmula que mejor encaja con tu momento."
            formulas={[
              {
                name: "Antiaging y Antioxidante",
                tagline: "El más solicitado",
                description:
                  "Vitamina C, vitaminas B, Selenio y Glutatión. Reduce la oxidación y el envejecimiento celular.",
                icon: "sparkles",
                highlight: true,
              },
              {
                name: "Sport and Recovery",
                tagline: "Rendimiento atlético",
                description:
                  "Vitaminas B, taurina y glutatión. Recuperación muscular y prevención de lesiones.",
                icon: "activity",
              },
              {
                name: "Inmuno",
                tagline: "Defensas reforzadas",
                description:
                  "Estimula el sistema inmunitario y la capacidad fagocitaria frente a enfermedades estacionales.",
                icon: "shield",
              },
              {
                name: "Energy",
                tagline: "Aporte extra de energía",
                description:
                  "Pico de energía y rendimiento diario. Ideal para temporadas exigentes.",
                icon: "zap",
              },
              {
                name: "Detox",
                tagline: "Limpieza interior",
                description:
                  "Limpieza de toxinas a nivel hepático y renal. Sensación de ligereza y bienestar.",
                icon: "droplet",
              },
              {
                name: "Cocktail de Mayers",
                tagline: "El de los famosos",
                description:
                  "Multivitamínico hidratante. Aumento de energía, bienestar general y luz en la piel.",
                icon: "star",
              },
              {
                name: "Cocktail Fitness",
                tagline: "Cuerpo en forma",
                description:
                  "Pool de aminoácidos y carnitina. Desarrollo de masa muscular, recuperación y quema de grasa.",
                icon: "dumbbell",
              },
            ]}
          />

          <HighlightCallout
            eyebrow="Pauta recomendada"
            text="Inicio con 1 gotero al mes durante 3-4 meses. Luego, mantenimiento cada 2-4 meses según tu cuerpo."
            icon="insight"
          />

          <ConsultaBlock
            title="¿Cuál es tu fórmula?"
            description="En consulta valoramos tu estado y te recomendamos la sueroterapia (o combinación) que mejor encaja contigo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
