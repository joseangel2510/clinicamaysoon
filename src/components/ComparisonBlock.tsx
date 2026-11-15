import "./nuevo/ficha-tarifas.css";
import type { CSSProperties } from "react";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  values: (string | boolean)[];
}

interface ComparisonBlockProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  competitors: string[];
  rows: ComparisonRow[];
}

// Comparativa: filas con línea discontinua y la columna de Maysoon sobre
// blanco. En móvil cada característica pasa a una fila apilada, con los
// valores debajo alineados con los nombres de la cabecera.
export function ComparisonBlock({
  eyebrow,
  title,
  intro,
  competitors,
  rows,
}: ComparisonBlockProps) {
  return (
    <div className="fta__cmp">
      {eyebrow && (
        <div data-ap>
          <span className="pildora pildora--arena">{eyebrow}</span>
        </div>
      )}
      <h3 className="tit tit--m fta__cmp-tit" data-tit>
        {title}
      </h3>
      {intro && (
        <p className="fta__cmp-intro" data-ap>
          {intro}
        </p>
      )}

      <div className="fta__cmp-caja" data-ap>
        <table
          role="table"
          className="fta__tabla"
          style={{ "--fta-n": competitors.length } as CSSProperties}
        >
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader" scope="col" className="fta__th-car">
                <span className="fta__micro">Característica</span>
              </th>
              {competitors.map((c, i) => {
                const isMaysoon = i === 0;
                return (
                  <th
                    key={c}
                    role="columnheader"
                    scope="col"
                    className={`fta__th${isMaysoon ? " fta__th--casa" : ""}`}
                  >
                    <span className={`fta__th-nom${isMaysoon ? " serif" : ""}`}>
                      {c}
                    </span>
                    {isMaysoon && (
                      <span className="fta__micro fta__th-eq">
                        Nuestro equipo
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {rows.map((r) => (
              <tr key={r.feature} role="row">
                <td role="cell" className="fta__td-car">
                  {r.feature}
                </td>
                {r.values.map((v, vIdx) => {
                  const isMaysoon = vIdx === 0;
                  return (
                    <td
                      key={`${r.feature}-${vIdx}`}
                      role="cell"
                      className={`fta__td${isMaysoon ? " fta__td--casa" : ""}`}
                    >
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check size={20} strokeWidth={1.5} className="fta__si" />
                        ) : (
                          <X size={20} strokeWidth={1.5} className="fta__no" />
                        )
                      ) : (
                        <span>{v}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
