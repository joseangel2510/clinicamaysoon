import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { WhyMaysoonSection } from "@/components/WhyMaysoonSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "¿Por qué Maysoon? | Clínica Maysoon",
  description:
    "La excelencia como estándar. Tecnología avanzada, trato personalizado y resultados naturales en Maysoon, clínica médico-estética en Valencia.",
};

export default function PorQueMaysoonPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="¿Por qué Maysoon?"
        titleLine1="La Excelencia"
        titleLine2="Como Estándar"
        subtitle="No solo cuidamos tu imagen, cuidamos cada detalle de tu experiencia. Tecnología, trato y resultados al nivel que mereces."
        image="/images/why-maysoon.jpg"
        imageAlt="Maysoon — Excelencia y experiencia clínica"
      />
      <WhyMaysoonSection />
      <Footer />
    </main>
  );
}
