import djiLogo from "@/assets/brands/dji-logo.png";
import xagLogo from "@/assets/brands/xag-logo.webp";
import hylioLogo from "@/assets/brands/hylio-logo.png";
import topxgunLogo from "@/assets/brands/topxgun-logo.png";

export interface BrandInfo {
  slug: string;
  name: string;
  logo: string;
  logoClass: string;
  tagline: string;
  description: string;
  intro: string;
  origin: string;
  highlights: string[];
  categories: string[];
  productSlugs: string[];
  officialUrl: string;
}

export const brands: BrandInfo[] = [
  {
    slug: "dji",
    name: "DJI",
    logo: djiLogo,
    logoClass: "h-12 w-auto",
    tagline: "Líder mundial en drones comerciales e industriales",
    description:
      "DJI es el fabricante de drones más grande del mundo, con una gama completa de soluciones para agricultura, inspección industrial, mapeo y seguridad.",
    intro:
      "DJI concentra la mayor parte del mercado mundial de drones profesionales. Su línea Agras domina la pulverización aérea en Argentina, mientras que Mavic 3M y FlyCart cubren mapeo multiespectral y logística de carga en zonas de difícil acceso.",
    origin: "Shenzhen, China · fundada en 2006",
    highlights: [
      "Línea Agras para pulverización y esparcido de 20 a 100 litros",
      "Sistemas RTK integrados y radar phased array en los modelos superiores",
      "Mavic 3M con cámara RGB de 20 MP y 4 sensores multiespectrales",
      "FlyCart 30 y 100 para transporte de cargas de hasta 80 kg",
      "Amplia red de distribuidores, service y repuestos en Argentina",
    ],
    categories: ["Agricultura", "Logística", "Oil & Gas", "Minería", "Seguridad", "Topografía"],
    productSlugs: [
      "dji-agras-t100",
      "dji-agras-t70p",
      "dji-agras-t50",
      "dji-agras-t25p",
      "dji-agras-t25",
      "dji-mavic-3m",
      "dji-flycart-100",
      "dji-flycart-30",
    ],
    officialUrl: "https://ag.dji.com",
  },
  {
    slug: "xag",
    name: "XAG",
    logo: xagLogo,
    logoClass: "h-10 w-auto",
    tagline: "Especialista en drones agrícolas y smart farming",
    description:
      "XAG desarrolla drones agrícolas autónomos con inteligencia artificial, sistemas de pulverización de precisión y herramientas de gestión de cultivos.",
    intro:
      "XAG nació enfocada exclusivamente en agricultura. Sus plataformas P combinan payloads altos, mapeo 3D en tiempo real y baterías de carga rápida, con un ecosistema de software propio para planificar y auditar cada aplicación.",
    origin: "Guangzhou, China · fundada en 2007",
    highlights: [
      "Plataformas P150 y P150 Max con payloads de 70 y 80 kg",
      "Mapeo 3D en tiempo real con radar y visión binocular",
      "Baterías inteligentes XBS con carga ultrarrápida a campo",
      "Diseño modular: cambio rápido entre aspersión y esparcido",
      "Presencia consolidada en Argentina, Uruguay y Paraguay",
    ],
    categories: ["Agricultura"],
    productSlugs: ["xag-p150-max", "xag-p150", "xag-p100-pro", "xag-p60"],
    officialUrl: "https://xa.com",
  },
  {
    slug: "hylio",
    name: "Hylio",
    logo: hylioLogo,
    logoClass: "h-8 w-auto",
    tagline: "Drones de pulverización de alta capacidad",
    description:
      "Hylio fabrica drones de pulverización de gran capacidad con sistemas autónomos de planificación de misiones y gestión de flotas.",
    intro:
      "Hylio es un fabricante estadounidense orientado a la operación en flota: varios drones trabajando en simultáneo sobre el mismo lote, coordinados desde una sola estación de control. Sus equipos son NDAA compliant, un requisito frecuente en licitaciones y proyectos con financiamiento internacional.",
    origin: "Texas, Estados Unidos · fundada en 2015",
    highlights: [
      "Operación en flota con múltiples drones desde una estación",
      "Equipos NDAA compliant, fabricados en Estados Unidos",
      "Software propio de planificación y registro de aplicaciones",
      "Modelos de alta capacidad para grandes superficies",
      "Enfoque en contratistas y prestadores de servicio",
    ],
    categories: ["Agricultura"],
    productSlugs: ["hylio-pegasus", "hylio-ares-hyl-150", "hylio-atlas-hyl-300", "hylio-photon"],
    officialUrl: "https://www.hyliousa.com",
  },
  {
    slug: "topxgun",
    name: "TopXGun",
    logo: topxgunLogo,
    logoClass: "h-8 w-auto",
    tagline: "Drones agrícolas y de carga para logística aérea",
    description:
      "TopXGun Robotics desarrolla plataformas UAV para agricultura de precisión, logística aérea de carga pesada y limpieza industrial, con control de vuelo propio, LiDAR y radar phased array.",
    intro:
      "TopXGun desarrolla su propio control de vuelo desde 2015 y cubre un abanico poco habitual: pulverización agrícola, transporte de carga y limpieza de fachadas o paneles solares. Es una alternativa competitiva para operaciones industriales y logísticas.",
    origin: "Nanjing, China · fundada en 2015",
    highlights: [
      "Control de vuelo y aviónica de desarrollo propio",
      "Serie FP para pulverización y esparcido agrícola",
      "Plataformas de carga para logística aérea en zonas remotas",
      "LiDAR y radar phased array para vuelo a baja altura",
      "Soluciones de limpieza industrial y de paneles solares",
    ],
    categories: ["Agricultura", "Logística", "Minería"],
    productSlugs: [
      "topxgun-fp800",
      "topxgun-fp700",
      "topxgun-fp300e",
      "topxgun-y160",
      "topxgun-sl80",
      "topxgun-yp800",
      "topxgun-c15",
    ],
    officialUrl: "https://www.topxgun.com",
  },
];

export function getBrandBySlug(slug: string): BrandInfo | undefined {
  return brands.find((b) => b.slug === slug);
}
