import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import argentinaSatellite from "@/assets/nosotros-argentina-satellite.jpg";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
  head: () => ({
    meta: [
      { title: "Nosotros | Lumadron, Drones para Agro e Industria en Argentina" },
      { name: "description", content: "Lumadron es un sitio web dedicado a recopilar información sobre drones para agro, industria y logística en Argentina: modelos, marcas, distribuidores y notas técnicas." },
      { property: "og:title", content: "Nosotros | Lumadron, Drones para Agro e Industria en Argentina" },
      { property: "og:description", content: "Lumadron es un sitio web dedicado a recopilar información sobre drones para agro, industria y logística en Argentina: modelos, marcas, distribuidores y notas técnicas." },
      { property: "og:url", content: "https://lumadron.com/nosotros" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/nosotros" }],
  }),
});

function NosotrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Nosotros</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Lumadron es un sitio web dedicado a recopilar, organizar y brindar información sobre drones para el agro, la industria y la logística en Argentina. Nuestro objetivo es que productores, empresas y profesionales puedan conocer, comparar y elegir equipos, tecnologías y aplicaciones con datos claros, actualizados y de fácil acceso.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Encontrarás un catálogo de modelos de DJI, XAG, Hylio y TopXGun, categorías de uso como agricultura, oil & gas, minería, seguridad, topografía y logística, notas técnicas y del blog, y un directorio de distribuidores, importadores y representantes del país. No comercializamos directamente: facilitamos el contacto con quienes venden y brindan soporte técnico.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Si estás buscando una solución con drones, querés comparar características o necesitás orientación para contactar a un distribuidor, Lumadron es tu punto de partida.
        </p>
      </div>

      <div className="mt-16 rounded-2xl bg-primary p-10 text-center md:p-14">
        <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
          ¿Tenés dudas sobre un modelo o una aplicación?
        </h2>
        <p className="mt-3 text-primary-foreground/80">
          Contactanos y te ayudamos a encontrar la información que necesitás.
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading text-sm font-semibold text-accent-foreground hover:opacity-90"
        >
          Contactanos <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
