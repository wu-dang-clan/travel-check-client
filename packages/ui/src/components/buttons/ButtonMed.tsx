import { useState } from "react";
import ButtonMedGreen from "../../assets/buttons/ButtonMedGreen.svg";
import ButtonMedGreenPress from "../../assets/buttons/ButtonMedGreenPress.svg";
import ButtonMedRed from "../../assets/buttons/ButtonMedRed.svg";
import ButtonMedRedPress from "../../assets/buttons/ButtonMedRedPress.svg";
import ButtonMedYellow from "../../assets/buttons/ButtonMedYellow.svg";
import ButtonMedYellowPress from "../../assets/buttons/ButtonMedYellowPress.svg";
import ButtonMedBlue from "../../assets/buttons/ButtonMedBlue.svg";
import ButtonMedBluePress from "../../assets/buttons/ButtonMedBluePress.svg";
import ButtonMedWhite from "../../assets/buttons/ButtonMedWhite.svg";
import ButtonMedWhitePress from "../../assets/buttons/ButtonMedWhitePress.svg";

type ButtonColor = "green" | "red" | "yellow" | "blue" | "white";

interface ButtonMedProps {
  color: ButtonColor;
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonImages = {
  green: {
    default: ButtonMedGreen,
    pressed: ButtonMedGreenPress,
  },
  red: {
    default: ButtonMedRed,
    pressed: ButtonMedRedPress,
  },
  yellow: {
    default: ButtonMedYellow,
    pressed: ButtonMedYellowPress,
  },
  blue: {
    default: ButtonMedBlue,
    pressed: ButtonMedBluePress,
  },
  white: {
    default: ButtonMedWhite,
    pressed: ButtonMedWhitePress,
  },
};

export default function ButtonMed({ color, children, onClick }: ButtonMedProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="relative">
      <button
        className="relative"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        <img
          src={isPressed ? buttonImages[color].pressed : buttonImages[color].default}
          alt={`${color} button`}
        />
        <p
          className={`font-dungGeunMo absolute top-1/2 left-1/2 -translate-x-1/2 ${isPressed ? "translate-y-[-45%]" : "translate-y-[-60%]"} `}
        >
          {children}
        </p>
      </button>
    </div>
  );
}
