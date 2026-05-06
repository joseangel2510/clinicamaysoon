import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { EsteticaSection } from "@/components/EsteticaSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Estética | Maysoon TAN Pearl",
  description:
    "Microblading de cejas y servicios estéticos personalizados en Maysoon TAN Pearl Valencia. Diseño, técnica y resultado natural.",
};

export default function EsteticaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Estética"
        titleLine1="Belleza"
        titleLine2="en los Detalles"
        subtitle="Servicios estéticos refinados, ejecutados con técnica y mirada artística. Tu rostro merece detalles cuidados al milímetro."
        image="/images/sections/hero-estetica.webp"
        imageAlt="Sesión de microblading en Maysoon TAN Pearl"
      />
      <EsteticaSection />
      <Footer />
    </main>
  );
}
