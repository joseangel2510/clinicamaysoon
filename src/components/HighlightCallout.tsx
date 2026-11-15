import { Quote, Lightbulb, AlertTriangle, Star } from "lucide-react";
import "./nuevo/ficha-texto.css";

const ICONS = {
  quote: Quote,
  insight: Lightbulb,
  warning: AlertTriangle,
  star: Star,
} as const;

type IconKey = keyof typeof ICONS;

interface HighlightCalloutProps {
  eyebrow?: string;
  text: string;
  icon?: IconKey;
}

export function HighlightCallout({
  eyebrow = "Sabías que",
  text,
  icon = "insight",
}: HighlightCalloutProps) {
  const Icon = ICONS[icon];
  return (
    <div className="ft__nota-caja" data-ap>
      <div className="ft__nota sobre-oscuro">
        <div className="ft__nota-cab">
          <span className="pildora pildora--cristal ft__pil">{eyebrow}</span>
          <span className="ft__nota-ico" aria-hidden="true">
            <Icon strokeWidth={1.5} />
          </span>
        </div>
        <p className="ft__nota-txt">{text}</p>
      </div>
    </div>
  );
}
