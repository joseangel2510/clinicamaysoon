import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { MedicinaEsteticaTabs } from "@/components/MedicinaEsteticaTabs";
import { MedicinaEsteticaHombreSection } from "@/components/MedicinaEsteticaHombreSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medicina Estética Facial · Hombre | Maysoon",
  description:
    "Tratamientos faciales para hombre en Maysoon Valencia: MASCULOOK (definición masculina del ángulo mandibular), Lumixa, Carbonpeel, trasplante FUE, tricopigmentación y todo el catálogo facial masculino con tarifas reales.",
};

export default function MedicinaEsteticaHombrePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Medicina Estética · Facial · Hombre"
        titleLine1="Cuidado Masculino"
        titleLine2="con Carácter"
        subtitle="Tratamientos faciales pensados para el rostro masculino: definición mandibular, soluciones capilares y rejuvenecimiento sin perder tu carácter. MASCULOOK, Lumixa y Carbonpeel exclusivos en este catálogo."
        image="/images/sections/hero-hombre-facial.webp"
        imageAlt="Tratamiento facial masculino Maysoon"
      />
      <MedicinaEsteticaTabs />
      <MedicinaEsteticaHombreSection />
      <BeforeAfterSection />
      <Footer />
    </main>
  );
}
