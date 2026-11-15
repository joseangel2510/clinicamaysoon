import { Check, AlertCircle, Plus } from "lucide-react";
import "./nuevo/ficha-texto.css";

type BulletStyle = "check" | "warning" | "plus";

interface BulletListBlockProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: string[];
  style?: BulletStyle;
  columns?: 1 | 2;
}

const ICONS = {
  check: Check,
  warning: AlertCircle,
  plus: Plus,
};

export function BulletListBlock({
  eyebrow,
  title,
  intro,
  items,
  style = "check",
  columns = 1,
}: BulletListBlockProps) {
  const Icon = ICONS[style];
  const iconClass = style === "warning" ? "ft__ico ft__ico--aviso" : "ft__ico";

  return (
    <div className="ft__bloque">
      {eyebrow && (
        <div className="ft__ceja" data-ap>
          <span className="pildora pildora--arena ft__pil">{eyebrow}</span>
        </div>
      )}
      <h3 className="tit tit--m ft__tit" data-tit>
        {title}
      </h3>
      {intro && (
        <p className="ft__p ft__intro" data-ap>
          {intro}
        </p>
      )}
      <ul className={columns === 2 ? "ft__lista ft__lista--2" : "ft__lista"}>
        {items.map((it) => (
          <li key={it} className="ft__item" data-ap>
            <Icon strokeWidth={1.5} className={iconClass} aria-hidden="true" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
