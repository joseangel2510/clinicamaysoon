"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  clipReveal,
  staggerContainer,
} from "@/lib/animations";
import { GoogleBadge } from "./GoogleBadge";
import { TestimonialCarousel } from "./TestimonialCarousel";

const testimonials = [
  {
    stars: 5,
    text: "Trato excepcional y cercano. Jose y Dani, así como todo el equipo, son grandes profesionales. La mejor opción en Valencia si buscas resultados naturales y un trato inmejorable.",
    name: "María García",
    treatment: "Rejuvenecimiento Facial",
    timeAgo: "Hace 2 meses",
  },
  {
    stars: 5,
    text: "Me realicé un tratamiento de ojeras y el resultado ha sido muy positivo. Estoy muy contento del trabajo realizado por el Dr. Daniel. Muchas gracias por la profesionalidad y el trato recibido.",
    name: "Carlos Rodríguez",
    treatment: "Corrección de Ojeras",
    timeAgo: "Hace 3 meses",
  },
  {
    stars: 5,
    text: "Me hice una masculinización facial y me quitaron 15 años de encima. El Dr. Daniel tiene unas manos increíbles. Vuelvo a tener la piel en su sitio. No podría estar más feliz.",
    name: "Alejandro M.",
    treatment: "Masculinización Facial",
    timeAgo: "Hace 1 mes",
  },
  {
    stars: 5,
    text: "Siempre que he visitado la clínica he quedado encantada. Resultado siempre muy natural. El doctor Daniel te explica los tratamientos al detalle y te recomienda el que más se ajusta a tus necesidades.",
    name: "Laura Sánchez",
    treatment: "Medicina Estética",
    timeAgo: "Hace 4 meses",
  },
  {
    stars: 5,
    text: "Saben lo que necesitas y te ofrecen todas las posibilidades sin compromiso. Usa productos de primera calidad. Me arregló un problema que llevaba tiempo intentando. ¡Recomendados al 100%!",
    name: "Patricia López",
    treatment: "Tratamiento Facial",
    timeAgo: "Hace 2 meses",
  },
  {
    stars: 5,
    text: "Fantásticos profesionales. Estoy encantada de ser clienta, especialmente cada semana con la fantástica Eva y su increíble masaje. Muchas felicidades por la nueva clínica.",
    name: "Sofía Martínez",
    treatment: "Masajes Terapéuticos",
    timeAgo: "Hace 5 meses",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-bg-dark py-28">
      {/* Top gradient transition from previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-bg-secondary to-bg-dark" />

      {/* Giant decorative quote behind carousel */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[200px] leading-none text-text-light/[0.03]"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
            <span className="block h-px w-10 bg-accent-gold" />
            <span className="font-body text-xs uppercase tracking-[0.35em] text-accent-gold">
              Lo que dicen nuestros pacientes
            </span>
            <span className="block h-px w-10 bg-accent-gold" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={clipReveal}
            className="mt-6 font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-[-0.03em]"
          >
            <span className="font-bold text-text-light">Historias Reales,</span>
            <br />
            <span className="font-bold italic text-accent-gold">Resultados Reales</span>
          </motion.h2>

          {/* Google Badge */}
          <div className="flex justify-center">
            <GoogleBadge />
          </div>
        </motion.div>

        {/* ── Carousel ── */}
        <TestimonialCarousel testimonials={testimonials} />

        {/* ── CTA Link ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Cl%C3%ADnica+Maysoon/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-sm font-medium text-accent-gold transition-all hover:underline hover:underline-offset-4 hover:decoration-accent-gold/60"
          >
            Ver Todas las Reseñas en Google
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-bg-primary to-bg-dark" />
    </section>
  );
}
