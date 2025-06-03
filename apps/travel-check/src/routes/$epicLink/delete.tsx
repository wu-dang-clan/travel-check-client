import Header from "@components/Header";
import PersonalCheckList from "@components/PersonalCheck/PersonalCheckList";
import ScrollArea from "@components/ScrollArea";
import TeamCheckList from "@components/TeamCheck/TeamCheckList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$epicLink/delete")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ScrollArea>
        <TeamCheckList />
        <PersonalCheckList />
      </ScrollArea>
    </>
  );
}
