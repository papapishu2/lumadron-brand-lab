import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { allProducts, productImages } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/drones/")({
  component: DronesPage,
  head: () => ({
    meta: [
      { title: "Catálogo de Drones DJI, XAG e Hylio | Lumadron Argentina" },
      {
        name: "description",
        content:
          "Catálogo completo de drones agrícolas, de inspección y carga: DJI Agras, FlyCart, Mavic, XAG P-Series e Hylio. Especificaciones y aplicaciones.",
      },
      { property: "og:title", content: "Catálogo de Drones DJI, XAG e Hylio | Lumadron Argentina" },
      { property: "og:description", content: "Catálogo completo de drones agrícolas, de inspección y carga: DJI Agras, FlyCart, Mavic, XAG P-Series e Hylio." },
      { property: "og:url", content: "https://lumadron.com/drones" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/drones" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Catálogo de Drones",
          url: "https://lumadron.com/drones",
          inLanguage: "es-AR",
          isPartOf: { "@type": "WebSite", name: "Lumadron", url: "https://lumadron.com" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: allProducts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://lumadron.com/drones/${p.slug}`,
              name: p.name,
            })),
          },
        }),
      },
    ],
  }),
});

function DronesPage() {
  const [brand, setBrand] = useState<string>("Todas");
  const [category, setCategory] = useState<string>("Todas");

  const brands = useMemo(
    () => ["Todas", ...Array.from(new Set(allProducts.map((p) => p.brand)))],
    [],
  );
  const categories = useMemo(
    () => ["Todas", ...Array.from(new Set(allProducts.flatMap((p) => p.categories)))],
    [],
  );

  const filtered = useMemo(
    () =>
      allProducts.filter(
        (p) =>
          (brand === "Todas" || p.brand === brand) &&
          (category === "Todas" || p.categories.includes(category)),
      ),
    [brand, category],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">
        Drones para agricultura e industria
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Catálogo completo de drones y equipamiento para agricultura e industria.
      </p>

      <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:gap-6">
        <FilterGroup
          label="Marca"
          options={brands}
          value={brand}
          onChange={setBrand}
        />
        <div className="hidden h-8 w-px bg-border sm:block" />
        <FilterGroup
          label="Categoría"
          options={categories}
          value={category}
          onChange={setCategory}
        />
        <div className="ml-auto text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <div
            key={product.slug}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
          >
            <div className="flex h-44 items-center justify-center overflow-hidden bg-secondary/50">
              {productImages[product.slug] ? (
                <img
                  src={productImages[product.slug]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <Plane size={40} className="text-muted-foreground/20" />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {product.brand}
                </span>
                <span className="text-xs text-muted-foreground">
                  {product.categories.join(" · ")}
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

      {filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No hay productos que coincidan con los filtros seleccionados.
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}:
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            value === opt
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border bg-background text-muted-foreground hover:border-accent/40 hover:text-foreground",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
