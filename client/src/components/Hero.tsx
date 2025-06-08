
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/music.jpg",
    "/hero.jpg", 
    "/hero-6.jpg",
    "/make.jpg",
    "/cul.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      id="intro"
    >
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0 opacity-35 bg-cover bg-center"
        aria-hidden="true"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="직장인 활동 모습"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="flex justify-center item-center container mx-auto px-4 py-16 md:py-24 relative z-10 ">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
            2025 직장인 <span className="text-primary">문화예술클럽</span> 지원사업
            <br />
          </h1>
          <p className="text-white font-bold text-lg md:text-xl mb-8 max-w-2xl">
            나의 아트메이트 찾기
            <br />
          </p>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            한국문화예술교육진흥원은 여러분의 직장 내 {" "}
            <span className="font-bold">
              문화예술클럽 활동
            </span>
            을 지원합니다.
            <br />
            문화예술클럽 지원사업은 직장인들이 일상에서 쉽게 문화예술을 경험하고 삶의 질을 높일 수 있도록,{" "}
            <span className="font-bold">
              문화예술 관련 동아리 교육비와 전문강사
            </span>
            를 지원하는 프로그램입니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              variant="default"
              className="border-2 border-white bg-primary hover:border-primary text-white hover:bg-primary/60 hover:text-white shadow-soft"
            >
              <a href="#process">참여 신청하기</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-transparent hover:bg-primary/60 border-2 border-white text-white hover:border-primary hover:text-white shadow-soft"
            >
              <a href="#contact">문의하기</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
