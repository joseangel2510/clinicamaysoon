"use client";

// Portada con la seda: titular centrado arriba, la tela 3D (Seda.tsx) cruza la pantalla por detrás y, abajo,
// el texto, las dos acciones y las cifras. La autorización sanitaria va en una línea al pie.
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento, WA_CONSULTA } from "@/lib/mov";
import "./hero-seda.css";

export function HeroSeda() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || sinMovimiento()) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const h1 = el.querySelector<HTMLElement>(".hs__tit")!;
        gsap.set(h1, { visibility: "visible" });
        const partido = SplitText.create(h1, { type: "lines", mask: "lines" });
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(partido.lines, { yPercent: 118, duration: 1.35, stagger: 0.14 }, 0.15)
          .fromTo(
            ".hs [data-h]",
            { opacity: 0, y: 24, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out", stagger: 0.09, clearProps: "filter" },
            0.7,
          );
        // Al bajar, el texto se retira y deja sola a la tela.
        gsap
          .timeline({ scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } })
          .to(".hs__arriba", { yPercent: -18, opacity: 0, ease: "none" }, 0)
          .to(".hs__abajo, .hs__aut", { yPercent: -30, opacity: 0, ease: "none" }, 0);
      }, el);
      ScrollTrigger.refresh();
    });
    return () => {
      cancelar();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={raiz} className="hs" data-propio>
      <div className="hs__arriba">
        <span className="pildora pildora--arena" data-h>
          Medicina Estética Avanzada en Valencia
        </span>
        <h1 className="tit hs__tit" data-tit>
          Tu Belleza, <br />
          <em>Nuestra Ciencia</em>
        </h1>
      </div>

      <div className="hs__abajo">
        <p className="hs__sub" data-h>
          Donde las técnicas más avanzadas en medicina estética y láser se ponen al servicio de tu
          bienestar. Resultados naturales, atención personalizada.
        </p>
        <div className="hs__acc" data-h>
          <Boton href={WA_CONSULTA}>Escríbenos por WhatsApp</Boton>
          <Boton href="/tratamientos" variante="linea">
            Ver tratamientos
          </Boton>
        </div>
        <dl className="hs__cifras" data-h>
          <div>
            <dd>+14</dd>
            <dt>años de experiencia</dt>
          </div>
          <div>
            <dd>4.7</dd>
            <dt>en Google, +114 reseñas</dt>
          </div>
        </dl>
      </div>

      <p className="hs__aut" data-h>
        <span>SEME · Autorización U.48 Medicina Estética</span>
        <span>Cód. Aut. Sanit. 40143</span>
        <span>Daniel Sánchez Salvador · Núm. Coleg. 464620598</span>
      </p>
    </section>
  );
}
