/**
 * Bloque editorial de respuesta directa (40-60 palabras).
 * Es el formato que ChatGPT, Perplexity y Google AI Overviews suelen citar
 * tal cual cuando responden "¿Qué es X?". Va inmediatamente después del
 * PageHero, antes del contenido extenso.
 *
 * Renderizado server-side (sin animaciones) → texto visible al instante,
 * óptimo para crawlers de IA.
 */
import "./nuevo/ficha-texto.css";

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
    <section className="ft__lead-sec">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <aside className="ft__lead" aria-label="Resumen del tratamiento">
          <div className="ft__lead-cab">
            <span className="pildora ft__pil">{label}</span>
            <span className="ft__marca" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
          <p className="ft__lead-txt">{children}</p>
        </aside>
      </div>
    </section>
  );
}
