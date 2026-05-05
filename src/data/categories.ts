import agriculturaHero from "@/assets/categories/agricultura-hero.jpg";
import oilGasHero from "@/assets/categories/oil-gas-hero.jpg";
import mineriaHero from "@/assets/categories/mineria-hero.jpg";
import seguridadHero from "@/assets/categories/seguridad-hero.jpg";
import topografiaHero from "@/assets/categories/topografia-hero.jpg";

export interface CategoryLanding {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  productSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const categoryLandings: CategoryLanding[] = [
  {
    slug: "agricultura",
    name: "Agricultura",
    heroTitle: "Drones para agricultura de precisión",
    heroSubtitle:
      "Pulverización, esparcido, monitoreo multiespectral y mapeo de cultivos con drones autónomos para el agro argentino.",
    heroImage: agriculturaHero,
    intro: {
      heading: "Drones en el agro: más rendimiento, menos insumos",
      paragraphs: [
        "Los drones agrícolas transformaron la forma de aplicar fitosanitarios, fertilizantes y semillas en Argentina. Permiten cubrir grandes superficies con dosis precisas, reduciendo el uso de productos químicos y el impacto sobre el suelo y los operarios.",
        "Sumado al mapeo multiespectral con drones de relevamiento, las decisiones agronómicas dejan de basarse en muestreos puntuales para apoyarse en datos del 100% del lote: índices NDVI, detección temprana de plagas, zonificación y prescripciones variables.",
      ],
      bullets: [
        "Pulverización selectiva con caudales de hasta 40 L/min",
        "Esparcido de semillas, fertilizantes y carnadas",
        "Mapeo NDVI y multiespectral para agricultura de precisión",
        "Operación nocturna y en lotes con pendiente o anegados",
        "Reducción del uso de agua y agroquímicos",
      ],
    },
    productSlugs: [
      "dji-agras-t100",
      "dji-agras-t70p",
      "dji-agras-t50",
      "dji-agras-t25p",
      "xag-p150-max",
      "xag-p150",
      "xag-p100-pro",
      "hylio-ares-hyl-150",
      "dji-mavic-3m",
    ],
    metaTitle: "Drones Agrícolas en Argentina | DJI Agras, XAG e Hylio",
    metaDescription:
      "Drones para pulverización, esparcido y mapeo NDVI. Modelos DJI Agras, XAG P150 e Hylio para agricultura de precisión en Argentina.",
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    heroTitle: "Drones para inspección en Oil & Gas",
    heroSubtitle:
      "Inspección de ductos, plantas, antorchas y tanques de almacenamiento con drones térmicos y de carga.",
    heroImage: oilGasHero,
    intro: {
      heading: "Inspección y logística aérea en la industria energética",
      paragraphs: [
        "Yacimientos, refinerías y redes de ductos requieren inspecciones frecuentes en zonas remotas, de difícil acceso o de alto riesgo. Los drones permiten realizar relevamientos visuales y térmicos sin detener la operación ni exponer personal a alturas o ambientes peligrosos.",
        "Combinando cámaras EO/IR con sensores de gases y drones de carga para logística remota, es posible detectar fugas, puntos calientes y anomalías estructurales en tiempo real, además de transportar repuestos y muestras a locaciones aisladas en Vaca Muerta y la Patagonia.",
      ],
      bullets: [
        "Inspección térmica de antorchas, intercambiadores y tanques",
        "Recorridos automáticos de ductos y líneas de alta tensión",
        "Detección de fugas y puntos calientes",
        "Logística remota con drones de carga pesada",
        "Reducción de riesgos para personal en altura",
      ],
    },
    productSlugs: ["hylio-photon", "dji-mavic-3m", "dji-flycart-100", "dji-flycart-30"],
    metaTitle: "Drones para Oil & Gas | Inspección y Logística Aérea",
    metaDescription:
      "Inspección térmica de ductos y plantas, detección de fugas y logística remota con drones DJI FlyCart e Hylio Photon en yacimientos.",
  },
  {
    slug: "mineria",
    name: "Minería",
    heroTitle: "Drones para minería y operaciones a cielo abierto",
    heroSubtitle:
      "Volumetría de stockpiles, control de avance, monitoreo de taludes y mapeo topográfico de alta precisión.",
    heroImage: mineriaHero,
    intro: {
      heading: "Datos aéreos para operaciones mineras seguras y eficientes",
      paragraphs: [
        "La minería moderna se apoya en relevamientos frecuentes para controlar el avance de explotación, calcular volúmenes de material movido y monitorear la estabilidad de taludes. Los drones reducen los tiempos de medición de días a horas, con precisiones centimétricas mediante RTK/PPK.",
        "Además, el monitoreo aéreo periódico permite anticipar deslizamientos, optimizar la planificación de voladuras y generar reportes objetivos para auditorías ambientales y de producción.",
      ],
      bullets: [
        "Volumetría de acopios y cálculo de movimiento de suelos",
        "Mapeo topográfico RTK con precisión centimétrica",
        "Monitoreo de taludes y planificación de voladuras",
        "Inspección térmica de cintas, palas y equipo pesado",
        "Reportes objetivos para auditorías y compliance",
      ],
    },
    productSlugs: ["dji-mavic-3m", "hylio-photon", "dji-flycart-100"],
    metaTitle: "Drones para Minería | Volumetría y Mapeo RTK",
    metaDescription:
      "Volumetría de stockpiles, mapeo topográfico RTK y monitoreo de taludes con drones DJI Mavic 3M e Hylio Photon para minería en Argentina.",
  },
  {
    slug: "seguridad",
    name: "Seguridad",
    heroTitle: "Drones para seguridad y respuesta rápida",
    heroSubtitle:
      "Vigilancia perimetral, monitoreo en tiempo real y soporte a fuerzas de seguridad y emergencias.",
    heroImage: seguridadHero,
    intro: {
      heading: "Cobertura aérea para protección de personas y activos",
      paragraphs: [
        "Los drones de seguridad permiten cubrir perímetros extensos, detectar intrusos en condiciones de baja visibilidad y coordinar respuestas con video en vivo. Su operación rápida los convierte en una herramienta clave para predios industriales, eventos masivos y zonas rurales.",
        "Con cámaras térmicas y zoom óptico, equipos de seguridad privada, defensa civil y bomberos pueden tomar decisiones más rápido y con menor exposición al riesgo.",
      ],
      bullets: [
        "Vigilancia perimetral diurna y nocturna",
        "Cámaras térmicas para detección de personas y focos de incendio",
        "Soporte a operativos de fuerzas de seguridad",
        "Búsqueda y rescate en zonas de difícil acceso",
        "Streaming en vivo a centro de monitoreo",
      ],
    },
    productSlugs: ["hylio-photon", "dji-mavic-3m"],
    metaTitle: "Drones para Seguridad | Vigilancia y Respuesta Rápida",
    metaDescription:
      "Vigilancia perimetral, cámaras térmicas y soporte a fuerzas de seguridad y emergencias con drones profesionales en Argentina.",
  },
  {
    slug: "topografia",
    name: "Topografía",
    heroTitle: "Drones para topografía y fotogrametría",
    heroSubtitle:
      "Mapeo aéreo, fotogrametría y modelos 3D de alta precisión para obras, agro y desarrollos territoriales.",
    heroImage: topografiaHero,
    intro: {
      heading: "Relevamientos aéreos con precisión centimétrica",
      paragraphs: [
        "El relevamiento topográfico con drones reemplaza días de trabajo de campo por vuelos de pocas horas, generando ortomosaicos, modelos digitales de elevación y nubes de puntos con precisión centimétrica gracias a RTK y PPK.",
        "Es la herramienta ideal para obras civiles, loteos, estudios hidrológicos, proyectos de energías renovables y caracterización de campos productivos.",
      ],
      bullets: [
        "Ortomosaicos georreferenciados de alta resolución",
        "Modelos digitales de elevación (DEM) y curvas de nivel",
        "Fotogrametría y nubes de puntos 3D",
        "Mapeo multiespectral para análisis agronómico",
        "Soporte para proyectos de obra, energía y agro",
      ],
    },
    productSlugs: ["dji-mavic-3m", "hylio-photon"],
    metaTitle: "Drones para Topografía | Fotogrametría RTK y Modelos 3D",
    metaDescription:
      "Mapeo aéreo, ortomosaicos y modelos 3D con precisión centimétrica usando drones RTK/PPK para obras, agro y energía en Argentina.",
  },
];

export function getCategoryBySlug(slug: string): CategoryLanding | undefined {
  return categoryLandings.find((c) => c.slug === slug);
}
