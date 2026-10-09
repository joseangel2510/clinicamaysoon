import { getImageProps } from "next/image";

interface ArtDirectedImageProps {
  src: string;
  mobileSrc: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
  /** Ancho (px) a partir del cual se usa `src` en lugar de `mobileSrc`. */
  minWidth?: number;
}

// Foto con versión propia para móvil (<768px por defecto): cada dispositivo
// descarga solo la suya. Se comporta como <Image fill>, así que el padre debe
// ser relative.
export function ArtDirectedImage({
  src,
  mobileSrc,
  alt,
  sizes,
  className,
  eager = false,
  minWidth = 768,
}: ArtDirectedImageProps) {
  const common = { alt, sizes, fill: true };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: mobileSrc,
    ...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {}),
  });

  return (
    <picture>
      <source media={`(min-width: ${minWidth}px)`} srcSet={desktop} sizes={sizes} />
      <img {...rest} srcSet={mobile} alt={alt} className={className} />
    </picture>
  );
}
