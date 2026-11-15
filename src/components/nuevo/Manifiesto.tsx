"use client";

// Manifiesto: la filosofía de la clínica en una sola frase, con dos fotos
// ovaladas metidas entre las palabras. Al bajar, la frase se va encendiendo
// palabra a palabra y los óvalos se abren cuando les llega el turno. Debajo,
// el párrafo y la tarjeta con el origen del nombre.
import "./manifiesto.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento } from "@/lib/mov";

const PASO = 0.6; // separación entre palabras dentro del scrub

export function Manifiesto() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    if (sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const frase = el.querySelector<HTMLElement>(".man__frase");
        if (!frase) return;

        // La frase: palabras y óvalos en el orden en que se leen
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: frase, start: "top 78%", end: "bottom 45%", scrub: 0.6 },
        });
        let t = 0;
        Array.from(frase.children).forEach((hijo) => {
          if (!(hijo instanceof HTMLElement)) return;
          if (hijo.classList.contains("man__ovalo")) {
            const img = hijo.querySelector("img");
            tl.fromTo(hijo, { "--crece": 0 }, { "--crece": 1, duration: 2.4, ease: "power2.out" }, t);
            if (img) tl.fromTo(img, { scale: 1.4 }, { scale: 1, duration: 3, ease: "power2.out" }, t);
            t += PASO;
            return;
          }
          const partido = SplitText.create(hijo, {
            type: "words",
            wordsClass: "man__pal",
            tag: "span",
            aria: "none",
          });
          partido.words.forEach((pal) => {
            tl.fromTo(pal, { opacity: 0.16 }, { opacity: 1, duration: 1 }, t);
            t += PASO;
          });
        });

        // La píldora entra con la sección
        gsap.fromTo(
          ".man__pildora",
          { opacity: 0, y: 20, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            clearProps: "filter,transform",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          },
        );

        // Debajo: el filete se dibuja y los dos bloques se enfocan
        gsap
          .timeline({ scrollTrigger: { trigger: ".man__pie", start: "top 85%", once: true } })
          .fromTo(".man__linea", { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power3.inOut" }, 0)
          .fromTo(
            ".man__bloque",
            { opacity: 0, y: 34, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.12,
              clearProps: "filter,transform",
            },
            0.25,
          )
          .fromTo(
            ".man__trazos i",
            { scaleY: 0 },
            { scaleY: 1, duration: 0.9, ease: "power3.inOut", stagger: 0.09 },
            0.7,
          );
      }, el);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={raiz} className="man sec" aria-labelledby="man-tit" data-propio>
      <div className="marco">
        <span className="pildora man__pildora">Quiénes Somos</span>

        <h2 id="man-tit" className="tit man__frase">
          <span>Nos dedicamos a devolver la belleza,</span>
          <span className="man__ovalo" aria-hidden="true">
            <Image
              src="/images/nuevo/cabina-1.webp"
              alt=""
              fill
              sizes="(min-width: 900px) 110px, 56px"
              className="man__ovalo-img"
              style={{ objectPosition: "50% 22%" }}
            />
          </span>{" "}
          <span>y a conseguir esta desde</span>
          <span className="man__ovalo" aria-hidden="true">
            <Image
              src="/hero/dsc_0429.webp"
              alt=""
              fill
              sizes="(min-width: 900px) 110px, 56px"
              className="man__ovalo-img"
            />
          </span>{" "}
          <em>la restitución de la salud.</em>
        </h2>

        <div className="man__pie">
          <div className="man__linea" aria-hidden="true" />
          <div className="man__rejilla">
            <div className="man__bloque man__texto">
              <p className="cuerpo">
                En nuestra clínica de Valencia, cada tratamiento parte de una valoración integral:
                cuidamos lo que se ve y lo que sostiene tu bienestar por dentro.
              </p>
              <Boton href="/quienes-somos" variante="linea">
                Quiénes Somos
              </Boton>
            </div>

            <div className="man__bloque man__nombre">
              <span className="man__trazos" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="pildora">El origen del nombre</span>
              <span className="man__palabra" aria-hidden="true">
                Maysoon
              </span>
              <p className="man__significado">
                «Maysoon» es un nombre árabe que significa “Mujer de rostro y cuerpo bellos”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
