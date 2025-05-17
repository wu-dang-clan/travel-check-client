import { createFileRoute } from "@tanstack/react-router";
import { ButtonLg, InputText, PixelBox, TitleBox } from "@travel-check-client/ui";

export const Route = createFileRoute("/link")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-between py-4">
      <TitleBox title="여행 링크 복사" />
      <div>
        <PixelBox>
          <div className="mb-2 flex w-full flex-col gap-2">
            <div className="mb-2">
              <p className="mb-1"> 여행 입장 링크</p>
              <InputText />
            </div>
            <ButtonLg color="red" onClick={() => {}}>
              링크 복사하기
            </ButtonLg>
            <ButtonLg color="green" onClick={() => {}}>
              여행 체크리스트 접속
            </ButtonLg>
          </div>
        </PixelBox>
      </div>
    </div>
  );
}
