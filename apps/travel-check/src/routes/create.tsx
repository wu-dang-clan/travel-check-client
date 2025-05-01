import { createFileRoute } from "@tanstack/react-router";
import { InputText, TitleBox, ButtonMed, InputPin, NumButton } from "@travel-check-client/ui";
import { useState, useRef } from "react";

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
    <div className="flex flex-col items-center justify-center pt-4">
      <TitleBox title="타이틀 " />
      <div className="bg-[#FFBA7C] p-8">
        <InputText onChange={() => {}} placeholder="입력하세요" />
        <div className="flex flex-row justify-between">
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
        <div className="flex flex-row justify-between">
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
      <div className="bg-[#FFBA7C] p-8">
        <InputPin value={pinValue} onChange={setPinValue} />
        <div className="flex flex-row justify-between">
          <NumButton number="1" onClick={() => handleNumClick("1")} />
          <NumButton number="2" onClick={() => handleNumClick("2")} />
          <NumButton number="3" onClick={() => handleNumClick("3")} />
          <NumButton number="4" onClick={() => handleNumClick("4")} />
          <NumButton number="5" onClick={() => handleNumClick("5")} />
        </div>
        <div className="flex flex-row justify-between">
          <NumButton number="6" onClick={() => handleNumClick("6")} />
          <NumButton number="7" onClick={() => handleNumClick("7")} />
          <NumButton number="8" onClick={() => handleNumClick("8")} />
          <NumButton number="9" onClick={() => handleNumClick("9")} />
          <NumButton number="0" onClick={() => handleNumClick("0")} />
        </div>
      </div>
    </div>
  );
}
