/**
 * Metadatos de los 24 tratamientos con ficha clínica dedicada.
 * Usado por TreatmentSchema (JSON-LD MedicalProcedure + Breadcrumb).
 *
 * Las descripciones aquí son las "oficiales" para los crawlers de IA —
 * resumen clínico de 1-2 frases por tratamiento (más estructurado que el
 * contenido decorativo de la home).
 */

export interface TreatmentMeta {
  slug: string;
  name: string;
  alternateName?: string;
  description: string;
  bodyLocation?: string;
}

export const TREATMENTS: Record<string, TreatmentMeta> = {
  "armonizacion-mandibular": {
    slug: "armonizacion-mandibular",
    name: "Armonización Mandibular",
    description:
      "Definición del tercio inferior del rostro con ácido hialurónico. Forma en V femenina o ángulo mandibular masculino. Procedimiento ambulatorio, indoloro y reversible.",
    bodyLocation: "Mandíbula",
  },
  "blefaroplastia-plasmage": {
    slug: "blefaroplastia-plasmage",
    name: "Blefaroplastia con PLASMAGE",
    alternateName: "Blefaroplastia sin cirugía",
    description:
      "Blefaroplastia no quirúrgica con tecnología plasma. Tensa el párpado y reduce el exceso de piel sin bisturí. También trata código de barras y lesiones cutáneas (lunares, verrugas).",
    bodyLocation: "Párpados",
  },
  "bodytite": {
    slug: "bodytite",
    name: "BodyTite",
    alternateName: "Remodelación corporal con radiofrecuencia",
    description:
      "Alternativa mínimamente invasiva a la liposucción aprobada por la FDA. Radiofrecuencia profunda que disuelve grasa subcutánea y tensa la piel simultáneamente. Incluye variantes FaceTite y AccuTite.",
    bodyLocation: "Abdomen, brazos, muslos, papada",
  },
  "bruxismo": {
    slug: "bruxismo",
    name: "Tratamiento del Bruxismo",
    description:
      "Toxina botulínica en músculos maseteros para relajar el rechinar nocturno. Protege la ATM y las piezas dentales, reduce cefaleas y afina el contorno mandibular.",
    bodyLocation: "Maseteros",
  },
  "codigo-de-barras": {
    slug: "codigo-de-barras",
    name: "Código de Barras",
    alternateName: "Tratamiento de arrugas peribucales",
    description:
      "Tratamiento personalizado de las arrugas verticales del labio superior. Combina ácido hialurónico, toxina botulínica y láser CO2/plasma según el grado de profundidad.",
    bodyLocation: "Zona peribucal",
  },
  "dermapen-micropuncion": {
    slug: "dermapen-micropuncion",
    name: "DermaPen · Micropunción",
    description:
      "Tecnología de micropunción con 65.000 microcanales por minuto. Mejora absorción de activos y estimula colágeno y elastina. Trata arrugas, manchas, cicatrices y poros dilatados.",
    bodyLocation: "Rostro y cuello",
  },
  "eliminacion-tatuajes": {
    slug: "eliminacion-tatuajes",
    name: "Eliminación de Tatuajes con Láser",
    description:
      "Borrado progresivo y controlado de tatuajes con tecnología láser. Sin cicatrices ni marcas, respetando la integridad de la piel.",
  },
  "esclerosis-varices": {
    slug: "esclerosis-varices",
    name: "Esclerosis de Varices",
    description:
      "Tratamiento ambulatorio de varículas y varices mediante inyección de esclerosante. Solución médica sin cirugía cuando se aborda a tiempo.",
    bodyLocation: "Piernas",
  },
  "hiperhidrosis": {
    slug: "hiperhidrosis",
    name: "Tratamiento de Hiperhidrosis",
    alternateName: "Reducción de sudoración excesiva",
    description:
      "Toxina botulínica o Morpheus 8 para reducir la sudoración excesiva. Indicado para axilas, manos, pies y otras zonas. 90% de efectividad clínica.",
    bodyLocation: "Axilas, manos, pies",
  },
  "intralipoterapia": {
    slug: "intralipoterapia",
    name: "Intralipoterapia",
    alternateName: "Eliminación de grasa localizada con inyectable",
    description:
      "Inyección de AQUALIX para eliminar grasa localizada sin cirugía. Indoloro, ambulatorio y reincorporación inmediata. Indicado en abdomen, flancos y glúteos.",
    bodyLocation: "Abdomen, flancos, glúteos",
  },
  "laser-erbio-yag": {
    slug: "laser-erbio-yag",
    name: "Láser Erbio YAG",
    description:
      "Tecnología láser con tres modalidades: quirúrgico, Velo de Novia (peeling láser) y fraccionado/resurfacing. Trata arrugas, cicatrices de acné y rejuvenecimiento cutáneo.",
    bodyLocation: "Rostro",
  },
  "laser-vascular": {
    slug: "laser-vascular",
    name: "Láser Vascular",
    alternateName: "Láser Diodo 980 nm vascular",
    description:
      "Eliminación de arañas vasculares, puntos rubí y capilares de hasta 2 mm. Sin geles ni anestesia, sin marcas residuales.",
    bodyLocation: "Rostro y piernas",
  },
  "lifting-retensor-endopeel": {
    slug: "lifting-retensor-endopeel",
    name: "Lifting Retensor Endopeel",
    alternateName: "Lifting sin cirugía",
    description:
      "Lifting facial o corporal sin cirugía con resultados visibles a los 30 minutos. Mejora flacidez, tono muscular y elevación mediante producto retensor inyectable.",
    bodyLocation: "Rostro, cuello, abdomen, glúteos",
  },
  "luz-pulsada-ipl": {
    slug: "luz-pulsada-ipl",
    name: "Luz Pulsada Intensa (IPL)",
    alternateName: "Fotorrejuvenecimiento IPL",
    description:
      "Tratamiento de manchas, pecas, puntos rubí, telangiectasias y acné con Luz Pulsada Intensa. Resultados visibles desde la primera sesión.",
    bodyLocation: "Rostro, escote, manos",
  },
  "masculook": {
    slug: "masculook",
    name: "MASCULOOK",
    alternateName: "Armonización mandibular masculina",
    description:
      "Protocolo exclusivo de definición del ángulo mandibular masculino. Mandíbula marcada, ángulo definido y mentón prominente. Técnica reversible con ácido hialurónico.",
    bodyLocation: "Mandíbula y mentón (hombre)",
  },
  "mesoterapia": {
    slug: "mesoterapia",
    name: "Mesoterapia Facial · Corporal · Capilar",
    description:
      "Cocktails personalizados de activos (vitaminas, péptidos, ácido hialurónico) aplicados con microinyecciones. Hidrata, drena, mejora flacidez y revitaliza el cabello.",
    bodyLocation: "Rostro, cuerpo, cuero cabelludo",
  },
  "micropigmentacion-microblading": {
    slug: "micropigmentacion-microblading",
    name: "Microblading · Micropigmentación",
    description:
      "Maquillaje semipermanente pelo a pelo con aspecto natural. Diseño personalizado de cejas, labios o eyeliner. Durabilidad de 1 a 3 años.",
    bodyLocation: "Cejas, labios, párpados",
  },
  "peelings-medicos": {
    slug: "peelings-medicos",
    name: "Peelings Médicos",
    description:
      "Renovación cutánea con cuatro profundidades: superficial, medio, profundo y New Melan (específico para melasma). Mejora textura, manchas y luminosidad.",
    bodyLocation: "Rostro, cuello, escote",
  },
  "plasma-gel-relleno": {
    slug: "plasma-gel-relleno",
    name: "Plasma-Gel Relleno",
    alternateName: "Relleno facial 100% autólogo",
    description:
      "Relleno facial obtenido del plasma del propio paciente. Sin riesgo de alergias, con un 25% de fijación definitiva del volumen aportado.",
    bodyLocation: "Rostro",
  },
  "prp": {
    slug: "prp",
    name: "PRP · Plasma Rico en Plaquetas",
    description:
      "Bioestimulación con factores de crecimiento del propio paciente. Único tratamiento capaz de aumentar el número de fibroblastos. Aplicación capilar, facial y de escote.",
    bodyLocation: "Cuero cabelludo, rostro, escote",
  },
  "rellenos-corporales": {
    slug: "rellenos-corporales",
    name: "Rellenos Corporales",
    alternateName: "Lanluma X® y Powerfill®",
    description:
      "Aumento estructural con ácido hialurónico corporal (Lanluma X®) o ácido poliláctico (Powerfill®). Indicado para gemelos, pectorales, glúteos y rejuvenecimiento genital.",
    bodyLocation: "Gemelos, pectorales, glúteos, zona íntima",
  },
  "sueroterapia": {
    slug: "sueroterapia",
    name: "Sueroterapia",
    alternateName: "Terapia intravenosa de vitaminas",
    description:
      "Tratamiento intravenoso con 7 fórmulas: Antiaging, Sport, Inmuno, Energy, Detox, Mayers y Fitness. Máxima absorción de vitaminas y aminoácidos.",
  },
  "tratamiento-celulitis": {
    slug: "tratamiento-celulitis",
    name: "Tratamiento de Celulitis",
    description:
      "Protocolo médico combinado de maderoterapia, mesoterapia drenante y Alidya® específico contra los nódulos adiposos. Ataca las causas, no solo el síntoma.",
    bodyLocation: "Muslos, glúteos, abdomen",
  },
  "tratamientos-intimos": {
    slug: "tratamientos-intimos",
    name: "Tratamientos Íntimos",
    alternateName: "Engrosamiento de pene · aumento de labios mayores",
    description:
      "Tratamientos íntimos con ácido hialurónico corporal: engrosamiento de pene (hasta 4 cm de circunferencia), aumento de glande y aumento de labios mayores. Técnica reversible y discreción total.",
    bodyLocation: "Zona íntima",
  },
};

export type TreatmentSlug = keyof typeof TREATMENTS;
