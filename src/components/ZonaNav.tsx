"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerFast } from "@/lib/animations";

interface ZonaNavItem {
  id: string;
  label: string;
}

interface ZonaNavProps {
  zonas: ZonaNavItem[];
}

export function ZonaNav({ zonas }: ZonaNavProps) {
  return (
    <motion.nav
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      aria-label="Navegación por zonas del rostro"
      className="mx-auto max-w-5xl px-6 lg:px-8"
    >
      <div className="flex items-center gap-3 mb-6 justify-center">
        <span className="block w-10 h-px bg-accent-gold" />
        <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-accent-gold">
          Zonas Tratadas
        </span>
        <span className="block w-10 h-px bg-accent-gold" />
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-2 lg:gap-2.5">
        {zonas.map((z) => (
          <motion.li key={z.id} variants={fadeInUp}>
            <a
              href={`#${z.id}`}
              className="inline-flex items-center px-4 py-2 rounded-full border border-text-secondary/20 bg-white/60 backdrop-blur-sm font-body text-xs lg:text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent-gold hover:bg-accent-gold/10 hover:text-accent-gold focus-visible:ring-2 focus-visible:ring-accent-gold/40 focus-visible:outline-none"
            >
              {z.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
