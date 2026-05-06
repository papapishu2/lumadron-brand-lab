import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import djiLogo from "@/assets/brands/dji-logo.png";
import xagLogo from "@/assets/brands/xag-logo.webp";
import hylioLogo from "@/assets/brands/hylio-logo.png";

export const Route = createFileRoute("/marcas")({
  component: MarcasPage,
  head: () => ({
    meta: [
      { title: "Marcas DJI, XAG e Hylio en Argentina | Lumadron" },
      { name: "description", content: "Distribuidor oficial de DJI Agras, XAG y Hylio en Argentina. Drones agrícolas e industriales con respaldo, repuestos y soporte técnico." },
      { property: "og:title", content: "Marcas DJI, XAG e Hylio en Argentina | Lumadron" },
      { property: "og:description", content: "Distribuidor oficial de DJI Agras, XAG y Hylio en Argentina. Drones agrícolas e industriales con respaldo, repuestos y soporte técnico." },
    ],
  }),
});

const brands = [
  {
    name: "DJI",
    logo: djiLogo,
    logoClass: "h-12 w-auto",
    tagline: "Líder mundial en drones comerciales e industriales",
    description: "DJI es el fabricante de drones más grande del mundo, con una gama completa de soluciones para agricultura, inspección industrial, mapeo y seguridad.",
    products: [
      { name: "Agras T100", slug: "dji-agras-t100" },
      { name: "Agras T70P", slug: "dji-agras-t70p" },
      { name: "Agras T50", slug: "dji-agras-t50" },
      { name: "Agras T25P", slug: "dji-agras-t25p" },
      { name: "Agras T25", slug: "dji-agras-t25" },
      { name: "Mavic 3M", slug: "dji-mavic-3m" },
      { name: "FlyCart 100", slug: "dji-flycart-100" },
      { name: "FlyCart 30", slug: "dji-flycart-30" },
    ],
  },
  {
    name: "XAG",
    logo: xagLogo,
    logoClass: "h-10 w-auto",
    tagline: "Especialista en drones agrícolas y smart farming",
    description: "XAG desarrolla drones agrícolas autónomos con inteligencia artificial, sistemas de pulverización de precisión y herramientas de gestión de cultivos.",
    products: [
      { name: "P150 Max", slug: "xag-p150-max" },
      { name: "P150", slug: "xag-p150" },
      { name: "P100 Pro", slug: "xag-p100-pro" },
      { name: "P60", slug: "xag-p60" },
    ],
  },
  {
    name: "Hylio",
    logo: hylioLogo,
    logoClass: "h-8 w-auto",
    tagline: "Drones de pulverización de alta capacidad",
    description: "Hylio fabrica drones de pulverización de gran capacidad con sistemas autónomos de planificación de misiones y gestión de flotas.",
    products: [
      { name: "PEGASUS", slug: "hylio-pegasus" },
      { name: "ARES HYL-150", slug: "hylio-ares-hyl-150" },
      { name: "ATLAS HYL-300", slug: "hylio-atlas-hyl-300" },
      { name: "PHOTON", slug: "hylio-photon" },
    ],
  },
];

function MarcasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Nuestras marcas</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Somos distribuidores oficiales de las mejores marcas de drones profesionales del mundo.
      </p>

      <div className="mt-12 space-y-10">
        {brands.map((brand) => (
          <div key={brand.name} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-primary/5 p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-28 items-center justify-center rounded-2xl bg-background border border-border px-4">
                  <img src={brand.logo} alt={`Logo ${brand.name}`} className={`${brand.logoClass} object-contain`} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">{brand.name}</h2>
                  <p className="text-sm text-accent font-medium">{brand.tagline}</p>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-muted-foreground">{brand.description}</p>
            </div>
            <div className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Productos</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {brand.products.map((p) => (
                  <div key={p.slug} className="rounded-lg border border-border bg-background p-4 text-center">
                    <p className="font-heading text-sm font-semibold text-foreground">{brand.name} {p.name}</p>
                    <Link to="/drones/$slug" params={{ slug: p.slug }} className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:underline">
                      Ver producto <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
