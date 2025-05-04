import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="flex flex-col items-center justify-center gap-4 pt-4">Hello "/join"!</div>;
}
