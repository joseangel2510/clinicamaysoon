"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { fadeInDown } from "@/lib/animations";

const services = [
  { label: "Catálogo de Tratamientos", href: "/tratamientos", featured: true },
  { label: "Medicina Estética · Mujer · Facial", href: "/medicina-estetica" },
  { label: "Medicina Estética · Mujer · Cuerpo", href: "/medicina-estetica/corporal" },
  { label: "Medicina Estética · Hombre · Facial", href: "/medicina-estetica/hombre" },
  { label: "Medicina Estética · Hombre · Cuerpo", href: "/medicina-estetica/hombre/corporal" },
  { label: "Depilación Láser · HS-810", href: "/depilacion-laser" },
  { label: "Aparatología & Técnicas", href: "/aparatologia" },
  { label: "Cirugías Menores", href: "/cirugias-menores" },
  { label: "Unidad Capilar", href: "/unidad-capilar" },
  { label: "Estética", href: "/estetica" },
  { label: "Masajes", href: "/masajes" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "¿Por qué Maysoon?", href: "/por-que-maysoon" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Servicios", href: "#", dropdown: services },
  { label: "Formaciones", href: "/formaciones" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <motion.nav
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,14,13,0.06)]"
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
            <Link
              href="/"
              aria-label="Maysoon TAN Pearl — Inicio"
              className="flex items-center group transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src="/brand/logo-maysoon.png"
                alt="Maysoon TAN Pearl · Clínica Médico-Estética"
                width={364}
                height={121}
                priority
                className={`transition-[height] duration-500 w-auto ${
                  scrolled ? "h-12" : "h-16"
                }`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      className="relative inline-flex items-center gap-1 font-body text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent-gold focus-visible:text-accent-gold after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent-gold after:transition-[width] after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-bg-primary/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,14,13,0.12)] border border-text-secondary/10 overflow-hidden"
                        >
                          <div className="py-3">
                            {link.dropdown.map((s, idx) => {
                              const isFeatured = (s as { featured?: boolean }).featured;
                              const isFirstAfterFeatured =
                                idx === 1 &&
                                (link.dropdown[0] as { featured?: boolean }).featured;
                              return (
                                <div key={s.href}>
                                  {isFirstAfterFeatured && (
                                    <div className="mx-5 my-1.5 border-t border-text-secondary/15" />
                                  )}
                                  <Link
                                    href={s.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className={`block px-5 py-2.5 font-body text-sm transition-colors duration-200 hover:bg-accent-gold/10 hover:text-accent-gold ${
                                      isFeatured
                                        ? "text-accent-gold font-semibold uppercase tracking-[0.1em] text-xs"
                                        : "text-text-primary"
                                    }`}
                                  >
                                    {s.label}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="relative font-body text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-accent-gold focus-visible:text-accent-gold after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-accent-gold after:transition-[width] after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center bg-accent-gold text-bg-dark px-6 py-2.5 rounded-lg font-body text-sm font-semibold transition-transform transition-colors duration-300 hover:bg-accent-gold-light hover:scale-[1.03] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent-gold/50 shadow-[0_4px_16px_rgba(184,115,85,0.2)]"
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
            className="fixed inset-0 top-0 z-40 bg-bg-primary/95 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-start min-h-full pt-28 pb-16 gap-5">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.label} className="flex flex-col items-center w-full">
                    <motion.button
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.05 * i,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="font-display text-2xl font-normal text-text-primary inline-flex items-center gap-2"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden flex flex-col items-center gap-3 mt-4"
                        >
                          {link.dropdown.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="font-body text-base text-text-secondary transition-colors duration-300 hover:text-accent-gold"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-2xl font-normal text-text-primary transition-colors duration-300 hover:text-accent-gold"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.a
                href="https://wa.me/34651545268?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
