import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { MedicinaEsteticaTabs } from "@/components/MedicinaEsteticaTabs";
import { MedicinaCorporalHombreSection } from "@/components/MedicinaCorporalHombreSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medicina Estética Corporal · Hombre | Maysoon",
  description:
    "Tratamientos corporales para hombre en Maysoon Valencia: pectoral, abdomen, BodyTite, ENDOLÁSER Fox III, engrosamiento de pene y aumento de gemelos. Catálogo masculino completo por zona.",
};

export default function MedicinaCorporalHombrePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Medicina Estética · Cuerpo · Hombre"
        titleLine1="Cuerpo Masculino"
        titleLine2="con Estructura"
        subtitle="Tratamientos corporales pensados para el cuerpo masculino: pectoral, abdomen, glúteos, piernas y zona íntima. Engrosamiento de pene y aumento de gemelos exclusivos."
        image="/images/sections/hero-hombre-corporal.webp"
        imageAlt="Sala de tratamiento corporal masculino Maysoon"
      />
      <MedicinaEsteticaTabs />
      <MedicinaCorporalHombreSection />
      <BeforeAfterSection />
      <Footer />
    </main>
  );
}
