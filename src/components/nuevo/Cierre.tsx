"use client";

// Cierre: la llamada final. Un panel oscuro redondeado con luz cálida
// desenfocada; a la izquierda el titular y los botones, a la derecha el equipo
// en una foto que se abre por listones y queda apenas girada, con la dirección
// de la clínica en una ficha de cristal. Al salir, la foto sube más deprisa.
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento, WA_CONSULTA } from "@/lib/mov";
import "./cierre.css";

const LISTONES = 9;

export function Cierre() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || sinMovimiento()) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const tit = el.querySelector<HTMLElement>(".cie__tit");
        const entrada = (): ScrollTrigger.Vars => ({ trigger: el, start: "top 75%", once: true });

        // Estados de partida
        gsap.set("[data-c]", { opacity: 0, y: 26, filter: "blur(10px)" });
        gsap.set(".cie__liston", { scaleY: 0 });
        gsap.set(".cie__figura", { rotation: 7 });
        gsap.set(".cie__foto", { "--abre": 0 });
        gsap.set(".cie__foto img", { scale: 1.2 });
        gsap.set(".cie__chip", { opacity: 0, scale: 0.6, y: 14 });

        // Titular: cada línea sube desde detrás de su máscara
        if (tit) {
          SplitText.create(tit, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (s) =>
              gsap.from(s.lines, {
                yPercent: 115,
                duration: 1.3,
                ease: "power4.out",
                stagger: 0.12,
                scrollTrigger: entrada(),
              }),
          });
        }

        // Listones del borde, y píldora, texto, botones y línea de recepción
        // enfocándose en cascada
        gsap
          .timeline({ scrollTrigger: entrada() })
          .to(".cie__liston", { scaleY: 1, duration: 1.4, ease: "power3.inOut", stagger: 0.06 }, 0)
          .to(
            "[data-c]",
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.1,
              clearProps: "filter",
            },
            0.3,
          );

        // La foto se abre por listones mientras se endereza
        const abrirFoto = (st: ScrollTrigger.Vars, retraso: number) =>
          gsap
            .timeline({ scrollTrigger: st, delay: retraso })
            .to(".cie__foto", { "--abre": 1, duration: 1.5, ease: "power3.inOut" }, 0)
            .to(".cie__figura", { rotation: 2.5, duration: 1.5, ease: "power3.inOut" }, 0)
            .to(".cie__foto img", { scale: 1, duration: 1.9, ease: "power3.out" }, 0)
            .to(".cie__chip", { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.8)" }, 1);

        const mm = gsap.matchMedia();
        mm.add("(min-width: 900px)", () => {
          abrirFoto(entrada(), 0.2);
          // Al salir, la foto se adelanta al panel
          gsap.to(".cie__lado", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: { trigger: el, start: "bottom bottom", end: "bottom top", scrub: true },
          });
        });
        // En móvil la foto va debajo del texto: espera a entrar ella
        mm.add("(max-width: 899.98px)", () => {
          abrirFoto({ trigger: ".cie__lado", start: "top 82%", once: true }, 0);
        });

        // La luz solo deriva con la sección a la vista
        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          toggleClass: "is-vista",
        });
      }, el);
    });
    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={raiz} id="cta" className="cie sobre-oscuro" aria-labelledby="cie-tit" data-propio>
      <div className="cie__panel">
        <div className="cie__luz" aria-hidden="true">
          <i className="cie__halo cie__halo--terracota" />
          <i className="cie__halo cie__halo--roble" />
        </div>
        <div className="cie__listones" aria-hidden="true">
          {Array.from({ length: LISTONES }, (_, k) => (
            <i key={k} className="cie__liston" />
          ))}
        </div>

        <div className="marco cie__marco">
          <div className="cie__txt">
            <span className="pildora pildora--cristal" data-c>
              Da el Primer Paso
            </span>
            <h2 id="cie-tit" className="tit tit--xl tit--claro cie__tit">
              Tu Mejor Versión <br />
              <em>Te Está Esperando</em>
            </h2>
            <p className="cuerpo cie__sub" data-c>
              Reserva tu consulta gratuita y sin compromiso. Analizamos tu caso, resolvemos tus dudas y
              diseñamos el plan perfecto para ti.
            </p>
            <div className="cie__botones" data-c>
              <Boton href={WA_CONSULTA} variante="claro">
                Reserva tu Consulta
              </Boton>
              <Boton href={WA_CONSULTA} variante="linea">
                Escríbenos por WhatsApp
              </Boton>
            </div>
            <p className="cie__rec" data-c>
              O escribe a recepción:{" "}
              <a href="https://wa.me/34601212258" target="_blank" rel="noopener noreferrer">
                +34 601 21 22 58
              </a>
            </p>
          </div>

          <div className="cie__lado">
            <div className="cie__figura">
              <div className="cie__foto listones">
                <Image
                  src="/images/nuevo/equipo-risas.webp"
                  alt="El equipo de Maysoon riendo en la recepción de la clínica"
                  fill
                  sizes="(min-width: 900px) 62vw, 170vw"
                  loading="lazy"
                />
              </div>
              <p className="cie__chip">
                <span className="cie__trazos" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                Avda. Cardenal Benlloch 11 · Valencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
