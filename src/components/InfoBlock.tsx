import "./nuevo/ficha-texto.css";

interface InfoBlockProps {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
}

export function InfoBlock({ eyebrow, title, paragraphs }: InfoBlockProps) {
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
      <div className="ft__txt">
        {paragraphs.map((p, i) => (
          <p key={i} className="ft__p" data-ap>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
