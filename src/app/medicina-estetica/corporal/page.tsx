import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { MedicinaEsteticaTabs } from "@/components/MedicinaEsteticaTabs";
import { MedicinaCorporalSection } from "@/components/MedicinaCorporalSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medicina Estética Corporal · Mujer | Maysoon",
  description:
    "Tratamientos corporales para mujer en Maysoon Valencia: Morpheus 8, BodyTite, ENDOLÁSER Fox III, Intralipoterapia AQUALIX y sueroterapia. Catálogo por zona: cuello, brazos, abdomen, glúteos, piernas y más.",
};

export default function MedicinaCorporalPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Medicina Estética · Cuerpo · Mujer"
        titleLine1="Tratamientos Corporales"
        titleLine2="que Sienten tu Cuerpo"
        subtitle="Cada zona del cuerpo merece su técnica. Morpheus 8, BodyTite, ENDOLÁSER Fox III y bioestimulación combinados según tu objetivo y tu ritmo."
        image="/images/sections/hero-corporal.webp"
        imageAlt="Sala de tratamiento corporal Maysoon"
      />
      <MedicinaEsteticaTabs />
      <MedicinaCorporalSection />
      <BeforeAfterSection />
      <Footer />
    </main>
  );
}
