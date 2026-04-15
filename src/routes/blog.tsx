import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Lumadron" },
      { name: "description", content: "Novedades, guías, comparativas y normativa sobre drones y robótica en Argentina." },
    ],
  }),
});

const posts = [
  { title: "Guía completa de drones agrícolas en Argentina 2025", excerpt: "Todo lo que necesitás saber para elegir el drone agrícola ideal para tu operación: capacidad, autonomía, precisión y costo por hectárea.", category: "Guías", date: "15 Abr 2025", readTime: "8 min" },
  { title: "DJI Agras T50 vs XAG P150: comparativa definitiva", excerpt: "Analizamos en detalle las dos opciones más populares del mercado para pulverización aérea en agricultura de precisión.", category: "Comparativas", date: "10 Abr 2025", readTime: "12 min" },
  { title: "Normativa ANAC para uso de drones comerciales", excerpt: "Requisitos legales, registración, seguros y permisos necesarios para operar drones comerciales en Argentina.", category: "Normativa", date: "5 Abr 2025", readTime: "6 min" },
  { title: "Cómo los drones están transformando la minería en Latinoamérica", excerpt: "Casos de uso reales de drones en operaciones mineras: volumetría, inspección de taludes y monitoreo ambiental.", category: "Casos de uso", date: "1 Abr 2025", readTime: "10 min" },
  { title: "Hylio AG-230: análisis completo del drone de pulverización más grande", excerpt: "Review detallado del AG-230 de Hylio, con 230L de capacidad y sistema autónomo de planificación de misiones.", category: "Reviews", date: "28 Mar 2025", readTime: "9 min" },
  { title: "5 errores comunes al implementar drones en operaciones agrícolas", excerpt: "Los errores más frecuentes que cometen los productores al adoptar tecnología drone y cómo evitarlos.", category: "Guías", date: "25 Mar 2025", readTime: "7 min" },
];

function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Blog</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Novedades, guías, comparativas y todo sobre drones y robótica aplicada.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {posts.map((post, i) => (
          <article
            key={post.title}
            className={`group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg ${i === 0 ? "lg:col-span-2" : ""}`}
          >
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
          </article>
        ))}
      </div>
    </div>
  );
}
