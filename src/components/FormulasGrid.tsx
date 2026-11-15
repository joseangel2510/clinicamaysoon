import {
  Sparkles,
  Activity,
  Shield,
  Zap,
  Droplet,
  Star,
  Dumbbell,
} from "lucide-react";
import "./nuevo/ficha-texto.css";

const ICONS = {
  sparkles: Sparkles,
  activity: Activity,
  shield: Shield,
  zap: Zap,
  droplet: Droplet,
  star: Star,
  dumbbell: Dumbbell,
} as const;

type IconKey = keyof typeof ICONS;

interface Formula {
  name: string;
  tagline: string;
  description: string;
  icon: IconKey;
  highlight?: boolean;
}

interface FormulasGridProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  formulas: Formula[];
}

export function FormulasGrid({
  eyebrow,
  title,
  intro,
  formulas,
}: FormulasGridProps) {
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

      <div className="ft__formulas">
        {formulas.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <div
              key={f.name}
              className={
                f.highlight ? "ft__formula ft__formula--dest" : "ft__formula"
              }
              data-ap
            >
              <span className="ft__formula-ico" aria-hidden="true">
                <Icon strokeWidth={1.5} />
              </span>
              <h4 className="ft__formula-nom">{f.name}</h4>
              <p className="ft__formula-lema">{f.tagline}</p>
              <p className="ft__formula-txt">{f.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
