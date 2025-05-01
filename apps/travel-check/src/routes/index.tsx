// 시작화면
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { StartButton, ImageTypoLogo, ImageCharacter } from "@travel-check-client/ui";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

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
        <StartButton onClick={() => navigate({ to: "/create" })} />
      </div>
    </div>
  );
}
