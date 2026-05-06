"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const tabs = [
  { href: "/medicina-estetica", label: "Facial" },
  { href: "/medicina-estetica/corporal", label: "Cuerpo" },
];

export function MedicinaEsteticaTabs() {
  const pathname = usePathname();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto max-w-6xl px-6 lg:px-8 -mt-6 mb-2"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-text-secondary mr-1 hidden sm:inline">
          Mujer ·
        </span>
        <div className="inline-flex items-center bg-bg-secondary rounded-full p-1.5 border border-text-secondary/15">
          {tabs.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`relative px-5 lg:px-6 py-2 rounded-full font-body text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "bg-accent-gold text-bg-dark shadow-[0_4px_16px_rgba(184,115,85,0.25)]"
                    : "text-text-secondary hover:text-accent-gold"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
