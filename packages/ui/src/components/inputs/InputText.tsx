import Input from "../../assets/inputs/Input.svg";

interface InputTextProps {
  onClick?: () => void;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
}

export default function InputText({ placeholder, onChange }: InputTextProps) {
  return (
    <div className="relative w-full">
      <img src={Input} alt="Input" className=" " />
      <input
        placeholder={placeholder}
        className="font-dungGeunMo absolute top-1/6 left-4 w-auto border-none text-xl outline-none focus:ring-0"
        onChange={onChange}
        maxLength={20}
      />
    </div>
  );
}
