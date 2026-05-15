import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import lumadronLogo from "@/assets/lumadron-logo.png";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Drones", to: "/drones" },
  { label: "Categorías", to: "/categorias" },
  { label: "Marcas", to: "/marcas" },
  { label: "Blog", to: "/blog" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={lumadronLogo} alt="Lumadron - Drones y Robótica" className="h-[3.1rem] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-lg px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === item.to
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          to="/contacto"
          className="hidden rounded-lg bg-accent px-4 py-2 font-heading text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90 lg:inline-flex"
        >
          Solicitar asesoramiento
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileOpen}
          className="rounded-lg p-2 text-foreground lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground"
            >
              Solicitar asesoramiento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
