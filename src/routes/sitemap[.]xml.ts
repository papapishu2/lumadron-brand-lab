import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://lumadron.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/drones", changefreq: "weekly", priority: "0.9" },
          { path: "/categorias", changefreq: "monthly", priority: "0.8" },
          { path: "/drones-agricultura", changefreq: "monthly", priority: "0.9" },
          { path: "/drones-oil-gas", changefreq: "monthly", priority: "0.9" },
          { path: "/drones-mineria", changefreq: "monthly", priority: "0.9" },
          { path: "/drones-seguridad", changefreq: "monthly", priority: "0.9" },
          { path: "/drones-topografia", changefreq: "monthly", priority: "0.9" },
          { path: "/marcas", changefreq: "monthly", priority: "0.7" },
          { path: "/nosotros", changefreq: "monthly", priority: "0.6" },
          { path: "/contacto", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
        ];

        const productEntries: SitemapEntry[] = allProducts.map((p) => ({
          path: `/drones/${p.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const blogEntries: SitemapEntry[] = blogPosts.map((p) => ({
          path: `/blog/${p.slug}`,
          changefreq: "monthly",
          priority: "0.7",
        }));

        const entries = [...staticEntries, ...productEntries, ...blogEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
