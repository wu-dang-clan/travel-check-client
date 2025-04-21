import { useState } from "react";
import ButtonLgGreen from "../../assets/buttons/ButtonLgGreen.svg";
import ButtonLgGreenPress from "../../assets/buttons/ButtonLgGreenPress.svg";
import ButtonLgRed from "../../assets/buttons/ButtonLgRed.svg";
import ButtonLgRedPress from "../../assets/buttons/ButtonLgRedPress.svg";
import ButtonLgYellow from "../../assets/buttons/ButtonLgYellow.svg";
import ButtonLgYellowPress from "../../assets/buttons/ButtonLgYellowPress.svg";
import ButtonLgWhite from "../../assets/buttons/ButtonLgWhite.svg";
import ButtonLgWhitePress from "../../assets/buttons/ButtonLgWhitePress.svg";

type ButtonColor = "green" | "red" | "yellow" | "white";

interface ButtonLgProps {
  color: ButtonColor;
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonImages = {
  green: {
    default: ButtonLgGreen,
    pressed: ButtonLgGreenPress,
  },
  red: {
    default: ButtonLgRed,
    pressed: ButtonLgRedPress,
  },
  yellow: {
    default: ButtonLgYellow,
    pressed: ButtonLgYellowPress,
  },
  white: {
    default: ButtonLgWhite,
    pressed: ButtonLgWhitePress,
  },
};

export default function ButtonLg({ color, children, onClick }: ButtonLgProps) {
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
