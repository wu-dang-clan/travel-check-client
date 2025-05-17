import { createFileRoute } from "@tanstack/react-router";
import { ImageCharacter, LoadingBar, PixelBox } from "@travel-check-client/ui";

export const Route = createFileRoute("/loading")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-4">
      <PixelBox>
        <div className="flex h-[91vh] flex-col items-center justify-center gap-20 align-bottom">
          <ImageCharacter />
          <LoadingBar />
        </div>
      </PixelBox>
    </div>
  );
}
