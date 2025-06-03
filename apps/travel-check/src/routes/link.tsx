import { createFileRoute } from "@tanstack/react-router";

import Header from "@components/Header";
import InfoLink from "@LinkPage/InfoLink";

export const Route = createFileRoute("/link")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <InfoLink />
    </>
  );
}
