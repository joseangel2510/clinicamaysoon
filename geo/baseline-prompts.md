# Baseline GEO — Prompts objetivo Maysoon

> **Estos son los 22 prompts que vamos a correr en ChatGPT y Perplexity** para medir
> dónde está hoy Maysoon en respuestas de IA. El resultado se anota en
> `baseline-tracking-template.md`.
>
> **Objetivo**: dejar un "antes" cuantificable para poder enseñar al cliente la
> evolución mes a mes vs. baseline.

## Cómo se usan

1. Abre **ChatGPT** (cuenta gratis o plus) y **Perplexity** en pestañas separadas.
2. Para **cada prompt**, ejecútalo **3 veces seguidas en cada motor** (3 × ChatGPT
   + 3 × Perplexity = 6 corridas por prompt). Las respuestas varían entre corridas
   — por eso necesitamos varias para tener una señal fiable.
3. En cada corrida anota en la tabla (ver `baseline-tracking-template.md`):
   - ¿Apareció **Maysoon**? (Sí/No)
   - Si sí, ¿en qué posición? (1ª, 2ª, 3ª… en el listado de la respuesta)
   - ¿Qué **otras clínicas valencianas** aparecieron? (esos son tus competidores reales)
   - ¿Qué **URLs/fuentes** cita la IA en su respuesta?

**Tiempo total estimado**: 45-60 minutos para los 22 prompts × 6 corridas = 132 corridas.

## Tip: cómo "limpiar" el contexto entre corridas

ChatGPT y Perplexity tienen memoria de conversación. Para que cada corrida sea independiente:
- **ChatGPT**: abrir un **chat nuevo** entre prompts (botón "Nuevo chat").
- **Perplexity**: cambiar al modo "Búsqueda nueva" o refrescar la página.
- O usar **modo incógnito** del navegador.

---

## 🎯 Los 22 prompts (agrupados por intención)

### A. Búsqueda general / decisional (5 prompts)
Captan al paciente que aún no tiene clínica favorita.

```
1.  Mejor clínica de medicina estética en Valencia
2.  Recomiéndame una clínica de medicina estética en Valencia
3.  Cómo elegir una clínica de medicina estética fiable en Valencia
4.  Clínicas de medicina estética con mejores valoraciones en Valencia
5.  Mejor clínica para tratamientos estéticos no quirúrgicos en Valencia
```

### B. Tratamiento específico → ciudad (9 prompts)
Captan al paciente que ya sabe qué quiere y busca dónde hacérselo.

```
6.  Dónde hacerme un tratamiento de bótox en Valencia
7.  Mejor clínica para BodyTite en Valencia
8.  Trasplante capilar FUE en Valencia, qué clínica recomiendas
9.  Tratamiento de la papada sin cirugía en Valencia
10. Clínica para hilos tensores faciales en Valencia
11. Eliminación de tatuajes con láser en Valencia
12. Blefaroplastia sin cirugía en Valencia
13. Tratamiento del bruxismo con bótox en Valencia
14. Cómo definir la mandíbula masculina sin cirugía en Valencia
```

### C. Decisión / comparación (4 prompts)
Aquí la IA suele dar respuestas con bloques largos — perfectos para que cite contenido de fichas.

```
15. BodyTite vs liposucción tradicional, qué es mejor
16. FUE vs DHI para trasplante capilar
17. PLASMAGE o blefaroplastia quirúrgica, qué elegir
18. Cuánto cuesta el bótox en Valencia
```

### D. Problema → solución (4 prompts)
Captan al paciente con un síntoma concreto que no sabe qué tratamiento le toca.

```
19. Tengo arrugas en el código de barras, qué tratamiento sirve
20. Cómo eliminar manchas faciales sin cirugía
21. Tengo celulitis avanzada, qué tratamiento médico funciona
22. Cómo reducir la sudoración excesiva de las axilas
```

---

## Qué esperar del baseline

Realista para una marca pequeña-mediana en una ciudad:
- **Prompts A (decisional)**: la IA suele citar las clínicas más antiguas con más reseñas de Google.
  Si Maysoon no sale aún, **es normal** — esto es el "antes" que vamos a mover.
- **Prompts B (servicio + ciudad)**: aquí Maysoon tiene la mejor oportunidad porque ya tenemos
  fichas dedicadas con FAQ y schema. La IA debería empezar a citar la web tras unas semanas.
- **Prompts C (comparación)**: la IA suele dar respuestas estructuradas sin citar clínica concreta.
  Aquí lo importante es ver si **cita clinicamaysoon.com como fuente** (no como recomendación).
- **Prompts D (problema)**: igual que C — la IA explica la solución; si cita Maysoon como fuente, es una victoria.

Línea base sana de referencia para una marca de salud local: **~10% de tasa de mención**
en el primer trimestre. Lo que más importa NO es el número absoluto, sino la **brecha vs. el
competidor líder valenciano** que descubramos.

## Después de correr los prompts

1. Rellena `baseline-tracking-template.md` con los datos.
2. Identifica los **3-5 competidores valencianos** que más aparecen → son los reales.
3. Apunta los **dominios que la IA cita como fuente** (Doctoralia, Top Doctors, etc.) —
   eso te dice dónde hay que estar presente en la Fase 4 off-site.

Cuando tengas los datos, los procesamos juntos y montamos el reporte "antes" oficial.
