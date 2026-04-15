import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold">Lumadron</h3>
            <p className="mt-2 text-sm opacity-80">
              Drones, robótica y automatización para agro e industria en Argentina.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">Categorías</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li><Link to="/categorias" className="hover:opacity-100">Agricultura</Link></li>
              <li><Link to="/categorias" className="hover:opacity-100">Oil & Gas</Link></li>
              <li><Link to="/categorias" className="hover:opacity-100">Minería</Link></li>
              <li><Link to="/categorias" className="hover:opacity-100">Seguridad</Link></li>
              <li><Link to="/categorias" className="hover:opacity-100">Topografía</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">Marcas</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li><Link to="/marcas" className="hover:opacity-100">DJI</Link></li>
              <li><Link to="/marcas" className="hover:opacity-100">XAG</Link></li>
              <li><Link to="/marcas" className="hover:opacity-100">Hylio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">Compañía</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li><Link to="/nosotros" className="hover:opacity-100">Nosotros</Link></li>
              <li><Link to="/blog" className="hover:opacity-100">Blog</Link></li>
              <li><Link to="/contacto" className="hover:opacity-100">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Lumadron. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
