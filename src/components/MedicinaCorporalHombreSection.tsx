import "./nuevo/confianza.css";
import { Activity } from "lucide-react";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-cuello", label: "Cuello" },
  { id: "zona-brazo", label: "Axilas / Brazos" },
  { id: "zona-pectoral", label: "Pectoral" },
  { id: "zona-abdomen", label: "Abdomen" },
  { id: "zona-intima", label: "Zona Íntima" },
  { id: "zona-gluteos", label: "Glúteos" },
  { id: "zona-piernas", label: "Piernas" },
];

export function MedicinaCorporalHombreSection() {
  return (
    <section className="co__zonas-sec">
      {/* ── Zona nav ── (hija directa de la sección: así se queda pegada) */}
      <ZonaNav zonas={zonasNav} />

      <div className="marco co__zonas">
        {/* ── 01 · CUELLO ── */}
        <ZonaBlock
          id="zona-cuello"
          index={0}
          eyebrow="Zona Cuello"
          title="Tensado y Definición"
          description="Combinamos láser, hilos, bioestimulación y BodyTite para reafirmar el cuello masculino, una de las zonas que más delata el paso del tiempo."
          treatments={[
            "Reducción de papada (ENDOLÁSER Liften Dual)",
            "Estimulador de colágeno (bioestimuladores)",
            "Hilos tensores",
            "PLASMAGE para lunares y verrugas",
            "Morpheus 8",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-cuello.webp"
          imageAlt="Cuello masculino — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · AXILAS / BRAZOS ── */}
        <ZonaBlock
          id="zona-brazo"
          index={1}
          eyebrow="Zona Axilas y Brazos"
          title="Reafirmación y Bienestar"
          description="Tratamientos focalizados en flacidez del brazo masculino, sudoración excesiva, eliminación de tatuajes y bienestar integral con sueroterapia."
          treatments={[
            "ENDOLÁSER Brazos (Liften Dual)",
            "Reducción de sudoración / Hiperhidrosis",
            "BodyTite — remodelación corporal avanzada",
            "Eliminación de tatuajes con láser",
            "Sueroterapia — recuperación de vitalidad",
          ]}
          image="/images/sections/closeup-hombre-brazo.webp"
          imageAlt="Brazo masculino — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · PECTORAL (exclusivo hombre) ── */}
        <ZonaBlock
          id="zona-pectoral"
          index={2}
          eyebrow="Zona Pectoral · Exclusivo Hombre"
          title="Pectoral con Definición"
          description="Tratamiento específico de la zona pectoral masculina: reafirmación cutánea y volumen estructural con técnicas reversibles e indoloras."
          treatments={[
            "Rellenos Corporales",
          ]}
          image="/images/sections/closeup-hombre-pectoral.webp"
          imageAlt="Zona pectoral masculina — Maysoon"
          imageSide="right"
        />

        {/* ── 04 · ABDOMEN ── */}
        <ZonaBlock
          id="zona-abdomen"
          index={3}
          eyebrow="Zona Abdomen"
          title="Tratamiento Integral"
          description="Catálogo completo para el abdomen masculino: combinamos lifting, mesoterapia, rellenos, intralipoterapia, láser y BodyTite según el objetivo."
          treatments={[
            "Mesoterapia Corporal",
            "Rellenos Corporales",
            "Intralipoterapia — eliminación de grasa localizada",
            "Reducción de grasa con ENDOLÁSER (Liften Dual)",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-abdomen.webp"
          imageAlt="Abdomen masculino — Maysoon"
          imageSide="left"
        />

        {/* ── 05 · ZONA ÍNTIMA (exclusivo hombre) ── */}
        <ZonaBlock
          id="zona-intima"
          index={4}
          eyebrow="Zona Íntima · Exclusivo Hombre"
          title="Cuidado Discreto"
          description="Tratamientos íntimos masculinos con la máxima discreción y técnica. Espacio reservado, valoración personalizada y máximo respeto."
          treatments={[
            "Aumento de glande",
            "Engrosamiento de pene · ácido hialurónico corporal",
            "Verrugas genitales · eliminación con PLASMAGE",
            "Escrotox · neuromoduladores (toxina botulínica)",
          ]}
          image="/images/sections/closeup-hombre-intima.webp"
          imageAlt="Detalle estético masculino — Maysoon"
          imageSide="right"
        />

        {/* ── Engrosamiento de pene · destacado con stats ── */}
        <EngrosamientoFeatured />

        {/* ── 06 · GLÚTEOS ── */}
        <ZonaBlock
          id="zona-gluteos"
          index={5}
          eyebrow="Zona Glúteos"
          title="Volumen y Firmeza"
          description="Catálogo masculino simplificado: volumen estructural con rellenos corporales y reafirmación con BodyTite."
          treatments={[
            "Rellenos Corporales",
            "BodyTite",
          ]}
          image="/images/sections/closeup-hombre-gluteos.webp"
          imageAlt="Espalda y glúteos masculinos — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · PIERNAS ── */}
        <ZonaBlock
          id="zona-piernas"
          index={6}
          eyebrow="Zona Piernas"
          title="Vasos y Volumen"
          description="Tratamiento médico de varices y arañas vasculares, además del exclusivo aumento de gemelos masculino con rellenos corporales."
          treatments={[
            "Esclerosis de varices",
            "Láser Vascular",
            "Aumento de gemelos · Exclusivo Hombre",
          ]}
          image="/images/sections/closeup-hombre-piernas.webp"
          imageAlt="Piernas masculinas — Maysoon"
          imageSide="right"
        />

        {/* ── Aumento de gemelos · destacado ── */}
        <GemelosFeatured />

        <ConsultaBlock
          title="¿Quieres una valoración corporal masculina?"
          description="El cuerpo masculino tiene su propia estructura. Reservamos una primera consulta para diseñar el protocolo que mejor responde a tu objetivo."
        />
      </div>
    </section>
  );
}

// Marca de tres listones: sustituye a los adornos de las listas
function Listones() {
  return (
    <span className="co__lis3" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

/* ─────────────────────────────────────────────────
   EngrosamientoFeatured — panel arena con ficha de datos clínicos
   ───────────────────────────────────────────────── */

function EngrosamientoFeatured() {
  return (
    <div className="co__eng">
      {/* Left: copy */}
      <div className="co__eng-txt">
        <span className="pildora" data-ap>
          Exclusivo · Hombre
        </span>

        <h3 className="tit tit--m co__eng-tit" data-tit>
          Engrosamiento
          <br />
          <em>de Pene</em>
        </h3>

        <p className="cuerpo co__eng-desc" data-ap>
          Infiltración de ácido hialurónico corporal específicamente
          formulado para esta zona. Tratamiento ambulatorio, indoloro y
          con resultados visibles desde la primera y única sesión.
        </p>

        <ul className="co__filas">
          {[
            "Procedimiento ambulatorio · sin baja",
            "Aplicación indolora",
            "Resultados visibles desde la primera sesión",
            "Atención discreta · espacio reservado",
          ].map((e) => (
            <li key={e} className="co__fila" data-ap>
              <Listones />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: stats card */}
      <div className="co__eng-datos" data-ap>
        <span className="pildora pildora--arena">Datos clínicos</span>
        <div className="co__eng-lista">
          <Stat
            value="Hasta 4 cm"
            label="Ganancia de circunferencia"
            detail="en una sola sesión"
          />
          <Stat
            value="1 sesión"
            label="Tratamiento completo"
            detail="sin necesidad de retoque inmediato"
          />
          <Stat
            value="Hasta 2 años"
            label="Duración del resultado"
            detail="en la mayoría de pacientes"
          />
          <Stat
            value="Indoloro"
            label="Procedimiento ambulatorio"
            detail="sin baja médica"
          />
        </div>
      </div>
    </div>
  );
}

function Stat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="co__dato">
      <div className="serif co__dato-valor">{value}</div>
      <div className="co__dato-nombre">{label}</div>
      {detail && <div className="co__dato-detalle">{detail}</div>}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   GemelosFeatured — franja con borde fino para gemelos
   ───────────────────────────────────────────────── */

function GemelosFeatured() {
  return (
    <div className="co__fr" data-ap>
      <div className="co__fr-cab">
        <div className="co__fr-marca">
          <span className="co__ico co__ico--arena">
            <Activity size={20} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="pildora pildora--arena">Exclusivo · Hombre</span>
        </div>
        <h4 className="co__fr-tit">Aumento de Gemelos</h4>
      </div>
      <p className="co__fr-desc">
        Volumen y proyección del gemelo con rellenos corporales. Una de las
        firmas del catálogo masculino de Maysoon, especialmente demandada
        por hombres con asimetrías o falta de definición en la pierna.
      </p>
    </div>
  );
}

