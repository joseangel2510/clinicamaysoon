"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { fadeInUp, staggerContainer, staggerFast } from "@/lib/animations";

const horario = [
  { day: "Lunes – Jueves", hours: "9:30 – 13:30 · 16:30 – 20:30" },
  { day: "Viernes", hours: "9:30 – 14:00 · 15:00 – 18:30" },
  { day: "Sábado y Domingo", hours: "Cerrado" },
];

const contactos = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 963 20 11 33",
    href: "tel:+34963201133",
  },
  {
    icon: Phone,
    label: "Móvil",
    value: "+34 601 21 22 58",
    href: "tel:+34601212258",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 651 54 52 68",
    href: "https://wa.me/34651545268",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@clinicamaysoon.com",
    href: "mailto:info@clinicamaysoon.com",
  },
];

const redes = [
  { icon: Instagram, name: "Instagram", href: "https://instagram.com/clinicamaysoon" },
  { icon: Facebook, name: "Facebook", href: "https://facebook.com/clinicamaysoon" },
  { icon: Youtube, name: "YouTube", href: "https://youtube.com/@clinicamaysoon" },
];

export function ContactoSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16"
        >
          {/* Left: Info */}
          <div className="flex flex-col gap-10">
            {/* Address */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-8 h-px bg-accent-gold" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                  Dónde estamos
                </span>
              </div>
              <h3 className="font-display font-normal text-2xl lg:text-3xl text-text-primary leading-tight tracking-[-0.01em] mb-4">
                Avinguda del Cardenal Benlloch, 11
              </h3>
              <p className="font-body text-base text-text-secondary leading-[1.8]">
                46021 Valencia · España
              </p>
              <a
                href="https://maps.google.com/?q=Avda.+Cardenal+Benlloch+11,+46021+Valencia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-body text-sm font-medium text-accent-gold transition-colors duration-300 hover:text-accent-gold-light"
              >
                <MapPin size={16} strokeWidth={2} />
                Cómo llegar
              </a>
            </motion.div>

            {/* Contact methods */}
            <motion.div variants={staggerFast} className="flex flex-col gap-4">
              {contactos.map(({ icon: Icon, label, value, href, external }) => (
                <motion.a
                  key={label}
                  variants={fadeInUp}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-3 border-b border-text-secondary/15 transition-colors duration-300 hover:border-accent-gold/40"
                >
                  <span className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold flex-shrink-0 transition-colors duration-300 group-hover:bg-accent-gold/20">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <div className="flex-1 flex flex-col">
                    <span className="font-body text-[10px] uppercase tracking-[0.25em] text-text-secondary">
                      {label}
                    </span>
                    <span className="font-body text-base text-text-primary transition-colors duration-300 group-hover:text-accent-gold">
                      {value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Schedule */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-5">
                <Clock size={16} strokeWidth={2} className="text-accent-gold" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                  Horario
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {horario.map((h) => (
                  <div
                    key={h.day}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4"
                  >
                    <span className="font-body text-sm text-text-primary font-medium">
                      {h.day}
                    </span>
                    <span className="font-body text-sm text-text-secondary">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeInUp}>
              <span className="font-body text-xs font-medium uppercase tracking-[0.3em] text-accent-gold block mb-4">
                Síguenos
              </span>
              <div className="flex gap-3">
                {redes.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-10 h-10 rounded-full border border-text-secondary/25 flex items-center justify-center text-text-secondary transition-all duration-300 hover:border-accent-gold hover:text-accent-gold hover:bg-accent-gold/10"
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,14,13,0.1)] min-h-[480px] lg:min-h-[600px]"
          >
            <iframe
              title="Maysoon TAN Pearl en Google Maps"
              src="https://www.google.com/maps?q=Avenida+Cardenal+Benlloch+11,+46021+Valencia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
