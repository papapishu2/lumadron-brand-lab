import djiT100 from "@/assets/products/dji-agras-t100-1.png";
import djiT70p from "@/assets/products/dji-agras-t70p-1.png";
import djiT50 from "@/assets/products/dji-agras-t50-1.png";
import djiT25p from "@/assets/products/dji-agras-t25p-1.png";
import djiT25 from "@/assets/products/dji-agras-t25-1.png";
import djiMavic3M from "@/assets/products/dji-mavic-3m-1.png";
import djiFlycart30 from "@/assets/products/dji-flycart-30-1.png";
import djiFlycart100 from "@/assets/products/dji-flycart-100-1.png";
import xagP150Max from "@/assets/products/xag-p150-max-1.png";
import xagP150 from "@/assets/products/xag-p150-1.png";
import xagP100Pro from "@/assets/products/xag-p100-pro-1.png";
import xagP60 from "@/assets/products/xag-p60-1.png";
import hylioPegasus from "@/assets/products/hylio-pegasus-1.png";
import hylioAres from "@/assets/products/hylio-ares-1.png";
import hylioAtlas from "@/assets/products/hylio-atlas-1.png";
import hylioPhoton from "@/assets/products/hylio-photon-1.png";
import txFP800 from "@/assets/products/topxgun-fp800-1.png";
import txFP700 from "@/assets/products/topxgun-fp700-1.png";
import txFP300E from "@/assets/products/topxgun-fp300e-1.png";
import txY160 from "@/assets/products/topxgun-y160-1.png";
import txSL80 from "@/assets/products/topxgun-sl80-1.jpg";
import txYP800 from "@/assets/products/topxgun-yp800-1.png";
import txC15 from "@/assets/products/topxgun-c15-1.png";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  categories: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  officialUrl?: string;
  image?: string;
}

export const productImages: Record<string, string> = {
  "dji-agras-t100": djiT100,
  "dji-agras-t70p": djiT70p,
  "dji-agras-t50": djiT50,
  "dji-agras-t25p": djiT25p,
  "dji-agras-t25": djiT25,
  "dji-mavic-3m": djiMavic3M,
  "dji-flycart-30": djiFlycart30,
  "dji-flycart-100": djiFlycart100,
  "xag-p150-max": xagP150Max,
  "xag-p150": xagP150,
  "xag-p100-pro": xagP100Pro,
  "xag-p60": xagP60,
  "hylio-pegasus": hylioPegasus,
  "hylio-ares-hyl-150": hylioAres,
  "hylio-atlas-hyl-300": hylioAtlas,
  "hylio-photon": hylioPhoton,
  "topxgun-fp800": txFP800,
  "topxgun-fp700": txFP700,
  "topxgun-fp300e": txFP300E,
  "topxgun-y160": txY160,
  "topxgun-sl80": txSL80,
  "topxgun-yp800": txYP800,
  "topxgun-c15": txC15,
};

export const allProducts: Product[] = [
  // ============ DJI Agriculture ============
  {
    slug: "dji-agras-t100",
    name: "DJI Agras T100",
    brand: "DJI",
    categories: ["Agricultura"],
    description:
      "Drone agrícola multirol con 100 kg de carga máxima. Admite fumigación, esparcido y levantamiento de cargas.",
    features: [
      "Tanque de aspersión de 100 L y tanque de esparcido de 150 L",
      "Payload máximo de 100 kg en modo lifting",
      "Sistema Penta-Vision con LiDAR y radar de onda milimétrica",
      "DJI RTK integrado y control con DJI RC Plus",
      "Velocidad operativa máxima de 20 m/s",
    ],
    specs: {
      "Capacidad aspersión": "100 L",
      "Capacidad esparcido": "150 L",
      "Payload máx.": "100 kg",
      "Peso máx. despegue": "175–177 kg",
      "Ancho de trabajo": "5 – 13 m",
      "Caudal máx.": "30 L/min (2 boq.) / 40 L/min (4 boq.)",
      "Sensores": "LiDAR + Penta-Vision + radar mmWave",
      "Navegación": "DJI RTK integrado",
      "Velocidad máx.": "20 m/s",
    },
    officialUrl: "https://ag.dji.com/t100",
  },
  {
    slug: "dji-agras-t70p",
    name: "DJI Agras T70P",
    brand: "DJI",
    categories: ["Agricultura"],
    description:
      "Drone agrícola de alto rendimiento con tanque de aspersión de 75 L y tanque de esparcido de 100 L.",
    features: [
      "Tanque de aspersión de 75 L y tanque de esparcido de 100 L",
      "Caudal de hasta 40 L/min con kit de 4 boquillas",
      "Sistema Penta-Vision y radar omnidireccional",
      "Batería inteligente DB1580",
      "DJI RTK integrado",
    ],
    specs: {
      "Capacidad aspersión": "75 L",
      "Capacidad esparcido": "100 L",
      "Peso máx. despegue": "102 kg (2 boquillas)",
      "Ancho de trabajo": "4 – 11 m",
      "Caudal máx.": "30 L/min (2 boq.) / 40 L/min (4 boq.)",
      "Batería": "DB1580 Inteligente",
      "Navegación": "DJI RTK integrado",
      "Sensores": "Penta-Vision + radar omnidireccional",
    },
    officialUrl: "https://ag.dji.com/t70p",
  },
  {
    slug: "dji-agras-t50",
    name: "DJI Agras T50",
    brand: "DJI",
    categories: ["Agricultura"],
    description:
      "Drone agrícola de gama media con sistema de aspersión dual y radar de arreglo en fase.",
    features: [
      "Tanque de aspersión de 40 L y de esparcido de 75 L",
      "Ancho de esparcido de 8 m",
      "Radar phased array RD241608RF y visión binocular",
      "Aspersión dual con hasta 4 aspersores",
      "DJI RTK y batería inteligente con recarga rápida",
    ],
    specs: {
      "Capacidad aspersión": "40 L",
      "Capacidad esparcido": "75 L",
      "Payload aspersión": "40 kg",
      "Carga esparcido": "50 kg",
      "Peso máx. despegue": "92 kg (asp.) / 103 kg (esp.)",
      "Ancho aspersión": "4 – 11 m (a 3 m)",
      "Ancho esparcido": "8 m",
      "Caudal máx.": "16 L/min (2 asp.) / 24 L/min (4 asp.)",
      "Sensores": "Radar phased array + visión binocular",
      "Navegación": "DJI RTK",
    },
    officialUrl: "https://ag.dji.com/t50",
  },
  {
    slug: "dji-agras-t25p",
    name: "DJI Agras T25P",
    brand: "DJI",
    categories: ["Agricultura"],
    description:
      "Drone agrícola compacto con tanque de 25 L (spray) y 30 L (spread). Diseñado para lotes medianos.",
    features: [
      "Tanque de aspersión de 25 L y de esparcido de 30 L",
      "Tasa máxima de descarga de 190 kg/min en esparcido",
      "Hasta 4 boquillas con 24 L/min de caudal",
      "Radar y visión binocular",
      "DJI RTK y batería inteligente",
    ],
    specs: {
      "Capacidad aspersión": "25 L",
      "Capacidad esparcido": "30 L",
      "Peso máx. despegue": "53 kg (asp.) / 60 kg (esp.)",
      "Ancho aspersión": "4 – 7 m (a 3 m)",
      "Caudal máx.": "16 L/min (2 boq.) / 24 L/min (4 boq.)",
      "Sensores": "Radar + visión binocular",
      "Navegación": "DJI RTK",
    },
    officialUrl: "https://ag.dji.com/t25p",
  },
  {
    slug: "dji-agras-t25",
    name: "DJI Agras T25",
    brand: "DJI",
    categories: ["Agricultura"],
    description:
      "Drone agrícola compacto para operaciones pequeñas y medianas. Tanque de 20 L (spray) / 35 L (spread).",
    features: [
      "Tanque de aspersión de 20 L y de esparcido de 35 L",
      "Payload de 20 kg (spray) / carga 25 kg (spread)",
      "Radar y visión binocular",
      "DJI RTK integrado",
      "Diseño compacto y fácil de transportar",
    ],
    specs: {
      "Capacidad aspersión": "20 L",
      "Capacidad esparcido": "35 L",
      "Payload aspersión": "20 kg",
      "Carga esparcido": "25 kg",
      "Peso máx. despegue": "52 kg (asp.) / 58 kg (esp.)",
      "Ancho aspersión": "4 – 7 m (a 3 m)",
      "Caudal máx.": "16 L/min (2 asp.) / 24 L/min (4 asp.)",
      "Sensores": "Radar + visión binocular",
      "Navegación": "DJI RTK",
    },
    officialUrl: "https://ag.dji.com/t25",
  },
  {
    slug: "dji-mavic-3m",
    name: "DJI Mavic 3M",
    brand: "DJI",
    categories: ["Agricultura", "Oil & Gas", "Minería", "Seguridad", "Topografía"],
    description:
      "Drone de mapeo agrícola con cámara RGB de 20 MP y 4 cámaras multiespectrales (verde, rojo, red edge y NIR).",
    features: [
      "Cámara RGB de 20 MP + 4 sensores multiespectrales (G/R/RE/NIR)",
      "Módulo RTK integrado para mapeo de alta precisión",
      "Hasta 43 minutos de autonomía",
      "Compacto y plegable (1.05 kg)",
      "Velocidad máxima de 21 m/s",
    ],
    specs: {
      "Tipo": "Drone de mapeo",
      "Peso máx. despegue": "1.05 kg",
      "Cámara": "RGB 20 MP + multiespectral G/R/RE/NIR",
      "Autonomía": "43 min (sin viento)",
      "Batería": "Mavic 3 Enterprise inteligente",
      "Navegación": "Módulo RTK integrado",
      "Velocidad máx.": "21 m/s (15 m/s normal)",
    },
    officialUrl: "https://ag.dji.com/mavic-3-m",
  },
  {
    slug: "dji-flycart-100",
    name: "DJI FlyCart 100",
    brand: "DJI",
    categories: ["Logística", "Oil & Gas", "Minería"],
    description:
      "Drone de transporte de carga pesada. Soporta hasta 170 kg de peso total de despegue.",
    features: [
      "Carga máxima aproximada de 80 kg",
      "Sistema de doble o única batería",
      "Hasta 14 minutos de autonomía con doble batería",
      "DJI RTK y radar de evitación de obstáculos",
      "Pensado para logística en zonas remotas",
    ],
    specs: {
      "Carga máx.": "~80 kg",
      "Peso máx. despegue": "170 kg",
      "Autonomía": "14 min (doble bat. <149.9 kg) / 7 min (única)",
      "Batería": "Doble o única batería",
      "Navegación": "DJI RTK",
      "Sensores": "Radar + evitación de obstáculos",
    },
    officialUrl: "https://www.dji.com/global/flycart-100",
  },
  {
    slug: "dji-flycart-30",
    name: "DJI FlyCart 30",
    brand: "DJI",
    categories: ["Logística", "Oil & Gas", "Minería"],
    description:
      "Drone de entrega con capacidad de hasta 40 kg de carga y alcance de 28 km.",
    features: [
      "Carga máxima de 40 kg en modo dual / 30 kg en modo single",
      "Alcance de hasta 28 km",
      "DJI RTK y sistema de visión + radar",
      "18 minutos de autonomía con 30 kg de carga (dual)",
      "Liberación de carga inteligente",
    ],
    specs: {
      "Carga máx.": "40 kg (dual) / 30 kg (single)",
      "Peso máx. despegue": "95 kg",
      "Autonomía": "18 min @ 30 kg (dual) / 9 min @ 40 kg (single)",
      "Batería": "Doble o única DJI",
      "Navegación": "DJI RTK",
      "Sensores": "Radar + visión",
    },
    officialUrl: "https://www.dji.com/global/flycart-30",
  },

  // ============ XAG ============
  {
    slug: "xag-p150-max",
    name: "XAG P150 Max",
    brand: "XAG",
    categories: ["Agricultura"],
    description:
      "Drone agrícola tope de gama de XAG con payload de 80 kg y mapeo en tiempo real.",
    features: [
      "Tanque inteligente de 80 L y payload de 80 kg",
      "Caudal de hasta 46 L/min con kit de 4 boquillas",
      "Mapeo 3D en tiempo real con radar y visión binocular",
      "Batería inteligente XBS con supercharge",
      "Velocidad máxima de 20 m/s",
    ],
    specs: {
      "Capacidad": "80 L",
      "Payload": "80 kg",
      "Ancho aspersión": "5 – 10 m",
      "Caudal máx.": "46 L/min (4 boquillas)",
      "Batería": "XBS Smart Supercharge",
      "Navegación": "XAG SuperX4 Pro + RTK",
      "Sensores": "Radar + visión binocular + mapeo 3D",
      "Velocidad máx.": "20 m/s",
    },
    officialUrl: "https://xa.com/en/p150max",
  },
  {
    slug: "xag-p150",
    name: "XAG P150",
    brand: "XAG",
    categories: ["Agricultura"],
    description:
      "Drone agrícola quadcopter plegable con payload de 70 kg y diseño modular.",
    features: [
      "Payload de 70 kg con diseño modular",
      "Mapeo 3D en tiempo real y RTK",
      "Batería B13970S Smart Supercharge (975 Wh)",
      "Caudal de 30 L/min",
      "Velocidad máxima de 18 m/s",
    ],
    specs: {
      "Payload": "70 kg",
      "Ancho aspersión": "4 – 7 m",
      "Caudal máx.": "30 L/min",
      "Batería": "B13970S Smart Supercharge (975 Wh)",
      "Navegación": "RTK + mapeo 3D en tiempo real",
      "Sensores": "Radar + visión",
      "Velocidad máx.": "18 m/s",
    },
    officialUrl: "https://xa.com/en/p150",
  },
  {
    slug: "xag-p100-pro",
    name: "XAG P100 Pro",
    brand: "XAG",
    categories: ["Agricultura"],
    description:
      "Drone quadcopter plegable con payload de 50 kg. Sistema RevoSpray 3 y RevoCast 3.",
    features: [
      "Contenedor de 80 L, tanque inteligente de 50 L y payload de 50 kg",
      "Sistemas RevoSpray 3 y RevoCast 3",
      "Caudal de 22 L/min con RevoSpray 3",
      "Batería B13960S de 962 Wh, carga completa en 11 min con torre de enfriamiento",
      "Velocidad máxima de 13.8 m/s",
    ],
    specs: {
      "Capacidad contenedor": "80 L",
      "Tanque inteligente": "50 L",
      "Payload": "50 kg",
      "Ancho aspersión": "5 – 10 m",
      "Caudal máx.": "22 L/min (RevoSpray 3)",
      "Batería": "B13960S 962 Wh (11 min recarga)",
      "Navegación": "RTK",
      "Sensores": "Radar + visión",
      "Velocidad máx.": "13.8 m/s",
    },
    officialUrl: "https://xa.com/en/p100pro",
  },
  {
    slug: "xag-p60",
    name: "XAG P60",
    brand: "XAG",
    categories: ["Agricultura"],
    description:
      "Drone agrícola compacto de 30 kg de payload. Ideal para pequeños y medianos productores.",
    features: [
      "Payload de 30 kg, ideal para pequeños y medianos productores",
      "Caudal de 30 L/min",
      "RTK y mapeo 3D en tiempo real",
      "Radar y visión",
      "Velocidad máxima de 13.8 m/s",
    ],
    specs: {
      "Payload": "30 kg",
      "Ancho aspersión": "3 – 7 m",
      "Caudal máx.": "30 L/min",
      "Batería": "Inteligente XAG",
      "Navegación": "RTK + mapeo 3D en tiempo real",
      "Sensores": "Radar + visión",
      "Velocidad máx.": "13.8 m/s",
    },
    officialUrl: "https://xa.com/en/p60",
  },

  // ============ Hylio ============
  {
    slug: "hylio-pegasus",
    name: "Hylio PEGASUS",
    brand: "Hylio",
    categories: ["Agricultura"],
    description:
      "Drone compacto de precisión para tratamientos puntuales: 2.5 / 4 galones de capacidad.",
    features: [
      "Capacidad de 2.5 / 4 galones (≈ 9.5 / 15 L)",
      "Pensado para tratamientos puntuales de precisión",
      "Batería LiPo intercambiable",
      "RTK GPS",
      "Despliegue rápido por un operador",
    ],
    specs: {
      "Capacidad": "2.5 / 4 gal (≈ 9.5 / 15 L)",
      "Batería": "LiPo intercambiable",
      "Navegación": "RTK GPS",
    },
    officialUrl: "https://www.hyl.io/pegasus",
  },
  {
    slug: "hylio-ares-hyl-150",
    name: "Hylio ARES HYL-150",
    brand: "Hylio",
    categories: ["Agricultura"],
    description:
      "Drone de carga pesada fabricado en Texas. 13 / 20 galones de payload, hasta 70 acres/h. Swarm-enabled.",
    features: [
      "Tanque líquido de 13 gal (50 L) y tanque sólido de 20 gal (76 L)",
      "Payload sólido de 110 lb (50 kg)",
      "Hasta 70 acres/h con operación en enjambre (swarm)",
      "Cámara HD 1080p 60 FPS IP67 con gimbal de 3 ejes",
      "Batería 18S 30Ah LiPo (14 kg)",
    ],
    specs: {
      "Tanque líquido": "13 gal (50 L)",
      "Tanque sólido": "20 gal (76 L)",
      "Payload sólido": "110 lb (50 kg)",
      "Peso vacío": "80 lb (36 kg)",
      "Peso máx. despegue": "220 lb (100 kg)",
      "Ancho de trabajo": "Hasta 40 ft (12 m)",
      "Batería": "1 × 18S 30Ah LiPo (14 kg)",
      "Navegación": "RTK GPS",
      "Cámara": "HD 1080p 60 FPS IP67 con gimbal 3 ejes",
    },
    officialUrl: "https://www.hyl.io/ares",
  },
  {
    slug: "hylio-atlas-hyl-300",
    name: "Hylio ATLAS HYL-300",
    brand: "Hylio",
    categories: ["Agricultura"],
    description:
      "Drone de gran formato Hylio para pulverización, siembra y fertilización a gran escala. 30 / 50 galones.",
    features: [
      "Capacidad de 30 / 50 galones (≈ 114 / 189 L)",
      "Diseñado para pulverización, siembra y fertilización a gran escala",
      "Tasa de aplicación de 8–10 galones/acre",
      "Batería LiPo de alto voltaje",
      "RTK GPS",
    ],
    specs: {
      "Capacidad": "30 / 50 gal (≈ 114 / 189 L)",
      "Tasa aplicación": "8 – 10 gal/acre",
      "Batería": "LiPo de alto voltaje",
      "Navegación": "RTK GPS",
    },
    officialUrl: "https://www.hyl.io/atlas",
  },
  {
    slug: "hylio-photon",
    name: "Hylio PHOTON",
    brand: "Hylio",
    categories: ["Oil & Gas", "Minería", "Seguridad", "Topografía"],
    description:
      "Drone scout IP55 para respuesta rápida y análisis agronómico. Sensores térmicos EO/IR + RGB de alta resolución.",
    features: [
      "Diseño scout IP55 para despliegue rápido",
      "Sensores EO/IR térmicos + RGB HD + multiespectral",
      "Más de 55 minutos de autonomía",
      "Ideal para análisis agronómico e inspección",
      "Operable por una sola persona",
    ],
    specs: {
      "Tipo": "Drone scout",
      "Protección": "IP55",
      "Autonomía": "55+ min",
      "Sensores": "EO/IR térmico + RGB HD + multiespectral",
      "Navegación": "GPS",
    },
    officialUrl: "https://www.hyl.io/photon",
  },
  // ============ TopXGun ============
  {
    slug: "topxgun-fp800",
    name: "TopXGun FP800",
    brand: "TopXGun",
    categories: ["Agricultura"],
    description:
      "Drone agrícola de alta capacidad con tanque de pulverización de 80 L, tanque de esparcido de 120 L y 85 kg de carga útil.",
    features: [
      "Tanque de pulverización de 80 L y de esparcido de 120 L",
      "Carga útil máxima de 85 kg",
      "Caudal de pulverización de hasta 40 L/min",
      "Esparcidor con alimentación por tornillo sinfín (auger)",
      "Sistema de radar LiDAR + radar phased array mmWave",
    ],
    specs: {
      "Capacidad aspersión": "80 L",
      "Capacidad esparcido": "120 L",
      "Carga útil máx.": "85 kg",
      "Caudal máx.": "40 L/min",
      "Tamaño de gota": "30 – 500 µm",
      "Descarga máx.": "400 L/min",
      "Esparcidor": "Alimentación por auger",
      "Sensores": "LiDAR + radar phased array mmWave",
    },
    officialUrl: "https://es.topxgunag.com/topxgun-fp800-agricultural-drone",
  },
  {
    slug: "topxgun-fp700",
    name: "TopXGun FP700",
    brand: "TopXGun",
    categories: ["Agricultura"],
    description:
      "Drone agrícola con tanque de pulverización de 60 L y esparcido de 80 L, pensado para grandes superficies y fruticultura.",
    features: [
      "Tanque de pulverización de 60 L y de esparcido de 80 L",
      "Carga útil máxima de 70 kg",
      "Boquillas centrífugas con partícula regulable de 30 a 500 µm",
      "Esparcidor centrífugo SP6 con rango de 5 a 10 m",
      "Estructura de aluminio aeronáutico con protección IP67",
    ],
    specs: {
      "Capacidad aspersión": "60 L",
      "Capacidad esparcido": "80 L",
      "Carga útil máx.": "70 kg",
      "Caudal máx.": "10 L/min por boquilla",
      "Boquillas": "Centrífugas",
      "Esparcidor": "Centrífugo SP6 (5 – 10 m)",
      "Baterías": "2 x 20.000 mAh",
      "Evitación de obstáculos": "Detección frontal y desvío autónomo",
    },
    officialUrl: "https://es.topxgunag.com/topxgun-fp700-agriculture-drone",
  },
  {
    slug: "topxgun-fp300e",
    name: "TopXGun FP300E",
    brand: "TopXGun",
    categories: ["Agricultura"],
    description:
      "Drone agrícola compacto y plegable con 30 L de pulverización, 45 L de esparcido y hasta 10,67 ha/hora de rendimiento.",
    features: [
      "Tanque de pulverización de 30 L y de esparcido de 45 L",
      "Carga útil máxima de 30 kg",
      "Rendimiento de hasta 10,67 ha/hora en pulverización",
      "Esparcido de hasta 1,5 t/hora",
      "Diseño plegable transportable por una sola persona",
    ],
    specs: {
      "Capacidad aspersión": "30 L",
      "Capacidad esparcido": "45 L",
      "Carga útil máx.": "30 kg",
      "Tamaño de gota": "30 – 500 µm",
      "Eficiencia pulverización": "hasta 10,67 ha/h",
      "Eficiencia esparcido": "hasta 1,5 t/h",
      "Alimentación esparcido": "100 kg/min (fertilizante compuesto)",
      "Batería": "20.000 mAh",
    },
    officialUrl: "https://es.topxgunag.com/topxgun-fp300e-agricultural-drone",
  },
  {
    slug: "topxgun-y160",
    name: "TopXGun Y160",
    brand: "TopXGun",
    categories: ["Logística", "Oil & Gas"],
    description:
      "Drone de carga de rotores coaxiales con 165 kg de carga útil máxima para logística aérea y abastecimiento de locaciones remotas.",
    features: [
      "Carga útil máxima de 165 kg",
      "Diseño de doble rotor coaxial para mayor estabilidad",
      "Empuje máximo por eje de hasta 150 kg",
      "LiDAR 360° + radar phased array mmWave",
      "Pesaje en tiempo real y sistema antivibración inteligente",
    ],
    specs: {
      "Carga útil máx.": "165 kg",
      "Configuración": "Doble rotor coaxial",
      "Sensores": "LiDAR + radar phased array mmWave",
      "Energía": "Doble batería (estándar) / triple o cuádruple (opcional)",
      "Pesaje en tiempo real": "Sí",
      "Lanzamiento terrestre": "Soportado",
    },
    officialUrl: "https://es.topxgunag.com/y160-delivery-drone",
  },
  {
    slug: "topxgun-sl80",
    name: "TopXGun SL80",
    brand: "TopXGun",
    categories: ["Logística"],
    description:
      "Drone de reparto con 80 kg de carga útil máxima y cuatro baterías semisólidas, ideal para transporte en zonas montañosas y emergencias.",
    features: [
      "Carga útil máxima de 80 kg (50 kg con 30 min de autonomía)",
      "Cuatro baterías semisólidas 18S de 56 Ah",
      "LiDAR de 360° y radar phased array mmWave",
      "Sistema de paracaídas automático",
      "Control por dos operadores y liberación automática del gancho",
    ],
    specs: {
      "Carga útil máx.": "80 kg",
      "Autonomía": "hasta 30 min con 50 kg",
      "Baterías": "4 x 56 Ah 18S semisólidas",
      "Cargador": "12 kW inteligente refrigerado por aire",
      "Sensores": "LiDAR + radar phased array mmWave",
      "Seguridad": "Paracaídas automático",
    },
    officialUrl: "https://es.topxgunag.com/sl80-delivery-drone",
  },
  {
    slug: "topxgun-yp800",
    name: "TopXGun YP800",
    brand: "TopXGun",
    categories: ["Logística"],
    description:
      "Drone de reparto de baja altitud con 62 kg de carga útil, 6 km de alcance y múltiples configuraciones de transporte.",
    features: [
      "Carga útil máxima de 62 kg",
      "Alcance máximo de vuelo de 6.000 m",
      "Autonomía de 10 min a plena carga y 30 min sin carga",
      "Múltiples opciones de alimentación y configuraciones de carga",
      "Sistema de paracaídas de seguridad",
    ],
    specs: {
      "Carga útil máx.": "62 kg",
      "Autonomía": "10 min plena carga / 30 min sin carga",
      "Alcance máx.": "6.000 m",
      "Velocidad horizontal máx.": "10 m/s",
      "Velocidad de ascenso": "5 m/s",
      "Baterías": "2 x 34 Ah 18S litio",
      "Seguridad": "Sistema de paracaídas",
    },
    officialUrl: "https://es.topxgunag.com/yp800-delivery-drone",
  },
  {
    slug: "topxgun-c15",
    name: "TopXGun C15",
    brand: "TopXGun",
    categories: ["Oil & Gas"],
    description:
      "Drone de limpieza aérea de alta presión para fachadas industriales, tanques y aerogeneradores, con protección IP67.",
    features: [
      "Limpieza a alta presión de 16 MPa y caudal de 20 L/min",
      "Manguera de alta presión de 120 m y altura de trabajo de 100 m",
      "Protección IP67 y cuerpo de aluminio resistente a la corrosión",
      "Radar mmWave para distancia precisa a la estructura",
      "RTK de alta precisión y FPV en tiempo real",
    ],
    specs: {
      "Peso (con batería)": "21 kg",
      "Barra de pulverización": "1,6 m",
      "Velocidad máx.": "10 m/s",
      "Manguera": "120 m",
      "Altura máx. de trabajo": "100 m",
      "Presión nominal": "16 MPa",
      "Caudal nominal": "20 L/min",
      "Batería": "20 Ah",
    },
    officialUrl: "https://es.topxgunag.com/topxgun-c15-cleaning-drone",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
