import "./nuevo/ficha-tarifas.css";

interface Stat {
  value: string;
  label: string;
  detail?: string;
}

interface StatsCardProps {
  eyebrow?: string;
  title?: string;
  stats: Stat[];
  variant?: "light" | "dark";
}

// Datos: cifras en cursiva serif separadas por líneas finas. La variante
// "dark" es el panel arena (el marrón se reserva para el cierre de la página)
// y "light", la tarjeta blanca.
export function StatsCard({
  eyebrow,
  title,
  stats,
  variant = "dark",
}: StatsCardProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={`fta__dat ${isDark ? "fta__dat--arena" : "fta__dat--blanco"}`}
      data-ap
    >
      {eyebrow && (
        <span className={isDark ? "pildora" : "pildora pildora--arena"}>
          {eyebrow}
        </span>
      )}
      {title && <h4 className="tit fta__dat-tit">{title}</h4>}
      <div className="fta__dat-clip">
        <div className="fta__dat-red">
          {stats.map((s) => (
            <div key={`${s.value}-${s.label}`} className="fta__dato">
              <div className="serif fta__dato-cifra">{s.value}</div>
              <div className="fta__dato-nom">{s.label}</div>
              {s.detail && <div className="fta__dato-det">{s.detail}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
