import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, MapPin } from "lucide-react";
import { getBrandBySlug, brands } from "@/data/brands";
import { getProductBySlug, productImages } from "@/data/products";
import { distributors } from "@/data/distributors";

export const Route = createFileRoute("/marcas/$brand")({
  component: BrandLandingPage,
  head: ({ params }) => {
    const brand = getBrandBySlug(params.brand);
    if (!brand) {
      return {
        meta: [
          { title: "Marca no encontrada — Lumadron" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `Drones ${brand.name} en Argentina: modelos y distribuidores | Lumadron`;
    const description = `${brand.name} en Argentina: ${brand.tagline.toLowerCase()}. Modelos, especificaciones y distribuidores oficiales de drones ${brand.name}.`;
    const url = `https://lumadron.com/marcas/${brand.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: brand.name,
            description: brand.description,
            url,
            sameAs: brand.officialUrl,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://lumadron.com/" },
              { "@type": "ListItem", position: 2, name: "Marcas", item: "https://lumadron.com/marcas" },
              { "@type": "ListItem", position: 3, name: brand.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">Marca no encontrada</h1>
      <Link to="/marcas" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
        <ArrowLeft size={14} /> Volver a marcas
      </Link>
    </div>
  ),
});

function BrandLandingPage() {
  const { brand: slug } = Route.useParams();
  const brand = getBrandBySlug(slug);
  if (!brand) throw notFound();

  const products = brand.productSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const brandDistributors = distributors.filter((d) => d.brands.includes(brand.name));
  const otherBrands = brands.filter((b) => b.slug !== brand.slug);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <nav aria-label="Migas de pan" className="text-sm text-muted-foreground">
            <Link to="/marcas" className="inline-flex items-center gap-1 hover:text-accent">
              <ArrowLeft size={14} /> Marcas
            </Link>
          </nav>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div className="flex h-24 w-36 items-center justify-center rounded-2xl border border-border bg-background px-5">
              <img src={brand.logo} alt={`Logo ${brand.name}`} className={`${brand.logoClass} object-contain`} />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground lg:text-4xl">
                Drones {brand.name} en Argentina
              </h1>
              <p className="mt-1 text-sm font-medium text-accent">{brand.tagline}</p>
              <p className="mt-1 text-xs text-muted-foreground">{brand.origin}</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{brand.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/distribuidores"
              search={{ brand: brand.name }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MapPin size={16} /> Ver distribuidores {brand.name}
            </Link>
            <a
              href={brand.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-accent/40"
            >
              Sitio oficial <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Highlights */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Por qué se elige {brand.name}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {brand.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {brand.categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Modelos {brand.name}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg">
                <Link to="/drones/$slug" params={{ slug: p.slug }} className="block bg-background">
                  <div className="flex aspect-4/3 items-center justify-center p-4">
                    {productImages[p.slug] ? (
                      <img
                        src={productImages[p.slug]}
                        alt={`${p.name} — drone ${brand.name}`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                </Link>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-card-foreground">
                    <Link to="/drones/$slug" params={{ slug: p.slug }} className="hover:text-accent">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                  <Link
                    to="/drones/$slug"
                    params={{ slug: p.slug }}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Ver ficha <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Distributors */}
        {brandDistributors.length > 0 && (
          <section className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Distribuidores de {brand.name} en Argentina
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brandDistributors.map((d) => (
                <div key={d.company} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-heading text-base font-semibold text-card-foreground">{d.company}</h3>
                  <p className="mt-1 text-xs font-medium text-accent">{d.role}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={13} /> {d.location}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/distribuidores"
              search={{ brand: brand.name }}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              Ver detalle de contacto <ArrowRight size={14} />
            </Link>
          </section>
        )}

        {/* Other brands */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground">Otras marcas</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                to="/marcas/$brand"
                params={{ brand: b.slug }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg border border-border bg-background px-2">
                  <img src={b.logo} alt={`Logo ${b.name}`} className="max-h-6 w-auto object-contain" />
                </div>
                <span className="font-heading text-sm font-semibold text-card-foreground">{b.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
