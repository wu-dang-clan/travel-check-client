import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@travel-check-client/ui";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" bg-Surface">
      Hello "/"!
      <Button value="asd" />
    </div>
  );
}
