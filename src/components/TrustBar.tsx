"use client";

import { motion } from "framer-motion";
import { Star, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { fadeInUp, staggerFast } from "@/lib/animations";

const trustItems = [
  {
    icon: Star,
    stat: "4.5/5",
    label: "Más de 114 reseñas",
  },
  {
    icon: Clock,
    stat: "+10 años",
    label: "De experiencia",
  },
  {
    icon: ShieldCheck,
    stat: "Equipo",
    label: "Médico titulado",
  },
  {
    icon: Sparkles,
    stat: "Tecnología",
    label: "De última generación",
  },
];

export function TrustBar() {
  return (
    <section className="bg-bg-dark py-5">
      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-5xl px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
      >
        {trustItems.map((item) => (
          <motion.div
            key={item.stat}
            variants={fadeInUp}
            className="flex items-center gap-3 justify-center"
          >
            <item.icon
              className="text-accent-gold flex-shrink-0"
              size={20}
              strokeWidth={1.8}
            />
            <div>
              <p className="font-display font-bold text-accent-gold text-lg leading-tight">
                {item.stat}
              </p>
              <p className="font-body text-xs text-text-light/60 uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
