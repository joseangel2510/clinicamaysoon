import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { PricingTable } from "@/components/PricingTable";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ProcessSteps } from "@/components/ProcessSteps";
import { HighlightCallout } from "@/components/HighlightCallout";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Plasma-Gel Relleno · 100% Autólogo | Maysoon TAN Pearl",
  description:
    "Plasma-Gel: relleno facial obtenido de tu propia sangre. Sin riesgo de alergias ni rechazos, 25% se fija de forma definitiva. Desde 50 €/ml en pack 3 sesiones.",
};

export default function PlasmaGelPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · 100% Autólogo"
        titleLine1="Plasma-Gel"
        titleLine2="Relleno"
        subtitle="Lo último en rellenos faciales. Se obtiene de tu propia sangre, sin sustancias externas. Cero riesgo de alergias y un 25% de fijación definitiva con producción de colágeno nuevo."
        image="/images/sections/closeup-rostro.webp"
        imageAlt="Tratamiento de Plasma-Gel — Maysoon TAN Pearl"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <PricingTable
            title="Tarifas · Por mililitro"
            intro="Precios por ml según zona y modalidad."
            rows={[
              {
                label: "Facial",
                detail: "sesión suelta",
                price: "desde 80 €/ml",
              },
              {
                label: "Facial",
                detail: "pack 3 sesiones",
                price: "desde 50 €/ml",
              },
              {
                label: "Ojeras",
                detail: "sesión suelta",
                price: "desde 100 €/ml",
              },
              {
                label: "Ojeras",
                detail: "pack 3 sesiones",
                price: "desde 80 €/ml",
              },
            ]}
          />

          <InfoBlock
            eyebrow="Qué es"
            title="Tu propia sangre como relleno"
            paragraphs={[
              "Tratamiento de vanguardia en rellenos faciales. El producto se obtiene íntegramente de tu propia sangre — 100% autólogo. No se añade ninguna sustancia externa.",
              "El resultado es un material de relleno modelable, completamente natural y compatible con tu organismo.",
            ]}
          />

          <ProcessSteps
            eyebrow="Procedimiento"
            title="Cuatro pasos hasta el relleno"
            steps={[
              {
                title: "Extracción de sangre",
                description:
                  "Una pequeña muestra de tu propia sangre, igual que una analítica convencional.",
              },
              {
                title: "Centrifugación a 3.000+ rpm",
                description:
                  "Separación del plasma de los demás componentes sanguíneos en condiciones estériles.",
              },
              {
                title: "Calentamiento controlado",
                description:
                  "Ciclo térmico que da al plasma su consistencia de gel modelable, sin agregar sustancias externas.",
              },
              {
                title: "Infiltración personalizada",
                description:
                  "Aplicación en las zonas a tratar mediante cánula. Resultados inmediatos, modelables en consulta.",
              },
            ]}
          />

          <HighlightCallout
            eyebrow="El dato clave"
            text="El 25 % del gel infiltrado se fija de forma definitiva, estimulando la producción de nuevo colágeno endógeno."
            icon="star"
          />

          <BulletListBlock
            eyebrow="Ventajas"
            title="Por qué elegirlo"
            items={[
              "Sin riesgo de transmisión de enfermedades (autólogo)",
              "Sin reacciones alérgicas",
              "25 % de fijación definitiva con producción de colágeno",
              "Mínimamente invasivo, resultados inmediatos",
              "Sin límites de cantidad",
              "Aumenta colágeno, elasticidad, tensión e hidratación",
            ]}
            columns={2}
            style="plus"
          />

          <BulletListBlock
            eyebrow="Indicaciones"
            title="Zonas y arrugas tratables"
            items={[
              "Líneas de expresión y arrugas superficiales (patas de gallo, peribucales)",
              "Arrugas profundas (entrecejo, nasogenianos, líneas de marioneta)",
              "Restauración de volúmenes (pómulos, ojeras hundidas, surco de la lágrima)",
              "Perfilado y aumento de labios",
            ]}
          />

          <InfoBlock
            eyebrow="Protocolo"
            title="3 sesiones · efecto duradero"
            paragraphs={[
              "Pauta recomendada: 3 sesiones espaciadas 2-3 meses entre sí.",
              "Duración del efecto: 8-12 meses tras la última aplicación, con un 25 % de fijación definitiva por producción de colágeno endógeno.",
            ]}
          />

          <ConsultaBlock
            title="¿Quieres un relleno con tu propia sangre?"
            description="Reservamos una primera valoración para confirmar que Plasma-Gel es el tratamiento adecuado para tu caso."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
