import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$epicLink/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return <></>;
}
