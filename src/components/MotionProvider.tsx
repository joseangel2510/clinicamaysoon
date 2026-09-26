"use client";

import { LazyMotion } from "framer-motion";

// Carga las funciones de animación en un chunk aparte, después del primer
// pintado, para que framer-motion no bloquee la carga inicial de la página.
const loadFeatures = () =>
  import("@/lib/motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
