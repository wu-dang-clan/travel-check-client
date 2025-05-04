import { createFileRoute } from "@tanstack/react-router";
import { ButtonLg, InputText, PixelBox, TitleBox } from "@travel-check-client/ui";

export const Route = createFileRoute("/link")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full max-h-[48rem] flex-col items-center justify-between pt-4 pb-4">
      <TitleBox title="여행 링크 복사" />
      <PixelBox>
        <p> 여행 입장 링크</p>
        <InputText />
        <ButtonLg color="red" onClick={() => {}}>
          링크 복사하기
        </ButtonLg>
        <ButtonLg color="green" onClick={() => {}}>
          여행 체크리스트 접속
        </ButtonLg>
      </PixelBox>
    </div>
  );
}
