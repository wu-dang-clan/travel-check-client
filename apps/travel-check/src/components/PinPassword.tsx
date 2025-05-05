import { PixelBox, InputPin, NumButton } from "@travel-check-client/ui";

interface PinPasswordProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PinPassword({ value, onChange }: PinPasswordProps) {
  const handleNumClick = (num: string) => {
    if (value.length >= 6) return; // 6자리 제한
    onChange(value + num);
  };

  return (
    <PixelBox>
      <p className="text-xl">pin 번호 입력</p>
      <InputPin value={value} onChange={onChange} />
      <div className="flex flex-col gap-6">
        <div className="flex w-[20.75rem] flex-row justify-between gap-6">
          <NumButton number="1" onClick={() => handleNumClick("1")} />
          <NumButton number="2" onClick={() => handleNumClick("2")} />
          <NumButton number="3" onClick={() => handleNumClick("3")} />
          <NumButton number="4" onClick={() => handleNumClick("4")} />
          <NumButton number="5" onClick={() => handleNumClick("5")} />
        </div>
        <div className="flex w-[20.75rem] flex-row justify-between gap-6">
          <NumButton number="6" onClick={() => handleNumClick("6")} />
          <NumButton number="7" onClick={() => handleNumClick("7")} />
          <NumButton number="8" onClick={() => handleNumClick("8")} />
          <NumButton number="9" onClick={() => handleNumClick("9")} />
          <NumButton number="0" onClick={() => handleNumClick("0")} />
        </div>
      </div>
    </PixelBox>
  );
}
