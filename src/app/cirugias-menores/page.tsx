import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { CirugiasMenoresSection } from "@/components/CirugiasMenoresSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cirugías Menores | Maysoon TAN Pearl",
  description:
    "Blefaroplastia y cirugías menores en Maysoon TAN Pearl Valencia. Intervenciones planificadas, resultados naturales y seguimiento médico personalizado.",
};

export default function CirugiasMenoresPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Cirugías Menores"
        titleLine1="Pequeños Gestos,"
        titleLine2="Grandes Resultados"
        subtitle="Intervenciones precisas y planificadas que resuelven detalles concretos con resultados naturales y cicatrización mínima."
        image="/images/sections/hero-cirugias.webp"
        imageAlt="Sala de cirugías menores en Maysoon TAN Pearl"
      />
      <CirugiasMenoresSection />
      <Footer />
    </main>
  );
}
