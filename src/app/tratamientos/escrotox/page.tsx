import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { TreatmentSchema } from "@/components/TreatmentSchema";
import { TreatmentDirectAnswer } from "@/components/TreatmentDirectAnswer";
import { TreatmentFAQ } from "@/components/TreatmentFAQ";
import { ClinicalSignature } from "@/components/ClinicalSignature";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escrotox · Toxina Botulínica en Genital Masculino | Maysoon",
  description:
    "Escrotox y usos de la toxina botulínica (neuromoduladores) en el genital masculino: escroto más liso y relajado, hiperhidrosis escrotal y dolor escrotal. Consulta reservada en Valencia.",
};

export default function EscrotoxPage() {
  return (
    <main>
      <TreatmentSchema slug="escrotox" />
      <Navbar />
      <PageHero
        eyebrow="Zona Íntima · Exclusivo Hombre"
        titleLine1="Escrotox"
        titleLine2="y neuromoduladores"
        subtitle="Usos de la toxina botulínica en el genital masculino: un escroto más liso y relajado, menos sudoración y alivio de algunas molestias. Tratamiento rápido, en consulta reservada y con máxima discreción."
        image="/images/sections/closeup-hombre-intima.webp"
        imageAlt="Escrotox, tratamiento íntimo masculino — Maysoon"
      />
      <TreatmentDirectAnswer slug="escrotox" />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Cómo actúa"
            title="Relajar el músculo dartos"
            paragraphs={[
              "La piel del escroto contiene un músculo fino, el dartos, que se contrae con el frío, el estrés o el roce. Esa contracción es la que arruga la piel y hace que el escroto se vea más pequeño y retraído.",
              "La toxina botulínica (neuromoduladores) bloquea de forma temporal y reversible la señal que hace contraerse al dartos. El músculo se relaja y la piel queda más lisa, más suelta y con un aspecto más amplio.",
            ]}
          />

          <InfoBlock
            eyebrow="Uso 1 · Estético"
            title="Escrotox"
            paragraphs={[
              "Es el uso más conocido. Suaviza las arrugas del escroto, reduce la retracción y le da un aspecto más relajado, liso y de mayor tamaño. Muchos pacientes lo describen también como una sensación de mayor comodidad.",
            ]}
          />

          <InfoBlock
            eyebrow="Uso 2 · Sudoración"
            title="Hiperhidrosis escrotal"
            paragraphs={[
              "Igual que en axilas, manos o pies, la toxina botulínica reduce la actividad de las glándulas sudoríparas de la zona. Disminuye la humedad, el roce, el olor y las irritaciones que provoca el sudor excesivo en la ingle y el escroto.",
            ]}
          />

          <InfoBlock
            eyebrow="Uso 3 · Médico"
            title="Dolor escrotal crónico"
            paragraphs={[
              "En casos seleccionados de dolor escrotal o testicular crónico, la toxina botulínica puede ayudar a relajar la musculatura y aliviar las molestias. Siempre se indica tras una valoración médica y descartando antes otras causas del dolor.",
            ]}
          />

          <InfoBlock
            eyebrow="Otros usos"
            title="Líneas en investigación"
            paragraphs={[
              "Se está estudiando el uso de la toxina botulínica en la disfunción eréctil y en la eyaculación precoz. Por ahora no son tratamientos estándar, así que en consulta te explicamos qué evidencia hay y si tiene sentido en tu caso.",
            ]}
          />

          <BulletListBlock
            eyebrow="El tratamiento"
            title="Cómo es la sesión"
            items={[
              "Sesión de unos 20-30 minutos en consulta reservada",
              "Crema anestésica y aguja muy fina: molestia mínima",
              "Vuelta inmediata a la vida normal",
              "Efecto visible a partir de 1-2 semanas",
              "Duración aproximada de 3 a 6 meses",
              "Sin relaciones sexuales ni deporte intenso 24-48 h",
            ]}
            columns={2}
          />

          <ConsultaBlock
            title="¿Quieres saber si es para ti?"
            description="Valoramos tu caso en una consulta privada y te explicamos qué uso de la toxina botulínica encaja con lo que buscas."
          />
        </div>
      </section>

      <TreatmentFAQ slug="escrotox" />
      <ClinicalSignature />
      <Footer />
    </main>
  );
}
