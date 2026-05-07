import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Luz Pulsada Intensa (IPL) | Maysoon",
  description:
    "IPL: manchas solares, pecas, puntos rubí, telangiectasias, acné, fotorrejuvenecimiento. Resultados visibles desde la primera sesión. Desde 134 €/sesión con bono.",
};

export default function IPLPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Luz Pulsada Intensa"
        titleLine1="IPL"
        titleLine2="Fotorrejuvenecimiento"
        subtitle="Tecnología de filtros que selecciona la longitud de onda según el objetivo: lesiones pigmentadas, vasculares o tratamiento del acné. Resultados desde la primera sesión."
        image="/images/sections/hero-treatment-ipl.webp"
        imageAlt="Tratamiento IPL — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas"
            intro="Precio por sesión al contratar bono de 3 sesiones. Consulta tarifas para sesiones sueltas."
            rows={[{ label: "IPL · sesión con bono de 3", price: "desde 134 €" }]}
          />

          <InfoBlock
            eyebrow="Tecnología"
            title="Filtros que eligen la longitud de onda"
            paragraphs={[
              "La IPL utiliza filtros que permiten elegir la longitud de onda según el objetivo: lesiones pigmentadas, hemoglobina o gama azul para acné. Resultados desde la primera sesión.",
            ]}
          />

          <BulletListBlock
            eyebrow="Aplicaciones"
            title="Para qué sirve la IPL"
            items={[
              "Manchas solares (léntigos)",
              "Pecas (efélides)",
              "Puntos rubí",
              "Telangiectasias y arañas vasculares faciales",
              "Couperosis",
              "Acné · efecto antiinflamatorio + destrucción P. Acnes",
              "Fotorrejuvenecimiento · unificación del tono y luminosidad",
              "Redensificación dérmica y cierre de poros",
              "Desaparición de discromías",
            ]}
            columns={2}
          />

          <ConsultaBlock
            title="¿Es la IPL para tu piel?"
            description="Una valoración personalizada te dirá si la IPL es el tratamiento adecuado para tu fototipo y objetivo."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
