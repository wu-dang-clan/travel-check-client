import Cloud from "../assets/background/Cloud.svg";
import Land from "../assets/background/Land.svg";

export default function Background() {
  return (
    <div className="h-screen bg-linear-to-t from-[#00DAEB] to-[#004185]">
      <img src={Cloud} alt="cloud" className="absolute top-0 left-0 mt-16 w-full" />
      <img
        src={Land}
        alt="land"
        className="absolute bottom-0 left-1/2 h-auto w-4/5 -translate-x-1/2 transform"
      />
    </div>
  );
}
