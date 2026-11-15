import "./nuevo/zonas.css";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { PricingTable } from "./PricingTable";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-capilar", label: "Capilar" },
  { id: "zona-acne", label: "Acné y Manchas" },
  { id: "zona-facial", label: "Facial" },
  { id: "zona-frente", label: "Frente" },
  { id: "zona-entrecejo", label: "Entrecejo" },
  { id: "zona-cejas", label: "Cejas" },
  { id: "zona-parpados", label: "Párpados" },
  { id: "zona-ojeras", label: "Ojeras" },
  { id: "zona-nariz", label: "Nariz" },
  { id: "zona-mandibula", label: "Mandíbula" },
  { id: "zona-labios", label: "Labios" },
];

export function MedicinaEsteticaHombreSection() {
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
          title="Cuero Cabelludo y Cabello"
          description="Tratamiento integral capilar para hombre: desde mantenimiento médico para frenar la caída hasta soluciones definitivas como el trasplante FUE."
          treatments={[
            "Mesoterapia Capilar",
            "Factores de crecimiento (PRP)",
            "Trasplante capilar FUE",
          ]}
          image="/images/sections/closeup-hombre-capilar.webp"
          imageAlt="Cuero cabelludo masculino — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · ACNÉ Y MANCHAS ── */}
        <ZonaBlock
          id="zona-acne"
          index={1}
          eyebrow="Acné y Manchas"
          title="Renovación de la Piel"
          description="Combinamos láser, radiofrecuencia y peelings específicos para tratar marcas de acné, lesiones vasculares e hiperpigmentación. Incluye protocolos exclusivos en nuestro catálogo masculino."
          treatments={[
            "Marcas de acné con Láser Erbio YAG",
            "Láser CO2",
            "Láser Vascular",
            "Luz Pulsada Intensa (IPL)",
            "Morpheus 8",
            "Lumixa",
            "Carbonpeel",
          ]}
          image="/images/sections/closeup-hombre-acne.webp"
          imageAlt="Piel masculina renovada — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · FACIAL ── */}
        <ZonaBlock
          id="zona-facial"
          index={2}
          eyebrow="Zona Facial"
          title="Tratamientos de Rostro"
          description="El bloque central de la medicina estética masculina. Rellenos, hilos, láser y bioestimulación combinados según las necesidades reales de tu piel."
          treatments={[
            "Rellenos Faciales con ácido hialurónico",
            "Plasma-Gel relleno",
            "Mesoterapia Facial",
            "Factores de crecimiento (PRP)",
            "Hilos Tensores",
            "Eliminación de manchas con Luz Pulsada Intensa (IPL)",
            "DermaPen — micropunción",
            "Endolifting (ENDOLÁSER Liften Dual)",
            "Resurfacing con Láser CO2",
          ]}
          image="/images/sections/closeup-hombre-facial.webp"
          imageAlt="Retrato editorial masculino — Maysoon"
          imageOrientation="portrait"
          imageSide="right"
        />

        {/* ── Tarifas Rellenos + Hilos lado a lado ── */}
        <FacialPricingGridHombre />

        {/* ── 04 · FRENTE ── */}
        <ZonaBlock
          id="zona-frente"
          index={3}
          eyebrow="Zona Frente"
          title="Líneas de Expresión"
          description="Suavizamos las arrugas de la frente sin perder el carácter de tu mirada. Tratamientos reversibles, dosis pensadas para piel masculina."
          treatments={[
            "Ácido hialurónico (rellenos faciales)",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-hombre-frente.webp"
          imageAlt="Frente masculina — Maysoon"
          imageSide="left"
        />

        {/* ── 05 · ENTRECEJO ── */}
        <ZonaBlock
          id="zona-entrecejo"
          index={4}
          eyebrow="Arrugas Entrecejo"
          title="Mirada Distendida"
          description="Relajación selectiva del músculo del entrecejo. Adiós al gesto de tensión sin perder expresión natural."
          treatments={["Neuromodulación (toxina botulínica)"]}
          image="/images/sections/closeup-hombre-entrecejo.webp"
          imageAlt="Entrecejo masculino — Maysoon"
          imageSide="right"
        />

        {/* ── 06 · CEJAS ── */}
        <ZonaBlock
          id="zona-cejas"
          index={5}
          eyebrow="Zona Cejas"
          title="Marco de la Mirada"
          description="Tratamientos de cejas pensados para hombre: definición, tracción y pigmentación con resultados sutiles y naturales."
          treatments={[
            "Micropigmentación",
            "Lifting con hilos tensores",
            "Neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-hombre-cejas.webp"
          imageAlt="Ceja masculina — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · PÁRPADOS ── */}
        <ZonaBlock
          id="zona-parpados"
          index={6}
          eyebrow="Zona Párpados"
          title="Sin Quirófano"
          description="Tensado del párpado y reducción del exceso de piel mediante tecnología plasma. Sin cirugía, recuperación rápida y sin baja."
          treatments={["Blefaroplastia con PLASMAGE (sin cirugía)"]}
          image="/images/sections/closeup-hombre-parpados.webp"
          imageAlt="Párpado masculino — Maysoon"
          imageSide="right"
        />

        {/* ── 08 · OJERAS ── */}
        <ZonaBlock
          id="zona-ojeras"
          index={7}
          eyebrow="Zona Ojeras"
          title="Mirada Descansada"
          description="Tratamos surcos, oscurecimiento y bolsas con técnicas específicas para el contorno de ojos masculino. Producto y dosis ajustados."
          treatments={[
            "Corrección de ojeras con ácido hialurónico",
            "Plasmage / Blefaroplastia",
            "Eliminación de bolsas con Endoláser",
            "Láser CO2",
          ]}
          image="/images/sections/closeup-hombre-ojeras.webp"
          imageAlt="Contorno de ojos masculino — Maysoon"
          imageSide="left"
        />

        {/* ── 09 · NARIZ ── */}
        <ZonaBlock
          id="zona-nariz"
          index={8}
          eyebrow="Zona Nariz"
          title="Rinomodelación"
          description="Corrección no quirúrgica del perfil nasal con ácido hialurónico. Modificación visible al instante, recuperación inmediata."
          treatments={[
            "Rinomodelación con ácido hialurónico",
            "Correcciones de dorso, punta y simetría",
          ]}
          image="/images/sections/closeup-hombre-nariz.webp"
          imageAlt="Perfil masculino — Maysoon"
          imageOrientation="portrait"
          imageSide="right"
        />

        {/* ── 10 · MANDÍBULA ── */}
        <ZonaBlock
          id="zona-mandibula"
          index={9}
          eyebrow="Zona Mandíbula"
          title="Definición Masculina"
          description="Reforzamos el ángulo mandibular y tratamos el bruxismo con técnicas reversibles. Esta es la zona que más diferencia el catálogo masculino."
          treatments={[
            "Corrección de Bruxismo",
            "Armonización mandibular",
            "MASCULOOK — definición masculina del ángulo mandibular",
          ]}
          image="/images/sections/closeup-hombre-mandibula.webp"
          imageAlt="Mandíbula masculina definida — Maysoon"
          imageSide="left"
        />

        {/* ── MASCULOOK · Featured ── */}
        <MasculookFeatured />

        {/* ── 11 · LABIOS ── */}
        <ZonaBlock
          id="zona-labios"
          index={10}
          eyebrow="Zona Labios"
          title="Aumento Sutil"
          description="Diseño masculino del contorno labial buscando volumen natural y armonía con el resto del rostro."
          treatments={["Aumento de labios"]}
          image="/images/sections/closeup-hombre-labios.webp"
          imageAlt="Labios masculinos — Maysoon"
          imageSide="right"
        />

        {/* ── Neuromodulación + Tarifas (mismas que Mujer) ── */}
        <NeuromodulacionFeaturedHombre />

        <ConsultaBlock
          title="¿Quieres una valoración masculina personalizada?"
          description="El rostro masculino tiene su propia estructura. Diseñamos un protocolo que respeta tus rasgos y refuerza lo que ya funciona."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   FacialPricingGridHombre — mismas tarifas que Mujer
   ───────────────────────────────────────────────── */

function FacialPricingGridHombre() {
  return (
    <div className="zo__grupo">
      <p className="serif zo__aviso" data-ap>
        Tarifas idénticas a la sección Mujer · transparencia total.
      </p>
      <div className="zo__par">
        <PricingTable
          title="Rellenos Faciales · Ácido hialurónico"
          intro="El relleno más extendido por su alta tolerancia y versatilidad. Hidrata, revoluminiza y produce un efecto lifting natural."
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

        <PricingTable
          title="Hilos Tensores"
          intro="Tres tipos según necesidad: PDO lisos, PDO arponados y suturas APTOS. Sesión 30–45 min, efecto definitivo a los 2 meses, duración hasta 18 meses."
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
   MASCULOOK — bloque destacado exclusivo hombre
   ───────────────────────────────────────────────── */

function MasculookFeatured() {
  return (
    <div className="zo__panel zo__panel--medio">
      {/* Left: copy */}
      <div className="zo__panel-txt">
        <span className="pildora" data-ap>
          Exclusivo · Hombre
        </span>

        <h3 className="tit tit--l zo__panel-tit" data-tit>
          MASCULOOK <br />
          <em className="zo__sub">
            Definición masculina del ángulo mandibular
          </em>
        </h3>

        <p className="zo__panel-desc" data-ap>
          Protocolo desarrollado para reforzar el ángulo mandibular masculino,
          ganar definición lateral y conseguir una mandíbula más marcada sin
          perder naturalidad. Una de las firmas del catálogo masculino de
          Maysoon.
        </p>

        <ul className="zo__pts">
          {[
            "Definición precisa del ángulo mandibular",
            "Refuerzo lateral y proyección del mentón",
            "Resultado masculino, natural y reversible",
            "Combinable con corrección de bruxismo",
          ].map((e) => (
            <li key={e} className="zo__pt" data-ap>
              <Marca />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: la marca de tres listones, en grande (solo escritorio) */}
      <div className="zo__sello" data-ap>
        <Marca grande />
        <span className="serif">Solo hombre</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   NeuromodulacionFeaturedHombre
   ───────────────────────────────────────────────── */

function NeuromodulacionFeaturedHombre() {
  return (
    <div className="zo__panel">
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
          En hombre buscamos relajar musculatura sin perder expresión. El
          objetivo es un rostro descansado, no un rostro &ldquo;tratado&rdquo;.
          Mismo protocolo y mismas tarifas que en la sección Mujer.
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
