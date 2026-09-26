/**
 * Fuente única de verdad para datos de la clínica.
 * Usada por JSON-LD schemas, llms.txt, y cualquier sitio que necesite NAP.
 */

export const SITE_URL = "https://clinicamaysoon.com";

/**
 * Fecha de última revisión clínica del contenido de las fichas de tratamiento.
 * Visible en cada ficha (E-E-A-T: señal de frescura para los buscadores de IA).
 * Actualizar cuando se revise el contenido clínico.
 */
export const CONTENT_LAST_REVIEWED = "2026-06-01";
export const CONTENT_LAST_REVIEWED_LABEL = "1 de junio de 2026";

export const CLINIC = {
  name: "Maysoon",
  legalName: "Clínica Maysoon",
  alternateName: "Clínica Médico-Estética Maysoon",
  description:
    "Clínica médico-estética en Valencia dirigida por el Dr. Daniel Sánchez Salvador. Medicina estética facial y corporal, unidad capilar, cirugías menores, aparatología láser, estética y masajes.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-maysoon.png`,
  image: `${SITE_URL}/images/sections/contacto-sala-espera.jpg`,
  telephone: "+34963201133",
  alternatePhones: ["+34601212258", "+34651545268"],
  whatsapp: "+34651545268",
  instagram: "https://www.instagram.com/clinicamaysoon/",
  address: {
    streetAddress: "Avenida del Cardenal Benlloch, 11",
    addressLocality: "Valencia",
    addressRegion: "Comunidad Valenciana",
    postalCode: "46021",
    addressCountry: "ES",
  },
  // Aproximadas. Si en algún momento se quiere precisión, sacar de Google Maps.
  geo: {
    latitude: 39.4719,
    longitude: -0.3622,
  },
  priceRange: "€€",
  languages: ["es", "en"],
} as const;

/**
 * Horarios de la clínica.
 * Lunes a jueves: mañana 09:30-13:30, tarde 16:30-20:30.
 * Viernes: mañana 09:30-14:00, tarde 15:30-18:30.
 */
export const OPENING_HOURS = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "09:30",
    closes: "13:30",
  },
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "16:30",
    closes: "20:30",
  },
  {
    dayOfWeek: "Friday",
    opens: "09:30",
    closes: "14:00",
  },
  {
    dayOfWeek: "Friday",
    opens: "15:30",
    closes: "18:30",
  },
] as const;

/**
 * Director médico — fuente única de verdad para el schema Physician.
 * Credenciales extraídas de DoctorHighlight.tsx (UI ya publicada).
 */
export const DIRECTOR_MEDICO = {
  name: "Dr. Daniel Sánchez Salvador",
  jobTitle: "Director Médico",
  description:
    "Director médico de Maysoon. Más de una década diseñando protocolos de medicina estética con criterio clínico y mirada artística.",
  image: `${SITE_URL}/images/team/dr-daniel.jpg`,
  url: `${SITE_URL}/quienes-somos`,
  knowsAbout: [
    "Medicina Estética",
    "Tratamientos faciales con ácido hialurónico",
    "Neuromodulación con toxina botulínica",
    "Hilos tensores",
    "Láser médico estético",
    "Trasplante capilar FUE",
    "Bioestimulación",
    "Cirugías menores",
  ],
  credentials: [
    "Licenciado en Medicina — Universidad de Salamanca",
    "Máster en Técnicas Avanzadas de Medicina Estética y Láser — CEU",
    "Diploma en Estudios Avanzados (DEA) — Sobresaliente",
    "+14 años de experiencia en medicina estética",
  ],
} as const;
