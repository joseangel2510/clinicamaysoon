import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { ContactoSection } from "@/components/ContactoSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto y Dónde Estamos | Maysoon TAN Pearl",
  description:
    "Maysoon TAN Pearl en Avda. Cardenal Benlloch 11, Valencia. Teléfono, WhatsApp, horario y mapa. Reserva tu cita médico-estética.",
};

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Contacto · Valencia"
        titleLine1="Reserva tu Cita"
        titleLine2="o Visítanos"
        subtitle="Estamos en Avda. Cardenal Benlloch 11, Valencia. Pide consulta por teléfono, WhatsApp o email — te respondemos lo antes posible."
        image="/images/sections/hero-contacto.webp"
        imageAlt="Recepción de Maysoon TAN Pearl en Valencia"
      />
      <ContactoSection />
      <Footer />
    </main>
  );
}
