"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  { src: "/hero/dsc_0117.webp", alt: "Equipo de Maysoon TAN Pearl en la clínica" },
  { src: "/hero/dsc_9921.webp", alt: "Logo Maysoon en la recepción de la clínica" },
  { src: "/hero/dsc_0429.webp", alt: "Sala de tratamiento Maysoon TAN Pearl" },
  { src: "/hero/dsc_0428.webp", alt: "Tecnología láser de última generación" },
  { src: "/hero/dsc_0444.webp", alt: "Instalaciones de Maysoon TAN Pearl" },
];

const SLIDE_DURATION_MS = 5000;
const FADE_DURATION_S = 1.4;

export function HeroSlideshow({
  className = "",
  sizes = "100vw",
  objectPosition = "center",
}: {
  className?: string;
  sizes?: string;
  objectPosition?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: FADE_DURATION_S, ease: [0.25, 0.4, 0.25, 1] },
              scale: { duration: SLIDE_DURATION_MS / 1000 + FADE_DURATION_S, ease: "linear" },
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: FADE_DURATION_S, ease: [0.25, 0.4, 0.25, 1] },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicator dots */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block h-px transition-all duration-500 ${
              i === index
                ? "w-8 bg-accent-gold"
                : "w-4 bg-text-light/40"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
