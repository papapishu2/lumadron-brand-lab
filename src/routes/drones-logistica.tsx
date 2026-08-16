import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingView } from "@/components/CategoryLandingView";
import { getCategoryBySlug } from "@/data/categories";

const category = getCategoryBySlug("logistica")!;
const url = "https://lumadron.com/drones-logistica";
const ogImage = `https://lumadron.com${category.heroImage}`;

export const Route = createFileRoute("/drones-logistica")({
  head: () => ({
    meta: [
      { title: category.metaTitle },
      { name: "description", content: category.metaDescription },
      { property: "og:title", content: category.metaTitle },
      { property: "og:description", content: category.metaDescription },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: () => <CategoryLandingView category={category} />,
});
