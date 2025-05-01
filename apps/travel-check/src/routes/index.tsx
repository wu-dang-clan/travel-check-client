// 시작화면
import { createFileRoute } from "@tanstack/react-router";
import { StartButton, ImageTypoLogo, ImageCharacter } from "@travel-check-client/ui";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <p className="mb-4 text-xs text-white"> 쉽고 빠른 여행 체크리스트 공유</p>
      <div className="mb-8">
        <ImageTypoLogo />
      </div>
      <div className="mb-36">
        <ImageCharacter />
      </div>

      <div className="">
        <StartButton onClick={() => alert("여행췍 시작")} />
      </div>
    </div>
  );
}
