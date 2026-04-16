import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Plane, ChevronRight } from "lucide-react";
import { getProductBySlug, allProducts } from "@/data/products";

export const Route = createFileRoute("/drones/$slug")({
  component: ProductDetailPage,
  head: ({ params }) => {
    const product = getProductBySlug(params.slug);
    return {
      meta: [
        { title: product ? `${product.name} — Lumadron` : "Producto no encontrado — Lumadron" },
        { name: "description", content: product?.description ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">Producto no encontrado</h1>
      <p className="mt-3 text-muted-foreground">El producto que buscás no existe o fue removido.</p>
      <Link to="/drones" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
        <ArrowLeft size={14} /> Volver al catálogo
      </Link>
    </div>
  ),
});

function ProductDetailPage() {
  const { slug } = Route.useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    throw notFound();
  }

  const related = allProducts
    .filter((p) => p.brand === product.brand && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Inicio</Link>
        <ChevronRight size={12} />
        <Link to="/drones" className="hover:text-foreground">Drones</Link>
        <ChevronRight size={12} />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product Header */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image placeholder */}
        <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-secondary/50">
          <Plane size={80} className="text-muted-foreground/20" />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {product.brand}
            </span>
            <span className="text-sm text-muted-foreground">{product.category}</span>
          </div>

          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground lg:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <Link
            to="/contacto"
            className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      {/* Features & Specs */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Features */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">Características</h2>
          <ul className="mt-6 space-y-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specs */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">Especificaciones</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  i % 2 === 0 ? "bg-secondary/30" : "bg-card"
                }`}
              >
                <span className="text-sm font-medium text-muted-foreground">{key}</span>
                <span className="text-sm font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-2xl border border-border bg-primary/5 p-8 text-center lg:p-12">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          ¿Interesado en el {product.name}?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Contactanos para recibir asesoramiento personalizado y una cotización sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
        >
          Solicitar asesoramiento
        </Link>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Otros productos de {product.brand}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                to="/drones/$slug"
                params={{ slug: rel.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex h-36 items-center justify-center bg-secondary/50">
                  <Plane size={32} className="text-muted-foreground/20" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{rel.brand}</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-card-foreground">{rel.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{rel.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
