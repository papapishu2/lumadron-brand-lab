import guiaDronesAgricolas from "@/assets/blog/guia-drones-agricolas.jpg";
import djiVsXag from "@/assets/blog/dji-vs-xag.jpg";
import normativaAnac from "@/assets/blog/normativa-anac.jpg";
import dronesMineria from "@/assets/blog/drones-mineria.jpg";
import hylioAg230 from "@/assets/blog/hylio-ag230.jpg";
import erroresDronesAgro from "@/assets/blog/errores-drones-agro.jpg";
import dronesTopografiaRtk from "@/assets/blog/drones-topografia-rtk.jpg";
import dronesOilGasInspeccion from "@/assets/blog/drones-oil-gas-inspeccion.jpg";
import dronesCargaFlycart from "@/assets/blog/drones-carga-flycart.jpg";
import dronesSeguridadPerimetral from "@/assets/blog/drones-seguridad-perimetral.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  /** HTML content of the post body */
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-drones-agricolas-argentina-2025",
    title: "Guía completa de drones agrícolas en Argentina 2025",
    excerpt:
      "Todo lo que necesitás saber para elegir el drone agrícola ideal para tu operación: capacidad, autonomía, precisión y costo por hectárea.",
    category: "Guías",
    date: "15 Abr 2025",
    readTime: "8 min",
    image: guiaDronesAgricolas,
    content: `
<p class="lead">El uso de <strong>drones agrícolas en Argentina</strong> dejó de ser una promesa para convertirse en una herramienta concreta de producción. En 2025, productores de soja, maíz, trigo y economías regionales ya integran aeronaves no tripuladas para pulverizar, sembrar, fertilizar y monitorear cultivos con precisión centimétrica. Esta guía resume lo que necesitás saber antes de invertir.</p>

<h2>Por qué adoptar drones en el agro</h2>
<p>Los <em>UAV agrícolas</em> permiten aplicar fitosanitarios en momentos críticos donde el suelo está demasiado húmedo para una pulverizadora autopropulsada, reducen la deriva, optimizan el uso de agua y bajan el costo por hectárea. Frente a una avioneta, ofrecen mayor precisión, menor riesgo operativo y posibilidad de trabajar en lotes chicos o de geometría irregular.</p>

<h2>Capacidad y caudal: la primera decisión</h2>
<p>El parámetro clave es la capacidad del tanque y el caudal máximo. Un equipo como el <a href="/drones/dji-agras-t50">DJI Agras T50</a> entrega 40 L de tanque y caudales de hasta 16 L/min, ideal para operaciones medianas. Para escalas mayores conviene mirar el <a href="/drones/dji-agras-t100">DJI Agras T100</a> con 100 L o el <a href="/drones/xag-p150-max">XAG P150 Max</a>, líder en autonomía por carga.</p>

<h2>Sensores y navegación</h2>
<p>Los modelos premium incorporan radar de onda milimétrica, LiDAR y RTK integrado. Esto permite seguir el relieve, evitar obstáculos y mantener altura constante incluso en cultivos altos como maíz tardío o caña de azúcar. Si trabajás en zonas con árboles, líneas eléctricas o tendido de riego, no negocies en este punto.</p>

<h2>Marcas disponibles en el país</h2>
<p>El mercado argentino se concentra en tres jugadores con soporte local: <a href="/marcas">DJI, XAG y Hylio</a>. DJI domina por ecosistema y disponibilidad de repuestos; XAG se destaca en autonomía y aplicación variable; Hylio es la opción para quienes buscan equipos pensados para soja, maíz y trigo en escala extensiva, como el <a href="/drones/hylio-ares-hyl-150">Hylio AG-150 Ares</a>.</p>

<h2>Aplicaciones más allá de la pulverización</h2>
<p>Un drone multiespectral como el <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> permite generar mapas NDVI para diagnóstico de cultivo, prescripciones variables y detección temprana de plagas. La sinergia entre un drone scout y un drone aplicador es la práctica recomendada para 2025.</p>

<h2>Costos y retorno</h2>
<p>El costo por hectárea pulverizada con drone se ubica entre USD 6 y USD 12 según escala, autonomía de baterías y logística de carga. Para operaciones de servicio a terceros, el repago del equipo se da en 12 a 24 meses. Para productores, el ahorro proviene de ventanas operativas más amplias y menor pisado del lote.</p>

<h2>Marco regulatorio</h2>
<p>Operar comercialmente requiere cumplir con la normativa de ANAC, registrar el equipo y contar con piloto certificado. Cubrimos el detalle en nuestra nota sobre <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC para drones comerciales</a>.</p>

<h2>Próximos pasos</h2>
<p>Antes de comprar, definí tu escala anual en hectáreas, tipo de cultivo y modelo operativo (uso propio vs. servicio). Después elegí el equipo. En Lumadron asesoramos sin costo: explorá nuestras <a href="/categorias">categorías por industria</a> o contanos tu caso desde la sección de <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "dji-agras-t50-vs-xag-p150-comparativa",
    title: "DJI Agras T50 vs XAG P150: comparativa definitiva",
    excerpt:
      "Analizamos en detalle las dos opciones más populares del mercado para pulverización aérea en agricultura de precisión.",
    category: "Comparativas",
    date: "10 Abr 2025",
    readTime: "12 min",
    image: djiVsXag,
    content: `
<p class="lead">Cuando un productor argentino define su próximo drone de pulverización, casi siempre llega a un cara a cara entre el <a href="/drones/dji-agras-t50">DJI Agras T50</a> y el <a href="/drones/xag-p150">XAG P150</a>. Ambos lideran sus segmentos, pero apuntan a lógicas operativas distintas. Este análisis te ayuda a decidir.</p>

<h2>Capacidad y caudal</h2>
<p>El T50 ofrece 40 L de tanque con caudal de hasta 16 L/min mediante doble bomba magnética. El P150 sube la apuesta a 50 L y un caudal de 22 L/min con sistema RevoSpray. En lotes grandes y planos, el XAG hace menos viajes a la estación de carga; en lotes mixtos, el T50 mantiene una eficiencia operativa muy competitiva.</p>

<h2>Sensores y autonomía de vuelo</h2>
<p>DJI integra radar mmWave frontal y trasero más LiDAR para seguimiento de terreno, ideal en lotes ondulados o con cultivos de altura variable. XAG apuesta por su radar omnidireccional y un sistema de navegación con planificación de misiones más automatizada. Si tu equipo es chico y querés vuelos sin asistencia constante, el P150 te da más comodidad.</p>

<h2>Ecosistema y soporte</h2>
<p>DJI tiene la red más amplia de repuestos en Argentina, capacitación técnica disponible y un control remoto (DJI RC Plus) que muchos operarios ya conocen. XAG creció fuerte en los últimos años con representantes locales y una propuesta de mantenimiento por suscripción.</p>

<h2>Aplicación variable y mapeo</h2>
<p>Ambos aceptan prescripciones variables. La diferencia fina aparece en cómo se cargan los mapas: DJI integra mejor con el flujo del <a href="/drones/dji-mavic-3m">Mavic 3M</a> para scouting; XAG ofrece su propia plataforma SmartFarm. Si ya operás con DJI, mantener el ecosistema simplifica la curva.</p>

<h2>Otras alternativas</h2>
<p>Si tu operación supera las 5.000 hectáreas anuales, conviene mirar el <a href="/drones/dji-agras-t100">DJI Agras T100</a> o el <a href="/drones/xag-p150-max">XAG P150 Max</a>. Para escalas más chicas, evaluá el <a href="/drones/dji-agras-t25">DJI Agras T25</a> o explorá la propuesta de <a href="/marcas">Hylio</a> para cultivos extensivos en EE.UU. y Latinoamérica.</p>

<h2>Veredicto</h2>
<p>El <strong>T50</strong> es la opción más segura para quien ya conoce el ecosistema DJI y trabaja en lotes con relieve. El <strong>P150</strong> destaca en lotes planos y grandes, donde el caudal extra y la autonomía hacen la diferencia. Ninguno es mejor en abstracto: depende de tu operación.</p>

<h2>Cómo decidir</h2>
<p>Si necesitás ayuda para elegir, revisá nuestra <a href="/blog/guia-drones-agricolas-argentina-2025">guía completa de drones agrícolas</a>, mirá las opciones por <a href="/categorias">industria</a> o escribinos desde <a href="/contacto">contacto</a> para una recomendación personalizada.</p>
`,
  },
  {
    slug: "normativa-anac-drones-comerciales-argentina",
    title: "Normativa ANAC para uso de drones comerciales",
    excerpt:
      "Requisitos legales, registración, seguros y permisos necesarios para operar drones comerciales en Argentina.",
    category: "Normativa",
    date: "5 Abr 2025",
    readTime: "6 min",
    image: normativaAnac,
    content: `
<p class="lead">Operar un <strong>drone comercial en Argentina</strong> requiere cumplir con la regulación de la Administración Nacional de Aviación Civil (ANAC). La normativa busca un equilibrio entre habilitar el uso productivo de los UAV y garantizar la seguridad operacional. Esta guía resume lo esencial para 2025.</p>

<h2>Categorías de operación</h2>
<p>La ANAC clasifica los vehículos aéreos no tripulados según peso y uso. Los drones de pulverización agrícola como el <a href="/drones/dji-agras-t50">DJI Agras T50</a> o el <a href="/drones/xag-p150-max">XAG P150 Max</a> se ubican en la categoría de mayor peso, lo que implica requisitos más estrictos de registro, seguro y operador.</p>

<h2>Registro del equipo</h2>
<p>Todo drone comercial debe estar registrado ante la ANAC mediante el sistema VANT. Se asigna una matrícula que debe figurar visible en el equipo. Sin este trámite, la operación es ilegal y el seguro no responde ante un siniestro.</p>

<h2>Licencia de piloto</h2>
<p>El piloto debe contar con la Certificación de Competencia para operar VANT, obtenida en un Centro de Instrucción de Aeronáutica Civil (CIAC) reconocido. Para drones agrícolas pesados se requiere una habilitación específica que incluye prácticas de pulverización.</p>

<h2>Seguro de responsabilidad civil</h2>
<p>Es obligatorio contar con un seguro de responsabilidad civil que cubra daños a terceros. Las primas varían según el tipo de operación; el uso agrícola tiene compañías especializadas con coberturas pensadas para fitosanitarios.</p>

<h2>Restricciones de espacio aéreo</h2>
<p>No se puede volar cerca de aeropuertos, sobre concentraciones de personas ni en espacios aéreos restringidos sin autorización previa. La app de ANAC y las cartas aeronáuticas son la referencia obligada antes de cada misión.</p>

<h2>Aplicación de fitosanitarios</h2>
<p>Además de la ANAC, la pulverización aérea se rige por normativa provincial y municipal. En provincias como Buenos Aires, Córdoba o Santa Fe existen distancias mínimas a centros poblados, escuelas y cursos de agua. El operador debe contar con receta agronómica firmada.</p>

<h2>Buenas prácticas y documentación</h2>
<p>Llevá un registro de cada vuelo con fecha, lote, producto aplicado, condiciones meteorológicas y matrícula del equipo. Esto facilita auditorías y trazabilidad ante un cliente o un organismo de control.</p>

<h2>Recursos relacionados</h2>
<p>Si recién empezás, te recomendamos leer también nuestra <a href="/blog/guia-drones-agricolas-argentina-2025">guía completa de drones agrícolas</a> y la nota sobre los <a href="/blog/errores-comunes-drones-agricolas">5 errores comunes al implementar drones</a>. Para conocer las opciones por industria, visitá <a href="/categorias">nuestras categorías</a> o explorá el portfolio de <a href="/marcas">marcas representadas</a>.</p>

<h2>Asesoramiento</h2>
<p>Desde Lumadron acompañamos el proceso completo: registro, capacitación y selección del equipo. Si necesitás orientación, escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "drones-mineria-latinoamerica",
    title: "Cómo los drones están transformando la minería en Latinoamérica",
    excerpt:
      "Casos de uso reales de drones en operaciones mineras: volumetría, inspección de taludes y monitoreo ambiental.",
    category: "Casos de uso",
    date: "1 Abr 2025",
    readTime: "10 min",
    image: dronesMineria,
    content: `
<p class="lead">La <strong>minería en Latinoamérica</strong> atraviesa una transformación silenciosa pero profunda gracias a los drones. Operadoras de cobre en Chile, litio en Argentina y oro en Perú integran aeronaves no tripuladas en sus flujos diarios para mejorar seguridad, productividad y trazabilidad ambiental.</p>

<h2>Volumetría de stockpiles</h2>
<p>Calcular el volumen de pilas de mineral con un drone equipado con LiDAR o cámara fotogramétrica reduce el tiempo de medición de días a horas, con un margen de error inferior al 2%. Esto impacta directamente en la conciliación contable y en la planificación de embarques.</p>

<h2>Inspección de taludes y rampas</h2>
<p>El monitoreo recurrente de paredes de pit con drones permite detectar movimientos tempranos, fisuras y zonas de riesgo. Modelos como el <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> y plataformas industriales se usan para generar nubes de puntos comparables en el tiempo y anticipar fallas geotécnicas.</p>

<h2>Transporte de carga en zonas aisladas</h2>
<p>Drones cargueros como el <a href="/drones/dji-flycart-30">DJI FlyCart 30</a> y el <a href="/drones/dji-flycart-100">DJI FlyCart 100</a> resuelven el traslado de repuestos, muestras geológicas e instrumental a sectores de difícil acceso. Reducen riesgo humano y costos logísticos en operaciones cordilleranas.</p>

<h2>Monitoreo ambiental</h2>
<p>Las cámaras multiespectrales y térmicas permiten monitorear vegetación perimetral, detectar derrames de hidrocarburos, vigilar diques de cola y controlar revegetación de zonas en cierre. Los reportes son auditables y suman al cumplimiento de licencias sociales y ambientales.</p>

<h2>Topografía y avance de obra</h2>
<p>El levantamiento topográfico con drones reemplazó a las cuadrillas tradicionales en muchos proyectos. Se generan ortomosaicos centimétricos, modelos digitales de elevación y se compara avance contra cronograma con frecuencia semanal.</p>

<h2>Seguridad y emergencias</h2>
<p>Ante un evento (derrumbe, incendio, accidente vehicular en pit), un drone puede llegar primero al área comprometida y entregar imágenes en vivo a la sala de control, acelerando la toma de decisiones.</p>

<h2>Integración con software</h2>
<p>Los datos capturados se procesan en plataformas como Pix4D, DroneDeploy o Bentley. La interoperabilidad con el sistema de planificación minero es clave para que el dato se convierta en decisión.</p>

<h2>Casos relacionados</h2>
<p>Más allá de la minería, estas tecnologías se aplican en oil &amp; gas, construcción y agricultura de precisión. Conocé las industrias donde trabajamos en nuestra página de <a href="/categorias">categorías</a> y revisá el portfolio de <a href="/marcas">marcas</a> que representamos. Para profundizar en aplicaciones agrícolas, leé la <a href="/blog/guia-drones-agricolas-argentina-2025">guía completa de drones agrícolas</a>.</p>

<h2>Próximos pasos</h2>
<p>Si tu operación minera evalúa incorporar drones, podemos ayudarte a definir el equipo, los entregables y el plan de capacitación. Escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "hylio-ag230-analisis-completo",
    title: "Hylio AG-230: análisis completo del drone de pulverización más grande",
    excerpt:
      "Review detallado del AG-230 de Hylio, con 230L de capacidad y sistema autónomo de planificación de misiones.",
    category: "Reviews",
    date: "28 Mar 2025",
    readTime: "9 min",
    image: hylioAg230,
    content: `
<p class="lead">Hylio se ganó un lugar en la conversación de la pulverización aérea con equipos diseñados para escala extensiva. El <strong>Hylio AG-230</strong> es su buque insignia: 230 litros de capacidad y un sistema autónomo de planificación de misiones que apunta a productores con miles de hectáreas anuales.</p>

<h2>Una bestia de pulverización</h2>
<p>Con 230 L de tanque, el AG-230 multiplica por más de cinco la capacidad del <a href="/drones/dji-agras-t50">DJI Agras T50</a>. Esto se traduce en menos viajes a la estación de carga y mayor cobertura por hora. Está pensado para operadores de servicio o productores con escala mayor a 5.000 hectáreas anuales.</p>

<h2>Operación autónoma multi-drone</h2>
<p>El diferencial de Hylio es su software AgroSol, que coordina varios equipos al mismo tiempo desde una sola interfaz. Un piloto puede supervisar dos o tres drones trabajando en paralelo sobre el mismo lote, optimizando productividad y reduciendo dependencia de mano de obra calificada.</p>

<h2>Diseño robusto y mantenibilidad</h2>
<p>La arquitectura del AG-230 está pensada para mantenimiento en campo, con componentes modulares y disponibilidad de repuestos pensada para chacras alejadas. La empresa ofrece soporte directo y partes a través de su red regional.</p>

<h2>Comparación con otros pesos pesados</h2>
<p>Frente al <a href="/drones/dji-agras-t100">DJI Agras T100</a> (100 L) y al <a href="/drones/xag-p150-max">XAG P150 Max</a> (50 L), el AG-230 lidera por capacidad bruta. Sin embargo, los DJI y XAG aventajan en ecosistema, integración con mapeo y disponibilidad de capacitación local. La elección depende del modelo operativo más que de la ficha técnica.</p>

<h2>Otras opciones de Hylio</h2>
<p>La marca ofrece también el <a href="/drones/hylio-ares-hyl-150">AG-150 Ares</a> y el <a href="/drones/hylio-pegasus">Hylio Pegasus</a>, pensados para operaciones medianas. La gama Atlas extiende el alcance hacia logística y carga.</p>

<h2>Aplicaciones reales</h2>
<p>El AG-230 se usa principalmente en soja, maíz, trigo y arroz, tanto en Estados Unidos como en mercados emergentes de Latinoamérica. En Argentina, su adopción crece en pools de siembra y empresas de servicio que necesitan responder con velocidad ante ventanas climáticas estrechas.</p>

<h2>Marco regulatorio</h2>
<p>Por su tamaño, requiere especial atención a la <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a> y a las regulaciones provinciales sobre fitosanitarios. La capacitación del piloto y la documentación de cada vuelo son innegociables.</p>

<h2>Veredicto</h2>
<p>El AG-230 no es para todos. Es la herramienta correcta cuando la escala lo justifica y el modelo de negocio premia la productividad por hora. Si tu operación crece y los equipos medianos se quedan cortos, vale la evaluación. Para una mirada general del mercado, te recomendamos leer la <a href="/blog/guia-drones-agricolas-argentina-2025">guía completa de drones agrícolas</a> y explorar nuestras <a href="/categorias">categorías por industria</a>. Para una propuesta concreta, escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "errores-comunes-drones-agricolas",
    title: "5 errores comunes al implementar drones en operaciones agrícolas",
    excerpt:
      "Los errores más frecuentes que cometen los productores al adoptar tecnología drone y cómo evitarlos.",
    category: "Guías",
    date: "25 Mar 2025",
    readTime: "7 min",
    image: erroresDronesAgro,
    content: `
<p class="lead">Adoptar <strong>drones agrícolas</strong> sin un plan suele generar frustración y retornos por debajo de lo esperado. Estos son los cinco errores más frecuentes que vemos en productores y empresas de servicio, y cómo evitarlos antes de invertir.</p>

<h2>1. Comprar el equipo equivocado para la escala</h2>
<p>Elegir un drone chico para una operación grande, o un equipo enorme para lotes mixtos, es el error más caro. Antes de decidir, definí hectáreas anuales, ventana operativa y tipo de cultivo. La <a href="/blog/guia-drones-agricolas-argentina-2025">guía completa de drones agrícolas</a> ayuda a hacer este match. Si dudás entre dos referencias, mirá nuestra comparativa <a href="/blog/dji-agras-t50-vs-xag-p150-comparativa">T50 vs P150</a>.</p>

<h2>2. Subestimar la logística de baterías y carga</h2>
<p>Un drone como el <a href="/drones/dji-agras-t50">DJI Agras T50</a> consume baterías a un ritmo que muchos no anticipan. Sin un set adecuado, generador en campo y plan de rotación, la productividad cae a la mitad. Calculá el set mínimo según litros de aplicación por hora y tiempo de carga.</p>

<h2>3. Ignorar la regulación</h2>
<p>Volar sin matrícula, sin piloto certificado o sin seguro es un riesgo legal y operativo enorme. La <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a> es clara y los controles aumentaron en 2024 y 2025. Cumplir desde el día uno evita multas y problemas con clientes.</p>

<h2>4. No invertir en capacitación</h2>
<p>Un buen drone con un mal operador es plata mal gastada. La curva de aprendizaje real toma semanas e incluye planificación de misiones, mantenimiento, lectura de mapas y resolución de fallas. Invertí en formación continua del piloto y del personal de apoyo.</p>

<h2>5. Saltarse el scouting con drone multiespectral</h2>
<p>Pulverizar a ciegas desperdicia producto y oportunidad. Sumar un equipo como el <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> para mapeo NDVI permite generar prescripciones variables y aplicar solo donde hace falta. La inversión adicional se paga rápido en ahorro de fitosanitarios.</p>

<h2>Bonus: pensar el drone como una solución aislada</h2>
<p>El drone es parte de un sistema. Si no se conecta con la asesoría agronómica, el cuaderno de campo digital y el sistema de gestión, su impacto se diluye. Lo mismo aplica a otras industrias: en <a href="/blog/drones-mineria-latinoamerica">minería latinoamericana</a> los mejores resultados vienen de integrar el dato del drone con el software operativo.</p>

<h2>Cómo encarar bien la adopción</h2>
<p>Definí objetivos claros, elegí el equipo según escala, capacitá al equipo, cumplí la normativa e integrá el dato. Explorá nuestras <a href="/categorias">categorías por industria</a>, conocé las <a href="/marcas">marcas que representamos</a> y, si querés discutir tu caso, escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
