import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./nuevo/catalogo.css";

interface TratamientoCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  href: string;
  priceFrom?: string;
}

// Ficha del índice de tratamientos: foto 4:3, categoría en píldora, nombre,
// descripción y precio de partida. Toda la ficha es un único enlace.
export function TratamientoCard({
  image,
  category,
  title,
  description,
  href,
  priceFrom,
}: TratamientoCardProps) {
  return (
    <Link href={href} className="ca__card">
      <div className="ca__foto">
        <Image
          src={image}
          alt={title}
          fill
          className="ca__img"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <span className="ca__flecha" aria-hidden="true">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </span>
      </div>
      <div className="ca__txt">
        <span className="pildora pildora--arena">{category}</span>
        <h3 className="ca__nombre">{title}</h3>
        <p className="ca__desc">{description}</p>
        {priceFrom && (
          <div className="ca__precio">
            <span className="ca__desde">Desde</span>
            <span className="serif ca__cifra">{priceFrom}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
