"use client";

// Equipo y cifras: cabecera centrada, tres fotos en un arco 3D que gira con
// el scroll (en escritorio y en móvil) y la fila de cuatro cifras, que cuentan al entrar mientras
// sus listones se dibujan.
import "./equipo.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Boton } from "@/components/nuevo/Boton";
import { alListo, sinMovimiento } from "@/lib/mov";

type Carta = {
  lado: "izq" | "cen" | "der";
  src: string;
  alt: string;
  chip: string;
  sizes: string;
};

// Las dos apaisadas se recortan a lo alto: se piden a 1,5 × el alto de la
// carta para que no se vean estiradas.
const APAISADA = "(min-width: 1100px) 615px, (min-width: 760px) 495px, 63vw";
const VERTICAL = "(min-width: 1100px) 300px, (min-width: 760px) 240px, 31vw";

const cartas: Carta[] = [
  {
    lado: "izq",
    src: "/images/nuevo/equipo-listones.webp",
    alt: "Equipo de Maysoon frente al muro de listones de la clínica",
    chip: "El equipo",
    sizes: APAISADA,
  },
  {
    lado: "cen",
    src: "/images/nuevo/equipo-pasillo.webp",
    alt: "Equipo de Maysoon sentado en el pasillo de la clínica",
    chip: "La clínica",
    sizes: VERTICAL,
  },
  {
    lado: "der",
    src: "/images/nuevo/equipo-recepcion.webp",
    alt: "Equipo de Maysoon en la recepción",
    chip: "Recepción",
    sizes: APAISADA,
  },
];

type Cifra = { antes?: string; valor: string; despues?: string; rotulo: string; fin: string };

const cifras: Cifra[] = [
  { antes: "+", valor: "14", rotulo: "Años de", fin: "experiencia" },
  { antes: "+", valor: "114", rotulo: "Reseñas en", fin: "Google" },
  { valor: "100", despues: "%", rotulo: "Personal", fin: "titulado" },
  { valor: "4.7", despues: "/5", rotulo: "Valoración", fin: "media" },
];

const GIRO = 31;

export function Equipo() {
  const raiz = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el || sinMovimiento()) return;
    const nums = Array.from(el.querySelectorAll<HTMLElement>(".equ__num"));
    let ctx: gsap.Context | undefined;

    const cancelar = alListo(() => {
      ctx = gsap.context(() => {
        // Cabecera y botón: se enfocan al entrar
        const enfoca = (sel: string, disparo: string, inicio: string) =>
          gsap.fromTo(
            sel,
            { opacity: 0, y: 28, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              stagger: 0.1,
              clearProps: "filter",
              scrollTrigger: { trigger: disparo, start: inicio, once: true },
            },
          );
        enfoca(".equ__cab > *", ".equ__cab", "top 86%");
        enfoca(".equ__accion", ".equ__accion", "top 94%");

        // Órbita: las tres fotos en un arco 3D. La del centro mira de frente,
        // las de los lados quedan detrás y giradas; al bajar, la de la derecha
        // viene al centro y la de la izquierda da la vuelta por detrás.
        const fila = el.querySelector<HTMLElement>(".equ__cartas");
        const orb = gsap.utils.toArray<HTMLElement>(".equ__carta");
        const puntos = gsap.utils.toArray<HTMLElement>(".equ__puntos i");
        if (fila && orb.length === 3) {
          el.classList.add("equ--orbita");
          const est = { t: 0, abre: 0 };
          const suave = gsap.parseEase("power2.inOut");
          let centro = -1;
          const pintar = () => {
            const k = orb[1].offsetWidth / 300;
            const X = 323 * k;
            const Z = -788 * k;
            fila.style.perspective = `${Math.round(1400 * k)}px`;
            const abre = 0.28 + 0.72 * est.abre;
            orb.forEach((c, i) => {
              let s = i - 1 - est.t;
              s = ((((s + 1.5) % 3) + 3) % 3) - 1.5;
              const d = Math.abs(s);
              let x: number, z: number, r: number, capa: number;
              if (d <= 1) {
                x = s * X * abre;
                z = d * Z;
                r = -s * GIRO;
                capa = d < 0.5 ? 3 : 2;
              } else {
                // por detrás del mazo, de un lado al otro
                const u = ((d - 1) / 0.5) * (Math.PI / 2);
                const lado = Math.sign(s);
                x = lado * X * Math.cos(u) * abre;
                z = Z - 240 * k * Math.sin(u);
                r = -lado * GIRO * Math.cos(u);
                capa = 1;
              }
              c.style.transform = `translate3d(${x.toFixed(2)}px,0,${z.toFixed(2)}px) rotateY(${r.toFixed(3)}deg)`;
              c.style.zIndex = String(capa);
              c.style.setProperty("--som", (Math.min(d, 1) * 0.34).toFixed(3));
            });
            const ahora = (1 + Math.round(est.t)) % 3;
            if (ahora !== centro) {
              centro = ahora;
              puntos.forEach((p, i) => p.classList.toggle("is-on", i === ahora));
              orb.forEach((c, i) => c.classList.toggle("is-centro", i === ahora));
            }
          };
          pintar();

          // Entrada: las de los lados salen de detrás de la central
          gsap.to(est, {
            abre: 1,
            duration: 1.5,
            ease: "power3.out",
            onUpdate: pintar,
            scrollTrigger: { trigger: fila, start: "top 84%", once: true },
          });
          gsap.fromTo(
            ".equ__foto",
            { scale: 1.15 },
            { scale: 1, duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: fila, start: "top 84%", once: true } },
          );
          gsap.fromTo(
            ".equ__puntos",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: fila, start: "top 70%", once: true } },
          );

          // El scroll da dos pasos: cada foto pasa una vez por el centro
          ScrollTrigger.create({
            trigger: fila,
            start: "top 62%",
            end: "bottom 30%",
            scrub: 0.7,
            invalidateOnRefresh: true,
            onRefresh: pintar,
            onUpdate: (st) => {
              const bruto = Math.min(st.progress * 2, 1.9999);
              const paso = Math.floor(bruto);
              est.t = st.progress >= 1 ? 2 : paso + suave(bruto - paso);
              pintar();
            },
          });
        }

        // Cifras: las líneas se dibujan y los números cuentan desde cero
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".equ__cifras", start: "top 86%", once: true },
        });
        tl.fromTo(
          ".equ__cifras",
          { "--raya-h": 0 },
          { "--raya-h": 1, duration: 1.3, ease: "power3.inOut" },
          0,
        )
          .fromTo(
            ".equ__cifra",
            { "--raya": 0 },
            { "--raya": 1, duration: 1.1, ease: "power3.inOut", stagger: 0.08 },
            0.1,
          )
          .fromTo(
            ".equ__cifra > *",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.04 },
            0.15,
          );
        nums.forEach((n, k) => {
          const fin = n.dataset.fin ?? "";
          const dec = fin.includes(".") ? 1 : 0;
          const cuenta = { v: 0 };
          n.textContent = (0).toFixed(dec);
          tl.to(
            cuenta,
            {
              v: parseFloat(fin) || 0,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                n.textContent = cuenta.v.toFixed(dec);
              },
              onComplete: () => {
                n.textContent = fin;
              },
            },
            0.15 + k * 0.08,
          );
        });
      }, el);
      ScrollTrigger.refresh();
    });

    return () => {
      cancelar();
      ctx?.revert();
      el.classList.remove("equ--orbita");
      el.querySelectorAll<HTMLElement>(".equ__carta").forEach((c) => {
        c.style.transform = "";
        c.style.zIndex = "";
      });
      // El contador escribe en el DOM: se deja el valor real
      nums.forEach((n) => {
        if (n.dataset.fin) n.textContent = n.dataset.fin;
      });
    };
  }, []);

  return (
    <section ref={raiz} className="equ" aria-labelledby="equ-tit" data-propio>
      <div className="equ__panel">
        <div className="marco">
          <header className="equ__cab">
            <span className="pildora pildora--arena">El Equipo</span>
            <h2 id="equ-tit" className="tit tit--l equ__tit">
              Equipo titulado, <br className="equ__br" />
              <em>trato humano.</em>
            </h2>
            <p className="cuerpo equ__txt">
              Detrás de cada protocolo hay un equipo cohesionado: médicos, auxiliares, recepción y
              bienestar trabajando en una misma sintonía. La cercanía no es una promesa de marketing
              — es la forma en que elegimos atenderte.
            </p>
          </header>

          <ul className="equ__cartas">
            {cartas.map((c) => (
              <li key={c.src} className={`equ__carta equ__carta--${c.lado}`}>
                <div className="equ__foto">
                  <Image src={c.src} alt={c.alt} fill sizes={c.sizes} loading="lazy" />
                </div>
                <span className="equ__chip">{c.chip}</span>
              </li>
            ))}
          </ul>
          <div className="equ__puntos" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <div className="equ__accion">
            <Boton href="/quienes-somos">Conoce a todo el equipo</Boton>
          </div>

          <dl className="equ__cifras">
            {cifras.map((c) => (
              <div key={c.rotulo} className="equ__cifra">
                <dt className="equ__rotulo">
                  {c.rotulo} <em className="serif">{c.fin}</em>
                </dt>
                <dd className="equ__valor">
                  {c.antes ? <sup>{c.antes}</sup> : null}
                  <span className="equ__num" data-fin={c.valor}>
                    {c.valor}
                  </span>
                  {c.despues ? <sup>{c.despues}</sup> : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
