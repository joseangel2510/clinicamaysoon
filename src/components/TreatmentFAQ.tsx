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

import "./nuevo/ficha-tarifas.css";
import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/schemas";
import { TREATMENT_CONTENT } from "@/lib/treatments-faqs";

export function TreatmentFAQ({ slug }: { slug: string }) {
  const content = TREATMENT_CONTENT[slug];
  if (!content || content.faqs.length === 0) return null;

  return (
    <>
      <JsonLd data={faqSchema(content.faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      <section className="fta__faq">
        <div className="marco fta__faq-red">
          {/* ── Header ── */}
          <header className="fta__faq-cab">
            <span className="pildora pildora--arena">Preguntas Frecuentes</span>
            <h2 className="tit tit--l">
              Las dudas más{" "}
              <em>comunes</em>
            </h2>
          </header>

          {/* ── Q&A list ── */}
          <div className="fta__faq-lista">
            {content.faqs.map((qa) => (
              <article key={qa.question} className="fta__qa">
                <h3 className="fta__q">{qa.question}</h3>
                <p className="fta__a">{qa.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
