/**
 * Bloque editorial de preguntas frecuentes (FAQ) para una página de tratamiento.
 *
 *  - Visualmente: Q&A apilado y siempre visible (no accordion) → óptimo para
 *    que los crawlers de IA lean todo el contenido sin ejecutar JS.
 *  - Estructura semántica: cada Q es <h3>, cada A es <p> dentro de <article>.
 *  - Schema: emite FAQPage JSON-LD con todas las preguntas — clave para que
 *    ChatGPT/Perplexity/Google AI cite las respuestas tal cual.
 *
 * Renderizado server-side, sin animaciones.
 */

import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schemas";
import { TREATMENT_CONTENT } from "@/lib/treatments-faqs";

export function TreatmentFAQ({ slug }: { slug: string }) {
  const content = TREATMENT_CONTENT[slug];
  if (!content || content.faqs.length === 0) return null;

  return (
    <>
      <JsonLd data={faqSchema(content.faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      <section className="bg-bg-primary py-14 lg:py-20 border-t border-text-secondary/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* ── Header ── */}
          <header className="text-center mb-10 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-10 h-px bg-accent-gold" />
              <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.3em] text-accent-gold">
                Preguntas Frecuentes
              </span>
              <span className="block w-10 h-px bg-accent-gold" />
            </div>
            <h2
              className="font-display font-normal text-text-primary leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)" }}
            >
              Las dudas más{" "}
              <span className="italic text-accent-gold/85">comunes</span>
            </h2>
          </header>

          {/* ── Q&A list ── */}
          <div className="flex flex-col">
            {content.faqs.map((qa) => (
              <article
                key={qa.question}
                className="py-7 lg:py-8 border-t border-text-secondary/15 first:border-t-0"
              >
                <h3 className="font-display font-normal text-xl lg:text-2xl text-text-primary leading-[1.25] tracking-[-0.01em] mb-3">
                  {qa.question}
                </h3>
                <p className="font-body text-sm lg:text-base text-text-secondary leading-[1.8]">
                  {qa.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
