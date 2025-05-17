import { useEffect, useState } from "react";
import loading0 from "../../assets/loadings/loading0.svg";
import loading1 from "../../assets/loadings/loading1.svg";
import loading2 from "../../assets/loadings/loading2.svg";
import loading3 from "../../assets/loadings/loading3.svg";
import loading4 from "../../assets/loadings/loading4.svg";
import loading5 from "../../assets/loadings/loading5.svg";
import loading6 from "../../assets/loadings/loading6.svg";
import loading7 from "../../assets/loadings/loading7.svg";
import loading8 from "../../assets/loadings/loading8.svg";
import loading9 from "../../assets/loadings/loading9.svg";
import loading10 from "../../assets/loadings/loading10.svg";

export default function LoadingBar() {
  const loadingImages = [
    loading0,
    loading1,
    loading2,
    loading3,
    loading4,
    loading5,
    loading6,
    loading7,
    loading8,
    loading9,
    loading10,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === loadingImages.length - 1 ? 0 : prev + 1));
    }, 200); // 0.2초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <div>
      <img src={loadingImages[currentIndex]} alt="loading" />
    </div>
  );
}
