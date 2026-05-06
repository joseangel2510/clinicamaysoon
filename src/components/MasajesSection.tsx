"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Activity } from "lucide-react";
import { staggerFast, fadeInUp } from "@/lib/animations";

const masajes = [
  {
    icon: Sparkles,
    title: "Masaje Estético · Anticelulítico",
    description:
      "Masaje profundo que actúa sobre los nódulos grasos, mejora el drenaje linfático y reactiva la circulación. Especialmente efectivo combinado con productos lipolíticos y protocolos corporales.",
  },
  {
    icon: Heart,
    title: "Masaje Relajante",
    description:
      "Sesión de bienestar pensada para liberar tensiones y desconectar. Maniobras suaves y constantes con aceites cálidos en un ambiente íntimo y silencioso.",
  },
  {
    icon: Activity,
    title: "Masaje Terapéutico",
    description:
      "Trabajo manual focalizado sobre contracturas, sobrecargas musculares y zonas con dolor. Combina técnicas descontracturantes y de movilización articular.",
  },
];

export function MasajesSection() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {masajes.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group rounded-2xl bg-white p-8 lg:p-10 shadow-[0_4px_20px_rgba(15,14,13,0.05)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.4,0.25,1)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,14,13,0.1)]"
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent-gold/20">
                <Icon size={22} strokeWidth={1.6} className="text-accent-gold" />
              </div>
              <h3 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-tight tracking-[-0.01em] mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-[1.8]">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-text-secondary max-w-xl mx-auto leading-[1.8]">
            Sesiones impartidas por <span className="text-accent-gold font-medium">Ricardo Ferrando</span>, masajista terapeuta del equipo Maysoon. Reserva tu cita por WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
