import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { medicalClinicSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/clinic";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Maysoon | Clínica Médico-Estética en Valencia",
  description:
    "Maysoon — Clínica médico-estética en Valencia. Tratamientos personalizados con tecnología de última generación. Resultados naturales, atención exclusiva. Reserva tu consulta.",
  keywords: [
    "Maysoon",
    "Clínica Maysoon",
    "medicina estética Valencia",
    "clínica estética Valencia",
    "láser Valencia",
    "tratamientos faciales",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full bg-bg-primary text-text-primary font-body antialiased">
        <JsonLd data={medicalClinicSchema()} />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
