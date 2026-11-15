import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MotionProvider } from "@/components/MotionProvider";
import { Movimiento } from "@/components/nuevo/Movimiento";
import { Preloader } from "@/components/nuevo/Preloader";
import { JsonLd } from "@/components/JsonLd";
import { medicalClinicSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/clinic";

const GTM_ID = "GTM-T35GMZ7J";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

// Marca <html> antes del primer pintado para que las apariciones partan
// ocultas solo si hay JavaScript; si el motor de movimiento no llega a
// cargar, a los 5 s se quita la marca y todo queda visible.
const ARRANQUE =
  "(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('mov');try{if(sessionStorage.getItem('maysoon-pre'))d.classList.add('sin-pre')}catch(e){}setTimeout(function(){if(!d.dataset.movListo)d.classList.remove('mov')},5000)})()";

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
      className={`${jakarta.variable} ${instrument.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-primary text-text-primary font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script dangerouslySetInnerHTML={{ __html: ARRANQUE }} />
        <JsonLd data={medicalClinicSchema()} />
        <Preloader />
        <Movimiento />
        <MotionProvider>
          {children}
          <WhatsAppButton />
        </MotionProvider>
        {/* Google Tag Manager: se carga cuando la página ya ha terminado de
            cargar (lazyOnload) para no competir con el contenido principal. */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </body>
    </html>
  );
}
