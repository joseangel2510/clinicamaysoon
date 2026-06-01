/**
 * Bloque editorial de respuesta directa (40-60 palabras).
 * Es el formato que ChatGPT, Perplexity y Google AI Overviews suelen citar
 * tal cual cuando responden "¿Qué es X?". Va inmediatamente después del
 * PageHero, antes del contenido extenso.
 *
 * Renderizado server-side (sin animaciones) → texto visible al instante,
 * óptimo para crawlers de IA.
 */

interface DirectAnswerProps {
  /** Etiqueta corta — por defecto "En breve". */
  label?: string;
  /** Texto auto-contenido de 40-60 palabras que responde la pregunta clave. */
  children: string;
}

export function DirectAnswer({
  label = "En breve",
  children,
}: DirectAnswerProps) {
  return (
    <section className="bg-bg-primary pt-10 lg:pt-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <aside
          className="relative rounded-2xl bg-bg-secondary border border-accent-gold/25 px-6 py-6 lg:px-8 lg:py-7 shadow-[0_8px_24px_-12px_rgba(15,14,13,0.08)]"
          aria-label="Resumen del tratamiento"
        >
          {/* Gold corner accent */}
          <span
            aria-hidden
            className="absolute top-0 left-6 lg:left-8 w-12 h-px bg-accent-gold"
          />
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
              {label}
            </span>
            <span className="block w-6 h-px bg-accent-gold/40" />
          </div>
          <p className="font-display italic text-base lg:text-lg text-text-primary leading-[1.7]">
            {children}
          </p>
        </aside>
      </div>
    </section>
  );
}
