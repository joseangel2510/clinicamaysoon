/**
 * Builders de JSON-LD schema.org adaptados al nicho médico-estético.
 *
 * Cada función devuelve un objeto plano JSON-LD listo para inyectar vía
 * <script type="application/ld+json"> (componente JsonLd).
 *
 * Schemas usados:
 *  - MedicalClinic (global, layout)
 *  - Physician (Dr. Daniel — /quienes-somos)
 *  - MedicalProcedure (cada /tratamientos/<slug>)
 *  - BreadcrumbList (rutas internas)
 *  - FAQPage (cuando se añadan FAQs en Etapa 3)
 */

import {
  CLINIC,
  DIRECTOR_MEDICO,
  OPENING_HOURS,
  SITE_URL,
} from "./clinic";

const CLINIC_ID = `${SITE_URL}/#clinic`;
const PHYSICIAN_ID = `${SITE_URL}/#director-medico`;
const ORG_ID = `${SITE_URL}/#organization`;

/** Schema raíz: MedicalClinic + Organization (mismo nodo lógico, dos @type). */
export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness", "Organization"],
        "@id": CLINIC_ID,
        name: CLINIC.name,
        legalName: CLINIC.legalName,
        alternateName: CLINIC.alternateName,
        description: CLINIC.description,
        url: CLINIC.url,
        logo: {
          "@type": "ImageObject",
          url: CLINIC.logo,
        },
        image: CLINIC.image,
        telephone: CLINIC.telephone,
        priceRange: CLINIC.priceRange,
        availableLanguage: CLINIC.languages,
        address: {
          "@type": "PostalAddress",
          ...CLINIC.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC.geo.latitude,
          longitude: CLINIC.geo.longitude,
        },
        openingHoursSpecification: OPENING_HOURS.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.dayOfWeek,
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: [CLINIC.instagram],
        medicalSpecialty: [
          "CosmeticSurgery",
          "Dermatology",
          "PlasticSurgery",
        ],
        employee: { "@id": PHYSICIAN_ID },
        founder: { "@id": PHYSICIAN_ID },
      },
      physicianNode(),
    ],
  };
}

/** Nodo Physician del Dr. Daniel — reutilizable dentro del @graph. */
function physicianNode() {
  return {
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: DIRECTOR_MEDICO.name,
    jobTitle: DIRECTOR_MEDICO.jobTitle,
    description: DIRECTOR_MEDICO.description,
    image: DIRECTOR_MEDICO.image,
    url: DIRECTOR_MEDICO.url,
    worksFor: { "@id": CLINIC_ID },
    knowsAbout: DIRECTOR_MEDICO.knowsAbout,
    hasCredential: DIRECTOR_MEDICO.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    })),
    medicalSpecialty: "CosmeticSurgery",
    availableService: {
      "@type": "MedicalClinic",
      "@id": CLINIC_ID,
    },
  };
}

/** Schema independiente para inyectar en /quienes-somos (Person + Physician + @graph). */
export function physicianPageSchema() {
  return {
    "@context": "https://schema.org",
    ...physicianNode(),
  };
}

/** Schema MedicalProcedure para una página /tratamientos/<slug>. */
export function medicalProcedureSchema(params: {
  slug: string;
  name: string;
  description: string;
  alternateName?: string;
  bodyLocation?: string;
}) {
  const url = `${SITE_URL}/tratamientos/${params.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": url,
    name: params.name,
    alternateName: params.alternateName,
    description: params.description,
    url,
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: params.bodyLocation,
    performer: {
      "@type": "MedicalClinic",
      "@id": CLINIC_ID,
      name: CLINIC.name,
      url: CLINIC.url,
    },
    inLanguage: "es",
  };
}

/** Schema BreadcrumbList. items = [{name, url}, ...] en orden. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Schema FAQPage. Listo para Etapa 3 cuando metamos FAQs. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

/** Schema Organization "ligero" para usar de referencia en otras páginas. */
export const ORGANIZATION_REF = { "@id": ORG_ID };
