const SupportOverview = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
          지원내용
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 rounded-xl p-4 shadow-soft transition hover:bg-primary/10 hover:shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <div className="bg-[#FF6B6B] text-white w-8 h-8 flex items-center justify-center rounded-lg mr-3">
                1
              </div>
              맞춤형 예술 교육 프로그램 지원
            </h3>
            <p className="text-neutral-600 mb-4">
              기업과 동아리의 특성 및 희망 분야를 고려하여 전문 예술 강사와 함께
              맞춤형 문화예술 교육 프로그램을 기획하고 운영할 수 있도록
              지원합니다.
            </p>
            <div className="grid grid-cols-[2fr_1fr] gap-4 mt-2">
              <div className="bg-white p-1 rounded-lg">
                <p className="text-primary font-medium mb-1">[활동 분야별]</p>
                <p className="text-neutral-600">
                  음악, 미술, 공예, 무용, 문학, 연극, 영화, 사진 등
                </p>
              </div>
              <img
                src="/자산7.png"
                alt="자산7"
                className="w-full h-full object-contain rounded-lg -scale-x-100 max-w-md "
              />
            </div>
          </div>

          <div className="bg-white border-2 rounded-xl p-4 shadow-soft transition hover:bg-primary/10 hover:shadow-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <div className="bg-[#FF6B6B] text-white w-8 h-8 flex items-center justify-center rounded-lg mr-3">
                2
              </div>
              교육 운영 경비 지원
            </h3>
            <p className="text-neutral-600 mb-4">
              동아리 운영에 필요한 교육비의 일부(30%)를 지원하여 직장인들이 부담
              없이 다채로운 문화예술 활동을 경험하고 즐길 수 있도록 돕습니다.
            </p>
            <div className="grid grid-cols-[2fr_1fr] gap-4 mt-2">
              <div className="bg-white p-1 rounded-lg">
                <p className="text-primary font-medium mb-1">[지원 규모]</p>
                <p className="text-neutral-600">
                  동아리당 교육비의 30%,
                  <br />
                  최소 105만원 ~ 최대 495만원
                </p>
              </div>
              <img
                src="/자산18.png"
                alt="18"
                className="w-full h-full object-contain rounded-lg max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOverview;
