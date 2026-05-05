import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, CheckCircle2, Send } from "lucide-react"; // v2
import { getProductBySlug, allProducts, productImages } from "@/data/products";

export const Route = createFileRoute("/drones/$slug")({
  component: ProductDetailPage,
  head: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) {
      return {
        meta: [
          { title: "Producto no encontrado — Lumadron" },
          { name: "description", content: "El drone que buscás no está disponible en el catálogo de Lumadron." },
        ],
      };
    }
    const cats = product.categories.join(", ");
    const title = `${product.name} | Drone ${product.brand} para ${cats} | Lumadron`;
    const description = product.description.length > 155
      ? product.description.slice(0, 152) + "..."
      : product.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        ...(product.image ? [{ property: "og:image", content: product.image }] : []),
        ...(product.image ? [{ name: "twitter:image", content: product.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">
        Producto no encontrado
      </h1>
      <p className="mt-3 text-muted-foreground">
        El producto que buscás no existe o fue removido.
      </p>
      <Link
        to="/drones"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
      >
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
    <>
      {/* Hero Section — full-width colored band */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <ChevronRight size={10} />
            <Link
              to="/drones"
              className="hover:text-foreground transition-colors"
            >
              Drones
            </Link>
            <ChevronRight size={10} />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Image area — 3 cols */}
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-background shadow-sm lg:col-span-3">
              {productImages[product.slug] ? (
                <img
                  src={productImages[product.slug]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <div className="relative text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-heading text-2xl font-bold text-primary">
                        {product.brand.charAt(0)}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Imagen del producto
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="flex flex-col lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {product.brand}
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {product.categories.join(" · ")}
                </span>
              </div>

              <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Quick specs preview */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {Object.entries(product.specs)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-lg border border-border bg-background p-3"
                    >
                      <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                        {key}
                      </span>
                      <span className="mt-0.5 block font-heading text-sm font-bold text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
              </div>

              <Link
                to="/contacto"
                className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
              >
                <Send size={14} />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Características principales
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/30"
            >
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-accent"
              />
              <span className="text-sm leading-relaxed text-card-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Full specs table */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Especificaciones técnicas
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {Object.entries(product.specs).map(([key, value], i) => (
              <div
                key={key}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary/30"
                } ${i < Object.entries(product.specs).length - 1 ? "border-b border-border" : ""}`}
              >
                <span className="text-sm text-muted-foreground">{key}</span>
                <span className="font-heading text-sm font-semibold text-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="rounded-2xl bg-primary/5 border border-primary/10 px-6 py-10 text-center lg:px-16 lg:py-14">
          <h2 className="font-heading text-2xl font-bold text-foreground lg:text-3xl">
            ¿Interesado en el {product.name}?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Contactanos para recibir asesoramiento personalizado y una
            cotización sin compromiso.
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 font-heading text-sm font-semibold text-accent-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
          >
            <Send size={14} />
            Solicitar asesoramiento
          </Link>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
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
                  <div className="flex h-32 items-center justify-center overflow-hidden bg-secondary/40">
                    {productImages[rel.slug] ? (
                      <img
                        src={productImages[rel.slug]}
                        alt={rel.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="font-heading text-sm font-bold text-primary">
                          {rel.brand.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {rel.brand}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-card-foreground">
                      {rel.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {rel.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
