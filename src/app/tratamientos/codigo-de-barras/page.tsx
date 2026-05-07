import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Código de Barras · Arrugas Peribucales | Maysoon",
  description:
    "Tratamiento personalizado de las arrugas verticales del labio superior. Ácido hialurónico, toxina botulínica y láser CO2/plasma según el grado y tipo de piel.",
};

export default function CodigoBarrasPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Arrugas Peribucales"
        titleLine1="Código"
        titleLine2="de Barras"
        subtitle="Las arrugas verticales del labio superior — más prematuras en fumadoras. Tratamientos personalizados según el grado de arruga, el tipo de piel y la edad de la paciente."
        image="/images/sections/closeup-labios.webp"
        imageAlt="Tratamiento Código de Barras — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Las arrugas verticales del labio superior"
            paragraphs={[
              "El llamado 'código de barras' son las arrugas verticales que aparecen en el labio superior, generalmente más prematuras y marcadas en personas fumadoras.",
              "Existen distintas opciones de tratamiento que se combinan o se aplican individualmente según el grado de la arruga y las características de cada piel.",
            ]}
          />

          <InfoBlock
            eyebrow="Opción 1 · Tratamiento principal"
            title="Ácido hialurónico"
            paragraphs={[
              "El ácido hialurónico es el tratamiento de referencia. Se trabajan a la vez el perfil labial, las propias arrugas y las comisuras, sin necesidad de dar volumen al labio si no se desea.",
              "El resultado es una boca con la piel rellena, las arrugas suavizadas y una expresión más fresca.",
            ]}
          />

          <InfoBlock
            eyebrow="Opción 2 · Complemento"
            title="Toxina botulínica"
            paragraphs={[
              "Se complementa con toques de toxina botulínica si el componente dinámico es muy fuerte — es decir, si las arrugas se acentúan con el movimiento del labio.",
            ]}
          />

          <InfoBlock
            eyebrow="Opción 3 · Casos avanzados"
            title="Láser CO2 o plasma previo"
            paragraphs={[
              "En arrugas profundas o pieles muy gruesas, primero se realiza un láser CO2 o plasma para una remodelación dérmica completa, y después se aplica el hialurónico.",
              "El tratamiento es siempre personalizado y se diseña en consulta tras valorar el tipo y grado de arruga.",
            ]}
          />

          <BulletListBlock
            eyebrow="Tres niveles · una solución"
            title="Tratamientos disponibles"
            items={[
              "Ácido hialurónico (perfil labial + arrugas + comisuras)",
              "Toxina botulínica (componente dinámico)",
              "Láser CO2 o plasma (arrugas profundas o pieles gruesas)",
            ]}
            style="plus"
          />

          <ConsultaBlock
            title="¿Cómo es tu código de barras?"
            description="En consulta valoramos el grado y tipo de arruga para recomendar el tratamiento o combinación más adecuada."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
