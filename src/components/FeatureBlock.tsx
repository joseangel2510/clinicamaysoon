// Una razón: fila grande con línea fina. El índice (01, 02…) lo pone el CSS
// con un contador, en cursiva serif.
import "./nuevo/nosotros.css";
import type { ComponentType } from "react";

interface FeatureBlockProps {
  icon: ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  description: string;
  isLast?: boolean;
}

export function FeatureBlock({
  icon: Icon,
  title,
  description,
  isLast = false,
}: FeatureBlockProps) {
  return (
    <div className={`no__razon${isLast ? " no__razon--fin" : ""}`} data-ap>
      <h3 className="no__razon-tit">{title}</h3>
      <p className="no__razon-desc">{description}</p>
      <span className="no__razon-ico" aria-hidden="true">
        <Icon size={20} strokeWidth={1.5} />
      </span>
    </div>
  );
}
