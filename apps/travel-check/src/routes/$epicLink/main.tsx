import { createFileRoute } from "@tanstack/react-router";

import Header from "@components/Header";
import ScrollArea from "@components/ScrollArea";
import TeamCheckList from "@components/TeamCheck/TeamCheckList";
import PersonalCheckList from "@components/PersonalCheck/PersonalCheckList";
import InputAddList from "@MainPage/InputAddList";

export const Route = createFileRoute("/$epicLink/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ScrollArea>
        <TeamCheckList />
        <PersonalCheckList />
        <InputAddList />
      </ScrollArea>
    </>
  );
}
