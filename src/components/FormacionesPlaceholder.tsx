"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FormacionesPlaceholder() {
  return (
    <section className="bg-bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {/* Decorative icon */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-gold/10 mb-10"
          >
            <Sparkles
              size={32}
              strokeWidth={1.4}
              className="text-accent-gold"
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-display font-normal text-3xl lg:text-4xl text-text-primary leading-tight tracking-[-0.01em] mb-6"
          >
            Estamos preparando algo{" "}
            <span className="italic text-accent-gold">especial</span>.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-base lg:text-lg text-text-secondary leading-[1.8] max-w-xl mx-auto mb-10"
          >
            Próximamente abriremos nuestro programa de formaciones para
            profesionales del sector. Si quieres recibir información en cuanto
            esté disponible, escríbenos.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeInUp}
            href="https://wa.me/34651545268?text=Hola%2C%20me%20interesa%20vuestra%20formaci%C3%B3n%20para%20profesionales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-accent-gold text-bg-dark px-8 py-3.5 rounded-full font-body text-sm font-medium transition-transform transition-shadow duration-300 hover:bg-accent-gold-light hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(184,115,85,0.3)] active:scale-[0.97]"
          >
            <MessageCircle size={18} strokeWidth={2} />
            Apúntame a la lista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
