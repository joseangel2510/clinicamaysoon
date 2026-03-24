import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Clínica Maysoon | Medicina Estética Avanzada en Valencia",
  description:
    "Clínica de medicina estética y láser en Valencia. Tratamientos personalizados con tecnología de última generación. Resultados naturales, atención personalizada. Reserva tu consulta.",
  keywords: [
    "medicina estética Valencia",
    "clínica estética Valencia",
    "láser Valencia",
    "tratamientos faciales",
    "Clínica Maysoon",
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
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full bg-bg-primary text-text-primary font-body antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
