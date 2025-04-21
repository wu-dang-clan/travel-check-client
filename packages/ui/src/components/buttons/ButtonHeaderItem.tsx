import { useState } from "react";
import ButtonPeople from "../../assets/buttons/ButtonPeople.svg";
import ButtonPeoplePress from "../../assets/buttons/ButtonPeoplePress.svg";
import ButtonHome from "../../assets/buttons/ButtonHome.svg";
import ButtonHomePress from "../../assets/buttons/ButtonHomePress.svg";
import ButtonDelete from "../../assets/buttons/ButtonDelete.svg";
import ButtonDeletePress from "../../assets/buttons/ButtonDeletePress.svg";

type ButtonCategory = "home" | "people" | "delete";

interface ButtonHeaderItemProps {
  item: ButtonCategory;
  onClick?: () => void;
}

const buttonImages = {
  people: {
    default: ButtonPeople,
    pressed: ButtonPeoplePress,
  },
  home: {
    default: ButtonHome,
    pressed: ButtonHomePress,
  },
  delete: {
    default: ButtonDelete,
    pressed: ButtonDeletePress,
  },
};

export default function ButtonHeaderItem({ item, onClick }: ButtonHeaderItemProps) {
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
          src={isPressed ? buttonImages[item].pressed : buttonImages[item].default}
          alt={`${item} button`}
        />
      </button>
    </div>
  );
}
