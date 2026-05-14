import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { categoryLandings } from "@/data/categories";
import { categoryRoutes } from "@/components/CategoryLandingView";

export const Route = createFileRoute("/categorias/")({
  component: CategoriasPage,
  head: () => ({
    meta: [
      { title: "Soluciones con Drones por Industria | Lumadron Argentina" },
      { name: "description", content: "Drones para agricultura, oil & gas, minería, seguridad y topografía. Elegí la solución según tu industria." },
      { property: "og:title", content: "Soluciones con Drones por Industria | Lumadron Argentina" },
      { property: "og:description", content: "Drones para agricultura, oil & gas, minería, seguridad y topografía. Elegí la solución según tu industria." },
      { property: "og:url", content: "https://lumadron.com/categorias" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/categorias" }],
  }),
});

function CategoriasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Categorías de uso</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Cada industria tiene desafíos únicos. Encontrá la solución con drones ideal para tu operación.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryLandings.map((cat) => (
          <Link
            key={cat.slug}
            to={categoryRoutes[cat.slug]}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={cat.heroImage}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <h2 className="absolute bottom-4 left-5 font-heading text-2xl font-bold text-primary-foreground">
                {cat.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground line-clamp-3">{cat.heroSubtitle}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Ver soluciones <ChevronRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-primary p-10 text-center md:p-14">
        <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
          ¿No estás seguro qué categoría aplica?
        </h2>
        <p className="mt-3 text-primary-foreground/80">
          Contanos sobre tu operación y te recomendamos la mejor solución.
        </p>
        <Link
          to="/contacto"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
        >
          Contactanos <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
