const WhyArtsClubs = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50" id="why">
      <div className="relative z-[1] container mx-auto px-4">
        <img
          src="/img102.png"
          alt="Decorative asset 2"
          className="absolute -top-20 right-2 w-20 h-30 opacity-80 md:right-32 md:w-40 md:h-50 md:-top-26 lg:right-48 lg:w-48 lg:h-68 xl:right-80 2xl:right-96 z-[-1]"
        />
        <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-4 md:mt-0 gap-12">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              왜 문화예술클럽인가요?
            </h2>
            <div className="text-2xl md:text-3xl font-bold text-primary mb-8 ">
              "일과 삶의 균형, 예술로 찾다!"
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border-l-4 border-purple-500 mb-8 max-w-prose mx-auto">
              <p className="italic text-neutral-600">
                "문화예술에 대한 관심은 높지만 시간과 비용 부담으로 망설였던
                직장인들에게 문화예술클럽은 최고의 기회입니다. 정부와 기업이
                함께 교육비를 지원하고, 전문 강사가 직접 찾아가는 맞춤형
                예술교육을 통해 일상에 새로운 활력을 불어넣으세요."
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
              src="/resize_R0057467.jpeg"
              alt="시범사업 이미지1"
              className="w-full h-[18rem] rounded-xl shadow-soft object-cover max-w-xl mx-auto"
            />
              <img
              src="/resize_R0056345.jpeg"
              alt="시범사업 이미지1"
              className="w-full h-[18rem] rounded-xl shadow-soft object-cover max-w-xl mx-auto"
            />
              <img
                src="/make.jpg"
                alt="직장인들이 업무 후 동료들과 함께 웃으며 예술 활동을 하는 모습"
                className="w-full h-[18rem] rounded-xl shadow-soft object-cover max-w-xl mx-auto"
              />
            </div>

            {/* <h3 className="font-bold text-lg mb-4">직장인들이 문화예술을 통해 얻는 긍정적 효과:</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🎨</span>
                <span>스트레스 해소 및 정서적 안정감 증진</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🤝</span>
                <span>동료들과의 유대감 강화 및 소통 활성화</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <span>창의력 및 문제 해결 능력 향상</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">💪</span>
                <span>삶의 만족도 및 직무 몰입도 증가</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">🌟</span>
                <span>건강한 여가 문화 형성</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArtsClubs;
