import { createFileRoute } from "@tanstack/react-router";

import Header from "@components/Header";
import ScrollArea from "@components/ScrollArea";
import ParticipantManageList from "@MemberPage/ParticipantManage/ParticipantManageList";

export const Route = createFileRoute("/$epicLink/member")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <ScrollArea>
        <ParticipantManageList />
      </ScrollArea>
    </>
  );
}
