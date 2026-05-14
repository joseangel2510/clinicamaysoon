/**
 * Mapeo de nombres de tratamiento → URL de su explicación.
 *
 * Cubre dos tipos de destino:
 *  - Páginas dedicadas: /tratamientos/<slug>
 *  - Anclas in-page: /<página>#<anchor> cuando la explicación vive en un
 *    bloque destacado dentro de la misma página (ENDOLÁSER, Morpheus 8,
 *    Neuromodulación, Estimuladores, Rellenos Faciales, Hilos Tensores).
 *
 * El matching es por substring tolerante a tildes/mayúsculas para soportar
 * variantes textuales como "Reducción de papada (ENDOLÁSER Fox III)" o
 * "ENDOLÁSER Brazos (Fox III)".
 */

const DIACRITICS_RE = /[̀-ͯ]/g;

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(DIACRITICS_RE, "");
}

export function getTreatmentLink(name: string): string | null {
  const n = normalize(name);

  // ── Marcas / nombres propios (más específico primero) ──
  if (n.includes("masculook")) return "/tratamientos/masculook";
  if (n.includes("codigo de barras")) return "/tratamientos/codigo-de-barras";
  if (n.includes("armonizacion mandibular"))
    return "/tratamientos/armonizacion-mandibular";
  if (n.includes("bruxismo")) return "/tratamientos/bruxismo";
  if (n.includes("micropigmentacion") || n.includes("microblading"))
    return "/tratamientos/micropigmentacion-microblading";
  if (n.includes("dermapen")) return "/tratamientos/dermapen-micropuncion";
  if (n.includes("plasma-gel") || n.includes("plasma gel"))
    return "/tratamientos/plasma-gel-relleno";
  if (n.includes("laser erbio")) return "/tratamientos/laser-erbio-yag";
  if (n.includes("marcas de acne")) return "/tratamientos/laser-erbio-yag";
  if (
    n.includes("luz pulsada") ||
    n.includes("(ipl)") ||
    /\bipl\b/.test(n)
  )
    return "/tratamientos/luz-pulsada-ipl";

  // ── Aumento de gemelos / pectoral → relleno corporal ──
  if (
    n.includes("aumento de gemelos") ||
    n.includes("aumento de pectoral")
  )
    return "/tratamientos/rellenos-corporales";

  // ── Zona íntima (antes de plasmage, porque "verrugas genitales" + plasmage) ──
  if (
    n.includes("aumento de glande") ||
    n.includes("engrosamiento de pene") ||
    n.includes("aumento de labios mayores") ||
    n.includes("verrugas genitales")
  )
    return "/tratamientos/tratamientos-intimos";

  // ── Plasmage / Blefaroplastia ──
  if (n.includes("plasmage") || n.includes("blefaroplastia"))
    return "/tratamientos/blefaroplastia-plasmage";

  // ── Láser Vascular y arañas vasculares ──
  if (n.includes("laser vascular") || n.includes("aranas vasculares"))
    return "/tratamientos/laser-vascular";

  if (n.includes("hiperhidrosis") || n.includes("sudoracion"))
    return "/tratamientos/hiperhidrosis";
  if (n.includes("eliminacion de tatuajes") || n.includes("tatuajes con laser"))
    return "/tratamientos/eliminacion-tatuajes";
  if (n.includes("sueroterapia")) return "/tratamientos/sueroterapia";
  if (n.includes("intralipoterapia")) return "/tratamientos/intralipoterapia";
  if (n.includes("bodytite")) return "/tratamientos/bodytite";
  if (n.includes("esclerosis")) return "/tratamientos/esclerosis-varices";
  if (n.includes("celulitis")) return "/tratamientos/tratamiento-celulitis";
  if (n.includes("peeling")) return "/tratamientos/peelings-medicos";
  if (n.includes("endopeel") || n.includes("lifting retensor"))
    return "/tratamientos/lifting-retensor-endopeel";

  // ── Rellenos corporales (incluye rejuvenecimiento de manos / glúteos / pectoral) ──
  if (
    (n.includes("relleno") || n.includes("rellenos")) &&
    (n.includes("corporal") || n.includes("corporales"))
  )
    return "/tratamientos/rellenos-corporales";

  // ── Unidad capilar ──
  if (n.includes("trasplante") && n.includes("fue"))
    return "/unidad-capilar#trasplante";
  if (n.includes("tricopigmentacion"))
    return "/unidad-capilar#tricopigmentacion";

  // ── PRP / factores de crecimiento ──
  if (
    n.includes("prp") ||
    n.includes("plasma rico en plaquetas") ||
    n.includes("factores de crecimiento")
  )
    return "/tratamientos/prp";

  // ── Mesoterapia (después de "factores de crecimiento" para evitar colisión) ──
  if (n.includes("mesoterapia")) return "/tratamientos/mesoterapia";

  // ─────────────────────────────────────────────
  // ANCLAS IN-PAGE (sin página dedicada propia)
  // ─────────────────────────────────────────────

  // ENDOLÁSER Fox III — descrito en la sección corporal mujer
  if (n.includes("endolaser") || n.includes("endolifting"))
    return "/medicina-estetica/corporal#endolaser-fox-iii";

  // Morpheus 8 — descrito en la sección facial mujer
  if (n.includes("morpheus")) return "/medicina-estetica#morpheus-8";

  // Estimuladores de colágeno / bioestimuladores
  if (
    n.includes("estimulador") &&
    (n.includes("colageno") || n.includes("bioestimul"))
  )
    return "/medicina-estetica#estimuladores-colageno";
  if (n.includes("bioestimuladores"))
    return "/medicina-estetica#estimuladores-colageno";

  // Hilos tensores
  if (n.includes("hilos tensores") || n.includes("hilos"))
    return "/medicina-estetica#hilos-tensores";

  // Neuromodulación / toxina botulínica
  if (n.includes("neuromodul") || n.includes("toxina botulinica"))
    return "/medicina-estetica#neuromodulacion";

  // Rellenos faciales con ácido hialurónico (Teoxane)
  if (
    n.includes("relleno") &&
    (n.includes("facial") || n.includes("teoxane"))
  )
    return "/medicina-estetica#rellenos-faciales";
  if (n.includes("rinomodelacion"))
    return "/medicina-estetica#rellenos-faciales";
  if (n.includes("acido hialuronico"))
    return "/medicina-estetica#rellenos-faciales";
  if (n.includes("redensity"))
    return "/medicina-estetica#rellenos-faciales";

  return null;
}
