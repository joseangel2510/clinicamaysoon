import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { QuienesSomosSection } from "@/components/QuienesSomosSection";
import { DoctorSection } from "@/components/DoctorSection";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { physicianPageSchema, breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Quiénes Somos | Maysoon",
  description:
    "Conoce al equipo médico de Maysoon. Dr. Daniel Sánchez Salvador, especialistas en medicina estética y un equipo titulado al servicio de tu bienestar.",
  alternates: { canonical: "/quienes-somos" },
};

export default function QuienesSomosPage() {
  return (
    <main>
      <JsonLd data={physicianPageSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: "Quiénes Somos", url: `${SITE_URL}/quienes-somos` },
        ])}
      />
      <Navbar />
      <PageHero
        eyebrow="Quiénes Somos"
        titleLine1="Nuestra Historia,"
        titleLine2="Nuestro Equipo"
        subtitle="Maysoon significa rostros y cuerpos hermosos. Nuestra filosofía: armonía entre rostro y cuerpo, basada en una cultura ancestral de belleza."
        image="/images/team/equipo-recepcion.jpg"
        imageAlt="Equipo Maysoon en la recepción de la clínica de Valencia"
      />
      <QuienesSomosSection />
      <DoctorSection />
      <Footer />
    </main>
  );
}
