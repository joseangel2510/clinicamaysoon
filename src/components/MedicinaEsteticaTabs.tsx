"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const tabs = [
  { href: "/medicina-estetica", label: "Mujer · Facial" },
  { href: "/medicina-estetica/corporal", label: "Mujer · Cuerpo" },
  { href: "/medicina-estetica/hombre", label: "Hombre · Facial" },
  { href: "/medicina-estetica/hombre/corporal", label: "Hombre · Cuerpo" },
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
      <div className="flex items-center justify-center">
        <div className="inline-flex flex-wrap items-center justify-center bg-bg-secondary rounded-full p-1.5 border border-text-secondary/15 gap-1">
          {tabs.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={`relative px-4 lg:px-5 py-2 rounded-full font-body text-xs lg:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
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
