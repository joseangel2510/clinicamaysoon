"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface ConsultaBlockProps {
  title?: string;
  description: string;
}

export function ConsultaBlock({
  title = "Más servicios disponibles bajo consulta",
  description,
}: ConsultaBlockProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 lg:mt-20 rounded-2xl bg-bg-secondary p-10 lg:p-14 text-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(184,115,85,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        <span className="block w-10 h-px bg-accent-gold mx-auto mb-5" />
        <h3 className="font-display font-normal text-2xl lg:text-3xl text-text-primary mb-4 tracking-[-0.01em]">
          {title}
        </h3>
        <p className="font-body text-sm lg:text-base text-text-secondary leading-[1.8] max-w-xl mx-auto mb-8">
          {description}
        </p>
        <a
          href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-accent-gold text-bg-dark px-8 py-3.5 rounded-full font-body text-sm font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(184,115,85,0.3)] active:scale-[0.97]"
        >
          <MessageCircle size={18} strokeWidth={2} />
          Consulta personalizada
        </a>
      </div>
    </motion.div>
  );
}
