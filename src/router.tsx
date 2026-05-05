import { createRouter, useRouter, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import drone404 from "./assets/404-drone.png";

function DefaultNotFoundComponent() {
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

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-destructive"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        {import.meta.env.DEV && error.message && (
          <pre className="mt-4 max-h-40 overflow-auto rounded-md bg-muted p-3 text-left font-mono text-xs text-destructive">
            {error.message}
          </pre>
        )}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
  });

  return router;
};
