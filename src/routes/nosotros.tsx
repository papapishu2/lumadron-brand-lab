import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
  head: () => ({
    meta: [
      { title: "Nosotros | Lumadron, Drones para Agro e Industria en Argentina" },
      { name: "description", content: "Somos un equipo argentino especializado en drones y robótica para agricultura, oil & gas, minería, seguridad y topografía." },
      { property: "og:title", content: "Nosotros | Lumadron, Drones para Agro e Industria en Argentina" },
      { property: "og:description", content: "Somos un equipo argentino especializado en drones y robótica para agricultura, oil & gas, minería, seguridad y topografía." },
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
          Lumadron nace con la misión de potenciar la tecnología de drones y robótica a las industrias
          argentinas. Somos especialistas en DJI, XAG y Hylio, y brindamos asesoramiento
          técnico especializado para que cada operación encuentre la solución ideal.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Trabajamos con productores agrícolas, empresas de oil & gas, operaciones mineras,
          fuerzas de seguridad y empresas de topografía en todo el país, ofreciendo no solo
          equipamiento de primer nivel sino también capacitación y soporte técnico continuo.
        </p>
      </div>


      <div className="mt-16 rounded-2xl bg-primary p-10 text-center md:p-14">
        <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
          ¿Querés conocer más sobre nosotros?
        </h2>
        <p className="mt-3 text-primary-foreground/80">
          Contactanos y te contamos cómo podemos ayudarte.
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
