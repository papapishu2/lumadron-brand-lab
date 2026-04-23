import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingView } from "@/components/CategoryLandingView";
import { getCategoryBySlug } from "@/data/categories";

const category = getCategoryBySlug("mineria")!;

export const Route = createFileRoute("/drones-mineria")({
  head: () => ({
    meta: [
      { title: category.metaTitle },
      { name: "description", content: category.metaDescription },
      { property: "og:title", content: category.metaTitle },
      { property: "og:description", content: category.metaDescription },
      { property: "og:image", content: category.heroImage },
      { property: "twitter:image", content: category.heroImage },
    ],
  }),
  component: () => <CategoryLandingView category={category} />,
});
