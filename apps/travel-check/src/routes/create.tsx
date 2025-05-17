import { createFileRoute } from "@tanstack/react-router";
import { InputText, TitleBox, ButtonMed, PixelBox, ButtonLg } from "@travel-check-client/ui";
import { useState, useRef } from "react";
import PinPassword from "../components/PinPassword";

type TravelType = "domestic" | "overseas" | null;

export const Route = createFileRoute("/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedType, setSelectedType] = useState<TravelType>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [pinValue, setPinValue] = useState<string>("");

  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleStartDateClick = () => {
    startDateRef.current?.click();
  };

  const handleEndDateClick = () => {
    endDateRef.current?.click();
  };

  const handleNumClick = (num: string) => {
    if (pinValue.length >= 6) return; // 6자리 제한
    setPinValue((prev) => prev + num);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-4">
      <TitleBox title="여행 생성" />
      <PixelBox>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-2 w-full justify-start text-base">여행 이름 입력</p>
          <InputText onChange={() => {}} placeholder="입력하세요" />
          <p className="mt-6 mb-2 w-full justify-start text-base">여행 종류</p>
          <div className="flex w-full flex-row justify-between">
            <ButtonMed
              color="yellow"
              isPressing={selectedType === "domestic" ? true : false}
              onClick={() => setSelectedType("domestic")}
            >
              국내 여행
            </ButtonMed>
            <ButtonMed
              color="yellow"
              isPressing={selectedType === "overseas" ? true : false}
              onClick={() => setSelectedType("overseas")}
            >
              해외 여행
            </ButtonMed>
          </div>
          <p className="mt-6 mb-2 w-full justify-start text-base">여행 일정</p>
          <div className="flex w-full flex-row justify-between">
            <div>
              <ButtonMed color="blue" onClick={handleStartDateClick}>
                <input
                  ref={startDateRef}
                  type="date"
                  className=""
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </ButtonMed>
            </div>
            <div>
              <ButtonMed color="blue" onClick={handleEndDateClick}>
                <input
                  ref={endDateRef}
                  type="date"
                  className=""
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </ButtonMed>
            </div>
          </div>
        </div>
      </PixelBox>
      <PinPassword value={pinValue} onChange={setPinValue} />
      <ButtonLg color="green" onClick={() => console.log("여행 생성")}>
        리스트 생성
      </ButtonLg>
    </div>
  );
}
