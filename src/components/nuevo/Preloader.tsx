"use client";

// Cortina de entrada: nueve listones oscuros con el logo; al terminar suben
// uno a uno desde el centro y dejan ver la página. Solo la primera carga de
// cada sesión. Sin JavaScript no se muestra (ver .pre en nuevo.css).
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { marcarListo, sinMovimiento } from "@/lib/mov";

const N = 9;

export function Preloader() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    const d = document.documentElement;
    let visto = false;
    try {
      visto = !!sessionStorage.getItem("maysoon-pre");
      sessionStorage.setItem("maysoon-pre", "1");
    } catch {}
    if (!el || visto || sinMovimiento()) {
      if (el) el.style.display = "none";
      marcarListo();
      return;
    }
    d.classList.add("pre-activo");
    const tl = gsap.timeline({
      onComplete: () => {
        el.style.display = "none";
        d.classList.remove("pre-activo");
      },
    });
    tl.fromTo(
      ".pre__logo",
      { opacity: 0, y: 14, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
      0.15,
    )
      .fromTo(
        ".pre__raya i",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.15, ease: "power2.inOut" },
        0.25,
      )
      .to(".pre__centro", { opacity: 0, y: -18, duration: 0.45, ease: "power2.in" }, 1.45)
      .add(() => marcarListo(), 1.7)
      .to(
        ".pre__liston",
        {
          yPercent: -101,
          duration: 1.05,
          ease: "power4.inOut",
          stagger: { each: 0.055, from: "center" },
        },
        1.7,
      );
    return () => {
      tl.kill();
      d.classList.remove("pre-activo");
      marcarListo();
    };
  }, []);

  return (
    <div ref={raiz} className="pre" aria-hidden="true">
      {Array.from({ length: N }).map((_, i) => (
        <span key={i} className="pre__liston" />
      ))}
      <div className="pre__centro">
        <Image
          className="pre__logo"
          src="/brand/logo-maysoon.png"
          alt=""
          width={364}
          height={121}
          priority
        />
        <span className="pre__raya">
          <i />
        </span>
      </div>
    </div>
  );
}
