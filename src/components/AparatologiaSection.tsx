import "./nuevo/areas-interiores.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TreatmentRow } from "./TreatmentRow";
import { ConsultaBlock } from "./ConsultaBlock";

const equipos = [
  {
    title: "Láser Diodo 810 nm · HS-810",
    description:
      "Equipo de depilación médica de alta potencia (1600 W) con dos aplicadores simultáneos. Tecnología que respeta todos los fototipos y permite tratamientos rápidos y eficaces.",
    details: [
      "Potencia: 1600 W · longitud de onda 810 nm",
      "Apto para todos los tipos de piel",
      "Dos aplicadores simultáneos · sesiones más cortas",
      "Sistema de refrigeración para máximo confort",
    ],
  },
  {
    title: "Ultraformer III · HIFU",
    description:
      "Ultrasonido focalizado de alta intensidad que actúa en profundidad para tensar la piel y estimular colágeno. Efecto lifting sin cirugía en rostro, cuello y cuerpo.",
    details: [
      "Lifting facial y de cuello sin cirugía",
      "Redefine el óvalo y reduce la papada",
      "Reafirmación corporal",
      "Sin tiempo de recuperación",
    ],
  },
  {
    title: "EMSlim · Tonificación Muscular",
    description:
      "Estimulación electromagnética de alta intensidad que genera contracciones musculares intensas para tonificar y ayudar a reducir grasa localizada.",
    details: [
      "Abdomen, glúteos, brazos y piernas",
      "Tonifica y define el músculo",
      "Sesiones cómodas, sin agujas",
      "Sin tiempo de recuperación",
    ],
  },
  {
    title: "PLASMAGE · Plasma",
    description:
      "Tecnología de plasma que retrae la piel con gran precisión, sin cortes. Indicada para párpados caídos, arrugas finas y lesiones cutáneas como verrugas o lunares.",
    details: [
      "Blefaroplastia sin cirugía",
      "Arrugas finas y flacidez localizada",
      "Eliminación de verrugas y pequeñas lesiones",
    ],
    href: "/tratamientos/blefaroplastia-plasmage",
  },
  {
    title: "ENDOLÁSER · Liften Dual",
    description:
      "Láser de fibra óptica que se introduce bajo la piel para retensar tejidos y reducir grasa localizada sin cirugía. Es la base del endolifting facial y de muchos tratamientos corporales.",
    details: [
      "Endolifting facial y reducción de papada",
      "Grasa localizada: abdomen, flancos, cartucheras",
      "Flacidez de brazos",
      "Bolsas de ojeras",
    ],
    href: "/medicina-estetica/corporal#endolaser-fox-iii",
  },
  {
    title: "Láser Diodo Vascular",
    description:
      "Láser específico para lesiones vasculares: cierra arañas vasculares, puntos rubí y capilares superficiales sin geles ni anestesia.",
    details: [
      "Arañas vasculares en rostro y piernas",
      "Puntos rubí y capilares dilatados",
      "Sin marcas residuales",
    ],
    href: "/tratamientos/laser-vascular",
  },
  {
    title: "Morpheus 8 · Radiofrecuencia con Microagujas",
    description:
      "Radiofrecuencia fraccionada que llega a capas profundas de la piel mediante microagujas. Retensa, remodela y mejora la textura del rostro y el cuerpo.",
    details: [
      "Flacidez facial y corporal",
      "Marcas de acné y textura irregular",
      "Hiperhidrosis axilar",
    ],
    href: "/medicina-estetica#morpheus-8",
  },
  {
    title: "IPL · Luz Pulsada Intensa",
    description:
      "Luz de amplio espectro que elimina manchas y rojeces y unifica el tono de la piel. Fotorrejuvenecimiento de rostro, cuello, escote y manos.",
    details: [
      "Manchas solares y léntigos",
      "Rojeces y cuperosis",
      "Fotorrejuvenecimiento",
    ],
    href: "/tratamientos/luz-pulsada-ipl",
  },
  {
    title: "Láser CO2 Fraccionado",
    description:
      "Láser ablativo de referencia para el resurfacing: renueva la piel en profundidad y estimula colágeno nuevo para tratar arrugas, marcas de acné y textura.",
    details: [
      "Arrugas finas y medias",
      "Marcas y cicatrices de acné",
      "Párpados y ojeras",
    ],
    href: "/tratamientos/laser-co2",
  },
  {
    title: "Láser Q-Switched · Tatuajes",
    description:
      "Láser de pulsos ultracortos que fragmenta el pigmento del tatuaje en partículas diminutas que el organismo elimina poco a poco. También trata manchas pigmentadas.",
    details: [
      "Eliminación de tatuajes",
      "Borrado de micropigmentación antigua",
      "Manchas pigmentadas",
    ],
    href: "/tratamientos/eliminacion-tatuajes",
  },
];

// Aparatología: un panel arena con el texto y las dos fotos de la cabina
// (se abren por listones), la lista de equipos en filas con línea fina, el
// enlace a depilación láser y el cierre. Componente de servidor.
export function AparatologiaSection() {
  return (
    <section className="ai">
      {/* ── La cabina: texto y fotos reales de los equipos ── */}
      <div className="ai__panel-caja">
        <div className="ai__panel">
          <div className="ai__cabina">
            <div className="ai__cabina-txt">
              <span className="pildora" data-ap>
                Nuestra Cabina
              </span>

              {/* Un único h2 con dos líneas visuales */}
              <h2 className="tit tit--l ai__cabina-tit" data-tit>
                Equipos reales, <br />
                <em>resultados verificables</em>
              </h2>

              <p className="cuerpo ai__cabina-p" data-ap>
                Trabajamos con tecnología certificada y mantenimiento profesional.
                Sin equipos genéricos, sin atajos: cada protocolo se ejecuta con
                el aparato adecuado y los parámetros que tu piel necesita.
              </p>
            </div>

            <div className="ai__fotos">
              {/* Principal: plano general de la cabina */}
              <div className="ai__foto ai__foto--1 listones" data-lis>
                <Image
                  src="/images/aparatologia/equipos-cabina.jpg"
                  alt="Equipos de aparatología en la cabina de Maysoon"
                  fill
                  sizes="(max-width: 680px) 82vw, 528px"
                />
              </div>

              {/* Secundaria: detalle del láser, pisando la esquina */}
              <div className="ai__foto-2">
                <div className="ai__foto ai__foto--2 listones" data-lis>
                  <Image
                    src="/images/aparatologia/laser-celvyn.jpg"
                    alt="Equipo láser Celvyn — detalle del sistema en cabina"
                    fill
                    sizes="(max-width: 680px) 48vw, 312px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marco">
        <div className="ai__cap ai__cap--lista">
          <div className="ai__margen" aria-hidden="true">
            <span className="ai__lis3">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="ai__cap-cont">
            <div className="ai__filas">
              {equipos.map((t, i) => (
                <TreatmentRow key={t.title} index={i} {...t} />
              ))}
            </div>

            {/* Cross-link a Depilación Láser */}
            <div className="ai__enlace-caja" data-ap>
              <Link href="/depilacion-laser" className="ai__enlace">
                <span className="ai__enlace-txt">
                  <span className="pildora pildora--arena">Página dedicada</span>
                  <span className="ai__enlace-tit">
                    Depilación Láser HS-810 · Tarifas y combos completos
                  </span>
                </span>
                <span className="ai__enlace-ico">
                  <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <ConsultaBlock
          title="Más equipos avanzados bajo consulta"
          description="Disponemos de protocolos combinados con tecnologías de remodelación, rejuvenecimiento y tratamiento corporal. Cada caso se valora individualmente para diseñar el plan más adecuado."
        />
      </div>
    </section>
  );
}

