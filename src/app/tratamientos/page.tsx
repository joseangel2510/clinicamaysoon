"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { TratamientoCard } from "@/components/TratamientoCard";
import { ConsultaBlock } from "@/components/ConsultaBlock";
import { Footer } from "@/components/Footer";
import "@/components/nuevo/catalogo.css";

const tratamientos = [
  {
    image: "/images/sections/hero-treatment-endopeel.webp",
    category: "Facial · Corporal",
    title: "Lifting Retensor Endopeel",
    description:
      "Lifting sin cirugía con resultados visibles a los 30 minutos. Mejora flacidez, tono muscular y elevación.",
    href: "/tratamientos/lifting-retensor-endopeel",
    priceFrom: "350 €",
  },
  {
    image: "/images/sections/hero-treatment-plasmage.webp",
    category: "Tecnología Plasma",
    title: "Blefaroplastia PLASMAGE",
    description:
      "El cuarto estado de la materia para blefaroplastia, código de barras, plasmalift y lesiones cutáneas.",
    href: "/tratamientos/blefaroplastia-plasmage",
    priceFrom: "700 €",
  },
  {
    image: "/images/sections/closeup-rostro.webp",
    category: "100% Autólogo",
    title: "Plasma-Gel Relleno",
    description:
      "Relleno facial obtenido de tu propia sangre. Sin alergias, 25 % de fijación definitiva.",
    href: "/tratamientos/plasma-gel-relleno",
    priceFrom: "50 €/ml",
  },
  {
    image: "/images/sections/hero-treatment-mesoterapia.webp",
    category: "Inyectable Personalizado",
    title: "Mesoterapia Facial · Corporal · Capilar",
    description:
      "Cocktails personalizados de activos para hidratación, drenaje, flacidez y revitalización capilar.",
    href: "/tratamientos/mesoterapia",
    priceFrom: "48 €",
  },
  {
    image: "/images/sections/hero-treatment-prp.webp",
    category: "Bioestimulación",
    title: "Plasma Rico en Plaquetas (PRP)",
    description:
      "Único tratamiento capaz de aumentar el número de fibroblastos. Capilar, facial y de escote.",
    href: "/tratamientos/prp",
    priceFrom: "100 €",
  },
  {
    image: "/images/sections/hero-treatment-mesoterapia.webp",
    category: "Micropunción",
    title: "DermaPen · Micropunción",
    description:
      "65.000 microcanales por minuto. Absorción de activos + estímulo de colágeno y elastina.",
    href: "/tratamientos/dermapen-micropuncion",
    priceFrom: "83 €",
  },
  {
    image: "/images/sections/hero-treatment-ipl.webp",
    category: "Luz Pulsada Intensa",
    title: "IPL · Fotorrejuvenecimiento",
    description:
      "Manchas, pecas, puntos rubí, telangiectasias y acné. Resultados desde la primera sesión.",
    href: "/tratamientos/luz-pulsada-ipl",
    priceFrom: "134 €",
  },
  {
    image: "/images/sections/hero-treatment-laser-vascular.webp",
    category: "Láser Diodo 980 nm",
    title: "Láser Vascular",
    description:
      "Eliminación de arañas vasculares, puntos rubí y capilares hasta 2 mm sin geles ni anestesia.",
    href: "/tratamientos/laser-vascular",
  },
  {
    image: "/images/sections/closeup-rostro.webp",
    category: "Tecnología Láser",
    title: "Láser CO2",
    description:
      "Resurfacing fraccionado para arrugas, marcas de acné, textura y contorno de ojos.",
    href: "/tratamientos/laser-co2",
  },
  {
    image: "/images/sections/closeup-acne.webp",
    category: "Tecnología Láser",
    title: "Láser Erbio YAG",
    description:
      "Tres modalidades: quirúrgico, Velo de Novia (peeling láser) y fraccionado/resurfacing.",
    href: "/tratamientos/laser-erbio-yag",
  },
  {
    image: "/images/sections/closeup-rostro.webp",
    category: "Renovación Cutánea",
    title: "Peelings Médicos",
    description:
      "Cuatro profundidades: superficial, medio, profundo y New Melan específico para melasma.",
    href: "/tratamientos/peelings-medicos",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/closeup-mandibula.webp",
    category: "Tercio Inferior",
    title: "Armonización Mandibular",
    description:
      "Forma en V femenina o definición masculina con ácido hialurónico. Rápido e indoloro.",
    href: "/tratamientos/armonizacion-mandibular",
  },
  {
    image: "/images/sections/closeup-hombre-mandibula.webp",
    category: "Exclusivo Hombre",
    title: "MASCULOOK",
    description:
      "Armonización mandibular masculina. Mandíbula marcada, ángulo definido y mentón prominente.",
    href: "/tratamientos/masculook",
  },
  {
    image: "/images/sections/closeup-cejas.webp",
    category: "Cejas Semipermanentes",
    title: "Micropigmentación",
    description:
      "Maquillaje semipermanente de cejas, eyeliner y labios con acabado natural. Durabilidad 1-3 años.",
    href: "/tratamientos/micropigmentacion-microblading",
    priceFrom: "250 €",
  },
  {
    image: "/images/sections/closeup-labios.webp",
    category: "Arrugas Peribucales",
    title: "Código de Barras",
    description:
      "Tratamiento personalizado: ácido hialurónico, toxina botulínica y láser CO2/plasma según el grado.",
    href: "/tratamientos/codigo-de-barras",
  },
  {
    image: "/images/sections/closeup-abdomen.webp",
    category: "Remodelación Corporal",
    title: "BodyTite",
    description:
      "Alternativa mínimamente invasiva a la liposucción. Aprobado por la FDA. FaceTite y AccuTite incluidos.",
    href: "/tratamientos/bodytite",
  },
  {
    image: "/images/sections/hero-treatment-intralipoterapia.webp",
    category: "Cuerpo · Sin cirugía",
    title: "Intralipoterapia",
    description:
      "Eliminación de grasa localizada con agujas. Indoloro, ambulatorio y reincorporación inmediata.",
    href: "/tratamientos/intralipoterapia",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/hero-treatment-rellenos-corporales.webp",
    category: "Cuerpo · Volumen estructural",
    title: "Rellenos Corporales",
    description:
      "Lanluma X® y Powerfill® para gemelos, pectorales, glúteos y rejuvenecimiento genital.",
    href: "/tratamientos/rellenos-corporales",
  },
  {
    image: "/images/sections/closeup-flancos.webp",
    category: "Cuerpo",
    title: "Tratamiento de Celulitis",
    description:
      "Maderoterapia + mesoterapia drenante + Alidya® específico. Ataca las causas, no solo el síntoma.",
    href: "/tratamientos/tratamiento-celulitis",
    priceFrom: "75 €",
  },
  {
    image: "/images/sections/closeup-piernas.webp",
    category: "Médico Ambulatorio",
    title: "Esclerosis de Varices",
    description:
      "Esclerosante inyectable para varículas y varices. Sin cirugía si se aborda a tiempo.",
    href: "/tratamientos/esclerosis-varices",
    priceFrom: "80 €",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Cuerpo · Brazos",
    title: "Eliminación de Tatuajes con Láser",
    description:
      "Borrado progresivo y controlado. Sin cicatrices, sin marcas, respetando la piel.",
    href: "/tratamientos/eliminacion-tatuajes",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Sudoración Excesiva",
    title: "Hiperhidrosis",
    description:
      "Toxina botulínica o Morpheus 8 para axilas, manos, pies y otras zonas. 90 % de efectividad.",
    href: "/tratamientos/hiperhidrosis",
    priceFrom: "500 €",
  },
  {
    image: "/images/sections/closeup-mandibula.webp",
    category: "Maseteros · Toxina Botulínica",
    title: "Bruxismo",
    description:
      "Relaja la causa del rechinar nocturno y protege ATM y dientes. También afina la mandíbula.",
    href: "/tratamientos/bruxismo",
  },
  {
    image: "/images/sections/closeup-brazo.webp",
    category: "Bienestar Integral",
    title: "Sueroterapia · 7 Fórmulas",
    description:
      "Antiaging, Sport, Inmuno, Energy, Detox, Mayers, Fitness. Vía intravenosa, máxima absorción.",
    href: "/tratamientos/sueroterapia",
    priceFrom: "130 €",
  },
  {
    image: "/images/sections/closeup-hombre-intima.webp",
    category: "Zona Íntima",
    title: "Engrosamiento de Pene · Aumento Labios Mayores",
    description:
      "Tratamientos íntimos con ácido hialurónico corporal. Discreción y técnica reversible.",
    href: "/tratamientos/tratamientos-intimos",
    priceFrom: "600 €",
  },
  {
    image: "/images/sections/closeup-hombre-intima.webp",
    category: "Zona Íntima",
    title: "Escrotox · Neuromoduladores",
    description:
      "Toxina botulínica en el genital masculino: escroto más liso y relajado, hiperhidrosis escrotal y dolor escrotal.",
    href: "/tratamientos/escrotox",
  },
];

// Categorías tal como vienen en los datos, en su orden de aparición.
const categorias = Array.from(new Set(tratamientos.map((t) => t.category)));

export default function TratamientosIndexPage() {
  // null = todos. Las 26 fichas están siempre en el HTML: filtrar solo oculta.
  const [filtro, setFiltro] = useState<string | null>(null);
  // Tras el primer filtrado las fichas dejan la aparición por scroll: así
  // ninguna se queda sin mostrar al cambiar de posición.
  const [libre, setLibre] = useState(false);

  const elegir = (categoria: string | null) => {
    if (categoria === filtro) return;
    setLibre(true);
    setFiltro(categoria);
  };

  // La altura de la página cambia al filtrar: se recalculan los disparadores.
  useEffect(() => {
    if (!libre) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [filtro, libre]);

  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <PageHero
        eyebrow="Catálogo de Tratamientos"
        titleLine1="Fichas Detalladas"
        titleLine2="de Cada Técnica"
        subtitle="Profundiza en cada tratamiento que ofrecemos: tarifas reales, qué es la técnica, cómo se aplica, indicaciones y combinaciones clínicas. Todo lo que necesitas para tomar una decisión informada."
      />

      {/* ── Índice de tratamientos ── */}
      <section className="ca">
        <div className="marco">
          <div className="ca__rail" role="group" aria-label="Filtrar por categoría">
            <button
              type="button"
              className="ca__filtro"
              aria-pressed={filtro === null}
              onClick={() => elegir(null)}
            >
              Todos
            </button>
            {categorias.map((c) => (
              <button
                key={c}
                type="button"
                className="ca__filtro"
                aria-pressed={filtro === c}
                onClick={() => elegir(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <ul
            key={filtro ?? "todos"}
            className={"ca__rejilla" + (libre ? " ca__rejilla--libre" : "")}
          >
            {tratamientos.map((t) => (
              <li
                key={t.href}
                className="ca__item"
                data-ap={libre ? undefined : ""}
                hidden={filtro !== null && t.category !== filtro}
              >
                <TratamientoCard {...t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConsultaBlock
        title="¿No sabes por dónde empezar?"
        description="Una primera valoración médica te orienta hacia el tratamiento o protocolo combinado más adecuado para tu caso."
      />
      <Footer />
    </main>
  );
}
