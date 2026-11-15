import "./nuevo/ficha-texto.css";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  steps: Step[];
}

export function ProcessSteps({ eyebrow, title, steps }: ProcessStepsProps) {
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

      <ol className="ft__pasos">
        {steps.map((s, i) => {
          const number = String(i + 1).padStart(2, "0");
          return (
            <li key={s.title} className="ft__paso" data-ap>
              <span className="serif ft__num">{number}</span>
              <div>
                <h4 className="ft__paso-tit">{s.title}</h4>
                <p className="ft__p ft__paso-txt">{s.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
