/**
 * Contenido citable para las 24 fichas de tratamiento:
 *
 *  - `directAnswer`: bloque de 40-60 palabras que responde "¿Qué es X?".
 *    Es el formato que la IA copia tal cual en sus respuestas.
 *  - `faqs`: 4 preguntas reales (las que un paciente le hace a la IA) con
 *    respuesta directa de 40-60 palabras cada una. Se marcan con
 *    schema.org/FAQPage para máxima visibilidad en buscadores de IA.
 *
 * Reglas internas del redactado:
 *  - Primera frase = respuesta directa, sin preámbulo.
 *  - Sin precios concretos (los precios reales están en /tratamientos catalog).
 *  - Sin duraciones exactas en años cuando no hay evidencia clínica genérica
 *    para afirmarlo — se usa lenguaje cualitativo ("varios meses", "duradero").
 *  - Tono: clínico-cercano. Sin jerga gratuita.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TreatmentContent {
  directAnswer: string;
  faqs: FAQItem[];
}

export const TREATMENT_CONTENT: Record<string, TreatmentContent> = {
  "armonizacion-mandibular": {
    directAnswer:
      "La armonización mandibular es la definición del tercio inferior del rostro con ácido hialurónico inyectable. Refuerza el ángulo mandibular y el mentón para conseguir una forma en V femenina o un ángulo más marcado en hombre. Es indolora, ambulatoria y reversible.",
    faqs: [
      {
        question: "¿En qué consiste la armonización mandibular?",
        answer:
          "Se infiltra ácido hialurónico de alta densidad en puntos estratégicos del ángulo mandibular y el mentón. El producto aporta proyección y simetría sin cirugía. La sesión dura unos 30-45 minutos y la reincorporación a la vida normal es inmediata.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "El cambio se aprecia desde el primer momento, aunque el resultado definitivo se asienta entre la primera y la segunda semana, cuando baja la inflamación inicial. La proyección del óvalo facial es visible en el espejo y en fotos desde el mismo día del tratamiento.",
      },
      {
        question: "¿Es reversible?",
        answer:
          "Sí. El ácido hialurónico es reversible mediante hialuronidasa, una enzima que lo disuelve si el resultado no convence. Esta característica es una de las grandes ventajas frente a procedimientos quirúrgicos o implantes. La reversión es rápida y se realiza en consulta.",
      },
      {
        question: "¿En qué se diferencia de la cirugía mandibular?",
        answer:
          "La armonización con ácido hialurónico no implica bisturí, anestesia general ni baja médica. El resultado es natural pero no permanente: se reabsorbe progresivamente. La cirugía da resultados definitivos pero con mayor riesgo y recuperación más larga. Es la primera opción para empezar.",
      },
    ],
  },

  "blefaroplastia-plasmage": {
    directAnswer:
      "La blefaroplastia con PLASMAGE es una técnica no quirúrgica que utiliza el cuarto estado de la materia (plasma) para tensar la piel del párpado y eliminar el exceso cutáneo sin bisturí. Se realiza con anestesia tópica y permite recuperar una mirada descansada sin pasar por quirófano.",
    faqs: [
      {
        question: "¿En qué se diferencia PLASMAGE de la cirugía de párpados?",
        answer:
          "PLASMAGE no requiere bisturí, puntos ni anestesia general. Trabaja con micro-impactos de plasma que sublimal la piel sobrante y estimulan el colágeno. La recuperación es de unos pocos días vs. semanas de la cirugía, y no deja cicatriz visible. La cirugía sigue siendo más radical para casos avanzados.",
      },
      {
        question: "¿Para qué tipo de párpados está indicado?",
        answer:
          "Es ideal para flacidez leve o moderada del párpado superior, exceso de piel inicial y arrugas finas peri-oculares. En casos de bolsas grasas marcadas o exceso cutáneo severo, la cirugía clásica puede dar mejores resultados. La valoración médica previa decide el procedimiento adecuado.",
      },
      {
        question: "¿Cuánto dura la recuperación?",
        answer:
          "La zona tratada presenta pequeñas costras puntiformes durante 5-7 días que caen solas. La inflamación es leve y la vida social puede retomarse en una semana. No hay baja laboral salvo trabajos muy expuestos. Se evita maquillaje sobre la zona hasta que las costras caen.",
      },
      {
        question: "¿También sirve para arrugas peribucales y lesiones cutáneas?",
        answer:
          "Sí. PLASMAGE también trata el código de barras del labio superior, plasmalifting facial y eliminación de lesiones cutáneas como lunares, verrugas y queratosis seborreicas. La versatilidad de la tecnología plasma es uno de sus puntos fuertes frente a otras técnicas.",
      },
    ],
  },

  "bodytite": {
    directAnswer:
      "BodyTite es una técnica de remodelación corporal aprobada por la FDA que combina radiofrecuencia profunda y superficial mediante una sonda fina. Disuelve la grasa subcutánea mientras tensa la piel desde dentro, ofreciendo resultados naturales sin el trauma de una liposucción tradicional.",
    faqs: [
      {
        question: "¿En qué se diferencia BodyTite de la liposucción?",
        answer:
          "BodyTite es mínimamente invasiva: micro-incisiones de pocos milímetros frente a las incisiones más amplias de la liposucción. Además, tensa la piel mientras elimina grasa — la lipo solo elimina grasa, por lo que en pieles con flacidez puede dejar exceso cutáneo. La recuperación es de días, no semanas.",
      },
      {
        question: "¿Qué zonas se pueden tratar?",
        answer:
          "BodyTite trata abdomen, flancos, muslos, brazos y papada. Sus variantes FaceTite trabajan facial y papada con sonda específica, y AccuTite zonas pequeñas y delicadas como bolsas oculares o surcos nasogenianos. Cada zona requiere un cabezal con tamaño y parámetros optimizados.",
      },
      {
        question: "¿Cuál es la recuperación tras BodyTite?",
        answer:
          "La intervención se realiza con anestesia local. Tras la sesión puede haber leve inflamación y hematomas que ceden en pocos días. La vida normal se retoma a los 3-7 días según la zona y la cantidad de tejido tratado. Se recomienda usar una prenda compresiva durante varias semanas.",
      },
      {
        question: "¿Cuándo se ven los resultados finales?",
        answer:
          "Los primeros cambios se aprecian al mes, cuando baja la inflamación. El tensado cutáneo es progresivo porque depende de la producción de colágeno nuevo, que se consolida entre los 3 y 6 meses. El resultado se mantiene en el tiempo si no hay grandes oscilaciones de peso.",
      },
    ],
  },

  "bruxismo": {
    directAnswer:
      "El tratamiento del bruxismo con toxina botulínica relaja los músculos maseteros que aprietan involuntariamente la mandíbula, especialmente durante el sueño. Reduce las cefaleas tensionales, protege la articulación temporomandibular y las piezas dentales, y como efecto añadido afina y suaviza la mandíbula.",
    faqs: [
      {
        question: "¿Cómo funciona la toxina botulínica en los maseteros?",
        answer:
          "La toxina bloquea la señal nerviosa que ordena la contracción del músculo masetero. Al relajarse, el rechinar y apretar nocturno disminuyen drásticamente. El músculo, al usarse menos, también pierde volumen progresivamente, lo que afina el contorno facial sin alterar la función masticatoria normal.",
      },
      {
        question: "¿Tiene efecto estético además del terapéutico?",
        answer:
          "Sí. Al reducirse el volumen muscular del masetero, la mandíbula se afina y aparece una forma en V más estilizada en mujeres y una mandíbula menos cuadrada en hombres. Es una de las razones por las que el tratamiento se demanda con doble finalidad: protección dental + mejora estética.",
      },
      {
        question: "¿Cuánto dura el efecto?",
        answer:
          "El efecto relajante dura habitualmente 4-6 meses. La modificación del contorno facial es más duradera porque el músculo, al pasar tiempo sin contraerse con fuerza, tarda en recuperar su volumen original. Con sesiones de mantenimiento espaciadas se consolida el efecto a largo plazo.",
      },
      {
        question: "¿Afecta a la masticación normal?",
        answer:
          "No. La dosis se calcula para relajar el masetero sin anular su función. El paciente come, habla y mastica con normalidad — lo que desaparece es la fuerza desproporcionada del apriete nocturno y la tensión continua. Se hace una sesión de revisión a los 15 días para ajustar si fuera necesario.",
      },
    ],
  },

  "codigo-de-barras": {
    directAnswer:
      "El código de barras es el conjunto de arrugas verticales que aparecen sobre el labio superior con la edad. En Maysoon se trata de forma personalizada combinando ácido hialurónico para rellenar las líneas, toxina botulínica para relajar la zona y láser CO2 o plasma para resurfacing cuando el grado es avanzado.",
    faqs: [
      {
        question: "¿Por qué aparecen las arrugas peribucales?",
        answer:
          "Aparecen por la combinación de pérdida de colágeno, contracción repetida del músculo orbicular de los labios al hablar y gesticular, fotoexposición y, en algunos casos, tabaquismo. Son más marcadas en mujeres por la diferencia en la densidad muscular y cutánea de la zona.",
      },
      {
        question: "¿Cuándo se combina ácido hialurónico con láser?",
        answer:
          "Cuando las arrugas son profundas y la piel está fina. El ácido hialurónico rellena el surco desde dentro y el láser CO2 o plasma trabaja la superficie cutánea, estimulando colágeno nuevo. La combinación da resultados mejores que cualquiera de las dos técnicas por separado.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "El ácido hialurónico se mantiene 9-12 meses según el producto y el metabolismo. El efecto de la toxina botulínica dura 4-6 meses. El resurfacing con láser tiene efecto más duradero porque genera colágeno nuevo. El plan suele incluir retoques anuales para mantener el resultado.",
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer:
          "Con anestesia tópica las molestias son mínimas. El ácido hialurónico ya viene con anestésico incorporado en muchas marcas. El láser puede ser más molesto y se aplica frío local para mejorar el confort. Tras la sesión puede haber inflamación leve durante 24-48 horas.",
      },
    ],
  },

  "dermapen-micropuncion": {
    directAnswer:
      "DermaPen es un dispositivo de micropunción con agujas finas que genera 65.000 microcanales por minuto en la piel. Estos microcanales facilitan la absorción de activos cosmecéuticos y estimulan la producción natural de colágeno y elastina, mejorando arrugas, manchas, cicatrices y poros dilatados.",
    faqs: [
      {
        question: "¿Qué afecciones cutáneas mejora DermaPen?",
        answer:
          "Mejora arrugas finas, cicatrices de acné, marcas postraumáticas, estrías recientes, manchas e hiperpigmentación, poros dilatados y flacidez cutánea inicial. Es uno de los tratamientos más versátiles porque trabaja a la vez sobre textura, color y firmeza de la piel.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "El protocolo estándar son 3-6 sesiones espaciadas 3-4 semanas. El número exacto depende del problema a tratar: cicatrices de acné necesitan más sesiones que un mantenimiento antiedad. Se recomienda mantenimiento 1-2 veces al año una vez alcanzado el resultado.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "Se aplica crema anestésica 30 minutos antes para reducir la sensibilidad. Durante el tratamiento se nota una vibración con leve picor. Tras la sesión la piel queda rojiza durante 24-48 horas, como una quemadura solar leve. La descamación posterior es muy ligera.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "Los primeros resultados se aprecian tras la segunda sesión, cuando la piel empieza a producir colágeno nuevo. El efecto pleno se consolida 4-6 meses después de la última sesión, porque el proceso de remodelación tisular es progresivo. La piel queda más luminosa, uniforme y firme.",
      },
    ],
  },

  "eliminacion-tatuajes": {
    directAnswer:
      "La eliminación de tatuajes con láser fragmenta las partículas de tinta en trozos lo suficientemente pequeños para que el sistema linfático los reabsorba y elimine. El proceso es progresivo, sesión a sesión, y conserva la integridad de la piel sin cicatrices ni marcas visibles.",
    faqs: [
      {
        question: "¿Cuántas sesiones necesito para borrar un tatuaje?",
        answer:
          "Depende de varios factores: tamaño, profundidad de la tinta, color, antigüedad y tipo de piel. Como referencia, un tatuaje pequeño y oscuro puede necesitar entre 5 y 10 sesiones, mientras que tatuajes grandes, multicolor o con tintas claras pueden requerir más de 12 sesiones, espaciadas 6-8 semanas.",
      },
      {
        question: "¿Deja cicatrices?",
        answer:
          "Con la tecnología láser actual y un protocolo adecuado, no debería dejar cicatrices. La piel puede quedar temporalmente más rosada o blanquecina durante las primeras semanas tras cada sesión, recuperando su tono normal con el tiempo. El riesgo aumenta si no se respetan los intervalos entre sesiones.",
      },
      {
        question: "¿Qué tatuajes son más difíciles de eliminar?",
        answer:
          "Los tatuajes de colores claros (amarillo, verde, azul claro, blanco) son los más complejos porque la tinta absorbe peor las longitudes de onda del láser. Los tatuajes profesionales modernos con tintas concentradas también necesitan más sesiones que los tatuajes antiguos o amateur.",
      },
      {
        question: "¿Es doloroso el procedimiento?",
        answer:
          "La sensación se compara con la de un elástico golpeando la piel repetidamente. Se aplica frío local para minimizar la molestia y, si el tatuaje es grande o el paciente muy sensible, se puede usar anestesia tópica. Tras la sesión puede haber inflamación leve durante 24-48 horas.",
      },
    ],
  },

  "esclerosis-varices": {
    directAnswer:
      "La esclerosis de varices es un tratamiento médico ambulatorio que consiste en inyectar una sustancia esclerosante dentro de la vena afectada. Esta sustancia cierra la vena, que el cuerpo va reabsorbiendo progresivamente. Es la solución para varículas y varices pequeñas o medianas, evitando la cirugía si se aborda a tiempo.",
    faqs: [
      {
        question: "¿Qué varices se pueden tratar sin cirugía?",
        answer:
          "Se tratan varículas (arañas vasculares), varices reticulares y varices tronculares pequeñas o medianas. Las varices muy gruesas, tortuosas o con insuficiencia venosa avanzada pueden requerir otras técnicas como láser endovascular o cirugía. La valoración previa con ecografía Doppler decide el método adecuado.",
      },
      {
        question: "¿Cómo se aplica el esclerosante?",
        answer:
          "Con una aguja muy fina se inyecta una pequeña cantidad de líquido esclerosante directamente dentro de la vena. La sesión dura entre 30 y 45 minutos. Tras el tratamiento se recomienda usar medias de compresión durante unos días para favorecer el cierre venoso correcto.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "La sensación es de pequeños pinchazos con leve escozor. La aguja es muy fina y se elige una técnica de inyección que minimiza la molestia. Tras la sesión puede aparecer un hematoma local que desaparece en pocos días y una pigmentación temporal en la zona tratada.",
      },
      {
        question: "¿Cuándo desaparecen las venas?",
        answer:
          "Las varículas pequeñas pueden desaparecer en 4-8 semanas. Las varices más gruesas necesitan varias sesiones espaciadas un mes y la reabsorción completa puede llevar varios meses. Es habitual repetir el tratamiento periódicamente, ya que pueden aparecer venas nuevas por la predisposición genética.",
      },
    ],
  },

  "hiperhidrosis": {
    directAnswer:
      "La hiperhidrosis es la sudoración excesiva que no responde a la temperatura ambiente ni al ejercicio. Se trata principalmente con toxina botulínica inyectada en la zona afectada (axilas, manos, pies), que bloquea la señal nerviosa que activa las glándulas sudoríparas. Su efectividad clínica supera el 90%.",
    faqs: [
      {
        question: "¿Cómo funciona la toxina botulínica para la sudoración?",
        answer:
          "La toxina bloquea la liberación de acetilcolina, el neurotransmisor que activa las glándulas sudoríparas. Sin esa señal, la glándula deja de producir sudor en la zona infiltrada. El resto del cuerpo sigue regulando la temperatura corporal con normalidad — no hay efecto sistémico.",
      },
      {
        question: "¿Cuánto dura el efecto?",
        answer:
          "El efecto se mantiene habitualmente entre 6 y 9 meses, según la zona y la sensibilidad individual. En manos y pies puede durar algo menos por la mayor densidad de glándulas. Se recomienda sesión de mantenimiento al final de ese periodo si el paciente quiere conservar el resultado.",
      },
      {
        question: "¿Es doloroso, sobre todo en manos y pies?",
        answer:
          "En axilas es muy tolerable: las agujas son muy finas y la sensación es similar a la mesoterapia. En manos y pies, donde la piel es más sensible, se aplica anestesia tópica y/o frío local. En casos especialmente sensibles se puede usar bloqueo regional con anestésico local.",
      },
      {
        question: "¿Hay alternativas a la toxina botulínica?",
        answer:
          "Sí. Para hiperhidrosis axilar también puede usarse Morpheus 8 (radiofrecuencia fraccionada), que destruye las glándulas sudoríparas de forma más definitiva. La elección depende del grado, la zona y las preferencias del paciente. Una valoración médica orienta la mejor opción para cada caso.",
      },
    ],
  },

  "intralipoterapia": {
    directAnswer:
      "La intralipoterapia es un tratamiento inyectable que elimina grasa localizada sin cirugía. Se aplica Adipozon, un compuesto que actúa sobre las células grasas (adipocitos) provocando su destrucción controlada. El propio organismo elimina los residuos por vía linfática durante las semanas siguientes a la sesión.",
    faqs: [
      {
        question: "¿En qué zonas se puede aplicar?",
        answer:
          "Las zonas más habituales son abdomen, flancos (michelines), cartucheras, parte interna de los muslos y papada. Está indicada para acumulaciones de grasa rebeldes que no responden a dieta o ejercicio. No es un tratamiento para sobrepeso global, sino para grasa localizada en personas con peso estable.",
      },
      {
        question: "¿Cómo se realiza el procedimiento?",
        answer:
          "Con una aguja fina se infiltra Adipozon en múltiples puntos de la zona a tratar. La sesión dura 30-60 minutos según la extensión. No requiere anestesia general — la propia fórmula incorpora anestésico local. La reincorporación a la vida normal es inmediata, salvo deporte intenso durante 48 horas.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer:
          "El protocolo estándar son 2-4 sesiones espaciadas 4-6 semanas. El número depende del volumen de grasa y de la respuesta individual. Los primeros cambios son visibles a partir de la segunda sesión, y el resultado final se consolida unos 2 meses tras la última infiltración.",
      },
      {
        question: "¿Tiene efectos secundarios?",
        answer:
          "Tras la sesión es habitual cierta inflamación, hipersensibilidad y, ocasionalmente, hematomas leves en la zona tratada. Estos efectos ceden en pocos días. Es importante seguir las indicaciones post-tratamiento (hidratación, evitar exposición solar directa) para optimizar la eliminación de grasa y el confort.",
      },
    ],
  },

  "laser-co2": {
    directAnswer:
      "El láser CO2 fraccionado es un láser ablativo de 10.600 nm que crea microcolumnas de tratamiento en la piel separadas por tejido sano. Elimina la capa dañada y estimula colágeno nuevo, por lo que trata arrugas, marcas de acné, cicatrices, textura irregular y la flacidez del contorno de ojos.",
    faqs: [
      {
        question: "¿Qué trata el láser CO2?",
        answer:
          "Arrugas finas y medias, marcas y cicatrices de acné, poro dilatado, textura irregular, manchas solares y fotoenvejecimiento. Con parámetros específicos también retensa la piel de párpados y ojeras. La indicación y la intensidad se deciden siempre en una valoración médica previa.",
      },
      {
        question: "¿Duele y cómo es la recuperación?",
        answer:
          "Se aplica anestesia tópica antes de la sesión, por lo que se tolera bien. Después la piel queda enrojecida y caliente unas horas, y aparecen costritas finas y descamación durante 5-7 días. Hay que hidratar bien la piel y usar fotoprotección estricta durante los meses siguientes.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "Al terminar la descamación la piel ya se ve más lisa y luminosa. El efecto tensor y la mejora de arrugas y cicatrices siguen avanzando durante 3-6 meses, a medida que se forma colágeno nuevo. En cicatrices de acné suelen necesitarse varias sesiones espaciadas.",
      },
      {
        question: "¿En qué se diferencia del láser Erbio YAG?",
        answer:
          "Los dos son láseres ablativos. El CO2 genera más calor en la dermis, por lo que produce mayor retensado y estimulación de colágeno, con una recuperación algo más larga. El Erbio YAG es más superficial y selectivo. En consulta se elige el más adecuado para cada piel y objetivo.",
      },
    ],
  },

  "laser-erbio-yag": {
    directAnswer:
      "El láser Erbio YAG es una tecnología láser ablativa que actúa sobre las capas superficiales de la piel con alta precisión y mínimo daño térmico al tejido sano circundante. En Maysoon se utiliza en tres modalidades: quirúrgico (lesiones), Velo de Novia (peeling láser) y fraccionado para resurfacing facial.",
    faqs: [
      {
        question: "¿Qué modalidades existen y para qué sirven?",
        answer:
          "La modalidad quirúrgica elimina lesiones cutáneas (verrugas, lunares, queratosis). El Velo de Novia es un peeling láser ligero que aporta luminosidad y suaviza líneas finas. El fraccionado/resurfacing trata arrugas más marcadas, cicatrices de acné y fotoenvejecimiento al estimular colágeno en profundidad.",
      },
      {
        question: "¿Es doloroso y cuál es la recuperación?",
        answer:
          "Las modalidades superficiales se toleran con crema anestésica. El resurfacing necesita anestesia tópica más potente o bloqueos. La piel queda rojiza y descama durante 3-7 días según la modalidad. Es importante evitar exposición solar y aplicar fotoprotección estricta durante los meses siguientes.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "Tras la cicatrización inicial (1-2 semanas), la piel se ve más uniforme, luminosa y con menos imperfecciones. El efecto pleno se consolida 3-6 meses después, porque el láser estimula la producción gradual de colágeno nuevo. Los resultados se mantienen en el tiempo con cuidado y protección solar adecuados.",
      },
      {
        question: "¿Sirve para las marcas de acné?",
        answer:
          "Sí, las cicatrices de acné son una de sus indicaciones estrella. El láser Erbio YAG fraccionado pule la superficie y estimula colágeno que rellena las depresiones desde dentro. Se requieren habitualmente 3-5 sesiones espaciadas 6-8 semanas. La mejora es progresiva y muy notable en cicatrices superficiales y medias.",
      },
    ],
  },

  "laser-vascular": {
    directAnswer:
      "El láser vascular de diodo 980 nm emite una luz que es absorbida específicamente por la hemoglobina de los pequeños vasos sanguíneos superficiales. El calor generado cierra el vaso, que el organismo reabsorbe progresivamente. Trata arañas vasculares, puntos rubí y capilares de hasta 2 mm sin geles ni anestesia.",
    faqs: [
      {
        question: "¿Qué lesiones puede eliminar?",
        answer:
          "Elimina arañas vasculares faciales (mejillas, nariz), telangiectasias del escote y piernas, puntos rubí, capilares dilatados y pequeños angiomas. No es la primera opción para varices gruesas o profundas — para eso se usa esclerosis o ENDOLÁSER endovascular. La valoración previa decide la indicación correcta.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "La mayoría de lesiones desaparecen en 1-3 sesiones espaciadas 4-6 semanas. Los puntos rubí pequeños suelen necesitar una sola sesión. Las telangiectasias amplias o reticulares pueden requerir más sesiones. La predisposición genética influye en la posible aparición de lesiones nuevas en el futuro.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "La sensación es de pequeños calambres puntuales, breves y muy tolerables. No requiere anestesia ni gel — el cabezal del láser tiene refrigeración integrada que protege la piel y reduce la molestia. La sesión es rápida, de 15 a 30 minutos según la extensión a tratar.",
      },
      {
        question: "¿Cuándo desaparecen las lesiones?",
        answer:
          "Los vasos más finos pueden desaparecer en el momento o en pocos días. Vasos algo mayores oscurecen tras la sesión y se reabsorben en 2-4 semanas. Es importante evitar exposición solar intensa tras la sesión y usar fotoprotección para prevenir hiperpigmentación temporal.",
      },
    ],
  },

  "lifting-retensor-endopeel": {
    directAnswer:
      "El lifting retensor Endopeel es un tratamiento inyectable que produce un efecto lifting sin cirugía. Se infiltra una solución retensora en planos profundos del rostro o el cuerpo que tensa los tejidos y mejora flacidez, tono y elevación. Los resultados son visibles desde los primeros 30 minutos.",
    faqs: [
      {
        question: "¿En qué se diferencia de un lifting quirúrgico?",
        answer:
          "Endopeel no requiere bisturí, anestesia general ni baja. La técnica es inyectable: el producto retensor actúa desde dentro tensando los tejidos. Es ideal para flacidez leve o moderada, mientras que el lifting quirúrgico sigue siendo más radical para casos avanzados o con exceso de piel marcado.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "El efecto tensor empieza a notarse a los 30 minutos de la sesión y es plenamente visible en 24-48 horas. La piel se ve más firme, el óvalo facial recuperado y la flacidez reducida. Tras una segunda sesión a las 4-6 semanas el resultado se consolida y se prolonga en el tiempo.",
      },
      {
        question: "¿Sirve solo para el rostro?",
        answer:
          "No. Endopeel se aplica también en cuello, escote, abdomen, brazos y glúteos. La elevación de glúteos sin cirugía con Endopeel es una de las aplicaciones corporales más demandadas porque ofrece firmeza visible sin el coste y la recuperación de un lifting glúteo quirúrgico.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "El efecto se mantiene habitualmente entre 8 y 12 meses según la zona, la cantidad de tejido tratado y el estilo de vida. Para conservar el resultado se recomienda una sesión de mantenimiento anual o bianual. El producto se reabsorbe progresivamente sin alterar la estructura natural del tejido.",
      },
    ],
  },

  "luz-pulsada-ipl": {
    directAnswer:
      "La luz pulsada intensa (IPL) es una tecnología de fototerapia que emite pulsos de luz de amplio espectro absorbidos por la melanina y la hemoglobina superficiales. Trata manchas, pecas, puntos rubí, telangiectasias y acné, con resultados visibles desde la primera sesión.",
    faqs: [
      {
        question: "¿Qué tipos de manchas trata el IPL?",
        answer:
          "Trata manchas solares, léntigos seniles, pecas, hiperpigmentación postinflamatoria y manchas hormonales superficiales. El melasma profundo requiere un manejo más cauto porque puede empeorar con calor — siempre se realiza valoración médica previa. También trata lesiones vasculares como telangiectasias y puntos rubí.",
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer:
          "La sensación es de pequeñas descargas calientes en la piel, similar a un elástico golpeando suavemente. La mayoría de pacientes lo tolera sin anestesia. Si la sensibilidad es alta se puede aplicar crema anestésica previa. Tras la sesión hay un eritema leve durante 1-2 horas.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "El protocolo estándar son 3-6 sesiones espaciadas 3-4 semanas. Las manchas pequeñas pueden desaparecer en 1-2 sesiones. Las lesiones más extensas o el rejuvenecimiento global de la piel necesitan más. Se recomienda mantenimiento anual y el uso constante de fotoprotección para evitar recidivas.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "Las manchas oscurecen al principio (signo de que el láser ha actuado) y se descaman en 7-14 días, dejando la piel más uniforme. La luminosidad global mejora con cada sesión. El efecto pleno sobre tono y textura se aprecia tras completar el protocolo. La protección solar estricta es clave para mantener el resultado.",
      },
    ],
  },

  "masculook": {
    directAnswer:
      "MASCULOOK es el protocolo exclusivo de Maysoon para la definición del ángulo mandibular masculino. Con ácido hialurónico de alta densidad se refuerza el ángulo, el mentón y el contorno lateral para conseguir una mandíbula más marcada manteniendo naturalidad. Es reversible y sin cirugía.",
    faqs: [
      {
        question: "¿En qué se diferencia de la armonización femenina?",
        answer:
          "El objetivo y la técnica son distintos. En mujer se busca afinar y suavizar para conseguir forma en V. En hombre se busca lo contrario: ampliar y marcar el ángulo mandibular, dar proyección al mentón y crear una línea más recta y angulosa. La distribución del producto y la dosis cambian completamente.",
      },
      {
        question: "¿Es un tratamiento reversible?",
        answer:
          "Sí. Se utiliza ácido hialurónico de alta densidad, que es totalmente reversible mediante hialuronidasa. Si el paciente no está conforme con el resultado o quiere cambios, el producto se puede disolver en consulta. Esta característica diferencia MASCULOOK de implantes mandibulares quirúrgicos permanentes.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "El cambio es visible desde el primer momento, aunque el resultado definitivo se asienta entre la primera y la segunda semana, cuando baja la inflamación inicial. La mandíbula se ve más marcada, el mentón con más proyección y el conjunto del rostro adquiere una estructura más masculina.",
      },
      {
        question: "¿Se puede combinar con otros tratamientos?",
        answer:
          "Sí. MASCULOOK se combina habitualmente con el tratamiento del bruxismo (toxina botulínica en maseteros) para afinar la zona lateral y, en ocasiones, con relleno labial sutil o rinomodelación masculina para armonizar el rostro completo. La consulta médica diseña el protocolo combinado.",
      },
    ],
  },

  "mesoterapia": {
    directAnswer:
      "La mesoterapia es una técnica de microinyecciones que introduce activos en la capa media de la piel: vitaminas, péptidos, ácido hialurónico, biotina y otros principios activos seleccionados según el objetivo. Se aplica en facial, corporal y capilar, hidratando, mejorando flacidez, revitalizando el cabello o drenando.",
    faqs: [
      {
        question: "¿Qué áreas se pueden tratar con mesoterapia?",
        answer:
          "La mesoterapia facial hidrata, mejora luminosidad y combate flacidez. La corporal trata celulitis, flacidez localizada y favorece el drenaje linfático. La capilar revitaliza el cuero cabelludo, frena la caída activa y refuerza folículos en miniaturización. Cada protocolo se personaliza según las necesidades del paciente.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "Se usan agujas muy finas y cortas, y se puede aplicar crema anestésica previa. La sensación es de pequeños picores tolerables. Tras la sesión puede haber leve enrojecimiento o pápulas que ceden en unas horas. La reincorporación a la vida normal es inmediata.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer:
          "El protocolo inicial estándar son 3-5 sesiones espaciadas 1-2 semanas. Tras esta fase se pasa a mantenimiento personalizado, habitualmente trimestral o semestral. La frecuencia depende del objetivo: el antiaging facial requiere mantenimiento más espaciado que un tratamiento capilar activo de caída.",
      },
      {
        question: "¿Se puede combinar con otros tratamientos?",
        answer:
          "Sí. La mesoterapia se combina muy bien con PRP, hilos tensores, peelings y láser. Es habitual en protocolos antiedad combinados para potenciar resultados y reducir tiempos. El cocktail de activos también se puede personalizar tras un análisis genético (Trichotest) para tratamientos capilares de alta precisión.",
      },
    ],
  },

  "micropigmentacion-microblading": {
    directAnswer:
      "La micropigmentación es una técnica de maquillaje semipermanente que deposita pigmento en las capas superficiales de la piel con un dermógrafo. En Maysoon se realiza en cejas (efecto pelo a pelo o sombreado), eyeliner y labios, con diseño personalizado y una durabilidad de 1 a 3 años.",
    faqs: [
      {
        question: "¿Qué zonas se pueden micropigmentar?",
        answer:
          "Cejas, para rellenar, corregir la forma o dar simetría; eyeliner, para definir la mirada y dar densidad a las pestañas; y labios, para mejorar el contorno y aportar color. Cada zona se diseña en consulta según tu rostro, tu tono de piel y el acabado que buscas.",
      },
      {
        question: "¿Cuánto dura el resultado?",
        answer:
          "La micropigmentación dura de 1 a 3 años según la zona, el tipo de piel, el sol y los cuidados. Se realiza una sesión de retoque al mes de la inicial para perfilar el resultado, y un mantenimiento periódico conserva el color y la forma.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "Se aplica crema anestésica antes del procedimiento que reduce la sensibilidad. Durante la sesión se percibe vibración y leve picor. Tras la sesión la zona queda algo enrojecida e inflamada durante 24-48 horas. La descamación posterior es muy ligera y se debe respetar para que el color se asiente.",
      },
      {
        question: "¿Para quién está indicado?",
        answer:
          "Personas con cejas poco pobladas o asimétricas, mirada sin definición, labios con poco color o que quieren ahorrarse el maquillaje diario son las candidatas ideales. También para quien busca reparar zonas con cicatrices o alopecia areata localizada. Se desaconseja en pieles con queloides, dermatitis activa o tratamientos anticoagulantes sin valoración previa.",
      },
    ],
  },

  "peelings-medicos": {
    directAnswer:
      "Los peelings médicos son tratamientos de renovación cutánea que aplican un agente químico (ácido) en la piel para exfoliar de forma controlada las capas superiores y estimular su regeneración. En Maysoon se trabaja con cuatro profundidades: superficial, medio, profundo y New Melan, este último específico para melasma.",
    faqs: [
      {
        question: "¿Qué profundidades existen y para qué sirven?",
        answer:
          "El peeling superficial aporta luminosidad inmediata y mejora textura. El medio trata manchas, líneas finas y poros dilatados. El profundo aborda arrugas más marcadas y daño solar avanzado. El New Melan está formulado específicamente para el melasma, una hiperpigmentación compleja que necesita un abordaje específico.",
      },
      {
        question: "¿Cuál es la recuperación tras un peeling?",
        answer:
          "Depende de la profundidad. Los superficiales descaman 2-3 días con eritema leve, vida social normal. Los medios descaman 5-7 días con piel más sensible. Los profundos requieren 7-14 días con piel intensamente descamativa. New Melan es generalmente bien tolerado y permite continuar la rutina con discreción.",
      },
      {
        question: "¿Cada cuánto se puede repetir?",
        answer:
          "Los peelings superficiales se realizan en protocolos de 4-6 sesiones espaciadas 2-3 semanas. Los medios se espacian 1-2 meses. Los profundos se hacen 1-2 veces al año como máximo. El protocolo se diseña según el problema cutáneo, el tipo de piel y la respuesta individual al tratamiento.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "Los peelings superficiales se sienten con leve calor y picor tolerable. Los medios pueden producir sensación de quemazón más intensa durante la aplicación, breve. Los profundos requieren sedación ligera o anestesia tópica potente. Se aplica frío y aire frío durante la sesión para mejorar el confort.",
      },
    ],
  },

  "plasma-gel-relleno": {
    directAnswer:
      "El Plasma-Gel es un relleno facial 100% autólogo: se obtiene del plasma del propio paciente, sin sustancias externas. Tras un proceso de centrifugado y calentamiento controlado se transforma en gel que se infiltra como relleno natural. Tiene un 25% de fijación definitiva, aportando volumen sin riesgo de alergias.",
    faqs: [
      {
        question: "¿En qué se diferencia del ácido hialurónico?",
        answer:
          "El Plasma-Gel proviene de tu propia sangre, no hay material sintético — por eso no produce alergias. El ácido hialurónico es un producto externo estandarizado, con mayor capacidad de volumen inmediato pero reabsorción total a 9-12 meses. El Plasma-Gel deja un 25% de fijación definitiva tras cada sesión.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer:
          "El protocolo habitual son 2-3 sesiones espaciadas 4-6 semanas para conseguir el volumen deseado. Como cada sesión deja un 25% de fijación definitiva, el resultado es acumulativo y duradero. Sesiones de mantenimiento ocasionales permiten conservar y refinar el volumen aportado a lo largo del tiempo.",
      },
      {
        question: "¿Para quién está indicado?",
        answer:
          "Personas que buscan resultados naturales, con alergias o sensibilidad a productos sintéticos, o que prefieren tratamientos con componentes biológicos del propio cuerpo. Es ideal para revoluminizar zonas con pérdida de volumen (mejillas, surcos), o como complemento de otros tratamientos antiedad.",
      },
      {
        question: "¿Cómo se realiza el procedimiento?",
        answer:
          "Se extrae una muestra de sangre del paciente, se procesa en laboratorio mediante centrifugado y calentamiento controlado hasta obtener el gel. Tras anestesia tópica, el gel se infiltra en las zonas a tratar con cánulas finas. La sesión completa dura unos 60-90 minutos incluyendo la preparación.",
      },
    ],
  },

  "prp": {
    directAnswer:
      "El PRP (Plasma Rico en Plaquetas) es un tratamiento de bioestimulación que utiliza los factores de crecimiento concentrados del propio paciente. Es el único tratamiento capaz de aumentar el número de fibroblastos — no solo estimular los existentes. Se aplica en capilar, facial y de escote.",
    faqs: [
      {
        question: "¿Cómo se obtiene el plasma rico en plaquetas?",
        answer:
          "Se extrae una muestra de sangre venosa del paciente y se centrifuga para separar el plasma rico en plaquetas del resto de componentes. Este plasma concentrado, lleno de factores de crecimiento, se reinyecta en la zona a tratar. Todo el proceso se realiza en una sola sesión de aproximadamente 45 minutos.",
      },
      {
        question: "¿Cuántas sesiones se recomiendan?",
        answer:
          "La pauta estándar son 3 sesiones espaciadas un mes. Tras esta fase inicial se pasa a mantenimiento personalizado, habitualmente trimestral o semestral. Para tratamientos capilares se suelen recomendar packs de 3, 6 o 10 sesiones según la severidad de la alopecia y la respuesta individual.",
      },
      {
        question: "¿Tiene riesgo de alergias?",
        answer:
          "Al utilizar plasma del propio paciente, el riesgo de alergia o rechazo es prácticamente inexistente. Es una de las grandes ventajas del PRP frente a tratamientos con productos externos. Las posibles reacciones se limitan a inflamación local leve en la zona pinchada, que cede en pocas horas.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "En aplicaciones capilares se nota disminución de la pérdida desde la primera sesión, con engrosamiento y ganancia capilar a los 2-3 meses. En facial el resultado es progresivo y la piel se ve más luminosa, firme y uniforme a partir de la segunda sesión, consolidándose en los meses siguientes.",
      },
    ],
  },

  "rellenos-corporales": {
    directAnswer:
      "Los rellenos corporales aportan volumen estructural a zonas del cuerpo sin cirugía. En Maysoon se trabaja con Lanluma X® (ácido hialurónico corporal) y Powerfill® (ácido poliláctico de larga duración). Indicados para aumentar gemelos, pectorales, glúteos, abdominales o rejuvenecer la zona genital.",
    faqs: [
      {
        question: "¿Qué zonas se pueden aumentar con relleno corporal?",
        answer:
          "Las aplicaciones más demandadas son aumento de glúteos (alternativa al BBL), aumento de gemelos (especialmente en hombre para corregir asimetrías), pectoral masculino, abdominales y rejuvenecimiento genital. También se utiliza para corregir cicatrices deprimidas o pérdidas de volumen postquirúrgicas.",
      },
      {
        question: "¿Es una alternativa a la cirugía?",
        answer:
          "Sí. Es la opción no quirúrgica para quien busca volumen sin pasar por quirófano, sin cicatrices ni baja médica. La diferencia con la cirugía es que el resultado es más sutil y temporal: dura entre 1 y 3 años según el producto y la zona. La cirugía sigue siendo más radical y permanente.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "Lanluma X® se mantiene aproximadamente entre 1 y 2 años en el cuerpo, según la zona y el paciente. Powerfill® puede durar entre 18 meses y 2 años, porque el ácido poliláctico estimula colágeno nuevo. Se recomienda retoques anuales o cada 18 meses para conservar el resultado.",
      },
      {
        question: "¿Es doloroso?",
        answer:
          "La sesión se realiza con anestesia local y cánulas atraumáticas finas, lo que minimiza la molestia. Puede haber sensibilidad leve durante 24-48 horas en la zona tratada e inflamación inicial. Se recomienda evitar deporte intenso durante una semana para favorecer la integración del producto.",
      },
    ],
  },

  "sueroterapia": {
    directAnswer:
      "La sueroterapia es un tratamiento intravenoso que administra vitaminas, minerales y aminoácidos directamente al torrente sanguíneo, garantizando una absorción del 100%. En Maysoon hay 7 fórmulas: Antiaging, Sport, Inmuno, Energy, Detox, Mayers y Fitness — cada una diseñada para un objetivo específico de bienestar.",
    faqs: [
      {
        question: "¿Qué fórmulas existen y para qué sirven?",
        answer:
          "Antiaging combate el envejecimiento celular. Sport y Fitness optimizan rendimiento y recuperación. Inmuno refuerza defensas. Energy combate la fatiga. Detox favorece la depuración orgánica. Mayers es un cóctel multivitamínico clásico de uso general. Tras consulta se elige la fórmula adecuada a cada caso.",
      },
      {
        question: "¿Cuánto dura una sesión?",
        answer:
          "La infusión intravenosa dura entre 45 minutos y una hora, en función de la fórmula y la cantidad. Durante la sesión el paciente descansa cómodamente en sillón reclinable. Tras la administración la actividad normal se retoma de inmediato — algunos pacientes notan energía y sensación de bienestar el mismo día.",
      },
      {
        question: "¿Para quién está indicada?",
        answer:
          "Personas con fatiga crónica, episodios de estrés intensos, deportistas en pre/post competición, periodos de baja inmunidad, déficits vitamínicos confirmados o quienes buscan apoyo nutricional adicional. No sustituye una dieta equilibrada — es un complemento para situaciones específicas y para optimizar el bienestar general.",
      },
      {
        question: "¿Con qué frecuencia se puede hacer?",
        answer:
          "Depende de la fórmula y el objetivo. Algunos pacientes la usan de forma puntual (antes de un evento, una competición o tras un esfuerzo). Otros la integran en protocolos mensuales o trimestrales como mantenimiento. La consulta médica diseña la pauta según necesidades y resultados de analítica si los hubiera.",
      },
    ],
  },

  "tratamiento-celulitis": {
    directAnswer:
      "El tratamiento médico de la celulitis en Maysoon combina maderoterapia, mesoterapia drenante con activos específicos y Alidya®, un producto diseñado para tratar las causas microvasculares y de matriz extracelular de la celulitis. El protocolo ataca las causas, no solo el síntoma visible.",
    faqs: [
      {
        question: "¿Por qué aparece la celulitis?",
        answer:
          "La celulitis se debe a una alteración del tejido subcutáneo: hipertrofia de adipocitos, alteración de la microcirculación, edema linfático y endurecimiento de los septos fibrosos. La predisposición genética, los cambios hormonales, el sedentarismo y la dieta influyen. No es solo un problema de grasa: es un problema estructural.",
      },
      {
        question: "¿Qué tratamientos médicos funcionan?",
        answer:
          "Los protocolos combinados son los más eficaces. La maderoterapia drena y rompe nódulos. La mesoterapia introduce activos lipolíticos y drenantes. Alidya® actúa sobre la microcirculación y la matriz extracelular para frenar la formación de celulitis. Morpheus 8 y BodyTite pueden completar el tratamiento en casos avanzados.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "El protocolo estándar son 8-12 sesiones de maderoterapia + mesoterapia, espaciadas 1-2 semanas. Las sesiones con Alidya® suelen ser 2-3 espaciadas 3-4 semanas. La frecuencia exacta se adapta al grado de celulitis y la respuesta individual. Tras esta fase se recomienda mantenimiento periódico.",
      },
      {
        question: "¿Vuelve la celulitis tras el tratamiento?",
        answer:
          "La celulitis puede reaparecer si no se mantiene un estilo de vida adecuado (alimentación, hidratación, ejercicio) y si la predisposición genética es alta. Por eso se recomienda mantenimiento periódico tras el protocolo inicial. La constancia es clave: los resultados se consolidan con disciplina y seguimiento médico.",
      },
    ],
  },

  "escrotox": {
    directAnswer:
      "El Escrotox es la aplicación de toxina botulínica (neuromoduladores) en el escroto. Relaja el músculo dartos, responsable de que la piel se arrugue y se retraiga, y consigue un aspecto más liso, relajado y amplio. También reduce la sudoración excesiva de la zona. El efecto dura aproximadamente de 3 a 6 meses.",
    faqs: [
      {
        question: "¿Qué usos tiene la toxina botulínica en el genital masculino?",
        answer:
          "El más habitual es el estético (Escrotox): escroto más liso, menos arrugado y con aspecto más amplio. También trata la hiperhidrosis escrotal y, en casos seleccionados, el dolor escrotal crónico. Su uso en disfunción eréctil y eyaculación precoz está en investigación y no es un tratamiento estándar.",
      },
      {
        question: "¿Duele? ¿Cómo es la recuperación?",
        answer:
          "Se aplica crema anestésica y se usa una aguja muy fina, así que la molestia es mínima. La sesión dura unos 20-30 minutos y la vuelta a la vida normal es inmediata. Se recomienda evitar relaciones sexuales, deporte intenso y calor fuerte durante 24-48 horas.",
      },
      {
        question: "¿Cuánto dura el efecto del Escrotox?",
        answer:
          "Los cambios empiezan a notarse a partir de la primera o segunda semana y el efecto se mantiene aproximadamente entre 3 y 6 meses. Como en cualquier tratamiento con neuromoduladores, el músculo recupera poco a poco su actividad y se puede repetir la sesión para mantener el resultado.",
      },
      {
        question: "¿Afecta a la fertilidad o a la función sexual?",
        answer:
          "La toxina actúa sobre el músculo de la piel del escroto, no sobre los testículos, por lo que no se espera que afecte a la fertilidad ni a la erección. Aun así, cada caso se valora en consulta y se revisan antecedentes, medicación y posibles contraindicaciones antes de tratar.",
      },
    ],
  },

  "tratamientos-intimos": {
    directAnswer:
      "En Maysoon se realizan tratamientos íntimos masculinos y femeninos con ácido hialurónico corporal: engrosamiento de pene (hasta 4 cm de circunferencia), aumento de glande, aumento de labios mayores y eliminación de verrugas genitales con PLASMAGE. Todos en consulta reservada con máxima discreción.",
    faqs: [
      {
        question: "¿En qué consiste el engrosamiento de pene?",
        answer:
          "Se infiltra ácido hialurónico corporal específicamente formulado para esta zona en el plano subcutáneo del cuerpo del pene. El resultado es un aumento visible de la circunferencia desde la primera sesión, sin afectar la función sexual ni la sensibilidad. Es un procedimiento ambulatorio, indoloro y reversible.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "Los resultados se mantienen habitualmente entre 18 meses y 2 años según el metabolismo individual y la actividad. Cuando el efecto comienza a reabsorberse, se realiza una sesión de mantenimiento. Al ser ácido hialurónico, todo el procedimiento es reversible mediante hialuronidasa si el paciente lo desea.",
      },
      {
        question: "¿Es un procedimiento doloroso?",
        answer:
          "Se aplica anestesia local y crema anestésica tópica antes de la infiltración, por lo que la molestia es mínima. La sesión dura unos 30-45 minutos. Tras el tratamiento puede haber leve inflamación durante 24-48 horas. Se recomienda evitar actividad sexual y deporte intenso durante 1-2 semanas.",
      },
      {
        question: "¿Qué tratamientos femeninos íntimos se realizan?",
        answer:
          "Se realiza aumento de labios mayores con ácido hialurónico para corregir pérdida de volumen por edad, postparto o adelgazamiento. También eliminación de verrugas genitales con PLASMAGE. Todos los tratamientos íntimos se realizan en consulta privada, con valoración personalizada y siempre con máxima discreción.",
      },
    ],
  },
};
