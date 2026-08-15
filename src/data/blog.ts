import costoPulverizarAsset from "@/assets/blog/costo-pulverizar-drone-2026.png.asset.json";
import guiaDronesAgricolasAsset from "@/assets/blog/guia-drones-agricolas-2026.png.asset.json";
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
    slug: "costo-pulverizar-drone-agricola-argentina-2026",
    title: "Cuánto cuesta pulverizar con drone en Argentina en 2026",
    excerpt:
      "Tarifas de pulverización con drone en Argentina 2026: servicio, costo propio y comparación con mosquito y avión. Rangos, no un número único.",
    category: "Guías",
    date: "14 Ago 2026",
    readTime: "9 min",
    image: costoPulverizarAsset.url,
    content: `
<p class="lead">Si buscás un número único —“el drone sale USD X por hectárea”— te van a mentir. En 2026 conviven tres cuentas distintas y la gente las mezcla:</p>

<ol>
<li><strong>Tarifa de contratista</strong> (lo que te cobran por aplicar).</li>
<li><strong>Costo operativo de equipo propio</strong> (lo que te sale volar <em>tu</em> drone, sin contar la amortización o contándola).</li>
<li><strong>Costo total versus mosquito o avión</strong>, metiendo pisoteo, deriva, ventana perdida y logística.</li>
</ol>

<p>Son números distintos. Abajo van rangos publicados 2025–2026, con matices. No es una cotización.</p>

<h2>Los tres números, sin mezclarlos</h2>

<h3>1) Tarifa de contratista</h3>

<p>Un relevamiento de mercado 2026 ubica el servicio de pulverización con drone en <strong>USD 12–25/ha</strong>, con Buenos Aires en la parte baja y Mendoza o Tucumán en la alta. Contratistas e INTA de años anteriores citaban <strong>USD 16/ha</strong> o, en algunos planteos, <strong>USD 25–40/ha</strong>.</p>

<p>¿Por qué tanto spread? Provincia, cultivo, dosis, movilidad, si el lote está anegado, si es un puntual de 8 ha o un módulo de 200, y si hay cola de demanda en la misma semana. En regionales (viñedo, caña, citrus) el “por hectárea” se parece más a un trabajo de precisión que a un renglón de soja.</p>

<p>Tomá USD 12–25 como <strong>banda de servicio</strong> más citada en 2026, y USD 25–40 como cola de trabajos difíciles o de menor escala. Pedí siempre: qué incluye (producto no; agua y logística a veces sí), mínimo de hectáreas, recargo por distancia y qué pasa si el viento corta el día.</p>

<h3>2) Costo operativo de equipo propio</h3>

<p>Acá aparece el rango <strong>USD 6–12/ha</strong> que circula en notas técnicas —incluida una versión anterior de esta misma conversación en Lumadron—. No lo tires a la basura: es un <strong>costo propio optimista</strong> cuando el equipo vuela seguido, el set de baterías está bien dimensionado y no estás pagando flete de 200 km por cada 30 ha.</p>

<p>Qué entra en esa cuenta, si la querés honesta:</p>

<ul>
<li>Combustible del generador (el drone no “gasta nafta”, el grupo sí).</li>
<li>Ciclos de batería (la batería es insumo, no patrimonio eterno).</li>
<li>Mantenimiento: hélices, bombas, filtros, brazos, calibración.</li>
<li>Piloto y ayudante (aunque sea personal del campo: tiene costo de oportunidad).</li>
<li>Seguro y trámite ANAC. Ver <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a>.</li>
</ul>

<p>Qué <em>no</em> entra si cotizás USD 6–12 y después te sorprendés: amortización del kit, recambio de baterías a los 12–24 meses de uso intenso, días que el viento te deja en cero, y el camioneta + tanque de agua. Si amortizás un equipo grande (La Nación, marzo 2026, citó <strong>USD 35.000–42.000</strong> para equipos de mayor tamaño, rango de mercado, no lista Lumadron) en pocas hectáreas, el “costo propio” se parece más a la tarifa de un contratista.</p>

<p>Regla de pulgar, no fórmula sagrada: el costo propio se parece a USD 6–12 cuando hay <strong>muchas hectáreas reales por año</strong> sobre el mismo set. Si vas a volar 400 ha/campaña, no uses ese piso para decidir la compra.</p>

<h3>3) Costo total vs terrestre (mosquito) y vs avión</h3>

<p>El mosquito suele cotizarse más barato en tarifa: rangos publicados en <strong>USD 6–18/ha</strong>, otra vez con mucha tela según zona y máquina. Ahí termina la comparación fácil y empieza la comparación útil.</p>

<p>Al mosquito hay que sumarle:</p>

<ul>
<li><strong>Pisoteo.</strong> No figura en la factura. En soja o maíz en estadios reproductivos, el rastro de rueda no es teórico. El drone no pisa.</li>
<li><strong>Piso mojado.</strong> Si el mosquito no entra, el costo no es la tarifa: es aplicar tarde o no aplicar.</li>
<li><strong>Compactación y rastro en bajos.</strong></li>
</ul>

<p>El avión suele ser más barato por hectárea <em>en escala</em> (módulos grandes, dosis aérea). El trade-off es deriva, altura, dificultad de puntuales y geometría. El drone no gana al avión en un lote de 400 ha plano y seco si el único criterio es USD/ha de tarifa. Gana en borde, en manchón, en lote chico y cuando la deriva te complica un vecino o un curso de agua.</p>

<div class="table-wrap"><table>
<thead><tr>
<th>Concepto</th>
<th>Rango publicado 2025–2026</th>
<th>Qué es (y qué no)</th>
</tr></thead><tbody>
<tr><td>Servicio drone (contratista)</td><td>USD 12–25/ha (cola 25–40)</td><td>Tarifa. Varía por provincia, cultivo y dificultad.</td></tr>
<tr><td>Costo propio drone</td><td>USD 6–12/ha (optimista)</td><td>Operativo con buen uso. Amortización aparte.</td></tr>
<tr><td>Mosquito (terrestre)</td><td>USD 6–18/ha</td><td>Tarifa. Falta pisoteo y riesgo de no entrar.</td></tr>
<tr><td>Avión</td><td>suele ser menor USD/ha a escala</td><td>Tarifa. Más deriva, peor en puntuales.</td></tr>
<tr><td>Equipos grandes (contexto feria)</td><td>USD 35.000–42.000</td><td>Rango de mercado Expoagro/La Nación 2026. No es precio de lista.</td></tr>
</tbody></table></div>

<p>Ninguna fila es “el” precio de tu lote. Son bandas para sentarte a hacer la cuenta.</p>

<h2>Qué mueve el número (más que la marca del drone)</h2>

<h3>Provincia y logística</h3>

<p>PBA, con más equipos volando y lotes más cerca, empuja la tarifa para abajo. Mendoza, Tucumán, norte de Santa Fe o lotes de monte: menos oferta, más flete, más obstáculos, tarifa más alta. El USD/ha del drone incluye, aunque no lo veas, la camioneta, el agua y las horas de armado.</p>

<h3>Dosis en L/ha</h3>

<p>Es el factor técnico que más gente ignora. A 8–10 L/ha un tanque de 40 L rinde ~4–5 ha por carga de caldo. A 20 L/ha, la mitad. Más recargas = menos hectáreas por jornada = tarifa o costo propio más alto. Preguntale al contratista a qué volumen trabaja. Preguntate vos qué dice la receta.</p>

<p>Un <a href="/drones/dji-agras-t50">Agras T50</a> (40 L, 16 L/min con 2 aspersores o 24 L/min con 4) y un <a href="/drones/xag-p150">XAG P150</a> (payload 70 kg, 30 L/min) no tienen el mismo ritmo de estación. El head-to-head está en la <a href="/blog/dji-agras-t50-vs-xag-p150-comparativa">comparativa T50 vs P150</a>. Para escala, el <a href="/drones/dji-agras-t100">T100</a> (100 L, caudal 30/40 L/min) recorta viajes cuando la dosis es alta.</p>

<h3>Recargas, baterías y viento</h3>

<p>El cuello de botella casi nunca es “el drone es lento”. Es el caldo, la batería caliente y el viento de la siesta. Un set corto de baterías te deja a mitad de lote. Un generador chico también. Eso infla el costo propio y, en servicio, infla la tarifa o te deja para mañana.</p>

<h3>Cultivo</h3>

<p>Soja y maíz extensivo: más competencia de tarifas, más sentido de comparar contra mosquito. Viñedo, arroz, caña, citrus: el drone compite menos contra una tarifa barata y más contra la imposibilidad de entrar. Ahí USD 20–25/ha puede ser ganga si la alternativa es no aplicar o destrozar el lote.</p>

<h2>Cuándo el drone gana aunque la tarifa sea más alta</h2>

<p>Esta es la parte que el Excel de tarifa no muestra.</p>

<p><strong>Lote mojado o piso que no para un mosquito.</strong> Si la ventana es de 48 horas y el terrestre no entra, el costo de <em>no</em> aplicar (o aplicar fuera de estadio) suele comerse la diferencia de USD 5–10/ha. En años Niña o con lluvias pegadas a R3, esto no es anecdotario.</p>

<p><strong>Pisoteo en reproductivo.</strong> Especialmente soja y maíz. No hace falta inventar un porcentaje de rinde: si ves el rastro de la campaña pasada, ya tenés el dato. El drone no deja rueda.</p>

<p><strong>Puntuales y cabeceras.</strong> Tratar 12 ha de manchón con mosquito a veces implica pasar medio lote. El drone cobra (o cuesta) esas 12.</p>

<p><strong>Lotes chicos, irregulares, con cables o monte.</strong> El avión se complica. El mosquito también. El drone está pensado para eso.</p>

<p><strong>Aplicación variable.</strong> Si scouteás (por ejemplo con un mapeador) y no tirás el mismo caldo en las 200 ha, el ahorro está en producto, no en la tarifa de aplicación. Mezclar las dos cuentas es otro error clásico; hay más en <a href="/blog/errores-comunes-drones-agricolas">errores comunes</a>.</p>

<p>Si el lote está seco, es grande, es plano y el mosquito está disponible mañana, la tarifa terrestre gana casi siempre. No hay que pelearse con eso.</p>

<h2>Propio vs servicio: la cuenta que sí hay que hacer</h2>

<p>No es “¿me compro un drone?”. Es “¿cuántas hectáreas reales por año le voy a cargar, a qué dosis, con qué pico de jornada?”.</p>

<ul>
<li><strong>Pocas pasadas, lotes dispersos, sin piloto:</strong> servicio. Pagás la banda de USD 12–25 y no te comés ANAC, stock ni baterías paradas.</li>
<li><strong>Núcleo propio + ventana crítica + hectáreas repetidas:</strong> propio. El piso de USD 6–12 empieza a ser creíble <em>después</em> de sumar amortización y un set en serio.</li>
<li><strong>Contratista que arranca:</strong> el equipo se paga con hectáreas de terceros. La tarifa que cobrés tiene que cubrir días de viento, flete y el recambio de baterías. Si cotizás USD 12 “para entrar al mercado”, hacé el Excel con días malos, no con el día perfecto.</li>
</ul>

<p>La guía de decisión de equipo (no de tarifa) está en la <a href="/blog/guia-drones-agricolas-argentina-2026">guía de drones agrícolas 2026</a>. Si ya vas por DJI, <a href="/blog/que-dji-agras-comprar-segun-hectareas">qué Agras según hectáreas</a>. Si la duda es de marca, <a href="/blog/dji-vs-xag-vs-hylio-drones-agricolas-argentina">DJI vs XAG vs Hylio</a>. El catálogo está en <a href="/drones">drones</a>, <a href="/drones-agricultura">drones agricultura</a> y <a href="/marcas">marcas</a>.</p>

<h2>Cómo armar el número de <em>tu</em> operación (sin un promedio nacional)</h2>

<p>Anotá, en una hoja:</p>

<ol>
<li>Hectáreas y pasadas de la campaña (las reales, no las del planteo ideal).</li>
<li>Dosis en L/ha del tratamiento más frecuente y del más exigente.</li>
<li>Distancia promedio a la estación de carga y si hay agua en el lote.</li>
<li>Cuántos días de ventana típicos tenés (y cuántos se te caen por piso o viento).</li>
<li>Qué harías si no hay drone: mosquito, avión, o no aplicar.</li>
</ol>

<p>Con eso se puede estimar tarifa de servicio <em>o</em> costo propio de un set concreto. Sin eso, cualquier USD/ha es marketing.</p>

<p>Lumadron no publica lista de precios de aplicación ni de equipos en esta nota. Publica catálogo y asesora. Si querés el número de <em>esa</em> operación —cultivo, provincia, dosis, propio o servicio— el canal es contacto.</p>

<p><strong><a href="/contacto">Solicitar asesoramiento</a></strong> — llevá hectáreas, dosis y si buscás tarifa de servicio o costo de equipo propio. Armamos la cuenta con rangos de mercado y specs de catálogo.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿Cuánto cobra un contratista por pulverizar con drone en 2026?</h3>

<p>La banda más citada está en USD 12–25/ha, más baja en PBA y más alta en regionales. Hay trabajos cotizados a USD 25–40/ha. Pedí mínimo de hectáreas, qué incluye y recargo por distancia. No existe “la” tarifa nacional.</p>

<h3>¿Es más barato el drone que el mosquito?</h3>

<p>En tarifa, casi nunca. El mosquito suele cotizar USD 6–18/ha. El drone puede ganar en costo <em>total</em> cuando hay pisoteo, piso mojado o puntuales. Si el terrestre entra fácil, suele ser más barato.</p>

<h3>¿El rango de USD 6–12/ha es lo que voy a pagar?</h3>

<p>Ese rango describe un <strong>costo operativo propio optimista</strong>, no una tarifa de mercado. Sirve como piso si el equipo vuela muchas hectáreas al año. No lo uses como cotización de un contratista ni como costo de las primeras 300 ha.</p>

<h3>¿Cuánto sale el equipo? ¿En cuánto se paga?</h3>

<p>La Nación (Expoagro, mar. 2026) ubicó equipos grandes en USD 35.000–42.000, rango de mercado. El kit completo (baterías, generador, tanques) mueve el número. El repago depende de hectáreas reales y de si das servicio. No hay un “se paga en un año” universal.</p>

<h3>¿La dosis cambia el costo por hectárea?</h3>

<p>Sí, y bastante. Más litros por hectárea = más recargas = menos ha/hora. Un T50 de 40 L no rinde lo mismo a 8 L/ha que a 20 L/ha. Pedí (o calculá) el costo a <em>tu</em> volumen de caldo.</p>

<h3>¿Puedo comparar solo USD/ha entre drone, mosquito y avión?</h3>

<p>No. Sumá pisoteo, deriva, posibilidad de entrar y calidad de la aplicación. El USD/ha de tarifa es el renglón más fácil y el menos completo.</p>
`,
  },
  {
    slug: "guia-drones-agricolas-argentina-2026",
    title: "Guía de drones agrícolas en Argentina 2026: cómo elegir según tu operación",
    excerpt:
      "Cómo elegir drones agrícolas en Argentina 2026: capacidad, marcas, uso propio vs servicio y ANAC. Guía para productor y contratista.",
    category: "Guías",
    date: "14 Ago 2026",
    readTime: "12 min",
    image: guiaDronesAgricolasAsset.url,
    content: `
<p class="lead">La pregunta ya no es si el drone sirve. En 2026 sirve. La pregunta es otra: para <em>tu</em> campaña, ¿conviene equipo propio, servicio, o una mezcla? ¿Pulverizar, esparcir o primero mapear? ¿Un Agras chico o un equipo de 70–100 kg de payload?</p>

<p>En Expoagro 2026, La Nación citó alrededor de <strong>2,5 millones de hectáreas</strong> aplicadas con drone en el país. Otras jornadas técnicas de la misma feria hablaron de un salto desde ~50.000 ha en 2024 a más de 2 millones proyectadas al cierre de la gruesa. Los números no coinciden al peso: son estimaciones de mercado. Lo que sí coinciden es la dirección. Soja, maíz, trigo, girasol, arroz, caña y viñedos ya no son “casos piloto”. Son operaciones con ventana, dosis y logística.</p>

<p>Esta guía está pensada para productor y contratista. No para explicarte qué es un drone.</p>

<h2>Por qué el drone entra ahora (y no como reemplazo total del mosquito)</h2>

<p>El argumento fuerte en Argentina no es “más tecnología”. Es <strong>entrar al lote cuando el mosquito no entra</strong>.</p>

<p>Después de una lluvia, con piso mojado o con un bajo anegado, la pulverizadora terrestre o se queda afuera o deja un rastro de rueda que después ves en el rendimiento. El drone no pisa. Eso importa en soja en R3–R5, en maíz tardío cuando el stand ya está cerrado, y en arroz o caña donde el tránsito es un problema estructural.</p>

<p>Otros motivos concretos:</p>

<ul>
<li><strong>Deriva y bordes.</strong> Frente al avión, el drone vuela más bajo, con ancho de trabajo acotado (en catálogo, típico 4–13 m según modelo) y permite tratar puntuales, cabeceras, islas o lotes chicos de geometría rara.</li>
<li><strong>Exposición del operario.</strong> El piloto está afuera de la nube. No es un detalle menor si aplicás varias pasadas por campaña.</li>
<li><strong>Complemento, no sustituto.</strong> En lotes secos, grandes y planos, el mosquito suele seguir siendo más barato en tarifa por hectárea. El drone gana en la ventana de humedad, en el puntual y cuando el pisoteo pesa más que la diferencia de tarifa. El detalle de plata está en <a href="/blog/costo-pulverizar-drone-agricola-argentina-2026">cuánto cuesta pulverizar con drone en Argentina</a>.</li>
</ul>

<p>Si tu operación es 100% “esperar a que seque y pasar el mosquito”, el drone te va a parecer caro. Si perdés aplicaciones por piso, o aplicás tarde, la cuenta cambia.</p>

<h2>Qué decidir primero: pulverizar, esparcir o scoutear</h2>

<p>Comprar “un drone agrícola” sin definir el trabajo es el error más caro. Lo vimos una y otra vez: equipo sobrado para 400 ha propias, o equipo corto para un contratista que promete 80 ha/día. Hay una nota aparte sobre <a href="/blog/errores-comunes-drones-agricolas">errores comunes al implementar drones agrícolas</a>.</p>

<p>Tres trabajos distintos, tres lógicas de equipo.</p>

<h3>Pulverización (líquidos)</h3>

<p>Tanque de aspersión, caudal en L/min, tamaño de gota y recargas. La dosis en L/ha manda cuántas veces volvés a la estación. Un tanque de 40 L a 10 L/ha no es lo mismo que a 20 L/ha. Antes de mirar la marca, anotá: litros por hectárea del tratamiento más frecuente, hectáreas por jornada que necesitás cubrir en pico, y si hay tendido eléctrico, montes o pivotes.</p>

<h3>Esparcido (sólidos)</h3>

<p>Fertilizante, semilla, carnada. El tanque de spread suele ser más grande que el de spray, pero el peso útil es otro. Un <a href="/drones/dji-agras-t50">DJI Agras T50</a> declara 40 L / 40 kg en aspersión y 75 L / 50 kg en esparcido. El <a href="/drones/dji-agras-t100">T100</a> sube a 100 L de aspersión y 150 L de esparcido, con 100 kg de carga máxima, y además admite levante de cargas. Si tu campaña mezcla fungicida + urea o siembra de cobertura, el kit de esparcido no es un accesorio: es mitad del caso de uso.</p>

<h3>Scout (diagnóstico)</h3>

<p>Acá no va un Agras. Va un mapeador. El <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> trae RGB 20 MP y cuatro cámaras multiespectrales (verde, rojo, red edge y NIR), con RTK y unos 43 minutos de autonomía sin viento. Sirve para NDVI, manchones, fallas de stand y para armar una prescripción <em>antes</em> de mandar el aplicador. El <a href="/drones/hylio-photon">Hylio PHOTON</a> apunta al mismo rol, con sensores EO/IR + RGB y más de 55 minutos de autonomía, pensado como scout de respuesta rápida.</p>

<p>La práctica que más rinde en 2026: un scout chico + un aplicador. Pulverizar el lote entero “por las dudas” es caro, aunque el drone vuele bien.</p>

<div class="table-wrap"><table>
<thead><tr>
<th>Trabajo</th>
<th>Qué mirás</th>
<th>Equipo típico en catálogo</th>
</tr></thead><tbody>
<tr><td>Pulverizar líquidos</td><td>Tanque (L), caudal (L/min), ancho, recargas</td><td>Agras T25 a T100, XAG P60 a P150 Max, Hylio PEGASUS / ARES / ATLAS</td></tr>
<tr><td>Esparcir sólidos</td><td>Volumen (L) y kg útiles, tipo de granulometría</td><td>Agras con tanque spread; XAG RevoCast; Hylio tanque sólido</td></tr>
<tr><td>Diagnosticar / prescribir</td><td>RGB + multiespectral, RTK, autonomía</td><td>Mavic 3M, Hylio PHOTON</td></tr>
<tr><td>Puntuales / viñedo / lote chico</td><td>Tamaño, transporte, ancho estrecho</td><td>Agras T25 / T25P, XAG P60, Hylio PEGASUS</td></tr>
<tr><td>Pico de campaña / contratista</td><td>ha/jornada, set de baterías, payload</td><td>T70P, T100, P150 / P150 Max, ARES o ATLAS</td></tr>
</tbody></table></div>

<p>El catálogo completo está en <a href="/drones-agricultura">drones para agricultura</a> y en el <a href="/drones">listado de equipos</a>.</p>

<h2>Capacidad y caudal: el número que manda</h2>

<p>El tanque impresiona en la foto. En el lote manda el <strong>caudal + las recargas + las baterías</strong>.</p>

<p>Un ejemplo simple, sin vender un rendimiento mágico: si aplicás 10 L/ha, un tanque de 40 L te da ~4 ha por carga de caldo. A 20 L/ha, ~2 ha. El tiempo muerto no es el vuelo: es mezclar, cargar, cambiar batería y volver al renglón. Por eso un <a href="/drones/dji-agras-t70p">T70P</a> (75 L de aspersión, caudal hasta 30 L/min con 2 boquillas o 40 L/min con 4) o un <a href="/drones/xag-p150-max">XAG P150 Max</a> (80 L / 80 kg, caudal hasta 46 L/min con 4 boquillas) no “son más drone”. Son menos viajes a la estación cuando la dosis es alta o cuando el día se te achica por viento.</p>

<p>Specs de catálogo Lumadron (no mezclar con fichas de otros sitios):</p>

<div class="table-wrap"><table>
<thead><tr>
<th>Modelo</th>
<th>Aspersión</th>
<th>Esparcido / payload</th>
<th>Caudal máx. (catálogo)</th>
<th>Ancho de trabajo</th>
</tr></thead><tbody>
<tr><td><a href="/drones/dji-agras-t25">Agras T25</a></td><td>20 L</td><td>35 L / 25 kg</td><td>16 L/min (2) / 24 L/min (4)</td><td>4–7 m (a 3 m)</td></tr>
<tr><td><a href="/drones/dji-agras-t25p">Agras T25P</a></td><td>25 L</td><td>30 L</td><td>16 / 24 L/min</td><td>4–7 m (a 3 m)</td></tr>
<tr><td><a href="/drones/dji-agras-t50">Agras T50</a></td><td>40 L / 40 kg</td><td>75 L / 50 kg</td><td>16 / 24 L/min</td><td>4–11 m asp. / 8 m esp.</td></tr>
<tr><td><a href="/drones/dji-agras-t70p">Agras T70P</a></td><td>75 L</td><td>100 L</td><td>30 / 40 L/min</td><td>4–11 m</td></tr>
<tr><td><a href="/drones/dji-agras-t100">Agras T100</a></td><td>100 L</td><td>150 L / 100 kg</td><td>30 / 40 L/min</td><td>5–13 m</td></tr>
<tr><td><a href="/drones/xag-p60">XAG P60</a></td><td>payload 30 kg</td><td>—</td><td>30 L/min</td><td>3–7 m</td></tr>
<tr><td><a href="/drones/xag-p100-pro">XAG P100 Pro</a></td><td>tanque 50 L (contenedor 80 L)</td><td>payload 50 kg</td><td>22 L/min</td><td>5–10 m</td></tr>
<tr><td><a href="/drones/xag-p150">XAG P150</a></td><td>payload 70 kg</td><td>—</td><td>30 L/min</td><td>4–7 m</td></tr>
<tr><td><a href="/drones/xag-p150-max">XAG P150 Max</a></td><td>80 L / 80 kg</td><td>—</td><td>46 L/min</td><td>5–10 m</td></tr>
<tr><td><a href="/drones/hylio-pegasus">Hylio PEGASUS</a></td><td>2,5 / 4 gal (~9,5 / 15 L)</td><td>—</td><td>n/d en ficha</td><td>puntual</td></tr>
<tr><td><a href="/drones/hylio-ares-hyl-150">Hylio ARES HYL-150</a></td><td>13 gal (50 L)</td><td>20 gal (76 L) / 50 kg</td><td>n/d en ficha</td><td>hasta 12 m</td></tr>
<tr><td><a href="/drones/hylio-atlas-hyl-300">Hylio ATLAS HYL-300</a></td><td>30 / 50 gal (~114 / 189 L)</td><td>—</td><td>n/d en ficha</td><td>gran escala</td></tr>
</tbody></table></div>

<p>El T50 sigue siendo el “punto medio” más citado en el país. Si estás entre T50 y P150, hay una <a href="/blog/dji-agras-t50-vs-xag-p150-comparativa">comparativa modelo a modelo</a>. Si ya te decidiste por DJI y la duda es de escala, andá a <a href="/blog/que-dji-agras-comprar-segun-hectareas">qué Agras comprar según hectáreas</a>.</p>

<h2>Marcas con presencia en catálogo local: DJI, XAG e Hylio</h2>

<p>En Argentina el mercado de aplicadores se concentra en tres nombres. Lumadron publica catálogo y asesoramiento de las tres; no es lo mismo que un canal que solo mueve una marca.</p>

<ul>
<li><strong>DJI (Agras + Mavic).</strong> La red de repuestos y de operarios que ya conocen el control es el activo real. Sensores fuertes (en T50, radar de arreglo en fase; en T70P/T100, Penta-Vision y LiDAR). Si tu prioridad es no quedar parado por una hélice o una bomba, DJI suele ser el camino más previsible.</li>
<li><strong>XAG (serie P).</strong> Payload alto, mapeo 3D en tiempo real y una lógica de aplicación variable / autonomía que convence a quien quiere menos “piloto pegado a la palanca”. El P150 Max declara 80 kg y 46 L/min: es otro régimen de recargas.</li>
<li><strong>Hylio.</strong> Fabricación en Texas. El ARES HYL-150 declara 50 L líquidos / 76 L sólidos y operación en enjambre (hasta 70 acres/h según ficha, ~28 ha/h: tomalo como techo de fabricante, no como tu jornada promedio). El ATLAS escala a 30/50 galones. La red local de service es más chica que la de DJI. Hay que decirlo de frente: si elegís Hylio, el criterio es capacidad y arquitectura, no “hay un local en cada pueblo”.</li>
</ul>

<p>La decisión de marca (no de un modelo contra otro) está armada en <a href="/blog/dji-vs-xag-vs-hylio-drones-agricolas-argentina">DJI vs XAG vs Hylio en Argentina</a>. El overview de las tres está en <a href="/marcas">marcas</a>.</p>

<p>Sobre precios de equipos: La Nación, en marzo 2026, ubicó equipos grandes en un rango de mercado de <strong>USD 35.000–42.000</strong>. Eso es contexto de feria, no lista de Lumadron. El kit (baterías, generador, tanque extra, radar, capacitación) mueve el número tanto como el fuselaje. Pedí cotización del <em>sistema</em>, no del drone suelto.</p>

<h2>Uso propio vs servicio: no es una cuestión de ego</h2>

<p><strong>Servicio de contratista.</strong> Tiene sentido si aplicás pocas pasadas al año, si tus lotes están dispersos, o si todavía no tenés piloto ni ganas de meterte en ANAC, baterías y stock de repuestos. Pagás tarifa por hectárea y listo. El riesgo es la cola: en la semana que se abre la ventana, todo el partido quiere el mismo drone.</p>

<p><strong>Equipo propio.</strong> Tiene sentido si las hectáreas por campaña (tuyas o de vecinos estables) justifican el set, si necesitás entrar el mismo día que llovió, o si vas a ofrecer servicio. El costo operativo propio —combustible del generador, ciclos de batería, mantenimiento, piloto— puede ubicarse por debajo de la tarifa de mercado cuando el equipo vuela seguido. Puede. No es automático. Depende de horas reales, no de horas de folleto.</p>

<p><strong>Híbrido.</strong> Muy argentino: propio para el núcleo y para la ventana crítica; contratista para el pico o para el lote de 80 km.</p>

<p>No elijas el equipo mirando el tamaño de <em>un</em> lote. Mirá hectáreas por campaña y hectáreas por jornada en la semana peor. Un campo de 1.200 ha con tres aplicaciones no es “un T100”. Puede ser un T50 bien logístico, o servicio. Un contratista que promete 2.000 ha en diez días húmedos no es un T25.</p>

<h2>Cómo elegir según hectáreas y cultivo</h2>

<p>Regla práctica, no dogma:</p>

<div class="table-wrap"><table>
<thead><tr>
<th>Perfil</th>
<th>ha/campaña (orden de magnitud)</th>
<th>Pico de jornada</th>
<th>Por dónde arrancar</th>
</tr></thead><tbody>
<tr><td>Productor chico / puntual / viñedo</td><td>cientos, no miles</td><td>15–40 ha/día</td><td>T25, T25P, P60, PEGASUS</td></tr>
<tr><td>Productor mediano uso propio</td><td>~500–2.000 ha</td><td>40–80 ha/día</td><td>T50 o P100 Pro</td></tr>
<tr><td>Contratista o propio grande</td><td>miles</td><td>80–150 ha/día con set completo</td><td>T70P, P150, ARES</td></tr>
<tr><td>Gran escala / multirol (spray + spread + levante)</td><td>varios miles, varias cuadrillas</td><td>150 ha/día o más, o dos equipos</td><td>T100, P150 Max, ATLAS</td></tr>
</tbody></table></div>

<p>Los umbrales son orientativos. Un viñedo de 80 ha con muchos bordes puede saturar un T50. Un lote de soja de 200 ha plano, con dosis baja y viento calmo, lo cubre un T25P si no tenés apuro. La variable sucia es siempre la misma: <strong>ventana</strong>. Si tenés tres días de piso y después se te pasa el estadio, pagás capacidad.</p>

<p>Por cultivo, el matiz:</p>

<ul>
<li><strong>Soja y maíz:</strong> el drone brilla en fungicida/insecticida cuando el mosquito no entra o cuando no querés ruedas sobre el surco. En maíz alto, sensores de relieve (radar / LiDAR) no son lujo.</li>
<li><strong>Trigo y girasol:</strong> ventanas cortas, lotes a veces chicos o irregulares. Cabeza de lote y manchones.</li>
<li><strong>Arroz y caña:</strong> tránsito terrestre caro o imposible. Payload y autonomía pesan más.</li>
<li><strong>Viñedos y regionales (Mendoza, Tucumán, etc.):</strong> anchos menores, más obstáculos, más puntual. Equipo compacto + buen radar.</li>
</ul>

<h2>ANAC: lo mínimo para operar en comercial (un bloque, no un tratado)</h2>

<p>Operar comercialmente en Argentina no es “tengo el drone y vuelo”. El marco vigente (RAAC Parte 100 / Resolución ANAC 550/2025) clasifica operaciones y, para equipos pesados de trabajo aéreo, apunta a <strong>aeronave registrada, piloto habilitado y seguro</strong>. Los aplicadores agrícolas del catálogo (T25 para arriba, serie P, ARES/ATLAS) no entran en la lógica de un drone recreativo de 250 g.</p>

<p>No tomes esto como asesoramiento legal. La norma se actualiza y el trámite concreto (matrícula, CETA cuando corresponde, CMA, póliza) depende de categoría y uso. El detalle operativo está en la nota de <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC para drones comerciales</a>. Sumá además receta agronómica y distancias provinciales a poblados y cursos de agua: ANAC no te reemplaza al SENASA ni a la ley provincial de fitosanitarios.</p>

<p>Si vas a dar servicio, resolvé el papelerío <em>antes</em> de cotizar hectáreas. Un cliente grande te lo va a pedir.</p>

<h2>Próximos pasos (en orden, no al revés)</h2>

<ol>
<li>Anotá hectáreas por campaña, número de pasadas, dosis en L/ha y si también esparcís.</li>
<li>Decidí propio / servicio / híbrido. La plata de la tarifa vs el costo propio está desglosada en la <a href="/blog/costo-pulverizar-drone-agricola-argentina-2026">nota de costos 2026</a>.</li>
<li>Recién ahí elegí marca y modelo. Si es DJI, usá el <a href="/blog/que-dji-agras-comprar-segun-hectareas">árbol Agras</a>. Si es marca, la <a href="/blog/dji-vs-xag-vs-hylio-drones-agricolas-argentina">comparativa DJI / XAG / Hylio</a>.</li>
<li>Armá el set: baterías, generador, tanques, piloto, ANAC. El fuselaje solo no vuela una campaña.</li>
</ol>

<p>Lumadron publica <a href="/drones">catálogo</a> de DJI, XAG e Hylio y asesora según operación. No hace falta que llegues con el modelo decidido.</p>

<p><strong><a href="/contacto">Solicitar asesoramiento</a></strong> — contá cultivo, hectáreas por campaña y si buscás equipo propio o servicio. Armamos el recorte con specs de catálogo, no con un pitch genérico.</p>

<h2>Preguntas frecuentes</h2>

<h3>¿El drone agrícola reemplaza a la pulverizadora terrestre?</h3>

<p>No en la mayoría de los planteos extensivos. Reemplaza <em>aplicaciones que el mosquito no puede hacer bien</em>: piso mojado, puntuales, lotes irregulares, bordes, y casos donde el pisoteo sale más caro que la diferencia de tarifa. Muchos campos van a convivir con las dos herramientas.</p>

<h3>¿Cuántas hectáreas cubre un drone por día?</h3>

<p>Depende de dosis, viento, distancia a la estación, set de baterías y modelo. En feria se escuchan techos de fabricante de varias decenas de hectáreas por hora en equipos grandes. En lote real, con recargas y espera de batería, el número baja. Pedí una estimación para <em>tu</em> dosis y <em>tu</em> logística, no un promedio nacional.</p>

<h3>¿Hace falta licencia ANAC para pulverizar con drone?</h3>

<p>Para uso comercial, sí: hay registro de aeronave, habilitación de piloto y seguro, con matices según categoría. Mirá la <a href="/blog/normativa-anac-drones-comerciales-argentina">nota de normativa</a> y confirmá el trámite vigente en ANAC. Esto no es un dictamen legal.</p>

<h3>¿Qué drone agrícola conviene para un productor de 800 hectáreas?</h3>

<p>Casi nunca el más grande. Con 800 ha propias y 2–3 pasadas, un T50 o un P100 Pro suele ser el centro de la conversación; un T25P entra si los lotes son chicos o si el drone es complemento del mosquito. La variable es el pico de jornada, no el rótulo del campo.</p>

<h3>¿Puedo usar el mismo equipo para pulverizar y fertilizar?</h3>

<p>En la línea Agras, sí: tanque de aspersión y tanque de esparcido son modos distintos del mismo equipo (capacidades distintas). En XAG, RevoSpray / RevoCast cubren la misma idea. Confirmá el kit incluido: a veces el spread no viene en el paquete base.</p>

<h3>¿Lumadron es dealer oficial de DJI, XAG o Hylio?</h3>

<p>Lumadron publica catálogo de esas marcas y ofrece asesoramiento para armar la operación. Si necesitás disponibilidad, plazos y condiciones, <a href="/contacto">consultá</a>. No asumas “oficial” por el solo hecho de ver el modelo en la web.</p>
`,
  },
  {
    slug: "dji-agras-t50-vs-xag-p150-comparativa",
    title: "DJI Agras T50 vs XAG P150: comparativa definitiva",
    excerpt:
      "Analizamos en detalle las dos opciones más populares del mercado para pulverización aérea en agricultura de precisión.",
    category: "Comparativas",
    date: "10 Abr 2026",
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
<p>Si necesitás ayuda para elegir, revisá nuestra <a href="/blog/guia-drones-agricolas-argentina-2026">guía completa de drones agrícolas</a>, mirá las opciones por <a href="/categorias">industria</a> o escribinos desde <a href="/contacto">contacto</a> para una recomendación personalizada.</p>
`,
  },
  {
    slug: "normativa-anac-drones-comerciales-argentina",
    title: "Normativa ANAC para uso de drones comerciales",
    excerpt:
      "Requisitos legales, registración, seguros y permisos necesarios para operar drones comerciales en Argentina.",
    category: "Normativa",
    date: "5 Abr 2026",
    readTime: "6 min",
    image: normativaAnac,
    content: `
<p class="lead">Operar un <strong>drone comercial en Argentina</strong> requiere cumplir con la regulación de la Administración Nacional de Aviación Civil (ANAC). La normativa busca un equilibrio entre habilitar el uso productivo de los UAV y garantizar la seguridad operacional. Esta guía resume lo esencial para 2026.</p>

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
<p>Si recién empezás, te recomendamos leer también nuestra <a href="/blog/guia-drones-agricolas-argentina-2026">guía completa de drones agrícolas</a> y la nota sobre los <a href="/blog/errores-comunes-drones-agricolas">5 errores comunes al implementar drones</a>. Para conocer las opciones por industria, visitá <a href="/categorias">nuestras categorías</a> o explorá el portfolio de <a href="/marcas">marcas representadas</a>.</p>

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
    date: "1 Abr 2026",
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
<p>Más allá de la minería, estas tecnologías se aplican en oil &amp; gas, construcción y agricultura de precisión. Conocé las industrias donde trabajamos en nuestra página de <a href="/categorias">categorías</a> y revisá el portfolio de <a href="/marcas">marcas</a> que representamos. Para profundizar en aplicaciones agrícolas, leé la <a href="/blog/guia-drones-agricolas-argentina-2026">guía completa de drones agrícolas</a>.</p>

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
    date: "28 Mar 2026",
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
<p>El AG-230 no es para todos. Es la herramienta correcta cuando la escala lo justifica y el modelo de negocio premia la productividad por hora. Si tu operación crece y los equipos medianos se quedan cortos, vale la evaluación. Para una mirada general del mercado, te recomendamos leer la <a href="/blog/guia-drones-agricolas-argentina-2026">guía completa de drones agrícolas</a> y explorar nuestras <a href="/categorias">categorías por industria</a>. Para una propuesta concreta, escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "errores-comunes-drones-agricolas",
    title: "5 errores comunes al implementar drones en operaciones agrícolas",
    excerpt:
      "Los errores más frecuentes que cometen los productores al adoptar tecnología drone y cómo evitarlos.",
    category: "Guías",
    date: "25 Mar 2026",
    readTime: "7 min",
    image: erroresDronesAgro,
    content: `
<p class="lead">Adoptar <strong>drones agrícolas</strong> sin un plan suele generar frustración y retornos por debajo de lo esperado. Estos son los cinco errores más frecuentes que vemos en productores y empresas de servicio, y cómo evitarlos antes de invertir.</p>

<h2>1. Comprar el equipo equivocado para la escala</h2>
<p>Elegir un drone chico para una operación grande, o un equipo enorme para lotes mixtos, es el error más caro. Antes de decidir, definí hectáreas anuales, ventana operativa y tipo de cultivo. La <a href="/blog/guia-drones-agricolas-argentina-2026">guía completa de drones agrícolas</a> ayuda a hacer este match. Si dudás entre dos referencias, mirá nuestra comparativa <a href="/blog/dji-agras-t50-vs-xag-p150-comparativa">T50 vs P150</a>.</p>

<h2>2. Subestimar la logística de baterías y carga</h2>
<p>Un drone como el <a href="/drones/dji-agras-t50">DJI Agras T50</a> consume baterías a un ritmo que muchos no anticipan. Sin un set adecuado, generador en campo y plan de rotación, la productividad cae a la mitad. Calculá el set mínimo según litros de aplicación por hora y tiempo de carga.</p>

<h2>3. Ignorar la regulación</h2>
<p>Volar sin matrícula, sin piloto certificado o sin seguro es un riesgo legal y operativo enorme. La <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a> es clara y los controles aumentaron en 2025 y 2026. Cumplir desde el día uno evita multas y problemas con clientes.</p>

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
  {
    slug: "drones-rtk-topografia-precision-argentina",
    title: "Drones RTK para topografía de precisión en Argentina",
    excerpt:
      "Cómo usar drones RTK para levantamientos topográficos centimétricos: equipos, flujo de trabajo y entregables aceptados por colegios profesionales.",
    category: "Topografía",
    date: "20 Abr 2026",
    readTime: "9 min",
    image: dronesTopografiaRtk,
    content: `
<p class="lead">Los <strong>drones RTK</strong> transformaron la topografía profesional en Argentina. Con precisión centimétrica, tiempos de campo reducidos a un tercio y entregables digitales aceptados por colegios y municipios, hoy son la herramienta estándar para obras viales, loteos, minería y agricultura de precisión.</p>

<h2>Qué es RTK y por qué importa</h2>
<p>RTK (Real Time Kinematic) corrige la señal GNSS del drone usando una base fija o una red NTRIP, llevando la precisión de metros a centímetros. Sin RTK, un mapa fotogramétrico es una referencia visual; con RTK, es un producto topográfico utilizable para replanteo, cómputo y proyecto.</p>

<h2>Equipos recomendados</h2>
<p>El <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> integra RTK y cámara multiespectral, ideal para combinar topografía y monitoreo agronómico en una sola misión. Para levantamientos puros se suman plataformas dedicadas con LiDAR. La elección depende del tamaño del lote, la cobertura vegetal y el tipo de entregable.</p>

<h2>Flujo de trabajo de campo</h2>
<p>Un proyecto típico arranca con la colocación de puntos de apoyo (GCP), planificación de la misión con solapamiento del 75%, vuelo automatizado y verificación de calidad de imágenes. Con RTK, los GCP funcionan como control de calidad más que como dato primario.</p>

<h2>Procesamiento y entregables</h2>
<p>El procesamiento se hace en plataformas como Pix4D, Agisoft Metashape o DroneDeploy. Los entregables incluyen ortomosaico georreferenciado, modelo digital de elevación (MDE), curvas de nivel, nube de puntos y reporte de precisión. Todos compatibles con AutoCAD, Civil 3D y QGIS.</p>

<h2>Aplicaciones más comunes</h2>
<p>En obra civil, se usan para avance de movimiento de suelos y volumetría de excavaciones. En agricultura, para nivelación y diseño de sistematización. En minería, para conciliación de stockpiles, como detallamos en la nota sobre <a href="/blog/drones-mineria-latinoamerica">drones en minería latinoamericana</a>. En loteos, para mensura preliminar y proyecto urbanístico.</p>

<h2>Marco normativo</h2>
<p>El operador debe cumplir con la <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a> y, si el levantamiento se presenta ante un colegio profesional, contar con la firma de un agrimensor o ingeniero matriculado. La precisión declarada debe estar respaldada por puntos de control independientes.</p>

<h2>Costos y rentabilidad</h2>
<p>Frente a una cuadrilla tradicional, un equipo de drone RTK reduce el costo por hectárea entre 50% y 70% en superficies superiores a 50 ha, con un repago del equipo en 8 a 14 meses para empresas de servicio.</p>

<h2>Próximos pasos</h2>
<p>Si tu estudio o empresa evalúa incorporar drones RTK, podemos ayudarte a definir el equipo y el flujo de trabajo. Conocé nuestra <a href="/drones-topografia">categoría drones para topografía</a> o escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "drones-inspeccion-oil-gas-argentina",
    title: "Drones para inspección en oil & gas: casos y ROI en Argentina",
    excerpt:
      "Inspección termográfica de ductos, antorchas y tanques con drones: cómo reducen riesgo, paradas y costos en operaciones de oil & gas.",
    category: "Oil & Gas",
    date: "18 Abr 2026",
    readTime: "8 min",
    image: dronesOilGasInspeccion,
    content: `
<p class="lead">La industria del <strong>oil &amp; gas en Argentina</strong>, con Vaca Muerta como motor, encontró en los drones un aliado para reducir riesgo humano, evitar paradas no programadas y cumplir auditorías ambientales con datos verificables. Esta nota recorre los casos de uso más maduros y el retorno de inversión típico.</p>

<h2>Inspección termográfica de antorchas y hornos</h2>
<p>Las antorchas y hornos de proceso requieren inspección periódica de puntos calientes, integridad refractaria y condición de quemadores. Hacerlo con drone con cámara térmica evita andamios, reduce el tiempo de parada y permite repetir la medición con misma trayectoria mes a mes.</p>

<h2>Inspección de líneas y ductos</h2>
<p>Los gasoductos y oleoductos se inspeccionan tradicionalmente con cuadrillas o vehículos. Un drone equipado con sensor metanométrico u óptico recorre kilómetros por hora, detectando fugas, intrusiones y deterioros del derecho de vía. Modelos como el <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> y plataformas industriales se integran a flujos de inspección preventiva.</p>

<h2>Tanques de almacenamiento</h2>
<p>La inspección de techos flotantes, sellos y escaleras se resuelve con drones con cámara visual de alta resolución. Se capturan miles de imágenes, se generan modelos 3D y se identifica corrosión, deformaciones y faltantes de pintura. La frecuencia de inspección puede pasar de anual a trimestral sin sumar costo significativo.</p>

<h2>Logística en yacimientos</h2>
<p>Para el traslado de muestras, repuestos críticos e instrumental entre baterías y campamentos, drones cargueros como el <a href="/drones/dji-flycart-30">DJI FlyCart 30</a> y el <a href="/drones/dji-flycart-100">DJI FlyCart 100</a> reducen movimientos de camionetas y exposición vial del personal.</p>

<h2>Cumplimiento ambiental</h2>
<p>El monitoreo de derrames, control de revegetación y verificación de pasivos ambientales con drones genera evidencia auditable. Las imágenes con sello temporal y georreferencia son aceptadas por organismos de control y certificadoras internacionales.</p>

<h2>Retorno de inversión</h2>
<p>Operadoras que integraron drones reportan reducción de tiempos de inspección de 60% a 80%, baja en horas-hombre en altura, y detección temprana de eventos que evitan paradas. El repago del programa se da en 6 a 12 meses para midstream y upstream.</p>

<h2>Marco regulatorio</h2>
<p>Las operaciones en yacimientos requieren autorización del operador, además del cumplimiento de la <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a>. Las distancias mínimas a infraestructura crítica y los procedimientos de evacuación deben estar documentados.</p>

<h2>Próximos pasos</h2>
<p>Si tu empresa evalúa un programa de drones para oil &amp; gas, podemos ayudarte a definir el alcance, los entregables y el equipo. Visitá la categoría <a href="/drones-oil-gas">drones para oil &amp; gas</a> o escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "dji-flycart-30-vs-100-drones-carga",
    title: "DJI FlyCart 30 vs FlyCart 100: qué drone de carga elegir",
    excerpt:
      "Comparativa entre el DJI FlyCart 30 y FlyCart 100 para logística aérea en minería, energía y agro: capacidad, autonomía y casos de uso.",
    category: "Comparativas",
    date: "16 Abr 2026",
    readTime: "8 min",
    image: dronesCargaFlycart,
    content: `
<p class="lead">La logística aérea con <strong>drones cargueros</strong> dejó de ser ciencia ficción. DJI lidera el segmento con dos plataformas de referencia: el <a href="/drones/dji-flycart-30">DJI FlyCart 30</a> y el <a href="/drones/dji-flycart-100">DJI FlyCart 100</a>. Apuntan a misiones distintas y entender la diferencia evita comprar la herramienta equivocada.</p>

<h2>Capacidad de carga</h2>
<p>El FlyCart 30 transporta hasta 30 kg en configuración estándar y 40 kg con cuerda. El FlyCart 100 escala hasta 65 kg en modo dual battery y 80 kg en single battery. Para muestras geológicas, repuestos o paquetes médicos, 30 kg suele alcanzar; para insumos de obra o equipamiento técnico, conviene el 100.</p>

<h2>Autonomía y alcance</h2>
<p>Ambos rondan los 16 a 20 km de alcance con carga máxima, pero la autonomía baja sensiblemente al subir el peso. El FlyCart 100 ofrece un sistema de baterías más robusto y modos de redundancia que permiten misiones más largas con margen de seguridad.</p>

<h2>Sistema de entrega</h2>
<p>Los dos modelos integran cabrestante con cuerda para entrega en puntos sin pista de aterrizaje, además de un cargo case removible para envíos protegidos. La diferencia está en la velocidad del cabrestante y en la capacidad de operar con vientos más altos en el FlyCart 100.</p>

<h2>Sensórica y seguridad</h2>
<p>Radar de fase activa, visión binocular omnidireccional y conexión doble (O3 + 4G) son comunes a ambos. El FlyCart 100 suma redundancia adicional en propulsión y un sistema de paracaídas opcional, clave para operación sobre infraestructura sensible.</p>

<h2>Casos de uso por industria</h2>
<p>En <a href="/drones-mineria">minería</a>, ambos se usan para muestras y repuestos; el 100 destaca en cordillera por su tolerancia al viento. En <a href="/drones-oil-gas">oil &amp; gas</a>, el 30 alcanza para inspecciones puntuales y el 100 para abastecimiento de baterías de pozos remotos. En <a href="/drones-agricultura">agricultura</a>, el 30 cubre la mayoría de necesidades logísticas en chacra. En construcción y energías renovables, el 100 abre la puerta a izaje liviano y reposición de materiales.</p>

<h2>Costo total de propiedad</h2>
<p>El FlyCart 30 tiene un costo de adquisición y operación significativamente menor. El FlyCart 100, además del precio mayor, requiere más infraestructura (estaciones de carga rápida, baterías adicionales, capacitación específica). Pero por kilo transportado, el 100 es más eficiente cuando se opera al límite de su capacidad.</p>

<h2>Marco regulatorio</h2>
<p>El uso comercial de drones cargueros debe cumplir con la <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a> y obtener autorizaciones específicas para vuelos BVLOS (más allá de la línea de vista). La planificación de corredores aéreos y procedimientos de emergencia es obligatoria.</p>

<h2>Veredicto</h2>
<p>Si tu necesidad es logística liviana en yacimientos, chacras o sitios remotos, el <strong>FlyCart 30</strong> es la opción más equilibrada. Si la operación implica cargas pesadas, vientos cordilleranos o misiones largas, el <strong>FlyCart 100</strong> justifica la inversión. Para discutir tu caso, escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
  {
    slug: "drones-seguridad-perimetral-industrial",
    title: "Drones para seguridad perimetral industrial: guía 2026",
    excerpt:
      "Cómo armar un programa de vigilancia con drones en plantas, depósitos y campos: equipos, automatización y respuesta ante eventos.",
    category: "Seguridad",
    date: "12 Abr 2026",
    readTime: "8 min",
    image: dronesSeguridadPerimetral,
    content: `
<p class="lead">La <strong>seguridad perimetral</strong> en plantas industriales, depósitos logísticos y establecimientos rurales es uno de los casos de uso de mayor crecimiento para drones en Argentina. Frente al costo creciente de personal de vigilancia y la limitación de cámaras fijas, los UAV ofrecen una capa de respuesta rápida y disuasión eficaz.</p>

<h2>Drones de patrullaje vs. respuesta ante alarma</h2>
<p>Hay dos modelos operativos. El primero es patrullaje programado: el drone realiza recorridos automáticos cada cierto intervalo. El segundo es respuesta ante alarma: el drone despega al activarse un sensor (cerca eléctrica, cámara con analítica, sensor sísmico) y verifica el evento en segundos.</p>

<h2>Equipos recomendados</h2>
<p>Para vigilancia diurna y nocturna se utilizan plataformas con cámara visual de zoom y sensor térmico. La térmica es clave para detectar personas en oscuridad o vegetación densa. Un equipo como el <a href="/drones/dji-mavic-3m">DJI Mavic 3M</a> sirve para misiones combinadas de monitoreo y reconocimiento, mientras que plataformas industriales (Matrice) cubren operaciones 24/7 con base de aterrizaje automática.</p>

<h2>Automatización con docks</h2>
<p>El verdadero salto operativo viene con los docks o estaciones de aterrizaje automático. El drone vive dentro de la base, sale a misión programada o por alarma, vuelve y se carga solo. Permite operación remota sin piloto en sitio, supervisada desde un centro de control.</p>

<h2>Integración con software de seguridad</h2>
<p>Los drones se integran con plataformas VMS, sistemas SCADA y centros de monitoreo. La analítica de video con IA detecta intrusos, vehículos no autorizados y comportamientos anómalos, generando eventos prioritarios al operador.</p>

<h2>Casos de uso típicos</h2>
<p>En complejos petroquímicos y refinerías, los drones patrullan ductos y áreas restringidas, complementando la nota sobre <a href="/blog/drones-inspeccion-oil-gas-argentina">inspección en oil &amp; gas</a>. En depósitos logísticos, vigilan playas y perímetros nocturnos. En establecimientos rurales, controlan robo de hacienda, intrusión en cascos y monitoreo de aguadas. En minería y energía, suman a los flujos descritos en <a href="/blog/drones-mineria-latinoamerica">drones en minería</a>.</p>

<h2>Marco regulatorio</h2>
<p>El uso de drones para seguridad debe cumplir con la <a href="/blog/normativa-anac-drones-comerciales-argentina">normativa ANAC</a>, normas provinciales sobre vigilancia privada y, en algunos casos, con habilitaciones específicas. La operación BVLOS requiere autorización formal y procedimientos documentados.</p>

<h2>Costos y modelo de servicio</h2>
<p>Algunas empresas adquieren los equipos y operan internamente; otras contratan el servicio mensual con un proveedor. El segundo modelo baja la barrera de entrada y traslada el riesgo operativo, pero limita la personalización.</p>

<h2>Próximos pasos</h2>
<p>Si tu empresa o establecimiento evalúa incorporar drones para seguridad, podemos ayudarte a diseñar el programa. Visitá nuestra categoría <a href="/drones-seguridad">drones para seguridad</a> o escribinos desde <a href="/contacto">contacto</a>.</p>
`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
