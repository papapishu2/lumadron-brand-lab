import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, ChevronRight } from "lucide-react";
import { allProducts } from "@/data/products";

export const Route = createFileRoute("/drones/")({
  component: DronesPage,
  head: () => ({
    meta: [
      { title: "Drones — Lumadron" },
      {
        name: "description",
        content:
          "Catálogo completo de drones DJI, XAG y Hylio para agricultura e industria en Argentina.",
      },
    ],
  }),
});

function DronesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">
        Drones para agricultura e industria
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Catálogo completo de drones y equipamiento para agricultura e industria.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => (
          <div
            key={product.slug}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
          >
            <div className="flex h-44 items-center justify-center bg-secondary/50">
              <Plane size={40} className="text-muted-foreground/20" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {product.brand}
                </span>
                <span className="text-xs text-muted-foreground">
                  {product.category}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground">
                {product.name}
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>
              <Link
                to="/drones/$slug"
                params={{ slug: product.slug }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Más información <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}