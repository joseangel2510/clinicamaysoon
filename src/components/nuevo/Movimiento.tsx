"use client";

// Motor de movimiento de toda la web: scroll suave (Lenis) y apariciones
// declaradas con atributos, para que cualquier página las use sin código:
//   data-ap           aparece enfocándose (sube + desenfoque → nítido)
//   data-ap="fila"    igual, pero los hermanos entran en cascada
//   data-tit          titular: sube línea a línea desde detrás de una máscara
//   data-lis          imagen que se abre por listones (clase .listones)
//   data-par="0.15"   parallax vertical ligado al scroll
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { alListo, sinMovimiento } from "@/lib/mov";

let lenis: Lenis | null = null;
export const scrollSuave = () => lenis;

export function Movimiento() {
  const ruta = usePathname();

  // Scroll suave: una sola instancia para toda la sesión.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    document.documentElement.dataset.movListo = "1";
    if (sinMovimiento()) return;
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fino) return;
    lenis = new Lenis({ duration: 1.05, wheelMultiplier: 0.9 });
    lenis.on("scroll", ScrollTrigger.update);
    const tic = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(tic);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tic);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Apariciones de la ruta actual.
  useEffect(() => {
    if (sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        // Titulares por líneas
        gsap.utils.toArray<HTMLElement>("[data-tit]").forEach((el) => {
          const dentro = el.closest("[data-propio]");
          if (dentro) return; // lo anima su sección
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "tit-linea",
            autoSplit: true,
            onSplit: (s) => {
              gsap.set(el, { visibility: "visible" });
              return gsap.from(s.lines, {
                yPercent: 112,
                duration: 1.15,
                ease: "power4.out",
                stagger: 0.09,
                scrollTrigger: { trigger: el, start: "clamp(top 88%)", once: true },
              });
            },
          });
        });

        // Bloques que se enfocan
        const sueltos = gsap.utils
          .toArray<HTMLElement>("[data-ap]")
          .filter((el) => !el.closest("[data-propio]"));
        // el desenfoque solo en bloques medianos: en los muy anchos cuesta fotogramas
        gsap.set(sueltos, {
          y: 34,
          filter: (_i: number, el: HTMLElement) => (el.offsetWidth > 900 ? "none" : "blur(10px)"),
        });
        ScrollTrigger.batch(sueltos, {
          start: "clamp(top 90%)",
          once: true,
          onEnter: (lote) =>
            gsap.to(lote, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
              clearProps: "filter,transform",
            }),
        });

        // Imágenes por listones
        gsap.utils.toArray<HTMLElement>("[data-lis]").forEach((el) => {
          if (el.closest("[data-propio]")) return;
          const img = el.querySelector("img, video");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: el, start: "clamp(top 84%)", once: true },
          });
          tl.to(el, { "--abre": 1, duration: 1.5, ease: "power3.inOut" }, 0);
          if (img)
            tl.fromTo(
              img,
              { scale: 1.18 },
              { scale: 1, duration: 1.9, ease: "power3.out" },
              0,
            );
        });

        // Parallax
        gsap.utils.toArray<HTMLElement>("[data-par]").forEach((el) => {
          const f = parseFloat(el.dataset.par || "0.12");
          gsap.fromTo(
            el,
            { yPercent: -f * 100 },
            {
              yPercent: f * 100,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });
      requestAnimationFrame(() => ScrollTrigger.refresh());
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });

    return () => {
      cancelar();
      ctx?.revert();
    };
  }, [ruta]);

  return null;
}
