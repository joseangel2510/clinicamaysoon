import "./nuevo/confianza.css";
import { Award, Zap, Droplet, Sparkles, Activity } from "lucide-react";
import { ZonaNav } from "./ZonaNav";
import { ZonaBlock } from "./ZonaBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const zonasNav = [
  { id: "zona-cuello", label: "Cuello" },
  { id: "zona-brazo", label: "Axilas / Brazo" },
  { id: "zona-escote", label: "Escote" },
  { id: "zona-abdomen", label: "Abdomen" },
  { id: "zona-flancos", label: "Flancos" },
  { id: "zona-gluteos", label: "Glúteos" },
  { id: "zona-manos", label: "Manos" },
  { id: "zona-intima", label: "Zona Íntima" },
  { id: "zona-piernas", label: "Piernas" },
];

export function MedicinaCorporalSection() {
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
          description="Combinamos láser, hilos y bioestimulación para reafirmar el cuello, una de las zonas que más delata el paso del tiempo."
          treatments={[
            "Reducción de papada (ENDOLÁSER Liften Dual)",
            "Estimulador de colágeno (bioestimuladores)",
            "Hilos tensores",
            "PLASMAGE para lunares y verrugas",
            "Morpheus 8",
          ]}
          image="/images/sections/closeup-cuello.webp"
          imageAlt="Cuello y mandíbula — Maysoon"
          imageSide="right"
        />

        {/* ── 02 · AXILAS / BRAZO ── */}
        <ZonaBlock
          id="zona-brazo"
          index={1}
          eyebrow="Zona Axilas y Brazo"
          title="Reafirmación y Bienestar"
          description="Tratamos la flacidez del brazo, la sudoración excesiva y la pigmentación de la zona axilar con tecnología y técnicas inyectables."
          treatments={[
            "ENDOLÁSER Brazos (Liften Dual)",
            "Mesoterapia Corporal",
            "Reducción de sudoración / Hiperhidrosis",
            "Blanqueamiento con peeling médico",
            "BodyTite — remodelación corporal avanzada",
            "Eliminación de tatuajes con láser",
            "Sueroterapia — recuperación de vitalidad",
          ]}
          image="/images/sections/closeup-brazo.webp"
          imageAlt="Brazo y hombro — Maysoon"
          imageSide="left"
        />

        {/* ── 03 · ESCOTE ── */}
        <ZonaBlock
          id="zona-escote"
          index={2}
          eyebrow="Zona Escote"
          title="Luminosidad y Firmeza"
          description="Una zona delicada que se beneficia de tratamientos suaves pero efectivos. Devolvemos uniformidad, firmeza y luz."
          treatments={[
            "Plasma Rico en Plaquetas (PRP)",
            "Elevación de pechos con hilos tensores",
            "Eliminación de manchas con IPL (Luz Pulsada Intensa)",
            "Arañas vasculares con Láser Vascular",
            "Estimulador de colágeno (bioestimuladores)",
          ]}
          image="/images/sections/closeup-escote.webp"
          imageAlt="Escote y clavícula — Maysoon"
          imageSide="right"
        />

        {/* ── 04 · ABDOMEN ── */}
        <ZonaBlock
          id="zona-abdomen"
          index={3}
          eyebrow="Zona Abdomen"
          title="Tratamiento Integral"
          description="La zona más completa: combinamos tecnologías inyectables, láser y radiofrecuencia para tratar grasa localizada y flacidez en una misma sesión."
          treatments={[
            "Rellenos Corporales",
            "Mesoterapia Corporal",
            "ENDOLÁSER (Liften Dual)",
            "Intralipoterapia — eliminación de grasa localizada",
            "Hilos tensores",
            "Morpheus 8",
            "BodyTite",
          ]}
          image="/images/sections/closeup-abdomen.webp"
          imageAlt="Abdomen — Maysoon"
          imageSide="left"
        />

        {/* ── 05 · FLANCOS ── */}
        <ZonaBlock
          id="zona-flancos"
          index={4}
          eyebrow="Zona Flancos"
          title="Adiós a los Michelines"
          description="Tratamientos focalizados en el contorno de la cintura para reducir grasa localizada con resultados visibles desde la primera sesión."
          treatments={[
            "Grasa localizada con ENDOLÁSER (Liften Dual)",
            "Mesoterapia Corporal",
            "Intralipoterapia con Adipozon",
            "BodyTite",
          ]}
          image="/images/sections/closeup-flancos.webp"
          imageAlt="Cintura y flancos — Maysoon"
          imageSide="right"
        />

        {/* ── 06 · GLÚTEOS ── */}
        <ZonaBlock
          id="zona-gluteos"
          index={5}
          eyebrow="Zona Glúteos"
          title="Volumen y Elevación"
          description="Recuperamos firmeza y proyección sin cirugía: rellenos para volumen, hilos para elevación y tecnologías para tratar cartucheras y celulitis."
          treatments={[
            "Relleno corporal",
            "Tratamiento cartucheras con ENDOLÁSER (Liften Dual)",
            "Mesoterapia Corporal",
            "Intralipoterapia con Adipozon",
            "BodyTite",
          ]}
          image="/images/sections/closeup-gluteos.webp"
          imageAlt="Espalda baja y glúteos — Maysoon"
          imageSide="left"
        />

        {/* ── 07 · MANOS ── */}
        <ZonaBlock
          id="zona-manos"
          index={6}
          eyebrow="Zona Manos"
          title="Rejuvenecimiento Visible"
          description="Las manos son la otra carta de presentación. Eliminamos manchas y devolvemos volumen al dorso para una imagen más joven."
          treatments={[
            "Eliminación de manchas con IPL",
            "Rejuvenecimiento de manos con ácido hialurónico",
            "Estimulador de colágeno (bioestimuladores)",
          ]}
          image="/images/sections/closeup-manos.webp"
          imageAlt="Manos elegantes — Maysoon"
          imageSide="right"
        />

        {/* ── 08 · ZONA ÍNTIMA ── */}
        <ZonaBlock
          id="zona-intima"
          index={7}
          eyebrow="Zona Íntima"
          title="Cuidado Discreto"
          description="Tratamientos íntimos con la máxima discreción y técnica. Espacio reservado, valoración personalizada y máximo respeto."
          treatments={[
            "Aumento de labios mayores",
            "Eliminación de verrugas con PLASMAGE",
          ]}
          image="/images/sections/closeup-intima.webp"
          imageAlt="Detalle estético — Maysoon"
          imageSide="left"
        />

        {/* ── 09 · PIERNAS ── */}
        <ZonaBlock
          id="zona-piernas"
          index={8}
          eyebrow="Zona Piernas"
          title="Vasos y Celulitis"
          description="Tratamiento médico de varices, arañas vasculares y celulitis. Resultados estéticos y funcionales con técnicas seguras."
          treatments={[
            "Esclerosis de varices",
            "Tratamiento de celulitis",
            "Arañas vasculares con láser vascular",
          ]}
          image="/images/sections/closeup-piernas.webp"
          imageAlt="Piernas — Maysoon"
          imageSide="right"
        />

        {/* ── DESTACADOS: Tecnologías clave ── */}
        <DestacadosCorporales />

        <ConsultaBlock
          title="¿Quieres un protocolo corporal a medida?"
          description="Cada cuerpo necesita una combinación distinta. Reservamos una primera valoración para diseñar el plan que mejor se ajusta a ti."
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
   DestacadosCorporales — 4 tarjetas en 2 columnas + ENDOLÁSER a todo el ancho
   ───────────────────────────────────────────────── */

function DestacadosCorporales() {
  return (
    <div className="co__des">
      {/* Header */}
      <div className="co__des-cab">
        <span className="pildora pildora--arena" data-ap>
          Tecnologías Destacadas
        </span>
        <h3 className="tit tit--m" data-tit>
          Las Herramientas <em>de Nuestros Resultados</em>
        </h3>
      </div>

      {/* 2x2 grid of featured */}
      <div className="co__des-red">
        <FeaturedCard
          icon={Award}
          badge="Aprobado por la FDA"
          title="Morpheus 8 · Aplicación Corporal"
          description="Mínimamente invasiva, con resultados desde la primera sesión. Trata flacidez de brazos (alas de murciélago), abdomen (michelines), cartucheras, glúteos (celulitis + firmeza), muslos (doble pliegue), hiperhidrosis y estrías."
          extras={[
            "Brazos · abdomen · cartucheras · glúteos · muslos",
            "También: hiperhidrosis y estrías",
          ]}
        />

        <FeaturedCard
          icon={Sparkles}
          badge="Remodelación corporal"
          title="BodyTite"
          description="Tratamiento avanzado de remodelación corporal pensado para maximizar resultados físicos. Combina tensado de la piel y eliminación de grasa en una sola sesión."
          extras={[
            "Brazos, abdomen, flancos y glúteos",
            "Resultados visibles a corto plazo",
          ]}
        />

        <FeaturedCard
          icon={Droplet}
          badge="Sin cirugía"
          title="Intralipoterapia · Adipozon"
          description="Tratamiento inyectable para eliminar grasa localizada sin pasar por quirófano. Aplicación rápida y precisa sobre la zona a tratar."
          extras={[
            "Indicado en abdomen, flancos y glúteos",
            "Sesiones espaciadas según protocolo personalizado",
          ]}
        />

        <FeaturedCard
          icon={Activity}
          badge="Bienestar integral"
          title="Sueroterapia"
          description="Tratamiento intravenoso pensado para recuperar vitalidad, energía y bienestar. Cocktail personalizado de vitaminas y aminoácidos según tu estado."
          extras={[
            "Impulso de energía y recuperación",
            "Combinación personalizada por sesión",
          ]}
        />
      </div>

      {/* ENDOLÁSER Liften Dual - full width feature */}
      <div id="endolaser-fox-iii" className="co__fr" data-ap>
        <div className="co__fr-cab">
          <div className="co__fr-marca">
            <span className="co__ico co__ico--arena">
              <Zap size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="pildora pildora--arena">Tecnología transversal</span>
          </div>
          <h4 className="co__fr-tit">ENDOLÁSER Liften Dual</h4>
        </div>

        <div>
          <p className="co__fr-desc">
            La tecnología láser que está detrás de muchos de nuestros
            tratamientos: reducción de papada, eliminación de grasa en
            brazos, abdomen, flancos y cartucheras, eliminación de bolsas en
            ojeras y endolifting facial.
          </p>
          <ul className="co__filas co__filas--2">
            {[
              "Papada y cuello",
              "Brazos y axilas",
              "Abdomen y flancos",
              "Cartucheras y glúteos",
              "Bolsas de ojeras",
              "Endolifting facial",
            ].map((u) => (
              <li key={u} className="co__fila">
                <Listones />
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   FeaturedCard — tarjeta arena con icono + píldora
   ───────────────────────────────────────────────── */

function FeaturedCard({
  icon: Icon,
  badge,
  title,
  description,
  extras = [],
}: {
  icon: typeof Award;
  badge: string;
  title: string;
  description: string;
  extras?: string[];
}) {
  return (
    <div className="co__tec" data-ap>
      <div className="co__tec-cab">
        <span className="co__ico">
          <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="pildora">{badge}</span>
      </div>
      <h4 className="co__tec-tit">{title}</h4>
      <p className="co__tec-desc">{description}</p>
      {extras.length > 0 && (
        <ul className="co__filas">
          {extras.map((e) => (
            <li key={e} className="co__fila">
              <Listones />
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

