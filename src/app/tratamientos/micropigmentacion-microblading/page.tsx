import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { InfoBlock } from "@/components/InfoBlock";
import { BulletListBlock } from "@/components/BulletListBlock";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Micropigmentación · Microblading | Maysoon",
  description:
    "Microblading: maquillaje semipermanente de cejas con trazos finos pelo a pelo. Aspecto totalmente natural, durabilidad 1-3 años. Poco invasivo y prácticamente indoloro.",
};

export default function MicropigmentacionPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Tratamiento · Cejas Semipermanentes"
        titleLine1="Microblading"
        titleLine2="Pelo a Pelo"
        subtitle="Procedimiento semipermanente de maquillaje para cejas. Trazos finos que imitan el crecimiento natural del vello — el aspecto más natural posible. Durabilidad de 1 a 3 años."
        image="/images/sections/closeup-cejas.webp"
        imageAlt="Tratamiento de Microblading — Maysoon"
      />

      <section className="bg-bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <InfoBlock
            eyebrow="Qué es"
            title="Maquillaje semipermanente realista"
            paragraphs={[
              "Una herramienta especial crea pequeñas incisiones en la piel y deposita el pigmento siguiendo trazos muy finos que imitan el crecimiento natural del vello.",
              "El resultado es una ceja con aspecto totalmente natural — diferente al tatuaje convencional o a la micropigmentación tradicional.",
            ]}
          />

          <BulletListBlock
            eyebrow="Para quién es"
            title="Ideal en casos de"
            items={[
              "Cejas dispersas o con poco vello",
              "Cejas asimétricas",
              "Búsqueda de un diseño más definido y duradero",
              "Personas que quieren ahorrar tiempo en su rutina diaria",
            ]}
          />

          <BulletListBlock
            eyebrow="Ventajas"
            title="Por qué funciona"
            items={[
              "Aspecto totalmente natural",
              "Durabilidad de 1 a 3 años con cuidados adecuados",
              "Poco invasivo",
              "Relativamente indoloro",
              "Sin tiempo de recuperación significativo",
            ]}
            columns={2}
            style="plus"
          />

          <ConsultaBlock
            title="¿Listo para olvidarte del lápiz de cejas?"
            description="En consulta diseñamos la forma de tu ceja a medida y te confirmamos si el microblading es el tratamiento ideal para ti."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
