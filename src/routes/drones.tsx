import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/drones")({
  component: DronesLayout,
});

function DronesLayout() {
  return <Outlet />;
}
