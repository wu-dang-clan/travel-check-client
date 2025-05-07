import { createFileRoute } from "@tanstack/react-router";
import { PixelBox, TitleBox, InputAddList } from "@travel-check-client/ui";
import PersonalList from "../../components/PersonalList";
import TeamList from "../../components/TeamList";

export const Route = createFileRoute("/$epicId/main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-4">
      <TitleBox title="여행이름" />
      <PixelBox>
        <div className="h-[30rem] w-full p-0">
          <p className="w-full text-base">단체 체크리스트(0/0)</p>
          <TeamList item="카메라" manager="박우석" />
          <p className="w-full text-base">개인 체크리스트(0/0)</p>
          <PersonalList item="속옷" maxCount={4} currentCount={0} />
        </div>
      </PixelBox>
      <InputAddList onChange={() => {}} placeholder="여행지" />
    </div>
  );
}
