import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Plane, Mountain, Shield, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/categorias")({
  component: CategoriasPage,
  head: () => ({
    meta: [
      { title: "Categorías — Lumadron" },
      { name: "description", content: "Soluciones con drones para agricultura, oil & gas, minería, seguridad y topografía." },
    ],
  }),
});

const categories = [
  { name: "Agricultura", description: "Pulverización aérea, monitoreo multiespectral, análisis de cultivos y agricultura de precisión con drones autónomos.", icon: Droplets, products: ["DJI Agras T50", "DJI Agras T25", "XAG P150", "XAG P100 Pro", "HYL-150"] },
  { name: "Oil & Gas", description: "Inspección visual y térmica de infraestructura, monitoreo de ductos, detección de fugas y emisiones.", icon: Plane, products: ["DJI Matrice 350 RTK", "DJI Matrice 4T", "DJI Mavic 3 Enterprise"] },
  { name: "Minería", description: "Relevamiento topográfico, cálculo volumétrico, control de operaciones y monitoreo ambiental.", icon: Mountain, products: ["DJI Matrice 350 RTK", "DJI Zenmuse L2", "DJI Matrice 30"] },
  { name: "Seguridad", description: "Vigilancia perimetral, respuesta ante emergencias, monitoreo en tiempo real y reconocimiento aéreo.", icon: Shield, products: ["DJI Mavic 3 Enterprise", "DJI Matrice 30", "DJI Matrice 4T"] },
  { name: "Topografía", description: "Fotogrametría de alta resolución, generación de modelos 3D, mapeo catastral y LIDAR aéreo.", icon: MapPin, products: ["DJI Zenmuse L2", "DJI Matrice 350 RTK", "DJI Matrice 30"] },
];

function CategoriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Categorías de uso</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Cada industria tiene desafíos únicos. Encontrá la solución con drones ideal para tu operación.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 md:flex-row md:items-start">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <cat.icon size={28} className="text-accent" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-card-foreground">{cat.name}</h2>
              <p className="mt-2 text-muted-foreground">{cat.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">Productos recomendados:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cat.products.map((p) => (
                    <span key={p} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{p}</span>
                  ))}
                </div>
              </div>
              <Link to="/contacto" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Consultá por esta solución <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
