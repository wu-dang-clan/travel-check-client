interface InputPinProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function InputPin({ value = "", onChange }: InputPinProps) {
  const PIN_LENGTH = 6;
  // value를 숫자만 추출하고 6자리로 제한
  const sanitizedValue = value.replace(/\D/g, "").slice(0, PIN_LENGTH);
  const digits = sanitizedValue.padEnd(PIN_LENGTH, " ").split("");

  return (
    <div className="w-full">
      <div className="flex justify-center gap-4">
        {digits.map((digit, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* 숫자 표시 영역 */}
            <div className="font-dungGeunMo mb-2 h-8 text-[1.75rem]">
              {digit !== " " ? digit : ""}
            </div>
            {/* 밑줄 */}
            <div className="h-1 w-8 bg-black" />
          </div>
        ))}
      </div>
      {/* 숨겨진 입력 필드 */}
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        className="sr-only"
        value={sanitizedValue}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value.replace(/\D/g, "").slice(0, PIN_LENGTH));
          }
        }}
        maxLength={PIN_LENGTH}
        aria-label="PIN 번호 입력"
      />
    </div>
  );
}
