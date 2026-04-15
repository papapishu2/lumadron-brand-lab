import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/marcas")({
  component: MarcasPage,
  head: () => ({
    meta: [
      { title: "Marcas — Lumadron" },
      { name: "description", content: "Distribuidores oficiales de DJI, XAG y Hylio en Argentina." },
    ],
  }),
});

const brands = [
  {
    name: "DJI",
    tagline: "Líder mundial en drones comerciales e industriales",
    description: "DJI es el fabricante de drones más grande del mundo, con una gama completa de soluciones para agricultura, inspección industrial, mapeo y seguridad.",
    products: ["Agras T50", "Agras T25", "FlyCart 30", "Mavic 3 Enterprise", "Matrice 30", "Matrice 350 RTK", "Matrice 4T", "Zenmuse L2"],
  },
  {
    name: "XAG",
    tagline: "Especialista en drones agrícolas y smart farming",
    description: "XAG desarrolla drones agrícolas autónomos con inteligencia artificial, sistemas de pulverización de precisión y herramientas de gestión de cultivos.",
    products: ["P150", "P100 Pro", "P60", "V40", "M500", "RevoSpray", "APC2", "Smart Farm Tools"],
  },
  {
    name: "Hylio",
    tagline: "Drones de pulverización de alta capacidad",
    description: "Hylio fabrica drones de pulverización de gran capacidad con sistemas autónomos de planificación de misiones y gestión de flotas.",
    products: ["HYL-150", "HYL-120", "AG-230", "Spray System", "Mission Planner", "Autonomy Platform"],
  },
];

function MarcasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Nuestras marcas</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Somos distribuidores oficiales de las mejores marcas de drones profesionales del mundo.
      </p>

      <div className="mt-12 space-y-10">
        {brands.map((brand) => (
          <div key={brand.name} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-primary/5 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="font-heading text-2xl font-bold text-primary">{brand.name}</span>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">{brand.name}</h2>
                  <p className="text-sm text-accent font-medium">{brand.tagline}</p>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-muted-foreground">{brand.description}</p>
            </div>
            <div className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Productos</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {brand.products.map((p) => (
                  <div key={p} className="rounded-lg border border-border bg-background p-4 text-center">
                    <p className="font-heading text-sm font-semibold text-foreground">{brand.name} {p}</p>
                    <Link to="/contacto" className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:underline">
                      Consultar <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
