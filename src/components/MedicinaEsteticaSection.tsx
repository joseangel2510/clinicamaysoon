import "./nuevo/zonas.css";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { PricingTable } from "./PricingTable";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-capilar", label: "Capilar" },
  { id: "zona-frente", label: "Frente" },
  { id: "zona-entrecejo", label: "Entrecejo" },
  { id: "zona-facial", label: "Facial" },
  { id: "zona-acne", label: "Acné y Manchas" },
  { id: "zona-ojeras", label: "Ojeras" },
  { id: "zona-cejas", label: "Cejas" },
  { id: "zona-parpados", label: "Párpados" },
  { id: "zona-nariz", label: "Nariz" },
  { id: "zona-labios", label: "Labios" },
  { id: "zona-mandibula", label: "Mandíbula" },
];

export function MedicinaEsteticaSection() {
  return (
    <section className="zo">
      {/* ── Raíl de zonas: se queda bajo la cabecera ── */}
      <ZonaNav zonas={zonasNav} />

      <div className="marco zo__cuerpo">
        {/* ── 01 · CAPILAR ── */}
        <ZonaBlock
          id="zona-capilar"
          index={0}
          eyebrow="Zona Capilar"
          title="Cuero Cabelludo"
          description="Tratamientos para frenar la caída y reforzar el folículo desde dentro. Cada protocolo se adapta al patrón capilar de cada paciente."
          treatments={[
            "Mesoterapia Capilar",
            "Factores de crecimiento (PRP)",
          ]}
          image="/images/sections/closeup-capilar.webp"
          imageAlt="Cuero cabelludo y cabello — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · FRENTE ── */}
        <ZonaBlock
          id="zona-frente"
          index={1}
          eyebrow="Zona Frente"
          title="Líneas de Expresión"
          description="Suavizamos las arrugas de la frente con técnicas reversibles, manteniendo la naturalidad y el carácter de tu mirada."
          treatments={[
            "Ácido hialurónico (rellenos faciales)",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-frente.webp"
          imageAlt="Frente femenina — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · ENTRECEJO ── */}
        <ZonaBlock
          id="zona-entrecejo"
          index={2}
          eyebrow="Arrugas Entrecejo"
          title="Mirada Distendida"
          description="Relajación selectiva del músculo del entrecejo. Adiós al gesto preocupado sin perder expresión."
          treatments={["Neuromoduladores (toxina botulínica)"]}
          image="/images/sections/closeup-entrecejo.webp"
          imageAlt="Zona del entrecejo — Maysoon"
          imageSide="right"
        />

        {/* ── 04 · FACIAL ── */}
        <ZonaBlock
          id="zona-facial"
          index={3}
          eyebrow="Zona Facial"
          title="Tratamientos de Rostro"
          description="El corazón de nuestra medicina estética. Rellenos, hilos, láser, radiofrecuencia y bioestimulación combinados según las necesidades reales de tu piel."
          treatments={[
            "Rellenos Faciales con ácido hialurónico",
            "Plasma-Gel relleno",
            "Mesoterapia Facial",
            "Factores de crecimiento (PRP)",
            "Hilos Tensores (PDO, PCLA, APTOS)",
            "Eliminación de manchas con Luz Pulsada Intensa (IPL)",
            "DermaPen — micropunción para arrugas, manchas y cicatrices",
            "Resurfacing con Láser CO2",
            "Endolifting (ENDOLÁSER Liften Dual)",
            "Morpheus 8 — radiofrecuencia fraccionada con microagujas",
            "Estimuladores de colágeno (ácido poliláctico)",
          ]}
          image="/images/sections/closeup-rostro.webp"
          imageAlt="Rostro femenino — Maysoon"
          imageOrientation="portrait"
          imageSide="left"
        />

        <div className="zo__grupo">
          {/* ── Facial · Tablas de precios lado a lado ── */}
          <FacialPricingGrid />

          {/* ── Facial · Tratamientos destacados lado a lado ── */}
          <FacialDestacados />
        </div>

        {/* ── 05 · ACNÉ Y MANCHAS ── */}
        <ZonaBlock
          id="zona-acne"
          index={4}
          eyebrow="Acné y Manchas"
          title="Renovación de la Piel"
          description="Combinamos tecnologías láser y radiofrecuencia para tratar marcas de acné, lesiones vasculares e hiperpigmentación con resultados visibles."
          treatments={[
            "Marcas de acné con Láser Erbio YAG",
            "Láser CO2",
            "Láser Vascular",
            "Luz Pulsada Intensa (IPL)",
            "Morpheus 8",
          ]}
          image="/images/sections/closeup-acne.webp"
          imageAlt="Piel renovada y luminosa — Maysoon"
          imageSide="right"
        />

        {/* ── 06 · OJERAS ── */}
        <ZonaBlock
          id="zona-ojeras"
          index={5}
          eyebrow="Zona Ojeras"
          title="Mirada Descansada"
          description="Tratamos surcos, oscurecimiento y bolsas con técnicas específicas para el contorno de ojos. Producto y dosis pensados para esta zona delicada."
          treatments={[
            "Corrección de ojeras con ácido hialurónico",
            "Plasmage / Blefaroplastia sin cirugía",
            "Eliminación de bolsas con Endoláser",
            "Láser CO2",
          ]}
          image="/images/sections/closeup-ojos.webp"
          imageAlt="Contorno de ojos — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · CEJAS ── */}
        <ZonaBlock
          id="zona-cejas"
          index={6}
          eyebrow="Zona Cejas"
          title="Marco de la Mirada"
          description="Diseñamos cejas a tu medida combinando técnicas estéticas y médicas: pigmentación, tracción con hilos o corrección de la posición."
          treatments={[
            "Micropigmentación de cejas",
            "Lifting con hilos tensores",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-cejas.webp"
          imageAlt="Detalle de ceja — Maysoon"
          imageSide="right"
        />

        {/* ── 08 · PÁRPADOS ── */}
        <ZonaBlock
          id="zona-parpados"
          index={7}
          eyebrow="Zona Párpados"
          title="Sin Quirófano"
          description="Tensado del párpado y reducción del exceso de piel mediante tecnología plasma, sin cirugía y con recuperación rápida."
          treatments={["Blefaroplastia con PLASMAGE (sin cirugía)"]}
          image="/images/sections/closeup-parpados.webp"
          imageAlt="Párpado y pestañas — Maysoon"
          imageSide="left"
        />

        {/* ── 09 · NARIZ ── */}
        <ZonaBlock
          id="zona-nariz"
          index={8}
          eyebrow="Zona Nariz"
          title="Rinomodelación"
          description="Corrección no quirúrgica del perfil nasal con ácido hialurónico. Modificación visible al instante, recuperación inmediata y resultado natural."
          treatments={[
            "Rinomodelación con ácido hialurónico",
            "Correcciones de dorso, punta y simetría",
          ]}
          image="/images/sections/closeup-perfil.webp"
          imageAlt="Perfil de rostro — Maysoon"
          imageOrientation="portrait"
          imageSide="right"
        />

        {/* ── 10 · LABIOS ── */}
        <ZonaBlock
          id="zona-labios"
          index={9}
          eyebrow="Zona Labios"
          title="Aumento y Definición"
          description="Uno de nuestros tratamientos más demandados. Diseño personalizado del volumen y contorno labial, siempre buscando la naturalidad."
          treatments={[
            "Aumento de labios",
            "Código de barras (arrugas peribucales)",
          ]}
          image="/images/sections/closeup-labios.webp"
          imageAlt="Detalle de labios — Maysoon"
          imageSide="left"
        />

        {/* ── 11 · MANDÍBULA ── */}
        <ZonaBlock
          id="zona-mandibula"
          index={10}
          eyebrow="Zona Mandíbula"
          title="Definición del Óvalo"
          description="Tratamientos para el bruxismo y para la armonización del tercio inferior, con técnicas reversibles y resultados naturales."
          treatments={[
            "Corrección de Bruxismo",
            "Armonización mandibular",
            "ENDOLÁSER (Liften Dual)",
          ]}
          image="/images/sections/closeup-mandibula.webp"
          imageAlt="Mandíbula y cuello — Maysoon"
          imageSide="right"
        />

        {/* ── FEATURED: NEUROMODULACIÓN ── */}
        <NeuromodulacionFeatured />

        <ConsultaBlock
          title="¿Tu caso necesita un protocolo combinado?"
          description="Cada rostro es único. Reservamos una primera valoración médica para diseñar el plan que mejor responde a tu objetivo."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   FacialPricingGrid — Rellenos + Hilos lado a lado
   ───────────────────────────────────────────────── */

function FacialPricingGrid() {
  return (
    <div className="zo__par">
      <div id="rellenos-faciales" className="zo__ancla">
      <PricingTable
        title="Rellenos Faciales · Ácido hialurónico"
        intro="El relleno más extendido por su alta tolerancia y versatilidad. Hidrata, revoluminiza y produce un efecto lifting natural. Tratamiento indoloro con reincorporación inmediata."
        rows={[
          { label: "Labios", price: "280 €" },
          { label: "Ojeras", detail: "1 vial", price: "350 €" },
          { label: "Ojeras", detail: "2 viales", price: "550 €" },
          { label: "Rinomodelación", detail: "1 vial", price: "450 €" },
          { label: "Otras áreas faciales", detail: "1 vial", price: "280 €" },
          { label: "Otras áreas faciales", detail: "2 viales", price: "540 €" },
          { label: "Otras áreas faciales", detail: "3 viales", price: "780 €" },
          { label: "Otras áreas faciales", detail: "4 viales", price: "1.000 €" },
          { label: "Otras áreas faciales", detail: "5 viales", price: "1.200 €" },
        ]}
        footnote="Presupuestos personalizados para fullface o técnica MLT 3.1."
      />
      </div>

      <div id="hilos-tensores" className="zo__ancla">
      <PricingTable
        title="Hilos Tensores"
        intro="Tres tipos según necesidad: PDO lisos (generan colágeno), PDO arponados (lifting inmediato) y suturas APTOS (última generación, máxima tracción). Sesión 30–45 min, efecto definitivo a los 2 meses, duración hasta 18 meses."
        rows={[
          { label: "PDO monofilamento", price: "desde 10 €/hilo" },
          {
            label: "Arponados Dual y Fox Eyes",
            detail: "PDO · pack 2 hilos dobles",
            price: "desde 350 €",
          },
          {
            label: "Arponados PCLA",
            detail: "pack 2 hilos dobles",
            price: "desde 450 €",
          },
          {
            label: "Otoplastia con suturas permanentes",
            detail: "ambas orejas",
            price: "900 €",
          },
        ]}
      />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   FacialDestacados — Morpheus + Estimuladores lado a lado
   ───────────────────────────────────────────────── */

function FacialDestacados() {
  return (
    <div className="zo__par zo__par--igual">
      <FeaturedTreatment
        id="morpheus-8"
        badge="Aprobado por la FDA"
        title="Morpheus 8"
        description="Radiofrecuencia fraccionada con microagujas. Primer y único dispositivo que trata acumulación de grasa y flacidez cutánea en un solo tratamiento. Rejuvenece, estimula colágeno, reafirma, retensa y elimina grasa de forma permanente."
        extras={[
          "También trata celulitis, arrugas, hiperhidrosis, marcas de acné y estrías",
          "Resultados visibles desde la primera sesión",
        ]}
      />

      <FeaturedTreatment
        id="estimuladores-colageno"
        badge="Bioestimulación"
        title="Estimuladores de Colágeno · Ácido Poliláctico"
        description="Biopolímero reabsorbible y biocompatible. No aporta volumen inmediato — estimula la producción natural de colágeno. Indicado para rostro, cuello, escote y brazos a partir de los 35 años."
        extras={[
          "2–3 sesiones espaciadas 4–6 semanas",
          "Mantenimiento anual recomendado",
        ]}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────
   FeaturedTreatment — tarjeta arena con píldora
   ───────────────────────────────────────────────── */

function FeaturedTreatment({
  id,
  badge,
  title,
  description,
  extras = [],
}: {
  id?: string;
  badge: string;
  title: string;
  description: string;
  extras?: string[];
}) {
  return (
    <div id={id} className="zo__dest" data-ap>
      <span className="pildora">{badge}</span>
      <h4 className="tit zo__dest-tit">{title}</h4>
      <p className="zo__dest-desc">{description}</p>
      {extras.length > 0 && (
        <ul className="zo__pts">
          {extras.map((e) => (
            <li key={e} className="zo__pt">
              <Marca />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   NeuromodulacionFeatured — bloque destacado al final
   ───────────────────────────────────────────────── */

function NeuromodulacionFeatured() {
  return (
    <div id="neuromodulacion" className="zo__panel">
      {/* Left: copy */}
      <div className="zo__panel-txt">
        <span className="pildora" data-ap>
          Neuromodulación · Toxina botulínica
        </span>

        <h3 className="tit tit--l zo__panel-tit" data-tit>
          Menos es <br />
          <em>Más Natural</em>
        </h3>

        <p className="zo__panel-desc" data-ap>
          Nuestra filosofía no busca &ldquo;planchar&rdquo; el rostro: relaja
          la musculatura hiperactiva para conseguir un aspecto más suave y
          relajado. Minimiza arrugas profundas y elimina las finas, manteniendo
          la expresión.
        </p>

        <ul className="zo__pts">
          {[
            "Sesión de 30 min, indolora",
            "Efecto visible entre los 3 y 5 días",
            "Efecto completo a los 15 días con sesión de revisión",
            "Trabajamos con neuromoduladores de primeras marcas, también con Relfydess",
          ].map((e) => (
            <li key={e} className="zo__pt" data-ap>
              <Marca />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: pricing */}
      <div className="zo__tar" data-ap>
        <span className="pildora pildora--arena">
          Tarifas · Neuromoduladores
        </span>
        <ul className="zo__tar-filas">
          {[
            {
              label: "Zona única",
              detail: "frente o entrecejo",
              price: "100 €",
            },
            {
              label: "Zona única",
              detail: "patas de gallo",
              price: "120 €",
            },
            { label: "Tercio superior completo", price: "300 €" },
            { label: "Hiperhidrosis", price: "500 €" },
          ].map((r) => (
            <li key={`${r.label}-${r.price}`} className="zo__tar-fila">
              <div className="zo__tar-txt">
                <span className="zo__tar-nom">{r.label}</span>
                {r.detail && <span className="zo__tar-det">{r.detail}</span>}
              </div>
              <span className="serif zo__precio">{r.price}</span>
            </li>
          ))}
        </ul>
        <p className="zo__tar-nota">
          Precios con nuestro neuromodulador habitual. También trabajamos con{" "}
          <span>Relfydess</span>, con efecto de hasta 5-6 meses: consúltanos su
          precio.
        </p>
      </div>
    </div>
  );
}

/* Marca de tres listones, en lugar de viñeta */
function Marca({ grande = false }: { grande?: boolean }) {
  return (
    <span
      className={`zo__marca${grande ? " zo__marca--xl" : ""}`}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  );
}
