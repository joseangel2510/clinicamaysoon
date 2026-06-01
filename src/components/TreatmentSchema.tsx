/**
 * Inyecta JSON-LD MedicalProcedure + BreadcrumbList en una página de tratamiento.
 * Uso: <TreatmentSchema slug="bodytite" /> dentro del <main>.
 */

import { JsonLd } from "./JsonLd";
import {
  medicalProcedureSchema,
  breadcrumbSchema,
} from "@/lib/schemas";
import { SITE_URL } from "@/lib/clinic";
import { TREATMENTS } from "@/lib/treatments-data";

export function TreatmentSchema({ slug }: { slug: string }) {
  const t = TREATMENTS[slug];
  if (!t) return null;
  return (
    <>
      <JsonLd data={medicalProcedureSchema(t)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", url: SITE_URL },
          { name: "Tratamientos", url: `${SITE_URL}/tratamientos` },
          { name: t.name, url: `${SITE_URL}/tratamientos/${slug}` },
        ])}
      />
    </>
  );
}
