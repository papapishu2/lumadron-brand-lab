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
    instagram: "https://www.instagram.com/bidcomagro/",
    notes:
      "Master Dealer DJI en Argentina, Uruguay y Bolivia. Centro oficial DJI Academy.",
  },
  {
    company: "RC Online Agricultura",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://agriculture.rconline.com.ar",
    location: "Ciudad de Buenos Aires",
    instagram: "https://www.instagram.com/agricultura.rconline/",
    notes:
      "Distribuidor oficial y único service DJI certificado. Parte del grupo RC Online / DJI Store AR.",
  },
  {
    company: "AKRON Máquinas Agrícolas",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://dji.akron.com.ar",
    location: "San Francisco, Córdoba",
    instagram: "https://www.instagram.com/akron_maquinaria/",
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
    instagram: "https://www.instagram.com/tododronesagro/",
    notes: "Reseller autorizado con capacitaciones a campo. Atención personalizada.",
  },
  {
    company: "Summit Agro Argentina",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://summit-agro.com",
    location: "Red de distribuidores",
    instagram: "https://www.instagram.com/summitagroar/",
    notes:
      "Lanzó su línea AgTech en 2024. Distribuye DJI Agras T100 y Mavic 3 Multiespectral a través de su red agroquímica.",
  },
  {
    company: "Campo Aéreo (XAG Latam)",
    brands: ["XAG"],
    role: "Distribuidor Oficial (AR, UY, PY)",
    website: "https://campoaereo.com",
    location: "Red de distribuidores",
    instagram: "https://www.instagram.com/campoaereo.agro/",
    notes:
      "Distribuidor oficial XAG para Argentina, Uruguay y Paraguay.",
  },
  {
    company: "XAG Atlas",
    brands: ["XAG"],
    role: "Importador y Distribuidor Oficial",
    website: "https://xagatlas.com",
    location: "Red de distribuidores",
    instagram: "https://www.instagram.com/xag.atlas/",
    notes:
      "Importador y distribuidor. Responsable: Matías Oitana. Comercializa los modelos P100 y P150.",
  },
  {
    company: "Dronap",
    brands: ["XAG"],
    role: "Representante Oficial XAG Latam",
    website: "https://www.dronap.tech",
    location: "Las Varillas, Córdoba",
    instagram: "https://www.instagram.com/dronap.lv/",
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
    instagram: "https://www.instagram.com/praetorians.grupo.argentina/",
    notes:
      "Distribuidor oficial de Hylio en Argentina. Comercializa el drone ARES (AG-272), NDAA compliant. También opera como Praetorians EEUU.",
  },
  {
    company: "Geosistemas",
    brands: ["TopXGun"],
    role: "Distribuidor Oficial TopxGun",
    website: "https://topxgun.com.ar",
    location: "Argentina",
    phone: "+54 9 11 2872 2878",
    instagram: "https://www.instagram.com/geosistemasagro/",
    notes:
      "Proveedora de soluciones de geoposicionamiento, tecnología geoespacial y sistemas GNSS para ingeniería, construcción y agricultura de precisión, certificada bajo normas ISO-9001 y TÜV.",
  },
  {
    company: "D&E Agtech",
    brands: ["DJI"],
    role: "Distribuidor Oficial",
    website: "https://www.dyesa.com",
    location: "Marcos Juárez, Córdoba",
    phone: "+54 11 2660-3601",
    notes:
      "Empresa de agricultura de precisión. Figura en el listado oficial de DJI Agriculture y declara ser distribuidor oficial DJI Agriculture, PTx Trimble y Precision Planting.",
  },
  {
    company: "Agronorte Drones",
    brands: ["DJI"],
    role: "Dealer Oficial",
    website: "https://www.agronortedrones.com.ar",
    location: "NEA / Litoral",
    phone: "+54 3498 441048",
    notes:
      "Dealer oficial DJI Agriculture con red de sucursales y subdealers en Santa Fe, Entre Ríos, Corrientes, Misiones y Córdoba. Comercializa Agras T100, T70P y Mavic 3M.",
  },
];

export const distributorBrands = ["DJI", "XAG", "Hylio", "TopXGun"] as const;
