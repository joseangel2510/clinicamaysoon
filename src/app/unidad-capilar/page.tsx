import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { UnidadCapilarSection } from "@/components/UnidadCapilarSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unidad Capilar | Maysoon",
  description:
    "Trasplante FUE, mesoterapia capilar, PRP, Trichotest, tricopigmentación y Biofibre. Centro de referencia en tratamientos médicos capilares en Valencia.",
};

export default function UnidadCapilarPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Unidad Capilar"
        titleLine1="Todo el Cuidado"
        titleLine2="del Cabello, en un Solo Lugar"
        subtitle="Diagnóstico, tratamientos médicos avanzados, trasplante capilar e implantes. Un protocolo integral diseñado para tu caso específico."
        image="/images/sections/unidad-capilar-real.png"
        imageAlt="Dr. José David realizando un estudio capilar en la cabina de Unidad Capilar de Maysoon"
      />
      <UnidadCapilarSection />
      <Footer />
    </main>
  );
}
