import { createFileRoute } from "@tanstack/react-router";
import { ImageCharacter, PixelBox } from "@travel-check-client/ui";

export const Route = createFileRoute("/loading")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-[48rem] flex-col items-center justify-center gap-4 pt-4">
      <PixelBox>
        <ImageCharacter />
      </PixelBox>
    </div>
  );
}
