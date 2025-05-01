import TitleBoxBg from "../../assets/boxs/TitleBoxBg.svg";

export interface TitleBoxProps {
  title: string;
}

export default function TitleBox({ title }: TitleBoxProps) {
  return (
    <div className="relative">
      <img src={TitleBoxBg} alt="titleBox" className="w-full" />
      <p className="font-dungGeunMo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl">
        {title}
      </p>
    </div>
  );
}
