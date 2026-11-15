"use client";

// Director médico: el retrato recortado sobresale por arriba de un panel de
// listones de roble (el muro de la recepción) con un contorno fino desplazado.
// Al otro lado, el nombre, su filosofía y la formación, fila a fila.
import "./doctor.css";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento } from "@/lib/mov";

const credenciales: string[] = [
  "Licenciado en Medicina — Universidad de Salamanca",
  "Máster en Técnicas Avanzadas de Medicina Estética y Láser — CEU",
  "Diploma en Estudios Avanzados (DEA) — Sobresaliente",
  "+14 años de experiencia en medicina estética",
];

const instituciones: string[] = ["Universidad de Salamanca", "CEU", "ISAPS", "SNS"];

export function Doctor() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    if (sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        // ── Retrato: el panel crece desde abajo y el doctor sube ──
        gsap.set(".doc__panel", { scaleY: 0.35, transformOrigin: "50% 100%" });
        gsap.set(".doc__foto", { y: 60, opacity: 0 });
        gsap.set(".doc__linea", { xPercent: -8, opacity: 0 });
        gsap.set(".doc__ficha", { opacity: 0, scale: 0.8, y: 14, transformOrigin: "0% 100%" });

        gsap
          .timeline({
            scrollTrigger: { trigger: ".doc__retrato", start: "top 78%", once: true },
          })
          .to(".doc__panel", { scaleY: 1, duration: 1.6, ease: "power3.out" }, 0)
          .to(".doc__foto", { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" }, 0.15)
          .to(".doc__linea", { xPercent: 0, opacity: 1, duration: 1.4, ease: "power3.out" }, 0.35)
          .to(".doc__ficha", { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.6)" }, 1.05);

        // ── Texto ──
        const enfoque = gsap.utils.toArray<HTMLElement>("[data-d]", el);
        gsap.set(enfoque, { opacity: 0, y: 26, filter: "blur(10px)" });
        gsap.set(".doc__barra", { scaleY: 0, transformOrigin: "50% 0%" });
        gsap.set(".doc__raya", { scaleX: 0, transformOrigin: "0% 50%" });
        gsap.set(".doc__fila > span", { opacity: 0, y: 16 });
        gsap.set(".doc__inst li", { opacity: 0 });

        const tit = el.querySelector<HTMLElement>(".doc__tit");
        if (tit) {
          SplitText.create(tit, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (s) =>
              gsap.from(s.lines, {
                yPercent: 115,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.11,
                scrollTrigger: { trigger: tit, start: "top 86%", once: true },
              }),
          });
        }

        ScrollTrigger.batch(enfoque, {
          start: "top 88%",
          once: true,
          onEnter: (lote) =>
            gsap.to(lote, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.1,
              overwrite: true,
              clearProps: "filter",
            }),
        });

        gsap.to(".doc__barra", {
          scaleY: 1,
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".doc__cita", start: "top 86%", once: true },
        });

        gsap
          .timeline({
            scrollTrigger: { trigger: ".doc__creds", start: "top 88%", once: true },
          })
          .to(".doc__raya", { scaleX: 1, duration: 1.1, ease: "power3.inOut", stagger: 0.08 }, 0)
          .to(".doc__fila > span", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.04 }, 0.2);

        gsap.to(".doc__inst li", {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".doc__inst", start: "top 92%", once: true },
        });

        // ── Escritorio: deriva suave mientras la sección cruza la pantalla ──
        const mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => {
          gsap
            .timeline({
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            })
            .fromTo(".doc__foto", { yPercent: 4 }, { yPercent: -4, ease: "none" }, 0)
            .fromTo(".doc__linea", { x: 0 }, { x: 10, ease: "none" }, 0);
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
    <section ref={raiz} className="doc sec" aria-labelledby="doc-tit" data-propio>
      <div className="marco">
        <div className="doc__rejilla">
          <div className="doc__lado">
            <div className="doc__retrato">
              <i className="doc__linea" aria-hidden="true" />
              <div
                className="doc__panel muro"
                style={{ "--n": 11 } as CSSProperties}
                aria-hidden="true"
              />
              <div className="doc__figura">
                <Image
                  className="doc__foto"
                  src="/images/nuevo/dr-daniel-recorte.webp"
                  alt="Dr. Daniel Sánchez Salvador, director médico de Maysoon"
                  width={1029}
                  height={1529}
                  sizes="(max-width: 560px) 82vw, 448px"
                />
              </div>
              <p className="doc__ficha">
                <span>Director Médico</span>
                <strong>Responsable Maysoon</strong>
              </p>
            </div>
          </div>

          <div className="doc__txt">
            <span className="pildora" data-d>
              Equipo Médico
            </span>
            <h2 id="doc-tit" className="tit tit--l doc__tit">
              Dr. Daniel <br />
              <em>Sánchez Salvador</em>
            </h2>
            <p className="doc__rol" data-d>
              Director Médico · Responsable Maysoon
            </p>

            <blockquote className="doc__cita" data-d>
              <i className="doc__barra" aria-hidden="true" />
              <p>
                “Nuestra filosofía es conseguir una armonía entre el rostro y el cuerpo. No dejes
                que los años te roben lo que eres, vuelve a ser tú a pesar del paso del tiempo.”
              </p>
            </blockquote>

            <p className="cuerpo doc__desc" data-d>
              Director médico de Maysoon. Más de una década diseñando protocolos de medicina
              estética con criterio clínico y mirada artística.
            </p>

            <ol className="doc__creds">
              {credenciales.map((c, k) => (
                <li key={c} className="doc__fila">
                  <i className="doc__raya" aria-hidden="true" />
                  <span className="doc__num" aria-hidden="true">
                    {String(k + 1).padStart(2, "0")}
                  </span>
                  <span className="doc__cred">{c}</span>
                </li>
              ))}
            </ol>

            <ul className="doc__inst" aria-label="Instituciones">
              {instituciones.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>

            <div className="doc__cta" data-d>
              <Boton href="/quienes-somos">Conoce a todo el equipo</Boton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
