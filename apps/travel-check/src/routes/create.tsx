import { createFileRoute } from "@tanstack/react-router";
import Header from "@components/Header";
import InfoCreate from "@CreatePage/InfoCreate";
import InputPassword from "@components/InputPassword";

export const Route = createFileRoute("/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <InfoCreate />
      <InputPassword />
    </>
  );
}
