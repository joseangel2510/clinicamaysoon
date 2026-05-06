import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { MedicinaEsteticaSection } from "@/components/MedicinaEsteticaSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medicina Estética | Maysoon TAN Pearl",
  description:
    "Botox, hilos tensores, peelings médicos y más. Tratamientos de medicina estética con resultados naturales en Maysoon TAN Pearl, Valencia.",
};

export default function MedicinaEsteticaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Medicina Estética · Mujer"
        titleLine1="Tratamientos Faciales"
        titleLine2="que Realzan tu Esencia"
        subtitle="Cada zona del rostro tiene su técnica, su ritmo y su precio. Aquí está nuestro catálogo completo de tratamientos faciales para mujer — con tarifas reales y filosofía de naturalidad."
        image="/images/sections/hero-medicina-estetica.webp"
        imageAlt="Sala de tratamiento de medicina estética Maysoon"
      />
      <MedicinaEsteticaSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
