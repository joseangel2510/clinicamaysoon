"use client";

// Las diez áreas: la foto de la clínica de fondo, la cabecera centrada y un
// panel marrón translúcido con una fila por área. En escritorio, al pasar por
// una fila las demás se apagan y una tarjeta con su foto sigue al puntero y
// se abre por listones; en móvil cada fila lleva su miniatura.
import "./areas.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { alListo, sinMovimiento } from "@/lib/mov";

const areas: { img: string; nombre: string; texto: string; href: string }[] = [
  {
    img: "/images/sections/por-que-maysoon-logo.jpg",
    nombre: "¿Por qué Maysoon?",
    texto: "Tecnología, trato y resultados al nivel que mereces. La excelencia como estándar.",
    href: "/por-que-maysoon",
  },
  {
    img: "/images/team/equipo-maysoon-horizontal.webp",
    nombre: "Quiénes Somos",
    texto: "Conoce al Dr. Daniel Sánchez Salvador y al equipo titulado de Maysoon.",
    href: "/quienes-somos",
  },
  {
    img: "/images/team/doctores-recepcion.jpg",
    nombre: "Medicina Estética",
    texto: "Neuromoduladores, hilos tensores, peelings y protocolos médicos personalizados.",
    href: "/medicina-estetica",
  },
  {
    img: "/images/aparatologia/equipos-cabina.jpg",
    nombre: "Aparatología & Técnicas",
    texto: "Láser diodo HS-810 y tecnologías avanzadas para resultados eficaces.",
    href: "/aparatologia",
  },
  {
    img: "/images/sections/teaser-cirugias.webp",
    nombre: "Cirugías Menores",
    texto: "Blefaroplastia y otras intervenciones precisas con resultados naturales.",
    href: "/cirugias-menores",
  },
  {
    img: "/images/sections/unidad-capilar-real.webp",
    nombre: "Unidad Capilar",
    texto: "Trasplante FUE, mesoterapia, PRP, Trichotest y Biofibre.",
    href: "/unidad-capilar",
  },
  {
    img: "/images/sections/teaser-estetica.webp",
    nombre: "Estética",
    texto: "Micropigmentación de cejas, eyeliner y labios con técnica y mirada artística.",
    href: "/estetica",
  },
  {
    img: "/images/masajes/cabina-masajes.jpg",
    nombre: "Masajes",
    texto: "Sesiones estéticas, relajantes y terapéuticas en manos de un equipo titulado.",
    href: "/masajes",
  },
  {
    img: "/images/formaciones/aula-completa.jpg",
    nombre: "Formaciones",
    texto: "Próximamente: programa de formaciones para profesionales del sector.",
    href: "/formaciones",
  },
  {
    img: "/images/sections/contacto-sala-espera.jpg",
    nombre: "Contacto · Dónde Estamos",
    texto: "Avda. Cardenal Benlloch 11, Valencia. Teléfono, WhatsApp y horarios.",
    href: "/contacto",
  },
];

const dos = (n: number) => String(n).padStart(2, "0");

// Tarjeta que sigue al puntero
const ANCHO = 260;
const ALTO = 330;
const AIRE = 28;

const Flecha = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4.5 11.5l7-7M5.5 4.5h6v6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Areas() {
  const raiz = useRef<HTMLElement>(null);
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    if (sinMovimiento()) return;
    let ctx: gsap.Context | undefined;
    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        const cab = el.querySelector<HTMLElement>(".are__cab");
        const tit = el.querySelector<HTMLElement>(".are__tit");
        const panel = el.querySelector<HTMLElement>(".are__panel");
        if (!cab || !tit || !panel) return;

        // ── Cabecera: píldora y párrafo se enfocan, el titular sube por líneas
        const enfoca = gsap.utils.toArray<HTMLElement>(".are__pildora, .are__sub", cab);
        gsap.set(enfoca, { opacity: 0, y: 26, filter: "blur(10px)" });
        gsap.to(enfoca, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.32,
          clearProps: "filter,transform",
          scrollTrigger: { trigger: cab, start: "top 86%", once: true },
        });

        let visto = false;
        SplitText.create(tit, {
          type: "lines",
          mask: "lines",
          linesClass: "are__linea",
          autoSplit: true,
          onSplit: (s) => {
            // al repartir de nuevo (fuentes, ancho) la subida no se repite
            if (visto) return undefined;
            return gsap.from(s.lines, {
              yPercent: 112,
              duration: 1.15,
              ease: "power4.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: cab,
                start: "top 86%",
                once: true,
                onEnter: () => {
                  visto = true;
                },
              },
            });
          },
        });

        // ── Panel y filas
        const filas = gsap.utils.toArray<HTMLElement>(".are__cont", panel);
        const rayas = gsap.utils.toArray<HTMLElement>(".are__raya", panel);
        const minis = gsap.utils.toArray<HTMLElement>(".are__mini", panel);
        gsap.set(panel, { opacity: 0, y: 80, scale: 0.96 });
        gsap.set(filas, { opacity: 0, y: 22 });
        gsap.set(rayas, { clipPath: "inset(0 100% 0 0)" });
        gsap.set(minis, { "--abre": 0 });
        gsap
          .timeline({
            // el panel parte 80px más abajo: se descuenta para que entre a su altura
            scrollTrigger: { trigger: panel, start: "top-=80 82%", once: true },
          })
          .to(
            panel,
            { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "power3.out", clearProps: "transform" },
            0,
          )
          .to(
            filas,
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.06, clearProps: "transform" },
            0.3,
          )
          .to(
            rayas,
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.1,
              ease: "power3.inOut",
              stagger: 0.06,
              clearProps: "clipPath",
            },
            0.3,
          )
          .to(minis, { "--abre": 1, duration: 1.1, ease: "power3.inOut", stagger: 0.06 }, 0.4);

        const mm = gsap.matchMedia();

        // ── La foto de fondo se desplaza más despacio que la página
        mm.add("(min-width: 900px)", () => {
          const fondo = el.querySelector<HTMLElement>(".are__fondo");
          if (!fondo) return;
          gsap.fromTo(
            fondo,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // ── Tarjeta con la foto del área, detrás del puntero
        mm.add("(min-width: 1000px) and (hover: hover) and (pointer: fine)", () => {
          const lista = el.querySelector<HTMLElement>(".are__lista");
          const vista = el.querySelector<HTMLElement>(".are__vista");
          const caja = el.querySelector<HTMLElement>(".are__vista-caja");
          if (!lista || !vista || !caja) return;
          const fotos = gsap.utils.toArray<HTMLElement>(".are__vista-foto", vista);
          const enlaces = gsap.utils.toArray<HTMLElement>(".are__fila", lista);

          // las fotos de la tarjeta no se piden hasta que la sección está cerca
          ScrollTrigger.create({
            trigger: el,
            start: "top 160%",
            once: true,
            onEnter: () => vista.classList.add("is-lista"),
          });

          gsap.set(caja, { opacity: 0, scale: 0.85 });
          gsap.set(fotos, { "--abre": 0 });
          const aX = gsap.quickTo(vista, "x", { duration: 0.6, ease: "power3" });
          const aY = gsap.quickTo(vista, "y", { duration: 0.6, ease: "power3" });
          const aGiro = gsap.quickTo(vista, "rotation", { duration: 0.5, ease: "power3" });
          const calma = gsap.delayedCall(0.12, () => aGiro(0)).pause();

          let dentro = false;
          let actual = -1;
          let capa = 0;
          let ultimaX = 0;

          // en el hueco entre la descripción y el botón: sigue al puntero solo
          // en vertical, para no tapar el nombre ni el texto de la fila
          const sitio = (_cx: number, cy: number): [number, number] => {
            const x = lista.getBoundingClientRect().right - 150 - ANCHO - AIRE;
            const y = gsap.utils.clamp(16, Math.max(16, window.innerHeight - ALTO - 16), cy - ALTO / 2);
            return [x, y];
          };

          const mostrar = () =>
            gsap.to(caja, { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out", overwrite: true });
          const ocultar = () =>
            gsap.to(caja, { opacity: 0, scale: 0.85, duration: 0.4, ease: "power3.inOut", overwrite: true });

          const activar = (k: number) => {
            if (k === actual) return;
            actual = k;
            setActivo(k);
            const foto = fotos[k];
            if (!foto) return;
            capa += 1;
            gsap.set(foto, { zIndex: capa });
            gsap.fromTo(
              foto,
              { "--abre": 0 },
              { "--abre": 1, duration: 0.7, ease: "power3.inOut", overwrite: "auto" },
            );
            const img = foto.querySelector("img");
            if (img)
              gsap.fromTo(
                img,
                { scale: 1.14 },
                { scale: 1, duration: 1.1, ease: "power3.out", overwrite: "auto" },
              );
          };

          const entra = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            const [x, y] = sitio(e.clientX, e.clientY);
            aX(x, x);
            aY(y, y);
            aGiro(0, 0);
            ultimaX = e.clientX;
            dentro = true;
            mostrar();
          };
          const mueve = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            if (!dentro) {
              entra(e);
              return;
            }
            const [x, y] = sitio(e.clientX, e.clientY);
            aX(x);
            aY(y);
            aGiro(gsap.utils.clamp(-6, 6, (e.clientX - ultimaX) * 0.4));
            ultimaX = e.clientX;
            calma.restart(true);
          };
          const sale = () => {
            dentro = false;
            ocultar();
          };

          // con teclado: la tarjeta se coloca junto a la fila enfocada
          const foco = (e: FocusEvent) => {
            if (!(e.target instanceof HTMLElement)) return;
            const a = e.target.closest<HTMLElement>(".are__fila");
            if (!a || !a.matches(":focus-visible")) return;
            const k = enlaces.indexOf(a);
            if (k < 0) return;
            const r = a.getBoundingClientRect();
            const y = sitio(0, r.top + r.height / 2)[1];
            const x = r.left + r.width * 0.5;
            if (dentro) {
              aX(x);
              aY(y);
            } else {
              aX(x, x);
              aY(y, y);
              aGiro(0, 0);
              dentro = true;
            }
            activar(k);
            mostrar();
          };
          const sinFoco = (e: FocusEvent) => {
            const sigue = e.relatedTarget instanceof Node && lista.contains(e.relatedTarget);
            if (!sigue && !lista.matches(":hover")) sale();
          };

          const porFila = enlaces.map((a, k) => {
            const h = (e: PointerEvent) => {
              if (e.pointerType === "mouse") activar(k);
            };
            a.addEventListener("pointerenter", h);
            return h;
          });
          lista.addEventListener("pointerenter", entra);
          lista.addEventListener("pointermove", mueve);
          lista.addEventListener("pointerleave", sale);
          lista.addEventListener("focusin", foco);
          lista.addEventListener("focusout", sinFoco);

          return () => {
            enlaces.forEach((a, k) => a.removeEventListener("pointerenter", porFila[k]));
            lista.removeEventListener("pointerenter", entra);
            lista.removeEventListener("pointermove", mueve);
            lista.removeEventListener("pointerleave", sale);
            lista.removeEventListener("focusin", foco);
            lista.removeEventListener("focusout", sinFoco);
            calma.kill();
            vista.classList.remove("is-lista");
          };
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
    <section ref={raiz} id="servicios" className="are sobre-oscuro" aria-labelledby="are-tit" data-propio>
      <div className="are__bloque">
        <div className="are__fondo" aria-hidden="true">
          <Image src="/hero/dsc_0444.webp" alt="" fill sizes="100vw" loading="lazy" />
        </div>
        <div className="are__velo" aria-hidden="true" />

        <div className="marco are__dentro">
          <header className="are__cab">
            <span className="pildora are__pildora">Explora Maysoon</span>
            <h2 id="are-tit" className="tit tit--l are__tit">
              Diez Áreas, <br />
              <em>Una Misma Excelencia</em>
            </h2>
            <p className="cuerpo are__sub">
              Cada sección refleja la misma filosofía: protocolos médicos serios, tecnología avanzada y
              un trato personalizado.
            </p>
          </header>

          <div className="are__panel">
            <ol className="are__lista">
              {areas.map((a, k) => (
                <li key={a.href} className="are__item">
                  {k > 0 && <i className="are__raya" aria-hidden="true" />}
                  <Link href={a.href} className="are__fila">
                    <span className="are__cont">
                      <span className="are__mini listones">
                        <Image src={a.img} alt={a.nombre} fill sizes="64px" loading="lazy" />
                      </span>
                      <span className="are__txt">
                        <span className="are__num">{dos(k + 1)}</span>
                        <span className="are__nom">{a.nombre}</span>
                        <span className="are__desc">{a.texto}</span>
                      </span>
                      <span className="are__ir">
                        <span className="are__ir-t">Descubrir</span>
                        <Flecha />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Tarjeta que sigue al puntero (solo escritorio con ratón) */}
      <div className="are__vista" aria-hidden="true">
        <div className="are__vista-caja">
          <div className="are__vista-fotos">
            {areas.map((a) => (
              <div key={a.href} className="are__vista-foto listones">
                <Image src={a.img} alt="" fill sizes="520px" loading="lazy" />
              </div>
            ))}
          </div>
          <span className="are__vista-chip">
            <b>{dos(activo + 1)}</b>
            <i />
            {areas[activo].nombre}
          </span>
        </div>
      </div>
    </section>
  );
}
