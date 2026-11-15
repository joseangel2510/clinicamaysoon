"use client";

// Por qué Maysoon: una banda ancha con la foto del equipo, que se abre por
// listones y se desplaza más despacio que la página, y debajo dos columnas:
// a la izquierda el titular, que se queda fijo mientras se lee, y a la derecha
// las cuatro razones en filas separadas por líneas finas. Cada fila dibuja su
// línea y después se enfoca.
import "./porque.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento } from "@/lib/mov";

type Razon = { inicio: string; fin: string; texto: string };

// El final de cada título va en cursiva serif.
const razones: Razon[] = [
  {
    inicio: "Tecnología de",
    fin: "Última Generación",
    texto:
      "Equipos de láser diodo de alta potencia, Morpheus, BodyTite y las técnicas más avanzadas del mercado.",
  },
  {
    inicio: "Trato Cercano",
    fin: "y Personalizado",
    texto:
      "Cada paciente recibe una valoración integral y un protocolo diseñado específicamente para sus necesidades.",
  },
  {
    inicio: "Productos Certificados de",
    fin: "Primera Línea",
    texto:
      "Solo trabajamos con marcas comerciales certificadas. Transparencia total en cada tratamiento.",
  },
  {
    inicio: "Resultados Naturales",
    fin: "y Duraderos",
    texto:
      "Nuestra filosofía: realzar tu belleza natural. Sin excesos, sin artificialidad. Tú, en tu mejor versión.",
  },
];

export function PorQue() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || sinMovimiento()) return;
    let ctx: gsap.Context | undefined;

    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const desenfocado = { opacity: 0, y: 26, filter: "blur(8px)" };
        const nitido = {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          clearProps: "filter,transform",
        };

        // Banda: se abre por listones mientras la foto se asienta
        const banda = el.querySelector<HTMLElement>(".pq__banda");
        if (banda) {
          gsap
            .timeline({ scrollTrigger: { trigger: banda, start: "top 84%", once: true } })
            .fromTo(".pq__lis", { "--abre": 0 }, { "--abre": 1, duration: 1.5, ease: "power3.inOut" }, 0)
            .fromTo(".pq__img", { scale: 1.18 }, { scale: 1, duration: 1.9, ease: "power3.out" }, 0)
            .fromTo(".pq__chip", desenfocado, nitido, 0.7);

          // La foto va más despacio que la página
          const mm = gsap.matchMedia();
          mm.add("(min-width: 900px)", () => {
            gsap.fromTo(
              ".pq__foto",
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: { trigger: banda, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          });
        }

        // Columna izquierda: el titular sube línea a línea; texto y botón se enfocan
        const tit = el.querySelector<HTMLElement>(".pq__tit");
        if (tit) {
          SplitText.create(tit, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (s) =>
              gsap.from(s.lines, {
                yPercent: 112,
                duration: 1.15,
                ease: "power4.out",
                stagger: 0.09,
                scrollTrigger: { trigger: tit, start: "top 88%", once: true },
              }),
          });
        }
        gsap.fromTo(".pq__txt, .pq__accion", desenfocado, {
          ...nitido,
          stagger: 0.1,
          scrollTrigger: { trigger: ".pq__txt", start: "top 90%", once: true },
        });

        // Filas: primero la línea, de izquierda a derecha; después el contenido
        gsap.utils.toArray<HTMLElement>(".pq__fila").forEach((fila) => {
          const raya = fila.querySelector<HTMLElement>(".pq__raya");
          const partes = fila.querySelectorAll<HTMLElement>(".pq__num, .pq__nombre, .pq__desc");
          const tl = gsap.timeline({ scrollTrigger: { trigger: fila, start: "top 88%", once: true } });
          if (raya) tl.fromTo(raya, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power3.inOut" }, 0);
          tl.fromTo(partes, desenfocado, { ...nitido, stagger: 0.08 }, 0.3);
        });
      }, el);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={raiz} className="pq sec" aria-labelledby="pq-tit" data-propio>
      <div className="marco">
        <div className="pq__banda">
          <div className="pq__lis listones">
            <div className="pq__foto">
              <Image
                src="/images/nuevo/equipo-diagonal.webp"
                alt="Equipo de Maysoon en el pasillo de la clínica"
                fill
                sizes="(min-width: 1440px) 1280px, 90vw"
                className="pq__img"
              />
            </div>
          </div>
          <span className="pildora pildora--cristal pq__chip">¿Por qué Maysoon?</span>
        </div>

        <div className="pq__cuerpo">
          <div className="pq__izq">
            <h2 id="pq-tit" className="tit tit--l pq__tit">
              La Excelencia <br />
              <em>Como Estándar</em>
            </h2>
            <p className="cuerpo pq__txt">
              No solo cuidamos tu imagen, cuidamos cada detalle de tu experiencia. Tecnología, trato y
              resultados al nivel que mereces.
            </p>
            <div className="pq__accion">
              <Boton href="/por-que-maysoon" variante="linea">
                ¿Por qué Maysoon?
              </Boton>
            </div>
          </div>

          <ol className="pq__lista">
            {razones.map((r, k) => (
              <li key={r.fin} className="pq__fila">
                <i className="pq__raya" aria-hidden="true" />
                <span className="pq__num" aria-hidden="true">
                  <span>{String(k + 1).padStart(2, "0")}</span>
                </span>
                <div className="pq__razon">
                  <h3 className="pq__nombre">
                    {r.inicio} <em className="serif">{r.fin}</em>
                  </h3>
                  <p className="cuerpo pq__desc">{r.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
