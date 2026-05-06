import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto Lumadron | Asesoramiento en Drones DJI, XAG e Hylio" },
      { name: "description", content: "Hablá con nuestros especialistas para elegir el drone ideal para tu operación agrícola, minera, energética o de seguridad en Argentina." },
      { property: "og:title", content: "Contacto Lumadron | Asesoramiento en Drones DJI, XAG e Hylio" },
      { property: "og:description", content: "Hablá con nuestros especialistas para elegir el drone ideal para tu operación agrícola, minera, energética o de seguridad en Argentina." },
    ],
  }),
});

function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold text-foreground">Contacto</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Completá el formulario y nuestro equipo te responde en menos de 24 horas.
            También podés contactarnos directamente por los canales de abajo.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">drones@lumadron.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground">Ubicación</h3>
                <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="font-heading text-xl font-bold text-card-foreground">Envianos tu consulta</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
