"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ZonePriceCardProps {
  category: string;
  sessionPrice: string;
  bonoPrice: string;
  zones: string[];
  highlight?: boolean;
}

export function ZonePriceCard({
  category,
  sessionPrice,
  bonoPrice,
  zones,
  highlight = false,
}: ZonePriceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={`group relative rounded-2xl overflow-hidden transition-shadow duration-[400ms] h-full flex flex-col ${
        highlight
          ? "bg-bg-dark text-text-light shadow-[0_4px_20px_rgba(15,14,13,0.18)] hover:shadow-[0_20px_50px_rgba(15,14,13,0.24)]"
          : "bg-bg-secondary text-text-primary shadow-[0_2px_10px_rgba(15,14,13,0.04)] hover:shadow-[0_10px_30px_rgba(15,14,13,0.08)]"
      }`}
    >
      {highlight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(184,115,85,0.18), transparent 60%)",
          }}
        />
      )}
      <div className="relative p-6 lg:p-7 flex flex-col flex-1">
        {/* Category badge */}
        <div
          className={`inline-flex items-center self-start gap-2 mb-5 px-3 py-1 rounded-full border ${
            highlight
              ? "bg-accent-gold/15 border-accent-gold/30"
              : "bg-white border-accent-gold/20"
          }`}
        >
          <span className="font-body text-[10px] font-medium uppercase tracking-[0.25em] text-accent-gold">
            {category}
          </span>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-text-secondary/15">
          <div>
            <span
              className={`font-body text-[10px] uppercase tracking-[0.2em] block mb-1 ${
                highlight ? "text-text-light/55" : "text-text-secondary"
              }`}
            >
              Sesión
            </span>
            <span className="font-display text-2xl lg:text-3xl text-accent-gold leading-none">
              {sessionPrice}
            </span>
          </div>
          <div>
            <span
              className={`font-body text-[10px] uppercase tracking-[0.2em] block mb-1 ${
                highlight ? "text-text-light/55" : "text-text-secondary"
              }`}
            >
              Bono · 5 sesiones
            </span>
            <span className="font-display text-2xl lg:text-3xl text-accent-gold leading-none">
              {bonoPrice}
            </span>
          </div>
        </div>

        {/* Zones included */}
        <div className="flex-1">
          <span
            className={`font-body text-[10px] uppercase tracking-[0.2em] block mb-3 ${
              highlight ? "text-text-light/55" : "text-text-secondary"
            }`}
          >
            Zonas incluidas
          </span>
          <ul className="flex flex-wrap gap-1.5">
            {zones.map((z) => (
              <li
                key={z}
                className={`inline-flex items-center px-2.5 py-1 rounded-full font-body text-xs ${
                  highlight
                    ? "bg-text-light/10 text-text-light/95"
                    : "bg-white text-text-primary border border-text-secondary/15"
                }`}
              >
                {z}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
