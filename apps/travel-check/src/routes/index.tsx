import { createFileRoute } from "@tanstack/react-router";
import { StartButton } from "@travel-check-client/ui";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-dungGeunMo text-2xl">여행췍</p>
      <div className="">
        <StartButton onClick={() => alert("여행췍 시작")} />
      </div>
    </div>
  );
}
