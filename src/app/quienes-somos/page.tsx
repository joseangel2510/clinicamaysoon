import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { QuienesSomosSection } from "@/components/QuienesSomosSection";
import { DoctorSection } from "@/components/DoctorSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quiénes Somos | Maysoon",
  description:
    "Conoce al equipo médico de Maysoon. Dr. Daniel Sánchez Salvador, especialistas en medicina estética y un equipo titulado al servicio de tu bienestar.",
};

export default function QuienesSomosPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Quiénes Somos"
        titleLine1="Nuestra Historia,"
        titleLine2="Nuestro Equipo"
        subtitle="Maysoon significa rostros y cuerpos hermosos. Nuestra filosofía: armonía entre rostro y cuerpo, basada en una cultura ancestral de belleza."
        image="/images/clinic-interior.webp"
        imageAlt="Interior de la clínica Maysoon"
      />
      <QuienesSomosSection />
      <DoctorSection />
      <Footer />
    </main>
  );
}
