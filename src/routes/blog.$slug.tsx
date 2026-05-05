import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug);
    if (!post) {
      return {
        meta: [
          { title: "Artículo no encontrado | Blog Lumadron" },
          { name: "description", content: "El artículo que buscás no existe o fue removido." },
        ],
      };
    }
    const title = `${post.title} | Blog Lumadron`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:section", content: post.category },
        { property: "article:published_time", content: post.date },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
      <h1 className="font-heading text-3xl font-bold text-foreground">Artículo no encontrado</h1>
      <p className="mt-3 text-muted-foreground">El artículo que buscás no existe o fue removido.</p>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
        <ArrowLeft size={14} /> Volver al blog
      </Link>
    </div>
  ),
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    throw notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <header className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <ChevronRight size={10} />
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight size={10} />
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>

          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime} de lectura
            </span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="mx-auto max-w-4xl px-4 pt-8 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={post.image}
            alt={post.title}
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <div
          className="blog-content space-y-5 text-base leading-relaxed text-foreground/90"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Related posts */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">Seguí leyendo</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-accent">{p.category}</span>
                  <h3 className="mt-2 font-heading font-bold text-card-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
