import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
  title: "Maysoon TAN Pearl | Clínica Médico-Estética en Valencia",
  description:
    "Maysoon TAN Pearl — Clínica médico-estética en Valencia. Tratamientos personalizados con tecnología de última generación. Resultados naturales, atención exclusiva. Reserva tu consulta.",
  keywords: [
    "Maysoon TAN Pearl",
    "Clínica Maysoon",
    "medicina estética Valencia",
    "clínica estética Valencia",
    "láser Valencia",
    "tratamientos faciales",
  ],
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
