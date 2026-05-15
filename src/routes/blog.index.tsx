import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog de Drones y Robótica | Lumadron Argentina" },
      { name: "description", content: "Guías, comparativas y normativa ANAC sobre drones DJI, XAG e Hylio para agro, minería, oil & gas y topografía." },
      { property: "og:title", content: "Blog de Drones y Robótica | Lumadron Argentina" },
      { property: "og:description", content: "Guías, comparativas y normativa ANAC sobre drones DJI, XAG e Hylio para agro, minería, oil & gas y topografía." },
      { property: "og:url", content: "https://lumadron.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Blog de Drones y Robótica",
          url: "https://lumadron.com/blog",
          inLanguage: "es-AR",
          isPartOf: { "@type": "WebSite", name: "Lumadron", url: "https://lumadron.com" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: blogPosts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://lumadron.com/blog/${p.slug}`,
              name: p.title,
            })),
          },
        }),
      },
    ],
  }),
});

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Novedades, guías, comparativas y todo sobre drones y robótica aplicada.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className={`overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
              <img
                src={post.image}
                alt={post.title}
                loading={i === 0 ? "eager" : "lazy"}
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date} · {post.readTime}</span>
              </div>
              <h2 className={`mt-3 font-heading font-bold text-card-foreground group-hover:text-accent transition-colors ${i === 0 ? "text-2xl" : "text-xl"}`}>
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Leer artículo <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
