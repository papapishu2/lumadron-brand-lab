import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getCategoryBySlug, categoryLandings } from "@/data/categories";
import { allProducts, productImages } from "@/data/products";

export const Route = createFileRoute("/categorias/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Categoría — Lumadron" }] };
    const { category } = loaderData;
    return {
      meta: [
        { title: category.metaTitle },
        { name: "description", content: category.metaDescription },
        { property: "og:title", content: category.metaTitle },
        { property: "og:description", content: category.metaDescription },
        { property: "og:image", content: category.heroImage },
        { property: "twitter:image", content: category.heroImage },
      ],
    };
  },
  component: CategoryLandingPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-heading text-3xl font-bold">Categoría no encontrada</h1>
      <Link to="/categorias" className="mt-6 inline-flex items-center gap-1 text-accent hover:underline">
        Ver todas las categorías <ArrowRight size={14} />
      </Link>
    </div>
  ),
});

function CategoryLandingPage() {
  const { category } = Route.useLoaderData();
  const products = category.productSlugs
    .map((slug) => allProducts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img
          src={category.heroImage}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-24 lg:px-8 lg:py-32">
          <nav className="mb-6 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/categorias" className="hover:text-primary-foreground">Categorías</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">{category.name}</span>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {category.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            {category.heroSubtitle}
          </p>
          <div className="mt-8">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              Ver productos
            </a>
          </div>
        </div>
      </section>

      {/* Industry info */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Uso de drones en {category.name}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {category.intro.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {category.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Aplicaciones principales
            </h3>
            <ul className="mt-5 space-y-3">
              {category.intro.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Productos para {category.name}
            </h2>
            <p className="mt-3 text-muted-foreground">
              Equipos recomendados de DJI, XAG e Hylio
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-secondary/50 overflow-hidden">
                  <img
                    src={productImages[product.slug]}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-accent">
                    {product.brand} · {product.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-base font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  <Link
                    to="/drones/$slug"
                    params={{ slug: product.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
                  >
                    Más información <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Otras categorías
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {categoryLandings
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/categorias/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="rounded-2xl bg-primary p-10 text-center md:p-14">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            ¿Querés evaluar drones para {category.name.toLowerCase()}?
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Te asesoramos sin cargo para encontrar la solución ideal para tu operación.
          </p>
          <Link
            to="/contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
          >
            Contactanos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
