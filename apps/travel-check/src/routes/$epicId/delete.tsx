import { createFileRoute } from "@tanstack/react-router";
import { PixelBox, TitleBox, InputAddList, ButtonLg, ButtonMed } from "@travel-check-client/ui";

export const Route = createFileRoute("/$epicId/delete")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <TitleBox title="여행이름" />
        <PixelBox>
          <div className="h-[30rem] w-full p-0">
            <p className="w-full text-base">단체 체크리스트(0/0)</p>

            <p className="w-full text-base">개인 체크리스트(0/0)</p>
          </div>
        </PixelBox>
        <div className="flex flex-row gap-4">
          <ButtonMed color="red" onClick={() => {}}>
            취소
          </ButtonMed>
          <ButtonMed color="green" onClick={() => {}}>
            저장
          </ButtonMed>
        </div>
      </div>
    </>
  );
}
