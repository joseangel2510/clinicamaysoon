import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { MasajesSection } from "@/components/MasajesSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Masajes | Maysoon TAN Pearl",
  description:
    "Masajes estéticos anticelulíticos, relajantes y terapéuticos en Maysoon TAN Pearl Valencia. Sesiones impartidas por masajista titulado.",
};

export default function MasajesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Masajes"
        titleLine1="Bienestar"
        titleLine2="que se Siente"
        subtitle="Sesiones diseñadas según tu necesidad: estética, relajación profunda o terapia muscular. En manos de un equipo titulado."
        image="/images/sections/hero-masajes.webp"
        imageAlt="Sala de masaje en Maysoon TAN Pearl"
      />
      <MasajesSection />
      <Footer />
    </main>
  );
}
