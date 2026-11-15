import "./nuevo/ficha-tarifas.css";

interface ZonePriceCardProps {
  category: string;
  sessionPrice: string;
  bonoPrice: string;
  zones: string[];
  highlight?: boolean;
}

// Tarjeta de zona: categoría en píldora, los dos precios en cursiva serif
// separados por una línea y las zonas como etiquetas. La destacada va sobre
// arena y lleva la marca de tres listones. La aparición va en el envoltorio
// y el hover en la tarjeta, para que no se pisen.
export function ZonePriceCard({
  category,
  sessionPrice,
  bonoPrice,
  zones,
  highlight = false,
}: ZonePriceCardProps) {
  return (
    <div className="fta__zona-ap" data-ap>
      <div className={`fta__zona${highlight ? " fta__zona--des" : ""}`}>
        {/* Category badge */}
        <div className="fta__zona-cab">
          <span className={highlight ? "pildora" : "pildora pildora--arena"}>
            {category}
          </span>
          {highlight && (
            <span className="fta__marca" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
        </div>

        {/* Prices */}
        <div className="fta__zona-precios">
          <div className="fta__zona-precio">
            <span className="fta__micro">Sesión</span>
            <span className="serif fta__zona-cifra">{sessionPrice}</span>
          </div>
          <div className="fta__zona-precio">
            <span className="fta__micro">Bono · 5 sesiones</span>
            <span className="serif fta__zona-cifra">{bonoPrice}</span>
          </div>
        </div>

        {/* Zones included */}
        <div className="fta__zona-zonas">
          <span className="fta__micro">Zona a elegir</span>
          <ul className="fta__chips">
            {zones.map((z) => (
              <li key={z} className="fta__chip">
                {z}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
