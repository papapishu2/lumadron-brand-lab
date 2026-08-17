import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { categoryLandings } from "@/data/categories";
import { categoryRoutes } from "@/components/CategoryLandingView";
import heroBg from "@/assets/dji-hero.jpg";
import { productImages } from "@/data/products";
import { blogPosts } from "@/data/blog";
import logoDJI from "@/assets/brands/dji-logo.png";
import logoXAG from "@/assets/brands/xag-logo.webp";
import logoHylio from "@/assets/brands/hylio-logo.png";
import logoTopXGun from "@/assets/brands/topxgun-logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Lumadron | Drones DJI, XAG, Hylio y TopXGun en Argentina" },
      { name: "description", content: "Catálogo de drones DJI, XAG, Hylio y TopXGun con asesoramiento técnico en Argentina para agro, oil & gas, minería, seguridad y topografía." },
      { property: "og:title", content: "Lumadron | Drones DJI, XAG, Hylio y TopXGun en Argentina" },
      { property: "og:description", content: "Catálogo y asesoramiento técnico en drones DJI, XAG, Hylio y TopXGun para operaciones agrícolas, energéticas, mineras, de seguridad y topografía." },
      { property: "og:url", content: "https://lumadron.com/" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Lumadron",
          url: "https://lumadron.com",
          inLanguage: "es-AR",
        }),
      },
    ],
  }),
});


const brands = [
  { name: "DJI", description: "Líder mundial en drones comerciales e industriales.", products: 8, logo: logoDJI, logoClass: "h-12" },
  { name: "XAG", description: "Especialista en drones agrícolas y smart farming.", products: 8, logo: logoXAG, logoClass: "h-10" },
  { name: "Hylio", description: "Drones de pulverización de alta capacidad.", products: 6, logo: logoHylio, logoClass: "h-8" },
  { name: "TopXGun", description: "Drones agrícolas y de carga para logística aérea.", products: 7, logo: logoTopXGun, logoClass: "h-8" },
];

const featuredProducts = [
  { slug: "dji-agras-t50", name: "DJI Agras T50", brand: "DJI", categories: ["Agricultura"], description: "Drone de pulverización de última generación con tanque de 40L.", image: productImages["dji-agras-t50"] },
  { slug: "xag-p150", name: "XAG P150", brand: "XAG", categories: ["Agricultura"], description: "Drone agrícola autónomo con capacidad de 50L y IA avanzada.", image: productImages["xag-p150"] },
  { slug: "dji-flycart-100", name: "DJI FlyCart 100", brand: "DJI", categories: ["Logística", "Oil & Gas"], description: "Drone de carga industrial de gran capacidad para zonas remotas.", image: productImages["dji-flycart-100"] },
  { slug: "topxgun-y160", name: "TopXGun Y160", brand: "TopXGun", categories: ["Logística"], description: "Drone de carga coaxial con 165 kg de carga útil para logística aérea.", image: productImages["topxgun-y160"] },
];

const MONTHS: Record<string, number> = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
};

function parseDate(date: string) {
  const [day, month, year] = date.split(" ");
  return new Date(Number(year), MONTHS[month.toLowerCase().slice(0, 3)] ?? 0, Number(day)).getTime();
}

const latestPosts = [...blogPosts]
  .sort((a, b) => parseDate(b.date) - parseDate(a.date))
  .slice(0, 3);





function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Drones y robótica para
            <br />
            <span className="text-[#fa4301]">agro e industria</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Información sobre drones, robótica y automatización para agricultura,
            oil & gas, minería, seguridad y topografía en Argentina.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/drones"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
            >
              Ver productos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">Categorías de uso</h2>
          <p className="mt-2 text-muted-foreground">Soluciones para cada industria</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryLandings.map((cat) => (
            <Link
              key={cat.slug}
              to={categoryRoutes[cat.slug]}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.heroImage}
                  alt={`Drones para ${cat.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-heading text-2xl font-bold text-primary-foreground">
                  {cat.name}
                </h3>
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

      </section>

      {/* Brands */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">Principales marcas de drones para el agro y la industria</h2>
            <p className="mt-2 text-muted-foreground">Especialistas en Argentina</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to="/marcas/$brand"
                params={{ brand: brand.name.toLowerCase() }}
                className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-auto items-center justify-center px-4">
                  <img src={brand.logo} alt={`Logo ${brand.name}`} className={`w-auto object-contain ${brand.logoClass}`} />
                </div>
                <p className="mt-5 text-sm text-muted-foreground">{brand.description}</p>
                <p className="mt-3 text-xs font-medium text-accent">{brand.products} productos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Productos destacados</h2>
            <p className="mt-2 text-muted-foreground">Lo más nuevo en drones profesionales</p>
          </div>
          <Link to="/drones" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-secondary/50 overflow-hidden">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent">{product.brand} · {product.categories.join(" · ")}</span>
                <h3 className="mt-1.5 font-heading text-base font-semibold text-card-foreground">{product.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
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
      </section>

      {/* Blog Preview */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Últimos artículos</h2>
              <p className="mt-2 text-muted-foreground">Novedades, guías y comparativas</p>
            </div>
            <Link to="/blog" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex">
              Ver blog <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent">{post.category}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground transition-colors group-hover:text-accent">{post.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="rounded-2xl bg-primary p-10 text-center md:p-16">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Nuestro equipo te ayuda a encontrar la solución ideal para tu operación.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
          >
            Contactanos <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
