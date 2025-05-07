import { useState } from "react";
import ButtonEdit from "../../assets/buttons/ButtonEdit.svg";
import ButtonEditPress from "../../assets/buttons/ButtonEditPress.svg";
import ButtonSelect from "../../assets/buttons/ButtonSelect.svg";
import ButtonSelectPress from "../../assets/buttons/ButtonSelectPress.svg";
import ButtonCancel from "../../assets/buttons/ButtonCancel.svg";
import ButtonCancelPress from "../../assets/buttons/ButtonCancelPress.svg";
import ButtonDone from "../../assets/buttons/ButtonDone.svg";
import ButtonDonePress from "../../assets/buttons/ButtonDonePress.svg";

type ButtonCategory = "edit" | "select" | "cancel" | "done";

interface ButtonMedProps {
  item: ButtonCategory;
  onClick?: () => void;
}

const buttonImages = {
  edit: {
    default: ButtonEdit,
    pressed: ButtonEditPress,
  },
  select: {
    default: ButtonSelect,
    pressed: ButtonSelectPress,
  },
  cancel: {
    default: ButtonCancel,
    pressed: ButtonCancelPress,
  },
  done: {
    default: ButtonDone,
    pressed: ButtonDonePress,
  },
};

export default function ButtonSm({ item, onClick }: ButtonMedProps) {
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
          src={isPressed ? buttonImages[item].pressed : buttonImages[item].default}
          alt={`${item} button`}
        />
      </button>
    </div>
  );
}
