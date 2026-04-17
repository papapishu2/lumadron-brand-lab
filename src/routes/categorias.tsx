import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Fuel, Mountain, Shield, MapPin, ArrowRight } from "lucide-react";

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
  { name: "Agricultura", description: "Pulverización aérea, esparcido, monitoreo multiespectral y agricultura de precisión con drones autónomos.", icon: Droplets, products: ["DJI Agras T100", "DJI Agras T50", "XAG P150 Max", "XAG P100 Pro", "Hylio ARES HYL-150"] },
  { name: "Logística", description: "Transporte de carga pesada y entregas en zonas remotas o de difícil acceso.", icon: Fuel, products: ["DJI FlyCart 100", "DJI FlyCart 30"] },
  { name: "Inspección", description: "Inspección visual, térmica y multiespectral para infraestructura, energía y respuesta rápida.", icon: Shield, products: ["Hylio PHOTON", "DJI Mavic 3M"] },
  { name: "Topografía", description: "Mapeo agrícola, fotogrametría y análisis multiespectral para relevamiento de precisión.", icon: MapPin, products: ["DJI Mavic 3M", "Hylio PHOTON"] },
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
