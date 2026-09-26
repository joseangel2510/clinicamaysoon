import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { AparatologiaSection } from "@/components/AparatologiaSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aparatología y Técnicas Avanzadas | Maysoon",
  description:
    "Láser diodo HS-810, Ultraformer III (HIFU), EMSlim, PLASMAGE, ENDOLÁSER Liften Dual, láser vascular, Morpheus 8, IPL, láser CO2 y Q-Switched. Equipos de última generación con protocolos personalizados en Maysoon Valencia.",
};

export default function AparatologiaPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Aparatología & Técnicas"
        titleLine1="Tecnología"
        titleLine2="de Vanguardia"
        subtitle="Equipos de última generación que respetan tu piel y maximizan resultados. Cada protocolo se ejecuta con la precisión y los parámetros adecuados a tu caso."
        image="/images/sections/hero-aparatologia.webp"
        imageAlt="Equipo de láser diodo en sala de tratamiento Maysoon"
      />
      <AparatologiaSection />
      <Footer />
    </main>
  );
}
