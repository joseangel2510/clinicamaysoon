"use client";

import "./nuevo/zonas.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/medicina-estetica", label: "Mujer · Facial" },
  { href: "/medicina-estetica/corporal", label: "Mujer · Cuerpo" },
  { href: "/medicina-estetica/hombre", label: "Hombre · Facial" },
  { href: "/medicina-estetica/hombre/corporal", label: "Hombre · Cuerpo" },
];

// Pestañas entre los cuatro catálogos: cápsula segmentada, la activa en cacao.
export function MedicinaEsteticaTabs() {
  const pathname = usePathname();

  return (
    <div className="marco zo__tabs">
      <div className="zo__tabs-cap" data-ap>
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className="zo__tab"
              aria-current={active ? "page" : undefined}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
