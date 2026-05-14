import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import drone404 from "../assets/404-drone.png";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 py-16 text-center">
      <img
        src={drone404}
        alt="Drone Lumadron"
        width={280}
        height={280}
        className="h-56 w-56 object-contain sm:h-64 sm:w-64"
      />
      <h1 className="mt-8 font-heading text-6xl font-extrabold text-[#335685] sm:text-7xl">404</h1>
      <h2 className="mt-3 font-heading text-xl font-semibold text-[#335685] sm:text-2xl">
        Esta página despegó sin rumbo
      </h2>
      <p className="mt-3 max-w-md text-sm text-neutral-600 sm:text-base">
        La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#fa4301] px-6 py-3 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumadron | Drones DJI, XAG e Hylio para Agro e Industria" },
      { name: "description", content: "Especialistas en drones DJI, XAG e Hylio en Argentina. Soluciones para agricultura, oil & gas, minería, seguridad y topografía." },
      { name: "author", content: "Lumadron" },
      { property: "og:site_name", content: "Lumadron" },
      { property: "og:locale", content: "es_AR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-S7C6SSL47L", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-S7C6SSL47L');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lumadron",
          url: "https://lumadron.com",
          logo: "https://lumadron.com/apple-touch-icon.png",
          email: "drones@lumadron.com",
          description: "Especialistas en drones DJI, XAG e Hylio en Argentina para agro, oil & gas, minería, seguridad y topografía.",
          areaServed: { "@type": "Country", name: "Argentina" },
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
