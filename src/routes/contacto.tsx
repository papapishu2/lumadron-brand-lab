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
      { property: "og:url", content: "https://lumadron.com/contacto" },
    ],
    links: [{ rel: "canonical", href: "https://lumadron.com/contacto" }],
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
                <h2 className="font-heading text-sm font-semibold text-foreground">Email</h2>
                <p className="text-sm text-muted-foreground">drones@lumadron.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-semibold text-foreground">Ubicación</h2>
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

const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Completá nombre, email y mensaje.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }
      toast.success("¡Gracias! Recibimos tu consulta y te respondemos en menos de 24 hs.");
      setForm({ name: "", company: "", email: "", phone: "", industry: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Nombre</label>
          <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Tu nombre" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Empresa</label>
          <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Tu empresa" className={inputCls} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
        <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="tu@email.com" className={inputCls} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Teléfono</label>
        <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+54 11 0000-0000" className={inputCls} />
      </div>
      <div>
        <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-foreground">¿En qué industria trabajás?</label>
        <select id="industry" name="industry" value={form.industry} onChange={handleChange} className={inputCls}>
          <option value="">Seleccioná una opción</option>
          <option value="Agricultura">Agricultura</option>
          <option value="Oil & Gas">Oil & Gas</option>
          <option value="Minería">Minería</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Topografía">Topografía</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Mensaje</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Contanos qué necesitás..." className={`${inputCls} resize-none`} />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:opacity-90 font-heading font-semibold">
        {loading ? "Enviando..." : "Enviar consulta"}
      </Button>
    </form>
  );
}
