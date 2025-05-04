import BoxStart from "../../assets/boxs/BoxStart.svg";
import BoxCenter from "../../assets/boxs/BoxCenter.svg";
import BoxEnd from "../../assets/boxs/BoxEnd.svg";

interface PixelBoxProps {
  children: React.ReactNode;
}

export default function PixelBox({ children }: PixelBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={BoxStart} alt="box start" className="w-full" />
      <div className="w-full border-x-4 border-x-[#902F00]">
        <div className="w-full border-x-8 border-x-[#FF8C00]">
          <div className="w-full border-x-4 border-x-[#BF4600] bg-[#FFBA7C]">
            <div className="flex flex-col items-center p-4">{children}</div>
          </div>
        </div>
      </div>
      <img src={BoxEnd} alt="box end" className="w-full" />
    </div>
  );
}
