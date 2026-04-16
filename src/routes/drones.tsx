import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/drones")({
  component: ProductosPage,
  head: () => ({
    meta: [
      { title: "Productos — Lumadron" },
      { name: "description", content: "Catálogo completo de drones DJI, XAG y Hylio para agricultura e industria en Argentina." },
    ],
  }),
});

const allProducts = [
  { name: "DJI Agras T50", brand: "DJI", category: "Agricultura", description: "Drone de pulverización con tanque de 40L, IA para mapeo de terreno y vuelo autónomo." },
  { name: "DJI Agras T25", brand: "DJI", category: "Agricultura", description: "Drone agrícola compacto con 20L de capacidad, ideal para lotes medianos." },
  { name: "DJI FlyCart 30", brand: "DJI", category: "Logística", description: "Drone de carga pesada con hasta 30kg de capacidad para entrega en zonas remotas." },
  { name: "DJI Mavic 3 Enterprise", brand: "DJI", category: "Inspección", description: "Drone compacto enterprise con cámara térmica y zoom para inspección e inteligencia." },
  { name: "DJI Matrice 30", brand: "DJI", category: "Industrial", description: "Plataforma industrial compacta y resistente para inspección y respuesta ante emergencias." },
  { name: "DJI Matrice 350 RTK", brand: "DJI", category: "Industrial", description: "Drone industrial premium con RTK integrado para topografía y mapeo de alta precisión." },
  { name: "DJI Matrice 4T", brand: "DJI", category: "Industrial", description: "Última generación de plataforma enterprise con sensor térmico integrado." },
  { name: "DJI Zenmuse L2", brand: "DJI", category: "Topografía", description: "Payload LIDAR de alta precisión para relevamiento topográfico y modelos 3D." },
  { name: "XAG P150", brand: "XAG", category: "Agricultura", description: "Drone agrícola autónomo con 50L de capacidad y sistema de IA avanzada." },
  { name: "XAG P100 Pro", brand: "XAG", category: "Agricultura", description: "Drone de pulverización de precisión con 40L y navegación RTK." },
  { name: "XAG P60", brand: "XAG", category: "Agricultura", description: "Drone agrícola de 20L, compacto y eficiente para operaciones medianas." },
  { name: "XAG V40", brand: "XAG", category: "Agricultura", description: "Drone de pulverización versátil con sistema de esparcimiento dual." },
  { name: "XAG M500", brand: "XAG", category: "Agricultura", description: "Robot terrestre autónomo para pulverización en cultivos bajos." },
  { name: "XAG RevoSpray", brand: "XAG", category: "Agricultura", description: "Sistema de pulverización inteligente con atomización centrífuga." },
  { name: "HYL-150", brand: "Hylio", category: "Agricultura", description: "Drone de gran capacidad (150L) para pulverización en grandes extensiones." },
  { name: "HYL-120", brand: "Hylio", category: "Agricultura", description: "Drone de pulverización de 120L con autonomía extendida." },
  { name: "AG-230", brand: "Hylio", category: "Agricultura", description: "Drone de pulverización premium con 230L de capacidad y vuelo autónomo." },
];

function ProductosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-foreground">Productos</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        Catálogo completo de drones y equipamiento para agricultura e industria.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => (
          <div
            key={product.name}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
          >
            <div className="flex h-44 items-center justify-center bg-secondary/50">
              <Plane size={40} className="text-muted-foreground/20" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{product.brand}</span>
                <span className="text-xs text-muted-foreground">{product.category}</span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold text-card-foreground">{product.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
              <Link
                to="/contacto"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Consultar precio <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
