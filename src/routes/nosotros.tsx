import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Users, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
  head: () => ({
    meta: [
      { title: "Nosotros — Lumadron" },
      { name: "description", content: "Conocé Lumadron: distribuidores de drones y robótica para agro e industria en Argentina." },
    ],
  }),
});

function NosotrosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground">Nosotros</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Lumadron nace con la misión de acercar la tecnología de drones y robótica a las industrias
          argentinas. Somos distribuidores oficiales de DJI, XAG y Hylio, y brindamos asesoramiento
          técnico especializado para que cada operación encuentre la solución ideal.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Trabajamos con productores agrícolas, empresas de oil & gas, operaciones mineras,
          fuerzas de seguridad y empresas de topografía en todo el país, ofreciendo no solo
          equipamiento de primer nivel sino también capacitación y soporte técnico continuo.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3">
            <Target size={24} className="text-accent" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-bold text-card-foreground">Misión</h3>
          <p className="mt-2 text-muted-foreground">
            Democratizar el acceso a tecnología de drones profesionales en Argentina,
            con asesoramiento técnico y soporte de excelencia.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3">
            <Users size={24} className="text-accent" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-bold text-card-foreground">Equipo</h3>
          <p className="mt-2 text-muted-foreground">
            Profesionales especializados en aeronáutica, agronomía e ingeniería industrial,
            con experiencia real en operaciones con drones.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3">
            <Award size={24} className="text-accent" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-bold text-card-foreground">Compromiso</h3>
          <p className="mt-2 text-muted-foreground">
            Distribuidores oficiales certificados, con garantía de fábrica, capacitación
            incluida y soporte técnico postventa.
          </p>
        </div>
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
