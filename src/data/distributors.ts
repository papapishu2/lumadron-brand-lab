export interface Distributor {
  company: string;
  brands: string[];
  role: string;
  website: string;
  location: string;
  phone?: string;
  instagram?: string;
  linkedin?: string;
  notes: string;
}

export const distributors: Distributor[] = [
  {
    company: "Bidcom Agro",
    brands: ["DJI"],
    role: "Master Dealer / Centro DJI Academy",
    website: "https://dji.bidcomagro.com.ar",
    location: "Ciudad de Buenos Aires",
    phone: "0810-112-1102",
    notes:
      "Master Dealer DJI en Argentina, Uruguay y Bolivia. Centro oficial DJI Academy.",
  },
  {
    company: "RC Online Agricultura",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://agriculture.rconline.com.ar",
    location: "Ciudad de Buenos Aires",
    notes:
      "Distribuidor oficial y único service DJI certificado. Parte del grupo RC Online / DJI Store AR.",
  },
  {
    company: "AKRON Máquinas Agrícolas",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://dji.akron.com.ar",
    location: "San Francisco, Córdoba",
    notes:
      "Distribuidor oficial DJI Agriculture. También cubre Pergamino y Tres Arroyos. Venta directa de fábrica.",
  },
  {
    company: "TodoDrones Agricultura",
    brands: ["DJI"],
    role: "Reseller Autorizado",
    website: "https://agro.tododrones.com.ar",
    location: "Ciudad de Buenos Aires",
    phone: "+54 9 11 5263-0498",
    notes: "Reseller autorizado con capacitaciones a campo. Atención personalizada.",
  },
  {
    company: "Summit Agro Argentina",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://summit-agro.com",
    location: "Red de distribuidores",
    notes:
      "Lanzó su línea AgTech en 2024. Distribuye DJI Agras T100 y Mavic 3 Multiespectral a través de su red agroquímica.",
  },
  {
    company: "Campo Aéreo (XAG Latam)",
    brands: ["XAG"],
    role: "Distribuidor Oficial (AR, UY, PY)",
    website: "https://campoaereo.com",
    location: "Red de distribuidores",
    instagram: "https://www.instagram.com/xagmercosur/",
    notes:
      "Distribuidor oficial XAG para Argentina, Uruguay y Paraguay. Instagram: @xagmercosur",
  },
  {
    company: "XAG Atlas",
    brands: ["XAG"],
    role: "Importador y Distribuidor Oficial",
    website: "https://xagatlas.com",
    location: "Red de distribuidores",
    notes:
      "Importador y distribuidor. Responsable: Matías Oitana. Comercializa los modelos P100 y P150.",
  },
  {
    company: "Dronap",
    brands: ["XAG"],
    role: "Representante Oficial XAG Latam",
    website: "https://www.dronap.tech",
    location: "Las Varillas, Córdoba",
    notes:
      "Empresa especializada en soluciones agro. Representante oficial de XAG Latam. Responsable: Diego Ferrari.",
  },
  {
    company: "Praetorians Grupo Argentina",
    brands: ["Hylio"],
    role: "Distribuidor Oficial Hylio",
    website: "https://praetoriansgrupoargentina.com",
    location: "Argentina",
    phone: "+54 9 11 5834-8468",
    notes:
      "Distribuidor oficial de Hylio en Argentina. Comercializa el drone ARES (AG-272), NDAA compliant. También opera como Praetorians EEUU.",
  },
  {
    company: "Geosistemas",
    brands: ["TopXGun"],
    role: "Distribuidor Oficial TopXGun",
    website: "https://topxgun.com.ar",
    location: "Argentina",
    phone: "+54 9 11 2872 2878",
    notes:
      "Proveedora de soluciones de geoposicionamiento, tecnología geoespacial y sistemas GNSS para ingeniería, construcción y agricultura de precisión, certificada bajo normas ISO-9001 y TÜV.",
  },
];

export const distributorBrands = ["DJI", "XAG", "Hylio", "TopXGun"] as const;
