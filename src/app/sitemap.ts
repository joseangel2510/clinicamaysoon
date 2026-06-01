import type { MetadataRoute } from "next";

const BASE_URL = "https://clinicamaysoon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const top = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/medicina-estetica", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/medicina-estetica/corporal", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/medicina-estetica/hombre", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/medicina-estetica/hombre/corporal", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/unidad-capilar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/aparatologia", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cirugias-menores", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/depilacion-laser", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/estetica", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/masajes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/tratamientos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/quienes-somos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/por-que-maysoon", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/formaciones", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  const tratamientos = [
    "armonizacion-mandibular",
    "blefaroplastia-plasmage",
    "bodytite",
    "bruxismo",
    "codigo-de-barras",
    "dermapen-micropuncion",
    "eliminacion-tatuajes",
    "esclerosis-varices",
    "hiperhidrosis",
    "intralipoterapia",
    "laser-erbio-yag",
    "laser-vascular",
    "lifting-retensor-endopeel",
    "luz-pulsada-ipl",
    "masculook",
    "mesoterapia",
    "micropigmentacion-microblading",
    "peelings-medicos",
    "plasma-gel-relleno",
    "prp",
    "rellenos-corporales",
    "sueroterapia",
    "tratamiento-celulitis",
    "tratamientos-intimos",
  ].map((slug) => ({
    path: `/tratamientos/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...top, ...tratamientos].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
