import { createFileRoute } from "@tanstack/react-router";
import { ButtonLg, InputText, PixelBox, TitleBox } from "@travel-check-client/ui";
import MemberList from "../../components/MemberList";

export const Route = createFileRoute("/$epicId/member")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-4">
      <TitleBox title="여행이름" />
      <PixelBox>
        <div className="w-full">
          <p className="w-full text-base">여행이름 여행 인원</p>
          <MemberList user="박우석" />
        </div>
      </PixelBox>
      <PixelBox>
        <p className="w-full text-base">여행 입장 링크</p>
        <InputText />
        <ButtonLg color="red" onClick={() => {}}>
          링크 복사하기
        </ButtonLg>
      </PixelBox>
    </div>
  );
}
