import "./nuevo/zonas.css";

interface ZonaNavItem {
  id: string;
  label: string;
}

interface ZonaNavProps {
  zonas: ZonaNavItem[];
}

// Raíl de zonas: cápsula esmerilada con una píldora por zona. Se queda
// pegada bajo la cabecera y en móvil se desliza en horizontal.
export function ZonaNav({ zonas }: ZonaNavProps) {
  return (
    <nav aria-label="Navegación por zonas del rostro" className="zo__nav">
      <div className="zo__nav-cap" data-ap>
        <span className="pildora">Zonas Tratadas</span>

        <ul className="zo__nav-rail">
          {zonas.map((z) => (
            <li key={z.id}>
              <a href={`#${z.id}`} className="zo__pill">
                {z.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
