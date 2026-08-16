import { Link } from "@tanstack/react-router";

const socialLinks = [
  {
    href: "https://www.instagram.com/lumadronarg/",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/lumadron/",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://x.com/Lumadron",
    label: "X",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="flex h-10 w-full items-center justify-center gap-6 bg-[#fa4301]">
        {socialLinks.map(({ href, label, svg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white transition-opacity hover:opacity-80"
          >
            {svg}
          </a>
        ))}
      </div>
      <div className="h-px w-full bg-white" />

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
              <li><Link to="/drones-agricultura" className="hover:opacity-100">Agricultura</Link></li>
              <li><Link to="/drones-logistica" className="hover:opacity-100">Logística</Link></li>
              <li><Link to="/drones-oil-gas" className="hover:opacity-100">Oil & Gas</Link></li>
              <li><Link to="/drones-mineria" className="hover:opacity-100">Minería</Link></li>
              <li><Link to="/drones-seguridad" className="hover:opacity-100">Seguridad</Link></li>
              <li><Link to="/drones-topografia" className="hover:opacity-100">Topografía</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-60">Marcas</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              <li><Link to="/marcas" className="hover:opacity-100">DJI</Link></li>
              <li><Link to="/marcas" className="hover:opacity-100">XAG</Link></li>
              <li><Link to="/marcas" className="hover:opacity-100">Hylio</Link></li>
              <li><Link to="/marcas" className="hover:opacity-100">TopXGun</Link></li>
              <li><Link to="/distribuidores" className="hover:opacity-100">Distribuidores</Link></li>
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

