import "./nuevo/areas-interiores.css";
import type { ReactNode } from "react";
import { ZonaNav } from "./ZonaNav";
import { PricingTable } from "./PricingTable";
import { BulletListBlock } from "./BulletListBlock";
import { InfoBlock } from "./InfoBlock";
import { HighlightCallout } from "./HighlightCallout";
import { StatsCard } from "./StatsCard";
import { ComparisonBlock } from "./ComparisonBlock";
import { ConsultaBlock } from "./ConsultaBlock";

const tecnicas = [
  { id: "estudio", label: "Estudio Capilar" },
  { id: "trasplante", label: "Trasplante FUE" },
  { id: "trichotest", label: "Trichotest" },
  { id: "prp", label: "PRP Capilar" },
  { id: "mesoterapia", label: "Mesoterapia" },
];

// Unidad Capilar: raíl de técnicas pegado arriba, el lema del centro y cinco
// capítulos numerados. En escritorio la cabecera de cada capítulo se queda
// fija a la izquierda mientras se lee su contenido. Componente de servidor.
export function UnidadCapilarSection() {
  return (
    <section className="ai ai--nav">
      {/* ── Tech nav ── (hija directa de la sección: así se queda pegada) */}
      <ZonaNav zonas={tecnicas} />

      <div className="marco">
        {/* ── Intro institucional ── */}
        <div className="ai__lema">
          <p className="serif ai__lema-cita" data-ap>
            &ldquo;Uno de los pocos centros nacionales de referencia que reúne
            <span> todas </span>
            las técnicas médicas capilares.&rdquo;
          </p>
          <div className="ai__lema-nota" data-ap>
            <span className="ai__lis3" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="cuerpo">
              Pioneros en la Comunidad Valenciana desde hace más de 4 años.
            </p>
          </div>
        </div>

        {/* ═════════ 01 · ESTUDIO CAPILAR ═════════ */}
        <Technique
          id="estudio"
          number="01"
          eyebrow="Punto de partida"
          title="Estudio Capilar Personalizado"
          aside={
            <div className="ai__gratis" data-ap>
              <span className="ai__gratis-sello">100 % Gratuito</span>
              <span className="ai__gratis-pto">·</span>
              <span className="ai__gratis-txt">
                Diagnóstico capilar sin coste
              </span>
            </div>
          }
        >

        <InfoBlock
          title="Tu primer paso"
          paragraphs={[
            "Análisis del cabello y de sus necesidades reales. Asesoramiento con una rutina capilar personalizada y los tratamientos adecuados a tu caso.",
            "Incluye revisión y atención continua para asegurar que se cumplen los objetivos marcados.",
          ]}
        />

        <BulletListBlock
          eyebrow="Cuándo hacerse uno"
          title="Síntomas que justifican un análisis"
          items={[
            "Pérdida de cabello",
            "Picores o molestias",
            "Grasa en cuero cabelludo",
            "Poco volumen o densidad",
            "Descamación del cuero cabelludo",
            "Granos o rojeces",
            "Dolor u otras molestias",
          ]}
          columns={2}
        />

        {/* Tabla comparativa de técnicas de implantología */}
        <ComparisonBlock
          eyebrow="Comparativa técnica"
          title="Métodos de implantología capilar"
          intro="Tres técnicas históricas con perfiles muy distintos. En Maysoon trabajamos con la técnica FUE — la opción más equilibrada para la mayoría de pacientes."
          competitors={["FUE · Maysoon", "FUT", "ARTAS"]}
          rows={[
            {
              feature: "Método",
              values: ["Extracción individual", "Tira de cuero cabelludo", "Robot de alta precisión"],
            },
            {
              feature: "Unidades por sesión",
              values: ["Hasta 4.000", "Hasta 4.000", "Hasta 2.500"],
            },
            {
              feature: "Cicatriz",
              values: ["Puntiformes casi imperceptibles", "Cicatriz lineal visible", "Apenas deja cicatriz"],
            },
            {
              feature: "Rasurado",
              values: ["Requerido", "Requerido", "Requerido"],
            },
            {
              feature: "Limitado por zona donante",
              values: [true, true, true],
            },
          ]}
        />

        </Technique>

        {/* ═════════ 02 · TRASPLANTE FUE ═════════ */}
        <Technique
          id="trasplante"
          number="02"
          eyebrow="Solución definitiva"
          title="Trasplante Capilar FUE"
        >
        <div className="ai__tarifa">
        <PricingTable
          title="Tarifas planas · sin límite de unidades foliculares"
          intro="Todas las tarifas incluyen: técnica de Zafiro o implanters según caso, diagnóstico previo, 1 sesión de PRP enriquecido, controles y seguimiento durante 1 año, y prescripción de tratamiento de mantenimiento personalizado."
          rows={[
            { label: "Trasplante de barba", detail: "FUE", price: "1.200 €" },
            { label: "Entradas o avance línea frontal", price: "2.000 €" },
            { label: "Coronilla simple", price: "2.000 €" },
            { label: "Mitad anterior o posterior", price: "2.500 €" },
            { label: "Trasplante completo", price: "3.000 €" },
          ]}
        />
        </div>

        <InfoBlock
          eyebrow="Nuestra técnica"
          title="FUE Clásica"
          paragraphs={[
            "Extracción individual de los folículos uno a uno desde la zona donante (nuca y región occipital), implantación en la zona receptora.",
            "Sin puntos de sutura ni cicatrices visibles. Trabajamos con folículos de 1 a 4 pelos según la densidad necesaria en cada zona del cuero cabelludo.",
          ]}
        />

        <BulletListBlock
          eyebrow="Pacientes idóneos"
          title="Cuándo el trasplante FUE es la opción"
          items={[
            "Alopecias cicatriciales delimitadas",
            "Zonas donantes con alta o media densidad",
            "Pérdida de cabello estabilizada",
            "Mejora de trasplantes previos",
            "Look de pelo corto",
          ]}
          columns={2}
        />

        <HighlightCallout
          eyebrow="Por qué Maysoon (no Turquía)"
          text="Diagnóstico previo correcto, Trichotest genético para una efectividad del 99 % y seguimiento post-tratamiento que asegura el resultado. Tarifa plana competitiva."
          icon="star"
        />

        <BulletListBlock
          eyebrow="Procedimiento general"
          title="Lo que debes saber"
          items={[
            "Ambulatorio — sin ingreso ni baja prolongada",
            "Indoloro con anestesia local",
            "Resultados visibles a los 3 meses",
            "Resultado óptimo entre 9 y 12 meses",
          ]}
          style="plus"
        />

        </Technique>

        {/* ═════════ 03 · TRICHOTEST ═════════ */}
        <Technique
          id="trichotest"
          number="03"
          eyebrow="Test genético"
          title="Trichotest Capilar"
        >
        <div className="ai__tarifa">
        <PricingTable
          title="Tarifa"
          intro="Incluye realización del test, informe completo y pauta de tratamiento domiciliario."
          rows={[{ label: "Trichotest · genético capilar", price: "250 €" }]}
        />
        </div>

        <InfoBlock
          title="ADN al servicio de tu cabello"
          paragraphs={[
            "Test genético que analiza 48 variables genéticas de 13 genes implicados en la alopecia. Muestra simple de saliva — sin pinchazos ni sangre.",
            "Indica qué activos son altamente efectivos para tu caso y cuáles no harán efecto. Permite personalizar los tratamientos al 100 %.",
            "Los activos recomendados se pueden formular para administración oral, tópica (lociones) o infiltrada (mesoterapia o PRP).",
          ]}
        />

        <StatsCard
          eyebrow="Datos del test"
          title="Lo que mide y lo que entrega"
          stats={[
            { value: "48", label: "Variables genéticas", detail: "analizadas" },
            { value: "13", label: "Genes", detail: "implicados en alopecia" },
            { value: "3 sem.", label: "Resultados", detail: "informe completo" },
            { value: "99 %", label: "Efectividad", detail: "junto a PRP / mesoterapia" },
          ]}
          variant="dark"
        />

        <BulletListBlock
          eyebrow="Cuándo es imprescindible"
          title="Indicaciones del Trichotest"
          items={[
            "Imprescindible en trasplante capilar — optimiza supervivencia de folículos",
            "Aconsejable en mesoterapia capilar",
            "Aconsejable en tratamientos orales y tópicos",
            "Útil de forma preventiva en estadios iniciales de la alopecia",
          ]}
          style="plus"
        />

        </Technique>

        {/* ═════════ 04 · PRP CAPILAR ═════════ */}
        <Technique
          id="prp"
          number="04"
          eyebrow="Bioestimulación"
          title="PRP · Plasma Rico en Plaquetas"
        >
        <div className="ai__tarifa">
        <PricingTable
          title="Tarifas · Pauta recomendada"
          intro="Pauta inicial: 3 sesiones espaciadas un mes. Después, mantenimiento personalizado."
          rows={[
            { label: "Sesión suelta", price: "100 €" },
            { label: "Pack 3 sesiones", price: "285 €" },
            {
              label: "Pack 6 sesiones",
              detail: "incluye fototerapia LED",
              price: "540 €",
            },
            {
              label: "Pack 10 sesiones",
              detail: "incluye fototerapia LED",
              price: "800 €",
            },
          ]}
          footnote="Trichotest aparte. Resultados 100 % efectivos al combinar PRP con análisis genético."
        />
        </div>

        <InfoBlock
          title="El único que aumenta el número de fibroblastos"
          paragraphs={[
            "Único tratamiento capilar capaz de aumentar el número de fibroblastos — no solo de estimular los existentes. Alta concentración de factores de crecimiento que generan colágeno nuevo, neovascularización y elastina.",
            "Desde la primera sesión se nota una disminución de la pérdida capilar. Al segundo o tercer mes se aprecia engrosamiento y ganancia capilar por recuperación de folículos miniaturizados.",
            "Técnica rápida y mínimamente molesta.",
          ]}
        />

        </Technique>

        {/* ═════════ 05 · MESOTERAPIA ═════════ */}
        <Technique
          id="mesoterapia"
          number="05"
          eyebrow="Activos directos"
          title="Mesoterapia Capilar"
        >
        <div className="ai__tarifa">
        <PricingTable
          title="Tarifa · Por sesión con bono"
          intro="Precio por sesión al contratar bono. Consulta tarifas para sesiones sueltas."
          rows={[{ label: "Mesoterapia capilar", price: "desde 80 €" }]}
        />
        </div>

        <InfoBlock
          title="Cocktail personalizado en cuero cabelludo"
          paragraphs={[
            "Introducción intradérmica de factores de crecimiento capilar, péptidos biomiméticos, biotina y otros activos que favorecen la regeneración y revitalización capilar.",
            "Frena la caída activa y recupera folículos en miniaturización. La fórmula se personaliza según los resultados del Trichotest.",
            "Agujas finas y cortas, mínimamente molesto con crema anestésica. Varias sesiones consecutivas para alcanzar el resultado óptimo.",
          ]}
        />

        </Technique>

        {/* ═════════ EXTRAS ═════════ */}
        <ExtrasBlock />

        <ConsultaBlock
          title="¿Por dónde empezar?"
          description="Reservamos un diagnóstico capilar gratuito para valorar tu caso y diseñar el protocolo más adecuado. Sin compromiso."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Sub-componentes
   ───────────────────────────────────────────────── */

// Capítulo de una técnica. El id va en el contenedor (no en la cabecera, que
// en escritorio se queda fija): así los enlaces #trasplante, #prp… aterrizan
// siempre al principio del capítulo.
function Technique({
  id,
  number,
  eyebrow,
  title,
  aside,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div id={id} className="ai__cap">
      <div className="ai__cap-cab">
        <div className="ai__cap-meta" data-ap>
          <span className="ai__num">{number}</span>
          <span className="pildora pildora--arena">{eyebrow}</span>
        </div>
        <h2 className="tit tit--m ai__cap-tit" data-tit>
          {title}
        </h2>
        {aside}
      </div>
      <div className="ai__cap-cont">{children}</div>
    </div>
  );
}

function ExtrasBlock() {
  return (
    <div className="ai__cap ai__cap--fin">
      <div className="ai__cap-cab">
        <div className="ai__cap-meta" data-ap>
          <span className="pildora pildora--arena">También disponibles</span>
        </div>
        <h3 className="tit tit--m ai__cap-tit ai__cap-tit--h3" data-tit>
          Para casos no recuperables
        </h3>
      </div>
      <div className="ai__cap-cont">
        <div className="ai__extras">
          <div className="ai__extra" data-ap>
            <span className="ai__lis3 ai__lis3--s" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <h4 className="tit ai__extra-tit">Implante Capilar Biofibre</h4>
            <p className="ai__extra-txt">
              Solución para pacientes que no son candidatos a trasplante FUE.
              Implante de fibras capilares biocompatibles para densidad inmediata.
            </p>
          </div>
          <div className="ai__extra" data-ap>
            <span className="ai__lis3 ai__lis3--s" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <h4 className="tit ai__extra-tit">Tratamientos Orales y Tópicos</h4>
            <p className="ai__extra-txt">
              Pautas farmacológicas y dermocosméticas adaptadas, integradas en el
              protocolo capilar global para potenciar el resultado a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
