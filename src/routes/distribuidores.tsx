import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { distributorBrands, distributors } from "@/data/distributors";

const TITLE = "Distribuidores de drones en Argentina | DJI, XAG, Hylio, TopXGun";
const DESCRIPTION =
  "Listado de distribuidores oficiales de drones para agricultura e industria en Argentina: marcas que representan, sitio web, redes y teléfono de contacto.";

export const Route = createFileRoute("/distribuidores")({
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

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function DistribuidoresPage() {
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
            Relevamiento de distribuidores, importadores y representantes oficiales de
            drones para agricultura e industria en Argentina, con las marcas que
            comercializa cada empresa y sus datos de contacto.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {distributorBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground"
              >
                {brand} · {distributors.filter((d) => d.brands.includes(brand)).length}
              </span>
            ))}
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
          {distributorBrands.map((brand) => {
            const items = distributors.filter((d) => d.brands.includes(brand));
            if (items.length === 0) return null;
            return (
              <div key={brand}>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Distribuidores {brand}
                </h3>
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
                        {d.instagram && (
                          <div className="flex items-center gap-2">
                            <Instagram size={15} className="flex-shrink-0 text-accent" />
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
                        {d.linkedin && (
                          <div className="flex items-center gap-2">
                            <Linkedin size={15} className="flex-shrink-0 text-accent" />
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
