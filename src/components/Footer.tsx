"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ─── Instagram CTA ─── */
function InstagramCTA() {
  return (
    <div className="mt-6">
      <p className="font-body text-xs uppercase tracking-[0.25em] text-text-light/40 mb-3">
        Síguenos en Instagram
      </p>
      <a
        href="https://www.instagram.com/clinicamaysoon/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en Instagram @clinicamaysoon"
        className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-lg relative overflow-hidden transition-all duration-300 border border-text-light/15 hover:border-transparent hover:shadow-[0_8px_24px_rgba(214,41,118,0.4)] active:scale-[0.97]"
      >
        <span
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          }}
        />
        <svg
          className="relative w-5 h-5 text-text-light/70 group-hover:text-white transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
        <span className="relative font-body text-sm font-medium text-text-light/80 group-hover:text-white transition-colors duration-300">
          @clinicamaysoon
        </span>
      </a>
    </div>
  );
}

/* ─── Footer Column (with optional mobile accordion) ─── */
function FooterColumn({
  title,
  children,
  collapsible = false,
}: {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={`font-body font-semibold text-sm uppercase tracking-wider text-text-light mb-5 flex items-center justify-between w-full ${
          collapsible ? "md:cursor-default" : "cursor-default"
        }`}
        onClick={() => collapsible && setOpen(!open)}
        aria-expanded={collapsible ? open : undefined}
      >
        {title}
        {collapsible && (
          <svg
            className={`w-4 h-4 md:hidden transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      <div
        className={`${
          collapsible
            ? `overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
              }`
            : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── Footer Link ─── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block py-1.5 font-body text-sm text-text-light/40 transition-all duration-300 hover:text-accent-gold hover:translate-x-1"
    >
      {children}
    </a>
  );
}

/* ─── Contact Item ─── */
function ContactItem({
  icon,
  href,
  children,
  external = false,
}: {
  icon: React.ReactNode;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="text-accent-gold mt-0.5 shrink-0">{icon}</span>
      <span className="font-body text-sm text-text-light/50 transition-colors duration-300 group-hover:text-accent-gold">
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        {content}
      </a>
    );
  }
  return <div className="group">{content}</div>;
}

/* ─── Icon components (inline SVGs) ─── */
const MapPinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MessageIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

/* ─── Main Footer ─── */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <footer ref={footerRef} className="bg-bg-dark">
      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col items-start">
              <Image
                src="/brand/logo-maysoon.png"
                alt="Maysoon · Clínica Médico-Estética"
                width={364}
                height={121}
                className="h-20 w-auto brightness-0 invert opacity-90"
              />
              <p className="font-display text-lg text-text-light tracking-[0.05em] mt-4">
                Maysoon
              </p>
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-text-light/40 mt-1">
                Clínica Médico-Estética
              </p>
            </div>

            {/* Terracotta separator */}
            <div className="w-10 h-px bg-accent-gold/40 my-6" />

            <p className="font-body text-sm text-text-light/50 leading-[1.7] max-w-[280px]">
              Donde las más avanzadas técnicas en medicina estética y láser se ponen al
              servicio de tu belleza y bienestar.
            </p>

            <InstagramCTA />
          </motion.div>

          {/* Column 2: Tratamientos */}
          <motion.div variants={fadeInUp}>
            <FooterColumn title="Tratamientos" collapsible>
              <nav aria-label="Tratamientos">
                <FooterLink href="/tratamientos">Catálogo de Tratamientos</FooterLink>
                <FooterLink href="/medicina-estetica">Med. Estética · Mujer · Facial</FooterLink>
                <FooterLink href="/medicina-estetica/corporal">Med. Estética · Mujer · Cuerpo</FooterLink>
                <FooterLink href="/medicina-estetica/hombre">Med. Estética · Hombre · Facial</FooterLink>
                <FooterLink href="/medicina-estetica/hombre/corporal">Med. Estética · Hombre · Cuerpo</FooterLink>
                <FooterLink href="/depilacion-laser">Depilación Láser · HS-810</FooterLink>
                <FooterLink href="/aparatologia">Aparatología & Técnicas</FooterLink>
                <FooterLink href="/cirugias-menores">Cirugías Menores</FooterLink>
                <FooterLink href="/unidad-capilar">Unidad Capilar</FooterLink>
                <FooterLink href="/estetica">Estética</FooterLink>
                <FooterLink href="/masajes">Masajes</FooterLink>
                <FooterLink href="/formaciones">Formaciones</FooterLink>
              </nav>
            </FooterColumn>
          </motion.div>

          {/* Column 3: Clínica */}
          <motion.div variants={fadeInUp}>
            <FooterColumn title="Clínica" collapsible>
              <nav aria-label="Clínica">
                <FooterLink href="/quienes-somos">Quiénes Somos</FooterLink>
                <FooterLink href="/quienes-somos">Equipo Médico</FooterLink>
                <FooterLink href="/por-que-maysoon">¿Por qué Maysoon?</FooterLink>
                <FooterLink href="/contacto">Contacto</FooterLink>
                <FooterLink href="/politica-privacidad">Política de Privacidad</FooterLink>
                <FooterLink href="/aviso-legal">Aviso Legal</FooterLink>
              </nav>
            </FooterColumn>
          </motion.div>

          {/* Column 4: Contacto */}
          <motion.div variants={fadeInUp}>
            <FooterColumn title="Contacto">
              <div className="flex flex-col gap-4">
                <ContactItem
                  icon={<MapPinIcon />}
                  href="https://maps.google.com/?q=Avda.+Cardenal+Benlloch+11,+46021+Valencia"
                  external
                >
                  Avda. Cardenal Benlloch 11
                  <br />
                  46021 Valencia, España
                </ContactItem>

                <ContactItem icon={<PhoneIcon />} href="tel:+34963201133">
                  +34 963 20 11 33
                </ContactItem>

                <ContactItem icon={<MessageIcon />} href="https://wa.me/34651545268" external>
                  +34 651 54 52 68
                </ContactItem>

                <ContactItem icon={<MailIcon />} href="mailto:info@clinicamaysoon.com">
                  info@clinicamaysoon.com
                </ContactItem>

                <ContactItem icon={<ClockIcon />}>
                  Lun – Vie: 10:00 – 20:00
                  <br />
                  Sábado: Bajo cita previa
                </ContactItem>

                {/* Mini Map */}
                <a
                  href="https://maps.google.com/?q=Avda.+Cardenal+Benlloch+11,+46021+Valencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block w-full h-[120px] rounded-lg overflow-hidden border border-text-light/10 bg-bg-dark/80 transition-colors duration-300 hover:border-accent-gold relative group"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-sm text-text-light/40 group-hover:text-accent-gold transition-colors duration-300">
                      Ver en Google Maps →
                    </span>
                  </div>
                </a>
              </div>
            </FooterColumn>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bar */}
      <div className="border-t border-text-light/8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center">
          <p className="font-body text-xs text-text-light/30 text-center">
            © 2025 Maysoon · Clínica Médico-Estética. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
