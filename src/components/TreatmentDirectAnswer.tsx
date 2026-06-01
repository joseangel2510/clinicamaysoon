/**
 * Wrapper de <DirectAnswer> que lee el texto desde TREATMENT_CONTENT
 * según el slug. Se inyecta justo después del PageHero en cada ficha.
 */

import { DirectAnswer } from "./DirectAnswer";
import { TREATMENT_CONTENT } from "@/lib/treatments-faqs";

export function TreatmentDirectAnswer({ slug }: { slug: string }) {
  const content = TREATMENT_CONTENT[slug];
  if (!content?.directAnswer) return null;
  return <DirectAnswer label="En 50 palabras">{content.directAnswer}</DirectAnswer>;
}
