import { createFileRoute } from "@tanstack/react-router";

import Header from "@components/Header";
import ParticipantList from "@JoinPage/ParticipantList";
import InputPassword from "@components/InputPassword";
import InputName from "@JoinPage/InputName";

export const Route = createFileRoute("/$epicLink/join")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ParticipantList />
      <InputPassword />
      <InputName />
    </>
  );
}
