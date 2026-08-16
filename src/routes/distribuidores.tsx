import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ArrowRight, Globe, MapPin, Phone } from "lucide-react";
import { distributorBrands, distributors } from "@/data/distributors";
import djiLogo from "@/assets/brands/dji-logo.png";
import xagLogo from "@/assets/brands/xag-logo.webp";
import hylioLogo from "@/assets/brands/hylio-logo.png";
import topxgunLogo from "@/assets/brands/topxgun-logo.png";

const brandLogos: Record<string, { src: string; className: string }> = {
  DJI: { src: djiLogo, className: "h-7 w-auto" },
  XAG: { src: xagLogo, className: "h-6 w-auto" },
  Hylio: { src: hylioLogo, className: "h-5 w-auto" },
  TopXGun: { src: topxgunLogo, className: "h-5 w-auto" },
};

const TITLE = "Distribuidores de drones en Argentina | DJI, XAG, Hylio, TopXGun";
const DESCRIPTION =
  "Listado de distribuidores oficiales de drones para agricultura e industria en Argentina: marcas que representan, sitio web, redes y teléfono de contacto.";

const searchSchema = z.object({
  brand: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/distribuidores")({
  validateSearch: zodValidator(searchSchema),
  component: DistribuidoresPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lumadron.com/distribuidores" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/distribuidores" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Distribuidores de drones en Argentina",
          itemListElement: distributors.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Organization",
              name: d.company,
              url: d.website,
              areaServed: "AR",
            },
          })),
        }),
      },
    ],
  }),
});

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0 text-accent" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.65.51.71.28 1.31.65 1.9 1.24.6.6.97 1.2 1.25 1.91.27.69.46 1.48.51 2.65.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.51 2.65-.28.71-.65 1.31-1.25 1.9-.59.6-1.19.97-1.9 1.25-.69.27-1.48.46-2.65.51-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.65-.51a5.26 5.26 0 0 1-1.9-1.25 5.26 5.26 0 0 1-1.25-1.9c-.27-.69-.46-1.48-.51-2.65C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.96.51-2.65.28-.71.65-1.31 1.25-1.91.59-.59 1.19-.96 1.9-1.24.69-.27 1.48-.46 2.65-.51C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.14 0-3.5.01-4.73.07-.95.04-1.47.2-1.81.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.14.34-.3.86-.34 1.81-.06 1.23-.07 1.59-.07 4.73s.01 3.5.07 4.73c.04.95.2 1.47.34 1.81.18.46.39.79.74 1.13.34.35.67.56 1.13.74.34.14.86.3 1.81.34 1.23.06 1.59.07 4.73.07s3.5-.01 4.73-.07c.95-.04 1.47-.2 1.81-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.14-.34.3-.86.34-1.81.06-1.23.07-1.59.07-4.73s-.01-3.5-.07-4.73c-.04-.95-.2-1.47-.34-1.81a3.28 3.28 0 0 0-.74-1.13 3.28 3.28 0 0 0-1.13-.74c-.34-.14-.86-.3-1.81-.34-1.23-.06-1.59-.07-4.73-.07Zm0 3.37a5.06 5.06 0 1 1 0 10.12 5.06 5.06 0 0 1 0-10.12Zm0 8.34a3.28 3.28 0 1 0 0-6.56 3.28 3.28 0 0 0 0 6.56Zm6.44-8.56a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px] flex-shrink-0 text-accent" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.77-2.07c4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.82V21H9V9Z" />
    </svg>
  );
}

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function DistribuidoresPage() {
  const { brand } = Route.useSearch();
  const visibleBrands = brand
    ? distributorBrands.filter((b) => b === brand)
    : distributorBrands;

  return (
    <>
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <nav className="mb-6 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Distribuidores</span>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Distribuidores de drones en Argentina
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85">
            Distribuidores, importadores y representantes oficiales de drones
            para agricultura, industria y logística en Argentina.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {distributorBrands.map((brandName) => {
              const isActive = brand === brandName;
              const count = distributors.filter((d) =>
                d.brands.includes(brandName)
              ).length;
              return (
                <Link
                  key={brandName}
                  to="/distribuidores"
                  search={(prev) => ({ ...prev, brand: isActive ? "" : brandName })}
                  className={[
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20",
                  ].join(" ")}
                >
                  {brandName} · {count}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          Listado de distribuidores por marca
        </h2>
        <p className="mt-2 text-muted-foreground">
          Información pública de referencia. Verificá disponibilidad y cobertura
          directamente con cada empresa.
        </p>

        <div className="mt-10 space-y-12">
          {visibleBrands.map((brand) => {
            const items = distributors.filter((d) => d.brands.includes(brand));
            if (items.length === 0) return null;
            return (
              <div key={brand}>
                <div className="flex items-center gap-3">
                  {brandLogos[brand] && (
                    <img
                      src={brandLogos[brand].src}
                      alt={`Logo ${brand}`}
                      className={`${brandLogos[brand].className} object-contain`}
                      loading="lazy"
                    />
                  )}
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Distribuidores {brand}
                  </h3>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {items.map((d) => (
                    <article
                      key={d.company}
                      className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h4 className="font-heading text-lg font-semibold text-card-foreground">
                          {d.company}
                        </h4>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                          {d.brands.join(" · ")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-primary">{d.role}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{d.notes}</p>

                      <dl className="mt-5 space-y-2.5 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={15} className="flex-shrink-0 text-accent" />
                          <span>{d.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe size={15} className="flex-shrink-0 text-accent" />
                          <a
                            href={d.website}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="text-foreground hover:text-accent"
                          >
                            {hostOf(d.website)}
                          </a>
                        </div>
                        {d.instagram && (
                          <div className="flex items-center gap-2">
                            <InstagramIcon />
                            <a
                              href={d.instagram}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-foreground hover:text-accent"
                            >
                              Instagram
                            </a>
                          </div>
                        )}
                        {d.phone && (
                          <div className="flex items-center gap-2">
                            <Phone size={15} className="flex-shrink-0 text-accent" />
                            <a
                              href={`tel:${d.phone.replace(/[^+\d]/g, "")}`}
                              className="text-foreground hover:text-accent"
                            >
                              {d.phone}
                            </a>
                          </div>
                        )}
                        {d.linkedin && (
                          <div className="flex items-center gap-2">
                            <LinkedinIcon />
                            <a
                              href={d.linkedin}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-foreground hover:text-accent"
                            >
                              LinkedIn
                            </a>
                          </div>
                        )}
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="rounded-2xl bg-primary p-10 text-center md:p-14">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            ¿No sabés qué drone conviene para tu operación?
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Te ayudamos a comparar modelos y marcas antes de decidir la compra.
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
