import "./nuevo/ficha-tarifas.css";

interface PricingRow {
  label: string;
  detail?: string;
  price: string;
}

interface PricingTableProps {
  title: string;
  intro?: string;
  rows: PricingRow[];
  footnote?: string;
}

// Tarifas: tarjeta blanca con filas separadas por línea discontinua;
// concepto y detalle a la izquierda, precio en cursiva serif a la derecha.
export function PricingTable({ title, intro, rows, footnote }: PricingTableProps) {
  return (
    <div className="fta__tar" data-ap>
      {/* Title */}
      <span className="pildora pildora--arena">Tarifas</span>
      <h4 className="tit fta__tar-tit">{title}</h4>
      {intro && <p className="fta__tar-intro">{intro}</p>}

      {/* Rows */}
      <ul className="fta__filas">
        {rows.map((r) => (
          <li key={`${r.label}-${r.price}`} className="fta__fila">
            <div className="fta__fila-txt">
              <span className="fta__fila-nom">{r.label}</span>
              {r.detail && <span className="fta__fila-det">{r.detail}</span>}
            </div>
            <span className="fta__precio serif">{r.price}</span>
          </li>
        ))}
      </ul>

      {/* Footnote */}
      {footnote && <p className="fta__nota">{footnote}</p>}
    </div>
  );
}
