import { useState } from "react";
import InputAddListBg from "../../assets/inputs/InputAddListBg.svg";
import InputAddListButton from "../../assets/inputs/InputAddListButton.svg";
import InputAddListButtonPress from "../../assets/inputs/InputAddListButtonPress.svg";

interface InputAddListProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  type?: string;
}

export default function InputAddList({ placeholder, onChange, onClick }: InputAddListProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="relative w-full px-4">
      <img src={InputAddListBg} alt="InputAddList" />
      <input
        placeholder={placeholder}
        className="font-dungGeunMo absolute top-1/4 left-8 border-none text-xl outline-none focus:ring-0"
        onChange={onChange}
        maxLength={20}
      />
      <button
        className="font-dungGeunMo absolute"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        <img
          src={isPressed ? InputAddListButtonPress : InputAddListButton}
          alt="InputAddListButton"
          className="translate-x-[467%] translate-y-[-127%]"
        />
      </button>
    </div>
  );
}
