import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { FormacionesPlaceholder } from "@/components/FormacionesPlaceholder";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Formaciones | Maysoon TAN Pearl",
  description:
    "Próximamente abriremos un programa de formaciones para profesionales del sector estético y médico. Apúntate a la lista de interés.",
};

export default function FormacionesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Formaciones"
        titleLine1="Compartir lo"
        titleLine2="que Sabemos Hacer"
        subtitle="Estamos preparando un programa de formaciones para profesionales. Si quieres ser de los primeros en saberlo, escríbenos."
        image="/images/sections/hero-formaciones.webp"
        imageAlt="Sesión de formación profesional en Maysoon TAN Pearl"
      />
      <FormacionesPlaceholder />
      <Footer />
    </main>
  );
}
