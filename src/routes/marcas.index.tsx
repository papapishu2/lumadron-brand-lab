import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { getProductBySlug } from "@/data/products";

export const Route = createFileRoute("/marcas/")({
  component: MarcasPage,
  head: () => ({
    meta: [
      { title: "Marcas de drones profesionales en Argentina | Lumadron" },
      { name: "description", content: "DJI, XAG, Hylio y TopXGun en Argentina: modelos, características y distribuidores de drones agrícolas, industriales y de logística." },
      { property: "og:title", content: "Marcas de drones profesionales en Argentina | Lumadron" },
      { property: "og:description", content: "DJI, XAG, Hylio y TopXGun en Argentina: modelos, características y distribuidores de drones agrícolas, industriales y de logística." },
      { property: "og:url", content: "https://lumadron.com/marcas" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/marcas" }],
  }),
});

function MarcasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">
        Marcas de drones profesionales en Argentina
      </h1>

      <div className="mt-12 space-y-10">
        {brands.map((brand) => (
          <div key={brand.name} id={brand.slug} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-primary/5 p-8">
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex h-20 w-28 items-center justify-center rounded-2xl bg-background border border-border px-4">
                  <img src={brand.logo} alt={`Logo ${brand.name}`} className={`${brand.logoClass} object-contain`} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">{brand.name}</h2>
                  <p className="text-sm text-accent font-medium">{brand.tagline}</p>
                </div>
                <Link
                  to="/marcas/$brand"
                  params={{ brand: brand.slug }}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Ver marca {brand.name} <ArrowRight size={14} />
                </Link>
              </div>
              <p className="mt-4 max-w-3xl text-muted-foreground">{brand.description}</p>
            </div>
            <div className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Productos</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {brand.productSlugs.map((slug) => {
                  const product = getProductBySlug(slug);
                  if (!product) return null;
                  return (
                    <div key={slug} className="flex flex-col items-center rounded-lg border border-border bg-background p-4 text-center">
                      <Link to="/drones/$slug" params={{ slug }} className="block font-heading text-sm font-semibold text-foreground hover:text-accent">
                        {product.name}
                      </Link>
                      <Link to="/drones/$slug" params={{ slug }} className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:underline">
                        Ver producto <ArrowRight size={12} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
