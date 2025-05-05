import { createFileRoute, useParams } from "@tanstack/react-router";
import { ButtonLg, InputText, PixelBox, TitleBox } from "@travel-check-client/ui";
import PinPassword from "../../components/PinPassword";
import { useState } from "react";

export const Route = createFileRoute("/$epicId/join")({
  component: RouteComponent,
  parseParams: (params: { epicId: string }) => {
    return {
      epicId: params.epicId,
    };
  },
});

function RouteComponent() {
  const { epicId } = useParams({ from: Route.id });
  const [pinValue, setPinValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const handleJoin = () => {
    console.log("PIN 번호:", pinValue);
    console.log("사용자 이름:", userName);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-4">
      <TitleBox title="여행이름" />
      <PixelBox>참여자 명단</PixelBox>

      <PinPassword value={pinValue} onChange={setPinValue} />
      <PixelBox>
        <InputText
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
      </PixelBox>
      <ButtonLg color="green" onClick={handleJoin}>
        입장하기
      </ButtonLg>
    </div>
  );
}
