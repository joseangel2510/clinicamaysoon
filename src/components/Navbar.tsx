"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeInDown } from "@/lib/animations";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(26,22,20,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-[padding] duration-500 ${
              scrolled ? "py-3" : "py-5"
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div>
                <span className="font-display text-xl font-bold tracking-[0.15em] text-accent-gold">
                  MAYSOON
                </span>
                <div className="mt-0.5 h-px w-full bg-accent-gold/40" />
                <span className="block text-[0.65rem] font-body font-medium uppercase tracking-[0.2em] text-text-muted mt-0.5">
                  Clínica Médico-Estética
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative font-body text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent-gold focus-visible:text-accent-gold after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent-gold after:transition-[width] after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center bg-accent-gold text-bg-dark px-6 py-2.5 rounded-lg font-body text-sm font-semibold transition-transform transition-colors duration-300 hover:bg-accent-gold-light hover:scale-[1.03] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent-gold/50 shadow-[0_4px_16px_rgba(196,162,101,0.2)]"
            >
              Reserva tu Cita
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-primary transition-colors duration-200 hover:text-accent-gold focus-visible:text-accent-gold"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 z-40 bg-bg-primary/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl font-bold text-text-primary transition-colors duration-300 hover:text-accent-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 bg-accent-gold text-bg-dark px-8 py-3 rounded-lg font-body text-base font-semibold transition-transform transition-colors duration-300 hover:bg-accent-gold-light active:scale-[0.97]"
              >
                Reserva tu Cita
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
