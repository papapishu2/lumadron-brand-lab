import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fuel, Plane, Shield, Mountain, Droplets, MapPin, ChevronRight } from "lucide-react";
import heroBg from "@/assets/dji-hero.jpg";
import { productImages } from "@/data/products";
import logoDJI from "@/assets/brands/dji-logo.png";
import logoXAG from "@/assets/brands/xag-logo.webp";
import logoHylio from "@/assets/brands/hylio-logo.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const categories = [
  { name: "Agricultura", description: "Pulverización, monitoreo y análisis de cultivos con drones autónomos.", icon: Droplets, color: "bg-green-500/10 text-green-600" },
  { name: "Oil & Gas", description: "Inspección de infraestructura, monitoreo de ductos y detección de fugas.", icon: Fuel, color: "bg-blue-500/10 text-blue-600" },
  { name: "Minería", description: "Relevamiento topográfico, volumetría y control de operaciones mineras.", icon: Mountain, color: "bg-amber-500/10 text-amber-600" },
  { name: "Seguridad", description: "Vigilancia perimetral, respuesta ante emergencias y monitoreo en tiempo real.", icon: Shield, color: "bg-red-500/10 text-red-600" },
  { name: "Topografía", description: "Mapeo aéreo, fotogrametría y generación de modelos 3D de alta precisión.", icon: MapPin, color: "bg-violet-500/10 text-violet-600" },
];

const brands = [
  { name: "DJI", description: "Líder mundial en drones comerciales e industriales.", products: 8, logo: logoDJI, logoClass: "h-12" },
  { name: "XAG", description: "Especialista en drones agrícolas y smart farming.", products: 8, logo: logoXAG, logoClass: "h-10" },
  { name: "Hylio", description: "Drones de pulverización de alta capacidad.", products: 6, logo: logoHylio, logoClass: "h-8" },
];

const featuredProducts = [
  { slug: "dji-agras-t50", name: "DJI Agras T50", brand: "DJI", category: "Agricultura", description: "Drone de pulverización de última generación con tanque de 40L.", image: productImages["dji-agras-t50"] },
  { slug: "xag-p150", name: "XAG P150", brand: "XAG", category: "Agricultura", description: "Drone agrícola autónomo con capacidad de 50L y IA avanzada.", image: productImages["xag-p150"] },
  { slug: "dji-flycart-100", name: "DJI FlyCart 100", brand: "DJI", category: "Logística", description: "Drone de carga industrial de gran capacidad para zonas remotas.", image: productImages["dji-flycart-100"] },
  { slug: "dji-flycart-30", name: "DJI FlyCart 30", brand: "DJI", category: "Logística", description: "Drone de carga para entrega en zonas remotas, hasta 30kg.", image: productImages["dji-flycart-30"] },
];

const blogPosts = [
  { title: "Guía completa de drones agrícolas en Argentina 2025", category: "Guías", date: "15 Abr 2025" },
  { title: "DJI Agras T50 vs XAG P150: comparativa definitiva", category: "Comparativas", date: "10 Abr 2025" },
  { title: "Normativa ANAC para uso de drones comerciales", category: "Normativa", date: "5 Abr 2025" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center lg:px-8 lg:py-36">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Drones y robótica para
            <br />
            <span className="text-[#fa4301]">agro e industria</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Soluciones profesionales en drones, robótica y automatización para agricultura,
            oil & gas, minería, seguridad y topografía en Argentina.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/drones"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
            >
              Ver productos <ArrowRight size={16} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              Solicitar asesoramiento
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
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/categorias"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className={`inline-flex rounded-lg p-2.5 ${cat.color}`}>
                <cat.icon size={22} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-card-foreground">{cat.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{cat.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Ver más <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">Principales marcas de drones para el agro y la industria</h2>
            <p className="mt-2 text-muted-foreground">Distribuidores oficiales en Argentina</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to="/marcas"
                className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-auto items-center justify-center px-4">
                  <img src={brand.logo} alt={brand.name} className={`w-auto object-contain ${brand.logoClass}`} />
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
                <span className="text-xs font-medium text-accent">{product.brand} · {product.category}</span>
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
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                to="/blog"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <span className="text-xs font-medium text-accent">{post.category}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
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
