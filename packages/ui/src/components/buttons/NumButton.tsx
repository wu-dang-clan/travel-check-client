import { useState } from "react";

import NumButton1 from "../../assets/buttons/NumButton1.svg";
import NumButton1Press from "../../assets/buttons/NumButton1Press.svg";
import NumButton2 from "../../assets/buttons/NumButton2.svg";
import NumButton2Press from "../../assets/buttons/NumButton2Press.svg";
import NumButton3 from "../../assets/buttons/NumButton3.svg";
import NumButton3Press from "../../assets/buttons/NumButton3Press.svg";
import NumButton4 from "../../assets/buttons/NumButton4.svg";
import NumButton4Press from "../../assets/buttons/NumButton4Press.svg";
import NumButton5 from "../../assets/buttons/NumButton5.svg";
import NumButton5Press from "../../assets/buttons/NumButton5Press.svg";
import NumButton6 from "../../assets/buttons/NumButton6.svg";
import NumButton6Press from "../../assets/buttons/NumButton6Press.svg";
import NumButton7 from "../../assets/buttons/NumButton7.svg";
import NumButton7Press from "../../assets/buttons/NumButton7Press.svg";
import NumButton8 from "../../assets/buttons/NumButton8.svg";
import NumButton8Press from "../../assets/buttons/NumButton8Press.svg";
import NumButton9 from "../../assets/buttons/NumButton9.svg";
import NumButton9Press from "../../assets/buttons/NumButton9Press.svg";
import NumButton0 from "../../assets/buttons/NumButton0.svg";
import NumButton0Press from "../../assets/buttons/NumButton0Press.svg";

type Number = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";

interface NumButtonProps {
  number: Number;
  onClick?: () => void;
}

const buttonImages = {
  "1": {
    default: NumButton1,
    pressed: NumButton1Press,
  },
  "2": {
    default: NumButton2,
    pressed: NumButton2Press,
  },
  "3": {
    default: NumButton3,
    pressed: NumButton3Press,
  },
  "4": {
    default: NumButton4,
    pressed: NumButton4Press,
  },
  "5": {
    default: NumButton5,
    pressed: NumButton5Press,
  },
  "6": {
    default: NumButton6,
    pressed: NumButton6Press,
  },
  "7": {
    default: NumButton7,
    pressed: NumButton7Press,
  },
  "8": {
    default: NumButton8,
    pressed: NumButton8Press,
  },
  "9": {
    default: NumButton9,
    pressed: NumButton9Press,
  },
  "0": {
    default: NumButton0,
    pressed: NumButton0Press,
  },
};

export default function NumButton({ number, onClick }: NumButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div>
      <button
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        <img
          src={isPressed ? buttonImages[number].pressed : buttonImages[number].default}
          alt={`${number} button`}
        />
      </button>
    </div>
  );
}
