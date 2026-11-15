import "./nuevo/bienestar.css";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Activity,
  Footprints,
  Brain,
  Star,
  Droplet,
  Bandage,
  Hand,
  Wind,
  Dumbbell,
  Flame,
  LucideIcon,
} from "lucide-react";
import { ZonaNav } from "./ZonaNav";
import { BulletListBlock } from "./BulletListBlock";
import { HighlightCallout } from "./HighlightCallout";
import { ConsultaBlock } from "./ConsultaBlock";

const categorias = [
  { id: "esteticos", label: "Estéticos" },
  { id: "relajantes", label: "Relajantes" },
  { id: "terapeuticos", label: "Terapéuticos" },
];

type MasajeData = {
  name: string;
  duration: string;
  price?: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
};

const esteticos: MasajeData[] = [
  {
    name: "Reafirmante",
    duration: "30 min · 50 min",
    price: "25 € / 40 €",
    description:
      "Activa la elastina con cremas reafirmantes, rehidrata y mejora la calidad de la piel. Ideal combinado con mesoterapia.",
    icon: Sparkles,
  },
  {
    name: "Anticelulítico",
    duration: "30 min · 50 min",
    price: "25 € / 40 €",
    description:
      "Masaje vigoroso que rompe y desencapsula nódulos adiposos. Combinado con mesoterapia o Alidya® para resultados óptimos.",
    icon: Activity,
  },
  {
    name: "KOBIDO",
    duration: "30 min · 45 min",
    price: "30 € / 45 €",
    description:
      "Ancestral ritual japonés conocido como 'lifting facial natural'. Manipulación profunda con aceite Tsubaki.",
    icon: Star,
    highlight: true,
  },
];

const relajantes: MasajeData[] = [
  {
    name: "Templado",
    duration: "Piedras calientes",
    description: "Sesión con piedras volcánicas calientes que desbloquean tensiones profundas con calor envolvente.",
    icon: Flame,
  },
  {
    name: "Relajante",
    duration: "Clásico",
    description: "Maniobras suaves y constantes, aceites cálidos y ambiente íntimo. El masaje de cabecera para desconectar.",
    icon: Heart,
  },
  {
    name: "Pies",
    duration: "Reflexología relax",
    description: "Masaje específico de pies y tobillos. Alivia carga, mejora circulación y produce sensación de ligereza global.",
    icon: Footprints,
  },
  {
    name: "Cráneo-facial",
    duration: "Cara y cabeza",
    description: "Trabajo suave en cuero cabelludo, sienes y rostro. Ideal para insomnio, fatiga ocular y estrés acumulado.",
    icon: Brain,
  },
  {
    name: "Californiano",
    duration: "Anti-estrés",
    description: "Maniobras largas y envolventes características del anti-estrés californiano. Reconecta cuerpo y mente.",
    icon: Sparkles,
  },
  {
    name: "Aromático",
    duration: "Aceites esenciales",
    description: "Aceites esenciales seleccionados según tu necesidad. La aromaterapia potencia el efecto del masaje.",
    icon: Droplet,
  },
];

const terapeuticos: MasajeData[] = [
  {
    name: "Vendajes Neurotape",
    duration: "Kinesiotaping",
    description: "Vendaje neuromuscular elástico que estabiliza la articulación sin limitar movimiento. Útil en lesiones deportivas.",
    icon: Bandage,
  },
  {
    name: "Reflexología Podal",
    duration: "Terapia refleja",
    description: "Estimulación de zonas reflejas del pie que se corresponden con órganos y sistemas del cuerpo.",
    icon: Footprints,
  },
  {
    name: "Drenaje Linfático Manual",
    duration: "Sistema linfático",
    description: "Estimulación suave del sistema linfático. Reduce edemas, mejora retorno venoso y depura el organismo.",
    icon: Droplet,
  },
  {
    name: "Descontracturante",
    duration: "Contracturas",
    description: "Trabajo profundo y focalizado sobre contracturas musculares de cuello, espalda, hombros y zona lumbar.",
    icon: Hand,
  },
  {
    name: "Deportivo",
    duration: "Deportistas",
    description: "Para deportistas en pre o post entreno. Mejora rendimiento, previene lesiones y acelera la recuperación.",
    icon: Dumbbell,
  },
  {
    name: "Circulatorio",
    duration: "Retorno venoso",
    description: "Estimulación del retorno venoso para piernas pesadas, mala circulación o sensación de hinchazón frecuente.",
    icon: Wind,
  },
];

export function MasajesSection() {
  return (
    <section className="bi">
      {/* ── Categoria nav (hija directa de la sección: así se queda pegada) ── */}
      <ZonaNav zonas={categorias} />

      <div className="marco">
        {/* ── Intro general ── */}
        <p className="bi__lead" data-ap>
          Profesionales titulados altamente cualificados y productos de la
          más alta calidad. Tres familias de masajes para que encuentres el
          tuyo.
        </p>

        {/* ── Galería: cabina + masajista + ritual, a la misma altura ── */}
        <div className="bi__gal">
          <div className="bi__foto bi__foto--cabina listones" data-lis>
            <Image
              src="/images/masajes/cabina-masajes.jpg"
              alt="Cabina de masajes Maysoon — ambiente íntimo y cálido"
              fill
              sizes="(min-width: 768px) 40vw, 92vw"
            />
          </div>
          <div className="bi__foto bi__foto--retrato listones" data-lis>
            <Image
              src="/images/masajes/ricardo-masajista.jpg"
              alt="Ricardo, masajista titulado de Maysoon, preparando los útiles de sesión"
              fill
              sizes="(min-width: 768px) 18vw, 30vw"
            />
          </div>
          <div className="bi__foto bi__foto--cuenco listones" data-lis>
            <Image
              src="/images/masajes/cuenco-tibetano.jpg"
              alt="Cuenco tibetano sobre superficie de mármol — detalle del ritual de relajación"
              fill
              sizes="(min-width: 768px) 40vw, 62vw"
            />
          </div>
        </div>

        {/* ── El ritual ── */}
        <div className="bi__ritual">
          <div className="bi__ritual-izq">
            <div className="bi__ritual-cab" data-ap>
              <span className="pildora pildora--arena">El Ritual</span>
              <span className="bi__idx" aria-hidden="true">
                03
              </span>
            </div>
            <h2 className="tit tit--l bi__ritual-tit" data-tit>
              Cabina íntima, <br />
              <em>manos tituladas</em>
            </h2>
          </div>

          <p className="cuerpo bi__ritual-p" data-ap>
            Cada sesión transcurre en una cabina diseñada para el silencio —
            iluminación cálida, aromas medidos, materiales nobles. Ricardo, nuestro
            masajista titulado, prepara cada protocolo con los útiles adecuados:
            cuencos tibetanos, rodillos de bambú, piedras volcánicas o aceites
            esenciales según lo que tu cuerpo pide hoy.
          </p>
        </div>

        {/* ═════════ ESTÉTICOS ═════════ */}
        <CategoryHeader
          id="esteticos"
          eyebrow="Categoría · Estéticos"
          title="Apoyo a tus Tratamientos"
          enfasis="Tratamientos"
          description="Abordan directamente celulitis y flacidez. Son el complemento ideal de los tratamientos médicos: aceleran y potencian su efectividad."
        />

        <MasajesGrid masajes={esteticos} />

        {/* KOBIDO featured */}
        <HighlightCallout
          eyebrow="KOBIDO · El detalle"
          text="Lifting facial sin cirugía. Tonifica musculatura facial, atenúa líneas de expresión, ojeras y bolsas, mejora la luminosidad y reduce migrañas y bruxismo."
          icon="star"
        />

        <BulletListBlock
          eyebrow="KOBIDO · Contraindicaciones"
          title="Cuándo no aplicarlo"
          items={[
            "Inflamaciones o infecciones en piel de la zona",
            "Flemones",
            "Heridas abiertas, irritaciones o dermatitis",
            "Procesos neoplásicos",
            "Pacientes con hilos tensores faciales de menos de 4 meses",
          ]}
          style="warning"
          columns={2}
        />

        {/* ═════════ RELAJANTES ═════════ */}
        <CategoryHeader
          id="relajantes"
          eyebrow="Categoría · Relajantes"
          title="Combatir el Estrés y la Ansiedad"
          enfasis="y la Ansiedad"
          description="El estrés aumenta la producción de radicales libres, acelera el envejecimiento cutáneo, debilita el sistema inmune y provoca arrugas, deshidratación y pérdida de elasticidad."
        />

        <PriceBanner
          text="Todos los masajes relajantes"
          price="30 min · 25 € · 50 min · 40 €"
        />

        <MasajesGrid masajes={relajantes} />

        {/* ═════════ TERAPÉUTICOS ═════════ */}
        <CategoryHeader
          id="terapeuticos"
          eyebrow="Categoría · Terapéuticos"
          title="Atacar la Causa, no la Consecuencia"
          enfasis="no la Consecuencia"
          description="Abordaje alternativo o complementario a la medicación para patologías musculares, dolores, contracturas y problemas circulatorios. Acortan el tratamiento farmacológico y reducen dosis."
        />

        <PriceBanner
          text="Todos los masajes terapéuticos"
          price="30 min · 25 € · 50 min · 40 €"
        />

        <MasajesGrid masajes={terapeuticos} />

        {/* ═════════ CONTRAINDICACIONES GENERALES ═════════ */}
        <ContraindicationsBlock />

        <ConsultaBlock
          title="¿Qué masaje necesita tu cuerpo hoy?"
          description="Reservamos una valoración rápida para recomendar el masaje (o combinación) que mejor se adapta a ti."
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────
   Sub-componentes
   ───────────────────────────────────────────────── */

// Marca de tres listones (sustituye a los puntos y brillos decorativos).
function Marca() {
  return (
    <span className="bi__marca" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

// El final del título (enfasis) va en cursiva serif; el texto no cambia.
function CategoryHeader({
  id,
  eyebrow,
  title,
  enfasis,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  enfasis: string;
  description: string;
}) {
  const corte = title.endsWith(enfasis)
    ? title.length - enfasis.length
    : title.length;
  return (
    <div id={id} className="bi__cat">
      <div className="bi__cat-izq">
        <span className="pildora pildora--arena" data-ap>
          {eyebrow}
        </span>
        <h2 className="tit tit--l bi__cat-tit" data-tit>
          {title.slice(0, corte)}
          <em>{title.slice(corte)}</em>
        </h2>
      </div>
      <p className="cuerpo bi__cat-desc" data-ap>
        {description}
      </p>
    </div>
  );
}

function PriceBanner({ text, price }: { text: string; price: string }) {
  return (
    <div className="bi__tarifa" data-ap>
      <span className="bi__tarifa-txt">
        <Marca />
        {text}
      </span>
      <span className="serif bi__precio">{price}</span>
    </div>
  );
}

function MasajesGrid({ masajes }: { masajes: MasajeData[] }) {
  const conTarifa = masajes.some((m) => m.price);
  return (
    <ul className={conTarifa ? "bi__lista bi__lista--tarifa" : "bi__lista"}>
      {masajes.map((m, k) => (
        <MasajeCard key={m.name} indice={k + 1} {...m} />
      ))}
    </ul>
  );
}

function MasajeCard({
  name,
  duration,
  price,
  description,
  icon: Icon,
  highlight,
  indice,
}: MasajeData & { indice: number }) {
  return (
    <li className="bi__fila" data-ap>
      <span className="bi__num" aria-hidden="true">
        <span>{String(indice).padStart(2, "0")}</span>
      </span>
      <div>
        <h4 className="bi__nombre">
          {name}
          {highlight && <Marca />}
        </h4>
        <p className="bi__meta">
          <Icon strokeWidth={1.5} aria-hidden="true" />
          {duration}
        </p>
      </div>
      <p className="bi__desc">{description}</p>
      {price && (
        <div className="bi__coste">
          <span className="bi__micro">Tarifa</span>
          <span className="serif bi__precio">{price}</span>
        </div>
      )}
    </li>
  );
}

function ContraindicationsBlock() {
  return (
    <div className="bi__contra" data-ap>
      <span className="pildora">Información médica</span>
      <h3 className="tit tit--m bi__contra-tit">
        Contraindicaciones generales
      </h3>
      <p className="cuerpo bi__contra-intro">
        Por seguridad, antes de cualquier sesión revisamos tu historial. Las
        siguientes condiciones son contraindicaciones absolutas o relativas
        para los masajes.
      </p>

      <div className="bi__contra-red">
        {/* Absolutas */}
        <div>
          <span className="pildora">Absolutas · No se realiza</span>
          <ul className="bi__puntos">
            {[
              "Tumores",
              "Riesgo de hemorragia",
              "Fragilidad capilar en edad avanzada",
              "Cardiopatías severas descompensadas",
              "Enfermedades infecciosas",
              "Heridas graves y traumatismos agudos",
              "Trombosis, flebitis o tromboflebitis",
              "Varices tortuosas o con relieve",
              "Reacciones alérgicas agudas",
              "Patología renal descompensada",
              "Quemaduras en zona de tratamiento",
              "Bursitis en zona",
              "Roturas musculares o tendinosas",
              "Micosis en zona",
            ].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Relativas */}
        <div>
          <span className="pildora">Relativas · Precaución</span>
          <ul className="bi__puntos bi__puntos--rel">
            {[
              "Fracturas y luxaciones (no masajear con inflamación)",
              "Embarazo (desaconsejado en los primeros 3 meses)",
              "Cólicos hepáticos o biliares (esperar alta médica)",
              "Hipertensión (consultar si hay mareos o vómitos)",
              "Hipotensión (precaución en relajantes)",
              "Irritación dérmica en la zona",
              "Enfermedades reumáticas en fase aguda",
            ].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="bi__nota">
        Si tienes alguna duda sobre tu caso particular, escríbenos por
        WhatsApp antes de reservar. Nuestro masajista terapeuta valorará si
        el masaje es adecuado para ti.
      </p>
    </div>
  );
}
