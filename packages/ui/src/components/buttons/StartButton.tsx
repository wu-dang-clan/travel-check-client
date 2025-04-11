import { useState } from "react";
import startBtn from "../../assets/buttons/StartBtn.svg";
import startBtnPress from "../../assets/buttons/StartBtnPress.svg";

interface StartButtonProps {
  onClick?: () => void;
}

export default function StartButton({ onClick }: StartButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div>
      <button
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        <img src={isPressed ? startBtnPress : startBtn} alt="Start" />
      </button>
    </div>
  );
}
