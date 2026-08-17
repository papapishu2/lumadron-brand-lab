import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/marcas")({
  component: MarcasLayout,
});

function MarcasLayout() {
  return <Outlet />;
}
